import { patients } from "@/lib/patient_mock";
import { ScrollArea } from "./ui/scroll-area";
import { HeartPulse } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default function SideBar() {
  return (
    <aside className="pb-12">
      <div className="px-8 py-6">
        <Link
          className="flex items-center text-2xl font-semibold tracking-tight w-fit hover:text-pink-400"
          href="/"
        >
          <HeartPulse className="mr-2" />
          Doctorsin
        </Link>
      </div>
      <div className="space-y-4">
        <ScrollArea className="m-4 h-72 rounded-md border border-slate-200 dark:border-slate-700 ">
          <div className="p-4 flex flex-col">
            <h4 className="mb-4 text-sm font-medium leading-none">Patients</h4>
            {patients.map((patient) => (
              <div key={patient.id}>
                <Link key={patient.id} href={`/patient/${patient.id}`}>
                  {patient.name}
                </Link>
                <Separator className="my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
}
