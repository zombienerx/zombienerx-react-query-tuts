import {useQuery} from 'react-query';
import axios from 'axios'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
  // const {isLoading, data, isError, error}
  const {isLoading, data, isError} = useQuery(
    'super-heroes',
    fetchSuperHeroes
  );

  if (isLoading) {
    return <h2>Loading in progress...</h2>
  }

  if (isError) {
    return <h2>Error while fetching</h2>
    // return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      {
        data?.data.map((hero:any) => {
          return <div key={hero.name}>{hero.name}</div>
        })
      }
    </>
  )
}
