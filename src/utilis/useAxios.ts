import { useCallback } from "react";
import axios from "axios";

import { baseURL } from "../config/config";
import { useHistory } from "react-router";
/**
 * Returns a function that can be used to call an API.
 * This function wraps the axios instance.
 */


export default () => { //eslint-disable-line
    let router = useHistory();

    const callApi = useCallback(async ({ headers, ...rest }: any) => {
        try {
            const { data } = await axios({
                headers: {
                    "Content-Type": "application/json",
                    ...headers,
                },
                baseURL,
                ...rest,
                validateStatus: (status) => status >= 200 && status <= 299,
            });
            return data;
        } catch (err: any) {
            if (err && err.response && err.response.status === 401) {
                router.push("/sign-in");
            } else if (err && err.response && err.response.status === 503) {
                router.push("/404");
            }
            throw err;
        }
    }, [router]);

    return callApi;
};