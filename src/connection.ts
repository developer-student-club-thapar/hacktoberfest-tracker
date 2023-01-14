import { DataSource } from "typeorm"
import { Org } from "./entities/org"
import { Repo } from "./entities/repo"
import "reflect-metadata"
import { Contribution } from "./entities/contribution";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "Root",
    synchronize: true,
    entities: [Org, Repo,Contribution]
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })



