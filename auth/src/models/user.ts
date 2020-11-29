import mongoose from "mongoose"

// An Interface that describes a new User
interface UserAttributes {
  email: string
  password: string
}

// An Interface that describes the properties that a User model has.
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttributes): UserDoc
}

// An interface that describes the properties that a User document has
interface UserDoc extends mongoose.Document {
  email: string
  password: string
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

userSchema.statics.build = (attrs: UserAttributes) => {
  return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>("User", userSchema)

export { User }
