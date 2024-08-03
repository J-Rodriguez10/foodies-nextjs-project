import { NextPage } from "next";

import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main>
      <h1>This is the home page</h1>
      <p>
        <Link href="./meals">Meals</Link>
      </p>
      <p>
        <Link href="./meals/share">Share Meal</Link>
      </p>
      <p>
        <Link href="./community">Community</Link>
      </p>
    </main>
  );
}

export default Home;