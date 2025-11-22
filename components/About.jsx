import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-black min-h-screen text-white p-8 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left side - Logo */}
          <div className="flex-1">
            <div className="p-16 lg:p-24">
              <Image
                src="/ami_logo.png"
                alt="logo"
                width={300}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold">
              ABOUT <span className="text-red-600">AMI</span>
              <div className="h-1 w-24 bg-red-600"></div>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              reiciendis cumque illum, voluptatum porro quaerat enim culpa
              molestiae qui facere tempora odit unde. Velit iure voluptas
              temporibus cupiditate vero est?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
