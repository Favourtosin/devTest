import React, { useState } from "react";
import RoundedCustomCheckbox from "../ui/global/roundedCheckBox";
import CustomCheckbox from "../ui/global/CustomCheckbox";

const Webhook: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectChange = (project: string) => {
    setSelectedProject(selectedProject === project ? null : project);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">
        Create Webhook
      </h1>

      {/* Endpoint Input Section */}
      <section className="mb-6">
        <label
          htmlFor="endpoint"
          className="block text-sm font-medium text-gray-700"
        >
          Endpoint
        </label>
        <input
          id="endpoint"
          type="text"
          placeholder="Enter webhook endpoint"
          className="mt-2 w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </section>

      {/* Projects Section */}
      <h1 className="text-lg font-semibold text-gray-800 mb-3">Projects</h1>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <RoundedCustomCheckbox
            checked={selectedProject === "allTeam"}
            onChange={() => handleProjectChange("allTeam")}
          />
          <span className="text-sm text-gray-700">All Team Projects</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <RoundedCustomCheckbox
            checked={selectedProject === "tagged"}
            onChange={() => handleProjectChange("tagged")}
          />
          <span className="text-sm text-gray-700">Tagged Projects</span>
        </div>
      </div>

      {/* Events Section */}
      <h1 className="text-lg font-semibold text-gray-800 mb-3">Events</h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
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
            <span className="text-sm text-gray-700">{event.label}</span>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
          Cancel
        </button>
        <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
          Create Webhook
        </button>
      </div>
    </div>
  );
};

export default Webhook;
