import { NextPage } from "next";
import Link from "next/link";

import ImageSlideShow from "@/components/images/image-slideshow";

const ctaLinkStyle1 =
  "inline-block mt-4 py-2 px-4 rounded-md text-white font-bold no-underline  first:bg-transparent first:font-normal first:text-[#ff9b05] first:pl-0 first:hover:bg-transparent first:hover:text-[#f9b241]";
const ctaLinkStyle2 =
  "inline-block mt-4 py-2 px-4 rounded-md bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold no-underline hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] first:bg-transparent first:font-normal first:text-[#ff9b05] first:pl-0 first:hover:bg-transparent first:hover:text-[#f9b241]";


const sectionStyles = "flex flex-col text-[#ddd6cb] text-[1.5rem] max-w-[50rem] w-[90%] my-8 mx-auto text-center";

const Home: NextPage = () => {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-[90%] max-w-[75rem]">
        {/* slide show */}
        <div className="w-[40rem] h-[25rem] ">
          <ImageSlideShow />
        </div>

        {/* hero container */}
        <div>
          {/* hero */}
          <div className="text-[#ddd6cb] text-xl">
            <h1 className="text-2xl font-bold font-monsterrat tracking-wide uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world!</p>
          </div>

          {/* cta */}
          <div className="text-xl flex gap-4">
            <Link className={ctaLinkStyle1} href="./community">Join The Community</Link>
            <Link className={ctaLinkStyle2} href="./meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={sectionStyles}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={sectionStyles}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
