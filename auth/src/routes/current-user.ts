import { Router } from 'express';

const router = Router();

router.get('/api/users/currentusers', (req, res) => {
  res.send('Hi there');
});

export { router as currentUserRouter };
