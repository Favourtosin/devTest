"use client";
import ContextualLayout from "@/components/layouts/contextual";
import CalendarCard from "@/components/ui/calendarCard";
import CustomCheckbox from "@/components/ui/global/CustomCheckbox";
import Image from "next/image";

export default function ContextualPage() {
  return (
    <div className=" shadow-[0px_0px_0px_1px_#09090B0D] rounded-[32px] grid  grid-cols-1 md:grid-cols-2 min-h-[95vh]  h-full  bg-white p-6 gap-6">
      <div className=" w-full flex  justify-center  items-center  flex-col  rounded-lg p-4">
        <div className=" w-full md:w-[20rem] tracking-[0] ">
          <h2 className="text-base  text-grayMain font-medium ">
            {" "}
            Contextual toolbar
          </h2>
          <p className="  text-sm mt-2  text-graySupport  ">
            A toolbar that suggests and enables actions based on users'
            navigation. <br /> <br /> Suggestions are related to the current
            page and users can perform actions inside the component, without
            changing to another page or context.
          </p>
        </div>
      </div>

      <div className=" w-full flex  items-center place-items-center justify-center place-content-center  relative">
        <ContextualLayout />
      </div>
    </div>
  );
}
