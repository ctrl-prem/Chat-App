import { hash } from "bcrypt";
import mongoose, { Schema, model } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false, // select, this won't give the password, when someone try to fetch the data from db. It blocks the field.
    },
    avatar: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      }
    }
  },
  {
    timestamps: true // it will add some functionality like:- createdAt and updatedAt
  }
);

// This will before(pre) saving("save") to the DB hash the coming password
schema.pre("save", async function(next){
  if(!this.isModified("password")) next();
  this.password = await hash(this.password, 10);
})

export const User = mongoose.models.User || model("User", schema);
// export const User = model("User", schema); // "User" passed is the name of model
