// components/Footer.jsx
import React from "react";
import {
  LinkedinFilled,
  GithubFilled,
  InstagramFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1f] border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-xl">☁️</span>
            <p className="text-sm text-gray-400">
              © 2024 WeatherNow. All rights reserved.
            </p>
          </div>

          {/* Social Media Icons - Ant Design */}
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors p-2 hover:bg-white/5 rounded-full"
              aria-label="LinkedIn"
            >
              <LinkedinFilled style={{ fontSize: "20px" }} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors p-2 hover:bg-white/5 rounded-full"
              aria-label="GitHub"
            >
              <GithubFilled style={{ fontSize: "20px" }} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 transition-colors p-2 hover:bg-white/5 rounded-full"
              aria-label="Instagram"
            >
              <InstagramFilled style={{ fontSize: "20px" }} />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-sm">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Terms
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
