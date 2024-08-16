import { useQuery, gql } from '@apollo/client';
import { Post } from '../../types';
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

type GetPostsResponse = {
  posts: {
    nodes: Post[]
  }
}
export const useGetPosts = () => {
  const result = useQuery<GetPostsResponse>(GET_POSTS);
  return result
}