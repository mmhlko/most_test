export type TUser = {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
    token: string
}

export type TUserResponse = {
    token: string
} & TUser