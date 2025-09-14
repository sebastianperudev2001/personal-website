import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sebastian",
      icon: <Github size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sebastian",
      icon: <Linkedin size={20} />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sebastian",
      icon: <Twitter size={20} />,
    },
    {
      name: "Email",
      url: "mailto:sebastian@example.com",
      icon: <Mail size={20} />,
    },
  ];

  return (
    <footer className="border-t border-gray-200 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="font-mono text-sm text-gray-600">
            Made with ❤️ in Lima 🇵🇪
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="font-mono text-xs text-gray-500">
            © 2024 Sebastián Chávarry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
