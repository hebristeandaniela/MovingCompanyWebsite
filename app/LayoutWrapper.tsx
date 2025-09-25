"use client";

import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import NavbarTel from "./components/NavbarTel";
import Footer from "./components/Footer";
import { ReactNode } from "react";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <>
             <Navbar /> <NavbarTel />
            {children}
             <Footer />
        </>
    );
}
