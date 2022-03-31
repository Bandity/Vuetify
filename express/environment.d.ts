declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MONGODB_URL: string;
            MONGODB_USER: string;
            MONGODB_PASSWORD: string;
            MONGODB_DATABASE: string;
            CLIENT_URL: string;
            BASE_DOMAIN: string;
            REFRESH_TOKEN_SECRET: string;
            ACCESS_TOKEN_SECRET: string;
            NODE_DEV: string;
            environments: "dev" | "prod " | "debug"
        }
    }
}
export{}