import React from "react";
import Typewriter from "typewriter-effect";

const Writer = () => {
  return (
    <div className="type">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Welcome To The Placement Portal")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Welcomes You")
            .start();
        }}
      />
    </div>
  );
};

export default Writer;
