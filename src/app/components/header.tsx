

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-black w-auto max-h-16 p-4 mx-auto">
      {/* Logo and Branding Section */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <Image
          className="ml-3 md:ml-4 lg:ml-6 mt-10"
          src="/plant 2.png"
          alt="logo"
          width={60}
          height={60}
        />
        {/* Branding Title */}
        <h3 className="text-md text-slate-300 md:text-2xl">Planto.</h3>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex gap-10 text-slate-300 mt-2 mr-6">
        <li>Home</li>
        <li>Plant Type</li>
        <li>More</li>
        <li>Contact</li>
      </ul>

      {/* Mobile Menu Button */}
      <Sheet>
        <SheetTrigger className="lg:hidden">
          <Menu className="w-6 h-6 text-slate-300 mr-4" />
        </SheetTrigger>
        <SheetContent side="right" className="bg-black text-white">
          <nav className="flex flex-col space-y-6 mt-4 p-4">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
            <a href="#plant-type" className="hover:text-gray-400">
              Plant Type
            </a>
            <a href="#more" className="hover:text-gray-400">
              More
            </a>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}