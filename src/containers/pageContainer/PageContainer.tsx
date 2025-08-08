import type { ReactNode } from "react";
import Header from "../../components/general/Header";
import NavBar from "../../components/general/NavBar";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen bg-white h-screen">
      <Header />
      <div className="w-screen h-[90vh] grid grid-cols-[320px_1fr] gap-10">
        <NavBar />
        <div className="w-full overflow-y-auto px-[20px] md:px-[50px]">
          {children}
        </div>
      </div>
    </div>
  );
}
