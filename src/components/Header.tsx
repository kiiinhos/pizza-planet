import React from "react";
import { useRouter } from "next/router";
import Arrow from "../assets/images/arrow.svg";
import Avatar from "../assets/images/avatar.svg";
const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between">
      <div>
        <Arrow onClick={() => router.back()} />
      </div>
      <div>
        <h1 className="text-lg font-semibold">Addresses</h1>
      </div>
      <div>
        <Avatar className="w-7 h-10" />
      </div>
    </div>
  );
};

export default Header;
