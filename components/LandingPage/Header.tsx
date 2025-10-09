"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import {Quicksand} from 'next/font/google'

const quicksand = Quicksand({ subsets: ['latin'], weight: ['400', '700'] })

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Support', href: '/help-center' },
    { label: 'Join Our Team', href: '#' },
  ];

  return (
    <header className="max-w-7xl mx-auto w-full px-4 py-6 flex justify-between items-center">
      {/* Logo */}
      <a href='/' className="flex cursor-pointer items-center z-50">
        <Image 
          alt='logo' 
          src={'/logo.svg'} 
          width={270} 
          height={44} 
          className='w-32 sm:w-48 md:w-[270px] h-auto' 
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a 
            key={item.label}
            href={item.href} 
            className={`${quicksand.className} text-[18px] font-bold text-[#000000] hover:text-gray-900 transition-colors`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-6 mt-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`${quicksand.className} text-lg font-medium text-[#000000] hover:text-gray-900 transition-colors py-2`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;