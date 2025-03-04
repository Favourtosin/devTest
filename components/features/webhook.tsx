import React, { useState } from "react";
import RoundedCustomCheckbox from "../ui/global/roundedCheckBox";
import CustomCheckbox from "../ui/global/CustomCheckbox";
import Paragraph from "../ui/global/title";
import Title from "../ui/global/title";

const Webhook: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectChange = (project: string) => {
    setSelectedProject(selectedProject === project ? null : project);
  };

  return (
    <section className=" flex flex-col  gap-y-3 w-full">
      <div className="max-w-lg h-auto  w-full p-6 flex flex-col gap-y-5 bg-[#FCFCFC]  shadow-[0px_0px_0px_1px_#09090B0D]  rounded-[10px]">
        {/* Endpoint Input Section */}
        <section className=" flex flex-col gap-y-2">
          <Title text="  Endpoint" />
          <input
            id="endpoint"
            type="text"
            placeholder="https://myapp.com/webhooks"
            className="    py-2 px-3  rounded-[10px] w-full  shadow-[0px_1px_2px_0px_#1212170D] placeholder:text-[#A3A3A3]  "
          />
        </section>

        {/* Projects Section */}
        <section className=" flex flex-col gap-y-2">
          <Title text="Projects" />
          <div className="flex items-center gap-4 ">
            <div className="flex items-center gap-2 cursor-pointer">
              <RoundedCustomCheckbox
                checked={selectedProject === "allTeam"}
                onChange={() => handleProjectChange("allTeam")}
              />
              <Paragraph text="All team projects in" />
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <RoundedCustomCheckbox
                checked={selectedProject === "tagged"}
                onChange={() => handleProjectChange("tagged")}
              />
              <Paragraph text="Tagged Projects" />
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-y-[10px]">
          <Title text="Events" />
          <div className="grid bg-[#F5F5F5] p-4 rounded-[10px] grid-cols-2 gap-4 ">
            {[
              { id: "deploymentCreated", label: "Deployment Created" },
              { id: "projectCreated", label: "Project Created" },
              { id: "deploymentError", label: "Deployment Error" },
              { id: "projectDeleted", label: "Project Deleted" },
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
              Create Webhook
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Webhook;
