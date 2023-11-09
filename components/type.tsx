"use client"

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
				strings: [
					".NET",
					"C#",
					"Web API 2",
					"Entity Framework",
					"MS SQL",
					"TypeScript",
					"React",
					"NextJS",
				],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
