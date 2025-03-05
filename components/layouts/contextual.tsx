"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Webhook from "../features/webhook";
import Repository from "../features/repository";
import CreateApiKey from "../features/createApikey";
import ShareApiKey from "../features/shareApikey";

const tabs = [
  { id: "create", label: "Create Webhook" },
  { id: "connect", label: "Connect Repositories" },
  { id: "create-api", label: "Create API Keys" },
  { id: "share-api", label: "Share API Keys" },
];

const ContextualLayout = () => {
  const [activeTab, setActiveTab] = useState("create");
  const [indicatorStyles, setIndicatorStyles] = useState({
    width: "0px",
    left: "0px",
  });

  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    if (tabRefs.current[activeTab]) {
      const tab = tabRefs.current[activeTab]!.getBoundingClientRect();
      setIndicatorStyles({
        width: `${tab.width}px`,
        left: `${
          tab.left - tabRefs.current["create"]!.getBoundingClientRect().left
        }px`,
      });
    }
  }, [activeTab]);

  const renderComponent = () => {
    switch (activeTab) {
      case "create":
        return <Webhook />;
      case "connect":
        return <Repository />;
      case "create-api":
        return <CreateApiKey />;
      case "share-api":
        return <ShareApiKey />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full w-[85%] flex flex-col">
      <div className="flex flex-col justify-end gap-y-4 shadow-[0px_8px_16px_0px_#0000000A,0px_4px_8px_0px_#0000000A,0px_0px_0px_1px_#09090B0D] rounded-[18px] p-4 items-center mt-auto">
        <motion.div
          layout
          className="w-full bg-white  rounded-lg flex flex-col justify-end items-center overflow-hidden"
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
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full flex justify-center items-center"
            >
              {renderComponent()}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <div className="relative w-full rounded-lg">
          <div className="overflow-x-auto whitespace-nowrap hide-scrollbar relative">
            <div className="flex gap-2 w-max relative">
              <motion.div
                className="absolute bottom-0 h-[36px] rounded-[10px] bg-gray-100 text-[#424242] "
                layoutId="activeTabIndicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{
                  width: indicatorStyles.width,
                  left: indicatorStyles.left,
                }}
              />

              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  ref={(el) => {
                    tabRefs.current[tab.id] = el;
                  }}
                  className={`relative whitespace-nowrap flex items-center justify-center text-center transition-all text-sm font-medium px-4 w-max h-[36px] rounded-[10px] z-10
                    ${
                      activeTab === tab.id
                        ? "text-[#424242]"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="absolute  -right-4 top-1/2 border-l px-3 z-20 border-opacity-[5%] transform h-[37px] bg-white -translate-y-1/2 flex items-center">
            <span className=" p-1 rounded-lg hover:bg-gray-100">
              <Menu size={20} className="text-gray-600 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextualLayout;
