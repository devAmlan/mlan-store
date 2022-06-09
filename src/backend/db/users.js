import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Amlan",
    lastName: "Sahoo",
    email: "sahooamlan24@gmail.com",
    password: "Amlan@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Anon",
    lastName: "User",
    email: "someone@gmail.com",
    password: "Someone@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
