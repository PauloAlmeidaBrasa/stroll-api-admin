import { Router, Request, Response, Express } from 'express';
import jwt from 'jsonwebtoken';
import jwtAuth from '../config/jwt';




export default (app: Express): void => {

  const router = Router()

  router.use('/api/admin/v1',router)
  router.post('/login',(req: Request, res: Response) => {
    console.log(req.body)
    const { username, password } = req.body;

    // Simulate authentication
    if (username === 'paulo' && password === '123456') {
        const token = jwt.sign({ username }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
        res.status(200).json({ token });
    }

    res.status(400).send('Invalid Credentials');
  })

    //Protected Route
    router.get('/dashboard', jwtAuth, (req: Request, res: Response) => {
        // res.send(`Welcome, ${req.user?.username}, to the internal dashboard!`);
    });


    // const router = Router();

    // Login Route
    // router.post('/login', (req: Request, res: Response) => {
    //   const { username, password } = req.body;

    //   // Simulate authentication
    //   if (username === 'admin' && password === 'password') {
    //       const token = jwt.sign({ username }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    //       res.json({ token });
    //   }

    //   res.status(400).send('Invalid Credentials');
    // });


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
  