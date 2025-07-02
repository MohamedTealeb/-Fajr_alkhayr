"use client";

import Link from "next/link";
import Image from "next/image";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const navItems = [
    { href: "/home", label: "الرئيسية" },
    { href: "/about", label: "مشاريعنا" },
    { href: "/portfolio", label: "نبذة عنا" },
    { href: "/services", label: "تواصل معنا" },
    { href: "/contact", label: "الأسئلة الشائعة " },
    { href: "/testimonials", label: "الشروط والأحكام" },
  ];


  return (
    <header  className={` bg-amber-800  text-black px-8 py-3  flex  items-center  shadow-md border-b border-secondary`}>
      <h1 className="text-xl ml-6 font-bold text-black">
       <Image src="/logohedar.webp" alt="Logo" width={120} height={60} />
      </h1>

      {/* قائمة التصفح على الشاشات الكبيرة */}
      <nav className="hidden md:flex items-center gap-6 py-2 px-4 ">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-accent transition-colors font-semibold"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* قائمة التصفح على الموبايل */}
      <div className="md:hidden flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-white bg-black p-0 cursor-pointer">
              <HiMenu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-light text-main p-4">
            <SheetTitle className="sr-only">القائمة</SheetTitle>
            <nav className="mt-10 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-semibold hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
