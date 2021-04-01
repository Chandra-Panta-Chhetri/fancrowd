import { Document, Model } from "mongoose";
import { IRequestUser } from "../../interfaces/IUser";

declare global {
  namespace Express {
    export interface User extends IRequestUser {}
  }

  interface Error {
    status: number;
  }
}
