import { NextPage } from "next";

const NotFoundPage: NextPage = () => {
  return (
    <main className="mt-[5rem] text-center">
      <h1 className="text-[5rem] m-0 font-black text-[#262626] uppercase bg-cover bg-center font-monsterrat highlight">
        Not Found
      </h1>
      <p className="text-[1.5rem] font-medium  text-[#ddd8d8]">
        Unfortunately, we could not find the requested page or resource.
      </p>
    </main>
  );
};

export default NotFoundPage;