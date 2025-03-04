"use client";
import CalendarCard from "@/components/ui/calendarCard";
import CustomCheckbox from "@/components/ui/global/CustomCheckbox";
import Image from "next/image";

export default function Contextual() {
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

          <CustomCheckbox />
        </div>
      </div>

      <div className=" w-full flex  items-center place-items-center justify-center place-content-center  relative">
        <CalendarCard
          title="Team Standup"
          timeIn="2024-03-03T10:00:00.000Z"
          startTime="2024-03-03T10:00:00.000Z"
          endTime="2024-03-03T10:45:00.000Z"
          participants={[
            "https://randomuser.me/api/portraits/men/1.jpg",
            "https://randomuser.me/api/portraits/women/2.jpg",
            "https://randomuser.me/api/portraits/men/3.jpg",
          ]}
        />
      </div>
    </div>
  );
}
