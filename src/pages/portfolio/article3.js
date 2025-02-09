import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

const Farm = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__con}>
        <Link href="/#works">
          <p>Works</p>
        </Link>
        <p>＞　writing</p>
      </div>

      <div className={styles.farm}>
        <div className={styles.farm__title}>取材執筆ー十勝シティデザイン株式会社ー</div>
        <Link href="https://localletter.jp/articles/hotelnupka_tokachi/" target="_blank" rel="noopener noreferrer">
          <p className={styles.farm__pr}>LOCAL LETTER掲載<br>
          </br>十勝シティデザイン株式会社創業者への取材記事<br>
          </br></p>

          <div className={styles.farm__imagecontainer}>
            <Image
              src="/local4.png" // publicフォルダにある画像へのパス
              alt="Image"
              width={1200} // 画像の幅
              height={400} // 画像の高さ
              layout="responsive" // 画像をレスポンシブに表示
              className={styles.farm__image}
            />
          </div>
        </Link>
      </div>

      {/* 戻る */}
      <div className={styles.back}>
        <Link href="/#works">
        <p className={styles.backButton}>◀︎ 戻る</p>
        </Link>
      </div>
    </div>
  );
};

export default Farm;
