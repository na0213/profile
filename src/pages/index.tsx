/* eslint-disable @typescript-eslint/no-unused-vars */
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import TopButton from "@/components/TopButton/TopButton";
import Activity from "@/components/Activity";

export default function Home() {
  return (
    <>
      <Head>
        <title>Natomi work</title>
        <meta name="description" content="Natomi work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/5.png" />
      </Head>
      <div>
        <div className={styles.topImageWrapper}>
          <Image
            src="/sky.png" // publicフォルダにある画像へのパス
            alt="Top Image"
            width={1200} // 画像の幅
            height={400} // 画像の高さ
            layout="responsive" // 画像をレスポンシブに表示
          />
          {/* <div className={styles.textOverlay}>
            <div className={styles.ellipseBackground}></div>
            <p>スキをめぐる</p><p>スキをつなげる</p>
          </div> */}
        </div>
        <div id="about">
          <About />
        </div>
        <div id="works">
          <Work />
        </div>
        <div id="works">
          <Activity />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <TopButton />
      </div>
    </>
  );
}
