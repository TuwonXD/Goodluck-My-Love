export type Question = {
  id: string;
  question: string;
  choices: string[];
  answer: number; // index
  rationale: string;
};

export type TestBank = {
  id: string;
  title: string;
  description: string;
  questions: Question[];
};

export type Subject = {
  id: string;
  name: string;
  short: string;
  description: string;
  banks: TestBank[];
};

export const subjects: Subject[] = [
  {
    id: "fon",
    name: "Fundamentals of Nursing",
    short: "FoN",
    description: "Core principles, patient care, and nursing process.",
    banks: [
      {
        id: "vital-signs",
        title: "Vital Signs & Assessment",
        description: "Temperature, pulse, respiration, blood pressure.",
        questions: [
          {
            id: "q1",
            question:
              "Which pulse site is most commonly used to assess a client's heart rate in an adult?",
            choices: ["Radial", "Carotid", "Femoral", "Apical"],
            answer: 0,
            rationale:
              "The radial pulse is easily accessible and routinely used to assess adult heart rate. Apical is preferred for infants or when the radial pulse is irregular.",
          },
          {
            id: "q2",
            question:
              "A normal adult respiratory rate at rest is:",
            choices: ["6–10 bpm", "12–20 bpm", "22–28 bpm", "30–40 bpm"],
            answer: 1,
            rationale:
              "The normal adult respiratory rate is 12–20 breaths per minute at rest.",
          },
          {
            id: "q3",
            question:
              "Which artery is used to auscultate blood pressure in the upper arm?",
            choices: ["Radial", "Brachial", "Ulnar", "Popliteal"],
            answer: 1,
            rationale:
              "The brachial artery is auscultated in the antecubital fossa when taking blood pressure in the upper arm.",
          },
        ],
      },
      {
        id: "infection-control",
        title: "Infection Control",
        description: "Asepsis, PPE, isolation precautions.",
        questions: [
          {
            id: "q1",
            question:
              "The single most effective way to prevent the spread of infection is:",
            choices: [
              "Wearing gloves",
              "Hand hygiene",
              "Wearing a mask",
              "Sterilizing equipment",
            ],
            answer: 1,
            rationale:
              "Hand hygiene remains the single most effective measure to reduce transmission of healthcare-associated infections.",
          },
          {
            id: "q2",
            question:
              "A client with active pulmonary tuberculosis requires which type of precaution?",
            choices: ["Contact", "Droplet", "Airborne", "Standard only"],
            answer: 2,
            rationale:
              "TB is transmitted via airborne droplet nuclei; airborne precautions (N95, negative-pressure room) are required.",
          },
        ],
      },
    ],
  },
  {
    id: "mns",
    name: "Medical-Surgical Nursing",
    short: "MSN",
    description: "Adult health across body systems.",
    banks: [
      {
        id: "cardio",
        title: "Cardiovascular",
        description: "MI, heart failure, arrhythmias.",
        questions: [
          {
            id: "q1",
            question:
              "The classic pain of myocardial infarction is best described as:",
            choices: [
              "Sharp, pleuritic chest pain",
              "Crushing substernal pain radiating to the left arm",
              "Burning epigastric pain relieved by antacids",
              "Intermittent pain worsened by movement",
            ],
            answer: 1,
            rationale:
              "MI pain is classically crushing/pressure-like, substernal, and may radiate to the left arm, jaw, or back. It is not relieved by rest or nitrates.",
          },
          {
            id: "q2",
            question:
              "Which lab value is the most specific marker for myocardial injury?",
            choices: ["Myoglobin", "CK-MB", "Troponin I", "LDH"],
            answer: 2,
            rationale:
              "Troponin I (and T) is highly specific for cardiac muscle injury and remains elevated for up to 10–14 days.",
          },
        ],
      },
      {
        id: "endo",
        title: "Endocrine",
        description: "Diabetes, thyroid, adrenal.",
        questions: [
          {
            id: "q1",
            question:
              "A hallmark sign of hypoglycemia is:",
            choices: [
              "Fruity breath odor",
              "Kussmaul respirations",
              "Diaphoresis and tremors",
              "Polyuria and polydipsia",
            ],
            answer: 2,
            rationale:
              "Hypoglycemia triggers a sympathetic response — diaphoresis, tremors, tachycardia, and anxiety. Fruity breath and Kussmaul respirations indicate DKA.",
          },
        ],
      },
    ],
  },
  {
    id: "mch",
    name: "Maternal & Child Health",
    short: "MCH",
    description: "OB, pediatrics, and family nursing.",
    banks: [
      {
        id: "labor",
        title: "Labor & Delivery",
        description: "Stages of labor, fetal monitoring.",
        questions: [
          {
            id: "q1",
            question:
              "The first stage of labor ends when:",
            choices: [
              "The membranes rupture",
              "The cervix is fully dilated at 10 cm",
              "The baby is delivered",
              "The placenta is expelled",
            ],
            answer: 1,
            rationale:
              "Stage 1 ends at full cervical dilation (10 cm). Stage 2 ends with delivery of the baby; stage 3 ends with placental delivery.",
          },
        ],
      },
    ],
  },
  {
    id: "psych",
    name: "Psychiatric Nursing",
    short: "Psych",
    description: "Mental health, therapeutic communication.",
    banks: [
      {
        id: "therapeutic",
        title: "Therapeutic Communication",
        description: "Techniques and blocks to communication.",
        questions: [
          {
            id: "q1",
            question:
              "Which is an example of a therapeutic communication technique?",
            choices: [
              "Giving false reassurance",
              "Asking 'why' questions",
              "Using open-ended questions",
              "Changing the subject",
            ],
            answer: 2,
            rationale:
              "Open-ended questions invite the client to share feelings and information. The others are communication blocks.",
          },
        ],
      },
    ],
  },
  {
    id: "chn",
    name: "Community Health",
    short: "CHN",
    description: "Public health, primary care, DOH programs.",
    banks: [
      {
        id: "epi",
        title: "Epidemiology Basics",
        description: "Incidence, prevalence, outbreak.",
        questions: [
          {
            id: "q1",
            question:
              "Prevalence refers to:",
            choices: [
              "New cases in a time period",
              "Total existing cases at a point in time",
              "Deaths per 1,000 population",
              "Births per 1,000 population",
            ],
            answer: 1,
            rationale:
              "Prevalence = total (new + existing) cases at a specified point. Incidence = new cases over time.",
          },
        ],
      },
    ],
  },
];

export function findSubject(id: string) {
  return subjects.find((s) => s.id === id);
}
export function findBank(subjectId: string, bankId: string) {
  return findSubject(subjectId)?.banks.find((b) => b.id === bankId);
}
