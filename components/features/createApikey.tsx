import React from "react";
import Paragraph from "../ui/global/title";
import Title from "../ui/global/title";
import Button from "../ui/global/button";

const CreateApiKey: React.FC = () => {
  return (
    <section className=" flex flex-col  gap-y-3 w-full">
      <div className="max-w-lg h-auto  w-full p-6 flex flex-col gap-y-5 bg-[#FCFCFC]  shadow-[0px_0px_0px_1px_#09090B0D]  rounded-[10px]">
        <section className=" flex flex-col gap-y-2">
          <Title text="Create new API key" />
          <Paragraph text="Your secret API Key will be shared with all users belonging to your organization." />
          <input
            id="endpoint"
            type="text"
            placeholder="API key name"
            className="  focus:shadow-[inset_0px_0px_0px_1px_#A48AFB] outline-none transition-all   py-2 px-3  rounded-[10px] w-full  shadow-[inset_0px_0px_0px_1px_#D6D6D6B2]
 placeholder:text-[#A3A3A3]  "
          />
        </section>

        <section className="flex flex-col gap-y-[10px]">
          <div className="flex justify-end gap-4   tracking-normal font-medium">
            <Button cta="Cancel" className=" bg-none text-grayMain " />
            <Button
              cta=" Create secret key"
              className="bg-purpleDeep  shadow-[0px_0px_0px_1px_#7839EE] !px-3 text-white "
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default CreateApiKey;
