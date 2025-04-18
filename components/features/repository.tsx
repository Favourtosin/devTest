import React from "react";
import CustomCheckbox from "../ui/global/CustomCheckbox";
import Title from "../ui/global/title";
import Acme from "../ui/global/acme";
import Button from "../ui/global/button";

const Repository: React.FC = () => {
  return (
    <section className=" flex flex-col justify-center items-center py-2  w-full">
      <section className="  w-[95%]  flex flex-col  justify-center  items-center   gap-y-3   ">
        <div className="max-w-lg h-auto  w-full p-4 flex flex-col gap-y-5 bg-[#FCFCFC]  shadow-[0px_1px_2px_0px_#09090B0D,0px_0px_0px_1px_#09090B0D]  rounded-[10px]">
          <section className="flex flex-col gap-y-[10px]">
            <div className=" flex gap-x-2 w-max items-center justify-center">
              <Title text="Connect repositories to" />
              <Acme />
            </div>

            <div className="grid  px-1 rounded-[10px] grid-cols-1 gap-4 ">
              {[
                { id: "deploymentCreated", label: "Deployment Created" },
                { id: "deploymentError", label: "Deployment Error" },
                { id: "deploymentCancelled", label: "Deployment Cancelled" },
              ].map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <CustomCheckbox text={event.label} />
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-4   tracking-normal font-medium">
              <Button cta="Cancel" className=" bg-none text-grayMain " />
              <Button
                cta="Connect repositories"
                className="bg-purpleDeep  shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#2E125E66,0px_0px_0px_1px_#FFFFFF33_inset] text-white "
              />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Repository;
