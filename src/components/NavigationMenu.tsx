import React from "react";
import "tailwindcss/tailwind.css";
import HomeIcon from "../assets/images/home.svg";
import MyLocationIcon from "../assets/images/my-location.svg";
import SearchIcon from "../assets/images/search.svg";

const NavigationMenu: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 mb-5">
      <div className="px-7 bg-white shadow-lg rounded-2xl">
        <div className="flex">
          <div className="flex-auto hover:w-full group">
            <a
              href="#"
              className="flex items-center justify-center text-center px-4 py-2 group-hover:w-full text-indigo-500"
            >
              <span className="flex items-center justify-center p-2 group-hover:bg-indigo-100 rounded-full">
                <HomeIcon className="w-6 h-6" />
              </span>
            </a>
          </div>
          <div className="flex-auto hover:w-full group">
            <a
              href="#"
              className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
            >
              <span className="flex items-center justify-center p-2 group-hover:bg-indigo-100 rounded-full">
                <SearchIcon className="w-6 h-6" />
              </span>
            </a>
          </div>
          <div className="flex-auto hover:w-full group">
            <a
              href="#"
              className="flex items-center justify-center text-center mx-auto px-4 py-2 group-hover:w-full text-indigo-500"
            >
              <span className="flex items-center justify-center p-2 group-hover:bg-indigo-100 rounded-full">
                <MyLocationIcon className="w-6 h-6" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
