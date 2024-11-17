'use client'

import { useEffect, useState } from "react";
import { Menu } from 'lucide-react';
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import styles from '../styles/Header.module.css';

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scroll ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <h1>MA</h1>
      </div>
      <nav className={styles.desktopNav}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/portfolio">Portfolio</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className={styles.hireButton}>
        <Link href="/">Hire Me</Link>
      </div>

      <Sheet>
        <SheetTrigger className={styles.mobileMenuTrigger}>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <h1 className={styles.mobileMenuLogo}>MA</h1>
            </SheetTitle>
            <SheetDescription>
              <nav className={styles.mobileNav}>
                <Link href="/home">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/portfolio">Portfolio</Link>
                <Link href="/contact">Contact</Link>
                <div className={styles.mobileHireButton}>
                  <Link href="/">Hire Me</Link>
                </div>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}