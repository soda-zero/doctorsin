import { Inter } from "next/font/google";
import SideBar from "./sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.className} grid grid-cols-7 lg:grid-cols-8 bg-white h-full`}
    >
      <SideBar />
      <div className="col-span-6 lg:col-span-7 border-l border-l-slate-200">
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
}
