import { Typography } from "@mui/material";
import { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLDivElement> {
  src: StaticImageData;
  content: string;
}

const index: NextPage<Props> = ({ src, content }) => {
  return (
    <div className="fr-jb-ic justify-start gap-4 rounded-md border-2 border-gray-200 bg-gray-100 p-3 px-3">
      <Image src={src} alt="benefit" />
      <Typography fontWeight={100} className="font-outer text-lg font-thin">
        {content}
      </Typography>
    </div>
  );
};

export default index;
