"use client";

export default function getHash(): string {
  return typeof window !== "undefined" ? window.location.hash : "";
}
