import axios from 'axios';
import dotenv from "dotenv"
dotenv.config();

interface GitUser {
    id: number,
    name: string
}

interface AccessTokenResponse {
    access_token: string
}

interface UserResponse {
    id: number
    name: string
}

const TOKEN_URL = "https://api.github.com/login/oauth/access_token"
const USER_URL = "https://api.github.com/users"


export async function getGitHubUser (code : string){
    const token = await getAccessToken(code)
    return getUser(token);
}

async function getAccessToken (code : string){
    const res = await axios.post<AccessTokenResponse>(
        TOKEN_URL,
        {
            client_id : process.env.GITHUB_CLIENT_ID,
            client_secret : process.env.GITHUB_CLIENT_SECRET,
            code
        },
        {
            headers: {
                Accept: 'application/json'
            }
        }
    )
    return res.data.access_token
}

async function getUser (token : string){
    const res = await axios.get<UserResponse>(
        USER_URL, 
        {

            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    return res.data as GitUser
}