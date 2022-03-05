import React from "react";

function Grids() {
  return (
    <div className="mx-auto h-full flex justify-center items-center">
      <section className="grid grid-cols-5 gap-2">
        {Array.from(Array(30)).map((n, i) => (
          <div
            key={i}
            className="p-4 aspect-square w-16 border-2 border-gray-300"
          ></div>
        ))}
      </section>
    </div>
  );
}

export default Grids;
