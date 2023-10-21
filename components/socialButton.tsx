"use client";

import { useRouter } from "next/navigation";

export default function SocialButton(props: {
  icon: JSX.Element;
  link: string;
}) {
  const router = useRouter();

  const handleClick = (url: string) => {
    router.push(url);
  };
  return (
    <a href={props.link} target="_blank">
      <div className="rounded-full bg-white w-10 h-10 text-seance-600 mx-4 flex flex-col justify-center">
        {props.icon}
      </div>
    </a>
  );
}
