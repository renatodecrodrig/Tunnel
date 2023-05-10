import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { BackgroundCard, Benefit, Card } from "../components";
import avatar from "public/Avatar.png";
import Chart from "public/Chart.png";
import Dollar from "public/Dollar.png";
import Envelope from "public/Envelope.png";
import ThumbsUp from "public/ThumbsUp.png";
import BlueCircle from "public/BlueCircle.png";
import Mask from "public/Mask.png";
import ThumnsDn from "public/ThumnsDn.png";
import Image from "next/image";

const index = () => {
  return (
    <div className="fc-jc-ic gap-4">
      {/* header content */}
      <section>
        <div className="m-8 sm:w-full md:w-full">
          <Typography variant="h3" className="text-center font-outer font-bold">
            Publish an AI Newsletter‚ That Your. <br /> Audience Will Actually
            Read
          </Typography>
        </div>

        <div className="mb-8 sm:w-full md:w-full">
          <Typography className="flex-1 text-center font-europa text-2xl font-normal">
            We help brands publish AI-powered email newsletters that generate{" "}
            <br /> 40-60% daily open rates without you{" "}
            <span className="font-bold">writing a single piece of content.</span>
          </Typography>
        </div>
      </section>

      {/* action section */}
      <section className="fr-jc-ic gap-3">
        <Link
          className="rounded-md bg-rootblue p-3 px-16 text-white"
          href={"/bookdemo"}
        >
          Book a demo
        </Link>

        <Link href={"/"} className="text-roobg-rootblue underline">
          Watch a 5min Video
        </Link>
      </section>

      <div className=" sm:fc-jc-ic sm:gap-10 md:gap-4 lg:fr-jb-ic my-8 w-full lg:items-start px-12">

        {/* left content */}
        <div className="sm:w-full sm:fc-jc-ic md:w-1/2 mb-12 lg:my-2 lg:w-fit">
          {Array(2)
            .fill("")
            .map((_, index) => (
              <Card
                key={index}
                description="Working with the team at Daily is amazing."
                src={avatar}
                rating={4.5}
                name="Cameron Herold"
                title="CEO Whisperer"
              />
            ))}
        </div>

        {/* video */}
        <div className="relative flex-1 bg-gray-300">
          <div className="absolute -top-12 z-0 h-40 w-40">
            <BackgroundCard image={BlueCircle} className="w-10 h-10">
              <Image
                src={Mask}
                alt="mask"
                className="absolute left-5 top-8 z-30"
              />
            </BackgroundCard>
          </div>

          <div className="fr-jb-ic justify-around gap-3 p-3">
            <div className="w-10" />
            <Typography variant="h6" className="flex flex-row gap-2">
              Hey I’m Joe, Let’s Automate Your Newsletter.{" "}
              <Link href={"/"} className="font-extrabold">
                Click Play Now
              </Link>
              <Image src={ThumnsDn} alt="ThumnsDn" />
            </Typography>
          </div>

          <div className="flex-1 sm:w-full relative">
            <video
              src="blob:https://daily.ai/1bf58b62-203d-40c7-af3d-23a9ca0d730a"
              className="h-72 w-full bg-white"
              controls
            />
          </div>
        </div>

        {/* right content */}
        <div className="flex flex-col mt-6 gap-3">
          {[
            { src: Envelope, content: "AI Automated Newsletter" },
            { src: Chart, content: "40-60% Daily Rate" },
            { src: Dollar, content: "Increase Your Revenue" },
            { src: ThumbsUp, content: "Turnkey setup" },
          ].map(({ src, content }, index) => (
            <Benefit key={index} content={content} src={src} className="mb-4" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
