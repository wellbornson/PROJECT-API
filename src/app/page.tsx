import Image from "next/image";

export default async function Home() {
  const url = await fetch("https://simple-books-api.glitch.me/books")
  const res = await url.json()
  console.log(res)
  return (
   <main>
    hello
   </main>
  );
}
