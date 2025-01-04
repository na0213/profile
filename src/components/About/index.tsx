/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.about}>
        <div className={styles.about__title}>About</div>

        <div className={styles.about__pic}>
            <Image
            src="/mypic.PNG"
            alt="Icon"
            width={200}
            height={200}
            />
            <div className={styles.about__prof}>Ishizaki Natsumi
              <div className={styles.about__pr}>
                <p>WEBアプリ開発をはじめて4年目。</p>
                <p>ヘアメイク、大学病院での研究補助などを経て、化粧品・健康食品の物流や品質管理業務に従事しながらオリジナルWEBサイトを開発。</p>
                <p>現在は個人にて、オリジナルWEBサイトの運用に加え、牧場訪問を通じて食の背景や代表の方の思いを学び、それを発信する活動を始めている。</p>
                <p>地域の魅力を伝えるインタビューライターやバイヤーとしても活動を広げ、牧場や地域に根ざした食の魅力を伝えることを目指している。</p>
                {/* <p>学生時代はイルカ・クジラの研究を行い、修士号を取得。人と動物の共存についての考えを深めている。</p> */}
              </div>
            </div>
        </div>
        
        <div className={styles.about__like}>
          <p><span>活動</span>：インタビューライター、地域バイヤー、WEBアプリ開発・運用、</p>
        </div>
        <div className={styles.about__like}>
          <p><span>好き</span>：牧場、旅、温泉、食べること、トレイルランニング、プログラミング</p>
        </div>
        <div className={styles.about__like}>
          <p><span>溺愛</span>：フェレット</p>
        </div>

        <div className={styles.about__history}>
          <div className={styles.about__skill}>
            <p className={styles.about__skillTitle}>Skill</p>
            <p><span>  HTML</span><span>〜４年</span></p>
            <p><span>  CSS</span><span>〜４年</span></p>
            <p><span>  JavaScript</span><span>〜４年</span></p>
            <p><span>  PHP/Laravel</span><span>〜４年</span></p>
            <p><span>  React</span><span>〜１年</span></p>
            <p><span>  Next.js</span><span>〜１年</span></p>
            <p><span>  MySQL</span><span>〜４年</span></p>
            <p><span>  Git</span><span>〜４年</span></p>
            <p><span>  AWS</span><span>〜４年</span></p>
          </div>
        </div>
        <div className={styles.about__history}>
          <div className={styles.about__skill}>
              <p className={styles.about__skillTitle}>History</p>
              <p><span>  2024年</span><span>コミュニティマネージャー／地域バイヤープログラム第4期（WHERE）</span></p>
              <p><span>  2024年</span><span>地域バイヤープログラム第3期（WHERE）受講</span></p>
              <p><span>  2024年</span><span>インタビューライタープログラム第5期（WHERE）受講</span></p>
              <p><span>  2023年</span><span>G&#39;s ACADEMY DEVコース受講</span></p>
              <p><span>  2020年</span><span>SAMURAI ENGINEER エキスパートコース受講</span></p>
          </div>
        </div>
      </div>
  );
}

export default About