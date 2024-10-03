import { DataSource } from "typeorm"
import { Product } from "./models/product"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.NEXT_PUBLIC_POSTGRES_HOST,
  // port: 5432,
  username: process.env.NEXT_PUBLIC_POSTGRES_USER,
  password: process.env.NEXT_PUBLIC_POSTGRES_PASSWORD,
  database: process.env.NEXT_PUBLIC_POSTGRES_DATABASE,
  synchronize: true,
  logging: true,
  entities: [Product],
  subscribers: [],
  migrations: [],
})

