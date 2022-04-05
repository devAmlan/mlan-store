import { v4 as uuid } from "uuid";
import kb1 from "../../assets/img/kb1.jpeg"
import kb2 from "../../assets/img/kb2.png"
import kb3 from "../../assets/img/kb3.jpg"
import kb4 from "../../assets/img/kb4.jpg"
import k1 from "../../assets/img/k1.jpg"
import k2 from "../../assets/img/k2.jpg"
import k3 from "../../assets/img/k3.jpg"
import k4 from "../../assets/img/k4.jpg"
import deskpad from "../../assets/img/deskpad.png"

export const products = [
  {
    _id:uuid(),
    productimage:kb1,
    productname:"GMK TERROR BELOW",
    productprice:12500,
    originalprice:14500,
    tag:"",
    rating:4.5,
    category:"keyboards"
  },
  {
    _id:uuid(),
    productimage:kb2,
    productname:"HEX 4B",
    productprice:12000,
    originalprice:13500,
    tag:"",
    rating:4.0,
    category:"keyboards"
  },
  {
    _id:uuid(),
    productimage:kb3,
    productname:"GMK KAIJU",
    productprice:11500,
    originalprice:13500,
    tag:"Best Seller",
    rating:4.0,
    category:"keyboards"
  },
  {
    _id:uuid(),
    productimage:kb4,
    productname:"GMK TUZI",
    productprice:12500,
    originalprice:14500,
    tag:"",
    rating:3.5,
    category:"keyboards"
  },
  {
    _id:uuid(),
    productimage:k1,
    productname:"ALPACA LINEARS",
    productprice:600,
    originalprice:800,
    tag:"Sold Out",
    rating:4.0,
    category:"switches"
  },
  {
    _id:uuid(),
    productimage:k2,
    productname:"GAZZEW BOBA U4T",
    productprice:480,
    originalprice:550,
    tag:"",
    rating:4.0,
    category:"switches"
  },
  {
    _id:uuid(),
    productimage:k3,
    productname:"8008 INK SWITCHES",
    productprice:1100,
    originalprice:1300,
    tag:"",
    rating:3.0,
    category:"switches"
  },
  {
    _id:uuid(),
    productimage:k4,
    productname:"GATERON ALIAZ SILENT MX",
    productprice:480,
    originalprice:550,
    tag:"Best Seller",
    rating:4.5,
    category:"switches"
  },
  {
    _id:uuid(),
    productimage:deskpad,
    productname:"SKULL DESKPAD",
    productprice:300,
    originalprice:450,
    tag:"",
    rating:4.0,
    category:"others"
  }
];
