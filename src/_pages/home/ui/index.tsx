import Link from "next/link";

export const HomePage = () => {
  return (
    <main>
      HomePage
      <br />
      <Link href="/about">Страница о нас</Link>
    </main>
  );
};
