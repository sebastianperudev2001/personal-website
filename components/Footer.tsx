import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <section id="contact">
      <footer className="w-full pt-20 pb-10">
        {/* background grid */}
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <Image
            width={500}
            height={500}
            src="/footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50 "
          />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw]">
            Ready to transform your business with{" "}
            <span className="text-purple">AI</span>?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Let&#39;s connect and discuss how can I help you with your next
            project.
          </p>
          <a href="mailto:schavarry01@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Made with ❤️ in Lima 🇵🇪
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((info, index) => (
              <a key={index} href={info.url} target="_blank">
                <div
                  key={info.id}
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                  <Image width={20} height={20} src={info.img} alt="icons" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
