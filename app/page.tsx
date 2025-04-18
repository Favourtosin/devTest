"use client";

import CalendarCard from "@/components/ui/calendar/calendarCard";
import StackText from "@/components/ui/global/StackText";
import { caller } from "@/data/callers";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className=" relative max-w-[130rem] w-full space-y-6 items-center shadow-[0px_1px_2px_0px_#09090B0D,0px_0px_0px_1px_#09090B0D]
 rounded-[32px] grid grid-cols-1 md:grid-cols-2 min-h-[90vh] max-h-[40rem] h-full bg-white p-6 lg:px-8 gap-6"
    >
      <section className="w-full md:w-[20rem] flex flex-col items-center justify-center gap-y-3 rounded-lg">
        <div className="flex flex-col gap-y-3 px-2 tracking-[0]">
          <h2 className="text-base text-grayMain font-medium">
            Calendar Widget
          </h2>
          <p className="text-sm text-graySupport">
            Calendar widget with clear timezone differences information. Click
            on the widget to interact with it.
          </p>
        </div>

        <div className="pl-0 md:pl-3 flex gap-2 flex-col md:flex-row   w-full md:w-auto">
          <StackText text="React" />
          <StackText text="Tailwind CSS" />
          <StackText text="Motion (prev. Framer Motion)" />
        </div>
      </section>

      <section className="w-full flex items-center justify-center relative">
        <CalendarCard
          title={caller.title}
          timeIn={caller.timeIn}
          startTime={caller.startTime}
          endTime={caller.endTime}
          participants={caller.participants}
        />
      </section>

      <Link
        href="/contextual"
        className="lg:absolute bottom-[10%] left-[2%] bg-white/5 hover:bg-gray-300 rounded-lg shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] w-max p-[6px_10px] text-sm font-medium transition-colors duration-300 hover:animate-shake"
      >
        Next Task
      </Link>
    </main>
  );
}
