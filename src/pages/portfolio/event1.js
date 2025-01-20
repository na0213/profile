import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

const Farm = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__con}>
        <Link href="/#works">
          <p>Event</p>
        </Link>
        <p>＞　event</p>
      </div>

      <div className={styles.farm}>
        <div className={styles.farm__title}>イベント開催</div>
          <p className={styles.farm__pr}>🍠焼き芋食べ比べ＆牛乳飲み比べ🐮開催しました<br>
          </br>◾️2024年12月7日（土）<br>
          </br>◾️11:00〜16:00</p>

          <div className={styles.farm__imagecontainer}>
            <Image
              src="/event.png" // publicフォルダにある画像へのパス
              alt="Image"
              width={1200} // 画像の幅
              height={400} // 画像の高さ
              layout="responsive" // 画像をレスポンシブに表示
              className={styles.farm__image}
            />
          </div>
          <div>
            <p>今回初めて開催したイベント</p>
            <div className={styles.farm__highlight}>
              <p>【目的は２つ】<br>
              </br>
              ・牧場や牛の種類ごとの牛乳の味の違いを知ってもらい、美味しさをお届けすること<br>
              </br>
              ・牛乳の味の違いを体験することで酪農への興味を喚起し、牧場へ足を運んでいただく機会に繋げること
              </p>
            </div>
            <p>イベントでは、牛乳飲み比べセットを販売し、約30組ほどのお客様にご参加いただきました。<br></br><br />
            「味の違いがこんなにあるとは！」と驚かれる方や、「お気に入りの牛乳が見つかった」と喜んでいただける方など、多様な反応をいただきました。</p><br></br>
            <p>【ご協力いただいた牧場さま】</p>
            <div className={styles.farm__highlight}>
              <Link href="https://www.hiroo-suzukifarm.com/" target="_blank" rel="noopener noreferrer">
              <p className={styles.farm__link}>▶︎鈴木牧場（北海道）</p>
              </Link>
                <p className={styles.farm__disc}>オーガニック牧場でのびのびと放牧し、牧草だけで育つ牛さんのグラスフェッドA2ミルク</p>
            </div>
            <div className={styles.farm__highlight}>
              <Link href="https://www.sudo-farm.com/" target="_blank" rel="noopener noreferrer">
              <p className={styles.farm__link}>▶︎須藤牧場（千葉県）</p>
              </Link>
                <p className={styles.farm__disc}>放牧や広々とした牛舎でのんびり育つ、国内飼育頭数0.8%と希少なジャージー牛の甘いミルク</p>
            </div>
            <div className={styles.farm__highlight}>
              <Link href="https://miyazaki.matsuuramilk.com/" target="_blank" rel="noopener noreferrer">
              <p className={styles.farm__link}>▶︎松浦牧場（宮崎県）</p>
              </Link>
              <p className={styles.farm__disc}>牧草からこだわり、大切に育てられている生乳品質奨励会で3年連続受賞のミルク</p>
            </div>
          </div>
          {/* <div className={styles.farm__highlight}> */}
            <p>イベントの開催概要については、LOCAL LETTERにて記事として掲載いただきました</p>
            <Link href="https://localletter.jp/articles/event_localfood/" target="_blank" rel="noopener noreferrer">
              <p className={styles.farm__link}>▶︎記事はこちらから</p>
            </Link>
          {/* </div> */}
        <div className={styles.farm__container}>
          <div className={`${styles.farm__item} ${styles.farm__itemLeft}`}>
            <Image
              src="/cafe.png"
              alt="Icon"
              width={200}
              height={200}
            />
            <p>
              入り口の看板<br />「さつまいもぉカフェ」
            </p>
          </div>
          <div className={`${styles.farm__item} ${styles.farm__itemRight}`}>
            <Image
              src="/milk.png"
              alt="Icon"
              width={200}
              height={200}
            />
            <p>
              牛乳飲み比べ<br />それぞれ味が違う！と皆さま驚かれていました＾＾
            </p>
          </div>
          <div className={`${styles.farm__item} ${styles.farm__itemLeft}`}>
            <Image
              src="/quiz.png"
              alt="Farm 360 Project"
              width={200}
              height={200}
            />
            <p>
              牛さんに関するクイズも準備しました
            </p>
          </div>
          <div className={`${styles.farm__item} ${styles.farm__itemRight}`}>
            <Image
              src="/flyer.png"
              alt="Icon"
              width={200}
              height={200}
            />
            <p>
              牧場さんからいただいたリーフレット<br />POPは作成しました
              </p>
          </div>
          <div className={`${styles.farm__item} ${styles.farm__itemLeft}`}>
            <Image
              src="/report.PNG"
              alt="Farm 360 Project"
              width={200}
              height={200}
            />
            <p>
              お客様からそれぞれ牧場へのメッセージをいただき、イベント報告として冊子を作り、生産者さんへお届けしました
            </p>
          </div>
        </div>
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
