export interface UserDocument {
    _id: string;
    name: string;
    tokenVersion:number;
    gitHubUserId:string;
}

export interface AccessTokenPayload {
    userId:string;
}

export interface RefreshTokenPayload {
    userId:string;
    version:number
}

export enum Cookies{
    AccessToken = "access",
    RefreshToken = "refresh"
}

export interface VirusDocument {
    _id:string;
    id:string;
    name:string;
    code:string;
}