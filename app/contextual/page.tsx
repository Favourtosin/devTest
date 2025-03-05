"use client";
import ContextualLayout from "@/components/layouts/contextual";
import StackText from "@/components/ui/global/StackText";
import Link from "next/link";

export default function ContextualPage() {
  return (
    <main className=" relative w-full h-full flex flex-col  gap-y-12 pb-[5%] max-w-[130rem] bg-white shadow-[0px_1px_2px_0px_#09090B0D,0px_0px_0px_1px_#09090B0D] rounded-[32px]  p-3 md:p-6">
      <section className="  grid  grid-cols-1 lg:grid-cols-2 min-h-[95vh]  h-full   gap-6">
        <div className=" w-full flex  gap-y-4 justify-center  lg:items-center  flex-col  rounded-lg p-4">
          <div className=" w-full md:w-[20rem] tracking-[0] ">
            <h2 className="text-base  text-grayMain font-medium ">
              Contextual toolbar
            </h2>
            <p className="  text-sm mt-2  text-graySupport  ">
              A toolbar that suggests and enables actions based on users&apos;
              navigation. <br /> <br /> Suggestions are related to the current
              page and users can perform actions inside the component, without
              changing to another page or context.
            </p>
          </div>
          <div className="pl-3 flex flex-col md:flex-row gap-2">
            <StackText text="React" />
            <StackText text="Tailwind CSS" />
            <StackText text="Motion (prev. Framer Motion)" />
          </div>
        </div>

        <div className=" w-full flex  items-center place-items-center justify-center place-content-center  relative">
          <ContextualLayout />
        </div>
      </section>
      <section className="pl-[10%]">
        <Link
          href="/"
          className="hover:animate-shake hover:bg-gray-300 transition-colors duration-300transition-colors duration-300  bg-white/5 rounded-lg shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F]  w-max p-[6px_10px] text-sm font-medium"
        >
          Previous Task
        </Link>
      </section>
    </main>
  );
}
