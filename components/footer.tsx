import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export default function Footer() {
  const currentDate = new Date();

  return (
    <footer className="bg-seance-900 text-white flex p-4 px-28 justify-between">
      <div className="container">
        <div className="flex-grow">
          &copy; {currentDate.getFullYear()} Kyle Scudder
        </div>
        <div className="flex space-x-2">
          <a href="https://www.github.com/kylescudder" target="_blank">
            <IconBrandGithub />
          </a>
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2Flittlescud"
            target="_blank"
          >
            <IconBrandTwitter />
          </a>
          <a
            href="https://uk.linkedin.com/in/kyle-scudder-9417a861"
            target="_blank"
          >
            <IconBrandLinkedin />
          </a>
          <a href="https://www.instagram.com/scudderkyle/" target="_blank">
            <IconBrandInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
