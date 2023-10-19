"use client"

import GitHubRepository from "@/lib/models/GitHubRepository";
import { useRouter } from "next/navigation";

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
        <button
          className="w-full bg-purple-900 text-white rounded-xl py-2 px-3 mb-2"
          onClick={() => handleClick(props.repo.homepage)}
        >
          Go to the site
        </button>
        <button
          className="w-full bg-purple-900 text-white rounded-xl py-2 px-3"
          onClick={() => handleClick(props.repo.git_url)}
        >
          Go to the repo
        </button>
      </div>
    </div>
  );
}