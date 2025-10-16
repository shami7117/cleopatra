"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"], weight: ["400", "700"] });

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Support", href: "/help-center" },
    { label: "Join Our Team", href: "#" },
  ];

  return (
    <div className="Header_headerMain__W-lOZ">
      <header className="Header_headerContainer__Gze82">
        <div className="Header_headingDiv__nZj+b">
          {/* Logo */}
          <a>
            <div className="Header_logo__shVBB">
              <img
                src="/logo.svg"
                alt="Logo"
                // width={177}
                // height={44}
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="Header_navigationDiv__nipST">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`${quicksand.className} Header_menuLink__XQyg6`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
