import { useQuery, gql } from '@apollo/client';
const GET_POSTS = gql`
  query	{
  posts{
    nodes{
      id,
      title,
      body,
      user{
        id,
        name
      },
      comments{
        totalCount
      }
      
    }
  }
}
`;
export const useGetPosts = () => {
    const result = useQuery(GET_POSTS);
    return result
}