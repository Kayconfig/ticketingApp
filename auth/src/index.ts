import express from 'express';
import {
  currentUserRouter,
  signinRouter,
  signoutRouter,
  signupRouter,
} from './routes';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

//handle unknown routes
app.use('*', (req) => {
  throw new NotFoundError(req.originalUrl);
});

//handle Error
app.use(errorHandler);

app.listen(3000, () => console.log('auth listening on port 3000!!'));
