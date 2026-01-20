"use client"
import {
  BookOpenIcon,
  CogIcon,
  CubeTransparentIcon,
  HomeIcon,
  RectangleStackIcon,
  ShoppingCartIcon,
  Squares2X2Icon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Link from 'next/link';
import { useContext } from "react";
import { StoreContext } from "@/app/context";

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Books', href: '/store', icon: BookOpenIcon },
  { name: 'Sell or Lend', href: '/store/sell-lend', icon: RectangleStackIcon },
  { name: 'Cart', href: '/store/cart', icon: ShoppingCartIcon },
  { name: 'TrackOrder', href: '/store/track-order', icon: TruckIcon },
  { name: 'Community', href: '/store/community', icon: UserGroupIcon },
  { name: 'Settings', href: '/store/settings', icon: CogIcon },
  { name: 'About', href: '/store/about', icon: Squares2X2Icon },
  { name: 'Admin', href: '/store/admin', icon: CubeTransparentIcon },
];

const NavLinks = () => {

  const { cartData } = useContext(StoreContext);

  return (
    <div className="flex md:flex-col gap-2 justify-center">
      {
        links.map(link => {
          const IconComponent = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex h-12 grow items-center justify-start gap-2 rounded-md p-4 bg-white"
            >
              <IconComponent className="w-6" />
              <p className="hidden md:block">
                {
                  link.name === 'Cart' && cartData.length > 0 ?
                    `${link.name}(${cartData.length})` :
                    link.name
                }
              </p>
            </Link>
          )

        })
      }
    </div>
  );
}

export default NavLinks;
