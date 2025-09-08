import React from "react";
import { Avatar, Link } from "@heroui/react";
import { images } from "@/constants/constantProvider";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-zinc-700/50 py-6 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Logo & Organization */}
          <div className="flex flex-col items-center gap-2">
            <Avatar
              as="button"
              className="transition-transform w-20 h-20"
              name="logo"
              src={images.header_logo}
            />
            <div className="text-center">
              <p className="text-sm text-zinc-400">Example University</p>
              <p className="text-sm text-zinc-400">Faculty of Engineering</p>
            </div>
          </div>

          {/* Center: Contact */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-zinc-400">
              © 2025 Wubaluba dub dub.
            </p>
            <div className="flex gap-4">
              <Link
                href="mailto:contact@example.com"
                className="text-sm text-zinc-400 hover:text-black dark:hover:text-white"
              >
                Email
              </Link>
              <Link
                href="tel:+1234567890"
                className="text-sm text-zinc-400 hover:text-black dark:hover:text-white"
              >
                Phone
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="text-center">
              <p className="text-sm text-zinc-400">Funding: my mom & dad ♥</p>
              <p className="text-sm text-zinc-400">Project ID: DEMO-4IDGAF2XD0</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
