import React, { useEffect } from 'react';
// import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { SavedCounterSelector } from '../../../selector/HomepageSelector';
import { updateSavedCount } from '../../../store/actions/whilelist-action';
// import { GetTestApi, PostTestApi } from '../../../utilis/services/home/home';
import  './whitelist.css';

const WhiteList: React.FC<any> = () => {

    const dispatch = useDispatch();
    const { savedCount } = useSelector(SavedCounterSelector)

    const incrementCount = () => {
        dispatch(updateSavedCount(savedCount + 1))
    }
    // const { data: posts, isLoading } = GetTestApi()
    // const { data: PostTest, mutateAsync: postTestApi } = PostTestApi()

    // const queryClient = useQueryClient()

    // useEffect(() => {
    //     console.log("isLoading=>", isLoading, posts);
    // }, [posts, isLoading])

    // const createPost = () => {
    //     postTestApi({ test: "sdfds" })
    //         .then(() => {
    //             queryClient.invalidateQueries('posts')
    //         })
    // }

    return (
        <div>
            <label>Whitelist Count: {savedCount} </label>
            <button onClick={() => incrementCount()}>Increment Whitelist</button>
            {/* {
                posts?.length ? posts?.map((post: any, index: number) => (
                    <div className="post" key={index}>
                        <h3>{post?.title}</h3>
                        <p>{post?.body}</p>
                    </div>
                ))
                    : null
            } */}
        </div>
    );
};


export default WhiteList