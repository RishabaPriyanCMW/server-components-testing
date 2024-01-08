"use client";
import { useState } from "react";
const LikeCounter = ({ children }: { children: React.ReactNode }) => {
  const [likes, setLikes] = useState(0);
  return (
    <div>
      {children}
      <p>no of likes </p>
      <p>{likes}</p>
      <button
        onClick={() => {
          setLikes((c) => c + 1);
        }}
      >
        like
      </button>
    </div>
  );
};
export default LikeCounter;
