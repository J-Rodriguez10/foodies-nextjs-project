"use client";

import { FC } from "react";
import { useFormStatus } from "react-dom";

const MealsFormSubmitButton:FC = () => {
  const {pending} = useFormStatus();

  return (
    <button
      className="border-0 py-3 px-8 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-sm cursor-pointer text-lg shadow-md hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] focus:bg-gradient-to-r focus:from-[#fd4715] focus:to-[#f9b241] disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed"
      disabled={pending}
      type="submit"
    >
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
};

export default MealsFormSubmitButton;
