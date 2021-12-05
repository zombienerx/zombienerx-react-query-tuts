import { useParams } from "react-router"
import { useSuperHeroData } from "../hooks/useSuperHeroData";

export const RQSuperHeroPage = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  if(isLoading) {
    return <h2>Loading...</h2>
  }

  if(isError) {
    return <h2>Error while fetching hero data</h2>
  }

  console.log(error);


  return (
    <div>
      {data?.data.name} - {data?.data.alterEgo}
    </div>
  )
}
