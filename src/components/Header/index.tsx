import { Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion"
import { signIn, signOut, useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { handleField } from "../../store/companies";
import { useWindowDimensions } from "../../hooks";

const index = () => {
  const { data: session } = useSession()
  const dispatch = useDispatch()

  const [toggel, setToggel] = useState<boolean>(false)
  const { width } = useWindowDimensions()

  return (
    <nav className="lg:fr-jb-ic bg-teal p-6 sm:block lg:flex">

      <div className="fr-jb-ic">
        {/* app brand */}
        <div className="flex items-center flex-grow lg:w-80 sm:w-auto">
          <Link href={"/"}>
          <Typography className="text-3xl font-extrabold">
            Daily.<span className=" text-rootblue">ai</span>
          </Typography>
          </Link>
        </div>

        {/* menu icon */}
        <div className="block lg:hidden">
          <button onClick={() => setToggel(!toggel)} className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
      </div>

      {/* app routes */}
      <motion.div
        animate={{y: width! > 1024 ? 0 : toggel ? 0 : -400, height: width! < 1024 && !toggel ? 0 : "auto"}}
        className={`sm:w-full sm:${toggel ? 'block' : 'hidden'} lg:top-0 lg:fr-jb-ic lg:flex lg:w-2/3 z-10`}
      >
          <ul className="lg:header-lg">
            {["Product", "Stories", "About", "Blog", "Team"].map(
              (item, index) => (
                <li key={index} style={{margin: 10}}>
                  <Link href={`/${item.toLowerCase()}`} onClick={() => setToggel(false)}>{item}</Link>
                </li>
              )
            )}
        </ul>

        {/* app auth */}
        <div className="fr-jc-ic gap-6">
          {
            session
              ? (
                  <button
                    onClick={() => signOut()}
                    className="border-1 rounded-md border border-[#0098ED] p-2 px-6 text-[#0098ED]"
                  >
                    Sign out
                  </button>
                )
              :(
                <button
                  onClick={() => signIn()}
                  className="border-1 rounded-md border border-[#0098ED] p-2 px-6 text-[#0098ED]"
                >
                  Sign In
                </button>
              )
          }

          <Link
            onClick={() => dispatch(handleField({ active: 0 }))}
            className="rounded-md bg-[#0098ED] p-2 px-6 text-white"
            href={"/bookdemo"}
          >
            Book a demo
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default index;
