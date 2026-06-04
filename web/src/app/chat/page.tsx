import ChatPlayground from "@/components/chat/ChatPlayground";
import type { ChatMessage } from "@/types/chat";
import styles from "./page.module.css";

const initialMessages: ChatMessage[] = [
  {
    id: "assistant-1",
    role: "assistant",
    text: "Ini adalah balasan awal dari server component. Data awal ini dikirim ke komponen client lewat props.",
  },
];

const flowSteps = [
  {
    title: "1. Page di server",
    description:
      "File page ini menyiapkan data awal lalu mengirimkannya ke komponen interaktif.",
  },
  {
    title: "2. Props ke komponen client",
    description:
      "Komponen client menerima initialMessages sebagai props, lalu mengelola state input dan daftar pesan.",
  },
  {
    title: "3. Request ke API route",
    description:
      "Saat tombol kirim ditekan, frontend memanggil /api/chat. Balasannya masih dummy supaya fokus tetap ke alur.",
  },
];

export default function ChatPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Praktik Bertahap</p>
          <h1>Halaman chat pertama untuk memahami frontend, backend, props, dan API.</h1>
          <p className={styles.description}>
            Latihan ini belum memakai OpenAI. Tujuannya adalah membuat alur dasar
            aplikasi chatbot terlihat nyata terlebih dahulu.
          </p>
        </div>

        <div className={styles.flowGrid}>
          {flowSteps.map((step) => (
            <article key={step.title} className={styles.flowCard}>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ChatPlayground initialMessages={initialMessages} />
    </main>
  );
}
