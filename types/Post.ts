import { User } from "./User"

export type Post = {
    id: number,
    title: string,
    body: string,
    comments: {
        totalCount: number
    },
    user: User
}