"use client";

import { FormEvent, useState } from "react";
import styles from "./ChatPlayground.module.css";
import type { ChatMessage } from "@/types/chat";

type ChatPlaygroundProps = {
  initialMessages: ChatMessage[];
};

type ChatResponse = {
  reply: string;
};

function createMessage(role: ChatMessage["role"], text: string): ChatMessage {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
  };
}

export default function ChatPlayground({
  initialMessages,
}: ChatPlaygroundProps) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedInput = input.trim();

    if (!trimmedInput || isLoading) {
      return;
    }

    const userMessage = createMessage("user", trimmedInput);

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedInput,
        }),
      });

      if (!response.ok) {
        throw new Error("Gagal mendapatkan balasan dari endpoint latihan.");
      }

      const data = (await response.json()) as ChatResponse;

      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage("assistant", data.reply),
      ]);
    } catch {
      setError(
        "Permintaan ke backend dummy gagal. Coba lagi setelah server dev berjalan normal."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className={styles.playground}>
      <div className={styles.panelHeader}>
        <div>
          <p className={styles.eyebrow}>Latihan Interaktif</p>
          <h2>Frontend kirim request, backend dummy membalas</h2>
        </div>
        <span className={styles.status}>{isLoading ? "Memproses..." : "Siap"}</span>
      </div>

      <div className={styles.messageList}>
        {messages.map((message) => (
          <article
            key={message.id}
            className={
              message.role === "user" ? styles.userMessage : styles.assistantMessage
            }
          >
            <p className={styles.messageRole}>
              {message.role === "user" ? "User" : "Assistant Dummy"}
            </p>
            <p>{message.text}</p>
          </article>
        ))}
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="chat-input">
          Tulis pesan untuk menguji alur request ke API route
        </label>
        <div className={styles.formRow}>
          <input
            id="chat-input"
            className={styles.input}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Contoh: jelaskan bedanya props dan API"
          />
          <button className={styles.button} type="submit" disabled={isLoading}>
            Kirim
          </button>
        </div>
        {error ? <p className={styles.error}>{error}</p> : null}
      </form>
    </section>
  );
}
