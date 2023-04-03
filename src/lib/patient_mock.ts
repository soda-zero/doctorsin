export type Patient = {
  id: number;
  name: string;
  last_name: string;
  email: string;
  gender: string;
  image_url: string;
  birthdate: number;
  height: string;
  weight: string;
  insurance: string;
  medical_history: MedicalHistory;
  family_history: FamilyHistory;
  medications: Medication[];
  visits: Visit[];
  other_information: OtherInformation;
};

export interface MedicalHistory {
  pathological: string;
  non_pathological: string;
  notes: string;
}

export interface FamilyHistory {
  father: string;
  mother: string;
  siblings: string;
  notes: string;
}

export interface Medication {
  name: string;
  dosage: string;
  frequency: string;
  notes: string;
}

export interface Visit {
  date: number;
  reason: string;
  diagnosis: string;
  prescribed_medications: PrescribedMedication[];
  notes: string;
}

export interface PrescribedMedication {
  name: string;
  dosage: string;
  frequency: string;
  notes: string;
}

export interface OtherInformation {
  exercise_frequency: string;
  sleep_duration: string;
  allergies: string;
  occupation: string;
}
export const patients: Patient[] = [
  {
    id: 1,
    name: "Juan",
    last_name: "Pérez",
    email: "juanperez@example.com",
    gender: "masculino",
    image_url: "https://example.com/images/juanperez.jpg",
    birthdate: 315532800000,
    height: "180cm",
    weight: "80kg",
    insurance: "ABC Seguros",
    medical_history: {
      pathological: "El paciente tiene antecedentes de migrañas.",
      non_pathological: "El paciente hace ejercicio regularmente.",
      notes: "El paciente es vegetariano.",
    },
    family_history: {
      father: "El padre del paciente tiene antecedentes de diabetes.",
      mother:
        "La madre del paciente tiene antecedentes de hipertensión arterial.",
      siblings: "El paciente no tiene hermanos.",
      notes: "La familia del paciente tiene antecedentes de cáncer.",
    },
    medications: [
      {
        name: "Ibuprofeno",
        dosage: "200mg",
        frequency: "según sea necesario",
        notes: "Medicamento de venta libre para el alivio del dolor.",
      },
      {
        name: "Prozac",
        dosage: "20mg",
        frequency: "una vez al día",
        notes: "Recetado para la depresión.",
      },
    ],
    visits: [
      {
        date: 1644873600000,
        reason: "Control de asma",
        diagnosis: "El asma del paciente está bajo control",
        prescribed_medications: [
          {
            name: "Albuterol",
            dosage: "2 inhalaciones",
            frequency: "según sea necesario para los síntomas del asma",
            notes: "Recetado para los síntomas del asma.",
          },
        ],
        notes:
          "Se aconsejó al paciente que continuara usando su inhalador según fuera necesario.",
      },
      {
        date: 1632105600000,
        reason: "Prueba de densidad ósea",
        diagnosis: "El paciente tiene una densidad ósea normal",
        prescribed_medications: [],
        notes:
          "Se aconsejó al paciente que continuara tomando su suplemento de vitamina D.",
      },
    ],
    other_information: {
      exercise_frequency: "El paciente sale a caminar todos los días.",
      sleep_duration: "El paciente duerme siete horas por noche.",
      allergies: "El paciente es alérgico a los mariscos.",
      occupation: "El paciente es profesor.",
    },
  },
  {
    id: 2,
    name: "Sarah",
    last_name: "Smith",
    email: "sarahsmith@example.com",
    gender: "femenino",
    image_url: "https://example.com/images/sarahsmith.jpg",
    birthdate: 798182400000,
    height: "165cm",
    weight: "60kg",
    insurance: "Seguro XYZ",
    medical_history: {
      pathological: "La paciente tiene antecedentes de asma.",
      non_pathological: "La paciente no tiene otras condiciones médicas.",
      notes: "La paciente es fumadora.",
    },
    family_history: {
      father:
        "El padre de la paciente tiene antecedentes de enfermedades del corazón.",
      mother: "La madre de la paciente tiene antecedentes de cáncer de mama.",
      siblings: "La paciente tiene un hermano sano.",
      notes: "La familia de la paciente tiene antecedentes de artritis.",
    },
    medications: [
      {
        name: "Ventolin",
        dosage: "100mcg",
        frequency: "según sea necesario para los síntomas del asma",
        notes: "Recetado para los síntomas del asma.",
      },
      {
        name: "Parche de Nicotina",
        dosage: "21mg",
        frequency: "una vez al día",
        notes: "Recetado para dejar de fumar.",
      },
    ],
    visits: [
      {
        date: 1647744000000,
        reason: "Examen físico anual",
        diagnosis: "La paciente está saludable en general",
        prescribed_medications: [],
        notes:
          "Se aconsejó a la paciente dejar de fumar y hacer ejercicio regularmente.",
      },
      {
        date: 1634265600000,
        reason: "Mamografía",
        diagnosis: "La paciente no tiene signos de cáncer de mama",
        prescribed_medications: [],
        notes:
          "Se aconsejó a la paciente continuar realizando autoexámenes regulares y hacerse mamografías anualmente.",
      },
    ],
    other_information: {
      exercise_frequency: "La paciente hace yoga dos veces por semana.",
      sleep_duration: "La paciente duerme ocho horas por noche.",
      allergies: "La paciente no tiene alergias conocidas.",
      occupation: "La paciente es diseñadora gráfica.",
    },
  },
];
