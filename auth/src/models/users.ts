import mongoose from 'mongoose';

interface IUser {
  email: string;
  password: string;
}

//interface to describe properties that user model has
interface IUserModel extends mongoose.Model<UserDoc> {
  createUser(userDetails: IUser): UserDoc;
}

//interface that describe the properties that a User document has.
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
  createdAt: string;
  updateAt: string;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.createUser = (userDetails: IUser) => {
  return new model({ ...userDetails });
};

const model = mongoose.model<UserDoc, IUserModel>('user', userSchema);

export { model as userModel };
