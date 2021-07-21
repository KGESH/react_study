import img1 from "resources/images/testImage.png";
import icon1 from "resources/images/testIcon.png";
import icon2 from "resources/images/testIcon2.png";


type ProductProps = {
  productImagePath: string;
  productIconPath: string;
  productName: string;
  productPrice: string;
  productDiscountPrice: string;
};

const ProductItems: ProductProps[] = [
  {
    productImagePath: img1,
    productIconPath: icon1,
    productName: "[BACS 커피]",
    productPrice: "15,000원",
    productDiscountPrice: "13,500원",
  },
  {
    productImagePath: img1,
    productIconPath: icon2,
    productName: "[BACS 커피]",
    productPrice: "15,000원",
    productDiscountPrice: "13,500원",
  },
  {
    productImagePath: img1,
    productIconPath: icon1,
    productName: "[BACS 커피]",
    productPrice: "15,000원",
    productDiscountPrice: "13,500원",
  },
  {
    productImagePath: img1,
    productIconPath: icon2,
    productName: "[BACS 커피]",
    productPrice: "15,000원",
    productDiscountPrice: "13,500원",
  },
  {
    productImagePath: img1,
    productIconPath: icon1,
    productName: "[BACS 커피]",
    productPrice: "15,000원",
    productDiscountPrice: "13,500원",
  },
  {
    productImagePath: img1,
    productIconPath: icon2,
    productName: "[BACS 커피]",
    productPrice: "15,000원",
    productDiscountPrice: "13,500원",
  },
  {
    productImagePath: img1,
    productIconPath: icon1,
    productName: "[BACS 커피]",
    productPrice: "15,000원",
    productDiscountPrice: "13,500원",
  },
];

export default ProductItems;
