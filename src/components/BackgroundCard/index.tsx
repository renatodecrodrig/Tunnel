import { Typography } from "@mui/material";
import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  image: StaticImageData;
  children?: JSX.Element;
  width?: String | Number;
  height?: String | Number;
}

const index: NextPage<Props> = ({
  image,
  children,
  width,
  height,
  ...props
}) => {
  return (
    <div className="relative" {...props}>
      <div className="absolute left-0 top-0 z-10 h-full w-full">
        <Image
          src={image}
          alt={"bg_image"}
          width={"100%"}
          height={"100%"}
          className="w-full h-full"
        />
        <div className="z-1 absolute left-0 top-0 z-20 h-full w-full p-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default index;
