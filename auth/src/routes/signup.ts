import { Router } from 'express';
import joi from 'joi';
import { httpStatus } from '../utils';
import { RequestValidationError, DatabaseConnectionError } from '../errors';

const router = Router();

router.post('/api/users/signup', (req, res) => {
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
  res.json({
    error: null,
    data: 'You sent valid data',
  });
});

export { router as signupRouter };
