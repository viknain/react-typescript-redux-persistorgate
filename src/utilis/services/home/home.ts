import useAxios from "../../useAxios"
import { useMutation, useQuery, useQueryClient } from 'react-query'

export const GetTestApi = () => {
    const callApi = useAxios()
    return useQuery('posts',
        () => callApi({ url: "posts", method: "get" }),
        {
            cacheTime: 4126
        }
    )
}

export const PostTestApi = () => {
    const queryClient = useQueryClient()
    const callApi = useAxios()
    return useMutation((data: any) => callApi({ url: "posts", method: "post", data: { title: "test", } }),{
        onSuccess:() => {
            // Invalidate and refetch
            queryClient.invalidateQueries('posts')
          }
    })
}