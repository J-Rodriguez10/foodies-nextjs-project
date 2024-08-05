"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";


interface NavLinkProps {
  href: string,
  children: ReactNode
};

const NavLink: FC<NavLinkProps> = ({href, children}) => {
  const path = usePathname();
  return (
    <Link
      className={`nav-link ${
        path.startsWith(href) ? "active" : undefined
      }`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
