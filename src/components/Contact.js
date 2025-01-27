import { RiGitBranchLine, RiGithubFill, RiLinkedinFill, RiTwitterLine } from "@remixicon/react";
import React, { useRef } from "react";

const Contact = () => {
  const contactref = useRef(null);
  return (
    <footer className="py-16" id="contact" ref={contactref}>
      <div className="px-4">
        <h2 className="mb-4 text-center text-3xl lg:text-4xl font-medium">
          Contact
        </h2>
        <div className="text-center">
          <p className="text-lg mb-4">
            Feel free to reach out to me via email :{" "}
            <a
              href="mailto:narendrasingampalli2@gmail.com"
              className="hover:underline"
            >
              narendrasingampalli2@gmail.com
            </a>
          </p>
          <div className="flex gap-6 justify-center">
            <a ><RiLinkedinFill/></a>
            <a><RiGithubFill/></a>
            <a><RiTwitterLine/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
