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
      className={`${inter.className} grid grid-cols-4 lg:grid-cols-5 bg-slate-900 h-full text-white`}
    >
      <SideBar />
      {children}
    </div>
  );
}
