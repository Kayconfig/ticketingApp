import { Router } from 'express';
import joi from 'joi';
import { httpStatus } from '../utils';
import { BadRequestError, RequestValidationError } from '../errors';
import { userModel } from '../models/users';
import { Password } from '../services/password';

const router = Router();

router.post('/api/users/signup', async (req, res) => {
  console.log('signing up...');
  const validationSchema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().min(8).required(),
  });
  const validationResult = validationSchema.validate(req.body);
  if (validationResult.error) {
    throw new RequestValidationError(
      validationResult.error.message,
      httpStatus.BAD_REQUEST
    );
  }

  //check if email is in use
  let { email, password } = req.body as { email: string; password: string };
  password = Password.toHash(password);
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new BadRequestError('Email already in use!');
  }

  const user = await userModel.createUser({ email, password });
  return res.json({ data: user });
});

export { router as signupRouter };
