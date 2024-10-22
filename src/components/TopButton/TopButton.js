import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './TopButton.module.scss'; // CSSモジュールを使う

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true); // 300px以上スクロールしたら表示
      } else {
        setShowButton(false); // それ以外は非表示
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // スムーズにスクロール
    });
  };

  return (
    <>
      {showButton && (
        <button className={styles.topButton} onClick={scrollToTop}>
          <Image 
            src="/arrow.png"  // publicフォルダに保存した画像のパス
            alt="Back to top"
            width={30}
            height={30}
          />
        </button>
      )}
    </>
  );
};

export default TopButton;
