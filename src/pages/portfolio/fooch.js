import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

const Farm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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
        <div onClick={handleModalOpen} className={styles.farm__link}>
          <p className={styles.farm__pr}>
            初めて開発したサービス。<br />
            出店されている食品の原材料を指定し除外して検索できるサービスを開発。<br />
            Laravel・PHPを使用しています。<br />
            ▶︎WEBサイトへ
          </p>
          
          <div className={styles.farm__imagecontainer}>
            <Image
              src="/foochpic.png" // publicフォルダにある画像へのパス
              alt="FOOCH Image"
              width={1200}
              height={400}
              layout="responsive"
              className={styles.farm__image}
            />
          </div>
        </div>
        {/* モーダルウィンドウ */}
        {isModalOpen && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <p>現在改修中です🙏</p>
              <button onClick={handleModalClose}>閉じる</button>
            </div>
          </div>
        )}
        {/* <Link href="https://www.fooch.jp/" target="_blank" rel="noopener noreferrer">
          <p className={styles.farm__pr}>初めて開発したサービス。<br>
          </br>出店されている食品の原材料を指定し除外して検索できるサービスを開発。<br>
          </br>Laravel・PHPを使用しています。<br>
          </br>▶︎WEBサイトへ</p>
          <div className={styles.farm__imagecontainer}>
            <Image
                  src="/foochpic.png" // publicフォルダにある画像へのパス
                  alt="FOOCH Image"
                  width={1200} // 画像の幅
                  height={400} // 画像の高さ
                  layout="responsive" // 画像をレスポンシブに表示
                  className={styles.farm__image}
            />
          </div>
        </Link> */}
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
