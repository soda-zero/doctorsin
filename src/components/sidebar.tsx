import { HeartPulse } from "lucide-react";

export default function SideBar() {
  return (
    <aside className="pb-12">
      <div className="px-8 py-6">
        <p className="flex items-center text-2xl font-semibold tracking-tight">
          <HeartPulse className="mr-2" />
          Doctorsin
        </p>
      </div>
      <div className="space-y-4"></div>
    </aside>
  );
}
