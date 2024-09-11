import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-[44vh] gap-4 px-3">
        <h1 className="font-bold text-5xl">About Us</h1>
        <p className="text-center max-w-2xl">
          Welcome to <strong>Buy Me a Chai!</strong> We're a community-driven
          crowdfunding platform where creators and fans connect. Our goal is to
          empower creators by providing them with the tools to bring their
          projects to life, one chai at a time.
        </p>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="flex flex-col justify-center items-center text-white h-[44vh] gap-4 px-3">
        <h1 className="font-bold text-3xl">Our Story</h1>
        <p className="text-center max-w-3xl">
          <strong>Buy Me a Chai</strong> was born out of a simple idea—what if
          creators could fund their passion projects with the support of their
          biggest fans? We wanted to create a space where small gestures, like
          buying a chai, could make a big difference. Whether you're a writer,
          artist, developer, or anything in between, our platform is here to
          help you turn your dreams into reality.
        </p>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-14 flex flex-col items-center justify-center px-3">
        <h2 className="text-3xl font-bold text-center mb-14">Our Mission</h2>
        <p className="text-center max-w-2xl text-lg leading-relaxed">
          Our mission is to empower creators by providing them with a platform
          where their fans can support them in meaningful ways. We believe in
          the power of community and the impact of small, consistent support.
          Together, we can help bring creative projects to life and make a
          difference one chai at a time.
        </p>
        <div className="mt-8">
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Join Us
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Meet the Team</h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center text-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              alt="Team Member 1"
              width={88}
              src="/avatar.gif"
            />
            <p className="font-bold">John Doe</p>
            <p>Founder & CEO</p>
          </div>

          <div className="item space-y-3 flex flex-col justify-center items-center text-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              alt="Team Member 2"
              width={88}
              src="/avatar.gif"
            />
            <p className="font-bold">Jane Smith</p>
            <p>Lead Developer</p>
          </div>

          <div className="item space-y-3 flex flex-col justify-center items-center text-center">
            <img
              className="bg-slate-400 rounded-full p-2"
              alt="Team Member 3"
              width={88}
              src="/avatar.gif"
            />
            <p className="font-bold">Alice Johnson</p>
            <p>Community Manager</p>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "About - Get Me A Chai",
}