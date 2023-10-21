"use client"

import GitHubRepository from "@/lib/models/GitHubRepository";
import { useRouter } from "next/navigation";
import Button from "./button";

export default function Project(props: { repo: GitHubRepository }) {
	const router = useRouter();

	const handleClick = (url: string) => {
		router.push(url)
	}
	return (
    <div className="bg-gray-800 border p-4 rounded-lg text-white">
      <div className="border-b border-gray-700 mb-2 pb-2">
        <h3 className="text-lg font-semibold">{props.repo.name}</h3>
      </div>
      <p className="mb-4">{props.repo.description}</p>
      <div className="mb-2">
        <Button text="Go to the site" url={props.repo.homepage} />
        <Button text="Go to the repo" url={props.repo.git_url} />
      </div>
    </div>
  );
}