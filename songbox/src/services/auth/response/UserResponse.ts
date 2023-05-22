export interface UserResponse {
    jwt: string
    user: {
        username: string,
        email: string
    }

}