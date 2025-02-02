import React, { ReactNode } from "react";
import DashboardNav from "../components/DashboardNav";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col space-y-6 mt-10 mx-5">
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="container hidden w-[200px] flex-col md:flex">
          <DashboardNav />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
