import React, { useState } from "react";
import RoundedCustomCheckbox from "../ui/global/roundedCheckBox";
import CustomCheckbox from "../ui/global/CustomCheckbox";
import Title from "../ui/global/title";
import Button from "../ui/global/button";
import Input from "../ui/global/input";

const checkOptions = [
  { id: "deploymentCreated", label: "Deployment Created" },
  { id: "projectCreated", label: "Project Created" },
  { id: "deploymentError", label: "Deployment Error" },
  { id: "projectDeleted", label: "Project Deleted" },
  { id: "deploymentCancelled", label: "Deployment Cancelled" },
];

const Webhook: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(
    "allTeam"
  );

  const handleProjectChange = (project: string) => {
    setSelectedProject(selectedProject === project ? null : project);
  };

  return (
    <section className=" flex flex-col justify-center items-center py-2  w-full">
      <section className="  w-[98%] md:w-[95%]  flex flex-col  justify-center  items-center   gap-y-3   ">
        <h1 className=" font-medium text-sm  w-full text-grayMain">
          Create webhook
        </h1>
        <div className="max-w-lg h-auto  w-full p-6 flex flex-col gap-y-5 bg-[#FCFCFC]  shadow-[0px_1px_2px_0px_#09090B0D,0px_0px_0px_1px_#09090B0D]  rounded-[10px]">
          <section className=" flex flex-col gap-y-2">
            <Title text="Endpoint" />

            <Input placeholder="https://myapp.com/webhooks" />
          </section>

          <section className=" flex flex-col gap-y-2">
            <Title text="Projects" />
            <div className="flex items-center gap-4 ">
              <RoundedCustomCheckbox
                text="All team projects in"
                showAcme={true}
                checked={selectedProject === "allTeam"}
                onChange={() => handleProjectChange("allTeam")}
              />

              <RoundedCustomCheckbox
                text="Tagged Projects"
                checked={selectedProject === "tagged"}
                onChange={() => handleProjectChange("tagged")}
              />
            </div>
          </section>

          <section className="flex flex-col gap-y-[14px]">
            <Title text="Events" />
            <div className="grid bg-[#F5F5F5] p-4 rounded-[10px] grid-cols-2 gap-4 ">
              {checkOptions.map((event) => (
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
                cta="Create webhook"
                className="bg-purpleDeep shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#2E125E66,0px_0px_0px_1px_#FFFFFF33_inset] text-white "
              />
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Webhook;
