import { useRouter } from "next/router";
import { Patient, patients } from "../../lib/patient_mock";
import RootLayout from "@/components/layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Clipboard,
  Hash,
  HistoryIcon,
  Ruler,
  Scale,
  Skull,
  Tablets,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PatientPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const realId = typeof id === "string" ? parseInt(id, 10) : undefined;
  const patient = patients.find((patient) => patient.id === realId);

  if (!patient) {
    return <div>Patient not found {id}</div>;
  }

  return (
    <RootLayout>
      <div className="px-8 py-4 border-b border-b-slate-200">
        <h4 className=" text-slate-600">Patient details</h4>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
            <PatientCard patient={patient} />
            <PatientInfo patient={patient} />
          </div>
          <div className="col-span-1 md:col-span-6 flex flex-col gap-4">
            <PatientHistory patient={patient} />
            <PatientMedications patient={patient} />
          </div>
          <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
            <PatientVisits patient={patient} />
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default PatientPage;

function PatientCard({ patient }: { patient: Patient }) {
  return (
    <div className="p-4 rounded-md shadow-md border border-slate-200 w-full">
      <Title>Paciente</Title>
      <div className="flex items-center gap-2 p-2">
        <Avatar className="w-20 h-20 hidden md:block">
          <AvatarImage src={patient.image_url} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1>{`${patient.name} ${patient.last_name}`}</h1>
          <p> {patient.email}</p>
          <p>{`${new Date(patient.birthdate).toLocaleDateString()} - ${
            new Date().getFullYear() - new Date(patient.birthdate).getFullYear()
          } `}</p>
          <p className="flex">
            {" "}
            {patient.gender} <Skull className="text-pink-500" />
          </p>
        </div>
      </div>
    </div>
  );
}
function PatientInfo({ patient }: { patient: Patient }) {
  return (
    <div className=" items-center gap-4 rounded-md shadow-md border border-slate-200 flex-col p-4 w-full">
      <Title>Información del Paciente</Title>
      <ul className="p-2">
        <li className="flex gap-2">
          <Scale />
          {patient.weight}
        </li>
        <li className="flex gap-2">
          <Ruler />
          {patient.height}
        </li>
        <li>{patient.other_information.allergies}</li>
        <li>{patient.other_information.occupation}</li>
        <li>{patient.other_information.sleep_duration}</li>
        <li>{patient.other_information.exercise_frequency}</li>
      </ul>
    </div>
  );
}

function PatientHistory({ patient }: { patient: Patient }) {
  return (
    <div className=" gap-4 rounded-md shadow-md border border-slate-200 flex-col p-4 w-full">
      <div>
        <Title>Antecedentes</Title>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div>
            <div className="flex gap-2 flex-col">
              <h4>Paciente</h4>
              <Separator className="mr-2" />
            </div>
            <div className="flex gap-2 flex-col">
              <h4>Patológicos</h4>
              {patient.medical_history.pathological}
              <Separator className="mr-2" />
            </div>
            <div className="flex gap-2 flex-col">
              <h4>No patológicos</h4>
              {patient.medical_history.non_pathological}
              <Separator className="mr-2" />
            </div>
            <div className="flex gap-2 flex-col">
              <h4>Notas</h4>
              {patient.medical_history.notes}
            </div>
            <Separator className="mr-2" />
          </div>
          <div>
            <div className="flex gap-2 flex-col">
              <h4>Familiares</h4>
              <Separator className="mr-2" />
            </div>
            <div className="flex gap-2 flex-col">
              <h4>Padre</h4>
              {patient.family_history.father}
              <Separator className="mr-2" />
            </div>
            <div className="flex gap-2 flex-col">
              <h4>Madre</h4>
              {patient.family_history.mother}
            </div>
            <Separator className="mr-2" />
            <div className="flex gap-2 flex-col">
              <h4>Hermanos/as</h4>
              {patient.family_history.siblings}
            </div>
            <Separator className="mr-2" />
            <div className="flex gap-2 flex-col">
              <h4>Notas</h4>
              {patient.family_history.notes}
            </div>
            <Separator className="mr-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PatientMedications({ patient }: { patient: Patient }) {
  return (
    <div className=" rounded-md shadow-md border border-slate-200 flex-col p-4 w-full">
      <div>
        <Title>Medicamentos</Title>
        {patient.medications.map((medication) => (
          <ul key={medication.name}>
            <li className="flex gap-2">
              <Tablets className="w-4" />
              <p>{medication.name}</p>
            </li>
            <li className="flex gap-2">
              <Clipboard className="w-4" />
              {medication.notes}
            </li>
            <li className="gap-2 flex">
              {" "}
              <Hash className="w-4" />
              {medication.dosage}
            </li>
            <li className="flex gap-2">
              <HistoryIcon className="w-4" />
              {medication.frequency}
            </li>
            <Separator className="mr-2" />
          </ul>
        ))}
      </div>
    </div>
  );
}

function PatientVisits({ patient }: { patient: Patient }) {
  return (
    <section className="rounded-md shadow-md border border-slate-200 h-fit  p-4 w-full ">
      <Title>Visitas</Title>
      <Accordion type="single" collapsible className="w-full">
        {patient.visits.map((visit) => (
          <AccordionItem key={visit.date} value={visit.date.toString()}>
            <AccordionTrigger>
              <p>
                {`${new Date(visit.date).toLocaleString()}`} - {visit.reason}
              </p>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="italic text-gray-500">Diagnóstico</h4>
                  <ul>
                    <li>{visit.diagnosis}</li>
                    <li>{visit.notes}</li>
                  </ul>
                </div>
                {visit.prescribed_medications.map((medication) => (
                  <div key={medication.name} className="flex flex-col">
                    <h4 className="italic text-gray-500">Medicación</h4>
                    <ul>
                      <li>{medication.name}</li>
                      <li>{medication.frequency}</li>
                      <li>{medication.dosage}</li>
                    </ul>
                    <p>{medication.notes}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h4 className="text-start text-xl">{children}</h4>
      <Separator className="mr-2" />
    </>
  );
}
