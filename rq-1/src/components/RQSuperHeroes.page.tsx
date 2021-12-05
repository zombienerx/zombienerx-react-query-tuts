import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
  const onSuccess = (data: any) => {
    console.log("Perform sideeffect after data fetching", data);
  }

  const onError = (error: any) => {
    console.log("Perform sideeffect after encountering error", error);
  }

  // const {isLoading, data, isError, error}
  const {isLoading, data, isError, isFetching, refetch} = useSuperHeroesData(onSuccess, onError)

  console.log({isLoading, isFetching});

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
      {/* {
        data?.data.map((hero:any) => {
          return <div key={hero.name}>{hero.name}</div>
        })
      } */}
      {
        data.map((heroName: string) => {
          return <div key={heroName}>{heroName}</div>
        })
      }
    </>
  )
}
