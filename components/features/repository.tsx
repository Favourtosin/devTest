import React, { useState } from "react";
import CustomCheckbox from "../ui/global/CustomCheckbox";
import Title from "../ui/global/title";
import Paragraph from "../ui/global/paragraph";
import Acme from "../ui/global/acme";

const Repository: React.FC = () => {
  return (
    <section className=" flex flex-col  gap-y-3 w-full">
      <div className="max-w-lg h-auto  w-full p-6 flex flex-col gap-y-5 bg-[#FCFCFC]  shadow-[0px_0px_0px_1px_#09090B0D]  rounded-[10px]">
        <section className="flex flex-col gap-y-[10px]">
          <div className=" flex gap-x-2 w-max items-center justify-center">
            <Title text="Connect repositories to" />
            <Acme />
          </div>

          <div className="grid bg-[#F5F5F5] p-4 rounded-[10px] grid-cols-1 gap-4 ">
            {[
              { id: "deploymentCreated", label: "Deployment Created" },
              { id: "deploymentError", label: "Deployment Error" },
              { id: "deploymentCancelled", label: "Deployment Cancelled" },
            ].map((event) => (
              <div
                key={event.id}
                className="flex items-center gap-2 cursor-pointer"
              >
                <CustomCheckbox />
                <Paragraph text={event.label} />
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-4   tracking-normal font-medium">
            <button className="px-4 py-2  text-grayMain  text-sm  ">
              Cancel
            </button>
            <button className="px-4 py-2 bg-purpleDeep shadow-[0px_1px_2px_0px_#2E125E66] text-white rounded-lg hover:bg-purple-700">
              Connect repositories
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Repository;
