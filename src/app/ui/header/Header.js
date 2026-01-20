"use client"

import { UserIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
import { useContext } from "react";
import { StoreContext } from "@/app/context";

const Header = () => {
  const { cartData } = useContext(StoreContext);

  return (
    <div className='flex items-center justify-end h-5 m-2 gap-2'>
      <UserIcon className="w-4 h-4" />
      {
        cartData.length > 0 && (
          <div className="border rounded-sm px-1">
            <Link href='/store/cart'>{cartData.length}</Link>
          </div>
        )
      }

    </div>
  );
}

export default Header;