import type { Subject } from "./types";

export const supplaSubject: Subject = {
  id: "suppla",
  name: "Supplementals",
  short: "Suppla",
  description:
    "Basic nursing concepts, legal and ethical issues, research, leadership and management.",
  banks: [
    {
      id: "supplemental-a",
      title: "SUPPLEMENTAL A",
      description: "250 questions from the PNLE reviewer.",
      questions: [
        {
          id: "q1",
          question:
            "Which of the following laws mandates that universal access for individuals, particularly adults, couples, women, and adolescents, to quality reproductive health services essential in promoting their right to health be given?",
          choices: ["RA 10354", "RA 11036", "RA 11223", "RA 11166"],
          answer: 0,
          rationale: "RA 10354 is the Responsible Parenthood and Reproductive Health Act.",
        },
        {
          id: "q2",
          question:
            "John obtained his PRC identification card on August 7, 2023, 3 days after his birthday. Knowing this, when will John's PRC ID expire?",
          choices: ["August 7, 2026", "August 4, 2026", "August 4, 2027", "August 7, 2027"],
          answer: 1,
          rationale:
            "PRC ID expires on the birth month of the professional, not the date of issuance. Since John's birthday is August 4, and licenses are valid for 3 years, it expires on August 4, 2026.",
        },
        {
          id: "q3",
          question:
            "To renew one's license, one must participate in Continuing Professional Development (CPD) programs. How many CPD units are required for the renewal?",
          choices: ["45", "30", "20", "15"],
          answer: 0,
          rationale: "The required CPD units for renewal is 45.",
        },
        {
          id: "q4",
          question:
            "RA 7164 or The Philippine Nursing Act of 1991 was the former law that regulated the nursing profession in the country. What law was enacted to repeal the former and acts as the current Nursing Law of the Philippines?",
          choices: ["RA 9713", "RA 9173", "RA 9317", "RA 9137"],
          answer: 1,
          rationale: "RA 9173 is the Philippine Nursing Act of 2002 which repealed RA 7164.",
        },
        {
          id: "q5",
          question:
            "According to the Nursing Law, in order to pass the board exam, an aspiring nurse must obtain a minimum score of for each subject.",
          choices: ["60%", "75%", "70%", "65%"],
          answer: 0,
          rationale:
            "The minimum score required for each subject in the nursing board exam is 60%.",
        },
        {
          id: "q6",
          question:
            "RA 9173 also mandates the qualifications to be a member of the Board of Nursing. Which among the following does not count as a qualification?",
          choices: [
            "Be a member of good standing of the accredited professional organization of nurses",
            "Must have a master's degree in nursing, education, or any allied medical profession",
            "Be a natural born citizen and resident of the Philippines",
            "Have at least 10 years of continuous practice of the profession anywhere prior to appointment",
          ],
          answer: 3,
          rationale: "The 10 years of practice must be in the Philippines, not anywhere.",
        },
        {
          id: "q7",
          question: "According to RA 9173, how many members does the Board of Nursing have?",
          choices: ["6", "7", "5", "4"],
          answer: 0,
          rationale: "The Board of Nursing is composed of a Chairperson and 6 members, totaling 7.",
        },
        {
          id: "q8",
          question:
            "To be a faculty in a college of nursing, RA 9173 provides the qualifications needed. Which among the following are these? Select all that apply.",
          choices: [
            "I. Have at least 2 years of clinical practice in a field of specialization\nII. Be a member of good standing in the accredited professional organization\nIII. Must have a master's degree in nursing",
            "II only",
            "I only",
            "II, III",
            "I, II, III",
          ],
          answer: 3,
          rationale:
            "The qualifications include: (I) at least 2 years of clinical practice, (II) good standing in professional organization, and (III) a master's degree in nursing.",
        },
        {
          id: "q9",
          question:
            "Rene is planning to conduct a qualitative study on the communication patterns and practices of an indigenous group in Northern Luzon. What would be the most appropriate research design that he should use?",
          choices: ["Phenomenology", "Ethnography", "Grounded Theory", "Cultural Relativism"],
          answer: 1,
          rationale: "Ethnography is the study of a cultural group's patterns and practices.",
        },
        {
          id: "q10",
          question:
            "Jeff wishes to know the effect of different types of 2nd generation antipsychotics on the emotional state of schizophrenic patients in the ward. Upon conducting this research, Jeff randomly assigns each patient in the area to be given a specific antipsychotic as part of his study. What research design is Jeff using?",
          choices: ["Experimental", "Quasi-experimental", "Correlational", "Exploratory"],
          answer: 0,
          rationale: "Random assignment is a hallmark of true experimental design.",
        },
        {
          id: "q11",
          question:
            "Defamation is defined as the act of damaging an individual's reputation. Which among the following are considered as forms of defamation? Select all that apply.",
          choices: [
            "I. Libel\nII. Slander\nIII. Battery\nIV. Assault",
            "I, III",
            "II, IV",
            "I, II",
            "III, IV",
          ],
          answer: 2,
          rationale: "Libel and Slander are the two forms of defamation.",
        },
        {
          id: "q12",
          question:
            "Nurse Kel tells everyone that their Head Nurse, Hero, cheated on her husband through their Facebook group chat and a public post. What type of tort did Nurse Kel commit?",
          choices: ["Slander", "Invasion of privacy", "Assault", "Libel"],
          answer: 3,
          rationale:
            "Libel is defamation done through written or published means, such as social media posts.",
        },
        {
          id: "q13",
          question:
            "Hero, in retaliation, announces to all their co-workers during her shift that Kel has been stealing opioid medication from the area due to his addiction. What can Hero be liable for?",
          choices: ["Slander", "Invasion of privacy", "Breach in confidentiality", "Libel"],
          answer: 0,
          rationale:
            "Slander is defamation done through spoken words. Hero's statement was spoken to co-workers.",
        },
        {
          id: "q14",
          question: "Which among the following statements regarding battery and assault are true?",
          choices: [
            "Assault and battery can be used interchangeably",
            "Battery is when someone verbally threatens another person while assault is when the person goes through with the action that causes harm to another",
            "Battery involves nonconsensual touching of a person regardless if injury occurs or not while assault is only considered when injury occurs because of the action.",
            "Assault describes an unjustifiable threat to a person while battery involves willful touching of a person that may or may not cause them harm.",
          ],
          answer: 3,
          rationale:
            "Assault is a threat or attempt to inflict harm, while battery is the actual, nonconsensual touching.",
        },
        {
          id: "q15",
          question:
            "Mary overhears the nurse telling her brother that if he keeps on moving around and avoiding taking his medications, the nurse will restrain him. Mari can sue the nurse for",
          choices: ["Slander", "Assault", "Battery", "False imprisonment"],
          answer: 1,
          rationale:
            "The nurse's threat to restrain the patient constitutes assault, which is an unjustifiable threat to a person.",
        },
        {
          id: "q16",
          question:
            "This is known as an agreement by the client to accept receiving a specific treatment or undergoing a procedure after being provided information regarding said intervention",
          choices: ["Informed consent", "Full disclosure", "Autonomy", "Informed decision"],
          answer: 0,
          rationale:
            "Informed consent is the agreement given by a client after receiving information about the treatment.",
        },
        {
          id: "q17",
          question:
            "Which of the following statements made by the client indicates that informed consent was achieved properly?",
          choices: [
            '"I was still sleepy from my medication when the doctor gave the instructions"',
            "\"I wasn't aware that this medication will be used but I'm still okay with the procedure\"",
            '"The nurse told me that the benefits of the procedure are all I needed to know"',
            '"Compared to the alternative treatments, I think this procedure would best suit my lifestyle"',
          ],
          answer: 3,
          rationale:
            "This statement shows that the client understood the information and made a decision based on it.",
        },
        {
          id: "q18",
          question: "Which of the following individuals can give informed consent?",
          choices: [
            "Jose, a healthy individual who turns 18 in 6 months.",
            "Maria, a 20-year-old with bipolar disorder going through a manic episode",
            "Chan, a middle-aged man who is in a stuporous state",
            "Chris, a young adult who is illiterate",
          ],
          answer: 3,
          rationale:
            "An illiterate person can still give consent if the information is explained and understood. Minors, those not in their right mind, and stuporous patients cannot.",
        },
        {
          id: "q19",
          question:
            "Nurses act as witnesses when the physician obtains informed consent from the patient. As a witness, the nurse should ensure the following except?",
          choices: [
            "The client was awake and competent when the explanation was given",
            "The client gave the consent voluntarily",
            "The client received enough information regarding the procedure",
            "The client accepted the procedure",
          ],
          answer: 3,
          rationale:
            "The nurse witnesses the process, not the client's acceptance of the procedure. It is the client's right to refuse.",
        },
        {
          id: "q20",
          question:
            "Nurse Nina found that the surgeon already obtained the patient's consent while she was not around. To best assess if the client understood the explanation given during obtaining informed consent, what can the nurse do?",
          choices: [
            "Remind them that they can still change their mind and cancel the procedure",
            "Have them explain in their own words what they have been told",
            "Explain the procedure again and have them repeat what you said",
            "Ask them if they have any questions regarding the procedure",
          ],
          answer: 1,
          rationale:
            "Having the client explain in their own words is the best way to assess understanding.",
        },
        {
          id: "q21",
          question: "Which of the following statements best describes an ethical dilemma?",
          choices: [
            "A conflict between the doctor's order and the written order",
            "A conflict between the nurse's duty and the patient's best interest",
            "A conflict between a family's different opinions",
            "A conflict between the nurse and midwife's decisions",
          ],
          answer: 1,
          rationale:
            "An ethical dilemma occurs when there is a conflict between two or more ethical principles or duties.",
        },
        {
          id: "q22",
          question:
            "When a nurse faces an ethical dilemma, what would be the best guide that they can use in their practice?",
          choices: [
            "Code of Ethics",
            "RA 9173",
            "Hospital policies and protocols",
            "Preamble of the Philippines",
          ],
          answer: 0,
          rationale: "The Code of Ethics provides guidance for ethical decision-making in nursing.",
        },
        {
          id: "q23",
          question:
            "In a crisis situation, what would be the best leadership style to be employed?",
          choices: ["Laissez-Faire", "Bureaucratic", "Democratic", "Authoritarian"],
          answer: 3,
          rationale:
            "Authoritarian leadership is decisive and provides clear direction, which is necessary in a crisis.",
        },
        {
          id: "q24",
          question:
            "Which leadership style involves minimal leader participation and based on noninterference?",
          choices: ["Bureaucratic", "Democratic", "Laissez-Faire", "Autocratic"],
          answer: 2,
          rationale: "Laissez-Faire leadership is characterized by minimal leader participation.",
        },
        {
          id: "q25",
          question:
            "Head Nurse Ray is confident in his staff as all of them are experienced nurses and lets them decide how to go about with patient care. This has also led him to not be as hands-on with them as he used to. What leadership style is Ray using?",
          choices: ["Laissez-Faire", "Democratic", "Bureaucratic", "Authoritarian"],
          answer: 0,
          rationale:
            "Ray is using a Laissez-Faire style, as he gives his staff freedom and provides minimal direction.",
        },
        {
          id: "q26",
          question:
            "Head Nurse Ray states that a Laissez-Faire leadership is the best type of leadership as it has greatly helped him in this area. Is Ray's statement true?",
          choices: [
            "Yes, it is highly advantageous for him due to his competent staff",
            "Yes, compared to other leadership styles, the leader does not have to work as much",
            "No, the democratic style is considered the best as it balances both leader and member participation",
            "No, one style is not necessarily better as each have their own advantages and disadvantages",
          ],
          answer: 3,
          rationale:
            "There is no single 'best' leadership style; each has its own advantages and disadvantages depending on the situation.",
        },
        {
          id: "q27",
          question:
            "Dave, a nurse administrator, knows that in the creation of policies, it is a matter of group discussion and decision-making. During staff meetings on updating facility policies, he ensures that everyone in the team has a say and decides via making a consensus among members. What leadership style does Dave employ?",
          choices: ["Laissez-Faire", "Democratic", "Republican", "Liberal"],
          answer: 1,
          rationale: "Democratic leadership involves group participation and consensus building.",
        },
        {
          id: "q28",
          question:
            "Abby wishes to study the lived experiences of patients with leukemia undergoing chemotherapy. What would be the appropriate research design to use?",
          choices: ["Ethnography", "Experimental", "Grounded Theory", "Phenomenology"],
          answer: 3,
          rationale: "Phenomenology is the study of lived experiences of individuals.",
        },
        {
          id: "q29",
          question:
            "Jared aims to determine the average levels of anxiety among first time mothers during their first prenatal visit. What would be the appropriate research design for him to use?",
          choices: ["Exploratory", "Experimental", "Phenomenology", "Descriptive"],
          answer: 3,
          rationale:
            "Descriptive research is used to describe characteristics or averages of a population.",
        },
        {
          id: "q30",
          question:
            "A mother came for a consultation of her child with pus draining from the eyes. Upon inquiry, the nurse noted that the child had measles within the last 2 months. What should Nurse Abby recommend according to the IMCI guidelines?",
          choices: [
            "Advise to take Amoxicillin",
            "Advise to apply Tetracycline ointment",
            "Treat with Gentian violet",
            "Advise to apply Streptomycin ointment",
          ],
          answer: 1,
          rationale:
            "For a child with pus draining from the eyes and a history of measles, IMCI guidelines recommend Tetracycline ointment.",
        },
        {
          id: "q31",
          question:
            "Another parent came in regarding Amie's diarrhea which started in the past 15 days. The parent reported blood in the child's stool. Which of the following options shows the CORRECT TREATMENT for the illness classification appropriate for Amie?",
          choices: [
            "SEVERE PERSISTENT DIARRHEA: Refer to hospital",
            "SOME DEHYDRATION: Give oral Amoxicillin for 5 days.",
            "PERSISTENT DIARRHEA: Advise to take multivitamins and minerals for 14 days and advise to follow-up in 5 days.",
            "DYSENTERY: Give ciprofloxacin for 3 days and remind to follow-up in 3 days.",
          ],
          answer: 3,
          rationale:
            "The presence of blood in stool indicates dysentery. IMCI guidelines recommend ciprofloxacin for 3 days.",
        },
        {
          id: "q32",
          question:
            "Cyrus came to the clinic for consult of his younger son. Which of the following is NOT INCLUDED among the DANGER SIGNS to assess by the nurse?",
          choices: [
            "Child vomits everything",
            "Child is actively playing",
            "Passing stool frequently",
            "Had convulsions the day before the consult",
          ],
          answer: 1,
          rationale:
            "A child who is actively playing is not a danger sign; it indicates a less severe condition.",
        },
        {
          id: "q33",
          question: "If a child requires urgent referral, the nurse should:",
          choices: [
            "Stop the assessment and immediately ask caregiver to go to the nearby hospital",
            "Call the nearby hospital and provide referral note to prevent treatment delays",
            "Monitor the child for improvements and refer only when necessary",
            "Complete assessment immediately, give urgent pre-referral treatments and prepare caregiver for travel to the hospital",
          ],
          answer: 3,
          rationale:
            "The nurse must complete the assessment, give necessary treatments, and prepare for referral.",
        },
        {
          id: "q34",
          question: "Which of the following signs indicate severe dehydration?",
          choices: [
            "Skin pinch goes back slowly",
            "No movement at all",
            "Restless and irritable",
            "Yellow palms and soles",
          ],
          answer: 1,
          rationale: "'No movement at all' or lethargy is a sign of severe dehydration.",
        },
        {
          id: "q35",
          question:
            "The nurse is currently monitoring Marie who is pregnant with twins. The nurse should monitor closely for which PRIORITY complication associated with Marie's pregnancy?",
          choices: [
            "Postterm labor",
            "Maternal anemia",
            "Hemorrhoids",
            "Costovertebral angle tenderness",
          ],
          answer: 1,
          rationale:
            "Maternal anemia is a priority complication in twin pregnancies due to increased demand for iron.",
        },
        {
          id: "q36",
          question:
            "Which of the following signs/symptoms would a nurse expect to see in a patient with placental abruption?",
          choices: [
            "Painless vaginal bleeding",
            "Increased fetal heart rate above normal limits",
            "Fever with leukocytosis",
            "Increasing fundal height measurements",
          ],
          answer: 3,
          rationale:
            "Increasing fundal height measurements indicate concealed bleeding in placental abruption.",
        },
        {
          id: "q37",
          question:
            "Nurse Kath prepares the client with complete placenta previa in preparation for delivery. Which of the following options should Nurse Kath teach this client?",
          choices: [
            "Deep breathing and coughing exercises",
            "Leboyer water birth",
            "Lamaze technique",
            "Phases of the 1st stage of labor",
          ],
          answer: 0,
          rationale:
            "Deep breathing and coughing exercises are taught to prepare for a possible emergency and promote lung expansion.",
        },
        {
          id: "q38",
          question:
            "Nurse Jena plans to incorporate injury prevention guidelines in the pediatric ward. Which interventions should be done to promote safety specifically for INFANTS AND TODDLERS?",
          choices: [
            "I. Use large and soft toys without small parts\nII. Place stuffed toys and comforters in the crib to promote comfort\nIII. Raise crib sides all the time\nIV. Allow the toddler to remain in the bathroom alone to promote autonomy while toilet training",
            "I, III",
            "I, II, IV",
            "II and III",
            "I, II, III",
          ],
          answer: 0,
          rationale:
            "For infants and toddlers, use large, soft toys without small parts (I) and raise crib sides all the time (III). Stuffed toys in cribs (II) are a suffocation risk, and leaving a toddler alone in the bathroom (IV) is unsafe.",
        },
        {
          id: "q39",
          question:
            "Ron, a 2-year old child, came with his father at the clinic. The nurse was asked regarding the age-appropriate toys for Ron. Which toy is the BEST choice for Ron based on his age?",
          choices: ["Stacking blocks", "Puzzle", "Toy soldiers", "Card game with large pictures"],
          answer: 0,
          rationale:
            "Stacking blocks are appropriate for a 2-year-old to develop fine motor skills and hand-eye coordination.",
        },
        {
          id: "q40",
          question:
            "Kevin, 16-year-old male, recently underwent an appendectomy. What should Nurse Clara PRIORITIZE to promote normal growth and development postoperatively?",
          choices: [
            "Allow Kevin's family to bring his favorite computer games at the hospital.",
            "Advise Kevin to rest more and read",
            "Allow Kevin to interact with children of the same age group",
            "Encourage parents to remain in the room at all times with Kevin",
          ],
          answer: 2,
          rationale:
            "Adolescents need peer interaction. Allowing interaction with peers promotes normal growth and development.",
        },
        {
          id: "q41",
          question:
            "Mark, a 55-year-old male diagnosed with Type 1 DM, was being taught by the clinic nurse regarding his condition. Which statement by Mark indicates the need for further teaching?",
          choices: [
            '"I will call my doctor if I am ill for more than a day."',
            '"I need to stop taking my insulin if I am vomiting."',
            '"I will drink small quantities of fluid every 15 to 30 minutes."',
            '"I need to eat 10 to 15 g of carbs every 1-2 hours."',
          ],
          answer: 1,
          rationale:
            "Insulin should not be stopped during illness; it may be needed even if not eating.",
        },
        {
          id: "q42",
          question:
            "A nurse was asked by a 88 year old client with Type 2 DM regarding the factors that may cause the cancellation of the scheduled CT scan with contrast media. What laboratory test should be done prior to CT scan?",
          choices: ["Electrolytes", "AST and ALT", "FBS", "BUN and CREA"],
          answer: 3,
          rationale:
            "BUN and creatinine levels are checked to assess kidney function before contrast media is given.",
        },
        {
          id: "q43",
          question:
            "A client with DM regularly performs blood sugar monitoring at home. Which test can BEST assess the client's average blood sugar over the period of 3 months?",
          choices: ["Fasting plasma glucose", "HBA1c", "Urine dipstick for glucose", "GTT"],
          answer: 1,
          rationale: "Hemoglobin A1c reflects average blood glucose over the past 2-3 months.",
        },
        {
          id: "q44",
          question:
            "What should a nurse anticipate when assessing a child for symptoms of neurogenic diabetes insipidus (DI)?",
          choices: [
            "Increased blood glucose levels",
            "Elevated ADH level",
            "Low serum sodium",
            "Polyuria",
          ],
          answer: 3,
          rationale: "Neurogenic DI is caused by a deficiency of ADH, leading to polyuria.",
        },
        {
          id: "q45",
          question: "A nurse should locate and remove a client's CLONIDINE patch if:",
          choices: [
            "The client has allergy to sulfa products",
            "Latest BP of 80/50 mmHg",
            "Complaint of numbness and tingling down the arm nearest to the patch",
            "Potassium level is 3.0 mg/dl",
          ],
          answer: 1,
          rationale:
            "A blood pressure of 80/50 mmHg is hypotension, which is an adverse effect of clonidine. The patch should be removed.",
        },
        {
          id: "q46",
          question:
            "A nurse is caring for a G3P1 client at the clinic. The client is being induced for pregnancy-induced hypertension using IV oxytocin. What events would warrant the discontinuation of oxytocin?",
          choices: [
            "I. 3 contractions within 10 minutes\nII. Decrease in fetal heart rate after the peak of contraction during each of the last 3 contractions\nIII. Client is completely dilated\nIV. Contractions every 3 minutes lasting 90 seconds each",
            "I and IV",
            "I, II, and III",
            "II and IV",
            "I, II, III, IV",
          ],
          answer: 2,
          rationale:
            "Late decelerations (II) indicate uteroplacental insufficiency and contractions lasting 90 seconds (IV) are too strong, warranting discontinuation.",
        },
        {
          id: "q47",
          question:
            "Nurse Jena provided discharge instructions to the parents of a 2-year-old child who underwent orchiopexy indicated for cryptorchidism. Which statement DOES NOT INDICATE a NEED for further instruction?",
          choices: [
            "\"I'll follow the doctor's advice when my child can play again.\"",
            '"I\'ll check the temperature of the water before giving my child a sponge bath."',
            '"I\'ll make sure to give the pain medication as ordered."',
            '"I\'ll take my child to the doctor for a follow-up appointment."',
          ],
          answer: 0,
          rationale:
            "Following the doctor's advice on when to resume play is an appropriate understanding.",
        },
        {
          id: "q48",
          question:
            "Eric, a newborn male infant diagnosed with cryptorchidism, was brought to the ward. The findings were shared with his parents. Nurse Janna would teach the parents regarding the psychosocial effect if the undescended testicle were not corrected?",
          choices: ["Infertility", "Atrophy", "Malignancy", "Feminization"],
          answer: 3,
          rationale:
            "Feminization (or the fear of it, impacting gender identity) is a psychosocial effect.",
        },
        {
          id: "q49",
          question:
            "Janna recently passed the board exam. How many continuing professional development (CPD) units should be acquired by Janna after earning her first license?",
          choices: ["20 units", "15 units", "None", "45 units"],
          answer: 2,
          rationale:
            "New board passers are not required to have CPD units for their first renewal.",
        },
        {
          id: "q50",
          question:
            "In line with Department Order No. 182, how many hours a day per week should a health personnel work if the hospital has a bed capacity of 250?",
          choices: ["6 hours", "8 hours", "10 hours", "12 hours"],
          answer: 1,
          rationale: "The standard work hours is 8 hours per day.",
        },
        {
          id: "q51",
          question:
            "Andrea, a 14-year-old female, came to the clinic to know more about her body. She anxiously wants to know more about the menstrual cycle and you start by explaining that the menstrual cycle is the episodic uterine bleeding in response to cyclic hormonal changes. You are correct when you explain that the follicles mature and where the endometrium begins to proliferate belong to which PHASE of the menstrual cycle?",
          choices: [
            "Second phase of menstrual cycle",
            "Proliferative phase",
            "Secretory phase",
            "All of the above",
          ],
          answer: 1,
          rationale:
            "The follicular and proliferative phases occur together, where follicles mature and the endometrium proliferates.",
        },
        {
          id: "q52",
          question:
            "During the fertile period of women, one of the ovary's primordial follicles is activated by what hormone to begin to grow and mature?",
          choices: ["FSH", "LH", "GnRH", "Estrogen"],
          answer: 0,
          rationale:
            "Follicle-stimulating hormone (FSH) activates the growth and maturation of ovarian follicles.",
        },
        {
          id: "q53",
          question:
            "During the luteal phase of the menstrual cycle, which of the following hormones is at the highest level?",
          choices: ["Estrogen", "FSH", "Progesterone", "GnRH"],
          answer: 2,
          rationale:
            "Progesterone is at its highest level during the luteal phase, which is the post-ovulatory phase.",
        },
        {
          id: "q54",
          question:
            "The corpus luteum in the ovary begins to regress after 8 to 10 days if fertilization does not occur. What happens to the levels of progesterone and estrogen production?",
          choices: [
            "Progesterone production increases and estrogen production decreases",
            "Both decreases",
            "Progesterone production decreases and estrogen production increases",
            "Both plateaus out",
          ],
          answer: 1,
          rationale:
            "If fertilization does not occur, the corpus luteum degenerates, leading to a decrease in both progesterone and estrogen.",
        },
        {
          id: "q55",
          question:
            "Andrea expressed worry on the amount of blood she loses every period, you explain that menstrual flow contains only approximately ml of blood.",
          choices: ["100 to 120 mL", "80 to 100 mL", "30 to 80 mL", "50 to 120 mL"],
          answer: 2,
          rationale: "Normal menstrual flow is approximately 30 to 80 mL of blood.",
        },
        {
          id: "q56",
          question:
            "One client, who has been 4 weeks pregnant, confessed that she is guilty about feeling both pleased and not pleased about the pregnancy unlike her husband who has been very happy about having a baby. In terms of psychosocial change, the first task of the couple during the first trimester is to?",
          choices: [
            "Preparing themselves of having this big change",
            "Accepting the pregnancy",
            "Accepting the baby",
            "Preparing for the baby and of pregnancy",
          ],
          answer: 1,
          rationale:
            "The first task of the couple during the first trimester is to accept the pregnancy.",
        },
        {
          id: "q57",
          question:
            "An anxious client who has been trying to get pregnant for 2 years came to the clinic with a missed period. During the initial assessment, which of the following is NOT a probable sign of pregnancy?",
          choices: [
            "Serum laboratory tests",
            "Fetal outline felt by examiner",
            "Uterine enlargement",
            "Ballottement",
          ],
          answer: 1,
          rationale:
            "Fetal outline felt by the examiner is a positive sign of pregnancy, not a probable sign.",
        },
        {
          id: "q58",
          question:
            "During the examination by the physician, how will you document the positive color change of the vagina from pink to violet?",
          choices: [
            "(+) Chadwick's sign",
            "(+) Goodell's sign",
            "(+) Hegar's sign",
            "(+) Ballottement",
          ],
          answer: 0,
          rationale: "Chadwick's sign is the bluish-purple discoloration of the cervix and vagina.",
        },
        {
          id: "q59",
          question:
            "Which of the following statements will need further instructions when said by a client about Braxton Hicks contractions?",
          choices: [
            '"It\'s like practice contractions or a warm-up exercise that is felt first abdominally and confined in the abdomen and groin."',
            '"I may feel uterine contractions throughout my pregnancy, starting at least by 12th week"',
            '"So these contractions decrease placental perfusion then."',
            '"I would know these are Braxton Hicks when it is unaccompanied by cervical dilation."',
          ],
          answer: 2,
          rationale:
            "Braxton Hicks contractions do not decrease placental perfusion; this is false.",
        },
        {
          id: "q60",
          question:
            "A pregnant client with a venous thromboembolic disease has increased risks of thrombus formation that may cause aortic aneurysm. Which of the following will be prescribed for these patients who also have antiphospholipid antibodies?",
          choices: [
            "Aspirin",
            "Warfarin",
            "Estrogen",
            "Only conservative measures are done since aspirin can be teratogenic.",
          ],
          answer: 0,
          rationale:
            "Low-dose aspirin is prescribed for pregnant women with antiphospholipid syndrome.",
        },
        {
          id: "q61",
          question:
            "A patient came to the ER with signs of labor, which of the following will you NOT include as true signs of labor?",
          choices: [
            "Cervix softens and ripens",
            "Operculum is be expelled",
            "Productive uterine contractions",
            "Sudden increased energy from epinephrine release",
          ],
          answer: 3,
          rationale:
            "Sudden increased energy is a sign of impending labor, not a true sign of labor itself.",
        },
        {
          id: "q62",
          question:
            "You are monitoring your patients with oxytocin infusion, in labor and is experiencing contractions, one of the patients shows signs of (+) late decelerations. What is your PRIORITY action?",
          choices: [
            "Reassess the patient",
            "Notify the physician",
            "Assess maternal and fetal heart rate",
            "Stop oxytocin infusion",
          ],
          answer: 3,
          rationale:
            "Late decelerations indicate uteroplacental insufficiency, so the priority is to stop the oxytocin infusion.",
        },
        {
          id: "q63",
          question:
            "Which of the following refers to how far the presenting parts have descended into the pelvis or ischial spines?",
          choices: ["Fetal lie", "Engagement", "Attitude", "Fetal stations"],
          answer: 3,
          rationale:
            "Fetal station refers to the descent of the presenting part relative to the ischial spines.",
        },
        {
          id: "q64",
          question:
            "Immediately after the delivery of the newborn, which of the following will you expect to do?",
          choices: [
            "Routine suction of the newborn's mouth and nose",
            "Delayed cutting until pulsation ceases",
            "Administer prophylactic eye ointment to the infant",
            "Clamp two Kelly hemostats placed 4 to 7 inches from the infant's umbilicus",
          ],
          answer: 1,
          rationale: "Delayed cord clamping until pulsations cease is recommended.",
        },
        {
          id: "q65",
          question:
            "Once the placenta is delivered, oxytocin is administered. Which of the following is essential to have as baseline data before administering the medication?",
          choices: [
            "Time oxytocin is administered",
            "If episiotomy is needed.",
            "Presence of edema",
            "Maternal blood pressure",
          ],
          answer: 3,
          rationale:
            "Maternal blood pressure is essential baseline data as oxytocin can cause hypertension.",
        },
        {
          id: "q66",
          question: "What is the average head circumference of a newborn?",
          choices: ["34 to 35 cm", "30 to 32 cm", "36 to 37 cm", "Depends on the weight"],
          answer: 0,
          rationale: "The average head circumference of a newborn is 34 to 35 cm.",
        },
        {
          id: "q67",
          question:
            "The first-time mother asked you that she worries she may be overfeeding her baby during the first feed. Which of the following is the maximum amount of milk that can be fed to a newborn infant?",
          choices: ["30-80 ml", "40-100 ml", "10-20 ml", "5-10 ml"],
          answer: 2,
          rationale: "A newborn's stomach capacity is approximately 10-20 mL per feeding.",
        },
        {
          id: "q68",
          question:
            "The mother asked about the weight of her child who is turning one tomorrow. You inform that, generally, the weight is ___ after a year.",
          choices: [
            "Doubled",
            "Multiplied by 5",
            "Tripled",
            "Cannot determine - ask if breastfed or formula-fed",
          ],
          answer: 2,
          rationale: "A child's birth weight triples by their first birthday.",
        },
        {
          id: "q69",
          question:
            "What is the first baby tooth expected to erupt, and which month is it usually noticed?",
          choices: ["Lateral incisor", "Central incisor", "Canine", "Any of the teeth"],
          answer: 1,
          rationale:
            "The first baby tooth to erupt is usually the lower central incisor, around 6 months.",
        },
        {
          id: "q70",
          question:
            "Which of the following is TRUE about care for of the infant's teeth that can be included in the health teaching?",
          choices: [
            "If a natal tooth is loosely attached, they should be removed before they loosen spontaneously.",
            "Permanent teeth erupt at age 5 or earlier.",
            "Baby teeth are essentially unimportant in dental growth as it is expected to fall out.",
            "All of above",
          ],
          answer: 0,
          rationale: "Natal teeth that are loose should be removed to prevent aspiration.",
        },
        {
          id: "q71",
          question:
            "What year does the child generally have complete deciduous teeth and permanent teeth?",
          choices: [
            "Deciduous teeth complete by 5 years old; Permanent teeth complete by 15 years old",
            "Deciduous teeth complete by 3 years old; Permanent teeth complete by 9.5 years old",
            "Deciduous teeth complete by 2 years old; Permanent teeth complete by 9.5 years old",
            "Deciduous teeth complete by 3 years old; Permanent teeth complete by 18 years old",
          ],
          answer: 2,
          rationale:
            "Deciduous teeth are typically complete by 2 years old, and permanent teeth by 9.5 years old.",
        },
        {
          id: "q72",
          question:
            "A parent with a preschooler asked you about how her child is not fond of the toys they bought the other day and prefers to act as different occupations such as being a police officer or a chef. Which of the following is appropriate as a response?",
          choices: [
            "That's fine, your child is normal to have imaginary friends.",
            "Their imaginations are keener than they will be at any other time in their lives, so they enjoy pretend games.",
            "Maybe the child would appreciate other toys that would enhance his imagination.",
            "Let's bring the child here for an initial assessment if you would like.",
          ],
          answer: 1,
          rationale:
            "Preschoolers are in the stage where imagination is very active, and pretend play is normal.",
        },
        {
          id: "q73",
          question:
            "Which of the following shows appropriate pairing of age and fine motor development among preschool age?",
          choices: [
            "3 years old - draws a 6-part man",
            "4 years old - can do simple buttons",
            "5 years old - undresses self and stacks tower of blocks",
            "4 years old - can lace shoes",
          ],
          answer: 1,
          rationale:
            "A 4-year-old can typically do simple buttons, which is an appropriate fine motor skill.",
        },
        {
          id: "q74",
          question: "What is the important milestone achieved by a 4-month-old infant?",
          choices: [
            "Turn completely over, front to back and back to front",
            "Can cruise",
            "Sit independently",
            "No longer demonstrates head lag",
          ],
          answer: 3,
          rationale:
            "By 4 months, the infant should no longer demonstrate head lag when pulled to a sitting position.",
        },
        {
          id: "q75",
          question: "When will you expect to notice your child sitting securely without support?",
          choices: ["5 months old", "12 months old", "8 months old", "10 months old"],
          answer: 2,
          rationale: "An infant can typically sit securely without support by 8 months.",
        },
        {
          id: "q76",
          question:
            "Why is it important for a parent to notice their child demonstrating the ability to follow objects with their eyes?",
          choices: [
            "Achievement of binocular vision",
            "Achievement of hand regard",
            "Achievement of object permanence",
            "None of the above",
          ],
          answer: 0,
          rationale: "Following objects with the eyes is a sign of developing binocular vision.",
        },
        {
          id: "q77",
          question:
            "A 6-week-old infant demonstrates a social smile, which of the following areas is assessed when this is observed and achieved?",
          choices: ["Vision", "Motor control", "Intelligence", "All of the above"],
          answer: 2,
          rationale:
            "Social smiling is a sign of cognitive and social development, which relates to intelligence.",
        },
        {
          id: "q78",
          question:
            "Parents asked you how it is important to introduce solid foods one at a time per week, you correctly answer with which of the following?",
          choices: [
            "To help the infant adjust slowly",
            "To keep the infant excited about the next solid food",
            "To determine possible food allergy",
            "To lessen stimulation",
          ],
          answer: 2,
          rationale:
            "Introducing one food at a time allows for the identification of any food allergies.",
        },
        {
          id: "q79",
          question:
            "The Denver II Developmental Screening Test (DDST) is a tool used to assess childhood development. Which of the following is not included in the categories assessed?",
          choices: ["Personal-social", "Fine motor-adaptive", "Language", "Cognitive"],
          answer: 3,
          rationale:
            "The DDST assesses personal-social, fine motor-adaptive, language, and gross motor skills. Cognitive is not a separate category.",
        },
        {
          id: "q80",
          question:
            "In the administration of MMR vaccine among small children, which of the following would be considered as the most developed site?",
          choices: ["Dorsogluteal", "Ventrogluteal", "Deltoid", "Vastus lateralis"],
          answer: 3,
          rationale:
            "The vastus lateralis is the preferred site for IM injections in infants and children under 2 years.",
        },
        {
          id: "q81",
          question:
            "This covers the promulgation of the code of ethics for registered nurses in the Philippines.",
          choices: ["RA 9713", "RA 9137", "RA 9317", "RA 10021"],
          answer: 0,
          rationale:
            "RA 9713, the Philippine Nursing Act of 2009, covers the Code of Ethics for Nurses.",
        },
        {
          id: "q82",
          question:
            "What was utilized as the principal basis in the formulation of the Code of Ethics for Registered Nurses?",
          choices: [
            "Code of Good Governance for the Professions in the Philippines",
            "Code of Conduct",
            "International Ethical Code for Nurses",
            "Professional Ethical Code for Professionals in the Philippines",
          ],
          answer: 0,
          rationale:
            "The Code of Good Governance for the Professions in the Philippines was the principal basis.",
        },
        {
          id: "q83",
          question:
            "A commercial management offered you a big break advertisement requiring you to dress as a nurse. Upon reading the script you asked for before agreeing, you read that the role would entail wearing indecorous uniform. What will be the next step of the nurse?",
          choices: [
            "Ask the director for a change in outfit into another profession instead",
            "Keep the role as it is understood to be fictitious in nature only.",
            "Do not agree to the job offered",
            "Clarify the actions that the nurse would do in the advertisement",
          ],
          answer: 2,
          rationale: "A nurse should not agree to any role that would degrade the profession.",
        },
        {
          id: "q84",
          question:
            "You are studying about how a license can be revoked from a registered nurse, which is NOT grounds for revocation?",
          choices: [
            "For unprofessional and unethical conduct",
            "For gross incompetence",
            "For negligence in the practice of nursing",
            "For not practicing their profession during their suspension",
          ],
          answer: 3,
          rationale:
            "Not practicing during a suspension is a consequence of suspension, not grounds for revocation.",
        },
        {
          id: "q85",
          question:
            "A patient who fell from the bed while reaching for the call button was reported in the unit. The patient was under your care during that shift, and it was investigated that one of the side rails were not raised. Thankfully, no untoward injuries were assessed in the patient. Will this be grounds for malpractice?",
          choices: [
            "Yes, as it was under the nurse's duty to raise the side rails to ensure safety of the patient",
            "Yes, since there was proximal cause to the event and the consequences.",
            "No, it did not complete the four requisites of negligence",
            "No, as the patient will not sue.",
          ],
          answer: 2,
          rationale:
            "Malpractice requires four elements: duty, breach, injury, and causation. Since there was no injury, it is not malpractice.",
        },
        {
          id: "q86",
          question:
            "If a suspension of the certificate of professional license was imposed by the authorities, which of the following is UNTRUE about the circumstances?",
          choices: [
            "The suspension period should not exceed 5 years.",
            "The license of the nurse would not be confiscated.",
            "The nurse should not work in the nursing practice during the suspension.",
            "None of the above is untrue",
          ],
          answer: 0,
          rationale:
            "Suspension periods are generally shorter; the statement 'should not exceed 5 years' might be false depending on the specific law.",
        },
        {
          id: "q87",
          question:
            "As an operation room nurse, they check the supplies that would be necessary for the cases tomorrow. They noticed that a preferred nylon suture ran out and would be needed for multiple cases tomorrow. They reported this issue to you, the manager, and decided to issue a petty cash to be used for buying the sutures outside of the institution. You would log this expense under which type of budget?",
          choices: ["Capital Budget", "Operational Budget", "Personnel Budget", "Cash Budget"],
          answer: 1,
          rationale:
            "Supplies and materials for daily operations fall under the operational budget.",
        },
        {
          id: "q88",
          question:
            "You are studying which of the types of nursing care system would be appropriate for the rehabilitation unit that focuses on long-term treatment. Which type would refer to having the assigned nurse to coordinate a patient's care across the healthcare system to deliver quality care and decrease fragmentation?",
          choices: ["Case Management", "Modular Nursing", "Functional Nursing", "Case Nursing"],
          answer: 0,
          rationale:
            "Case management focuses on coordination of care across a system to reduce fragmentation.",
        },
        {
          id: "q89",
          question:
            "As you train to be the manager, you will face different conflicts among the staff. In one instance, a surgeon demands a staff member to apologize for a miscommunication that happened for scheduling of a case. The manager forced the staff member to apologize without knowing the full details and left the staff member without a choice to appease the surgeon. This reflects which of strategy under conflict-resolution?",
          choices: [
            "Majority rule",
            "Smoothing",
            "Dominance or Suppression",
            "Restriction or Power",
          ],
          answer: 2,
          rationale:
            "Forcing a staff member to apologize is an example of dominance or suppression.",
        },
        {
          id: "q90",
          question:
            "Which of the following should be provided to ensure protection of principle of autonomy and right to self-determination among possible participants?",
          choices: [
            "Beneficence",
            "Data confidentiality",
            "Signature in consent",
            "Informed Consent",
          ],
          answer: 3,
          rationale: "Informed consent protects autonomy and the right to self-determination.",
        },
        {
          id: "q91",
          question:
            "Which of the following is most suitable to use for discovering meaning behind the lived experiences of nursing assistants in the ward?",
          choices: ["Grounded theory", "Phenomenology", "Ethnography", "Case Studies"],
          answer: 1,
          rationale: "Phenomenology is used to discover the meaning of lived experiences.",
        },
        {
          id: "q92",
          question:
            "In one of the research projects that involves inferential statistics, what should the Pearson's r score be to reflect a moderate positive correlation?",
          choices: ["0.1 to 0.5", "0.1 to 0.3", "0.5 to 0.7", "0.2 to 0.8"],
          answer: 0,
          rationale:
            "A moderate positive correlation is typically around 0.5 to 0.7, or 0.3 to 0.5.",
        },
        {
          id: "q93",
          question: "Which symptom is characteristic of dumping syndrome?",
          choices: ["Constipation", "Rebound tenderness", "Dizziness after meals", "Bradycardia"],
          answer: 2,
          rationale: "Dizziness after meals is a symptom of dumping syndrome.",
        },
        {
          id: "q94",
          question: "The best intervention after eating for a patient with dumping syndrome is to:",
          choices: ["Ambulate", "Lie down", "Drink cold fluids", "Sit upright"],
          answer: 1,
          rationale:
            "Lying down after eating helps slow gastric emptying and reduce dumping syndrome symptoms.",
        },
        {
          id: "q95",
          question: "The capacity of a newborn's stomach is approximately:",
          choices: ["10-20 mL", "30-50 mL", "60-80 mL", "90-100 mL"],
          answer: 0,
          rationale: "A newborn's stomach capacity is approximately 10-20 mL.",
        },
        {
          id: "q96",
          question: "The appropriate route for a suppository is:",
          choices: ["Oral", "Topical", "Rectal", "Sublingual"],
          answer: 2,
          rationale: "Suppositories are administered via the rectal route.",
        },
        {
          id: "q97",
          question: "A common long-term complication of NSAID use is:",
          choices: ["Liver cirrhosis", "Kidney failure", "Cardiac arrhythmia", "Gastric ulcer"],
          answer: 3,
          rationale: "Gastric ulcers are a common long-term complication of NSAID use.",
        },
        {
          id: "q98",
          question: "What type of disease is osteoarthritis?",
          choices: [
            "Systemic autoimmune",
            "Degenerative and non-inflammatory",
            "Infectious",
            "Metabolic",
          ],
          answer: 1,
          rationale: "Osteoarthritis is a degenerative, non-inflammatory joint disease.",
        },
        {
          id: "q99",
          question: "Heberden's nodes are found on which joints?",
          choices: [
            "Proximal interphalangeal",
            "Metacarpophalangeal",
            "Distal interphalangeal",
            "Tarsometatarsal",
          ],
          answer: 2,
          rationale: "Heberden's nodes are found on the distal interphalangeal (DIP) joints.",
        },
        {
          id: "q100",
          question: "The earliest symptom of rheumatoid arthritis is:",
          choices: ["Joint deformity", "Joint nodules", "Morning stiffness", "Muscle atrophy"],
          answer: 2,
          rationale: "Morning stiffness is often the earliest symptom of rheumatoid arthritis.",
        },
        {
          id: "q101",
          question:
            "PRBCs have been prescribed for a client with low Hgb and Hct levels. The nurse takes the client's temperature before hanging the blood transfusion and records 100.6F orally. Which action should the nurse take?",
          choices: [
            "Begin the transfusion as prescribed.",
            "Administer an antihistamine and begin the transfusion.",
            "Delay hanging the blood and notify the health care provider.",
            "Administer two tablets of acetaminophen (Tylenol) and begin the transfusion",
          ],
          answer: 2,
          rationale:
            "A fever before a transfusion may indicate an infection or a reaction. The transfusion should be delayed, and the provider notified.",
        },
        {
          id: "q102",
          question:
            "A client with severe blood loss resulting from multiple trauma requires rapid transfusion of several units of blood. The nurse asks another health team member to obtain which device for use during the transfusion procedure to help reduce the risk of cardiac dysrhythmias?",
          choices: ["Infusion pump", "Pulse oximeter", "Cardiac Monitor", "Blood-rewarming device"],
          answer: 3,
          rationale:
            "A blood-rewarming device is used to prevent hypothermia and cardiac dysrhythmias during rapid transfusions.",
        },
        {
          id: "q103",
          question:
            "The nurse receives a telephone call from the post anesthesia care unit stating that a client is being transferred to the surgical unit. The nurse plans to take which action first on arrival of the client?",
          choices: [
            "Assess the patency of the airway",
            "Check tubes or drains for patency",
            "Check the dressing to assess for bleeding",
            "Assess the vital signs to compare with preoperative measurements",
          ],
          answer: 0,
          rationale: "Airway is always the priority assessment.",
        },
        {
          id: "q104",
          question:
            "The nurse develops a plan of care for a client with deep vein thrombosis. Which client position or activity in the plan should be included?",
          choices: [
            "Out-of-bed activities",
            "Bed rest with the affected extremity kept flat",
            "Bed rest with elevation of the affected extremity",
            "Bed rest with the affected extremity in a dependent position",
          ],
          answer: 2,
          rationale:
            "Bed rest with elevation of the affected extremity promotes venous return and reduces edema.",
        },
        {
          id: "q105",
          question:
            "The nurse is preparing to care for a client who has returned to the nursing unit following cardiac catheterization performed through the femoral artery. The nurse checks the health care provider's prescription and plans to allow which client position or activity following the procedure?",
          choices: [
            "Bed rest in high Fowler's position",
            "Bed rest with bathroom privileges only",
            "Bed rest with head elevation at 60 degrees",
            "Bed rest with head elevation no greater than 30 degrees",
          ],
          answer: 3,
          rationale:
            "After femoral artery catheterization, the client should lie flat with the head elevated no more than 30 degrees to prevent bleeding.",
        },
        {
          id: "q106",
          question:
            "A client admitted to the hospital with chest pain and a history of type 2 diabetes mellitus is scheduled for cardiac catheterization. Which medication would need to be withheld for 24 hours before the procedure and for 48 hours after the procedure?",
          choices: [
            "Regular Insulin",
            "Glipizide (Glucotrol)",
            "Repaglinide (Prandin)",
            "Metformin (Glucophage)",
          ],
          answer: 3,
          rationale:
            "Metformin should be withheld before and after procedures using contrast media due to the risk of lactic acidosis.",
        },
        {
          id: "q107",
          question:
            "A client with myocardial infarction suddenly becomes tachycardia, shows signs of air hunger, and begins coughing frothy, pink-tinged sputum. Which finding would the nurse anticipate when auscultating the client's breath sounds?",
          choices: ["Stridor", "Crackles", "Scattered rhonchi", "Diminished breath sounds"],
          answer: 1,
          rationale:
            "Frothy, pink-tinged sputum is a sign of pulmonary edema, which would present with crackles on auscultation.",
        },
        {
          id: "q108",
          question:
            "A client with myocardial infarction is developing cardiogenic shock. Because of the risk of myocardial ischemia, what condition should the nurse carefully assess the client for?",
          choices: [
            "Bradycardia",
            "Ventricular dysrhythmias",
            "Rising diastolic blood pressure",
            "Falling central venous pressure",
          ],
          answer: 1,
          rationale:
            "Ventricular dysrhythmias are a common complication of cardiogenic shock and can lead to further ischemia.",
        },
        {
          id: "q109",
          question:
            "A client is wearing a continuous cardiac monitor, which begins to sound its alarm. A nurse sees no electrocardiographic complexes on the screen. Which is the priority action of the nurse?",
          choices: [
            "Call a code",
            "Call the health care provider",
            "Check the client's status and lead placement",
            "Press the recorded button on the electrocardiogram console",
          ],
          answer: 2,
          rationale:
            "The priority is to check the client and the leads. The absence of complexes could be due to a lead problem.",
        },
        {
          id: "q110",
          question:
            "The nurse is reviewing an electrocardiogram rhythm strip. The P waves and QRS complexes are regular. The PR interval is 0.16 second, and QRS complexes measure 0.06 second. The overall heart rate is 64 beats/minute. Which would be a correct interpretation based on these characteristics?",
          choices: [
            "Sinus bradycardia",
            "Sick sinus syndrome",
            "Normal sinus rhythm",
            "First-degree heart block",
          ],
          answer: 2,
          rationale:
            "All values are within normal limits (P waves and QRS regular, PR 0.12-0.20, QRS <0.12, HR 60-100). This is a normal sinus rhythm.",
        },
        {
          id: "q111",
          question:
            "A client is wearing a continuous cardiac monitor, which begins to sound its alarm. A nurse sees no electrocardiographic complexes on the screen. Which is the priority action of the nurse?",
          choices: [
            "Call a code",
            "Call the health care provider",
            "Check the client's status and lead placement",
            "Press the recorded button on the electrocardiogram console",
          ],
          answer: 2,
          rationale:
            "The priority is to check the client and the leads. The absence of complexes could be due to a lead problem.",
        },
        {
          id: "q112",
          question:
            "A client being hemodialyzed suddenly becomes short of breath and complains of chest pain. The client is tachycardic, pale, and anxious and the nurse suspects air embolism. What is the priority nursing action?",
          choices: [
            "Monitor vital signs every 15 minutes for the next hour",
            "Discontinue dialysis and notify the health care provider",
            "Continue dialysis at a slower rate after checking the lines for air",
            "Bolus the client with 500ml of normal saline to break up the air embolus",
          ],
          answer: 1,
          rationale:
            "The priority is to stop the dialysis to prevent further air entry and notify the provider.",
        },
        {
          id: "q113",
          question:
            "A client arrives at the emergency department with complaints of low abdominal pain and hematuria. The client is afebrile. The nurse next assesses the client to determine a history of which condition?",
          choices: [
            "Pyelonephritis",
            "Glomerulonephritis",
            "Bladder or abdominal trauma",
            "Renal cancer in the client's family",
          ],
          answer: 2,
          rationale:
            "Low abdominal pain and hematuria with no fever suggest trauma to the bladder or abdomen.",
        },
        {
          id: "q114",
          question:
            "A client is admitted to the emergency department following a motor vehicle accident. The client was wearing a lap seat belt when the accident occurred and now the client has hematuria and lower abdominal pain. To assess further whether the pain is caused by bladder trauma, the nurse should ask the client if the pain is referred to which area?",
          choices: ["Hip", "Shoulder", "Umbilicus", "Costovertebral angle"],
          answer: 2,
          rationale: "Bladder trauma can cause referred pain to the umbilicus or suprapubic area.",
        },
        {
          id: "q115",
          question:
            "A client is admitted to the emergency department following a fall from a horse and the health care provider prescribes insertion of a Foley catheter. While preparing for the procedure, the nurse notes blood at the urinary meatus. The nurse should take which action?",
          choices: [
            "Notify the physician",
            "Use a small-sized catheter",
            "Administer pain medication before inserting the catheter",
            "Use extra povidone-iodine solution in cleaning the meatus",
          ],
          answer: 0,
          rationale:
            "Blood at the urinary meatus may indicate urethral trauma. The physician should be notified before catheter insertion.",
        },
        {
          id: "q116",
          question:
            "The nurse is assessing the patency of a client's left arm arteriovenous fistula prior to initiating hemodialysis. Which finding indicates that the fistula is patent?",
          choices: [
            "Palpation of a thrill over the fistula",
            "Presence of a radial pulse in the left wrist",
            "Absence of a bruit on auscultation of the fistula",
            "Capillary refill less than 3 seconds in the nail beds of the fingers on the left hand",
          ],
          answer: 0,
          rationale: "A palpable thrill over the fistula indicates patency.",
        },
        {
          id: "q117",
          question:
            "A hemodialysis client with a left arm fistula is at risk for arterial steal syndrome. The nurse should assess the client for which manifestations of this complications?",
          choices: [
            "Warmth, redness, and pain in the left hand",
            "Aching pain, pallor, and edema of the left arm",
            "Edema and reddish discoloration of the left arm",
            "Pallor, diminished pulse, and pain in the left hand",
          ],
          answer: 3,
          rationale:
            "Arterial steal syndrome presents with pallor, diminished pulse, and pain distal to the fistula.",
        },
        {
          id: "q118",
          question:
            "The nurse is collecting a data from a client who has a history of benign prostatic hyperplasia. To determine whether the client currently is experiencing this condition, the nurse should ask the client about the presence of which early symptom?",
          choices: [
            "Nocturia",
            "Urinary retention",
            "Urge incontinence",
            "Decreased force in the stream of urine",
          ],
          answer: 3,
          rationale: "Decreased force of urinary stream is often the first symptom of BPH.",
        },
        {
          id: "q119",
          question:
            "The nurse is performing a CPR on an adult client. When performing chest compressions, the nurse should depress the sternum by how many inch(es)?",
          choices: ["3/4 inch", "1 inch", "2 inches", "3 inches"],
          answer: 2,
          rationale:
            "The recommended compression depth for an adult is at least 2 inches (5 cm), but no more than 2.4 inches.",
        },
        {
          id: "q120",
          question:
            "The nurse witnesses the collapse of a victim in her neighborhood and suspects cardiac arrest. Which action should the nurse take first?",
          choices: [
            "Initiate rescue breathing",
            "Begin giving chest compressions",
            "Check for a pulse",
            "Open the airway",
          ],
          answer: 1,
          rationale:
            "Compressions are the first step in CPR for an unwitnessed collapse, as per current guidelines.",
        },
        {
          id: "q121",
          question:
            "A client is to have a cystoscopy to rule out cancer of the bladder. Which of the following symptoms would indicate that the client has developed a complication after cystoscopy?",
          choices: ["Dizziness", "Chills", "Pink-tinged urine", "Bladder spasms"],
          answer: 1,
          rationale:
            "Chills or fever may indicate an infection, which is a complication of cystoscopy.",
        },
        {
          id: "q122",
          question:
            "A client who has been diagnosed with bladder cancer is scheduled for an ileal conduit. Preoperatively, the nurse reinforces the client's understanding of the surgical procedure by explaining that an ileal conduit:",
          choices: [
            "Is a temporary procedure that can be reversed later.",
            "Diverts urine into the sigmoid colon, where it is expelled through the rectum.",
            "Conveys urine from the ureters to a stoma opening on the abdomen.",
            "Creates an opening in the bladder that allows urine to drain into an external pouch.",
          ],
          answer: 2,
          rationale:
            "An ileal conduit is a permanent urinary diversion that uses a segment of the ileum to create a stoma for urine drainage.",
        },
        {
          id: "q123",
          question:
            "After surgery for an ileal conduit, the nurse should closely evaluate the client for the occurrence of which of the following complications related to pelvic surgery?",
          choices: ["Peritonitis", "Thrombophlebitis", "Ascites", "Inguinal Hernia"],
          answer: 1,
          rationale:
            "Thrombophlebitis is a risk after pelvic surgery due to immobility and venous stasis.",
        },
        {
          id: "q124",
          question:
            "A client is admitted to the hospital with a diagnosis of renal calculi. She is experiencing severe flank pain and complains of nausea. Her temperature is 100.6°F (38.1C). Which of the following would be a priority outcome for this client.",
          choices: [
            "Prevention of urinary tract complications.",
            "Alleviation of nausea.",
            "Alleviation of pain.",
            "Maintenance of fluid and electrolyte balance.",
          ],
          answer: 2,
          rationale:
            "Alleviating pain is the priority for a client with renal calculi, as pain is a primary symptom.",
        },
        {
          id: "q125",
          question:
            "The nurse assesses the client who has chronic renal failure and notes the following: crackles in the lung bases, elevated blood pressure, and weight gain of 2 pounds in 1 day. Based on these data, which of the following nursing diagnosis is appropriate?",
          choices: [
            "Excess fluid volume related to the kidney's inability to maintain fluid balance.",
            "Increased cardiac output related to fluid overload.",
            "Ineffective tissue perfusion related to interrupted arterial blood flow.",
            "Ineffective therapeutic regimen management related to lack of knowledge about therapy.",
          ],
          answer: 0,
          rationale:
            "Crackles, elevated BP, and weight gain indicate fluid overload, or excess fluid volume.",
        },
        {
          id: "q126",
          question:
            "The dialysis solution is warmed before use in peritoneal dialysis primarily to?",
          choices: [
            "Encourage the removal of serum area.",
            "Force potassium back into the cells.",
            "Add extra warmth to the body.",
            "Promote abdominal muscle relaxation.",
          ],
          answer: 3,
          rationale:
            "Warming the dialysate helps to prevent discomfort and promotes abdominal muscle relaxation.",
        },
        {
          id: "q127",
          question:
            "The client is scheduled to have a kidney, ureter, and bladder (KUB) radiograph. Which of the following would be ordered to prepare the client for this radiograph?",
          choices: [
            "Fluid and food will be withheld the morning of the examination.",
            "A tranquilizer will be given before the examination.",
            "An enema will be given before the examination.",
            "No special preparation is required for the examination.",
          ],
          answer: 3,
          rationale: "A KUB is a plain X-ray that requires no special preparation.",
        },
        {
          id: "q128",
          question:
            "The following teaching guidelines should be provided when giving information on early detection of cancer. Which one should not be included?",
          choices: [
            "Monthly breast self-examination should be done by women who are 20 years old and above.",
            "Digital rectal examination should be done annually from age 40 years to detect colorectal cancer.",
            "Papanicolaou examination only for women who are sexually active.",
            "Baseline mammogram for women at the age of 40 years.",
          ],
          answer: 2,
          rationale: "Pap smears are recommended for all women who are sexually active or over 18.",
        },
        {
          id: "q129",
          question:
            "The client is scheduled for a bronchoscopy. Which of the following is not necessary to be done by the nurse when preparing the client for the procedure?",
          choices: [
            "Secure written consent.",
            "Ask for allergies to sedation or iodine.",
            "Maintain NPO for 6 to 8 hours.",
            "Instruct client to remove dentures or bridges.",
          ],
          answer: 1,
          rationale:
            "Ask for allergies to local anesthetic (not iodine), as iodine is used for other procedures.",
        },
        {
          id: "q130",
          question:
            "The nurse is teaching the client how to manage a nosebleed. Which of the following instructions would be appropriate to give to the client?",
          choices: [
            '"Tilt your head backward and pinch your nose."',
            '"Lie down flat and place an ice compress over the bridge of your nose."',
            '"Blow your nose gently with your neck flexed."',
            '"Sit down, lean forward, and pinch the soft portion of your nose."',
          ],
          answer: 3,
          rationale:
            "Sitting down, leaning forward, and pinching the soft portion of the nose is the correct way to manage a nosebleed.",
        },
        {
          id: "q131",
          question:
            "Which of the following diets would be most appropriate for a client with COPD?",
          choices: [
            "Low fat, low cholesterol diet.",
            "Bland, soft diet.",
            "Low sodium diet.",
            "High calorie high protein diet.",
          ],
          answer: 3,
          rationale:
            "Clients with COPD need a high-calorie, high-protein diet to meet their increased energy needs.",
        },
        {
          id: "q132",
          question: "When suctioning a client with tracheostomy, the nurse must remember to:",
          choices: [
            "Use a new sterile catheter with each insertion.",
            "Initiate suction as the catheter is being withdrawn.",
            "Insert the catheter until the cough reflex is stimulated.",
            "Remove the inner cannula before inserting the suction catheter.",
          ],
          answer: 1,
          rationale:
            "Suction should be applied intermittently as the catheter is being withdrawn to prevent mucosal damage.",
        },
        {
          id: "q133",
          question:
            "Which of the following results of enzyme studies does not indicate the presence of MI?",
          choices: ["Elevated CK-MB", "Elevated LDH", "Elevated AST", "Elevated ALP"],
          answer: 3,
          rationale:
            "ALP (alkaline phosphatase) is not typically elevated in MI; it is associated with bone or liver issues.",
        },
        {
          id: "q134",
          question:
            "The client will undergo right-sided cardiac catheterization. Which of the following should not be included in patient teaching?",
          choices: [
            '"You may have to fast for 6-8 hours before the procedure."',
            '"You will experience a warm or flushing sensation as the contrast medium is injected."',
            '"You will be transferred to the operating room and you will receive general anesthesia."',
            '"You have to tell me if you have an allergy to seafood."',
          ],
          answer: 2,
          rationale:
            "Cardiac catheterization is done in a cath lab, not the OR, and does not require general anesthesia.",
        },
        {
          id: "q135",
          question:
            "The client who experiences angina has been told to follow a low cholesterol diet. Which of the following meals should the nurse tell the client would be best on her low-cholesterol diet?",
          choices: [
            "Hamburger, salad, milkshake",
            "Baked liver, green beans, and coffee",
            "Spaghetti with tomato sauce, salad, coffee",
            "Fried chicken, green beans, and skim milk",
          ],
          answer: 2,
          rationale: "Spaghetti with tomato sauce and salad is a low-cholesterol option.",
        },
        {
          id: "q136",
          question:
            "When ventricular fibrillation occurs in a coronary care unit, the first person reaching the client should:",
          choices: [
            "Administer oxygen",
            "Defibrillate the client",
            "Initiate cardiopulmonary resuscitation",
            "Administer sodium bicarbonate intravenously",
          ],
          answer: 1,
          rationale: "Defibrillation is the priority treatment for ventricular fibrillation.",
        },
        {
          id: "q137",
          question:
            "A client with MI is receiving Heparin. If the anticoagulant therapy is effective, the nurse would expect:",
          choices: [
            "APTT twice the normal value",
            "An absence of ecchymotic areas",
            "A decreased viscosity of the blood",
            "A reduction of confusion and weakness",
          ],
          answer: 0,
          rationale:
            "Therapeutic heparin therapy is indicated by an APTT (or PTT) of 1.5 to 2.5 times the normal value.",
        },
        {
          id: "q138",
          question:
            "Which position would most help to decrease a client's discomfort when the client's spouse injects the vitamin B12 using the ventrogluteal site?",
          choices: [
            "Lying on the side with legs extended.",
            "Lying on the abdomen with toes pointed inward",
            "Leaning over edge of a low table with the hips flexed",
            "Standing upright with the feet one-shoulder width apart",
          ],
          answer: 0,
          rationale:
            "The side-lying position with the leg slightly flexed is best for the ventrogluteal site.",
        },
        {
          id: "q139",
          question:
            "The client had been diagnosed to have polycythemia vera. Which of the following measures is not included in the nursing care plan of the client?",
          choices: [
            "Increase fluid intake",
            "Monitor the client for signs and symptoms of thromboembolism.",
            "Advise the client to avoid high altitude",
            "Implement isolation precaution",
          ],
          answer: 3,
          rationale:
            "Polycythemia vera is not an infectious disease, so isolation precautions are not needed.",
        },
        {
          id: "q140",
          question:
            "During a period of heavy play activity, a first-grader with a known history of anemia complains of being woozy. The school nurse's best initial response would be to:",
          choices: [
            "Check the child's pulse and blood pressure",
            "Have the child sit until the dizziness subsides",
            "Use spirit of ammonia to prevent the child from fainting",
            "Assist the child to the nurse's room and place the child in a supine position",
          ],
          answer: 3,
          rationale:
            "The child should be placed in a supine position (lying flat) to increase blood flow to the brain.",
        },
        {
          id: "q141",
          question:
            "The parents of a 10-year old boy with hemophilia are very worried about their other children, two girls and another boy, want to know what the chances are concerning their having the disorder or being a carrier. An appropriate answer to this question would be that:",
          choices: [
            "All girls will be normal and the other son a carrier",
            "All the girls will be carriers and one half of the boys will be affected",
            "Each son has a 50% chance of either being affected or a carrier, the girls will all be carriers.",
            "Each son has a 50% chance of being affected and each daughter a 50% chance of being a carrier.",
          ],
          answer: 3,
          rationale:
            "Hemophilia is an X-linked recessive disorder. A carrier mother has a 50% chance of passing the affected X chromosome to each son (making him affected) and a 50% chance of passing it to each daughter (making her a carrier).",
        },
        {
          id: "q142",
          question:
            "A 4-year old child with leukemia experiences gum bleeding after brushing his teeth. Which of the following is inappropriate nursing action?",
          choices: [
            "Provide sponge-type applicator",
            "Apply dry tea bag over the bleeding area in the gum",
            "Rinse the child's mouth with half-strength hydrogen peroxide",
            "Record and report the incident without alarming the child",
          ],
          answer: 2,
          rationale:
            "Half-strength hydrogen peroxide can be irritating and is not recommended for mouth care in children with bleeding gums.",
        },
        {
          id: "q143",
          question:
            "Miss Kat's first topic was on HIV transmission. After explaining the different transmission modes, she asked the group: 'Which among the following is the MAJOR mode of transmission of the disease?'",
          choices: ["Blood Transfusion", "Needle pricks", "Sexual intercourse", "Kissing"],
          answer: 2,
          rationale:
            "Unprotected sexual intercourse is the major mode of HIV transmission worldwide.",
        },
        {
          id: "q144",
          question:
            "One of the pregnant women asked the BEST way to prevent HIV transmission from a pregnant HIV (+) mother to child?",
          choices: [
            "Deliver the child via normal delivery with cervical support",
            "Stop pregnancy by abortion",
            "Take antiviral medicines as prescribed by physician",
            "Prenatal check-up more than the standards",
          ],
          answer: 2,
          rationale:
            "Taking antiretroviral medications as prescribed significantly reduces the risk of mother-to-child transmission.",
        },
        {
          id: "q145",
          question:
            "A 20-year-old newly-wed woman, whose husband has recently been diagnosed with HIV, asked: 'Will my baby have HIV too?' What is the BEST answer that Miss Kat should give the client?",
          choices: [
            '"No, definitely not because your child has not been exposed to any type of HIV transmission."',
            '"Yes, because HIV is definitely transmitted to the child form the mother through the placenta."',
            '"One way of transmitting HIV from the mother to the baby is through the placenta. However, your child may or may not have been transmitted with HIV virus."',
            '"It depends on the viral load of the mother and many other factors. Let us just see you after you give birth."',
          ],
          answer: 2,
          rationale:
            "This answer provides accurate information about the risk of transmission without causing undue alarm.",
        },
        {
          id: "q146",
          question:
            "Miss Kat continued with her health teaching. This time she describes four main routes of HIV transmission. Which one is NOT included?",
          choices: [
            "Childbirth and breastfeeding",
            "Unprotected vaginal and anal or oral sex",
            "Breathing the same air as someone living with HIV does",
            "Sharing unsterilized injecting drug equipment.",
          ],
          answer: 2,
          rationale: "HIV is not transmitted through casual contact like breathing the same air.",
        },
        {
          id: "q147",
          question:
            "Miss Kat gave a few questions to her audience about HIV transmission to find out if they were able to learn about it. 'Which of the following is the LEAST among HIV transmission that can directly enter the body via the blood stream or mucous membranes?' This can be through the",
          choices: [
            "Urethra or inside the foreskin of the penis",
            "Lining of the vagina, cervix or womb",
            "Dermis of the skin",
            "Lining of the anus",
          ],
          answer: 2,
          rationale:
            "The dermis (intact skin) provides a barrier to HIV; transmission requires a break in the skin.",
        },
        {
          id: "q148",
          question: "The nurse knows that the most common histologic type of breast cancer is:",
          choices: [
            "Infiltrating Lobular Carcinoma",
            "Mucinous Carcinoma",
            "Inflammatory Carcinoma",
            "Infiltrating Ductal Carcinoma",
          ],
          answer: 3,
          rationale: "Infiltrating Ductal Carcinoma is the most common type of breast cancer.",
        },
        {
          id: "q149",
          question:
            "The nurse knows that these genes account for majority of the inherited type of breast cancer.",
          choices: ["BRCA1 and BRCA2", "CEA 125", "MYH gene", "FAP 123"],
          answer: 0,
          rationale:
            "BRCA1 and BRCA2 gene mutations account for the majority of inherited breast cancers.",
        },
        {
          id: "q150",
          question: "The nurse knows that most of the breast tumors are found in:",
          choices: [
            "Lower outer quadrant",
            "Nipples",
            "Middle most quadrant",
            "Upper outer quadrant",
          ],
          answer: 3,
          rationale: "Most breast tumors are found in the upper outer quadrant.",
        },
        {
          id: "q151",
          question:
            "A patient with acute renal failure is recovering and asks the nurse, 'Will my kidneys ever function normally again?' Nurse Chloe's response is based on the knowledge that the patient's renal status will most likely:",
          choices: [
            "Continue to improve over a period of weeks",
            "Result in the need for permanent hemodialysis",
            "Improve only if the patient receives renal transplant",
            "Result in end-stage renal failure",
          ],
          answer: 0,
          rationale:
            "In most cases, acute renal failure is reversible, with kidney function returning to normal over weeks.",
        },
        {
          id: "q152",
          question:
            "Nurse Joy is a hemodialysis nurse. She knows that the one of the most commonly used sites for AV fistula creation include:",
          choices: [
            "Radial artery & Basilic vein",
            "Femoral artery & Saphenous vein",
            "Subclavian artery & External jugular vein",
            "Brachial artery & Cephalic vein",
          ],
          answer: 3,
          rationale:
            "The brachial artery and cephalic vein are commonly used for AV fistula creation.",
        },
        {
          id: "q153",
          question:
            "A patient came in due to a diagnosis of acute renal failure. What is the early sign indicating that acute renal failure is present?",
          choices: [
            "Generalized edema",
            "Hypertension",
            "Decreased urine output",
            "Elevated creatinine and BUN levels",
          ],
          answer: 2,
          rationale:
            "Decreased urine output (oliguria) is often an early sign of acute renal failure.",
        },
        {
          id: "q154",
          question:
            "Nurse Kate is managing an emergency patient who is a motor-vehicle accident victim. EMT reports indicate the patient has lost approximately 2000 mL of blood. Vital signs are: BP: 70/50 mmHg, HR: 132 bpm, RR: 31 cpm. This clinical picture is indicative of which type of kidney injury?",
          choices: ["Pre-renal", "Intra-renal", "Post-renal", "Para-renal"],
          answer: 0,
          rationale:
            "Hypovolemic shock from blood loss leads to decreased renal perfusion, causing pre-renal kidney injury.",
        },
        {
          id: "q155",
          question:
            "Nurse Alyssa is a hemodialysis nurse. She is doing her rounds when she observes a nursing student assisting one of her patients. The patient has an arteriovenous (AV) fistula in the left upper extremity. Nurse Alyssa knows that she must immediately intervene if she notices which of the following being done to the patient?",
          choices: [
            "Educating the patient to avoid tight clothing on the left arm",
            "Performing phlebotomy at the left arm",
            "Taking blood pressure at the right arm",
            "Palpating for a thrill over the fistula site",
          ],
          answer: 1,
          rationale: "Phlebotomy should not be performed on an arm with an AV fistula.",
        },
        {
          id: "q156",
          question:
            "Nurse Micah is a hemodialysis nurse. During dialysis, she asks the novice nurses on how to best position a patient if air embolism occurs. The novice nurses are correct if they answer:",
          choices: [
            "Trendelenburg's on the left side",
            "Trendelenburg's on the right side",
            "Reverse Trendelenburg's on the left side",
            "Reverse Trendelenburg's on the right side",
          ],
          answer: 1,
          rationale:
            "For an air embolism, the patient should be placed in the left lateral Trendelenburg position to trap air in the right atrium.",
        },
        {
          id: "q157",
          question:
            "Nurse Joan is a hemodialysis nurse. Her patient is diagnosed with chronic renal failure and is scheduled for hemodialysis that morning. Nurse Joan saw in the chart that the patient is due to receive a daily dose of enalapril (Vasotec). She plans to administer this medication:",
          choices: [
            "During dialysis",
            "The day after dialysis",
            "Just before dialysis",
            "Upon return from dialysis",
          ],
          answer: 3,
          rationale:
            "Many antihypertensives are given after dialysis to prevent hypotension during the procedure.",
        },
        {
          id: "q158",
          question:
            "Nurse Kian is a hemodialysis nurse. His patient, who has just returned from a dialysis session, begins to complain of headache, nausea, and appears restless. What is the priority nursing action?",
          choices: [
            "Monitor the patient's vital signs",
            "Elevate the head of bed, until patient is comfortable",
            "Assess fistula site and dressing",
            "Notify the physician",
          ],
          answer: 0,
          rationale:
            "The patient is showing signs of a complication, such as hypotension or disequilibrium syndrome. The priority is to assess vital signs.",
        },
        {
          id: "q159",
          question:
            "Nurse Chloe is assigned as the head nurse for the pediatric ward. One of their patients is diagnosed with acute glomerulonephritis (AGN). She knows that the presence of which of the following findings supports the diagnosis?",
          choices: [
            "History of impetigo 2 weeks prior",
            "History of bladder infection 6 weeks prior",
            "Family history of chickenpox",
            "Family history of kidney disease",
          ],
          answer: 0,
          rationale:
            "AGN is often preceded by a group A streptococcal infection, such as impetigo, 1-2 weeks prior.",
        },
        {
          id: "q160",
          question:
            "Nurse Paul is a pediatric nurse. He is assessing a child recently diagnosed with acute glomerulonephritis. Which of the following clinical findings is most characteristic of this condition?",
          choices: [
            "Low urinary specific gravity",
            "Cola-colored urine",
            "Hypotension",
            "Low BUN levels",
          ],
          answer: 1,
          rationale:
            "Cola-colored or tea-colored urine (hematuria) is characteristic of acute glomerulonephritis.",
        },
        {
          id: "q161",
          question:
            "Nurse Rhea is conducting her rounds in the cardiovascular unit. One of her patients is diagnosed with myocardial infarction. Which of the following is NOT a typical ECG manifestation of myocardial infarction?",
          choices: [
            "T-wave inversion",
            "Presence of Q-wave",
            "Delta waves",
            "ST-segment elevation",
          ],
          answer: 2,
          rationale: "Delta waves are characteristic of Wolff-Parkinson-White syndrome, not MI.",
        },
        {
          id: "q162",
          question:
            "Nurse Rhea responds to a call bell in the cardiovascular unit. Her patient, diagnosed with acute myocardial infarction (MI), reports severe chest pain and anxiety. She knows that the most effective intervention to relieve pain and anxiety in this situation is:",
          choices: [
            "Oxygen administration",
            "Nitroglycerin administration",
            "Morphine administration",
            "Positioning to High Fowler",
          ],
          answer: 2,
          rationale:
            "Morphine is the drug of choice for pain and anxiety in MI because it reduces pain and anxiety and decreases preload and afterload.",
        },
        {
          id: "q163",
          question:
            "Nurse Maria is assigned as the medication nurse for the next shift. While reviewing drug classifications, she encounters a patient prescribed a calcium channel blocker. Which of the following drugs belongs to this classification?",
          choices: [
            "Sumatriptan (Imitrex)",
            "Cromolyn sodium (Nasalcom)",
            "Enalapril (Vasotec)",
            "Verapamil (Isoptin)",
          ],
          answer: 3,
          rationale: "Verapamil is a calcium channel blocker.",
        },
        {
          id: "q164",
          question:
            "As Nurse Maria continues medication preparation, she reviews drugs used for gastrointestinal conditions. Which of the following medications is classified as a proton pump inhibitor (PPI)?",
          choices: [
            "Aripiprazole (Abilify)",
            "Methimazole (Tapazole)",
            "Pantoprazole (Pantoloc)",
            "Metronidazole (Flagyl)",
          ],
          answer: 2,
          rationale: "Pantoprazole is a proton pump inhibitor.",
        },
        {
          id: "q165",
          question:
            "Nurse Lara is monitoring a patient diagnosed with a ruptured appendix for signs of peritonitis. The nurse would assess for which manifestations of this complication?",
          choices: [
            "Bradycardia",
            "Subnormal temperature",
            "Rigid, board-like abdomen",
            "Hyperactive bowel sounds",
          ],
          answer: 2,
          rationale: "A rigid, board-like abdomen is a classic sign of peritonitis.",
        },
        {
          id: "q166",
          question:
            "Nurse Angela prepares the medication for various patients in the medical ward. She knows that this is the reason why suppositories are contraindicated in patients with cardiac disorders.",
          choices: [
            "They can lead to increased cardiac workload",
            "They are poorly absorbed in cardiac patients",
            "They can cause bradycardia through vagal stimulation",
            "They can cause trigger sympathetic response",
          ],
          answer: 2,
          rationale: "Rectal administration can cause vagal stimulation and bradycardia.",
        },
        {
          id: "q167",
          question:
            "Nurse Janiz is preparing medications for the cardiovascular unit. The doctor's order indicates Lasix 30mg IV push, and the available stock is 20mg / 2mL. How many milliliters should the nurse prepare?",
          choices: ["3mL", "3.5mL", "2mL", "2.5mL"],
          answer: 0,
          rationale: "Dose ordered: 30mg. Stock: 20mg/2mL (10mg/mL). 30mg / 10mg/mL = 3mL.",
        },
        {
          id: "q168",
          question:
            "Nurse Jane is assigned to the surgical ward and is caring for a patient who underwent a mastectomy of the left breast. Which of the following is the MOST appropriate health teaching to provide?",
          choices: [
            "Avoid using the right arm for any blood pressure measurements or venipuncture.",
            "Encourage heavy lifting exercises to strengthen the affected arm.",
            "Elevate the left arm and perform gentle range of motion exercises.",
            "Keep the left arm in a dependent position to promote blood flow.",
          ],
          answer: 2,
          rationale:
            "Gentle range of motion and elevation of the affected arm promotes circulation and reduces lymphedema.",
        },
        {
          id: "q169",
          question:
            "A patient has undergone mastectomy. The nurse determines that the patient is having the most difficulty adjusting to the loss of the breast if which behavior is observed?",
          choices: [
            "Requires help with sponge bathing",
            "Refuses to look at the dressing",
            "Asks that the nurse limit visitors to family only",
            "Dresses in a loose nightgown from home",
          ],
          answer: 1,
          rationale:
            "Refusing to look at the dressing indicates a significant difficulty in accepting the loss.",
        },
        {
          id: "q170",
          question:
            "Nurse John works in the oncology ward of a tertiary hospital. He is educating a patient about early detection of colorectal cancer. He knows that the definitive screening test for colorectal cancer is:",
          choices: [
            "Colonoscopy",
            "Carcinoembryonic Antigen",
            "Computed Tomography",
            "Sigmoidoscopy",
          ],
          answer: 0,
          rationale: "Colonoscopy is the definitive screening test for colorectal cancer.",
        },
        {
          id: "q171",
          question:
            "Nurse Ivy works in the oncology ward of a tertiary hospital. She is educating the patients regarding prostate cancer. She knows that the confirmatory test for cancer is:",
          choices: [
            "Biopsy",
            "Digital rectal examination (DRE)",
            "Serum prostate-specific antigen (PSA) test",
            "Transrectal Ultrasound",
          ],
          answer: 0,
          rationale: "A biopsy is the only definitive or confirmatory test for cancer.",
        },
        {
          id: "q172",
          question:
            "Nurse Yuji is conducting health education in the community. He is correct when he mentions that this type of cancer is the most commonly diagnosed cancer among males?",
          choices: ["Lung cancer", "Liver cancer", "Prostate cancer", "Colorectal cancer"],
          answer: 2,
          rationale:
            "Prostate cancer is the most commonly diagnosed cancer in males (excluding skin cancers).",
        },
        {
          id: "q173",
          question:
            "Nurse Yuji is conducting health education in the community. He continues on to state that which of the following is a non-modifiable risk factor that increases a person's risk for developing breast cancer?",
          choices: ["Unhealthy diet", "Genetics", "Emotional stress", "Obesity"],
          answer: 1,
          rationale: "Genetics (e.g., BRCA mutations) is a non-modifiable risk factor.",
        },
        {
          id: "q174",
          question:
            "Nurse Izzy is an oncology nurse. She knows that this is one of the symptoms that warrant an immediate check-up with a physician, as cancer may be suspected:",
          choices: [
            "Unexplained weight gain",
            "Frequent headaches",
            "Hoarseness of voice that lasts a few weeks",
            "Mild fatigue after exercise",
          ],
          answer: 2,
          rationale: "Hoarseness lasting more than a few weeks can be a sign of laryngeal cancer.",
        },
        {
          id: "q175",
          question:
            "Nurse Luna is a novice perioperative nurse. During a case orientation, the head nurse asks her, 'Who is mainly responsible for counting surgical sponges and instruments before and after the procedure?' What is the correct response?",
          choices: ["Circulating Nurse", "Surgeon", "Anesthesiologist", "Scrub Nurse"],
          answer: 3,
          rationale:
            "The scrub nurse is primarily responsible for counting sponges and instruments.",
        },
        {
          id: "q176",
          question:
            "Nurse Margaux is a perioperative nurse. The anesthesiologist orders for an administration of atropine sulfate to reduce the pre-operative client's secretions before the surgery. The nurse administers atropine during which of the following time periods?",
          choices: [
            "Before the client is wheeled into the operating room",
            "10-20 minutes before the induction of anesthesia",
            "20-30 minutes before the induction of anesthesia",
            "30-40 minutes before the induction of anesthesia",
          ],
          answer: 2,
          rationale:
            "Atropine is typically given 30-60 minutes before surgery, or 20-30 minutes before induction.",
        },
        {
          id: "q177",
          question:
            "Nurse Christina is a perioperative nurse. She knows that this is the reason why skin preparation is necessary before the surgery begins.",
          choices: [
            "To reduce skin moisture prior to incision",
            "To eliminate resident and transient microorganisms",
            "To increase blood circulation to the surgical site",
            "To remove dead skin cells and promote faster healing",
          ],
          answer: 1,
          rationale: "Skin preparation aims to reduce the number of microorganisms on the skin.",
        },
        {
          id: "q178",
          question:
            "Nurse Alex is preparing for an upcoming surgery. Upon arrival of the patient at the OR suite, he ensures that this responsibility of his as the circulating nurse is accomplished:",
          choices: [
            "Ensure that appropriate consents are signed, with proper dates, and present in the chart",
            "Assist in maintaining the sterility of the operative field",
            "Perform the surgical incision under the direction of the surgeon",
            "Administer anesthesia and monitor patient's vital signs throughout the procedure",
          ],
          answer: 0,
          rationale:
            "Ensuring proper consents are signed and present is a key responsibility of the circulating nurse.",
        },
        {
          id: "q179",
          question:
            "Nurse Gabbi is a community health nurse in a remote rural setting. A patient named Mang Juan arrives for suture removal after an operation performed in a distant hospital. After assessing the wound and identifying an interrupted suture pattern, who among the following professionals is authorized to perform suture removal in the primary care setting?",
          choices: ["RH Doctor", "RH Nurse", "Midwife", "Surgeon"],
          answer: 1,
          rationale: "Nurses are authorized to remove sutures in a primary care setting.",
        },
        {
          id: "q180",
          question:
            "Nurse Luke is the infection control nurse in a tertiary hospital. During his rounds, he observes a novice nurse preparing to dispose of used gloves and soiled bandages after a wound dressing. He intervenes and asks, 'Where should these contaminated materials be discarded?'",
          choices: ["Black waste bag", "Red waste bag", "Green waste bag", "Yellow waste bag"],
          answer: 1,
          rationale:
            "Contaminated materials that are potentially infectious should be disposed of in a red waste bag.",
        },
        {
          id: "q181",
          question:
            "During an orientation on proper hospital waste segregation, Nurse Luke asked, 'Where should you discard paper waste materials from the hospital's administrative office?'",
          choices: ["Black container", "Red container", "Green container", "Yellow container"],
          answer: 0,
          rationale:
            "Non-contaminated, non-infectious waste like paper is disposed of in a black container.",
        },
        {
          id: "q182",
          question:
            "Nurse Sally is a pediatric nurse in the National Children's Hospital. One of her patients, a 9-month-old infant, is scheduled to receive the MMR (Measles, Mumps, and Rubella) vaccine. Which of the following is the appropriate landmark/site for administering this vaccine?",
          choices: [
            "Deltoid muscle",
            "Dorsogluteal site",
            "Hochstetter's site",
            "Anterolateral thigh",
          ],
          answer: 3,
          rationale:
            "For an infant, the anterolateral thigh is the preferred site for IM injections.",
        },
        {
          id: "q183",
          question:
            "Nurse Louis is a nurse assigned in the burn unit. He knows that the presence of the following condition in the early stages of burns can potentially lead to cardiac arrest:",
          choices: ["Hypokalemia", "Hyperkalemia", "Hypocalcemia", "Hyponatremia"],
          answer: 1,
          rationale:
            "Hyperkalemia can occur due to cell destruction and can lead to cardiac arrest.",
        },
        {
          id: "q184",
          question:
            "Nurse Kathleen is caring for a patient with extensive second-degree burns over 30% of the body surface area. She notes that the patient's blood pressure is dropping and the patient's urine output has significantly decreased. She recalls that this occurs during which phase of burn injury:",
          choices: [
            "Emergent (Resuscitative) Phase",
            "Acute Phase",
            "Rehabilitation Phase",
            "Hypermetabolic Phase",
          ],
          answer: 0,
          rationale:
            "Hypotension and decreased urine output are signs of hypovolemic shock during the emergent/resuscitative phase.",
        },
        {
          id: "q185",
          question:
            "Nurse Jerry is assigned in a burn unit. A patient is scheduled for hydrotherapy for a burn dressing change. Which action would the nurse take to ensure that the patient is comfortable during the procedure?",
          choices: [
            "Ensure that the patient is appropriately dressed",
            "Administer an opioid analgesic 30-60 minutes before therapy",
            "Send dressing supplies with the patient to hydrotherapy.",
            "Administer the intravenous antibiotic 30 minutes before therapy",
          ],
          answer: 1,
          rationale: "Administration of an analgesic before hydrotherapy will help manage pain.",
        },
        {
          id: "q186",
          question:
            "Nurse Tom works at the endocrinology unit of the medical ward. Majority of the patients are diagnosed with diabetes mellitus. Nurse Tom is correct when he teaches the novice nurses that all of these insulins have a peak time, except:",
          choices: ["Regular insulin", "NPH insulin", "Lispro", "Glargine"],
          answer: 3,
          rationale: "Insulin glargine (Lantus) is a long-acting insulin with no pronounced peak.",
        },
        {
          id: "q187",
          question:
            "Nurse Tom continues teaching the newly-hired nurses. He is correct when he states the difference between Somogyi, Dawn, and Waning Phenomenon. Which of the following statements are correct?",
          choices: [
            "i. Somogyi Effect is rebound hyperglycemia that occurs after a hypoglycemic episode, usually during the night.\nii. Dawn Phenomenon is early morning hyperglycemia due to normal circadian hormone release, not preceded by hypoglycemia.\niii. Waning Phenomenon is a progressive rise in blood glucose overnight due to insufficient ensuing insulin dosing.",
            "Only I is correct",
            "Only II is correct",
            "Only III is correct",
            "All statements are correct",
          ],
          answer: 3,
          rationale: "All three statements correctly describe the different phenomena.",
        },
        {
          id: "q188",
          question:
            "Nurse Victoria is preparing to check the capillary blood glucose of her patients. She performs the steps of proper handwashing. Which comes first?",
          choices: [
            "Apply soap and lather thoroughly",
            "Wet hands with water",
            "Rinse hands with water",
            "Dry hands with a clean towel",
          ],
          answer: 1,
          rationale: "The first step in proper handwashing is to wet the hands with water.",
        },
        {
          id: "q189",
          question:
            "Nurse Gladys is on duty in the emergency room when a patient suddenly arrives with complaints of vomiting large amounts of bright red blood. Which of the following should be the nurse's initial action?",
          choices: [
            "Give ice chips",
            "Start an intravenous line",
            "Notify the physician",
            "Position to High Fowler's",
          ],
          answer: 3,
          rationale:
            "Positioning the patient to High Fowler's or semi-Fowler's helps prevent aspiration.",
        },
        {
          id: "q190",
          question:
            "Nurse Meredith is caring for a client with a long-term history of immunodeficiency syndrome (AIDS) for early signs of Kaposi's sarcoma. The nurse observes the patient for:",
          choices: [
            "White patches on the tongue that can be scraped off",
            "Generalized lymphadenopathy",
            "Sudden weight loss of 3 lbs. in a week",
            "Presence of purple, non-blanching lesions on the upper arm",
          ],
          answer: 3,
          rationale:
            "Kaposi's sarcoma presents as purple or brownish, non-blanching lesions on the skin.",
        },
        {
          id: "q191",
          question:
            "Nurse Haylee is assigned to the orthopedic ward. One of her patients, diagnosed with osteoarthritis, complains of bony nodules on the distal interphalangeal joints of the fingers. Nurse Haylee correctly identifies these nodules as:",
          choices: ["Swan neck", "Boutonniere", "Heberden's nodes", "Bouchard's nodes"],
          answer: 2,
          rationale: "Heberden's nodes are bony enlargements on the distal interphalangeal joints.",
        },
        {
          id: "q192",
          question:
            "Nurse Carrie is caring for a patient in Buck's traction for a lower extremity fracture. The patient tells the nurse, 'I want to move up in bed on my own.' Which of the following is the most appropriate instruction the nurse should give the patient?",
          choices: [
            "Slide up the bed using your elbows and heels",
            "Call the nurse to assist you before moving",
            "Bend your knees and push yourself upward",
            "Use the overhead trapeze to lift your body",
          ],
          answer: 1,
          rationale: "The patient should call for assistance to prevent altering the traction.",
        },
        {
          id: "q193",
          question: "The presence of rheumatoid nodules indicates:",
          choices: ["Early-stage RA", "Late-stage OA", "Advanced RA", "Metabolic arthritis"],
          answer: 2,
          rationale: "Rheumatoid nodules are associated with advanced or severe RA.",
        },
        {
          id: "q194",
          question: "A nurse is teaching joint protection. Which statement shows understanding?",
          choices: [
            '"I\'ll push heavy items to avoid strain."',
            '"I\'ll bend knees when lifting."',
            '"I\'ll use a tight grip to avoid dropping things."',
            '"I\'ll carry items with fingertips."',
          ],
          answer: 1,
          rationale: "Bending the knees when lifting is a correct joint protection technique.",
        },
        {
          id: "q195",
          question: "Which exercise is appropriate during RA remission?",
          choices: ["Weight lifting", "Passive ROM", "Swimming", "Jogging"],
          answer: 2,
          rationale:
            "Swimming is a low-impact exercise that is generally safe during RA remission.",
        },
        {
          id: "q196",
          question: "What is the primary characteristic of diabetes mellitus?",
          choices: [
            "Inability to absorb glucose",
            "High blood glucose levels due to insulin resistance or deficiency",
            "Overproduction of insulin",
            "Increased production of glucagon",
          ],
          answer: 1,
          rationale:
            "Diabetes mellitus is characterized by hyperglycemia resulting from insulin resistance or deficiency.",
        },
        {
          id: "q197",
          question: "Which of the following is the main goal in managing type 2 diabetes?",
          choices: [
            "Reduce insulin secretion",
            "Enhance insulin sensitivity and lower blood glucose",
            "Increase carbohydrate intake",
            "Decrease physical activity",
          ],
          answer: 1,
          rationale:
            "Enhancing insulin sensitivity and lowering blood glucose is the goal of type 2 diabetes management.",
        },
        {
          id: "q198",
          question: "Which of the following is a long-acting insulin?",
          choices: ["Insulin lispro", "Insulin glargine", "Regular insulin", "Insulin aspart"],
          answer: 1,
          rationale: "Insulin glargine is a long-acting insulin.",
        },
        {
          id: "q199",
          question:
            "Which is a common complication of diabetes mellitus that may cause a loss of protective sensation?",
          choices: ["Retinopathy", "Neuropathy", "Nephropathy", "Cardiomyopathy"],
          answer: 1,
          rationale: "Neuropathy causes loss of protective sensation (peripheral neuropathy).",
        },
        {
          id: "q200",
          question: "What is a common result of unmanaged diabetes over time?",
          choices: [
            "Decreased risk of infection",
            "Increased risk of cardiovascular disease",
            "Increased insulin sensitivity",
            "Improved kidney function",
          ],
          answer: 1,
          rationale: "Unmanaged diabetes increases the risk of cardiovascular disease.",
        },
        {
          id: "q201",
          question:
            "Mr. Mamamow, an insurance agent was ordered by his physician to be admitted to the hospital for Coronary Artery Bypass Graft (CABG) due to three vessels blockage. As a nurse, you are aware that cardiac surgery is a source of stress to the patient and family. Which of the following strategies should the nurse implement FIRST to overcome this stress?",
          choices: [
            "Identify coping mechanisms helpful to the patient and family members.",
            "Recognize fears and concerns regarding surgery and future health status.",
            "Explore support system available during the entire hospitalization period.",
            "Reinforce understanding of the surgical procedure hospitalization and recovery.",
          ],
          answer: 1,
          rationale:
            "The first step is to assess and recognize the patient and family's fears and concerns.",
        },
        {
          id: "q202",
          question:
            "Mr. Mamamow, underwent an invasive diagnostic test to determine the location of the blockage which is needed for his CABG. This procedure is",
          choices: [
            "cardiac CT scan",
            "carotid doppler",
            "magnetic resonance imaging",
            "cardiac catheterization",
          ],
          answer: 3,
          rationale:
            "Cardiac catheterization is the invasive diagnostic test used to locate blockages in the coronary arteries.",
        },
        {
          id: "q203",
          question:
            "The nurse is teaching breathing exercises to Mr. Mamamow. At what phase of the peri-operative care is this BEST performed?",
          choices: [
            "After surgery when he is inside the recovery room.",
            "Immediately after he has signed the informed consent.",
            "During the briefing period prior to the surgical procedure.",
            "When he is back to his room from the recovery unit.",
          ],
          answer: 2,
          rationale:
            "Pre-operative teaching of breathing exercises is best done during the briefing period before surgery.",
        },
        {
          id: "q204",
          question:
            "Which of the following is a blood thinning drug and temporarily stopped by the physician prior to CABG due to possible bleeding.",
          choices: ["Pradaxa", "Ibuprofen", "Paracetamol", "Toradol"],
          answer: 0,
          rationale:
            "Pradaxa (dabigatran) is an anticoagulant that is usually stopped before surgery.",
        },
        {
          id: "q205",
          question:
            "The nurse formulates a nursing diagnosis 'Decreased cardiac output R/T blood loss'. Which of the following is the highest priority nursing action?",
          choices: [
            "Auscultate for heart sounds and rhythm.",
            "Assess peripheral pulses, pedal, tibial and radial.",
            "Monitor EKG pattern for cardiac dysrhythmia.",
            "Assess arterial blood pressure every 15 min. until stable.",
          ],
          answer: 3,
          rationale:
            "Assessing arterial blood pressure frequently is the priority to monitor hemodynamic stability.",
        },
        {
          id: "q206",
          question:
            "PD Bang, 32 year old a government employee has been having abdominal pain which was on and off for almost 6 months. She has been having flatulence and recently lost weight because of vomiting. She consulted their office physician and she was suspected to be suffering from chronic pancreatitis. She was advised to be hospitalized for further work-up. You are the admitting Nurse when Ms. PD Bang arrived in the hospital. When doing a comprehensive pain assessment, you should conduct the procedure during the",
          choices: [
            "evaluation of nursing pain management",
            "Initial contact with the patient",
            "course of pain management",
            "the time the physician instructed you to do",
          ],
          answer: 1,
          rationale:
            "A comprehensive pain assessment should be done during the initial contact with the patient.",
        },
        {
          id: "q207",
          question:
            "When a patient is having pain due to Pancreatitis, you expect that the pain is located in the",
          choices: [
            "hypogastrium, right upper quadrant of the abdomen radiating to the left lumbar area",
            "epigastrium, right upper quadrant of the abdomen radiating to the left lumbar area",
            "hypogastrium, left upper quadrant of the abdomen radiating to the left lumbar area",
            "epigastrium, left upper quadrant of the abdomen radiating to the left lumbar area",
          ],
          answer: 1,
          rationale:
            "Pancreatic pain is typically located in the epigastric region, radiating to the back or left lumbar area.",
        },
        {
          id: "q208",
          question:
            "You are aware of several manifestations when a patient is in pain. Which of the following is a behavioral response to pain?",
          choices: [
            "Changes in skin color",
            "Increase in blood pressure",
            "depth in respiration.",
            "Moaning and grimacing.",
          ],
          answer: 3,
          rationale: "Moaning and grimacing are behavioral responses to pain.",
        },
        {
          id: "q209",
          question:
            "When a patient is ordered corticosteroids, which of the following drugs will produce therapeutic effects of reducing pain?",
          choices: ["Spironolactone", "Diazepam", "Atropine S04", "Prednisone"],
          answer: 3,
          rationale: "Prednisone is a corticosteroid used to reduce inflammation and pain.",
        },
        {
          id: "q210",
          question:
            "When severe vomiting occurs in this patient, it results to what particular condition?",
          choices: ["Hyperkalemia", "Hypocalcemia", "Alkalosis", "Acidosis"],
          answer: 2,
          rationale: "Vomiting leads to loss of stomach acid, causing metabolic alkalosis.",
        },
        {
          id: "q211",
          question:
            "Which of the following statements is INCORRECT of collaboration in a health care setting?",
          choices: [
            "Trust and respect are core values of a collaborative organization.",
            "A shared vision is essential for collaboration in any health care operations",
            "Successful conflict resolution can help collaborative teams overcome differences",
            "Interprofessional collaboration & multidisciplinary collaboration can be used interchangeably.",
          ],
          answer: 3,
          rationale:
            "Interprofessional and multidisciplinary collaboration are similar but not interchangeable; interprofessional involves more shared decision-making and teamwork.",
        },
        {
          id: "q212",
          question:
            "Nurse Dasurb received an order from attending physician of patient Dawter who was having a severe abdominal pain of almost a double dose of morphine S04. The nurse consulted her unit manager and the pharmacist regarding the order which was also questioned. The nurse called the attention of the physician regarding the dose of the drug and changed the order to an acceptable level. What relevant principle of collaboration is applied in this case?",
          choices: [
            "I. Shared vision\nII. Respect and trust\nIII. Communication\nIV. Interpersonal relationship",
            "I, II, III and IV",
            "III and IV",
            "I and II",
            "I, II and III",
          ],
          answer: 0,
          rationale:
            "All principles are demonstrated: shared vision (patient safety), respect and trust (for the team), communication (with the physician and pharmacist), and interpersonal relationships (working with the team).",
        },
        {
          id: "q213",
          question:
            "In a tertiary hospital where Gegee works as unit manager, an interdisciplinary team mode is adapted on collaboration of care. With this type of model, how is DECISION making made?",
          choices: [
            "Shared responsibility of the group for the problem-solving final decision.",
            "One person makes the final decision for the treatment.",
            "Partnership with the patient & team for the final decision.",
            "All members work together for both alternative & final decisions.",
          ],
          answer: 0,
          rationale:
            "Interdisciplinary teams make decisions through shared responsibility and consensus.",
        },
        {
          id: "q214",
          question:
            "Nurse Yowdawter, is a member of the Quality Assurance team of the hospital and has been always rated as very assertive. Which of the following is NOT a characteristic of an assertive person?",
          choices: [
            "Intervene with the situation calmly and confidently",
            "She stands up with what she believes & push control on others",
            "Articulate clearly the importance of nursing perspective.",
            'Use "I" when stating thought and feelings & persuading others.',
          ],
          answer: 1,
          rationale:
            "Assertiveness is about standing up for oneself while respecting others, not pushing control on others.",
        },
        {
          id: "q215",
          question:
            "A patient is going for a coronary arterial by-pass graft (CABG) due to a 4 blocked arterial blood vessels. A surgical team has been formed with the cardiac surgeon as the head. Who is the member of the health team that prepares the pre-operative orders for the patient?",
          choices: ["Cardiologist", "Anesthesiologist", "Surgeon", "Medical Internist"],
          answer: 0,
          rationale:
            "The cardiologist often prepares the pre-operative orders for a CABG procedure.",
        },
        {
          id: "q216",
          question:
            "Rohee, 65 years old, came to the outpatient Clinic due to dyspnea, fever and on and off productive cough. He smokes one pack of cigarette per day for the last 30 years. The doctor ordered sputum examination, chest x-ray and blood culture. In collecting sputum specimens, the nurse should instruct Roy to",
          choices: [
            "breathe slowly, cough and expectorate into the specimen container",
            "breathe deeply and cough, expectorate into the sputum container.",
            "cough and expectorate saliva into the specimen container.",
            "cough and expectorate into the specimen container.",
          ],
          answer: 1,
          rationale:
            "The client should be instructed to breathe deeply and cough to expectorate sputum from the lungs, not saliva.",
        },
        {
          id: "q217",
          question:
            "The patient's diagnostic tests revealed he was positive for bacterial pneumonia. The MOST likely causative this type of pneumonia is",
          choices: [
            "legionella pneumoniae",
            "mycoplasma pneumoniae",
            "streptococcus pneumoniae",
            "hemophilus pneumoniae",
          ],
          answer: 2,
          rationale:
            "Streptococcus pneumoniae is the most common cause of community-acquired pneumonia.",
        },
        {
          id: "q218",
          question:
            "The nurse did an admission procedure. The BEST position to be assumed by Rohee is",
          choices: [
            "left lateral position with the affected side inferior.",
            "Semi-fowler at least 30 degrees.",
            "Dorsal position with pillow under the chest",
            "lying on his side, the affected side of the lungs should be superior.",
          ],
          answer: 1,
          rationale:
            "Semi-Fowler's position helps to facilitate breathing in a client with pneumonia.",
        },
        {
          id: "q219",
          question:
            "When a patient is diagnosed to have pneumonia, the breath sounds detected by the nurse on auscultation of the affected area would be",
          choices: [
            "wheezing sounds",
            "stridor",
            "fine crackles",
            "deep and low-pitched breath sounds",
          ],
          answer: 2,
          rationale:
            "Fine crackles are heard upon auscultation in the affected area of a patient with pneumonia.",
        },
        {
          id: "q220",
          question:
            "When there is respiratory depression resulting from drug overdose, the nurse have to watch for which of the following?",
          choices: ["Hyperventilation", "Tachypnea", "Biot's respiration", "Bradypnea"],
          answer: 3,
          rationale: "Respiratory depression results in a slow rate of breathing (bradypnea).",
        },
        {
          id: "q221",
          question:
            "Ms. Noh, 66 year-old consulted the OPD due changes in energy level, fatigue and not able to tolerate performance of activities of daily living, The physician suspected that she has hypothyroidism disorder and advised admission for further work-up. When a patient is with hypothyroidism, the assessment findings of the nurse that is NOT present is",
          choices: ["brittle nails", "hair loss", "dry skin", "fine tremors of hands"],
          answer: 3,
          rationale: "Fine tremors are associated with hyperthyroidism, not hypothyroidism.",
        },
        {
          id: "q222",
          question:
            "In assessing the thyroid gland for size, shape, symmetry, consistency and presence of tenderness, the MOST appropriate examination modality is",
          choices: ["auscultation", "percussion", "palpation", "inspection"],
          answer: 2,
          rationale:
            "Palpation is used to assess the thyroid's size, shape, consistency, and tenderness.",
        },
        {
          id: "q223",
          question:
            "After several thyroid diagnostic tests, Ms. Nohwas ordered to take thyroid hormone (Levothyroxine). Which of the following nursing actions is NOT ADVISABLE in administering this drug? The nurse should give",
          choices: [
            "A single dose daily before breakfast",
            "a single dose daily after breakfast",
            "it with a full glass of water",
            "It without mixing with fruit juices",
          ],
          answer: 1,
          rationale: "Levothyroxine should be given on an empty stomach, before breakfast.",
        },
        {
          id: "q224",
          question:
            "In monitoring the effectiveness of the drug therapy, which of the following is NOT expected as a POSITIVE patient's outcome?",
          choices: [
            "regular bowel function",
            "excessive sweating at night time",
            "participates in self-care activities.",
            "metabolism returns to normal",
          ],
          answer: 1,
          rationale:
            "Excessive sweating is not a positive outcome; it may indicate hyperthyroidism or an overdose.",
        },
        {
          id: "q225",
          question:
            "The nurse is developing a nursing care plan for Ms. Noh. If the Nursing diagnosis is 'Activity intolerance R/T fatigue and depressed cognitive process', which of the following is an APPROPRIATE intervention?",
          choices: [
            "Increase mobility through early ambulation.",
            "Allow self-care activities with active exercises.",
            "Space nursing activities to promote rest and sleep.",
            "Avoid a stimulating interesting conservation.",
          ],
          answer: 2,
          rationale: "Spacing activities promotes rest and prevents overexertion.",
        },
        {
          id: "q226",
          question:
            "Nurse Ravi is a unit manager in a tertiary hospital and conducts meeting regularly every two weeks to his staff to address PRIORITY affecting their services. Which of the following statements indicates an effective communication technique used by the unit manager to her staff?",
          choices: [
            '"We need to improve our nursing services; otherwise top management will take over".',
            "\"Let's limit requesting supplies and equipment, our budget for our promotion might be affected.",
            '"There are a lot of redundant position in our unit, there is a need to retrench some staff."',
            '"We need to discuss strategic approaches to facilitate delivery of nursing service with less expenses on our consumers."',
          ],
          answer: 3,
          rationale:
            "This statement is positive, focuses on a solution, and involves the staff in a constructive discussion.",
        },
        {
          id: "q227",
          question:
            "For the past 6 months, several nurses are resigning. Some have verbalized in the exit interview that they are not happy anymore. Which of the following descriptions manifest BEST, a nurse who has job satisfaction?",
          choices: [
            "Competitive, self-centered, euphoric.",
            "Empowered, enthusiastic, ethical",
            "Loner, egotistic, reactive.",
            "Outgoing, sensitive, competitive.",
          ],
          answer: 1,
          rationale:
            "Empowered, enthusiastic, and ethical are characteristics of a satisfied and engaged nurse.",
        },
        {
          id: "q228",
          question:
            "Delegation is a critical component of leadership and governance. Which of the following empowering activities should the unit manager applies in delegation?",
          choices: [
            "In delegation, facilitating professional growth and development of a staff is necessary.",
            "When delegating a responsibility to a nursing staff, modification of standards of care is permitted.",
            "Delegation of responsibility inpatient care has to start, from top management to the staff-nurse level",
            "Delegation requires responsibility with corresponding accountability of a staff-nurse.",
          ],
          answer: 3,
          rationale:
            "Delegation involves transferring responsibility and accountability to the staff nurse.",
        },
        {
          id: "q229",
          question: "Nurse Lany is guided that the initial step of delegation is",
          choices: [
            "demonstrate the task and let the staff continue the next activities",
            "assess the capability of the staff, change him if not performing",
            "Determine the competency level of staff for the task being given",
            "Explain the task to be done with the accompanying job description",
          ],
          answer: 2,
          rationale: "The first step in delegation is to assess the competency of the staff.",
        },
        {
          id: "q230",
          question:
            "The unit manager is planning to take her regular official business leave for the Year. She has written a letter of recommendation to her immediate supervisor for her assistant unit manager to assume her position while she is on leave. This is an example of delegation by",
          choices: ["rank", "Authority", "Succession", "Responsibility"],
          answer: 2,
          rationale: "This is an example of succession planning.",
        },
        {
          id: "q231",
          question:
            "Nurse Petron is on duty in the medical unit and has two patients for discharge. Shell, 38 year old diagnosed with Diabetes Mellitus and on insulin therapy for the first time and Caltex, 42 years old who had myocardial infarction (MI). When preparing a teaching plan for patient Shell, the following are the instructions provided to patients with Diabetes Mellitus. Which ONE of the teaching plan is considered NOT a PRIORITY concern when discussing the list with the patient?",
          choices: [
            "Diet and genetic counseling.",
            "Exercise in extreme heat and cold.",
            "Regular exercise, diet and medications.",
            "Monitoring of blood sugar and urine ketones.",
          ],
          answer: 0,
          rationale:
            "Genetic counseling is not a priority concern for the initial management of a patient with diabetes mellitus.",
        },
        {
          id: "q232",
          question:
            "Shell was taught by Nurse Petron on how to administer self-injection insulin and rotation sites with use of the chart every day till her discharge. The following is the procedure for the self-injection of insulin. Which of the following are the correct sequence in self administration of the drug?",
          choices: [
            "I. Inject the insulin, push the plunger all the way in\nII. With one hand stabilize the skin by spreading a large area\nIII. Pull the needle straight out of the skin and press cotton ball over injection site\nIV. Pick-up syringe with the other hand hold and insert needle to the skin.\nV. Dispose syringe in a hard plastic container.",
            "I, IV, III, II and V",
            "II, IV, I, III and V",
            "III, II, I, V and II",
            "IV, III, I, V and II",
          ],
          answer: 1,
          rationale:
            "The correct sequence is: II (stabilize skin), IV (insert needle), I (inject), III (withdraw), V (dispose).",
        },
        {
          id: "q233",
          question:
            "The doctor ordered a low-saturated fat, low-cholesterol diet to patient Caltex who was also going home. From the following list of foods, which meals has to be included in the instructional plan of Nurse Petron to her patient?",
          choices: [
            "Pork steak, mixed vegetables with butter and cheese.",
            "Hamburger, macaroni salad and milk shake.",
            "Fried chicken, green beans, and skim milk.",
            "Baked fish, green beans, coffee",
          ],
          answer: 3,
          rationale:
            "Baked fish, green beans, and coffee are all low in saturated fat and cholesterol.",
        },
        {
          id: "q234",
          question:
            "Considering that patient Caltex is a post MI patient, she was taught by the nurse on home exercises on leg movements while resting on bed. The expected goal of this intervention is to",
          choices: [
            "facilitate better digestion of food.",
            "prevent stasis of urine and stone formation",
            "facilitate circulation for skin integrity",
            "prevent venous stasis in the lower extremities",
          ],
          answer: 3,
          rationale: "Leg exercises while resting help prevent venous stasis and thrombosis.",
        },
        {
          id: "q235",
          question:
            "The resumption of sexual activity is an important activity that has to be included in the home instruction to be given to patient Caltex together with her husband. Which of the following is the SAFE period for an uncomplicated MI to resume sexual activity?",
          choices: [
            "One month after MI.",
            "12 to 14 days after MI",
            "Two months after MI",
            "7 to 10 days after MI",
          ],
          answer: 1,
          rationale:
            "For an uncomplicated MI, sexual activity can usually be resumed 12-14 days after the event.",
        },
        {
          id: "q236",
          question:
            "Horavi, a 22-yr old nurse graduate, passed the November 2018 Philippine Nurse Licensure Examination before her birthday which November 16. The scheduled oath-taking ceremony was set on January 6, 2019. To obtain her license to practice, she must do the following, EXCEPT:",
          choices: [
            "Must take the oath to any government official",
            "Must register in the registration division of the PRC.",
            "Must take the oath of professionals before any member of the PR-BON",
            "Must be issued a certificate of registration (COR) and profession identification card (PIN).",
          ],
          answer: 0,
          rationale:
            "The oath must be taken before a member of the PRC or a notary public, not just any government official.",
        },
        {
          id: "q237",
          question: "Nurse Horavi has to renew her professional identification card on or before",
          choices: ["January 6, 2021", "November 16, 2022", "November 16, 2021", "January 6, 2022"],
          answer: 1,
          rationale:
            "The PRC ID expires on the birth month. Her birthday is in November, so it expires on November 16, 2022 (3 years from the date of issuance? The date of issuance is likely the oath-taking date? This is a common tricky question).",
        },
        {
          id: "q238",
          question:
            "For Nurse Horav to continually practice nursing, she must satisfy the requirements set by the PRC and comply how many units of CPD upon renewal?",
          choices: ["45 units", "10 units", "25 units", "15 units"],
          answer: 0,
          rationale: "The required CPD units for renewal is 45.",
        },
        {
          id: "q239",
          question:
            "After 3 years being assigned in the Operating Room, Horav is interested to actively join which appropriate professional organization?",
          choices: ["ORNAP", "NLGN", "ADPCN", "APO"],
          answer: 0,
          rationale:
            "ORNAP (Operating Room Nurses Association of the Philippines) is the appropriate organization for an OR nurse.",
        },
        {
          id: "q240",
          question:
            "What would Horav do to keep abreast with the latest trends in peri-operative nursing?",
          choices: [
            "Attend training and seminars",
            "Perform researches",
            "All of these",
            "Pursue graduate studies",
          ],
          answer: 2,
          rationale: "All options are ways to stay updated.",
        },
        {
          id: "q241",
          question:
            "In assessing a patient suffering from peritonitis, which of the following manifestations is NOT likely to be present?",
          choices: [
            "Rebound tenderness",
            "Abdominal guarding",
            "Abdominal gas",
            "Abdominal rigidity",
          ],
          answer: 2,
          rationale: "Abdominal gas is not a typical sign of peritonitis.",
        },
        {
          id: "q242",
          question:
            "The overall goals set by the members of the health team once the patient is admitted include which of the following?",
          choices: [
            "I. Relief of the abdominal pain\nII. Resolution of inflammation\nIII. Provision of normal nutritional status\nIV. Prevention from complications",
            "I, II, III",
            "I and II",
            "II and III",
            "III, III and IV",
          ],
          answer: 0,
          rationale:
            "All are goals: relief of pain, resolution of inflammation, normal nutrition, and prevention of complications.",
        },
        {
          id: "q243",
          question:
            "Diagnostic tests were ordered to the patient which included: complete blood count (CBC) and abdominal CT scan. The primary purpose for ordering CT scan is to determine PRESENCE",
          choices: ["Amylase content", "Bacteria", "Fluid shifts", "Abscess"],
          answer: 3,
          rationale: "CT scan is used to detect abscesses in peritonitis.",
        },
        {
          id: "q244",
          question:
            "Which of the following drugs do you expect to be ordered by the physician for severe acute pain?",
          choices: [
            "Acetaminophen (Tylenol)",
            "Levorphanol (Levo-Dromoran)",
            "Percodan (Aspirin)",
            "Codeine (Amberly)",
          ],
          answer: 1,
          rationale: "Levorphanol is a strong opioid analgesic used for severe pain.",
        },
        {
          id: "q245",
          question:
            "The physician ordered the patient for paracentesis. Which of the following pre-procedure nursing actions should the nurse perform EXCEPT",
          choices: [
            "Place him in upright position on the edge of the bed",
            "Place him in low-lying position with knees straight",
            "Check for the signed consent form",
            "Instruct patient to urinate to empty bladder",
          ],
          answer: 1,
          rationale:
            "The patient should be positioned upright or sitting, not in a low-lying position.",
        },
        {
          id: "q246",
          question:
            "Cassidy is an active member of the Quality Assurance (QA) team in a health facility where the major role is setting Quality Standards. Which of the following statements is TRUE of Quality Improvement?",
          choices: [
            "Focuses on the organizational structure than patient care.",
            "Continually improve every process in the organization",
            "Centered on people rather than processes.",
            "An approach that is externally driven by the stakeholder.",
          ],
          answer: 1,
          rationale:
            "Quality Improvement is a continuous process of improving all aspects of the organization.",
        },
        {
          id: "q247",
          question:
            "As a QA nurse, which of the following can Nurse Cassidy adopts as concurrent evaluation of patient's outcomes in the unit?",
          choices: [
            "I. Direct observation of patient's condition.\nII. Patient's interview in the unit.\nIII. Face to Face interview with nursing staff.\nIV. Nursing audit from the patient's chart.",
            "III and IV",
            "I, II and III",
            "I, II, III and IV",
            "I and II",
          ],
          answer: 2,
          rationale: "All are methods of concurrent evaluation.",
        },
        {
          id: "q248",
          question:
            "Nurse Cassidy distributed the patient satisfaction form to the admitted patients in the hospital, this tool is in compliance to the quality standards",
          choices: ["human resource", "organizational structure", "patient care", "legal-ethical"],
          answer: 2,
          rationale: "Patient satisfaction is a measure of patient care quality.",
        },
        {
          id: "q249",
          question:
            "The QA team was alerted by the Administration, that they have to anticipate for a possible earthquake in the forthcoming days. As part of Safe Practice Environment (SPE) standards, which of the following are to be priority attention by the team?",
          choices: [
            "I. Electrical wires\nII. Combustible materials\nIII. Entry, Exit of the building\nIV. Infected waste materials",
            "I, II, III and IV",
            "II and III",
            "I and II",
            "I, II and III",
          ],
          answer: 3,
          rationale:
            "For earthquake preparedness, priority is given to electrical wires, combustible materials, and entry/exit points.",
        },
        {
          id: "q250",
          question:
            "The QA team has been bombarded by complaints of patients on their long waiting period in the OPD before the health care professionals are examining them. In response to the concern, which type of quality assessment should the team implement?",
          choices: [
            "Outcome evaluation",
            "Process evaluation",
            "Ongoing evaluation",
            "Structure evaluation",
          ],
          answer: 1,
          rationale:
            "Process evaluation focuses on the flow and steps of a service, which directly addresses wait times.",
        },
      ],
    },
    {
      id: "supplemental-b",
      title: "SUPPLEMENTAL B",
      description: "250 questions from the PNLE reviewer.",
      questions: [
        {
          id: "q1",
          question:
            "In COPAR, the nurse tries to immerse himself in the community. This critical step is called?",
          choices: ["Social Mobilization", "Ground Work", "Integration", "Mobilization"],
          answer: 2,
          rationale: "Integration is the step where the nurse immerses in the community.",
        },
        {
          id: "q2",
          question: "Which is the primary goal of community health nursing?",
          choices: [
            "To enhance the capacity of individuals, families and communities to cope with their health needs",
            "To increase the productivity of the people by providing them with services that will increase their level of health",
            "To contribute to national development through promotion of family welfare, focusing particularly on mothers and children.",
            "To support and supplement the efforts of the medical profession in the promotion of health and prevention of illness",
          ],
          answer: 0,
          rationale:
            "The primary goal of community health nursing is to enhance the capacity of individuals, families, and communities to cope with their health needs.",
        },
        {
          id: "q3",
          question: "What is the goal of SDG 8?",
          choices: [
            "Zero Hunger",
            "Decent Work and Economic Growth",
            "Affordable and Clean Energy",
            "Reduced Inequalities",
          ],
          answer: 1,
          rationale: "SDG 8 is Decent Work and Economic Growth.",
        },
        {
          id: "q4",
          question:
            "According to RA 9173, who appoints, removes, or suspends any member of the Board of Nursing?",
          choices: [
            "Philippine Regulation Commission (PRC)",
            "Philippine Nurses Association (PNA)",
            "Philippine President",
            "Association of Deans of Nursing Schools",
          ],
          answer: 2,
          rationale:
            "The President of the Philippines appoints and removes members of the Board of Nursing upon the recommendation of the PRC.",
        },
        {
          id: "q5",
          question: "Which color is not a part of DOH's Health Care Waste Management Manual?",
          choices: ["Green", "Yellow with Black Band", "Pink", "Orange"],
          answer: 2,
          rationale: "Pink is not part of the DOH Health Care Waste Management color coding.",
        },
        {
          id: "q6",
          question:
            "You graduated recently. To become a Public Health Nurse, where will you apply?",
          choices: [
            "Rural Health Unit",
            "Regional Health Office",
            "Provincial Health Office",
            "Department of Health",
          ],
          answer: 0,
          rationale: "Public Health Nurses are usually assigned to Rural Health Units.",
        },
        {
          id: "q7",
          question:
            "The couple has a 6-year-old child entering school for the first time. The couple has a:",
          choices: ["Foreseeable crisis", "Stress point", "Health threat", "Health deficit"],
          answer: 0,
          rationale: "This is a foreseeable crisis, a normal life transition.",
        },
        {
          id: "q8",
          question:
            "Population-focused nursing practice requires which of the following processes?",
          choices: [
            "Epidemiologic Process",
            "Community Diagnosis",
            "Nursing Process",
            "Community organizing",
          ],
          answer: 1,
          rationale: "Population-focused nursing requires community diagnosis.",
        },
        {
          id: "q9",
          question:
            "The use of appropriate technology requires knowledge of indigenous technology. Which medicinal herb is given for fever, headache, and cough?",
          choices: ["Tsaang gubat", "Lagundi", "Akapulko", "Sambong"],
          answer: 1,
          rationale: "Lagundi is used for fever, headache, and cough.",
        },
        {
          id: "q10",
          question:
            "What herbal plant can be used as a mouthwash to treat tooth decay and gum infection?",
          choices: ["Bawang", "Bayabas", "Yerba Buena", "Niyog-niyogan"],
          answer: 1,
          rationale: "Bayabas (guava) leaves are used as a mouthwash.",
        },
        {
          id: "q11",
          question:
            "Freedom of choice is one of the policies of the Family Planning Program of the Philippines. Which of the following best exemplifies this idea?",
          choices: [
            "Encouragement of couples to take family planning as a joint responsibility",
            "Support of research and development in family planning methods",
            "Information dissemination about the need for family planning",
            "Adequate information for couples regarding the different methods",
          ],
          answer: 3,
          rationale:
            "Freedom of choice is exemplified by providing adequate information about different methods.",
        },
        {
          id: "q12",
          question:
            "Acute respiratory infection (ARI) is a leading cause of death in children under the age of 5 in developing countries. What is the most serious ARI but often can be treated with affordable antibiotics?",
          choices: ["Avian Flu", "Influenza", "Pneumonia", "Bronchitis"],
          answer: 2,
          rationale: "Pneumonia is the most serious ARI and is treatable with antibiotics.",
        },
        {
          id: "q13",
          question:
            "Which of the following sign suggests a sputum examination is necessary for Acid-fast bacillus?",
          choices: ["Hematemesis", "Cough for 4 weeks", "Chest pain for 1 week", "Hemoptysis"],
          answer: 1,
          rationale: "A cough lasting 4 weeks or more warrants sputum examination for AFB.",
        },
        {
          id: "q14",
          question:
            "What is the disease that shows blotchy rash lasting for more than 3 days, accompanied by fever, red eyes, runny nose, and cough?",
          choices: ["Meningococcemia", "Mad Cow Disease", "Chicken Pox", "Measles"],
          answer: 3,
          rationale:
            "Measles is characterized by a blotchy rash lasting more than 3 days, fever, red eyes, runny nose, and cough.",
        },
        {
          id: "q15",
          question:
            "A 17-year-old patient came to the clinic because of fever and appearance of vesicular skin eruptions on her chest and face. The physician gave a diagnosis of chicken pox. The nursing diagnosis to be considered in the presence of the vesicles is?",
          choices: [
            "Actual impairment of skin integrity",
            "Alteration of fluid volume",
            "Disturbance in body image",
            "Disturbance in body image and impairment of skin integrity",
          ],
          answer: 3,
          rationale:
            "The vesicles cause both a disturbance in body image and impairment of skin integrity.",
        },
        {
          id: "q16",
          question: "Which of the following is an incorrect treatment for rabies?",
          choices: [
            "Consult your physician if the dog becomes wild, runs aimlessly, and drools (saliva)",
            "Consult your physician if the dog does not eat or drink",
            "Observe the dog first and then consult the doctor immediately",
            "Wash the wound immediately with soap and running water.",
          ],
          answer: 2,
          rationale: "Observing the dog first is incorrect; immediate consultation is needed.",
        },
        {
          id: "q17",
          question: "To prevent and control rabies, the nurse should not teach?",
          choices: [
            "Have pet dog immunized by a veterinarian against rabies at 12 months old and every year thereafter",
            "Be a responsible pet owner",
            "Get pre-exposure anti-rabies vaccine, especially if in a high-risk occupation.",
            "Provide clean sleeping quarters for pet dog",
          ],
          answer: 3,
          rationale: "Providing clean sleeping quarters is not a direct measure to prevent rabies.",
        },
        {
          id: "q18",
          question: "Which of the following is true about Hepatitis B?",
          choices: [
            "Most people experience any symptoms when newly infected.",
            "There is no specific treatment for acute hepatitis B.",
            "Hepatitis B Vaccine offers nearly 98% protection against the virus.",
            "It is transmitted through contaminated food and water.",
          ],
          answer: 2,
          rationale: "The Hepatitis B vaccine offers about 98% protection.",
        },
        {
          id: "q19",
          question: "What are the causative agents of whooping cough?",
          choices: ["Protozoa", "Fungi", "Viruses", "Bacteria"],
          answer: 3,
          rationale: "Whooping cough (pertussis) is caused by the bacterium Bordetella pertussis.",
        },
        {
          id: "q20",
          question:
            "Early symptoms (Stage 1) of Pertussis can last for 1 to 2 weeks and usually include except:",
          choices: [
            "Low-grade fever",
            "Mild, occasional cough",
            "Coughing Fits",
            "Stuffed-up nose",
          ],
          answer: 2,
          rationale: "Coughing fits are a feature of Stage 2 (paroxysmal stage), not Stage 1.",
        },
        {
          id: "q21",
          question: "In Stage 2 (later symptoms) of Pertussis, coughing fits can cause people to:",
          choices: [
            "Vomit during or after coughing fits",
            "Struggle to breathe",
            "Feel very tired after the fit",
            "All of the above",
          ],
          answer: 3,
          rationale: "All options are symptoms of the paroxysmal stage.",
        },
        {
          id: "q22",
          question:
            "A 5-week-old baby was brought to the health center for his first immunization. Which can be given to him?",
          choices: ["Hepatitis B vaccine 1", "BCG", "DPT1", "OPV1"],
          answer: 0,
          rationale:
            "Hepatitis B vaccine 1 is given at birth. BCG, DPT1, and OPV1 are given at 6 weeks.",
        },
        {
          id: "q23",
          question:
            "In IMCI, severe conditions generally require urgent referral to a hospital. Which of the following serious medical conditions does not always call for an urgent hospital referral?",
          choices: [
            "Severe febrile disease",
            "Mastoiditis",
            "Severe pneumonia",
            "Severe dehydration",
          ],
          answer: 1,
          rationale:
            "Mastoiditis may be treated with antibiotics, but the others require urgent referral.",
        },
        {
          id: "q24",
          question: "Which of the following is true about genital herpes except?",
          choices: [
            "There is a cure for genital herpes.",
            "Antiviral medicines also can reduce the chance of spreading it to others",
            "There is no vaccine currently available to prevent infection",
            "Daily use of antiviral medicines can prevent or shorten its outbreaks",
          ],
          answer: 0,
          rationale: "There is no cure for genital herpes.",
        },
        {
          id: "q25",
          question: "What treatment should be given to patient with leptospirosis?",
          choices: ["Antifungal", "Antiviral", "Anthelmintic", "Antibiotic"],
          answer: 3,
          rationale: "Leptospirosis is treated with antibiotics.",
        },
        {
          id: "q26",
          question: "To control pain from dengue, what pain medicine should be given at home?",
          choices: ["NSAIDS", "Acetaminophen", "Aspirin", "Ibuprofen"],
          answer: 1,
          rationale:
            "Acetaminophen is recommended for dengue; Aspirin and NSAIDs are avoided due to bleeding risk.",
        },
        {
          id: "q27",
          question:
            "In what stage of HIV if the patient exhibits large amount of HIV in their blood and are very contagious?",
          choices: ["Stage 1", "Stage 2", "Stage 3", "Stage 4"],
          answer: 0,
          rationale:
            "Stage 1 (Acute HIV Infection) is when the viral load is high and the person is very contagious.",
        },
        {
          id: "q28",
          question:
            "HIV - The patient may not have any symptoms or get sick during this phase but can transmit HIV, what stage of HIV?",
          choices: ["Acute HIV Infection", "Stage 4", "AIDS", "Chronic HIV Infection"],
          answer: 3,
          rationale:
            "Chronic HIV Infection (Stage 2 or 3) is a phase where the person may be asymptomatic but can still transmit the virus.",
        },
        {
          id: "q29",
          question:
            "If you harm a patient by administering a medication (wrong drug, wrong dose, etc.) ordered by a physician, which of the following is true?",
          choices: [
            "Both you and the physician are responsible for your respective actions.",
            "Only you are responsible, since you actually administered the medication.",
            "Only the physician is responsible, since he or she actually ordered the drug.",
            "You are not responsible, since you were merely following the doctor's orders.",
          ],
          answer: 0,
          rationale: "Both the nurse and the physician share responsibility.",
        },
        {
          id: "q30",
          question:
            "Although the client refused the procedure, the nurse insisted and inserted an indwelling urinary catheter. The nurse is most likely to be found guilty of which of the following?",
          choices: ["Battery", "Assault", "Invasion of privacy", "An unintentional tort"],
          answer: 0,
          rationale: "Battery is the nonconsensual touching of another person.",
        },
        {
          id: "q31",
          question:
            "The physician is tired and already being paged to another unit, he verbally tells you the order and asks you to document an order on the physician's order sheet. Your best response is:",
          choices: [
            '"Alright!"',
            "Get a second nurse to listen to the order, and after writing the order on the physician order sheet, have both nurses sign.",
            '"I am sorry but verbal orders can only be given in an emergency situation that prevents us from writing them out. I\'ll bring the chart and we can do this quickly."',
            "Try calling another doctor for the order or wait until the next shift.",
          ],
          answer: 2,
          rationale: "Verbal orders should be limited to emergencies.",
        },
        {
          id: "q32",
          question:
            "As a nurse, you provided quality care and gave her resources she needed just like other patients. What ethical principle is applicable?",
          choices: ["Justice", "Beneficence", "Nonmaleficence", "Autonomy"],
          answer: 0,
          rationale: "Justice is fairness and equal treatment.",
        },
        {
          id: "q33",
          question:
            "The nurse forcibly fed the patient despite the patient's refusal. Patient can sue her for which of the following?",
          choices: ["False Imprisonment", "Negligence", "Assault", "Malpractice"],
          answer: 2,
          rationale: "Forcible feeding can constitute assault.",
        },
        {
          id: "q34",
          question:
            "A doctor prescribes 2 tablets, but the nurse accidentally administers 4. After notifying the primary care provider, the nurse monitors the client carefully for untoward effects of which there are none. Is the client's malpractice lawsuit against the nurse likely to succeed?",
          choices: [
            "Yes, foreseeability is present.",
            "No, the nurse notified the primary care provider.",
            "Yes, a breach of duty exists.",
            "No, the client was not harmed.",
          ],
          answer: 3,
          rationale:
            "Malpractice requires injury; since there was no harm, the lawsuit is unlikely to succeed.",
        },
        {
          id: "q35",
          question:
            "A nurse finds out that a patient's primary care physician has prescribed an excessively high dosage of a drug. Which is the most appropriate action?",
          choices: [
            "Administer the medication.",
            "Notify the prescriber.",
            "Call the pharmacist.",
            "Refuse to administer the medication.",
          ],
          answer: 1,
          rationale: "The nurse should notify the prescriber to clarify the order.",
        },
        {
          id: "q36",
          question:
            "The hospital, where the nurse works, performs exploratory surgery on the nurse's spouse or partner. Which practice is most appropriate?",
          choices: [
            "Because the nurse is an employee, access to the chart is allowed.",
            "The relationship with the client provides the nurse special access to the chart.",
            "Access to the chart requires a signed release form.",
            "The nurse can ask the surgeon to discuss the outcome of the surgery.",
          ],
          answer: 2,
          rationale: "HIPAA requires a signed release for access to medical records.",
        },
        {
          id: "q37",
          question:
            "The primary care provider wrote a do-not-resuscitate (DNR) order. The nurse recognizes that which applies in the planning of nursing care for this client?",
          choices: [
            "The client may no longer make decisions regarding his or her own health care.",
            "The client and family know that the client will most likely die within the next 48 hours.",
            "A DNR order from a previous admission is valid for the current admission.",
            "The nurses will continue to implement all treatments focused on comfort and symptom management.",
          ],
          answer: 3,
          rationale: "DNR only means no resuscitation; comfort care continues.",
        },
        {
          id: "q38",
          question:
            "CPD - If you are going to be the program resource speaker of a professional training, how many CPD units will you receive?",
          choices: ["3", "4", "2", "1"],
          answer: 0,
          rationale: "A resource speaker typically earns 3 CPD units.",
        },
        {
          id: "q39",
          question:
            "A 90-year-old client tells a nurse, 'Because the doctor was so insistent, I signed the papers for that research study. Also, I was afraid he would not continue taking care of me.' Which right of the client is being neglected?",
          choices: [
            "Right not to be harmed",
            "Right to full disclosure",
            "Right to privacy and confidentiality",
            "Right to self-determination",
          ],
          answer: 3,
          rationale: "The client felt coerced, violating the right to self-determination.",
        },
        {
          id: "q40",
          question: "A quantitative research approach is most appropriate for which study?",
          choices: [
            "A study examining a client's feelings before and after a bone marrow aspiration",
            "A study examining the bereavement process in spouses of clients with terminal cancer",
            "A study exploring factors influencing weight control behavior",
            "A study measuring the effects of sleep deprivation on wound healing",
          ],
          answer: 3,
          rationale: "Quantitative research measures effects and uses numeric data.",
        },
        {
          id: "q41",
          question: "A qualitative research approach is most appropriate for which study?",
          choices: [
            "A study examining client reactions to stress after open heart surgery",
            "A study examining oxygen levels after endotracheal suctioning",
            "A study measuring nutrition and weight loss or gain in clients with cancer",
            "A study measuring differences in blood pressure before, during, and after a procedure",
          ],
          answer: 0,
          rationale: "Qualitative research explores reactions, feelings, and experiences.",
        },
        {
          id: "q42",
          question: "The type of research design that does not manipulate independent variable is:",
          choices: [
            "Experimental design",
            "Quantitative design",
            "Non-experimental design",
            "Quasi-experimental design",
          ],
          answer: 2,
          rationale: "Non-experimental designs do not manipulate variables.",
        },
        {
          id: "q43",
          question: "What is the hallmark of nursing accountability in Philippines?",
          choices: [
            "Accurate documentation of actions and outcomes of delivered care",
            "Having license",
            "Being on duty on the time of the actions of the delivered care",
            "Delegation by your immediate superior",
          ],
          answer: 0,
          rationale: "Accurate documentation is the hallmark of accountability.",
        },
        {
          id: "q44",
          question:
            "A registered nurse was sued in the practice of his profession and was found guilty. Who has the jurisdiction to revoke a RN's license?",
          choices: [
            "Supreme Court",
            "Board of Nursing",
            "Philippine Nurses' Association",
            "World Health Organization",
          ],
          answer: 1,
          rationale: "The Board of Nursing has the jurisdiction to revoke a license.",
        },
        {
          id: "q45",
          question:
            "According United Nations, this pertains to factors such as education, occupation, income, gender, and ethnicity or race that affect one's health.",
          choices: [
            "Political determinants",
            "Environmental determinants",
            "Social determinants",
            "Emotional determinants",
          ],
          answer: 2,
          rationale: "These are social determinants of health.",
        },
        {
          id: "q46",
          question:
            "Disaster Risk Reduction is one of the issues the United Nations want to address in SDG. What is related SDG that address this problem?",
          choices: ["3", "5", "7", "11"],
          answer: 3,
          rationale:
            "SDG 11 is Sustainable Cities and Communities, which includes disaster risk reduction.",
        },
        {
          id: "q47",
          question:
            "After giving a client two 500 mg of acetaminophen tablets for a headache, Nurse Diana realizes that the order was for two 325 mg acetaminophen tablets. After notifying the healthcare provider and the charge nurse of the error, where should the nurse document this medication error?",
          choices: [
            "No documentation is needed.",
            "Leave a sticky note on the chart.",
            "In the hospital's occurrence or incident reporting system and on the client's medication administration record.",
            "Make a narrative note in the client's chart.",
          ],
          answer: 2,
          rationale:
            "Medication errors should be documented in the incident report and on the MAR.",
        },
        {
          id: "q48",
          question:
            "There are 17 SDGs formed by the world leaders. What is the health-related SDG?",
          choices: ["2", "3", "4", "6"],
          answer: 1,
          rationale: "SDG 3 is Good Health and Well-being.",
        },
        {
          id: "q49",
          question:
            "A registered nurse fully that is duly authorized to practice the nursing profession in the Philippines must be guided by the scope of the nursing practice. This is under the Republic Act 9173. Which section of the law does the scope of nursing practice is stated?",
          choices: ["Section 25", "Section 26", "Section 27", "Section 28"],
          answer: 2,
          rationale: "Section 27 of RA 9173 states the scope of nursing practice.",
        },
        {
          id: "q50",
          question: "Which of these is not a purpose of the nursing process?",
          choices: [
            "It offers a plan of care to a patient that is organized according to the goals set by the nurse.",
            "It helps nurses identify a client's health status, and actual or potential health care problems.",
            "It delivers specific nursing interventions for the client to be able to meet his identified needs.",
            "It diagnoses and treats human responses to actual or potential health problems.",
          ],
          answer: 3,
          rationale: "The nursing process does not 'treat'; it diagnoses and manages responses.",
        },
        {
          id: "q51",
          question:
            "The nurse did not intervene when a client became hypotensive after surgery. Due to the nurse's action, the client required emergency surgery to stop postoperative bleeding that night. What legal consequence could the nurse face for failing to act?",
          choices: ["Slander", "Negligence", "Malpractice", "Misdemeanor"],
          answer: 2,
          rationale: "Failure to act constitutes malpractice.",
        },
        {
          id: "q52",
          question:
            "Nurse Harry is currently working night shift at the Medical-Surgical Ward. While doing his rounds, he found a patient lying on the floor. Nurse Harry immediately ensured client's safety, completed",
          choices: [
            "An incident report",
            "A police report",
            "A narrative note",
            "A medication error report",
          ],
          answer: 0,
          rationale:
            "An incident report is the appropriate documentation for an unexpected event like a fall.",
        },
        {
          id: "q53",
          question:
            "Ari was admitted to the hospital voluntarily; however, she became verbally abusive after her nurse rejected her desire to be discharged. The nurse immediately applied physical restraints and called security. What are the legal consequences of the nurse's action to Ari? Select all that apply.",
          choices: [
            "I. False imprisonment\nII. Libel\nIII. Battery\nIV. Slander",
            "I, III",
            "I, II, and III",
            "II, III",
            "II, III, IV",
          ],
          answer: 0,
          rationale:
            "Unjustified restraint is false imprisonment, and the physical touching is battery.",
        },
        {
          id: "q54",
          question:
            "An intern asked the nurse which of the following is required to be renewed every 3 years in the Philippines?",
          choices: [
            "Professional Identification Card",
            "CPD units",
            "Certificate of Registration",
            "Certificate of Rating",
          ],
          answer: 0,
          rationale: "The Professional Identification Card (PRC ID) is renewed every 3 years.",
        },
        {
          id: "q55",
          question: "Which of the following is an example of an accurate nursing documentation?",
          choices: [
            "The client was given Paracetamol for fever last night.",
            "The client appeared angry when awakened for hourly vital signs.",
            "The client's abdominal wound dressing is dry, intact and without any drainage.",
            "Client looked anxious when the nurse inquired about the client's family.",
          ],
          answer: 2,
          rationale: "Objective and factual documentation is the most accurate.",
        },
        {
          id: "q56",
          question:
            "Which nursing action should be completed before a physician performs a lumbar drain?",
          choices: [
            "Assessing the client for any allergy to contrast",
            "Placing the client in a Trendelenburg position, if able",
            "Ensuring that the consent form is signed and in the chart",
            "Telling the client not to expect discomfort",
          ],
          answer: 2,
          rationale: "Informed consent must be obtained and signed before the procedure.",
        },
        {
          id: "q57",
          question:
            "Which of the following statements would be the BEST documentation when a nurse suspects a child abuse or neglect?",
          choices: [
            'Child states, "My uncle hit me with his phone."',
            "Mother appears stressed by the unfamiliar hospital environment.",
            "Parents do not take interest in caring for the child.",
            "Child appeared lonely while being held by the parents.",
          ],
          answer: 0,
          rationale: "Direct quotes from the child are the most factual and objective.",
        },
        {
          id: "q58",
          question:
            "A client came to the ER after her father physically assaulted her at their home. She shared, 'My father may come to the hospital anytime. Please help me hide from him.' Which nursing intervention will best protect the client at the hospital?",
          choices: [
            "Notify the in-house security",
            "Place the client in a room opposite to the ER",
            "Place the client as 'confidential'",
            "Notify the police department regarding the assault",
          ],
          answer: 2,
          rationale:
            "Placing the client as 'confidential' restricts information and protects the patient's location.",
        },
        {
          id: "q59",
          question:
            "A client came to the clinic complaining of persistent cough for the past 3 weeks, hemoptysis, weight loss, low-grade fever, and night sweats. Upon further assessment, it was revealed that he had a recent exposure to someone with TB disease. A Mantoux Test was done to the client. After 48 hours, his right forearm is reddened and raised about 5mm where the test was given. This would be read as having which of the following results?",
          choices: ["Indeterminate", "Needs to be redone", "Negative", "Positive"],
          answer: 2,
          rationale: "An induration of 5mm is negative for a patient with no risk factors.",
        },
        {
          id: "q60",
          question:
            "As a knowledgeable nurse, you know that the most definitive diagnostic test for TB is?",
          choices: ["Mantoux Test", "Chest X-RAY", "Sputum culture", "Tuberculin test"],
          answer: 2,
          rationale: "Sputum culture is the definitive test for TB.",
        },
        {
          id: "q61",
          question:
            "Which of the following antituberculosis drugs can cause damage to the eighth cranial nerve?",
          choices: ["Streptomycin", "Isoniazid", "Rifampicin", "Ethambutol"],
          answer: 0,
          rationale: "Streptomycin is ototoxic and can damage the 8th cranial nerve.",
        },
        {
          id: "q62",
          question:
            "The community health nurse is conducting a health teaching to clients diagnosed with TB who has been receiving medication for 2 weeks. Which of the following statements will alert the nurse that further teaching is required?",
          choices: [
            '"There is no need for my family to practice further respiratory isolation as they have already been exposed"',
            '"I will make sure to resume my activities gradually"',
            '"I can return to work if a sputum culture comes back negative."',
            '"I won\'t be contagious after 2 to 3 weeks of medication therapy."',
          ],
          answer: 0,
          rationale:
            "Even if exposed, family should still practice precautions until the patient is no longer contagious.",
        },
        {
          id: "q63",
          question:
            "The nurse is preparing to give a bed bath to an immobilized client with tuberculosis. The nurse would wear which items when performing this care?",
          choices: [
            "Surgical mask and gloves",
            "Particulate respirator, gown, and gloves",
            "Particulate respirator and protective eyewear",
            "Surgical mask, gown, and protective eyewear",
          ],
          answer: 1,
          rationale:
            "Airborne precautions require a particulate respirator (N95), gown, and gloves.",
        },
        {
          id: "q64",
          question:
            "Which of the following medications can be used as chemoprophylaxis against Malaria?",
          choices: ["Doxycycline", "Oxamniquine", "Chloramphenicol", "Chloroquine"],
          answer: 3,
          rationale: "Chloroquine is used for malaria chemoprophylaxis.",
        },
        {
          id: "q65",
          question:
            "When counseling a patient about how to avoid contracting malaria during travel, the healthcare provider should not include which of the following in the teaching plan?",
          choices: [
            "Avoid outdoor night activities, especially from 9PM to 3AM",
            "Ensure that you are vaccinated against malaria",
            "Wear protective clothing during your trip",
            "Take preventive medications for 1-2 weeks before you depart.",
          ],
          answer: 1,
          rationale: "There is no vaccine for malaria.",
        },
        {
          id: "q66",
          question:
            "Following her business trip to Palawan, Tina is suspected to have Malaria, which is endemic to the province. When asked by the client about the most important diagnostic test for malaria, the nurse will answer which of the following?",
          choices: ["WBC count", "Urinalysis", "Blood smear", "Liver function test"],
          answer: 2,
          rationale: "Blood smear is the most important diagnostic test for malaria.",
        },
        {
          id: "q67",
          question:
            "The community health nurse knows that the following should be done in the event that an imminent malaria epidemic occurs, except?",
          choices: [
            "Mass blood smear collection",
            "Insecticide-treatment of mosquito nets",
            "Planting of Neem tree or other herbal plants",
            "Stream cleaning",
          ],
          answer: 0,
          rationale: "Mass blood smear collection is for surveillance, not for epidemic control.",
        },
        {
          id: "q68",
          question:
            "The community health nurse is providing health education regarding methods of prevention and control of Dengue Hemorrhagic Fever in Barangay Masigasig where several cases have been recorded in the last month. Which of the following statements made by the residents depicts understanding of the health teaching?",
          choices: [
            '"A person can only be infected with DHF once as they develop lifetime immunity."',
            '"All persons are susceptible, but males are more affected than females."',
            '"We should participate in indiscriminate fogging regularly to kill mosquitoes, including the larvae"',
            '"We will practice residual spraying with insecticides at scheduled times"',
          ],
          answer: 3,
          rationale: "Residual spraying is a recommended control measure.",
        },
        {
          id: "q69",
          question:
            "Community health nurses should be alert in observing a Dengue suspect. Which of the following is not an indicator for hospitalization in patients with DHF?",
          choices: [
            "Severe abdominal pain",
            "Increasing hematocrit count",
            "Cough of 30 days",
            "Persistent vomiting",
          ],
          answer: 2,
          rationale: "Cough of 30 days is not a specific indicator of DHF.",
        },
        {
          id: "q70",
          question:
            "Which of the following is used as a screening test for dengue hemorrhagic fever?",
          choices: ["Rumpel-leede test", "Sputum culture", "ELISA", "Complete blood count"],
          answer: 0,
          rationale: "Rumpel-Leede test (tourniquet test) is a screening test for DHF.",
        },
        {
          id: "q71",
          question:
            "As a knowledgeable nurse, you know that which of the following is the most important supportive and symptomatic treatment should be provided to patients with DHF?",
          choices: [
            "Advise low fat, low fiber diet",
            "Provide warmth through lightweight covers",
            "Provide adequate rest and avoid unnecessary movement",
            "Rapid replacement of body fluid",
          ],
          answer: 3,
          rationale: "Rapid fluid replacement is crucial to prevent shock.",
        },
        {
          id: "q72",
          question:
            "Nurse Sam knows that the nurse's primary concern in the immediate control of hemorrhage in patients with dengue is?",
          choices: [
            "Close observation of the patient for vital signs leading to shock",
            "Administering ibuprofen instead of aspirin for muscle pains and fever",
            "Placing an ice bag over the abdomen should melena occur",
            "Maintaining elevated position of the trunk should nosebleed occur",
          ],
          answer: 0,
          rationale: "The primary concern is monitoring for shock due to hemorrhage.",
        },
        {
          id: "q73",
          question:
            "Nanay Linda brought her child, Kris, to the clinic reporting that the preschooler is having fever, upper respiratory problem, and starting to get rashes in her body. Kris was diagnosed with rubella. As a knowledgeable community health nurse, Nurse Jecka knows that Koplik spots are highly characteristic of the prodromal phase of the disease. When assessing the patient, which observation should she expect?",
          choices: [
            "Pinpoint petechiae noted on both legs",
            "Small blue-white spots with a red base found on the buccal mucosa",
            "Rose colored, pinpoint spots on the soft palate",
            "Vesicles across the chest and back",
          ],
          answer: 1,
          rationale:
            "Koplik spots are small blue-white spots with a red base on the buccal mucosa.",
        },
        {
          id: "q74",
          question:
            "Kris is being admitted to the hospital. When preparing for the admission of the child, which precautions should be implemented?",
          choices: ["Contact Precaution", "Airborne", "Enteric", "Both a and b"],
          answer: 1,
          rationale: "Measles and rubella are transmitted via airborne route.",
        },
        {
          id: "q75",
          question:
            "The nurse is teaching Nanay Linda about the ways she can prevent the spread of measles in their home. Which of the following statements by Nanay Linda demonstrates the need for further teaching?",
          choices: [
            '"I will make sure to disinfect all articles soiled with secretion of nose and throat"',
            '"I will immediately isolate the patient when symptoms start to appear up to 5-7 days after onset of rash"',
            '"I will only allow him to return to school once the spots in his mouth disappear"',
            "None of the above",
          ],
          answer: 2,
          rationale:
            "The child can return to school after the rash disappears, not when the spots in the mouth disappear.",
        },
        {
          id: "q76",
          question:
            "As Kris is about to be discharged, Nanay Linda asked the nurse on how she could take care of her child at home. Which of the following responses will not demonstrate the nurse's understanding of the disease?",
          choices: [
            '"Keep your child in an adequately ventilated room but free from drafts and chilling"',
            '"Make sure to provide lukewarm sponge baths to reduce your child\'s discomfort"',
            '"Let Kris rest in a room with dim lights"',
            '"Ensure that your child takes aspirin as prescribed by the physician to reduce his fever."',
          ],
          answer: 3,
          rationale:
            "Aspirin is contraindicated in children with viral infections due to Reye's syndrome.",
        },
        {
          id: "q77",
          question:
            "As a community health nurse, you are aware that management of a child with measles includes the administration of which of the following?",
          choices: [
            "Gentian violet on mouth lesions",
            "Retinol capsule regardless of when the last dose was given",
            "Tetracycline eye ointment for corneal opacity",
            "Antibiotics to prevent pneumonia",
          ],
          answer: 1,
          rationale: "Vitamin A (retinol) is given to reduce complications of measles.",
        },
        {
          id: "q78",
          question:
            "Nurses play key roles in educating patients about HIV, providing support for treatment adherence, and assisting with navigation of care delivery. Nurse Gigi, a nurse educator, is conducting an HIV awareness program in Barangay Maharlika and the following questions apply. When asked on ways in which HIV can be passed from one person to another, Nurse Gigi knows that all of the following statements made by a participant is true, except?",
          choices: [
            '"HIV can be transmitted from mother to child during childbirth and breastfeeding"',
            '"I can also get the virus by sharing toilets and bathrooms with an infected person"',
            '"Unprotected sexual contact is the most common mode of transmission"',
            '"I should not worry about spreading the virus to others by sweating at the gym."',
          ],
          answer: 1,
          rationale: "HIV is not transmitted through sharing toilets.",
        },
        {
          id: "q79",
          question:
            "After the session, a pregnant woman approached Nurse Gigi and asked if there is a way to prevent HIV transmission from a pregnant HIV positive mother to child. Which of the following is the best response the nurse can provide to the worried mother?",
          choices: [
            "Take ART as prescribed",
            "Terminate the pregnancy in its early days",
            "Deliver the baby via normal spontaneous delivery",
            "Ensure regular prenatal checkups above the recommended standard by DOH",
          ],
          answer: 0,
          rationale: "ART is the most effective way to prevent mother-to-child transmission.",
        },
        {
          id: "q80",
          question:
            "Patient X, an HIV positive adolescent who has been receiving antiretroviral therapy, asked the nurse what it means now that he already has an undetectable viral load. How should the nurse respond?",
          choices: [
            '"It means that ART has been successful in eliminating the virus from your blood."',
            '"I think more tests are needed to determine the effectiveness of ART"',
            '"Since the virus is already undetectable, you may discontinue receiving ART for at least 3 months"',
            '"It means ART has been effective in decreasing the viral load"',
          ],
          answer: 3,
          rationale: "Undetectable viral load means the medication is working.",
        },
        {
          id: "q81",
          question:
            "The nurse is caring for a patient who has tested positive for HIV and arrived at the clinic with a report of fever, nonproductive cough, and fatigue. The patient's CD4 count is 166 cells/mcl. When assessing the patient's skin, which of the following findings would prompt the nurse to immediately notify the physician?",
          choices: [
            "Numerous moles on the chest and back",
            "Purplish-red raised lesions",
            "Patches of dry, flaky skin",
            "Ecchymoses on the legs",
          ],
          answer: 1,
          rationale: "Purplish-red raised lesions are characteristic of Kaposi's sarcoma.",
        },
        {
          id: "q82",
          question:
            "Francis rushed to the ER after being accidentally bitten in the face while playing with his dog that has not been vaccinated against rabies. Upon assessment, it was revealed that the wound is only superficial and did not bleed. Which of the following statement by the newly licensed nurse requires intervention by the senior nurse?",
          choices: [
            '"You have to immediately wash the wound with soap and water for 15 minutes."',
            '"You will have to start the vaccine regimen immediately."',
            '"There is no need for you to receive rabies immunoglobulin as it is not indicated for minor abrasions."',
            '"You will have to complete the vaccination regimen until Day 7 regardless of the status of the dog."',
          ],
          answer: 2,
          rationale:
            "RIG is indicated for Category II and III exposures, regardless of wound severity.",
        },
        {
          id: "q83",
          question: "Which of the following is not a route of transmission of Rabies?",
          choices: ["Bite", "Lick", "Aerosol", "Ingestion"],
          answer: 3,
          rationale: "Rabies is not transmitted through ingestion.",
        },
        {
          id: "q84",
          question:
            "Which of the following nursing interventions should Nurse Dino do first when a patient who was found to have been bitten by a stray dog arrives at the clinic?",
          choices: [
            "Cleanse the bite with soap and running water",
            "Suture the wounds to prevent further infection",
            "Inject the rabies vaccine immediately",
            "Relieve pain by administering pain medications, as ordered",
          ],
          answer: 0,
          rationale: "The first step is wound cleansing.",
        },
        {
          id: "q85",
          question:
            "Duday, 35-year old female, came to the clinic complaining of burning sensation while urinating and feeling the need to urinate more often. She was diagnosed with urolithiasis. When asked if there is a herbal medicine she could use, which of the following should the nurse advise her to take?",
          choices: ["Ulasimang bato", "Sambong", "Niyug-niyogan", "Yerba Buena"],
          answer: 1,
          rationale: "Sambong is used for urinary stones.",
        },
        {
          id: "q86",
          question:
            "The nurse is teaching Duday how to take the herbal medicine. Which of the following statements made by Duday will indicate understanding of the health teaching?",
          choices: [
            '"I will pound its young leaves and generously apply it to the affected area"',
            '"I will combine it with Bayabas leaves to increase its healing effect"',
            '"I will make sure to chop and boil its leaves in water for 15 minutes until one glassful remains"',
            '"I will use at least 10 seeds and take it 2 hours after supper and repeat the dose after one week when symptoms persist"',
          ],
          answer: 2,
          rationale: "This is the correct preparation for Sambong.",
        },
        {
          id: "q87",
          question:
            "A patient came to the ER presenting with irritability, lower back pain, headache, fever for four days, and muscle cramps. The patient reports accidentally stepping on a nail while gardening about 2 weeks ago. The patient was diagnosed with Tetanus. The nurse was asked on the ways tetanus can be transmitted. Which of the following responses will demonstrate the nurse's understanding of the disease?",
          choices: [
            '"Tetanus can be transmitted though contamination of wounds"',
            '"Tetanus can be spread from person to person through direct contact with infected body fluids"',
            '"A droplet precaution must be employed when caring for patients with tetanus"',
            "All of the above",
          ],
          answer: 0,
          rationale: "Tetanus is transmitted through contaminated wounds, not person-to-person.",
        },
        {
          id: "q88",
          question:
            "Michael, a 45-year-old male is admitted at Marivasa Medical Clinic complaining of intense pain at the lower left part of his abdomen. He said he's having diarrhea, defecating about 10-20 liquid stools. He also notices that his feces have traces of red blood in them. Nurse Maria knows that the patient is having clinical manifestations of:",
          choices: ["Gastric Cancer", "Diverticulitis", "Ulcerative Colitis", "Crohn's Disease"],
          answer: 2,
          rationale:
            "Ulcerative Colitis presents with bloody diarrhea and left-sided abdominal pain.",
        },
        {
          id: "q89",
          question: "Nurse Maria is aware that Patient Michael's condition is characterized as:",
          choices: [
            "multiple ulcerations, diffuse inflammations, and desquamation or shedding of the colonic epithelium that starts from the sigmoid colon",
            "segmental inflammation and ulcerations giving a 'cobblestone' appearance that usually affects the terminal ileum and ascending colon",
            "inflammation and infection of sac-like pouches in the colon due to retained food and bacteria",
            "inflammation of the appendix due to either kinking or occlusion of fecalith, tumor, or any foreign body",
          ],
          answer: 0,
          rationale: "This describes Ulcerative Colitis.",
        },
        {
          id: "q90",
          question:
            "The following are complications that may arise if the progression of ulcerative colitis worsens, EXCEPT:",
          choices: ["Toxic Megacolon", "Gastric ulceration", "Perforation", "Bleeding"],
          answer: 1,
          rationale: "Gastric ulceration is not a complication of UC.",
        },
        {
          id: "q91",
          question:
            "Patient Michael's inflammation and ulceration worsens and progressed up to the transverse colon. Nurse Maria anticipates which procedure will be performed to relieve the patient's symptoms?",
          choices: ["Gastroduodenostomy", "Gastrojejunostomy", "Hemicolectomy", "Total colectomy"],
          answer: 2,
          rationale: "Hemicolectomy is removal of part of the colon.",
        },
        {
          id: "q92",
          question:
            "The doctor ordered Oral Azithromycin for Patient Nezuko due in the morning to manage her UTI. After Nurse Tanjiro prepares the medication, she receives a call light from multiple patients asking for her assistance. She realizes that as she tends to other patient's urgent concerns, her medication to patient Violeta will be delayed. Since her unit is understaffed, her best action is to:",
          choices: [
            "Delegate and endorse the task of medication administration to the nursing aide",
            "Delegate and endorse the task of medication administration to another registered nurse",
            "Postpone the antibiotics administration for later",
            "Administer the medication as scheduled and prioritize it",
          ],
          answer: 1,
          rationale: "Medication administration can be delegated to another RN.",
        },
        {
          id: "q93",
          question:
            "Patient Billy arrives at the Emergency Room complaining of weakness, fatigue, leg cramps, numbness and tingling sensations. He has a diagnosis of Left-Sided Heart Failure and was given Lasix prior to occurring symptoms. Laboratory results shows that he has sodium levels of 137 mEq/dL, potassium levels of 2.8 mEq/dL, and calcium levels of 8 mEq/L. Based from these findings, Nurse Isabella knows that the patient is having:",
          choices: ["Hyponatremia", "Hypokalemia", "Hypocalcemia", "Hypernatremia"],
          answer: 1,
          rationale: "Normal potassium is 3.5-5.0 mEq/L; 2.8 indicates hypokalemia.",
        },
        {
          id: "q94",
          question:
            "An order was given by the doctor to provide IV potassium to improve the patient Billy's potassium levels and alleviate his occurring symptoms. Nurse Isabella is now monitoring for signs of possible excessive potassium levels. Which of the following requires immediate intervention in monitoring for hyperkalemia?",
          choices: [
            "Placing the patient on cardiac monitor",
            "Determining the serum potassium levels",
            "Determining the ABG results",
            "Assessment of the signs and symptoms",
          ],
          answer: 0,
          rationale: "Cardiac monitoring is the priority for hyperkalemia.",
        },
        {
          id: "q95",
          question:
            "Charmaine, a newly registered nurse, was tasked to give IV potassium chloride to patient Jerry diagnosed with hypokalemia. She was instructed by her preceptor to never give IV potassium via IV push. She asked why and her preceptor would answer the following EXCEPT:",
          choices: [
            "It would cause life-threatening dysrhythmias",
            "It is painful and irritating to the skin",
            "It may cause extravasation in the IV site",
            "It may have lesser effects in the body",
          ],
          answer: 3,
          rationale: "IV push potassium can cause cardiac arrest; it does not have lesser effects.",
        },
        {
          id: "q96",
          question:
            "Patient Flor was rushed to the emergency room showing signs of extreme muscle weakness, paralysis, and nausea. She was attached to a cardiac monitor and it showed Peak T waves, depressed ST segment, and a short QT interval. Nurse Marielle is aware that the patient hyperkalemic. The following are medications that should be given to the patient EXCEPT:",
          choices: [
            "Calcium Gluconate",
            "Regular insulin and Dextrose",
            "Beta agonists",
            "Calcium Chloride",
          ],
          answer: 3,
          rationale:
            "Calcium Chloride is not the first-line treatment for hyperkalemia; Calcium Gluconate is preferred.",
        },
        {
          id: "q97",
          question:
            "Sarah, a 1-week post-operative patient was observed to be having symptoms of muscle rigidity and tingling sensations of extremities. When Nurse Jes touched her cheek, she immediately twitched. Nurse Jes is aware that the patient has:",
          choices: ["Hyperkalemia", "Hypermagnesemia", "Hypercalcemia", "Hypocalcemia"],
          answer: 3,
          rationale:
            "Chvostek's sign (twitching when touching the cheek) is a sign of hypocalcemia.",
        },
        {
          id: "q98",
          question:
            "One of the management to treat the patient Sarah's symptoms is to provide calcium replenishment. The doctor ordered to give calcium to treat the muscle spasms. The following medications can be given to treat hypocalcemia EXCEPT:",
          choices: [
            "Calcium Gluconate",
            "Calcium Chloride",
            "Calcitonin",
            "Oral Calcium supplements",
          ],
          answer: 2,
          rationale: "Calcitonin lowers calcium levels.",
        },
        {
          id: "q99",
          question:
            "Nurse Beatrix is assessing various patients in Medical-Surgical Ward. He determines which of the following is NOT at risk for increased calcium levels?",
          choices: [
            "A 32-year-old patient having calcium therapy",
            "A 22-year-old male with malignant tumor located in the throat area",
            "A 16-year-old soccer player with multiple fractures",
            "A 63-year-old patient with renal failure",
          ],
          answer: 2,
          rationale: "Fractures do not increase calcium levels.",
        },
        {
          id: "q100",
          question:
            "Patient Limuel who is diagnosed with hyperparathyroidism is rushed to the hospital with symptoms of muscle weakness, anorexia, nausea, and vomiting. Laboratory results indicate which of the following calcium values is correct?",
          choices: [
            "Calcium levels of 11.5 mEq/dL",
            "Calcium levels of 15 mEq/dL",
            "Calcium levels of 8.3 mEq/dL",
            "Calcium levels of 5 mEq/dL",
          ],
          answer: 0,
          rationale: "Normal calcium is 8.5-10.5 mEq/dL; 11.5 indicates hypercalcemia.",
        },
        {
          id: "q101",
          question: "Which of the following violates the principle of autonomy?",
          choices: [
            "Educating the patient regarding treatment options",
            "Providing privacy during procedures",
            "Performing procedures despite patient's decision to refuse care",
            "Respecting the patient's decisions and choices",
          ],
          answer: 2,
          rationale: "Performing a procedure without consent violates autonomy.",
        },
        {
          id: "q102",
          question: "What task can be delegated to a CNA (Certified Nursing Assistant)?",
          choices: [
            "Obtaining vital signs and patient's history",
            "Administering IV injections to a stable patient",
            "Providing discharge education",
            "Assisting a patient with ambulation post-operatively",
          ],
          answer: 3,
          rationale: "Assisting with ambulation is within the scope of a CNA.",
        },
        {
          id: "q103",
          question:
            "The physician asks the nurse to circumcise a 7 yrs old boy, what will the nurse do?",
          choices: [
            "Circumcise the boy as it is the physician's order",
            "Report the physician to the head nurse",
            "Refuse as it is not within the scope of nursing practice",
            "Argue with the physician",
          ],
          answer: 2,
          rationale: "Circumcision is not within the scope of nursing practice.",
        },
        {
          id: "q104",
          question: "What is an example of a physiological effect of marijuana?",
          choices: ["Hypertension", "Hyperalimentation", "Conjunctival redness", "Tachypnea"],
          answer: 2,
          rationale: "Marijuana use causes conjunctival redness.",
        },
        {
          id: "q105",
          question: "Which of the following contains the most caffeine?",
          choices: ["Coffee", "Tea", "Cola", "Chocolate"],
          answer: 0,
          rationale: "Coffee contains the most caffeine.",
        },
        {
          id: "q106",
          question: "Which of the following best describes diabetes mellitus?",
          choices: [
            "disease which causes the body to produce excessive insulin leading to low blood glucose levels.",
            "An acute condition caused by too much intake of carbohydrates and sugar.",
            "chronic disorder caused by insulin deficiency or insulin resistance leading to elevated blood glucose levels.",
            "disease affecting only middle-aged adults.",
          ],
          answer: 2,
          rationale: "Diabetes mellitus is a chronic disorder of insulin deficiency or resistance.",
        },
        {
          id: "q107",
          question:
            "The nurse is educating a patient diagnosed with type 2 diabetes regarding medical management for her condition. Which statement indicates a need for further teaching?",
          choices: [
            '"Exercising regularly is essential to control my blood sugar levels."',
            '"Having a controlled and balanced diet is necessary for my condition."',
            '"I need to take insulin injections for life."',
            '"If my blood sugar cannot be controlled with exercise and diet, I may need to take oral antidiabetic agents."',
          ],
          answer: 2,
          rationale:
            "Not all type 2 diabetics require insulin; many are managed with oral medications.",
        },
        {
          id: "q108",
          question:
            "The drug of choice for Type 1 Diabetes Mellitus is insulin. Which of the following are types of insulin? Select all that apply.",
          choices: [
            "I. Rapid acting\nII. Short acting\nIII. Intermediate acting\nIV. Very long-acting",
            "I and II",
            "I, II, and III",
            "I, II, and IV",
            "All of the above",
          ],
          answer: 1,
          rationale: "Rapid, short, and intermediate-acting insulins are the main types.",
        },
        {
          id: "q109",
          question:
            "A nurse is caring for a patient diagnosed with abdominal aortic aneurysm. Which assessment finding indicates a ruptured abdominal aortic aneurysm and required immediate action?",
          choices: [
            "Nausea and vomiting",
            "Gross hematuria",
            "Severe abdominal or back pain",
            "Hypertension",
          ],
          answer: 2,
          rationale: "Severe abdominal or back pain is a classic sign of rupture.",
        },
        {
          id: "q110",
          question: "During a liver biopsy, how should the patient be positioned?",
          choices: [
            "Left lateral (side-lying) position",
            "Supine with right side of the upper abdomen exposed",
            "Prone with right side of the upper abdomen exposed",
            "Right lateral (side-lying) position",
          ],
          answer: 0,
          rationale: "The patient is positioned in the left lateral position.",
        },
        {
          id: "q111",
          question: "What quadrant is the liver located in the body?",
          choices: [
            "Right lower quadrant",
            "Right upper quadrant",
            "Left lower quadrant",
            "Left upper quadrant",
          ],
          answer: 1,
          rationale: "The liver is located in the right upper quadrant.",
        },
        {
          id: "q112",
          question:
            "When blood glucose level is uncontrolled, chronic complications may occur. What is a microvascular complication of diabetes associated with damage to the small blood vessels that supply the glomeruli of the kidney?",
          choices: ["Nephropathy", "Retinopathy", "Neuropathy", "Cardiomyopathy"],
          answer: 0,
          rationale: "Nephropathy is microvascular damage to the kidneys.",
        },
        {
          id: "q113",
          question:
            "As a post-anesthesia care nurse, what position should you place a patient who had just undergone an appendectomy?",
          choices: ["Semi-Fowler's", "Side lying", "Supine", "High Fowler's"],
          answer: 1,
          rationale: "Side-lying is often used post-operatively.",
        },
        {
          id: "q114",
          question: "Which intercostal space is the needle inserted for liver biopsy?",
          choices: [
            "10th intercostal space",
            "11th intercostal space",
            "7th-8th intercostal space",
            "8th-9th intercostal space",
          ],
          answer: 2,
          rationale: "Liver biopsy is usually done at the 7th-8th intercostal space.",
        },
        {
          id: "q115",
          question:
            "The health care record is a valuable source of data for all members of the health care team. Which of the following is/are the purpose/s of the health care record? Select all that apply.",
          choices: [
            "I. Facilitates interprofessional communication among health care providers\nII. Provides a legal record of care provided\nIII. Provides justification for financial billing\nIV. Serves as a resource for education and research",
            "All except III",
            "All except IV",
            "I and II only",
            "All of the above",
          ],
          answer: 3,
          rationale: "All are purposes of the health care record.",
        },
        {
          id: "q116",
          question: "Which of the following is a rapid acting insulin?",
          choices: ["Glargine", "Lispro", "Lantus", "Humulin R"],
          answer: 1,
          rationale: "Lispro (Humalog) is a rapid-acting insulin.",
        },
        {
          id: "q117",
          question: "Which of the following is a short acting insulin?",
          choices: ["Detemir", "Lispro", "Humulin R", "Humulin N"],
          answer: 2,
          rationale: "Humulin R is a short-acting insulin.",
        },
        {
          id: "q118",
          question: "Which intercostal space is the needle inserted for liver biopsy?",
          choices: ["10", "2-3", "8-9", "11"],
          answer: 2,
          rationale: "Liver biopsy is usually done at the 8th-9th intercostal space.",
        },
        {
          id: "q119",
          question:
            "A patient is suspected to have liver cancer. What diagnostic tests should the nurse NOT expect the physician to order?",
          choices: ["CT scan", "Radiograph", "Angiogram", "Ultrasound"],
          answer: 1,
          rationale: "Radiograph (X-ray) is not specific for liver cancer.",
        },
        {
          id: "q120",
          question:
            "A 2-year-old attempts to drink from his cup by himself. His mother is constantly hovering and takes the cup when she sees her child struggling. Which developmental outcome is most likely?",
          choices: [
            "The child will develop confidence",
            "The child will be frustrated and give up trying new things",
            "The child will be encouraged to keep trying on his own",
            "The child will master new skills",
          ],
          answer: 1,
          rationale: "Overly protective parenting leads to frustration.",
        },
        {
          id: "q121",
          question:
            "A patient rates his pain level as 8/10. Which drug should the nurse administer?",
          choices: ["ibuprofen", "acetaminophen", "meperidine HCL", "mefenamic"],
          answer: 2,
          rationale: "Meperidine is an opioid for severe pain.",
        },
        {
          id: "q122",
          question: "Which is of the following is an H2 blocker?",
          choices: ["Magnesium Hydroxide", "Pantoprazole", "Ranitidine", "Aluminum Hydroxide"],
          answer: 2,
          rationale: "Ranitidine (Zantac) is an H2 blocker.",
        },
        {
          id: "q123",
          question:
            "A patient came into the emergency department with difficulty of breathing and wheezing upon auscultation. Acute bronchial asthma is suspected.",
          choices: ["Chest X-ray", "Pulmonary function test", "ABG", "Sputum culture"],
          answer: 1,
          rationale: "Pulmonary function tests are used to diagnose and assess asthma.",
        },
        {
          id: "q124",
          question:
            "When caring for a patient with abdominal aortic aneurysm, what action is contraindicated?",
          choices: [
            "Inspection",
            "Palpation of the pulsating area",
            "Palpation of lower abdomen deeply",
            "Auscultation",
          ],
          answer: 2,
          rationale: "Deep palpation is contraindicated as it may cause rupture.",
        },
        {
          id: "q125",
          question:
            "Patient A is scheduled for cardiac catheterization. Which of the following should be AVOIDED pre-procedure?",
          choices: ["Shellfish", "NPO", "Shave", "All of the above"],
          answer: 0,
          rationale: "Shellfish may contain iodine, which is in contrast media.",
        },
        {
          id: "q126",
          question:
            "If diabetes is uncontrolled, numerous complications may arise. What is one of the complications of unmanaged diabetes?",
          choices: ["Arteriopathy", "Cardiomyopathy", "Neuropathy", "Myopathy"],
          answer: 2,
          rationale: "Neuropathy is a common complication of diabetes.",
        },
        {
          id: "q127",
          question:
            "What pertinent complete blood count finding is demonstrated in a patient with appendicitis?",
          choices: [
            "Decreased Eosinophils",
            "Decreased lymphocytes",
            "Increased basophils",
            "Increased neutrophils",
          ],
          answer: 3,
          rationale:
            "Appendicitis often shows an elevated white blood cell count with increased neutrophils.",
        },
        {
          id: "q128",
          question:
            "The World Health Organization has developed a 3 step analgesic ladder. Arrange the following steps in order.",
          choices: [
            "I. Paracetamol, NSAIDS\nII. Morphine, Oxycodone, Fentanyl\nIII. Codeine, Tramadol",
            "II, III, I",
            "III, II, I",
            "I, III, II",
            "II, I, II",
          ],
          answer: 2,
          rationale:
            "The WHO pain ladder is: Step 1 (non-opioids), Step 2 (weak opioids), Step 3 (strong opioids).",
        },
        {
          id: "q129",
          question:
            "The head nurse notices two staff members arguing at the nurse's station. What should the initial action of the head nurse towards conflict resolution?",
          choices: [
            "Provide solution to the problem",
            "Inform them to set aside their problem and focus on their work",
            "Require an incident report explaining the situation",
            "Encourage them to have a calm, private discussion",
          ],
          answer: 3,
          rationale: "Encouraging a calm, private discussion is the first step.",
        },
        {
          id: "q130",
          question:
            "The nurse is caring for a patient who has sustained a partial thickness burn on the upper extremities. What phase of burn care involves wound care and closure, prevention or treatment of complications, and nutritional support?",
          choices: ["Emergent", "Acute", "Rehabilitation", "Resuscitative"],
          answer: 1,
          rationale: "The acute phase involves wound care and management.",
        },
        {
          id: "q131",
          question:
            "A patient is currently on oxygen therapy. As oxygen is a highly combustible gas, where should 'No smoking' signals be posted?",
          choices: [
            "On the door outside the hospital room",
            "On the oxygen tank",
            "On the patient's bed",
            "On the patient's chart",
          ],
          answer: 0,
          rationale: "Signs should be placed on the door.",
        },
        {
          id: "q132",
          question:
            "Patients on insulin therapy are prone to complications. One complication is insulin lipodystrophy. Which of the following demonstrates proper practice to avoid lipodystrophy?",
          choices: [
            "Injecting insulin on the same site",
            "Rotating injection sites for insulin",
            "Massaging injection sites",
            "Aspirating before injecting insulin",
          ],
          answer: 1,
          rationale: "Rotating injection sites prevents lipodystrophy.",
        },
        {
          id: "q133",
          question:
            "What manifestation should the nurse monitor for in a patient taking Digoxin which could indicate digoxin toxicity?",
          choices: ["Dark-colored urine", "Hyperactivity", "Ocular disturbances", "Edema"],
          answer: 2,
          rationale: "Visual disturbances like halos are a sign of digoxin toxicity.",
        },
        {
          id: "q134",
          question:
            "A patient is scheduled for cardiac catheterization. Before the procedure, the nurse should educate the patient that when the contrast dye is administered, it is only normal for the patient to feel ?",
          choices: ["flushed and warm", "cold", "drowsy", "itchy"],
          answer: 0,
          rationale: "A warm flushed feeling is a normal reaction to contrast.",
        },
        {
          id: "q135",
          question:
            "For a patient with chest tube, what finding DOES NOT necessitate immediate report to the physician?",
          choices: ["fluctuation of fluids", "Bleeding", "amount of drainage", "Bubbling"],
          answer: 0,
          rationale: "Fluctuation of fluids (tidaling) is normal.",
        },
        {
          id: "q136",
          question:
            "The nurse is caring for a patient with an acute asthma attack with wheezes noted upon auscultation. Suddenly, the nurse notes absence of wheezes, and the patient appears to have increased difficulty of breathing. What does this indicate?",
          choices: [
            "The patient's status is improving",
            "The airway obstruction has progressed",
            "This is an expected finding in asthmatic patients",
            "The symptoms have resolved, and no treatment is required",
          ],
          answer: 1,
          rationale:
            "Absence of wheezes in severe asthma indicates a 'silent chest' and worsening obstruction.",
        },
        {
          id: "q137",
          question:
            "Which question should the nurse ask the parents of a child suspected of having glomerulonephritis?",
          choices: [
            '"Did your child fall off a bike onto the handlebars?"',
            '"Has the child had persistent nausea and vomiting?"',
            '"Has the child been itching or had a rash anytime in the last week?"',
            '"Has the child had a sore throat or a throat infection in the last few weeks?"',
          ],
          answer: 3,
          rationale: "Glomerulonephritis is often preceded by a streptococcal infection.",
        },
        {
          id: "q138",
          question: "What is NOT a clinical manifestation of nephrotic syndrome?",
          choices: ["Massive proteinuria", "Edema", "Increased urinary output", "Hypoalbuminemia"],
          answer: 2,
          rationale: "Nephrotic syndrome typically causes decreased urine output.",
        },
        {
          id: "q139",
          question:
            "The nurse is caring for a patient with chronic kidney disease. Latest electrolyte result reveals a potassium level of 5.9 mEq/L. Which electrocardiographic change should the nurse NOT expect?",
          choices: [
            "Tall peaked T waves",
            "Prominent U wave",
            "Widened QRS complexes",
            "Prolonged PR intervals",
          ],
          answer: 1,
          rationale: "Prominent U waves are associated with hypokalemia, not hyperkalemia.",
        },
        {
          id: "q140",
          question:
            "Which is the following is considered a shockable cardiac rhythm during a cardiac arrest?",
          choices: [
            "Asystole",
            "Ventricular fibrillation",
            "Pulseless electrical activity (PEA)",
            "Atrial fibrillation",
          ],
          answer: 1,
          rationale: "Ventricular fibrillation is a shockable rhythm.",
        },
        {
          id: "q141",
          question:
            "A nurse is caring for a patient diagnosed with congestive heart failure. Upon entering the patient's room, she finds the patient unresponsive and without pulse. What is the initial action of the nurse?",
          choices: [
            "Leave the room to call for help",
            "Begin chest compressions",
            "Check for breathing",
            "Open the airway",
          ],
          answer: 1,
          rationale: "Begin chest compressions is the first step in CPR.",
        },
        {
          id: "q142",
          question: "What is the priority goal in the acute phase of RA?",
          choices: [
            "Prevent joint deformity",
            "Maintain mobility",
            "Relieve pain",
            "Improve nutrition",
          ],
          answer: 2,
          rationale: "Pain relief is the priority in the acute phase.",
        },
        {
          id: "q143",
          question: "OA is most commonly associated with:",
          choices: ["Autoimmunity", "Infection", "Cartilage wear and tear", "Vitamin deficiency"],
          answer: 2,
          rationale: "Osteoarthritis is a degenerative disease caused by wear and tear.",
        },
        {
          id: "q144",
          question: "Which of the following is a common nursing diagnosis for knee OA?",
          choices: [
            "Risk for injury",
            "Impaired skin integrity",
            "Activity intolerance",
            "Self-care deficit",
          ],
          answer: 2,
          rationale: "Activity intolerance is common due to pain and stiffness.",
        },
        {
          id: "q145",
          question: "What activity is best avoided during a flare-up of RA?",
          choices: [
            "Passive range of motion",
            "Heat therapy",
            "Vigorous exercise",
            "Assistive devices",
          ],
          answer: 2,
          rationale: "Vigorous exercise should be avoided during flare-ups.",
        },
        {
          id: "q146",
          question: "Which joint is most affected in early OA?",
          choices: ["Spine", "Hips", "Knees", "Fingers"],
          answer: 2,
          rationale: "Knees are often affected early in OA.",
        },
        {
          id: "q147",
          question: "Rheumatoid arthritis is classified as a:",
          choices: [
            "Local infection",
            "Chronic autoimmune disorder",
            "Degenerative joint disease",
            "Endocrine disorder",
          ],
          answer: 1,
          rationale: "RA is a chronic autoimmune disorder.",
        },
        {
          id: "q148",
          question: "The nurse should assess for which systemic manifestation in RA?",
          choices: ["Fever", "Hypertension", "Hyperglycemia", "Hypercalcemia"],
          answer: 0,
          rationale: "Fever and fatigue are common systemic manifestations.",
        },
        {
          id: "q149",
          question:
            "A 65-year-old with joint pain reports morning stiffness lasting over 1 hour. This suggests:",
          choices: ["Osteoarthritis", "Tendinitis", "Rheumatoid arthritis", "Bursitis"],
          answer: 2,
          rationale: "Morning stiffness lasting >1 hour is characteristic of RA.",
        },
        {
          id: "q150",
          question:
            "Patient Kirby is being assessed by the nurse for signs and symptoms of Bulimia. The nurse's assessment reveals a history of binging and purging for the last six months. The nurse continues with her assessment. During the assessment for patient Kirby, the nurse notices scrapes on patient Kirby's knuckles and knows that this sign is called?",
          choices: ["Cullen's sign", "Russell's sign", "Grey Turner's sign", "Homan's sign"],
          answer: 1,
          rationale: "Russell's sign is calluses on the knuckles from self-induced vomiting.",
        },
        {
          id: "q151",
          question:
            "Patient Kirby would be most at risk for developing what electrolyte imbalance?",
          choices: ["Hyperkalemia", "Hypokalemia", "Hypercalcemia", "Hypocalcemia"],
          answer: 1,
          rationale: "Bulimia causes hypokalemia from vomiting.",
        },
        {
          id: "q152",
          question: "What is the criteria to be diagnosed for bulimia?",
          choices: [
            "Binging and purging once a week for two months",
            "Binging and purging once a week for three months",
            "Binging and purging twice a week for two months",
            "Binging and purging twice a week for three months",
          ],
          answer: 3,
          rationale:
            "Diagnosis requires binging and purging at least once a week for three months.",
        },
        {
          id: "q153",
          question:
            "Patient Fischl is in the psychiatric ward and has been undergoing treatment after being diagnosed with schizophrenia. Nurse Bennett has been assigned as patient Fischl's primary nurse. Patient Fischl presents with positive symptoms of schizophrenia. Nurse should expect the following statements except?",
          choices: [
            '"The bird by the window wants to say something to me"',
            '"I am a princess so be careful when performing procedures on me"',
            '"I don\'t find my old hobbies as enjoyable as before"',
            '"The nurses in this hospital are trying to hurt me"',
          ],
          answer: 2,
          rationale: "Anhedonia (loss of interest) is a negative symptom, not positive.",
        },
        {
          id: "q154",
          question:
            "Patient Fischl has been telling patient Bennett that there are feathers all over her body and makes her feel itchy. Which of the following should nurse Bennett do?",
          choices: [
            "Refer patient Fischl for possible medication reactions",
            "Ask the physician to increase the dosage of the patient's medication",
            "Assess patient Fischl for any physical problems causing the itch",
            "Allow patient Fischl to verbalize these somatic symptoms",
          ],
          answer: 2,
          rationale: "The nurse should first rule out a physical cause for the sensation.",
        },
        {
          id: "q155",
          question:
            "Nurse Bennett reviewed patient Fischl's medication history and found out that she has been on anti-psychotics for nearly 6 months. Patient Fischl is at most at risk for what condition if she continues using her anti-psychotics?",
          choices: [
            "Neuroleptic malignant syndrome",
            "Pseudoparkinsonism",
            "Extra-pyramidal syndrome",
            "Tardive dyskinesia",
          ],
          answer: 3,
          rationale: "Tardive dyskinesia is a late-onset side effect of antipsychotics.",
        },
        {
          id: "q156",
          question: "What neurotransmitters is affected in schizophrenia?",
          choices: ["GABA", "Serotonin", "Dopamine", "Norepinephrine"],
          answer: 2,
          rationale: "Schizophrenia is associated with dopamine dysregulation.",
        },
        {
          id: "q157",
          question:
            "Patient Fischl has been taking Haloperidol, a first-generation anti-psychotic. Nurse Bennett knows that this drug class works by:",
          choices: [
            "Decreasing dopamine and serotonin",
            "Stabilizing levels of dopamine in the body",
            "Decreasing dopamine",
            "Providing a steady dose of dopamine over a period of time",
          ],
          answer: 2,
          rationale: "First-generation antipsychotics block dopamine receptors.",
        },
        {
          id: "q158",
          question:
            "If patient Fischl's psychosis lasts for more than 1 month but subsides before 6 months, nurse Bennett would classify this as?",
          choices: [
            "Brief psychotic disorder",
            "Schizophreniform",
            "Schizophrenia",
            "Schizotypal disorder",
          ],
          answer: 1,
          rationale: "Schizophreniform disorder lasts 1-6 months.",
        },
        {
          id: "q159",
          question:
            "A few weeks after undergoing treatment, patient Fischl presents with avolition. Nurse Bennett knows that this is:",
          choices: [
            "Inability to feel pleasure",
            "Inability to form social relationships",
            "Lack of speech",
            "Lack of motivation",
          ],
          answer: 3,
          rationale: "Avolition is a lack of motivation.",
        },
        {
          id: "q160",
          question:
            "When providing health teaching to patient Fischl regarding her medications, nurse Bennett should instruct the following except?",
          choices: [
            "Standing up immediately after laying down for a long time",
            "Taking medications as prescribed",
            "Reporting side effects to the doctor",
            "Avoiding alcohol",
          ],
          answer: 0,
          rationale: "Standing up quickly can cause orthostatic hypotension.",
        },
        {
          id: "q161",
          question:
            "Nurse Bennett noticed that patient Fischl presented with symptoms of extrapyramidal symptoms caused by her medications. Nurse Bennet will expect the following except?",
          choices: [
            "Involuntary muscle contractions",
            "Catatonia",
            "Shuffling gait",
            "Restlessness or pacing",
          ],
          answer: 1,
          rationale: "Catatonia is not an EPS symptom.",
        },
        {
          id: "q162",
          question:
            "Nurse Barbara is an emergency nurse and is experienced with handling patients with different levels of anxiety. One day, a road accident occurs and causes a surge of patients in the emergency room. A patient is brought in the emergency department who seems to be the only survivor in the vehicle she was in. Upon assessment, valium is ordered; nurse Barbara knows that this is given to patients with what level of anxiety?",
          choices: ["Mild", "Moderate", "Severe", "Panic"],
          answer: 3,
          rationale: "Valium is often used for panic level anxiety.",
        },
        {
          id: "q163",
          question:
            "Another patient is brought to the emergency department. Despite having a non-life threatening injury, the patient is found pacing and can only focus on answering a few of the assessment questions. What level of anxiety does the patient present?",
          choices: ["Mild", "Moderate", "Severe", "Panic"],
          answer: 2,
          rationale: "Pacing and difficulty focusing are signs of severe anxiety.",
        },
        {
          id: "q164",
          question:
            "A patient comes to the emergency department with severe difficulty of breathing. The patient verbalizes that she hears a loud ringing in her ear, aggressive, and cannot focus nor answer any of the questions nurse Barbara is asking. What level of anxiety is this?",
          choices: ["Mild", "Moderate", "Severe", "Panic"],
          answer: 3,
          rationale: "These are signs of panic-level anxiety.",
        },
        {
          id: "q165",
          question:
            "What neurotransmitter is affected in patients diagnosed with anxiety disorders?",
          choices: ["GABA", "Serotonin", "Dopamine", "Norepinephrine"],
          answer: 0,
          rationale: "Anxiety is associated with GABA dysregulation.",
        },
        {
          id: "q166",
          question:
            "Nurse Barbara is preparing to establish rapport with a patient with severe levels of anxiety. Which of the following should she do initially?",
          choices: [
            "Share an activity with the client",
            "Provide feedback to the patient's condition",
            "Instruct the other nurses to have frequent interactions with the patient",
            "Provide the patient with personal space",
          ],
          answer: 3,
          rationale: "Providing personal space is important for establishing trust.",
        },
        {
          id: "q167",
          question:
            "A patient comes to the hospital asking about his medications for ADHD. He asked what is the generic name for Ritalin as he cannot afford this brand of medication. The nurse would be correct to state which generic name?",
          choices: [
            "Modobemide",
            "Methylphenidate hydrochloride",
            "Tramadol hydrochloride",
            "Mirtazapine",
          ],
          answer: 1,
          rationale: "Ritalin's generic name is methylphenidate.",
        },
        {
          id: "q168",
          question:
            "Patient Furina is undergoing treatment for her bipolar disorder. She comes into the clinic and asks questions about her medications before starting treatment at home. As patient Furina's psychiatric nurse, the nurse knows that which of the following is the drug of choice for bipolar disorder?",
          choices: ["Selegreline", "Eskalith", "Zolof", "Ritalin"],
          answer: 1,
          rationale: "Lithium (Eskalith) is the drug of choice for bipolar disorder.",
        },
        {
          id: "q169",
          question:
            "Patient Furina mentions that her psychiatrist noticed that patient Furina's disorder was dysthymic in nature and asks what does it mean. The nurse would state that the disorder is marked by:",
          choices: [
            "Major depression with hypomanic episodes",
            "Manic episodes with or without major depression",
            "Persistent mild depression",
            "Alternating periods of depressed moods and hypomania",
          ],
          answer: 2,
          rationale: "Dysthymia is persistent mild depression.",
        },
        {
          id: "q170",
          question:
            "When taking lithium, what precaution should the nurse give to Furina regarding sodium intake?",
          choices: [
            "Keep sodium level higher than normal",
            "Maintain normal level of sodium",
            "Limit sodium intake",
            "Sodium intake has no effect on lithium intake",
          ],
          answer: 1,
          rationale: "Sodium levels should be maintained normally.",
        },
        {
          id: "q171",
          question:
            "When should Furina have her lithium levels checked in the beginning of her treatment?",
          choices: [
            "Once every three days",
            "Once every five days",
            "Once every week",
            "Once every two weeks",
          ],
          answer: 0,
          rationale: "Lithium levels are checked frequently at the start of treatment.",
        },
        {
          id: "q172",
          question:
            "The nurse expects what potential electrolyte imbalance in a patient with Addison's Disease?",
          choices: ["Hypernatremia", "Hyperkalemia", "Hyperphosphatemia", "Hyperaldosteronism"],
          answer: 1,
          rationale: "Addison's disease causes hyperkalemia due to aldosterone deficiency.",
        },
        {
          id: "q173",
          question:
            "The nurse educates the patient with Addison's Disease for lifelong therapy of?",
          choices: ["aldosterone", "mineralocorticoids", "levothyroxine", "catecholamines"],
          answer: 1,
          rationale:
            "Addison's disease requires lifelong corticosteroid (mineralocorticoid) replacement.",
        },
        {
          id: "q174",
          question:
            "Priority health education for patients with adrenal insufficiency taking corticosteroids includes which of the following?",
          choices: [
            "wearing of a MedicAlert bracelet",
            "avoidance of driving and operating on heavy machinery",
            "not stopping the medication abruptly",
            "All of the above",
          ],
          answer: 2,
          rationale: "Corticosteroids should not be stopped abruptly.",
        },
        {
          id: "q175",
          question:
            "All of the following are physical characteristics seen from a patient with Addison's disease, EXCEPT?",
          choices: [
            "bronze-colored skin",
            "bipedal edema",
            "weight loss",
            "hyperpigmentation of skin",
          ],
          answer: 1,
          rationale:
            "Bipedal edema is not a sign of Addison's disease; it's associated with Cushing's.",
        },
        {
          id: "q176",
          question:
            "A patient with an Addisonian crisis had undergone an ECG. Which of the following waves can be expected from a patient with Addison's Disease?",
          choices: [
            "abnormal U wave",
            "shortened QRS complex",
            "shortened PR interval",
            "peaked T waves",
          ],
          answer: 3,
          rationale: "Hyperkalemia from Addison's causes peaked T waves.",
        },
        {
          id: "q177",
          question:
            "The staff nurse is asking a student about the gland that is responsible for the secretion of corticosteroids in the human body. The student is correct when he/she answers:",
          choices: ["adrenal cortex", "adrenal medulla", "pituitary gland", "hypothalamus"],
          answer: 0,
          rationale: "The adrenal cortex secretes corticosteroids.",
        },
        {
          id: "q178",
          question:
            "The nurse expects which of the following findings in a patient with Cushing's Disease?",
          choices: [
            "1. Hypotension\n2. Hyperglycemia\n3. Hypokalemia\n4. Hypernatremia",
            "2 and 3",
            "1, 2, 4",
            "2, 3, 4",
            "1, 2, 3, 4",
          ],
          answer: 2,
          rationale: "Cushing's causes hyperglycemia, hypokalemia, and hypernatremia.",
        },
        {
          id: "q179",
          question:
            "The following nursing diagnoses apply to a patient with Cushing's Disease, except?",
          choices: [
            "Disturbed Body Image",
            "Risk for Infection",
            "Risk for Injury",
            "Fluid Volume Deficit",
          ],
          answer: 3,
          rationale: "Cushing's causes fluid volume excess, not deficit.",
        },
        {
          id: "q180",
          question:
            "Which additional assessment finding would lead the nurse to suspect that the client has Cushing's syndrome rather than obesity?",
          choices: [
            "large thighs and upper arms",
            "pendulous abdomen and large hips",
            "abdominal striae and ankle enlargement",
            "posterior neck fat pad and thin extremities",
          ],
          answer: 3,
          rationale: "Buffalo hump (fat pad) and thin extremities are signs of Cushing's.",
        },
        {
          id: "q181",
          question:
            "Which statement by the client indicates an understanding of the possible side effects of Prednisone therapy?",
          choices: [
            '"I should limit my potassium intake because hyperkalemia is a side-effect of this drug."',
            '"I must take this medicine exactly as my doctor ordered it. I shouldn\'t skip doses."',
            '"This medicine will protect me from getting any colds or infections."',
            '"My incision will heal much faster because of this drug."',
          ],
          answer: 1,
          rationale: "Corticosteroids should be taken exactly as prescribed and not skipped.",
        },
        {
          id: "q182",
          question:
            "There are 17 Sustainable Developmental Goals developed by the United Nations. Clean Water and Sanitation is under what number?",
          choices: ["Seven", "Three", "Six", "Eleven"],
          answer: 2,
          rationale: "SDG 6 is Clean Water and Sanitation.",
        },
        {
          id: "q183",
          question:
            "A patient undergoes endotracheal intubation and positive pressure ventilation. The primary nursing responsibility of the nurse at this time is?",
          choices: [
            "Prepare the patient for emergency surgery",
            "Assess the patient's response to the equipment",
            "Maintain the sterility of the ventilation system",
            "Facilitate verbal communication",
          ],
          answer: 1,
          rationale: "Assessing the patient's response to the ventilator is the priority.",
        },
        {
          id: "q184",
          question: "The primary responsibility of a community health nurse is:",
          choices: [
            "Health teaching",
            "Implement health policies",
            "Evaluate health programs",
            "Solve health issues in the community",
          ],
          answer: 0,
          rationale: "Health teaching is the primary role of the community health nurse.",
        },
        {
          id: "q185",
          question:
            "You ensure the appropriateness and safety of your nursing interventions while caring for various client groups by:",
          choices: [
            "identifying the correct nursing diagnosis and plan",
            "referring the care to physicians, and other members of the health care team",
            "creating plans of care for clients",
            "making a thorough assessment of each client's needs and problems",
          ],
          answer: 3,
          rationale: "Thorough assessment is the foundation for safe, appropriate care.",
        },
        {
          id: "q186",
          question:
            "Using Patricia Benner's stages of nursing expertise, you are an entry-level nurse. You will rank yourself as a/an?",
          choices: ["Advanced Beginner", "Proficient Nurse", "Novice Nurse", "Competent Nurse"],
          answer: 2,
          rationale: "An entry-level nurse is a Novice.",
        },
        {
          id: "q187",
          question:
            "The most appropriate nursing intervention to facilitate the client's acceptance of a change in body image would be to:",
          choices: [
            "encourage dependence",
            "establish a therapeutic relationship",
            "joke with the client",
            "establish a social relationship",
          ],
          answer: 1,
          rationale: "A therapeutic relationship is key to facilitating acceptance.",
        },
        {
          id: "q188",
          question:
            "To provide safe, quality nursing care to various clients in any setting, the most important tool of the nurse is:",
          choices: [
            "critical thinking to decide appropriate nursing actions",
            "understanding of various nursing diagnoses",
            "observation skills for data collection",
            "possession of scientific knowledge about client needs",
          ],
          answer: 0,
          rationale: "Critical thinking is the most important tool.",
        },
        {
          id: "q189",
          question:
            "The Universal Health Care Act mandates the institutionalization of health technology assessment as a fair and transparent priority setting recommended to the DOH and PhilHealth. This act is also known as?",
          choices: ["R.A. 11233", "R.A. 9173", "R.A. 11223", "R.A. 10354"],
          answer: 2,
          rationale: "RA 11223 is the Universal Health Care Act.",
        },
        {
          id: "q190",
          question:
            "Policies and Standards for Bachelor of Science in Nursing Program are according to which of the following CHED memorandum order?",
          choices: [
            "CMO No. 19 s. 2010",
            "CMO No. 12 s. 2007",
            "CMO No. 14 s. 2009",
            "CMO No. 12 s. 2006",
          ],
          answer: 0,
          rationale: "CMO No. 19 s. 2010 is the latest for BSN program.",
        },
        {
          id: "q191",
          question:
            "All of the following are included in the principles of Primary Health Care, except?",
          choices: ["Affordability", "Accessibility", "Accountability", "Acceptability"],
          answer: 2,
          rationale: "Accountability is not a principle of PHC.",
        },
        {
          id: "q192",
          question:
            "Included in the elements of Primary Health Care is the Expanded Program on Immunization which requires infants/children to be administered with six-vaccine-preventable disease which includes all of the following, except?",
          choices: ["Poliomyelitis", "Measles", "Pertussis", "Antibodies"],
          answer: 3,
          rationale: "Antibodies are not a vaccine-preventable disease.",
        },
        {
          id: "q193",
          question:
            "Which of the following are considered as barangay health workers according to the Primary Health Care in the Philippines?",
          choices: [
            "1. Health auxiliary volunteers\n2. Traditional birth attendants\n3. Public Health Nurse\n4. Traditional Healers",
            "1 and 3",
            "1, 2, and 3",
            "2 only",
            "1, 2 and 4",
          ],
          answer: 3,
          rationale:
            "Barangay health workers include health auxiliary volunteers, traditional birth attendants, and traditional healers.",
        },
        {
          id: "q194",
          question:
            "Supply of essential drugs is also one of the elements of Primary Health Care, upon this, The Generics Act was established. This is under which Republic Act?",
          choices: ["R.A. 6675", "R.A. 9165", "R.A. 6657", "R.A. 9569"],
          answer: 0,
          rationale: "RA 6675 is the Generics Act.",
        },
        {
          id: "q195",
          question:
            "The 2 Core Principles of Primary Health Care are active partnership with the people and empowerment. Empowerment is to:",
          choices: [
            "increase dependency on health care workers",
            "transfer knowledge, skills, and attitude",
            "voice out opinions of the community",
            "make resources available for the people",
          ],
          answer: 1,
          rationale: "Empowerment involves transferring knowledge and skills.",
        },
        {
          id: "q196",
          question:
            "When planning care for a client diagnosed with Cushing's syndrome, the nurse would include which intervention to prevent a common complication of this disorder:",
          choices: [
            "Monitoring glucose levels",
            "Encouraging rigorous exercise",
            "Monitoring epinephrine levels",
            "Encouraging visits from friends",
          ],
          answer: 0,
          rationale: "Cushing's causes hyperglycemia, so glucose monitoring is important.",
        },
        {
          id: "q197",
          question:
            "The nurse is assessing a client diagnosed with Addison's disease for signs of hyperkalemia. Which sign/symptom would the nurse observe with this electrolyte imbalance?",
          choices: [
            "Polyuria",
            "Cardiac dysrhythmias",
            "Dry mucous membranes",
            "Prolonged bleeding time",
          ],
          answer: 1,
          rationale: "Hyperkalemia can cause cardiac dysrhythmias.",
        },
        {
          id: "q198",
          question:
            "A client receiving fludrocortisone acetate for the treatment of Addison's disease is monitored for what therapeutic response from this medication?",
          choices: [
            "Promote electrolyte balance",
            "Stimulate thyroid production",
            "Stimulate the immune response",
            "Stimulate thyrotropin production",
          ],
          answer: 0,
          rationale: "Fludrocortisone promotes electrolyte balance.",
        },
        {
          id: "q199",
          question:
            "A client is recently diagnosed with Cushing's Disease, and the nurse monitors the client for which manifestation most likely occurring with this diagnosis:",
          choices: ["Hypovolemia", "Mood Disturbances", "Deficient Fluid Volume", "Hypoglycemia"],
          answer: 1,
          rationale: "Mood disturbances are common in Cushing's.",
        },
        {
          id: "q200",
          question:
            "To better anticipate alcohol withdrawal in a person who suddenly stopped drinking alcohol, you know that symptoms of withdrawal usually begin how many hours or days after?",
          choices: [
            "12 to 18 hours after cessation of alcohol intake",
            "1 to 2 days after cessation of alcohol intake",
            "4 to 12 hours after cessation of alcohol intake",
            "18 to 24 hours after cessation of alcohol intake",
          ],
          answer: 2,
          rationale: "Alcohol withdrawal symptoms begin 4-12 hours after the last drink.",
        },
        {
          id: "q201",
          question:
            "How can you differentiate a patient undergoing alcohol withdrawal from other patients taking other kinds of substance abuse?",
          choices: [
            "Fine hand tremors, sweating, elevated blood pressure, nausea, vomiting",
            "Sweating, insomnia, coarse hand tremors, elevated blood pressure, nausea",
            "Marked dysphoria, fatigue, vivid and unpleasant dreams, insomnia",
            "Anxiety, restlessness, aching back and legs, nausea, dysphoria",
          ],
          answer: 0,
          rationale:
            "Alcohol withdrawal is characterized by fine tremors, sweating, and elevated BP.",
        },
        {
          id: "q202",
          question:
            "For safe withdrawal from alcohol intake, you anticipate the physician to prescribe which of the following medications?",
          choices: ["Prozac", "Fluoxetine", "Ativan", "Naloxone"],
          answer: 2,
          rationale: "Benzodiazepines like Ativan are used for alcohol withdrawal.",
        },
        {
          id: "q203",
          question:
            "Another patient was rushed to the hospital due to the following manifestations: (+) impaired motor coordination, laughing inappropriately, has short-term memory, has impaired judgment, and has distortions of time and perceptions. You observe that the patient has conjunctival injection and tachycardia. You expect that the patient has been taking which substance for abuse?",
          choices: ["Cocaine", "Cannabis", "Opioid", "Amphetamine"],
          answer: 1,
          rationale: "Cannabis causes conjunctival redness and impaired coordination.",
        },
        {
          id: "q204",
          question:
            "Excessive use of the substance used in the previous number can cause delirium, however, the relative of the patient asked you about this substance overdose. What is the correct response of the nurse?",
          choices: [
            "We monitor for symptoms of overdose in this substance as it can be very dangerous to the patient.",
            "Do not worry about it. It is under control.",
            "Although excessive use can cause delirium, it can be treated symptomatically. Overdoses of this substance do not occur.",
            "Overdoses can lead to serious complications, so we have the patient monitored every hour.",
          ],
          answer: 2,
          rationale: "Cannabis overdose is rare and usually managed symptomatically.",
        },
        {
          id: "q205",
          question:
            "A patient diagnosed with schizoaffective disorder is admitted for social skills training. Which information should be included in the teaching plan of the nurse?",
          choices: [
            "The adverse reactions of prescribed medications.",
            "Deep breathing techniques to decrease stress and aggression triggers.",
            "Making eye contact when communicating with other people.",
            "Characteristics of being a leader in a group.",
          ],
          answer: 2,
          rationale: "Making eye contact is a social skills training topic.",
        },
        {
          id: "q206",
          question:
            "One of the main treatments for schizophrenia involves psychopharmacology. You are asked by the relative of the patient about the medications of the patient. No further teaching is necessary when the nurse explains which of the following?",
          choices: [
            "Antipsychotic medications, also called neuroleptics, are prescribed primarily to cure the illness.",
            "The conventional antipsychotic medications are both dopamine and serotonin antagonists.",
            "The atypical antipsychotic medications not only diminish positive symptoms, but also lessen the negative signs.",
            "The vehicle for depot injections is sodium, therefore, medications are absorbed slowly over time in the client's system (usually 2 to 4 weeks, eliminating the need for daily oral medications)",
          ],
          answer: 2,
          rationale: "Atypicals treat both positive and negative symptoms.",
        },
        {
          id: "q207",
          question:
            "Extrapyramidal side effects (EPS) are reversible disorders induced by neuroleptic medications: including dystonic reactions, pseudo-parkinsonism, and akathisia. You observed that one of your patients is exhibiting the following: (+) spasm in neck muscle, (+) oculogyric crisis, (+) tongue protrusion. You anticipate which of the following to be ordered?",
          choices: [
            "Administer Diphenhydramine and Prolixin",
            "Stop all antipsychotic medications.",
            "Increase fluid intake",
            "Administer Benadryl and Cogentin",
          ],
          answer: 3,
          rationale: "Benadryl and Cogentin are used to treat EPS.",
        },
        {
          id: "q208",
          question:
            "One of your patients, a 17-year-old patient diagnosed with paranoid schizophrenia experiences command hallucinations to cause harm to others. The parents ask you about where do these voices come from, which is the appropriate reply?",
          choices: [
            '"Your child has too little serotonin in the brain causing delusions and hallucinations."',
            '"Your child has a chemical imbalance of the brain which leads to altered thoughts."',
            '"Your child\'s hallucinations are caused by medication interactions."',
            '"Your child\'s abnormal hormonal changes have precipitated auditory hallucinations."',
          ],
          answer: 1,
          rationale: "Schizophrenia is a result of a chemical imbalance in the brain.",
        },
        {
          id: "q209",
          question:
            "A fearful and paranoid patient has the potential to cause harm to self or others. Which nursing action must be PRIORITIZED to maintain the safety of the patient and the ward?",
          choices: [
            "Assess for medication side effects and noncompliance.",
            "Interpret attempts at communicating with other patients.",
            "Assess triggers for bizarre, inappropriate behaviors with others.",
            "Note escalating behaviors and intervene immediately.",
          ],
          answer: 3,
          rationale: "The priority is to intervene immediately for escalating behaviors.",
        },
        {
          id: "q210",
          question:
            "The bipolar disorder, previously called manic-depressive illness, is one of the primary mood disorders that is characterized by having mood cycles between extremes of mania and depression. Which of the following correctly defines the illness?",
          choices: [
            "Some patients exhibit delusions and hallucinations during the manic episode.",
            "Hypomania is the distinct period during the person is in an abnormally and persistently elevated, expansive, or irritable.",
            "Pressured speech, flight of ideas, inflated self-esteem or grandiosity may accompany the depression episode.",
            "Hypomania is a period of abnormally and persistently elevated, expansive, or irritable mood lasting for 6 days.",
          ],
          answer: 0,
          rationale: "Psychotic features can occur in severe mania.",
        },
        {
          id: "q211",
          question:
            "You are differentiating the types and related disorders of bipolar disorder, which of the following needs further teaching when mentioned by one of the relatives?",
          choices: [
            "Bipolar I disorder is described as one or more manic or mixed episodes usually accompanied by major depressive episodes.",
            "Bipolar II disorder is described as one or more major depressive episodes accompanied by at least one hypomanic episode.",
            "Dysthymic disorder is characterized by at least 2 years of depressed mood for more days, but less severe symptoms that do not meet the criteria for a major depressive episode.",
            "Cyclothymic disorder is characterized by 1 year of numerous periods of both manic symptoms that do not meet the criteria for bipolar disorder.",
          ],
          answer: 3,
          rationale: "Cyclothymia is characterized by 2 years, not 1.",
        },
        {
          id: "q212",
          question:
            "A nurse reviews the laboratory results of a patient suspected of having major depressive disorder, which of the following results would potentially RULE OUT this diagnosis?",
          choices: [
            "Potassium (K+) level of 4.2 mEq/L",
            "Sodium (Na+) level of 140 mEq/L",
            "Calcium (Ca2+) level of 9.5 mg/dL",
            "Thyroid-stimulating hormone (TSH) level of 6.2 U/ml",
          ],
          answer: 3,
          rationale: "High TSH indicates hypothyroidism, which can cause depression.",
        },
        {
          id: "q213",
          question:
            "You hear the physician explaining that this antidepressant produces few sedating, anticholinergic, and cardiovascular side effects that increases the compliance of the patients in taking their medications. You anticipate which of the medications to be prescribed by the physician?",
          choices: ["Cymbalta", "Tofranil", "Prozac", "Nardil"],
          answer: 2,
          rationale: "Prozac (fluoxetine) is an SSRI with fewer side effects than TCAs or MAOIs.",
        },
        {
          id: "q214",
          question:
            "You have a patient admitted due to symptoms of major depressive disorder. During the handover, which of the following condition(s) will make you question the prescription of tricyclic antidepressant?",
          choices: [
            "I. Liver severe impairment\nII. Post-myocardial infarction (acute recovery phase)\nIII. Concurrently with MAOIs\nIV. Glaucoma\nV. Diabetes mellitus\nVI. Hypothyroidism",
            "I, II, III, V",
            "I, II, III, IV, VI",
            "I, II, III, IV, V",
            "I, II, III, IV, V, VI",
          ],
          answer: 1,
          rationale: "All are contraindications or precautions except diabetes.",
        },
        {
          id: "q215",
          question:
            "It is important to have meaningful contact with the clients who have mental illness, especially to those who have difficulty in interacting with other people. Which of the following statements when said by the nurse may need further teaching by the supervisor?",
          choices: [
            "I am going now, I will be back in an hour to see you again.",
            "I'm going to sit with you for as long as you need me to. If you would like to talk, please tell me.",
            "How are you today, Shiela?",
            "Tell me more about what happened that day you felt hopeless?",
          ],
          answer: 2,
          rationale:
            "Using the client's name is acceptable; however, 'How are you?' can be a closed-ended question. The other options demonstrate better therapeutic communication.",
        },
        {
          id: "q216",
          question:
            "You are assigned with a client who has depression for a week now. She is observed to be easily overwhelmed, which of the following tasks will you give or ask her?",
          choices: [
            "It's time to get dressed now.",
            "What would like to do for this week?",
            "Here are your pants, put them on.",
            "None of the above.",
          ],
          answer: 0,
          rationale: "Breaking tasks down to simple, direct requests is helpful.",
        },
        {
          id: "q217",
          question:
            "A patient with bipolar disorder is experiencing a depressive episode, she declined to engage in the morning activities of the ward. She said that she is not interested and has no energy for it. As a nurse, what would you say to the patient to promote participation?",
          choices: [
            "Okay, then you can join us for the afternoon activities instead. Would you like that?",
            "You don't seem like you're very tired, let's try to join the morning activities.",
            "Tell me more about your feelings.",
            "I know you feel like staying in bed, but it is time to get up for breakfast.",
          ],
          answer: 3,
          rationale: "Gentle but firm encouragement is needed for a depressed patient.",
        },
        {
          id: "q218",
          question:
            "One of the clients who is in the manic phase has been invading the other clients' personal space for multiple times. How can you establish limit setting with this patient?",
          choices: [
            "Can you please stay away from other patients, they are feeling uncomfortable.",
            "It is unacceptable to hug other clients. You may talk to others, but do not touch them.",
            "Tell me more about the reason you stay close with the other clients.",
            "Do not talk to other clients.",
          ],
          answer: 1,
          rationale: "Clear limit setting with consequences is important.",
        },
        {
          id: "q219",
          question:
            "In an acute manic episode, a client was starting to undress in the living room. How can you handle this situation?",
          choices: [
            "Shane, let's go to your room and find a sweater.",
            "What are you doing, Shane?",
            "How can you do this in the living room?",
            "Do not do this, Shane. This is inappropriate.",
          ],
          answer: 0,
          rationale: "Redirecting the patient is the most therapeutic.",
        },
        {
          id: "q220",
          question:
            "Attention deficit hyperactivity disorder (ADHD) is usually identified and diagnosed when the child begins preschool or school age. By the time the child starts school, symptoms of ADHD begin to interfere significantly with behavior and performance. One parent who has child diagnosed with ADHD asked you about the treatment available for this condition, what is the correct response to the parent?",
          choices: [
            "ADHD is a chronic illness, the most effective treatment is combined pharmacotherapy with behavioral, psychosocial, and educational interventions.",
            "The goal of treatment in ADHD is to reduce hypoactivity, to increase the child's attention so that he can grow and develop normally.",
            "Megavitamin therapy alone is effective treatment for ADHD.",
            "Only oral medications are available for ADHD treatments.",
          ],
          answer: 0,
          rationale: "Combined treatment is most effective for ADHD.",
        },
        {
          id: "q221",
          question:
            "Medications do not automatically improve the child's academic performance or ensure that they can make friends already. Which of the following techniques can be used for behavioral strategies to help the child master appropriate behaviors with other kids?",
          choices: ["Time out", "Therapeutic play", "Shadowing", "Praise/rewards"],
          answer: 3,
          rationale: "Positive reinforcement is an effective behavioral strategy.",
        },
        {
          id: "q222",
          question:
            "When asked about the usual characteristics of clients with ADHD, which of the following is NOT true?",
          choices: [
            "Generally, their self-esteem is low due to not being successful at school, or not having to develop many friends.",
            "The child cannot sit still in a chair, squirms, and wiggles while trying to do so during an interview.",
            "There are generally no impairments in the area of thought process and content.",
            "Children with ADHD usually exhibit good judgment and often think too much before acting.",
          ],
          answer: 3,
          rationale: "ADHD children often have poor judgment and act impulsively.",
        },
        {
          id: "q223",
          question:
            "When caring for a pre-school client diagnosed with ADHD, which of the following is the PRIORITY nursing diagnosis?",
          choices: [
            "Compromised Family Coping",
            "Risk for Injury",
            "Impaired Social Interaction",
            "Ineffective Role Performance",
          ],
          answer: 1,
          rationale: "Risk for injury is the priority due to impulsivity and hyperactivity.",
        },
        {
          id: "q224",
          question:
            "Ritalin (Methylphenidate) is a stimulant used to treat ADHD. Which of the following is the PRIORITY nursing consideration while using this drug?",
          choices: [
            "Give regular tables AFTER meals.",
            "Monitor for elevated liver function tests and appetite suppression.",
            "Monitor for appetite suppression and growth delays.",
            "Use calorie-free beverages to relieve dry mouth.",
          ],
          answer: 2,
          rationale: "Growth delays and appetite suppression are key concerns.",
        },
        {
          id: "q225",
          question:
            "Personality can be defined as an ingrained enduring pattern of behaving and relating to self, others, and the environment; including perceptions, attitudes, and emotions. Personality disorders are diagnosed when personality traits become inflexible, maladaptive, and significantly interfere with how a person functions in a society. What pertains to having disregard for rights of others, rules, and laws?",
          choices: ["Antisocial", "Schizoid", "Schizotypal", "Narcissistic"],
          answer: 0,
          rationale: "Antisocial personality disorder is characterized by disregard for rights.",
        },
        {
          id: "q226",
          question:
            "One of your patients appear aloof and withdrawn, remains a considerable physical distance from the nurse. You see that the patient appears guarded. Which of the following defense mechanisms would you expect this patient to have?",
          choices: ["Projection", "Denial", "Rationalization", "Displacement"],
          answer: 0,
          rationale: "Projection is common in paranoid or guarded patients.",
        },
        {
          id: "q227",
          question:
            "One of the patients, dressed in odd appearance, exhibit pervasive patterns of social and interpersonal deficits marked by acute discomfort with reduced capacity for close relationships. They also have cognitive or perceptual distortions and behavioral eccentricities. When making a plan, what is the focus of nursing care?",
          choices: [
            "Development of self-care and social skills, improved functioning in the community.",
            "Approach in formal, business-like manner and refrain from social chitchat or jokes.",
            "Help client validate ideas before taking actions.",
            "Able to identify acceptable and expected behaviors.",
          ],
          answer: 0,
          rationale: "Focus on developing social and self-care skills.",
        },
        {
          id: "q228",
          question:
            "In promoting responsible behavior in patients with antisocial personality disorder, LIMIT SETTING is essential to not be manipulated by the patient. Which of the following interventions pertains to limit setting with the patient?",
          choices: [
            "I. Stating the limit\nII. Decreased impulsivity\nIII. Identify consequences of exceeding the limit\nIV. Taking time-out from stressful situations\nV. Identify expected or acceptable behaviors\nVI. Identify barriers to role fulfillment",
            "I, II, III",
            "I, III, V",
            "I, III, IV, V",
            "All of the above",
          ],
          answer: 1,
          rationale:
            "Limit setting involves stating the limit, identifying consequences, and identifying acceptable behaviors.",
        },
        {
          id: "q229",
          question:
            "Borderline personality disorder is characterized by pervasive pattern of unstable interpersonal relationships, self-image, and affect. Which of the following is the prevailing mood and affect in these patients?",
          choices: ["Dysphoric", "False emotions", "Aloof", "None of the above"],
          answer: 0,
          rationale: "Dysphoria is common in borderline personality disorder.",
        },
        {
          id: "q230",
          question:
            "Autistic disorder, best known of the pervasive developmental disorders, is more prevalent in boys than girls. What are the characteristics you expect to see in children with this disorder?",
          choices: [
            "I. Little eye contact\nII. Limited interaction with parents or peers\nIII. Can engage in make-believe play\nIV. Foot flapping\nV. Express little to no mood",
            "I, II, III",
            "I, II, IV, V",
            "I, II, V",
            "I, II, IV",
          ],
          answer: 1,
          rationale:
            "Autism is characterized by little eye contact, limited interaction, foot flapping, and flat affect.",
        },
        {
          id: "q231",
          question:
            "The parents asked you about the goals of treatment in the management of autism. You are correct when you explain which of the following?",
          choices: [
            "To reduce stereotyped behaviors, promote learning and acquisition of language skills.",
            "Administration of pharmacologic treatment with antipsychotics such as haloperidol",
            "To reduce the long-term complications of the disorder",
            "To promote safety and diminish self-injury",
          ],
          answer: 0,
          rationale: "The goal is to reduce behaviors and promote learning.",
        },
        {
          id: "q232",
          question:
            "You encounter a parent with a daughter, aged 4 months, with a chief complaint of developing multiple deficits after a period of normal functioning. The child is observed to have lost motor skills and begins showing stereotyped movements instead. You anticipate which of the following to be the patient's diagnosis?",
          choices: [
            "Autism",
            "Rett's disorder",
            "Childhood disintegrative disorder",
            "Asperger's disorder",
          ],
          answer: 1,
          rationale: "Rett's disorder typically presents with regression in motor skills.",
        },
        {
          id: "q233",
          question:
            "Another parent complained that her 3-year-old son was observed to have marked regression in communication, language, social function, and motor skills after apparent normal growth and development. Autism has been ruled out by the attending physician, which of the following diagnosis do you anticipate being considered next?",
          choices: [
            "Rett's disorder",
            "Childhood disintegrative disorder",
            "Asperger's disorder",
            "None of the above",
          ],
          answer: 1,
          rationale: "Childhood disintegrative disorder is characterized by regression.",
        },
        {
          id: "q234",
          question:
            "An 8-year-old with attention deficit hyperactivity disorder is jumping off the bed onto a chair. Which should be the nurse's first step?",
          choices: [
            '"I need to talk to you."',
            '"Stop that right now."',
            '"You are going to hurt yourself."',
            '"Why are you jumping off the bed?"',
          ],
          answer: 1,
          rationale: "Safety is the priority; the nurse must stop the behavior immediately.",
        },
        {
          id: "q235",
          question:
            "Having one specific cause for eating disorders is unknown. Many risk factors contribute to developing certain eating disorders such as biologic vulnerability, developmental risks, family risk factors, and sociocultural risk factors. Which of the following risk factors most likely contributes to the development of Bulimia nervosa and not in Anorexia nervosa?",
          choices: [
            "Obesity",
            "Issues of having control and autonomy",
            "Chaotic family with loose boundaries",
            "Media focus on beauty, thinness, fitness",
          ],
          answer: 2,
          rationale: "Chaotic family dynamics are more common in bulimia.",
        },
        {
          id: "q236",
          question:
            "Aside from the psychological aspect of eating disorders, physiological manifestations are also apparent in clients with eating disorders. Which of the following will you NOT expect to see as a medical complication related to weight loss in these patients?",
          choices: ["Osteoporosis", "Hyperthyroidism", "Bradycardia", "Constipation"],
          answer: 1,
          rationale: "Hyperthyroidism is not a complication of weight loss.",
        },
        {
          id: "q237",
          question:
            "You are assigned to a patient diagnosed with anorexia nervosa. She is observed to begin to eat more food as the treatment progresses and her parents starts to get relieved of the improvement they see in their daughter. One night, you see her going to the bathroom, which of the following should you do?",
          choices: [
            "Supervise the patient.",
            "Let her go to the bathroom alone as she is already improving.",
            "Let another patient go to the bathroom with her.",
            "Ask the patient to open her mouth after going to the bathroom.",
          ],
          answer: 0,
          rationale: "Supervision is needed to prevent purging.",
        },
        {
          id: "q238",
          question:
            "In caring for patients with anorexia nervosa, which of the following medications is shown to be successful because of its antipsychotic effect on bizarre body image distortions and is associated with weight gain?",
          choices: [
            "Amitriptyline (Elavil)",
            "Olanzapine (Zyprexa)",
            "Antihistamine cyproheptadine (Periactin)",
            "Fluoxetine (Prozac)",
          ],
          answer: 1,
          rationale: "Olanzapine is an atypical antipsychotic associated with weight gain.",
        },
        {
          id: "q239",
          question:
            "In patients with Bulimia nervosa, they are mostly treated outpatient as long as purging and binging is not out of control. Which treatment has been found to be most effective and involves strategies to modify client's thinking and actions?",
          choices: [
            "Psychopharmacology",
            "Bulimic modification therapy",
            "Cognitive-behavioral therapy",
            "Flooding",
          ],
          answer: 2,
          rationale: "CBT is the most effective treatment for bulimia.",
        },
        {
          id: "q240",
          question:
            "To help a patient with bulimia nervosa, which of the following techniques is done to raise awareness about their behavior patterns, its relationship with eating patterns, moods, and situations by keeping a diary or journal?",
          choices: ["Self-monitoring", "Nutrition evaluation", "Cold turkey method", "Diet plan"],
          answer: 0,
          rationale: "Self-monitoring involves tracking behavior and moods.",
        },
        {
          id: "q241",
          question:
            "When establishing nutritional eating patterns with patients diagnosed with eating disorders, what are the nursing interventions that can be done?",
          choices: [
            "Sit with the client during meals and snacks.",
            "Let the patient sit with other patients.",
            "Observe the patient before meals.",
            "Weigh the patient daily in any clothing available.",
          ],
          answer: 0,
          rationale: "Sitting with the client during meals provides support.",
        },
        {
          id: "q242",
          question:
            "What should the nurse focus in initial interview of a client with Alzheimer's?",
          choices: [
            "Complete disorientation of person, place and time",
            "Onset, duration and progression of signs and symptoms",
            "Familial history of the disease",
            "Previous medical visits",
          ],
          answer: 1,
          rationale: "Focus on the onset and progression of symptoms.",
        },
        {
          id: "q243",
          question:
            "A client is diagnosed with Alzheimer's disease. The nurse advocates for the addition of which medication?",
          choices: ["Lorazepam", "Chlorpromazine", "Atorvastatin", "Donepezil"],
          answer: 3,
          rationale: "Donepezil is used to treat Alzheimer's.",
        },
        {
          id: "q244",
          question:
            "During the administration of a Mini-Mental Status Exam (MMSE), the healthcare provider asks the patient to copy a simple geometric shape. This part of the exam tests which of the following mental functions?",
          choices: [
            "Visual comprehension and praxis",
            "Attention span",
            "Math abilities",
            "Short term memory",
          ],
          answer: 0,
          rationale: "Copying a shape tests visual comprehension and praxis.",
        },
        {
          id: "q245",
          question:
            "Environment modification is essential in clients with Alzheimer's disease. The nurse must put the client in what room?",
          choices: [
            "Near the nurses' station.",
            "Semiprivate room",
            "Private room",
            "Isolation room",
          ],
          answer: 0,
          rationale: "Placing the client near the nurses' station allows for close monitoring.",
        },
        {
          id: "q246",
          question:
            "Nurse Zoe cares for a client with Borderline Personality Disorder. Which of the following behavior/s is/are consistent with this personality disorder?",
          choices: [
            "High regards to one's abilities.",
            "Recurrent suicidal behavior, gestures, or threats, or self-mutilating behavior.",
            "Little interest to intimate relationship",
            "Highly dependent on others.",
          ],
          answer: 1,
          rationale: "Self-mutilating behavior is a feature of BPD.",
        },
        {
          id: "q247",
          question:
            "Nurse Zoe knows that clients with Borderline Personality Disorder manifest splitting. This is manifested by which of the following behavior?",
          choices: [
            "Defining people as black or white; that is, wholly good or wholly bad.",
            "They have alter ego that reveals itself thus the word splitting.",
            "They make people fight and split a group to become enemies.",
            "None of the above.",
          ],
          answer: 0,
          rationale: "Splitting is black-and-white thinking.",
        },
        {
          id: "q248",
          question:
            "Nurse Zoe is caring for a client with Borderline personality disorder. Which of the following nursing diagnosis is the priority?",
          choices: [
            "Imbalanced Nutrition: Less than body requirements",
            "Risk for injury: towards self",
            "Disturbed body image",
            "Restlessness",
          ],
          answer: 1,
          rationale: "Risk for self-injury is the priority.",
        },
        {
          id: "q249",
          question:
            "Nurse Zoe is caring for a client with antisocial personality disorder. Which of the following traits will most likely surface during assessment?",
          choices: ["Unstable self-image", "Poor judgement", "Memory lapses", "Dependence"],
          answer: 1,
          rationale:
            "Poor judgment and impulsivity are hallmarks of antisocial personality disorder.",
        },
      ],
    },
    {
      id: "supplemental-c",
      title: "SUPPLEMENTAL C",
      description: "245 questions from the PNLE reviewer.",
      questions: [
        {
          id: "q1",
          question: "What is the building block of FHSIS?",
          choices: ["Output Reports", "Target Client List", "Reporting Form", "Treatment Record"],
          answer: 2,
          rationale: "The building block of FHSIS is the Reporting Form.",
        },
        {
          id: "q2",
          question: "Which of these are reported quarterly?",
          choices: [
            "Tally/Reporting Forms",
            "Treatment Record",
            "Output Report",
            "Target Client List",
          ],
          answer: 2,
          rationale: "Output Reports are reported quarterly.",
        },
        {
          id: "q3",
          question: "What is the definition of COPAR?",
          choices: [
            "Community Organizing Participative Action Research",
            "Community Organized Participatory Action Research",
            "Community Organizing Participatory Action Research",
            "Community Organizing Participatory Action Research",
          ],
          answer: 2,
          rationale: "COPAR stands for Community Organizing Participatory Action Research.",
        },
        {
          id: "q4",
          question: "Which of the following is a source of first-hand data in the community?",
          choices: [
            "Individual Health Records",
            "Ocular Survey",
            "Hospital Annual Report",
            "Health Statistics",
          ],
          answer: 1,
          rationale: "Ocular survey is a source of first-hand data in the community.",
        },
        {
          id: "q5",
          question: "When conducting community organizing, which task is done first?",
          choices: [
            "Schedule interviews with key personnel",
            "Ask permission from barangay captain",
            "Gather the residents for a focus group discussion",
            "Ask the health center for the health records",
          ],
          answer: 1,
          rationale: "The first task is to ask permission from the barangay captain.",
        },
        {
          id: "q6",
          question: "HIV can be transmitted in the following, EXCEPT:",
          choices: ["Synovial fluid", "Blood", "Urine", "Semen"],
          answer: 2,
          rationale: "Urine is not a mode of HIV transmission.",
        },
        {
          id: "q7",
          question: "Hepatitis B is acquired through the following, EXCEPT:",
          choices: ["Sex", "Needle", "Hemodialysis", "Peritoneal dialysis"],
          answer: 3,
          rationale: "Peritoneal dialysis is not a mode of Hepatitis B transmission.",
        },
        {
          id: "q8",
          question: "The nurse knows that the Hepatitis B vaccine is administered via the route",
          choices: ["Subcutaneous", "Oral", "Intramuscular", "Intravenous"],
          answer: 2,
          rationale: "Hepatitis B vaccine is given via the intramuscular route.",
        },
        {
          id: "q9",
          question:
            "When interviewing a patient with HIV, it is best to obtain information about the client's",
          choices: ["Lifestyle", "Marital status", "Gender", "Occupation"],
          answer: 0,
          rationale: "Lifestyle assessment helps identify risk factors.",
        },
        {
          id: "q10",
          question: "Hepatitis B is transmitted through the following ways, EXCEPT?",
          choices: [
            "Sexual contact",
            "Blood transfusion",
            "Unsafe drug practices",
            "Ingestion of questionable food sources",
          ],
          answer: 3,
          rationale: "Hepatitis B is not transmitted through ingestion.",
        },
        {
          id: "q11",
          question:
            "You are conducting a home visit to Aling Kira, a 62-year-old resident recently diagnosed with hypertension. What is the first thing to do during the home visit?",
          choices: [
            "Tell the family members about the purpose of the visit.",
            "Greet the family.",
            "Observe the patient and determine health needs.",
            "Make appointment for a return visit.",
          ],
          answer: 1,
          rationale: "The first thing is to greet the family.",
        },
        {
          id: "q12",
          question: "Which of the following is a priority principle of BAG technique?",
          choices: [
            "To minimize, if not prevent spread of infection",
            "To perform nursing procedure with ease",
            "An essential and indispensable equipment carried along by the public health nurse",
            "To show the effectiveness of total care given to an individual of family",
          ],
          answer: 0,
          rationale: "The priority principle of BAG technique is to prevent spread of infection.",
        },
        {
          id: "q13",
          question:
            "Aling Kira has a BP reading of 150/90. Under the WHO hypertension stages, this is classified under?",
          choices: ["Normal", "Mild Hypertension", "Moderate Hypertension", "Severe Hypertension"],
          answer: 2,
          rationale: "150/90 is classified as Moderate Hypertension (Stage 2).",
        },
        {
          id: "q14",
          question:
            "To maintain privacy of the family, what is the most appropriate topic to discuss?",
          choices: [
            "Vacation getaway",
            "Extramarital related",
            "Socioeconomic status",
            "Inheritance",
          ],
          answer: 0,
          rationale: "Vacation getaway is a neutral and appropriate topic.",
        },
        {
          id: "q15",
          question:
            "There is an increase in whooping cough cases in the neighboring barangays of San Lorenzo. Nurse Brent holds a mother's class to raise awareness among parents about the disease. What is the best way to prevent Pertussis?",
          choices: ["Antibiotics", "Isolation", "Immunization", "Wearing masks"],
          answer: 2,
          rationale: "Immunization is the best way to prevent Pertussis.",
        },
        {
          id: "q16",
          question:
            "Antibiotics are given to a patient with pertussis to prevent what kind of complication?",
          choices: ["Bronchopneumonia", "Otitis Media", "Seizures", "Rib fractures"],
          answer: 0,
          rationale: "Antibiotics help prevent bronchopneumonia.",
        },
        {
          id: "q17",
          question: "What is the causative agent of pertussis?",
          choices: [
            "Plasmodium falciparum",
            "Salmonella typhi",
            "Bordetella pertussis",
            "Vibrio cholerae",
          ],
          answer: 2,
          rationale: "Bordetella pertussis is the causative agent of pertussis.",
        },
        {
          id: "q18",
          question: "Which medications are given parenterally for tuberculosis?",
          choices: ["Streptomycin", "Isoniazid", "Rifampicin", "Ethambutol"],
          answer: 0,
          rationale: "Streptomycin is given parenterally.",
        },
        {
          id: "q19",
          question:
            "What is the most suitable nursing intervention to meet the emotional needs of a patient who has just received a TB diagnosis?",
          choices: [
            "Emphasize that isolation is important to stop TB from spreading",
            "Answer the client's questions without judgment and provide emotional support",
            "Describe in detail the treatment plan and adverse effects of anti-TB medications",
            "Refer the client to a psychiatrist",
          ],
          answer: 1,
          rationale:
            "Providing emotional support and answering questions is the most suitable intervention.",
        },
        {
          id: "q20",
          question: "Mang Dustin asks how many mL is administered during a TB skin test?",
          choices: ["0.01 mL", "0.1 mL", "0.5 mL", "0.05 mL"],
          answer: 1,
          rationale: "The standard TB skin test uses 0.1 mL of tuberculin.",
        },
        {
          id: "q21",
          question: "What is done during disaster?",
          choices: ["Redevelopment", "Response", "Recovery", "Triage"],
          answer: 1,
          rationale: "Response is the phase during disaster.",
        },
        {
          id: "q22",
          question: "Cholera is proven to be primarily transmitted via",
          choices: ["Water", "Food", "Air", "Insects"],
          answer: 0,
          rationale: "Cholera is primarily waterborne.",
        },
        {
          id: "q23",
          question: "Which of the following is not a function of an epidemiologic nurse?",
          choices: [
            "Implement public health surveillance",
            "Create training courses in epidemiology",
            "Maintain epidemiology and surveillance unit equipment",
            "Monitor local health personnel conducting disease surveillance",
          ],
          answer: 2,
          rationale: "Maintaining equipment is not a function of an epidemiologic nurse.",
        },
        {
          id: "q24",
          question: "What is the first step in handwashing?",
          choices: [
            "Rub hands palm to palm.",
            "Wet hands with water.",
            "Apply soap.",
            "Rub palm to palm with fingers interlaced.",
          ],
          answer: 1,
          rationale: "The first step in handwashing is to wet hands with water.",
        },
        {
          id: "q25",
          question:
            "Mika, who is 28 weeks pregnant is scheduled to receive her tetanus shot today. She asks about the immunization programs of the health center. What is the site of administration for an MMR vaccine in a 9-month-old?",
          choices: [
            "Dorsogluteal muscles of the buttocks",
            "Deltoid muscle of the arm",
            "Vastus lateralis muscle of the thigh",
            "Ventrogluteal muscle of the hip",
          ],
          answer: 2,
          rationale: "For a 9-month-old, MMR vaccine is given in the vastus lateralis muscle.",
        },
        {
          id: "q26",
          question: "What is the size of the needle for IM injection for adults?",
          choices: ["0.5-1.0 in", "1.0-1.5 in", "1.5-2.0 in", "2.0-2.5 in"],
          answer: 1,
          rationale: "The standard needle size for IM injection in adults is 1.0-1.5 inches.",
        },
        {
          id: "q27",
          question: "Where is the Z-track technique method used?",
          choices: ["IM", "SQ", "IV", "ID"],
          answer: 0,
          rationale: "Z-track technique is used for intramuscular injections.",
        },
        {
          id: "q28",
          question:
            "School Nurse Klarisse learns that there has been an outbreak of measles among the students. Nurse Klarisse knows that the mode of transmission of measles is",
          choices: ["Direct contact", "Airborne", "Droplet", "Oral-fecal"],
          answer: 1,
          rationale: "Measles is transmitted via airborne route.",
        },
        {
          id: "q29",
          question:
            "A father of one of the students asks how the rashes start. As a knowledgeable nurse, you know that the pattern of rashes in measles start from",
          choices: [
            "The face, in a descending manner",
            "The trunk, towards the extremities",
            "The abdomen towards the periphery",
            "The extremities, towards to the trunk",
          ],
          answer: 0,
          rationale: "Measles rashes start from the face and spread downwards.",
        },
        {
          id: "q30",
          question:
            "Another parent asks about German measles. The causative agent of German measles is a",
          choices: ["Fungi", "Bacteria", "Virus", "Parasite"],
          answer: 2,
          rationale: "German measles (rubella) is caused by a virus.",
        },
        {
          id: "q31",
          question:
            "This Republic Act protects children against crimes, abuse, exploitation, and discrimination.",
          choices: ["RA 9173", "RA 7610", "RA 9255", "RA 8353"],
          answer: 1,
          rationale:
            "RA 7610 is the Special Protection of Children Against Abuse, Exploitation and Discrimination Act.",
        },
        {
          id: "q32",
          question:
            "As a novice nurse, your assessment of the child shows evidence of child abuse. What is the initial nursing intervention?",
          choices: [
            "Report to Bantay Bata 163",
            "Report to DSWD",
            "Document the findings",
            "Report to immediate superior",
          ],
          answer: 2,
          rationale: "Documenting findings is the initial nursing intervention.",
        },
        {
          id: "q33",
          question: "Which of the following is classified as FORMAL learning?",
          choices: [
            "Participating in a webinar",
            "Presenting research",
            "Enrolling in graduate school",
            "Delivering a keynote speech",
          ],
          answer: 2,
          rationale: "Enrolling in graduate school is formal learning.",
        },
        {
          id: "q34",
          question:
            "Which of the following refers to learning that occurs in daily life which can contribute to a qualification?",
          choices: [
            "Formal learning",
            "Informal learning",
            "Nonformal learning",
            "Lifelong learning",
          ],
          answer: 2,
          rationale:
            "Nonformal learning occurs in daily life and can contribute to a qualification.",
        },
        {
          id: "q35",
          question:
            "Your patient who underwent surgery is going back to the province. Who is responsible for removing his sutures?",
          choices: [
            "Rural Health Nurse",
            "Rural Health Doctor",
            "General Practitioner",
            "General Surgeon",
          ],
          answer: 0,
          rationale: "Rural Health Nurses are responsible for removing sutures.",
        },
        {
          id: "q36",
          question: "These are appropriate program for feeding and nutrition in children EXCEPT:",
          choices: [
            "Deworming",
            "Salt substitute",
            "Food fortification",
            "Micronutrient supplementation",
          ],
          answer: 1,
          rationale: "Salt substitute is not a feeding and nutrition program.",
        },
        {
          id: "q37",
          question: "Which is the best way for a 16-year-old obese patient to lose weight?",
          choices: [
            "Instruct mother to lose weight",
            "Instruct patient to exercise individually",
            "Collaborate with local dietitian",
            "Watch instructional video",
          ],
          answer: 2,
          rationale: "Collaborating with a dietitian is the best approach.",
        },
        {
          id: "q38",
          question: "What is the best outcome in eliminating dengue in the community?",
          choices: [
            "Reduce the number bitten by the mosquito",
            "Reduced cases of dengue",
            "Increase recovery of dengue cases",
            "Compliance of the community to eliminate vector",
          ],
          answer: 3,
          rationale: "The best outcome is community compliance in eliminating the vector.",
        },
        {
          id: "q39",
          question: "The symptoms of severe dengue fever include the following, EXCEPT:",
          choices: [
            "Narrowed pulse pressure, pale and cool skin",
            "Bleeding, decreased blood pressure",
            "Extreme fever, vomiting",
            "Decreased level of consciousness, stomachache",
          ],
          answer: 2,
          rationale:
            "Extreme fever and vomiting are symptoms of dengue, but not specific to severe dengue.",
        },
        {
          id: "q40",
          question: "What is the color of the trash bin in the hospital office?",
          choices: ["Red", "Black", "Yellow", "Green"],
          answer: 1,
          rationale: "Black trash bins are for general waste in hospital offices.",
        },
        {
          id: "q41",
          question:
            "Nurse Charlie is about to throw a patient's used diaper into the trash bin. She asks which color of trash bin should she dispose it into?",
          choices: ["Red", "Black", "Yellow", "Green"],
          answer: 0,
          rationale:
            "Used diapers are considered infectious waste and should go to red trash bins.",
        },
        {
          id: "q42",
          question: "Which of the following is the primary cause of duodenal ulcer?",
          choices: ["Bacterial infection", "Stress", "Alcohol consumption", "NSAID use"],
          answer: 0,
          rationale: "H. pylori bacterial infection is the primary cause of duodenal ulcers.",
        },
        {
          id: "q43",
          question: "Which sign is NOT associated with a duodenal ulcer exacerbation?",
          choices: ["Hemorrhage", "Perforation", "Gastritis", "Obstruction"],
          answer: 2,
          rationale: "Gastritis is not a sign of duodenal ulcer exacerbation.",
        },
        {
          id: "q44",
          question: "Which medication is classified as an H2-receptor antagonist?",
          choices: ["Ranitidine", "Omeprazole", "Pantoprazole", "Misoprostol"],
          answer: 0,
          rationale: "Ranitidine is an H2-receptor antagonist.",
        },
        {
          id: "q45",
          question: "What is the ideal position after a liver biopsy?",
          choices: ["Right side-lying", "Left side-lying", "Supine", "Prone"],
          answer: 0,
          rationale: "Right side-lying position is ideal after a liver biopsy to apply pressure.",
        },
        {
          id: "q46",
          question: "What intercostal space is typically used for liver biopsy?",
          choices: ["10th", "7th-8th", "8th-9th", "11th"],
          answer: 1,
          rationale: "Liver biopsy is typically done at the 7th-8th intercostal space.",
        },
        {
          id: "q47",
          question: "What is the most common site for pain in appendicitis?",
          choices: [
            "Left lower quadrant",
            "Right upper quadrant",
            "Right lower quadrant",
            "Epigastric",
          ],
          answer: 2,
          rationale: "Pain in appendicitis is most commonly felt in the right lower quadrant.",
        },
        {
          id: "q48",
          question: "Post-operative appendectomy patients are placed in what position?",
          choices: ["Prone", "Side-lying", "Supine", "Semi-Fowler's"],
          answer: 3,
          rationale: "Post-operative appendectomy patients are placed in Semi-Fowler's position.",
        },
        {
          id: "q49",
          question: "Which test is not typically used to diagnose liver cancer?",
          choices: ["CT scan", "Angiogram", "Radiograph", "Ultrasound"],
          answer: 2,
          rationale: "Radiograph is not typically used to diagnose liver cancer.",
        },
        {
          id: "q50",
          question: "What is the initial nursing action for a patient vomiting blood?",
          choices: [
            "Give ice chips",
            "Notify the doctor",
            "Start IV fluids",
            "Reassure the patient",
          ],
          answer: 1,
          rationale: "The initial nursing action is to notify the doctor.",
        },
        {
          id: "q51",
          question:
            "A nurse is caring for a pregnant client with vaginal lesions. The nurse can determine that a patient's lesions are due to Herpes simplex virus, if the lesions on the patient's skin are:",
          choices: [
            "Painful fluid-filled vesicles",
            "Red papules",
            "Elevated hard mass larger than 2cm",
            "Painless fluid-filled vesicles",
          ],
          answer: 0,
          rationale: "Herpes simplex virus results in painful or itchy fluid-filled vesicles.",
        },
        {
          id: "q52",
          question:
            "The nurse conducts a health teaching to a group of young women regarding the different contraceptive methods. Which of the following is a correct statement about contraceptive pills?",
          choices: [
            "Estrogen-based oral contraceptives are not recommended until the menstrual periods have become regularized to prevent administering a compound to halt ovulation before it is firmly established.",
            "The progesterone acts to suppress follicle-stimulating hormone (FSH) and LH, thereby suppressing ovulation.",
            "Estrogen interferes with tubal transport and endometrial proliferation to such degrees that the possibility of implantation is significantly decreased.",
            "Estrogen may increase the concentration of low-density lipoproteins (LDL) and lower the high-density lipoprotein (HDL) level.",
          ],
          answer: 1,
          rationale: "Progesterone suppresses FSH and LH, thereby suppressing ovulation.",
        },
        {
          id: "q53",
          question:
            "One of the clients, Sheila, decided to use combination oral contraceptive pills as her family planning method. Which of the following will alert the nurse that Sheila can not use oral contraceptive pills?",
          choices: [
            "12 weeks postpartum",
            "Elevated blood pressure of 140mmHg systolic or above or 90mmHg diastolic or above.",
            "Upcoming major surgery that requires prolonged immobilization",
            "Diabetes for at least 10 years duration",
          ],
          answer: 1,
          rationale: "Elevated blood pressure is a contraindication for oral contraceptive pills.",
        },
        {
          id: "q54",
          question:
            "The nurse is preparing to administer Medroxyprogesterone acetate (DMPA) to the patient. Which of the following statements made by the patient indicates that she understood the nurse's teaching?",
          choices: [
            '"I should drink iron supplements since this can cause anemia."',
            '"I should maintain a high calcium intake to reduce the development of osteoporosis."',
            '"Tingling sensations in the arms is a common side effect that does not need to be reported."',
            '"I will receive this contraceptive every month."',
          ],
          answer: 1,
          rationale: "DMPA can cause osteoporosis, so high calcium intake is recommended.",
        },
        {
          id: "q55",
          question:
            "Which of the following is the only essential fatty acid necessary for new cell growth and cannot be manufactured in the body from other sources?",
          choices: [
            "Docosahexaenoic acid",
            "Eicosapentaenoic acid",
            "Linoleic acid",
            "Palmitic acid",
          ],
          answer: 2,
          rationale: "Linoleic acid is an essential fatty acid.",
        },
        {
          id: "q56",
          question:
            "Paula, a pediatric nurse, is caring for a patient with Cleft Lip. To provide the best care to the patient and health teaching to the mother Paula decided to",
          choices: [
            "Feed the infant in a side-lying position",
            "Feed the infant in a supine position",
            "Use a regular nipple for feeding",
            "Burp the infant frequently",
          ],
          answer: 0,
          rationale: "Feeding in a side-lying position is recommended for cleft lip patients.",
        },
        {
          id: "q57",
          question:
            "Nurse Arthur is caring for a newborn with myelomeningocele. To prevent infection, the newborn is scheduled for an immediate surgical repair. The following statement is true?",
          choices: [
            "The child will continue to have paralysis of the lower extremities and loss of bowel and bladder function after surgery",
            "Post-operatively, the child is positioned supine on the bed to add pressure to the surgical site to prevent bleeding.",
            "The child will gain control of his/her bladder and bowel function after the surgery.",
            "A dry sterile antiseptic, or antibiotic gauze over the lesion may be used to prevent infection.",
          ],
          answer: 3,
          rationale:
            "A dry sterile antiseptic or antibiotic gauze over the lesion may be used to prevent infection.",
        },
        {
          id: "q58",
          question:
            "Upon assessment of a newborn baby boy, the nurse noticed that one of the newborn's feet was in a dorsiflexion position in which the toes are higher than the heel. The nurse knows that the newborn may have which of the following?",
          choices: ["Talipes vargas", "Talipes calcaneus", "Talipes varus", "Talipes equinus"],
          answer: 1,
          rationale:
            "Talipes calcaneus is a foot deformity where the toes are higher than the heel.",
        },
        {
          id: "q59",
          question:
            "The parents of an infant born with clubfoot express feelings of guilt and anxiety about their child's condition. Which of the following is the nurse's most appropriate intervention?",
          choices: [
            "teach them about their child's condition",
            "introduce them to other parents whose children have the same condition",
            "ask if they would like to speak with the chaplain",
            "encourage discussion of their feelings",
          ],
          answer: 3,
          rationale:
            "Encouraging discussion of their feelings is the most appropriate intervention.",
        },
        {
          id: "q60",
          question:
            "Reproductive health, according to WHO, is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity, in all matters relating to the reproductive system and to its functions and processes. Which of the following statements are true regarding reproductive health?",
          choices: [
            "Around 25% of maternal deaths could be averted if all women wishing to avoid pregnancy could use modern methods of contraception",
            "Without contraception 90% of sexually active women are at risk of getting pregnant",
            "100,000,000 women worldwide become pregnant unintentionally because of underuse of modern contraceptives.",
            "60% of neonatal deaths are caused by poor maternal nutrition",
          ],
          answer: 0,
          rationale: "Around 25% of maternal deaths could be averted through contraception.",
        },
        {
          id: "q61",
          question:
            "A couple went to a fertility clinic for a consultation due to their difficulty of conceiving a baby after years of trying. Which of the following is true about fertility?",
          choices: [
            "The normal pH of semen is 7.0 to 7.5",
            "The normal sperm count is 10 million or greater than 200 million sperm per milliliter of semen",
            "Males are tested first before females",
            "Females are tested first before males",
          ],
          answer: 2,
          rationale: "Males are tested first before females in fertility workup.",
        },
        {
          id: "q62",
          question:
            "A 30 year old primigravida has a fasting blood sugar level of 130 mg/dl. The doctors suspect that she may have gestational diabetes, which of the following tests will help confirm this diagnosis?",
          choices: [
            "1 hour glucose tolerance test only",
            "Random blood glucose test",
            "HBA1C",
            "1 hour glucose tolerance test and 3 hour glucose tolerance test",
          ],
          answer: 3,
          rationale:
            "1 hour and 3 hour glucose tolerance tests are used to confirm gestational diabetes.",
        },
        {
          id: "q63",
          question:
            "A postpartum patient complains of breast tenderness. Which of the following will you advise the patient to do?",
          choices: [
            "Wear an underwire bra",
            "Reduce the frequency of breastfeeding",
            "Encourage manual expression of milk every 3 to 4 hours.",
            "Instruct the client that fluid intake should be 1000 ml to 2000 ml per day",
          ],
          answer: 2,
          rationale: "Manual expression of milk every 3 to 4 hours is recommended.",
        },
        {
          id: "q64",
          question:
            "Nurse Evelyn was invited to conduct health teaching to young female students regarding reproductive health. One student asked the nurse when ovulation happens. Nurse Evelyn accurately responds by stating that:",
          choices: [
            "7 days after the first day of your cycle",
            "14 days before the start of your next cycle",
            "14 days after the start of your cycle",
            "7 days before the cycle",
          ],
          answer: 1,
          rationale: "Ovulation happens 14 days before the start of the next cycle.",
        },
        {
          id: "q65",
          question:
            "The 'Three Delays' model proposes that pregnancy-related mortality is overwhelmingly due to three delays. Which is NOT included?",
          choices: [
            "Delay in decision to seek care",
            "Delay in reaching care",
            "Delay in determining care is needed",
            "Delay in receiving adequate health care",
          ],
          answer: 2,
          rationale: "Delay in determining care is needed is not one of the three delays.",
        },
        {
          id: "q66",
          question:
            "A 36 year old multigravida client, who is 28 weeks pregnant, was rushed to the nearest hospital due to painless vaginal bleeding. The patient was diagnosed with placenta previa through an ultrasound. Which of the following is not considered a risk factor for placenta previa?",
          choices: [
            "Advanced maternal age",
            "Past cesarean birth",
            "Smoking",
            "Multiple gestation",
          ],
          answer: 3,
          rationale: "Multiple gestation is not a typical risk factor for placenta previa.",
        },
        {
          id: "q67",
          question:
            "A pregnant client who is 30 weeks pregnant was rushed to the Emergency Department due to sharp abdominal pain, uterine tenderness and minimal bleeding. The nurse suspects placental abruption. Upon taking the patient's history it was known that the patient is a 20 year old primigravida, she recently got in a huge fight with her boxer husband, which stressed her out and resulted in her smoking a pack of cigarettes. Which of the following information is considered a risk factor in the patient's placental abruption?",
          choices: [
            "Young maternal age",
            "Primigravida",
            "Smoking",
            "Direct trauma to the abdomen",
          ],
          answer: 3,
          rationale: "Direct trauma to the abdomen is a risk factor for placental abruption.",
        },
        {
          id: "q68",
          question: "The surgery to correct cryptorchidism is:",
          choices: ["Orchiolexy", "Cryptorchidectomy", "Orchiopexy", "Cryptorraphy"],
          answer: 2,
          rationale: "Orchiopexy is the surgery to correct cryptorchidism.",
        },
        {
          id: "q69",
          question:
            "It is common that men experience physical symptoms to the same degree or even more intensely than their partners during pregnancy. This can result from the anxiety, stress and empathy for the pregnant woman. This is termed as:",
          choices: [
            "Couvade syndrome",
            "Covualea syndrome",
            "Somatic illness",
            "Generalized anxiety syndrome",
          ],
          answer: 0,
          rationale: "Couvade syndrome is the term for men experiencing pregnancy symptoms.",
        },
        {
          id: "q70",
          question:
            "The parents brought their 2 year old child to a pediatrician for consultation. The parents are worried because their child has not been able to establish normal relationships, not making eye contact, and refuses to cuddle. Upon further assessment by the doctor, the child is diagnosed with an Autistic Disorder. Which of the following symptoms may also be present in their child, EXCEPT:",
          choices: [
            "Increased sensitivity to pain",
            "Repetitive behaviors",
            "Resistance to change in routine",
            "Impaired ability to initiate conversation",
          ],
          answer: 0,
          rationale:
            "Autistic children often have decreased or increased sensitivity to pain, but not all do.",
        },
        {
          id: "q71",
          question:
            "RA 10912 defined as one of the learning process where it includes 'learning activities such as online training, local/international seminars/nondegree courses, institution/company-sponsored training programs, and the like, which did not undergo CPD accreditation but maybe applied for and awarded CPD units by the respective CPD Council.'",
          choices: [
            "Formal learning",
            "Nonformal learning",
            "Self-directed learning",
            "Online learning",
          ],
          answer: 1,
          rationale: "This describes Nonformal learning as per RA 10912.",
        },
        {
          id: "q72",
          question:
            "___ is a type of learning process which is defined as 'educational arrangements such as curricular qualifications and teaching-learning requirements that take place in education and training institutions recognized by relevant national authorities, and which lead to diplomas and qualifications.'",
          choices: [
            "Formal learning",
            "Nonformal learning",
            "Self-directed learning",
            "Online learning",
          ],
          answer: 0,
          rationale: "This describes Formal learning.",
        },
        {
          id: "q73",
          question:
            "A patient was admitted with a diagnosis of severe pre-eclampsia. She presented with visual disturbances, a blood pressure of 160/110 mmHg and extensive peripheral edema. To monitor fetal well-being, which nursing intervention is most appropriate?",
          choices: [
            "Monitor the patient's blood pressure at least every 4 hours",
            "Raise the side rails of the bed",
            "Monitor FHR every 4 hours using a doppler",
            "Administer Magnesium Sulfate as ordered",
          ],
          answer: 2,
          rationale: "Monitoring fetal heart rate every 4 hours is appropriate.",
        },
        {
          id: "q74",
          question:
            "A client with severe preeclampsia is receiving magnesium sulfate as an anticonvulsant. Upon assessment, which of the following findings will alert the nurse?",
          choices: [
            "Urine output of 100ml for the past 4 hours",
            "RR of 15",
            "Deep tendon reflexes of 2+",
            "Absence of clonus",
          ],
          answer: 0,
          rationale: "Urine output of 100ml in 4 hours indicates oliguria, which is a concern.",
        },
        {
          id: "q75",
          question: "Which of the following arises from the mesoderm?",
          choices: ["Heart", "Skin", "Bladder", "Brain"],
          answer: 0,
          rationale: "The heart arises from the mesoderm.",
        },
        {
          id: "q76",
          question:
            "In order to nourish the fetus growing inside the uterus, the placenta allows nutrients to cross through different mechanisms. However, not all that crosses the placenta is beneficial for the fetus. One type of mechanism allows crossing of the viruses that can infect the fetus. This mechanism is:",
          choices: ["Diffusion", "Active transport", "Pinocytosis", "Active transport"],
          answer: 2,
          rationale: "Pinocytosis allows viruses to cross the placenta.",
        },
        {
          id: "q77",
          question:
            "A client in labor just delivered the placenta. There is a large gush of blood and the woman's fundus is not palpable in the abdomen. The nurses suspect uterine inversion. The nurse knows that which of the following interventions is incorrect?",
          choices: [
            "Not attempting to replace the inversion",
            "Start an IV line",
            "Administer oxytocin",
            "Administer general anesthesia",
          ],
          answer: 0,
          rationale: "Attempting to replace the inversion is the correct action.",
        },
        {
          id: "q78",
          question:
            "A pregnant client visited the OB clinic for her prenatal check-up. Upon history taking, the patient revealed that she has a history of 2 abortions, and a twin pregnancy wherein she delivered at 41 weeks. What is the GTPAL score of the patient?",
          choices: [
            "G = 3 T = 0 P = 2 A = 2 L = 2",
            "G = 4 T = 0 P = 2 A = 2 L = 2",
            "G = 4 T = 0 P = 1 A = 2 L = 2",
            "G = 3 T = 0 P = 1 A = 2 L = 2",
          ],
          answer: 1,
          rationale:
            "G=4 (1 current + 3 previous), T=0 (no term), P=2 (2 preterm abortions), A=2 (2 abortions), L=2 (2 living children).",
        },
        {
          id: "q79",
          question:
            "The client tells the nurse that her last menstrual period started on January 14 and ended on January 20. Using Nagele's rule, the nurse determines her EDD to be which of the following?",
          choices: ["October 27", "October 21", "November 7", "December 27"],
          answer: 1,
          rationale: "Nagele's rule: LMP January 14 + 7 days = January 21, -3 months = October 21.",
        },
        {
          id: "q80",
          question:
            "Nurse Kyle is teaching a diabetic pregnant client about the insulin needs during pregnancy. The nurse determines that the client understands the insulin needs if the client states that the second half of pregnancy require:",
          choices: [
            "Increased insulin needs",
            "Decreased insulin needs",
            "No insulin needed",
            "Same with the 1st half of the pregnancy",
          ],
          answer: 0,
          rationale: "The second half of pregnancy requires increased insulin needs.",
        },
        {
          id: "q81",
          question:
            "As part of the Essential Intrapartum and Newborn Care, proper cord clamping and cutting is done. Which of the following is NOT part of the practice?",
          choices: [
            "Cut the umbilical cord after pulsations stops",
            "Cut between the ties with clean instrument",
            "Do not milk the cord towards the newborn",
            "Put ties tightly around the umbilical cord at 2 cm and 5 cm from the newborn's abdomen",
          ],
          answer: 3,
          rationale:
            "Putting ties tightly around the umbilical cord at 2 cm and 5 cm from the newborn's abdomen is not correct.",
        },
        {
          id: "q82",
          question:
            "You explain to a breastfeeding mother that breast milk is sufficient for all of the baby's nutrient needs only up to",
          choices: ["3 months", "6 months", "1 year", "2 years"],
          answer: 1,
          rationale:
            "Breast milk is sufficient for all of the baby's nutrient needs only up to 6 months.",
        },
        {
          id: "q83",
          question: "Which of the following are printed on the newborn's identification band?",
          choices: [
            "Mother's hospital number, mother's full name, father's full name, the sex, date, and time of infant's birth.",
            "Mother's hospital number, mother's full name, father's full name, the name, sex, date, and time of infant's birth.",
            "Mother's hospital number, mother's full name, the sex, date, and time of infant's birth.",
            "Mother's hospital number, mother's full name, the name, sex, date, and time of infant's birth.",
          ],
          answer: 3,
          rationale:
            "Mother's hospital number, mother's full name, the name, sex, date, and time of infant's birth.",
        },
        {
          id: "q84",
          question:
            "Which of the following is a concern for children taking stimulants for ADHD for several years?",
          choices: ["Dependence on the drug", "Insomnia", "Growth suppression", "Weight gain"],
          answer: 2,
          rationale: "Growth suppression is a concern for children taking stimulants for ADHD.",
        },
        {
          id: "q85",
          question:
            "The nurse is preparing to care for a 5-year-old who has been placed in traction following a fracture of the femur. The nurse plans care, knowing that which is the most appropriate activity for this child?",
          choices: [
            "A radio",
            "A sports video",
            "Large picture books",
            "Crayons and a coloring book",
          ],
          answer: 3,
          rationale:
            "Crayons and a coloring book are appropriate activities for a 5-year-old in traction.",
        },
        {
          id: "q86",
          question:
            "The nurse educator is preparing to conduct a teaching session for the nursing staff regarding the theories of growth and development and plans to discuss Kohlberg's theory of moral development. What information would the nurse NOT include in the session?",
          choices: [
            "Individuals move through all six stages in a sequential fashion.",
            "Moral development progresses in relationship to cognitive development.",
            "A person's ability to make moral judgments develops over a period of time.",
            "The theory provides a framework for understanding how individuals determine a moral code to guide their behavior.",
          ],
          answer: 0,
          rationale:
            "Individuals do not necessarily move through all six stages in a sequential fashion.",
        },
        {
          id: "q87",
          question:
            "Nurse Aaron is caring for a 16 year old child, Kevin, who sustained a fracture. As Nurse Aaron and Kevin were talking about his school and hobbies, Nurse Aaron noticed that the child lacks confidence in his abilities. Considering Erikson's theory, which of the following stages did Kevin fail to achieve the developmental task?",
          choices: [
            "Trust vs Mistrust",
            "Industry vs Inferiority",
            "Autonomy vs Shame and doubt",
            "Initiative vs Guilt",
          ],
          answer: 1,
          rationale:
            "Industry vs Inferiority is the stage where children develop a sense of competence.",
        },
        {
          id: "q88",
          question:
            "The head nurse, Nurse Patricia, is describing Piaget's cognitive developmental theory to pediatric nursing staff. When Nurse Patricia asks what child behavior is characteristic of the formal operational stage, the staff nurse, Nurse Piolo, would be correct if he answered:",
          choices: [
            "The child has the ability to think abstractly.",
            "The child begins to understand the environment.",
            "The child is able to classify, order, and sort facts.",
            "The child learns to think in terms of past, present, and future",
          ],
          answer: 0,
          rationale:
            "The formal operational stage is characterized by the ability to think abstractly.",
        },
        {
          id: "q89",
          question:
            "The Denver II Developmental Screening Test is the most widely used tool to assess childhood development. It can detect delays during infancy and the preschool years. Which of the following is not included in the four main categories of this screening test?",
          choices: ["Personal-social", "Cognitive", "Language", "Gross motor skills"],
          answer: 1,
          rationale: "Cognitive is not a separate category in the Denver II.",
        },
        {
          id: "q90",
          question:
            "A five-month-old child is being assessed by the nurse. Which of the following, if exhibited by the child, would alert the nurse of the possibility of a developmental delay?",
          choices: [
            "reach and pick up objects without the object being offered",
            "Sit without support",
            "Transfer object from one hand to another",
            "Persistent fasting of the hands",
          ],
          answer: 3,
          rationale:
            "Persistent fisting of the hands at 5 months may indicate a developmental delay.",
        },
        {
          id: "q91",
          question:
            "When a nurse finds out that the patient is a victim of domestic violence, it is the nurse's role to:",
          choices: [
            "Assess the patient and document findings in relation to the violence",
            "Offer the patient practical information and emotional support",
            "Notify the physician immediately",
            "Prepare the patient for a physical and psychiatric exam",
          ],
          answer: 0,
          rationale: "The nurse should assess and document findings.",
        },
        {
          id: "q92",
          question:
            "The third Sustainable Development Goal is to 'Ensure healthy lives and promote well-being for all at all ages'. Which of the following is not a target of this goal?",
          choices: [
            "By 2030, reduce the global maternal mortality ratio to less than 100 per 100,000 live births",
            "By 2023, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births",
            "By 2030, substantially reduce the number of deaths and illnesses from hazardous chemicals and air, water and soil pollution and contamination",
            "Strengthen the capacity of all countries, in particular developing countries, for early warning, risk reduction and management of national and global health risks",
          ],
          answer: 0,
          rationale:
            "The target is to reduce global maternal mortality ratio to less than 70 per 100,000 live births.",
        },
        {
          id: "q93",
          question:
            "This is the first postoperative day for patient Eliza who delivered by caesarean section (CS). Nurse Ivy a newly hired staff was assigned to her. Eliza asks the nurse why she has to get up and walk the day after surgery. Which of the following is the BEST response of the nurse? Walking",
          choices: [
            "Hastens lactation",
            "Relieves pain",
            "Heals wounds",
            "Hastens recovery from anesthesia",
          ],
          answer: 3,
          rationale: "Walking hastens recovery from anesthesia.",
        },
        {
          id: "q94",
          question:
            "Which laboratory finding should the nurse assess on the patient 24 hours after caesarian section delivery upon doctor's request?",
          choices: [
            "Trace 1+ proteinuria",
            "Hematocrit 35%",
            "White blood cell count 20,000/cu.mm",
            "Hemoglobin 7.0 g/dL",
          ],
          answer: 3,
          rationale: "Hemoglobin of 7.0 g/dL is concerning and requires notification.",
        },
        {
          id: "q95",
          question: "Eliza complains of 'afterpains'. What should be the nurse's IMMEDIATE action?",
          choices: [
            "Advise her to stop breast-feeding for a day",
            "Encourage her to drink more water",
            "Assess vital signs and pain level",
            "Administer an analgesic STAT",
          ],
          answer: 2,
          rationale: "The nurse should assess vital signs and pain level immediately.",
        },
        {
          id: "q96",
          question:
            "Eliza is to be discharged 3 days after CS delivery. Which of the following observations of the nurse would cause the delay of her discharge and would warrant notification to the physician?",
          choices: [
            "Moderate amount of lochia rubra",
            "Fundus is firm at umbilicus",
            "Pulse rate of 61 beats/minute taken in 24 hours",
            "Five voidings totaling 240 cc in 12 hours",
          ],
          answer: 3,
          rationale:
            "Normal urine output is 30-60cc/hour or 360-720cc in 12 hours. 240cc in 12 hours indicates not voiding enough.",
        },
        {
          id: "q97",
          question:
            "On the third postpartum day, Eliza reports that she has voided five times that morning. What should the nurse INITIALLY do?",
          choices: [
            "Insert a Foley catheter",
            "Collect the next voiding and measure the urine amount",
            "Catheterize the client to check for residual urine",
            "Call the physician",
          ],
          answer: 1,
          rationale:
            "Collecting the next voiding and measuring the urine amount allows assessment of urinary output.",
        },
        {
          id: "q98",
          question:
            "Patient Carlita, 19 years old, is in her first trimester of pregnancy. Because it is her first pregnancy, she went for her prenatal check-up with her mother. She asked a lot of questions which she expects the nurse to answer her. The nurse asked for the personal data of the patient which, to some, Carlita did not like to answer. And so she asked: 'Why do you need to know if I am married?' what should be a good response of the nurse?",
          choices: [
            '"If you do not have a husband, then that can pose a big problem for you."',
            '"If you are married then your husband will also suffer from discomforts like you."',
            '"You need your husband to accompany you every prenatal check-up."',
            '"Your husband is your best support system during your pregnancy."',
          ],
          answer: 3,
          rationale: "The husband is the best support system during pregnancy.",
        },
        {
          id: "q99",
          question:
            "The patient asked what is the term for signs such as breast changes, urinary frequency, fatigue, morning sickness and amenorrhea?",
          choices: ["Probable signs", "Presumptive signs", "Possible signs", "Positive signs"],
          answer: 1,
          rationale: "These are presumptive signs of pregnancy.",
        },
        {
          id: "q100",
          question:
            "The patient asked what causes newborn babies with total absence of extremities. The nurse answered that the cause for Amelia is intake of which of the following medications during pregnancy",
          choices: ["Anti-emetics", "Antibiotics", "Analgesics", "Anti-bacterials"],
          answer: 0,
          rationale: "Amelia can be caused by anti-emetics taken during pregnancy.",
        },
        {
          id: "q101",
          question:
            "Mary, a high school student, is currently admitted in the AB Ward. She complains of intense abdominal pain, bloating, and alternate periods of constipation and diarrhea. She reports that she felt it recently before taking an examination. Laboratory studies showed no findings present in the abdomen. Nurse Anne can infer that the patient is having:",
          choices: [
            "Inflammatory Bowel Disease",
            "Irritable Bowel Syndrome",
            "Gastritis",
            "Peptic Ulcer Disease",
          ],
          answer: 1,
          rationale: "IBS is associated with stress and shows no organic findings.",
        },
        {
          id: "q102",
          question:
            "Nurse Anne is aware that the management for the patient Mary's symptoms are focused on proper stress management, exercise, and appropriate diet. The following should NOT be included in the patient's diet, EXCEPT:",
          choices: ["Beans", "Coffee", "Fried chicken", "Oatmeal"],
          answer: 3,
          rationale: "Oatmeal is a good dietary choice for IBS.",
        },
        {
          id: "q103",
          question:
            "Dumping syndrome occurs in which of the following patients? Select all that apply.",
          choices: [
            "1. Patients who had Bilroth 1 or 2\n2. Patient who had a vagotomy\n3. Patient who's currently on tube feeding\n4. Patient who had a colectomy",
            "134",
            "124",
            "123",
            "234",
          ],
          answer: 2,
          rationale:
            "Dumping syndrome occurs in patients with Bilroth 1 or 2, vagotomy, and those on tube feeding.",
        },
        {
          id: "q104",
          question:
            "Patient Rensie was transferred to the medical-surgical ward after a Bilroth II procedure. Nurse Joy would suspect dumping syndrome if the patient showed which of the following early signs or symptoms, EXCEPT?",
          choices: ["weakness", "Headache", "cramping pain", "Dizziness"],
          answer: 1,
          rationale: "Headache is not typically an early sign of dumping syndrome.",
        },
        {
          id: "q105",
          question:
            "In order to prevent Patient Rensie to have recurring episodes of dumping syndrome, Nurse Joy would:",
          choices: [
            "Advise the patient to sit properly after 1 hour",
            "Drink water during meals",
            "Allow the patient to walk after meals",
            "Let the patient lie down in left side-lying position",
          ],
          answer: 3,
          rationale: "Lying down in left side-lying position helps prevent dumping syndrome.",
        },
        {
          id: "q106",
          question: "Which of the following tests would confirm the patient diagnosis of HIV?",
          choices: ["CD4 Cell count", "Western Blot", "Viral Load tests", "RT-PCR"],
          answer: 1,
          rationale: "Western Blot is the confirmatory test for HIV.",
        },
        {
          id: "q107",
          question:
            "Patient Mamon is admitted with a recent history of sexual intercourse with a person positive with HIV. Which of the following are signs and symptoms of Acute stage of HIV?",
          choices: [
            "Mild fever, headaches, sore throat",
            "Coughing, headache, diarrhea, muscle fatigue",
            "Oral thrush, Vaginal candida infection, and herpes",
            "Fever, night sweats, fatigue",
          ],
          answer: 0,
          rationale: "Acute HIV stage presents with mild fever, headaches, sore throat.",
        },
        {
          id: "q108",
          question: "Handling a patient diagnosed with HIV requires which type of precaution?",
          choices: [
            "Contact precautions",
            "Airborne precautions",
            "Droplet precaution",
            "Standard precaution",
          ],
          answer: 3,
          rationale: "Standard precautions are used for HIV patients.",
        },
        {
          id: "q109",
          question:
            "Which of the following patient exposure would most likely affect the nurse if the patient's HIV diagnosis is suspected but not confirmed?",
          choices: [
            "Splash of fluid into the eyes when emptying the bedpan containing stool",
            "Accidentally touching patient's vaginal secretion while having open wound lesions",
            "Coughing up secretions towards the nurse without protection",
            "Needlestick injury with the needle and syringe with the patient's blood",
          ],
          answer: 3,
          rationale:
            "Needlestick injury with patient's blood is the most likely route of transmission.",
        },
        {
          id: "q110",
          question:
            "Nurse Twinnie is giving IV medications to the patient when she is suddenly pricked by the needle. The patient was diagnosed with HIV upon admission. Nurse Twinnie will know if she acquired the virus when she will have which diagnostic test?",
          choices: ["Skin biopsy", "Antibody titers", "EIA", "CBC"],
          answer: 2,
          rationale: "EIA (ELISA) is the test used to detect HIV antibodies.",
        },
        {
          id: "q111",
          question:
            "The following are risk factors associated with development of cervical cancer, EXCEPT:",
          choices: [
            "Late age of first sexual intercourse",
            "Multiple sex partners",
            "Smoking",
            "HPV infection",
          ],
          answer: 0,
          rationale:
            "Late age of first sexual intercourse is not a risk factor for cervical cancer.",
        },
        {
          id: "q112",
          question:
            "Patient Bubbles is currently admitted on suspected cervical cancer. Which of the following would indicate possible signs and symptoms that may support the diagnosis?",
          choices: [
            "Urinary and rectal pain",
            "Light bleeding or watery vaginal discharge",
            "Heavy vaginal bleeding",
            "Intense vaginal pain",
          ],
          answer: 1,
          rationale: "Light bleeding or watery vaginal discharge is a sign of cervical cancer.",
        },
        {
          id: "q113",
          question:
            "Francis, a 34-year-old male, went to the clinic complaining of intense joint pain in the fingers of the hands and feet. He claims to have recently been in a boodle fight with his family and he ate a lot of fried tilapias. The nurse suspects which of the following?",
          choices: [
            "Rheumatoid Arthritis",
            "Osteoarthritis",
            "Reactive arthritis",
            "Gouty arthritis",
          ],
          answer: 3,
          rationale: "Gouty arthritis is triggered by purine-rich foods like fish.",
        },
        {
          id: "q114",
          question:
            "The following are appropriate pharmacological management for patients with gout, EXCEPT:",
          choices: ["Allopurinol", "Metoprolol", "Colchicine", "Probenecid"],
          answer: 1,
          rationale: "Metoprolol is a beta-blocker, not used for gout.",
        },
        {
          id: "q115",
          question:
            "Patient Aristotle diagnosed with gout is currently experiencing pain in the left great toe and is given oral Ibuprofen to manage the pain. Which of the following assessment should Nurse Socrates observe that might necessitate intervention?",
          choices: ["Headache", "Constipation", "Black tarry stools", "Palpitations"],
          answer: 2,
          rationale: "Black tarry stools indicate GI bleeding, a side effect of ibuprofen.",
        },
        {
          id: "q116",
          question:
            "Patient Danilo who is confined in the hospital for a 3 weeks for multiple chronic illnesses develops acute gouty arthritis. As he takes multiple medication for his illnesses, Nurse Fen would warrant immediate intervention if the patient decided to take which of the following medication?",
          choices: ["Famotidine", "Oxycodone", "Famotidine", "Furosemide"],
          answer: 3,
          rationale: "Furosemide can increase uric acid levels and worsen gout.",
        },
        {
          id: "q117",
          question:
            "An upcoming hip repair for Gina's surgical procedure and is questioned by the nurse in the pre-admission screening lab. According to the client, a desire to donate her own blood in the approaching surgery. The nurse ought to:",
          choices: [
            "Create a chart entry and document for the client's request.",
            "Notify the office of the surgeon.",
            "Please inform the hematological lab.",
            "Make a blood bank call.",
          ],
          answer: 0,
          rationale: "The nurse should document the client's request.",
        },
        {
          id: "q118",
          question:
            "Which of the following clients should the nurse anticipate receiving a request for single-donor platelets?",
          choices: [
            "a patient getting several platelet transfusions.",
            "an individual who lacks sufficient coagulation factors.",
            "someone who has a platelet count of more than 50,000/mm3",
            "a patient who is resistant to platelets from random donors.",
          ],
          answer: 3,
          rationale: "Single-donor platelets are for patients resistant to random donor platelets.",
        },
        {
          id: "q119",
          question:
            "Lomo, a 72 year old patient has active rectal bleeding and has been admitted. He has undergone cross-matching and typing for two packed red blood cell (RBC) units. Ten minutes after being admitted, he passes out while getting up to use the bedside toilet. The nurse alerts the medical professional, who promptly orders a unit of blood. What kind of packed RBCs should the nurse anticipate being utilized for an urgent transfusion?",
          choices: ["B negative.", "A negative.", "O negative.", "AB negative."],
          answer: 2,
          rationale: "O negative is the universal donor for urgent transfusions.",
        },
        {
          id: "q120",
          question:
            "Which test outcome should the nurse examine to determine whether blood from two distinct donors is compatible?",
          choices: ["Indirect Coombs", "Direct Coombs", "Rh factor", "ABO typing"],
          answer: 0,
          rationale: "Indirect Coombs test is used for cross-matching.",
        },
        {
          id: "q121",
          question:
            "Causes of a hemolytic transfusion response that may lead to hemolytic shock include",
          choices: [
            "increased fluid volume and possible precipitation Too much blood is infused too quickly.",
            "Rh or ABO incompatibility",
            "recipient antibodies interacting with the blood component's white cell antigens",
            "introducing bacteria at the component's when it is collected, processed, or stored",
          ],
          answer: 1,
          rationale: "Rh or ABO incompatibility is a cause of hemolytic transfusion reaction.",
        },
        {
          id: "q122",
          question:
            "The client is having blood transfusion therapy, and the nurse is taking care of them. What clinical signs should the nurse look for to suspect a hemolytic reaction to transfusion?",
          choices: ["Headache", "Tachycardia", "Hyperthermia", "All of the above"],
          answer: 3,
          rationale: "Headache, tachycardia, and hyperthermia are signs of a hemolytic reaction.",
        },
        {
          id: "q123",
          question:
            "Due to an acute hemolytic transfusion reaction, a client's red blood cell transfusion was stopped. Which of the following tactics should the nurse do to reduce the likelihood of such a reaction the BEST?",
          choices: [
            "During the transfusion, the nurse makes sure the client's temperature doesn't rise by more than 1.8°F",
            "Before hanging the blood unit, the nurse confirms all client-identifying information in accordance with hospital practice.",
            "For extremely rigors, the nurse gives meperidine.",
            "Acetaminophen is given by the nurse before the transfusion.",
          ],
          answer: 1,
          rationale:
            "Verifying client-identifying information is the best way to prevent a hemolytic reaction.",
        },
        {
          id: "q124",
          question:
            "Fandi, a 26 year old woman is undergoing blood transfusion, however, wrong blood matching and typing happened. Which is the first sign of hemolytic transfusion reaction?",
          choices: ["Chills", "Tachycardia", "Low Back Pain", "Flushing"],
          answer: 2,
          rationale: "Low back pain is often the first sign of a hemolytic transfusion reaction.",
        },
        {
          id: "q125",
          question:
            "Jana is brought to the ER with a BP of 70/45 and is diagnosed with septic shock. Which assessment would validate the diagnosis.",
          choices: [
            "40.9 C temperature and a pulse rate of beats per minute 138",
            "Metabolic alkalosis as revealed by an ABG study.",
            "Skin that is hot, dry, and has low turgor",
            "30 ml/hour of urine production and central venous 8 cmH2O pressure",
          ],
          answer: 0,
          rationale: "High fever and tachycardia are signs of septic shock.",
        },
        {
          id: "q126",
          question: "The most common and frequent cause of septic shock is infection with",
          choices: ["Gram-positive bacteria", "Gram-negative bacteria", "Fungi", "Viruses"],
          answer: 1,
          rationale: "Gram-negative bacteria are the most common cause of septic shock.",
        },
        {
          id: "q127",
          question:
            "Which patient will not exhibit the expected assessment in response to septic shock?",
          choices: [
            "Riva with a history of Myocardial Infarction",
            "Sundry, a patient with diabetes mellitus type 2",
            "Hwasa who undergoes peritoneal dialysis",
            "Janji, taking Atenolol for Hypertension",
          ],
          answer: 3,
          rationale: "Atenolol can mask the tachycardia of septic shock.",
        },
        {
          id: "q128",
          question:
            "The nurse checks the antenatal history of several patients in early labor. The following are factors documented in the history as having potential factors in increased risk for septic shock after delivery, except?",
          choices: [
            "Asian in descent",
            "During the third trimester, prenatal care was started.",
            "spontaneous membrane rupture 24 hours ago",
            "A dietary examination revealed unhealthful eating patterns.",
            "prior usage of drugs during pregnancy",
            "prior two miscarriages",
          ],
          answer: 3,
          rationale:
            "Dietary patterns are not a direct risk factor for septic shock after delivery.",
        },
        {
          id: "q129",
          question: "Who amongst the following children should MMR vaccine not be given?",
          choices: [
            "Dondi who has HIV",
            "Marna who had severe allergic reaction to eggs",
            "Kara who has history of rotavirus",
            "Ramon who has a history of Tuberculosis",
          ],
          answer: 1,
          rationale: "Severe allergic reaction to eggs is a contraindication to MMR vaccine.",
        },
        {
          id: "q130",
          question:
            "After being given a dose of penicillin, the client experiences an anaphylactic reaction. Which nursing intervention for this client is of the utmost importance?",
          choices: [
            "Prioritizing symptoms of vascular overload",
            "Maintain patient airway clearance",
            "Monitor patient's Vital Signs",
            "Assess for adequate circulating blood volume",
          ],
          answer: 1,
          rationale: "Maintaining airway clearance is the priority in anaphylaxis.",
        },
        {
          id: "q131",
          question:
            "A 20-year-old patient who suffered a hornet sting is brought to the emergency room. Which signs point to an anaphylactic reaction in the patient?",
          choices: [
            "1. Wheezing\n2. Rhinorrhea\n3. Urticaria\n4. Localized Edema\n5. Angioedema\n6. Generalized pruritus",
            "123456",
            "12456",
            "12356",
            "23456",
          ],
          answer: 2,
          rationale:
            "Wheezing, urticaria, angioedema, and generalized pruritus are signs of anaphylaxis.",
        },
        {
          id: "q132",
          question:
            "Which of the following actions should the nurse perform first after providing first treatment to a patient who has asthma and is on the verge of anaphylaxis due to a medication hypersensitivity?",
          choices: [
            "Place the patient flat on bed with legs elevated",
            "Draw blood of the patient and obtain serum electrolyte levels",
            "Administer bronchodilators as ordered",
            "Give beta-adrenergic blockers as ordered",
          ],
          answer: 2,
          rationale: "Administering bronchodilators is the priority.",
        },
        {
          id: "q133",
          question: "Which kind of hypersensitivity is related to anaphylactic shock?",
          choices: [
            "Type II hypersensitivity.",
            "Type I hypersensitivity.",
            "Type IV sensitivity.",
            "Type III sensitivity.",
          ],
          answer: 1,
          rationale: "Anaphylactic shock is a Type I hypersensitivity reaction.",
        },
        {
          id: "q134",
          question:
            "The patient in a local community clinic is being treated by the nurse for gout. What laboratory result would the nurse anticipate seeing in the patient?",
          choices: [
            "Phosphorus: 3.2mg/dL",
            "Potassium: 5.1 mEq/L",
            "Uric acid: 9.0 mg/dL",
            "Calcium: 9.0 mg/dL",
          ],
          answer: 2,
          rationale: "Gout is characterized by elevated uric acid levels.",
        },
        {
          id: "q135",
          question:
            "Shena, a 45 year old female, has gouty arthritis. She is being treated with allopurinol. The client is taught by the nurse which action to do in the event of an acute attack occurs?",
          choices: [
            "Hold Allopurinol, take aspirin",
            "Double Allopurinol dose",
            "Add NSAID or colchicine to the treatment plan",
            "Suddenly stop Allopurinol, instead take NSAIDs",
          ],
          answer: 2,
          rationale: "NSAIDs or colchicine are added for acute attacks.",
        },
        {
          id: "q136",
          question:
            "Indomethacin therapy is explained to the client who has been diagnosed with acute gouty arthritis by Fiona, the community health nurse. When the client says what, does the nurse decide that more instruction is necessary?",
          choices: [
            "\"If I'm in pain, I'll get some rest.\"",
            '"I\'ll keep an eye out for any swelling in my fingers or feet."',
            '"If I develop a rash, I must call the office."',
            '"Whenever I need to relieve pain, I can take a pill."',
          ],
          answer: 3,
          rationale: "Indomethacin should be taken as prescribed, not 'whenever' needed.",
        },
        {
          id: "q137",
          question:
            "Allopurinol 250mg PO daily was prescribed to patient Imelda. After 3 weeks of continued daily regimen, she decided to go back to the clinic. Which of the following statements by patient Imelda indicates that the teaching was effective?",
          choices: [
            '"I need to take my medicine on an empty stomach."',
            '"I need to consume at least 8 glasses of water each day."',
            '"I should eat an orange with my medication."',
            '"I need to consume more protein"',
          ],
          answer: 1,
          rationale: "Adequate fluid intake is important with allopurinol.",
        },
        {
          id: "q138",
          question:
            "A patient with a gout diagnosis is given colchicine. Knowing that this drug should only be used in certain disorders, the nurse looks over the client's medical history.",
          choices: ["Chronic Kidney Disease", "Myxedema", "Hypothyroidism", "Diabetes Mellitus"],
          answer: 0,
          rationale: "Colchicine should be used with caution in Chronic Kidney Disease.",
        },
        {
          id: "q139",
          question:
            "The nurse is arranging for peritoneal dialysis to be administered to a child with hemolytic-uremic syndrome who has previously been anuric. What action should the nurse prepare to take?",
          choices: [
            "Clean the AV fistula",
            "Health Educate the patient of high potassium intake",
            "Restrict fluid as prescribed",
            "Have the patient NPO",
          ],
          answer: 2,
          rationale: "Fluid restriction is prescribed for anuric patients.",
        },
        {
          id: "q140",
          question:
            "The nurse is explaining peritoneal dialysis to a client who has diabetes mellitus. The client is informed by the nurse that maintaining the prescribed dwell time for the dialysis is crucial due to the danger of this complication?",
          choices: ["Hyperglycemia", "Hyperphosphatemia", "Peritonitis", "Disequilibrium Syndrome"],
          answer: 0,
          rationale: "Dialysate containing dextrose can cause hyperglycemia.",
        },
        {
          id: "q141",
          question:
            "An indwelling peritoneal catheter for peritoneal dialysis is present in the abdomen of a patient with chronic renal disease. The patient accidentally wets the abdominal dressing while taking a bath. What should the nurse do?",
          choices: [
            "Change the dressing immediately",
            "Wait for the next scheduled dressing change",
            "Reinforce the dressing with a dry one",
            "Notify the doctor",
          ],
          answer: 0,
          rationale: "A wet dressing should be changed immediately.",
        },
        {
          id: "q142",
          question:
            "Kim Chay, an ER nurse, endorse patient Tibet a 40 yo female who is admitted to the hospital for high phosphorus level due to having End Stage Renal Disease. She is receiving continuous ambulatory peritoneal dialysis and her attending doctor ordered continued management during admission. Which of the following should nurse June, the ward nurse should do?",
          choices: [
            "Get a pump to prepare for the dialysate infusion",
            "Maintain a permanent peritoneal catheter by flushing it every 4-6 hours with 0.9% normal saline (PNSS)",
            "Use sterile procedures and a permanent peritoneal catheter while weighing the patient at the same time each day",
            "Make sure the dialysate is refrigerated until infused",
          ],
          answer: 2,
          rationale:
            "Using sterile procedures and weighing the patient at the same time each day are appropriate interventions.",
        },
        {
          id: "q143",
          question: "What medication is used to treat patients with anorexia nervosa?",
          choices: ["Sertraline", "Duloxetine", "Phenelzine", "Risperidone"],
          answer: 3,
          rationale: "Risperidone (olanzapine) is used to treat anorexia nervosa.",
        },
        {
          id: "q144",
          question:
            "The nurse wants to create a nursing diagnosis for a patient with anorexia nervosa. Which of the following would the priority nursing diagnosis?",
          choices: [
            "Body image disturbance",
            "Risk for hypothermia",
            "Fluid and electrolyte imbalance",
            "Risk for self-directed violence",
          ],
          answer: 2,
          rationale: "Fluid and electrolyte imbalance is the priority in anorexia nervosa.",
        },
        {
          id: "q145",
          question:
            "The nurse finds the patient doing push-ups and jumping jacks in her room. What should the nurse do?",
          choices: [
            "Tell the patient to stop exercising and return to her bed",
            "Allow the patient to exercise as much as she can tolerate",
            "Instruct the client to have resting periods between exercises",
            "Stop the patient and invite the patient for a walk",
          ],
          answer: 3,
          rationale: "The nurse should stop the patient and invite for a walk.",
        },
        {
          id: "q146",
          question:
            "The female patient with anorexia nervosa would most likely have which of the following signs and symptoms regarding her menstrual cycle?",
          choices: ["Menorrhagia", "Amenorrhea", "Metrorrhagia", "Dysmenorrhea"],
          answer: 1,
          rationale: "Anorexia nervosa causes amenorrhea.",
        },
        {
          id: "q147",
          question:
            "The following family dynamics would put adolescents at risk for anorexia nervosa except?",
          choices: [
            "The parents do not respect the privacy and boundaries of the child",
            "The parents are known to verbally harass the child",
            "The parents have maladaptive communication with their child",
            "The parents overprotect their child",
          ],
          answer: 3,
          rationale: "Overprotection is not a typical risk factor for anorexia nervosa.",
        },
        {
          id: "q148",
          question: "Which of the following is not done by a patient with anorexia nervosa?",
          choices: [
            "Talk a lot about food",
            "Count calories of the food eaten",
            "Have food-related rituals",
            "Recognize that their body image is abnormal",
          ],
          answer: 3,
          rationale:
            "Patients with anorexia nervosa do not recognize their body image is abnormal.",
        },
        {
          id: "q149",
          question: "The following are diagnostic criteria for diabetes mellitus, EXCEPT:",
          choices: [
            "Presence of symptoms and casual plasma glucose concentration equal to or greater than 200 mg/dL (11.1 mmol/L).",
            "Fasting plasma glucose greater than or equal to 126 mg/dL (7.0 mmol/L).",
            "Two-hour postload glucose equal to or greater than 180 mg/dL (11.1 mmol/L) during an oral glucose tolerance test.",
            "Hemoglobin A1C ≥ 6.5% (48 mmol/mol).",
          ],
          answer: 2,
          rationale:
            "Two-hour postload glucose should be equal to or greater than 200 mg/dL (11.1 mmol/L).",
        },
        {
          id: "q150",
          question:
            "A client with type 1 diabetes mellitus calls the nurse to report recurrent episodes of hypoglycemia with exercise. Which statement by the client indicated an need for further education on the peak action of NPH insulin and exercise?",
          choices: [
            '"The best time for me to exercise is right after I eat."',
            '"The best time for me to exercise is after breakfast."',
            '"The best time for me to exercise is after my morning snack."',
            '"The best time for me to exercise is every afternoon."',
          ],
          answer: 3,
          rationale:
            "Exercising in the afternoon may coincide with NPH peak action, causing hypoglycemia.",
        },
        {
          id: "q151",
          question:
            "Rotation sites for insulin injection should be separated from one another by 2.5 cm (1 inch) and should be used only every:",
          choices: ["Every other day", "1-2 weeks", "2-4 weeks", "Every month"],
          answer: 1,
          rationale: "Insulin injection sites should be rotated every 1-2 weeks.",
        },
        {
          id: "q152",
          question:
            "A patient with diabetic ketoacidosis was rushed to the hospital. What breathing pattern is expected from this patient?",
          choices: [
            "Cheyne-stokes breathing",
            "Kussmaul respiration",
            "Biot's respiration",
            "Apnea",
          ],
          answer: 1,
          rationale: "Kussmaul respirations are expected in DKA.",
        },
        {
          id: "q153",
          question: "In the same patient, what insulin do you expect to be administered?",
          choices: ["Humalog", "Glargine", "Humulin R", "NPH"],
          answer: 2,
          rationale: "Regular insulin (Humulin R) is given IV in DKA.",
        },
        {
          id: "q154",
          question:
            "Which of the following are clinical manifestations of diabetic ketoacidosis (DKA)?",
          choices: [
            "1. Polyuria\n2. Cheyne-stokes breathing\n3. Kussmaul respirations\n4. Blurred vision\n5. Hyperglycemia\n6. Fluid and electrolyte excess",
            "I, II, III, IV, V",
            "I, III, IV, V",
            "I, II, V, VI",
            "I, II, IV, V, VI",
          ],
          answer: 1,
          rationale:
            "Polyuria, Kussmaul respirations, blurred vision, and hyperglycemia are manifestations of DKA.",
        },
        {
          id: "q155",
          question:
            "Hyperglycemic hyperosmolar syndrome is characterized by the following, EXCEPT:",
          choices: [
            "It is more common in patients with type 2 diabetes, especially older adults.",
            "It occurs rapidly, usually less than 24 hours.",
            "Blood glucose levels reach more than 600 mg/dL.",
            "Arterial pH is normal level.",
          ],
          answer: 1,
          rationale: "HHS develops slowly over days to weeks, not less than 24 hours.",
        },
        {
          id: "q156",
          question:
            "Which nursing diagnosis is appropriate for a patient with a diabetes insipidus?",
          choices: [
            "Excess fluid volume",
            "Deficient fluid volume",
            "Imbalanced nutrition: more than body requirements",
            "Imbalanced nutrition: less than body requirements",
          ],
          answer: 1,
          rationale: "Diabetes insipidus causes deficient fluid volume.",
        },
        {
          id: "q157",
          question: "Acromegaly results from the excess production of which hormone?",
          choices: [
            "Vasopressin",
            "Thyroid hormones",
            "Adrenocorticotropic hormone",
            "Growth hormone",
          ],
          answer: 3,
          rationale: "Acromegaly is caused by excess growth hormone.",
        },
        {
          id: "q158",
          question: "Which kind of tumor in the pituitary gland results to acromegaly?",
          choices: ["Eosinophilic tumor", "Basophilic tumor", "Chromophobic tumor", "Basal tumor"],
          answer: 0,
          rationale: "Eosinophilic tumors cause acromegaly.",
        },
        {
          id: "q159",
          question:
            "Nurse Pamela is assessing a client with possible Cushing's syndrome. In a client with Cushing's syndrome, the nurse would expect to find:",
          choices: [
            "Hypotension",
            "Thick, coarse skin",
            "Weight gain in arms and legs",
            "Deposits of adipose tissue in the trunk and dorsocervical area.",
          ],
          answer: 3,
          rationale: "Truncal obesity and buffalo hump are signs of Cushing's syndrome.",
        },
        {
          id: "q160",
          question:
            "In a 29-year-old female client who is being successfully treated for Cushing's syndrome, nurse Nicole would expect a decline in:",
          choices: ["Hair loss", "Bone mineralization", "Serum glucose level", "Menstrual flow"],
          answer: 2,
          rationale:
            "Cushing's causes hyperglycemia, so successful treatment lowers serum glucose.",
        },
        {
          id: "q161",
          question:
            "A patient is admitted in the clinic for Conn syndrome. Which of the following is the most prominent sign of the disorder?",
          choices: ["Hypertension", "Hypokalemia", "Polydipsia", "Glucose intolerance"],
          answer: 0,
          rationale: "Hypertension is the most prominent sign of Conn syndrome.",
        },
        {
          id: "q162",
          question: "Addison's disease leads to increased secretion of and retention of",
          choices: ["Potassium, sodium", "Sodium, potassium", "Sodium, calcium", "Calcium, sodium"],
          answer: 0,
          rationale: "Addison's disease causes increased potassium and decreased sodium.",
        },
        {
          id: "q163",
          question:
            "Nurse Anne is caring for a patient with Addison's disease. Which of the following nursing diagnosis is given the HIGHEST priority?",
          choices: [
            "Imbalanced nutrition: more than body requirements",
            "Disturbed body image",
            "Decreased cardiac output",
            "Impaired health maintenance",
          ],
          answer: 2,
          rationale: "Decreased cardiac output is the priority in Addison's disease.",
        },
        {
          id: "q164",
          question:
            "The following are expected laboratory markers for a patient with Addison's disease, EXCEPT:",
          choices: ["Hyperglycemia", "Hyponatremia", "Hyperkalemia", "Leukocytosis"],
          answer: 0,
          rationale: "Hypoglycemia, not hyperglycemia, is expected in Addison's disease.",
        },
        {
          id: "q165",
          question:
            "Nurse Gaine is assessing a client after a thyroidectomy. The assessment reveals muscle twitching and tingling, along with numbness in the fingers, toes, and mouth area. The nurse should suspect which complication?",
          choices: ["Hemorrhage", "Hyperkalemia", "Laryngeal nerve damage", "Tetanus"],
          answer: 3,
          rationale:
            "Muscle twitching and tingling indicate hypocalcemia, which can lead to tetany.",
        },
        {
          id: "q166",
          question:
            "Which of the following nursing interventions must be done to a patient with hypothyroidism experiencing depressed ventilation?",
          choices: [
            "Assess respiratory rate, depth, pattern, pulse oximetry, and arterial blood gases.",
            "Encourage deep breathing, coughing, and incentive spirometry.",
            "Maintain patient airway through suctioning and ventilator support.",
            "All of the above.",
          ],
          answer: 3,
          rationale: "All interventions are appropriate for a patient with depressed ventilation.",
        },
        {
          id: "q167",
          question:
            "Which of the following actions call for re-education for the patient with hypothyroidism?",
          choices: [
            "The patient uses an extra layer of clothing or extra blanket during sleep.",
            "The patient takes the medication with water.",
            "The patient avoids using sedatives.",
            "The patient reports chest pain to the nurse.",
          ],
          answer: 0,
          rationale:
            "Hypothyroid patients are cold intolerant, but using extra clothing is appropriate, not a sign of needing re-education.",
        },
        {
          id: "q168",
          question:
            "Cancer is one of the leading causes of mortality worldwide. Which action is categorized in secondary prevention of cancer?",
          choices: [
            "Eating a nutritious diet and engaging in regular physical exercise.",
            "Getting vaccinated with HPV vaccine.",
            "Performing breast self-examination.",
            "Taking methotrexate.",
          ],
          answer: 2,
          rationale: "Breast self-examination is a secondary prevention.",
        },
        {
          id: "q169",
          question:
            "What is the TNM classification if the primary tumor cannot be assessed, with a regional lymph node metastasis, and no distant metastasis?",
          choices: ["TxNOM1", "TxN1M0", "TONOM1", "TON1M0"],
          answer: 1,
          rationale:
            "TxN1M0 indicates primary tumor cannot be assessed, regional lymph node metastasis, and no distant metastasis.",
        },
        {
          id: "q170",
          question:
            "What is the body surface area of a patient with a weight of 55 kg and height of 1.5 m?",
          choices: ["1.40 m²", "1.51 m²", "1.60 m²", "1.55 m²"],
          answer: 1,
          rationale: "BSA = sqrt(55 x 1.5 / 3600) ≈ 1.51 m².",
        },
        {
          id: "q171",
          question:
            "Compute for the absolute neutrophil count of a patient if the patient has 25% segmented neutrophils, 25% bands, and 6000 WBC cells/mm²",
          choices: ["1000 ANC", "2000 ANC", "3000 ANC", "4000 ANC"],
          answer: 2,
          rationale: "ANC = (25% + 25%) x 6000 = 3000.",
        },
        {
          id: "q172",
          question:
            "The optimal timing to perform breast self-examination is days after menses begin.",
          choices: ["1-2", "3-4", "5-7", "7-10"],
          answer: 2,
          rationale: "BSE is optimally performed 5-7 days after menses begin.",
        },
        {
          id: "q173",
          question: "Which of the following are risk factors for developing breast cancer?",
          choices: [
            "i. Female gender\nii. Increasing age\niii. Early menarche\niv. Late menopause\nv. Nulliparity",
            "I, II, III, IV",
            "I, II, IV, V",
            "I, II, III, IV, V",
            "I, II, III, V",
          ],
          answer: 2,
          rationale: "All are risk factors for breast cancer.",
        },
        {
          id: "q174",
          question:
            "A patient receiving radiation therapy must be advised to do the following, EXCEPT:",
          choices: [
            "Use mild soap with minimal rubbing.",
            "Use deodorant to prevent foul odor.",
            "Use hydrophilic lotions to prevent dryness.",
            "Avoid tight clothes and excessive temperatures.",
          ],
          answer: 1,
          rationale: "Deodorants should be avoided during radiation therapy.",
        },
        {
          id: "q175",
          question: "Which of the following is the most common form of leukemia?",
          choices: [
            "Acute myeloid leukemia (AML)",
            "Acute lymphocytic leukemia (ALL)",
            "Hairy cell leukemia",
            "Acute leukemia",
          ],
          answer: 1,
          rationale: "ALL is the most common form of leukemia.",
        },
        {
          id: "q176",
          question:
            "This type of cell growth aberration is when a type of mature cell is converted into another type of cell.",
          choices: ["Hyperplasia", "Atrophy", "Metaplasia", "Dysplasia"],
          answer: 2,
          rationale: "Metaplasia is the conversion of one mature cell type to another.",
        },
        {
          id: "q177",
          question:
            "This is a recurrent, life-long viral infection that cause blisters on the external genitalia.",
          choices: [
            "Herpes simplex virus 1 (HSV-1)",
            "Herpes simplex virus 2 (HSV-2)",
            "Gonorrhea",
            "Chlamydia",
          ],
          answer: 1,
          rationale: "HSV-2 causes recurrent blisters on the external genitalia.",
        },
        {
          id: "q178",
          question:
            "A pregnant patient was found to have active HSV-2 infection near the time of delivery. Which action is appropriate for the situation?",
          choices: [
            "Subject patient to cesarean delivery.",
            "Vaccinate the mother immediately.",
            "Vaccinate the child immediately after delivery.",
            "No action needed as HSV-2 has no effect on the neonate.",
          ],
          answer: 0,
          rationale: "Cesarean delivery is recommended for active HSV-2 infection near delivery.",
        },
        {
          id: "q179",
          question:
            "The Human Immunodeficiency Virus (HIV) mainly attacks what type of cells in the human body?",
          choices: ["Red blood cells", "CD4+ cells", "Stem cells", "Platelets"],
          answer: 1,
          rationale: "HIV mainly attacks CD4+ cells.",
        },
        {
          id: "q180",
          question:
            "A patient who has tested positive for the human immunodeficiency virus (HIV) arrives at the clinic. The patient's CD4 count is 184 cells/mcL. At what stage of HIV is the patient in?",
          choices: ["Stage 1", "Stage 2", "Stage 3", "Unstageable"],
          answer: 2,
          rationale: "A CD4 count of 184 cells/mcL is Stage 3 (AIDS).",
        },
        {
          id: "q181",
          question:
            "The same patient with decreased CD4+ cell count is at risk for which respiratory complication caused by the microorganisms P. jiroveci?",
          choices: [
            "Mycobacterium avium complex",
            "Tuberculosis",
            "Pneumocystis pneumonia",
            "Candidiasis",
          ],
          answer: 2,
          rationale: "P. jiroveci causes Pneumocystis pneumonia.",
        },
        {
          id: "q182",
          question:
            "What is the most common organism that causes urinary tract infection in older patients?",
          choices: ["Klebsiella", "Pseudomonas", "Proteus", "E. coli"],
          answer: 3,
          rationale: "E. coli is the most common cause of UTI.",
        },
        {
          id: "q183",
          question:
            "The following nursing interventions are appropriate for a patient with urinary tract infection, EXCEPT:",
          choices: [
            "Administer antispasmodic agents as prescribed.",
            "Advise patient to drink liberal amounts of fluids such as water and cranberry juice.",
            "Allow patient to drink 1 cup of coffee or tea in the morning.",
            "Advise patient to void every 2-3 hours.",
          ],
          answer: 2,
          rationale: "Caffeine can irritate the bladder and should be avoided.",
        },
        {
          id: "q184",
          question: "Stress incontinence is correctly described as:",
          choices: [
            "The involuntary loss of urine through an intact urethra as a result of exertion, sneezing, coughing, or changing position.",
            "The involuntary loss of urine associated with a strong urge to void that cannot be suppressed.",
            "The involuntary loss of urine due to physical or cognitive impairment.",
            "The involuntary loss of urine due to extrinsic medical factors, predominantly medications.",
          ],
          answer: 0,
          rationale:
            "Stress incontinence is the involuntary loss of urine due to exertion, sneezing, coughing, or changing position.",
        },
        {
          id: "q185",
          question:
            "Which hormone is generally elevated in a patient with benign prostatic hyperplasia (BPH)?",
          choices: ["Testosterone", "Estrogen", "Dihydrotestosterone", "Gonadotropin"],
          answer: 2,
          rationale: "DHT is elevated in BPH.",
        },
        {
          id: "q186",
          question: "This operation is the benchmark treatment for patients with BPH:",
          choices: [
            "Transurethral microwave thermotherapy",
            "Transurethral incision of the prostate",
            "Transurethral resection of the prostate",
            "Transurethral electrovaporization",
          ],
          answer: 2,
          rationale: "TURP is the benchmark treatment for BPH.",
        },
        {
          id: "q187",
          question: "The following statements regarding screening for BPH are true, EXCEPT:",
          choices: [
            "A voiding diary is used to record voiding frequency and urine volume.",
            "A digital rectal exam (DRE) reveals a large, rubbery, and tender prostate gland.",
            "Postvoid residual urine is measured.",
            "A PSA level must be obtained first before performing DRE.",
          ],
          answer: 3,
          rationale: "PSA is not required before DRE.",
        },
        {
          id: "q188",
          question:
            "Nurse Brand is caring for client who has a third degree burn of the anterior chest and abdomen. Nurse Brand knows that the fluid loss in burn clients happen due to which of the following?",
          choices: [
            "There is an increase in capillary permeability to fluid and macromolecules and a modest increase in hydrostatic pressure inside the perfusing microvessels.",
            "There is loss of proteins that exert hydrostatic pressure in the blood vessels that result to third space shifting.",
            "Fluids evaporated faster because of the heat sustained during the burn incident.",
            "This is due to skin cells minimizing the damage and repairing tissue injury.",
          ],
          answer: 0,
          rationale: "Fluid loss in burns is due to increased capillary permeability.",
        },
        {
          id: "q189",
          question:
            "Nurse Brand expects to prepare which of the following intravenous solutions because it is IV fluid of choice for burn clients?",
          choices: [
            "Normal Saline Solution",
            "Lactated Ringers solution",
            "Dextrose 5% in Lactated Ringers solution",
            "Dextrose 5% in water",
          ],
          answer: 1,
          rationale: "Lactated Ringer's solution is the IV fluid of choice for burn clients.",
        },
        {
          id: "q190",
          question:
            "Nurse brand plans care for a client who has sustained multiple burns with airway involvement. In which order does the nurse prioritize the client's care needs? (First priority to last)",
          choices: [
            "1. Ineffective breathing pattern related to tissue trauma\n2. Acute pain related to tissue trauma\n3. Disturbed body image related to scarring\n4. Risk for infection related to trauma",
            "1,2,3,4",
            "1,2,4,3",
            "1,4,2,3",
            "1,3,2,4",
          ],
          answer: 1,
          rationale: "The priority order is: airway, pain, infection, and body image.",
        },
        {
          id: "q191",
          question:
            "Nurse Brand reviews laboratory values on a client with deep partial-thickness burns to the face and trunk. Which values can the nurse expect during the emergent phase, except?",
          choices: [
            "Arterial pH 7.31",
            "Hematocrit 55%",
            "Hemoglobin of 9.1g/dL",
            "Potassium 6.3mEq/L",
          ],
          answer: 2,
          rationale: "Hemoglobin is typically elevated, not decreased, in the emergent phase.",
        },
        {
          id: "q192",
          question:
            "Nurse Brand assesses a newly admitted client following a burn injury. Which of the following assessment findings cause the nurse to suspect inhalation injury, except?",
          choices: ["Blood tinged sputum", "Facial burns", "Singed Nasal hair", "Audible stridor"],
          answer: 1,
          rationale: "Facial burns are not a specific indicator of inhalation injury.",
        },
        {
          id: "q193",
          question:
            "Nurse Rex is taking care of a patient with suspected gastric cancer. Which of the following tests would confirm the diagnosis?",
          choices: ["Barium Enema", "Barium Swallow", "Ultrasound", "Gastroscopy"],
          answer: 3,
          rationale: "Gastroscopy with biopsy confirms gastric cancer.",
        },
        {
          id: "q194",
          question:
            "Which of the following aspects is the priority focus of nursing management for a client with peritonitis?",
          choices: [
            "Fluid and electrolyte imbalance",
            "Risk for Psychosis",
            "Pain",
            "Ineffective Airway Clearance",
          ],
          answer: 0,
          rationale: "Fluid and electrolyte imbalance is the priority in peritonitis.",
        },
        {
          id: "q195",
          question:
            "Which of the following ulcer is related to malnutrition and inadequate intake of food?",
          choices: ["Mouth ulcers", "Gastric ulcer", "Liver ulcer", "Duodenal ulcer"],
          answer: 0,
          rationale: "Mouth ulcers are related to malnutrition.",
        },
        {
          id: "q196",
          question:
            "To better anticipate alcohol withdrawal in a person who suddenly stopped drinking alcohol, you know that symptoms of withdrawal usually begin how many hours or days after?",
          choices: [
            "12 to 18 hours after cessation of alcohol intake",
            "1 to 2 days after cessation of alcohol intake",
            "4 to 12 hours after cessation of alcohol intake",
            "18 to 24 hours after cessation of alcohol intake",
          ],
          answer: 2,
          rationale: "Alcohol withdrawal symptoms begin 4-12 hours after the last drink.",
        },
        {
          id: "q197",
          question:
            "How can you differentiate a patient undergoing alcohol withdrawal from other patients taking other kinds of substance abuse?",
          choices: [
            "Fine hand tremors, sweating, elevated blood pressure, nausea, vomiting",
            "Sweating, insomnia, coarse hand tremors, elevated blood pressure, nausea",
            "Marked dysphoria, fatigue, vivid and unpleasant dreams, insomnia",
            "Anxiety, restlessness, aching back and legs, nausea, dysphoria",
          ],
          answer: 0,
          rationale:
            "Alcohol withdrawal is characterized by fine tremors, sweating, and elevated BP.",
        },
        {
          id: "q198",
          question:
            "For safe withdrawal from alcohol intake, you anticipate the physician to prescribe which of the following medications?",
          choices: ["Prozac", "Fluoxetine", "Ativan", "Naloxone"],
          answer: 2,
          rationale: "Benzodiazepines like Ativan are used for alcohol withdrawal.",
        },
        {
          id: "q199",
          question:
            "Another patient was rushed to the hospital due to the following manifestations: (+) impaired motor coordination, laughing inappropriately, has short-term memory, has impaired judgment, and has distortions of time and perceptions. You observe that the patient has conjunctival injection and tachycardia. You expect that the patient has been taking which substance for abuse?",
          choices: ["Cocaine", "Cannabis", "Opioid", "Amphetamine"],
          answer: 1,
          rationale: "Cannabis causes conjunctival redness and impaired coordination.",
        },
        {
          id: "q200",
          question:
            "Excessive use of the substance used in the previous number can cause delirium, however, the relative of the patient asked you about this substance overdose. What is the correct response of the nurse?",
          choices: [
            "We monitor for symptoms of overdosage in this substance as it can be very dangerous to the patient.",
            "Do not worry about it. It is under control.",
            "Although excessive use can cause delirium, it can be treated symptomatically. Overdoses of this substance do not occur.",
            "Overdoses can lead to serious complications, so we have the patient monitored every hour.",
          ],
          answer: 2,
          rationale: "Cannabis overdose is rare and usually managed symptomatically.",
        },
        {
          id: "q201",
          question:
            "A patient diagnosed with schizoaffective disorder is admitted for social skills training. Which information should be included in the teaching plan of the nurse?",
          choices: [
            "The adverse reactions of prescribed medications.",
            "Deep breathing techniques to decrease stress and aggression triggers.",
            "Making eye contact when communicating with other people.",
            "Characteristics of being a leader in a group.",
          ],
          answer: 2,
          rationale: "Making eye contact is a social skills training topic.",
        },
        {
          id: "q202",
          question:
            "One of the main treatments for schizophrenia involves psychopharmacology. You are asked by the relative of the patient about the medications of the patient. No further teaching is necessary when the nurse explains which of the following?",
          choices: [
            "Antipsychotic medications, also called neuroleptics, are prescribed primarily to cure the illness.",
            "The conventional antipsychotic medications are both dopamine and serotonin antagonists.",
            "The atypical antipsychotic medications not only diminish positive symptoms, but also lessen the negative signs.",
            "The vehicle for depot injections is sodium, therefore, medications are absorbed slowly over time in the client's system (usually 2 to 4 weeks, eliminating the need for daily oral medications)",
          ],
          answer: 2,
          rationale: "Atypicals treat both positive and negative symptoms.",
        },
        {
          id: "q203",
          question:
            "Extrapyramidal side effects (EPS) are reversible disorders induced by neuroleptic medications: including dystonic reactions, pseudo-parkinsonism, and akathisia. You observed that one of your patients is exhibiting the following: (+) spasm in neck muscle, (+) oculogyric crisis, (+) tongue protrusion. You anticipate which of the following to be ordered?",
          choices: [
            "Administer Diphenhydramine and Prolixin",
            "Stop all antipsychotic medications.",
            "Increase fluid intake",
            "Administer Benadryl and Cogentin",
          ],
          answer: 3,
          rationale: "Benadryl and Cogentin are used to treat EPS.",
        },
        {
          id: "q204",
          question:
            "One of your patients, a 17-year-old patient diagnosed with paranoid schizophrenia experiences command hallucinations to cause harm to others. The parents ask you about where do these voices come from, which is the appropriate nursing reply?",
          choices: [
            '"Your child has too little serotonin in the brain causing delusions and hallucinations."',
            '"Your child has a chemical imbalance of the brain which leads to altered thoughts."',
            '"Your child\'s hallucinations are caused by medication interactions."',
            '"Your child\'s abnormal hormonal changes have precipitated auditory hallucinations."',
          ],
          answer: 1,
          rationale: "Schizophrenia is a result of a chemical imbalance in the brain.",
        },
        {
          id: "q205",
          question:
            "A fearful and paranoid patient has the potential to cause harm to self or others. Which nursing action must be PRIORITIZED to maintain the safety of the patient and the ward?",
          choices: [
            "Assess for medication side effects and noncompliance.",
            "Interpret attempts at communicating with other patients.",
            "Assess triggers for bizarre, inappropriate behaviors with others.",
            "Note escalating behaviors and intervene immediately.",
          ],
          answer: 3,
          rationale: "The priority is to intervene immediately for escalating behaviors.",
        },
        {
          id: "q206",
          question:
            "The bipolar disorder, previously called manic-depressive illness, is one of the primary mood disorders that is characterized by having mood cycles between extremes of mania and depression. Which of the following correctly defines the illness?",
          choices: [
            "Some patients exhibit delusions and hallucinations during the manic episode.",
            "Hypomania is the distinct period during the person is in an abnormally and persistently elevated, expansive, or irritable.",
            "Pressured speech, flight of ideas, inflated self-esteem or grandiosity may accompany the depression episode.",
            "Hypomania is a period of abnormally and persistently elevated, expansive, or irritable mood lasting for 6 days.",
          ],
          answer: 0,
          rationale: "Psychotic features can occur in severe mania.",
        },
        {
          id: "q207",
          question:
            "You are differentiating the types and related disorders of bipolar disorder, which of the following needs further teaching when mentioned by one of the relatives?",
          choices: [
            "Bipolar I disorder is described as one or more manic or mixed episodes usually accompanied by major depressive episodes.",
            "Bipolar II disorder is described as one or more major depressive episodes accompanied by at least one hypomanic episode.",
            "Dysthymic disorder is characterized by at least 2 years of depressed mood for more days, but less severe symptoms that do not meet the criteria for a major depressive episode.",
            "Cyclothymic disorder is characterized by 1 year of numerous periods of both manic symptoms that do not meet the criteria for bipolar disorder.",
          ],
          answer: 3,
          rationale: "Cyclothymia is characterized by 2 years, not 1.",
        },
        {
          id: "q208",
          question:
            "A nurse reviews the laboratory results of a patient suspected of having major depressive disorder, which of the following results would potentially RULE OUT this diagnosis?",
          choices: [
            "Potassium (K+) level of 4.2 mEq/L",
            "Sodium (Na+) level of 140 mEq/L",
            "Calcium (Ca2+) level of 9.5 mg/dL",
            "Thyroid-stimulating hormone (TSH) level of 6.2 U/mL",
          ],
          answer: 3,
          rationale: "High TSH indicates hypothyroidism, which can cause depression.",
        },
        {
          id: "q209",
          question:
            "You hear the physician explaining that this antidepressant produces few sedating, anticholinergic, and cardiovascular side effects that increases the compliance of the patients in taking their medications. You anticipate which of the medications to be prescribed by the physician?",
          choices: ["Cymbalta", "Tofranil", "Prozac", "Nardil"],
          answer: 2,
          rationale: "Prozac (fluoxetine) is an SSRI with fewer side effects than TCAs or MAOIs.",
        },
        {
          id: "q210",
          question:
            "You have a patient admitted due to symptoms of major depressive disorder. During the handover, which of the following condition(s) will make you question the prescription of tricyclic antidepressant?",
          choices: [
            "i. Liver severe impairment\nii. Post-myocardial infarction (acute recovery phase)\niii. Concurrently with MAOIs\niv. Glaucoma\nv. Diabetes mellitus\nvi. Hypothyroidism",
            "I, II, III, V",
            "I, II, III, V, VI",
            "I, II, III, IV, V",
            "I, II, III, IV, V, VI",
          ],
          answer: 3,
          rationale: "All except diabetes mellitus are contraindications or precautions.",
        },
        {
          id: "q211",
          question:
            "It is important to have meaningful contact with the clients who have mental illness, especially to those who have difficulty in interacting with other people. Which of the following statements when said by the nurse may need further teaching by the supervisor?",
          choices: [
            "I am going now, I will be back in an hour to see you again.",
            "I'm going to sit with you for as long as you need me to. If you would like to talk, please tell me.",
            "How are you today, Shiela?",
            "Tell me more about what happened that day you felt hopeless?",
          ],
          answer: 2,
          rationale: "Using 'How are you today?' can be a closed-ended question.",
        },
        {
          id: "q212",
          question:
            "You are assigned with a client who has depression for a week now. She is observed to be easily overwhelmed, which of the following tasks will you give or ask her?",
          choices: [
            "It's time to get dressed now.",
            "What would like to do for this week?",
            "Here are your pants, put them on.",
            "None of the above.",
          ],
          answer: 0,
          rationale: "Breaking tasks down to simple, direct requests is helpful.",
        },
        {
          id: "q213",
          question:
            "A patient with bipolar disorder is experiencing a depressive episode, she declined to engage in the morning activities of the ward. She said that she is not interested and has no energy for it. As a nurse, what would you say to the patient to promote participation?",
          choices: [
            "Okay, then you can join us for the afternoon activities instead. Would you like that?",
            "You don't seem like you're very tired, let's try to join the morning activities.",
            "Tell me more about your feelings.",
            "I know you feel like staying in bed, but it is time to get up for breakfast.",
          ],
          answer: 3,
          rationale: "Gentle but firm encouragement is needed for a depressed patient.",
        },
        {
          id: "q214",
          question:
            "One of the clients who is in the manic phase has been invading the other clients' personal space for multiple times. How can you establish limit setting with this patient?",
          choices: [
            "Can you please stay away from other patients, they are feeling uncomfortable.",
            "It is unacceptable to hug other clients. You may talk to others, but do not touch them.",
            "Tell me more about the reason you stay close with the other clients.",
            "Do not talk to other clients.",
          ],
          answer: 1,
          rationale: "Clear limit setting with consequences is important.",
        },
        {
          id: "q215",
          question:
            "In an acute manic episode, a client was starting to undress in the living room. How can you handle this situation?",
          choices: [
            "Shane, let's go to your room and find a sweater.",
            "What are you doing, Shane?",
            "How can you do this in the living room?",
            "Do not do this, Shane. This is inappropriate.",
          ],
          answer: 0,
          rationale: "Redirecting the patient is the most therapeutic.",
        },
        {
          id: "q216",
          question:
            "Attention deficit hyperactivity disorder (ADHD) is usually identified and diagnosed when the child begins preschool or school age. By the time the child starts school, symptoms of ADHD begin to interfere significantly with behavior and performance. One parent who has child diagnosed with ADHD asked you about the treatment available for this condition, what is the correct response to the parent?",
          choices: [
            "ADHD is a chronic illness, the most effective treatment is combined pharmacotherapy with behavioral, psychosocial, and educational interventions.",
            "The goal of treatment in ADHD is to reduce hypoactivity, to increase the child's attention so that he can grow and develop normally.",
            "Megavitamin therapy alone is effective treatment for ADHD.",
            "Only oral medications are available for ADHD treatments.",
          ],
          answer: 0,
          rationale: "Combined treatment is most effective for ADHD.",
        },
        {
          id: "q217",
          question:
            "Medications do not automatically improve the child's academic performance or ensure that they can make friends already. Which of the following techniques can be used for behavioral strategies to help the child master appropriate behaviors with other kids?",
          choices: ["Time out", "Therapeutic play", "Shadowing", "Praise/rewards"],
          answer: 3,
          rationale: "Positive reinforcement is an effective behavioral strategy.",
        },
        {
          id: "q218",
          question:
            "When asked about the usual characteristics of clients with ADHD, which of the following is NOT true?",
          choices: [
            "Generally, their self-esteem is low due to not being successful at school, or not having to develop many friends.",
            "The child cannot sit still in a chair, squirms, and wiggles while trying to do so during an interview.",
            "There are generally no impairments in the area of thought process and content.",
            "Children with ADHD usually exhibit good judgment and often think too much before acting.",
          ],
          answer: 3,
          rationale: "ADHD children often have poor judgment and act impulsively.",
        },
        {
          id: "q219",
          question:
            "When caring for a pre-school client diagnosed with ADHD, which of the following is the PRIORITY nursing diagnosis?",
          choices: [
            "Compromised Family Coping",
            "Risk for Injury",
            "Impaired Social Interaction",
            "Ineffective Role Performance",
          ],
          answer: 1,
          rationale: "Risk for injury is the priority due to impulsivity and hyperactivity.",
        },
        {
          id: "q220",
          question:
            "Ritalin (Methylphenidate) is a stimulant used to treat ADHD. Which of the following is the PRIORITY nursing consideration while using this drug?",
          choices: [
            "Give regular tables AFTER meals.",
            "Monitor for elevated liver function tests and appetite suppression.",
            "Monitor for appetite suppression and growth delays.",
            "Use calorie-free beverages to relieve dry mouth.",
          ],
          answer: 2,
          rationale: "Growth delays and appetite suppression are key concerns.",
        },
        {
          id: "q221",
          question:
            "Personality can be defined as an ingrained enduring pattern of behaving and relating to self, others, and the environment; including perceptions, attitudes, and emotions. Personality disorders are diagnosed when personality traits become inflexible, maladaptive, and significantly interfere with how a person functions in a society. What pertains to having disregard for rights of others, rules, and laws?",
          choices: ["Antisocial", "Schizoid", "Schizotypal", "Narcissistic"],
          answer: 0,
          rationale: "Antisocial personality disorder is characterized by disregard for rights.",
        },
        {
          id: "q222",
          question:
            "One of your patients appear aloof and withdrawn, remains a considerable physical distance from the nurse. You see that the patient appears guarded. Which of the following defense mechanisms would you expect this patient to have?",
          choices: ["Projection", "Denial", "Rationalization", "Displacement"],
          answer: 0,
          rationale: "Projection is common in paranoid or guarded patients.",
        },
        {
          id: "q223",
          question:
            "One of the patients, dressed in odd appearance, exhibit pervasive patterns of social and interpersonal deficits marked by acute discomfort with reduced capacity for close relationships. They also have cognitive or perceptual distortions and behavioral eccentricities. When making a plan, what is the focus of nursing care?",
          choices: [
            "Development of self-care and social skills, improved functioning in the community.",
            "Approach in formal, business-like manner and refrain from social chitchat or jokes.",
            "Help client validate ideas before taking actions.",
            "Able to identify acceptable and expected behaviors.",
          ],
          answer: 0,
          rationale: "Focus on developing social and self-care skills.",
        },
        {
          id: "q224",
          question:
            "In promoting responsible behavior in patients with antisocial personality disorder, LIMIT SETTING is essential to not be manipulated by the patient. Which of the following interventions pertains to limit setting with the patient?",
          choices: [
            "I. Stating the limit\nII. Decreased impulsivity\nIII. Identify consequences of exceeding the limit\nIV. Taking time-out from stressful situations\nV. Identify expected or acceptable behaviors\nVI. Identify barriers to role fulfillment",
            "I, II, III",
            "I, III, IV",
            "I, III, IV, V",
            "All of the above",
          ],
          answer: 1,
          rationale:
            "Limit setting involves stating the limit, identifying consequences, and identifying acceptable behaviors.",
        },
        {
          id: "q225",
          question:
            "Borderline personality disorder is characterized by pervasive pattern of unstable interpersonal relationships, self-image, and affect. Which of the following is the prevailing mood and affect in these patients?",
          choices: ["Dysphoric", "False emotions", "Aloof", "None of the above"],
          answer: 0,
          rationale: "Dysphoria is common in borderline personality disorder.",
        },
        {
          id: "q226",
          question:
            "Autistic disorder, best known of the pervasive developmental disorders, is more prevalent in boys than girls. What are the characteristics you expect to see in children with this disorder?",
          choices: [
            "I. Little eye contact\nII. Limited interaction with parents or peers\nIII. Can engage in make-believe play\nIV. Foot flapping\nV. Express little to no mood",
            "I, II, III",
            "I, II, IV, V",
            "I, II, V",
            "I, II, IV",
          ],
          answer: 1,
          rationale:
            "Autism is characterized by little eye contact, limited interaction, foot flapping, and flat affect.",
        },
        {
          id: "q227",
          question:
            "The parents asked you about the goals of treatment in the management of autism. You are correct when you explain which of the following?",
          choices: [
            "To reduce stereotyped behaviors, promote learning and acquisition of language skills.",
            "Administration of pharmacologic treatment with antipsychotics such as haloperidol",
            "To reduce the long-term complications of the disorder",
            "To promote safety and diminish self-injury",
          ],
          answer: 0,
          rationale: "The goal is to reduce behaviors and promote learning.",
        },
        {
          id: "q228",
          question:
            "You encounter a parent with a daughter, aged 4 months, with a chief complaint of developing multiple deficits after a period of normal functioning. The child is observed to have lost motor skills and begins showing stereotyped movements instead. You anticipate which of the following to be the patient's diagnosis?",
          choices: [
            "Autism",
            "Rett's disorder",
            "Childhood disintegrative disorder",
            "Asperger's disorder",
          ],
          answer: 1,
          rationale: "Rett's disorder typically presents with regression in motor skills.",
        },
        {
          id: "q229",
          question:
            "Another parent complained that her 3-year-old son was observed to have marked regression in communication, language, social function, and motor skills after apparent normal growth and development. Autism has been ruled out by the attending physician, which of the following diagnosis do you anticipate being considered next?",
          choices: [
            "Rett's disorder",
            "Childhood disintegrative disorder",
            "Asperger's disorder",
            "None of the above",
          ],
          answer: 1,
          rationale: "Childhood disintegrative disorder is characterized by regression.",
        },
        {
          id: "q230",
          question:
            "An 8-year-old with attention deficit hyperactivity disorder is jumping off the bed onto a chair. Which should be the nurse's first step?",
          choices: [
            '"I need to talk to you."',
            '"Stop that right now."',
            '"You are going to hurt yourself."',
            '"Why are you jumping off the bed?"',
          ],
          answer: 1,
          rationale: "Safety is the priority; the nurse must stop the behavior immediately.",
        },
        {
          id: "q231",
          question:
            "Having one specific cause for eating disorders is unknown. Many risk factors contribute to developing certain eating disorders such as biologic vulnerability, developmental risks, family risk factors, and sociocultural risk factors. Which of the following risk factors most likely contributes to the development of Bulimia nervosa and not in Anorexia nervosa?",
          choices: [
            "Obesity",
            "Issues of having control and autonomy",
            "Chaotic family with loose boundaries",
            "Media focus on beauty, thinness, fitness",
          ],
          answer: 2,
          rationale: "Chaotic family dynamics are more common in bulimia.",
        },
        {
          id: "q232",
          question:
            "Aside from the psychological aspect of eating disorders, physiological manifestations are also apparent in clients with eating disorders. Which of the following will you NOT expect to see as a medical complication related to weight loss in these patients?",
          choices: ["Osteoporosis", "Hyperthyroidism", "Bradycardia", "Constipation"],
          answer: 1,
          rationale: "Hyperthyroidism is not a complication of weight loss.",
        },
        {
          id: "q233",
          question:
            "You are assigned to a patient diagnosed with anorexia nervosa. She is observed to begin to eat more food as the treatment progresses and her parents starts to get relieved of the improvement they see in their daughter. One night, you see her going to the bathroom, which of the following should you do?",
          choices: [
            "Supervise the patient.",
            "Let her go to the bathroom alone as she is already improving.",
            "Let another patient go to the bathroom with her.",
            "Ask the patient to open her mouth after going to the bathroom.",
          ],
          answer: 0,
          rationale: "Supervision is needed to prevent purging.",
        },
        {
          id: "q234",
          question:
            "In caring for patients with anorexia nervosa, which of the following medications is shown to be successful because of its antipsychotic effect on bizarre body image distortions and is associated with weight gain?",
          choices: [
            "Amitriptyline (Elavil)",
            "Olanzapine (Zyprexa)",
            "Antihistamine cyproheptadine (Periactin)",
            "Fluoxetine (Prozac)",
          ],
          answer: 1,
          rationale: "Olanzapine is an atypical antipsychotic associated with weight gain.",
        },
        {
          id: "q235",
          question:
            "In patients with Bulimia nervosa, they are mostly treated outpatient as long as purging and binging is not out of control. Which treatment has been found to be most effective and involves strategies to modify client's thinking and actions?",
          choices: [
            "Psychopharmacology",
            "Bulimic modification therapy",
            "Cognitive-behavioral therapy",
            "Flooding",
          ],
          answer: 2,
          rationale: "CBT is the most effective treatment for bulimia.",
        },
        {
          id: "q236",
          question:
            "To help a patient with bulimia nervosa, which of the following techniques is done to raise awareness about their behavior patterns, its relationship with eating patterns, moods, and situations by keeping a diary or journal?",
          choices: ["Self-monitoring", "Nutrition evaluation", "Cold turkey method", "Diet plan"],
          answer: 0,
          rationale: "Self-monitoring involves tracking behavior and moods.",
        },
        {
          id: "q237",
          question:
            "When establishing nutritional eating patterns with patients diagnosed with eating disorders, what are the nursing interventions that can be done?",
          choices: [
            "Sit with the client during meals and snacks.",
            "Let the patient sit with other patients.",
            "Observe the patient before meals.",
            "Weigh the patient daily in any clothing available.",
          ],
          answer: 0,
          rationale: "Sitting with the client during meals provides support.",
        },
        {
          id: "q238",
          question:
            "What should the nurse focus in initial interview of a client with Alzheimer's?",
          choices: [
            "Complete disorientation of person, place and time",
            "Onset, duration and progression of signs and symptoms",
            "Familial history of the disease",
            "Previous medical visits",
          ],
          answer: 1,
          rationale: "Focus on the onset and progression of symptoms.",
        },
        {
          id: "q239",
          question:
            "A client is diagnosed with Alzheimer's disease. The nurse advocates for the addition of which medication?",
          choices: ["Lorazepam", "Chlorpromazine", "Atorvastatin", "Donezepil"],
          answer: 3,
          rationale: "Donezepil is used to treat Alzheimer's.",
        },
        {
          id: "q240",
          question:
            "During the administration of a Mini-Mental Status Exam (MMSE), the healthcare provider asks the patient to copy a simple geometric shape. This part of the exam tests which of the following mental functions?",
          choices: [
            "Visual comprehension and praxis",
            "Attention span",
            "Math abilities",
            "Short term memory",
          ],
          answer: 0,
          rationale: "Copying a shape tests visual comprehension and praxis.",
        },
        {
          id: "q241",
          question:
            "Environment modification is essential in clients with Alzheimer's disease. The nurse must put the client in what room?",
          choices: [
            "Near the nurses' station.",
            "Semiprivate room",
            "In a room where you must pass the nurses' station to leave.",
            "Private room",
          ],
          answer: 0,
          rationale: "Placing the client near the nurses' station allows for close monitoring.",
        },
        {
          id: "q242",
          question:
            "Nurse Zoe cares for a client with Borderline Personality Disorder. Which of the following behavior/s is/are consistent with this personality disorder?",
          choices: [
            "High regards to one's abilities.",
            "Recurrent suicidal behavior, gestures, or threats, or self-mutilating behavior.",
            "Little interest to intimate relationship",
            "Highly dependent on others.",
          ],
          answer: 1,
          rationale: "Self-mutilating behavior is a feature of BPD.",
        },
        {
          id: "q243",
          question:
            "Nurse Zoe knows that clients with Borderline Personality Disorder manifest splitting. This is manifested by which of the following behavior?",
          choices: [
            "Defining people as black or white; that is, wholly good or wholly bad.",
            "They have alter ego that reveals itself thus the word splitting.",
            "They make people fight and split a group to become enemies.",
            "None of the above.",
          ],
          answer: 0,
          rationale: "Splitting is black-and-white thinking.",
        },
        {
          id: "q244",
          question:
            "Nurse Zoe is caring for a client with Borderline personality disorder. Which of the following nursing diagnosis is the priority?",
          choices: [
            "Imbalance Nutrition: Less than the body requirement",
            "Risk for injury: towards self",
            "Disturbed body image",
            "Restlessness",
          ],
          answer: 1,
          rationale: "Risk for self-injury is the priority.",
        },
        {
          id: "q245",
          question:
            "Nurse Zoe is caring for a client with antisocial personality disorder. Which of the following traits will most likely surface during assessment?",
          choices: ["Unstable self-image", "Poor judgement", "Memory lapses", "Dependence"],
          answer: 1,
          rationale:
            "Poor judgment and impulsivity are hallmarks of antisocial personality disorder.",
        },
      ],
    },
    {
      id: "set-5",
      title: "SET 5",
      description:
        "Comprehensive nursing review covering medical-surgical, psychiatric, maternal and child health, and community health nursing concepts.",
      questions: [
        {
          id: "q1",
          question:
            "In the shock/severe stage of leptospirosis, which manifestation is most associated with severe disease?",
          choices: ["Jaundice", "Fever", "Nausea", "Bleeding"],
          answer: 3,
          rationale: "Bleeding is most associated with severe leptospirosis.",
        },
        {
          id: "q2",
          question: "Where do the skin manifestations/rash of measles typically start?",
          choices: ["Neck", "Face", "Chest", "Hands"],
          answer: 1,
          rationale: "Measles rash typically starts on the face and spreads downward.",
        },
        {
          id: "q3",
          question: "Which is a clinical manifestation of acromegaly?",
          choices: ["Truncal obesity", "Bull neck", "Striae", "Wide nose and lips"],
          answer: 3,
          rationale:
            "Acromegaly causes enlargement of facial features including a wide nose and lips.",
        },
        {
          id: "q4",
          question:
            "A patient is being bullied because of changes caused by her disease. What is the most appropriate nursing diagnosis?",
          choices: [
            "Altered mental status",
            "Impaired skin integrity",
            "Altered mobility related to fatigue",
            "Disturbed body image",
          ],
          answer: 3,
          rationale: "Bullying due to physical changes indicates disturbed body image.",
        },
        {
          id: "q5",
          question:
            "Which medication among the following is most commonly used for pain/inflammation in rheumatoid arthritis?",
          choices: ["Atropine sulfate", "Diclofenac", "Paracetamol", "Phenytoin"],
          answer: 1,
          rationale: "Diclofenac is an NSAID commonly used for pain and inflammation in RA.",
        },
        {
          id: "q6",
          question: "What is the normal percussion sound over healthy lung tissue?",
          choices: ["Dull", "Flat", "Resonance", "Hyperresonant"],
          answer: 2,
          rationale: "Resonance is the normal percussion sound over healthy lung tissue.",
        },
        {
          id: "q7",
          question: "Which BP represents Stage 2 hypertension?",
          choices: ["139/90", "100/80", "129/70", "90/70"],
          answer: 0,
          rationale: "139/90 mmHg represents Stage 2 hypertension.",
        },
        {
          id: "q8",
          question: "Which of the following cannot directly cause sepsis?",
          choices: ["Direct intravascular access", "Gout", "Surgery", "Bacterial pneumonia"],
          answer: 1,
          rationale:
            "Gout is an inflammatory disease, not an infection, and does not directly cause sepsis.",
        },
        {
          id: "q9",
          question: "A patient is advised to reduce 30 lb. How many kilograms is this?",
          choices: ["12.5 kg", "11.5 kg", "14 kg", "17 kg"],
          answer: 2,
          rationale: "30 ÷ 2.2 = 13.64 kg ≈ 14 kg.",
        },
        {
          id: "q10",
          question:
            "Prior to delivery, a mother is found to have genital herpes. What would you expect the physician to do?",
          choices: [
            "Cesarean delivery",
            "Vaccinate the child after delivery",
            "Vaccinate the mother immediately",
            "Vaccinate the mother after delivery",
          ],
          answer: 0,
          rationale:
            "Cesarean delivery is indicated if active genital lesions are present at labor to prevent neonatal transmission.",
        },
        {
          id: "q11",
          question:
            "A patient has DKA and is rushed to the hospital. What breathing pattern would you expect?",
          choices: [
            "Cheyne-Stokes respiration",
            "Kussmaul respiration",
            "Biot's respiration",
            "Sleep apnea",
          ],
          answer: 1,
          rationale: "Kussmaul respirations are deep, rapid breaths seen in DKA.",
        },
        {
          id: "q12",
          question:
            "A patient has a blood glucose of 800mg/dL, labored/deep breathing, and ketones. What is the likely condition?",
          choices: ["Diabetic coma", "Diabetic Ketoacidosis", "Diabetes Mellitus", "HHNS/HHS"],
          answer: 1,
          rationale: "High glucose, deep breathing, and ketones indicate DKA.",
        },
        {
          id: "q13",
          question:
            "Upon arrival at the hospital with DKA, which regular insulin would you expect the physician to administer?",
          choices: ["Humalog", "Glargine", "Humulin", "NPH"],
          answer: 2,
          rationale: "Humulin R (regular insulin) is given IV in DKA.",
        },
        {
          id: "q14",
          question: "What triage tag is assigned to a patient who requires immediate attention?",
          choices: ["Green", "Yellow", "Red", "Black"],
          answer: 2,
          rationale: "Red triage tag indicates immediate (life-threatening) condition.",
        },
        {
          id: "q15",
          question: "In disaster management and preparedness, which stage is vital?",
          choices: ["Preparedness", "Triaging", "Response", "All stages"],
          answer: 3,
          rationale: "All stages of disaster management are vital.",
        },
        {
          id: "q16",
          question: "During a disaster, what is the primary role of the nurse?",
          choices: [
            "Help patients with coping mechanisms",
            "Triaging",
            "Check availability of hospital supplies",
            "Check whether equipment is functioning",
          ],
          answer: 1,
          rationale: "The primary role of the nurse in a disaster is triaging.",
        },
        {
          id: "q17",
          question:
            "When hospital beds and equipment are limited during a disaster, what is the ethical priority?",
          choices: [
            "Justice distribution",
            "Greater good for the greater number of people",
            "Nonmaleficence",
            "Beneficence",
          ],
          answer: 1,
          rationale: "The guiding principle is the greatest good for the greatest number.",
        },
        {
          id: "q18",
          question:
            "After witnessing/escaping a mass killing, a 9-year-old develops frequent urination. What level of anxiety is the child experiencing?",
          choices: ["Mild", "Moderate", "Severe", "Panic"],
          answer: 1,
          rationale: "Frequent urination is a sign of moderate anxiety.",
        },
        {
          id: "q19",
          question:
            "After the traumatic event, a 10-year-old is restless, has difficulty breathing, and experiences chest pain. What level of anxiety is this?",
          choices: ["Mild", "Moderate", "Severe", "Panic"],
          answer: 2,
          rationale: "Dyspnea and chest pain are signs of severe anxiety.",
        },
        {
          id: "q20",
          question:
            "A 12-year-old is restless, fidgeting her hands, but her movements are still purposeful. What level of anxiety is she experiencing?",
          choices: ["Mild", "Moderate", "Severe", "Panic"],
          answer: 1,
          rationale: "Restlessness with purposeful movements indicates moderate anxiety.",
        },
        {
          id: "q21",
          question:
            "A hyperventilating patient has high blood pH and low PaCO2. What is the ABG interpretation?",
          choices: [
            "Metabolic acidosis",
            "Respiratory acidosis",
            "Metabolic alkalosis",
            "Respiratory alkalosis",
          ],
          answer: 3,
          rationale:
            "Hyperventilation causes excessive CO2 elimination, leading to respiratory alkalosis.",
        },
        {
          id: "q22",
          question: "After intervention, the patient's pH is 7.44. What is the interpretation?",
          choices: ["Compensating", "Normal", "Alkalosis", "Acidosis"],
          answer: 1,
          rationale: "A pH of 7.44 is within normal range (7.35-7.45).",
        },
        {
          id: "q23",
          question:
            "A pregnant woman states that her husband is experiencing symptoms similar to hers. What symptom would you expect?",
          choices: ["Always moody", "Nausea and vomiting", "Ambivalence", "Frequent urination"],
          answer: 1,
          rationale: "Couvade syndrome includes nausea and vomiting experienced by the partner.",
        },
        {
          id: "q24",
          question: "What is the causative agent of leptospirosis?",
          choices: ["Virus", "Bacteria", "Fungus", "Parasite"],
          answer: 1,
          rationale: "Leptospirosis is caused by pathogenic Leptospira bacteria.",
        },
        {
          id: "q25",
          question:
            "Who is accountable for counting instruments/equipment, sharps, and sponges in the operating room?",
          choices: [
            "Scrub nurse only",
            "Circulating nurse only",
            "Scrub nurse and circulating nurse together",
            "Surgeon only",
          ],
          answer: 2,
          rationale:
            "The scrub person and circulating nurse perform and verify the surgical count together.",
        },
        {
          id: "q26",
          question:
            "During which phase of COPAR does the community participate in identifying and analyzing its health problems, needs, and available resources?",
          choices: [
            "Pre-entry phase",
            "Entry phase",
            "Organization-building phase",
            "Sustenance and strengthening phase",
          ],
          answer: 1,
          rationale:
            "The entry phase involves community participation in identifying and analyzing health problems.",
        },
        {
          id: "q27",
          question:
            "Which of the following is NOT a standard color commonly used for healthcare waste segregation in Philippine healthcare facilities?",
          choices: ["Pink", "Yellow", "Red", "Black"],
          answer: 0,
          rationale:
            "Pink is not a standard color for healthcare waste segregation in the Philippines.",
        },
        {
          id: "q28",
          question:
            "Which of the following is a major contributor to climate change that can adversely affect the health of Filipinos?",
          choices: [
            "Air pollution from fossil-fuel combustion",
            "High heat index",
            "Overcrowding",
            "Poverty",
          ],
          answer: 0,
          rationale:
            "Air pollution from fossil-fuel combustion is a major contributor to climate change.",
        },
        {
          id: "q29",
          question: "What is the usual dose of Oral Polio Vaccine (OPV) administered to a child?",
          choices: ["1 drop", "2 drops", "3 drops", "5 drops"],
          answer: 1,
          rationale: "The usual dose of OPV is 2 drops orally.",
        },
        {
          id: "q30",
          question: "What is the primary mode of transmission of poliomyelitis?",
          choices: ["Airborne", "Fecal-oral", "Droplet", "Direct contact"],
          answer: 1,
          rationale: "Poliomyelitis is transmitted via fecal-oral route.",
        },
        {
          id: "q31",
          question:
            "Which task is most appropriate for the registered nurse to delegate to a nursing aide/UAP?",
          choices: [
            "Initial patient assessment",
            "Patient discharge teaching",
            "Assisting a stable patient with bathing and hygiene",
            "Evaluating the patient's response to medication",
          ],
          answer: 2,
          rationale:
            "Delegating routine, predictable tasks like bathing and hygiene is appropriate.",
        },
        {
          id: "q32",
          question: "What type of immunity results from vaccination?",
          choices: ["Natural active", "Artificial active", "Natural passive", "Artificial passive"],
          answer: 1,
          rationale: "Vaccination provides artificially acquired active immunity.",
        },
        {
          id: "q33",
          question: "What is the antidote for magnesium sulfate toxicity?",
          choices: ["Calcium gluconate", "Sodium bicarbonate", "Naloxone", "Vitamin K"],
          answer: 0,
          rationale: "Calcium gluconate is the antidote for magnesium sulfate toxicity.",
        },
        {
          id: "q34",
          question:
            "Upon entering a patient's room, the nurse notices that a curtain is on fire. What sequence of actions should the nurse follow?",
          choices: ["RACE", "PASS", "ABCDE", "CPR"],
          answer: 0,
          rationale: "RACE: Rescue, Alarm, Contain, Extinguish/Evacuate.",
        },
        {
          id: "q35",
          question:
            "What is the primary mode of transmission of amoebiasis (Entamoeba histolytica)?",
          choices: ["Fecal-oral", "Airborne", "Droplet", "Vector-borne"],
          answer: 0,
          rationale: "Amoebiasis is transmitted via fecal-oral route.",
        },
        {
          id: "q36",
          question: "What is the primary mode of transmission of German measles (rubella)?",
          choices: ["Fecal-oral", "Respiratory droplets", "Airborne", "Direct contact"],
          answer: 1,
          rationale: "Rubella is transmitted via respiratory droplets.",
        },
        {
          id: "q37",
          question: "What is the mode of transmission of pulmonary tuberculosis (PTB)?",
          choices: ["Fecal-oral", "Droplet", "Airborne", "Direct contact"],
          answer: 2,
          rationale: "PTB is transmitted via airborne route.",
        },
        {
          id: "q38",
          question: "Which findings should make the nurse suspect pulmonary tuberculosis?",
          choices: [
            "Persistent cough, weight loss, fever, night sweats",
            "Headache, dizziness, nausea",
            "Diarrhea, abdominal pain",
            "Joint pain and swelling",
          ],
          answer: 0,
          rationale:
            "Classic symptoms of PTB include persistent cough, weight loss, fever, and night sweats.",
        },
        {
          id: "q39",
          question: "What is the difference between active and passive immunity?",
          choices: [
            "Active produces antibodies; passive receives antibodies",
            "Passive produces antibodies; active receives antibodies",
            "Both produce antibodies",
            "Both receive antibodies",
          ],
          answer: 0,
          rationale:
            "Active immunity produces antibodies; passive immunity receives preformed antibodies.",
        },
        {
          id: "q40",
          question:
            "Immediately after delivery, where should the nurse expect to palpate the uterine fundus?",
          choices: [
            "Below the umbilicus",
            "At the level of the umbilicus",
            "Above the umbilicus",
            "At the symphysis pubis",
          ],
          answer: 1,
          rationale:
            "The fundus is at or near the level of the umbilicus immediately after delivery.",
        },
        {
          id: "q41",
          question: "Which maternal vital sign normally slightly increases during pregnancy?",
          choices: ["Blood pressure", "Heart rate", "Respiratory rate", "Temperature"],
          answer: 1,
          rationale: "Heart rate normally slightly increases during pregnancy.",
        },
        {
          id: "q42",
          question: "What is a nursing audit?",
          choices: [
            "A systematic evaluation of nursing care and documentation",
            "A financial review of hospital billing",
            "A patient satisfaction survey",
            "A medication inventory check",
          ],
          answer: 0,
          rationale:
            "A nursing audit is a systematic evaluation of nursing care and documentation.",
        },
        {
          id: "q43",
          question: "What is the difference between a concurrent and retrospective nursing audit?",
          choices: [
            "Concurrent is during care; retrospective is after care",
            "Concurrent is after care; retrospective is during care",
            "Both are after care",
            "Both are during care",
          ],
          answer: 0,
          rationale:
            "Concurrent audit is conducted during care; retrospective audit is after discharge.",
        },
        {
          id: "q44",
          question: "What is performance appraisal in nursing management?",
          choices: [
            "A systematic evaluation of an employee's job performance",
            "An evaluation of patient care quality",
            "A financial review of the unit",
            "A patient safety assessment",
          ],
          answer: 0,
          rationale: "Performance appraisal evaluates an employee's job performance.",
        },
        {
          id: "q45",
          question: "Which primary tooth usually erupts first in an infant?",
          choices: [
            "Mandibular central incisors",
            "Maxillary central incisors",
            "Mandibular molars",
            "Canines",
          ],
          answer: 0,
          rationale: "Mandibular central incisors (lower central incisors) are the first to erupt.",
        },
        {
          id: "q46",
          question:
            "A child develops periorbital edema, dark/cola-colored urine, decreased urine output, and hypertension following a recent streptococcal infection. What condition should the nurse suspect?",
          choices: [
            "Acute post-streptococcal glomerulonephritis",
            "Nephrotic syndrome",
            "Urinary tract infection",
            "Acute kidney injury",
          ],
          answer: 0,
          rationale:
            "APSGN presents with periorbital edema, cola-colored urine, oliguria, and hypertension.",
        },
        {
          id: "q47",
          question:
            "What should the nurse closely monitor in a child with acute glomerulonephritis?",
          choices: [
            "Blood pressure, urine output, daily weight",
            "Temperature, heart rate, respiratory rate",
            "Blood glucose, insulin levels",
            "Calcium, phosphorus levels",
          ],
          answer: 0,
          rationale: "Monitor blood pressure, urine output, and daily weight in APSGN.",
        },
        {
          id: "q48",
          question:
            "What dietary modification may be prescribed for a child with acute glomerulonephritis and edema/hypertension?",
          choices: [
            "Sodium restriction",
            "High protein diet",
            "High potassium diet",
            "Fluid restriction only",
          ],
          answer: 0,
          rationale: "Sodium restriction is prescribed for edema and hypertension in APSGN.",
        },
        {
          id: "q49",
          question: "Which finding most reliably indicates true labor?",
          choices: [
            "Regular contractions with progressive cervical dilation",
            "Irregular contractions",
            "Bloody show",
            "Rupture of membranes",
          ],
          answer: 0,
          rationale: "Progressive cervical dilation with regular contractions confirms true labor.",
        },
        {
          id: "q50",
          question: "During which stage of childhood does the most rapid physical growth occur?",
          choices: ["Infancy", "Early childhood", "Middle childhood", "Adolescence"],
          answer: 0,
          rationale: "The most rapid physical growth occurs during infancy.",
        },
        {
          id: "q51",
          question:
            "During what age period does an infant's length increase at approximately 1 inch (2.5 cm) per month?",
          choices: [
            "First 6 months of infancy",
            "Second 6 months of infancy",
            "Second year of life",
            "Third year of life",
          ],
          answer: 0,
          rationale: "Infants grow about 1 inch per month during the first 6 months.",
        },
        {
          id: "q52",
          question: "Which part of the body is primarily affected in multiple myeloma?",
          choices: ["Lungs", "Liver", "Kidneys", "Bone marrow"],
          answer: 3,
          rationale: "Multiple myeloma is a malignancy of plasma cells in the bone marrow.",
        },
        {
          id: "q53",
          question: "Which blood vessel is a common site of a peripheral arterial aneurysm?",
          choices: ["Femoral artery", "Carotid artery", "Popliteal artery", "Subclavian artery"],
          answer: 2,
          rationale: "The popliteal artery is a common site of peripheral arterial aneurysm.",
        },
        {
          id: "q54",
          question: "Which position is appropriate after cataract surgery?",
          choices: ["Supine", "Semi-Fowler's", "Prone", "Trendelenburg"],
          answer: 1,
          rationale:
            "Semi-Fowler's position is appropriate after cataract surgery to reduce intraocular pressure.",
        },
        {
          id: "q55",
          question:
            "Which activity should the patient avoid after cataract surgery because it can increase intraocular pressure (IOP)?",
          choices: [
            "Resting in a supine position",
            "Walking slowly",
            "Forceful coughing",
            "Sitting upright",
          ],
          answer: 2,
          rationale: "Forceful coughing can increase intraocular pressure.",
        },
        {
          id: "q56",
          question:
            "Which type of anesthesia is commonly used during routine cardiac catheterization?",
          choices: [
            "General anesthesia",
            "Local anesthesia",
            "Regional anesthesia",
            "Spinal anesthesia",
          ],
          answer: 1,
          rationale: "Local anesthesia is commonly used during routine cardiac catheterization.",
        },
        {
          id: "q57",
          question:
            "After removing a patient's colostomy appliance, which finding should the nurse expect in a healthy stoma?",
          choices: [
            "Moist, shiny, pink-to-red stoma",
            "Dry, brownish stoma",
            "Pale, bluish stoma",
            "Swollen, purplish stoma",
          ],
          answer: 0,
          rationale: "A healthy stoma should be moist, shiny, and pink-to-red in color.",
        },
        {
          id: "q58",
          question:
            "Hypoventilation can cause respiratory acidosis. Which clinical manifestation would the nurse expect?",
          choices: [
            "Headache, confusion, decreased LOC",
            "Hyperactivity, insomnia",
            "Diarrhea, abdominal pain",
            "Hypertension, tachycardia",
          ],
          answer: 0,
          rationale:
            "Respiratory acidosis causes headache, confusion, and decreased level of consciousness.",
        },
        {
          id: "q59",
          question: "How do the kidneys compensate for respiratory acidosis?",
          choices: [
            "Increase H+ excretion and increase HCO3- reabsorption",
            "Decrease H+ excretion and decrease HCO3- reabsorption",
            "Increase H+ reabsorption and decrease HCO3- excretion",
            "No compensation occurs",
          ],
          answer: 0,
          rationale: "The kidneys compensate by increasing H+ excretion and HCO3- reabsorption.",
        },
        {
          id: "q60",
          question:
            "A patient asks, 'What does carcinoma in situ mean?' Which response by the nurse is correct?",
          choices: [
            "Malignant cells confined to the tissue where they originated",
            "Cancer that has spread to distant organs",
            "Cancer that has invaded surrounding tissue",
            "A benign tumor",
          ],
          answer: 0,
          rationale:
            "Carcinoma in situ means malignant cells remain confined to their site of origin.",
        },
        {
          id: "q61",
          question:
            "In addition to episodic vertigo and tinnitus, which manifestation is characteristic of Menière's disease?",
          choices: ["Fluctuating hearing loss", "Headache", "Vision changes", "Chest pain"],
          answer: 0,
          rationale:
            "Menière's disease includes fluctuating hearing loss with vertigo and tinnitus.",
        },
        {
          id: "q62",
          question:
            "A patient reports an impaired sense of smell. Which cranial nerve should the nurse assess?",
          choices: [
            "Cranial Nerve I - Olfactory",
            "Cranial Nerve II - Optic",
            "Cranial Nerve VII - Facial",
            "Cranial Nerve IX - Glossopharyngeal",
          ],
          answer: 0,
          rationale: "The olfactory nerve (CN I) is responsible for the sense of smell.",
        },
        {
          id: "q63",
          question: "Which is the most important preventable risk factor for laryngeal cancer?",
          choices: [
            "Tobacco smoking",
            "Alcohol consumption",
            "Asbestos exposure",
            "Human papillomavirus",
          ],
          answer: 0,
          rationale:
            "Tobacco smoking is the most important preventable risk factor for laryngeal cancer.",
        },
        {
          id: "q64",
          question:
            "What is a common early warning sign of laryngeal cancer, particularly when the tumor involves the vocal cords?",
          choices: [
            "Persistent hoarseness",
            "Lump in the neck",
            "Difficulty swallowing",
            "Ear pain",
          ],
          answer: 0,
          rationale:
            "Persistent hoarseness is an early sign of laryngeal cancer involving the vocal cords.",
        },
        {
          id: "q65",
          question:
            "Which patient should the charge nurse assign to a newly licensed/inexperienced RN?",
          choices: [
            "Patient with a complicated/infected wound requiring extensive assessment",
            "Patient with new swallowing difficulty and aspiration risk",
            "Stable patient with predictable care needs",
            "Unstable patient with rapidly changing vital signs",
          ],
          answer: 2,
          rationale:
            "Stable patients with predictable care needs are appropriate for new/inexperienced RNs.",
        },
        {
          id: "q66",
          question:
            "A nurse is found legally/professionally liable for serious misconduct or malpractice. Which is NOT itself a typical disciplinary/legal penalty?",
          choices: ["Revocation of license", "Suspension of license", "Imprisonment", "Bail bond"],
          answer: 3,
          rationale: "Bail is a legal mechanism, not a disciplinary penalty or punishment.",
        },
        {
          id: "q67",
          question:
            "Which antimalarial drug is no longer recommended for routine treatment of P. falciparum malaria in areas with documented resistance?",
          choices: ["Artemisinin", "Chloroquine", "Mefloquine", "Atovaquone-proguanil"],
          answer: 1,
          rationale:
            "Chloroquine is no longer recommended for P. falciparum in areas with resistance.",
        },
        {
          id: "q68",
          question:
            "What are the major effects of maternal cigarette smoking during pregnancy on the fetus?",
          choices: [
            "Fetal growth restriction and low birth weight",
            "Congenital heart defects",
            "Neural tube defects",
            "Respiratory distress syndrome",
          ],
          answer: 0,
          rationale: "Maternal smoking causes fetal growth restriction and low birth weight.",
        },
        {
          id: "q69",
          question: "What is the central concept of Sigmund Freud's Psychosexual Theory?",
          choices: [
            "Personality develops through stages focused on different erogenous zones",
            "Personality develops through social interactions",
            "Personality is determined by cognitive development",
            "Personality is innate and unchanging",
          ],
          answer: 0,
          rationale:
            "Freud's theory focuses on psychosexual stages with different erogenous zones.",
        },
        {
          id: "q70",
          question: "What is the highest priority when caring for a patient with a tracheostomy?",
          choices: [
            "Maintain a patent airway",
            "Suction as needed",
            "Provide humidification",
            "Secure the tracheostomy ties",
          ],
          answer: 0,
          rationale: "Maintaining a patent airway is the highest priority.",
        },
        {
          id: "q71",
          question:
            "Which complications should the nurse monitor for in a patient with a colostomy?",
          choices: [
            "Stomal ischemia/necrosis",
            "Infections",
            "Parastomal hernia",
            "All of the above",
          ],
          answer: 3,
          rationale: "All are potential complications of a colostomy.",
        },
        {
          id: "q72",
          question:
            "A patient has a chest tube connected to a drainage system. What should the nurse have readily available at the bedside in case the tubing becomes accidentally disconnected?",
          choices: ["Sterile water", "Normal saline", "Antibiotic ointment", "Extra tubing"],
          answer: 0,
          rationale: "Sterile water should be available for reconnecting the chest tube system.",
        },
        {
          id: "q73",
          question:
            "Which ethical principle refers to the patient's right to make their own healthcare decisions?",
          choices: ["Autonomy", "Beneficence", "Nonmaleficence", "Justice"],
          answer: 0,
          rationale: "Autonomy is the patient's right to make their own decisions.",
        },
        {
          id: "q74",
          question:
            "Which ethical principle means doing good and acting in the patient's best interest?",
          choices: ["Autonomy", "Beneficence", "Nonmaleficence", "Justice"],
          answer: 1,
          rationale: "Beneficence means doing good and acting in the patient's best interest.",
        },
        {
          id: "q75",
          question: "Which ethical principle means avoiding or preventing harm?",
          choices: ["Autonomy", "Beneficence", "Nonmaleficence", "Justice"],
          answer: 2,
          rationale: "Nonmaleficence means avoiding or preventing harm.",
        },
        {
          id: "q76",
          question:
            "Which ethical principle requires fair and equitable treatment and allocation of resources?",
          choices: ["Autonomy", "Beneficence", "Nonmaleficence", "Justice"],
          answer: 3,
          rationale: "Justice requires fair and equitable treatment.",
        },
        {
          id: "q77",
          question:
            "Which ethical principle means keeping promises and commitments to the patient?",
          choices: ["Autonomy", "Beneficence", "Nonmaleficence", "Fidelity"],
          answer: 3,
          rationale: "Fidelity means keeping promises and commitments.",
        },
        {
          id: "q78",
          question: "How should unopened insulin be stored?",
          choices: ["Refrigerated at 2-8°C", "At room temperature", "Frozen", "In direct sunlight"],
          answer: 0,
          rationale: "Unopened insulin should be refrigerated at 2-8°C.",
        },
        {
          id: "q79",
          question: "According to Patricia Benner, what characterizes a proficient nurse?",
          choices: [
            "Perceives clinical situations holistically",
            "Uses rules and guidelines",
            "Has no clinical experience",
            "Relies on textbooks only",
          ],
          answer: 0,
          rationale: "The proficient nurse perceives clinical situations as a whole.",
        },
        {
          id: "q80",
          question:
            "Which antibiotic is commonly used for a localized superficial bacterial skin infection such as impetigo?",
          choices: ["Topical mupirocin", "Oral amoxicillin", "Cephalexin", "Erythromycin"],
          answer: 0,
          rationale: "Topical mupirocin is used for localized impetigo.",
        },
        {
          id: "q81",
          question: "What is the causative agent of German measles?",
          choices: ["Rubella virus", "Rubeola virus", "Varicella-zoster virus", "Parvovirus B19"],
          answer: 0,
          rationale: "German measles is caused by the rubella virus.",
        },
        {
          id: "q82",
          question: "What is the usual amount of blood lost during a normal menstrual period?",
          choices: ["30-40 mL", "80-100 mL", "100-120 mL", "10-20 mL"],
          answer: 0,
          rationale: "Normal menstrual blood loss is approximately 30-40 mL per cycle.",
        },
        {
          id: "q83",
          question:
            "What IV catheter size is generally preferred for blood transfusion in an adult?",
          choices: ["18-20 gauge", "22-24 gauge", "14-16 gauge", "25 gauge"],
          answer: 0,
          rationale: "18-20 gauge is preferred for blood transfusion in adults.",
        },
        {
          id: "q84",
          question:
            "Which type of touch is used when a nurse performs a procedure such as taking a blood pressure, changing a dressing, or assisting with hygiene?",
          choices: [
            "Functional-professional touch",
            "Social-polite touch",
            "Friendship-warmth touch",
            "Love-intimacy touch",
          ],
          answer: 0,
          rationale: "Functional-professional touch is used during procedures and care.",
        },
        {
          id: "q85",
          question:
            "A nurse becomes excessively emotionally involved with a patient and even spends a day off personally comforting the patient. Which concept does this behavior demonstrate?",
          choices: ["Transference", "Countertransference", "Sympathy", "Empathy"],
          answer: 1,
          rationale: "Countertransference occurs when the nurse transfers feelings to the patient.",
        },
        {
          id: "q86",
          question: "Which food should a patient avoid when instructed to reduce sodium intake?",
          choices: ["Pickled foods", "Banana", "Fresh apple", "Steamed rice"],
          answer: 0,
          rationale: "Pickled foods are high in sodium and should be avoided.",
        },
        {
          id: "q87",
          question:
            "Under the Philippine Nursing Act of 2002 (RA 9173), after a nurse's certificate of registration/professional license has been revoked, after what period may the Board consider issuing another certificate?",
          choices: ["2 years", "3 years", "4 years", "5 years"],
          answer: 2,
          rationale: "RA 9173 allows reissuance after a maximum of 4 years from revocation.",
        },
        {
          id: "q88",
          question:
            "What dietary instruction may be given before a guaiac-based fecal occult blood test (gFOBT)?",
          choices: [
            "Avoid red meat",
            "Eat high-fiber foods",
            "Increase iron intake",
            "Avoid fluids",
          ],
          answer: 0,
          rationale: "Red meat should be avoided before a gFOBT as it may cause false positives.",
        },
        {
          id: "q89",
          question:
            "What IV catheter size is commonly used for routine IV fluids and medications in an adult?",
          choices: ["18-20 gauge", "20-22 gauge", "14-16 gauge", "24-26 gauge"],
          answer: 1,
          rationale: "20-22 gauge is commonly used for routine IV therapy in adults.",
        },
        {
          id: "q90",
          question: "Which foods should a patient with Meniere's disease avoid or limit?",
          choices: [
            "High-sodium foods",
            "High-protein foods",
            "High-fat foods",
            "High-carbohydrate foods",
          ],
          answer: 0,
          rationale: "High-sodium foods should be avoided or limited in Meniere's disease.",
        },
        {
          id: "q91",
          question: "What is splitting as a defense mechanism?",
          choices: [
            "Viewing others as 'all good' or 'all bad'",
            "Separating emotions from thoughts",
            "Blaming others for problems",
            "Avoiding conflict",
          ],
          answer: 0,
          rationale: "Splitting involves seeing people as either all good or all bad.",
        },
        {
          id: "q92",
          question:
            "Which foods may increase the risk of stoma obstruction/blockage in a patient with an ileostomy?",
          choices: [
            "Popcorn, nuts, seeds",
            "Rice, pasta, bread",
            "Well-cooked vegetables",
            "Soft fruits",
          ],
          answer: 0,
          rationale: "Popcorn, nuts, and seeds can cause stoma obstruction.",
        },
        {
          id: "q93",
          question: "Which task is most appropriate for the RN to delegate to a nursing aide/UAP?",
          choices: [
            "Perform the initial assessment of a newly admitted patient",
            "Teach a newly diagnosed diabetic how to inject insulin",
            "Assist a stable patient with bathing and hygiene",
            "Evaluate a patient's response to pain medication",
          ],
          answer: 2,
          rationale: "Bathing and hygiene are routine, low-risk tasks appropriate for delegation.",
        },
        {
          id: "q94",
          question:
            "The nurse is instructing a patient about postoperative care following cataract removal. Which position is most appropriate?",
          choices: [
            "Assume a prone position",
            "Position the feet elevated",
            "Remain in Semi-Fowler's position",
            "Lie on the operative side",
          ],
          answer: 2,
          rationale: "Semi-Fowler's position is appropriate after cataract surgery.",
        },
        {
          id: "q95",
          question: "How long should medico-legal health records be retained?",
          choices: ["25 years", "30 years", "50 years", "Lifetime"],
          answer: 3,
          rationale: "Medico-legal health records should be retained for lifetime.",
        },
        {
          id: "q96",
          question: "Which neurotransmitter is decreased in a patient with Alzheimer's disease?",
          choices: ["Serotonin", "Norepinephrine", "Acetylcholine", "Dopamine"],
          answer: 2,
          rationale: "Acetylcholine is decreased in Alzheimer's disease.",
        },
        {
          id: "q97",
          question:
            "Which manifestation would the nurse expect in a patient with Generalized Anxiety Disorder (GAD)?",
          choices: [
            "Excessive, difficult-to-control worry",
            "Hallucinations",
            "Obsessive-compulsive behaviors",
            "Panic attacks",
          ],
          answer: 0,
          rationale: "GAD is characterized by excessive, difficult-to-control worry.",
        },
        {
          id: "q98",
          question:
            "Which medication is commonly used as first-line pharmacologic treatment for ADHD with hyperactivity?",
          choices: ["Methylphenidate", "Fluoxetine", "Haloperidol", "Lorazepam"],
          answer: 0,
          rationale: "Methylphenidate is a first-line treatment for ADHD.",
        },
        {
          id: "q99",
          question: "Which defense mechanism is commonly associated with depression?",
          choices: ["Projection", "Rationalization", "Displacement", "Introjection"],
          answer: 3,
          rationale: "Introjection is a defense mechanism associated with depression.",
        },
        {
          id: "q100",
          question:
            "Which neurotransmitters are classically associated with major depressive disorder?",
          choices: [
            "Serotonin and norepinephrine",
            "Dopamine and acetylcholine",
            "GABA and glutamate",
            "Histamine and serotonin",
          ],
          answer: 0,
          rationale: "Depression is associated with decreased serotonin and norepinephrine.",
        },
        {
          id: "q101",
          question:
            "A family member reports that an older adult has recently developed significant anxiety and personality changes. Which statement regarding GAD onset is most accurate?",
          choices: [
            "It always begins early in life",
            "It can develop at different ages",
            "It occurs only during adolescence",
            "It occurs only during old age",
          ],
          answer: 1,
          rationale: "GAD can develop at different ages, including late onset.",
        },
        {
          id: "q102",
          question:
            "A client with Borderline Personality Disorder (BPD) demonstrates 'splitting.' What does this behavior indicate?",
          choices: [
            "Viewing people as all good or all bad",
            "Having memory lapses",
            "Experiencing hallucinations",
            "Having identity confusion",
          ],
          answer: 0,
          rationale: "Splitting in BPD involves viewing people in extremes.",
        },
        {
          id: "q103",
          question:
            "A patient is immediately postoperative following a total laryngectomy. What is the PRIORITY nursing diagnosis?",
          choices: [
            "Ineffective Airway Clearance",
            "Impaired Verbal Communication",
            "Risk for Infection",
            "Disturbed Body Image",
          ],
          answer: 0,
          rationale: "Airway clearance is the priority following total laryngectomy.",
        },
        {
          id: "q104",
          question: "At what point in the research process is a hypothesis generally formulated?",
          choices: [
            "Before analyzing the collected data",
            "After formulation of the research problem",
            "Before deciding the research problem",
            "After choosing the study design",
          ],
          answer: 1,
          rationale: "A hypothesis is formulated after the research problem is identified.",
        },
        {
          id: "q105",
          question:
            "Which action best protects the confidentiality of electronic patient information?",
          choices: [
            "Use one password for all computers in the ward",
            "The nurse keeps their password private and does not share it",
            "Give the nurse manager the password for emergency use",
            "Write the password on a note near the computer",
          ],
          answer: 1,
          rationale: "Keeping passwords private protects patient information confidentiality.",
        },
        {
          id: "q106",
          question: "Which laboratory finding would be expected in a patient with malaria?",
          choices: [
            "Elevated white blood cells",
            "Plasmodium parasites in the blood smear",
            "Decreased hemoglobin",
            "Increased platelets",
          ],
          answer: 1,
          rationale: "Malaria diagnosis is confirmed by Plasmodium parasites in the blood smear.",
        },
        {
          id: "q107",
          question: "Malaria can be transmitted through the following routes EXCEPT:",
          choices: [
            "Blood transfusion",
            "Ordinary human-to-human contact",
            "Contaminated needle exposure",
            "Bite of an infected mosquito",
          ],
          answer: 1,
          rationale: "Malaria is not transmitted through ordinary human-to-human contact.",
        },
        {
          id: "q108",
          question:
            "A patient with gastric ulceration undergoes surgery under general anesthesia. What is the nurse's priority immediately following the procedure?",
          choices: [
            "Maintain a patent airway",
            "Monitor vital signs",
            "Check the surgical site",
            "Administer pain medication",
          ],
          answer: 0,
          rationale: "Maintaining a patent airway is the priority immediately after surgery.",
        },
        {
          id: "q109",
          question:
            "Which concept is fundamental to establishing an effective therapeutic nurse-client relationship?",
          choices: ["Sympathy", "Respect", "Pity", "Control"],
          answer: 1,
          rationale: "Respect is fundamental to establishing a therapeutic relationship.",
        },
        {
          id: "q110",
          question:
            "During multiple home visits, which sequence helps reduce the risk of transmitting infection between households?",
          choices: [
            "Visit clients without communicable disease before clients with known/suspected infectious disease",
            "Always visit elderly clients first",
            "Always visit children first",
            "Visit infectious clients first",
          ],
          answer: 0,
          rationale: "Prioritize well/noninfectious clients before infectious clients.",
        },
        {
          id: "q111",
          question:
            "What is the most basic and important measure for preventing transmission of healthcare-associated infections (HAIs)?",
          choices: ["Wearing a mask", "Wearing gloves", "Hand hygiene", "Wearing a gown"],
          answer: 2,
          rationale: "Hand hygiene is the most basic and important measure to prevent HAls.",
        },
        {
          id: "q112",
          question:
            "Which patient should be assigned to the registered nurse (RN) rather than to assistive personnel?",
          choices: [
            "A child experiencing an acute asthma attack in the emergency department",
            "A stable patient with diabetes scheduled for discharge later",
            "A stable patient requiring a routine dressing change",
            "A patient needing assistance with bathing",
          ],
          answer: 0,
          rationale: "An unstable patient (acute asthma attack) should be assigned to an RN.",
        },
        {
          id: "q113",
          question:
            "Following a lumbar puncture, the cerebrospinal fluid (CSF) is observed to be clear and colorless. How should this finding be interpreted?",
          choices: ["Infection", "Normal finding", "Severe infection", "Traumatic tap"],
          answer: 1,
          rationale: "Clear and colorless CSF is a normal finding.",
        },
        {
          id: "q114",
          question:
            "The nurse is caring for a patient immediately after a tracheostomy. Which finding represents the greatest immediate concern?",
          choices: [
            "Slight displacement of an NGT during feeding",
            "A mucus plug obstructing the tracheostomy",
            "Excessive oral and nasal secretions",
            "Skin irritation around the stoma",
          ],
          answer: 1,
          rationale: "A mucus plug obstructing the tracheostomy is an immediate airway concern.",
        },
        {
          id: "q115",
          question:
            "What is the most important information to emphasize to the family of a patient with a tracheostomy?",
          choices: [
            "The tracheostomy provides the patient's airway for breathing",
            "How to clean the tracheostomy",
            "How to suction the tracheostomy",
            "How to change the tracheostomy ties",
          ],
          answer: 0,
          rationale: "The family must understand that the tracheostomy is the patient's airway.",
        },
        {
          id: "q116",
          question:
            "A postoperative patient's dressing becomes saturated with serosanguineous drainage. What should the nurse do first?",
          choices: [
            "Assess the patient and notify the surgeon/provider",
            "Ask the resident to reinforce the dressing without assessment",
            "Remove the dressing, wipe the wound, and apply a new dressing",
            "Document the finding and monitor",
          ],
          answer: 0,
          rationale: "Excessive drainage should be assessed and reported to the provider.",
        },
        {
          id: "q117",
          question:
            "Following a total laryngectomy, which finding is NOT necessarily an expected permanent consequence?",
          choices: [
            "The patient cannot breathe through the nose",
            "The patient cannot produce normal laryngeal speech",
            "The patient cannot eat",
            "The patient cannot breathe through the mouth",
          ],
          answer: 2,
          rationale:
            "Patients can eat after a total laryngectomy, though swallowing may be affected.",
        },
        {
          id: "q118",
          question:
            "Which toxic gas is a major cause of death in victims of smoke inhalation during fires?",
          choices: ["Carbon monoxide", "Cyanide", "Sulfur dioxide", "Nitrogen dioxide"],
          answer: 0,
          rationale: "Carbon monoxide poisoning is a major cause of death in smoke inhalation.",
        },
        {
          id: "q119",
          question:
            "A patient is admitted following a CVA. Which part of the brain contains the primary respiratory rhythm-generating centers?",
          choices: ["Medulla oblongata", "Cerebellum", "Cerebrum", "Hypothalamus"],
          answer: 0,
          rationale: "The medulla oblongata contains the primary respiratory centers.",
        },
        {
          id: "q120",
          question:
            "A patient develops hemiplegia following an acute stroke. Which finding should receive the highest priority during the first 24 hours?",
          choices: ["Unequal pupil size", "Loss of appetite", "Fatigue", "Insomnia"],
          answer: 0,
          rationale:
            "Unequal pupil size indicates increased intracranial pressure and requires immediate attention.",
        },
        {
          id: "q121",
          question:
            "The nurse is providing oral care to an unconscious patient. Which action indicates a need for further teaching?",
          choices: [
            "Uses a tongue depressor to force/open the patient's mouth",
            "Uses a toothbrush to clean the teeth carefully",
            "Performs oral care with the patient in Semi-Fowler's position",
            "Uses suction to prevent aspiration",
          ],
          answer: 0,
          rationale: "Forcing the mouth open with a tongue depressor can cause oral trauma.",
        },
        {
          id: "q122",
          question:
            "Which drug has a long historical role in the treatment of malaria and remains useful for selected malaria infections today?",
          choices: ["Artemisinin", "Quinine", "Mefloquine", "Doxycycline"],
          answer: 1,
          rationale: "Quinine remains useful for selected malaria infections.",
        },
        {
          id: "q123",
          question:
            "A nurse becomes so emotionally involved with a crying patient that the nurse spends a day off specifically listening to and comforting the patient. What does this behavior most likely demonstrate?",
          choices: ["Transference", "Empathy", "Sympathy", "Countertransference"],
          answer: 3,
          rationale:
            "Countertransference is when a nurse becomes excessively emotionally involved with a patient.",
        },
        {
          id: "q124",
          question:
            "A nurse consistently spends considerably more time with a young, attractive patient while neglecting the needs of other patients. Which ethical principle is primarily violated?",
          choices: ["Autonomy", "Beneficence", "Justice", "Nonmaleficence"],
          answer: 2,
          rationale: "Justice is violated when patients are not treated fairly and equally.",
        },
        {
          id: "q125",
          question:
            "Which specimen can be used to determine a patient's current/recent blood alcohol concentration?",
          choices: ["Urine", "Blood/serum", "Saliva", "Hair"],
          answer: 1,
          rationale: "Blood/serum is used to determine current blood alcohol concentration.",
        },
        {
          id: "q126",
          question:
            "A patient develops sudden severe/sharp eye pain after cataract surgery. What should the nurse conclude?",
          choices: [
            "Possible serious postoperative ocular complication — report immediately",
            "Normal postoperative pain",
            "Migraine headache",
            "Sinusitis",
          ],
          answer: 0,
          rationale: "Sudden severe eye pain after cataract surgery requires immediate reporting.",
        },
        {
          id: "q127",
          question:
            "Which nursing intervention is appropriate when positioning a patient after a laminectomy?",
          choices: [
            "Keep flat for only 1-2 hours regardless of orders",
            "Maintain supine position for 6-8 hours in all patients",
            "Place routinely in Semi-Fowler's",
            "Maintain spinal alignment and reposition using logrolling as prescribed",
          ],
          answer: 3,
          rationale: "Maintain spinal alignment and use logrolling after laminectomy.",
        },
        {
          id: "q128",
          question: "Which of the following does NOT promote edema formation?",
          choices: [
            "Decreased capillary permeability",
            "Increased capillary hydrostatic pressure",
            "Decreased plasma oncotic pressure",
            "Lymphatic obstruction",
          ],
          answer: 0,
          rationale: "Decreased capillary permeability reduces edema formation.",
        },
        {
          id: "q129",
          question: "Which burn depth is generally considered the most painful?",
          choices: [
            "First-degree",
            "Second-degree (partial-thickness)",
            "Third-degree",
            "Fourth-degree",
          ],
          answer: 1,
          rationale: "Second-degree burns are the most painful due to nerve exposure.",
        },
        {
          id: "q130",
          question: "Which description best characterizes a third-degree (full-thickness) burn?",
          choices: [
            "Destroys only the epidermis",
            "Destroys the epidermis and part of the dermis",
            "Involves only the outermost layer",
            "Destroys the entire epidermis and dermis",
          ],
          answer: 3,
          rationale: "Third-degree burns destroy the entire epidermis and dermis.",
        },
        {
          id: "q131",
          question:
            "Which medication is commonly considered a first-line pharmacologic treatment for a child with ADHD?",
          choices: ["Methylphenidate", "Fluoxetine", "Haloperidol", "Carbamazepine"],
          answer: 0,
          rationale: "Methylphenidate is a first-line treatment for ADHD in children.",
        },
        {
          id: "q132",
          question: "Which skin finding would the nurse expect in a patient with hyperthyroidism?",
          choices: ["Dry, scaly skin", "Warm, moist skin", "Cyanotic skin", "Jaundiced skin"],
          answer: 1,
          rationale: "Hyperthyroidism causes warm, moist skin.",
        },
        {
          id: "q133",
          question:
            "Which finding correctly describes the tonic neck ('fencing') reflex in an infant?",
          choices: [
            "Infant extends both arms when head is turned",
            "Arm and leg on face side extend, opposite side flexes",
            "Both arms and legs flex",
            "No movement occurs",
          ],
          answer: 1,
          rationale: "In the tonic neck reflex, the arm and leg on the face side extend.",
        },
        {
          id: "q134",
          question: "Which finding is least expected in a postpartum mother?",
          choices: [
            "Early morning sickness",
            "Ambivalent feelings regarding the baby",
            "Fatigue",
            "Afterpains",
          ],
          answer: 0,
          rationale: "Early morning sickness is a sign of pregnancy, not postpartum.",
        },
        {
          id: "q135",
          question:
            "Severe, uncontrolled hypertension can cause target-organ damage to all of the following EXCEPT:",
          choices: ["Eyes", "Heart", "Liver", "Brain"],
          answer: 2,
          rationale: "The liver is not a primary target organ of hypertension.",
        },
        {
          id: "q136",
          question:
            "A patient is scheduled for a colonoscopy. Which intervention is most important to ensure adequate visualization of the colon?",
          choices: ["NPO status", "Bowel cleansing", "Antibiotic prophylaxis", "Sedation"],
          answer: 1,
          rationale: "Adequate bowel cleansing is essential for colonoscopy visualization.",
        },
        {
          id: "q137",
          question:
            "Which is the most important modifiable risk factor for developing laryngeal cancer?",
          choices: [
            "Alcohol consumption",
            "Asbestos exposure",
            "Cigarette smoking",
            "Poor nutrition",
          ],
          answer: 2,
          rationale:
            "Cigarette smoking is the most important modifiable risk factor for laryngeal cancer.",
        },
        {
          id: "q138",
          question:
            "Which is a common early manifestation of laryngeal cancer, particularly cancer involving the vocal cords?",
          choices: [
            "Persistent hoarseness/change in voice",
            "Lump in the throat/neck",
            "Difficulty swallowing",
            "Ear pain",
          ],
          answer: 0,
          rationale:
            "Persistent hoarseness is an early sign of laryngeal cancer involving the vocal cords.",
        },
        {
          id: "q139",
          question:
            "Which clinical manifestations would the nurse most likely observe in a patient experiencing a manic episode?",
          choices: [
            "Hyperactivity and euphoria",
            "Alternating extreme happiness and sadness",
            "Withdrawal and sadness",
            "Anxiety and fear",
          ],
          answer: 0,
          rationale: "Manic episodes are characterized by hyperactivity and euphoria.",
        },
        {
          id: "q140",
          question:
            "Which medication is a first-generation antipsychotic used to control severe psychotic symptoms such as hallucinations, delusions, and severe agitation?",
          choices: ["Haloperidol (Haldol)", "Risperidone", "Olanzapine", "Quetiapine"],
          answer: 0,
          rationale: "Haloperidol is a first-generation antipsychotic.",
        },
        {
          id: "q141",
          question:
            "Which finding is most characteristic of a peripheral arterial aneurysm, such as a popliteal aneurysm?",
          choices: [
            "Diminished peripheral pulses",
            "Strong pulsation over the femoral area",
            "Intermittent claudication",
            "Pale, cold extremities",
          ],
          answer: 1,
          rationale: "A localized pulsatile mass is characteristic of an arterial aneurysm.",
        },
        {
          id: "q142",
          question: "What IV catheter gauge is commonly used for routine IV therapy in an adult?",
          choices: ["18-20 gauge", "20-22 gauge", "14-16 gauge", "24-26 gauge"],
          answer: 1,
          rationale: "20-22 gauge is commonly used for routine IV therapy in adults.",
        },
        {
          id: "q143",
          question:
            "Which site should generally be avoided for routine peripheral IV insertion in an adult because of greater complication concerns?",
          choices: ["Hand", "Foot/lower extremity", "Arm", "Forearm"],
          answer: 1,
          rationale:
            "The foot/lower extremity should be avoided due to higher risk of complications.",
        },
        {
          id: "q144",
          question:
            "At approximately what angle should a peripheral IV catheter initially be inserted?",
          choices: ["5-10 degrees", "10-30 degrees", "40-60 degrees", "90 degrees"],
          answer: 1,
          rationale: "A peripheral IV catheter should be inserted at 10-30 degrees, bevel up.",
        },
        {
          id: "q145",
          question:
            "A healthcare professional sells glutathione to clients at an unreasonably excessive price, taking advantage of them. Which ethical principle is most directly violated?",
          choices: ["Autonomy", "Justice", "Beneficence", "Nonmaleficence"],
          answer: 1,
          rationale: "Justice is violated when clients are taken advantage of financially.",
        },
        {
          id: "q146",
          question:
            "A newborn was delivered at 5:00 PM. The following morning, the nurse observes yellow discoloration of the sclera. What is the PRIORITY nursing action?",
          choices: [
            "Document the finding only",
            "Observe for clay-colored stools",
            "Prepare immediately for phototherapy",
            "Report the finding immediately to the physician",
          ],
          answer: 3,
          rationale:
            "Jaundice in the first 24 hours is pathological and requires immediate reporting.",
        },
        {
          id: "q147",
          question:
            "According to Patricia Benner's Novice-to-Expert Model, which characteristic best describes a proficient nurse?",
          choices: [
            "Perceives clinical situations as a whole",
            "Uses rules and guidelines",
            "Has limited clinical experience",
            "Relies on textbooks for decisions",
          ],
          answer: 0,
          rationale: "The proficient nurse perceives situations holistically.",
        },
        {
          id: "q148",
          question: "What is the primary purpose of Continuing Professional Development (CPD)?",
          choices: [
            "To accumulate units for PRC license renewal",
            "To continuously improve professional knowledge, skills, competence, and practice",
            "To increase salary",
            "To meet hospital requirements",
          ],
          answer: 1,
          rationale: "CPD aims to improve professional competence and practice.",
        },
        {
          id: "q149",
          question:
            "Which type of wound drainage is least expected during normal early wound healing?",
          choices: ["Serous", "Sanguineous", "Seropurulent", "Serosanguineous"],
          answer: 2,
          rationale:
            "Seropurulent drainage indicates infection and is not expected in normal healing.",
        },
        {
          id: "q150",
          question:
            "Which finding is least characteristic of classic Fetal Alcohol Syndrome (FAS)?",
          choices: [
            "Characteristic abnormal facial features",
            "Jitteriness",
            "Small for gestational age/growth restriction",
            "Developmental delays",
          ],
          answer: 1,
          rationale: "Jitteriness is not a classic feature of FAS.",
        },
      ],
    },
    {
      id: "set-6",
      title: "SET 6",
      description:
        "Comprehensive nursing review covering psychiatric, medical-surgical, maternal and child health, and community health nursing concepts.",
      questions: [
        {
          id: "q1",
          question: "Priority Nursing Concern in Parkinson's disease:",
          choices: ["Safety and security", "Mobility", "Communication", "Nutrition"],
          answer: 0,
          rationale: "Safety and security is the priority concern in Parkinson's disease.",
        },
        {
          id: "q2",
          question:
            "A child is restless and experiencing difficulty breathing following a traumatic event. What level of anxiety is most likely?",
          choices: ["Mild", "Moderate", "Severe", "Panic"],
          answer: 2,
          rationale: "Dyspnea and restlessness indicate severe anxiety.",
        },
        {
          id: "q3",
          question:
            "After witnessing a traumatic event, a child stays alone in a room, remains quiet, and withdraws from others. Which behavior is being demonstrated?",
          choices: ["Isolation", "Reaction formation", "Denial", "Projection"],
          answer: 0,
          rationale: "Withdrawal and staying alone indicates isolation.",
        },
        {
          id: "q4",
          question:
            "A child who witnessed a traumatic event is continuously pacing, wandering around the room, and moaning and appears unable to function purposefully. What level of anxiety is most likely?",
          choices: ["Mild", "Moderate", "Severe", "Panic"],
          answer: 3,
          rationale: "Inability to function purposefully and pacing indicates panic level anxiety.",
        },
        {
          id: "q5",
          question:
            "A physician selectively provides services only in a preferred department while comparable needs exist elsewhere. Which ethical principle may be violated if this results in unfair allocation of healthcare services?",
          choices: ["Distributive justice", "Justice", "Nonmaleficence", "Autonomy"],
          answer: 0,
          rationale: "Distributive justice concerns fair allocation of resources.",
        },
        {
          id: "q6",
          question:
            "A community health nurse is well-liked and trusted by community members, who encourage the nurse to run for barangay captain and offer their support. What type of influence/power is demonstrated?",
          choices: ["Political", "Social", "Economic", "Coercive"],
          answer: 1,
          rationale: "Being liked and trusted by community members demonstrates social power.",
        },
        {
          id: "q7",
          question:
            "Which instruction is appropriate for a patient being discharged following treatment/repair of a retinal detachment?",
          choices: [
            "Wear sunglasses in bright light",
            "Increase the intensity of lights throughout the home",
            "Avoid all light exercise indefinitely",
            "Restrict fluid intake",
          ],
          answer: 0,
          rationale:
            "Wearing sunglasses in bright light protects the eye after retinal detachment repair.",
        },
        {
          id: "q8",
          question:
            "During an actual flood, a woman repeatedly states, 'I will die in this flood! Please help me!' Which nursing diagnosis is most appropriate?",
          choices: [
            "Fear related to an actual/immediate threat",
            "Anxiety related to an upcoming flood",
            "Ineffective coping",
            "Powerlessness",
          ],
          answer: 0,
          rationale: "The woman is expressing fear of an actual, immediate threat.",
        },
        {
          id: "q9",
          question:
            "Which defense mechanism is classically associated with major depression in traditional psychodynamic nursing theory?",
          choices: ["Introjection", "Splitting", "Projection", "Displacement"],
          answer: 0,
          rationale: "Introjection is the defense mechanism associated with depression.",
        },
        {
          id: "q10",
          question:
            "A patient is prescribed a benzodiazepine for anxiety. Which instruction should the nurse emphasize?",
          choices: [
            "Antianxiety drugs treat the underlying cause of anxiety.",
            "Avoid alcohol because it can potentiate the CNS-depressant effects",
            "The medication may be discontinued abruptly without a physician's order",
            "Driving is safe despite delayed reaction time",
          ],
          answer: 1,
          rationale: "Alcohol potentiates the CNS-depressant effects of benzodiazepines.",
        },
        {
          id: "q11",
          question:
            "A patient taking lithium is scheduled for serum lithium-level monitoring. Which teaching is most appropriate?",
          choices: [
            "The exact time of the last lithium dose should be documented",
            "Lithium should always be taken on an empty stomach",
            "Polyuria and polydipsia cannot occur with lithium therapy",
            "Constipation is the primary adverse effect",
          ],
          answer: 0,
          rationale:
            "Documenting the time of the last dose is essential for accurate interpretation.",
        },
        {
          id: "q12",
          question:
            "Which finding is NOT an extrapyramidal adverse effect associated with haloperidol?",
          choices: ["Acute dystonia", "Akathisia", "Pseudoparkinsonism", "Increased libido"],
          answer: 3,
          rationale:
            "Increased libido is not an extrapyramidal side effect. EPS includes dystonia, akathisia, parkinsonism, and tardive dyskinesia.",
        },
        {
          id: "q13",
          question:
            "A patient receiving an antipsychotic appears restless, anxious, and agitated and reports an intense need to keep moving. Which adverse effect is the patient experiencing?",
          choices: ["Withdrawal", "Dyskinesia", "Dystonia", "Akathisia"],
          answer: 3,
          rationale:
            "Akathisia is characterized by restlessness and an intense need to keep moving.",
        },
        {
          id: "q14",
          question: "A patient is prescribed an SSRI. Which dietary instruction is appropriate?",
          choices: [
            "Aged cheese may be eaten as part of the usual diet",
            "The medication must always be taken first thing in the morning",
            "Peanuts are absolutely contraindicated",
            "A tyramine-free diet is required to prevent hypertension",
          ],
          answer: 0,
          rationale: "SSRIs do not require tyramine restriction unlike MAOIs.",
        },
        {
          id: "q15",
          question:
            "During a clinic visit, a patient reports early symptoms suggestive of rheumatoid arthritis. Which finding should the nurse particularly assess for during the interview?",
          choices: [
            "Enlarged rheumatoid nodules",
            "Early-morning joint stiffness",
            "Markedly limited range of motion",
            "Established deformities of the hands",
          ],
          answer: 1,
          rationale: "Early-morning joint stiffness is an early symptom of rheumatoid arthritis.",
        },
        {
          id: "q16",
          question:
            "During the acute inflammatory phase of rheumatoid arthritis, which intervention is the LOWEST priority?",
          choices: [
            "Preserving joint function",
            "Preventing joint deformity",
            "Relieving pain",
            "Maintaining usual tasks",
          ],
          answer: 3,
          rationale: "Maintaining usual tasks is the lowest priority during acute inflammation.",
        },
        {
          id: "q17",
          question:
            "A patient develops an increased tendency to bleed after prolonged NSAID use. Which mechanism most likely contributes to this effect?",
          choices: [
            "Decreased platelet adhesiveness/function",
            "Blocked conversion of prothrombin",
            "Impaired vitamin K synthesis",
            "Destruction of factor VIII",
          ],
          answer: 0,
          rationale: "NSAIDs decrease platelet adhesiveness/function.",
        },
        {
          id: "q18",
          question:
            "A nurse teaches a patient with osteoarthritis about lifestyle modifications. Which statement indicates correct understanding?",
          choices: [
            '"I will completely abstain from alcohol"',
            '"I will avoid exercise"',
            '"I will lose weight if I am overweight"',
            '"I will restrict all caffeine"',
          ],
          answer: 2,
          rationale: "Weight loss is important in managing osteoarthritis.",
        },
        {
          id: "q19",
          question:
            "Which intervention is most important in preventing relapse in a patient with chronic schizophrenia?",
          choices: [
            "Adherence to antipsychotic medication",
            "Regular exercise",
            "Dietary modifications",
            "Social media use",
          ],
          answer: 0,
          rationale: "Adherence to antipsychotic medication is crucial for preventing relapse.",
        },
        {
          id: "q20",
          question:
            "Teresa demonstrates splitting. Which statement best defines this characteristic?",
          choices: [
            "Viewing people and situations as either good or bad",
            "Having two separate personalities",
            "Talking about other people behind their backs",
            "Literally spitting at other people",
          ],
          answer: 0,
          rationale:
            "Splitting is viewing people and situations in extremes as all good or all bad.",
        },
        {
          id: "q21",
          question:
            "When assessing a patient with Borderline Personality Disorder, which information is most important to explore?",
          choices: [
            "Ability to get people on her side",
            "Disruption/impairment in important areas of her life",
            "Desire for an intimate relationship",
            "Increased acceptance from other people",
          ],
          answer: 1,
          rationale: "Assessing functional impairment is most important.",
        },
        {
          id: "q22",
          question:
            "Teresa acknowledges that she frequently manipulates others. What is the MOST appropriate short-term therapeutic goal?",
          choices: [
            "Develop an intimate relationship",
            "Acknowledge her own manipulative behavior",
            "Stop arguing with other people completely",
            "Express her feelings verbally",
          ],
          answer: 1,
          rationale: "Acknowledging manipulative behavior is a realistic short-term goal.",
        },
        {
          id: "q23",
          question:
            "A patient with BPD develops transient psychotic symptoms. Which class of medication may be used to target these symptoms?",
          choices: ["Mood stabilizer", "Benzodiazepines", "Lithium", "Antipsychotics"],
          answer: 3,
          rationale: "Antipsychotics are used to treat psychotic symptoms in BPD.",
        },
        {
          id: "q24",
          question:
            "Lorenz has alcohol use disorder and is prescribed disulfiram (Antabuse). Which of the following is a common adverse effect?",
          choices: ["Hypertension", "Bradycardia", "Depression", "Elation"],
          answer: 2,
          rationale: "Depression is a common adverse effect of disulfiram.",
        },
        {
          id: "q25",
          question:
            "Which of the following is NOT an appropriate intervention/program for improving feeding and nutrition?",
          choices: [
            "Deworming",
            "Salt substitute",
            "Food fortification",
            "Micronutrient supplementation",
          ],
          answer: 1,
          rationale: "Salt substitute is not a nutrition program intervention.",
        },
        {
          id: "q26",
          question:
            "During interaction with a family, which topic can the nurse discuss without unnecessarily intruding into highly private or sensitive family matters?",
          choices: [
            "Vacation getaway",
            "Extramarital relationship",
            "Socioeconomic status",
            "Inheritance",
          ],
          answer: 0,
          rationale: "Vacation getaway is a neutral topic that does not intrude on privacy.",
        },
        {
          id: "q27",
          question: "Which activity is the best example of informal learning?",
          choices: [
            "Attending a webinar",
            "Presenting/discussing research with colleagues",
            "Enrolling in graduate school",
            "Participating in a workshop",
          ],
          answer: 1,
          rationale: "Presenting and discussing research with colleagues is informal learning.",
        },
        {
          id: "q28",
          question: "Which is an example of formal learning?",
          choices: [
            "Attending a webinar",
            "Presenting research",
            "Enrolling in graduate school",
            "Reading journal articles",
          ],
          answer: 2,
          rationale: "Enrolling in graduate school is formal learning.",
        },
        {
          id: "q29",
          question: "Which intervention is the most effective primary prevention for pertussis?",
          choices: ["Immunization", "Isolation", "Antibiotics", "Hand hygiene"],
          answer: 0,
          rationale: "Immunization is the most effective primary prevention for pertussis.",
        },
        {
          id: "q30",
          question:
            "Which intervention is most appropriate when developing a weight-management plan for a 16-year-old adolescent with obesity?",
          choices: [
            "Instruct the mother to lose weight",
            "Tell the adolescent to exercise independently",
            "None of the above",
            "Collaborate with a dietitian",
          ],
          answer: 3,
          rationale:
            "Collaborating with a dietitian provides individualized nutritional management.",
        },
        {
          id: "q31",
          question:
            "Which finding represents the best outcome indicator of a community dengue prevention and control program?",
          choices: [
            "Reduction in the number of people bitten by mosquitoes",
            "Reduction in the number/incidence of dengue cases",
            "Increased recovery among patients with dengue",
            "Increased community compliance with vector-control activities",
          ],
          answer: 1,
          rationale: "Reduced incidence of dengue cases is the best outcome indicator.",
        },
        {
          id: "q32",
          question: "When should rehabilitation of a hospitalized patient begin?",
          choices: [
            "As soon as the patient can ambulate",
            "Upon admission to the healthcare institution",
            "When a physical therapist becomes available",
            "After discharge",
          ],
          answer: 1,
          rationale: "Rehabilitation should begin upon admission.",
        },
        {
          id: "q33",
          question:
            "After approaching the sink and preparing to perform routine handwashing with soap and water, what is the first step in the actual handwashing procedure?",
          choices: ["Apply soap", "Wet the hands with water", "Rub hands together", "Rinse hands"],
          answer: 1,
          rationale: "The first step is to wet the hands with clean running water.",
        },
        {
          id: "q34",
          question:
            "According to the WHO/ISH traditional blood-pressure classification, how is a BP of 150/90 mmHg classified?",
          choices: [
            "Grade/Stage 2 hypertension",
            "Grade/Stage 1 hypertension",
            "Prehypertension",
            "Normal",
          ],
          answer: 1,
          rationale: "Grade 1 hypertension is 140-159 systolic and/or 90-99 diastolic.",
        },
        {
          id: "q35",
          question:
            "Upon arriving at a family's home for a scheduled community health nursing visit, what should the nurse do first?",
          choices: [
            "Assess the patient",
            "Explain the purpose of the visit",
            "Greet the family and establish rapport",
            "Perform the nursing procedure",
          ],
          answer: 2,
          rationale: "The first step is to greet the family and establish rapport.",
        },
        {
          id: "q36",
          question:
            "Which record is considered the fundamental building block or foundation of the Field Health Services Information System (FHSIS)?",
          choices: ["Treatment Record", "Target Client List", "Reporting Form", "Output Report"],
          answer: 0,
          rationale: "The Treatment Record is the foundation of FHSIS.",
        },
        {
          id: "q37",
          question:
            "HIV may be present in several body fluids. Which of the following is NOT considered a usual vehicle for HIV transmission?",
          choices: ["Synovial fluid", "Blood", "Urine", "Semen"],
          answer: 2,
          rationale: "Urine is not a usual vehicle for HIV transmission.",
        },
        {
          id: "q38",
          question:
            "According to the traditional WHO analgesic-ladder concept, which medication is appropriate for severe pain?",
          choices: ["Strong opioids", "Moderate/weak opioids", "Non-opioid analgesics", "NSAIDs"],
          answer: 0,
          rationale:
            "Strong opioids are used for severe pain according to the WHO analgesic ladder.",
        },
        {
          id: "q39",
          question:
            "At approximately what age does a child have most of the permanent teeth, excluding third molars (wisdom teeth)?",
          choices: ["8-9 years", "6-7 years", "4-5 years", "12-13 years"],
          answer: 3,
          rationale: "Permanent teeth, excluding wisdom teeth, are usually present by 12-13 years.",
        },
        {
          id: "q40",
          question: "When do permanent teeth BEGIN to erupt?",
          choices: ["4-5 years", "6-7 years", "8-9 years", "10-12 years"],
          answer: 1,
          rationale: "Permanent teeth begin to erupt around 6-7 years of age.",
        },
        {
          id: "q41",
          question:
            "What is the appropriate maximum amount of milk that may be given to an infant per feeding?",
          choices: ["30-80 mL", "40-100 mL", "10-20 mL", "5-10 mL"],
          answer: 0,
          rationale: "An infant's stomach capacity is approximately 30-80 mL per feeding.",
        },
        {
          id: "q42",
          question:
            "During a uterine contraction, the nurse notes a decrease in the fetal heart rate. What should the nurse do FIRST?",
          choices: [
            "Reassess the fetal heart rate/pattern",
            "Notify the physician immediately",
            "Assess and differentiate the maternal pulse",
            "Administer/increase oxytocin",
          ],
          answer: 0,
          rationale: "The first action is to reassess the fetal heart rate/pattern.",
        },
        {
          id: "q43",
          question:
            "Which action should the nurse NOT perform when administering medications to a patient with an acute condition?",
          choices: [
            "Advise an ambulatory patient to obtain prescribed outpatient medication",
            "Verify the patient's name and date of birth before administering",
            "Ask a relative to administer the patient's hospital medications",
            "Administer the medication accurately according to the prescription",
          ],
          answer: 2,
          rationale: "A relative should not administer hospital medications.",
        },
        {
          id: "q44",
          question:
            "A nurse prioritizes a child with a high-grade fever over another patient with a mild laceration. Which ethical principle is best demonstrated?",
          choices: ["Veracity", "Beneficence", "Nonmaleficence", "Justice"],
          answer: 3,
          rationale: "Justice is demonstrated by prioritizing patients based on severity.",
        },
        {
          id: "q45",
          question:
            "During community health teaching about prevention of HIV transmission, which instruction is most appropriate?",
          choices: [
            "Avoid having multiple sexual partners and practice safer sex",
            "Share needles if cleaned properly",
            "Avoid all physical contact",
            "Practice universal precautions only in hospitals",
          ],
          answer: 0,
          rationale:
            "Avoiding multiple partners and practicing safer sex is appropriate HIV prevention.",
        },
        {
          id: "q46",
          question:
            "Which record reflects the essential treatment and care rendered to an individual patient/client?",
          choices: ["Treatment Record", "Target Client List", "Reporting Form", "Output Report"],
          answer: 0,
          rationale: "The Treatment Record reflects essential treatment and care rendered.",
        },
        {
          id: "q47",
          question: "Which is NOT a major complication of a duodenal/peptic ulcer?",
          choices: ["Hemorrhage", "Perforation", "Gastritis", "Gastric outlet obstruction"],
          answer: 2,
          rationale: "Gastritis is not a major complication of peptic ulcer disease.",
        },
        {
          id: "q48",
          question: "Which is a rapid-acting insulin?",
          choices: ["Regular insulin", "Lispro", "Glargine", "NPH"],
          answer: 1,
          rationale: "Lispro is a rapid-acting insulin.",
        },
        {
          id: "q49",
          question: "Which is a short-acting insulin?",
          choices: ["Lispro", "Regular insulin", "Glargine", "NPH"],
          answer: 1,
          rationale: "Regular insulin is a short-acting insulin.",
        },
        {
          id: "q50",
          question: "What position is appropriate after an appendectomy?",
          choices: ["Semi-Fowler's", "Supine", "Prone", "Side-lying"],
          answer: 0,
          rationale: "Semi-Fowler's position is appropriate after appendectomy.",
        },
        {
          id: "q51",
          question: "Which intercostal space is used for liver biopsy?",
          choices: ["10th", "6th-7th", "8th-9th", "11th"],
          answer: 2,
          rationale: "Liver biopsy is usually performed at the 8th-9th intercostal space.",
        },
        {
          id: "q52",
          question:
            "Which finding in a patient with a chest tube is least necessary to report as an abnormal finding?",
          choices: [
            "Fluctuation/tidaling of fluid in the water-seal chamber",
            "Significant bleeding",
            "Increasing/excessive amount of drainage",
            "Continuous bubbling",
          ],
          answer: 0,
          rationale: "Tidaling (fluctuation) in the water-seal chamber is often normal.",
        },
        {
          id: "q53",
          question:
            "A patient reports severe pain rated 8/10. Which prescribed medication is most appropriate among the following?",
          choices: ["Ibuprofen", "Acetaminophen", "Meperidine HCl", "Mefenamic acid"],
          answer: 2,
          rationale: "Meperidine HCl is a strong opioid appropriate for severe pain.",
        },
        {
          id: "q54",
          question:
            "Which medication is NOT used as a rapid-relief/rescue bronchodilator during an acute asthma attack?",
          choices: ["Albuterol", "Prednisone", "Salbutamol", "Proventil"],
          answer: 1,
          rationale: "Prednisone is a steroid for inflammation, not a rapid-relief bronchodilator.",
        },
        {
          id: "q55",
          question:
            "Which assessment technique should the nurse AVOID in a patient with a suspected abdominal aortic aneurysm?",
          choices: [
            "Inspect the abdomen",
            "Palpate the pulsating abdominal mass",
            "Perform deep palpation of the lower abdomen",
            "Auscultate the abdomen",
          ],
          answer: 1,
          rationale: "Palpating a pulsating mass in AAA can cause rupture.",
        },
        {
          id: "q56",
          question: "Which is a complication of uncontrolled diabetes?",
          choices: ["Arteriopathy", "Cardiomyopathy", "Neuropathy", "Myopathy"],
          answer: 2,
          rationale: "Neuropathy is a common chronic complication of diabetes.",
        },
        {
          id: "q57",
          question:
            "Which laboratory finding would the nurse most likely expect in a patient with acute appendicitis?",
          choices: [
            "Decreased eosinophils",
            "Decreased lymphocytes",
            "Increased basophils",
            "Increased neutrophils",
          ],
          answer: 3,
          rationale: "Increased neutrophils indicate bacterial infection like appendicitis.",
        },
        {
          id: "q58",
          question:
            "A postoperative patient will return to the province before the scheduled removal of sutures. Who may appropriately remove the sutures when ordered and within the professional's scope of practice?",
          choices: [
            "Rural Health Physician",
            "Rural Health Nurse",
            "Surgeon",
            "General Practitioner",
          ],
          answer: 1,
          rationale: "Rural Health Nurses are authorized to remove sutures.",
        },
        {
          id: "q59",
          question:
            "Which procedure can directly visualize the entire colon and is widely used for colorectal cancer screening?",
          choices: ["Colonoscopy", "CEA", "CT scan", "Sigmoidoscopy"],
          answer: 0,
          rationale:
            "Colonoscopy can visualize the entire colon and is used for colorectal cancer screening.",
        },
        {
          id: "q60",
          question:
            "What mechanisms allow hemodialysis to remove waste products and excess fluid from the blood?",
          choices: [
            "Diffusion and ultrafiltration",
            "Active transport and osmosis",
            "Filtration and absorption",
            "Osmosis and dialysis",
          ],
          answer: 0,
          rationale:
            "Hemodialysis removes waste through diffusion and excess fluid through ultrafiltration.",
        },
        {
          id: "q61",
          question:
            "What is the mechanism responsible for FILTRATION/removal of excess fluid in hemodialysis?",
          choices: ["Diffusion", "Osmosis", "Ultrafiltration", "Active transport"],
          answer: 2,
          rationale: "Ultrafiltration is responsible for removal of excess fluid.",
        },
        {
          id: "q62",
          question: "How are metabolic wastes removed in hemodialysis?",
          choices: ["Diffusion", "Osmosis", "Ultrafiltration", "Active transport"],
          answer: 0,
          rationale: "Metabolic wastes are removed through diffusion.",
        },
        {
          id: "q63",
          question:
            "A patient with acute myocardial infarction has persistent severe chest pain and anxiety despite initial appropriate therapy. Which medication may relieve both pain and associated anxiety/distress?",
          choices: ["Oxygen", "Nitroglycerin", "Morphine", "Aspirin"],
          answer: 2,
          rationale: "Morphine relieves both pain and anxiety in MI.",
        },
        {
          id: "q64",
          question:
            "Which action should the nurse avoid in the arm containing an arteriovenous (AV) fistula?",
          choices: [
            "Blood pressure measurement",
            "Venipuncture/phlebotomy",
            "IV insertion",
            "All of the above",
          ],
          answer: 3,
          rationale: "All of these actions should be avoided in the arm with an AV fistula.",
        },
        {
          id: "q65",
          question: "Which site is appropriate for administration of the MMR vaccine?",
          choices: ["Deltoid/upper arm", "Dorsogluteal", "Vastus lateralis", "Subcutaneous"],
          answer: 0,
          rationale: "MMR vaccine is given intramuscularly in the deltoid/upper arm.",
        },
        {
          id: "q66",
          question: "Which is a characteristic manifestation of acute glomerulonephritis?",
          choices: ["Tea/cola-colored urine", "Copious urine output", "Pale urine", "Frothy urine"],
          answer: 0,
          rationale: "Tea/cola-colored urine is characteristic of acute glomerulonephritis.",
        },
        {
          id: "q67",
          question: "When can post-streptococcal acute glomerulonephritis occur?",
          choices: [
            "During a streptococcal infection",
            "Following a streptococcal infection",
            "After viral infection",
            "After parasitic infection",
          ],
          answer: 1,
          rationale: "APSGN occurs 1-2 weeks following a streptococcal infection.",
        },
        {
          id: "q68",
          question:
            "When prescribed as a preanesthetic medication by the subcutaneous route, when is atropine traditionally administered before surgery?",
          choices: ["20-30 minutes", "5-10 minutes", "45-60 minutes", "Immediately before"],
          answer: 0,
          rationale: "Atropine is traditionally administered 20-30 minutes before surgery.",
        },
        {
          id: "q69",
          question:
            "Which medication can be used to treat both hypertension and certain cardiac arrhythmias?",
          choices: ["Verapamil", "Metoprolol", "Amiodarone", "Lidocaine"],
          answer: 0,
          rationale: "Verapamil treats both hypertension and certain arrhythmias.",
        },
        {
          id: "q70",
          question: "Which finding is NOT characteristic of the paroxysmal stage of pertussis?",
          choices: [
            "Fever and runny nose/coryza",
            "Severe paroxysmal coughing",
            "Inspiratory 'whoop'",
            "Vomiting following coughing episodes",
          ],
          answer: 0,
          rationale:
            "Fever and runny nose are characteristic of the catarrhal stage, not the paroxysmal stage.",
        },
        {
          id: "q71",
          question: "What organism causes pertussis (whooping cough)?",
          choices: [
            "Bordetella pertussis",
            "Streptococcus pneumoniae",
            "Haemophilus influenzae",
            "Mycobacterium tuberculosis",
          ],
          answer: 0,
          rationale: "Bordetella pertussis is the causative organism of whooping cough.",
        },
        {
          id: "q72",
          question:
            "A patient suddenly develops hematemesis (vomiting blood). Which nursing action should receive priority?",
          choices: [
            "Give ice chips",
            "Notify the physician",
            "Establish/maintain IV access",
            "Administer antiemetics",
          ],
          answer: 2,
          rationale:
            "Establishing IV access for fluid resuscitation is a priority in active bleeding.",
        },
        {
          id: "q73",
          question:
            "Which description best characterizes a second-degree (partial-thickness) burn?",
          choices: [
            "Damage involves epidermis and part of dermis with blisters",
            "Damage involves only epidermis",
            "Damage destroys entire epidermis and dermis",
            "Damage extends to bone",
          ],
          answer: 0,
          rationale:
            "Second-degree burns involve the epidermis and part of the dermis with blister formation.",
        },
        {
          id: "q74",
          question:
            "Which laboratory/urinary finding is most characteristic of acute glomerulonephritis?",
          choices: [
            "Elevated RBC and WBC counts",
            "Proteinuria and tea-colored urine",
            "Elevated RBC and platelet counts",
            "Elevated WBC and platelet counts",
          ],
          answer: 1,
          rationale: "Proteinuria and tea-colored urine are characteristic of AGN.",
        },
        {
          id: "q75",
          question: "In which part of a research paper are all sources cited in the study listed?",
          choices: ["References/Reference List", "Abstract", "Introduction", "Methodology"],
          answer: 0,
          rationale: "The Reference List contains all sources cited in the study.",
        },
        {
          id: "q76",
          question:
            "A patient experiences extreme, persistent fear of elevators and, upon entering one, develops intense fear and a sense of impending doom. Which disorder best describes this condition?",
          choices: [
            "Specific phobia (phobic disorder)",
            "Generalized anxiety",
            "Panic disorder",
            "Social anxiety disorder",
          ],
          answer: 0,
          rationale:
            "Extreme fear of a specific object/situation (elevators) is a specific phobia.",
        },
        {
          id: "q77",
          question:
            "A nurse restrains a competent patient without appropriate clinical justification or legal authorization, preventing the patient from leaving. Which intentional tort may have occurred?",
          choices: ["Assault", "False imprisonment", "Battery", "Negligence"],
          answer: 1,
          rationale: "Unauthorized restraint/confinement constitutes false imprisonment.",
        },
        {
          id: "q78",
          question:
            "Which adverse effects should the nurse teach a patient taking amitriptyline to expect/report?",
          choices: [
            "Dry mouth and blurred vision",
            "Hypertension",
            "Hyperglycemia",
            "Increased appetite",
          ],
          answer: 0,
          rationale:
            "Amitriptyline causes anticholinergic effects including dry mouth and blurred vision.",
        },
        {
          id: "q79",
          question:
            "Which physical finding is commonly associated with recent cannabis/marijuana use?",
          choices: ["Hypertension", "Red conjunctiva", "Hallucinations", "Mydriasis"],
          answer: 1,
          rationale: "Red conjunctiva (bloodshot eyes) is associated with cannabis use.",
        },
        {
          id: "q80",
          question: "Which manifestation is commonly associated with schizophrenia?",
          choices: [
            "Auditory hallucinations",
            "Visual hallucinations",
            "Tactile hallucinations",
            "Olfactory hallucinations",
          ],
          answer: 0,
          rationale: "Auditory hallucinations are the most common type in schizophrenia.",
        },
        {
          id: "q81",
          question: "The Z-track technique is used with which route of medication administration?",
          choices: ["Intramuscular", "Subcutaneous", "Intravenous", "Intradermal"],
          answer: 0,
          rationale: "Z-track technique is used for intramuscular injections.",
        },
        {
          id: "q82",
          question:
            "Which electrolyte finding is NOT typically associated with recurrent self-induced vomiting in bulimia nervosa?",
          choices: ["Hypokalemia", "Metabolic alkalosis", "Hyperkalemia", "Dehydration"],
          answer: 2,
          rationale: "Hyperkalemia is not associated with bulimia; hypokalemia is common.",
        },
        {
          id: "q83",
          question:
            "Which finding is an early indicator that a patient with major depression is beginning to improve?",
          choices: [
            "Increased appetite",
            "Improved self-concept",
            "Increased interest in the environment",
            "Increased energy level",
          ],
          answer: 3,
          rationale: "An increased energy level is an early indicator of improvement.",
        },
        {
          id: "q84",
          question:
            "A nurse begins a therapeutic conversation by asking, 'What do you want to know more about?' Which communication technique is being used?",
          choices: ["Broad opening", "Synthesizing", "Clarifying", "Restating"],
          answer: 0,
          rationale: "Broad opening gives the patient freedom to choose where to start.",
        },
        {
          id: "q85",
          question: "Which is an example of an ACE Inhibitor?",
          choices: ["Captopril", "Metoprolol", "Amlodipine", "Losartan"],
          answer: 0,
          rationale: "Captopril is an ACE inhibitor (-pril).",
        },
        {
          id: "q86",
          question:
            "A patient is encouraged to identify negative automatic thoughts and challenge them by examining evidence and developing more realistic alternatives. Which therapy is being used?",
          choices: [
            "Cognitive Behavioral Therapy",
            "Psychodynamic therapy",
            "Client-centered therapy",
            "Gestalt therapy",
          ],
          answer: 0,
          rationale: "CBT focuses on identifying and challenging maladaptive thoughts.",
        },
        {
          id: "q87",
          question:
            "Which medication may be prescribed for long-term reduction of uric acid in a patient with recurrent gout?",
          choices: ["Allopurinol", "Colchicine", "Indomethacin", "Prednisone"],
          answer: 0,
          rationale: "Allopurinol is used for long-term uric acid reduction.",
        },
        {
          id: "q88",
          question: "What condition is suggested by euphoria and excessive talking?",
          choices: ["Mania", "Depression", "Schizophrenia", "Anxiety"],
          answer: 0,
          rationale: "Euphoria and excessive talking are characteristic of mania.",
        },
        {
          id: "q89",
          question:
            "Marijuana/cannabis is best classified as which type of psychoactive substance among the following?",
          choices: ["Hallucinogen", "Depressant", "Sedative", "Stimulant"],
          answer: 0,
          rationale: "Marijuana is classified as a hallucinogen.",
        },
        {
          id: "q90",
          question: "A suppository is commonly inserted into which body cavity?",
          choices: ["Oral", "Rectal", "Vaginal", "Nasal"],
          answer: 1,
          rationale: "Suppositories are inserted rectally.",
        },
        {
          id: "q91",
          question:
            "A hypertensive patient develops premature ventricular contractions (PVCs). Which medication can help control blood pressure and suppress adrenergically mediated ventricular ectopy?",
          choices: ["Amiodarone", "Lidocaine", "Verapamil", "Metoprolol"],
          answer: 3,
          rationale: "Metoprolol treats both hypertension and ventricular ectopy.",
        },
        {
          id: "q92",
          question:
            "Which vein is generally the preferred site for temporary hemodialysis catheter placement among the following?",
          choices: [
            "Internal jugular vein",
            "Subclavian vein",
            "Femoral artery",
            "Brachial artery",
          ],
          answer: 0,
          rationale: "The internal jugular vein is preferred for temporary hemodialysis access.",
        },
        {
          id: "q93",
          question: "Which anticoagulant is commonly used during hemodialysis?",
          choices: ["Warfarin", "Heparin", "Enoxaparin", "Aspirin"],
          answer: 1,
          rationale: "Heparin is the anticoagulant commonly used during hemodialysis.",
        },
        {
          id: "q94",
          question: "Which is an oral anticoagulant?",
          choices: ["Heparin", "Enoxaparin", "Warfarin", "Aspirin"],
          answer: 2,
          rationale: "Warfarin is an oral anticoagulant.",
        },
        {
          id: "q95",
          question:
            "Following mastectomy, exercises are generally directed toward maintaining mobility and function of which areas, EXCEPT:",
          choices: ["Head/neck", "Shoulder", "Arm", "Lower back"],
          answer: 3,
          rationale: "Lower back is not typically affected by mastectomy.",
        },
        {
          id: "q96",
          question:
            "A patient who recently underwent mastectomy tells the nurse that she feels sad and worries that her husband will no longer accept her because of the changes to her body. Which referral is most appropriate if additional psychosocial support is needed?",
          choices: ["Psychiatrist", "Psychologist", "Guidance counselor", "Surgeon"],
          answer: 1,
          rationale: "A psychologist provides psychosocial support and counseling.",
        },
        {
          id: "q97",
          question: "Which of the following is NOT one of the basic processes of pharmacokinetics?",
          choices: ["Absorption", "Distribution", "Metabolism", "Interaction"],
          answer: 3,
          rationale: "Interaction is not one of the basic pharmacokinetic processes (ADME).",
        },
        {
          id: "q98",
          question:
            "Which vaccine should be recommended to adolescents to help prevent cervical cancer and other HPV-related diseases?",
          choices: [
            "Human papillomavirus (HPV) vaccine",
            "Hepatitis B vaccine",
            "Herpes zoster vaccine",
            "Varicella vaccine",
          ],
          answer: 0,
          rationale: "HPV vaccine prevents cervical cancer and other HPV-related diseases.",
        },
        {
          id: "q99",
          question:
            "A nurse assesses a patient's AV fistula before hemodialysis and cannot palpate a thrill or auscultate a bruit. What does this finding most likely indicate?",
          choices: [
            "Possible thrombosis/clot or occlusion",
            "Mechanical error of the dialysis machine",
            "Normal finding",
            "Patient movement",
          ],
          answer: 0,
          rationale: "Absence of thrill/bruit indicates possible thrombosis or occlusion.",
        },
        {
          id: "q100",
          question:
            "During/after hemodialysis, an air embolism is suspected. In which position should the patient traditionally be placed?",
          choices: ["Semi-Fowler's", "Left lateral", "Right lateral", "Trendelenburg"],
          answer: 1,
          rationale: "Left lateral position is the traditional position for air embolism.",
        },
        {
          id: "q101",
          question:
            "Which factor is most important in promoting continuity and success of a patient's rehabilitation after discharge?",
          choices: [
            "Active involvement and support of the family",
            "Schedule for hourly visit",
            "Frequent follow-up visits alone",
            "Presence of a nursing aide/caregiver",
          ],
          answer: 0,
          rationale: "Family involvement is most important for successful rehabilitation.",
        },
        {
          id: "q102",
          question:
            "The head nurse is assigning patients to a newly hired/inexperienced registered nurse. Which patient is most appropriate to assign?",
          choices: [
            "A patient recently transferred from the ICU",
            "A patient with a stable uncomplicated fracture",
            "A patient with an acute/unstable condition",
            "An older stable patient preparing for discharge",
          ],
          answer: 1,
          rationale: "A stable patient with predictable care is appropriate for a new RN.",
        },
        {
          id: "q103",
          question: "Which finding is most characteristic of rheumatoid arthritis?",
          choices: [
            "Joint stiffness relieved by exercise",
            "Early-morning stiffness of the hands",
            "Deformity of the fingers/hands",
            "Pain relieved primarily by rest",
          ],
          answer: 1,
          rationale: "Early-morning stiffness of the hands is characteristic of RA.",
        },
        {
          id: "q104",
          question: "In osteoarthritis, Heberden's nodes develop at which joint?",
          choices: [
            "Proximal interphalangeal",
            "Metacarpophalangeal",
            "Distal interphalangeal",
            "Wrist",
          ],
          answer: 2,
          rationale: "Heberden's nodes develop at the distal interphalangeal (DIP) joints.",
        },
        {
          id: "q105",
          question:
            "A nurse removes an indwelling urinary catheter without first deflating the retention balloon. The patient experiences severe pain, urethral trauma, and bleeding. What legal claim most appropriately applies to the nurse's action?",
          choices: ["Tort", "Negligence", "Misdemeanor", "Assault"],
          answer: 1,
          rationale: "This constitutes negligence - failure to follow proper procedure.",
        },
        {
          id: "q106",
          question:
            "Which condition is LEAST likely to develop in a patient with bulimia nervosa who frequently induces vomiting?",
          choices: [
            "Hyperkalemia",
            "Tooth decay/dental erosion",
            "Gastric irritation/ulceration",
            "Rectal bleeding",
          ],
          answer: 0,
          rationale: "Hyperkalemia is not a complication; hypokalemia is common.",
        },
        {
          id: "q107",
          question:
            "Which complication poses the greatest risk for sudden death in a patient with severe bulimia nervosa?",
          choices: [
            "Hypokalemia leading to cardiac dysrhythmias",
            "Metabolic acidosis leading to renal failure",
            "Hyponatremia and circulatory changes",
            "Hypernatremia and congestive heart failure",
          ],
          answer: 0,
          rationale: "Hypokalemia can cause fatal cardiac dysrhythmias.",
        },
        {
          id: "q108",
          question: "The nurse knows that, by nature, osteoarthritis is best described as:",
          choices: [
            "A local inflammatory disease of the joints",
            "A systemic and widespread inflammation",
            "Degenerative and non-inflammatory breakdown",
            "Idiopathic in etiology",
          ],
          answer: 2,
          rationale: "Osteoarthritis is a degenerative, non-inflammatory joint disease.",
        },
        {
          id: "q109",
          question: "What is the primary goal during the acute phase of rheumatoid arthritis?",
          choices: [
            "Prevention of contractures and deformities",
            "Maintenance of optimum function",
            "Relief from pain",
            "Maintenance of body image",
          ],
          answer: 2,
          rationale: "Pain relief is the primary goal during the acute phase of RA.",
        },
        {
          id: "q110",
          question:
            "Heberden's nodes are a characteristic manifestation of osteoarthritis. Where are they located?",
          choices: [
            "Proximal interphalangeal joints",
            "Distal interphalangeal joints",
            "Large weight-bearing joints",
            "Metacarpophalangeal joints",
          ],
          answer: 1,
          rationale: "Heberden's nodes are located at the distal interphalangeal joints.",
        },
        {
          id: "q111",
          question: "The manifestations of severe dengue include the following, EXCEPT:",
          choices: [
            "Narrowed pulse pressure, pale and cool skin",
            "Bleeding, decreased blood pressure",
            "Extreme fever, vomiting",
            "Decreased level of consciousness, abdominal pain",
          ],
          answer: 2,
          rationale: "Extreme fever and vomiting are not specific to severe dengue.",
        },
        {
          id: "q112",
          question:
            "Following a motor-vehicle accident, the client develops acute kidney injury. Which type of renal injury is most likely to precipitate the condition?",
          choices: ["Pre-renal", "Intrarenal", "Post-renal", "All of the above"],
          answer: 0,
          rationale: "Trauma with blood loss causes pre-renal AKI.",
        },
        {
          id: "q113",
          question:
            "The client asks how hemodialysis removes waste products and excess fluid. Which explanation is BEST?",
          choices: [
            "Through active transport and osmosis",
            "Through a semipermeable membrane",
            "Through the use of purifying reagents",
            "Through filtration and absorption",
          ],
          answer: 1,
          rationale: "Hemodialysis uses a semipermeable membrane.",
        },
        {
          id: "q114",
          question:
            "Which is the most common/preferred location for creation of an AV fistula for hemodialysis?",
          choices: ["Forearm", "Neck", "Abdomen", "Femur"],
          answer: 0,
          rationale: "The forearm is the preferred location for AV fistula creation.",
        },
        {
          id: "q115",
          question:
            "During hemodialysis, a patient develops signs suggesting a venous air embolism. Which position is the traditional emergency position?",
          choices: [
            "Semi-Fowler's",
            "High-Fowler's",
            "Left side-lying with head lowered",
            "Right side-lying with head lowered",
          ],
          answer: 2,
          rationale: "Left side-lying with head lowered is the position for air embolism.",
        },
        {
          id: "q116",
          question:
            "Which statement by the client with a left-arm AV fistula indicates a need for further teaching?",
          choices: [
            '"The nurse will use this site for administration of my erythropoietin"',
            '"I will ask that my blood pressure be taken on my right arm"',
            '"I should be careful when lifting objects"',
            '"I should clean the site daily with soap and water"',
          ],
          answer: 0,
          rationale: "The AV fistula site should never be used for injections or blood draws.",
        },
        {
          id: "q117",
          question:
            "Which Philippine law provides special protection to children against abuse, exploitation, and discrimination?",
          choices: ["RA 9173", "RA 7610", "RA 9255", "RA 8353"],
          answer: 1,
          rationale:
            "RA 7610 is the Special Protection of Children Against Abuse, Exploitation and Discrimination Act.",
        },
        {
          id: "q118",
          question: "Bulimia is best defined as a/an:",
          choices: [
            "Disorder of unknown origin associated with starvation",
            "Pathological disorder characterized by binge eating and vomiting",
            "Phobic disorder involving fear of obesity",
            "Eating disorder associated with vomiting only",
          ],
          answer: 1,
          rationale: "Bulimia is characterized by binge eating followed by purging behaviors.",
        },
        {
          id: "q119",
          question: "Which condition is NOT likely to develop in a patient with bulimia?",
          choices: ["Hyperkalemia", "Tooth decay", "Gastric ulcer", "Rectal bleeding"],
          answer: 0,
          rationale: "Hyperkalemia is not a typical complication of bulimia.",
        },
        {
          id: "q120",
          question: "Which condition may lead to death in a patient with bulimia?",
          choices: [
            "Hypokalemia → cardiac arrest",
            "Metabolic acidosis → renal failure",
            "Hyponatremia → circulatory collapse",
            "Hypernatremia → congestive heart failure",
          ],
          answer: 0,
          rationale: "Hypokalemia can lead to fatal cardiac dysrhythmias.",
        },
        {
          id: "q121",
          question:
            "Endocrine abnormalities may occur in patients with eating disorders. Which finding would be expected?",
          choices: [
            "Delayed TSH response to stimulation",
            "Increased FSH production",
            "Hypopituitarism",
            "Decreased ACTH response to cortisone",
          ],
          answer: 0,
          rationale: "Delayed TSH response is an endocrine abnormality in eating disorders.",
        },
        {
          id: "q122",
          question:
            "A client with cardiogenic shock is receiving a continuous IV infusion of dobutamine. Which finding requires the nurse's MOST immediate attention?",
          choices: [
            "Heart rate of 124 with frequent PVCs",
            "Urine output of 40 mL/hr",
            "Blood pressure of 118/76 mmHg",
            "Warm extremities",
          ],
          answer: 0,
          rationale: "Tachycardia with PVCs indicates arrhythmia requiring immediate attention.",
        },
        {
          id: "q123",
          question:
            "A patient's heart rate is 80 beats/min and stroke volume is 70 mL/beat. What is the patient's cardiac output?",
          choices: ["4,800 mL/min", "5,600 mL/min", "6,400 mL/min", "7,000 mL/min"],
          answer: 1,
          rationale: "CO = HR × SV = 80 × 70 = 5,600 mL/min.",
        },
        {
          id: "q124",
          question:
            "During a psychiatric interview, a client states, 'I prefer being alone. I don't really want close relationships, even with my family.' The client shows little emotional expression. Which personality disorder is MOST consistent with these findings?",
          choices: ["Avoidant", "Schizotypal", "Schizoid", "Paranoid"],
          answer: 2,
          rationale:
            "Schizoid personality disorder is characterized by detachment and limited emotional expression.",
        },
        {
          id: "q125",
          question:
            "Which finding would make the nurse suspect schizotypal rather than schizoid personality disorder?",
          choices: [
            "Preference for solitary activities",
            "Lack of close friends",
            "Magical thinking and unusual perceptions",
            "Limited emotional expression",
          ],
          answer: 2,
          rationale:
            "Magical thinking and unusual perceptual experiences are features of schizotypal disorder.",
        },
        {
          id: "q126",
          question:
            "A client with bipolar disorder is prescribed lithium. Which statement indicates a NEED for further teaching?",
          choices: [
            '"I will maintain a consistent amount of salt in my diet"',
            '"I will drink adequate amounts of fluid"',
            '"I can drastically reduce my sodium intake"',
            '"I need regular blood tests"',
          ],
          answer: 2,
          rationale:
            "Sodium intake should be consistent; drastic reduction can cause lithium toxicity.",
        },
        {
          id: "q127",
          question:
            "Which finding in a client taking lithium should the nurse recognize as suggestive of toxicity?",
          choices: [
            "Mild thirst",
            "Fine hand tremor",
            "Ataxia and slurred speech",
            "Mild nausea during initial therapy",
          ],
          answer: 2,
          rationale: "Ataxia and slurred speech are signs of lithium toxicity.",
        },
        {
          id: "q128",
          question:
            "A nurse observes fluctuation of fluid in the water-seal chamber of a client's chest drainage system during respiration. What is the BEST action?",
          choices: [
            "Clamp the chest tube",
            "Notify the physician immediately",
            "Continue monitoring the system",
            "Increase wall suction",
          ],
          answer: 2,
          rationale: "Tidaling (fluctuation) is normal and should be monitored.",
        },
        {
          id: "q129",
          question:
            "Continuous bubbling is observed in the water-seal chamber of a chest drainage system. What should the nurse suspect?",
          choices: ["Normal lung expansion", "Air leak", "Excessive suction", "Pleural hemorrhage"],
          answer: 1,
          rationale: "Continuous bubbling in the water-seal chamber indicates an air leak.",
        },
        {
          id: "q130",
          question:
            "The nurse accidentally finds the chest tube disconnected from the drainage tubing. What is the priority?",
          choices: [
            "Clamp the chest tube",
            "Rapidly re-establish closed drainage",
            "Place the client flat",
            "Remove the chest tube",
          ],
          answer: 1,
          rationale: "The priority is to rapidly re-establish a closed drainage system.",
        },
        {
          id: "q131",
          question: "Which nursing action is appropriate for a client with a chest tube?",
          choices: [
            "Keep the drainage unit at chest level",
            "Routinely clamp the tube during ambulation",
            "Keep the drainage unit below chest level",
            "Routinely milk the tubing every hour",
          ],
          answer: 2,
          rationale: "The drainage unit should be kept below chest level for gravity drainage.",
        },
        {
          id: "q132",
          question: "Which Philippine law is known as the Mental Health Act?",
          choices: ["RA 7610", "RA 9173", "RA 11036", "RA 11310"],
          answer: 2,
          rationale: "RA 11036 is the Philippine Mental Health Act.",
        },
        {
          id: "q133",
          question:
            "A psychiatric client refuses to disclose details of therapy to relatives. Which right protected under the Mental Health Act is most relevant?",
          choices: ["Confidentiality", "Justice", "Beneficence", "Fidelity"],
          answer: 0,
          rationale: "Confidentiality protects the client's right to privacy.",
        },
        {
          id: "q134",
          question:
            "A client experiencing hypomania is excessively talkative and moves rapidly from one activity to another. Which nursing intervention is MOST appropriate?",
          choices: [
            "Encourage competitive group activities",
            "Provide a structured environment with decreased stimulation",
            "Confront the client when excessive talking occurs",
            "Encourage prolonged group discussions",
          ],
          answer: 1,
          rationale:
            "A structured environment with decreased stimulation is appropriate for hypomania.",
        },
        {
          id: "q135",
          question:
            "A client with hypomania has difficulty sitting long enough to finish meals. Which intervention is MOST appropriate?",
          choices: [
            "Require the client to remain seated",
            "Offer nutritious, easy-to-consume foods",
            "Restrict snacks between meals",
            "Provide three large meals daily",
          ],
          answer: 1,
          rationale: "Easy-to-consume foods help ensure adequate nutrition.",
        },
        {
          id: "q136",
          question:
            "A hospitalized client develops a generalized tonic-clonic seizure lasting longer than 5 minutes. Which prescribed medication should the nurse anticipate as an initial emergency medication?",
          choices: ["Lithium", "Lorazepam IV", "Haloperidol IM", "Fluoxetine PO"],
          answer: 1,
          rationale: "IV Lorazepam is a first-line treatment for prolonged seizures.",
        },
        {
          id: "q137",
          question:
            "During a generalized tonic-clonic seizure, which nursing action is CONTRAINDICATED?",
          choices: [
            "Protecting the client's head",
            "Removing nearby dangerous objects",
            "Forcing a tongue blade between the teeth",
            "Timing the seizure",
          ],
          answer: 2,
          rationale: "Forcing anything into the mouth during a seizure is contraindicated.",
        },
        {
          id: "q138",
          question:
            "According to Aaron Beck's cognitive theory of depression, which statement demonstrates a negative cognition about the future?",
          choices: [
            '"I\'m a worthless person"',
            '"Nobody cares about me"',
            '"Nothing will ever get better"',
            '"My family doesn\'t understand me"',
          ],
          answer: 2,
          rationale: '"Nothing will ever get better" reflects a negative view of the future.',
        },
        {
          id: "q139",
          question:
            "During cognitive behavioral therapy, a depressed client says, 'I failed one examination, so I am a complete failure.' Which intervention BEST demonstrates cognitive restructuring?",
          choices: [
            '"Don\'t worry about the examination"',
            '"Why do you always think negatively?"',
            '"What evidence supports the belief that failing one exam makes you a complete failure?"',
            '"You should think positively instead"',
          ],
          answer: 2,
          rationale: "This question helps challenge the client's cognitive distortion.",
        },
        {
          id: "q140",
          question:
            "A client states, 'If I make one mistake, everything I've done is worthless.' Which cognitive distortion is demonstrated?",
          choices: ["Projection", "All-or-nothing thinking", "Displacement", "Sublimation"],
          answer: 1,
          rationale: "All-or-nothing thinking is the cognitive distortion demonstrated.",
        },
        {
          id: "q141",
          question:
            "A client with bipolar disorder becomes increasingly energetic, sleeps only 3 hours each night, talks rapidly, and begins making impulsive purchases. Which finding should receive the nurse's highest priority?",
          choices: ["Rapid speech", "Decreased sleep", "Impulsive purchases", "Increased energy"],
          answer: 2,
          rationale: "Impulsive purchases indicate poor judgment and potential harm.",
        },
        {
          id: "q142",
          question:
            "Which drug is classically associated with treatment/control of lymphatic filariasis?",
          choices: ["Diethylcarbamazine (DEC)", "Ivermectin", "Albendazole", "Praziquantel"],
          answer: 0,
          rationale: "Diethylcarbamazine (DEC) is used to treat lymphatic filariasis.",
        },
        {
          id: "q143",
          question:
            "A client with acute viral hepatitis develops jaundice. Which stool characteristic may be observed when bile flow into the intestine is reduced?",
          choices: [
            "Black, tarry stool",
            "Clay-colored/pale stool",
            "Bright-red stool",
            "Green watery stool",
          ],
          answer: 1,
          rationale: "Biliary obstruction causes clay-colored/pale stool.",
        },
        {
          id: "q144",
          question:
            "Which finding is most consistent with the early/preicteric phase of acute hepatitis B?",
          choices: [
            "Fatigue, anorexia, nausea and malaise",
            "Massive hematemesis",
            "Severe generalized edema",
            "Ascites with esophageal varices",
          ],
          answer: 0,
          rationale:
            "The preicteric phase is characterized by fatigue, anorexia, nausea, and malaise.",
        },
        {
          id: "q145",
          question: "Which is an important mode of transmission of hepatitis B?",
          choices: [
            "Fecal-oral route only",
            "Blood and infected body fluids",
            "Mosquito bites",
            "Airborne transmission",
          ],
          answer: 1,
          rationale: "Hepatitis B is transmitted through blood and infected body fluids.",
        },
        {
          id: "q146",
          question: "When should the first Hepatitis B vaccine be given?",
          choices: [
            "Within 24 hours after birth",
            "3 hours only",
            "Exactly 4 hours after birth",
            "After 48 hours",
          ],
          answer: 0,
          rationale: "Hepatitis B vaccine should be given within 24 hours after birth.",
        },
        {
          id: "q147",
          question:
            "An infant born to a mother living with HIV requires testing for HIV infection. Which test is most appropriate for early diagnosis in an infant younger than 18 months?",
          choices: [
            "HIV antibody rapid test",
            "HIV nucleic acid test",
            "Western blot antibody test",
            "CD4 count",
          ],
          answer: 1,
          rationale: "HIV nucleic acid test (NAT/PCR) is used for early diagnosis in infants.",
        },
        {
          id: "q148",
          question:
            "A registered nurse asks about Continuing Professional Development (CPD) when renewing a Professional Identification Card. Which statement BEST describes the purpose of CPD?",
          choices: [
            "It is primarily a requirement for collecting units for license renewal",
            "It promotes lifelong learning and maintenance of professional competence",
            "It replaces professional licensure examinations",
            "It is required only for nurses employed in government hospitals",
          ],
          answer: 1,
          rationale: "CPD promotes lifelong learning and maintenance of professional competence.",
        },
        {
          id: "q149",
          question:
            "A newborn is delivered vaginally and remains covered with amniotic fluid. The nurse immediately dries the newborn to prevent heat loss through:",
          choices: ["Conduction", "Convection", "Radiation", "Evaporation"],
          answer: 3,
          rationale: "Drying prevents heat loss through evaporation.",
        },
        {
          id: "q150",
          question:
            "A 32-year-old woman with two children asks the nurse about bilateral tubal ligation but states, 'I'm not sure because I may still want another child in the future.' Which response by the nurse is MOST appropriate?",
          choices: [
            '"Tubal ligation is appropriate because it can easily be reversed"',
            '"You should consider a reversible contraceptive method if you are uncertain"',
            '"Your husband should decide"',
            '"You should undergo tubal ligation now and consider IVF later"',
          ],
          answer: 1,
          rationale: "A reversible method is recommended when future fertility is uncertain.",
        },
        {
          id: "q151",
          question:
            "A 27-year-old woman reports recurrent, mild-to-moderate lower abdominal pain occurring approximately midway between menstrual periods. The pain usually occurs on one side and resolves spontaneously. Which condition does the nurse suspect?",
          choices: [
            "Dysmenorrhea",
            "Mittelschmerz",
            "Endometriosis",
            "Pelvic inflammatory disease",
          ],
          answer: 1,
          rationale: "Mittelschmerz is mid-cycle pain associated with ovulation.",
        },
        {
          id: "q152",
          question:
            "Which maternal condition has historically been associated with an increased risk of hydatidiform mole?",
          choices: [
            "Adequate protein intake",
            "Nutritional deficiency associated with poor socioeconomic conditions",
            "High-calcium diet",
            "Excessive fluid intake",
          ],
          answer: 1,
          rationale:
            "Nutritional deficiency is associated with increased risk of hydatidiform mole.",
        },
        {
          id: "q153",
          question:
            "An infant with a cleft palate is being fed. Which nursing intervention is MOST appropriate?",
          choices: [
            "Feed the infant in a flat supine position",
            "Hold the infant in an upright or semi-upright position",
            "Place the infant prone throughout feeding",
            "Feed rapidly to minimize fatigue",
          ],
          answer: 1,
          rationale: "Upright or semi-upright position prevents aspiration in cleft palate.",
        },
        {
          id: "q154",
          question:
            "Following surgical repair of a cleft palate, which intervention is MOST important?",
          choices: [
            "Allow the infant to suck vigorously",
            "Protect the operative site from trauma",
            "Place hard feeding utensils",
            "Encourage the infant to place toys in mouth",
          ],
          answer: 1,
          rationale: "Protecting the operative site from trauma is most important.",
        },
        {
          id: "q155",
          question:
            "Which site is generally preferred for an intramuscular injection in an infant?",
          choices: ["Dorsogluteal", "Vastus lateralis", "Deltoid", "Abdominal muscle"],
          answer: 1,
          rationale: "The vastus lateralis is the preferred IM site for infants.",
        },
        {
          id: "q156",
          question: "Which finding is considered a positive sign of pregnancy?",
          choices: [
            "Amenorrhea",
            "Breast tenderness",
            "Positive pregnancy test",
            "Fetal heart tones detected by examiner",
          ],
          answer: 3,
          rationale: "Fetal heart tones detected by an examiner is a positive sign of pregnancy.",
        },
        {
          id: "q157",
          question:
            "What is the primary purpose of screening mammography in an asymptomatic woman?",
          choices: [
            "Prevent breast cancer",
            "Detect breast cancer at an early stage",
            "Confirm all breast cancers",
            "Prevent breast masses from becoming malignant",
          ],
          answer: 1,
          rationale: "Screening mammography aims for early detection of breast cancer.",
        },
        {
          id: "q158",
          question:
            "Following a mastectomy with axillary lymph-node surgery, how should the nurse position the affected arm during the immediate postoperative period?",
          choices: [
            "Dependent below heart level",
            "Elevated on pillows",
            "Restrained against the patient's side",
            "Hanging over the bed edge",
          ],
          answer: 1,
          rationale: "Elevation on pillows helps prevent lymphedema.",
        },
        {
          id: "q159",
          question:
            "Following mastectomy with axillary lymph-node surgery, the nurse elevates the affected arm primarily to help prevent:",
          choices: ["Pneumonia", "Lymphedema", "Hemorrhage", "Wound dehiscence"],
          answer: 1,
          rationale: "Elevation helps prevent lymphedema.",
        },
        {
          id: "q160",
          question:
            "After being denied a vacation request, a nurse angrily makes a false and defamatory spoken statement about the nurse manager in front of coworkers. Which term BEST describes the act?",
          choices: ["Assault", "Slander", "Libel", "Battery"],
          answer: 1,
          rationale: "Slander is spoken defamation.",
        },
      ],
    },
    {
      id: "set-7",
      title: "SET 7",
      description:
        "Comprehensive nursing review covering medical-surgical, pharmacology, legal, and psychiatric nursing concepts.",
      questions: [
        {
          id: "q1",
          question:
            "A patient requires gastric lavage after a potentially life-threatening ingestion, and the procedure has been specifically ordered. Which solution is most appropriate for lavage when a fluid is required?",
          choices: ["Normal saline", "Tap water", "Sterile water", "Dextrose 5% in water"],
          answer: 0,
          rationale: "Normal saline is the most appropriate solution for gastric lavage.",
        },
        {
          id: "q2",
          question:
            "A patient is diagnosed with an acute DVT of the left leg. Which nursing intervention is appropriate?",
          choices: [
            "Massage the affected calf",
            "Elevate the affected extremity as appropriate and administer prescribed anticoagulation",
            "Encourage vigorous leg exercises immediately",
            "Apply vigorous compression to the affected leg without an order",
          ],
          answer: 1,
          rationale:
            "Elevation and anticoagulation are appropriate for DVT. Massage and vigorous exercise are contraindicated.",
        },
        {
          id: "q3",
          question: "Why is vitamin K routinely administered to a newborn shortly after birth?",
          choices: [
            "Prevent physiologic jaundice",
            "Prevent vitamin K deficiency bleeding",
            "Increase production of RBCs",
            "Prevent neonatal infection",
          ],
          answer: 1,
          rationale:
            "Vitamin K is given to prevent hemorrhagic disease of the newborn (vitamin K deficiency bleeding).",
        },
        {
          id: "q4",
          question:
            "A 19-year-old woman reports recurrent cramping lower abdominal pain occurring during menstruation without evidence of pelvic disease. What is this condition called?",
          choices: ["Mittelschmerz", "Dysmenorrhea", "Amenorrhea", "Menorrhagia"],
          answer: 1,
          rationale: "Primary dysmenorrhea is painful menstruation without pelvic pathology.",
        },
        {
          id: "q5",
          question: "Which statement BEST defines research?",
          choices: [
            "Collection of information based primarily on personal opinion",
            "A systematic investigation designed to develop, refine, or contribute to knowledge",
            "A method of proving that an investigator's assumptions are correct",
            "Informal collection of information without predetermined methods",
          ],
          answer: 1,
          rationale:
            "Research is a systematic investigation designed to develop or contribute to knowledge.",
        },
        {
          id: "q6",
          question:
            "While changing the tubing of a central venous catheter used for total parenteral nutrition (TPN), the nurse fails to properly secure/clamp the catheter. Which potentially life-threatening complication may occur?",
          choices: ["Air embolism", "Hypokalemia", "Constipation", "Hypertension"],
          answer: 0,
          rationale:
            "Failure to secure/clamp a central line can allow air to enter, causing an air embolism.",
        },
        {
          id: "q7",
          question:
            "A patient with a hiatal hernia most commonly reports discomfort in which location?",
          choices: [
            "Retrosternal/substernal or epigastric region",
            "Right lower quadrant",
            "Suprapubic region",
            "Left lower quadrant",
          ],
          answer: 0,
          rationale: "Hiatal hernia causes reflux, leading to substernal or epigastric discomfort.",
        },
        {
          id: "q8",
          question:
            "Which surgical procedure corrects a hiatal hernia/reflux by reinforcing the lower esophageal sphincter?",
          choices: [
            "Fundoplication (Nissen fundoplication)",
            "Gastrectomy",
            "Esophagectomy",
            "Vagotomy",
          ],
          answer: 0,
          rationale:
            "Nissen fundoplication wraps the stomach around the esophagus to reinforce the LES.",
        },
        {
          id: "q9",
          question:
            "Which stool color would the nurse expect in a patient with significant biliary obstruction?",
          choices: ["Dark yellow", "Light yellow", "Pale or clay-colored", "Black and tarry"],
          answer: 2,
          rationale:
            "Biliary obstruction prevents bile from reaching the intestine, resulting in clay-colored stool.",
        },
        {
          id: "q10",
          question:
            "A client is scheduled for an ultrasound of the gallbladder and upper abdomen. Which instruction should the nurse give?",
          choices: [
            "Remain NPO as instructed before the examination",
            "Eat a high-fat meal before the procedure",
            "Take a laxative immediately before the procedure",
            "Drink milk before arriving",
          ],
          answer: 0,
          rationale: "NPO status is required for gallbladder ultrasound.",
        },
        {
          id: "q11",
          question:
            "Following laparoscopic abdominal surgery, which postoperative complaint is commonly associated with the carbon dioxide used for insufflation?",
          choices: ["Shoulder-tip pain", "Severe calf pain", "Hematemesis", "Hematuria"],
          answer: 0,
          rationale:
            "Carbon dioxide used in laparoscopy can irritate the phrenic nerve, causing referred shoulder pain.",
        },
        {
          id: "q12",
          question:
            "One hour after nasogastric tube insertion, the nurse observes a small amount of fresh blood in the drainage. Which complication should the nurse initially consider?",
          choices: [
            "Mucosal trauma from NGT insertion",
            "Bronchial hemorrhage",
            "Renal bleeding",
            "Intracranial hemorrhage",
          ],
          answer: 0,
          rationale:
            "Small amounts of fresh blood are common due to mucosal trauma during NGT insertion.",
        },
        {
          id: "q13",
          question:
            "A hospitalized patient suddenly develops dyspnea, tachypnea, chest pain, anxiety, and decreased oxygen saturation. The nurse suspects pulmonary embolism. Which action should receive priority?",
          choices: [
            "Administer supplemental oxygen/support airway and breathing",
            "Stop enteral feeding",
            "Call the physician before providing any intervention",
            "Encourage the patient to ambulate",
          ],
          answer: 0,
          rationale:
            "Airway and breathing are the priority; supplemental oxygen should be administered immediately.",
        },
        {
          id: "q14",
          question:
            "Which medication is an example of a thioamide used to decrease thyroid hormone synthesis in hyperthyroidism?",
          choices: ["Propylthiouracil (PTU)", "Levothyroxine", "Methimazole", "Metformin"],
          answer: 0,
          rationale: "PTU is a thioamide used to treat hyperthyroidism.",
        },
        {
          id: "q15",
          question:
            "A client has severe constipation with hard, impacted stool. Which enema is most appropriate to soften and lubricate the hardened fecal mass before removal?",
          choices: [
            "PNSS enema",
            "Mineral oil retention enema",
            "Tap-water enema",
            "Hypertonic enema",
          ],
          answer: 1,
          rationale: "Mineral oil retention enema softens and lubricates hard, impacted stool.",
        },
        {
          id: "q16",
          question:
            "A patient with significant thrombocytopenia is being discharged. Which recreational activity is MOST appropriate?",
          choices: ["Table tennis", "Basketball", "Bowling", "Chess"],
          answer: 3,
          rationale:
            "Chess is a low-risk activity. Contact sports like basketball increase bleeding risk.",
        },
        {
          id: "q17",
          question:
            "During surgery, which responsibility is primarily performed by the scrub nurse?",
          choices: [
            "Obtaining informed consent from the patient",
            "Maintaining the sterile field and passing sterile instruments to the surgeon",
            "Documenting all events outside the sterile field",
            "Transporting specimens to the laboratory",
          ],
          answer: 1,
          rationale:
            "The scrub nurse maintains the sterile field and passes instruments to the surgeon.",
        },
        {
          id: "q18",
          question:
            "The nurse performs routine tracheostomy care that includes cleaning around the stoma and changing the sterile tracheostomy dressing. Which gloves are appropriate when performing the sterile portions of the procedure?",
          choices: ["Clean gloves", "Sterile gloves", "Utility gloves", "Double gloves"],
          answer: 1,
          rationale: "Sterile gloves are required for sterile portions of tracheostomy care.",
        },
        {
          id: "q19",
          question:
            "A student nurse asks about the duration of tracheostomy use. Which statement is correct?",
          choices: [
            "A tracheostomy can only be used long-term.",
            "A tracheostomy can only be used short-term.",
            "A tracheostomy may be used either temporarily or long-term.",
            "A tracheostomy is always permanent.",
          ],
          answer: 2,
          rationale: "A tracheostomy can be temporary or permanent.",
        },
        {
          id: "q20",
          question:
            "Which layer of an arterial wall provides most of its muscular and elastic structural support and is importantly involved in aneurysm formation when weakened?",
          choices: ["Tunica intima", "Tunica media", "Tunica externa/adventitia", "Endothelium"],
          answer: 1,
          rationale:
            "The tunica media provides structural support; weakening can lead to aneurysm formation.",
        },
        {
          id: "q21",
          question:
            "Which assessment finding is MOST characteristic of an abdominal aortic aneurysm (AAA)?",
          choices: [
            "Pulsatile abdominal mass, possibly with a bruit",
            "Absent bowel sounds with rigid abdomen",
            "Bilateral crackles with jugular venous distention",
            "Rebound tenderness at McBurney's point",
          ],
          answer: 0,
          rationale: "A pulsatile abdominal mass with a bruit is classic for AAA.",
        },
        {
          id: "q22",
          question:
            "Which environmental pressure should be maintained inside a conventional operating room to reduce contamination from adjacent areas?",
          choices: [
            "Negative pressure",
            "Positive pressure",
            "Neutral pressure",
            "Alternating positive and negative pressure",
          ],
          answer: 1,
          rationale: "Positive pressure in the OR keeps contaminants out.",
        },
        {
          id: "q23",
          question:
            "A child is noted to have recurrent fractures and a bluish discoloration of the sclera. Which disorder should the nurse suspect?",
          choices: ["Osteogenesis imperfecta", "Glaucoma", "Cataract", "Retinal detachment"],
          answer: 0,
          rationale: "Osteogenesis imperfecta is characterized by fragile bones and blue sclera.",
        },
        {
          id: "q24",
          question:
            "A patient sustains significant injury affecting the L3 spinal nerve/root. Which movement would be MOST likely to be impaired?",
          choices: [
            "Extending the knee",
            "Shrugging the shoulders",
            "Abducting the shoulder",
            "Flexing the elbow",
          ],
          answer: 0,
          rationale: "L3 nerve root innervates the quadriceps, which extends the knee.",
        },
        {
          id: "q25",
          question:
            "A client accidentally splashes a chemical into the eye while cleaning at home. What should the client do FIRST?",
          choices: [
            "Wait for sterile normal saline before irrigating",
            "Cover the eye and immediately travel to the hospital",
            "Immediately flush the eye continuously with copious clean tap water",
            "Attempt to neutralize the chemical with another chemical",
          ],
          answer: 2,
          rationale:
            "Immediate continuous flushing with clean water is the first step for chemical eye exposure.",
        },
        {
          id: "q26",
          question:
            "A patient with anaphylaxis has already received IM epinephrine. Diphenhydramine is subsequently prescribed. What is the purpose of diphenhydramine?",
          choices: [
            "Replace epinephrine as the primary treatment",
            "Relieve histamine-mediated cutaneous symptoms as an adjunct",
            "Immediately reverse severe hypotension",
            "Provide rapid bronchodilation",
          ],
          answer: 1,
          rationale:
            "Diphenhydramine is an antihistamine that relieves histamine-mediated symptoms.",
        },
        {
          id: "q27",
          question:
            "The nurse observes that a patient's respirations gradually become deeper and faster, then progressively become slower and shallower, followed by a period of apnea. This cycle repeatedly occurs. How should the nurse document this respiratory pattern?",
          choices: [
            "Biot's respiration",
            "Kussmaul respiration",
            "Cheyne-Stokes respiration",
            "Apneustic respiration",
          ],
          answer: 2,
          rationale:
            "Cheyne-Stokes respiration has a pattern of crescendo-decrescendo breaths followed by apnea.",
        },
        {
          id: "q28",
          question:
            "A client with severe head trauma develops increased intracranial pressure. Which group of findings represents Cushing's triad?",
          choices: [
            "Hypotension, tachycardia, tachypnea",
            "Hypertension with widened pulse pressure, bradycardia, and irregular respirations",
            "Hypertension, tachycardia, and bronchospasm",
            "Hypotension, bradycardia, and bronchodilation",
          ],
          answer: 1,
          rationale:
            "Cushing's triad consists of hypertension, bradycardia, and irregular respirations.",
        },
        {
          id: "q29",
          question:
            "A hospital implementing Total Quality Management conducts a SWOT analysis to identify its strengths, weaknesses, opportunities, and threats. In which phase of quality management is SWOT analysis MOST appropriately used?",
          choices: ["Strategic planning", "Implementation", "Evaluation", "Controlling"],
          answer: 0,
          rationale: "SWOT analysis is a strategic planning tool.",
        },
        {
          id: "q30",
          question: "During adult CPR, how deeply should the nurse compress the chest?",
          choices: [
            "About 1 inch",
            "At least 2 inches (5cm) while avoiding excessive depth",
            "3 inches",
            "4 inches",
          ],
          answer: 1,
          rationale:
            "The recommended compression depth for an adult is at least 2 inches (5 cm), but no more than 2.4 inches (6 cm).",
        },
        {
          id: "q31",
          question:
            "During the first hemodialysis treatment, a client develops headache, nausea, restlessness, confusion, and muscle twitching. Which complication should the nurse suspect?",
          choices: [
            "Air embolism",
            "Dialysis disequilibrium syndrome",
            "Hyperkalemia",
            "Peritonitis",
          ],
          answer: 1,
          rationale:
            "Dialysis disequilibrium syndrome is a complication of rapid dialysis, causing neurological symptoms.",
        },
        {
          id: "q32",
          question:
            "Which instruction is MOST important for preventing recurrence of calcium-containing kidney stones in a patient without a fluid restriction?",
          choices: [
            "Increase fluid intake to maintain high urine output",
            "Eliminate all dietary calcium",
            "Drink large amounts of milk",
            "Deliberately acidify the urine",
          ],
          answer: 0,
          rationale: "High fluid intake dilutes urine and prevents stone formation.",
        },
        {
          id: "q33",
          question:
            "A client with a renal calculus is scheduled for extracorporeal shock-wave lithotripsy (ESWL). How should the nurse explain the procedure?",
          choices: [
            "An open incision is made to remove the stone",
            "Shock waves generated outside the body fragment the stone into smaller pieces",
            "A catheter dissolves the stone chemically",
            "The kidney is surgically opened and the stone extracted",
          ],
          answer: 1,
          rationale: "ESWL uses external shock waves to fragment kidney stones.",
        },
        {
          id: "q34",
          question: "Which histologic finding is characteristic of Hodgkin lymphoma?",
          choices: [
            "Reed-Sternberg cells",
            "Philadelphia chromosome",
            "Auer rods",
            "Bence Jones proteins",
          ],
          answer: 0,
          rationale: "Reed-Sternberg cells are characteristic of Hodgkin lymphoma.",
        },
        {
          id: "q35",
          question: "Morphine produces analgesia primarily through which mechanism?",
          choices: [
            "Blocking acetylcholine receptors",
            "Activating opioid receptors in the central nervous system",
            "Blocking histamine receptors",
            "Increasing prostaglandin synthesis",
          ],
          answer: 1,
          rationale: "Morphine acts on opioid receptors in the CNS to produce analgesia.",
        },
        {
          id: "q36",
          question: "Which finding is LEAST consistent with severe anaphylaxis?",
          choices: ["Hypotension", "Hypertension", "Bronchospasm", "Urticaria"],
          answer: 1,
          rationale: "Anaphylaxis causes hypotension, not hypertension.",
        },
        {
          id: "q37",
          question: "Which statement regarding gonorrhea is correct?",
          choices: [
            "Women are always severely symptomatic",
            "Men commonly develop urethral discharge and dysuria, while women may have no symptoms",
            "Gonorrhea causes painless genital vesicles",
            "Gonorrhea is caused by a virus",
          ],
          answer: 1,
          rationale:
            "Men with gonorrhea typically have urethral discharge; women may be asymptomatic.",
        },
        {
          id: "q38",
          question:
            "After exposure to N. gonorrhoeae, symptoms commonly appear within approximately what period?",
          choices: ["2-7 days", "2-3 months", "6 months", "1 year"],
          answer: 0,
          rationale: "Gonorrhea symptoms typically appear 2-7 days after exposure.",
        },
        {
          id: "q39",
          question:
            "Following blunt trauma to the eye, the nurse observes visible blood collecting in front of the iris. Which condition does this finding indicate?",
          choices: ["Hyphema", "Cataract", "Glaucoma", "Retinal detachment"],
          answer: 0,
          rationale: "Hyphema is blood in the anterior chamber of the eye.",
        },
        {
          id: "q40",
          question:
            "A patient with hypernatremia is being taught dietary modification. Which food should the nurse instruct the patient to AVOID?",
          choices: [
            "Fresh apple",
            "Unsalted fresh vegetables",
            "Canned luncheon meat",
            "Fresh rice",
          ],
          answer: 2,
          rationale: "Canned meats are high in sodium and should be avoided in hypernatremia.",
        },
        {
          id: "q41",
          question:
            "A client receiving haloperidol develops severe neck muscle spasms, upward deviation of the eyes, and difficulty swallowing. Which adverse effect should the nurse suspect?",
          choices: [
            "Akathisia",
            "Acute dystonia",
            "Tardive dyskinesia",
            "Neuroleptic malignant syndrome",
          ],
          answer: 1,
          rationale:
            "Acute dystonia is characterized by muscle spasms, oculogyric crisis, and difficulty swallowing.",
        },
        {
          id: "q42",
          question:
            "A nurse realizes that an incorrect entry was written in a patient's paper medical record. Which action is appropriate?",
          choices: [
            "Erase the incorrect entry completely",
            "Use correction fluid to cover the entry",
            "Draw a single line through the error so it remains readable, identify the correction according to policy, and enter the correct information",
            "Tear out the page and rewrite it",
          ],
          answer: 2,
          rationale:
            "The correct method is to draw a line through the error and document the correction.",
        },
        {
          id: "q43",
          question:
            "A physician gives the nurse a medication order by telephone. Which action is MOST important to ensure accuracy?",
          choices: [
            "Ask another nurse to interpret the order",
            "Write the order and immediately administer it",
            "Write the order and read it back to the physician for verification",
            "Ask the pharmacist to approve the order",
          ],
          answer: 2,
          rationale: "Reading back a verbal order verifies accuracy.",
        },
        {
          id: "q44",
          question:
            "A hospitalized client falls while walking to the bathroom. After assessing the client and providing appropriate care, the nurse completes an incident report. Which action is correct?",
          choices: [
            "Document in the medical record that an incident report was completed",
            "Place the incident report in the patient's chart",
            "Complete the incident report according to institutional policy without referring to it in the patient's clinical record",
            "Give the report to the patient's family",
          ],
          answer: 2,
          rationale: "Incident reports are not part of the patient's clinical record.",
        },
        {
          id: "q45",
          question:
            "The nurse cannot read a medication order because the physician's handwriting is illegible. What should the nurse do FIRST?",
          choices: [
            "Ask the pharmacist to interpret it",
            "Contact the prescribing physician to clarify the order",
            "Ask another physician to guess the intended medication",
            "Ask another nurse to interpret the handwriting",
          ],
          answer: 1,
          rationale: "The nurse should contact the prescribing physician for clarification.",
        },
        {
          id: "q46",
          question:
            "A researcher examines the relationship between cigarette-smoking history and development of cardiovascular disease. The independent variable cannot ethically or practically be manipulated by the researcher. Which research design is MOST appropriate?",
          choices: [
            "Quasi-experimental",
            "Phenomenological",
            "Nonexperimental",
            "True experimental",
          ],
          answer: 2,
          rationale: "Nonexperimental design is used when variables cannot be manipulated.",
        },
        {
          id: "q47",
          question:
            "A client asks the nurse to explain extracorporeal shock-wave lithotripsy (ESWL). Which response is correct?",
          choices: [
            '"An incision is made directly into your kidney to remove the stone."',
            '"Shock waves generated outside your body are focused on the stone to break it into smaller fragments."',
            '"A chemical is injected to dissolve your kidney."',
            '"The kidney stone is removed through open abdominal surgery."',
          ],
          answer: 1,
          rationale: "ESWL uses external shock waves to fragment stones.",
        },
        {
          id: "q48",
          question:
            "Which cardiac biomarker is preferred for detecting myocardial injury in a client with suspected acute myocardial infarction?",
          choices: ["CK-MB", "Total CK", "Myoglobin", "Cardiac troponin"],
          answer: 3,
          rationale: "Cardiac troponin is the preferred biomarker for detecting myocardial injury.",
        },
        {
          id: "q49",
          question:
            "During a surgical operation, the surgeon is traditionally described under the 'captain of the ship' doctrine as primarily responsible for:",
          choices: [
            "Every hospital employee's actions throughout hospitalization",
            "Directing and controlling activities of the surgical team that are under the surgeon's supervision during the operation",
            "Writing all nursing documentation",
            "Personally performing the sponge count",
          ],
          answer: 1,
          rationale:
            "The captain of the ship doctrine holds the surgeon responsible for the surgical team's actions during the procedure.",
        },
        {
          id: "q50",
          question: "Which statement BEST distinguishes an endotracheal tube from a tracheostomy?",
          choices: [
            "Both always require a surgical opening in the neck",
            "An endotracheal tube enters through the mouth/nose into the trachea, whereas a tracheostomy provides an airway through a surgically created opening in the neck into the trachea",
            "A tracheostomy is always temporary",
            "An endotracheal tube is intended for permanent airway management",
          ],
          answer: 1,
          rationale:
            "ETT enters through the mouth/nose; tracheostomy is a surgical opening in the neck.",
        },
        {
          id: "q51",
          question:
            "Which is an important advantage of peritoneal dialysis compared with conventional intermittent hemodialysis for an appropriate patient?",
          choices: [
            "It always removes fluid more rapidly",
            "It can provide gradual fluid/solute removal and may be performed at home",
            "It eliminates the risk of infection",
            "It requires vascular access through an AV fistula",
          ],
          answer: 1,
          rationale: "Peritoneal dialysis can be done at home and provides gradual removal.",
        },
        {
          id: "q52",
          question:
            "The nurse explains that brown adipose tissue helps a newborn maintain body temperature through non-shivering thermogenesis. Where is brown fat primarily located?",
          choices: [
            "Abdomen and lower legs only",
            "Interscapular area, around the neck, and around major organs",
            "Palms and soles",
            "Forehead and scalp",
          ],
          answer: 1,
          rationale:
            "Brown fat is located in the interscapular area, around the neck, and around major organs.",
        },
        {
          id: "q53",
          question: "When should a newborn receive the first dose of hepatitis B vaccine?",
          choices: [
            "Within 4 hours only",
            "Within 6 hours only",
            "Within 12 hours for every newborn",
            "As soon as possible after birth, preferably within 24 hours",
          ],
          answer: 3,
          rationale: "Hepatitis B vaccine is ideally given within 24 hours of birth.",
        },
        {
          id: "q54",
          question:
            "Which medications are commonly used as potent oral antiviral therapy for chronic hepatitis B when treatment is indicated?",
          choices: [
            "Tenofovir or entecavir",
            "Amoxicillin or azithromycin",
            "Oseltamivir or acyclovir",
            "Isoniazid or rifampicin",
          ],
          answer: 0,
          rationale: "Tenofovir and entecavir are antiviral medications for chronic hepatitis B.",
        },
        {
          id: "q55",
          question: "What is the primary mode of transmission of hepatitis A virus?",
          choices: [
            "Blood transfusion",
            "Fecal-oral route",
            "Airborne transmission",
            "Mosquito bite",
          ],
          answer: 1,
          rationale: "Hepatitis A is transmitted via the fecal-oral route.",
        },
        {
          id: "q56",
          question:
            "Which manifestation is most consistent with the early, preicteric phase of acute hepatitis A?",
          choices: [
            "Malaise, anorexia, nausea, and low-grade fever",
            "Massive gastrointestinal bleeding",
            "Severe ascites",
            "Esophageal varices",
          ],
          answer: 0,
          rationale:
            "The preicteric phase is characterized by malaise, anorexia, nausea, and fever.",
        },
        {
          id: "q57",
          question:
            "A patient with acute hepatitis develops reduced bile pigment reaching the intestine. Which stool characteristic may be observed?",
          choices: [
            "Clay-colored/pale stool",
            "Dark-red stool",
            "Coffee-ground stool",
            "Black tarry stool",
          ],
          answer: 0,
          rationale: "Bile obstruction leads to clay-colored stool.",
        },
        {
          id: "q58",
          question:
            "A researcher conducts an in-depth case study to explore a patient's experiences of living with a rare chronic illness. Which data-collection method would be MOST appropriate for obtaining rich, detailed first-person information?",
          choices: [
            "Structured questionnaire only",
            "In-depth interview",
            "Population census",
            "Experimental manipulation",
          ],
          answer: 1,
          rationale: "In-depth interviews are used to obtain rich, detailed qualitative data.",
        },
        {
          id: "q59",
          question: "Which is a research TOOL?",
          choices: ["Questionnaire", "Field observation", "Survey", "Interview"],
          answer: 0,
          rationale: "A questionnaire is a research tool used to collect data.",
        },
        {
          id: "q60",
          question:
            "A patient suddenly develops generalized urticaria, wheezing, facial swelling, and hypotension after receiving an antibiotic. Which medication should the nurse anticipate administering FIRST?",
          choices: ["Norepinephrine", "Epinephrine", "Amiodarone", "Atropine"],
          answer: 1,
          rationale: "Epinephrine is the first-line treatment for anaphylaxis.",
        },
        {
          id: "q61",
          question:
            "A healthy adult asks how often influenza vaccination is recommended. Which response by the nurse is correct?",
          choices: ["Every 5 years", "Every 2 years", "Every year", "Only once during adulthood"],
          answer: 2,
          rationale: "Annual influenza vaccination is recommended.",
        },
        {
          id: "q62",
          question:
            "At what minimum age can routine influenza vaccination generally begin in children?",
          choices: ["1 year", "2 years", "6 months", "5 years"],
          answer: 2,
          rationale: "Influenza vaccination can begin at 6 months of age.",
        },
        {
          id: "q63",
          question:
            "A conscious, mentally competent adult male requires surgery. The physician explains the procedure, and the patient voluntarily consents. His wife strongly objects and refuses to allow the surgery. Whose decision should be respected?",
          choices: [
            "The wife's decision",
            "The patient's decision",
            "The surgeon's decision",
            "The family's majority decision",
          ],
          answer: 1,
          rationale: "A competent adult patient's decision is respected.",
        },
        {
          id: "q64",
          question:
            "The nurse receives a medication order but believes the prescribed dose may be outside the recommended therapeutic range. What should the nurse do FIRST?",
          choices: [
            "Administer the medication because the physician prescribed",
            "Immediately call the pharmacist without checking the order",
            "Verify the usual dosage using a reliable drug reference",
            "Confront the physician angrily",
          ],
          answer: 2,
          rationale: "The nurse should verify the dosage using a reliable drug reference first.",
        },
        {
          id: "q65",
          question:
            "You are a staff nurse in a government hospital. An administrative case is filed against you in relation to your government employment. Which government agency prescribes the rules and mechanisms governing administrative discipline in the civil service?",
          choices: [
            "Office of the Ombudsman",
            "Civil court",
            "Civil Service Commission",
            "Professional Regulation Commission",
          ],
          answer: 2,
          rationale:
            "The Civil Service Commission governs administrative discipline in the civil service.",
        },
        {
          id: "q66",
          question:
            "A registered nurse employed in a private hospital deliberately spreads malicious rumors about a fellow nurse. The conduct is alleged to constitute unprofessional conduct under the standards governing the nursing profession. Which body has jurisdiction over a complaint seeking professional disciplinary action against the nurse?",
          choices: [
            "Philippine Nurses Association",
            "Civil Service Commission",
            "Department of Labor and Employment",
            "Professional Regulatory Board of Nursing",
          ],
          answer: 3,
          rationale:
            "The Professional Regulatory Board of Nursing has jurisdiction over professional misconduct.",
        },
        {
          id: "q67",
          question: "Which guideline is MOST important regarding an incident report?",
          choices: [
            "It is placed in the nurse's 201 personnel file.",
            "It is filed at the nurses' station.",
            "It is filed in the hospital's patient medical-record section.",
            "It is not made part of the patient's medical record/chart.",
          ],
          answer: 3,
          rationale: "Incident reports are not part of the patient's medical record.",
        },
        {
          id: "q68",
          question:
            "Triage is the process of determining the priority of patients for treatment based on the severity of their condition and the availability of resources. In a mass-casualty situation, the purpose of reverse triage is to:",
          choices: [
            "Save those persons who are in the most critical condition first",
            "Save scarce resources for future use",
            "Achieve the greatest good for the greatest number using limited resources",
            "Prioritize first responders over all other casualties",
          ],
          answer: 2,
          rationale: "Disaster triage aims for the greatest good for the greatest number.",
        },
        {
          id: "q69",
          question:
            "Ms. Simon takes a patient's temperature and obtains a reading of 38°C (100.4°F). Which physiologic response is the patient MOST likely to demonstrate?",
          choices: [
            "Increased pulse rate",
            "Precordial pain",
            "Dyspnea",
            "Elevated blood pressure",
          ],
          answer: 0,
          rationale: "Fever increases heart rate.",
        },
        {
          id: "q70",
          question:
            "Which statement BEST describes the difference between an emergency and a disaster?",
          choices: [
            "An emergency can generally be managed using available local emergency resources.",
            "A disaster is always caused by human error.",
            "A disaster requires only local emergency services.",
            "An emergency is always completely controlled.",
          ],
          answer: 0,
          rationale: "An emergency is manageable with local resources; a disaster overwhelms them.",
        },
        {
          id: "q71",
          question:
            "Lino, a 45-year-old house painter, is brought to the hospital with blurred vision, slurred speech, and hallucinations. Further assessment suggests volatile substance intoxication. Which factor MOST likely predisposed Lino to exposure to volatile substances?",
          choices: ["Community", "Occupation", "Home environment", "Age"],
          answer: 1,
          rationale:
            "His occupation as a house painter predisposes him to volatile substance exposure.",
        },
        {
          id: "q72",
          question:
            "Volatile substance abuse is particularly dangerous because chronic exposure may result in:",
          choices: [
            "Development of schizophrenia in all users",
            "Violence as the primary complication",
            "Serious and potentially irreversible damage to the brain and other organs",
            "Malnutrition as the primary cause of death",
          ],
          answer: 2,
          rationale:
            "Volatile substance abuse can cause irreversible organ damage, especially to the brain.",
        },
        {
          id: "q73",
          question:
            "Lino points toward an empty chair and says, 'My mother visited me last night. I saw her sitting right there,' although his mother was not present. Which perceptual disturbance is Lino experiencing?",
          choices: [
            "Reaction formation",
            "Auditory hallucination",
            "Visual hallucination",
            "Delusion",
          ],
          answer: 2,
          rationale: "Seeing something that is not there is a visual hallucination.",
        },
        {
          id: "q74",
          question:
            "A patient with severe volatile substance intoxication becomes unconscious. What is the nurse's PRIORITY action?",
          choices: [
            "Assess mental status",
            "Perform a detailed neurologic examination",
            "Assess and maintain airway, breathing, and circulation",
            "Assess nutritional status",
          ],
          answer: 2,
          rationale: "ABCs are the priority for an unconscious patient.",
        },
        {
          id: "q75",
          question:
            "A patient's chronic substance use has significantly disrupted communication, roles, and relationships among members of the household. Which nursing diagnosis is MOST appropriate?",
          choices: [
            "Dysfunctional family processes",
            "Impaired physical mobility",
            "Disturbed sensory perception",
            "Impaired skin integrity",
          ],
          answer: 0,
          rationale:
            "Disruption in family communication and roles is defined as Dysfunctional family processes.",
        },
        {
          id: "q76",
          question:
            "Teresa, a 30-year-old bank teller, is admitted to the psychiatric unit with severe depression and suicidal ideation. The nurse identifies risk for self-directed violence. Which nursing intervention is the PRIORITY?",
          choices: [
            "Ask Teresa to sign a no-harm contract",
            "Remove potentially harmful objects and institute appropriate suicide precautions",
            "Assign Teresa to a room with another patient",
            "Tell Teresa to call the nurse whenever she thinks about suicide",
          ],
          answer: 1,
          rationale: "Suicide precautions are the priority for a patient with suicidal ideation.",
        },
        {
          id: "q77",
          question:
            "Maintaining a therapeutic relationship with a severely depressed patient can sometimes be challenging because the patient may demonstrate:",
          choices: [
            "Laziness and unwillingness to recover",
            "Excessive independence",
            "Persistent pessimism and hopelessness",
            "Poor grooming intended to gain attention",
          ],
          answer: 2,
          rationale: "Depressed patients often exhibit persistent pessimism and hopelessness.",
        },
        {
          id: "q78",
          question:
            "The nurse should recognize that Teresa's risk for attempting suicide may become particularly concerning when she:",
          choices: [
            "Agrees to visit an estranged sister",
            "Demonstrates increased energy while suicidal thoughts or hopelessness persist",
            "Is crying and expressing profound sadness",
            "Begins participating in normal activities and denies suicidal thoughts",
          ],
          answer: 1,
          rationale: "A sudden increase in energy while still suicidal is a high-risk sign.",
        },
        {
          id: "q79",
          question:
            "A nurse is unable to report for duty because a catastrophic typhoon has destroyed roads and made transportation impossible. Which legal concept may apply to the nurse's inability to fulfill the obligation?",
          choices: ["Captain of the ship", "Force majeure", "Justice", "Respect for persons"],
          answer: 1,
          rationale:
            "Force majeure is an unforeseeable circumstance that prevents someone from fulfilling a contract.",
        },
        {
          id: "q80",
          question:
            "A physician orders one-to-one nursing care for a critically ill patient. Which action is appropriate for the nurse assigned to provide this care?",
          choices: [
            "Leave the bedside for up to 10 minutes without relief",
            "Maintain the required continuous observation until appropriately relieved",
            "Leave the patient temporarily to attend to personal matters",
            "Leave the patient to restock unit supplies",
          ],
          answer: 1,
          rationale: "One-to-one observation must be maintained continuously.",
        },
        {
          id: "q81",
          question:
            "A serious adverse event occurs during surgery involving personnel working under the surgeon's direct supervision. Which traditional legal doctrine may be associated with the surgeon's responsibility in the operating room?",
          choices: [
            "Respondeat superior",
            "Force majeure",
            "Captain of the ship",
            "In flagrante delicto",
          ],
          answer: 2,
          rationale:
            "The Captain of the ship doctrine holds the surgeon responsible for the team's actions.",
        },
        {
          id: "q82",
          question:
            "You are a staff nurse in a government hospital. An administrative case related to your government employment is filed against you. Which government agency establishes the rules and mechanisms governing administrative discipline in the civil service?",
          choices: [
            "Professional Regulation Commission",
            "Office of the Ombudsman",
            "Civil court",
            "Civil Service Commission",
          ],
          answer: 3,
          rationale:
            "The Civil Service Commission governs administrative discipline in the civil service.",
        },
        {
          id: "q83",
          question:
            "A patient with delirium appears frightened and confused. Which statement by the nurse BEST provides realistic reassurance?",
          choices: [
            '"Stop crying. Crying will not make you better."',
            '"I know things seem confusing and upsetting right now. We are here with you and are treating what is causing the confusion."',
            '"Don\'t worry. Confusion is normal at your age."',
            '"Just wait for your medication to take effect."',
          ],
          answer: 1,
          rationale:
            "This response provides realistic reassurance and acknowledges the patient's feelings.",
        },
        {
          id: "q84",
          question:
            "A cardiac patient whose youngest son died three months ago begins crying and says to the nurse, 'How could you possibly understand what I'm going through?' Which response is MOST therapeutic?",
          choices: [
            '"You should spend more time with friends and watch movies to help you relax."',
            "\"You're right that I cannot fully know what this feels like for you. Perhaps you can tell me more about what you're feeling.\"",
            '"It takes time to forget, but God will always guide you."',
            '"You don\'t need to cry because you still have your other children."',
          ],
          answer: 1,
          rationale: "This response validates the patient's feelings and encourages expression.",
        },
        {
          id: "q85",
          question:
            "Which of the following is LEAST likely to be considered a major common food allergen compared with the other choices?",
          choices: ["Shellfish", "Eggs", "Apple", "Peanut"],
          answer: 2,
          rationale: "Apples are not one of the most common food allergens.",
        },
        {
          id: "q86",
          question:
            "Nurse Cordova, a newly hired nurse assigned to a mental health clinic, cares for clients experiencing disturbances in thoughts, perceptions, mood, and anxiety. Mary is pacing and repeatedly verbalizing concerns about her financial problems. When Nurse Cordova asks whether something upsetting has happened, Mary gives vague responses and has difficulty focusing on the question. Which level of anxiety is Mary MOST likely experiencing?",
          choices: ["Panic", "Severe", "Moderate", "Mild"],
          answer: 2,
          rationale: "Moderate anxiety involves difficulty focusing and pacing.",
        },
        {
          id: "q87",
          question:
            "Nurse Cordova observes Mary pacing repeatedly in the hallway. Which statement by the nurse would BEST help Mary recognize and explore her anxiety?",
          choices: [
            '"Have you been pacing for a long time?"',
            "\"I guess you're worried about something, aren't you?\"",
            '"I notice that you\'re pacing. How are you feeling?"',
            '"Can I get you some medication to help calm you?"',
          ],
          answer: 2,
          rationale:
            "This response helps the patient explore their anxiety by connecting the behavior to feelings.",
        },
        {
          id: "q88",
          question:
            "Emilio, an 83-year-old resident of an extended-care facility, is anxious most of the time and frequently complains of numerous vague physical symptoms that interfere with his ability to eat. Which disorder is MOST consistent with this presentation?",
          choices: ["Hypochondriasis", "Sublimation", "Conversion disorder", "Severe anxiety"],
          answer: 0,
          rationale:
            "Hypochondriasis is characterized by excessive worry about having a serious illness.",
        },
        {
          id: "q89",
          question:
            "Mark, who has generalized anxiety disorder, tells Nurse Cordova that he wants to stop taking lorazepam (Ativan). Which information is MOST important for the nurse to provide?",
          choices: [
            "Increases cognitive abilities",
            "Decreases sleeping difficulties",
            "Can cause withdrawal symptoms",
            "Usually causes major depression",
          ],
          answer: 2,
          rationale: "Benzodiazepines can cause withdrawal symptoms if stopped abruptly.",
        },
        {
          id: "q90",
          question:
            "Nurse Cordova is talking with a depressed client in an inpatient psychiatric unit. The client states: 'Things would be so much better for everyone if I just weren't around.' Which response by the nurse is MOST appropriate?",
          choices: [
            '"You sound very unhappy. Are you thinking about harming or killing yourself?"',
            '"Those feelings will go away once your medication really takes effect."',
            '"Have you talked to anyone specifically about what is bothering you?"',
            '"I know what you mean. Everyone gets that way when they are depressed."',
          ],
          answer: 0,
          rationale: "This response directly assesses suicidal ideation, which is the priority.",
        },
      ],
    },
  ],
};