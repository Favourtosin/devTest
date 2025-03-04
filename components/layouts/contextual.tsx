"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Webhook from "../features/webhook";
import Repository from "../features/repository";

const tabs = [
  { id: "create", label: "Create Webhook" },
  { id: "connect", label: "Connect Repositories" },
  { id: "create-api", label: "Create API Keys" },
];

const CreateAPI = () => <div className="p-4">🛠 Create API Keys Component</div>;

const ContextualLayout = () => {
  const [activeTab, setActiveTab] = useState("create");

  const renderComponent = () => {
    switch (activeTab) {
      case "create":
        return <Webhook />;
      case "connect":
        return <Repository />;
      case "create-api":
        return <CreateAPI />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full w-[70%] flex flex-col">
      <div className="flex flex-col justify-end gap-y-4 shadow-[0px_0px_0px_1px_#09090B0D] rounded-[18px] p-4 items-center mt-auto">
        {/* Animated Content Wrapper */}
        <motion.div
          layout
          className="w-full bg-white rounded-lg flex flex-col justify-end items-center overflow-hidden"
          initial={{ scaleY: 0.95, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 14,
            mass: 0.8,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              layout
              initial={{ opacity: 0.5, y: 30, scaleY: 0.9 }}
              animate={{ opacity: 1, y: 0, scaleY: 1 }}
              exit={{ opacity: 0.5, y: -20, scaleY: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full"
            >
              {renderComponent()}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Tab Navigation */}
        <div className="relative overflow-hidden w-full flex flex-wrap items-center rounded-lg gap-2">
          <div className="flex gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`whitespace-nowrap flex items-center justify-center transition-all text-sm font-medium px-1 w-max min-w-[138px] h-[36px] rounded-[10px] 
                  ${
                    activeTab === tab.id
                      ? "bg-gray-100 text-[#424242]"
                      : "text-gray-600 hover:text-gray-800 bg-white"
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="absolute -right-4 top-1/2 border-l px-3 border-opacity-[5%] transform h-[37px] bg-white -translate-y-1/2 flex items-center">
            <Menu size={20} className="text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextualLayout;
