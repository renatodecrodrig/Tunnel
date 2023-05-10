import React from "react";
import { useSelector } from "react-redux";
import { Steper } from "../../components";
import { type RootState } from "src/store"
import { Meeting, Profile, Signup, Welcome } from "./steper";

const index = () => {

  const activeStep = useSelector((store: RootState) => store.companies.active)

return <div className="my-4 lg:fc-jc-ic">
    {/* steper sectin */}
    <section className="w-full">
      <Steper active={activeStep} />
    </section>

    {/* fields section */}
    <section className="gap-4 my-8 w-full">
      {
        [Signup, Meeting, Profile, Welcome].map((Item, index) => activeStep === index && <Item key={index} />)
      }
    </section>
  </div>;
};

export default index;
