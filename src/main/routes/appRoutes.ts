import { Router,Request, Response } from "express"
import jwt from 'jsonwebtoken';
import jwtAuth from "../../middlewares/jwtAuth";

export default (router: Router): void => {
    
  //const controller = makeCallTradeController()
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

  router.get('/dashboard', jwtAuth, (req: Request, res: Response) => {
    res.send(`Welcome to the internal dashboard!`);
});
}