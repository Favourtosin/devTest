import React, { useState } from "react";
import { Menu } from "lucide-react";
import Webhook from "../features/webhook";

const tabs = [
  { id: "create", label: "Create Webhook" },
  { id: "connect", label: "Connect Repositories" },
  { id: "create-api", label: "Create API Keys" },
];

const Connect = () => (
  <div className="p-4">🔗 Connect Repositories Component</div>
);
const CreateAPI = () => <div className="p-4">🛠 Create API Keys Component</div>;

const ContextualLayout = () => {
  const [activeTab, setActiveTab] = useState("create");

  const renderComponent = () => {
    switch (activeTab) {
      case "create":
        return <Webhook />;
      case "connect":
        return <Connect />;
      case "create-api":
        return <CreateAPI />;

      default:
        return null;
    }
  };

  return (
    <div className="w-[95%] flex flex-col justify-center shadow-[0px_0px_0px_1px_#09090B0D] rounded-[18px] p-4 items-center">
      <div className="w-full max-w-lg bg-white rounded-lg min-h-[120px]">
        {renderComponent()}
      </div>

      {/* Tab Navigation */}
      <div className="relative w-full flex flex-wrap items-center   rounded-lg  gap-2">
        {/* Tabs */}
        <div className="flex  gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`whitespace-nowrap flex items-center justify-center transition-all text-sm font-medium px-1  w-max min-w-[138px] h-[36px] rounded-[10px] 
              ${
                activeTab === tab.id
                  ? "bg-gray-100 text-[#424242] "
                  : "text-gray-600 hover:text-gray-800 bg-white"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Absolute Divider & Menu Icon */}
        <div className="absolute right-1 top-1/2 transform h-[37px] bg-white -translate-y-1/2 flex items-center">
          <div className="w-px h-6 bg-gray-400 mx-3"></div>
          <Menu size={20} className="text-gray-600 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ContextualLayout;
