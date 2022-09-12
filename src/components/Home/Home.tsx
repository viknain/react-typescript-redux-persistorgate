import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { GetTestApi, PostTestApi } from '../../utilis/services/home/home';
import BlackList from './Blacklist/Blacklist';
import './Home.css';
import WhiteList from './Whitelist/Whitelist';

const HomePage: React.FC<any> = () => {

  const { data: posts, isLoading } = GetTestApi()
  const { data: PostTest, mutateAsync: postTestApi } = PostTestApi()

  const queryClient = useQueryClient()

  useEffect(() => {
    console.log("isLoading=>", isLoading, posts);
  }, [posts, isLoading])

  const createPost = () => {
    postTestApi({ test: "sdfds" })
      .then(() => {
        queryClient.invalidateQueries('posts')
      })
  }

  return (
    <div>
      <WhiteList />
      <br/>
      <BlackList />
      <br/>
      <div>
        {
          posts?.length ? posts?.map((post: any, index: number) => (
            <div className="post" key={index}>
              <h3>{post?.title}</h3>
              <p>{post?.body}</p>
            </div>
          ))
            : null
        }
      </div>
    </div>
  );
};


export default HomePage