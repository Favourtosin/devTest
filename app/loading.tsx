"use client";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen fixed top-0 left-0 right-0 bottom-0  z-50 bg-white/80 backdrop-blur-sm text-gray-700">
      <Loader2 size={50} className="animate-spin text-gray-700" />
      <p className="mt-4 text-lg font-semibold animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
}
