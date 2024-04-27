import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "@/srcstyles/Header.module.css";

const Header = () => {
  return (
    <div className="container">
      <div className={styles.header_wrapper}>
        <Link href={"/"}>
          <Image
            src="/Limsa - Logotype.png"
            alt="Limsa Logo"
            width={150}
            height={35}
          />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <li className="">
              <Link href={"#"} className={styles.mav_link}>
                Home
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className={styles.mav_link}>
                About
              </Link>
            </li>
            <li className="">
              <Link href={"#"} className={styles.mav_link}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className={styles.header_button}>
          Contact with us
        </button>
      </div>
    </div>
  );
};

export default Header;