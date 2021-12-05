import {useQuery} from 'react-query'
import axios from 'axios'

const fetchSeuperHero = ({queryKey}: any) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const useSuperHeroData = (heroId: any) => {
  return useQuery(
    ['super-hero', heroId],
    fetchSeuperHero
  )
}