import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

const Farm = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__con}>
        <Link href="/#works">
          <p>Work</p>
        </Link>
        <p>＞　Farm360</p>
      </div>

      <Image
            src="/farm360.png" // publicフォルダにある画像へのパス
            alt="Farm Image"
            width={1200} // 画像の幅
            height={400} // 画像の高さ
            layout="responsive" // 画像をレスポンシブに表示
      />
      <div className={styles.farm}>
        <Link href="http://www.farm360.jp/" target="_blank" rel="noopener noreferrer">

            <p className={styles.farm__pr}>牧場めぐりの記録<br>
            </br>インタビューや撮影などを通して牧場のPRをおこなっていく</p>

        </Link>
      </div>
      {/* 戻る */}
      <Link href="/#works">
      <p className={styles.backButton}>戻る</p>
      </Link>
    </div>
  );
};

export default Farm;
