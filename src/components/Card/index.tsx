import { NextPage } from "next";
import React from "react";
import { Avatar, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Image, { StaticImageData } from "next/image";
import bg_image from "public/Union.png";
import { BackgroundCard } from "..";

interface Props extends React.ButtonHTMLAttributes<HTMLDivElement> {
  description: string;
  rating: number | null;
  src: StaticImageData;
  name: string;
  title: string;
}

const index: NextPage<Props> = ({
  description,
  rating,
  src,
  name,
  title,
  ...props
}) => {
  return (
    <div className="w-full" {...props}>
      <div className="md:h-20 sm:h-12 relative ">
        <BackgroundCard image={bg_image} className="sm:w-full h-12 w-72">
          <Typography className="z-1 absolute left-0 top-0 h-full w-full p-2">
            {description}
          </Typography>
        </BackgroundCard>
      </div>

      <div className="flex flex-row items-center gap-4 p-4">
        <Image src={src} alt={name} style={{ width: "auto", height: "auto" }} />
        <div>
          <Rating
            name="rating"
            value={rating}
            readOnly
            precision={0.5}
            size="small"
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />

          <Typography>{name}</Typography>
          <Typography>{title}</Typography>
        </div>
      </div>
    </div>
  );
};

export default index;
