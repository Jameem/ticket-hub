import mongoose from "mongoose"
import { Password } from "../utils/password"

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

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"))
    this.set("password", hashed)
  }
  done()
})

userSchema.statics.build = (attrs: UserAttributes) => {
  return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>("User", userSchema)

export { User }
