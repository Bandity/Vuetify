
import cookieParser from "cookie-parser";
import cors from "cors";
import express , {Request, Response}from "express";
import { databaseClient } from "./database/database";
import { getGitHubUser } from "./controllers/githubAuth";
import { buildTokens, setTokens } from "./controllers/tokenGen";
import { createUser, getUserByGitHubId } from "./services/userServices";
import { getVirus, getVirusById } from "./services/virusService";

const app = express();


app.use(cors({credentials:true, origin: process.env.CLIENT_URL}));
app.use(cookieParser())
app.get("/")
app.get("/github", async (req, res) => {
    const {code} = req.query

    const gitHubUser = await getGitHubUser(code as string) 
    let user = await getUserByGitHubId(gitHubUser.id);
    if(!user) {
        user= await createUser(gitHubUser.name, gitHubUser.id); 
    }
    const {accessToken, refreshToken} = buildTokens(user);
    setTokens(res, accessToken, refreshToken);

    res.redirect(`${process.env.CLIENT_URL}/virus`)
})

app.get('/virus', async (req, res) => {

    return res.status(200).send(await getVirus());
})
/*
app.post("/refresh", async (req: Request, res: Response) => {
    try{
        const current = verifyRefreshToken(req.cookies[Cookies.refreshToken]);
        const user = await getUserById(current.userId);
        if(!user){
            throw "User not found";
        }

        const {accessToken, refreshToken} = refreshTokens(current,user.tokenVersion);
        setTokens(res, accessToken, refreshToken);
    }
    catch (err) {
        clearTokens(res);
    }

    res.end();
});*/

app.post("/createVirus", async (req, res) => {
    
})

async function main() {
    await databaseClient.connect();
    app.listen(3000, ()=>{
        console.log("Server started");
    });
}
main();