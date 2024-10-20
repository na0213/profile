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
                <p>地域バイヤー、インタビューライターとしての活動も始めたばかり。</p>
                <p>学生時代はイルカ・クジラの研究を行い、修士号を取得。</p>
                <p>人と動物と環境のよりよい共存のためにできることを模索している。</p>
              </div>
            </div>
        </div>
        
        <div className={styles.about__like}>
            <p>活動　：インタビューライター、地域バイヤー、WEBアプリ開発</p>
            <p>好き　：旅、牧場、温泉、食べること、トレイルランニング</p>
            <p>溺愛　：フェレット</p>

            <div className={styles.about__skill}>
                <p className={styles.about__skillTitle}>Skill</p>
                <p><span>　HTML</span><span>〜４年</span></p>
                <p><span>　CSS</span><span>〜４年</span></p>
                <p><span>　JavaScript</span><span>〜４年</span></p>
                <p><span>　PHP/Laravel</span><span>〜４年</span></p>
                <p><span>　React</span><span>〜１年</span></p>
                <p><span>　Next.js</span><span>〜１年</span></p>
                <p><span>　MySQL</span><span>〜４年</span></p>
                <p><span>　Git</span><span>〜４年</span></p>
                <p><span>　AWS(S3)</span><span>〜４年</span></p>
            </div>
            
            <div className={styles.about__skill}>
                <p className={styles.about__skillTitle}>History</p>
                <p><span>　2020</span><span>SAMURAI ENGINEER エキスパートコース</span></p>
                <p><span>　2023</span><span>G's ACADEMY</span></p>
                <p><span>　2024</span><span>地域バイヤープログラム（WHERE）</span></p>
                <p><span>　2024</span><span>インタビューライタープログラム（WHERE）</span></p>
            </div>
        </div>
    </div>
  );
}

export default About