import { Document, model, Schema } from "mongoose";

interface user {
  name: string;
  score: string;
  email: string;
  matricNumber: string;
}
interface iuser extends user, Document {}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    name: String,
  },
  email: {
    type: String,
    required: true,
  },
  matricNumber: {
    type: String,
    required: true,
  },
});

export default model<iuser>("users", userSchema);
