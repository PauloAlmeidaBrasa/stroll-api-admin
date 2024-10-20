import { Router, Request, Response, Express } from 'express';
import jwt from 'jsonwebtoken';
import jwtAuth from '../config/jwt';

import fg from 'fast-glob'


export default (app: Express): void => {

  const router = Router()

  router.use('/api/admin/v1',router)

  fg.sync('**/src/main/routes/**Routes.ts').map(async file => { (await import(`../../${file}`)).default(router) })

  app.use(router)
}













// import { Router,Express,Request, Response, json } from 'express'
// import fg from 'fast-glob'

// export default (app: Express): void => {
//     const router = Router()
//     app.use('/api/adm/v1',router)

//     fg.sync('**/src/main/routes/**routes.ts').map(async file => { (await import(`../../../${file}`)).default(router) })

//     /* app.get('/call-trade',(req:Request,res:Response) => {
//         res.json('HELLO WORLD')
//     }) */
//     //fg.sync('**/src/main/routes/**routes.ts').map(async file => { (await import(`../../../${file}`)).default(router) })
//   }
  