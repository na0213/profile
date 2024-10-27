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
        <p>＞　article</p>
      </div>

      <div className={styles.farm}>
        <div className={styles.farm__title}>取材執筆ー氷見 牛屋ー</div>
        <Link href="https://localletter.jp/articles/gyuya_himi/" target="_blank" rel="noopener noreferrer">

          <p className={styles.farm__pr}>LOCAL LETTER掲載<br>
          </br>インタビューライター講座で初めて取材・執筆した記事<br>
          </br>▶︎LOCAL LETTERの掲載記事へ</p>

          <div className={styles.farm__imagecontainer}>
            <Image
              src="/local.png" // publicフォルダにある画像へのパス
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
