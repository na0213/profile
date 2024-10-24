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
        <p>＞　FOOCH</p>
      </div>

      <div className={styles.farm}>
        <div className={styles.farm__title}>オリジナルWEBサービスーFOOCHー</div>
        <Link href="http://www.fooch.jp/" target="_blank" rel="noopener noreferrer">

            <p className={styles.farm__pr}>初めて開発したサービス<br>
            </br>出店されている食品の原材料を指定し除外して検索できるサイトです<br>
            </br>▶︎WEBサイトへ</p>

        </Link>
      </div>
      <div className={styles.farm__imagecontainer}>
        <Image
              src="/fooch.png" // publicフォルダにある画像へのパス
              alt="FOOCH Image"
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
