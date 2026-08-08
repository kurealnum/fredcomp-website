"use client";

export default function Test() {
  return <button onClick={() => fetch("/thiswillnotwork")}>CLICKME</button>;
}
