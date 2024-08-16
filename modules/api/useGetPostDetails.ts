import { useQuery, gql } from '@apollo/client';
import { PostDetails } from '../../types';
const GET_POST_DETAILS = gql`query	($postId: ID!){
  post(id: $postId){
    title,
    body,
    user{
        id,
        name
    },
    comments{
      totalCount,
      nodes{
        id,
        body,
        name
        
      }
    }
  }
  
}`;


export const useGetPostDetails = (postId: number) => {
  const result = useQuery<PostDetails>(GET_POST_DETAILS, {
    variables: {
      postId
    }
  });
  return result
}