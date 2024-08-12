import { Meal } from "@/components/interfaces/meals-interfaces";
import ImagePicker from "@/components/meals/image-picker";
import { shareMeal } from "@/lib/server-actions";

const labelStyles =
  "block mb-2 text-base font-montserrat uppercase text-[#b3aea5] font-bold";

const inputStyles =
  "block w-full p-2 px-4 rounded border border-[#454952] bg-[#1c2027] text-lg font-montserrat text-[#ddd6cb] focus:outline-[#f99f2a] focus:bg-[#1f252d]";

export default function ShareMealPage() {


  return (
    <>
      <header className="gap-12 my-12 mx-auto mb-20 w-[90%] max-w-[75rem] text-[#ddd6cb] text-xl">
        <h1 className="font-montserrat text-[2.75rem] font-extrabold l-spacing-s mb-8">
          Share your{" "}
          <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p className="font-thin">Or any other meal you feel needs sharing!</p>
      </header>

      <main className="w-[90%] max-w-[75rem] my-12 mx-auto text-white">
        <form className="max-w-[50rem]" action={shareMeal}>
          {/* row container */}
          <div className="flex gap-4">
            <p className="w-full">
              <label className={labelStyles} htmlFor="name">
                Your name
              </label>
              <input
                className={inputStyles}
                type="text"
                id="name"
                name="name"
                required
              />
            </p>

            <p className="w-full">
              <label className={labelStyles} htmlFor="email">
                Your email
              </label>
              <input
                className={inputStyles}
                type="email"
                id="email"
                name="email"
                required
              />
            </p>
          </div>
          <p>
            <label className={labelStyles} htmlFor="title">
              Title
            </label>
            <input
              className={inputStyles}
              type="text"
              id="title"
              name="title"
              required
            />
          </p>
          <p>
            <label className={labelStyles} htmlFor="summary">
              Short Summary
            </label>
            <input
              className={inputStyles}
              type="text"
              id="summary"
              name="summary"
              required
            />
          </p>
          <p>
            <label className={labelStyles} htmlFor="instructions">
              Instructions
            </label>
            <textarea
              className={inputStyles}
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          <p className="text-right">
            <button
              className="border-0 py-3 px-8 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-sm cursor-pointer text-lg shadow-md hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] focus:bg-gradient-to-r focus:from-[#fd4715] focus:to-[#f9b241] disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed"
              type="submit"
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
}
