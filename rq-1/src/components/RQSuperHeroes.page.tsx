import {useQuery} from 'react-query';
import axios from 'axios'

export default interface HeroData {
  id?: any | null,
  name: string,
  alterEgo: string,
}

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
  // const {isLoading, data, isError, error}
  const {isLoading, data, isError, isFetching, refetch} = useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      enabled: false
    }
  );



  console.log(isLoading, isFetching);

  if (isLoading || isFetching) {
    return <h2>Loading in progress...</h2>
  }

  if (isError) {
    return <h2>Error while fetching</h2>
    // return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={() => refetch()}>Fetch heroes</button>
      {
        data?.data.map((hero:any) => {
          return <div key={hero.name}>{hero.name}</div>
        })
      }
    </>
  )
}
