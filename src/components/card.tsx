import React from "react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white w-72 h-60 flex items-center justify-center p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      {children}
    </div>
  );
}

export default Card;
