import Navbar from "components/navbar/Navbar";

type NavbarProps = {
  itemName: string;
  url: string;
};

type HomeProps = {
  isLoggedIn: boolean;
  isInit?: boolean;
};
type ProductProps = {
  productImagePath: string;
  productIconPath: string;
  productName: string;
  productPrice: string;
  productDiscountPrice: string;
};

export type { NavbarProps, HomeProps, ProductProps };