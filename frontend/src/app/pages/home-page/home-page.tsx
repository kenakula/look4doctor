import { axiosInstance, getSanityDataset } from 'app/store/assets';
import { useGetAllPostsQuery } from 'app/store/posts-api/posts.api';
import { useEffect, useState } from 'react';

export const HomePage = (): JSX.Element => {
  const { data, isLoading } = useGetAllPostsQuery();
  const [title, setTitle] = useState('errored fetch');

  useEffect(() => {
    if (data) {
      setTitle(data.result.title);
    }
  }, [data]);

  useEffect(() => {
    const res = axiosInstance.get(getSanityDataset(), {
      params: { query: '*[_type=="globalSettings"][0]{title}' },
    });
    console.log('res:', res);
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return <h1>{title}</h1>;
};
