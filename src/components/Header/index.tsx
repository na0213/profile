import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Image
          src="/2.png"
          alt="Icon"
          width={50}
          height={50}
        />
        <h1 className={styles.header__title}>Natomi</h1>
      </div>

       <ul className={styles.header__menu}>
        <li>
            <Link href={"/profile"}>About</Link>
        </li>
        <li>
            <Link href={"/works"}>Articles</Link>
        </li>
        <li>
            <Link href={"/contact"}>Contact</Link>
        </li>
       </ul>
    </header>
  );
}

export default Header