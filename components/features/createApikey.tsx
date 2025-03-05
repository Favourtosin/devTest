import React, { useState } from "react";
import Paragraph from "../ui/global/title";
import Title from "../ui/global/title";
import Button from "../ui/global/button";
import Input from "../ui/global/input";

const CreateApiKey: React.FC = () => {
  const [apiKey, setApiKey] = useState("");

  return (
    <section className=" flex flex-col justify-center items-center   w-full">
      <section className="  w-[95%]  flex flex-col  justify-center  items-center   gap-y-3   ">
        <div className="max-w-lg h-auto  w-full p-4 flex flex-col gap-y-5 bg-[#FCFCFC]  shadow-[0px_1px_2px_0px_#09090B0D,0px_0px_0px_1px_#09090B0D]  rounded-[10px]">
          <section className=" flex flex-col gap-y-2">
            <Title text="Create new API key" />
            <Paragraph text="Your secret API Key will be shared with all users belonging to your organization." />

            <Input
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="API key name"
              value={apiKey}
            />
          </section>

          <section className="flex flex-col gap-y-[10px]">
            <div className="flex justify-end gap-4   tracking-normal font-medium">
              <Button
                onclick={() => setApiKey("")}
                cta="Cancel"
                className=" bg-none text-grayMain "
              />
              <Button
                onclick={() => setApiKey("fakiyaoluwatosin@gmail.com")}
                cta=" Create secret key"
                className="bg-purpleDeep  shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#2E125E66,0px_0px_0px_1px_#FFFFFF33_inset] !px-3 text-white "
              />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default CreateApiKey;
