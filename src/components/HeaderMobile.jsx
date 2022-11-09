import React from "react";
import { motion } from "framer-motion";
import { ShoppingBasket } from "@material-ui/icons";

const HeaderMobile = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <motion.div
          whileTap={{ scale: 0.6 }}
          className="relative flex mx-4 items-center justify-center cursor-pointer"
        >
          <div className="absolute -right-2 top-0 w-4 h-4 rounded-full bg-cartNumBg flex items-center justify-center">
            <p className="text-white text-sm">3</p>
          </div>
          <ShoppingBasket className="text-base" />
        </motion.div>
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="./images/ham.png"
            className="w-10 object-cover"
            alt="logo"
          />
          <p className="text-headingColor text-xl font-bold"> FOODY</p>
        </div>

        <motion.img
          whileTap={{ scale: 0.6 }}
          src="./images/profile.png"
          className="w-10 h-10 rounded-full border-2 border-solid shadow-md cursor-pointer relative"
          alt="avatar"
        />
      </div>
      <div className="absolute top-16 bg-white right-2 shadow-md w-32">
        <p className="text-base bg-slate-100 hover:bg-slate-200 px-4 py-1 cursor-pointer">
          New Item A
        </p>
        <p className="text-base bg-slate-100 hover:bg-slate-200 px-4 py-1 cursor-pointer">
          Remove Item
        </p>
      </div>
    </>
  );
};

export default HeaderMobile;
