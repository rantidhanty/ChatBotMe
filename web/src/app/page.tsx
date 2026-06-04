import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.kicker}>ChatBotMe</p>
          <h1>Belajar membangun chatbot secara bertahap, sambil memahami alasannya.</h1>
          <p className={styles.description}>
            Repo ini sekarang sudah punya latihan awal yang memperlihatkan bedanya
            page, komponen client, props, dan API route dalam satu alur sederhana.
          </p>
        </div>

        <div className={styles.actions}>
          <Link className={styles.primary} href="/chat">
            Buka Latihan Chat
          </Link>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs/app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baca Docs Next.js
          </a>
        </div>
      </section>

      <section className={styles.grid}>
        <article className={styles.card}>
          <p className={styles.cardLabel}>Yang Sudah Ada</p>
          <h2>UI chat dummy</h2>
          <p>Halaman `/chat` memperlihatkan state, input, daftar pesan, dan props.</p>
        </article>
        <article className={styles.card}>
          <p className={styles.cardLabel}>Backend Layer</p>
          <h2>API route lokal</h2>
          <p>`/api/chat` menerima request dari frontend lalu mengembalikan JSON sederhana.</p>
        </article>
        <article className={styles.card}>
          <p className={styles.cardLabel}>Tujuan Belajar</p>
          <h2>Alur dasar dulu</h2>
          <p>OpenAI sengaja belum dipasang supaya struktur aplikasi dipahami lebih dulu.</p>
        </article>
      </section>
    </main>
  );
}
