"use client"

import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
	return (
		<div
			className="text-5xl font-semibold mb-4"
		>
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
			</div>
  );
}

export default Type;
