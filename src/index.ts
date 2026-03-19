import http from 'node:http'
import { env } from './env.js'
import { createServerApp } from "./app/index.js"
async function main() {
    try {
        const server = http.createServer(createServerApp());
        // const PORT: number = process.env.PORT ? +process.env.PORT : 8080
        const PORT: number = env.PORT ? +env.PORT : 8080

        server.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`);
        })
    } catch (error) {
        throw error
    }
}

console.log("Hello from TS File. My name is Soumodip Biswas");
main()
