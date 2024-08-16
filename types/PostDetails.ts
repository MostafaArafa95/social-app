import { User } from "./User"
export type Comment = {
    body: string,
    id: number,
    name: string
}
export type PostDetails = {
    post: {
        id: number,
        title: string,
        body: string,
        comments: {
            nodes: Comment[],
            totalCount: number

        },
        user: User
    }
}