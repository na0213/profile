/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Image
          src="/6.png"
          alt="Icon"
          width={50}
          height={50}
        />
        <h1 className={styles.header__title}><Link href="/#header" scroll={false}>Natomi</Link></h1>
      </div>

       <ul className={styles.header__menu}>
       <li>
          <Link href="/#about" scroll={false}>About</Link>
        </li>
        <li>
          <Link href="/#works" scroll={false}>Activity</Link>
        </li>
        <li>
          <Link href="/#contact" scroll={false}>Contact</Link>
        </li>
       </ul>
    </header>
  );
}

export default Header