import { ShoppingBasket } from "@material-ui/icons";
import { motion } from "framer-motion";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  return (
    <header className="w-screen fixed z-50 px-4 py-2 md:px-16 md:p-4  ">
      {/* Desktop and Tablet */}
      <div className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="./images/ham.png"
            className="w-10 object-cover"
            alt="logo"
          />
          <p className="text-headingColor text-xl font-bold"> FOODY</p>
        </div>
        <ul className="flex items-center gap-6 ml-auto">
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer">
            HOME
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer">
            MENU
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer">
            ABOUT US
          </li>
          <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer">
            SERVICES
          </li>
        </ul>
        <motion.div
          whileTap={{ scale: 0.6 }}
          className="relative flex mx-4 items-center justify-center cursor-pointer"
        >
          <div className="absolute -right-2 top-0 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-white text-sm">3</p>
          </div>
          <ShoppingBasket className="text-base" />
        </motion.div>
        <motion.img
          whileTap={{ scale: 0.6 }}
          src="./images/profile.png"
          className="w-10 h-10 rounded-full border-2 border-solid shadow-md cursor-pointer"
          alt="avatar"
        />
      </div>
      {/* Mobile */}
      <div className="flex md:hidden w-full h-full">
        <HeaderMobile />
      </div>
    </header>
  );
};

export default Header;
