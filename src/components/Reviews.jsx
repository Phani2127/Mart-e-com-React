import React from "react";

export default function Reviews() {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <p>John Doe</p>
        <p className="text-yellow-400">4.8 (ratings)</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <p>John Doe</p>
        <p className="text-yellow-400">4.9 (ratings)</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}
