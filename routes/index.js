import { Router } from "express";
const router = Router();

router.use('/users', (req, res) => {
    res.send('user Route')
  });

  export default router;    