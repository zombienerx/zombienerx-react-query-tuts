import {useState, useEffect} from 'react';
import axios from 'axios';

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    axios.get('http://localhost:4000/superheroes').then((res) => {
      setData(res.data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Loding in progress...</h2>
  }

  return (
  <>
    <h2>Super Heroes Page</h2>
    {data.map((hero) => {
      return <div key={hero.name}>{hero.name}</div>
    })}
  </>
  )
}