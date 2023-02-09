import { gql, useApolloClient, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      id
      title
    }
  }
`;

function Home() {
  const { data, loading, error } = useQuery(ALL_MOVIES);
  console.log(data);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <h1>Could not fetch :(</h1>;
  }
  return (
    <ul>
      <h1>Movies</h1>
      {data.allMovies.map((movie: any) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}

export default Home;
