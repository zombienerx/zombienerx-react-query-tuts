import { useQuery } from "react-query"
import axios from 'axios'

const fetchUsersByEmail = (email: string) => {
  return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelId = (channelId: string) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`)
}

export const DependentQueriesPage = ({email}: any) => {
  const {data: user} = useQuery( ['user', email], () => fetchUsersByEmail(email))
  const channelId = user?.data.channelId

  useQuery( ['courses', channelId], () => fetchCoursesByChannelId(channelId), {
    enabled: !!channelId // converts value to boolean
  })

  return (
    <h2>DependentQueries Page</h2>
  )
}
