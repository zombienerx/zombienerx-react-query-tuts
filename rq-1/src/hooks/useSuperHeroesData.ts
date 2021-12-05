import {useQuery} from 'react-query';
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
}

export default interface HeroData {
  id?: number,
  name: string,
  alterEgo: string,
}

export const useSuperHeroesData = (onSuccess: any, onError: any) => {
  return useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      onSuccess,
      onError,
      // select: (data) => {
      //   // transform or select a part of data returned by query fn
      //   const superHeroNames = data.data.map((hero:HeroData) => hero.name);
      //   return superHeroNames;
      // }
    }
  )
}