import type { Subject } from "./types";

export const medSurgNursing: Subject =   {
    id: "msn",
    name: "Medical-Surgical Nursing",
    short: "Med-Surg",
    description: "Care of adult clients with acute and chronic conditions across body systems.",
    banks: [
      {
        id: "msn-test-iv-care-of-clients-with-physiologic",
        title: "TEST IV - Care of Clients with Physiologic and Psychosocial	Alterations",
        description: "69 questions from the PNLE reviewer.",
        questions: [
          {
            id: "q1",
            question:
              "Randy has undergone kidney transplant, what assessment would prompt Nurse Katrina to suspect organ rejection?",
            choices: ["Sudden weight loss", "Polyuria", "Hypertension", "Shock"],
            answer: 2,
            rationale:
              "Hypertension Hypertension, along with fever, and tenderness over the grafted kidney, reflects acute rejection.",
          },
          {
            id: "q2",
            question:
              "The immediate objective of nursing care for an overweight, mildly hypertensive male client with ureteral colic and hematuria is to decrease:",
            choices: ["Pain", "Weight", "Hematuria", "Hypertension"],
            answer: 0,
            rationale:
              "Pain Sharp, severe pain (renal colic) radiating toward the genitalia and thigh is caused by uretheral distention and smooth muscle spasm; relief form pain is the priority.",
          },
          {
            id: "q3",
            question:
              "Matilda, with hyperthyroidism is to receive Lugol’s iodine solution before a subtotal thyroidectomy is performed. The nurse is aware that this medication is given to:",
            choices: [
              "Decrease the total basal metabolic rate.",
              "Maintain the function of the parathyroid glands.",
              "Block the formation of thyroxine by the thyroid gland.",
              "Decrease the size and vascularity of the thyroid gland.",
            ],
            answer: 3,
            rationale:
              "Decrease the size and vascularity of the thyroid gland. Lugol’s solution provides iodine, which aids in decreasing the vascularity of the thyroid gland, which limits the risk of hemorrhage when surgery is performed.",
          },
          {
            id: "q4",
            question:
              "Ricardo, was diagnosed with type I diabetes. The nurse is aware that acute hypoglycemia also can develop in the client who is diagnosed with:",
            choices: ["Liver disease", "Hypertension", "Type 2 diabetes", "Hyperthyroidism"],
            answer: 0,
            rationale:
              "Liver Disease The client with liver disease has a decreased ability to metabolize carbohydrates because of a decreased ability to form glycogen (glycogenesis) and to form glucose from glycogen.",
          },
          {
            id: "q5",
            question:
              "Tracy is receiving combination chemotherapy for treatment of metastatic carcinoma. Nurse Ruby should monitor the client for the systemic side effect of:",
            choices: ["Ascites", "Nystagmus", "Leukopenia", "Polycythemia"],
            answer: 2,
            rationale:
              "Leukopenia Leukopenia, a reduction in WBCs, is a systemic effect of chemotherapy as a result of myelosuppression.",
          },
          {
            id: "q6",
            question:
              "Norma, with recent colostomy expresses concern about the inability to control the passage of gas. Nurse Oliver should suggest that the client plan to:",
            choices: [
              "Eliminate foods high in cellulose.",
              "Decrease fluid intake at meal times.",
              "Avoid foods that in the past caused flatus.",
              "Adhere to a bland diet prior to social events.",
            ],
            answer: 2,
            rationale:
              "Avoid foods that in the past caused flatus. Foods that bothered a person preoperatively will continue to do so after a colostomy.",
          },
          {
            id: "q7",
            question:
              "Nurse Ron begins to teach a male client how to perform colostomy irrigations. The nurse would evaluate that the instructions were understood when the client states, “I should:",
            choices: [
              "Lie on my left side while instilling the irrigating solution.”",
              "Keep the irrigating container less than 18 inches above the stoma.”",
              "Instill a minimum of 1200 ml of irrigating solution to stimulate evacuation of the bowel.”",
              "Insert the irrigating catheter deeper into the stoma if cramping occurs during the procedure.”",
            ],
            answer: 1,
            rationale:
              "Keep the irrigating container less than 18 inches above the stoma.” This height permits the solution to flow slowly with little force so that excessive peristalsis is not immediately precipitated.",
          },
          {
            id: "q8",
            question:
              "Patrick is in the oliguric phase of acute tubular necrosis and is experiencing fluid and electrolyte imbalances. The client is somewhat confused and complains of nausea and muscle weakness. As part of the prescribed therapy to correct this electrolyte imbalance, the nurse would expect to:",
            choices: [
              "Administer Kayexalate",
              "Restrict foods high in protein",
              "Increase oral intake of cheese and milk.",
              "Administer large amounts of normal saline via I.V.",
            ],
            answer: 0,
            rationale:
              "Administer Kayexalate Kayexalate,a potassium exchange resin, permits sodium to be exchanged for potassium in the intestine, reducing the serum potassium level.",
          },
          {
            id: "q9",
            question:
              "Mario has burn injury. After Forty48 hours, the physician orders for Mario 2 liters of IV fluid to be administered q12 h. The drop factor of the tubing is 10 gtt/ml. The nurse should set the flow to provide:",
            choices: ["18 gtt/min", "28 gtt/min", "32 gtt/min", "36 gtt/min"],
            answer: 1,
            rationale:
              "28 gtt/min This is the correct flow rate; multiply the amount to be infused (2000 ml) by the drop factor (10) and divide the result by the amount of time in minutes (12 hours x 60 minutes) 10. 11. 12. 13. 14. 15.",
          },
          {
            id: "q10",
            question:
              "Terence suffered from burn injury. Using the rule of nines, which has the largest percent of burns?",
            choices: [
              "Face and neck",
              "Right upper arm and penis",
              "Right thigh and penis",
              "Upper trunk",
            ],
            answer: 3,
            rationale:
              "Upper trunk The percentage designated for each burned part of the body using the rule of nines: Head and neck 9%; Right upper extremity 9%; Left upper extremity 9%; Anterior trunk 18%; Posterior trunk 18%; Right lower extremity 18%; Left lower extremity 18%; Perineum 1%.",
          },
          {
            id: "q11",
            question:
              "Herbert, a 45 year old construction engineer is brought to the hospital unconscious after falling from a 2-story building. When assessing the client, the nurse would be most concerned if the assessment revealed:",
            choices: [
              "Reactive pupils",
              "A depressed fontanel",
              "Bleeding from ears",
              "An elevated temperature",
            ],
            answer: 2,
            rationale:
              "Bleeding from ears The nurse needs to perform a thorough assessment that could indicate alterations in cerebral function, increased intracranial pressures, fractures and bleeding. Bleeding from the ears occurs only with basal skull fractures that can easily contribute to increased intracranial pressure and brain herniation.",
          },
          {
            id: "q12",
            question:
              "Nurse Sherry is teaching male client regarding his permanent artificial pacemaker. Which information given by the nurse shows her knowledge deficit about the artificial cardiac pacemaker?",
            choices: [
              "take the pulse rate once a day, in the morning upon awakening",
              "May be allowed to use electrical appliances",
              "Have regular follow up care",
              "May engage in contact sports",
            ],
            answer: 3,
            rationale:
              "may engage in contact sports The client should be advised by the nurse to avoid contact sports. This will prevent trauma to the area of the pacemaker generator.",
          },
          {
            id: "q13",
            question:
              "The nurse is ware that the most relevant knowledge about oxygen administration to a male client with COPD is",
            choices: [
              "Oxygen at 1-2L/min is given to maintain the hypoxic stimulus for breathing.",
              "Hypoxia stimulates the central chemoreceptors in the medulla that makes the client breath.",
              "Oxygen is administered best using a nonrebreathing mask",
              "Blood gases are monitored using a pulse oximeter.",
            ],
            answer: 0,
            rationale:
              "Oxygen at 1-2L/min is given to maintain the hypoxic stimulus for breathing. COPD causes a chronic CO2 retention that renders the medulla insensitive to the CO2 stimulation for breathing. The hypoxic state of the client then becomes the stimulus for breathing. Giving the client oxygen in low concentrations will maintain the client’s hypoxic drive.",
          },
          {
            id: "q14",
            question:
              "Tonny has undergoes a left thoracotomy and a partial pneumonectomy. Chest tubes are inserted, and one-bottle water-seal drainage is instituted in the operating room. In the postanesthesia care unit Tonny is placed in Fowler's position on either his right side or on his back. The nurse is aware that this position:",
            choices: [
              "Reduce incisional pain.",
              "Facilitate ventilation of the left lung.",
              "Equalize pressure in the pleural space.",
              "Increase venous return",
            ],
            answer: 1,
            rationale:
              "Facilitate ventilation of the left lung. Since only a partial pneumonectomy is done, there is a need to promote expansion of this remaining Left lung by positioning the client on the opposite unoperated side.",
          },
          {
            id: "q15",
            question:
              "Kristine is scheduled for a bronchoscopy. When teaching Kristine what to expect afterward, the nurse's highest priority of information would be:",
            choices: [
              "Food and fluids will be withheld for at least 2 hours.",
              "Warm saline gargles will be done q 2h.",
              "Coughing and deep-breathing exercises will be done q2h. 112",
              "Only ice chips and cold liquids will be allowed initially.",
            ],
            answer: 0,
            rationale:
              "Food and fluids will be withheld for at least 2 hours. Prior to bronchoscopy, the doctors sprays the back of the throat with anesthetic to minimize the gag reflex and thus facilitate the insertion of the bronchoscope. Giving the client food and drink after the procedure without checking on the return of the gag reflex can cause the client to aspirate. The gag reflex usually returns after two hours.",
          },
          {
            id: "q16",
            question:
              "Nurse Tristan is caring for a male client in acute renal failure. The nurse should expect hypertonic glucose, insulin infusions, and sodium bicarbonate to be used to treat:",
            choices: ["hypernatremia.", "hypokalemia.", "hyperkalemia.", "hypercalcemia."],
            answer: 2,
            rationale:
              "hyperkalemia. 123 17. 18. 19. Hyperkalemia is a common complication of acute renal failure. It's life-threatening if immediate action isn't taken to reverse it. The administration of glucose and regular insulin, with sodium bicarbonate if necessary, can temporarily prevent cardiac arrest by moving potassium into the cells and temporarily reducing serum potassium levels. Hypernatremia, hypokalemia, and hypercalcemia don't usually occur with acute renal failure and aren't treated with glucose, insulin, or sodium bicarbonate.",
          },
          {
            id: "q17",
            question:
              "Ms. X has just been diagnosed with condylomata acuminata (genital warts). What information is appropriate to tell this client?",
            choices: [
              "This condition puts her at a higher risk for cervical cancer; therefore, she should have a Papanicolaou (Pap) smear annually.",
              "The most common treatment is metronidazole (Flagyl), which should eradicate the problem within 7 to 10 days.",
              "The potential for transmission to her sexual partner will be eliminated if condoms are used every time they have sexual intercourse.",
              "The human papillomavirus (HPV), which causes condylomata acuminata, can't be transmitted during oral sex.",
            ],
            answer: 0,
            rationale:
              "This condition puts her at a higher risk for cervical cancer; therefore, she should have a Papanicolaou (Pap) smear annually. Women with condylomata acuminata are at risk for cancer of the cervix and vulva. Yearly Pap smears are very important for early detection. Because condylomata acuminata is a virus, there is no permanent cure. Because condylomata acuminata can occur on the vulva, a condom won't protect sexual partners. HPV can be transmitted to other parts of the body, such as the mouth, oropharynx, and larynx.",
          },
          {
            id: "q18",
            question:
              "Maritess was recently diagnosed with a genitourinary problem and is being examined in the emergency department. When palpating her kidneys, the nurse should keep which anatomical fact in mind?",
            choices: [
              "The left kidney usually is slightly higher than the right one.",
              "The kidneys are situated just above the adrenal glands.",
              'The average kidney is approximately 5 cm (2") long and 2 to 3 cm (¾" to 1-1/8") wide.',
              "The kidneys lie between the 10th and 12th thoracic vertebrae.",
            ],
            answer: 0,
            rationale:
              'The left kidney usually is slightly higher than the right one. The left kidney usually is slightly higher than the right one. An adrenal gland lies atop each kidney. The average kidney measures approximately 11 cm (4-3/8") long, 5 to 5.8 cm (2" to 2¼") wide, and 2.5 cm (1") thick. The kidneys are located retroperitoneally, in the posterior aspect of the abdomen, on either side of the vertebral column. They lie between the 12th thoracic and 3rd lumbar vertebrae.',
          },
          {
            id: "q19",
            question:
              "Jestoni with chronic renal failure (CRF) is admitted to the urology unit. The nurse is aware that the diagnostic test are consistent with CRF if the result is:",
            choices: [
              "Increased pH with decreased hydrogen ions. 113",
              "Increased serum levels of potassium, magnesium, and calcium.",
              "Blood urea nitrogen (BUN) 100 mg/dl and serum creatinine 6.5 mg/ dl.",
              "Uric acid analysis 3.5 mg/dl and phenolsulfonphthalein (PSP) excretion 75%.",
            ],
            answer: 2,
            rationale:
              "Blood urea nitrogen (BUN) 100 mg/dl and serum creatinine 6.5mg/dl. The normal BUN level ranges 8 to 23 mg/dl; the normal serum creatinine level ranges from 0.7 to 1.5 mg/dl. The test results in option C are abnormally elevated, reflecting CRF and the kidneys' decreased ability to remove nonprotein nitrogen waste from the blood. CRF causes decreased pH and increased hydrogen ions — not vice versa. CRF also 20. 21. 22. 23. 24. increases serum levels of potassium, magnesium, and phosphorous, and decreases serum levels of calcium. A uric acid analysis of 3.5 mg/dl falls within the normal range of 2.7 to 7.7 mg/dl; PSP excretion of 75% also falls with the normal range of 60% to 75%.",
          },
          {
            id: "q20",
            question:
              "Katrina has an abnormal result on a Papanicolaou test. After admitting that she read her chart while the nurse was out of the room, Katrina asks what dysplasia means. Which definition should the nurse provide?",
            choices: [
              "Presence of completely undifferentiated tumor cells that don't resemble cells of the tissues of their origin.",
              "Increase in the number of normal cells in a normal arrangement in a tissue or an organ.",
              "Replacement of one type of fully differentiated cell by another in tissues where the second type normally isn't found.",
              "Alteration in the size, shape, and organization of differentiated cells.",
            ],
            answer: 3,
            rationale:
              "Alteration in the size, shape, and organization of differentiated cells Dysplasia refers to an alteration in the size, shape, and organization of differentiated cells. The presence of completely undifferentiated tumor cells that don't resemble cells of the tissues of their origin is called anaplasia. An increase in the number of normal cells in a normal arrangement in a tissue or an organ is called hyperplasia. Replacement of one type of fully differentiated cell by another in tissues where the second type normally isn't found is called metaplasia.",
          },
          {
            id: "q21",
            question:
              "During a routine checkup, Nurse Mariane assesses a male client with acquired immunodeficiency syndrome (AIDS) for signs and symptoms of cancer. What is the most common AIDS-related cancer?",
            choices: [
              "Squamous cell carcinoma",
              "Multiple myeloma",
              "Leukemia",
              "Kaposi's sarcoma",
            ],
            answer: 3,
            rationale:
              "Kaposi's sarcoma Kaposi's sarcoma is the most common cancer associated with AIDS. Squamous cell carcinoma, multiple myeloma, and leukemia may occur in anyone and aren't associated specifically with AIDS.",
          },
          {
            id: "q22",
            question:
              "Ricardo is scheduled for a prostatectomy, and the anesthesiologist plans to use a spinal (subarachnoid) block during surgery. In the operating room, the nurse positions the client according to the anesthesiologist's instructions. Why does the client require special positioning for this type of anesthesia?",
            choices: [
              "To prevent confusion",
              "To prevent seizures",
              "To prevent cerebrospinal fluid (CSF) leakage",
              "To prevent cardiac arrhythmias",
            ],
            answer: 2,
            rationale:
              "To prevent cerebrospinal fluid (CSF) leakage The client receiving a subarachnoid block requires special positioning to prevent CSF leakage and headache and to ensure proper anesthetic distribution. Proper positioning doesn't help prevent confusion, seizures, or cardiac arrhythmias.",
          },
          {
            id: "q23",
            question:
              "A male client had a nephrectomy 2 days ago and is now complaining of abdominal pressure and nausea. The first nursing action should be to:",
            choices: [
              "Auscultate bowel sounds.",
              "Palpate the abdomen.",
              "Change the client's position.",
              "Insert a rectal tube.",
            ],
            answer: 0,
            rationale:
              "Auscultate bowel sounds. If abdominal distention is accompanied by nausea, the nurse must first auscultate bowel sounds. If bowel sounds are absent, the nurse should suspect gastric or small intestine dilation and these findings must be reported to the physician. Palpation should be avoided postoperatively with abdominal distention. If peristalsis is absent, changing positions and inserting a rectal tube won't relieve the client's discomfort.",
          },
          {
            id: "q24",
            question:
              "Wilfredo with a recent history of rectal bleeding is being prepared for a colonoscopy. How should the nurse Patricia position the client for this test initially?",
            choices: [
              "Lying on the right side with legs straight",
              "Lying on the left side with knees bent",
              "Prone with the torso elevated",
              "Bent over with hands touching the floor",
            ],
            answer: 1,
            rationale:
              "Lying on the left side with knees bent For a colonoscopy, the nurse initially should position the client on the 25. 26. 27. 28. 124 left side with knees bent. Placing the client on the right side with legs straight, prone with the torso elevated, or bent over with hands touching the floor wouldn't allow proper visualization of the large intestine.",
          },
          {
            id: "q25",
            question:
              "A male client with inflammatory bowel disease undergoes an ileostomy. On the first day after surgery, Nurse Oliver notes that the client's stoma appears dusky. How should the nurse interpret this finding?",
            choices: [
              "Blood supply to the stoma has been interrupted.",
              "This is a normal finding 1 day after surgery.",
              "The ostomy bag should be adjusted.",
              "An intestinal obstruction has occurred.",
            ],
            answer: 0,
            rationale:
              "Blood supply to the stoma has been interrupted An ileostomy stoma forms as the ileum is brought through the abdominal wall to the surface skin, creating an artificial opening for waste elimination. The stoma should appear cherry red, indicating adequate arterial perfusion. A dusky stoma suggests decreased perfusion, which may result from interruption of the stoma's blood supply and may lead to tissue damage or necrosis. A dusky stoma isn't a normal finding. Adjusting the ostomy bag wouldn't affect stoma color, which depends on blood supply to the area. An intestinal obstruction also wouldn't change stoma color.",
          },
          {
            id: "q26",
            question:
              "Anthony suffers burns on the legs, which nursing intervention helps prevent contractures?",
            choices: [
              "Applying knee splints",
              "Elevating the foot of the bed",
              "Hyperextending the client's palms",
              "Performing shoulder range-of-motion exercises",
            ],
            answer: 0,
            rationale:
              "Applying knee splints Applying knee splints prevents leg contractures by holding the joints in a position of function. Elevating the foot of the bed can't prevent contractures because this action doesn't hold the joints in a position of function. Hyperextending a body part for an extended time is inappropriate because it can cause contractures. Performing shoulder rangeof-motion exercises can prevent contractures in the shoulders, but not in the legs.",
          },
          {
            id: "q27",
            question:
              "Nurse Ron is assessing a client admitted with second- and third-degree burns on the face, arms, and chest. Which finding indicates a potential problem?",
            choices: [
              "Partial pressure of arterial oxygen (PaO2) value of 80 mm Hg.",
              "Urine output of 20 ml/hour.",
              "White pulmonary secretions.",
              "Rectal temperature of 100.6° F (38° C).",
            ],
            answer: 1,
            rationale:
              "Urine output of 20 ml/hour. A urine output of less than 40 ml/hour in a client with burns indicates a fluid volume deficit. This client's PaO2 value falls within the normal range (80 to 100 mm Hg). White pulmonary secretions also are normal. The client's rectal temperature isn't significantly elevated and probably results from the fluid volume deficit.",
          },
          {
            id: "q28",
            question:
              "Mr. Mendoza who has suffered a cerebrovascular accident (CVA) is too weak to move on his own. To help the client avoid pressure ulcers, Nurse Celia should:",
            choices: [
              "Turn him frequently.",
              "Perform passive range-of-motion (ROM) exercises.",
              "Reduce the client's fluid intake.",
              "Encourage the client to use a footboard.",
            ],
            answer: 0,
            rationale:
              "Turn him frequently. The most important intervention to prevent pressure ulcers is frequent position changes, which relieve pressure on the skin and underlying tissues. If pressure isn't relieved, 29. 30. 31. capillaries become occluded, reducing circulation and oxygenation of the tissues and resulting in cell death and ulcer formation. During passive ROM exercises, the nurse moves each joint through its range of movement, which improves joint mobility and circulation to the affected area but doesn't prevent pressure ulcers. Adequate hydration is necessary to maintain healthy skin and ensure tissue repair. A footboard prevents plantar flexion and footdrop by maintaining the foot in a dorsiflexed position.",
          },
          {
            id: "q29",
            question:
              "Nurse Maria plans to administer dexamethasone cream to a female client who has dermatitis over the anterior chest. How should the nurse apply this topical agent?",
            choices: [
              "With a circular motion, to enhance absorption.",
              "With an upward motion, to increase blood supply to the affected area",
              "In long, even, outward, and downward strokes in the direction of hair growth",
              "In long, even, outward, and upward strokes in the direction opposite hair growth",
            ],
            answer: 2,
            rationale:
              "In long, even, outward, and downward strokes in the direction of hair growth When applying a topical agent, the nurse should begin at the midline and use long, even, outward, and downward strokes in the direction of hair growth. This application pattern reduces the risk of follicle irritation and skin inflammation.",
          },
          {
            id: "q30",
            question:
              "Nurse Kate is aware that one of the following classes of medication protects the ischemic myocardium by blocking catecholamines and sympathetic nerve stimulation is:",
            choices: [
              "Beta -adrenergic blockers",
              "Calcium channel blocker",
              "Narcotics",
              "Nitrates",
            ],
            answer: 0,
            rationale:
              "Beta -adrenergic blockers Beta-adrenergic blockers work by blocking beta receptors in the myocardium, reducing the response to catecholamines and sympathetic nerve stimulation. They protect the myocardium, helping to reduce the risk of another infraction by decreasing myocardial oxygen demand. Calcium channel blockers reduce the workload of the heart by decreasing the heart rate. Narcotics reduce myocardial oxygen demand, promote vasodilation, and decrease anxiety. Nitrates reduce myocardial oxygen consumption bt decreasing left ventricular end diastolic pressure (preload) and systemic vascular resistance (afterload).",
          },
          {
            id: "q31",
            question:
              "A male client has jugular distention. On what position should the nurse place the head of the bed to obtain the most accurate reading of jugular vein distention?",
            choices: ["High Fowler’s", "Raised 10 degrees", "Raised 30 degrees", "Supine position"],
            answer: 2,
            rationale:
              "Raised 30 degrees Jugular venous pressure is measured with a centimeter ruler to obtain the vertical distance between the sternal angle and the point of highest pulsation with the head of the bed inclined between 15 to 30 degrees. Increased pressure can’t be seen when the client is supine or when the head of the bed is raised 10 degrees because the point that marks the pressure level is above the jaw (therefore, not visible). In 125 32. 33. 34. 35. high Fowler’s position, the veins would be barely discernible above the clavicle.",
          },
          {
            id: "q32",
            question:
              "The nurse is aware that one of the following classes of medications maximizes cardiac performance in clients with heart failure by increasing ventricular contractility?",
            choices: [
              "Beta-adrenergic blockers",
              "Calcium channel blocker",
              "Diuretics",
              "Inotropic agents",
            ],
            answer: 3,
            rationale:
              "Inotropic agents Inotropic agents are administered to increase the force of the heart’s contractions, thereby increasing ventricular contractility and ultimately increasing cardiac output. Beta-adrenergic blockers and calcium channel blockers decrease the heart rate and ultimately decreased the workload of the heart. Diuretics are administered to decrease the overall vascular volume, also decreasing the workload of the heart.",
          },
          {
            id: "q33",
            question:
              "A male client has a reduced serum high-density lipoprotein (HDL) level and an elevated lowdensity lipoprotein (LDL) level. Which of the following dietary modifications is not appropriate for this client?",
            choices: [
              "Fiber intake of 25 to 30 g daily",
              "Less than 30% of calories from fat",
              "Cholesterol intake of less than 300 mg daily",
              "Less than 10% of calories from saturated fat 114",
            ],
            answer: 1,
            rationale:
              "Less than 30% of calories from fat A client with low serum HDL and high serum LDL levels should get less than 30% of daily calories from fat. The other modifications are appropriate for this client.",
          },
          {
            id: "q34",
            question:
              "A 37-year-old male client was admitted to the coronary care unit (CCU) 2 days ago with an acute myocardial infarction. Which of the following actions would breach the client confidentiality?",
            choices: [
              "The CCU nurse gives a verbal report to the nurse on the telemetry unit before transferring the client to that unit",
              "The CCU nurse notifies the on-call physician about a change in the client’s condition",
              "The emergency department nurse calls up the latest electrocardiogram results to check the client’s progress.",
              "At the client’s request, the CCU nurse updates the client’s wife on his condition",
            ],
            answer: 2,
            rationale:
              "The emergency department nurse calls up the latest electrocardiogram results to check the client’s progress The emergency department nurse is no longer directly involved with the client’s care and thus has no legal right to information about his present condition. Anyone directly involved in his care (such as the telemetry nurse and the on-call physician) has the right to information about his condition. Because the client requested that the nurse update his wife on his condition, doing so doesn’t breach confidentiality.",
          },
          {
            id: "q35",
            question:
              "A male client arriving in the emergency department is receiving cardiopulmonary resuscitation from paramedics who are giving ventilations through an endotracheal (ET) tube that they placed in the client’s home. During a pause in compressions, the cardiac monitor shows narrow QRS complexes and a heart rate of beats/minute with a palpable pulse. Which of the following actions should the nurse take first?",
            choices: [
              "Start an L.V. line and administer amiodarone (Cardarone), 300 mg L.V. over 10 minutes.",
              "Check endotracheal tube placement.",
              "Obtain an arterial blood gas (ABG) sample.",
              "Administer atropine, 1 mg L.V.",
            ],
            answer: 1,
            rationale:
              "Check endotracheal tube placement. ET tube placement should be confirmed as soon as the client arrives in the emergency department. Once the airways is secured, oxygenation and ventilation should be confirmed using an end-tidal carbon dioxide monitor and pulse oximetry. Next, the nurse should make sure L.V. access is established. If the client experiences symptomatic bradycardia, atropine is administered as ordered 0.5 to 1 mg every 3 to 5 minutes to a total of 3 mg. Then the nurse should try to find the cause of the client’s arrest by obtaining an ABG sample. Amiodarone is indicated for ventricular tachycardia, 36. 37. 38. 39. 40. ventricular fibrillation and atrial flutter – not symptomatic bradycardia.",
          },
          {
            id: "q36",
            question:
              "A female client arrives at the emergency department with chest and stomach pain and a report of black tarry stool for several months. Which of the following order should the nurse Oliver anticipate?",
            choices: [
              "Cardiac monitor, oxygen, creatine kinase and lactate dehydrogenase levels",
              "Prothrombin time, partial thromboplastin time, fibrinogen and fibrin split product values. 115",
              "Electrocardiogram, complete blood count, testing for occult blood, comprehensive serum metabolic panel.",
              "Electroencephalogram, alkaline phosphatase and aspartate aminotransferase levels, basic serum metabolic panel",
            ],
            answer: 2,
            rationale:
              "Electrocardiogram, complete blood count, testing for occult blood, comprehensive serum metabolic panel. An electrocardiogram evaluates the complaints of chest pain, laboratory tests determines anemia, and the stool test for occult blood determines blood in the stool. Cardiac monitoring, oxygen, and creatine kinase and lactate dehydrogenase levels are appropriate for a cardiac primary problem. A basic metabolic panel and alkaline phosphatase and aspartate aminotransferase levels assess liver function. Prothrombin time, partial thromboplastin time, fibrinogen and fibrin split products are measured to verify bleeding dyscrasias; an electroencephalogram evaluates brain electrical activity.",
          },
          {
            id: "q37",
            question:
              "Macario had coronary artery bypass graft (CABG) surgery 3 days ago. Which of the following conditions is suspected by the nurse when a decrease in platelet count from 230,000 ul to 5,000 ul is noted?",
            choices: [
              "Pancytopenia",
              "Idiopathic thrombocytopemic purpura (ITP)",
              "Disseminated intravascular coagulation (DIC)",
              "Heparin-associated thrombosis and thrombocytopenia (HATT)",
            ],
            answer: 1,
            rationale:
              "Corticosteroids Corticosteroid therapy can decrease antibody production and phagocytosis of the antibody-coated platelets, retaining more functioning platelets. Methotrexate can cause thrombocytopenia. Vitamin K is used to treat an excessive anticoagulate state from warfarin overload, and ASA decreases platelet aggregation.",
          },
          {
            id: "q38",
            question:
              "Instructions for a client with systemic lupus erythematosus (SLE) would include information about which of the following blood dyscrasias?",
            choices: [
              "Dressler’s syndrome",
              "Polycythemia",
              "Essential thrombocytopenia",
              "Von Willebrand’s disease",
            ],
            answer: 3,
            rationale:
              "Breath sounds Pneumonia, both viral and fungal, is a common cause of death in clients with neutropenia, so frequent assessment of respiratory rate and breath sounds is required. Although assessing blood pressure, bowel sounds, and heart sounds is important, it won’t help detect pneumonia.",
          },
          {
            id: "q39",
            question:
              "The nurse knows that neurologic complications of multiple myeloma (MM) usually involve which of the following body system?",
            choices: ["Brain", "Muscle spasm", "Renal dysfunction", "Myocardial irritability"],
            answer: 1,
            rationale:
              "Muscle spasm Back pain or paresthesia in the lower extremities may indicate impending spinal cord compression from a spinal tumor. This should be recognized and treated promptly as progression of the tumor may result in paraplegia. The other 46. 47. 48. 49. 50. 51. options, which reflect parts of the nervous system, aren’t usually affected by MM.",
          },
          {
            id: "q40",
            question:
              "Nurse Patricia is aware that the average length of time from human immunodeficiency virus (HIV) infection to the development of acquired immunodeficiency syndrome (AIDS)?",
            choices: ["Less than 5 years", "5 to 7 years", "10 years", "More than 10 years"],
            answer: 2,
            rationale:
              "10 years Epidermiologic studies show the average time from initial contact with HIV to the development of AIDS is 10 years.",
          },
          {
            id: "q41",
            question:
              "An 18-year-old male client admitted with heat stroke begins to show signs of disseminated intravascular coagulation (DIC). Which of the following laboratory findings is most consistent with DIC?",
            choices: [
              "Low platelet count",
              "Elevated fibrinogen levels",
              "Low levels of fibrin degradation products",
              "Reduced prothrombin time",
            ],
            answer: 0,
            rationale:
              "Low platelet count In DIC, platelets and clotting factors are consumed, resulting in microthrombi and excessive bleeding. As clots form, fibrinogen levels decrease and the prothrombin time increases. Fibrin degeneration products increase as fibrinolysis takes places.",
          },
          {
            id: "q42",
            question:
              "Mario comes to the clinic complaining of fever, drenching night sweats, and unexplained weight loss over the past 3 months. Physical examination reveals a single enlarged supraclavicular lymph node. Which of the following is the most probable diagnosis?",
            choices: ["Influenza", "Sickle cell anemia", "Leukemia", "Hodgkin’s disease"],
            answer: 3,
            rationale:
              "Hodgkin’s disease Hodgkin’s disease typically causes fever night sweats, weight loss, and lymph mode enlargement. Influenza doesn’t last for months. Clients with sickle cell anemia manifest signs and symptoms of chronic anemia with pallor of the mucous membrane, fatigue, and decreased tolerance for exercise; they don’t show fever, night sweats, weight loss or lymph node enlargement. Leukemia doesn’t cause lymph node enlargement.",
          },
          {
            id: "q43",
            question:
              "A male client with a gunshot wound requires an emergency blood transfusion. His blood type is AB negative. Which blood type would be the safest for him to receive?",
            choices: [
              "AB Rh-positive",
              "A Rh-positive",
              "A Rh-negative",
              "O Rh-positive Situation: Stacy is diagnosed with acute lymphoid leukemia (ALL) and beginning chemotherapy.",
            ],
            answer: 2,
            rationale:
              "A Rh-negative Human blood can sometimes contain an inherited D antigen. Persons with the D antigen have Rh-positive blood type; those lacking the antigen have Rhnegative blood. It’s important that a person with Rh- negative blood receives Rh-negative blood. If Rh-positive blood is administered to an Rh-negative person, the recipient develops anti-Rh agglutinins, and sub sequent transfusions with Rhpositive blood may cause serious reactions with clumping and hemolysis of red blood cells.",
          },
          {
            id: "q44",
            question:
              "Stacy is discharged from the hospital following her chemotherapy treatments. Which statement of Stacy’s mother indicated that she understands when she will contact the physician?",
            choices: [
              "“I should contact the physician if Stacy has difficulty in sleeping”.",
              "“I will call my doctor if Stacy has persistent vomiting and diarrhea”.",
              "“My physician should be called if Stacy is irritable and unhappy”.",
              "“Should Stacy have continued hair loss, I need to call the doctor”.",
            ],
            answer: 1,
            rationale:
              "“I will call my doctor if Stacy has persistent vomiting and diarrhea”. Persistent (more than 24 hours) vomiting, anorexia, and diarrhea are signs of toxicity and the patient should stop the medication and notify the health care provider. The other manifestations are expected side effects of chemotherapy.",
          },
          {
            id: "q45",
            question:
              "Stacy’s mother states to the nurse that it is hard to see Stacy with no hair. The best response for the nurse is:",
            choices: [
              "“Stacy looks very nice wearing a hat”.",
              "“You should not worry about her hair, just be glad that she is alive”.",
              "“Yes it is upsetting. But try to cover up your feelings when you are with her or else she may be upset”.",
              "“This is only temporary; Stacy will regrow new hair in 3-6 months, but may be different in texture”.",
            ],
            answer: 3,
            rationale:
              "“This is only temporary; Stacy will re-grow new hair in 3-6 months, but may be different in texture”. 127 52. 53. 54. 55. This is the appropriate response. The nurse should help the mother how to cope with her own feelings regarding the child’s disease so as not to affect the child negatively. When the hair grows back, it is still of the same color and texture.",
          },
          {
            id: "q46",
            question:
              "Stacy has beginning stomatitis. To promote oral hygiene and comfort, the nurse in-charge should:",
            choices: [
              "Provide frequent mouthwash with normal saline.",
              "Apply viscous Lidocaine to oral ulcers as needed.",
              "Use lemon glycerine swabs every 2 hours.",
              "Rinse mouth with Hydrogen Peroxide.",
            ],
            answer: 1,
            rationale:
              "Apply viscous Lidocaine to oral ulcers as needed. Stomatitis can cause pain and this can be relieved by applying topical anesthetics such as lidocaine before mouth care. When the patient is already comfortable, the nurse can proceed with providing the patient with oral rinses of saline solution mixed with equal part of water or hydrogen peroxide mixed water in 1:3 concentrations to promote oral hygiene. Every 2-4 hours.",
          },
          {
            id: "q47",
            question:
              "During the administration of chemotherapy agents, Nurse Oliver observed that the IV site is 116 red and swollen, when the IV is touched Stacy shouts in pain. The first nursing action to take is:",
            choices: [
              "Notify the physician",
              "Flush the IV line with saline solution",
              "Immediately discontinue the infusion",
              "Apply an ice pack to the site, followed by warm compress.",
            ],
            answer: 2,
            rationale:
              "Immediately discontinue the infusion Edema or swelling at the IV site is a sign that the needle has been dislodged and the IV solution is leaking into the tissues causing the edema. The patient feels pain as the nerves are irritated by pressure and the IV solution. The first action of the nurse would be to discontinue the infusion right away to prevent further edema and other complication.",
          },
          {
            id: "q48",
            question:
              "The term “blue bloater” refers to a male client which of the following conditions?",
            choices: [
              "Adult respiratory distress syndrome (ARDS)",
              "Asthma",
              "Chronic obstructive bronchitis",
              "Emphysema",
            ],
            answer: 2,
            rationale:
              "Chronic obstructive bronchitis Clients with chronic obstructive bronchitis appear bloated; they have large barrel chest and peripheral edema, cyanotic nail beds, and at times, circumoral cyanosis. Clients with ARDS are acutely short of breath and frequently need intubation for mechanical ventilation and large amount of oxygen. Clients with asthma don’t exhibit characteristics of chronic disease, and clients with emphysema appear pink and cachectic.",
          },
          {
            id: "q49",
            question:
              "The term “pink puffer” refers to the female client with which of the following conditions?",
            choices: [
              "Adult respiratory distress syndrome (ARDS)",
              "Asthma",
              "Chronic obstructive bronchitis",
              "Emphysema",
            ],
            answer: 3,
            rationale:
              "Emphysema Because of the large amount of energy it takes to breathe, clients with emphysema are usually cachectic. They’re pink and usually breathe through pursed lips, hence the term “puffer.” Clients with ARDS are usually acutely short of breath. Clients with asthma don’t have any particular characteristics, and clients with 56. 57. 58. 59. 60. 61. chronic obstructive bronchitis are bloated and cyanotic in appearance.",
          },
          {
            id: "q50",
            question:
              "Jose is in danger of respiratory arrest following the administration of a narcotic analgesic. An arterial blood gas value is obtained. Nurse Oliver would expect the paco2 to be which of the following values?",
            choices: ["15 mm Hg", "30 mm Hg", "40 mm Hg", "80 mm Hg"],
            answer: 3,
            rationale:
              "80 mm Hg A client about to go into respiratory arrest will have inefficient ventilation and will be retaining carbon dioxide. The value expected would be around 80 mm Hg. All other values are lower than expected.",
          },
          {
            id: "q51",
            question:
              "Timothy’s arterial blood gas (ABG) results are as follows; pH 7.16; Paco2 80 mm Hg; Pao2 46 mm Hg; HCO3- 24mEq/L; Sao2 81%. This ABG result represents which of the following conditions?",
            choices: [
              "Metabolic acidosis",
              "Metabolic alkalosis",
              "Respiratory acidosis",
              "Respiratory alkalosis",
            ],
            answer: 2,
            rationale:
              "Respiratory acidosis Because Paco2 is high at 80 mm Hg and the metabolic measure, HCO3- is normal, the client has respiratory acidosis. The pH is less than 7.35, academic, which eliminates metabolic and respiratory alkalosis as possibilities. If the HCO3- was below 22 mEq/L the client would have metabolic acidosis.",
          },
          {
            id: "q52",
            question:
              "Norma has started a new drug for hypertension. Thirty minutes after she takes the drug, she develops chest tightness and becomes short of breath and tachypneic. She has a decreased level of consciousness. These signs indicate which of the following conditions?",
            choices: [
              "Asthma attack",
              "Pulmonary embolism",
              "Respiratory failure",
              "Rheumatoid arthritis 117 Situation: Mr. Gonzales was admitted to the hospital with ascites and jaundice. To rule out cirrhosis of the liver:",
            ],
            answer: 2,
            rationale:
              "Respiratory failure The client was reacting to the drug with respiratory signs of impending anaphylaxis, which could lead to eventually respiratory failure. Although the signs are also related to an asthma attack or a pulmonary embolism, consider the new drug first. Rheumatoid arthritis doesn’t manifest these signs.",
          },
          {
            id: "q53",
            question: "Which laboratory test indicates liver cirrhosis?",
            choices: [
              "Decreased red blood cell count",
              "Decreased serum acid phosphate level",
              "Elevated white blood cell count",
              "Elevated serum aminotransferase 60. 60.The biopsy of Mr. Gonzales confirms the diagnosis of cirrhosis. Mr. Gonzales is at increased risk for excessive bleeding primarily because of: a. Impaired clotting mechanism b. Varix formation c. Inadequate nutrition d. Trauma of invasive procedure",
            ],
            answer: 3,
            rationale:
              "Elevated serum aminotransferase Hepatic cell death causes release of liver enzymes alanine aminotransferase (ALT), aspartate aminotransferase (AST) and lactate dehydrogenase (LDH) into the circulation. Liver cirrhosis is a chronic and irreversible disease of the liver characterized by generalized inflammation and fibrosis of the liver tissues.",
          },
          {
            id: "q54",
            question:
              "When Mr. Gonzales regained consciousness, the physician orders 50 ml of Lactose p.o. every 2 hours. Mr. Gozales develops diarrhea. The nurse best action would be:",
            choices: [
              "“I’ll see if your physician is in the hospital”.",
              "“Maybe you’re reacting to the drug; I will withhold the next dose”.",
              "“I’ll lower the dosage as ordered so the drug causes only 2 to 4 stools a day”.",
              "“Frequently, bowel movements are needed to reduce sodium level”.",
            ],
            answer: 1,
            rationale:
              "Altered level of consciousness Changes in behavior and level of consciousness are the first sins of hepatic encephalopathy. Hepatic encephalopathy is caused by liver failure and develops when the liver is unable to convert protein metabolic product ammonia to urea. This results in accumulation of ammonia and other toxic in the blood that damages the cells. 62. 63. 64. 65.",
          },
          {
            id: "q55",
            question:
              "Which of the following groups of symptoms indicates a ruptured abdominal aortic aneurysm?",
            choices: [
              "Lower back pain, increased blood pressure, decreased red blood cell (RBC) count, increased white blood (WBC) count.",
              "Severe lower back pain, decreased blood pressure, decreased RBC count, increased WBC count.",
              "Severe lower back pain, decreased blood pressure, decreased RBC count, decreased RBC count, decreased WBC count.",
              "Intermitted lower back pain, decreased blood pressure, decreased RBC count, increased WBC count.",
            ],
            answer: 2,
            rationale:
              "“I’ll lower the dosage as ordered so the drug causes only 2 to 4 stools a day”. Lactulose is given to a patients with hepatic encephalopathy to reduce absorption of ammonia in the intestines by binding with ammonia and promoting more frequent bowel movements. If the patient experience diarrhea, it indicates over dosage and the nurse must reduce the amount of medication given to the patient. The stool will be mashy or soft. Lactulose is also very sweet and may cause cramping and bloating.",
          },
          {
            id: "q56",
            question:
              "After undergoing a cardiac catheterization, Tracy has a large puddle of blood under his buttocks. Which of the following steps should the nurse take first?",
            choices: [
              "Call for help.",
              "Obtain vital signs",
              "Ask the client to “lift up”",
              "Apply gloves and assess the groin site",
            ],
            answer: 1,
            rationale:
              "Severe lower back pain, decreased blood pressure, decreased RBC count, increased WBC count. Severe lower back pain indicates an aneurysm rupture, secondary to pressure being applied within the abdominal cavity. When ruptured occurs, the pain is constant because it can’t be alleviated until the aneurysm is repaired. Blood pressure decreases due to the loss of blood. After the aneurysm ruptures, the vasculature is interrupted and blood volume is lost, so blood pressure wouldn’t increase. For the same reason, the RBC count is decreased – not increased. The WBC count increases as cell migrate to the site of injury.",
          },
          {
            id: "q57",
            question:
              "The nurse is aware that the following terms used to describe reduced cardiac output and perfusion impairment due to ineffective pumping of the heart is:",
            choices: [
              "Anaphylactic shock",
              "Cardiogenic shock",
              "Distributive shock",
              "Myocardial infarction (MI)",
            ],
            answer: 3,
            rationale:
              "Percutaneous transluminal coronary angioplasty (PTCA) PTCA can alleviate the blockage and restore blood flow and oxygenation. An echocardiogram is a noninvasive 66. 67. 68. 69. 70. diagnosis test. Nitroglycerin is an oral sublingual medication. Cardiac catheterization is a diagnostic tool – not a treatment.",
          },
          {
            id: "q58",
            question:
              "Nurse Nikki knows that laboratory results supports the diagnosis of systemic lupus erythematosus (SLE) is:",
            choices: [
              "Elavated serum complement level",
              "Thrombocytosis, elevated sedimentation rate",
              "Pancytopenia, elevated antinuclear antibody (ANA) titer",
              "Leukocysis, elevated blood urea nitrogen (BUN) and creatinine levels",
            ],
            answer: 3,
            rationale:
              "It inhibits reabsorption of sodium and water in the loop of Henle. Furosemide is a loop diuretic that inhibits sodium and water reabsorption in the loop Henle, thereby causing a decrease in blood pressure. Vasodilators cause dilation of peripheral blood vessels, directly relaxing vascular smooth muscle and decreasing blood pressure. Adrenergic blockers decrease sympathetic cardioacceleration and decrease blood pressure. Angiotensinconverting enzyme inhibitors decrease blood pressure due to their action on angiotensin.",
          },
          {
            id: "q59",
            question:
              "A 66-year-old client has been complaining of sleeping more, increased urination, anorexia, weakness, irritability, depression, and bone pain that interferes with her going outdoors. Based on these assessment findings, the nurse would suspect which of the following disorders?",
            choices: [
              "Diabetes mellitus",
              "Diabetes insipidus",
              "Hypoparathyroidism",
              "Hyperparathyroidism",
            ],
            answer: 0,
            rationale:
              "\"I can avoid getting sick by not becoming dehydrated and by paying attention to my need to urinate, drink, or eat more than usual.\" Inadequate fluid intake during hyperglycemic episodes often leads to HHNS. By recognizing the signs of hyperglycemia (polyuria, polydipsia, and polyphagia) and increasing fluid intake, the client may prevent HHNS. Drinking a glass of nondiet soda would be appropriate for hypoglycemia. A client whose diabetes is controlled with oral 79. 80. 81. 82. 130 antidiabetic agents usually doesn't need to monitor blood glucose levels. A highcarbohydrate diet would exacerbate the client's condition, particularly if fluid intake is low.",
          },
          {
            id: "q60",
            question:
              "A male client is scheduled for a transsphenoidal hypophysectomy to remove a pituitary tumor. Preoperatively, the nurse should assess for potential complications by doing which of the following?",
            choices: [
              "Testing for ketones in the urine",
              "Testing urine specific gravity",
              "Checking temperature every 4 hours",
              "Performing capillary glucose testing every 4 hours",
            ],
            answer: 2,
            rationale:
              "High corticotropin and high cortisol levels A corticotropin-secreting pituitary tumor would cause high corticotropin and high cortisol levels. A high corticotropin level with a low cortisol level and a low corticotropin level with a low cortisol level would be associated with hypocortisolism. Low corticotropin and high cortisol levels would be seen if there was a primary defect in the adrenal glands.",
          },
          {
            id: "q61",
            question:
              "Capillary glucose monitoring is being performed every 4 hours for a client diagnosed with diabetic ketoacidosis. Insulin is administered using a scale of regular insulin according to glucose results. At 2 p.m., the client has a capillary glucose level of 250 mg/dl for which he receives 8 U of regular insulin. Nurse Mariner should expect the dose's:",
            choices: [
              "onset to be at 2 p.m. and its peak to be at 3 p.m.",
              "onset to be at 2:15 p.m. and its peak to be at 3 p.m.",
              "onset to be at 2:30 p.m. and its peak to be at 4 p.m.",
              "onset to be at 4 p.m. and its peak to be at 6 p.m.",
            ],
            answer: 3,
            rationale:
              "Performing capillary glucose testing every 4 hours The nurse should perform capillary glucose testing every 4 hours because excess cortisol may cause insulin resistance, placing the client at risk for hyperglycemia. Urine ketone testing isn't indicated because the client does secrete insulin and, therefore, isn't at risk for ketosis. Urine specific gravity isn't indicated because although fluid balance can be compromised, it usually isn't 83. 84. 85. 86. dangerously imbalanced. Temperature regulation may be affected by excess cortisol and isn't an accurate indicator of infection.",
          },
          {
            id: "q62",
            question:
              "The physician orders laboratory tests to confirm hyperthyroidism in a female client with classic signs and symptoms of this disorder. Which test result would confirm the diagnosis?",
            choices: [
              "No increase in the thyroid-stimulating hormone (TSH) level after 30 minutes during the TSH stimulation test",
              "A decreased TSH level",
              "An increase in the TSH level after 30 minutes during the TSH stimulation test",
              "Below-normal levels of serum triiodothyronine (T3) and serum thyroxine (T4) as detected by radioimmunoassay",
            ],
            answer: 2,
            rationale:
              "onset to be at 2:30 p.m. and its peak to be at 4 p.m. Regular insulin, which is a short-acting insulin, has an onset of 15 to 30 minutes and a peak of 2 to 4 hours. Because the nurse gave the insulin at 2 p.m., the expected onset would be from 2:15 p.m. to 2:30 p.m. and the peak from 4 p.m. to 6 p.m.",
          },
          {
            id: "q63",
            question:
              "Nurse Sarah expects to note an elevated serum glucose level in a client with hyperosmolar hyperglycemic nonketotic syndrome (HHNS). Which other laboratory finding should the nurse anticipate?",
            choices: [
              "Elevated serum acetone level",
              "Serum ketone bodies",
              "Serum alkalosis",
              "Below-normal serum potassium level",
            ],
            answer: 1,
            rationale:
              "\"Rotate injection sites within the same anatomic region, not among different regions.\" The nurse should instruct the client to rotate injection sites within the same anatomic region. Rotating sites among different regions may cause excessive day-to-day variations in the blood glucose level; also, insulin absorption differs from one region to the next. Insulin should be injected only into healthy tissue lacking large blood vessels, nerves, or scar tissue or other deviations. Injecting insulin into areas of hypertrophy may delay absorption. The client shouldn't inject insulin into areas of lipodystrophy (such as hypertrophy or atrophy); to prevent lipodystrophy, the client should rotate injection sites systematically. Exercise speeds drug absorption, so the client shouldn't inject insulin into sites above muscles that will be exercised heavily.",
          },
          {
            id: "q64",
            question:
              "For a client with Graves' disease, which nursing intervention promotes comfort?",
            choices: [
              "Restricting intake of oral fluids",
              "Placing extra blankets on the client's bed",
              "Limiting intake of high-carbohydrate foods",
              "Maintaining room temperature in the low-normal range",
            ],
            answer: 3,
            rationale:
              "Below-normal serum potassium level 131 87. 88. 89. 90. 91. A client with HHNS has an overall body deficit of potassium resulting from diuresis, which occurs secondary to the hyperosmolar, hyperglycemic state caused by the relative insulin deficiency. An elevated serum acetone level and serum ketone bodies are characteristic of diabetic ketoacidosis. Metabolic acidosis, not serum alkalosis, may occur in HHNS.",
          },
          {
            id: "q65",
            question:
              "Johnny a firefighter was involved in extinguishing a house fire and is being treated to smoke inhalation. He develops severe hypoxia 48 hours after the incident, requiring intubation and mechanical ventilation. He most likely has developed which of the following conditions? 120",
            choices: [
              "Adult respiratory distress syndrome (ARDS)",
              "Atelectasis",
              "Bronchitis",
              "Pneumonia",
            ],
            answer: 1,
            rationale:
              "Calcium and phosphorous In osteoporosis, bones lose calcium and phosphate salts, becoming porous, brittle, and abnormally vulnerable to fracture. Sodium and potassium aren't involved in the development of steoporosis.",
          },
          {
            id: "q66",
            question:
              "A 67-year-old client develops acute shortness of breath and progressive hypoxia requiring right femur. The hypoxia was probably caused by which of the following conditions?",
            choices: ["Asthma attack", "Atelectasis", "Bronchitis", "Fat embolism"],
            answer: 0,
            rationale:
              "Adult respiratory distress syndrome (ARDS) Severe hypoxia after smoke inhalation is typically related to ARDS. The other conditions listed aren’t typically associated with smoke inhalation and severe hypoxia.",
          },
          {
            id: "q67",
            question:
              "A client with shortness of breath has decreased to absent breath sounds on the right side, from the apex to the base. Which of the following conditions would best explain this?",
            choices: [
              "Acute asthma",
              "Chronic bronchitis",
              "Pneumonia",
              "Spontaneous pneumothorax",
            ],
            answer: 3,
            rationale:
              "Fat embolism Long bone fractures are correlated with fat emboli, which cause shortness of breath and hypoxia. It’s unlikely the client has developed asthma or bronchitis without a previous history. 92. 93. 94. 95. 96. 97. He could develop atelectasis but it typically doesn’t produce progressive hypoxia.",
          },
          {
            id: "q68",
            question:
              "A 62-year-old male client was in a motor vehicle accident as an unrestrained driver. He’s now in the emergency department complaining of difficulty of breathing and chest pain. On auscultation of his lung field, no breath sounds are present in the upper lobe. This client may have which of the following conditions?",
            choices: ["Bronchitis", "Pneumonia", "Pneumothorax", "Tuberculosis (TB)"],
            answer: 3,
            rationale:
              "Spontaneous pneumothorax A spontaneous pneumothorax occurs when the client’s lung collapses, causing an acute decreased in the amount of functional lung used in oxygenation. The sudden collapse was the cause of his chest pain and shortness of breath. An asthma attack would show wheezing breath sounds, and bronchitis would have rhonchi. Pneumonia would have bronchial breath sounds over the area of consolidation.",
          },
          {
            id: "q69",
            question:
              "Aldo with a massive pulmonary embolism will have an arterial blood gas analysis performed to determine the extent of hypoxia. The acid-base disorder that may be present is?",
            choices: [
              "Metabolic acidosis",
              "Metabolic alkalosis",
              "Respiratory acidosis",
              "Respiratory alkalosis",
            ],
            answer: 0,
            rationale:
              "Alveolar damage in the infracted area The infracted area produces alveolar damage that can lead to the production of bloody sputum, sometimes in massive amounts. Clot formation usually occurs in the legs. There’s a loss of lung parenchyma and subsequent scar tissue formation.",
          },
        ],
      },
      {
        id: "msn-test-v-care-of-clients-with-physiologic-",
        title: "TEST V - Care of Clients with Physiologic and Psychosocial	Alterations",
        description: "97 questions from the PNLE reviewer.",
        questions: [
          {
            id: "q1",
            question:
              "Tony refuses his evening dose of Haloperidol (Haldol), then becomes extremely agitated in the dayroom while other clients are watching television. He begins cursing and throwing furniture. Nurse Oliver first action is to:",
            choices: [
              "Check the client’s medical record for an order for an as-needed I.M. dose of medication for agitation.",
              "Place the client in full leather restraints.",
              "Call the attending physician and report the behavior.",
              "Remove all other clients from the dayroom.",
            ],
            answer: 3,
            rationale:
              "Remove all other clients from the dayroom. The nurse’s first priority is to consider the safety of the clients in the therapeutic setting. The other actions are appropriate responses after ensuring the safety of other clients.",
          },
          {
            id: "q2",
            question:
              "Tina who is manic, but not yet on medication, comes to the drug treatment center. The nurse would not let this client join the group session because:",
            choices: [
              "The client is disruptive.",
              "The client is harmful to self.",
              "The client is harmful to others.",
              "The client needs to be on medication first.",
            ],
            answer: 0,
            rationale:
              "The client is disruptive. Group activity provides too much stimulation, which the client will not be able to handle (harmful to self) and as a result will be disruptive to others.",
          },
          {
            id: "q3",
            question:
              "Dervid, an adolescent boy was admitted for substance abuse and hallucinations. The client’s mother asks Nurse Armando to talk with his husband when he arrives at the hospital. The mother says that she is afraid of what the father might say to the boy. The most appropriate nursing intervention would be to:",
            choices: [
              "Inform the mother that she and the father can work through this problem themselves.",
              "Refer the mother to the hospital social worker.",
              "Agree to talk with the mother and the father together.",
              "Suggest that the father and son work things out.",
            ],
            answer: 2,
            rationale:
              "Agree to talk with the mother and the father together. By agreeing to talk with both parents, the nurse can provide emotional support and further assess and validate the family’s needs.",
          },
          {
            id: "q4",
            question:
              "What is Nurse John likely to note in a male client being admitted for alcohol withdrawal?",
            choices: [
              "Perceptual disorders.",
              "Impending coma.",
              "Recent alcohol intake.",
              "Depression with mutism.",
            ],
            answer: 0,
            rationale:
              "Perceptual disorders. Frightening visual hallucinations are especially common in clients experiencing alcohol withdrawal.",
          },
          {
            id: "q5",
            question:
              "Aira has taken amitriptyline HCL (Elavil) for 3 days, but now complains that it “doesn’t help” and refuses to take it. What should the nurse say or do?",
            choices: [
              "Withhold the drug.",
              "Record the client’s response.",
              "Encourage the client to tell the doctor.",
              "Suggest that it takes a while before seeing the results.",
            ],
            answer: 3,
            rationale:
              "Suggest that it takes a while before seeing the results. The client needs a specific response; that it takes 2 to 3 weeks (a delayed effect) until the therapeutic blood level is reached.",
          },
          {
            id: "q6",
            question:
              "Dervid, an adolescent has a history of truancy from school, running away from home and “barrowing” other people’s things without their permission. The adolescent denies stealing, rationalizing instead that as long as no one was using the items, it was all right to borrow them. It is important for the nurse to understand the psychodynamically, this behavior may be largely attributed to a developmental defect related to the:",
            choices: ["Id", "Ego", "Superego", "Oedipal complex"],
            answer: 2,
            rationale:
              "Superego This behavior shows a weak sense of moral consciousness. According to Freudian theory, personality disorders stem from a weak superego.",
          },
          {
            id: "q7",
            question:
              "In preparing a female client for electroconvulsive therapy (ECT), Nurse Michelle knows that succinylcoline (Anectine) will be administered for which therapeutic effect?",
            choices: [
              "Short-acting anesthesia",
              "Decreased oral and respiratory secretions.",
              "Skeletal muscle paralysis.",
              "Analgesia.",
            ],
            answer: 2,
            rationale:
              "Skeletal muscle paralysis. Anectine is a depolarizing muscle relaxant causing paralysis. It is used to reduce the intensity of muscle contractions during the convulsive stage, thereby reducing the risk of bone fractures or dislocation.",
          },
          {
            id: "q8",
            question:
              "Nurse Gina is aware that the dietary implications for a client in manic phase of bipolar disorder is:",
            choices: [
              "Serve the client a bowl of soup, buttered French bread, and apple slices.",
              "Increase calories, decrease fat, and decrease protein.",
              "Give the client pieces of cut-up steak, carrots, and an apple.",
              "Increase calories, carbohydrates, and protein.",
            ],
            answer: 3,
            rationale:
              "Increase calories, carbohydrates, and protein. This client increased protein for tissue building and increased calories to replace what is burned up (usually via carbohydrates).",
          },
          {
            id: "q9",
            question:
              "What parental behavior toward a child during an admission procedure should cause Nurse Ron to suspect child abuse?",
            choices: [
              "Flat affect",
              "Expressing guilt",
              "Acting overly solicitous toward the child.",
              "Ignoring the child.",
            ],
            answer: 2,
            rationale:
              "Acting overly solicitous toward the child. 144 This behavior is an example of reaction formation, a coping mechanism.",
          },
          {
            id: "q10",
            question:
              "Nurse Lynnette notices that a female client with obsessive-compulsive disorder washes her hands for long periods each day. How should the nurse respond to this compulsive behavior?",
            choices: [
              "By designating times during which the client can focus on the behavior.",
              "By urging the client to reduce the frequency of the behavior as rapidly as possible.",
              "By calling attention to or attempting to prevent the behavior.",
              "By discouraging the client from verbalizing anxieties.",
            ],
            answer: 0,
            rationale:
              "By designating times during which the client can focus on the behavior. The nurse should designate times during which the client can focus on the compulsive behavior or obsessive thoughts. The nurse should urge the client to reduce the frequency of the compulsive behavior gradually, not rapidly. She shouldn't call attention to or try to prevent the behavior. Trying to prevent the behavior may cause pain and terror in the client. The nurse should encourage the client to verbalize anxieties to help distract attention from the compulsive behavior.",
          },
          {
            id: "q11",
            question:
              "After seeking help at an outpatient mental health clinic, Ruby who was raped while walking her dog is diagnosed with posttraumatic stress disorder (PTSD). Three months later, Ruby returns to the clinic, complaining of fear, loss of control, and helpless feelings. Which nursing intervention is most appropriate for Ruby?",
            choices: [
              "Recommending a high-protein, low-fat diet.",
              "Giving sleep medication, as prescribed, to restore a normal sleep- wake cycle.",
              "Allowing the client time to heal.",
              "Exploring the meaning of the traumatic event with the client.",
            ],
            answer: 3,
            rationale:
              "Exploring the meaning of the traumatic event with the client. The client with PTSD needs encouragement to examine and understand the meaning of the traumatic event and consequent losses. Otherwise, symptoms may worsen and the client may become depressed or engage in self-destructive behavior such as substance abuse. The client must explore the meaning of the event and won't heal without this, no matter how much time passes. Behavioral techniques, such as relaxation therapy, may help decrease the client's anxiety and induce sleep. The physician may prescribe antianxiety agents or antidepressants cautiously to avoid dependence; sleep medication is rarely appropriate. A special diet isn't indicated unless the client also has an eating disorder or a nutritional problem.",
          },
          {
            id: "q12",
            question:
              'Meryl, age 19, is highly dependent on her parents and fears leaving home to go away to college. Shortly before the semester starts, she complains that her legs are paralyzed and is rushed to the emergency department. When physical examination rules out a physical cause for her paralysis, the physician admits her to the psychiatric unit where she is diagnosed with conversion disorder. Meryl asks the nurse, "Why has this happened to me?" What is the nurse\'s best response?',
            choices: [
              '"You\'ve developed this paralysis so you can stay with your parents. You must 134 deal with this conflict if you want to walk again."',
              '"It must be awful not to be able to move your legs. You may feel better if you realize the problem is psychological, not physical."',
              "\"Your problem is real but there is no physical basis for it. We'll work on what is going on in your life to find out why it's happened.\"",
              '"It isn\'t uncommon for someone with your personality to develop a conversion disorder during times of stress."',
            ],
            answer: 2,
            rationale:
              "\"Your problem is real but there is no physical basis for it. We'll work on what is going on in your life to find out why it's happened.\" The nurse must be honest with the client by telling her that the paralysis has no physiologic cause while also conveying empathy and acknowledging that her symptoms are real. The client will benefit from psychiatric treatment, which will help her understand the underlying cause of her symptoms. After the psychological conflict is resolved, her symptoms will disappear. Saying that it must be awful not to be able to move her legs wouldn't answer the client's question; knowing that the cause is psychological wouldn't necessarily make her feel better. Telling her that she has developed paralysis to avoid leaving her parents or that her personality caused her disorder wouldn't help her understand and resolve the underlying conflict. 145",
          },
          {
            id: "q13",
            question:
              "Nurse Krina knows that the following drugs have been known to be effective in treating obsessive-compulsive disorder (OCD):",
            choices: [
              "benztropine (Cogentin) and diphenhydramine (Benadryl).",
              "chlordiazepoxide (Librium) and diazepam (Valium)",
              "fluvoxamine (Luvox) and clomipramine (Anafranil)",
              "divalproex (Depakote) and lithium (Lithobid)",
            ],
            answer: 2,
            rationale:
              "fluvoxamine (Luvox) and clomipramine (Anafranil) The antidepressants fluvoxamine and clomipramine have been effective in the treatment of OCD. Librium and Valium may be helpful in treating anxiety related to OCD but aren't drugs of choice to treat the illness. The other medications mentioned aren't effective in the treatment of OCD.",
          },
          {
            id: "q14",
            question:
              "Alfred was newly diagnosed with anxiety disorder. The physician prescribed buspirone (BuSpar). The nurse is aware that the teaching instructions for newly prescribed buspirone should include which of the following?",
            choices: [
              "A warning about the drugs delayed therapeutic effect, which is from 14 to 30 days.",
              "A warning about the incidence of neuroleptic malignant syndrome (NMS).",
              "A reminder of the need to schedule blood work in 1 week to check blood levels of the drug.",
              "A warning that immediate sedation can occur with a resultant drop in pulse.",
            ],
            answer: 0,
            rationale:
              "A warning about the drugs delayed therapeutic effect, which is from 14 to 30 days. The client should be informed that the drug's therapeutic effect might not be reached for 14 to 30 days. The client must be instructed to continue taking the drug as directed. Blood level checks aren't necessary. NMS hasn't been reported with this drug, but tachycardia is frequently reported.",
          },
          {
            id: "q15",
            question:
              "Richard with agoraphobia has been symptomfree for 4 months. Classic signs and symptoms of phobias include:",
            choices: [
              "Insomnia and an inability to concentrate.",
              "Severe anxiety and fear.",
              "Depression and weight loss.",
              "Withdrawal and failure to distinguish reality from fantasy.",
            ],
            answer: 1,
            rationale:
              "Severe anxiety and fear. Phobias cause severe anxiety (such as a panic attack) that is out of proportion to the threat of the feared object or situation. Physical signs and symptoms of phobias include profuse sweating, poor motor control, tachycardia, and elevated blood pressure. Insomnia, an inability to concentrate, and weight loss are common in depression. Withdrawal and failure to distinguish reality from fantasy occur in schizophrenia.",
          },
          {
            id: "q16",
            question:
              "Which medications have been found to help reduce or eliminate panic attacks? 135",
            choices: [
              "b. c. d. Antidepressants Anticholinergics Antipsychotics Mood stabilizers 18. A client seeks care because she feels depressed and has gained weight. To treat her atypical depression, the physician prescribes tranylcypromine sulfate (Parnate), 10 mg by mouth twice per day. When this drug is used to treat atypical depression, what is its onset of action? a. 1 to 2 days",
              "3 to 5 days",
              "6 to 8 days",
              "10 to 14 days",
            ],
            answer: 0,
            rationale:
              "Antidepressants Tricyclic and monoamine oxidase (MAO) inhibitor antidepressants have been found to be effective in treating clients with panic attacks. Why these drugs help control panic attacks isn't clearly understood. Anticholinergic agents, which are smoothmuscle relaxants, relieve physical symptoms of anxiety but don't relieve the anxiety itself. Antipsychotic drugs are inappropriate because clients who experience panic attacks aren't psychotic. Mood stabilizers aren't indicated because panic attacks are rarely associated with mood changes.",
          },
          {
            id: "q17",
            question:
              "A 65 years old client is in the first stage of Alzheimer's disease. Nurse Patricia should plan to focus this client's care on:",
            choices: [
              "Offering nourishing finger foods to help maintain the client's nutritional status.",
              "Providing emotional support and individual counseling.",
              "Monitoring the client to prevent minor illnesses from turning into major problems.",
              "Suggesting new activities for the client and family to do together.",
            ],
            answer: 1,
            rationale:
              "Providing emotional support and individual counseling. Clients in the first stage of Alzheimer's disease are aware that something is happening to them and may become overwhelmed and frightened. Therefore, nursing care typically focuses on providing emotional support and individual counseling. The other options are appropriate during the second stage of Alzheimer's disease, when the client needs continuous monitoring to prevent minor illnesses from progressing into major problems and when maintaining adequate nutrition may become a challenge. During this stage, offering nourishing finger foods helps clients to feed themselves and maintain adequate nutrition.",
          },
          {
            id: "q18",
            question:
              "The nurse is assessing a client who has just been admitted to the emergency department. Which signs would suggest an overdose of an antianxiety agent?",
            choices: [
              "Combativeness, sweating, and confusion",
              "Agitation, hyperactivity, and grandiose ideation",
              "Emotional lability, euphoria, and impaired memory",
              "Suspiciousness, dilated pupils, and increased blood pressure",
            ],
            answer: 2,
            rationale:
              "Emotional lability, euphoria, and impaired memory Signs of antianxiety agent overdose include emotional lability, euphoria, and impaired memory. Phencyclidine overdose can cause combativeness, sweating, and confusion. Amphetamine overdose can result in agitation, hyperactivity, and grandiose ideation. Hallucinogen overdose can produce suspiciousness, dilated pupils, and increased blood pressure.",
          },
          {
            id: "q19",
            question:
              "The nurse is caring for a client diagnosed with antisocial personality disorder. The client has a history of fighting, cruelty to animals, and stealing. Which of the following traits would the nurse be most likely to uncover during assessment?",
            choices: [
              "History of gainful employment",
              "Frequent expression of guilt regarding antisocial behavior",
              "Demonstrated ability to maintain close, stable relationships",
              "A low tolerance for frustration",
            ],
            answer: 3,
            rationale:
              "A low tolerance for frustration Clients with an antisocial personality disorder exhibit a low tolerance for frustration, emotional immaturity, and a lack of impulse control. They commonly have a history of unemployment, miss work repeatedly, and quit work without other plans for employment. They don't feel guilt about their behavior and commonly perceive themselves as victims. They also display a lack of responsibility for the outcome of their actions. Because of a lack of trust in others, clients with antisocial personality disorder commonly have difficulty developing stable, close relationships.",
          },
          {
            id: "q20",
            question:
              "Nurse Amy is providing care for a male client undergoing opiate withdrawal. Opiate withdrawal causes severe physical discomfort and can be life-threatening. To minimize these effects, opiate users are commonly detoxified with:",
            choices: ["Barbiturates", "Amphetamines", "Methadone", "Benzodiazepines"],
            answer: 2,
            rationale:
              "Methadone Methadone is used to detoxify opiate users because it binds with opioid receptors at many sites in the central nervous system but doesn’t have the same deterious effects as other opiates, such as cocaine, heroin, and morphine. Barbiturates, amphetamines, and benzodiazepines are highly addictive and would require detoxification treatment.",
          },
          {
            id: "q21",
            question:
              "Nurse Cristina is caring for a client who experiences false sensory perceptions with no basis in reality. These perceptions are known as:",
            choices: ["Delusions", "Hallucinations", "Loose associations", "Neologisms"],
            answer: 1,
            rationale:
              "Hallucinations Hallucinations are visual, auditory, gustatory, tactile, or olfactory perceptions that have no basis in reality. Delusions are false beliefs, rather than perceptions, that the client accepts as real. Loose associations are rapid shifts among unrelated ideas. Neologisms are bizarre words that have meaning only to the client.",
          },
          {
            id: "q22",
            question:
              "Nurse Marco is developing a plan of care for a client with anorexia nervosa. Which action should the nurse include in the plan?",
            choices: [
              "Restricts visits with the family and friends until the client begins to eat.",
              "Provide privacy during meals.",
              "Set up a strict eating plan for the client.",
              "Encourage the client to exercise, which will reduce her anxiety.",
            ],
            answer: 2,
            rationale:
              "Set up a strict eating plan for the client. Establishing a consistent eating plan and monitoring the client’s weight are very important in this disorder. The family and friends should be included in the client’s care. The client should be monitored during meals-not given privacy. Exercise must be limited and supervised.",
          },
          {
            id: "q23",
            question:
              "Tim is admitted with a diagnosis of delusions of grandeur. The nurse is aware that this diagnosis reflects a belief that one is:",
            choices: [
              "Highly important or famous.",
              "Being persecuted",
              "Connected to events unrelated to oneself",
              "Responsible for the evil in the world.",
            ],
            answer: 0,
            rationale:
              "Highly important or famous. A delusion of grandeur is a false belief that one is highly important or famous. A delusion of persecution is a false belief that one is being persecuted. A delusion of reference is a false belief that one is connected to events unrelated to oneself or a belief that one is responsible for the evil in the world.",
          },
          {
            id: "q24",
            question:
              "Nurse Jen is caring for a male client with manic depression. The plan of care for a client in a manic state would include:",
            choices: [
              "Offering a high-calorie meals and strongly encouraging the client to finish all food.",
              "Insisting that the client remain active through the day so that he’ll sleep at night.",
              "Allowing the client to exhibit hyperactive, demanding, manipulative behavior without setting limits.",
              "Listening attentively with a neutral attitude and avoiding power struggles.",
            ],
            answer: 3,
            rationale:
              "Listening attentively with a neutral attitude and avoiding power struggles. The nurse should listen to the client’s requests, express willingness to seriously consider the request, and respond later. The nurse should encourage the client to take short daytime naps because he expends so much energy. The nurse shouldn’t try to restrain the client when he feels the need to move around as long as his activity isn’t harmful. High calorie finger foods should be offered to supplement the client’s diet, if he can’t remain seated long enough to eat a complete meal. The nurse shouldn’t be forced to stay seated at the table to finid=sh a meal. The nurse should set limits in a calm, clear, and self-confident tone of voice.",
          },
          {
            id: "q25",
            question:
              "Ramon is admitted for detoxification after a cocaine overdose. The client tells the nurse that he frequently uses cocaine but that he can control his use if he chooses. Which coping mechanism is he using?",
            choices: ["Withdrawal", "Logical thinking", "Repression", "Denial"],
            answer: 3,
            rationale:
              "Denial Denial is unconscious defense mechanism in which emotional conflict and anxiety is avoided by refusing to acknowledge feelings, desires, impulses, or external facts that are consciously intolerable. Withdrawal is a common response to stress, characterized by apathy. Logical thinking is the ability to think rationally and make responsible decisions, which would lead the client admitting the problem and seeking help. Repression is suppressing past events from the consciousness because of guilty association.",
          },
          {
            id: "q26",
            question:
              "Richard is admitted with a diagnosis of schizotypal personality disorder. hich signs would this client exhibit during social situations?",
            choices: [
              "Aggressive behavior",
              "Paranoid thoughts",
              "Emotional affect",
              "Independence needs",
            ],
            answer: 1,
            rationale:
              "Paranoid thoughts Clients with schizotypal personality disorder experience excessive social anxiety that can lead to paranoid thoughts. Aggressive 146 behavior is uncommon, although these clients may experience agitation with anxiety. Their behavior is emotionally cold with a flattened affect, regardless of the situation. These clients demonstrate a reduced capacity for close or dependent relationships.",
          },
          {
            id: "q27",
            question:
              "Nurse Mickey is caring for a client diagnosed with bulimia. The most appropriate initial goal for a client diagnosed with bulimia is to:",
            choices: [
              "Avoid shopping for large amounts of food.",
              "Control eating impulses.",
              "Identify anxiety-causing situations",
              "Eat only three meals per day.",
            ],
            answer: 2,
            rationale:
              "Identify anxiety-causing situations Bulimic behavior is generally a maladaptive coping response to stress and underlying issues. The client must identify anxiety-causing situations that stimulate the bulimic behavior and then learn new ways of coping with the anxiety.",
          },
          {
            id: "q28",
            question:
              "Rudolf is admitted for an overdose of amphetamines. When assessing the client, the nurse should expect to see:",
            choices: ["Tension and irritability", "Slow pulse", "Hypotension", "Constipation"],
            answer: 0,
            rationale:
              "Tension and irritability An amphetamine is a nervous system stimulant that is subject to abuse because of its ability to produce wakefulness and euphoria. An overdose increases tension and irritability. Options B and C are incorrect because amphetamines stimulate norepinephrine, which increase the heart rate and blood flow. Diarrhea is a common adverse effect so option D is incorrect.",
          },
          {
            id: "q29",
            question:
              "Nicolas is experiencing hallucinations tells the nurse, “The voices are telling me I’m no good.” The client asks if the nurse hears the voices. The most appropriate response by the nurse would be:",
            choices: [
              "“It is the voice of your conscience, which only you can control.”",
              "“No, I do not hear your voices, but I believe you can hear them”.",
              "“The voices are coming from within you and only you can hear them.”",
              "“Oh, the voices are a symptom of your illness; don’t pay any attention to them.” 136",
            ],
            answer: 1,
            rationale:
              "“No, I do not hear your voices, but I believe you can hear them”. The nurse, demonstrating knowledge and understanding, accepts the client’s perceptions even though they are hallucinatory.",
          },
          {
            id: "q30",
            question:
              "The nurse is aware that the side effect of electroconvulsive therapy that a client may experience:",
            choices: [
              "Loss of appetite",
              "Postural hypotension",
              "Confusion for a time after treatment",
              "Complete loss of memory for a time",
            ],
            answer: 2,
            rationale:
              "Confusion for a time after treatment The electrical energy passing through the cerebral cortex during ECT results in a temporary state of confusion after treatment.",
          },
          {
            id: "q31",
            question:
              "A dying male client gradually moves toward resolution of feelings regarding impending death. Basing care on the theory of Kubler-Ross, Nurse Trish plans to use nonverbal interventions when assessment reveals that the client is in the:",
            choices: ["Anger stage", "Denial stage", "Bargaining stage", "Acceptance stage"],
            answer: 3,
            rationale:
              "Acceptance stage Communication and intervention during this stage are mainly nonverbal, as when the client gestures to hold the nurse’s hand.",
          },
          {
            id: "q32",
            question: "The outcome that is unrelated to a crisis state is:",
            choices: [
              "Learning more constructive coping skills",
              "Decompensation to a lower level of functioning.",
              "Adaptation and a return to a prior level of functioning.",
              "A higher level of anxiety continuing for more than 3 months.",
            ],
            answer: 3,
            rationale:
              "A higher level of anxiety continuing for more than 3 months. This is not an expected outcome of a crisis because by definition a crisis would be resolved in 6 weeks.",
          },
          {
            id: "q33",
            question:
              "Miranda a psychiatric client is to be discharged with orders for haloperidol (haldol) therapy. When developing a teaching plan for discharge, the nurse should include cautioning the client against:",
            choices: [
              "Driving at night",
              "Staying in the sun",
              "Ingesting wines and cheeses",
              "Taking medications containing aspirin",
            ],
            answer: 1,
            rationale:
              "Staying in the sun Haldol causes photosensitivity. Severe sunburn can occur on exposure to the sun.",
          },
          {
            id: "q34",
            question:
              "Jen a nursing student is anxious about the upcoming board examination but is able to study intently and does not become distracted by a roommate’s talking and loud music. The student’s ability to ignore distractions and to focus on studying demonstrates:",
            choices: [
              "Mild-level anxiety",
              "Panic-level anxiety",
              "Severe-level anxiety",
              "Moderate-level anxiety",
            ],
            answer: 3,
            rationale:
              "Moderate-level anxiety A moderately anxious person can ignore peripheral events and focuses on central concerns.",
          },
          {
            id: "q35",
            question:
              "When assessing a premorbid personality characteristic of a client with a major depression, it would be unusual for the nurse to find that this client demonstrated:",
            choices: ["Rigidity", "Stubbornness 137", "Diverse interest", "Over meticulousness"],
            answer: 2,
            rationale:
              "Diverse interest Before onset of depression, these clients usually have very narrow, limited interest. 147",
          },
          {
            id: "q36",
            question:
              "Nurse Krina recognizes that the suicidal risk for depressed client is greatest:",
            choices: [
              "As their depression begins to improve",
              "When their depression is most severe",
              "Before any type of treatment is started",
              "As they lose interest in the environment",
            ],
            answer: 0,
            rationale:
              "As their depression begins to improve At this point the client may have enough energy to plan and execute an attempt.",
          },
          {
            id: "q37",
            question:
              "Nurse Kate would expect that a client with vascular dementis would experience:",
            choices: [
              "Loss of remote memory related to anoxia",
              "Loss of abstract thinking related to emotional state",
              "Inability to concentrate related to decreased stimuli",
              "Disturbance in recalling recent events related to cerebral hypoxia.",
            ],
            answer: 3,
            rationale:
              "Disturbance in recalling recent events related to cerebral hypoxia. Cell damage seems to interfere with registering input stimuli, which affects the ability to register and recall recent events; vascular dementia is related to multiple vascular lesions of the cerebral cortex and subcortical structure.",
          },
          {
            id: "q38",
            question:
              "Josefina is to be discharged on a regimen of lithium carbonate. In the teaching plan for discharge the nurse should include:",
            choices: [
              "Advising the client to watch the diet carefully",
              "Suggesting that the client take the pills with milk",
              "Reminding the client that a CBC must be done once a month.",
              "Encouraging the client to have blood levels checked as ordered.",
            ],
            answer: 3,
            rationale:
              "Encouraging the client to have blood levels checked as ordered. Blood levels must be checked monthly or bimonthly when the client is on maintenance therapy because there is only a small range between therapeutic and toxic levels.",
          },
          {
            id: "q39",
            question:
              "The psychiatrist orders lithium carbonate 600 mg p.o t.i.d for a female client. Nurse Katrina would be aware that the teachings about the side effects of this drug were understood when the client state, “I will call my doctor immediately if I notice any:",
            choices: [
              "Sensitivity to bright light or sun",
              "Fine hand tremors or slurred speech",
              "Sexual dysfunction or breast enlargement",
              "Inability to urinate or difficulty when urinating",
            ],
            answer: 1,
            rationale:
              "Fine hand tremors or slurred speech These are common side effects of lithium carbonate.",
          },
          {
            id: "q40",
            question:
              "Nurse Mylene recognizes that the most important factor necessary for the establishment of trust in a critical care area is:",
            choices: ["Privacy", "Respect", "Empathy", "Presence"],
            answer: 3,
            rationale:
              "Presence The constant presence of a nurse provides emotional support because the client knows that someone is attentive and available in case of an emergency.",
          },
          {
            id: "q41",
            question:
              "When establishing an initial nurse-client relationship, Nurse Hazel should explore with the client the:",
            choices: [
              "Client’s perception of the presenting problem.",
              "Occurrence of fantasies the client may experience.",
              "Details of any ritualistic acts carried out by the client",
              "Client’s feelings when external; controls are instituted.",
            ],
            answer: 0,
            rationale:
              "Client’s perception of the presenting problem. The nurse can be most therapeutic by starting where the client is, because it is the client’s concept of the problem that serves as the starting point of the relationship.",
          },
          {
            id: "q42",
            question:
              "Tranylcypromine sulfate (Parnate) is prescribed for a depressed client who has not responded to the tricyclic antidepressants. After teaching the client about the medication, Nurse Marian evaluates that learning has occurred when the client states, “I will avoid:",
            choices: [
              "Citrus fruit, tuna, and yellow vegetables.”",
              "Chocolate milk, aged cheese, and yogurt’”",
              "Green leafy vegetables, chicken, and milk.”",
              "Whole grains, red meats, and carbonated soda.”",
            ],
            answer: 1,
            rationale:
              "Chocolate milk, aged cheese, and yogurt’” These high-tyramine foods, when ingested in the presence of an MAO inhibitor, cause a severe hypertensive response.",
          },
          {
            id: "q43",
            question: "Nurse John is a aware that most crisis situations should resolve in about:",
            choices: ["1 to 2 weeks", "4 to 6 weeks", "4 to 6 months", "6 to 12 months"],
            answer: 1,
            rationale: "4 to 6 weeks Crisis is self-limiting and lasts from 4 to 6 weeks.",
          },
          {
            id: "q44",
            question: "Nurse Judy knows that statistics show that in adolescent suicide behavior:",
            choices: [
              "Females use more dramatic methods than males",
              "Males account for more attempts than do females",
              "Females talk more about suicide before attempting it",
              "Males are more likely to use lethal methods than are females",
            ],
            answer: 3,
            rationale:
              "Males are more likely to use lethal methods than are females This finding is supported by research; females account for 90% of suicide attempts but males are three times more successful because of methods used.",
          },
          {
            id: "q45",
            question:
              "Dervid with paranoid schizophrenia repeatedly uses profanity during an activity therapy session. Which response by the nurse would be most appropriate?",
            choices: [
              '"Your behavior won\'t be tolerated. Go to your room immediately."',
              '"You\'re just doing this to get back at me for making you come to therapy."',
              '"Your cursing is interrupting the activity. Take time out in your room for 10 minutes."',
              "\"I'm disappointed in you. You can't control yourself even for a few minutes.\"",
            ],
            answer: 2,
            rationale:
              "\"Your cursing is interrupting the activity. Take time out in your room for 10 minutes.\" The nurse should set limits on client behavior to ensure a comfortable environment for all clients. The nurse should accept hostile or quarrelsome client outbursts within limits without becoming personally offended, as in option A. Option B is incorrect because it implies that the client’s actions reflect feelings toward the staff instead of the client's own misery. Judgmental remarks, such as option D, may decrease the client's self-esteem.",
          },
          {
            id: "q46",
            question:
              "Nurse Maureen knows that the nonantipsychotic medication used to treat some clients with schizoaffective disorder is:",
            choices: [
              "phenelzine (Nardil)",
              "chlordiazepoxide (Librium)",
              "lithium carbonate (Lithane)",
              "imipramine (Tofranil)",
            ],
            answer: 2,
            rationale:
              "lithium carbonate (Lithane) Lithium carbonate, an antimania drug, is used to treat clients with cyclical schizoaffective disorder, a psychotic disorder once classified under schizophrenia that causes affective symptoms, including maniclike activity. Lithium helps control the affective component of this disorder. Phenelzine is a monoamine oxidase inhibitor prescribed for clients who don't respond to other antidepressant drugs such as imipramine. Chlordiazepoxide, an antianxiety agent, generally is contraindicated in psychotic clients. Imipramine, primarily considered an antidepressant agent, is also used to treat clients with agoraphobia and that undergoing cocaine detoxification.",
          },
          {
            id: "q47",
            question:
              "Which information is most important for the nurse Trinity to include in a teaching plan for a male schizophrenic client taking clozapine (Clozaril)?",
            choices: [
              "Monthly blood tests will be necessary.",
              "Report a sore throat or fever to the physician immediately.",
              "Blood pressure must be monitored for hypertension.",
              "Stop the medication when symptoms subside.",
            ],
            answer: 1,
            rationale:
              "Report a sore throat or fever to the physician immediately. A sore throat and fever are indications of an infection caused by agranulocytosis, a potentially life-threatening complication of clozapine. Because of the risk of agranulocytosis, white blood cell (WBC) counts are necessary weekly, not monthly. If the WBC count drops below 3,000/μl, the medication must be stopped. Hypotension may occur in clients taking this medication. Warn the client to stand up slowly to avoid dizziness from orthostatic hypotension. The medication should be continued, even when symptoms have been controlled. If the medication must be stopped, it should be slowly tapered over 1 to 2 weeks and only under the supervision of a physician.",
          },
          {
            id: "q48",
            question:
              "Ricky with chronic schizophrenia takes neuroleptic medication is admitted to the psychiatric unit. Nursing assessment reveals rigidity, fever, hypertension, and diaphoresis. These findings suggest which life- threatening reaction:",
            choices: [
              "Tardive dyskinesia.",
              "Dystonia.",
              "Neuroleptic malignant syndrome.",
              "Akathisia.",
            ],
            answer: 2,
            rationale:
              "Neuroleptic malignant syndrome. The client's signs and symptoms suggest neuroleptic malignant syndrome, a lifethreatening reaction to neuroleptic medication that requires immediate treatment. Tardive dyskinesia causes involuntary movements of the tongue, mouth, facial muscles, and arm and leg muscles. Dystonia is characterized by cramps and rigidity of the tongue, face, neck, and back muscles. Akathisia causes restlessness, anxiety, and jitteriness.",
          },
          {
            id: "q49",
            question:
              "Which nursing intervention would be most appropriate if a male client develop orthostatic hypotension while taking amitriptyline (Elavil)?",
            choices: [
              "Consulting with the physician about substituting a different type of antidepressant.",
              "Advising the client to sit up for 1 minute before getting out of bed.",
              "Instructing the client to double the dosage until the problem resolves.",
              "Informing the client that this adverse reaction should disappear within 1 week. 138",
            ],
            answer: 1,
            rationale:
              "Advising the client to sit up for 1 minute before getting out of bed. To minimize the effects of amitriptyline-induced orthostatic hypotension, the nurse should advise the client to sit up for 1 minute before getting out of bed. Orthostatic hypotension commonly occurs with tricyclic antidepressant therapy. In these cases, the dosage may be reduced or the physician may prescribe nortriptyline, another tricyclic antidepressant. Orthostatic hypotension disappears only when the drug is discontinued.",
          },
          {
            id: "q50",
            question:
              "Mr. Cruz visits the physician's office to seek treatment for depression, feelings of hopelessness, poor appetite, insomnia, fatigue, low self- esteem, poor concentration, and difficulty making decisions. The client states that these symptoms began at least 2 years ago. Based on this report, the nurse Tyfany suspects:",
            choices: [
              "Cyclothymic disorder.",
              "Atypical affective disorder.",
              "Major depression.",
              "Dysthymic disorder.",
            ],
            answer: 3,
            rationale:
              "Dysthymic disorder. Dysthymic disorder is marked by feelings of depression lasting at least 2 years, accompanied by at least two of the following symptoms: sleep disturbance, appetite disturbance, low energy or fatigue, low selfesteem, poor concentration, difficulty making decisions, and hopelessness. These symptoms may be relatively continuous or separated by intervening periods of normal mood that last a few days to a few weeks. Cyclothymic disorder is a chronic mood disturbance of at least 2 years' duration marked by numerous periods of depression and hypomania. Atypical affective disorder is characterized by manic signs and symptoms. Major depression is a recurring, persistent sadness or loss of interest or pleasure in almost all activities, with signs and symptoms recurring for at least 2 weeks.",
          },
          {
            id: "q51",
            question:
              "After taking an overdose of phenobarbital (Barbita), Mario is admitted to the emergency department. Dr. Trinidad prescribes activated charcoal (Charcocaps) to be administered by mouth immediately. Before administering the dose, the nurse verifies the dosage ordered. What is the usual minimum dose of activated charcoal?",
            choices: [
              "5 g mixed in 250 ml of water",
              "15 g mixed in 500 ml of water",
              "30 g mixed in 250 ml of water",
              "60 g mixed in 500 ml of water",
            ],
            answer: 2,
            rationale:
              "30 g mixed in 250 ml of water The usual adult dosage of activated charcoal is 5 to 10 times the estimated weight of the drug or chemical ingested, or a minimum dose of 30 g, mixed in 250 ml of water. Doses less than this will be ineffective; doses greater than this can increase the risk of adverse reactions, although toxicity doesn't occur with activated charcoal, even at the maximum dose.",
          },
          {
            id: "q52",
            question:
              "What herbal medication for depression, widely used in Europe, is now being prescribed in the United States?",
            choices: ["Ginkgo biloba", "Echinacea", "St. John's wort", "Ephedra"],
            answer: 2,
            rationale:
              "St. John's wort St. John's wort has been found to have serotonin-elevating properties, similar to prescription antidepressants. Ginkgo biloba is prescribed to enhance mental acuity. Echinacea has immune-stimulating properties. Ephedra is a naturally occurring stimulant that is similar to ephedrine.",
          },
          {
            id: "q53",
            question:
              "Cely with manic episodes is taking lithium. Which electrolyte level should the nurse check before administering this medication?",
            choices: ["Clcium", "Sodium", "Chloride", "Potassium"],
            answer: 1,
            rationale:
              "Sodium Lithium is chemically similar to sodium. If sodium levels are reduced, such as from sweating or diuresis, lithium will be reabsorbed by the kidneys, increasing the risk of toxicity. Clients taking lithium shouldn't restrict their intake of sodium and should drink adequate amounts of fluid each day. The other electrolytes are important for normal body 148 functions but sodium is most important to the absorption of lithium.",
          },
          {
            id: "q54",
            question:
              "Nurse Josefina is caring for a client who has been diagnosed with delirium. Which statement about delirium is true?",
            choices: [
              "It's characterized by an acute onset and lasts about 1 month.",
              "It's characterized by a slowly evolving onset and lasts about 1 week.",
              "It's characterized by a slowly evolving onset and lasts about 1 month.",
              "It's characterized by an acute onset and lasts hours to a number of days. 139",
            ],
            answer: 3,
            rationale:
              "It's characterized by an acute onset and lasts hours to a number of days Delirium has an acute onset and typically can last from several hours to several days.",
          },
          {
            id: "q55",
            question:
              "Edward, a 66 year old client with slight memory impairment and poor concentration is diagnosed with primary degenerative dementia of the Alzheimer's type. Early signs of this dementia include subtle personality changes and withdrawal from social interactions. To assess for progression to the middle stage of Alzheimer's disease, the nurse should observe the client for:",
            choices: [
              "Occasional irritable outbursts.",
              "Impaired communication.",
              "Lack of spontaneity.",
              "Inability to perform self-care activities.",
            ],
            answer: 1,
            rationale:
              "Impaired communication. Initially, memory impairment may be the only cognitive deficit in a client with Alzheimer's disease. During the early stage of this disease, subtle personality changes may also be present. However, other than occasional irritable outbursts and lack of spontaneity, the client is usually cooperative and exhibits socially appropriate behavior. Signs of advancement to the middle stage of Alzheimer's disease include exacerbated cognitive impairment with obvious personality changes and impaired communication, such as inappropriate conversation, actions, and responses. During the late stage, the client can't perform self-care activities and may become mute.",
          },
          {
            id: "q56",
            question:
              "Isabel with a diagnosis of depression is started on imipramine (Tofranil), 75 mg by mouth at bedtime. The nurse should tell the client that:",
            choices: [
              "This medication may be habit forming and will be discontinued as soon as the client feels better.",
              "This medication has no serious adverse effects.",
              "The client should avoid eating such foods as aged cheeses, yogurt, and chicken livers while taking the medication.",
              "This medication may initially cause tiredness, which should become less bothersome over time.",
            ],
            answer: 3,
            rationale:
              "This medication may initially cause tiredness, which should become less bothersome over time. Sedation is a common early adverse effect of imipramine, a tricyclic antidepressant, and usually decreases as tolerance develops. Antidepressants aren't habit forming and don't cause physical or psychological dependence. However, after a long course of high-dose therapy, the dosage should be decreased gradually to avoid mild withdrawal symptoms. Serious adverse effects, although rare, include myocardial infarction, heart failure, and tachycardia. Dietary restrictions, such as avoiding aged cheeses, yogurt, and chicken livers, are necessary for a client taking a monoamine oxidase inhibitor, not a tricyclic antidepressant.",
          },
          {
            id: "q57",
            question:
              "Kathleen is admitted to the psychiatric clinic for treatment of anorexia nervosa. To promote the client's physical health, the nurse should plan to:",
            choices: [
              "Severely restrict the client's physical activities.",
              "Weigh the client daily, after the evening meal.",
              "Monitor vital signs, serum electrolyte levels, and acid-base balance.",
              "Instruct the client to keep an accurate record of food and fluid intake.",
            ],
            answer: 2,
            rationale:
              "Monitor vital signs, serum electrolyte levels, and acid-base balance. An anorexic client who requires hospitalization is in poor physical condition from starvation and may die as a result of arrhythmias, hypothermia, malnutrition, infection, or cardiac abnormalities secondary to electrolyte imbalances. Therefore, monitoring the client's vital signs, serum electrolyte level, and acid base balance is crucial. Option A may worsen anxiety. Option B is incorrect because a weight obtained after breakfast is more accurate 149 than one obtained after the evening meal. Option D would reward the client with attention for not eating and reinforce the control issues that are central to the underlying psychological problem; also, the client may record food and fluid intake inaccurately.",
          },
          {
            id: "q58",
            question:
              "Celia with a history of polysubstance abuse is admitted to the facility. She complains of nausea and vomiting 24 hours after admission. The nurse assesses the client and notes piloerection, pupillary dilation, and lacrimation. The nurse suspects that the client is going through which of the following withdrawals?",
            choices: [
              "Alcohol withdrawal",
              "Cannibis withdrawal",
              "Cocaine withdrawal",
              "Opioid withdrawal",
            ],
            answer: 3,
            rationale:
              "Opioid withdrawal The symptoms listed are specific to opioid withdrawal. Alcohol withdrawal would show elevated vital signs. There is no real withdrawal from cannibis. Symptoms of cocaine withdrawal include depression, anxiety, and agitation.",
          },
          {
            id: "q59",
            question:
              "Mr. Garcia, an attorney who throws books and furniture around the office after losing a case is referred to the psychiatric nurse in the law firm's employee assistance program. Nurse Beatriz knows that the client's behavior most likely represents the use of which defense mechanism?",
            choices: ["Regression", "Projection", "Reaction-formation", "Intellectualization"],
            answer: 0,
            rationale:
              "Regression An adult who throws temper tantrums, such as this one, is displaying regressive behavior, or behavior that is appropriate at a younger age. In projection, the client blames someone or something other than the source. In reaction formation, the client acts in opposition to his feelings. In intellectualization, the client overuses rational explanations or abstract thinking to decrease the significance of a feeling or event.",
          },
          {
            id: "q60",
            question:
              "Nurse Anne is caring for a client who has been treated long term with antipsychotic medication. During the assessment, Nurse Anne checks the client for tardive dyskinesia. If tardive dyskinesia is present, Nurse Anne would most likely observe:",
            choices: [
              "Abnormal movements and involuntary movements of the mouth, tongue, and face.",
              "Abnormal breathing through the nostrils accompanied by a “thrill.”",
              "Severe headache, flushing, tremors, and ataxia.",
              "Severe hypertension, migraine headache,",
            ],
            answer: 0,
            rationale:
              "Abnormal movements and involuntary movements of the mouth, tongue, and face. Tardive dyskinesia is a severe reaction associated with long term use of antipsychotic medication. The clinical manifestations include abnormal movements (dyskinesia) and involuntary movements of the mouth, tongue (fly catcher tongue), and face.",
          },
          {
            id: "q61",
            question:
              "Dennis has a lithium level of 2.4 mEq/L. The nurse immediately would assess the client for which of the following signs or symptoms?",
            choices: ["Weakness", "Diarrhea", "Blurred vision", "Fecal incontinence"],
            answer: 2,
            rationale:
              "Blurred vision At lithium levels of 2 to 2.5 mEq/L the client will experienced blurred vision, muscle twitching, severe hypotension, and persistent nausea and vomiting. With levels between 1.5 and 2 mEq/L the client experiencing vomiting, diarrhea, muscle weakness, ataxia, dizziness, slurred speech, and confusion. At lithium levels of 2.5 to 3 mEq/L or higher, urinary and fecal incontinence occurs, as well as seizures, cardiac dysrythmias, peripheral vascular collapse, and death.",
          },
          {
            id: "q62",
            question:
              "Nurse Jannah is monitoring a male client who has been placed inrestraints because of violent behavior. Nurse determines that it will be safe to remove the restraints when:",
            choices: [
              "The client verbalizes the reasons for the violent behavior.",
              "The client apologizes and tells the nurse that it will never happen again.",
              "No acts of aggression have been observed within 1 hour after the release of two of the extremity restraints.",
              "The administered medication has taken effect.",
            ],
            answer: 2,
            rationale:
              "No acts of aggression have been observed within 1 hour after the release of two of the extremity restraints. The best indicator that the behavior is controlled, if the client exhibits no signs of aggression after partial release of restraints. Options , B, and D do not ensure that the client has controlled the behavior.",
          },
          {
            id: "q63",
            question:
              "Nurse Irish is aware that Ritalin is the drug of choice for a child with ADHD. The side effects of the following may be noted by the nurse:",
            choices: [
              "Increased attention span and concentration",
              "Increase in appetite",
              "Sleepiness and lethargy",
              "Bradycardia and diarrhea a. Revealing personal information to the client b. Focusing on the feelings of the client. c. Confronting the client about discrepancies in verbal or non-verbal behavior d. The client feels angry towards the nurse who resembles his mother.",
            ],
            answer: 0,
            rationale:
              "increased attention span and concentration The medication has a paradoxic effect that decreases hyperactivity and impulsivity among children with ADHD. B, C, D. Side effects of Ritalin include anorexia, insomnia, diarrhea and irritability.",
          },
          {
            id: "q64",
            question:
              "Kitty, a 9 year old child has very limited vocabulary and interaction skills. She has an I.Q. of 45. She is diagnosed to have Mental retardation of this classification:",
            choices: ["Profound", "Mild", "Moderate", "Severe"],
            answer: 2,
            rationale:
              "Moderate The child with moderate mental retardation has an I.Q. of 35- 50 Profound Mental retardation has an I.Q. of below 20; Mild mental retardation 50-70 and Severe mental retardation has an I.Q. of 20-35.",
          },
          {
            id: "q65",
            question:
              "Tristan is on Lithium has suffered from diarrhea and vomiting. What should the nurse in-charge do first:",
            choices: [
              "Recognize this as a drug interaction",
              "Give the client Cogentin",
              "Reassure the client that these are common side effects of lithium therapy",
              "Hold the next dose and obtain an order for a stat serum lithium level",
            ],
            answer: 3,
            rationale:
              "Hold the next dose and obtain an order for a stat serum lithium level Diarrhea and vomiting are manifestations of Lithium toxicity. The next dose of lithium should be withheld and test is done to validate the observation. A. The manifestations are not due to drug interaction. B. Cogentin is used to manage the extra pyramidal symptom side effects of antipsychotics. C. The common side effects of Lithium are fine hand tremors, nausea, polyuria and polydipsia.",
          },
          {
            id: "q66",
            question:
              "The therapeutic approach in the care of Armand an autistic child include the following EXCEPT:",
            choices: [
              "Engage in diversionary activities when acting -out",
              "Provide an atmosphere of acceptance",
              "Provide safety measures",
              "Rearrange the environment to activate the child",
            ],
            answer: 3,
            rationale:
              "Rearrange the environment to activate the child The child with autistic disorder does not want change. Maintaining a consistent environment is therapeutic. A. Angry outburst can be re-channeling through safe activities. B. Acceptance enhances a trusting relationship. C. Ensure safety from self-destructive behaviors like head banging and hair pulling.",
          },
          {
            id: "q67",
            question:
              "Jeremy is brought to the emergency room by friends who state that he took something an hour ago. He is actively hallucinating, agitated, with irritated nasal septum.",
            choices: ["Heroin", "Cocaine", "LSD", "Marijuana"],
            answer: 1,
            rationale:
              "cocaine The manifestations indicate intoxication with cocaine, a CNS stimulant. A. Intoxication with heroine is manifested by euphoria then impairment in judgment, attention and the presence of papillary constriction. C. Intoxication with hallucinogen like LSD is manifested by grandiosity, hallucinations, synesthesia and increase in vital signs D. Intoxication with Marijuana, a cannabinoid is manifested by sensation of slowed time, conjunctival redness, social withdrawal, impaired judgment and hallucinations.",
          },
          {
            id: "q68",
            question: "Nurse Pauline is aware that Dementia unlike delirium is characterized by:",
            choices: [
              "Slurred speech",
              "Insidious onset",
              "Clouding of consciousness",
              "Sensory perceptual change",
            ],
            answer: 1,
            rationale:
              "insidious onset Dementia has a gradual onset and progressive deterioration. It causes pronounced memory and cognitive disturbances. A,C and D are all characteristics of delirium.",
          },
          {
            id: "q69",
            question:
              "A 35 year old female has intense fear of riding an elevator. She claims “ As if I will die inside.” The client is suffering from:",
            choices: ["Agoraphobia", "Social phobia", "Claustrophobia", "Xenophobia"],
            answer: 2,
            rationale:
              "Claustrophobia Claustrophobia is fear of closed space. A. Agoraphobia is fear of open space or being a situation where escape is difficult. B. Social phobia is fear of performing in the presence of others in a way that will be humiliating or embarrassing. D. Xenophobia is fear of strangers.",
          },
          {
            id: "q70",
            question:
              "Nurse Myrna develops a counter-transference reaction. This is evidenced by: 140 73. Nurse Sarah ensures a therapeutic environment for all the client. Which of the following best describes a therapeutic milieu?",
            choices: [
              "A therapy that rewards adaptive behavior",
              "A cognitive approach to change behavior",
              "A living, learning or working environment.",
              "A permissive and congenial environment",
            ],
            answer: 0,
            rationale:
              "Revealing personal information to the client Counter-transference is an emotional reaction of the nurse on the client based on her unconscious needs and conflicts. B and C. These are therapeutic approaches. D. This is transference reaction where a client has an emotional reaction towards the nurse based on her past.",
          },
          {
            id: "q71",
            question:
              "Anthony is very hostile toward one of the staff for no apparent reason. He is manifesting:",
            choices: ["Splitting", "Transference", "Countertransference", "Resistance"],
            answer: 1,
            rationale:
              "Transference Transference is a positive or negative feeling associated with a significant person in the client’s past that are unconsciously assigned to another A. Splitting is a defense mechanism commonly seen in a client with personality disorder in which the world is perceived as all good or all bad C. Countert-transference is a phenomenon where the nurse shifts feelings assigned to someone in her past to the patient D. Resistance is the client’s refusal to submit himself to the care of the nurse",
          },
          {
            id: "q72",
            question:
              "Marielle, 17 years old was sexually attacked while on her way home from school. She is brought to the hospital by her mother. Rape is an example of which type of crisis:",
            choices: ["Situational", "Adventitious", "Developmental", "Internal"],
            answer: 1,
            rationale:
              "Adventitious Adventitious crisis is a crisis involving a traumatic event. It is not part of everyday life. A. Situational crisis is from an external source that upset ones psychological equilibrium C and D. are the same. They are transitional or developmental periods in life",
          },
          {
            id: "q73",
            question:
              "Nurse Greta is aware that the following is classified as an Axis I disorder by the Diagnosis and Statistical Manual of Mental Disorders, Text Revision (DSM-IV-TR) is:",
            choices: [
              "Obesity",
              "Borderline personality disorder",
              "Major depression",
              "Hypertension 141",
            ],
            answer: 2,
            rationale:
              "Major depression 150 The DSM-IV-TR classifies major depression as an Axis I disorder. Borderline personality disorder as an Axis II; obesity and hypertension, Axis III.",
          },
          {
            id: "q74",
            question:
              "Katrina, a newly admitted is extremely hostile toward a staff member she has just met, without apparent reason. According to Freudian theory, the nurse should suspect that the client is experiencing which of the following phenomena?",
            choices: ["Intellectualization", "Transference", "Triangulation", "Splitting"],
            answer: 1,
            rationale:
              "Transference Transference is the unconscious assignment of negative or positive feelings evoked by a significant person in the client’s past to another person. Intellectualization is a defense mechanism in which the client avoids dealing with emotions by focusing on facts. Triangulation refers to conflicts involving three family members. Splitting is a defense mechanism commonly seen in clients with personality disorder in which the world is perceived as all good or all bad.",
          },
          {
            id: "q75",
            question:
              "An 83year-old male client is in extended care facility is anxious most of the time and frequently complains of a number of vague symptoms that interfere with his ability to eat. These symptoms indicate which of the following disorders?",
            choices: ["Conversion disorder", "Hypochondriasis", "Severe anxiety", "Sublimation"],
            answer: 1,
            rationale:
              "Hypochondriasis Complains of vague physical symptoms that have no apparent medical causes are characteristic of clients with hypochondriasis. In many cases, the GI system is affected. Conversion disorders are characterized by one or more neurologic symptoms. The client’s symptoms don’t suggest severe anxiety. A client experiencing sublimation channels maladaptive feelings or impulses into socially acceptable behavior",
          },
          {
            id: "q76",
            question:
              "Charina, a college student who frequently visited the health center during the past year with multiple vague complaints of GI symptoms before course examinations. Although physical causes have been eliminated, the student continues to express her belief that she has a serious illness. These symptoms are typically of which of the following disorders?",
            choices: [
              "Conversion disorder",
              "Depersonalization",
              "Hypochondriasis",
              "Somatization disorder",
            ],
            answer: 2,
            rationale:
              "Hypochondriasis Hypochodriasis in this case is shown by the client’s belief that she has a serious illness, although pathologic causes have been eliminated. The disturbance usually lasts at least 6 with identifiable life stressor such as, in this case, course examinations. Conversion disorders are characterized by one or more neurologic symptoms. Depersonalization refers to persistent recurrent episodes of feeling detached from one’s self or body. Somatoform disorders generally have a chronic course with few remissions.",
          },
          {
            id: "q77",
            question:
              "Nurse Daisy is aware that the following pharmacologic agents are sedative- hypnotic medication is used to induce sleep for a client experiencing a sleep disorder is:",
            choices: [
              "Triazolam (Halcion)",
              "Paroxetine (Paxil)\\",
              "Fluoxetine (Prozac)",
              "Risperidone (Risperdal)",
            ],
            answer: 0,
            rationale:
              "Triazolam (Halcion) Triazolam is one of a group of sedative hypnotic medication that can be used for a limited time because of the risk of dependence. Paroxetine is a scrotonin-specific reutake inhibitor used for treatment of depression panic disorder, and obsessivecompulsive disorder. Fluoxetine is a scrotoninspecific reuptake inhibitor used for depressive disorders and obsessive-compulsive disorders. Risperidome is indicated for psychotic disorders.",
          },
          {
            id: "q78",
            question:
              "Aldo, with a somatoform pain disorder may obtain secondary gain. Which of the following statement refers to a secondary gain?",
            choices: [
              "It brings some stability to the family",
              "It decreases the preoccupation with the physical illness",
              "It enables the client to avoid some unpleasant activity",
              "It promotes emotional support or attention for the client",
            ],
            answer: 3,
            rationale:
              "It promotes emotional support or attention for the client 151 Secondary gain refers to the benefits of the illness that allow the client to receive emotional support or attention. Primary gain enables the client to avoid some unpleasant activity. A dysfunctional family may disregard the real issue, although some conflict is relieved. Somatoform pain disorder is a preoccupation with pain in the absence of physical disease.",
          },
          {
            id: "q79",
            question:
              "Dervid is diagnosed with panic disorder with agoraphobia is talking with the nurse in-charge about the progress made in treatment. Which of the following statements indicates a positive client response?",
            choices: [
              "“I went to the mall with my friends last Saturday”",
              "“I’m hyperventilating only when I have a panic attack”",
              "“Today I decided that I can stop taking my medication”",
              "“Last night I decided to eat more than a bowl of cereal”",
            ],
            answer: 0,
            rationale:
              "“I went to the mall with my friends last Saturday” Clients with panic disorder tent to be socially withdrawn. Going to the mall is a sign of working on avoidance behaviors. Hyperventilating is a key symptom of panic disorder. Teaching breathing control is a major intervention for clients with panic disorder. The client taking medications for panic disorder; such as tricylic antidepressants and benzodiazepines must be weaned off these drugs. Most clients with panic disorder with agoraphobia don’t have nutritional problems.",
          },
          {
            id: "q80",
            question:
              "The effectiveness of monoamine oxidase (MAO) inhibitor drug therapy in a client with posttraumatic stress disorder can be demonstrated by which of the following client self –reports?",
            choices: [
              "“I’m sleeping better and don’t have nightmares”",
              "“I’m not losing my temper as much”",
              "“I’ve lost my craving for alcohol”",
              "I’ve lost my phobia for water”",
            ],
            answer: 0,
            rationale:
              "“I’m sleeping better and don’t have nightmares” MAO inhibitors are used to treat sleep problems, nightmares, and intrusive daytime thoughts in individual with posttraumatic stress disorder. MAO inhibitors aren’t used to help control flashbacks or phobias or to decrease the craving for alcohol.",
          },
          {
            id: "q81",
            question:
              "Mark, with a diagnosis of generalized anxiety disorder wants to stop taking his lorazepam (Ativan). Which of the following important facts should nurse Betty discuss with the client about discontinuing the medication?",
            choices: [
              "Stopping the drug may cause depression",
              "Stopping the drug increases cognitive abilities",
              "Stopping the drug decreases sleeping difficulties",
              "Stopping the drug can cause withdrawal symptoms",
            ],
            answer: 3,
            rationale:
              "Stopping the drug can cause withdrawal symptoms Stopping antianxiety drugs such as benzodiazepines can cause the client to have withdrawal symptoms. Stopping a benzodiazepine doesn’t tend to cause depression, increase cognitive abilities, or decrease sleeping difficulties.",
          },
          {
            id: "q82",
            question:
              "Jennifer, an adolescent who is depressed and reported by his parents as having difficulty in school is brought to the community mental health center to be evaluated. Which of the following other health problems would the nurse suspect?",
            choices: [
              "Anxiety disorder",
              "Behavioral difficulties",
              "Cognitive impairment",
              "Labile moods",
            ],
            answer: 1,
            rationale:
              "Behavioral difficulties Adolescents tend to demonstrate severe irritability and behavioral problems rather than simply a depressed mood. Anxiety disorder is more commonly associated with small children rather than with adolescents. Cognitive impairment is typically associated with delirium or dementia. Labile mood is more characteristic of a client with cognitive impairment or bipolar disorder.",
          },
          {
            id: "q83",
            question:
              "Ricardo, an outpatient in psychiatric facility is diagnosed with dysthymic disorder. Which of the following statement about dysthymic disorder is true?",
            choices: [
              "It involves a mood range from moderate depression to hypomania",
              "It involves a single manic depression",
              "It’s a form of depression that occurs in the fall and winter",
              "It’s a mood disorder similar to major depression but of mild to moderate severity",
            ],
            answer: 3,
            rationale:
              "It’s a mood disorder similar to major depression but of mild to moderate severity Dysthymic disorder is a mood disorder similar to major depression but it remains mild to moderate in severity. Cyclothymic disorder is a mood disorder characterized by a mood range from moderate depression to hypomania. Bipolar I disorder is characterized by a single manic episode with no past major depressive episodes. Seasonal- affective disorder is a form of depression occurring in the fall and winter.",
          },
          {
            id: "q84",
            question:
              "The nurse is aware that the following ways in vascular dementia different from Alzheimer’s disease is:",
            choices: [
              "Vascular dementia has more abrupt onset",
              "The duration of vascular dementia is usually brief",
              "Personality change is common in vascular dementia",
              "The inability to perform motor activities occurs in vascular dementia",
            ],
            answer: 0,
            rationale:
              "Vascular dementia has more abrupt onset Vascular dementia differs from Alzheimer’s disease in that it has a more abrupt onset and runs a highly variable course. Personally change is common in Alzheimer’s disease. The duration of delirium is usually brief. The inability to carry out motor activities is common in Alzheimer’s disease.",
          },
          {
            id: "q85",
            question:
              "Loretta, a newly admitted client was diagnosed with delirium and has history of hypertension and anxiety. She had been taking digoxin, furosemide (Lasix), and diazepam (Valium) for anxiety. This client’s impairment may be related to which of the following conditions?",
            choices: [
              "Infection",
              "Metabolic acidosis",
              "Drug intoxication",
              "Hepatic encephalopathy",
            ],
            answer: 2,
            rationale:
              "Drug intoxication This client was taking several medications that have a propensity for producing delirium; digoxin (a digitalis glycoxide), furosemide (a thiazide diuretic), and diazepam (a benzodiazepine). Sufficient supporting data don’t exist to suspect the other options as causes.",
          },
          {
            id: "q86",
            question:
              "Nurse Ron enters a client’s room, the client says, “They’re crawling on my sheets! Get them off my bed!” Which of the following assessment is the most accurate?",
            choices: [
              "The client is experiencing aphasia",
              "The client is experiencing dysarthria",
              "The client is experiencing a flight of ideas",
              "The client is experiencing visual hallucination",
            ],
            answer: 3,
            rationale:
              "The client is experiencing visual hallucination The presence of a sensory stimulus correlates with the definition of a hallucination, which is a false sensory perception. Aphasia refers to a communication problem. Dysarthria is difficulty in speech production. Flight of ideas is rapid shifting from one topic to another.",
          },
          {
            id: "q87",
            question:
              "Which of the following descriptions of a client’s experience and behavior can be assessed as an illusion?",
            choices: [
              "The client tries to hit the nurse when vital signs must be taken",
              "The client says, “I keep hearing a voice telling me to run away” 142",
              "The client becomes anxious whenever the nurse leaves the bedside",
              "The client looks at the shadow on a wall and tells the nurse she sees frightening faces on the wall.",
            ],
            answer: 3,
            rationale:
              "The client looks at the shadow on a wall and tells the nurse she sees frightening faces on the wall. Minor memory problems are distinguished from dementia by their minor severity and their lack of significant interference with the client’s social or occupational lifestyle. Other options would be included in the history data but don’t directly correlate with the client’s lifestyle.",
          },
          {
            id: "q88",
            question:
              "During conversation of Nurse John with a client, he observes that the client shift from one topic to the next on a regular basis. Which of the following terms describes this disorder?",
            choices: [
              "Flight of ideas",
              "Concrete thinking",
              "Ideas of reference",
              "Loose association",
            ],
            answer: 3,
            rationale:
              "Loose association Loose associations are conversations that constantly shift in topic. Concrete thinking implies highly definitive thought processes. Flight of ideas is characterized by conversation that’s disorganized from the onset. Loose associations don’t necessarily start in a cogently, then becomes loose.",
          },
          {
            id: "q89",
            question:
              "Francis tells the nurse that her coworkers are sabotaging the computer. When the nurse asks questions, the client becomes argumentative. This behavior shows personality traits associated with which of the following personality disorder?",
            choices: ["Antisocial", "Histrionic", "Paranoid", "Schizotypal"],
            answer: 2,
            rationale:
              "Paranoid Because of their suspiciousness, paranoid personalities ascribe malevolent activities to others and tent to be defensive, becoming quarrelsome and argumentative. Clients with antisocial personality disorder can also be antagonistic and argumentative but are less suspicious than paranoid personalities. Clients with histrionic personality disorder are dramatic, not suspicious and argumentative. Clients with schizoid personality disorder are usually detached from other and tend to have eccentric behavior.",
          },
          {
            id: "q90",
            question:
              "Which of the following interventions is important for a Cely experiencing with paranoid personality disorder taking olanzapine (Zyprexa)?",
            choices: [
              "Explain effects of serotonin syndrome",
              "Teach the client to watch for extrapyramidal adverse reaction",
              "Explain that the drug is less affective if the client smokes",
              "Discuss the need to report paradoxical effects such as euphoria",
            ],
            answer: 2,
            rationale:
              "Explain that the drug is less affective if the client smokes Olanzapine (Zyprexa) is less effective for clients who smoke cigarettes. Serotonin syndrome occurs with clients who take a combination of antidepressant medications. Olanzapine doesn’t cause euphoria, and extrapyramidal adverse reactions aren’t a problem. However, the client should be aware of adverse effects such as tardive dyskinesia.",
          },
          {
            id: "q91",
            question:
              "Nurse Alexandra notices other clients on the unit avoiding a client diagnosed with antisocial personality disorder. When discussing appropriate behavior in group therapy, which of the following comments is expected about this client by his peers?",
            choices: [
              "Lack of honesty",
              "Belief in superstition",
              "Show of temper tantrums",
              "Constant need for attention",
            ],
            answer: 0,
            rationale:
              "Lack of honesty Clients with antisocial personality disorder tent to engage in acts of dishonesty, shown by lying. Clients with schizotypal personality disorder tend to be superstitious. Clients with histrionic personality disorders tend to overreact to frustrations and disappointments, have temper tantrums, and seek attention.",
          },
          {
            id: "q92",
            question:
              "Tommy, with dependent personality disorder is working to increase his self- esteem. Which of the following statements by the Tommy shows teaching was successful? 143",
            choices: [
              "“I’m not going to look just at the negative things about myself”",
              "“I’m most concerned about my level of competence and progress”",
              "“I’m not as envious of the things other people have as I used to be”",
              "“I find I can’t stop myself from taking over things other should be doing”",
            ],
            answer: 0,
            rationale:
              "“I’m not going to look just at the negative things about myself” As the client makes progress on improving self-esteem, self- blame and negative self-evaluation will decrease. Clients with dependent personality disorder tend to feel fragile and inadequate and would be extremely unlikely to discuss their level of competence and progress. These clients focus on self and aren’t envious or jealous. Individuals with dependent personality disorders don’t take over situations because they see themselves as inept and inadequate.",
          },
          {
            id: "q93",
            question:
              "Norma, a 42-year-old client with a diagnosis of chronic undifferentiated schizophrenia lives in a rooming house that has a weekly nursing clinic. She scratches while she tells the nurse she feels creatures eating away at her skin. Which of the following interventions should be done first?",
            choices: [
              "Talk about his hallucinations and fears",
              "Refer him for anticholinergic adverse reactions",
              "Assess for possible physical problems such as rash",
              "Call his physician to get his medication increased to control his psychosis",
            ],
            answer: 2,
            rationale:
              "Assess for possible physical problems such as rash Clients with schizophrenia generally have poor visceral recognition because they live so fully in their fantasy world. They need to have as in-depth assessment of physical complaints that may spill over into their delusional symptoms. Talking with the client won’t provide as assessment of his itching, and itching isn’t as adverse reaction of antipsychotic drugs, calling the physician to get the client’s medication increased doesn’t address his physical complaints. 152",
          },
          {
            id: "q94",
            question:
              "Ivy, who is on the psychiatric unit is copying and imitating the movements of her primary nurse. During recovery, she says, “I thought the nurse was my mirror. I felt connected only when I saw my nurse.” This behavior is known by which of the following terms?",
            choices: ["Modeling", "Echopraxia", "Ego-syntonicity", "Ritualism"],
            answer: 1,
            rationale:
              "Echopraxia Echopraxia is the copying of another’s behaviors and is the result of the loss of ego boundaries. Modeling is the conscious copying of someone’s behaviors. Ego-syntonicity refers to behaviors that correspond with the individual’s sense of self. Ritualism behaviors are repetitive and compulsive.",
          },
          {
            id: "q95",
            question:
              "Jun approaches the nurse and tells that he hears a voice telling him that he’s evil and deserves to die. Which of the following terms describes the client’s perception?",
            choices: ["Delusion", "Disorganized speech", "Hallucination", "Idea of reference"],
            answer: 2,
            rationale:
              "Hallucination Hallucinations are sensory experiences that are misrepresentations of reality or have no basis in reality. Delusions are beliefs not based in reality. Disorganized speech is characterized by jumping from one topic to the next or using unrelated words. An idea of reference is a belief that an unrelated situation holds special meaning for the client.",
          },
          {
            id: "q96",
            question:
              "Mike is admitted to a psychiatric unit with a diagnosis of undifferentiated schizophrenia. Which of the following defense mechanisms is probably used by mike?",
            choices: ["Projection", "Rationalization", "Regression", "Repression"],
            answer: 2,
            rationale:
              "Regression Regression, a return to earlier behavior to reduce anxiety, is the basic defense mechanism in schizophrenia. Projection is a defense mechanism in which one blames others and attempts to justify actions; it’s used primarily by people with paranoid schizophrenia and delusional disorder. Rationalization is a defense mechanism used to justify one’s action. Repression is the basic defense mechanism in the neuroses; it’s an involuntary exclusion of painful thoughts, feelings, or experiences from awareness.",
          },
          {
            id: "q97",
            question:
              "Rocky has started taking haloperidol (Haldol). Which of the following instructions is most appropriate for Ricky before taking haloperidol?",
            choices: [
              "Should report feelings of restlessness or agitation at once",
              "Use a sunscreen outdoors on a yearround basis",
              "Be aware you’ll feel increased energy taking this drug",
              "This drug will indirectly control essential hypertension",
            ],
            answer: 0,
            rationale:
              "Should report feelings of restlessness or agitation at once Agitation and restlessness are adverse effect of haloperidol and can be treated with antocholinergic drugs. Haloperidol isn’t likely to cause photosensitivity or control essential hypertension. Although the client may experience increased concentration and activity, these effects are due to a decreased in symptoms, not the drug itself. 153",
          },
        ],
      },
      {
        id: "msn-medical-surgical-nursing",
        title: "MEDICAL SURGICAL NURSING",
        description: "40 questions from the PNLE reviewer.",
        questions: [
          {
            id: "q1",
            question:
              "Marco who was diagnosed with brain tumor was scheduled for craniotomy. In preventing the development of cerebral edema after surgery, the nurse should expect the use of:",
            choices: ["Diuretics", "Antihypertensive", "Steroids", "Anticonvulsants"],
            answer: 2,
            rationale:
              "Glucocorticoids (steroids) are used for their anti-inflammatory action, which decreases the development of edema.",
          },
          {
            id: "q2",
            question:
              "Halfway through the administration of blood, the female client complains of lumbar pain. After stopping the infusion Nurse Hazel should:",
            choices: [
              "Increase the flow of normal saline",
              "Assess the pain further",
              "Notify the blood bank",
              "Obtain vital signs.",
            ],
            answer: 0,
            rationale:
              "The blood must be stopped at once, and then normal saline should be infused to keep the line patent and maintain blood volume.",
          },
          {
            id: "q3",
            question:
              "Nurse Maureen knows that the positive diagnosis for HIV infection is made based on which of the following:",
            choices: [
              "A history of high risk sexual behaviors.",
              "Positive ELISA and western blot tests",
              "Identification of an associated opportunistic infection",
              "Evidence of extreme weight loss and high fever",
            ],
            answer: 1,
            rationale:
              "These tests confirm the presence of HIV antibodies that occur in response to the presence of the human immunodeficiency virus (HIV).",
          },
          {
            id: "q4",
            question:
              "Nurse Maureen is aware that a client who has been diagnosed with chronic renal failure recognizes an adequate amount of high-biologicvalue protein when the food the client selected from the menu was:",
            choices: ["Raw carrots", "Apple juice", "Whole wheat bread", "Cottage cheese"],
            answer: 3,
            rationale:
              "One cup of cottage cheese contains approximately 225 calories, 27g of protein, 9g of fat, 30mg cholesterol, and 6g of carbohydrate. Proteins of high biologic value (HBV) contain optimal levels of amino acids essential for life.",
          },
          {
            id: "q5",
            question:
              "Kenneth who has diagnosed with uremic syndrome has the potential to develop complications. Which among the following complications should the nurse anticipates:",
            choices: [
              "Flapping hand tremors",
              "An elevated hematocrit level",
              "Hypotension",
              "Hypokalemia",
            ],
            answer: 0,
            rationale:
              "Elevation of uremic waste products causes irritation of the nerves, resulting in flapping hand tremors.",
          },
          {
            id: "q6",
            question:
              "Nurse hazel receives emergency laboratory results for a client with chest pain and immediately informs the physician. An increased myoglobin level suggests which of the following?",
            choices: ["Liver disease", "Myocardial damage", "Hypertension", "Cancer"],
            answer: 1,
            rationale:
              "Detection of myoglobin is a diagnostic tool to determine whether myocardial damage has occurred.",
          },
          {
            id: "q7",
            question:
              "Nurse Maureen would expect the client with mitral stenosis would demonstrate symptoms associated with congestion in the:",
            choices: ["Right atrium", "Superior vena cava", "Aorta", "Pulmonary"],
            answer: 3,
            rationale:
              "When mitral stenosis is present, the left atrium has difficulty emptying its contents into the left ventricle because there is no valve to prevent back ward flow into the pulmonary vein, the pulmonary circulation is under pressure.",
          },
          {
            id: "q8",
            question:
              "A client has been diagnosed with hypertension. The nurse priority nursing diagnosis would be:",
            choices: [
              "Ineffective health maintenance",
              "Impaired skin integrity",
              "Deficient fluid volume",
              "Pain",
            ],
            answer: 0,
            rationale:
              "Managing hypertension is the priority for the client with hypertension. Clients with hypertension frequently do not experience pain, deficient volume, or impaired skin integrity. It is the asymptomatic nature of hypertension that makes it so difficult to treat.",
          },
          {
            id: "q9",
            question:
              "Nurse Hazel teaches the client with angina about common expected side effects of nitroglycerin including:",
            choices: ["high blood pressure", "stomach cramps", "headache", "shortness of breath"],
            answer: 2,
            rationale:
              "Because of its widespread vasodilating effects, nitroglycerin often produces side effects such as headache, hypotension and dizziness.",
          },
          {
            id: "q10",
            question:
              "The following are lipid abnormalities. Which of the following is a risk factor for the development of atherosclerosis and PVD?",
            choices: [
              "High levels of low density lipid (LDL) cholesterol",
              "High levels of high density lipid (HDL) cholesterol",
              "Low concentration triglycerides",
              "Low levels of LDL cholesterol.",
            ],
            answer: 0,
            rationale:
              "An increased in LDL cholesterol concentration has been documented at risk factor for the development of atherosclerosis. LDL cholesterol is not broken down into the liver but is deposited into the wall of the blood vessels.",
          },
          {
            id: "q11",
            question:
              "Which of the following represents a significant risk immediately after surgery for repair of aortic aneurysm?",
            choices: [
              "Potential wound infection",
              "Potential ineffective coping",
              "Potential electrolyte balance",
              "Potential alteration in renal perfusion",
            ],
            answer: 3,
            rationale:
              "There is a potential alteration in renal perfusion manifested by decreased urine output. The altered renal perfusion may be related to renal artery embolism, prolonged hypotension, or prolonged aortic cross-clamping during the surgery. 178",
          },
          {
            id: "q12",
            question:
              "Nurse Josie should instruct the client to eat which of the following foods to obtain the best supply of Vitamin B12?",
            choices: ["dairy products", "vegetables", "Grains", "Broccoli"],
            answer: 0,
            rationale: "Good source of vitamin B12 are dairy products and meats.",
          },
          {
            id: "q13",
            question:
              "Karen has been diagnosed with aplastic anemia. The nurse monitors for changes in which of the following physiologic functions?",
            choices: [
              "Bowel function",
              "Peripheral sensation",
              "Bleeding tendencies",
              "Intake and out put",
            ],
            answer: 2,
            rationale:
              "Aplastic anemia decreases the bone marrow production of RBC’s, white blood cells, and platelets. The client is at risk for bruising and bleeding tendencies.",
          },
          {
            id: "q14",
            question:
              "Lydia is scheduled for elective splenectomy. Before the clients goes to surgery, the nurse in charge final assessment would be:",
            choices: ["signed consent", "vital signs", "name band", "empty bladder"],
            answer: 1,
            rationale:
              "An elective procedure is scheduled in advance so that all preparations can be completed ahead of time. The vital signs are the final check that must be completed before the client leaves the room so that continuity of care and assessment is provided for.",
          },
          {
            id: "q15",
            question: "What is the peak age range in acquiring acute lymphocytic leukemia (ALL)?",
            choices: ["4 to 12 years.", "20 to 30 years", "40 to 50 years", "60 60 70 years"],
            answer: 0,
            rationale:
              "The peak incidence of Acute Lymphocytic Leukemia (ALL) is 4 years of age. It is uncommon after 15 years of age.",
          },
          {
            id: "q16",
            question:
              "Marie with acute lymphocytic leukemia suffers from nausea and headache. These clinical manifestations may indicate all of the following except",
            choices: [
              "effects of radiation",
              "chemotherapy side effects",
              "meningeal irritation",
              "gastric distension",
            ],
            answer: 3,
            rationale:
              "Acute Lymphocytic Leukemia (ALL) does not cause gastric distention. It does invade the central nervous system, and clients experience headaches and vomiting from meningeal irritation.",
          },
          {
            id: "q17",
            question:
              "A client has been diagnosed with Disseminated Intravascular Coagulation (DIC). Which of the following is contraindicated with the client?",
            choices: [
              "Administering Heparin",
              "Administering Coumadin 174",
              "Treating the underlying cause",
              "Replacing depleted blood products",
            ],
            answer: 1,
            rationale:
              "Disseminated Intravascular Coagulation (DIC) has not been found to respond to oral anticoagulants such as Coumadin.",
          },
          {
            id: "q18",
            question:
              "Which of the following findings is the best indication that fluid replacement for the client with hypovolemic shock is adequate?",
            choices: [
              "Urine output greater than 30ml/hr",
              "Respiratory rate of 21 breaths/minute",
              "Diastolic blood pressure greater than 90 mmhg",
              "Systolic blood pressure greater than 110 mmhg",
            ],
            answer: 0,
            rationale:
              "Urine output provides the most sensitive indication of the client’s response to therapy for hypovolemic shock. Urine output should be consistently greater than 30 to 35 mL/hr.",
          },
          {
            id: "q19",
            question:
              "Which of the following signs and symptoms would Nurse Maureen include in teaching plan as an early manifestation of laryngeal cancer?",
            choices: ["Stomatitis", "Airway obstruction", "Hoarseness", "Dysphagia"],
            answer: 2,
            rationale:
              "Early warning signs of laryngeal cancer can vary depending on tumor location. Hoarseness lasting 2 weeks should be evaluated because it is one of the most common warning signs.",
          },
          {
            id: "q20",
            question:
              "Karina a client with myasthenia gravis is to receive immunosuppressive therapy. The nurse understands that this therapy is effective because it:",
            choices: [
              "Promotes the removal of antibodies that impair the transmission of impulses",
              "Stimulates the production of acetylcholine at the neuromuscular junction.",
              "Decreases the production of autoantibodies that attack the acetylcholine receptors.",
              "Inhibits the breakdown of acetylcholine at the neuromuscular junction.",
            ],
            answer: 2,
            rationale:
              "Steroids decrease the body’s immune response thus decreasing the production of antibodies that attack the acetylcholine receptors at the neuromuscular junction",
          },
          {
            id: "q21",
            question:
              "A female client is receiving IV Mannitol. An assessment specific to safe administration of the said drug is:",
            choices: [
              "Vital signs q4h",
              "Weighing daily",
              "Urine output hourly",
              "Level of consciousness q4h",
            ],
            answer: 2,
            rationale:
              "The osmotic diuretic mannitol is contraindicated in the presence of inadequate renal function or heart failure because it increases the intravascular volume that must be filtered and excreted by the kidney.",
          },
          {
            id: "q22",
            question:
              "Patricia a 20 year old college student with diabetes mellitus requests additional information about the advantages of using a pen like insulin delivery devices. The nurse explains that the advantages of these devices over syringes include:",
            choices: [
              "Accurate dose delivery",
              "Shorter injection time 175",
              "Lower cost with reusable insulin cartridges",
              "Use of smaller gauge needle.",
            ],
            answer: 0,
            rationale:
              "These devices are more accurate because they are easily to used and have improved adherence in insulin regimens by young people because the medication can be administered discreetly.",
          },
          {
            id: "q23",
            question:
              "A male client’s left tibia is fractures in an automobile accident, and a cast is applied. To assess for damage to major blood vessels from the fracture tibia, the nurse in charge should monitor the client for:",
            choices: [
              "Swelling of the left thigh",
              "Increased skin temperature of the foot",
              "Prolonged reperfusion of the toes after blanching",
              "Increased blood pressure",
            ],
            answer: 2,
            rationale:
              "Damage to blood vessels may decrease the circulatory perfusion of the toes, this would indicate the lack of blood supply to the extremity.",
          },
          {
            id: "q24",
            question:
              "While performing a physical assessment of a male client with gout of the great toe, NurseVivian should assess for additional tophi (urate deposits) on the:",
            choices: ["Buttocks", "Ears", "Face", "Abdomen"],
            answer: 1,
            rationale:
              "Uric acid has a low solubility, it tends to precipitate and form deposits at various sites 179 where blood flow is least active, including cartilaginous tissue such as the ears.",
          },
          {
            id: "q25",
            question:
              "Nurse Katrina would recognize that the demonstration of crutch walking with tripod gait was understood when the client places weight on the:",
            choices: [
              "Palms of the hands and axillary regions",
              "Palms of the hand",
              "Axillary regions",
              "Feet, which are set apart",
            ],
            answer: 1,
            rationale:
              "The palms should bear the client’s weight to avoid damage to the nerves in the axilla.",
          },
          {
            id: "q26",
            question:
              "Mang Jose with rheumatoid arthritis states, “the only time I am without pain is when I lie in bed perfectly still”. During the convalescent stage, the nurse in charge with Mang Jose should encourage:",
            choices: [
              "Active joint flexion and extension",
              "Continued immobility until pain subsides",
              "Range of motion exercises twice daily",
              "Flexion exercises three times daily",
            ],
            answer: 0,
            rationale:
              "Active exercises, alternating extension, flexion, abduction, and adduction, mobilize exudates in the joints relieves stiffness and pain.",
          },
          {
            id: "q27",
            question: "A male client has undergone spinal surgery, the nurse should:",
            choices: [
              "Observe the client’s bowel movement and voiding patterns",
              "Log-roll the client to prone position",
              "Assess the client’s feet for sensation and circulation",
              "Encourage client to drink plenty of fluids",
            ],
            answer: 2,
            rationale:
              "Alteration in sensation and circulation indicates damage to the spinal cord, if these occurs notify physician immediately.",
          },
          {
            id: "q28",
            question:
              "Marina with acute renal failure moves into the diuretic phase after one week of therapy. During this phase the client must be assessed for signs of developing:",
            choices: ["Hypovolemia", "renal failure", "metabolic acidosis", "hyperkalemia"],
            answer: 0,
            rationale:
              "In the diuretic phase fluid retained during the oliguric phase is excreted and may reach 3 to 5 liters daily, hypovolemia may occur and fluids should be replaced.",
          },
          {
            id: "q29",
            question:
              "Nurse Judith obtains a specimen of clear nasal drainage from a client with a head injury. Which of the following tests differentiates mucus from cerebrospinal fluid (CSF)?",
            choices: ["Protein", "Specific gravity", "Glucose", "Microorganism"],
            answer: 2,
            rationale:
              "The constituents of CSF are similar to those of blood plasma. An examination for glucose content is done to determine whether a body fluid is a mucus or a CSF. A CSF normally contains glucose.",
          },
          {
            id: "q30",
            question:
              "A 22 year old client suffered from his first tonicclonic seizure. Upon awakening the client asks the nurse, “What caused me to have a seizure? Which of the following would the nurse include in the primary cause of tonic-clonic seizures in adults more the 20 years?",
            choices: ["Electrolyte imbalance", "Head trauma", "Epilepsy", "Congenital defect"],
            answer: 1,
            rationale:
              "Trauma is one of the primary causes of brain damage and seizure activity in adults. Other common causes of seizure activity in adults include neoplasms, withdrawal from drugs and alcohol, and vascular disease.",
          },
          {
            id: "q31",
            question:
              "What is the priority nursing assessment in the first 24 hours after admission of the client with thrombotic CVA?",
            choices: [
              "Pupil size and papillary response",
              "cholesterol level",
              "Echocardiogram",
              "Bowel sounds",
            ],
            answer: 0,
            rationale:
              "It is crucial to monitor the pupil size and papillary response to indicate changes around the cranial nerves.",
          },
          {
            id: "q32",
            question:
              "Nurse Linda is preparing a client with multiple sclerosis for discharge from the hospital to home. Which of the following instruction is most appropriate?",
            choices: [
              "“Practice using the mechanical aids that you will need when future disabilities arise”.",
              "“Follow good health habits to change the course of the disease”.",
              "“Keep active, use stress reduction strategies, and avoid fatigue.",
              "“You will need to accept the necessity for a quiet and inactive lifestyle”.",
            ],
            answer: 2,
            rationale:
              "The nurse most positive approach is to encourage the client with multiple sclerosis to stay active, use stress reduction techniques and avoid fatigue because it is important to support the immune system while remaining active.",
          },
          {
            id: "q33",
            question:
              "The nurse is aware the early indicator of hypoxia in the unconscious client is:",
            choices: ["Cyanosis", "Increased respirations", "Hypertension", "Restlessness"],
            answer: 3,
            rationale:
              "Restlessness is an early indicator of hypoxia. The nurse should suspect hypoxia in unconscious client who suddenly becomes restless.",
          },
          {
            id: "q34",
            question:
              "A client is experiencing spinal shock. Nurse Myrna should expect the function of the bladder to be which of the following?",
            choices: ["Normal", "Atonic", "Spastic", "Uncontrolled"],
            answer: 1,
            rationale:
              "In spinal shock, the bladder becomes completely atonic and will continue to fill unless the client is catheterized.",
          },
          {
            id: "q35",
            question: "Which of the following stage the carcinogen is irreversible?",
            choices: [
              "Progression stage",
              "Initiation stage",
              "Regression stage",
              "Promotion stage",
            ],
            answer: 0,
            rationale:
              "Progression stage is the change of tumor from the preneoplastic state or low degree of malignancy to a fast growing tumor that cannot be reversed.",
          },
          {
            id: "q36",
            question:
              "Among the following components thorough pain assessment, which is the most significant?",
            choices: ["Effect", "Cause", "Causing factors", "Intensity"],
            answer: 3,
            rationale:
              "Intensity is the major indicative of severity of pain and it is important for the evaluation of the treatment.",
          },
          {
            id: "q37",
            question:
              "A 65 year old female is experiencing flare up of pruritus. Which of the client’s action could aggravate the cause of flare ups?",
            choices: [
              "Sleeping in cool and humidified environment",
              "Daily baths with fragrant soap",
              "Using clothes made from 100% cotton",
              "Increasing fluid intake",
            ],
            answer: 1,
            rationale:
              "The use of fragrant soap is very drying to skin hence causing the pruritus.",
          },
          {
            id: "q38",
            question:
              "Atropine sulfate (Atropine) is contraindicated in all but one of the following client?",
            choices: [
              "A client with high blood",
              "A client with bowel obstruction",
              "A client with glaucoma 176",
              "A client with U.T.I",
            ],
            answer: 2,
            rationale:
              "Atropine sulfate is contraindicated with glaucoma patients because it increases intraocular pressure.",
          },
          {
            id: "q39",
            question:
              "Nurse Jon assesses vital signs on a client undergone epidural anesthesia. 44. Which of the following would the nurse assess next?",
            choices: ["Headache", "Bladder distension", "Dizziness", "Ability to move legs"],
            answer: 1,
            rationale:
              "The last area to return sensation is in the perineal area, and the nurse in charge should monitor the client for distended bladder.",
          },
          {
            id: "q40",
            question:
              "Nurse Faith should recognize that fluid shift in a client with burn injury results from increase in the:",
            choices: [
              "Total volume of circulating whole blood",
              "Total volume of intravascular plasma",
              "Permeability of capillary walls",
              "Permeability of kidney tubules",
            ],
            answer: 0,
            rationale:
              "Aging process involves increased capillary fragility and permeability. Older adults have a decreased amount of subcutaneous fat and cause an increased incidence of bruise like lesions caused by collection of extravascular blood in loosely structured dermis.",
          },
        ],
      },
      {
        id: "msn-test-iv-care-of-clients-with-physiologic-2",
        title: "TEST IV - Care of Clients with Physiologic and Psychosocial	Alterations",
        description: "69 questions from the PNLE reviewer.",
        questions: [
          {
            id: "q1",
            question:
              "Randy has undergone kidney transplant, what assessment would prompt Nurse Katrina to suspect organ rejection?",
            choices: ["Sudden weight loss", "Polyuria", "Hypertension", "Shock"],
            answer: 2,
            rationale:
              "Hypertension Hypertension, along with fever, and tenderness over the grafted kidney, reflects acute rejection.",
          },
          {
            id: "q2",
            question:
              "The immediate objective of nursing care for an overweight, mildly hypertensive male client with ureteral colic and hematuria is to decrease:",
            choices: ["Pain", "Weight", "Hematuria", "Hypertension"],
            answer: 0,
            rationale:
              "Pain Sharp, severe pain (renal colic) radiating toward the genitalia and thigh is caused by uretheral distention and smooth muscle spasm; relief form pain is the priority.",
          },
          {
            id: "q3",
            question:
              "Matilda, with hyperthyroidism is to receive Lugol’s iodine solution before a subtotal thyroidectomy is performed. The nurse is aware that this medication is given to:",
            choices: [
              "Decrease the total basal metabolic rate.",
              "Maintain the function of the parathyroid glands.",
              "Block the formation of thyroxine by the thyroid gland.",
              "Decrease the size and vascularity of the thyroid gland.",
            ],
            answer: 3,
            rationale:
              "Decrease the size and vascularity of the thyroid gland. Lugol’s solution provides iodine, which aids in decreasing the vascularity of the thyroid gland, which limits the risk of hemorrhage when surgery is performed.",
          },
          {
            id: "q4",
            question:
              "Ricardo, was diagnosed with type I diabetes. The nurse is aware that acute hypoglycemia also can develop in the client who is diagnosed with:",
            choices: ["Liver disease", "Hypertension", "Type 2 diabetes", "Hyperthyroidism"],
            answer: 0,
            rationale:
              "Liver Disease The client with liver disease has a decreased ability to metabolize carbohydrates because of a decreased ability to form glycogen (glycogenesis) and to form glucose from glycogen.",
          },
          {
            id: "q5",
            question:
              "Tracy is receiving combination chemotherapy for treatment of metastatic carcinoma. Nurse Ruby should monitor the client for the systemic side effect of:",
            choices: ["Ascites", "Nystagmus", "Leukopenia", "Polycythemia"],
            answer: 2,
            rationale:
              "Leukopenia Leukopenia, a reduction in WBCs, is a systemic effect of chemotherapy as a result of myelosuppression.",
          },
          {
            id: "q6",
            question:
              "Norma, with recent colostomy expresses concern about the inability to control the passage of gas. Nurse Oliver should suggest that the client plan to:",
            choices: [
              "Eliminate foods high in cellulose. 310",
              "Decrease fluid intake at meal times.",
              "Avoid foods that in the past caused flatus.",
              "Adhere to a bland diet prior to social events.",
            ],
            answer: 2,
            rationale:
              "Avoid foods that in the past caused flatus. Foods that bothered a person preoperatively will continue to do so after a colostomy.",
          },
          {
            id: "q7",
            question:
              "Nurse Ron begins to teach a male client how to perform colostomy irrigations. The nurse would evaluate that the instructions were understood when the client states, “I should:",
            choices: [
              "Lie on my left side while instilling the irrigating solution.”",
              "Keep the irrigating container less than 18 inches above the stoma.”",
              "Instill a minimum of 1200 ml of irrigating solution to stimulate evacuation of the bowel.”",
              "Insert the irrigating catheter deeper into the stoma if cramping occurs during the procedure.”",
            ],
            answer: 1,
            rationale:
              "Keep the irrigating container less than 18 inches above the stoma.” This height permits the solution to flow slowly with little force so that excessive peristalsis is not immediately precipitated.",
          },
          {
            id: "q8",
            question:
              "Patrick is in the oliguric phase of acute tubular necrosis and is experiencing fluid and electrolyte imbalances. The client is somewhat confused and complains of nausea and muscle weakness. As part of the prescribed therapy to correct this electrolyte imbalance, the nurse would expect to:",
            choices: [
              "Administer Kayexalate",
              "Restrict foods high in protein",
              "Increase oral intake of cheese and milk.",
              "Administer large amounts of normal saline via I.V.",
            ],
            answer: 0,
            rationale:
              "Administer Kayexalate Kayexalate,a potassium exchange resin, permits sodium to be exchanged for potassium in the intestine, reducing the serum potassium level.",
          },
          {
            id: "q9",
            question:
              "Mario has burn injury. After Forty48 hours, the physician orders for Mario 2 liters of IV fluid to be administered q12 h. The drop factor of the tubing is 10 gtt/ml. The nurse should set the flow to provide:",
            choices: ["18 gtt/min", "28 gtt/min", "32 gtt/min", "36 gtt/min"],
            answer: 1,
            rationale:
              "28 gtt/min This is the correct flow rate; multiply the amount to be infused (2000 ml) by the drop factor (10) and divide the result by the amount of time in minutes (12 hours x 60 minutes) 10. 11. 12. 13. 14. 15.",
          },
          {
            id: "q10",
            question:
              "Terence suffered from burn injury. Using the rule of nines, which has the largest percent of burns?",
            choices: [
              "Face and neck",
              "Right upper arm and penis",
              "Right thigh and penis",
              "Upper trunk",
            ],
            answer: 3,
            rationale:
              "Upper trunk The percentage designated for each burned part of the body using the rule of nines: Head and neck 9%; Right upper extremity 9%; Left upper extremity 9%; Anterior trunk 18%; Posterior trunk 18%; Right lower extremity 18%; Left lower extremity 18%; Perineum 1%.",
          },
          {
            id: "q11",
            question:
              "Herbert, a 45 year old construction engineer is brought to the hospital unconscious after falling 311 from a 2-story building. When assessing the client, the nurse would be most concerned if the assessment revealed:",
            choices: [
              "Reactive pupils",
              "A depressed fontanel",
              "Bleeding from ears",
              "An elevated temperature",
            ],
            answer: 2,
            rationale:
              "Bleeding from ears The nurse needs to perform a thorough assessment that could indicate alterations in cerebral function, increased intracranial pressures, fractures and bleeding. Bleeding from the ears occurs only with basal skull fractures that can easily contribute to increased intracranial pressure and brain herniation.",
          },
          {
            id: "q12",
            question:
              "Nurse Sherry is teaching male client regarding his permanent artificial pacemaker. Which information given by the nurse shows her knowledge deficit about the artificial cardiac pacemaker?",
            choices: [
              "take the pulse rate once a day, in the morning upon awakening",
              "May be allowed to use electrical appliances",
              "Have regular follow up care",
              "May engage in contact sports",
            ],
            answer: 3,
            rationale:
              "may engage in contact sports The client should be advised by the nurse to avoid contact sports. This will prevent trauma to the area of the pacemaker generator.",
          },
          {
            id: "q13",
            question:
              "The nurse is ware that the most relevant knowledge about oxygen administration to a male client with COPD is",
            choices: [
              "Oxygen at 1-2L/min is given to maintain the hypoxic stimulus for breathing.",
              "Hypoxia stimulates the central chemoreceptors in the medulla that makes the client breath.",
              "Oxygen is administered best using a nonrebreathing mask",
              "Blood gases are monitored using a pulse oximeter.",
            ],
            answer: 0,
            rationale:
              "Oxygen at 1-2L/min is given to maintain the hypoxic stimulus for breathing. COPD causes a chronic CO2 retention that renders the medulla insensitive to the CO2 stimulation for breathing. The hypoxic state of the client then becomes the stimulus for breathing. Giving the client oxygen in low concentrations will maintain the client’s hypoxic drive.",
          },
          {
            id: "q14",
            question:
              "Tonny has undergoes a left thoracotomy and a partial pneumonectomy. Chest tubes are inserted, and one-bottle water-seal drainage is instituted in the operating room. In the postanesthesia care unit Tonny is placed in Fowler's position on either his right side or on his back. The nurse is aware that this position:",
            choices: [
              "Reduce incisional pain.",
              "Facilitate ventilation of the left lung.",
              "Equalize pressure in the pleural space.",
              "Increase venous return",
            ],
            answer: 1,
            rationale:
              "Facilitate ventilation of the left lung. Since only a partial pneumonectomy is done, there is a need to promote expansion of this remaining Left lung by positioning the client on the opposite unoperated side.",
          },
          {
            id: "q15",
            question:
              "Kristine is scheduled for a bronchoscopy. When teaching Kristine what to expect afterward, the nurse's highest priority of information would be:",
            choices: [
              "Food and fluids will be withheld for at least 2 hours.",
              "Warm saline gargles will be done q 2h.",
              "Coughing and deep-breathing exercises will be done q2h.",
              "Only ice chips and cold liquids will be allowed initially.",
            ],
            answer: 0,
            rationale:
              "Food and fluids will be withheld for at least 2 hours. Prior to bronchoscopy, the doctors sprays the back of the throat with anesthetic to minimize the gag reflex and thus facilitate the insertion of the bronchoscope. Giving the client food and drink after the procedure without checking on the return of the gag reflex can cause the client to aspirate. The gag reflex usually returns after two hours.",
          },
          {
            id: "q16",
            question:
              "Nurse Tristan is caring for a male client in acute renal failure. The nurse should expect hypertonic glucose, insulin infusions, and sodium bicarbonate to be used to treat:",
            choices: ["hypernatremia.", "hypokalemia.", "hyperkalemia.", "hypercalcemia."],
            answer: 2,
            rationale:
              "hyperkalemia. 17. 18. 19. 322 Hyperkalemia is a common complication of acute renal failure. It's life-threatening if immediate action isn't taken to reverse it. The administration of glucose and regular insulin, with sodium bicarbonate if necessary, can temporarily prevent cardiac arrest by moving potassium into the cells and temporarily reducing serum potassium levels. Hypernatremia, hypokalemia, and hypercalcemia don't usually occur with acute renal failure and aren't treated with glucose, insulin, or sodium bicarbonate.",
          },
          {
            id: "q17",
            question:
              "Ms. X has just been diagnosed with condylomata acuminata (genital warts). What information is appropriate to tell this client?",
            choices: [
              "This condition puts her at a higher risk for cervical cancer; therefore, she should have a Papanicolaou (Pap) smear annually.",
              "The most common treatment is metronidazole (Flagyl), which should eradicate the problem within 7 to 10 days.",
              "The potential for transmission to her sexual partner will be eliminated if condoms are used every time they have sexual intercourse.",
              "The human papillomavirus (HPV), which causes condylomata acuminata, can't be transmitted during oral sex.",
            ],
            answer: 0,
            rationale:
              "This condition puts her at a higher risk for cervical cancer; therefore, she should have a Papanicolaou (Pap) smear annually. Women with condylomata acuminata are at risk for cancer of the cervix and vulva. Yearly Pap smears are very important for early detection. Because condylomata acuminata is a virus, there is no permanent cure. Because condylomata acuminata can occur on the vulva, a condom won't protect sexual partners. HPV can be transmitted to other parts of the body, such as the mouth, oropharynx, and larynx.",
          },
          {
            id: "q18",
            question:
              "Maritess was recently diagnosed with a genitourinary problem and is being examined in the emergency department. When palpating her kidneys, the nurse should keep which anatomical fact in mind?",
            choices: [
              "The left kidney usually is slightly higher than the right one.",
              "The kidneys are situated just above the adrenal glands.",
              'The average kidney is approximately 5 cm (2") long and 2 to 3 cm (¾" to 1-1/8") wide.',
              "The kidneys lie between the 10th and 12th thoracic vertebrae.",
            ],
            answer: 0,
            rationale:
              'The left kidney usually is slightly higher than the right one. The left kidney usually is slightly higher than the right one. An adrenal gland lies atop each kidney. The average kidney measures approximately 11 cm (4-3/8") long, 5 to 5.8 cm (2" to 2¼") wide, and 2.5 cm (1") thick. The kidneys are located retroperitoneally, in the posterior aspect of the abdomen, on either side of the vertebral column. They lie between the 12th thoracic and 3rd lumbar vertebrae.',
          },
          {
            id: "q19",
            question:
              "Jestoni with chronic renal failure (CRF) is admitted to the urology unit. The nurse is aware that the diagnostic test are consistent with CRF if the result is:",
            choices: [
              "Increased pH with decreased hydrogen ions.",
              "Increased serum levels of potassium, magnesium, and calcium.",
              "Blood urea nitrogen (BUN) 100 mg/dl and serum creatinine 6.5 mg/ dl.",
              "Uric acid analysis 3.5 mg/dl and phenolsulfonphthalein (PSP) excretion 75%.",
            ],
            answer: 2,
            rationale:
              "Blood urea nitrogen (BUN) 100 mg/dl and serum creatinine 6.5mg/dl. The normal BUN level ranges 8 to 23 mg/dl; the normal serum creatinine level ranges from 0.7 to 1.5 mg/dl. The test results in option C are abnormally elevated, reflecting CRF and the kidneys' decreased ability to remove nonprotein nitrogen waste from the blood. CRF causes decreased pH and increased hydrogen ions — not vice versa. CRF also 20. 21. 22. 23. 24. increases serum levels of potassium, magnesium, and phosphorous, and decreases serum levels of calcium. A uric acid analysis of 3.5 mg/dl falls within the normal range of 2.7 to 7.7 mg/dl; PSP excretion of 75% also falls with the normal range of 60% to 75%.",
          },
          {
            id: "q20",
            question:
              "Katrina has an abnormal result on a Papanicolaou test. After admitting that she read her chart while the nurse was out of the room, Katrina asks what dysplasia means. Which definition should the nurse provide?",
            choices: [
              "Presence of completely undifferentiated tumor cells that don't resemble cells of the tissues of their origin.",
              "Increase in the number of normal cells in a normal arrangement in a tissue or an organ.",
              "Replacement of one type of fully differentiated cell by another in tissues where the second type normally isn't found.",
              "Alteration in the size, shape, and organization of differentiated cells.",
            ],
            answer: 3,
            rationale:
              "Alteration in the size, shape, and organization of differentiated cells Dysplasia refers to an alteration in the size, shape, and organization of differentiated cells. The presence of completely undifferentiated tumor cells that don't resemble cells of the tissues of their origin is called anaplasia. An increase in the number of normal cells in a normal arrangement in a tissue or an organ is called hyperplasia. Replacement of one type of fully differentiated cell by another in tissues where the second type normally isn't found is called metaplasia.",
          },
          {
            id: "q21",
            question:
              "During a routine checkup, Nurse Mariane assesses a male client with acquired immunodeficiency syndrome (AIDS) for signs and symptoms of cancer. What is the most common AIDS-related cancer?",
            choices: [
              "Squamous cell carcinoma",
              "Multiple myeloma",
              "Leukemia",
              "Kaposi's sarcoma",
            ],
            answer: 3,
            rationale:
              "Kaposi's sarcoma Kaposi's sarcoma is the most common cancer associated with AIDS. Squamous cell carcinoma, multiple myeloma, and leukemia may occur in anyone and aren't associated specifically with AIDS.",
          },
          {
            id: "q22",
            question:
              "Ricardo is scheduled for a prostatectomy, and the anesthesiologist plans to use a spinal (subarachnoid) block during surgery. In the operating room, the nurse positions the client according to the anesthesiologist's instructions. Why does the client require special positioning for this type of anesthesia?",
            choices: [
              "To prevent confusion",
              "To prevent seizures",
              "To prevent cerebrospinal fluid (CSF) leakage",
              "To prevent cardiac arrhythmias",
            ],
            answer: 2,
            rationale:
              "To prevent cerebrospinal fluid (CSF) leakage The client receiving a subarachnoid block requires special positioning to prevent CSF leakage and headache and to ensure proper anesthetic distribution. Proper positioning doesn't help prevent confusion, seizures, or cardiac arrhythmias.",
          },
          {
            id: "q23",
            question:
              "A male client had a nephrectomy 2 days ago and is now complaining of abdominal pressure and nausea. The first nursing action should be to:",
            choices: [
              "Auscultate bowel sounds. 312",
              "Palpate the abdomen.",
              "Change the client's position.",
              "Insert a rectal tube.",
            ],
            answer: 0,
            rationale:
              "Auscultate bowel sounds. If abdominal distention is accompanied by nausea, the nurse must first auscultate bowel sounds. If bowel sounds are absent, the nurse should suspect gastric or small intestine dilation and these findings must be reported to the physician. Palpation should be avoided postoperatively with abdominal distention. If peristalsis is absent, changing positions and inserting a rectal tube won't relieve the client's discomfort.",
          },
          {
            id: "q24",
            question:
              "Wilfredo with a recent history of rectal bleeding is being prepared for a colonoscopy. How should the nurse Patricia position the client for this test initially?",
            choices: [
              "Lying on the right side with legs straight",
              "Lying on the left side with knees bent",
              "Prone with the torso elevated",
              "Bent over with hands touching the floor",
            ],
            answer: 1,
            rationale:
              "Lying on the left side with knees bent For a colonoscopy, the nurse initially should position the client on the 323 25. 26. 27. 28. left side with knees bent. Placing the client on the right side with legs straight, prone with the torso elevated, or bent over with hands touching the floor wouldn't allow proper visualization of the large intestine.",
          },
          {
            id: "q25",
            question:
              "A male client with inflammatory bowel disease undergoes an ileostomy. On the first day after surgery, Nurse Oliver notes that the client's stoma appears dusky. How should the nurse interpret this finding?",
            choices: [
              "Blood supply to the stoma has been interrupted.",
              "This is a normal finding 1 day after surgery.",
              "The ostomy bag should be adjusted.",
              "An intestinal obstruction has occurred.",
            ],
            answer: 0,
            rationale:
              "Blood supply to the stoma has been interrupted An ileostomy stoma forms as the ileum is brought through the abdominal wall to the surface skin, creating an artificial opening for waste elimination. The stoma should appear cherry red, indicating adequate arterial perfusion. A dusky stoma suggests decreased perfusion, which may result from interruption of the stoma's blood supply and may lead to tissue damage or necrosis. A dusky stoma isn't a normal finding. Adjusting the ostomy bag wouldn't affect stoma color, which depends on blood supply to the area. An intestinal obstruction also wouldn't change stoma color.",
          },
          {
            id: "q26",
            question:
              "Anthony suffers burns on the legs, which nursing intervention helps prevent contractures?",
            choices: [
              "Applying knee splints",
              "Elevating the foot of the bed",
              "Hyperextending the client's palms",
              "Performing shoulder range-of-motion exercises",
            ],
            answer: 0,
            rationale:
              "Applying knee splints Applying knee splints prevents leg contractures by holding the joints in a position of function. Elevating the foot of the bed can't prevent contractures because this action doesn't hold the joints in a position of function. Hyperextending a body part for an extended time is inappropriate because it can cause contractures. Performing shoulder rangeof-motion exercises can prevent contractures in the shoulders, but not in the legs.",
          },
          {
            id: "q27",
            question:
              "Nurse Ron is assessing a client admitted with second- and third-degree burns on the face, arms, and chest. Which finding indicates a potential problem?",
            choices: [
              "Partial pressure of arterial oxygen (PaO2) value of 80 mm Hg.",
              "Urine output of 20 ml/hour.",
              "White pulmonary secretions.",
              "Rectal temperature of 100.6° F (38° C).",
            ],
            answer: 1,
            rationale:
              "Urine output of 20 ml/hour. A urine output of less than 40 ml/hour in a client with burns indicates a fluid volume deficit. This client's PaO2 value falls within the normal range (80 to 100 mm Hg). White pulmonary secretions also are normal. The client's rectal temperature isn't significantly elevated and probably results from the fluid volume deficit.",
          },
          {
            id: "q28",
            question:
              "Mr. Mendoza who has suffered a cerebrovascular accident (CVA) is too weak to move on his own. To help the client avoid pressure ulcers, Nurse Celia should:",
            choices: [
              "Turn him frequently.",
              "Perform passive range-of-motion (ROM) exercises.",
              "Reduce the client's fluid intake.",
              "Encourage the client to use a footboard. 313",
            ],
            answer: 0,
            rationale:
              "Turn him frequently. The most important intervention to prevent pressure ulcers is frequent position changes, which relieve pressure on the skin and underlying tissues. If pressure isn't relieved, 29. 30. 31. capillaries become occluded, reducing circulation and oxygenation of the tissues and resulting in cell death and ulcer formation. During passive ROM exercises, the nurse moves each joint through its range of movement, which improves joint mobility and circulation to the affected area but doesn't prevent pressure ulcers. Adequate hydration is necessary to maintain healthy skin and ensure tissue repair. A footboard prevents plantar flexion and footdrop by maintaining the foot in a dorsiflexed position.",
          },
          {
            id: "q29",
            question:
              "Nurse Maria plans to administer dexamethasone cream to a female client who has dermatitis over the anterior chest. How should the nurse apply this topical agent?",
            choices: [
              "With a circular motion, to enhance absorption.",
              "With an upward motion, to increase blood supply to the affected area",
              "In long, even, outward, and downward strokes in the direction of hair growth",
              "In long, even, outward, and upward strokes in the direction opposite hair growth",
            ],
            answer: 2,
            rationale:
              "In long, even, outward, and downward strokes in the direction of hair growth When applying a topical agent, the nurse should begin at the midline and use long, even, outward, and downward strokes in the direction of hair growth. This application pattern reduces the risk of follicle irritation and skin inflammation.",
          },
          {
            id: "q30",
            question:
              "Nurse Kate is aware that one of the following classes of medication protects the ischemic myocardium by blocking catecholamines and sympathetic nerve stimulation is:",
            choices: [
              "Beta -adrenergic blockers",
              "Calcium channel blocker",
              "Narcotics",
              "Nitrates",
            ],
            answer: 0,
            rationale:
              "Beta -adrenergic blockers Beta-adrenergic blockers work by blocking beta receptors in the myocardium, reducing the response to catecholamines and sympathetic nerve stimulation. They protect the myocardium, helping to reduce the risk of another infraction by decreasing myocardial oxygen demand. Calcium channel blockers reduce the workload of the heart by decreasing the heart rate. Narcotics reduce myocardial oxygen demand, promote vasodilation, and decrease anxiety. Nitrates reduce myocardial oxygen consumption bt decreasing left ventricular end diastolic pressure (preload) and systemic vascular resistance (afterload).",
          },
          {
            id: "q31",
            question:
              "A male client has jugular distention. On what position should the nurse place the head of the bed to obtain the most accurate reading of jugular vein distention?",
            choices: ["High Fowler’s", "Raised 10 degrees", "Raised 30 degrees", "Supine position"],
            answer: 2,
            rationale:
              "Raised 30 degrees Jugular venous pressure is measured with a centimeter ruler to obtain the vertical distance between the sternal angle and the point of highest pulsation with the head of the bed inclined between 15 to 30 degrees. Increased pressure can’t be seen when the client is supine or when the head of the bed is raised 10 degrees because the point that marks the pressure level is above the jaw (therefore, not visible). In 32. 33. 34. 35. 324 high Fowler’s position, the veins would be barely discernible above the clavicle.",
          },
          {
            id: "q32",
            question:
              "The nurse is aware that one of the following classes of medications maximizes cardiac performance in clients with heart failure by increasing ventricular contractility?",
            choices: [
              "Beta-adrenergic blockers",
              "Calcium channel blocker",
              "Diuretics",
              "Inotropic agents",
            ],
            answer: 3,
            rationale:
              "Inotropic agents Inotropic agents are administered to increase the force of the heart’s contractions, thereby increasing ventricular contractility and ultimately increasing cardiac output. Beta-adrenergic blockers and calcium channel blockers decrease the heart rate and ultimately decreased the workload of the heart. Diuretics are administered to decrease the overall vascular volume, also decreasing the workload of the heart.",
          },
          {
            id: "q33",
            question:
              "A male client has a reduced serum high-density lipoprotein (HDL) level and an elevated lowdensity lipoprotein (LDL) level. Which of the following dietary modifications is not appropriate for this client?",
            choices: [
              "Fiber intake of 25 to 30 g daily",
              "Less than 30% of calories from fat",
              "Cholesterol intake of less than 300 mg daily",
              "Less than 10% of calories from saturated fat",
            ],
            answer: 1,
            rationale:
              "Less than 30% of calories from fat A client with low serum HDL and high serum LDL levels should get less than 30% of daily calories from fat. The other modifications are appropriate for this client.",
          },
          {
            id: "q34",
            question:
              "A 37-year-old male client was admitted to the coronary care unit (CCU) 2 days ago with an acute myocardial infarction. Which of the following actions would breach the client confidentiality?",
            choices: [
              "The CCU nurse gives a verbal report to the nurse on the telemetry unit before transferring the client to that unit",
              "The CCU nurse notifies the on-call physician about a change in the client’s condition",
              "The emergency department nurse calls up the latest electrocardiogram results to check the client’s progress.",
              "At the client’s request, the CCU nurse updates the client’s wife on his condition",
            ],
            answer: 2,
            rationale:
              "The emergency department nurse calls up the latest electrocardiogram results to check the client’s progress The emergency department nurse is no longer directly involved with the client’s care and thus has no legal right to information about his present condition. Anyone directly involved in his care (such as the telemetry nurse and the on-call physician) has the right to information about his condition. Because the client requested that the nurse update his wife on his condition, doing so doesn’t breach confidentiality.",
          },
          {
            id: "q35",
            question:
              "A male client arriving in the emergency department is receiving cardiopulmonary resuscitation from paramedics who are giving ventilations through an endotracheal (ET) tube that they placed in the client’s home. During a pause in compressions, the cardiac monitor shows narrow QRS complexes and a heart rate of beats/minute with a palpable pulse. Which of the following actions should the nurse take first?",
            choices: [
              "Start an L.V. line and administer amiodarone (Cardarone), 300 mg L.V. over 10 minutes.",
              "Check endotracheal tube placement.",
              "Obtain an arterial blood gas (ABG) sample.",
              "Administer atropine, 1 mg L.V.",
            ],
            answer: 1,
            rationale:
              "Check endotracheal tube placement. ET tube placement should be confirmed as soon as the client arrives in the emergency department. Once the airways is secured, oxygenation and ventilation should be confirmed using an end-tidal carbon dioxide monitor and pulse oximetry. Next, the nurse should make sure L.V. access is established. If the client experiences symptomatic bradycardia, atropine is administered as ordered 0.5 to 1 mg every 3 to 5 minutes to a total of 3 mg. Then the nurse should try to find the cause of the client’s arrest by obtaining an ABG sample. Amiodarone is indicated for ventricular tachycardia, 36. 37. 38. 39. 40. ventricular fibrillation and atrial flutter – not symptomatic bradycardia.",
          },
          {
            id: "q36",
            question:
              "A female client arrives at the emergency department with chest and stomach pain and a report of black tarry stool for several months. Which of the following order should the nurse Oliver anticipate?",
            choices: [
              "Cardiac monitor, oxygen, creatine kinase and lactate dehydrogenase levels",
              "Prothrombin time, partial thromboplastin time, fibrinogen and fibrin split product values.",
              "Electrocardiogram, complete blood count, testing for occult blood, comprehensive serum metabolic panel.",
              "Electroencephalogram, alkaline phosphatase and aspartate aminotransferase levels, basic serum metabolic panel",
            ],
            answer: 2,
            rationale:
              "Electrocardiogram, complete blood count, testing for occult blood, comprehensive serum metabolic panel. An electrocardiogram evaluates the complaints of chest pain, laboratory tests determines anemia, and the stool test for occult blood determines blood in the stool. Cardiac monitoring, oxygen, and creatine kinase and lactate dehydrogenase levels are appropriate for a cardiac primary problem. A basic metabolic panel and alkaline phosphatase and aspartate aminotransferase levels assess liver function. Prothrombin time, partial thromboplastin time, fibrinogen and fibrin split products are measured to verify bleeding dyscrasias; an electroencephalogram evaluates brain electrical activity.",
          },
          {
            id: "q37",
            question:
              "Macario had coronary artery bypass graft (CABG) surgery 3 days ago. Which of the following conditions is suspected by the nurse when a decrease in platelet count from 230,000 ul to 5,000 ul is noted?",
            choices: [
              "Pancytopenia",
              "Idiopathic thrombocytopemic purpura (ITP)",
              "Disseminated intravascular coagulation (DIC)",
              "Heparin-associated thrombosis and thrombocytopenia (HATT)",
            ],
            answer: 1,
            rationale:
              "Corticosteroids Corticosteroid therapy can decrease antibody production and phagocytosis of the antibody-coated platelets, retaining more functioning platelets. Methotrexate can cause thrombocytopenia. Vitamin K is used to treat an excessive anticoagulate state from warfarin overload, and ASA decreases platelet aggregation.",
          },
          {
            id: "q38",
            question:
              "Instructions for a client with systemic lupus erythematosus (SLE) would include information about which of the following blood dyscrasias?",
            choices: [
              "Dressler’s syndrome",
              "Polycythemia",
              "Essential thrombocytopenia",
              "Von Willebrand’s disease 314",
            ],
            answer: 3,
            rationale:
              "Breath sounds Pneumonia, both viral and fungal, is a common cause of death in clients with neutropenia, so frequent assessment of respiratory rate and breath sounds is required. Although assessing blood pressure, bowel sounds, and heart sounds is important, it won’t help detect pneumonia.",
          },
          {
            id: "q39",
            question:
              "The nurse knows that neurologic complications of multiple myeloma (MM) usually involve which of the following body system?",
            choices: ["Brain", "Muscle spasm", "Renal dysfunction", "Myocardial irritability"],
            answer: 1,
            rationale:
              "Muscle spasm Back pain or paresthesia in the lower extremities may indicate impending spinal cord compression from a spinal tumor. This should be recognized and treated promptly as progression of the tumor may result in paraplegia. The other 46. 47. 48. 49. 50. 51. options, which reflect parts of the nervous system, aren’t usually affected by MM.",
          },
          {
            id: "q40",
            question:
              "Nurse Patricia is aware that the average length of time from human immunodeficiency virus (HIV) infection to the development of acquired immunodeficiency syndrome (AIDS)?",
            choices: ["Less than 5 years", "5 to 7 years", "10 years", "More than 10 years"],
            answer: 2,
            rationale:
              "10 years Epidermiologic studies show the average time from initial contact with HIV to the development of AIDS is 10 years.",
          },
          {
            id: "q41",
            question:
              "An 18-year-old male client admitted with heat stroke begins to show signs of disseminated intravascular coagulation (DIC). Which of the following laboratory findings is most consistent with DIC?",
            choices: [
              "Low platelet count",
              "Elevated fibrinogen levels",
              "Low levels of fibrin degradation products",
              "Reduced prothrombin time",
            ],
            answer: 0,
            rationale:
              "Low platelet count In DIC, platelets and clotting factors are consumed, resulting in microthrombi and excessive bleeding. As clots form, fibrinogen levels decrease and the prothrombin time increases. Fibrin degeneration products increase as fibrinolysis takes places.",
          },
          {
            id: "q42",
            question:
              "Mario comes to the clinic complaining of fever, drenching night sweats, and unexplained weight loss over the past 3 months. Physical examination reveals a single enlarged supraclavicular lymph node. Which of the following is the most probable diagnosis?",
            choices: ["Influenza", "Sickle cell anemia", "Leukemia", "Hodgkin’s disease 315"],
            answer: 3,
            rationale:
              "Hodgkin’s disease Hodgkin’s disease typically causes fever night sweats, weight loss, and lymph mode enlargement. Influenza doesn’t last for months. Clients with sickle cell anemia manifest signs and symptoms of chronic anemia with pallor of the mucous membrane, fatigue, and decreased tolerance for exercise; they don’t show fever, night sweats, weight loss or lymph node enlargement. Leukemia doesn’t cause lymph node enlargement.",
          },
          {
            id: "q43",
            question:
              "A male client with a gunshot wound requires an emergency blood transfusion. His blood type is AB negative. Which blood type would be the safest for him to receive?",
            choices: [
              "AB Rh-positive",
              "A Rh-positive",
              "A Rh-negative",
              "O Rh-positive Situation: Stacy is diagnosed with acute lymphoid leukemia (ALL) and beginning chemotherapy.",
            ],
            answer: 2,
            rationale:
              "A Rh-negative Human blood can sometimes contain an inherited D antigen. Persons with the D antigen have Rh-positive blood type; those lacking the antigen have Rhnegative blood. It’s important that a person with Rh- negative blood receives Rh-negative blood. If Rh-positive blood is administered to an Rh-negative person, the recipient develops anti-Rh agglutinins, and sub sequent transfusions with Rhpositive blood may cause serious reactions with clumping and hemolysis of red blood cells.",
          },
          {
            id: "q44",
            question:
              "Stacy is discharged from the hospital following her chemotherapy treatments. Which statement of Stacy’s mother indicated that she understands when she will contact the physician?",
            choices: [
              "“I should contact the physician if Stacy has difficulty in sleeping”.",
              "“I will call my doctor if Stacy has persistent vomiting and diarrhea”.",
              "“My physician should be called if Stacy is irritable and unhappy”.",
              "“Should Stacy have continued hair loss, I need to call the doctor”.",
            ],
            answer: 1,
            rationale:
              "“I will call my doctor if Stacy has persistent vomiting and diarrhea”. Persistent (more than 24 hours) vomiting, anorexia, and diarrhea are signs of toxicity and the patient should stop the medication and notify the health care provider. The other manifestations are expected side effects of chemotherapy.",
          },
          {
            id: "q45",
            question:
              "Stacy’s mother states to the nurse that it is hard to see Stacy with no hair. The best response for the nurse is:",
            choices: [
              "“Stacy looks very nice wearing a hat”.",
              "“You should not worry about her hair, just be glad that she is alive”.",
              "“Yes it is upsetting. But try to cover up your feelings when you are with her or else she may be upset”.",
              "“This is only temporary; Stacy will regrow new hair in 3-6 months, but may be different in texture”.",
            ],
            answer: 3,
            rationale:
              "“This is only temporary; Stacy will re-grow new hair in 3-6 months, but may be different in texture”. 52. 53. 54. 55. 326 This is the appropriate response. The nurse should help the mother how to cope with her own feelings regarding the child’s disease so as not to affect the child negatively. When the hair grows back, it is still of the same color and texture.",
          },
          {
            id: "q46",
            question:
              "Stacy has beginning stomatitis. To promote oral hygiene and comfort, the nurse in-charge should:",
            choices: [
              "Provide frequent mouthwash with normal saline.",
              "Apply viscous Lidocaine to oral ulcers as needed.",
              "Use lemon glycerine swabs every 2 hours.",
              "Rinse mouth with Hydrogen Peroxide.",
            ],
            answer: 1,
            rationale:
              "Apply viscous Lidocaine to oral ulcers as needed. Stomatitis can cause pain and this can be relieved by applying topical anesthetics such as lidocaine before mouth care. When the patient is already comfortable, the nurse can proceed with providing the patient with oral rinses of saline solution mixed with equal part of water or hydrogen peroxide mixed water in 1:3 concentrations to promote oral hygiene. Every 2-4 hours.",
          },
          {
            id: "q47",
            question:
              "During the administration of chemotherapy agents, Nurse Oliver observed that the IV site is red and swollen, when the IV is touched Stacy shouts in pain. The first nursing action to take is:",
            choices: [
              "Notify the physician",
              "Flush the IV line with saline solution",
              "Immediately discontinue the infusion",
              "Apply an ice pack to the site, followed by warm compress.",
            ],
            answer: 2,
            rationale:
              "Immediately discontinue the infusion Edema or swelling at the IV site is a sign that the needle has been dislodged and the IV solution is leaking into the tissues causing the edema. The patient feels pain as the nerves are irritated by pressure and the IV solution. The first action of the nurse would be to discontinue the infusion right away to prevent further edema and other complication.",
          },
          {
            id: "q48",
            question:
              "The term “blue bloater” refers to a male client which of the following conditions?",
            choices: [
              "Adult respiratory distress syndrome (ARDS)",
              "Asthma",
              "Chronic obstructive bronchitis",
              "Emphysema",
            ],
            answer: 2,
            rationale:
              "Chronic obstructive bronchitis Clients with chronic obstructive bronchitis appear bloated; they have large barrel chest and peripheral edema, cyanotic nail beds, and at times, circumoral cyanosis. Clients with ARDS are acutely short of breath and frequently need intubation for mechanical ventilation and large amount of oxygen. Clients with asthma don’t exhibit characteristics of chronic disease, and clients with emphysema appear pink and cachectic.",
          },
          {
            id: "q49",
            question:
              "The term “pink puffer” refers to the female client with which of the following conditions?",
            choices: [
              "Adult respiratory distress syndrome (ARDS)",
              "Asthma",
              "Chronic obstructive bronchitis",
              "Emphysema",
            ],
            answer: 3,
            rationale:
              "Emphysema Because of the large amount of energy it takes to breathe, clients with emphysema are usually cachectic. They’re pink and usually breathe through pursed lips, hence the term “puffer.” Clients with ARDS are usually acutely short of breath. Clients with asthma don’t have any particular characteristics, and clients with 56. 57. 58. 59. 60. 61. chronic obstructive bronchitis are bloated and cyanotic in appearance.",
          },
          {
            id: "q50",
            question:
              "Jose is in danger of respiratory arrest following the administration of a narcotic analgesic. An arterial blood gas value is obtained. Nurse Oliver would expect the paco2 to be which of the following values?",
            choices: ["15 mm Hg", "30 mm Hg", "40 mm Hg", "80 mm Hg"],
            answer: 3,
            rationale:
              "80 mm Hg A client about to go into respiratory arrest will have inefficient ventilation and will be retaining carbon dioxide. The value expected would be around 80 mm Hg. All other values are lower than expected.",
          },
          {
            id: "q51",
            question:
              "Timothy’s arterial blood gas (ABG) results are as follows; pH 7.16; Paco2 80 mm Hg; Pao2 46 mm Hg; HCO3- 24mEq/L; Sao2 81%. This ABG result represents which of the following conditions?",
            choices: [
              "Metabolic acidosis",
              "Metabolic alkalosis",
              "Respiratory acidosis",
              "Respiratory alkalosis",
            ],
            answer: 2,
            rationale:
              "Respiratory acidosis Because Paco2 is high at 80 mm Hg and the metabolic measure, HCO3- is normal, the client has respiratory acidosis. The pH is less than 7.35, academic, which eliminates metabolic and respiratory alkalosis as possibilities. If the HCO3- was below 22 mEq/L the client would have metabolic acidosis.",
          },
          {
            id: "q52",
            question:
              "Norma has started a new drug for hypertension. Thirty minutes after she takes the drug, she develops chest tightness and becomes short of breath and tachypneic. She has a decreased level of consciousness. These signs indicate which of the following conditions?",
            choices: [
              "Asthma attack",
              "Pulmonary embolism",
              "Respiratory failure",
              "Rheumatoid arthritis Situation: Mr. Gonzales was admitted to the hospital with ascites and jaundice. To rule out cirrhosis of the liver:",
            ],
            answer: 2,
            rationale:
              "Respiratory failure The client was reacting to the drug with respiratory signs of impending anaphylaxis, which could lead to eventually respiratory failure. Although the signs are also related to an asthma attack or a pulmonary embolism, consider the new drug first. Rheumatoid arthritis doesn’t manifest these signs.",
          },
          {
            id: "q53",
            question: "Which laboratory test indicates liver cirrhosis?",
            choices: [
              "Decreased red blood cell count",
              "Decreased serum acid phosphate level",
              "Elevated white blood cell count",
              "Elevated serum aminotransferase 60. 60.The biopsy of Mr. Gonzales confirms the diagnosis of cirrhosis. Mr. Gonzales is at increased risk for excessive bleeding primarily because of: a. Impaired clotting mechanism b. Varix formation c. Inadequate nutrition d. Trauma of invasive procedure",
            ],
            answer: 3,
            rationale:
              "Elevated serum aminotransferase Hepatic cell death causes release of liver enzymes alanine aminotransferase (ALT), aspartate aminotransferase (AST) and lactate dehydrogenase (LDH) into the circulation. Liver cirrhosis is a chronic and irreversible disease of the liver characterized by generalized inflammation and fibrosis of the liver tissues.",
          },
          {
            id: "q54",
            question:
              "When Mr. Gonzales regained consciousness, the physician orders 50 ml of Lactose p.o. every 2 hours. Mr. Gozales develops diarrhea. The nurse best action would be:",
            choices: [
              "“I’ll see if your physician is in the hospital”.",
              "“Maybe you’re reacting to the drug; I will withhold the next dose”.",
              "“I’ll lower the dosage as ordered so the drug causes only 2 to 4 stools a day”.",
              "“Frequently, bowel movements are needed to reduce sodium level”.",
            ],
            answer: 1,
            rationale:
              "Altered level of consciousness Changes in behavior and level of consciousness are the first sins of hepatic encephalopathy. Hepatic encephalopathy is caused by liver failure and develops when the liver is unable to convert protein metabolic product ammonia to urea. This results in accumulation of ammonia and other toxic in the blood that damages the cells. 327 62. 63. 64.",
          },
          {
            id: "q55",
            question:
              "Which of the following groups of symptoms indicates a ruptured abdominal aortic aneurysm?",
            choices: [
              "Lower back pain, increased blood pressure, decreased red blood cell (RBC) count, increased white blood (WBC) count.",
              "Severe lower back pain, decreased blood pressure, decreased RBC count, increased WBC count.",
              "Severe lower back pain, decreased blood pressure, decreased RBC count, 316 decreased RBC count, decreased WBC count.",
              "Intermitted lower back pain, decreased blood pressure, decreased RBC count, increased WBC count.",
            ],
            answer: 2,
            rationale:
              "“I’ll lower the dosage as ordered so the drug causes only 2 to 4 stools a day”. Lactulose is given to a patients with hepatic encephalopathy to reduce absorption of ammonia in the intestines by binding with ammonia and promoting more frequent bowel movements. If the patient experience diarrhea, it indicates over dosage and the nurse must reduce the amount of medication given to the patient. The stool will be mashy or soft. Lactulose is also very sweet and may cause cramping and bloating.",
          },
          {
            id: "q56",
            question:
              "After undergoing a cardiac catheterization, Tracy has a large puddle of blood under his buttocks. Which of the following steps should the nurse take first?",
            choices: [
              "Call for help.",
              "Obtain vital signs",
              "Ask the client to “lift up”",
              "Apply gloves and assess the groin site",
            ],
            answer: 1,
            rationale:
              "Severe lower back pain, decreased blood pressure, decreased RBC count, increased WBC count. Severe lower back pain indicates an aneurysm rupture, secondary to pressure being applied within the abdominal cavity. When ruptured occurs, the pain is constant because it can’t be alleviated until the aneurysm is repaired. Blood pressure decreases due to the loss of blood. After the aneurysm ruptures, the vasculature is interrupted and blood volume is lost, so blood pressure wouldn’t increase. For the same reason, the RBC count is decreased – not increased. The WBC count increases as cell migrate to the site of injury.",
          },
          {
            id: "q57",
            question:
              "The nurse is aware that the following terms used to describe reduced cardiac output and perfusion impairment due to ineffective pumping of the heart is:",
            choices: [
              "Anaphylactic shock",
              "Cardiogenic shock",
              "Distributive shock",
              "Myocardial infarction (MI)",
            ],
            answer: 3,
            rationale:
              "Percutaneous transluminal coronary angioplasty (PTCA) PTCA can alleviate the blockage and restore blood flow and oxygenation. An echocardiogram is a noninvasive 66. 67. 68. 69. 70. diagnosis test. Nitroglycerin is an oral sublingual medication. Cardiac catheterization is a diagnostic tool – not a treatment.",
          },
          {
            id: "q58",
            question:
              "Nurse Nikki knows that laboratory results supports the diagnosis of systemic lupus erythematosus (SLE) is:",
            choices: [
              "Elavated serum complement level",
              "Thrombocytosis, elevated sedimentation rate",
              "Pancytopenia, elevated antinuclear antibody (ANA) titer",
              "Leukocysis, elevated blood urea nitrogen (BUN) and creatinine levels",
            ],
            answer: 3,
            rationale:
              "It inhibits reabsorption of sodium and water in the loop of Henle. Furosemide is a loop diuretic that inhibits sodium and water reabsorption in the loop Henle, thereby causing a decrease in blood pressure. Vasodilators cause dilation of peripheral blood vessels, directly relaxing vascular smooth muscle and decreasing blood pressure. Adrenergic blockers decrease sympathetic cardioacceleration and decrease blood pressure. Angiotensinconverting enzyme inhibitors decrease blood pressure due to their action on angiotensin.",
          },
          {
            id: "q59",
            question:
              "A 66-year-old client has been complaining of sleeping more, increased urination, anorexia, weakness, irritability, depression, and bone pain that interferes with her going outdoors. Based on these assessment findings, the nurse would suspect which of the following disorders?",
            choices: [
              "Diabetes mellitus",
              "Diabetes insipidus",
              "Hypoparathyroidism",
              "Hyperparathyroidism",
            ],
            answer: 0,
            rationale:
              "\"I can avoid getting sick by not becoming dehydrated and by paying attention to my need to urinate, drink, or eat more than usual.\" Inadequate fluid intake during hyperglycemic episodes often leads to HHNS. By recognizing the signs of hyperglycemia (polyuria, polydipsia, and polyphagia) and increasing fluid intake, the client may prevent HHNS. Drinking a glass of nondiet soda would be appropriate for hypoglycemia. A client whose diabetes is controlled with oral 329 79. 80. 81. 82. antidiabetic agents usually doesn't need to monitor blood glucose levels. A highcarbohydrate diet would exacerbate the client's condition, particularly if fluid intake is low.",
          },
          {
            id: "q60",
            question:
              "A male client is scheduled for a transsphenoidal hypophysectomy to remove a pituitary tumor. Preoperatively, the nurse should assess for potential complications by doing which of the following?",
            choices: [
              "Testing for ketones in the urine",
              "Testing urine specific gravity",
              "Checking temperature every 4 hours",
              "Performing capillary glucose testing every 4 hours",
            ],
            answer: 2,
            rationale:
              "High corticotropin and high cortisol levels A corticotropin-secreting pituitary tumor would cause high corticotropin and high cortisol levels. A high corticotropin level with a low cortisol level and a low corticotropin level with a low cortisol level would be associated with hypocortisolism. Low corticotropin and high cortisol levels would be seen if there was a primary defect in the adrenal glands.",
          },
          {
            id: "q61",
            question:
              "Capillary glucose monitoring is being performed every 4 hours for a client diagnosed with diabetic ketoacidosis. Insulin is administered using a scale of regular insulin according to glucose results. At 2 p.m., the client has a capillary glucose level of 250 mg/dl for which he receives 8 U of regular insulin. Nurse Mariner should expect the dose's:",
            choices: [
              "onset to be at 2 p.m. and its peak to be at 3 p.m.",
              "onset to be at 2:15 p.m. and its peak to be at 3 p.m.",
              "onset to be at 2:30 p.m. and its peak to be at 4 p.m.",
              "onset to be at 4 p.m. and its peak to be at 6 p.m.",
            ],
            answer: 3,
            rationale:
              "Performing capillary glucose testing every 4 hours The nurse should perform capillary glucose testing every 4 hours because excess cortisol may cause insulin resistance, placing the client at risk for hyperglycemia. Urine ketone testing isn't indicated because the client does secrete insulin and, therefore, isn't at risk for ketosis. Urine specific gravity isn't indicated because although fluid balance can be compromised, it usually isn't 83. 84. 85. 86. dangerously imbalanced. Temperature regulation may be affected by excess cortisol and isn't an accurate indicator of infection.",
          },
          {
            id: "q62",
            question:
              "The physician orders laboratory tests to confirm hyperthyroidism in a female client with classic signs and symptoms of this disorder. Which test result would confirm the diagnosis?",
            choices: [
              "No increase in the thyroid-stimulating hormone (TSH) level after 30 minutes during the TSH stimulation test",
              "A decreased TSH level",
              "An increase in the TSH level after 30 minutes during the TSH stimulation test",
              "Below-normal levels of serum triiodothyronine (T3) and serum thyroxine (T4) as detected by radioimmunoassay",
            ],
            answer: 2,
            rationale:
              "onset to be at 2:30 p.m. and its peak to be at 4 p.m. Regular insulin, which is a short-acting insulin, has an onset of 15 to 30 minutes and a peak of 2 to 4 hours. Because the nurse gave the insulin at 2 p.m., the expected onset would be from 2:15 p.m. to 2:30 p.m. and the peak from 4 p.m. to 6 p.m.",
          },
          {
            id: "q63",
            question:
              "Nurse Sarah expects to note an elevated serum glucose level in a client with hyperosmolar hyperglycemic nonketotic syndrome (HHNS). Which other laboratory finding should the nurse anticipate?",
            choices: [
              "Elevated serum acetone level",
              "Serum ketone bodies",
              "Serum alkalosis",
              "Below-normal serum potassium level",
            ],
            answer: 1,
            rationale:
              "\"Rotate injection sites within the same anatomic region, not among different regions.\" The nurse should instruct the client to rotate injection sites within the same anatomic region. Rotating sites among different regions may cause excessive day-to-day variations in the blood glucose level; also, insulin absorption differs from one region to the next. Insulin should be injected only into healthy tissue lacking large blood vessels, nerves, or scar tissue or other deviations. Injecting insulin into areas of hypertrophy may delay absorption. The client shouldn't inject insulin into areas of lipodystrophy (such as hypertrophy or atrophy); to prevent lipodystrophy, the client should rotate injection sites systematically. Exercise speeds drug absorption, so the client shouldn't inject insulin into sites above muscles that will be exercised heavily.",
          },
          {
            id: "q64",
            question:
              "For a client with Graves' disease, which nursing intervention promotes comfort?",
            choices: [
              "Restricting intake of oral fluids",
              "Placing extra blankets on the client's bed",
              "Limiting intake of high-carbohydrate foods",
              "Maintaining room temperature in the low-normal range",
            ],
            answer: 3,
            rationale:
              "Below-normal serum potassium level 87. 88. 89. 90. 91. 330 A client with HHNS has an overall body deficit of potassium resulting from diuresis, which occurs secondary to the hyperosmolar, hyperglycemic state caused by the relative insulin deficiency. An elevated serum acetone level and serum ketone bodies are characteristic of diabetic ketoacidosis. Metabolic acidosis, not serum alkalosis, may occur in HHNS.",
          },
          {
            id: "q65",
            question:
              "Johnny a firefighter was involved in extinguishing a house fire and is being treated to smoke inhalation. He develops severe hypoxia 48 hours after the incident, requiring intubation and mechanical ventilation. He most likely has developed which of the following conditions?",
            choices: [
              "Adult respiratory distress syndrome (ARDS)",
              "Atelectasis",
              "Bronchitis",
              "Pneumonia",
            ],
            answer: 1,
            rationale:
              "Calcium and phosphorous In osteoporosis, bones lose calcium and phosphate salts, becoming porous, brittle, and abnormally vulnerable to fracture. Sodium and potassium aren't involved in the development of steoporosis.",
          },
          {
            id: "q66",
            question:
              "A 67-year-old client develops acute shortness of breath and progressive hypoxia requiring right femur. The hypoxia was probably caused by which of the following conditions?",
            choices: ["Asthma attack", "Atelectasis", "Bronchitis", "Fat embolism"],
            answer: 0,
            rationale:
              "Adult respiratory distress syndrome (ARDS) Severe hypoxia after smoke inhalation is typically related to ARDS. The other conditions listed aren’t typically associated with smoke inhalation and severe hypoxia.",
          },
          {
            id: "q67",
            question:
              "A client with shortness of breath has decreased to absent breath sounds on the right side, from the apex to the base. Which of the following conditions would best explain this?",
            choices: [
              "Acute asthma",
              "Chronic bronchitis",
              "Pneumonia",
              "Spontaneous pneumothorax",
            ],
            answer: 3,
            rationale:
              "Fat embolism Long bone fractures are correlated with fat emboli, which cause shortness of breath and hypoxia. It’s unlikely the client has developed asthma or bronchitis without a previous history. 92. 93. 94. 95. 96. 97. He could develop atelectasis but it typically doesn’t produce progressive hypoxia.",
          },
          {
            id: "q68",
            question:
              "A 62-year-old male client was in a motor vehicle accident as an unrestrained driver. He’s now in the emergency department complaining of difficulty of breathing and chest pain. On auscultation of his lung field, no breath sounds are present in the upper lobe. This client may have which of the following conditions?",
            choices: ["Bronchitis", "Pneumonia", "Pneumothorax", "Tuberculosis (TB)"],
            answer: 3,
            rationale:
              "Spontaneous pneumothorax A spontaneous pneumothorax occurs when the client’s lung collapses, causing an acute decreased in the amount of functional lung used in oxygenation. The sudden collapse was the cause of his chest pain and shortness of breath. An asthma attack would show wheezing breath sounds, and bronchitis would have rhonchi. Pneumonia would have bronchial breath sounds over the area of consolidation.",
          },
          {
            id: "q69",
            question:
              "Aldo with a massive pulmonary embolism will have an arterial blood gas analysis performed to determine the extent of hypoxia. The acid-base disorder that may be present is?",
            choices: [
              "Metabolic acidosis",
              "Metabolic alkalosis",
              "Respiratory acidosis",
              "Respiratory alkalosis",
            ],
            answer: 0,
            rationale:
              "Alveolar damage in the infracted area The infracted area produces alveolar damage that can lead to the production of bloody sputum, sometimes in massive amounts. Clot formation usually occurs in the legs. There’s a loss of lung parenchyma and subsequent scar tissue formation.",
          },
        ],
      },
      {
        id: "msn-test-v-care-of-clients-with-physiologic--2",
        title: "TEST V - Care of Clients with Physiologic and Psychosocial	Alterations",
        description: "97 questions from the PNLE reviewer.",
        questions: [
          {
            id: "q1",
            question:
              "Tony refuses his evening dose of Haloperidol (Haldol), then becomes extremely agitated in the dayroom while other clients are watching television. He begins cursing and throwing furniture. Nurse Oliver first action is to:",
            choices: [
              "Check the client’s medical record for an order for an as-needed I.M. dose of medication for agitation.",
              "Place the client in full leather restraints.",
              "Call the attending physician and report the behavior.",
              "Remove all other clients from the dayroom.",
            ],
            answer: 3,
            rationale:
              "Remove all other clients from the dayroom. The nurse’s first priority is to consider the safety of the clients in the therapeutic setting. The other actions are appropriate responses after ensuring the safety of other clients.",
          },
          {
            id: "q2",
            question:
              "Tina who is manic, but not yet on medication, comes to the drug treatment center. The nurse would not let this client join the group session because:",
            choices: [
              "The client is disruptive.",
              "The client is harmful to self.",
              "The client is harmful to others.",
              "The client needs to be on medication first.",
            ],
            answer: 0,
            rationale:
              "The client is disruptive. Group activity provides too much stimulation, which the client will not be able to handle (harmful to self) and as a result will be disruptive to others.",
          },
          {
            id: "q3",
            question:
              "Dervid, an adolescent boy was admitted for substance abuse and hallucinations. The client’s mother asks Nurse Armando to talk with his husband when he arrives at the hospital. The mother says that she is afraid of what the father might say to the boy. The most appropriate nursing intervention would be to:",
            choices: [
              "Inform the mother that she and the father can work through this problem themselves.",
              "Refer the mother to the hospital social worker.",
              "Agree to talk with the mother and the father together. 332",
              "Suggest that the father and son work things out.",
            ],
            answer: 2,
            rationale:
              "Agree to talk with the mother and the father together. By agreeing to talk with both parents, the nurse can provide emotional support and further assess and validate the family’s needs.",
          },
          {
            id: "q4",
            question:
              "What is Nurse John likely to note in a male client being admitted for alcohol withdrawal?",
            choices: [
              "Perceptual disorders.",
              "Impending coma.",
              "Recent alcohol intake.",
              "Depression with mutism.",
            ],
            answer: 0,
            rationale:
              "Perceptual disorders. Frightening visual hallucinations are especially common in clients experiencing alcohol withdrawal.",
          },
          {
            id: "q5",
            question:
              "Aira has taken amitriptyline HCL (Elavil) for 3 days, but now complains that it “doesn’t help” and refuses to take it. What should the nurse say or do?",
            choices: [
              "Withhold the drug.",
              "Record the client’s response.",
              "Encourage the client to tell the doctor.",
              "Suggest that it takes a while before seeing the results.",
            ],
            answer: 3,
            rationale:
              "Suggest that it takes a while before seeing the results. The client needs a specific response; that it takes 2 to 3 weeks (a delayed effect) until the therapeutic blood level is reached.",
          },
          {
            id: "q6",
            question:
              "Dervid, an adolescent has a history of truancy from school, running away from home and “barrowing” other people’s things without their permission. The adolescent denies stealing, rationalizing instead that as long as no one was using the items, it was all right to borrow them. It is important for the nurse to understand the psychodynamically, this behavior may be largely attributed to a developmental defect related to the:",
            choices: ["Id", "Ego", "Superego", "Oedipal complex"],
            answer: 2,
            rationale:
              "Superego This behavior shows a weak sense of moral consciousness. According to Freudian theory, personality disorders stem from a weak superego.",
          },
          {
            id: "q7",
            question:
              "In preparing a female client for electroconvulsive therapy (ECT), Nurse Michelle knows that succinylcoline (Anectine) will be administered for which therapeutic effect?",
            choices: [
              "Short-acting anesthesia",
              "Decreased oral and respiratory secretions.",
              "Skeletal muscle paralysis.",
              "Analgesia.",
            ],
            answer: 2,
            rationale:
              "Skeletal muscle paralysis. Anectine is a depolarizing muscle relaxant causing paralysis. It is used to reduce the intensity of muscle contractions during the convulsive stage, thereby reducing the risk of bone fractures or dislocation.",
          },
          {
            id: "q8",
            question:
              "Nurse Gina is aware that the dietary implications for a client in manic phase of bipolar disorder is:",
            choices: [
              "Serve the client a bowl of soup, buttered French bread, and apple slices.",
              "Increase calories, decrease fat, and decrease protein.",
              "Give the client pieces of cut-up steak, carrots, and an apple. 333",
              "Increase calories, carbohydrates, and protein.",
            ],
            answer: 3,
            rationale:
              "Increase calories, carbohydrates, and protein. This client increased protein for tissue building and increased calories to replace what is burned up (usually via carbohydrates).",
          },
          {
            id: "q9",
            question:
              "What parental behavior toward a child during an admission procedure should cause Nurse Ron to suspect child abuse?",
            choices: [
              "Flat affect",
              "Expressing guilt",
              "Acting overly solicitous toward the child.",
              "Ignoring the child.",
            ],
            answer: 2,
            rationale:
              "Acting overly solicitous toward the child. This behavior is an example of reaction formation, a coping mechanism.",
          },
          {
            id: "q10",
            question:
              "Nurse Lynnette notices that a female client with obsessive-compulsive disorder washes her hands for long periods each day. How should the nurse respond to this compulsive behavior?",
            choices: [
              "By designating times during which the client can focus on the behavior.",
              "By urging the client to reduce the frequency of the behavior as rapidly as possible.",
              "By calling attention to or attempting to prevent the behavior.",
              "By discouraging the client from verbalizing anxieties.",
            ],
            answer: 0,
            rationale:
              "By designating times during which the client can focus on the behavior. The nurse should designate times during which the client can focus on the compulsive behavior or obsessive thoughts. The nurse should urge the client to reduce the frequency of the compulsive behavior gradually, not rapidly. She shouldn't call attention to or try to prevent the behavior. Trying to prevent the behavior may cause pain and terror in the client. The nurse should encourage the client to verbalize anxieties to help distract attention from the compulsive behavior.",
          },
          {
            id: "q11",
            question:
              "After seeking help at an outpatient mental health clinic, Ruby who was raped while walking her dog is diagnosed with posttraumatic stress disorder (PTSD). Three months later, Ruby returns to the clinic, complaining of fear, loss of control, and helpless feelings. Which nursing intervention is most appropriate for Ruby?",
            choices: [
              "Recommending a high-protein, low-fat diet.",
              "Giving sleep medication, as prescribed, to restore a normal sleep- wake cycle.",
              "Allowing the client time to heal.",
              "Exploring the meaning of the traumatic event with the client.",
            ],
            answer: 3,
            rationale:
              "Exploring the meaning of the traumatic event with the client. The client with PTSD needs encouragement to examine and understand the meaning of the traumatic event and consequent losses. Otherwise, symptoms may worsen and the client may become depressed or engage in self-destructive behavior such as substance abuse. The client must explore the meaning of the event and won't heal without this, no matter how much time passes. Behavioral techniques, such as relaxation therapy, may help decrease the client's anxiety and induce sleep. The physician may prescribe antianxiety agents or antidepressants cautiously to avoid dependence; sleep medication is rarely appropriate. A special diet isn't indicated unless the client also has an eating disorder or a nutritional problem.",
          },
          {
            id: "q12",
            question:
              'Meryl, age 19, is highly dependent on her parents and fears leaving home to go away to college. Shortly before the semester starts, she complains that her legs are paralyzed and is rushed to the emergency department. When physical examination rules out a physical cause for her paralysis, the physician admits her to the psychiatric unit where she is diagnosed with conversion disorder. Meryl asks the nurse, "Why has this happened to me?" What is the nurse\'s best response?',
            choices: [
              '"You\'ve developed this paralysis so you can stay with your parents. You must deal with this conflict if you want to walk again."',
              '"It must be awful not to be able to move your legs. You may feel better if you realize the problem is psychological, not physical."',
              "\"Your problem is real but there is no physical basis for it. We'll work on what is going on in your life to find out why it's happened.\"",
              '"It isn\'t uncommon for someone with your personality to develop a conversion disorder during times of stress."',
            ],
            answer: 2,
            rationale:
              "\"Your problem is real but there is no physical basis for it. We'll work on what is going on in your life to find out why it's happened.\" The nurse must be honest with the client by telling her that the paralysis has no physiologic cause while also conveying empathy and acknowledging that her symptoms are real. The client will benefit from psychiatric treatment, which will help her understand the underlying cause of her symptoms. After the psychological conflict is resolved, her symptoms will disappear. Saying that it must be awful not to be able to move her legs wouldn't answer the client's question; knowing that the cause is psychological wouldn't necessarily make her feel better. Telling her that she has developed paralysis to avoid leaving her parents or that her personality caused her disorder wouldn't help her understand and resolve the underlying conflict.",
          },
          {
            id: "q13",
            question:
              "Nurse Krina knows that the following drugs have been known to be effective in treating obsessive-compulsive disorder (OCD):",
            choices: [
              "benztropine (Cogentin) and diphenhydramine (Benadryl).",
              "chlordiazepoxide (Librium) and diazepam (Valium)",
              "fluvoxamine (Luvox) and clomipramine (Anafranil)",
              "divalproex (Depakote) and lithium (Lithobid)",
            ],
            answer: 2,
            rationale:
              "fluvoxamine (Luvox) and clomipramine (Anafranil) The antidepressants fluvoxamine and clomipramine have been effective in the treatment of OCD. Librium and Valium may be helpful in treating anxiety related to OCD but aren't drugs of choice to treat the illness. The other medications mentioned aren't effective in the treatment of OCD.",
          },
          {
            id: "q14",
            question:
              "Alfred was newly diagnosed with anxiety disorder. The physician prescribed buspirone (BuSpar). The nurse is aware that the teaching instructions for newly prescribed buspirone should include which of the following?",
            choices: [
              "A warning about the drugs delayed therapeutic effect, which is from 14 to 30 days.",
              "A warning about the incidence of neuroleptic malignant syndrome (NMS).",
              "A reminder of the need to schedule blood work in 1 week to check blood levels of the drug.",
              "A warning that immediate sedation can occur with a resultant drop in pulse.",
            ],
            answer: 0,
            rationale:
              "A warning about the drugs delayed therapeutic effect, which is from 14 to 30 days. The client should be informed that the drug's therapeutic effect might not be reached for 14 to 30 days. The client must be instructed to continue taking the drug as directed. Blood level checks aren't necessary. NMS hasn't been reported with this drug, but tachycardia is frequently reported.",
          },
          {
            id: "q15",
            question:
              "Richard with agoraphobia has been symptomfree for 4 months. Classic signs and symptoms of phobias include:",
            choices: [
              "Insomnia and an inability to concentrate.",
              "Severe anxiety and fear.",
              "Depression and weight loss.",
              "Withdrawal and failure to distinguish reality from fantasy.",
            ],
            answer: 1,
            rationale:
              "Severe anxiety and fear. Phobias cause severe anxiety (such as a panic attack) that is out of proportion to the threat of the feared object or situation. Physical signs and symptoms of phobias include profuse sweating, poor motor control, tachycardia, and elevated blood pressure. Insomnia, an inability to concentrate, and weight loss are common in depression. Withdrawal and failure to distinguish reality from fantasy occur in schizophrenia.",
          },
          {
            id: "q16",
            question:
              "Which medications have been found to help reduce or eliminate panic attacks?",
            choices: [
              "b. c. d. Antidepressants Anticholinergics Antipsychotics Mood stabilizers 18. A client seeks care because she feels depressed and has gained weight. To treat her atypical depression, the physician prescribes tranylcypromine sulfate (Parnate), 10 mg by mouth twice per day. When this drug is used to treat atypical depression, what is its onset of action? a. 1 to 2 days",
              "3 to 5 days",
              "6 to 8 days",
              "10 to 14 days",
            ],
            answer: 0,
            rationale:
              "Antidepressants Tricyclic and monoamine oxidase (MAO) inhibitor antidepressants have been found to be effective in treating clients with panic attacks. Why these drugs help control panic attacks isn't clearly understood. Anticholinergic agents, which are smoothmuscle relaxants, relieve physical symptoms of anxiety but don't relieve the anxiety itself. Antipsychotic drugs are inappropriate because clients who experience panic attacks aren't psychotic. Mood stabilizers aren't indicated because panic attacks are rarely associated with mood changes.",
          },
          {
            id: "q17",
            question:
              "A 65 years old client is in the first stage of Alzheimer's disease. Nurse Patricia should plan to focus this client's care on:",
            choices: [
              "Offering nourishing finger foods to help maintain the client's nutritional status.",
              "Providing emotional support and individual counseling.",
              "Monitoring the client to prevent minor illnesses from turning into major problems.",
              "Suggesting new activities for the client and family to do together.",
            ],
            answer: 1,
            rationale:
              "Providing emotional support and individual counseling. 344 Clients in the first stage of Alzheimer's disease are aware that something is happening to them and may become overwhelmed and frightened. Therefore, nursing care typically focuses on providing emotional support and individual counseling. The other options are appropriate during the second stage of Alzheimer's disease, when the client needs continuous monitoring to prevent minor illnesses from progressing into major problems and when maintaining adequate nutrition may become a challenge. During this stage, offering nourishing finger foods helps clients to feed themselves and maintain adequate nutrition.",
          },
          {
            id: "q18",
            question:
              "The nurse is assessing a client who has just been admitted to the emergency department. Which signs would suggest an overdose of an antianxiety agent?",
            choices: [
              "Combativeness, sweating, and confusion",
              "Agitation, hyperactivity, and grandiose ideation",
              "Emotional lability, euphoria, and impaired memory",
              "Suspiciousness, dilated pupils, and increased blood pressure",
            ],
            answer: 2,
            rationale:
              "Emotional lability, euphoria, and impaired memory Signs of antianxiety agent overdose include emotional lability, euphoria, and impaired memory. Phencyclidine overdose can cause combativeness, sweating, and confusion. Amphetamine overdose can result in agitation, hyperactivity, and grandiose ideation. Hallucinogen overdose can produce suspiciousness, dilated pupils, and increased blood pressure.",
          },
          {
            id: "q19",
            question:
              "The nurse is caring for a client diagnosed with antisocial personality disorder. The client has a history of fighting, cruelty to animals, and stealing. Which of the following traits would the nurse be most likely to uncover during assessment?",
            choices: [
              "History of gainful employment",
              "Frequent expression of guilt regarding antisocial behavior",
              "Demonstrated ability to maintain close, stable relationships 334",
              "A low tolerance for frustration",
            ],
            answer: 3,
            rationale:
              "A low tolerance for frustration Clients with an antisocial personality disorder exhibit a low tolerance for frustration, emotional immaturity, and a lack of impulse control. They commonly have a history of unemployment, miss work repeatedly, and quit work without other plans for employment. They don't feel guilt about their behavior and commonly perceive themselves as victims. They also display a lack of responsibility for the outcome of their actions. Because of a lack of trust in others, clients with antisocial personality disorder commonly have difficulty developing stable, close relationships.",
          },
          {
            id: "q20",
            question:
              "Nurse Amy is providing care for a male client undergoing opiate withdrawal. Opiate withdrawal causes severe physical discomfort and can be life-threatening. To minimize these effects, opiate users are commonly detoxified with:",
            choices: ["Barbiturates", "Amphetamines", "Methadone", "Benzodiazepines"],
            answer: 2,
            rationale:
              "Methadone Methadone is used to detoxify opiate users because it binds with opioid receptors at many sites in the central nervous system but doesn’t have the same deterious effects as other opiates, such as cocaine, heroin, and morphine. Barbiturates, amphetamines, and benzodiazepines are highly addictive and would require detoxification treatment.",
          },
          {
            id: "q21",
            question:
              "Nurse Cristina is caring for a client who experiences false sensory perceptions with no basis in reality. These perceptions are known as:",
            choices: ["Delusions", "Hallucinations", "Loose associations", "Neologisms"],
            answer: 1,
            rationale:
              "Hallucinations Hallucinations are visual, auditory, gustatory, tactile, or olfactory perceptions that have no basis in reality. Delusions are false beliefs, rather than perceptions, that the client 345 accepts as real. Loose associations are rapid shifts among unrelated ideas. Neologisms are bizarre words that have meaning only to the client.",
          },
          {
            id: "q22",
            question:
              "Nurse Marco is developing a plan of care for a client with anorexia nervosa. Which action should the nurse include in the plan?",
            choices: [
              "Restricts visits with the family and friends until the client begins to eat.",
              "Provide privacy during meals.",
              "Set up a strict eating plan for the client.",
              "Encourage the client to exercise, which will reduce her anxiety.",
            ],
            answer: 2,
            rationale:
              "Set up a strict eating plan for the client. Establishing a consistent eating plan and monitoring the client’s weight are very important in this disorder. The family and friends should be included in the client’s care. The client should be monitored during meals-not given privacy. Exercise must be limited and supervised.",
          },
          {
            id: "q23",
            question:
              "Tim is admitted with a diagnosis of delusions of grandeur. The nurse is aware that this diagnosis reflects a belief that one is:",
            choices: [
              "Highly important or famous.",
              "Being persecuted",
              "Connected to events unrelated to oneself",
              "Responsible for the evil in the world.",
            ],
            answer: 0,
            rationale:
              "Highly important or famous. A delusion of grandeur is a false belief that one is highly important or famous. A delusion of persecution is a false belief that one is being persecuted. A delusion of reference is a false belief that one is connected to events unrelated to oneself or a belief that one is responsible for the evil in the world.",
          },
          {
            id: "q24",
            question:
              "Nurse Jen is caring for a male client with manic depression. The plan of care for a client in a manic state would include:",
            choices: [
              "Offering a high-calorie meals and strongly encouraging the client to finish all food.",
              "Insisting that the client remain active through the day so that he’ll sleep at night.",
              "Allowing the client to exhibit hyperactive, demanding, manipulative behavior without setting limits. 335",
              "Listening attentively with a neutral attitude and avoiding power struggles.",
            ],
            answer: 3,
            rationale:
              "Listening attentively with a neutral attitude and avoiding power struggles. The nurse should listen to the client’s requests, express willingness to seriously consider the request, and respond later. The nurse should encourage the client to take short daytime naps because he expends so much energy. The nurse shouldn’t try to restrain the client when he feels the need to move around as long as his activity isn’t harmful. High calorie finger foods should be offered to supplement the client’s diet, if he can’t remain seated long enough to eat a complete meal. The nurse shouldn’t be forced to stay seated at the table to finid=sh a meal. The nurse should set limits in a calm, clear, and self-confident tone of voice.",
          },
          {
            id: "q25",
            question:
              "Ramon is admitted for detoxification after a cocaine overdose. The client tells the nurse that he frequently uses cocaine but that he can control his use if he chooses. Which coping mechanism is he using?",
            choices: ["Withdrawal", "Logical thinking", "Repression", "Denial"],
            answer: 3,
            rationale:
              "Denial Denial is unconscious defense mechanism in which emotional conflict and anxiety is avoided by refusing to acknowledge feelings, desires, impulses, or external facts that are consciously intolerable. Withdrawal is a common response to stress, characterized by apathy. Logical thinking is the ability to think rationally and make responsible decisions, which would lead the client admitting the problem and seeking help. Repression is suppressing past events from the consciousness because of guilty association.",
          },
          {
            id: "q26",
            question:
              "Richard is admitted with a diagnosis of schizotypal personality disorder. hich signs would this client exhibit during social situations?",
            choices: [
              "Aggressive behavior",
              "Paranoid thoughts",
              "Emotional affect",
              "Independence needs",
            ],
            answer: 1,
            rationale:
              "Paranoid thoughts Clients with schizotypal personality disorder experience excessive social anxiety that can lead to paranoid thoughts. Aggressive behavior is uncommon, although these clients may experience agitation with anxiety. Their behavior is emotionally cold with a flattened affect, regardless of the situation. These clients demonstrate a reduced capacity for close or dependent relationships.",
          },
          {
            id: "q27",
            question:
              "Nurse Mickey is caring for a client diagnosed with bulimia. The most appropriate initial goal for a client diagnosed with bulimia is to:",
            choices: [
              "Avoid shopping for large amounts of food.",
              "Control eating impulses.",
              "Identify anxiety-causing situations",
              "Eat only three meals per day.",
            ],
            answer: 2,
            rationale:
              "Identify anxiety-causing situations Bulimic behavior is generally a maladaptive coping response to stress and underlying issues. The client must identify anxiety-causing situations that stimulate the bulimic behavior and then learn new ways of coping with the anxiety.",
          },
          {
            id: "q28",
            question:
              "Rudolf is admitted for an overdose of amphetamines. When assessing the client, the nurse should expect to see:",
            choices: ["Tension and irritability", "Slow pulse", "Hypotension", "Constipation"],
            answer: 0,
            rationale:
              "Tension and irritability An amphetamine is a nervous system stimulant that is subject to abuse because of its ability to produce wakefulness and euphoria. An overdose increases tension and irritability. Options B and C are incorrect because amphetamines stimulate norepinephrine, which increase the heart rate and blood flow. Diarrhea is a common adverse effect so option D is incorrect.",
          },
          {
            id: "q29",
            question:
              "Nicolas is experiencing hallucinations tells the nurse, “The voices are telling me I’m no good.” The client asks if the nurse hears the voices. The most appropriate response by the nurse would be:",
            choices: [
              "“It is the voice of your conscience, which only you can control.”",
              "“No, I do not hear your voices, but I believe you can hear them”.",
              "“The voices are coming from within you and only you can hear them.”",
              "“Oh, the voices are a symptom of your illness; don’t pay any attention to them.”",
            ],
            answer: 1,
            rationale:
              "“No, I do not hear your voices, but I believe you can hear them”. The nurse, demonstrating knowledge and understanding, accepts the client’s perceptions even though they are hallucinatory.",
          },
          {
            id: "q30",
            question:
              "The nurse is aware that the side effect of electroconvulsive therapy that a client may experience:",
            choices: [
              "Loss of appetite",
              "Postural hypotension",
              "Confusion for a time after treatment",
              "Complete loss of memory for a time",
            ],
            answer: 2,
            rationale:
              "Confusion for a time after treatment The electrical energy passing through the cerebral cortex during ECT results in a temporary state of confusion after treatment.",
          },
          {
            id: "q31",
            question:
              "A dying male client gradually moves toward resolution of feelings regarding impending death. Basing care on the theory of Kubler-Ross, Nurse Trish plans to use nonverbal interventions when assessment reveals that the client is in the:",
            choices: ["Anger stage", "Denial stage", "Bargaining stage", "Acceptance stage"],
            answer: 3,
            rationale:
              "Acceptance stage Communication and intervention during this stage are mainly nonverbal, as when the client gestures to hold the nurse’s hand.",
          },
          {
            id: "q32",
            question: "The outcome that is unrelated to a crisis state is:",
            choices: [
              "Learning more constructive coping skills",
              "Decompensation to a lower level of functioning.",
              "Adaptation and a return to a prior level of functioning.",
              "A higher level of anxiety continuing for more than 3 months.",
            ],
            answer: 3,
            rationale:
              "A higher level of anxiety continuing for more than 3 months. This is not an expected outcome of a crisis because by definition a crisis would be resolved in 6 weeks.",
          },
          {
            id: "q33",
            question:
              "Miranda a psychiatric client is to be discharged with orders for haloperidol (haldol) therapy. When developing a teaching plan for discharge, the nurse should include cautioning the client against:",
            choices: [
              "Driving at night",
              "Staying in the sun",
              "Ingesting wines and cheeses",
              "Taking medications containing aspirin",
            ],
            answer: 1,
            rationale:
              "Staying in the sun Haldol causes photosensitivity. Severe sunburn can occur on exposure to the sun.",
          },
          {
            id: "q34",
            question:
              "Jen a nursing student is anxious about the upcoming board examination but is able to study intently and does not become distracted by a roommate’s talking and loud music. The student’s ability to ignore distractions and to focus on studying demonstrates:",
            choices: [
              "Mild-level anxiety",
              "Panic-level anxiety",
              "Severe-level anxiety",
              "Moderate-level anxiety",
            ],
            answer: 3,
            rationale:
              "Moderate-level anxiety A moderately anxious person can ignore peripheral events and focuses on central concerns.",
          },
          {
            id: "q35",
            question:
              "When assessing a premorbid personality characteristic of a client with a major depression, it would be unusual for the nurse to find that this client demonstrated:",
            choices: ["Rigidity", "Stubbornness", "Diverse interest", "Over meticulousness"],
            answer: 2,
            rationale:
              "Diverse interest Before onset of depression, these clients usually have very narrow, limited interest.",
          },
          {
            id: "q36",
            question:
              "Nurse Krina recognizes that the suicidal risk for depressed client is greatest:",
            choices: [
              "As their depression begins to improve",
              "When their depression is most severe",
              "Before any type of treatment is started",
              "As they lose interest in the environment",
            ],
            answer: 0,
            rationale:
              "As their depression begins to improve At this point the client may have enough energy to plan and execute an attempt.",
          },
          {
            id: "q37",
            question:
              "Nurse Kate would expect that a client with vascular dementis would experience:",
            choices: [
              "Loss of remote memory related to anoxia",
              "Loss of abstract thinking related to emotional state",
              "Inability to concentrate related to decreased stimuli",
              "Disturbance in recalling recent events related to cerebral hypoxia.",
            ],
            answer: 3,
            rationale:
              "Disturbance in recalling recent events related to cerebral hypoxia. Cell damage seems to interfere with registering input stimuli, which affects the ability to register and recall recent events; vascular dementia is related to multiple vascular lesions of the cerebral cortex and subcortical structure.",
          },
          {
            id: "q38",
            question:
              "Josefina is to be discharged on a regimen of lithium carbonate. In the teaching plan for discharge the nurse should include:",
            choices: [
              "Advising the client to watch the diet carefully",
              "Suggesting that the client take the pills with milk",
              "Reminding the client that a CBC must be done once a month.",
              "Encouraging the client to have blood levels checked as ordered.",
            ],
            answer: 3,
            rationale:
              "Encouraging the client to have blood levels checked as ordered. Blood levels must be checked monthly or bimonthly when the client is on maintenance therapy because there is only a small range between therapeutic and toxic levels.",
          },
          {
            id: "q39",
            question:
              "The psychiatrist orders lithium carbonate 600 mg p.o t.i.d for a female client. Nurse Katrina would be aware that the teachings about the side effects of this drug were understood when the client state, “I will call my doctor immediately if I notice any:",
            choices: [
              "Sensitivity to bright light or sun",
              "Fine hand tremors or slurred speech",
              "Sexual dysfunction or breast enlargement",
              "Inability to urinate or difficulty when urinating",
            ],
            answer: 1,
            rationale:
              "Fine hand tremors or slurred speech These are common side effects of lithium carbonate.",
          },
          {
            id: "q40",
            question:
              "Nurse Mylene recognizes that the most important factor necessary for the establishment of trust in a critical care area is:",
            choices: ["Privacy", "Respect", "Empathy", "Presence 336"],
            answer: 3,
            rationale:
              "Presence The constant presence of a nurse provides emotional support because the client knows that someone is attentive and available in case of an emergency.",
          },
          {
            id: "q41",
            question:
              "When establishing an initial nurse-client relationship, Nurse Hazel should explore with the client the:",
            choices: [
              "Client’s perception of the presenting problem.",
              "Occurrence of fantasies the client may experience.",
              "Details of any ritualistic acts carried out by the client",
              "Client’s feelings when external; controls are instituted.",
            ],
            answer: 0,
            rationale:
              "Client’s perception of the presenting problem. The nurse can be most therapeutic by starting where the client is, because it is the client’s concept of the problem that serves as the starting point of the relationship.",
          },
          {
            id: "q42",
            question:
              "Tranylcypromine sulfate (Parnate) is prescribed for a depressed client who has not responded to the tricyclic antidepressants. After teaching the client about the medication, Nurse Marian evaluates that learning has occurred when the client states, “I will avoid:",
            choices: [
              "Citrus fruit, tuna, and yellow vegetables.”",
              "Chocolate milk, aged cheese, and yogurt’”",
              "Green leafy vegetables, chicken, and milk.”",
              "Whole grains, red meats, and carbonated soda.”",
            ],
            answer: 1,
            rationale:
              "Chocolate milk, aged cheese, and yogurt’” These high-tyramine foods, when ingested in the presence of an MAO inhibitor, cause a severe hypertensive response.",
          },
          {
            id: "q43",
            question: "Nurse John is a aware that most crisis situations should resolve in about:",
            choices: ["1 to 2 weeks", "4 to 6 weeks", "4 to 6 months", "6 to 12 months"],
            answer: 1,
            rationale: "4 to 6 weeks Crisis is self-limiting and lasts from 4 to 6 weeks.",
          },
          {
            id: "q44",
            question: "Nurse Judy knows that statistics show that in adolescent suicide behavior:",
            choices: [
              "Females use more dramatic methods than males",
              "Males account for more attempts than do females",
              "Females talk more about suicide before attempting it",
              "Males are more likely to use lethal methods than are females",
            ],
            answer: 3,
            rationale:
              "Males are more likely to use lethal methods than are females This finding is supported by research; females account for 90% of suicide attempts but males are three times more successful because of methods used.",
          },
          {
            id: "q45",
            question:
              "Dervid with paranoid schizophrenia repeatedly uses profanity during an activity therapy session. Which response by the nurse would be most appropriate?",
            choices: [
              '"Your behavior won\'t be tolerated. Go to your room immediately." 337',
              '"You\'re just doing this to get back at me for making you come to therapy."',
              '"Your cursing is interrupting the activity. Take time out in your room for 10 minutes."',
              "\"I'm disappointed in you. You can't control yourself even for a few minutes.\"",
            ],
            answer: 2,
            rationale:
              "\"Your cursing is interrupting the activity. Take time out in your room for 10 minutes.\" The nurse should set limits on client behavior to ensure a comfortable environment for all clients. The nurse should accept hostile or quarrelsome client outbursts within limits without becoming personally offended, as in 346 option A. Option B is incorrect because it implies that the client’s actions reflect feelings toward the staff instead of the client's own misery. Judgmental remarks, such as option D, may decrease the client's self-esteem.",
          },
          {
            id: "q46",
            question:
              "Nurse Maureen knows that the nonantipsychotic medication used to treat some clients with schizoaffective disorder is:",
            choices: [
              "phenelzine (Nardil)",
              "chlordiazepoxide (Librium)",
              "lithium carbonate (Lithane)",
              "imipramine (Tofranil)",
            ],
            answer: 2,
            rationale:
              "lithium carbonate (Lithane) Lithium carbonate, an antimania drug, is used to treat clients with cyclical schizoaffective disorder, a psychotic disorder once classified under schizophrenia that causes affective symptoms, including maniclike activity. Lithium helps control the affective component of this disorder. Phenelzine is a monoamine oxidase inhibitor prescribed for clients who don't respond to other antidepressant drugs such as imipramine. Chlordiazepoxide, an antianxiety agent, generally is contraindicated in psychotic clients. Imipramine, primarily considered an antidepressant agent, is also used to treat clients with agoraphobia and that undergoing cocaine detoxification.",
          },
          {
            id: "q47",
            question:
              "Which information is most important for the nurse Trinity to include in a teaching plan for a male schizophrenic client taking clozapine (Clozaril)?",
            choices: [
              "Monthly blood tests will be necessary.",
              "Report a sore throat or fever to the physician immediately.",
              "Blood pressure must be monitored for hypertension.",
              "Stop the medication when symptoms subside.",
            ],
            answer: 1,
            rationale:
              "Report a sore throat or fever to the physician immediately. A sore throat and fever are indications of an infection caused by agranulocytosis, a potentially life-threatening complication of clozapine. Because of the risk of agranulocytosis, white blood cell (WBC) counts are necessary weekly, not monthly. If the WBC count drops below 3,000/μl, the medication must be stopped. Hypotension may occur in clients taking this medication. Warn the client to stand up slowly to avoid dizziness from orthostatic hypotension. The medication should be continued, even when symptoms have been controlled. If the medication must be stopped, it should be slowly tapered over 1 to 2 weeks and only under the supervision of a physician.",
          },
          {
            id: "q48",
            question:
              "Ricky with chronic schizophrenia takes neuroleptic medication is admitted to the psychiatric unit. Nursing assessment reveals rigidity, fever, hypertension, and diaphoresis. These findings suggest which life- threatening reaction:",
            choices: [
              "Tardive dyskinesia.",
              "Dystonia.",
              "Neuroleptic malignant syndrome.",
              "Akathisia.",
            ],
            answer: 2,
            rationale:
              "Neuroleptic malignant syndrome. The client's signs and symptoms suggest neuroleptic malignant syndrome, a lifethreatening reaction to neuroleptic medication that requires immediate treatment. Tardive dyskinesia causes involuntary movements of the tongue, mouth, facial muscles, and arm and leg muscles. Dystonia is characterized by cramps and rigidity of the tongue, face, neck, and back muscles. Akathisia causes restlessness, anxiety, and jitteriness.",
          },
          {
            id: "q49",
            question:
              "Which nursing intervention would be most appropriate if a male client develop orthostatic hypotension while taking amitriptyline (Elavil)?",
            choices: [
              "Consulting with the physician about substituting a different type of antidepressant.",
              "Advising the client to sit up for 1 minute before getting out of bed.",
              "Instructing the client to double the dosage until the problem resolves.",
              "Informing the client that this adverse reaction should disappear within 1 week.",
            ],
            answer: 1,
            rationale:
              "Advising the client to sit up for 1 minute before getting out of bed. To minimize the effects of amitriptyline-induced orthostatic hypotension, 347 the nurse should advise the client to sit up for 1 minute before getting out of bed. Orthostatic hypotension commonly occurs with tricyclic antidepressant therapy. In these cases, the dosage may be reduced or the physician may prescribe nortriptyline, another tricyclic antidepressant. Orthostatic hypotension disappears only when the drug is discontinued.",
          },
          {
            id: "q50",
            question:
              "Mr. Cruz visits the physician's office to seek treatment for depression, feelings of hopelessness, poor appetite, insomnia, fatigue, low self- esteem, poor concentration, and difficulty making decisions. The client states that these symptoms began at least 2 years ago. Based on this report, the nurse Tyfany suspects:",
            choices: [
              "Cyclothymic disorder.",
              "Atypical affective disorder.",
              "Major depression.",
              "Dysthymic disorder.",
            ],
            answer: 3,
            rationale:
              "Dysthymic disorder. Dysthymic disorder is marked by feelings of depression lasting at least 2 years, accompanied by at least two of the following symptoms: sleep disturbance, appetite disturbance, low energy or fatigue, low selfesteem, poor concentration, difficulty making decisions, and hopelessness. These symptoms may be relatively continuous or separated by intervening periods of normal mood that last a few days to a few weeks. Cyclothymic disorder is a chronic mood disturbance of at least 2 years' duration marked by numerous periods of depression and hypomania. Atypical affective disorder is characterized by manic signs and symptoms. Major depression is a recurring, persistent sadness or loss of interest or pleasure in almost all activities, with signs and symptoms recurring for at least 2 weeks.",
          },
          {
            id: "q51",
            question:
              "After taking an overdose of phenobarbital (Barbita), Mario is admitted to the emergency department. Dr. Trinidad prescribes activated charcoal (Charcocaps) to be administered by mouth immediately. Before administering the dose, the nurse verifies the dosage ordered. What is the usual minimum dose of activated charcoal?",
            choices: [
              "5 g mixed in 250 ml of water",
              "15 g mixed in 500 ml of water",
              "30 g mixed in 250 ml of water",
              "60 g mixed in 500 ml of water",
            ],
            answer: 2,
            rationale:
              "30 g mixed in 250 ml of water The usual adult dosage of activated charcoal is 5 to 10 times the estimated weight of the drug or chemical ingested, or a minimum dose of 30 g, mixed in 250 ml of water. Doses less than this will be ineffective; doses greater than this can increase the risk of adverse reactions, although toxicity doesn't occur with activated charcoal, even at the maximum dose.",
          },
          {
            id: "q52",
            question:
              "What herbal medication for depression, widely used in Europe, is now being prescribed in the United States?",
            choices: ["Ginkgo biloba", "Echinacea", "St. John's wort", "Ephedra"],
            answer: 2,
            rationale:
              "St. John's wort St. John's wort has been found to have serotonin-elevating properties, similar to prescription antidepressants. Ginkgo biloba is prescribed to enhance mental acuity. Echinacea has immune-stimulating properties. Ephedra is a naturally occurring stimulant that is similar to ephedrine.",
          },
          {
            id: "q53",
            question:
              "Cely with manic episodes is taking lithium. Which electrolyte level should the nurse check before administering this medication?",
            choices: ["Clcium", "Sodium", "Chloride", "Potassium"],
            answer: 1,
            rationale:
              "Sodium Lithium is chemically similar to sodium. If sodium levels are reduced, such as from sweating or diuresis, lithium will be reabsorbed by the kidneys, increasing the risk of toxicity. Clients taking lithium shouldn't restrict their intake of sodium and should drink adequate amounts of fluid each day. The other electrolytes are important for normal body functions but sodium is most important to the absorption of lithium.",
          },
          {
            id: "q54",
            question:
              "Nurse Josefina is caring for a client who has been diagnosed with delirium. Which statement about delirium is true?",
            choices: [
              "It's characterized by an acute onset and lasts about 1 month.",
              "It's characterized by a slowly evolving onset and lasts about 1 week.",
              "It's characterized by a slowly evolving onset and lasts about 1 month.",
              "It's characterized by an acute onset and lasts hours to a number of days.",
            ],
            answer: 3,
            rationale:
              "It's characterized by an acute onset and lasts hours to a number of days Delirium has an acute onset and typically can last from several hours to several days.",
          },
          {
            id: "q55",
            question:
              "Edward, a 66 year old client with slight memory impairment and poor concentration is diagnosed with primary degenerative dementia of the Alzheimer's type. Early signs of this dementia include subtle personality changes and withdrawal from social interactions. To assess for progression to the middle stage of Alzheimer's disease, the nurse should observe the client for:",
            choices: [
              "Occasional irritable outbursts.",
              "Impaired communication.",
              "Lack of spontaneity.",
              "Inability to perform self-care activities.",
            ],
            answer: 1,
            rationale:
              "Impaired communication. Initially, memory impairment may be the only cognitive deficit in a client with Alzheimer's disease. During the early stage of this disease, subtle personality changes may also be present. However, other than occasional irritable outbursts and lack of spontaneity, the client is usually cooperative and exhibits socially appropriate behavior. Signs of advancement to the middle stage of Alzheimer's disease include exacerbated cognitive impairment with obvious personality changes and impaired communication, such as inappropriate conversation, actions, and responses. During the late stage, the client can't perform self-care activities and may become mute.",
          },
          {
            id: "q56",
            question:
              "Isabel with a diagnosis of depression is started on imipramine (Tofranil), 75 mg by mouth at bedtime. The nurse should tell the client that:",
            choices: [
              "This medication may be habit forming and will be discontinued as soon as the client feels better.",
              "This medication has no serious adverse effects.",
              "The client should avoid eating such foods as aged cheeses, yogurt, and chicken livers while taking the medication.",
              "This medication may initially cause tiredness, which should become less bothersome over time.",
            ],
            answer: 3,
            rationale:
              "This medication may initially cause tiredness, which should become less bothersome over time. Sedation is a common early adverse effect of imipramine, a tricyclic antidepressant, and usually decreases as tolerance develops. Antidepressants aren't habit forming and don't cause physical or psychological dependence. However, after a long course of high-dose therapy, the dosage should be decreased gradually to avoid mild withdrawal symptoms. Serious adverse effects, although rare, include myocardial infarction, heart failure, and tachycardia. Dietary restrictions, such as avoiding aged cheeses, yogurt, and chicken livers, are necessary for a client taking a monoamine oxidase inhibitor, not a tricyclic antidepressant.",
          },
          {
            id: "q57",
            question:
              "Kathleen is admitted to the psychiatric clinic for treatment of anorexia nervosa. To promote the client's physical health, the nurse should plan to:",
            choices: [
              "Severely restrict the client's physical activities.",
              "Weigh the client daily, after the evening meal.",
              "Monitor vital signs, serum electrolyte levels, and acid-base balance.",
              "Instruct the client to keep an accurate record of food and fluid intake.",
            ],
            answer: 2,
            rationale:
              "Monitor vital signs, serum electrolyte levels, and acid-base balance. An anorexic client who requires hospitalization is in poor physical condition from starvation and may die as a result of arrhythmias, hypothermia, malnutrition, infection, or cardiac abnormalities secondary to electrolyte imbalances. Therefore, monitoring the client's vital signs, serum electrolyte level, and acid base balance is crucial. Option A may worsen anxiety. Option B is incorrect because a weight obtained after breakfast is more accurate than one obtained after the evening meal. Option D would reward the client with attention for not eating and reinforce the control issues that are central to the underlying psychological problem; also, the client may record food and fluid intake inaccurately.",
          },
          {
            id: "q58",
            question:
              "Celia with a history of polysubstance abuse is admitted to the facility. She complains of nausea and vomiting 24 hours after admission. The nurse assesses the client and notes piloerection, pupillary dilation, and lacrimation. The nurse suspects that the client is going through which of the following withdrawals?",
            choices: [
              "Alcohol withdrawal",
              "Cannibis withdrawal",
              "Cocaine withdrawal",
              "Opioid withdrawal 338",
            ],
            answer: 3,
            rationale:
              "Opioid withdrawal The symptoms listed are specific to opioid withdrawal. Alcohol withdrawal would show elevated vital signs. There is no real withdrawal from cannibis. Symptoms of cocaine withdrawal include depression, anxiety, and agitation.",
          },
          {
            id: "q59",
            question:
              "Mr. Garcia, an attorney who throws books and furniture around the office after losing a case is referred to the psychiatric nurse in the law firm's employee assistance program. Nurse Beatriz knows that the client's behavior most likely represents the use of which defense mechanism?",
            choices: ["Regression", "Projection", "Reaction-formation", "Intellectualization"],
            answer: 0,
            rationale:
              "Regression An adult who throws temper tantrums, such as this one, is displaying regressive behavior, or behavior that is appropriate at a younger age. In projection, the client blames someone or something other than the source. In reaction formation, the client acts in opposition to his feelings. In intellectualization, the client overuses rational explanations or abstract thinking to decrease the significance of a feeling or event.",
          },
          {
            id: "q60",
            question:
              "Nurse Anne is caring for a client who has been treated long term with antipsychotic medication. During the assessment, Nurse Anne checks the client for tardive dyskinesia. If tardive dyskinesia is present, Nurse Anne would most likely observe:",
            choices: [
              "Abnormal movements and involuntary movements of the mouth, tongue, and face.",
              "Abnormal breathing through the nostrils accompanied by a “thrill.”",
              "Severe headache, flushing, tremors, and ataxia.",
              "Severe hypertension, migraine headache,",
            ],
            answer: 0,
            rationale:
              "Abnormal movements and involuntary movements of the mouth, tongue, and face. Tardive dyskinesia is a severe reaction associated with long term use of antipsychotic medication. The clinical manifestations include abnormal movements (dyskinesia) and involuntary movements of the mouth, tongue (fly catcher tongue), and face.",
          },
          {
            id: "q61",
            question:
              "Dennis has a lithium level of 2.4 mEq/L. The nurse immediately would assess the client for which of the following signs or symptoms?",
            choices: ["Weakness", "Diarrhea", "Blurred vision", "Fecal incontinence"],
            answer: 2,
            rationale:
              "Blurred vision At lithium levels of 2 to 2.5 mEq/L the client will experienced blurred vision, muscle twitching, severe hypotension, and persistent nausea and vomiting. With levels between 1.5 and 2 mEq/L the client experiencing vomiting, diarrhea, muscle weakness, ataxia, dizziness, slurred speech, and confusion. At lithium levels of 2.5 to 3 mEq/L or higher, urinary and fecal incontinence occurs, as well as seizures, cardiac dysrythmias, peripheral vascular collapse, and death.",
          },
          {
            id: "q62",
            question:
              "Nurse Jannah is monitoring a male client who has been placed inrestraints because of violent behavior. Nurse determines that it will be safe to remove the restraints when:",
            choices: [
              "The client verbalizes the reasons for the violent behavior.",
              "The client apologizes and tells the nurse that it will never happen again.",
              "No acts of aggression have been observed within 1 hour after the release of two of the extremity restraints.",
              "The administered medication has taken effect. 339",
            ],
            answer: 2,
            rationale:
              "No acts of aggression have been observed within 1 hour after the release of two of the extremity restraints. The best indicator that the behavior is controlled, if the client exhibits no signs of aggression after partial release of restraints. Options , B, and D do not ensure that the client has controlled the behavior. 348",
          },
          {
            id: "q63",
            question:
              "Nurse Irish is aware that Ritalin is the drug of choice for a child with ADHD. The side effects of the following may be noted by the nurse:",
            choices: [
              "Increased attention span and concentration",
              "Increase in appetite",
              "Sleepiness and lethargy",
              "Bradycardia and diarrhea a. Revealing personal information to the client b. Focusing on the feelings of the client. c. Confronting the client about discrepancies in verbal or non-verbal behavior d. The client feels angry towards the nurse who resembles his mother.",
            ],
            answer: 0,
            rationale:
              "increased attention span and concentration The medication has a paradoxic effect that decreases hyperactivity and impulsivity among children with ADHD. B, C, D. Side effects of Ritalin include anorexia, insomnia, diarrhea and irritability.",
          },
          {
            id: "q64",
            question:
              "Kitty, a 9 year old child has very limited vocabulary and interaction skills. She has an I.Q. of 45. She is diagnosed to have Mental retardation of this classification:",
            choices: ["Profound", "Mild", "Moderate", "Severe"],
            answer: 2,
            rationale:
              "Moderate The child with moderate mental retardation has an I.Q. of 35- 50 Profound Mental retardation has an I.Q. of below 20; Mild mental retardation 50-70 and Severe mental retardation has an I.Q. of 20-35.",
          },
          {
            id: "q65",
            question:
              "Tristan is on Lithium has suffered from diarrhea and vomiting. What should the nurse in-charge do first:",
            choices: [
              "Recognize this as a drug interaction",
              "Give the client Cogentin",
              "Reassure the client that these are common side effects of lithium therapy",
              "Hold the next dose and obtain an order for a stat serum lithium level",
            ],
            answer: 3,
            rationale:
              "Hold the next dose and obtain an order for a stat serum lithium level Diarrhea and vomiting are manifestations of Lithium toxicity. The next dose of lithium should be withheld and test is done to validate the observation. A. The manifestations are not due to drug interaction. B. Cogentin is used to manage the extra pyramidal symptom side effects of antipsychotics. C. The common side effects of Lithium are fine hand tremors, nausea, polyuria and polydipsia.",
          },
          {
            id: "q66",
            question:
              "The therapeutic approach in the care of Armand an autistic child include the following EXCEPT:",
            choices: [
              "Engage in diversionary activities when acting -out",
              "Provide an atmosphere of acceptance",
              "Provide safety measures",
              "Rearrange the environment to activate the child",
            ],
            answer: 3,
            rationale:
              "Rearrange the environment to activate the child The child with autistic disorder does not want change. Maintaining a consistent environment is therapeutic. A. Angry outburst can be re-channeling through safe activities. B. Acceptance enhances a trusting relationship. C. Ensure safety from self-destructive behaviors like head banging and hair pulling.",
          },
          {
            id: "q67",
            question:
              "Jeremy is brought to the emergency room by friends who state that he took something an hour ago. He is actively hallucinating, agitated, with irritated nasal septum.",
            choices: ["Heroin", "Cocaine", "LSD", "Marijuana"],
            answer: 1,
            rationale:
              "cocaine The manifestations indicate intoxication with cocaine, a CNS stimulant. A. Intoxication with heroine is manifested by euphoria then impairment in judgment, attention and the presence of papillary constriction. C. Intoxication with hallucinogen like LSD is manifested by grandiosity, hallucinations, synesthesia and increase in vital signs D. Intoxication with Marijuana, a cannabinoid is manifested by sensation of slowed time, conjunctival redness, social withdrawal, impaired judgment and hallucinations.",
          },
          {
            id: "q68",
            question: "Nurse Pauline is aware that Dementia unlike delirium is characterized by:",
            choices: [
              "Slurred speech",
              "Insidious onset",
              "Clouding of consciousness",
              "Sensory perceptual change",
            ],
            answer: 1,
            rationale:
              "insidious onset Dementia has a gradual onset and progressive deterioration. It causes pronounced memory and cognitive disturbances. A,C and D are all characteristics of delirium.",
          },
          {
            id: "q69",
            question:
              "A 35 year old female has intense fear of riding an elevator. She claims “ As if I will die inside.” The client is suffering from:",
            choices: ["Agoraphobia", "Social phobia", "Claustrophobia", "Xenophobia"],
            answer: 2,
            rationale:
              "Claustrophobia Claustrophobia is fear of closed space. A. Agoraphobia is fear of open space or being a situation where escape is difficult. B. Social phobia is fear of performing in the presence of others in a way that will be humiliating or embarrassing. D. Xenophobia is fear of strangers.",
          },
          {
            id: "q70",
            question:
              "Nurse Myrna develops a counter-transference reaction. This is evidenced by: 73. Nurse Sarah ensures a therapeutic environment for all the client. Which of the following best describes a therapeutic milieu?",
            choices: [
              "A therapy that rewards adaptive behavior",
              "A cognitive approach to change behavior",
              "A living, learning or working environment.",
              "A permissive and congenial environment",
            ],
            answer: 0,
            rationale:
              "Revealing personal information to the client Counter-transference is an emotional reaction of the nurse on the client based on her 349 unconscious needs and conflicts. B and C. These are therapeutic approaches. D. This is transference reaction where a client has an emotional reaction towards the nurse based on her past.",
          },
          {
            id: "q71",
            question:
              "Anthony is very hostile toward one of the staff for no apparent reason. He is manifesting:",
            choices: ["Splitting", "Transference", "Countertransference", "Resistance"],
            answer: 1,
            rationale:
              "Transference Transference is a positive or negative feeling associated with a significant person in the client’s past that are unconsciously assigned to another A. Splitting is a defense mechanism commonly seen in a client with personality disorder in which the world is perceived as all good or all bad C. Countert-transference is a phenomenon where the nurse shifts feelings assigned to someone in her past to the patient D. Resistance is the client’s refusal to submit himself to the care of the nurse",
          },
          {
            id: "q72",
            question:
              "Marielle, 17 years old was sexually attacked while on her way home from school. She is brought to the hospital by her mother. Rape is an example of which type of crisis:",
            choices: ["Situational", "Adventitious", "Developmental", "Internal"],
            answer: 1,
            rationale:
              "Adventitious Adventitious crisis is a crisis involving a traumatic event. It is not part of everyday life. A. Situational crisis is from an external source that upset ones psychological equilibrium C and D. are the same. They are transitional or developmental periods in life",
          },
          {
            id: "q73",
            question:
              "Nurse Greta is aware that the following is classified as an Axis I disorder by the Diagnosis and Statistical Manual of Mental Disorders, Text Revision (DSM-IV-TR) is:",
            choices: [
              "Obesity",
              "Borderline personality disorder",
              "Major depression",
              "Hypertension",
            ],
            answer: 2,
            rationale:
              "Major depression The DSM-IV-TR classifies major depression as an Axis I disorder. Borderline personality disorder as an Axis II; obesity and hypertension, Axis III.",
          },
          {
            id: "q74",
            question:
              "Katrina, a newly admitted is extremely hostile toward a staff member she has just met, without apparent reason. According to Freudian theory, the nurse should suspect that the client is experiencing which of the following phenomena?",
            choices: ["Intellectualization", "Transference", "Triangulation", "Splitting"],
            answer: 1,
            rationale:
              "Transference Transference is the unconscious assignment of negative or positive feelings evoked by a significant person in the client’s past to another person. Intellectualization is a defense mechanism in which the client avoids dealing with emotions by focusing on facts. Triangulation refers to conflicts involving three family members. Splitting is a defense mechanism commonly seen in clients with personality disorder in which the world is perceived as all good or all bad.",
          },
          {
            id: "q75",
            question:
              "An 83year-old male client is in extended care facility is anxious most of the time and frequently complains of a number of vague symptoms that interfere with his ability to eat. These symptoms indicate which of the following disorders?",
            choices: ["Conversion disorder", "Hypochondriasis", "Severe anxiety", "Sublimation"],
            answer: 1,
            rationale:
              "Hypochondriasis Complains of vague physical symptoms that have no apparent medical causes are characteristic of clients with hypochondriasis. In many cases, the GI system is affected. Conversion disorders are characterized by one or more neurologic symptoms. The client’s symptoms don’t suggest severe anxiety. A client experiencing sublimation channels maladaptive feelings or impulses into socially acceptable behavior",
          },
          {
            id: "q76",
            question:
              "Charina, a college student who frequently visited the health center during the past year with multiple vague complaints of GI symptoms before course examinations. Although physical causes have been eliminated, the student continues to express her belief that she has a serious illness. These symptoms are typically of which of the following disorders?",
            choices: [
              "Conversion disorder",
              "Depersonalization",
              "Hypochondriasis",
              "Somatization disorder",
            ],
            answer: 2,
            rationale:
              "Hypochondriasis Hypochodriasis in this case is shown by the client’s belief that she has a serious illness, although pathologic causes have been eliminated. The disturbance usually lasts at least 6 with identifiable life stressor such as, in this case, course examinations. Conversion disorders are characterized by one or more neurologic symptoms. Depersonalization refers to persistent recurrent episodes of feeling detached from one’s self or body. Somatoform disorders generally have a chronic course with few remissions.",
          },
          {
            id: "q77",
            question:
              "Nurse Daisy is aware that the following pharmacologic agents are sedative- hypnotic medication is used to induce sleep for a client experiencing a sleep disorder is:",
            choices: [
              "Triazolam (Halcion)",
              "Paroxetine (Paxil)\\",
              "Fluoxetine (Prozac)",
              "Risperidone (Risperdal)",
            ],
            answer: 0,
            rationale:
              "Triazolam (Halcion) Triazolam is one of a group of sedative hypnotic medication that can be used for a limited time because of the risk of dependence. Paroxetine is a scrotonin-specific reutake inhibitor used for treatment of depression panic disorder, and obsessivecompulsive disorder. Fluoxetine is a scrotoninspecific reuptake inhibitor used for depressive disorders and obsessive-compulsive disorders. Risperidome is indicated for psychotic disorders.",
          },
          {
            id: "q78",
            question:
              "Aldo, with a somatoform pain disorder may obtain secondary gain. Which of the following statement refers to a secondary gain?",
            choices: [
              "It brings some stability to the family",
              "It decreases the preoccupation with the physical illness",
              "It enables the client to avoid some unpleasant activity 340",
              "It promotes emotional support or attention for the client",
            ],
            answer: 3,
            rationale:
              "It promotes emotional support or attention for the client Secondary gain refers to the benefits of the illness that allow the client to receive emotional support or attention. Primary gain enables the client to avoid some unpleasant activity. A dysfunctional family may disregard the real issue, although some conflict is relieved. Somatoform pain disorder is a preoccupation with pain in the absence of physical disease.",
          },
          {
            id: "q79",
            question:
              "Dervid is diagnosed with panic disorder with agoraphobia is talking with the nurse in-charge about the progress made in treatment. Which of the following statements indicates a positive client response?",
            choices: [
              "“I went to the mall with my friends last Saturday”",
              "“I’m hyperventilating only when I have a panic attack”",
              "“Today I decided that I can stop taking my medication”",
              "“Last night I decided to eat more than a bowl of cereal”",
            ],
            answer: 0,
            rationale:
              "“I went to the mall with my friends last Saturday” Clients with panic disorder tent to be socially withdrawn. Going to the mall is a sign of working on avoidance behaviors. Hyperventilating is a key symptom of panic disorder. Teaching breathing control is a major intervention for clients with panic disorder. The client taking medications for panic disorder; such as tricylic antidepressants and benzodiazepines must be weaned off these drugs. Most clients with panic disorder with agoraphobia don’t have nutritional problems.",
          },
          {
            id: "q80",
            question:
              "The effectiveness of monoamine oxidase (MAO) inhibitor drug therapy in a client with posttraumatic stress disorder can be demonstrated by which of the following client self –reports?",
            choices: [
              "“I’m sleeping better and don’t have nightmares”",
              "“I’m not losing my temper as much”",
              "“I’ve lost my craving for alcohol”",
              "I’ve lost my phobia for water”",
            ],
            answer: 0,
            rationale:
              "“I’m sleeping better and don’t have nightmares” MAO inhibitors are used to treat sleep problems, nightmares, and intrusive daytime thoughts in individual with posttraumatic stress disorder. MAO inhibitors aren’t used to help control flashbacks or phobias or to decrease the craving for alcohol.",
          },
          {
            id: "q81",
            question:
              "Mark, with a diagnosis of generalized anxiety disorder wants to stop taking his lorazepam (Ativan). Which of the following important facts should nurse Betty discuss with the client about discontinuing the medication?",
            choices: [
              "Stopping the drug may cause depression",
              "Stopping the drug increases cognitive abilities",
              "Stopping the drug decreases sleeping difficulties",
              "Stopping the drug can cause withdrawal symptoms",
            ],
            answer: 3,
            rationale:
              "Stopping the drug can cause withdrawal symptoms Stopping antianxiety drugs such as benzodiazepines can cause the client to have withdrawal symptoms. Stopping a benzodiazepine doesn’t tend to cause depression, increase cognitive abilities, or decrease sleeping difficulties.",
          },
          {
            id: "q82",
            question:
              "Jennifer, an adolescent who is depressed and reported by his parents as having difficulty in school is brought to the community mental health center to be evaluated. Which of the following other health problems would the nurse suspect?",
            choices: [
              "Anxiety disorder",
              "Behavioral difficulties",
              "Cognitive impairment",
              "Labile moods 341",
            ],
            answer: 1,
            rationale:
              "Behavioral difficulties Adolescents tend to demonstrate severe irritability and behavioral problems rather than simply a depressed mood. Anxiety disorder is more commonly associated with small children rather than with adolescents. Cognitive impairment is typically associated with delirium or dementia. Labile mood is more characteristic of a client with cognitive impairment or bipolar disorder.",
          },
          {
            id: "q83",
            question:
              "Ricardo, an outpatient in psychiatric facility is diagnosed with dysthymic disorder. Which of the following statement about dysthymic disorder is true?",
            choices: [
              "It involves a mood range from moderate depression to hypomania",
              "It involves a single manic depression",
              "It’s a form of depression that occurs in the fall and winter",
              "It’s a mood disorder similar to major depression but of mild to moderate severity",
            ],
            answer: 3,
            rationale:
              "It’s a mood disorder similar to major depression but of mild to moderate severity Dysthymic disorder is a mood disorder similar to major depression but it remains mild to moderate in severity. Cyclothymic disorder is a mood disorder characterized by a mood range 350 from moderate depression to hypomania. Bipolar I disorder is characterized by a single manic episode with no past major depressive episodes. Seasonal- affective disorder is a form of depression occurring in the fall and winter.",
          },
          {
            id: "q84",
            question:
              "The nurse is aware that the following ways in vascular dementia different from Alzheimer’s disease is:",
            choices: [
              "Vascular dementia has more abrupt onset",
              "The duration of vascular dementia is usually brief",
              "Personality change is common in vascular dementia",
              "The inability to perform motor activities occurs in vascular dementia",
            ],
            answer: 0,
            rationale:
              "Vascular dementia has more abrupt onset Vascular dementia differs from Alzheimer’s disease in that it has a more abrupt onset and runs a highly variable course. Personally change is common in Alzheimer’s disease. The duration of delirium is usually brief. The inability to carry out motor activities is common in Alzheimer’s disease.",
          },
          {
            id: "q85",
            question:
              "Loretta, a newly admitted client was diagnosed with delirium and has history of hypertension and anxiety. She had been taking digoxin, furosemide (Lasix), and diazepam (Valium) for anxiety. This client’s impairment may be related to which of the following conditions?",
            choices: [
              "Infection",
              "Metabolic acidosis",
              "Drug intoxication",
              "Hepatic encephalopathy",
            ],
            answer: 2,
            rationale:
              "Drug intoxication This client was taking several medications that have a propensity for producing delirium; digoxin (a digitalis glycoxide), furosemide (a thiazide diuretic), and diazepam (a benzodiazepine). Sufficient supporting data don’t exist to suspect the other options as causes.",
          },
          {
            id: "q86",
            question:
              "Nurse Ron enters a client’s room, the client says, “They’re crawling on my sheets! Get them off my bed!” Which of the following assessment is the most accurate?",
            choices: [
              "The client is experiencing aphasia",
              "The client is experiencing dysarthria",
              "The client is experiencing a flight of ideas",
              "The client is experiencing visual hallucination",
            ],
            answer: 3,
            rationale:
              "The client is experiencing visual hallucination The presence of a sensory stimulus correlates with the definition of a hallucination, which is a false sensory perception. Aphasia refers to a communication problem. Dysarthria is difficulty in speech production. Flight of ideas is rapid shifting from one topic to another.",
          },
          {
            id: "q87",
            question:
              "Which of the following descriptions of a client’s experience and behavior can be assessed as an illusion?",
            choices: [
              "The client tries to hit the nurse when vital signs must be taken",
              "The client says, “I keep hearing a voice telling me to run away”",
              "The client becomes anxious whenever the nurse leaves the bedside",
              "The client looks at the shadow on a wall and tells the nurse she sees frightening faces on the wall.",
            ],
            answer: 3,
            rationale:
              "The client looks at the shadow on a wall and tells the nurse she sees frightening faces on the wall. Minor memory problems are distinguished from dementia by their minor severity and their lack of significant interference with the client’s social or occupational lifestyle. Other options would be included in the history data but don’t directly correlate with the client’s lifestyle.",
          },
          {
            id: "q88",
            question:
              "During conversation of Nurse John with a client, he observes that the client shift from one topic to the next on a regular basis. Which of the following terms describes this disorder?",
            choices: [
              "Flight of ideas",
              "Concrete thinking",
              "Ideas of reference",
              "Loose association",
            ],
            answer: 3,
            rationale:
              "Loose association Loose associations are conversations that constantly shift in topic. Concrete thinking implies highly definitive thought processes. Flight of ideas is characterized by conversation that’s disorganized from the onset. Loose associations don’t necessarily start in a cogently, then becomes loose.",
          },
          {
            id: "q89",
            question:
              "Francis tells the nurse that her coworkers are sabotaging the computer. When the nurse asks questions, the client becomes argumentative. This behavior shows personality traits associated with which of the following personality disorder?",
            choices: ["Antisocial", "Histrionic", "Paranoid", "Schizotypal"],
            answer: 2,
            rationale:
              "Paranoid Because of their suspiciousness, paranoid personalities ascribe malevolent activities to others and tent to be defensive, becoming quarrelsome and argumentative. 351 Clients with antisocial personality disorder can also be antagonistic and argumentative but are less suspicious than paranoid personalities. Clients with histrionic personality disorder are dramatic, not suspicious and argumentative. Clients with schizoid personality disorder are usually detached from other and tend to have eccentric behavior.",
          },
          {
            id: "q90",
            question:
              "Which of the following interventions is important for a Cely experiencing with paranoid personality disorder taking olanzapine (Zyprexa)?",
            choices: [
              "Explain effects of serotonin syndrome",
              "Teach the client to watch for extrapyramidal adverse reaction",
              "Explain that the drug is less affective if the client smokes",
              "Discuss the need to report paradoxical effects such as euphoria",
            ],
            answer: 2,
            rationale:
              "Explain that the drug is less affective if the client smokes Olanzapine (Zyprexa) is less effective for clients who smoke cigarettes. Serotonin syndrome occurs with clients who take a combination of antidepressant medications. Olanzapine doesn’t cause euphoria, and extrapyramidal adverse reactions aren’t a problem. However, the client should be aware of adverse effects such as tardive dyskinesia.",
          },
          {
            id: "q91",
            question:
              "Nurse Alexandra notices other clients on the unit avoiding a client diagnosed with antisocial personality disorder. When discussing appropriate behavior in group therapy, which of the following comments is expected about this client by his peers?",
            choices: [
              "Lack of honesty",
              "Belief in superstition",
              "Show of temper tantrums",
              "Constant need for attention",
            ],
            answer: 0,
            rationale:
              "Lack of honesty Clients with antisocial personality disorder tent to engage in acts of dishonesty, shown by lying. Clients with schizotypal personality disorder tend to be superstitious. Clients with histrionic personality disorders tend to overreact to frustrations and disappointments, have temper tantrums, and seek attention.",
          },
          {
            id: "q92",
            question:
              "Tommy, with dependent personality disorder is working to increase his self- esteem. Which of the following statements by the Tommy shows teaching was successful?",
            choices: [
              "“I’m not going to look just at the negative things about myself”",
              "“I’m most concerned about my level of competence and progress”",
              "“I’m not as envious of the things other people have as I used to be”",
              "“I find I can’t stop myself from taking over things other should be doing”",
            ],
            answer: 0,
            rationale:
              "“I’m not going to look just at the negative things about myself” As the client makes progress on improving self-esteem, self- blame and negative self-evaluation will decrease. Clients with dependent personality disorder tend to feel fragile and inadequate and would be extremely unlikely to discuss their level of competence and progress. These clients focus on self and aren’t envious or jealous. Individuals with dependent personality disorders don’t take over situations because they see themselves as inept and inadequate.",
          },
          {
            id: "q93",
            question:
              "Norma, a 42-year-old client with a diagnosis of chronic undifferentiated schizophrenia lives in a rooming house that has a weekly nursing clinic. She scratches while she tells the nurse she feels creatures eating away at her skin. Which of the following interventions should be done first?",
            choices: [
              "Talk about his hallucinations and fears",
              "Refer him for anticholinergic adverse reactions",
              "Assess for possible physical problems such as rash",
              "Call his physician to get his medication increased to control his psychosis",
            ],
            answer: 2,
            rationale:
              "Assess for possible physical problems such as rash Clients with schizophrenia generally have poor visceral recognition because they live so fully in their fantasy world. They need to have as in-depth assessment of physical complaints that may spill over into their delusional symptoms. Talking with the client won’t provide as assessment of his itching, and itching isn’t as adverse reaction of antipsychotic drugs, calling the physician to get the client’s medication increased doesn’t address his physical complaints.",
          },
          {
            id: "q94",
            question:
              "Ivy, who is on the psychiatric unit is copying and imitating the movements of her primary nurse. During recovery, she says, “I thought the nurse was my mirror. I felt connected only when I saw my nurse.” This behavior is known by which of the following terms?",
            choices: ["Modeling", "Echopraxia", "Ego-syntonicity", "Ritualism"],
            answer: 1,
            rationale:
              "Echopraxia Echopraxia is the copying of another’s behaviors and is the result of the loss of ego boundaries. Modeling is the conscious copying of someone’s behaviors. Ego-syntonicity refers to behaviors that correspond with the individual’s sense of self. Ritualism behaviors are repetitive and compulsive.",
          },
          {
            id: "q95",
            question:
              "Jun approaches the nurse and tells that he hears a voice telling him that he’s evil and deserves to die. Which of the following terms describes the client’s perception?",
            choices: ["Delusion", "Disorganized speech", "Hallucination", "Idea of reference"],
            answer: 2,
            rationale:
              "Hallucination Hallucinations are sensory experiences that are misrepresentations of reality or have no basis in reality. Delusions are beliefs not based in reality. Disorganized speech is characterized by jumping from one topic to the next or using unrelated words. An idea of reference is a belief that an unrelated situation holds special meaning for the client.",
          },
          {
            id: "q96",
            question:
              "Mike is admitted to a psychiatric unit with a diagnosis of undifferentiated schizophrenia. Which of the following defense mechanisms is probably used by mike?",
            choices: ["Projection", "Rationalization", "Regression", "Repression 342"],
            answer: 2,
            rationale:
              "Regression Regression, a return to earlier behavior to reduce anxiety, is the basic defense mechanism in schizophrenia. Projection is a defense mechanism in which one blames others and attempts to justify actions; it’s used primarily by people with paranoid schizophrenia and delusional disorder. Rationalization is a defense mechanism used to justify one’s action. Repression is the basic defense mechanism in the neuroses; it’s an involuntary exclusion of painful thoughts, feelings, or experiences from awareness.",
          },
          {
            id: "q97",
            question:
              "Rocky has started taking haloperidol (Haldol). Which of the following instructions is most appropriate for Ricky before taking haloperidol?",
            choices: [
              "Should report feelings of restlessness or agitation at once",
              "Use a sunscreen outdoors on a yearround basis",
              "Be aware you’ll feel increased energy taking this drug",
              "This drug will indirectly control essential hypertension 343",
            ],
            answer: 0,
            rationale:
              "Should report feelings of restlessness or agitation at once Agitation and restlessness are adverse effect of haloperidol and can be treated with antocholinergic drugs. Haloperidol isn’t likely to cause photosensitivity or control essential hypertension. Although the client may experience increased concentration and activity, these effects are due to a decreased in symptoms, not the drug itself.",
          },
        ],
      },
      {
        id: "msn-medical-surgical-nursing-2",
        title: "MEDICAL SURGICAL NURSING",
        description: "40 questions from the PNLE reviewer.",
        questions: [
          {
            id: "q1",
            question:
              "Marco who was diagnosed with brain tumor was scheduled for craniotomy. In preventing the development of cerebral edema after surgery, the nurse should expect the use of:",
            choices: ["Diuretics", "Antihypertensive", "Steroids", "Anticonvulsants"],
            answer: 2,
            rationale:
              "Glucocorticoids (steroids) are used for their anti-inflammatory action, which decreases the development of edema.",
          },
          {
            id: "q2",
            question:
              "Halfway through the administration of blood, the female client complains of lumbar pain. After stopping the infusion Nurse Hazel should:",
            choices: [
              "Increase the flow of normal saline",
              "Assess the pain further",
              "Notify the blood bank",
              "Obtain vital signs.",
            ],
            answer: 0,
            rationale:
              "The blood must be stopped at once, and then normal saline should be infused to keep the line patent and maintain blood volume.",
          },
          {
            id: "q3",
            question:
              "Nurse Maureen knows that the positive diagnosis for HIV infection is made based on which of the following:",
            choices: [
              "A history of high risk sexual behaviors.",
              "Positive ELISA and western blot tests",
              "Identification of an associated opportunistic infection",
              "Evidence of extreme weight loss and high fever",
            ],
            answer: 1,
            rationale:
              "These tests confirm the presence of HIV antibodies that occur in response to the presence of the human immunodeficiency virus (HIV).",
          },
          {
            id: "q4",
            question:
              "Nurse Maureen is aware that a client who has been diagnosed with chronic renal failure recognizes an adequate amount of high-biologicvalue protein when the food the client selected from the menu was:",
            choices: ["Raw carrots", "Apple juice", "Whole wheat bread", "Cottage cheese"],
            answer: 3,
            rationale:
              "One cup of cottage cheese contains approximately 225 calories, 27g of protein, 9g of fat, 30mg cholesterol, and 6g of carbohydrate. Proteins of high biologic value (HBV) contain optimal levels of amino acids essential for life.",
          },
          {
            id: "q5",
            question:
              "Kenneth who has diagnosed with uremic syndrome has the potential to develop complications. Which among the following complications should the nurse anticipates:",
            choices: [
              "Flapping hand tremors",
              "An elevated hematocrit level",
              "Hypotension",
              "Hypokalemia",
            ],
            answer: 0,
            rationale:
              "Elevation of uremic waste products causes irritation of the nerves, resulting in flapping hand tremors.",
          },
          {
            id: "q6",
            question:
              "Nurse hazel receives emergency laboratory results for a client with chest pain and immediately informs the physician. An increased myoglobin level suggests which of the following?",
            choices: ["Liver disease", "Myocardial damage", "Hypertension", "Cancer"],
            answer: 1,
            rationale:
              "Detection of myoglobin is a diagnostic tool to determine whether myocardial damage has occurred.",
          },
          {
            id: "q7",
            question:
              "Nurse Maureen would expect the client with mitral stenosis would demonstrate symptoms associated with congestion in the:",
            choices: ["Right atrium", "Superior vena cava", "Aorta", "Pulmonary"],
            answer: 3,
            rationale:
              "When mitral stenosis is present, the left atrium has difficulty emptying its contents into the left ventricle because there is no valve to prevent back ward flow into the pulmonary vein, the pulmonary circulation is under pressure.",
          },
          {
            id: "q8",
            question:
              "A client has been diagnosed with hypertension. The nurse priority nursing diagnosis would be:",
            choices: [
              "Ineffective health maintenance",
              "Impaired skin integrity",
              "Deficient fluid volume",
              "Pain",
            ],
            answer: 0,
            rationale:
              "Managing hypertension is the priority for the client with hypertension. Clients with hypertension frequently do not experience pain, deficient volume, or impaired skin integrity. It is the asymptomatic nature of hypertension that makes it so difficult to treat.",
          },
          {
            id: "q9",
            question:
              "Nurse Hazel teaches the client with angina about common expected side effects of nitroglycerin including:",
            choices: ["high blood pressure", "stomach cramps", "headache", "shortness of breath"],
            answer: 2,
            rationale:
              "Because of its widespread vasodilating effects, nitroglycerin often produces side effects such as headache, hypotension and dizziness.",
          },
          {
            id: "q10",
            question:
              "The following are lipid abnormalities. Which of the following is a risk factor for the development of atherosclerosis and PVD?",
            choices: [
              "High levels of low density lipid (LDL) cholesterol",
              "High levels of high density lipid (HDL) cholesterol",
              "Low concentration triglycerides",
              "Low levels of LDL cholesterol. 373",
            ],
            answer: 0,
            rationale:
              "An increased in LDL cholesterol concentration has been documented at risk factor for the development of atherosclerosis. LDL cholesterol is not broken down into the liver but is deposited into the wall of the blood vessels.",
          },
          {
            id: "q11",
            question:
              "Which of the following represents a significant risk immediately after surgery for repair of aortic aneurysm?",
            choices: [
              "Potential wound infection",
              "Potential ineffective coping",
              "Potential electrolyte balance",
              "Potential alteration in renal perfusion",
            ],
            answer: 3,
            rationale:
              "There is a potential alteration in renal perfusion manifested by decreased urine output. The altered renal perfusion may be related to renal artery embolism, prolonged hypotension, or prolonged aortic cross-clamping during the surgery.",
          },
          {
            id: "q12",
            question:
              "Nurse Josie should instruct the client to eat which of the following foods to obtain the best supply of Vitamin B12?",
            choices: ["dairy products", "vegetables", "Grains", "Broccoli"],
            answer: 0,
            rationale: "Good source of vitamin B12 are dairy products and meats.",
          },
          {
            id: "q13",
            question:
              "Karen has been diagnosed with aplastic anemia. The nurse monitors for changes in which of the following physiologic functions?",
            choices: [
              "Bowel function",
              "Peripheral sensation",
              "Bleeding tendencies",
              "Intake and out put",
            ],
            answer: 2,
            rationale:
              "Aplastic anemia decreases the bone marrow production of RBC’s, white blood cells, and platelets. The client is at risk for bruising and bleeding tendencies.",
          },
          {
            id: "q14",
            question:
              "Lydia is scheduled for elective splenectomy. Before the clients goes to surgery, the nurse in charge final assessment would be:",
            choices: ["signed consent", "vital signs", "name band", "empty bladder"],
            answer: 1,
            rationale:
              "An elective procedure is scheduled in advance so that all preparations can be completed ahead of time. The vital signs are the final check that must be completed before the client leaves the room so that continuity of care and assessment is provided for.",
          },
          {
            id: "q15",
            question: "What is the peak age range in acquiring acute lymphocytic leukemia (ALL)?",
            choices: ["4 to 12 years.", "20 to 30 years", "40 to 50 years", "60 60 70 years"],
            answer: 0,
            rationale:
              "The peak incidence of Acute Lymphocytic Leukemia (ALL) is 4 years of age. It is uncommon after 15 years of age.",
          },
          {
            id: "q16",
            question:
              "Marie with acute lymphocytic leukemia suffers from nausea and headache. These clinical manifestations may indicate all of the following except",
            choices: [
              "effects of radiation",
              "chemotherapy side effects",
              "meningeal irritation",
              "gastric distension",
            ],
            answer: 3,
            rationale:
              "Acute Lymphocytic Leukemia (ALL) does not cause gastric distention. It does invade the central nervous system, and clients experience headaches and vomiting from meningeal irritation.",
          },
          {
            id: "q17",
            question:
              "A client has been diagnosed with Disseminated Intravascular Coagulation (DIC). Which of the following is contraindicated with the client?",
            choices: [
              "Administering Heparin",
              "Administering Coumadin",
              "Treating the underlying cause",
              "Replacing depleted blood products",
            ],
            answer: 1,
            rationale:
              "Disseminated Intravascular Coagulation (DIC) has not been found to respond to oral anticoagulants such as Coumadin.",
          },
          {
            id: "q18",
            question:
              "Which of the following findings is the best indication that fluid replacement for the client with hypovolemic shock is adequate?",
            choices: [
              "Urine output greater than 30ml/hr",
              "Respiratory rate of 21 breaths/minute",
              "Diastolic blood pressure greater than 90 mmhg",
              "Systolic blood pressure greater than 110 mmhg",
            ],
            answer: 0,
            rationale:
              "Urine output provides the most sensitive indication of the client’s response to therapy for hypovolemic shock. Urine output should be consistently greater than 30 to 35 mL/hr.",
          },
          {
            id: "q19",
            question:
              "Which of the following signs and symptoms would Nurse Maureen include in teaching plan as an early manifestation of laryngeal cancer?",
            choices: ["Stomatitis", "Airway obstruction", "Hoarseness", "Dysphagia"],
            answer: 2,
            rationale:
              "Early warning signs of laryngeal cancer can vary depending on tumor location. Hoarseness lasting 2 weeks should be evaluated because it is one of the most common warning signs.",
          },
          {
            id: "q20",
            question:
              "Karina a client with myasthenia gravis is to receive immunosuppressive therapy. The nurse understands that this therapy is effective because it:",
            choices: [
              "Promotes the removal of antibodies that impair the transmission of impulses",
              "Stimulates the production of acetylcholine at the neuromuscular junction.",
              "Decreases the production of autoantibodies that attack the acetylcholine receptors.",
              "Inhibits the breakdown of acetylcholine at the neuromuscular junction.",
            ],
            answer: 2,
            rationale:
              "Steroids decrease the body’s immune response thus decreasing the production of antibodies that attack the acetylcholine receptors at the neuromuscular junction",
          },
          {
            id: "q21",
            question:
              "A female client is receiving IV Mannitol. An assessment specific to safe administration of the said drug is:",
            choices: [
              "Vital signs q4h",
              "Weighing daily",
              "Urine output hourly",
              "Level of consciousness q4h",
            ],
            answer: 2,
            rationale:
              "The osmotic diuretic mannitol is contraindicated in the presence of inadequate renal function or heart failure because it increases the intravascular volume that must be filtered and excreted by the kidney.",
          },
          {
            id: "q22",
            question:
              "Patricia a 20 year old college student with diabetes mellitus requests additional information about the advantages of using a pen like insulin delivery devices. The nurse explains that the advantages of these devices over syringes include:",
            choices: [
              "Accurate dose delivery",
              "Shorter injection time",
              "Lower cost with reusable insulin cartridges",
              "Use of smaller gauge needle.",
            ],
            answer: 0,
            rationale:
              "These devices are more accurate because they are easily to used and have improved adherence in insulin regimens by young people because the medication can be administered discreetly.",
          },
          {
            id: "q23",
            question:
              "A male client’s left tibia is fractures in an automobile accident, and a cast is applied. To assess for damage to major blood vessels from the fracture tibia, the nurse in charge should monitor the client for:",
            choices: [
              "Swelling of the left thigh",
              "Increased skin temperature of the foot",
              "Prolonged reperfusion of the toes after blanching",
              "Increased blood pressure",
            ],
            answer: 2,
            rationale:
              "Damage to blood vessels may decrease the circulatory perfusion of the toes, this would indicate the lack of blood supply to the extremity.",
          },
          {
            id: "q24",
            question:
              "While performing a physical assessment of a male client with gout of the great toe, NurseVivian should assess for additional tophi (urate deposits) on the:",
            choices: ["Buttocks", "Ears", "Face", "Abdomen"],
            answer: 1,
            rationale:
              "Uric acid has a low solubility, it tends to precipitate and form deposits at various sites where blood flow is least active, including cartilaginous tissue such as the ears.",
          },
          {
            id: "q25",
            question:
              "Nurse Katrina would recognize that the demonstration of crutch walking with tripod gait was understood when the client places weight on the:",
            choices: [
              "Palms of the hands and axillary regions",
              "Palms of the hand",
              "Axillary regions",
              "Feet, which are set apart",
            ],
            answer: 1,
            rationale:
              "The palms should bear the client’s weight to avoid damage to the nerves in the axilla.",
          },
          {
            id: "q26",
            question:
              "Mang Jose with rheumatoid arthritis states, “the only time I am without pain is when I lie in bed perfectly still”. During the convalescent stage, the nurse in charge with Mang Jose should encourage:",
            choices: [
              "Active joint flexion and extension",
              "Continued immobility until pain subsides",
              "Range of motion exercises twice daily",
              "Flexion exercises three times daily 374",
            ],
            answer: 0,
            rationale:
              "Active exercises, alternating extension, flexion, abduction, and adduction, mobilize exudates in the joints relieves stiffness and pain.",
          },
          {
            id: "q27",
            question: "A male client has undergone spinal surgery, the nurse should:",
            choices: [
              "Observe the client’s bowel movement and voiding patterns",
              "Log-roll the client to prone position",
              "Assess the client’s feet for sensation and circulation",
              "Encourage client to drink plenty of fluids",
            ],
            answer: 2,
            rationale:
              "Alteration in sensation and circulation indicates damage to the spinal cord, if these occurs notify physician immediately.",
          },
          {
            id: "q28",
            question:
              "Marina with acute renal failure moves into the diuretic phase after one week of therapy. During this phase the client must be assessed for signs of developing:",
            choices: ["Hypovolemia", "renal failure", "metabolic acidosis", "hyperkalemia"],
            answer: 0,
            rationale:
              "In the diuretic phase fluid retained during the oliguric phase is excreted and may reach 3 to 5 liters daily, hypovolemia may occur and fluids should be replaced.",
          },
          {
            id: "q29",
            question:
              "Nurse Judith obtains a specimen of clear nasal drainage from a client with a head injury. Which of the following tests differentiates mucus from cerebrospinal fluid (CSF)?",
            choices: ["Protein", "Specific gravity", "Glucose", "Microorganism"],
            answer: 2,
            rationale:
              "The constituents of CSF are similar to those of blood plasma. An examination for glucose content is done to determine whether a body fluid is a mucus or a CSF. A CSF normally contains glucose.",
          },
          {
            id: "q30",
            question:
              "A 22 year old client suffered from his first tonicclonic seizure. Upon awakening the client asks the nurse, “What caused me to have a seizure? Which of the following would the nurse include in the primary cause of tonic-clonic seizures in adults more the 20 years?",
            choices: ["Electrolyte imbalance", "Head trauma", "Epilepsy", "Congenital defect"],
            answer: 1,
            rationale:
              "Trauma is one of the primary causes of brain damage and seizure activity in adults. Other common causes of seizure activity in adults include neoplasms, withdrawal from drugs and alcohol, and vascular disease.",
          },
          {
            id: "q31",
            question:
              "What is the priority nursing assessment in the first 24 hours after admission of the client with thrombotic CVA?",
            choices: [
              "Pupil size and papillary response",
              "cholesterol level",
              "Echocardiogram",
              "Bowel sounds",
            ],
            answer: 0,
            rationale:
              "It is crucial to monitor the pupil size and papillary response to indicate changes around the cranial nerves.",
          },
          {
            id: "q32",
            question:
              "Nurse Linda is preparing a client with multiple sclerosis for discharge from the hospital to home. Which of the following instruction is most appropriate? 375",
            choices: [
              "“Practice using the mechanical aids that you will need when future disabilities arise”.",
              "“Follow good health habits to change the course of the disease”.",
              "“Keep active, use stress reduction strategies, and avoid fatigue.",
              "“You will need to accept the necessity for a quiet and inactive lifestyle”.",
            ],
            answer: 2,
            rationale:
              "The nurse most positive approach is to encourage the client with multiple sclerosis to stay active, use stress reduction techniques and avoid fatigue because it is important to support the immune system while remaining active.",
          },
          {
            id: "q33",
            question:
              "The nurse is aware the early indicator of hypoxia in the unconscious client is:",
            choices: ["Cyanosis", "Increased respirations", "Hypertension", "Restlessness"],
            answer: 3,
            rationale:
              "Restlessness is an early indicator of hypoxia. The nurse should suspect hypoxia in unconscious client who suddenly becomes restless.",
          },
          {
            id: "q34",
            question:
              "A client is experiencing spinal shock. Nurse Myrna should expect the function of the bladder to be which of the following?",
            choices: ["Normal", "Atonic", "Spastic", "Uncontrolled"],
            answer: 1,
            rationale:
              "In spinal shock, the bladder becomes completely atonic and will continue to fill unless the client is catheterized.",
          },
          {
            id: "q35",
            question: "Which of the following stage the carcinogen is irreversible?",
            choices: [
              "Progression stage",
              "Initiation stage",
              "Regression stage",
              "Promotion stage",
            ],
            answer: 0,
            rationale:
              "Progression stage is the change of tumor from the preneoplastic state or low degree of malignancy to a fast growing tumor that cannot be reversed.",
          },
          {
            id: "q36",
            question:
              "Among the following components thorough pain assessment, which is the most significant?",
            choices: ["Effect", "Cause", "Causing factors", "Intensity"],
            answer: 3,
            rationale:
              "Intensity is the major indicative of severity of pain and it is important for the evaluation of the treatment.",
          },
          {
            id: "q37",
            question:
              "A 65 year old female is experiencing flare up of pruritus. Which of the client’s action could aggravate the cause of flare ups?",
            choices: [
              "Sleeping in cool and humidified environment",
              "Daily baths with fragrant soap",
              "Using clothes made from 100% cotton",
              "Increasing fluid intake",
            ],
            answer: 1,
            rationale:
              "The use of fragrant soap is very drying to skin hence causing the pruritus.",
          },
          {
            id: "q38",
            question:
              "Atropine sulfate (Atropine) is contraindicated in all but one of the following client?",
            choices: [
              "A client with high blood",
              "A client with bowel obstruction",
              "A client with glaucoma",
              "A client with U.T.I",
            ],
            answer: 2,
            rationale:
              "Atropine sulfate is contraindicated with glaucoma patients because it increases intraocular pressure.",
          },
          {
            id: "q39",
            question:
              "Nurse Jon assesses vital signs on a client undergone epidural anesthesia. 44. Which of the following would the nurse assess next?",
            choices: ["Headache", "Bladder distension", "Dizziness", "Ability to move legs"],
            answer: 1,
            rationale:
              "The last area to return sensation is in the perineal area, and the nurse in charge should monitor the client for distended bladder.",
          },
          {
            id: "q40",
            question:
              "Nurse Faith should recognize that fluid shift in a client with burn injury results from increase in the:",
            choices: [
              "Total volume of circulating whole blood",
              "Total volume of intravascular plasma",
              "Permeability of capillary walls",
              "Permeability of kidney tubules",
            ],
            answer: 0,
            rationale:
              "Aging process involves increased capillary fragility and permeability. Older adults have a decreased amount of subcutaneous fat and cause an increased incidence of bruise like lesions caused by collection of extravascular blood in loosely structured dermis.",
          },
        ],
      },
      {
        id: "msn-medical-surgical-nursing-part-1",
        title: "MEDICAL SURGICAL NURSING Part 1",
        description: "27 questions from the PNLE reviewer.",
        questions: [
          {
            id: "q1",
            question:
              "Mrs. Chua a 78 year old client is admitted with the diagnosis of mild chronic heart failure. The nurse expects to hear when listening to client’s lungs indicative of chronic heart failure would be:",
            choices: ["Stridor", "Crackles", "Wheezes", "Friction rubs"],
            answer: 1,
            rationale:
              "Left sided heart failure causes fluid accumulation in the capillary network of the lung. Fluid eventually enters alveolar spaces and causes crackling sounds at the end of inspiration.",
          },
          {
            id: "q2",
            question:
              "Patrick who is hospitalized following a myocardial infarction asks the nurse why he is taking morphine. The nurse explains that morphine:",
            choices: [
              "Decrease anxiety and restlessness",
              "Prevents shock and relieves pain",
              "Dilates coronary blood vessels",
              "Helps prevent fibrillation of the heart",
            ],
            answer: 1,
            rationale:
              "Morphine is a central nervous system depressant used to relieve the pain associated with myocardial infarction, it also decreases apprehension and prevents cardiogenic shock.",
          },
          {
            id: "q3",
            question:
              "Which of the following should the nurse teach the client about the signs of digitalis toxicity?",
            choices: [
              "Increased appetite",
              "Elevated blood pressure",
              "Skin rash over the chest and back",
              "Visual disturbances such as seeing yellow spots",
            ],
            answer: 3,
            rationale:
              "Seeing yellow spots and colored vision are common symptoms of digitalis toxicity",
          },
          {
            id: "q4",
            question:
              "Nurse Trisha teaches a client with heart failure to take oral Furosemide in the morning. The reason for this is to help…",
            choices: [
              "Retard rapid drug absorption",
              "Excrete excessive fluids accumulated at night",
              "Prevents sleep disturbances during night",
              "Prevention of electrolyte imbalance",
            ],
            answer: 2,
            rationale:
              "When diuretics are taken in the morning, client will void frequently during daytime and will not need to void frequently at night.",
          },
          {
            id: "q5",
            question:
              "What would be the primary goal of therapy for a client with pulmonary edema and heart failure?",
            choices: [
              "Enhance comfort",
              "Increase cardiac output",
              "Improve respiratory status",
              "Peripheral edema decreased",
            ],
            answer: 1,
            rationale:
              "The primary goal of therapy for the client with pulmonary edema or heart failure is increasing cardiac output. Pulmonary edema is an acute medical emergency requiring immediate intervention.",
          },
          {
            id: "q6",
            question:
              "Nurse Linda is caring for a client with head injury and monitoring the client with decerebrate posturing. Which of the following is a characteristic of this type of posturing?",
            choices: [
              "Upper extremity flexion with lower extremity flexion",
              "Upper extremity flexion with lower extremity extension",
              "Extension of the extremities after a stimulus",
              "Flexion of the extremities after stimulus",
            ],
            answer: 2,
            rationale:
              "Decerebrate posturing is the extension of the extremities after a stimulus, which may occur with upper brain stem injury.",
          },
          {
            id: "q7",
            question:
              "A female client is taking Cascara Sagrada. Nurse Betty informs the client that the following maybe experienced as side effects of this medication:",
            choices: [
              "GI bleeding",
              "Peptic ulcer disease",
              "Abdominal cramps",
              "Partial bowel obstruction 475 476 d. Monitor clients temperature every hour",
            ],
            answer: 2,
            rationale:
              "The most frequent side effects of Cascara Sagrada (Laxative) is abdominal cramps and nausea.",
          },
          {
            id: "q8",
            question:
              "Kate who has undergone mitral valve replacement suddenly experiences continuous bleeding from the surgical incision during postoperative period. Which of the following pharmaceutical agents should Nurse Aiza prepare to administer to Kate?",
            choices: ["Protamine Sulfate", "Quinidine Sulfate", "Vitamin C", "Coumadin"],
            answer: 0,
            rationale:
              "Protamine Sulfate is used to prevent continuous bleeding in client who has undergone open heart surgery.",
          },
          {
            id: "q9",
            question:
              "In reducing the risk of endocarditis, good dental care is an important measure. To promote good dental care in client with mitral stenosis in teaching plan should include proper use of…",
            choices: [
              "Dental floss",
              "Electric toothbrush",
              "Manual toothbrush",
              "Irrigation device",
            ],
            answer: 2,
            rationale:
              "The use of electronic toothbrush, irrigation device or dental floss may cause bleeding of 479 480 inflammation may have closed in on the airway leading to ineffective air exchange.",
          },
          {
            id: "q10",
            question:
              "A client has 15% blood loss. Which of the following nursing assessment findings indicates hypovolemic shock?",
            choices: [
              "Systolic blood pressure less than 90mm Hg",
              "Pupils unequally dilated",
              "Respiratory rate of 4 breath/min",
              "Pulse rate less than 60bpm",
            ],
            answer: 0,
            rationale:
              "Typical signs and symptoms of hypovolemic shock includes systolic blood pressure of less than 90 mm Hg.",
          },
          {
            id: "q11",
            question:
              "Nurse Lucy is planning to give pre operative teaching to a client who will be undergoing rhinoplasty. Which of the following should be included?",
            choices: [
              "Results of the surgery will be immediately noticeable postoperatively",
              "Normal saline nose drops will need to be administered preoperatively",
              "After surgery, nasal packing will be in place 8 to 10 days",
              "Aspirin containing medications should not be taken 14 days before surgery",
            ],
            answer: 3,
            rationale:
              "Aspirin containing medications should not be taken 14 days before surgery to decrease the risk of bleeding.",
          },
          {
            id: "q12",
            question:
              "Paul is admitted to the hospital due to metabolic acidosis caused by Diabetic ketoacidosis (DKA). The nurse prepares which of the following medications as an initial treatment for this problem?",
            choices: ["Regular insulin", "Potassium", "Sodium bicarbonate", "Calcium gluconate"],
            answer: 0,
            rationale:
              "Metabolic acidosis is anaerobic metabolism caused by lack of ability of the body to use circulating glucose. Administration of insulin corrects this problem.",
          },
          {
            id: "q13",
            question:
              "Dr. Marquez tells a client that an increase intake of foods that are rich in Vitamin E and beta-carotene are important for healthier skin. The nurse teaches the client that excellent food sources of both of these substances are:",
            choices: [
              "Fish and fruit jam",
              "Oranges and grapefruit",
              "Carrots and potatoes",
              "Spinach and mangoes",
            ],
            answer: 3,
            rationale:
              "Beta-carotene and Vitamin E are antioxidants which help to inhibit oxidation. Vitamin E is found in the following foods: wheat germ, corn, nuts, seeds, olives, spinach, asparagus and other green leafy vegetables. Food sources of betacarotene include dark green vegetables, carrots, mangoes and tomatoes.",
          },
          {
            id: "q14",
            question:
              "A client has Gastroesophageal Reflux Disease (GERD). The nurse should teach the client that after every meals, the client should…",
            choices: [
              "Rest in sitting position",
              "Take a short walk",
              "Drink plenty of water",
              "Lie down at least 30 minutes",
            ],
            answer: 0,
            rationale:
              "Gravity speeds up digestion and prevents reflux of stomach contents into the esophagus.",
          },
          {
            id: "q15",
            question:
              "After gastroscopy, an adaptation that indicates major complication would be:",
            choices: [
              "Nausea and vomiting",
              "Abdominal distention",
              "Increased GI motility",
              "Difficulty in swallowing",
            ],
            answer: 1,
            rationale:
              "Abdominal distension may be associated with pain, may indicate perforation, a complication that could lead to peritonitis.",
          },
          {
            id: "q16",
            question:
              "A client who has undergone a cholecystectomy asks the nurse whether there are any dietary restrictions that must be followed. Nurse Hilary would recognize that the dietary teaching was well understood when the client tells a family member that:",
            choices: [
              "“Most people need to eat a high protein diet for 12 months after surgery”",
              "“I should not eat those foods that upset me before the surgery”",
              "“I should avoid fatty foods as long as I live” 477 478",
              "“Most people can tolerate regular diet after this type of surgery”",
            ],
            answer: 3,
            rationale:
              "It may take 4 to 6 months to eat anything, but most people can eat anything they want.",
          },
          {
            id: "q17",
            question:
              "Nurse Rachel teaches a client who has been recently diagnosed with hepatitis A about untoward signs and symptoms related to Hepatitis that may develop. The one that should be reported immediately to the physician is:",
            choices: ["Restlessness", "Yellow urine", "Nausea", "Clay- colored stools"],
            answer: 3,
            rationale: "Clay colored stools are indicative of hepatic obstruction",
          },
          {
            id: "q18",
            question:
              "Which of the following antituberculosis drugs can damage the 8th cranial nerve?",
            choices: [
              "Isoniazid (INH)",
              "Paraoaminosalicylic acid (PAS)",
              "Ethambutol hydrochloride (myambutol)",
              "Streptomycin",
            ],
            answer: 3,
            rationale:
              "Streptomycin is an aminoglycoside and damage on the 8th cranial nerve (ototoxicity) is a common side effect of aminoglycosides.",
          },
          {
            id: "q19",
            question:
              "The client asks Nurse Annie the causes of peptic ulcer. Nurse Annie responds that recent research indicates that peptic ulcers are the result of which of the following:",
            choices: [
              "Genetic defect in gastric mucosa",
              "Stress",
              "Diet high in fat",
              "Helicobacter pylori infection",
            ],
            answer: 3,
            rationale:
              "Most peptic ulcer is caused by Helicopter pylori which is a gram negative bacterium.",
          },
          {
            id: "q20",
            question:
              "Ryan has undergone subtotal gastrectomy. The nurse should expect that nasogastric tube drainage will be what color for about 12 to 24 hours after surgery?",
            choices: ["Bile green", "Bright red", "Cloudy white", "Dark brown"],
            answer: 3,
            rationale:
              "12 to 24 hours after subtotal gastrectomy gastric drainage is normally brown, which indicates digested food.",
          },
          {
            id: "q21",
            question:
              "Nurse Joan is assigned to come for client who has just undergone eye surgery. Nurse Joan plans to teach the client activities that are permitted during the post operative period. Which of the following is best recommended for the client?",
            choices: ["Watching circus", "Bending over", "Watching TV", "Lifting objects"],
            answer: 2,
            rationale:
              "Watching TV is permissible because the eye does not need to move rapidly with this activity, and it does not increase intraocular pressure.",
          },
          {
            id: "q22",
            question:
              "A client suffered from a lower leg injury and seeks treatment in the emergency room. There is a prominent deformity to the lower aspect of the leg, and the injured leg appears shorter that the other leg. The affected leg is painful, swollen and beginning to become ecchymotic. The nurse interprets that the client is experiencing:",
            choices: ["Fracture", "Strain", "Sprain", "Contusion 478"],
            answer: 0,
            rationale:
              "Common signs and symptoms of fracture include pain, deformity, shortening of the extremity, crepitus and swelling.",
          },
          {
            id: "q23",
            question:
              "Nurse Jenny is instilling an otic solution into an adult male client left ear. Nurse Jenny avoids doing which of the following as part of the procedure",
            choices: [
              "Pulling the auricle backward and upward",
              "Warming the solution to room temperature",
              "Pacing the tip of the dropper on the edge of ear canal",
              "Placing client in side lying position",
            ],
            answer: 2,
            rationale: "The dropper should not touch any object or any part of the client’s ear.",
          },
          {
            id: "q24",
            question:
              "Nurse Bea should instruct the male client with an ileostomy to report immediately which of the following symptom?",
            choices: [
              "Absence of drainage from the ileostomy for 6 or more hours",
              "Passage of liquid stool in the stoma",
              "Occasional presence of undigested food",
              "A temperature of 37.6 °C",
            ],
            answer: 0,
            rationale:
              "Sudden decrease in drainage or onset of severe abdominal pain should be reported immediately to the physician because it could mean that obstruction has been developed.",
          },
          {
            id: "q25",
            question:
              "Jerry has diagnosed with appendicitis. He develops a fever, hypotension and tachycardia. The nurse suspects which of the following complications?",
            choices: [
              "Intestinal obstruction",
              "Peritonitis",
              "Bowel ischemia",
              "Deficient fluid volume",
            ],
            answer: 1,
            rationale:
              "Complications of acute appendicitis are peritonitis, perforation and abscess development. 480",
          },
          {
            id: "q26",
            question:
              "Which of the following compilations should the nurse carefully monitors a client with acute pancreatitis.",
            choices: ["Myocardial Infarction", "Cirrhosis", "Peptic ulcer", "Pneumonia"],
            answer: 3,
            rationale:
              "A client with acute pancreatitis is prone to complications associated with respiratory system.",
          },
          {
            id: "q27",
            question:
              "Which of the following symptoms during the icteric phase of viral hepatitis should the nurse expect the client to inhibit?",
            choices: [
              "Watery stool",
              "Yellow sclera",
              "Tarry stool",
              "Shortness of breath 479 gums, allowing bacteria to enter and increasing the risk of endocarditis.",
            ],
            answer: 1,
            rationale:
              "Liver inflammation and obstruction block the normal flow of bile. Excess bilirubin turns the skin and sclera yellow and the urine dark and frothy. 481 c. Protects the client’s head from injury d. Attempt to insert a tongue depressor between the client’s teeth 8. A client has undergone right pneumonectomy. When turning the client, the nurse should plan to position the client either: a. Right side-lying position or supine b. High fowlers c. Right or left side lying position d. Low fowler’s position 9. Nurse Jenny should caution a female client who is sexually active in taking Isoniazid (INH) because the drug has which of the following side effects? a. Prevents ovulation b. Has a mutagenic effect on ova c. Decreases the effectiveness of oral contraceptives d. Increases the risk of vaginal infection 10. A client has undergone gastrectomy. Nurse Jovy is aware that the best position for the client is: a. Left side lying b. Low fowler’s c. Prone d. Supine 11. During the initial postoperative period of the client’s stoma. The nurse evaluates which of the following observations should be reported immediately to the physician? a. Stoma is dark red to purple b. Stoma is oozes a small amount of blood c. Stoma is lightly edematous d. Stoma does not expel stool 12. Kate which has diagnosed with ulcerative colitis is following physician’s order for bed rest with bathroom privileges. What is the rationale for this activity restriction? a. Prevent injury b. Promote rest and comfort c. Reduce intestinal peristalsis d. Conserve energy 13. Nurse KC should regularly assess the client’s ability to metabolize the total parenteral nutrition (TPN) solution adequately by monitoring the client for which of the following signs: a. Hyperglycemia b. Hypoglycemia c. Hypertension d. Elevate blood urea nitrogen concentration 14. A female client has an acute pancreatitis. Which of the following signs and symptoms the nurse would expect to see? a. Constipation b. Hypertension",
          },
        ],
      },
      {
        id: "msn-medical-surgical-nursing-part-2",
        title: "MEDICAL SURGICAL NURSING Part 2",
        description: "54 questions from the PNLE reviewer.",
        questions: [
          {
            id: "q1",
            question:
              "A client is scheduled for insertion of an inferior vena cava (IVC) filter. Nurse Patricia consults the physician about withholding which regularly scheduled medication on the day before the surgery?",
            choices: ["Potassium Chloride", "Warfarin Sodium", "Furosemide", "Docusate"],
            answer: 1,
            rationale:
              "In preoperative period, the nurse should consult with the physician about withholding Warfarin Sodium to avoid occurrence of hemorrhage.",
          },
          {
            id: "q2",
            question:
              "A nurse is planning to assess the corneal reflex on unconscious client. Which of the following is the safest stimulus to touch the client’s cornea?",
            choices: ["Cotton buds", "Sterile glove", "Sterile tongue depressor", "Wisp of cotton"],
            answer: 3,
            rationale:
              "A client who is unconscious is at greater risk for corneal abrasion. For this reason, the safest way to test the cornel reflex is by touching the cornea lightly with a wisp of cotton.",
          },
          {
            id: "q3",
            question:
              "A female client develops an infection at the catheter insertion site. The nurse in charge uses the term “iatrogenic” when describing the infection because it resulted from:",
            choices: [
              "Client’s developmental level",
              "Therapeutic procedure",
              "Poor hygiene",
              "Inadequate dietary patterns",
            ],
            answer: 1,
            rationale:
              "Iatrogenic infection is caused by the heath care provider or is induced inadvertently by medical treatment or procedures.",
          },
          {
            id: "q4",
            question:
              "Nurse Carol is assessing a client with Parkinson’s disease. The nurse recognize bradykinesia when the client exhibits:",
            choices: [
              "Intentional tremor",
              "Paralysis of limbs",
              "Muscle spasm",
              "Lack of spontaneous movement",
            ],
            answer: 3,
            rationale:
              "Bradykinesia is slowing down from the initiation and execution of movement.",
          },
          {
            id: "q5",
            question:
              "Kate with severe head injury is being monitored by the nurse for increasing intracranial pressure (ICP). Which finding should be most indicative sign of increasing intracranial pressure?",
            choices: [
              "Intermittent tachycardia",
              "Polydipsia",
              "Tachypnea",
              "Increased restlessness",
            ],
            answer: 3,
            rationale:
              "Restlessness indicates a lack of oxygen to the brain stem which impairs the reticular activating system.",
          },
          {
            id: "q6",
            question:
              "A hospitalized client had a tonic-clonic seizure while walking in the hall. During the seizure the nurse priority should be:",
            choices: [
              "Hold the clients arms and leg firmly",
              "Place the client immediately to soft surface 481 482",
              "Ascites",
              "Jaundice",
            ],
            answer: 2,
            rationale:
              "Rhythmic contraction and relaxation associated with tonic-clonic seizure can cause repeated banging of head.",
          },
          {
            id: "q7",
            question:
              "A client is suspected to develop tetany after a subtotal thyroidectomy. Which of the following symptoms might indicate tetany?",
            choices: [
              "Tingling in the fingers",
              "Pain in hands and feet",
              "Tension on the suture lines",
              "Bleeding on the back of the dressing",
            ],
            answer: 0,
            rationale:
              "Tetany may occur after thyroidectomy if the parathyroid glands are accidentally injured or removed.",
          },
          {
            id: "q8",
            question:
              "A 58 year old woman has newly diagnosed with hypothyroidism. The nurse is aware that the signs and symptoms of hypothyroidism include:",
            choices: ["Diarrhea", "Vomiting", "Tachycardia", "Weight gain"],
            answer: 3,
            rationale:
              "Typical signs of hypothyroidism includes weight gain, fatigue, decreased energy, apathy, brittle nails, dry skin, cold intolerance, constipation and numbness.",
          },
          {
            id: "q9",
            question:
              "A client has undergone for an ileal conduit, the nurse in charge should closely monitor the client for occurrence of which of the following complications related to pelvic surgery?",
            choices: ["Ascites", "Thrombophlebitis", "Inguinal hernia", "Peritonitis"],
            answer: 1,
            rationale:
              "After a pelvic surgery, there is an increased chance of thrombophlebitits owing to the pelvic 489 490",
          },
          {
            id: "q10",
            question:
              "A client has undergone bone biopsy. Which nursing action should the nurse provide after the procedure?",
            choices: [
              "Administer analgesics via IM",
              "Monitor vital signs",
              "Monitor the site for bleeding, swelling and hematoma formation",
              "Keep area in neutral position",
            ],
            answer: 2,
            rationale:
              "Nursing care after bone biopsy includes close monitoring of the punctured site for bleeding, swelling and hematoma formation.",
          },
          {
            id: "q11",
            question:
              "A client is suffering from low back pain. Which of the following exercises will strengthen the lower back muscle of the client?",
            choices: ["Tennis", "Basketball", "Diving", "Swimming"],
            answer: 3,
            rationale:
              "Walking and swimming are very helpful in strengthening back muscles for the client suffering from lower back pain.",
          },
          {
            id: "q12",
            question:
              "A client with peptic ulcer is being assessed by the nurse for gastrointestinal perforation. The nurse should monitor for:",
            choices: [
              "(+) guaiac stool test",
              "Slow, strong pulse",
              "Sudden, severe abdominal pain",
              "Increased bowel sounds",
            ],
            answer: 2,
            rationale:
              "Sudden, severe abdominal pain is the most indicative sign of perforation. When perforation of an ulcer occurs, the nurse maybe unable to hear bowel sounds at all.",
          },
          {
            id: "q13",
            question:
              "A client has undergone surgery for retinal detachment. Which of the following goal should be prioritized?",
            choices: [
              "Prevent an increase intraocular pressure",
              "Alleviate pain",
              "Maintain darkened room",
              "Promote low-sodium diet",
            ],
            answer: 0,
            rationale:
              "After surgery to correct a detached retina, prevention of increased intraocular pressure is the priority goal.",
          },
          {
            id: "q14",
            question:
              "A Client with glaucoma has been prescribed with miotics. The nurse is aware that miotics is for:",
            choices: [
              "Constricting pupil",
              "Relaxing ciliary muscle",
              "Constricting intraocular vessel",
              "Paralyzing ciliary muscle",
            ],
            answer: 0,
            rationale:
              "Miotic agent constricts the pupil and contracts ciliary muscle. These effects widen the filtration angle and permit increased out flow of aqueous humor.",
          },
          {
            id: "q15",
            question:
              "When suctioning an unconscious client, which nursing intervention should the nurse prioritize in maintaining cerebral perfusion?",
            choices: [
              "Administer diuretics",
              "Administer analgesics",
              "Provide hygiene",
              "Hyperoxygenate before and after suctioning",
            ],
            answer: 3,
            rationale:
              "It is a priority to hyperoxygenate the client before and after suctioning to prevent hypoxia and to maintain cerebral perfusion.",
          },
          {
            id: "q16",
            question:
              "When discussing breathing exercises with a postoperative client, Nurse Hazel should include which of the following teaching?",
            choices: [
              "Short frequent breaths",
              "Exhale with mouth open",
              "Exercise twice a day",
              "Place hand on the abdomen and feel it rise",
            ],
            answer: 3,
            rationale: "Abdominal breathing improves lungs expansion",
          },
          {
            id: "q17",
            question:
              "Louie, with burns over 35% of the body, complains of chilling. In promoting the client’s comfort, the nurse should:",
            choices: [
              "Maintain room humidity below 40%",
              "Place top sheet on the client",
              "Limit the occurrence of drafts",
              "Keep room temperature at 80 degrees",
            ],
            answer: 2,
            rationale:
              "A Client with burns is very sensitive to temperature changes because heat is loss in the burn areas.",
          },
          {
            id: "q18",
            question:
              "Nurse Trish is aware that temporary heterograft (pig skin) is used to treat burns because this graft will:",
            choices: [
              "Relieve pain and promote rapid epithelialization",
              "Be sutured in place for better adherence",
              "Debride necrotic epithelium",
              "Concurrently used with topical antimicrobials",
            ],
            answer: 0,
            rationale:
              "The graft covers the nerve endings, which reduces pain and provides framework for granulation",
          },
          {
            id: "q19",
            question:
              "When teaching a client about the signs of colorectal cancer, Nurse Trish stresses that the most common complaint of persons with colorectal cancer is:",
            choices: [
              "Abdominal pain",
              "Hemorrhoids",
              "Change in caliber of stools",
              "Change in bowel habits",
            ],
            answer: 3,
            rationale:
              "Constipation, diarrhea, and/or constipation alternating with diarrhea are the most common symptoms of colorectal cancer.",
          },
          {
            id: "q20",
            question:
              "Louis develops peritonitis and sepsis after surgical repair of ruptures diverticulum. The nurse in charge should expect an assessment of the client to reveal:",
            choices: ["Tachycardia", "Abdominal rigidity", "Bradycardia", "Increased bowel sounds"],
            answer: 1,
            rationale:
              "With increased intraabdominal pressure, the abdominal wall will become tender and rigid.",
          },
          {
            id: "q21",
            question:
              "Immediately after liver biopsy, the client is placed on the right side, the nurse is aware that that this position should be maintained because it will:",
            choices: [
              "Help stop bleeding if any occurs",
              "Reduce the fluid trapped in the biliary ducts",
              "Position with greatest comfort",
              "Promote circulating blood volume",
            ],
            answer: 0,
            rationale:
              "Pressure applied in the puncture site indicates that a biliary vessel was puncture which is a common complication after liver biopsy.",
          },
          {
            id: "q22",
            question:
              "Tony has diagnosed with hepatitis A. The information from the health history that is most likely linked to hepatitis A is:",
            choices: [
              "Exposed with arsenic compounds at work",
              "Working as local plumber",
              "Working at hemodialysis clinic",
              "Dish washer in restaurants",
            ],
            answer: 1,
            rationale:
              "Hepatitis A is primarily spread via fecal-oral route. Sewage polluted water may harbor the virus.",
          },
          {
            id: "q23",
            question:
              "Nurse Trish is aware that the laboratory test result that most likely would indicate acute pancreatitis is an elevated:",
            choices: [
              "Serum bilirubin level",
              "Serum amylase level",
              "Potassium level",
              "Sodium level",
            ],
            answer: 1,
            rationale:
              "Amylase concentration is high in the pancreas and is elevated in the serum when the pancreas becomes acutely inflamed and also it distinguishes pancreatitis from other acute abdominal problems.",
          },
          {
            id: "q24",
            question:
              "Dr. Marquez orders serum electrolytes. To determine the effect of persistent vomiting, Nurse Trish should be most concerned with monitoring the:",
            choices: [
              "Chloride and sodium levels",
              "Phosphate and calcium levels",
              "Protein and magnesium levels",
              "Sulfate and bicarbonate levels 484 485 c. Protects the client’s head from injury d. Attempt to insert a tongue depressor between the client’s teeth",
            ],
            answer: 0,
            rationale:
              "Sodium, which is concerned with the regulation of extracellular fluid volume, it is lost with vomiting. Chloride, which balances cations in the extracellular compartments, is also lost with vomiting, because sodium and chloride are parallel electrolytes, hyponatremia will accompany. 490 491 7. A client has undergone with penile implant. After 24 hrs of surgery, the client’s scrotum was edematous and painful. The nurse should: a. Assist the client with sitz bath b. Apply war soaks in the scrotum c. Elevate the scrotum using a soft support d. Prepare for a possible incision and drainage. 8. Nurse hazel receives emergency laboratory results for a client with chest pain and immediately informs the physician. An increased myoglobin level suggests which of the following? a. Liver disease b. Myocardial damage c. Hypertension d. Cancer 9. Nurse Maureen would expect the a client with mitral stenosis would demonstrate symptoms associated with congestion in the: a. Right atrium b. Superior vena cava c. Aorta d. Pulmonary 10. A client has been diagnosed with hypertension. The nurse priority nursing diagnosis would be: a. Ineffective health maintenance b. Impaired skin integrity c. Deficient fluid volume d. Pain 11. Nurse Hazel teaches the client with angina about common expected side effects of nitroglycerin including: a. high blood pressure b. stomach cramps c. headache d. shortness of breath 12. The following are lipid abnormalities. Which of the following is a risk factor for the development of atherosclerosis and PVD? a. High levels of low density lipid (LDL) cholesterol b. High levels of high density lipid (HDL) cholesterol c. Low concentration triglycerides d. Low levels of LDL cholesterol. 13. Which of the following represents a significant risk immediately after surgery for repair of aortic aneurysm? a. Potential wound infection b. Potential ineffective coping c. Potential electrolyte balance d. Potential alteration in renal perfusion",
          },
          {
            id: "q25",
            question:
              "A client has undergone right pneumonectomy. When turning the client, the nurse should plan to position the client either:",
            choices: [
              "Right side-lying position or supine",
              "High fowlers",
              "Right or left side lying position",
              "Low fowler’s position",
            ],
            answer: 0,
            rationale:
              "Right side lying position or supine position permits ventilation of the remaining lung and prevent fluid from draining into sutured bronchial stump.",
          },
          {
            id: "q26",
            question:
              "Nurse Jenny should caution a female client who is sexually active in taking Isoniazid (INH) because the drug has which of the following side effects?",
            choices: [
              "Prevents ovulation",
              "Has a mutagenic effect on ova",
              "Decreases the effectiveness of oral contraceptives",
              "Increases the risk of vaginal infection",
            ],
            answer: 2,
            rationale:
              "Isoniazid (INH) interferes in the effectiveness of oral contraceptives and clients of childbearing age should be counseled to use an alternative form of birth control while taking this drug.",
          },
          {
            id: "q27",
            question:
              "A client has undergone gastrectomy. Nurse Jovy is aware that the best position for the client is:",
            choices: ["Left side lying", "Low fowler’s", "Prone", "Supine"],
            answer: 1,
            rationale:
              "A client who has had abdominal surgery is best placed in a low fowler’s position. This relaxes abdominal muscles and provides maximum respiratory and cardiovascular function.",
          },
          {
            id: "q28",
            question:
              "During the initial postoperative period of the client’s stoma. The nurse evaluates which of the following observations should be reported immediately to the physician?",
            choices: [
              "Stoma is dark red to purple",
              "Stoma is oozes a small amount of blood",
              "Stoma is lightly edematous",
              "Stoma does not expel stool",
            ],
            answer: 0,
            rationale: "Dark red to purple stoma indicates inadequate blood supply.",
          },
          {
            id: "q29",
            question:
              "Kate which has diagnosed with ulcerative colitis is following physician’s order for bed rest with bathroom privileges. What is the rationale for this activity restriction?",
            choices: [
              "Prevent injury",
              "Promote rest and comfort",
              "Reduce intestinal peristalsis",
              "Conserve energy",
            ],
            answer: 2,
            rationale:
              "The rationale for activity restriction is to help reduce the hypermotility of the colon.",
          },
          {
            id: "q30",
            question:
              "Nurse KC should regularly assess the client’s ability to metabolize the total parenteral nutrition (TPN) solution adequately by monitoring the client for which of the following signs:",
            choices: [
              "Hyperglycemia",
              "Hypoglycemia",
              "Hypertension",
              "Elevate blood urea nitrogen concentration",
            ],
            answer: 0,
            rationale:
              "During Total Parenteral Nutrition (TPN) administration, the client should be monitored regularly for hyperglycemia.",
          },
          {
            id: "q31",
            question:
              "A female client has an acute pancreatitis. Which of the following signs and symptoms the nurse would expect to see?",
            choices: [
              "Constipation MEDICAL SURGICAL NURSING Part 2 1. A client is scheduled for insertion of an inferior vena cava (IVC) filter. Nurse Patricia consults the physician about withholding which regularly scheduled medication on the day before the surgery? a. Potassium Chloride",
              "Warfarin Sodium",
              "Furosemide",
              "Docusate",
            ],
            answer: 3,
            rationale:
              "Jaundice may be present in acute pancreatitis owing to obstruction of the biliary duct.",
          },
          {
            id: "q32",
            question:
              "A nurse is planning to assess the corneal reflex on unconscious client. Which of the following is the safest stimulus to touch the client’s cornea?",
            choices: ["Cotton buds", "Sterile glove", "Sterile tongue depressor", "Wisp of cotton"],
            answer: 3,
            rationale:
              "A client who is unconscious is at greater risk for corneal abrasion. For this reason, the safest way to test the cornel reflex is by touching the cornea lightly with a wisp of cotton.",
          },
          {
            id: "q33",
            question:
              "A female client develops an infection at the catheter insertion site. The nurse in charge uses the term “iatrogenic” when describing the infection because it resulted from:",
            choices: [
              "Client’s developmental level",
              "Therapeutic procedure",
              "Poor hygiene",
              "Inadequate dietary patterns",
            ],
            answer: 1,
            rationale:
              "Iatrogenic infection is caused by the heath care provider or is induced inadvertently by medical treatment or procedures.",
          },
          {
            id: "q34",
            question:
              "Nurse Carol is assessing a client with Parkinson’s disease. The nurse recognize bradykinesia when the client exhibits:",
            choices: [
              "Intentional tremor",
              "Paralysis of limbs",
              "Muscle spasm",
              "Lack of spontaneous movement",
            ],
            answer: 3,
            rationale:
              "Bradykinesia is slowing down from the initiation and execution of movement.",
          },
          {
            id: "q35",
            question:
              "Kate with severe head injury is being monitored by the nurse for increasing intracranial pressure (ICP). Which finding should be most indicative sign of increasing intracranial pressure?",
            choices: [
              "Intermittent tachycardia",
              "Polydipsia",
              "Tachypnea",
              "Increased restlessness",
            ],
            answer: 3,
            rationale:
              "Restlessness indicates a lack of oxygen to the brain stem which impairs the reticular activating system.",
          },
          {
            id: "q36",
            question:
              "A hospitalized client had a tonic-clonic seizure while walking in the hall. During the seizure the nurse priority should be:",
            choices: [
              "Hold the clients arms and leg firmly",
              "Place the client immediately to soft surface 485 486 b. Hypertension",
              "Ascites",
              "Jaundice",
            ],
            answer: 2,
            rationale:
              "Rhythmic contraction and relaxation associated with tonic-clonic seizure can cause repeated banging of head.",
          },
          {
            id: "q37",
            question:
              "A client is suspected to develop tetany after a subtotal thyroidectomy. Which of the following symptoms might indicate tetany?",
            choices: [
              "Tingling in the fingers",
              "Pain in hands and feet",
              "Tension on the suture lines",
              "Bleeding on the back of the dressing",
            ],
            answer: 0,
            rationale:
              "Tetany may occur after thyroidectomy if the parathyroid glands are accidentally injured or removed.",
          },
          {
            id: "q38",
            question:
              "A 58 year old woman has newly diagnosed with hypothyroidism. The nurse is aware that the signs and symptoms of hypothyroidism include:",
            choices: ["Diarrhea", "Vomiting", "Tachycardia", "Weight gain"],
            answer: 3,
            rationale:
              "Typical signs of hypothyroidism includes weight gain, fatigue, decreased energy, apathy, brittle nails, dry skin, cold intolerance, constipation and numbness.",
          },
          {
            id: "q39",
            question:
              "A client has undergone for an ileal conduit, the nurse in charge should closely monitor the client for occurrence of which of the following complications related to pelvic surgery?",
            choices: ["Ascites", "Thrombophlebitis", "Inguinal hernia", "Peritonitis"],
            answer: 1,
            rationale:
              "After a pelvic surgery, there is an increased chance of thrombophlebitits owing to the pelvic 489 490",
          },
          {
            id: "q40",
            question:
              "A client has undergone bone biopsy. Which nursing action should the nurse provide after the procedure?",
            choices: [
              "Administer analgesics via IM",
              "Monitor vital signs",
              "Monitor the site for bleeding, swelling and hematoma formation",
              "Keep area in neutral position",
            ],
            answer: 2,
            rationale:
              "Nursing care after bone biopsy includes close monitoring of the punctured site for bleeding, swelling and hematoma formation.",
          },
          {
            id: "q41",
            question:
              "A client is suffering from low back pain. Which of the following exercises will strengthen the lower back muscle of the client?",
            choices: ["Tennis", "Basketball", "Diving", "Swimming"],
            answer: 3,
            rationale:
              "Walking and swimming are very helpful in strengthening back muscles for the client suffering from lower back pain.",
          },
          {
            id: "q42",
            question:
              "A client with peptic ulcer is being assessed by the nurse for gastrointestinal perforation. The nurse should monitor for:",
            choices: [
              "(+) guaiac stool test",
              "Slow, strong pulse",
              "Sudden, severe abdominal pain",
              "Increased bowel sounds",
            ],
            answer: 2,
            rationale:
              "Sudden, severe abdominal pain is the most indicative sign of perforation. When perforation of an ulcer occurs, the nurse maybe unable to hear bowel sounds at all.",
          },
          {
            id: "q43",
            question:
              "A client has undergone surgery for retinal detachment. Which of the following goal should be prioritized?",
            choices: [
              "Prevent an increase intraocular pressure",
              "Alleviate pain",
              "Maintain darkened room",
              "Promote low-sodium diet",
            ],
            answer: 0,
            rationale:
              "After surgery to correct a detached retina, prevention of increased intraocular pressure is the priority goal.",
          },
          {
            id: "q44",
            question:
              "A Client with glaucoma has been prescribed with miotics. The nurse is aware that miotics is for:",
            choices: [
              "Constricting pupil",
              "Relaxing ciliary muscle",
              "Constricting intraocular vessel",
              "Paralyzing ciliary muscle",
            ],
            answer: 0,
            rationale:
              "Miotic agent constricts the pupil and contracts ciliary muscle. These effects widen the filtration angle and permit increased out flow of aqueous humor.",
          },
          {
            id: "q45",
            question:
              "When suctioning an unconscious client, which nursing intervention should the nurse prioritize in maintaining cerebral perfusion?",
            choices: [
              "Administer diuretics",
              "Administer analgesics",
              "Provide hygiene",
              "Hyperoxygenate before and after suctioning",
            ],
            answer: 3,
            rationale:
              "It is a priority to hyperoxygenate the client before and after suctioning to prevent hypoxia and to maintain cerebral perfusion.",
          },
          {
            id: "q46",
            question:
              "When discussing breathing exercises with a postoperative client, Nurse Hazel should include which of the following teaching?",
            choices: [
              "Short frequent breaths",
              "Exhale with mouth open",
              "Exercise twice a day",
              "Place hand on the abdomen and feel it rise",
            ],
            answer: 3,
            rationale: "Abdominal breathing improves lungs expansion",
          },
          {
            id: "q47",
            question:
              "Louie, with burns over 35% of the body, complains of chilling. In promoting the client’s comfort, the nurse should:",
            choices: [
              "Maintain room humidity below 40%",
              "Place top sheet on the client",
              "Limit the occurrence of drafts",
              "Keep room temperature at 80 degrees",
            ],
            answer: 2,
            rationale:
              "A Client with burns is very sensitive to temperature changes because heat is loss in the burn areas.",
          },
          {
            id: "q48",
            question:
              "Nurse Trish is aware that temporary heterograft (pig skin) is used to treat burns because this graft will:",
            choices: [
              "Relieve pain and promote rapid epithelialization",
              "Be sutured in place for better adherence",
              "Debride necrotic epithelium",
              "Concurrently used with topical antimicrobials 487 488",
            ],
            answer: 0,
            rationale:
              "The graft covers the nerve endings, which reduces pain and provides framework for granulation",
          },
          {
            id: "q49",
            question:
              "When teaching a client about the signs of colorectal cancer, Nurse Trish stresses that the most common complaint of persons with colorectal cancer is:",
            choices: [
              "Abdominal pain",
              "Hemorrhoids",
              "Change in caliber of stools",
              "Change in bowel habits",
            ],
            answer: 3,
            rationale:
              "Constipation, diarrhea, and/or constipation alternating with diarrhea are the most common symptoms of colorectal cancer.",
          },
          {
            id: "q50",
            question:
              "Louis develops peritonitis and sepsis after surgical repair of ruptures diverticulum. The nurse in charge should expect an assessment of the client to reveal:",
            choices: ["Tachycardia", "Abdominal rigidity", "Bradycardia", "Increased bowel sounds"],
            answer: 1,
            rationale:
              "With increased intraabdominal pressure, the abdominal wall will become tender and rigid.",
          },
          {
            id: "q51",
            question:
              "Immediately after liver biopsy, the client is placed on the right side, the nurse is aware that that this position should be maintained because it will:",
            choices: [
              "Help stop bleeding if any occurs",
              "Reduce the fluid trapped in the biliary ducts",
              "Position with greatest comfort",
              "Promote circulating blood volume",
            ],
            answer: 0,
            rationale:
              "Pressure applied in the puncture site indicates that a biliary vessel was puncture which is a common complication after liver biopsy.",
          },
          {
            id: "q52",
            question:
              "Tony has diagnosed with hepatitis A. The information from the health history that is most likely linked to hepatitis A is:",
            choices: [
              "Exposed with arsenic compounds at work",
              "Working as local plumber",
              "Working at hemodialysis clinic",
              "Dish washer in restaurants",
            ],
            answer: 1,
            rationale:
              "Hepatitis A is primarily spread via fecal-oral route. Sewage polluted water may harbor the virus.",
          },
          {
            id: "q53",
            question:
              "Nurse Trish is aware that the laboratory test result that most likely would indicate acute pancreatitis is an elevated:",
            choices: [
              "Serum bilirubin level",
              "Serum amylase level",
              "Potassium level",
              "Sodium level 488",
            ],
            answer: 1,
            rationale:
              "Amylase concentration is high in the pancreas and is elevated in the serum when the pancreas becomes acutely inflamed and also it distinguishes pancreatitis from other acute abdominal problems.",
          },
          {
            id: "q54",
            question:
              "Dr. Marquez orders serum electrolytes. To determine the effect of persistent vomiting, Nurse Trish should be most concerned with monitoring the:",
            choices: [
              "Chloride and sodium levels",
              "Phosphate and calcium levels",
              "Protein and magnesium levels",
              "Sulfate and bicarbonate levels 489 manipulation that can interfere with circulation and promote venous stasis.",
            ],
            answer: 0,
            rationale:
              "Sodium, which is concerned with the regulation of extracellular fluid volume, it is lost with vomiting. Chloride, which balances cations in the extracellular compartments, is also lost with vomiting, because sodium and chloride are parallel electrolytes, hyponatremia will accompany. 490 491 7. A client has undergone with penile implant. After 24 hrs of surgery, the client’s scrotum was edematous and painful. The nurse should: a. Assist the client with sitz bath b. Apply war soaks in the scrotum c. Elevate the scrotum using a soft support d. Prepare for a possible incision and drainage. 8. Nurse hazel receives emergency laboratory results for a client with chest pain and immediately informs the physician. An increased myoglobin level suggests which of the following? a. Liver disease b. Myocardial damage c. Hypertension d. Cancer 9. Nurse Maureen would expect the a client with mitral stenosis would demonstrate symptoms associated with congestion in the: a. Right atrium b. Superior vena cava c. Aorta d. Pulmonary 10. A client has been diagnosed with hypertension. The nurse priority nursing diagnosis would be: a. Ineffective health maintenance b. Impaired skin integrity c. Deficient fluid volume d. Pain 11. Nurse Hazel teaches the client with angina about common expected side effects of nitroglycerin including: a. high blood pressure b. stomach cramps c. headache d. shortness of breath 12. The following are lipid abnormalities. Which of the following is a risk factor for the development of atherosclerosis and PVD? a. High levels of low density lipid (LDL) cholesterol b. High levels of high density lipid (HDL) cholesterol c. Low concentration triglycerides d. Low levels of LDL cholesterol. 13. Which of the following represents a significant risk immediately after surgery for repair of aortic aneurysm? a. Potential wound infection b. Potential ineffective coping c. Potential electrolyte balance d. Potential alteration in renal perfusion",
          },
        ],
      },
      {
        id: "msn-medical-surgical-nursing-part-3",
        title: "MEDICAL SURGICAL NURSING Part 3",
        description: "27 questions from the PNLE reviewer.",
        questions: [
          {
            id: "q1",
            question:
              "Marco who was diagnosed with brain tumor was scheduled for craniotomy. In preventing the development of cerebral edema after surgery, the nurse should expect the use of:",
            choices: ["Diuretics", "Antihypertensive", "Steroids", "Anticonvulsants"],
            answer: 2,
            rationale:
              "Glucocorticoids (steroids) are used for their antiinflammatory action, which decreases the development of edema.",
          },
          {
            id: "q2",
            question:
              "Halfway through the administration of blood, the female client complains of lumbar pain. After stopping the infusion Nurse Hazel should:",
            choices: [
              "Increase the flow of normal saline",
              "Assess the pain further",
              "Notify the blood bank",
              "Obtain vital signs.",
            ],
            answer: 0,
            rationale:
              "The blood must be stopped at once, and then normal saline should be infused to keep the line patent and maintain blood volume.",
          },
          {
            id: "q3",
            question:
              "Nurse Maureen knows that the positive diagnosis for HIV infection is made based on which of the following:",
            choices: [
              "A history of high risk sexual behaviors.",
              "Positive ELISA and western blot tests",
              "Identification of an associated opportunistic infection",
              "Evidence of extreme weight loss and high fever",
            ],
            answer: 1,
            rationale:
              "These tests confirm the presence of HIV antibodies that occur in response to the presence of the human immunodeficiency virus (HIV).",
          },
          {
            id: "q4",
            question:
              "Nurse Maureen is aware that a client who has been diagnosed with chronic renal failure recognizes an adequate amount of high-biologic-value protein when the food the client selected from the menu was:",
            choices: ["Raw carrots", "Apple juice", "Whole wheat bread", "Cottage cheese"],
            answer: 3,
            rationale:
              "One cup of cottage cheese contains approximately 225 calories, 27 g of protein, 9 g of fat, 30 mg cholesterol, and 6 g of carbohydrate. Proteins of high biologic value (HBV) contain optimal levels of amino acids essential for life.",
          },
          {
            id: "q5",
            question:
              "Kenneth who has diagnosed with uremic syndrome has the potential to develop complications. Which among the following complications should the nurse anticipates:",
            choices: [
              "Flapping hand tremors",
              "An elevated hematocrit level",
              "Hypotension",
              "Hypokalemia",
            ],
            answer: 0,
            rationale:
              "Elevation of uremic waste products causes irritation of the nerves, resulting in flapping hand tremors.",
          },
          {
            id: "q6",
            question:
              "Nurse Josie should instruct the client to eat which of the following foods to obtain the best supply of Vitamin B12?",
            choices: ["dairy products", "vegetables", "Grains", "Broccoli"],
            answer: 0,
            rationale: "Good source of vitamin B12 are dairy products and meats. 495 496",
          },
          {
            id: "q7",
            question:
              "Mang Jose with rheumatoid arthritis states, “the only time I am without pain is when I lie in bed perfectly still”. During the convalescent stage, the nurse in charge with Mang Jose should encourage:",
            choices: [
              "Active joint flexion and extension",
              "Continued immobility until pain subsides",
              "Range of motion exercises twice daily",
              "Flexion exercises three times daily",
            ],
            answer: 0,
            rationale:
              "Active exercises, alternating extension, flexion, abduction, and adduction, mobilize exudates in the joints relieves stiffness and pain.",
          },
          {
            id: "q8",
            question: "A male client has undergone spinal surgery, the nurse should:",
            choices: [
              "Observe the client’s bowel movement and voiding patterns",
              "Log-roll the client to prone position",
              "Assess the client’s feet for sensation and circulation",
              "Encourage client to drink plenty of fluids",
            ],
            answer: 2,
            rationale:
              "Alteration in sensation and circulation indicates damage to the spinal cord, if these occurs notify physician immediately.",
          },
          {
            id: "q9",
            question:
              "Marina with acute renal failure moves into the diuretic phase after one week of therapy. During this phase the client must be assessed for signs of developing:",
            choices: ["Hypovolemia", "renal failure", "metabolic acidosis", "hyperkalemia"],
            answer: 0,
            rationale:
              "In the diuretic phase fluid retained during the oliguric phase is excreted and may reach 3 to 5 liters daily, hypovolemia may occur and fluids should be replaced.",
          },
          {
            id: "q10",
            question:
              "Nurse Judith obtains a specimen of clear nasal drainage from a client with a head injury. Which of the following tests differentiates mucus from cerebrospinal fluid (CSF)?",
            choices: ["Protein", "Specific gravity", "Glucose", "Microorganism"],
            answer: 2,
            rationale:
              "The constituents of CSF are similar to those of blood plasma. An examination for glucose content is done to determine whether a body fluid is a mucus or a CSF. A CSF normally contains glucose.",
          },
          {
            id: "q11",
            question:
              "A 22 year old client suffered from his first tonicclonic seizure. Upon awakening the client asks the nurse, “What caused me to have a seizure? Which of the following would the nurse include in the primary cause of tonic clonic seizures in adults more the 20 years?",
            choices: ["Electrolyte imbalance", "Head trauma", "Epilepsy", "Congenital defect"],
            answer: 1,
            rationale:
              "Trauma is one of the primary cause of brain damage and seizure activity in adults. Other common causes of seizure activity in adults include neoplasms, withdrawal from drugs and alcohol, and vascular disease.",
          },
          {
            id: "q12",
            question:
              "What is the priority nursing assessment in the first 24 hours after admission of the client with thrombotic CVA?",
            choices: [
              "Pupil size and papillary response",
              "cholesterol level",
              "Echocardiogram",
              "Bowel sounds",
            ],
            answer: 0,
            rationale:
              "It is crucial to monitor the pupil size and papillary response to indicate changes around the cranial nerves.",
          },
          {
            id: "q13",
            question:
              "Nurse Linda is preparing a client with multiple sclerosis for discharge from the hospital to home. Which of the following instruction is most appropriate?",
            choices: [
              "“Practice using the mechanical aids that you will need when future disabilities arise”.",
              "“Follow good health habits to change the course of the disease”.",
              "“Keep active, use stress reduction strategies, and avoid fatigue.",
              "“You will need to accept the necessity for a quiet and inactive lifestyle”.",
            ],
            answer: 2,
            rationale:
              "The nurse most positive approach is to encourage the client with multiple sclerosis to stay active, use stress reduction techniques and avoid fatigue because it is important to support the immune system while remaining active.",
          },
          {
            id: "q14",
            question:
              "The nurse is aware the early indicator of hypoxia in the unconscious client is:",
            choices: ["Cyanosis", "Increased respirations", "Hypertension", "Restlessness"],
            answer: 3,
            rationale:
              "Restlessness is an early indicator of hypoxia. The nurse should suspect hypoxia in unconscious client who suddenly becomes restless.",
          },
          {
            id: "q15",
            question:
              "A client is experiencing spinal shock. Nurse Myrna should expect the function of the bladder to be which of the following?",
            choices: ["Normal", "Atonic", "Spastic", "Uncontrolled"],
            answer: 1,
            rationale:
              "In spinal shock, the bladder becomes completely atonic and will continue to fill unless the client is catheterized.",
          },
          {
            id: "q16",
            question: "Which of the following stage the carcinogen is irreversible?",
            choices: [
              "Progression stage",
              "Initiation stage",
              "Regression stage",
              "Promotion stage",
            ],
            answer: 0,
            rationale:
              "Progression stage is the change of tumor from the preneoplastic state or low degree of malignancy to a fast growing tumor that cannot be reversed.",
          },
          {
            id: "q17",
            question:
              "Among the following components thorough pain assessment, which is the most significant?",
            choices: ["Effect", "Cause", "Causing factors", "Intensity 493 494"],
            answer: 3,
            rationale:
              "Intensity is the major indicative of severity of pain and it is important for the evaluation of the treatment.",
          },
          {
            id: "q18",
            question:
              "A 65 year old female is experiencing flare up of pruritus. Which of the client’s action could aggravate the cause of flare ups?",
            choices: [
              "Sleeping in cool and humidified environment",
              "Daily baths with fragrant soap",
              "Using clothes made from 100% cotton",
              "Increasing fluid intake",
            ],
            answer: 1,
            rationale:
              "The use of fragrant soap is very drying to skin hence causing the pruritus.",
          },
          {
            id: "q19",
            question:
              "Atropine sulfate (Atropine) is contraindicated in all but one of the following client?",
            choices: [
              "A client with high blood",
              "A client with bowel obstruction",
              "A client with glaucoma",
              "A client with U.T.I",
            ],
            answer: 2,
            rationale:
              "Atropine sulfate is contraindicated with glaucoma patients because it increases intraocular pressure.",
          },
          {
            id: "q20",
            question:
              "Nurse Jon assesses vital signs on a client undergone epidural anesthesia. Which of the following would the nurse assess next?",
            choices: ["Headache", "Bladder distension", "Dizziness", "Ability to move legs"],
            answer: 1,
            rationale:
              "The last area to return sensation is in the perineal area, and the nurse in charge should monitor the client for distended bladder.",
          },
          {
            id: "q21",
            question:
              "Nurse Katrina should anticipate that all of the following drugs may be used in the attempt to control the symptoms of Meniere’s disease except:",
            choices: ["Antiemetics", "Diuretics", "Antihistamines", "Glucocorticoids"],
            answer: 3,
            rationale: "Glucocorticoids play no significant role in disease treatment. 496",
          },
          {
            id: "q22",
            question: "Which of the following complications associated with tracheostomy tube?",
            choices: [
              "Increased cardiac output",
              "Acute respiratory distress syndrome (ARDS)",
              "Increased blood pressure",
              "Damage to laryngeal nerves",
            ],
            answer: 3,
            rationale:
              "Tracheostomy tube has several potential complications including bleeding, infection and laryngeal nerve damage.",
          },
          {
            id: "q23",
            question:
              "Nurse Faith should recognize that fluid shift in an client with burn injury results from increase in the:",
            choices: [
              "Total volume of circulating whole blood",
              "Total volume of intravascular plasma",
              "Permeability of capillary walls",
              "Permeability of kidney tubules",
            ],
            answer: 2,
            rationale:
              "In burn, the capillaries and small vessels dilate, and cell damage cause the release of a histaminelike substance. The substance causes the capillary walls to become more permeable and significant quantities of fluid are lost.",
          },
          {
            id: "q24",
            question:
              "An 83-year-old woman has several ecchymotic areas on her right arm. The bruises are probably caused by:",
            choices: [
              "increased capillary fragility and permeability",
              "increased blood supply to the skin",
              "self inflicted injury 494",
              "elder abuse",
            ],
            answer: 0,
            rationale:
              "Aging process involves increased capillary fragility and permeability. Older adults have a decreased amount of subcutaneous fat and cause an increased incidence of bruise like lesions caused by collection of extravascular blood in loosely structured dermis.",
          },
          {
            id: "q25",
            question:
              "Nurse Anna is aware that early adaptation of client with renal carcinoma is:",
            choices: ["Nausea and vomiting", "flank pain", "weight gain", "intermittent hematuria"],
            answer: 3,
            rationale:
              "Intermittent pain is the classic sign of renal carcinoma. It is primarily due to capillary erosion by the cancerous growth.",
          },
          {
            id: "q26",
            question:
              "A male client with tuberculosis asks Nurse Brian how long the chemotherapy must be continued. Nurse Brian’s accurate reply would be:",
            choices: ["1 to 3 weeks", "6 to 12 months", "3 to 5 months", "3 years and more"],
            answer: 1,
            rationale:
              "Tubercle bacillus is a drug resistant organism and takes a long time to be eradicated. Usually a combination of three drugs is used for minimum of 6 months and at least six months beyond culture conversion.",
          },
          {
            id: "q27",
            question:
              "A client has undergone laryngectomy. The immediate nursing priority would be:",
            choices: [
              "Keep trachea free of secretions",
              "Monitor for signs of infection",
              "Provide emotional support",
              "Promote means of communication 495",
            ],
            answer: 0,
            rationale:
              "Patent airway is the most priority; therefore removal of secretions is necessary. 497 b. Avoiding relationship c. Showing interest in solitary activities d. Inability to make choices and decision without advise 8. A male client is diagnosed with schizotypal personality disorder. Which signs would this client exhibit during social situation? a. Paranoid thoughts b. Emotional affect c. Independence need d. Aggressive behavior 9. Nurse Claire is caring for a client diagnosed with bulimia. The most appropriate initial goal for a client diagnosed with bulimia is? a. Encourage to avoid foods b. Identify anxiety causing situations c. Eat only three meals a day d. Avoid shopping plenty of groceries 10. Nurse Tony was caring for a 41 year old female client. Which behavior by the client indicates adult cognitive development? a. Generates new levels of awareness b. Assumes responsibility for her actions c. Has maximum ability to solve problems and learn new skills d. Her perception are based on reality 11. A neuromuscular blocking agent is administered to a client before ECT therapy. The Nurse should carefully observe the client for? a. Respiratory difficulties b. Nausea and vomiting c. Dizziness d. Seizures 12. A 75 year old client is admitted to the hospital with the diagnosis of dementia of the Alzheimer’s type and depression. The symptom that is unrelated to depression would be? a. Apathetic response to the environment b. “I don’t know” answer to questions c. Shallow of labile effect d. Neglect of personal hygiene 13. Nurse Trish is working in a mental health facility; the nurse priority nursing intervention for a newly admitted client with bulimia nervosa would be to? a. Teach client to measure I & O b. Involve client in planning daily meal c. Observe client during meals d. Monitor client continuously 14. Nurse Patricia is aware that the major health complication associated with intractable anorexia nervosa would be?",
          },
        ],
      },
    ],
  };
