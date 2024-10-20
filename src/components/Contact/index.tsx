import React from 'react';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  // e の型を React.FormEvent<HTMLFormElement> に指定
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // フィールドが全て入力されているかチェック
    if (!name || !email || !message) {
      setStatus('すべてのフィールドを入力してください。');
      return;
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (data.success) {
      setStatus('お問い合わせありがとうございました！');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('メッセージの送信に失敗しました。もう一度お試しください。');
    }
  };

  return (
<div className={styles.contact}>
  <div className={styles.contact__title}>Contact Us</div>
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">お名前<span className={styles.required}> ※必須</span></label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="email">メールアドレス<span className={styles.required}> ※必須</span></label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="message">お問い合わせ内容<span className={styles.required}> ※必須</span></label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
    </div>
    <button type="submit">送信</button>
  </form>
  {status && <p>{status}</p>}
</div>

  );
};

export default Contact;
