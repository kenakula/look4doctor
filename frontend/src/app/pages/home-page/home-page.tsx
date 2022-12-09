import { client } from 'app/store/assets';
import { useGetAllPostsQuery } from 'app/store/posts-api/posts.api';
import { useEffect, useState } from 'react';
import groq from 'groq';

export const HomePage = (): JSX.Element => {
  const { data, isLoading } = useGetAllPostsQuery();
  const [title, setTitle] = useState('errored fetch');
  const query = groq`*[_type=="post"]{title, author->{name}}`;

  useEffect(() => {
    if (data) {
      setTitle(data.result.title);
    }
  }, [data]);

  useEffect(() => {
    client.fetch(query).then(res => {
      console.log(res);
    });
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  return <h1>{title}</h1>;
};
