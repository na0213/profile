import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

const Farm = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__con}>
        <Link href="/#works">
          <p>Activity</p>
        </Link>
        <p>＞　writing</p>
      </div>

      <div className={styles.farm}>
        <div className={styles.farm__title}>取材執筆ーコミュニティマネージャー養成講座鼎談記事ー</div>
        <Link href="https://localletter.jp/articles/community_learning/" target="_blank" rel="noopener noreferrer">
          <p className={styles.farm__pr}>LOCAL LETTER掲載<br>
          </br>コミュニティマネージャー養成講座（株式会社WHERE）卒業生の鼎談記事<br>
          </br></p>

          <div className={styles.farm__imagecontainer}>
            <Image
              src="/local2.png" // publicフォルダにある画像へのパス
              alt="Image"
              width={1200} // 画像の幅
              height={400} // 画像の高さ
              layout="responsive" // 画像をレスポンシブに表示
              className={styles.farm__image}
            />
          </div>
        </Link>
        <Link href="https://localletter.jp/articles/community_value/" target="_blank" rel="noopener noreferrer">
          <div className={styles.farm__imagecontainer}>
            <Image
              src="/local3.png" // publicフォルダにある画像へのパス
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
