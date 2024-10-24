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

      <div className={styles.farm}>
        <div className={styles.farm__title}>オリジナルWEBサイトーFarm360ー</div>
        <Link href="http://www.farm360.jp/" target="_blank" rel="noopener noreferrer">

            <p className={styles.farm__pr}>牧場めぐりの記録<br>
            </br>インタビュー記事や撮影画像などを掲載し牧場の魅力を伝えていきます<br>
            </br>▶︎WEBサイトへ</p>

        </Link>
      </div>
      <div className={styles.farm__imagecontainer}>
        <Image
              src="/farm360.png" // publicフォルダにある画像へのパス
              alt="Farm Image"
              width={1200} // 画像の幅
              height={400} // 画像の高さ
              layout="responsive" // 画像をレスポンシブに表示
              className={styles.farm__image}
        />
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
