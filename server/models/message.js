import mongoose, { Schema, model } from "mongoose";

const schema = new Schema(
  {
    content: String,
    attachment: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    sender: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    Chat: {
      type: Types.ObjectId,
      ref: "Chat",
      required: true,
    },
  },
  {
    timestamps: true, // it will add some functionality like:- createdAt and updatedAt
  }
);

export const Message = mongoose.models.Message || model("Message", schema);
