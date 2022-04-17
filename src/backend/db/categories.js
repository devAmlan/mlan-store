import { v4 as uuid } from "uuid";
import keyboard from "../../assets/img/keyboard.jpg"
import keyswitch from "../../assets/img/switch.jpg"

export const categories = [
  {
    _id: uuid(),
    categoryName: "MECHANICAL KEYBOARDS",
    type:"keyboards",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae impedit voluptatum, architecto eveniet laboriosam. Velit labore natus facilis quo?",
    categoryImage: keyboard
  },
  {
    _id: uuid(),
    categoryName: "SWITCHES & ACCESSORIES",
    type:"switches",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae impedit voluptatum, architecto eveniet laboriosam. Velit labore natus facilis quo?",
    categoryImage: keyswitch
  }
];
