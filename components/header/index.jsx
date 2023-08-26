"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav/index";
import styles from "./style.module.scss";
import Link from "next/link";
import Logo from "@public/images/Navbar/Logo.png";
import Image from "next/image";
import Magenetic from "@components/utils/Magnetic";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  let menuRef = useRef();
  useLayoutEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <>
      <Link
        passHref
        href="/"
        className="hidden md:flex absolute items-center top-0 left-10 z-50 rounded-full"
      >
        <Magenetic>
          <div className="relative w-[6rem] h-[6rem] rounded-full overflow-hidden">
            <Image
              src={Logo}
              alt="Logo NK"
              fill
              priority={true}
              sizes="100vh"
              className="object-cover"
            />
          </div>
        </Magenetic>
      </Link>

      <div>
        <div
          ref={menuRef}
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.button}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
        <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
      </div>
    </>
  );
}
