import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import SocialButton from "./socialButton";

export default function Connect() {
  return (
    <section className="flex flex-col">
      <div className="w-full justify-center flex mt-2 mb-1">
        <div className="text-4xl">FIND ME ON</div>
      </div>
      <div className="w-full justify-center flex mt-1 mb-1">
        <div className="text-lg">Feel free to connect with me</div>
      </div>
      <div className="w-full justify-center flex mt-1 mb-2">
        <SocialButton
          icon={<IconBrandGithub size={32} className="mx-auto" />}
          link="https://www.github.com/kylescudder"
        />
        <SocialButton
          icon={<IconBrandTwitter size={32} className="mx-auto" />}
          link="https://twitter.com/i/flow/login?redirect_after_login=%2Flittlescud"
        />
        <SocialButton
          icon={<IconBrandLinkedin size={32} className="mx-auto" />}
          link="https://uk.linkedin.com/in/kyle-scudder-9417a861"
        />
        <SocialButton
          icon={<IconBrandInstagram size={32} className="mx-auto" />}
          link="https://www.instagram.com/scudderkyle/"
        />
      </div>
    </section>
  );
}
