import { cors } from "./cors"
import { Express, json } from "express"
import dotenv from 'dotenv';

dotenv.config();


const bodyParser = json()

export default (app: Express): void => {
  app.use(cors)
  app.use(bodyParser)
}
