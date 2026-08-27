import type { Subject } from "./types";

export const rconeSubject: Subject = {
  id: "rcone",
  name: "TRA Recalls 1",
  short: "TRA-RC-1",
  description: "Recalls ng TRA - Nursing Practice 1",
  banks: [
    {
      id: "tranpone",
      title: "TRA Nursing Practice 1",
      description: "Nursing Practice 1 Provided by TopRank Academy",
      questions: [
        {
          id: "np1_q1",
          question:
            "The family of Roxas is fond of dogs. A vendor who entered the gate without notice is bitten by one of the pet dogs named Bert. PHN Cords attend to the vendor. Which of the part of body of the vendor will be the MOST affected in terms of rabies?",
          choices: ["Buttocks", "Head", "Feet", "Hand"],
          answer: 1,
          rationale:
            "The head is the most affected part in terms of rabies due to proximity to the brain.",
        },
        {
          id: "np1_q2",
          question:
            "To protect the vendor from the dangers of rabies, PHN Cords advises him to clean the wound thoroughly with soap and water, consult a physician and receive anti-rabies vaccination. Which among the following vaccines can provide active immunity?",
          choices: [
            "1. Purified vero cell vaccine - active\n2. Human rabies immunoglobulin\n3. Equine rabies immunoglobulin\n4. Purified duck-embryo vaccine - active",
            "1 and 4",
            "2 only",
            "3 and 4",
            "1 only",
          ],
          answer: 0,
          rationale:
            "Purified vero cell vaccine and purified duck-embryo vaccine provide active immunity.",
        },
        {
          id: "np1_q3",
          question:
            "The vendor acquired rabies, what will PHN Cords do to protect those who took care of him? He should administer",
          choices: [
            "Pre-exposure prophylactic treatment only for the family of Bert",
            "Post-exposure prophylactic treatment only for the family of the vendor",
            "Pre-exposure prophylactic treatment to Bert and the vendor's families",
            "Post-exposure prophylactic treatment to Bert and the vendor's families",
          ],
          answer: 3,
          rationale:
            "Post-exposure prophylaxis should be given to those exposed to the rabid patient.",
        },
        {
          id: "np1_q4",
          question:
            "PHN Cord's intervention to protect all residents who own pets, especially dogs, should be done by",
          choices: [
            "Coordinating with city/municipal agricultural for immunization of all pets",
            "Coordinating with city/municipal officials to make an ordinance on stray dogs",
            "Massive campaign to families not to own pets at home",
            "Massive campaign for responsible pet ownership",
          ],
          answer: 3,
          rationale: "Responsible pet ownership is the key intervention.",
        },
        {
          id: "np1_q5",
          question:
            "The Field Health Services and Information System (FHSIS) is recording and reporting system in public health care in the Philippines. The following are the objectives of the FHSIS, EXCEPT:",
          choices: [
            "Complete the picture of acute and chronic disease",
            "Ensure data recorded are useful and accurate and disseminated in a timely, easy to use fashion",
            "Minimize recording and reporting burden allowing more time for patient care and promotive activities",
            "Provides standardized facility-level data base which can be used for more in-depth studies",
          ],
          answer: 0,
          rationale:
            "Completing the picture of acute and chronic disease is not an objective of FHSIS.",
        },
        {
          id: "np1_q6",
          question:
            "As a nurse, you should know the process of how these information are processed and consolidated. The fundamental block of the FHSIS system is the",
          choices: [
            "Family treatment record",
            "Output record",
            "Reporting forms",
            "Target/client list",
          ],
          answer: 0,
          rationale: "The family treatment record is the fundamental block of FHSIS.",
        },
        {
          id: "np1_q7",
          question:
            "The monthly field health service activity report is a form used in which of the components of the FHSIS?",
          choices: [
            "Target/client list",
            "Output report",
            "Individual health record",
            "Tally report",
          ],
          answer: 1,
          rationale: "The monthly field health service activity report is an output report.",
        },
        {
          id: "np1_q8",
          question:
            "In using the tally sheet, the recommended frequency in tallying activities and services is",
          choices: ["Weekly", "Quarterly", "Monthly", "Daily"],
          answer: 2,
          rationale: "Tallying is recommended to be done monthly.",
        },
        {
          id: "np1_q9",
          question:
            "To monitor clients registered in long-term regimen such as the Multi-drug Therapy, which component of the reporting system will be most useful?",
          choices: [
            "Output report",
            "Tally report",
            "Target/client list",
            "Individual health record",
          ],
          answer: 2,
          rationale: "The target/client list is most useful for monitoring long-term regimens.",
        },
        {
          id: "np1_q10",
          question:
            "Though he recognizes the remorse of his daughter, Ramon still feels confused regarding the situation. He said he tried his best to support his family and had always been considerate and kind. He and his wife would always give them reminders and advice calmly and never in a nagging manner. But still they failed as parents. The possible nursing diagnosis of Nurse Omar of his family is",
          choices: [
            "Interrupted family process",
            "Impaired parenting",
            "Parental role conflict",
            "Ineffective role performance",
          ],
          answer: 0,
          rationale: "The family is experiencing interrupted family process.",
        },
        {
          id: "np1_q11",
          question:
            "Nurse Omar's conversation with Gina revealed that the young woman still suffers from a syndrome of failure: failure to complete one's normal growth and development, failure to complete education, failure to establish a vocation and become independent and failure to have a life. The nurse Omar's intervention to this problem is",
          choices: [
            "Linear approach with regards to the individual in the context of the family, community and culture that will combat shame and guilt",
            "Lay down the foundation of a future by trusting human association and developing mutual trust initially with the nurse, then the family, and eventually the whole community",
            "Focus on the factors that will help protect Gina towards proximal stimuli for healthy growth and development to develop her resiliency in confronting current and future problem",
            "Transform interactions among family members, strengthen specific roles and functions to strengthen family system in order to eventually cope",
          ],
          answer: 2,
          rationale: "Focus on protective factors to develop resiliency.",
        },
        {
          id: "np1_q12",
          question:
            "In one home visit, Nurse Omar was approached by the 15 year old Alex. He was asking about condom use. He said he has a girlfriend with whom he is madly in love with but does not want her to get pregnant. Nurse Omar's most practical and best advice would be",
          choices: [
            "Postpone sex and suggest other ways to expressing love",
            "Explain to him the difference between sex and love",
            "Teach him by step-to-step correct, continuous and consistent condom use",
            "Discourage him on having a girlfriend and focus more on his studies",
          ],
          answer: 2,
          rationale: "Teaching correct and consistent condom use is the most practical advice.",
        },
        {
          id: "np1_q13",
          question:
            "Ramon complains to Nurse Omar some weird behaviour of Nilda. These past few months, she has decreased sex drive, night sweats and mood swings. He also received weird text message from her such as: 'Do you really love me?', 'What role do I play in your life?', 'Do you still find me attractive?' The best advice of Nurse Omar to Ramon should be",
          choices: [
            "Give her some money for make-over to increase her self-esteem and make her look attractive to him",
            "Accompany her to a psychiatrist",
            "Ignore his wife or tell her she is too old to act like a teen-ager",
            "Give reassurance that she is the best person who came to his life",
          ],
          answer: 1,
          rationale: "Accompanying her to a psychiatrist is appropriate for possible depression.",
        },
        {
          id: "np1_q14",
          question:
            "Apparently, the nurse interventions have improved family relationships. The members are now communicating with one another and are excited in preparing for a family affair, which is the baptism of Beatrice. Nurse Omar was asked to be the godfather of the child. His best response is",
          choices: [
            "Accept and proudly say that Beatrice will be his 49th godchild",
            "Refuse and make an alibi that he belongs to another religion",
            "Accept and express gratitude for the trust accorded him by the family",
            "Politely decline and explain that his relationship with the family must not go beyond professional",
          ],
          answer: 3,
          rationale: "The nurse should maintain professional boundaries.",
        },
        {
          id: "np1_q15",
          question:
            "Belinda, the PHN in the Municipality of La Trinidad, learned from the residents that children and some elderly had been suffering from respiratory and skin ailments allegedly due to the bad smell and dark smoke emitting from the factory nearby. She was invited to the community assembly that was initiated by the barangay council. The barangay captain asked, 'What can you do to help solve the problem?' What would be the right response of Nurse Belinda?",
          choices: [
            '"Well, your problem is easy to solve. I have here some cough syrup, ointments for the skin and some antibiotics. I will distribute this after the meeting."',
            '"Who among you here have children who are suffering from respiratory and skin diseases? How about the adults who are here? Are you also having the same problems?"',
            '"I suppose you gave a lot of thought about the problem and its possible solution. However, treating your children and the elderly is not the first solution. We have to go to the root cause of the problem."',
            '"May I ask you what solution have you identified for the community problem?"',
          ],
          answer: 2,
          rationale: "The nurse should address the root cause of the problem.",
        },
        {
          id: "np1_q16",
          question:
            "Nurse Lovely, a newly promoted senior nurse in Obstetrics ward, is attending a seminar on management and leadership. Nurse Lovely learns the five principles of goal setting in which the senior nurse must provide enough time for OB nurse to improve performance. This is called",
          choices: ["Challenge", "Commitment", "Feedback", "Task complexity"],
          answer: 2,
          rationale: "Feedback is providing time for performance improvement.",
        },
        {
          id: "np1_q17",
          question:
            "The nurse also learns that continuous training is a personal as well as an organizational goal. Choose the statements that are true regarding continuous training.",
          choices: [
            "1. Training employees is an excellent investment and a cost to an institution\n2. Continuous training is more of a personal responsibility than institutional\n3. Cross training and job rotation provide on-going part-time learning experience\n4. Select the best people when hiring employees and invest their retention through continuous training",
            "3 and 4",
            "1 and 2",
            "1 and 4",
            "2 and 3",
          ],
          answer: 0,
          rationale:
            "Cross-training and selecting the best people for retention are true statements.",
        },
        {
          id: "np1_q18",
          question:
            "Noting the importance of Nurse-Patient-Relationship, Nurse Lovely reviewed Hildegard Peplau's Theory which identified three phases, the FIRST of which is when the pregnant woman is",
          choices: [
            "Feels the need to seek professional assistance",
            "Demonstrates self-reliance in caring for herself",
            "Understands the communication of Nurse Lovely regarding the services offered",
            "Begins to have feeling belonging",
          ],
          answer: 0,
          rationale:
            "The first phase of Peplau's theory is when the patient feels the need to seek professional assistance.",
        },
        {
          id: "np1_q19",
          question:
            "Nurse Lovely took note that evaluating the OB staff is an on-going function of management. Some of the reasons for conducting evaluation include, EXCEPT to",
          choices: [
            "Provide an indication of the costs of poor quality services",
            "Justify the use of resources",
            "Dissuade self-evaluation of OB staff",
            "Ensure that quality of care is provided by the OB staff",
          ],
          answer: 2,
          rationale: "Evaluation should encourage, not dissuade, self-evaluation.",
        },
        {
          id: "np1_q20",
          question:
            "You are an OB nurse in an out-patient department of a hospital. You encounter pregnant women with complications. A 35-year old woman, on her 2nd trimester of pregnancy with insulin-dependent diabetes mellitus, comes to you for some advice. What is the PRIORITY message for her at this time?",
          choices: [
            "Infants of diabetic mothers are big which can result in more difficult delivery",
            "Breastfeeding is highly recommended and insulin use is not contraindicated",
            "Achievement of optimal glycemic control is of utmost importance in preventing congenital anomalies",
            "Her insulin requirements will likely increase beginning 3rd trimester of pregnancy",
          ],
          answer: 2,
          rationale: "Optimal glycemic control is crucial in preventing congenital anomalies.",
        },
        {
          id: "np1_q21",
          question:
            "A 30-year old G6P5 woman at 12 weeks has just begun prenatal care. Her initial laboratory reveals that she has human immunodeficiency virus (HIV) infection. What would be a priority evidence-based nurse information for this patient?",
          choices: [
            "Breastfeeding is still recommended due to the great benefits to the infant",
            "Pregnancy is known to accelerate the course of HIV disease in the mother",
            "Medication for HIV infection is safe and can greatly reduce transmission of HIV to the infant",
            "Breastfeeding will potentiate the transmission of HIV from the mother to the child",
          ],
          answer: 2,
          rationale: "HIV medication can greatly reduce mother-to-child transmission.",
        },
        {
          id: "np1_q22",
          question:
            "Nurse Dana, a nursing staff applicant, passed both written and oral examinations. Because she knows the head of office, she promised to submit all her credentials after she has 'fix things up.' She was appointed as Nurse I with a temporary status until she submits all her credentials, including her PRC license. Her evaluation performance was satisfactory. After a year though, she had to renew her PRC registration and identification (ID) card. What action must the nursing administration do FIRST?",
          choices: [
            "Report the matter to the head of office who had the discretion to appoint the nurse",
            "Verify with the Professional Regulation Commission regarding the status of Nurse Dana",
            "Confront Nurse Dana and terminate her",
            "Write a letter to the Civil Service Commission for proper action to Nurse Dana",
          ],
          answer: 1,
          rationale: "Verify the status with PRC first.",
        },
        {
          id: "np1_q23",
          question:
            "It was found out that Nurse Dana did not pass the Nurse License Examinations (NLE). What legal action should be filed against her?",
          choices: [
            "Dishonesty",
            "Conduct unbecoming of professional",
            "Falsification of documents",
            "Estafa",
          ],
          answer: 0,
          rationale: "Claiming to be a licensed nurse without passing the NLE is dishonesty.",
        },
        {
          id: "np1_q24",
          question:
            "In case Dana have medication error during her tour of duty, the head of office can be liable because of the law called",
          choices: ["Unethical conduct", "Respondeat superior", "Politicking", "Res Ipsa Loquitur"],
          answer: 1,
          rationale: "Respondeat superior makes the employer liable for employee actions.",
        },
        {
          id: "np1_q25",
          question:
            "All Nurses must understand that after graduation they should pass the NLE. To be registered in the roster, they should take the Professional Oath with a EXCEPT.",
          choices: [
            "Member of Sangguniang Panlalawigan",
            "Governor of Philippine Nurse Association",
            "Member of the Professional Regulatory Board of Nursing",
            "Provincial Governor",
          ],
          answer: 0,
          rationale:
            "A member of Sangguniang Panlalawigan cannot administer the professional oath.",
        },
        {
          id: "np1_q26",
          question:
            "Upon reaching the house, a local herbolaria, Nanay Isa was already attending to the boy. She said that the boy played near the river and the bad spirits entered his body. The MOST appropriate remark the nurse make is",
          choices: [
            '"Go on. Do what you have to do, then I will take over."',
            '"Nanay Isa, your intervention is entirely wrong."',
            "\"It's good you're here. You can drive away the spirits that entered the boy's body.\"",
            '"You have to be sure that all the evil spirits have been driven out of the boy\'s body."',
          ],
          answer: 0,
          rationale: "The nurse should respect cultural practices and integrate with medical care.",
        },
        {
          id: "np1_q27",
          question:
            "After a few minutes, Nanay Isa took a big bowl of soup and gave to the boy. The BEST remark of the Nurse is",
          choices: [
            '"I also drink a soup when I get sick. How about you, Nanay Isa, do you do the same?"',
            '"The soup could have been better if you put lemon grass on it."',
            '"Come on, tell me why soup must be given to a child with fever"',
            '"That\'s correct. Increasing fluid intake will help lower down temperature."',
          ],
          answer: 3,
          rationale: "The nurse validates the correct health practice.",
        },
        {
          id: "np1_q28",
          question:
            "Finally, Nanay Isa took out from her pocket a dried rose flower and place it on the boy's forehead. How will Nurse Elsa handle this action?",
          choices: [
            "Tell her not to use the dried flower again because it does not have any good effect on the sick",
            "Ask for an extra piece of fried rose flower and promise to use it",
            "Ask the herbolaria the rationale for the intervention",
            "Leave the intervention as is. Anyway the intervention is neutral; not harmful nor beneficial",
          ],
          answer: 3,
          rationale: "Neutral cultural practices that are not harmful may be left as is.",
        },
        {
          id: "np1_q29",
          question:
            "The local health board established a reproductive health clinic in the main health center. Two nurses, Hunter and Irene, were assigned to handle services to address problems related to sexuality, reproductive health and fertility problems. Nurse Hunter classifies cases according to the major categories of reproductive tract infections. Which of the following is NOT part of such classification?",
          choices: [
            "Iatrogenic infections as aftermath of invasive procedures like catheterization and intra-uterine device (IUD) insertion",
            "Urinary tract infections among male and female patients",
            "Sexually-transmitted infections",
            "Endogenous infections resulting from poor personal hygiene",
          ],
          answer: 1,
          rationale:
            "Urinary tract infections are not classified as reproductive tract infections.",
        },
        {
          id: "np1_q30",
          question:
            "Irene handles the screening for gonorrhoea every two weeks among female sex workers in the implementation of PD 856. In differential diagnosis of discharge among infected clients, which of the following colors discharge will Irene take note to identify gonorrhoea from other causes?",
          choices: [
            "Greenish yellow as differentiated from mucoid white of trichomoniasis",
            "Mucoid white as compared to grayish-white discharge of vaginosis",
            "Grayish white as differentiated from mucoid white of chlamydia",
            "Yellowish white as compared to trichomoniasis greenish-yellow",
          ],
          answer: 0,
          rationale: "Gonorrhea typically presents with greenish-yellow discharge.",
        },
        {
          id: "np1_q31",
          question:
            "Nurse Hunter was invited by a women's group to give a lecture on healthy sexuality. In the expectation check, he noted that there are previous misconceptions expressed by the participants. Which of the following statements are correct?",
          choices: [
            "It is the obligation of the wife to give in to sex every time he asks for it",
            "Sexuality is fluid and may change",
            "Effeminate men are gays",
            "Homosexuality, being gay or lesbian, is an abnormality",
          ],
          answer: 1,
          rationale: "Sexuality is fluid and may change is a correct statement.",
        },
        {
          id: "np1_q32",
          question:
            "One of the clients was positive to Gonorrhea. Nurse Irene explained that gonorrhoea and chlamydia, if left untreated can lead to Pelvic Inflammatory Disease (PID). Such condition may cause infertility due to",
          choices: [
            "Foul smelling odor discharge which can kill the ovum",
            "An unknown cause",
            "Scarring which can lead to tubal occlusion",
            "Purulent discharge which can kill the sperm",
          ],
          answer: 2,
          rationale: "PID causes scarring leading to tubal occlusion and infertility.",
        },
        {
          id: "np1_q33",
          question:
            "Nurse Irene further explained that a test used to determine tubal patency using a radiopaque material is the",
          choices: [
            "Post-coital infertility test",
            "Sims Huhner test",
            "Friedman's test",
            "Hysterosalpingography",
          ],
          answer: 3,
          rationale: "Hysterosalpingography uses radiopaque material to determine tubal patency.",
        },
        {
          id: "np1_q34",
          question:
            "Ela, 21 years old, is a law graduate. She wants to review for the Bar but thinks she is pregnant. She said she has regular menses but does not know when ovulation usually occurs. This has something to do her fertility period during her last sexual intercourse with her husband. As a nurse, what would you tell Ela regarding ovulation? The ovulation usually corresponds to the life of the corpus luteum which occurs approximately",
          choices: [
            "14 days after the first day of the succeeding menstrual",
            "7 days after the first day of the succeeding menstrual",
            "7 days before the first day of the succeeding menstrual",
            "14 days before the first day of the succeeding menstrual",
          ],
          answer: 3,
          rationale: "Ovulation occurs approximately 14 days before the next menstrual period.",
        },
        {
          id: "np1_q35",
          question:
            "Ela insisted she might have been fertile during the time of sexual intercourse. The nurse explains that absolute period of fertility is the span of time that a woman is likely to be pregnant when she engages in unprotected sex",
          choices: [
            "Several days after ovulation",
            "During ovulation",
            "Immediately after ovulation",
            "Immediately before ovulation",
          ],
          answer: 3,
          rationale: "The fertile period includes the days immediately before ovulation.",
        },
        {
          id: "np1_q36",
          question:
            "The nurse proceeded to take the menstrual history of Ela to find out if she is likely to be pregnant. Which of the following determines the date of onset of last menstrual period (LMP)? It is the",
          choices: [
            "Duration and character of the LMP",
            "Implantation bleeding",
            "Spotting after the LMP",
            "Bleeding before the last menstrual period (LMP)",
          ],
          answer: 0,
          rationale: "The date of onset of LMP is determined by its duration and character.",
        },
        {
          id: "np1_q37",
          question:
            "The nurse also asked about Ela's secondary amenorrhea that would most likely indicate her pregnancy. Secondary amenorrhea is cessation of menses for more than ___ months, after regular menstrual cycle has been established.",
          choices: ["Five", "Three", "Six", "Four"],
          answer: 2,
          rationale: "Secondary amenorrhea is cessation of menses for more than 6 months.",
        },
        {
          id: "np1_q38",
          question:
            "The nurse also asked for presence of secondary dysmenorrhea. Which of the following conditions is NOT included under secondary dysmenorrhea?",
          choices: [
            "Endometriosis",
            "Pelvic inflammatory disease",
            "Primary dysmenorrhea",
            "Uterine fibroids",
          ],
          answer: 2,
          rationale: "Primary dysmenorrhea is not included under secondary dysmenorrhea.",
        },
        {
          id: "np1_q39",
          question:
            "Carla another patient in the clinic just found out that she is pregnant. She asks when would be her delivery date. What is the expected date of confinement (EDC) of a pregnant woman whose menstruation was from April 10 to April 13?",
          choices: ["January 17", "January 20", "July 17", "July 20"],
          answer: 0,
          rationale: "Using Nagele's rule: April 10 + 7 days - 3 months = January 17.",
        },
        {
          id: "np1_q40",
          question:
            "The nurse noted the Fundic height of Anna is at the level of the umbilicus. In documenting the data using Bartholomew's rule, the most probable age of gestation (AOG) in week is:",
          choices: ["12 weeks", "16 weeks", "20 weeks", "32 weeks"],
          answer: 2,
          rationale:
            "Fundic height at the umbilicus corresponds to approximately 20 weeks gestation.",
        },
        {
          id: "np1_q41",
          question:
            "Alice on OPD nurse admitted Mrs. Felita to the antepartum unit with a diagnosis of severe Hyperemesis Gravidarum. When the nurse reviews the laboratory tests, she would expect which of these findings?",
          choices: [
            "Increased hematocrit",
            "Decreased blood urea nitrogen",
            "Increased potassium",
            "Low urine specific gravity",
          ],
          answer: 0,
          rationale: "Hyperemesis gravidarum causes dehydration, leading to increased hematocrit.",
        },
        {
          id: "np1_q42",
          question:
            "Nurse Alice suspects presence of sexually transmitted infection to Mrs. Felia specifically Syphilis to a pregnant client. Which of the following tests will be recommended to the client to confirm diagnosis?",
          choices: ["Complete blood count", "Urinalysis", "Benedict's test", "VDRL"],
          answer: 3,
          rationale: "VDRL is the test used to diagnose syphilis.",
        },
        {
          id: "np1_q43",
          question:
            "Mrs. Ilagan a 26 year old Primigravida is being prepared for a nonstress test. This is an assessment test based on what phenomenon?",
          choices: [
            "Braxton-Hicks contractions cause fetal heart rate alterations.",
            "Fetal heart rate slows in response to a uterine contraction.",
            "Fetal movement causes an increase in maternal heart rate.",
            "Fetal heart sounds increase in connection with fetal movement.",
          ],
          answer: 3,
          rationale:
            "Nonstress test is based on fetal heart rate acceleration with fetal movement.",
        },
        {
          id: "np1_q44",
          question:
            "After a non-stress test is completed, Nurse Ilagan observes on a monitor of the fetal strip results that the fetal heart rate accelerated 15 BPM with each fetal movement. The acceleration lasted for 20 seconds and occurred 3 times during the 20 minute test. The Nurse is correct in interpreting the test as a:",
          choices: ["Reactive test", "Non-reactive test", "Positive test", "Negative test"],
          answer: 0,
          rationale:
            "Accelerations of 15 BPM lasting 15 seconds with fetal movement indicate a reactive test.",
        },
        {
          id: "np1_q45",
          question:
            "Another client is also scheduled for Amniocentesis. Nurse Carol explains to the client that one of the risks of amniocentesis is:",
          choices: ["Rupture of membranes", "Premature labor", "Fetal death", "Malformation"],
          answer: 0,
          rationale: "Rupture of membranes is a risk of amniocentesis.",
        },
        {
          id: "np1_q46",
          question:
            "The nurse is assessing the fetal heart monitor strip of a client having a contraction stress test. Which of the following, if noted by the nurse, would indicate a negative test?",
          choices: [
            "No late decelerations after any contractions on a strip with three contractions within a 10-minute time frame.",
            "Late decelerations after at least 2 contractions on a strip with three contractions within a 10-minute time frame.",
            "Late decelerations after one contraction on a strip with three contractions within a 10-minute time frame.",
            "An increase in fetal heart rate after three contractions within a 10-minute time frame.",
          ],
          answer: 0,
          rationale: "A negative contraction stress test shows no late decelerations.",
        },
        {
          id: "np1_q47",
          question:
            "The client complains of feeling tired and thirsty. The nurse evaluates that the mother understand the reason for taking only small sips of water and ice chips during labor. Which of the following statement expressed by the mother would reflect she understands the situation? When:",
          choices: [
            "the body normally has a sufficient store of energy",
            "the digestive process is normally slower during labor",
            "the intestinal tract should be completely empty before delivery in order to avoid infecting the baby",
            "Cesarian section is always a possibility even in normal labor",
          ],
          answer: 1,
          rationale: "Digestion is slower during labor, so small sips are recommended.",
        },
        {
          id: "np1_q48",
          question:
            "Kim, a 27 year old, multigravida client, has been transferred to the delivery room after spontaneous rupture of membrane and crowning was noted by the nurse in charge. You know that your teaching has been effective when the laboring client's partner shouts, 'She's crowning!' as:",
          choices: [
            "You first start to see a little of the baby's head.",
            "The baby's head recedes upward between pushing contractions.",
            "The perineum is thin and stretching around the occiput.",
            "The mouth and nose are being suctioned.",
          ],
          answer: 0,
          rationale: "Crowning means the baby's head is visible at the vaginal opening.",
        },
        {
          id: "np1_q49",
          question:
            "To deliver her infant, a woman is asked to push with contractions to deliver. Ensuring the standards of nursing practice, which of the following is the most effective and safest pushing technique to teach her?",
          choices: [
            "Lying supine with legs in lithotomy stirrups.",
            "Squatting while holding her breath.",
            "Head elevated, grasping knees, breathing out.",
            "Lying on side, arms grasped on abdomen.",
          ],
          answer: 2,
          rationale:
            "Head elevated with knees grasped and breathing out is the safest pushing technique.",
        },
        {
          id: "np1_q50",
          question:
            "The delivery room nurse based on the standards of nursing practice, episiotomy is usually indicated for which of the following purposes?",
          choices: [
            "To prevent distention of the bladder.",
            "To relieve pressure on the fetal head.",
            "To aid in contraction of the uterus following delivery.",
            "Done primarily for the physician's benefit.",
          ],
          answer: 1,
          rationale: "Episiotomy relieves pressure on the fetal head.",
        },
        {
          id: "np1_q51",
          question:
            "The Nurse in the delivery room is attending to Mrs. Cruz on labor to make sure that maternal injury will be prevented during the postpartum period. Which of the following instruction should the nurse consider to prevent postpartum hemorrhage?",
          choices: [
            "Massage the fundus regularly",
            "Postpone breastfeeding of the baby",
            "Apply warm compress to her abdomen",
            "Have bed rest and yield early ambulation",
          ],
          answer: 0,
          rationale: "Regular fundal massage helps prevent postpartum hemorrhage.",
        },
        {
          id: "np1_q52",
          question:
            "When the placenta has been delivered, the first thing the nurse should do in adherence with the standards of nursing practice is to:",
          choices: [
            "Inspect the placenta for completeness of the cotyledons",
            "Palpate the uterus to see if it is contracted",
            "Administer oxytocin agents as ordered",
            "Estimate the blood loss to detect any bleeding",
          ],
          answer: 0,
          rationale: "The placenta should be inspected for completeness.",
        },
        {
          id: "np1_q53",
          question:
            "The delivery room nurse palpates the client's fundus immediately after delivery of the placenta and assess that it is boggy. The nurse massages the patient's uterus until it is firm. Considering evidence-based nursing practice, which medication would the nurse anticipate might need to be administered if the uterus becomes boggy again?",
          choices: ["Oxytocin (Pitocin)", "Ibuprofen", "Methylergonovine", "Magnesium sulfate"],
          answer: 0,
          rationale: "Oxytocin is the first-line medication for uterine atony.",
        },
        {
          id: "np1_q54",
          question:
            "Mrs. Evita 28 years old gave birth through Cesarian section. The Nurse examines her and identify the presence of lochia serosa and feels the fundus 4 fingerbreadths below the umbilicus. This indicated that the time elapsed is:",
          choices: [
            "1 to 3 days postpartum",
            "4 to 5 days postpartum",
            "6 to 7 days postpartum",
            "8 to 9 days postpartum",
          ],
          answer: 1,
          rationale:
            "Lochia serosa and fundus 4 fingerbreadths below umbilicus indicate 4-5 days postpartum.",
        },
        {
          id: "np1_q55",
          question:
            "In assessing a new mother's response to her son's birth on the first post partum day, which behavior does the Nurse expect to find present?",
          choices: [
            "Talkativeness and dependency",
            "Autonomy and Independence",
            "Disinterest in her own body function",
            "Interest in learning to care for the baby",
          ],
          answer: 3,
          rationale:
            "Interest in learning to care for the baby is expected on the first postpartum day.",
        },
        {
          id: "np1_q56",
          question:
            "A Maternal-Child staff nurse is attending to the pregnant mothers with varied obstetric disorders. A comprehensive assessment was conducted. One of the clients seeks further question regarding Placenta Previa. Which of the following would be the physiologic basis for a Placenta Previa?",
          choices: [
            "A loose placental implantation.",
            "Low placental implantation.",
            "A placenta with multiple lobes.",
            "A uterus with a midseptum.",
          ],
          answer: 1,
          rationale: "Placenta previa is due to low placental implantation.",
        },
        {
          id: "np1_q57",
          question:
            "A patient diagnosed with Placenta Previa should be given specific instruction before discharge from the hospital. To ensure standards of nursing practice, which among the following should be considered by the nurse as part of instruction to the client?",
          choices: [
            "Eat a low calorie diet",
            "May resume with regular exercise if minimal bleeding has been noted.",
            "Avoid sexual intercourse.",
            "Avoid intake of spicy foods",
          ],
          answer: 2,
          rationale: "Avoiding sexual intercourse is important to prevent bleeding.",
        },
        {
          id: "np1_q58",
          question:
            "Another pregnant mother wants to be clarified on her laboratory studies which reveals Blood Type-A and she is Rh negative. Problems related to incompatibility may develop in her infant if the infant is:",
          choices: ["Type O", "Rh positive", "Delivered preterm", "Type B, Rh negative"],
          answer: 1,
          rationale:
            "Rh incompatibility occurs when the mother is Rh negative and the infant is Rh positive.",
        },
        {
          id: "np1_q59",
          question:
            "An Obstetric nurse is assessing a 39 year old pregnant woman who is married to an American citizen and Rh negative, is seen by the Physician during the first trimester of pregnancy. A test to detect presence of antibodies was conducted to her. The nurse's teaching is effective if the client understands that she will first receive Rho (D) immunoglobulin (RhIg):",
          choices: [
            "If the result of Indirect Coomb's test is positive",
            "If the result of Indirect Coomb's test is negative",
            "If the result of Direct Coomb's test is positive",
            "If the result of Direct Coomb's test is negative",
          ],
          answer: 1,
          rationale: "RhIg is given if the Indirect Coomb's test is negative.",
        },
        {
          id: "np1_q60",
          question:
            "During the prenatal visit the Nurse explains further to a client who is Rh negative that RhogAM will be administered:",
          choices: [
            "Weekly during the ninth month, because this is her third pregnancy",
            "Within 72 hours after delivery if infant is found to be Rh positive",
            "During the second trimester, if an Amniocentesis indicates a problem",
            "To her infant, immediately after delivery if the Coomb's test is positive",
          ],
          answer: 1,
          rationale: "RhogAM is given within 72 hours after delivery if the infant is Rh positive.",
        },
        {
          id: "np1_q61",
          question:
            "The birth process affects the physiologic systems of the mother and the fetus. Staff nurse Jamie is assigned in the Labor and Delivery Room Area. A G7P6 woman is in the hospital only 15 minutes when she begins to deliver precipitously. The fetal head begins to deliver as you walk into the labor room. The best action of Nurse Jamie would be to:",
          choices: [
            "place a hand gently on the fetal head to guide delivery.",
            "ask her to push with the next contraction so delivery is rapid.",
            "assess blood pressure and pulse to detect placental bleeding.",
            "attach a fetal monitor to determine fetal status.",
          ],
          answer: 0,
          rationale: "Guiding the fetal head gently helps prevent perineal trauma.",
        },
        {
          id: "np1_q62",
          question:
            "Nurse Jamie in a labor room is preparing to care for a hypertonic uterine dysfunction. The nurse observed that the client is experiencing uncoordinated contractions and erratic in their frequency, duration and intensity. The priority nursing intervention in caring for the client is to:",
          choices: [
            "Monitor the oxytocin (Pitocin) infusion closely",
            "Provide pain relief measures",
            "Prepare client for amniotomy",
            "Promote ambulation every 30 minutes",
          ],
          answer: 1,
          rationale: "Pain relief is the priority for hypertonic uterine dysfunction.",
        },
        {
          id: "np1_q63",
          question:
            "Mrs. Barbara 34 years old is being admitted in the hospital unit for severe Preeclampsia. When deciding on where to place her, which of the following areas would be most appropriate?",
          choices: [
            "By the nursery so she can maintain hope she will have a child.",
            "Near the elevator so she can be transported quickly.",
            "Near the nurse's station so she can be observed closely.",
            "In the back hallway where there is a quiet, private room.",
          ],
          answer: 2,
          rationale:
            "Close observation near the nurse's station is important for severe preeclampsia.",
        },
        {
          id: "np1_q64",
          question:
            "The Physician orders intravenous Magnesium Sulfate for Mrs. Barbara. Which of the following medications would the Nurse has readily available at the client's bedside?",
          choices: [
            "Diazepam (Valium)",
            "Calcium Gluconate",
            "Hydralazine (Apresoline)",
            "Phenytoin (Dilantin)",
          ],
          answer: 1,
          rationale: "Calcium gluconate is the antidote for magnesium sulfate toxicity.",
        },
        {
          id: "np1_q65",
          question:
            "Which of the following signs would alert the Nurse that Mrs. Barbara whose latest blood pressure 160/110, may be about to experience a seizure?",
          choices: [
            "Decreased contraction intensity",
            "Epigastric pain",
            "Decreased temperature",
            "Hyporeflexia",
          ],
          answer: 1,
          rationale: "Epigastric pain is a warning sign of impending seizure in preeclampsia.",
        },
        {
          id: "np1_q66",
          question:
            "As a Pediatric Nurse you are confronted with varied concerns regarding growth and development from parents, teachers, and children. The nurse recognizes the need for health supervision and anticipatory guidance for these groups. The best way for an infant's father to help his child complete the developmental task of the first year is to:",
          choices: [
            "expose her to many caregivers to help her learn variability.",
            "talk to her at a special time each day.",
            "respond to her consistently.",
            "keep her stimulated with many toys.",
          ],
          answer: 2,
          rationale: "Consistent responding helps the infant develop trust.",
        },
        {
          id: "np1_q67",
          question:
            "Whenever the parents of a 10-month-old leave their hospitalized child for short periods, he begins to cry and scream. The nurse explains that this behavior demonstrates that the child:",
          choices: [
            "Needs to remain with his parents at all times.",
            "Is experiencing separation anxiety.",
            "Is experiencing discomfort.",
            "Is extremely spoiled.",
          ],
          answer: 1,
          rationale: "Separation anxiety is common in infants around 10 months.",
        },
        {
          id: "np1_q68",
          question:
            "Dennis, a preschooler sees you pour his liquid medicine from a tall, thin glass into a short, wide one, he will probably reason that:",
          choices: [
            "the amount of medicine is less (the glass is not as full).",
            "the amount of medicine did not change, only the appearance.",
            "pouring medicine hurts it in some way because it changes.",
            "the glass changed shape to accommodate the medicine.",
          ],
          answer: 0,
          rationale: "Preschoolers lack conservation concept; they think the amount changed.",
        },
        {
          id: "np1_q69",
          question:
            "A school nurse prepares a lecture on Puberty changes for first year high school girls. She asks the group, 'What is the first sign of Puberty?' A student correctly replies:",
          choices: [
            '"The appearance of breast buds."',
            '"An increase in energy and appetite."',
            '"The occurrence of the first menarche."',
            '"Appearance of body odor."',
          ],
          answer: 0,
          rationale: "The appearance of breast buds is the first sign of puberty in girls.",
        },
        {
          id: "np1_q70",
          question:
            "When encouraging the hospitalized physically challenged or chronically ill adolescent to develop and maintain a sense of identity, you would:",
          choices: [
            "provide the opportunity for individual decision making.",
            "provide physical comfort to the individual.",
            "ask the parents what the adolescent is capable of doing.",
            "provide care until the adolescent insists on being independent.",
          ],
          answer: 0,
          rationale: "Providing opportunities for decision making supports identity development.",
        },
        {
          id: "np1_q71",
          question:
            "Nurse Paterno a Pediatric Nurse enjoys taking care of children in the ward even though it is so difficult and takes so much time to attend to their needs. Elvis 8 months old was diagnosed with Acute Laryngotracheobronchitis (LTB) and is managed inside a mist tent. As Nurse Paterno conducts assessment, which of the following observations would lead her to suspect that airway occlusion is occurring?",
          choices: [
            "He states he is tired and wants to sleep.",
            "His respiratory rate is gradually increasing.",
            "His cough is becoming harsher.",
            "His nasal discharge is increasing.",
          ],
          answer: 1,
          rationale: "Increasing respiratory rate indicates worsening airway obstruction.",
        },
        {
          id: "np1_q72",
          question:
            "A child is scheduled for a Myringotomy with placement of Tympanostomy tube. What is the goal of this procedure that Nurse Paterno will discuss with the parents?",
          choices: [
            "To decrease infection in the ear",
            "To irrigate the eustachian tube",
            "To correct a malformation in the inner ear",
            "To equalize pressure in the tympanic membrane",
          ],
          answer: 3,
          rationale: "Tympanostomy tubes equalize pressure in the middle ear.",
        },
        {
          id: "np1_q73",
          question:
            "An 8 year old female child was admitted in the hospital with medical diagnosis of Acute Rheumatic fever. When obtaining a health history from the child's mother, the nurse should ask the questions to determine if the child was recently ill with:",
          choices: ["Mumps", "Measles", "A viral flu", "A sore throat"],
          answer: 3,
          rationale: "Rheumatic fever is preceded by streptococcal sore throat.",
        },
        {
          id: "np1_q74",
          question:
            "You would teach the mother of a boy with Tetralogy of Fallot (TOF) that if he suddenly becomes cyanotic and dyspneic to:",
          choices: [
            "place him in a semi-Fowler's position in an infant seat.",
            "lie him supine with the head turned to one side.",
            "lie him prone, being sure he can breathe easily.",
            "place him in a knee-chest position.",
          ],
          answer: 3,
          rationale:
            "Knee-chest position increases systemic vascular resistance and reduces cyanosis.",
        },
        {
          id: "np1_q75",
          question:
            "Dyspnea, cough, weight gain, weakness, and edema are classic signs and symptoms of which condition?",
          choices: ["Pericarditis", "Hypertension", "Myocardial infarction (MI)", "Heart failure"],
          answer: 3,
          rationale: "These are classic signs of heart failure.",
        },
        {
          id: "np1_q76",
          question:
            "There are varied Pediatric disorders that require comprehensive assessment and nursing interventions. The following scenarios refer to health problems of children. A 5-week-old infant is brought to the pediatrician's office with symptoms of irritability, weight loss, and projectile vomiting. On physical examination, the infant appears dehydrated. From these symptoms, you know that the infant probably has:",
          choices: [
            "Hirschsprung's disease",
            "Tracheoesophageal Fistula",
            "Pyloric stenosis",
            "Intussusception",
          ],
          answer: 2,
          rationale:
            "Projectile vomiting and weight loss in a 5-week-old indicates pyloric stenosis.",
        },
        {
          id: "np1_q77",
          question:
            "Pediatric Nurse admitted a post cleft palate repair child and immediately the nurse should position the child:",
          choices: ["Left side lying.", "Prone.", "Dorsal recumbent.", "Semi Fowler's."],
          answer: 3,
          rationale: "Semi-Fowler's position prevents aspiration after cleft palate repair.",
        },
        {
          id: "np1_q78",
          question:
            "Another neonate is suspected of having a tracheoesophageal fistula. Priority nursing care until the diagnosis is confirmed includes:",
          choices: [
            "monitoring the neonate carefully during and after feedings",
            "elevating the neonate's head after feedings",
            "feeding only glucose",
            "feeding nothing by mouth",
          ],
          answer: 3,
          rationale: "NPO status is maintained until tracheoesophageal fistula is confirmed.",
        },
        {
          id: "np1_q79",
          question:
            "Upon interviewing the parents of the child with Acute Glomerulonephritis, the nurse understands that which information collected is most often associated with this condition?",
          choices: [
            "Nausea and vomiting for the last 24 hours",
            "Streptococcal throat infection 2 weeks prior to diagnosis",
            "History of urinary tract infection for 5 days",
            "Pruritus for 1 week prior to diagnosis",
          ],
          answer: 1,
          rationale: "Acute glomerulonephritis is often preceded by a streptococcal infection.",
        },
        {
          id: "np1_q80",
          question:
            "A newly admitted 5-year old child in the Pediatric ward is diagnosed with Wilms Tumor. Upon initial interview, the nurse would be most concerned about which statement by the child's mother?",
          choices: [
            "My child has lost 3 pounds in the last month.",
            "Urinary output seemed to be less over the past 2 days.",
            "All the pants have become tight around the waist.",
            "The child prefers some salty foods more than others.",
          ],
          answer: 0,
          rationale: "Weight loss is a concern in Wilms tumor.",
        },
        {
          id: "np1_q81",
          question:
            "A newly married couple Berta and Bart wants to practice Family Planning to prepare a good future for their family. Nurse Bing a Family Planning Counselor is planning a lecture regarding the different methods of family planning. Which of the following family planning method which identifies the fertile and infertile days of the menstrual cycle as determined through a combination of observations made on the cervical mucus, basal body temp recording and other signs of ovulation?",
          choices: [
            "Basal Body Temperature",
            "Standard Days Method",
            "Sympto-thermal Method",
            "Lactational Amenorrhea Method",
          ],
          answer: 2,
          rationale: "Sympto-thermal method combines cervical mucus and BBT observations.",
        },
        {
          id: "np1_q82",
          question:
            "During a family planning seminar conducted in the Barangay Health Center, Nurse Bing was asked by Berta, a married woman who wants to try using contraceptives, if it is true that contraceptives will render couples sterile. Nurse Bing's response should be:",
          choices: [
            '"Yes, It\'s true."',
            '"Yes, If you are already using it for more than 3 months."',
            '"No, It will not cause sterility if you are also using condoms."',
            '"No, Once you stop using the contraceptive method, you can have children again."',
          ],
          answer: 3,
          rationale: "Contraceptives do not cause permanent sterility.",
        },
        {
          id: "np1_q83",
          question:
            "Bart the husband, further asked Nurse Bing if contraceptive method will result to loss of sexual desire. Nurse Bing's most appropriate response would be:",
          choices: [
            '"No, but it will make you uncomfortable with your sexual relationship."',
            '"Yes, it causes lack of sexual desire of the male partner."',
            '"Yes, it causes lack of sexual desire of the female partner."',
            '"No, it can actually enhance your sexual relationship."',
          ],
          answer: 3,
          rationale:
            "Contraceptives can enhance sexual relationships by reducing pregnancy anxiety.",
        },
        {
          id: "np1_q84",
          question:
            "In a CHN class, a student asked Mr. Pablo, the Clinical Instructor, if family planning methods can cause abortion. As an instructor, Mr. Pablo's response should be:",
          choices: [
            '"No, family planning prevents pregnancy, but it does not terminate pregnancy."',
            '"No, family planning puts a pregnant woman at risk for miscarriage, but not abortion."',
            '"Yes, family planning can cause abortion."',
            '"Yes, if the couple is using the artificial methods of family planning."',
          ],
          answer: 0,
          rationale: "Family planning prevents pregnancy, not terminates it.",
        },
        {
          id: "np1_q85",
          question:
            "Mackle-More, a Public Health Nurse (PHN), is assigned in conducting seminars on Family Planning Program in the different Barangays. She is aware that the roles of PHNs on Family Planning Program are the following EXCEPT:",
          choices: [
            "Provide counseling among the clients to help increase family planning acceptors and avoid defaulters.",
            "Ensure availability of family planning supplies and logistics for the PHNs and other barangay health workers only.",
            "Provide packages of health services among reproductive age group in all health facilities.",
            "Inform the clients about the importance and benefits/advantages/disadvantages of family planning.",
          ],
          answer: 1,
          rationale:
            "Ensuring availability of supplies is not a role of PHNs, but of administrators.",
        },
        {
          id: "np1_q86",
          question:
            "Which of the following is not included in the Child Health Programs of the DOH?",
          choices: [
            "Adolescent Screening",
            "Expanded Program on Immunization",
            "Dental Health",
            "Micronutrient Supplementation",
          ],
          answer: 0,
          rationale: "Adolescent Screening is not a Child Health Program.",
        },
        {
          id: "np1_q87",
          question:
            "Breastfeeding is the most essential feeding for infants that has nutritional, immunologic values and maternal advantages for the mother. Exclusive breastfeeding during the first half-year of life is an important factor that can prevent:",
          choices: [
            "Infant and childhood morbidity and mortality",
            "Infant and childhood Mental Disorders",
            "Occurrence of Cancer",
            "Occurrence of Heart Disease",
          ],
          answer: 0,
          rationale:
            "Exclusive breastfeeding prevents infant and childhood morbidity and mortality.",
        },
        {
          id: "np1_q88",
          question:
            "Rona, GIP1, is on her 2nd post partum day. She asks Nurse Maja about the definition of exclusive breastfeeding. Nurse Maja responds based on his knowledge that exclusive breastfeeding means:",
          choices: [
            "giving the baby breast milk and water only.",
            "giving the baby breast milk and solid food only.",
            "giving the baby breast milk and drops or syrups consisting of vitamins, mineral supplements, or medicines only.",
            "giving the baby breast milk only. Drops or syrups consisting of vitamins, mineral supplements, or medicines should not yet be given until the 6th month of life.",
          ],
          answer: 3,
          rationale:
            "Exclusive breastfeeding means giving only breast milk, no other liquids or solids.",
        },
        {
          id: "np1_q89",
          question: "The following are the benefits of breastfeeding to the infants EXCEPT:",
          choices: [
            "Provides a nutritional complete food for the young infant.",
            "Strengthens the infant's immune system, preventing many infections.",
            "Safely dehydrates and provides essential nutrients to a sick child.",
            "Increases IQ points.",
          ],
          answer: 2,
          rationale: "Breastfeeding does not cause dehydration.",
        },
        {
          id: "np1_q90",
          question:
            "During a Ward class in the Obstetric Ward of a community hospital, a mother asked the Nurse regarding the benefits of breastfeeding to the mothers. The Nurse best response would be:",
          choices: [
            '"It increases the woman\'s risk of excessive blood loss after birth."',
            '"It reduces the woman\'s risk of excessive blood loss after birth."',
            '"It provides artificial methods of delaying pregnancies."',
            '"It increases the risk of ovarian and breast cancers and osteoporosis."',
          ],
          answer: 1,
          rationale: "Breastfeeding reduces the risk of excessive blood loss after birth.",
        },
        {
          id: "np1_q91",
          question:
            "Nurse Dorothy is preparing to administer vaccinations to children. She knows that the following are correct EXCEPT:",
          choices: [
            "The vaccination schedule should not be restarted from the beginning even if the interval between doses exceeded the recommended interval by months or years.",
            "Giving doses of a vaccine at less than the recommended 4 weeks interval may lessen the antibody response.",
            "Lengthening the interval between doses of vaccines leads to higher antibody levels.",
            "Use one syringe one needle for all the children receiving the same vaccination.",
          ],
          answer: 3,
          rationale: "Each child should receive a separate sterile syringe and needle.",
        },
        {
          id: "np1_q92",
          question:
            "Rose, a mother of a 7-month-old baby, is asking the nurse in the Health Center regarding the 7 vaccine preventable diseases. All of the following diseases are included EXCEPT:",
          choices: ["Diphtheria", "Measles", "Poliomyelitis", "Dengue"],
          answer: 3,
          rationale: "Dengue is not one of the 7 vaccine-preventable diseases.",
        },
        {
          id: "np1_q93",
          question:
            "Kurt, 4 years old, has Measles. His mother asks the nurse if there is a chance that Kurt will contract the virus again. The nurse's response should be based on her knowledge that:",
          choices: [
            "reactivation of old infection is common with Measles.",
            "immunity from Measles is lifelong after the first attack.",
            "no immunity is induced by the infection.",
            "immunity from Measles is just for 6 months after the first attack.",
          ],
          answer: 1,
          rationale: "Immunity from measles is lifelong after the first infection.",
        },
        {
          id: "np1_q94",
          question: "When can you say that a child is already a 'Fully Immunized Child'?",
          choices: [
            "If he received one dose of BCG, 3 doses of OPV, 2 doses of DPT, 3 doses of HB and one dose of measles before his/her first birthday.",
            "If he received two doses of BCG, 3 doses of OPV, 3 doses of DPT, 3 doses of HB and one dose of measles before his/her first birthday.",
            "If he received one dose of BCG, 2 doses of OPV, 3 doses of DPT, 3 doses of HB and one dose of measles before his/her first birthday.",
            "If he received one dose of BCG, 3 doses of OPV, 3 doses of DPT, 3 doses of HB and one dose of measles before his/her first birthday.",
          ],
          answer: 3,
          rationale: "A fully immunized child receives 1 BCG, 3 OPV, 3 DPT, 3 HB, and 1 measles.",
        },
        {
          id: "np1_q95",
          question:
            "Annabelle, a new mother, asks the nurse about the purpose of the first BCG vaccination given to her son. The nurse's best response should be:",
          choices: [
            '"An early start with BCG reduces the chance of severe pertussis."',
            '"The extent of protection against polio is increased the earlier the BCG is given."',
            '"BCG given at earliest possible age protects the possibility of TB meningitis and other TB infections in which infants are prone."',
            '"An early start of BCG reduces the chance of being infected and becoming a carrier. It prevents liver cirrhosis and liver cancer."',
          ],
          answer: 2,
          rationale: "BCG protects against TB meningitis and other TB infections.",
        },
        {
          id: "np1_q96",
          question:
            "Barangay Dionisia is situated in a remote area. The Public Health Nurse conducted several health training programs regarding Herbal plants that would be useful in the treatment of illness and health problems. Tsaang Gubat is used to treat which of the following?",
          choices: [
            "Diarrhea and Stomachache",
            "Cough and Fever",
            "Colds and Pain",
            "Hypertension",
          ],
          answer: 0,
          rationale: "Tsaang Gubat is used to treat diarrhea and stomachache.",
        },
        {
          id: "np1_q97",
          question: "Niyug-niyogan is an:",
          choices: ["Analgesic", "Anti-helminthic", "Anti-hypertensive", "Anti-gout"],
          answer: 1,
          rationale: "Niyug-niyogan is an anti-helminthic.",
        },
        {
          id: "np1_q98",
          question: "Ulasimang Bato or Panist-panistan is used to:",
          choices: [
            "lower cholesterol levels",
            "lower blood sugar levels",
            "lower ammonia levels",
            "lower uric acid levels",
          ],
          answer: 3,
          rationale: "Ulasimang Bato is used to lower uric acid levels.",
        },
        {
          id: "np1_q99",
          question:
            "This refers to a drug outlet managed by a legitimate community organization, non-government organization, and the local government unit with a trained operator and a supervising pharmacist, and specifically licensed by the Bureau of Food and Drugs to sell, distribute, offer for sale, and/or make available low-priced generic home remedies. Over the Counter (OTC) drugs, antibiotics, and medication for chronic diseases.",
          choices: ["Mercury drugs", "Right Med", "Generic Pharmacy", "Botika ng Bayan"],
          answer: 3,
          rationale: "Botika ng Bayan is a community-managed drug outlet.",
        },
        {
          id: "np1_q100",
          question:
            "One strategy to address the problem in a poor Barangay aside from Herbal Plants is food production. Which of the following is a priority?",
          choices: [
            "A community managed poultry and piggery",
            "Planting plenty of Malunggay",
            "Planting tomatoes and eggplants in containers",
            "Engaging in a home-based food processing business",
          ],
          answer: 1,
          rationale: "Planting Malunggay is a priority for nutrition.",
        },
      ],
    },
    {
      id: "tranptwo",
      title: "TRA Nursing Practice 2",
      description: "Nursing Practice 2 Provided by TopRank Academy",
      questions: [
        {
          id: "np2_q1",
          question:
            "Nurse Luna is employed in hospital 'X' and assigned in the Medical Ward for a year now. The nurse supervisor ordered her to proceed immediately to the Surgical Ward as a reliever to another nurse who went on emergency sick leave. She was not oriented in the Surgical Ward and the unit was very busy. Which of the following is the MOST appropriate action of Nurse Luna?",
          choices: [
            "Request the nurse supervisor to assign a more experienced nurse reliever",
            "Refuse the order of the nurse supervisor and stay put in the medical ward",
            "Comply with the order of the nurse supervisor",
            "Request the nurse supervisor to give her brief orientation before compliance",
          ],
          answer: 3,
          rationale:
            "Requesting a brief orientation before compliance is the most appropriate action.",
        },
        {
          id: "np2_q2",
          question:
            "To qualify as an operating room nurse in the Philippines setting, Nurse Luna should possess the minimum requirements of",
          choices: [
            "Master's degree holder with valid and current license",
            "Worked in the surgical unit for 8 hours",
            "RN and has worked abroad",
            "RN with valid and current license and Surgical Ward orientation",
          ],
          answer: 3,
          rationale: "Minimum requirement is RN with valid license and surgical orientation.",
        },
        {
          id: "np2_q3",
          question:
            "Nurse Luna is a graduate in the Philippines nursing school. As part of her professional and personal development, she should attend which of the following program? EXCEPT",
          choices: [
            "Programs by the Philippine Nurses Association",
            "Continuing Professional Development programs by the Professional Regulation Commission",
            "Symposium and forum offered by the school",
            "Programs of international nurses associations",
          ],
          answer: 3,
          rationale: "International programs are not required for local professional development.",
        },
        {
          id: "np2_q4",
          question: "The PRIORITY objective behind career advancement of Nurse Luna is",
          choices: [
            "Increasing revenue of the service providers",
            "Renew old acquaintances and establish camaraderie",
            "Increased number of networking activities",
            "Updating one's knowledge, skills, conduct and values in professional nursing",
          ],
          answer: 3,
          rationale: "Career advancement is primarily for updating knowledge and skills.",
        },
        {
          id: "np2_q5",
          question:
            "Nurse Luna has an expired license but promises to renew her license in due time. Which of the following violation can she be charged if she participated in home health care activity?",
          choices: ["Malpractice", "Grave coercion", "Felony", "Negligence"],
          answer: 0,
          rationale: "Practicing with an expired license constitutes malpractice.",
        },
        {
          id: "np2_q6",
          question:
            "Health Education is an area of nursing practice when the nurse can be creative and independent in the work setting. A nurse is developing a Teaching plan for Isabel 18 year old with Bronchial Asthma. She has an order for discharge. Which part of the teaching plan should be given PRIORITY?",
          choices: [
            "Quick relief medicines as ordered",
            "Avoid contact with fur-bearing pets",
            "Avoid going to malls",
            "Wash bed sheets in warm water",
          ],
          answer: 0,
          rationale: "Quick relief medicines are the priority for discharge teaching.",
        },
        {
          id: "np2_q7",
          question:
            "Mr Gilbert is for postural drainage. The nurse should position the client's head at",
          choices: [
            "No greater than a 25 degree downward angle",
            "A 30 degree lateral angle for 25 minutes",
            "25 degree at lateral angle",
            "A 38 degree downward angle for 25 minutes",
          ],
          answer: 0,
          rationale: "Head should be positioned no greater than 25 degrees downward.",
        },
        {
          id: "np2_q8",
          question:
            "Nurse Beth is teaching Michel, an asthmatic, on how to use the Spirometer. She should instruct the client to have the mouthpiece.",
          choices: [
            "Place into the mouth and have regular breathing",
            "Place into the mouth and have a fast deep breath",
            "Place into the mouth and inhale slowly",
            "Place into the mouth and exhale slowly",
          ],
          answer: 2,
          rationale: "Inhale slowly through the spirometer.",
        },
        {
          id: "np2_q9",
          question:
            "Nurse Beth is teaching a client on how to use metered dose inhaler to prevent asthmatic attack while in the hospital. She should instruct the client to do the following EXCEPT.",
          choices: [
            "Keep the head of the bed at 15 degree angle",
            "Do oral care after use of the inhaler",
            "Use the inhaler before she take her meals",
            "Use the inhaler as ordered",
          ],
          answer: 0,
          rationale: "Head of bed should be elevated, not at 15 degrees.",
        },
        {
          id: "np2_q10",
          question:
            "You are conducting health-teaching sessions to clients with cardiovascular disorders. Client Pedro asks you this question: 'Tell me, Nurse, what I should do with my Hypertension?' The best response of a Nurse is",
          choices: [
            '"comply with your diet, lifestyle and exercise"',
            '"strictly follow your prescribed daily exercise and smoking cessation"',
            '"comply with your diet, life style modification and prescribed medicines"',
            '"include garlic in your meals with regulation of alcohol consumption"',
          ],
          answer: 2,
          rationale: "Comprehensive compliance with diet, lifestyle, and medicines is best.",
        },
        {
          id: "np2_q11",
          question:
            "As a staff nurse in a government hospital, you have been exposed to varied cases of clients with endocrine problems. Your nursing responsibility starts from admission to discharge which is a domain of your competencies. Which of the following questions should you ask during an admission interview for a client with a diagnosis of pheochromocytoma?",
          choices: [
            "Do you always feel like you are suffocating, you want to rest and sleep",
            "Do you suddenly feel warm and flushed when you get out of bed",
            "Do you notice an increase in your heart beat? palpitations",
            "Do you have an increase in urination lately?",
          ],
          answer: 2,
          rationale: "Palpitations are a common symptom of pheochromocytoma.",
        },
        {
          id: "np2_q12",
          question:
            "When the sympathetic nervous system is stimulated in the case of pheochromocytoma, you expect which of the following signs?",
          choices: [
            "Hypertension, Headache, Hyperhidrosis, Hypermetabolism",
            "3 and 4",
            "1 only",
            "1, 2, 3, and 4",
            "2 and 3",
          ],
          answer: 2,
          rationale:
            "All four signs are expected: hypertension, headache, hyperhidrosis, and hypermetabolism.",
        },
        {
          id: "np2_q13",
          question:
            "Which of the following drugs can induce hypertensive crisis in Pheochromocytoma?",
          choices: [
            "Tricyclic antidepressant",
            "Corticosteroid",
            "Respiratory stimulant",
            "Radio iodine therapy",
          ],
          answer: 0,
          rationale:
            "Tricyclic antidepressants can induce hypertensive crisis in pheochromocytoma.",
        },
        {
          id: "np2_q14",
          question:
            "In the presence of pheochromocytoma, the diagnostic test which is expected to be elevated is",
          choices: [
            "Serum thyroid hormone levels",
            "Albumin globulin test",
            "Urine cyclic adenosine mono phosphate",
            "24 hours urine collection for vanillylmandelic acid (VMA)",
          ],
          answer: 3,
          rationale: "24-hour urine VMA is elevated in pheochromocytoma.",
        },
        {
          id: "np2_q15",
          question:
            "Palpation, as a modality for physical examination is AVOIDED when diagnosed with pheochromocytoma because this action",
          choices: [
            "Will cause sudden release of norepinephrine and severe hypotension",
            "Will cause a sudden release of catecholamines and severe hypertension",
            "Will displace the location of the tumor",
            "Will cause sudden release of epinephrine and severe palpitation",
          ],
          answer: 1,
          rationale:
            "Palpation can cause sudden release of catecholamines leading to severe hypertension.",
        },
        {
          id: "np2_q16",
          question:
            "Mr. Con is being prepared for a major surgery. Legal preparation for surgery consists of checking all the required forms for the operation. Equally important is to make sure that the patient is physically, psychologically, and emotionally ready for the procedure. Informed consent is a process that gives the patient opportunity involved in his or her care. As patient advocate, the nurse ensures the following three conditions are present to make consent valid, EXCEPT:",
          choices: [
            "Adequate disclosure of the diagnosis by the physician",
            "Comprehension of information by the patient before the operation",
            "Patient voluntarily giving consent",
            "Forms signed by any close relative or watcher",
          ],
          answer: 3,
          rationale: "Consent must be signed by the patient themselves, not just any relative.",
        },
        {
          id: "np2_q17",
          question:
            "The patient asks you, 'What do you think of my surgeon?' You answered 'hmmmmm... he is not really the best one and he seems not to care for patient...' As a result, the patient switches to another surgeon. The latter may have grounds to sue you for",
          choices: ["Slander", "Invasion of privacy", "Malpractice", "Libel"],
          answer: 0,
          rationale: "Slander is spoken defamation, which you committed.",
        },
        {
          id: "np2_q18",
          question:
            "One of your patient's visitors whisper to you, 'I hope you will not try to revive my dear friend if her heart stops as she has already suffered a lot.' The correct response is",
          choices: [
            '"That decision is up to the physician"',
            '"We are all trained in cardiopulmonary resuscitation"',
            '"There is a Do not resuscitate order in her chart"',
            '"I understand your concern, but I can\'t discuss this matter with you"',
          ],
          answer: 3,
          rationale:
            "The nurse cannot discuss DNR decisions with visitors without proper authorization.",
        },
        {
          id: "np2_q19",
          question:
            "According to the Joint Commission, the most frequently cited factor in sentinel (unanticipated) events that leads to a patient's serious physical or psychological injury is",
          choices: [
            "Confusion within the health team",
            "Miscommunication among health team members",
            "Incompetence by a team member",
            "Policy changes are not followed by adequate and consistent staff education",
          ],
          answer: 1,
          rationale: "Miscommunication is the most frequently cited factor in sentinel events.",
        },
        {
          id: "np2_q20",
          question:
            "Conducting Research is one of the major roles of the nurses both in hospital and community settings. To be able to develop such competencies, the nurse has to undergo an actual conduct of the research process. Which of the following statements BEST described a researchable problem?",
          choices: [
            "Responses of parents toward having children with congenital heart diseases.",
            "The relationship between relaxation technique and relief of pain of post CABG patients in the surgical coronary care unit.",
            "Incidence of medication errors and reporting practices of Health Care Professional in a teaching hospital",
            "To what extent do pre-operative teaching affect the length of hospitalization of patients going for surgery",
          ],
          answer: 1,
          rationale:
            "This statement clearly defines a researchable problem with variables and population.",
        },
        {
          id: "np2_q21",
          question:
            "Nurse Joan has to undergo literature search for her study. She can avail of this from the following EXCEPT",
          choices: [
            "A summary of research articles that are relevant to the study",
            "A written document published by the investigator herself",
            "Any retrieval from website that will help her search for the subject on investigation",
            "A description of the scientific study from an information provided by a faculty member teaching research",
          ],
          answer: 3,
          rationale: "Faculty member's description is not a primary literature source.",
        },
        {
          id: "np2_q22",
          question:
            "Weight is taken as a baseline measurement of obese female adolescents as study subjects for a weight reduction program. This is repeated to note any changes. This pre-test is done to",
          choices: [
            "Determine whether the instrument is defective",
            "Assess if research design is appropriate to the problem identified",
            "Evaluate whether the instrument is defective",
            "Obtain preliminary data before a treatment is conducted by the researcher",
          ],
          answer: 3,
          rationale: "Pre-test establishes baseline data before intervention.",
        },
        {
          id: "np2_q23",
          question:
            "A Nurse researcher is using ACCU-CHEK, a monitoring kit to test presence of Diabetes Mellitus among her study subject. How do you classify this type of measurement?",
          choices: ["Microbial", "Cytological", "Physiological", "Chemical"],
          answer: 3,
          rationale: "Blood glucose monitoring is a chemical measurement.",
        },
        {
          id: "np2_q24",
          question:
            "Nurse Joan, wanted to conduct a study using quasi-experimental design. This design will need a",
          choices: [
            "Retrospective evaluation",
            "Field setting for the study",
            "Comparable group",
            "Manipulation of the dependent variable",
          ],
          answer: 2,
          rationale: "Quasi-experimental design requires a comparable group.",
        },
        {
          id: "np2_q25",
          question:
            "In initiating care for patient Kian, which of the following would be an APPROPRIATE question to be asked by Nurse Tessie in her assessment?",
          choices: [
            "Since this is doctor's order, you have to drink ice water, instead of hot tea.",
            "Do you have any books I could read about people of your culture?",
            "Do you need to set aside your cultural practices, and comply with hospital rules and regulations?",
            "Is there anything I am doing that is not acceptable to your culture?",
          ],
          answer: 3,
          rationale:
            "This question respects the patient's culture and promotes cultural competence.",
        },
        {
          id: "np2_q26",
          question:
            "Nurse Tessie respects cultural practices integration in her nursing care plan. Which of the following nursing action is MOST representative of the culturally competent nurse?",
          choices: [
            "Help patient Kian to learn and understand the language",
            "Explain and validate health knowledge and beliefs of Patient Kian with that of the hospital",
            "Help Patient Kian identify ways to relate more to the culture where they now resides",
            "Ask patient Kian to help Nurse Tessie in knowing more the culture of his origin",
          ],
          answer: 1,
          rationale: "Validating health beliefs with hospital practices shows cultural competence.",
        },
        {
          id: "np2_q27",
          question:
            "The family of Patient Kian request utilization of warm compress with banana leaves to Patient Kian. Which of the following is the MOST appropriate response of Nurse Tessie?",
          choices: [
            "Cost less than traditional therapies",
            "Are used when traditional therapies are not effective",
            "Utilized natural products while traditional therapies do not",
            "Can be effective as traditional therapies for some conditions",
          ],
          answer: 3,
          rationale:
            "Alternative therapies can be as effective as traditional therapies for some conditions.",
        },
        {
          id: "np2_q28",
          question:
            "Patient Kian's family requests time for spiritual healing process in the hospital. This is allowed by Nurse Tessie and hospital because it",
          choices: [
            "Gives fulfillment and meaning to the patient and family",
            "Demonstrate people being responsible for their life patterns",
            "Is non-denominated community service",
            "Formalizes a religious dogma",
          ],
          answer: 0,
          rationale: "Spiritual healing gives fulfillment and meaning to the patient and family.",
        },
        {
          id: "np2_q29",
          question:
            "Positive Practice Environment (PPE) influences healing process. Which of the following ways can help Nurse Tessie create a healing environment?",
          choices: [
            "Ensure that relatives and friends visit the patient",
            "Empower clients to make healthy decisions for themselves",
            "Place television in each room of the hospital",
            "Ensure that staff nurses does not experience burnout",
          ],
          answer: 1,
          rationale: "Empowering clients promotes a positive healing environment.",
        },
        {
          id: "np2_q30",
          question:
            "Julie, 28 years old, has been diagnosed with Diabetes Mellitus. She was advised by her family physician to be admitted to undergo preparation for insulin therapy. Her blood sugar ranges from 200 to 210 mg/dL. At 6 am, Nurse Cynthia administered her insulin injection. After 2 hours, the patient complained of cold clammy perspiration, chilly sensation and abdominal discomfort. Which of the following PRIORITY nursing actions should the nurse perform?",
          choices: [
            "Give her biscuit to eat",
            "Do urine testing for sugar",
            "Provide her warm blanket",
            "Take blood pressure and put her on bed rest",
          ],
          answer: 0,
          rationale:
            "Cold clammy perspiration indicates hypoglycemia; give fast-acting carbohydrate.",
        },
        {
          id: "np2_q31",
          question:
            "Patient Julia has been classified to have a type II Diabetes Mellitus. Which of the following is NOT a typical manifestation of individuals with this condition?",
          choices: [
            "Frequency of urination",
            "Increased craving for food",
            "Increased thirst",
            "Weight loss",
          ],
          answer: 3,
          rationale: "Weight loss is more typical of type 1 diabetes, not type 2.",
        },
        {
          id: "np2_q32",
          question:
            "Mr Dencio, 58 years old is admitted to the pay ward because of respiratory problem. The nurse initiated oxygen treatment by mask but the client refuses despite the encouragement by the wife. The client is aware of the benefits of the treatment. Which of the following should be given priority?",
          choices: [
            "Ask the opinion of the wife",
            "Conduct consensus building",
            "Let the attending physician decide on the necessity of the treatment",
            "Respect the decision of the client",
          ],
          answer: 3,
          rationale: "Patient autonomy must be respected.",
        },
        {
          id: "np2_q33",
          question:
            "You are taking care of Mr Dencio who is on the last cycle of radiation therapy for his lung cancer. You should instruct Mr Dencio to",
          choices: [
            "Brush teeth and gums vigorously after meals",
            "Wait one hour after treatment before eating",
            "Use mouthwash containing alcohol every 2 hours",
            "Avoid drinking hot fluids",
          ],
          answer: 3,
          rationale: "Hot fluids can irritate radiation-damaged mucous membranes.",
        },
        {
          id: "np2_q34",
          question:
            "Ime is the Nurse on duty in the medical ward and many of her patients are suffering from problems of oxygenation. The following are relevant data to be documented when taking the health history of a client with anemia EXCEPT:",
          choices: [
            "Alcohol intake",
            "Fatigue and weakness",
            "Dietary intake",
            "Episodes of bleeding",
          ],
          answer: 0,
          rationale: "Alcohol intake is not a primary data point for anemia history.",
        },
        {
          id: "np2_q35",
          question:
            "A client with congenital heart disease is suffering from thickening of the skin under his fingers due to chronic hemoglobin",
          choices: ["Clubbing", "Cyanosis", "Edema", "Pallor"],
          answer: 0,
          rationale: "Clubbing is thickening of the skin under the fingers due to chronic hypoxia.",
        },
        {
          id: "np2_q36",
          question:
            "When the Nurse is assessing a client with Congestive Heart failure with pitting edema, the Nurse's documentation will include which of the following:",
          choices: [
            "Degree of pitting edema",
            "Time of indention recovery",
            "Depth of edema",
            "All of the options",
          ],
          answer: 3,
          rationale: "All parameters should be documented for pitting edema.",
        },
        {
          id: "np2_q37",
          question:
            "Mr. Gabby is with left sided heart failure. Ime's documentation of her assessment findings will include the following, EXCEPT",
          choices: ["Dependent edema", "Pulmonary crackles", "Difficulty of breathing", "Cough"],
          answer: 0,
          rationale: "Dependent edema is a sign of right-sided, not left-sided, heart failure.",
        },
        {
          id: "np2_q38",
          question:
            "A client is on a diuretic therapy. Expected entry in patient's chart should include the following information, EXCEPT:",
          choices: [
            "Serum electrolytes monitored",
            "Intake and output recorded",
            "Lasix administered at 8 o'clock in the evening",
            "Weight is taken before drug is given",
          ],
          answer: 2,
          rationale:
            "Diuretics like Lasix should be given in the morning to avoid nocturia, not at 8 PM.",
        },
        {
          id: "np2_q39",
          question:
            "Maya, a 42 year old teacher with cardiac ailment, nervously informs the doctor that her goiter is getting bigger and distracts her while swallowing food. The physician who examined her instructed the nurse to admit Maya and to prepare her for surgery after medical clearance. While interviewing Patient Maya, she claims that she is anxious for the coming surgery. You expect the following signs and symptoms when one is under stress, EXCEPT:",
          choices: [
            "Blood loss and weakness",
            "Increases respiration rate",
            "Decreased mobility",
            "Pain due to tissue damage",
          ],
          answer: 0,
          rationale: "Blood loss is not a sign of anxiety/stress.",
        },
        {
          id: "np2_q40",
          question:
            "Based on your knowledge, Patient Maya, who has a history of cardiac illness, should not be given an enema before surgery. Which of the following reasons inhibits the order of enema for Patient Maya?",
          choices: [
            "Paralyses the peristalsis movement and increases abdominal pain",
            "Produces vagal stimulation that is dangerous to cardiac patient",
            "Causes constipation and fecal impaction after the surgery",
            "Enema results to increased water absorption in the bowels",
          ],
          answer: 1,
          rationale: "Vagal stimulation from enema can be dangerous for cardiac patients.",
        },
        {
          id: "np2_q41",
          question:
            "Mr. S came to the ER because of sharp troubling pain. After his surgery, he claimed pain is felt even he is asleep. At what stage of pain mechanism do you classify this pain?",
          choices: ["Perception", "Modulation", "Transmission", "Transduction"],
          answer: 0,
          rationale: "Perception is when the pain is felt, even during sleep.",
        },
        {
          id: "np2_q42",
          question: "When a client complains of pain less than 6 months, it is called",
          choices: ["Chronic pain", "Persistent pain", "Acute pain", "Intermittent pain"],
          answer: 2,
          rationale: "Pain lasting less than 6 months is acute pain.",
        },
        {
          id: "np2_q43",
          question: "In order for the nurse to recall the location of pain, he has to",
          choices: [
            "Asks for onset and duration",
            "Mark the painful area in a body diagram",
            "Asks for facial expression",
            "Asks verbal description using pain intensity scale",
          ],
          answer: 1,
          rationale: "Body diagram helps recall the location of pain.",
        },
        {
          id: "np2_q44",
          question: "An example of a drug therapy to relieve moderate pain is",
          choices: ["Codeine", "Demerol", "Methadone", "Morphine sulphate"],
          answer: 0,
          rationale: "Codeine is a moderate opioid analgesic.",
        },
        {
          id: "np2_q45",
          question: "When a client is on prolonged pain therapy, the nurse should watch for",
          choices: [
            "Tolerance to drug",
            "Allergic reaction to drug",
            "Drug resistance",
            "Addiction to drug",
          ],
          answer: 0,
          rationale: "Tolerance can develop with prolonged pain therapy.",
        },
        {
          id: "np2_q46",
          question:
            "Donny a 46 year old patient admitted to the coronary care unit (CCU) with an MI and frequent premature ventricular contractions (PVCs) has doctor orders for continuous amiodarone infusion, IV nitroglycerin infusion, and morphine sulfate 2 mg IV every 10 minutes until there is relief of pain. She is taken care by Leona a newly graduate nurse. Because of Donny's premature ventricular contraction, the nurse should monitor its effects on which of the following parameters?",
          choices: [
            "Electrolyte levels",
            "Apical radial heart rate",
            "Oxygen saturation",
            "Medications",
          ],
          answer: 0,
          rationale:
            "PVCs can be caused by electrolyte imbalances, especially potassium and magnesium.",
        },
        {
          id: "np2_q47",
          question:
            "In analyzing a patient's electrocardiographic (ECG) rhythm strip, Leona uses the knowledge that the time of the conduction of an impulse through the Purkinje fibers is represented by",
          choices: ["PR interval", "QT interval", "QRS complex", "P wave"],
          answer: 2,
          rationale:
            "QRS complex represents ventricular depolarization through the Purkinje fibers.",
        },
        {
          id: "np2_q48",
          question:
            "A considerable difference between the apical and radial pulse rate of Donny would indicate",
          choices: [
            "Stronger left than right ventricular muscles",
            "Numerous weak ineffectual cardiac contractions",
            "Thickened myocardium and large heart chambers",
            "Increased pressure in systemic arteries",
          ],
          answer: 1,
          rationale: "Pulse deficit indicates weak, ineffectual cardiac contractions.",
        },
        {
          id: "np2_q49",
          question:
            "As Donny is assessed he complains of being nauseated and very weak. The nurse should",
          choices: [
            "Perform nutritional assessment",
            "Alert staff for potential help",
            "Explore and discuss possible effect of stress",
            "Provide reassurance while focusing on pleasant topics",
          ],
          answer: 2,
          rationale: "Nausea and weakness may be stress-related; exploring this is appropriate.",
        },
        {
          id: "np2_q50",
          question:
            "The Physician scheduled for an exercise electrocardiogram (stress test). What information should the nurse include when explaining the value of this test? Exercise stress testing is a:",
          choices: [
            "definitive method to diagnose the cause of chest pain",
            "diagnostic modality of minimal value in planning treatment of angina",
            "noninvasive means of assessing cardiovascular conduction and function",
            "minimally invasive manner of assessing a body's reaction to increase in exercise",
          ],
          answer: 2,
          rationale: "Stress test is noninvasive and assesses cardiovascular function.",
        },
        {
          id: "np2_q51",
          question:
            "The patient admitted in the unit with a urinary condition asked you, the nurse, where in the kidney does urine get formed. You answer them correctly by stating that urine is produced in the:",
          choices: ["Glomerulus", "Proximal convoluted tubule", "Loop of Henle", "Nephron"],
          answer: 3,
          rationale: "The nephron is the functional unit of the kidney where urine is formed.",
        },
        {
          id: "np2_q52",
          question:
            "A client was assigned to your unit after their abdominal surgery. You asked the patient during your morning rounds about the passage of flatus. The patient answered, 'Yes, flatus has passed earlier this morning'. In anticipation of defecation, which of the following instructions are most important for you, the nurse, to give to this client?",
          choices: [
            "Please call the nurse if you need to go to the bathroom.",
            "If you feel the urge to have a bowel movement, please call for assistance before getting up to the toilet. When having a bowel movement, be sure to breathe out to prevent straining. Do not hold your breath.",
            "To prevent the Valsalva maneuver, contract the stomach muscles while holding your breath and push. This will assist in the passage of the stool and will decrease the amount of time required to have a bowel movement.",
            "Your bowels will be moving soon. Please report any abdominal pain.",
          ],
          answer: 1,
          rationale: "This instruction prevents Valsalva maneuver and promotes safety.",
        },
        {
          id: "np2_q53",
          question:
            "You are the nurse on duty in the unit. A client verbalized complaints of a recent constipation. You took the patient's health history. Which of the following statements by the client suggests the likely cause of their constipation?",
          choices: [
            "I walk with a group of friends every day at the mall for an hour.",
            "My spouse died 20 years ago, but my family is very loving and supportive.",
            "The fast food place near my home has really good food. I eat there most of the time.",
            "I take my medications as prescribed.",
          ],
          answer: 2,
          rationale: "Fast food diet is low in fiber, contributing to constipation.",
        },
        {
          id: "np2_q54",
          question:
            "You are the nurse on duty in the emergency room. A client came via ambulance with shortness of breath for the past 3 days. After a few hours in the ER, the client is admitted to the intensive care unit with pulmonary edema that requires intubation and ventilation. A Foley catheter was placed in the client and he had a total of 25 mL urine output. The laboratory reveals: blood glucose of 300, blood urea nitrogen of 100, and creatinine of 5.0. The client has a history of CHF, CAD, diabetes, COPD, and asthma. What's the client's most likely cause of low urine output?",
          choices: [
            "Acute and chronic renal failure due to diabetes and a decreased blood flow to the kidneys due to heart failure.",
            "Renal failure due to decreased coronary output secondary to heart failure.",
            "Decreased blood flow to the kidneys due to congestive heart failure (CHF) secondary to noncompliance with home fluid restriction.",
            "Severe dehydration.",
          ],
          answer: 0,
          rationale:
            "The combination of diabetes and decreased renal perfusion from CHF causes low urine output.",
        },
        {
          id: "np2_q55",
          question:
            "A client came to the hospital complaining of nausea and occasional vomiting. You are the nurse reviewing the client's medical records when you note that this client has a 4 year history of renal insufficiency. They had been on fluid restriction and renal diet. Their laboratory shows a steady increase in BUN, creatinine, and potassium. The client's spouse accompanied the client to the appointment. She pulled you aside and stated that his husband has been having episodes of confusion each day. She told you that she is very concerned about her husband and she wants to know if he is having small strokes. Based on the information provided, what is your best response to the spouse's question?",
          choices: [
            "Confusion is a common sign of transient ischemic attacks. Thank you for informing me of this. The client will need a CAT scan of the head.",
            "The client's kidneys are not working very well. However, confusion is not a common symptom. I will inform the physician of the confusion and have her assess the situation further with the client.",
            "The elevated potassium is causing the confusion. The client will need some medication to decrease the potassium level.",
            "The client is experiencing worsening uremic syndrome. This is associated with kidney failure and is a sign that the client's kidney function is becoming worse. I will notify the physician about the confusion. There are a couple of treatment options to consider. The physician will discuss the treatment options with the client and you.",
          ],
          answer: 3,
          rationale: "Confusion is a sign of worsening uremic syndrome due to kidney failure.",
        },
        {
          id: "np2_q56",
          question:
            "One of the elderly patients assigned to you in the ward has been complaining of increasing trips to the bathroom to urinate. Her estimated coffee intake is 3 cups every day. What is the best explanation you can provide to this patient?",
          choices: [
            "The increased urine production is most likely due to a urinary tract infection.",
            "Coffee is causing the increased urination due to your increased fluid intake. This is completely normal and nothing to be concerned about.",
            "Coffee is causing the increased urination. Coffee contains caffeine that causes diuresis, or increased urine formation. Simply decreasing the number of cups of coffee you drink each day, and limiting the consumption of caffeinated beverages to the morning hours, should help decrease your trips to the bathroom.",
            "Drinking coffee increases the circulating plasma in the body and this increases the urine formation. Simply decreasing the number of cups of coffee you are drinking should help.",
          ],
          answer: 2,
          rationale: "Caffeine is a diuretic; reducing intake can decrease urinary frequency.",
        },
        {
          id: "np2_q57",
          question:
            "You are beginning your shift for the day. You start by assessing a client that has a Foley catheter connected to a collection bag. Which of the following is the best routine catheter care actions to take while caring for this client?",
          choices: [
            "Encourage increased oral fluid intake and observe for any opacity in the urine suggesting bacterial infection.",
            "Carefully wash the perineal area with soap and water after each bowel movement.",
            "Avoid touching the tip of the spigot to any surfaces when emptying the collection bag.",
            "Encourage the client to drink at least 2000 ml. each day and carefully wash the perineal area, with soap and water, at least twice daily and with each bowel movement.",
          ],
          answer: 3,
          rationale: "Adequate fluid intake and perineal care are essential for catheter care.",
        },
        {
          id: "np2_q58",
          question:
            "A client of yours read the term activities of daily living. As a knowledgeable nurse, you know that activities of daily living (ADLs) are the essential and routine tasks that most young, healthy individuals can perform without assistance. These include the basic activities that are performed in the course of a normal day. You also know about instrumental activities of daily living (IADL). Which of the following statements best describes IADL?",
          choices: [
            "Activities that are usually performed in the course of a normal day. These activities include ambulating, eating, dressing, bathing, brushing the teeth, and grooming.",
            "Activities that assist the client in recognizing and managing stress. These activities include facilitating interpersonal relationships, allowing adequate time for rest, and providing regular, nutritious meals.",
            "Activities that allow the client to be independent in society. These activities include shopping, preparing meals, paying bills, and taking medications appropriately.",
            "Activities that support the effectiveness of direct care interventions. These activities include checking equipment, directing the maintenance of the client's room, and managing the supply of materials needed for client care.",
          ],
          answer: 2,
          rationale: "IADLs are activities that allow independent living in society.",
        },
        {
          id: "np2_q59",
          question:
            "One of your clients arrived in the preoperative area for their knee surgery. You asked them to put an elastic stocking on the non operative leg. The client asked you, 'What is the purpose of these stockings?' Your best response to the client's question is:",
          choices: [
            "The stockings promote return of venous blood to the heart and assist in preventing the blood from clotting in the legs.",
            "The operating room is very cold. The stockings assist in maintaining a healthy core body temperature during the operation.",
            "The stockings promote joint mobility.",
            "The stockings promote the return of arterial blood to the heart and prevent blood from clotting in the legs.",
          ],
          answer: 0,
          rationale: "Elastic stockings prevent venous stasis and thromboembolism.",
        },
        {
          id: "np2_q60",
          question:
            "The relative of an immobile client in your unit asked you, the nurse, about the complications of immobility. You answer her correctly by stating that which of the following are the complications of immobility? Select all that apply.",
          choices: [
            "Primary osteoporosis - not result of immobility\nFoot drop\nUrinary stasis\nDirect complications\nPressure ulcer",
            "I",
            "I, II, III, IV",
            "I, II, IV",
            "II, III, IV",
          ],
          answer: 3,
          rationale:
            "Foot drop, urinary stasis, and pressure ulcers are complications of immobility.",
        },
        {
          id: "np2_q61",
          question:
            "You are a nurse providing palliative care to Coby, an elderly with terminal illness. You use your knowledge on terminal illness and palliative care to provide the best care to this patient. Coby approached you and asked about palliative care since he has been hearing it a lot lately after he was diagnosed with his terminal illness. As a knowledgeable nurse, you know which of the following is the best definition of palliative care?",
          choices: [
            "Care for terminally ill clients.",
            "Symptom management for a client when a disease no longer responds to cure-focused treatment.",
            "Aggressive cure-focused disease treatment and management.",
            "Comfort care.",
          ],
          answer: 1,
          rationale:
            "Palliative care focuses on symptom management when cure is no longer possible.",
        },
        {
          id: "np2_q62",
          question:
            "Coby asked you what the goal of palliative care is. You answer him correctly by stating that which of the following are the goals of palliative care? Select all that apply.",
          choices: [
            "Preventing disease symptoms\nRelieving disease symptoms\nCuring a disease\nTreating a disease",
            "I",
            "II",
            "I, II",
            "III, IV",
          ],
          answer: 2,
          rationale: "Palliative care aims to relieve disease symptoms, not cure the disease.",
        },
        {
          id: "np2_q63",
          question:
            "Coby is now under home health with palliative care services. He stated that he has been experiencing nausea. Which of the following actions will most likely promote comfort in this client?",
          choices: [
            "Educate the patient and family in the use of prescribed antiemetics; providing oral care every 2 to 4 hours; consuming a diet of clear liquids and ice chips; and avoiding liquids such as coffee, milk, and citrus juices.",
            "Administer additional pain medication.",
            "Provide education to the patient and family regarding oral care and antiemetic medication.",
            "Take a detailed medical history to determine the cause of the nausea.",
          ],
          answer: 0,
          rationale: "Antiemetics and appropriate dietary modifications promote comfort.",
        },
        {
          id: "np2_q64",
          question:
            "The granddaughter of Coby approached you and asked regarding the symptoms their grandfather might experience. You answer her correctly by stating that which of the following are the common symptoms of terminally ill clients?",
          choices: [
            "Hunger, thirst, fatigue, and diarrhea.",
            "Dehydration, nausea, effective breathing, and adequate nutrition.",
            "Discomfort, nausea, ineffective breathing, and fatigue.",
            "Urinary continence, thirst, dehydration, and diarrhea.",
          ],
          answer: 2,
          rationale:
            "Common symptoms include discomfort, nausea, ineffective breathing, and fatigue.",
        },
        {
          id: "np2_q65",
          question:
            "Coby is being cared for at home by his family members. You conducted your physical assessment on Coby and based on your findings, you are aware that Coby's death is imminent. What is your most important role in the care of family at this point in time?",
          choices: [
            "Providing temporary relief of caregiving duties to allow the family to rest.",
            "Providing education regarding the symptoms the client will likely experience.",
            "Coordinating a visiting schedule for the family.",
            "Communicating news of the client's impending death to the family while they are together.",
          ],
          answer: 3,
          rationale: "Compassionate communication of impending death is the priority.",
        },
        {
          id: "np2_q66",
          question:
            "You are a nurse tasked to care for Alvida, a patient with peripheral vascular disease. You use your knowledge on PVD to help care for this patient effectively. You are planning care for patient Alvida with a history of PVD with symptoms of claudication. The focus of your nursing care should be directed in avoiding which of the following scenarios?",
          choices: [
            "Oxygen demand by the muscle exceeds the supply.",
            "Oxygen demand and supply of the working muscle are in balance.",
            "Oxygen supply exceeds the demand of the working muscle.",
            "Oxygen is absent.",
          ],
          answer: 0,
          rationale: "Claudication occurs when oxygen demand exceeds supply.",
        },
        {
          id: "np2_q67",
          question:
            "You are reviewing the labs of Alvida. You note which of the following common abnormal laboratory results that are associated with the development of peripheral vascular disease (PVD)?",
          choices: [
            "High serum calcium level",
            "High serum lipid levels",
            "Low serum potassium",
            "Low serum sodium",
          ],
          answer: 1,
          rationale: "High serum lipid levels are associated with PVD.",
        },
        {
          id: "np2_q68",
          question:
            "You are conducting your assessment on Alvida. You are checking her lower extremities expecting to find which of the following clinical manifestations of peripheral vascular disease?",
          choices: ["Hairy legs", "Mottled skin", "Pink, cool skin", "Warm, moist skin"],
          answer: 1,
          rationale: "Mottled skin is a manifestation of peripheral vascular disease.",
        },
        {
          id: "np2_q69",
          question:
            "Your patient Alvida with PVD has undergone a right femoral-popliteal bypass graft. You assess her blood pressure noting a decrease from 124/80 to 94/62. Which of the following should you assess in Alvida first?",
          choices: [
            "IV fluid solution",
            "Pedal pulses",
            "Nasal cannula flow rate",
            "Capillary refill",
          ],
          answer: 1,
          rationale: "Decreased BP may indicate graft occlusion; assess pedal pulses first.",
        },
        {
          id: "np2_q70",
          question:
            "After further assessment on Alvida who was diagnosed with PVD, you found out that she also has a history of heart failure. You will develop a plan of care for Alvida based on the fact that she may have low tolerance for exercise related to:",
          choices: [
            "Decreased blood flow",
            "Increased blood flow",
            "Decreased pain",
            "Increased blood viscosity",
          ],
          answer: 0,
          rationale: "Decreased blood flow leads to low exercise tolerance.",
        },
        {
          id: "np2_q71",
          question:
            "You are a nurse in the cardiothoracic ward of Hospital Merry. You are assigned to patients with aneurysms. You will utilize your nursing knowledge on aneurysms to care for these patients. You are developing a discharge teaching plan for Morgan, a patient who underwent a repair of abdominal aortic aneurysm a few days ago. You reviewed Morgan's chart for information about his health history. Key findings you noted in his chart are as follows: 1) Smokes 4 cigars a month. 2) Vital signs: blood pressure, ranges from 150/76 mm Hg to 170/98 mm Hg; heart rate, 90 to 100 beats per minute; respirations, 12-18 per minute; temperature, 99.9°F (37.8°C). 3) +1 bilateral ankle edema. Based on the data and expected outcomes, which of the following should you emphasize in the teaching plan for Morgan?",
          choices: ["Food intake", "Fluid volume", "Skin integrity", "Tissue perfusion"],
          answer: 3,
          rationale: "Tissue perfusion is the priority for AAA repair patient.",
        },
        {
          id: "np2_q72",
          question:
            "Helmeppo, a client admitted to the emergency department is complaining of severe abdominal pain. After several tests, a radiograph of his revealed a large abdominal aortic aneurysm. The primary goal for Helmeppo at this time is to:",
          choices: [
            "Maintain circulation.",
            "Manage pain.",
            "Prepare the client for emergency surgery.",
            "Teach postoperative breathing exercises.",
          ],
          answer: 0,
          rationale: "Maintaining circulation is the primary goal for AAA.",
        },
        {
          id: "np2_q73",
          question:
            "Yasopp, a 54 year old client was admitted in the emergency department. On assessment, it was revealed he has severe back pain, Grey Turner's sign, nausea, BP of 90/40, HR of 128 bpm, and RR of 28 cpm. As Yasopp's nurse, you should first do which of the following actions:",
          choices: [
            "Assess the urine output.",
            "Place a large bore I.V.",
            "Position onto the left side.",
            "Insert a nasogastric tube.",
          ],
          answer: 1,
          rationale: "Large bore IV access is needed for fluid resuscitation in shock.",
        },
        {
          id: "np2_q74",
          question:
            "Arlong, one of the patients assigned to you, complains of sudden, severe pain in his back and chest, accompanied by SOB. He describes the pain sensation as 'as if something was tearing inside'. The physician suspects that he is experiencing a dissecting aortic aneurysm. The code cart is brought into Arlong's room because you know that one of the complications of dissecting aneurysm is:",
          choices: ["Cardiac tamponade.", "Stroke.", "Pulmonary edema.", "Myocardial infarction."],
          answer: 0,
          rationale: "Cardiac tamponade is a complication of dissecting aortic aneurysm.",
        },
        {
          id: "np2_q75",
          question:
            "Hatchan is to be discharged after his surgery of aortic aneurysm repair with synthetic graft to replace part of his aorta. As part of your discharge teaching, you instruct Hatchan to notify his physician before doing which of the following procedures?",
          choices: [
            "Blood drawn.",
            "An I.V. line inserted.",
            "Major dental work.",
            "An X-ray examination.",
          ],
          answer: 2,
          rationale: "Major dental work requires antibiotic prophylaxis for graft patients.",
        },
        {
          id: "np2_q76",
          question:
            "You are tasked to care and educate patients regarding oral care to help their conditions. You utilize your knowledge to assist these patients. Buggy, a client admitted to your unit, has stomatitis. As a knowledgeable nurse, you know that which of the following interventions is most appropriate for Buggy at this time?",
          choices: [
            "Drinking hot tea at frequent intervals.",
            "Gargling with antiseptic mouthwash.",
            "Using an electric toothbrush.",
            "Eating a soft, bland diet.",
          ],
          answer: 3,
          rationale: "A soft, bland diet is appropriate for stomatitis to avoid irritation.",
        },
        {
          id: "np2_q77",
          question:
            "You are doing your assessment on patient Kuro, and when you check his mouth, you note the absence of saliva. Further assessment reveals he has pain in the area of his ear. Kuro has been NPO for several days now because of an NGT insertion. Based on your assessment, you suspect that Kuro may be developing which of the following conditions of the mouth?",
          choices: ["Stomatitis.", "Oral candidiasis.", "Parotitis.", "Gingivitis."],
          answer: 2,
          rationale:
            "Parotitis (inflammation of the parotid gland) can occur due to decreased saliva.",
        },
        {
          id: "np2_q78",
          question:
            "You are tasked by your manager to conduct a presentation to the community regarding oral cancer. You conducted your research, and you found out several risk factors for the disease. Which of the following will you include in your presentation as the primary risk factor for oral cancer?",
          choices: [
            "Use of alcohol.",
            "Smoking.",
            "Frequent use of mouthwash.",
            "Lack of regular teeth cleaning by a dentist.",
          ],
          answer: 1,
          rationale: "Smoking is the primary risk factor for oral cancer.",
        },
        {
          id: "np2_q79",
          question:
            "Jango is one of your patients in the unit. He has entered a smoking cessation program to quit a 2 pack per day cigarette habit of his. He tells you, 'I have not smoked a cigarette for 3 weeks, but I am afraid I am going to slip up and smoke because of the pressures of my current job'. As Jango's nurse, what would be the most appropriate reply to make in response to his comments?",
          choices: [
            '"Don\'t worry about it. Everybody has difficulty quitting smoking, and you should expect to as well."',
            '"If you increase your self-control, I am sure you will be able to avoid smoking."',
            '"Try taking a couple of days of vacation to relieve the stress of your job."',
            '"It is good that you can talk about your concerns. Try calling a friend when you want to smoke."',
          ],
          answer: 3,
          rationale: "Validating concerns and suggesting support strategies is therapeutic.",
        },
        {
          id: "np2_q80",
          question:
            "Kuro was rushed to the emergency department after a motor vehicle accident where he fractured his mandible. Surgery has been performed to immobilize his injury. The surgeon has wired Kuro's jaw. In the immediate postoperative phase, you as the nurse should:",
          choices: [
            "Prevent nausea and vomiting.",
            "Maintain a patent airway.",
            "Provide frequent oral hygiene.",
            "Establish a way for the client to communicate.",
          ],
          answer: 1,
          rationale: "Maintaining a patent airway is the priority after jaw surgery.",
        },
        {
          id: "np2_q81",
          question:
            "You are visiting Tashigi who reports that her chronic bronchitis has recently worsened. Which of the following instructions would you reinforce to Tashigi to help with her condition?",
          choices: [
            "Increase amount of bedrest.",
            "Increase fluid intake.",
            "Reduce home oxygen use.",
            "Increase sodium intake.",
          ],
          answer: 1,
          rationale: "Increasing fluid intake helps thin secretions in chronic bronchitis.",
        },
        {
          id: "np2_q82",
          question:
            "You are completing an assessment on Tashigi. Based on your knowledge and previous experience of working with patients who have chronic bronchitis, which of the following findings would you expect Tashigi to present?",
          choices: [
            "Minimal sputum with cough",
            "Pink, frothy sputum",
            "Barrel chest",
            "Stridor on expiration",
          ],
          answer: 2,
          rationale: "Barrel chest is characteristic of chronic bronchitis/COPD.",
        },
        {
          id: "np2_q83",
          question:
            "Nojiko is a hospitalized client under your care. She was diagnosed with end stage cancer and has suddenly decided to discontinue her treatment. She requests no more additional treatment like antibiotics, tube feedings, and mechanical ventilation. Acting as Nojiko's advocate, which of the following actions should you take?",
          choices: [
            "Respect the client's wishes and indicate those wishes on the plan of care",
            "Encourage the client to share the decision with the family and the client's physician",
            "Clarify other treatments that the client wishes to withhold",
            "Wait until additional treatment is required and then decide what to do based on the client's condition",
          ],
          answer: 0,
          rationale: "As patient advocate, respect the client's autonomous decision.",
        },
        {
          id: "np2_q84",
          question:
            "A car-pedestrian accident occurred nearby. The pedestrian client named Mohji was brought to the ER of the hospital you are working on. Mohji is alert and oriented but complains of difficulty breathing. His SpO2 levels vary from 88-90%. O2 was applied at 2L per nasal cannula with no improvement in SpO2. Oxygen per mask is then initiated at 40% with little improvement. After some tests, Mohji's radiograph films reveal no obvious injuries or fractures. Suddenly, Mohji loses consciousness, has a respiratory arrest, and subsequently dies. During his resuscitation, it is determined that one of the nurses failed to open the valve to the O2 tank and Mohji has not been receiving oxygen. What is the key ethical principle involved in this scenario?",
          choices: [
            "Nonmaleficence - do no harm",
            "Fidelity - truth",
            "Beneficence - do good",
            "Justice - truth",
          ],
          answer: 0,
          rationale: "Nonmaleficence (do no harm) was violated.",
        },
        {
          id: "np2_q85",
          question:
            "Van, one of the patients in your unit, has a sudden change in his condition. You called the physician to report this occurrence. He gave orders over the telephone for ABGs to be drawn stat. Which of the following is the most important safety consideration when obtaining the physician's order over the phone?",
          choices: [
            "Writing the order down and reading it back to the physician",
            "Calling the respiratory therapist stat to draw the ABGs",
            "Giving the order stat to the health unit coordinator to place in the computer",
            "Writing down the order for ABGs immediately",
          ],
          answer: 0,
          rationale: "Read back verbal orders to verify accuracy.",
        },
        {
          id: "np2_q86",
          question:
            "Patient Cabaji is to be admitted to the surgical unit. He has multiple rings, a bracelet, a watch, and PHP 3500 in cash. Which of the following is the safest action for you to take regarding the patient's valuables?",
          choices: [
            "Allowing the client to keep the items so they will be safeguarded by the client",
            "Collecting the items and placing them in the client's room closet",
            "Giving the money to the client's spouse and allowing the client to keep the jewelry",
            "Collecting the items according to hospital policy for safekeeping",
          ],
          answer: 3,
          rationale: "Follow hospital policy for safeguarding patient valuables.",
        },
        {
          id: "np2_q87",
          question:
            "You admit patient Kuroobi who is complaining of nausea and vomiting to the emergency department. Kuroobi is alone in the ED without any relatives or guardians. After you complete your assessment on Kuroobi, you prepare to leave the room. Which of the following statements is your safest instruction for Kuroobi?",
          choices: [
            '"If you need to vomit, here is a basin for you. I don\'t want you to get up on your own."',
            '"I will be in the room next door. I\'ll check back in about 10 minutes."',
            '"I will go update the doctor about you. Do you need anything before I go?"',
            '"Here is the nurse call light. Press this button if you need me."',
          ],
          answer: 0,
          rationale: "Providing an emesis basin and instructing not to get up prevents falls.",
        },
        {
          id: "np2_q88",
          question:
            "You are a nurse assigned to take care of patients with various liver conditions. You utilize your knowledge and skills on the diseases to effectively plan and manage care for these patients. Patient Bellmere was admitted to the hospital with a diagnosis of nonalcoholic fatty liver disease (NAFLD). You are reviewing her chart for her health history. Which of the following findings is consistent with the NAFLD disease process?",
          choices: [
            "70 years old",
            "Obese",
            "History of recent antibiotic use",
            "Living in colder climates",
          ],
          answer: 1,
          rationale: "Obesity is a major risk factor for NAFLD.",
        },
        {
          id: "np2_q89",
          question:
            "Yosaku is a male patient diagnosed with cirrhosis. While caring for Yosaku, you add the nursing diagnosis Disturbed body image related to physical manifestations of the illness when you overheard Yosaku telling his brother:",
          choices: [
            '"I don\'t think I can handle this disease."',
            '"I know the doctors say I have liver failure, but I don\'t really believe them."',
            '"I know I should rest more, but I\'m just not that type of person."',
            '"I don\'t like the fact that I seem to have breasts now."',
          ],
          answer: 3,
          rationale:
            "Gynecomastia (breast enlargement) is a physical manifestation of cirrhosis that affects body image.",
        },
        {
          id: "np2_q90",
          question:
            "Patient Johnny was admitted in the ED after complaints of upper right sided abdominal pain. You suspect that the client may have liver cancer when which serum laboratory test result is noted to be elevated?",
          choices: [
            "Creatinine",
            "Serum alpha-fetoprotein (AFP) levels",
            "Serum phosphorus levels",
            "CA-125",
          ],
          answer: 1,
          rationale: "Elevated AFP is associated with liver cancer.",
        },
        {
          id: "np2_q91",
          question:
            "You are caring for patient Carol after her liver biopsy with the assistance of student nurse Apis. You evaluate that Apis understands liver biopsy post procedure care when she does which of the following?",
          choices: [
            "plans to monitor vital signs every hour.",
            "promotes ambulation 1 hour after the procedure.",
            "positions the client on the right side.",
            "encourages the client to cough and deep breathe immediately following the procedure.",
          ],
          answer: 2,
          rationale: "Right side-lying position applies pressure to the biopsy site.",
        },
        {
          id: "np2_q92",
          question:
            "Pell is a patient hospitalized for conservative treatment of liver cirrhosis. As part of the collaborative plan of care, you would anticipate which of the following?",
          choices: [
            "monitoring the client's blood sugar.",
            "maintaining NPO (nothing by mouth) status.",
            "administering antibiotics.",
            "encouraging frequent ambulation.",
          ],
          answer: 0,
          rationale: "Blood glucose monitoring is important due to impaired liver function.",
        },
        {
          id: "np2_q93",
          question:
            "You are a nurse providing care for patient Vivi who came to the hospital for assessment. She is suspected to have osteoporosis. You help her by utilizing your knowledge on the topic. You reviewed Vivi's chart after conducting her physical assessment. You correctly identify that which of the following signs/symptoms indicate that Vivi has already developed osteoporosis?",
          choices: [
            "The client has lost one (1) inch in height.",
            "The client has lost 12 pounds in the last year.",
            "The client's hands are painful to the touch.",
            "The client's serum uric acid level is elevated.",
          ],
          answer: 0,
          rationale: "Height loss indicates vertebral compression fractures due to osteoporosis.",
        },
        {
          id: "np2_q94",
          question:
            "After Vivi's diagnosis of osteoporosis, she asked you why smoking cigarettes causes her bones to become brittle. Your most appropriate response is:",
          choices: [
            '"Smoking causes nutritional deficiencies, which contribute to osteoporosis."',
            '"Tobacco causes an increase in blood supply to the bones, causing osteoporosis."',
            '"Smoking low-tar cigarettes will not cause your bones to become brittle."',
            '"Nicotine impairs the absorption of calcium, causing decreased bone strength."',
          ],
          answer: 3,
          rationale: "Nicotine impairs calcium absorption, contributing to osteoporosis.",
        },
        {
          id: "np2_q95",
          question:
            "When discussing osteoporosis with Vivi, you are aware that which of the following is an example of a secondary nursing intervention?",
          choices: [
            "Obtain a bone density evaluation test.",
            "Perform non-weight-bearing exercises regularly.",
            "Increase the intake of dietary calcium.",
            "Refer clients to a smoking cessation program.",
          ],
          answer: 0,
          rationale: "Bone density testing is a secondary prevention (screening) intervention.",
        },
        {
          id: "np2_q96",
          question:
            "Vivi is prescribed by her physician Calcitonin by nasal spray. Which of the following assessment findings indicate an adverse effect of the medication?",
          choices: [
            "The client complains of nausea and vomiting.",
            "The client is drinking two (2) glasses of milk a day.",
            "The client has a runny nose and nasal itching.",
            "The client reports increased energy levels.",
          ],
          answer: 2,
          rationale: "Nasal irritation is a common side effect of nasal calcitonin.",
        },
        {
          id: "np2_q97",
          question:
            "Vivi is also prescribed calcium carbonate (Tums) for her osteoporosis. Which of the following instructions is most important for you to teach Vivi regarding taking this medication?",
          choices: [
            "Teach the client to take Tums with the breakfast meal only.",
            "Instruct the client to take Tums 30 to 60 minutes before a meal.",
            "Discuss the need to get a monthly serum calcium level.",
            "Take the medication with a full glass of water.",
          ],
          answer: 1,
          rationale: "Calcium carbonate is best absorbed when taken with food.",
        },
        {
          id: "np2_q98",
          question:
            "Patient Bellmere was admitted to the hospital with a diagnosis of nonalcoholic fatty liver disease (NAFLD). You are reviewing her chart for her health history. Which of the following findings is consistent with the NAFLD disease process?",
          choices: [
            "70 years old",
            "Obese",
            "History of recent antibiotic use",
            "Living in colder climates",
          ],
          answer: 1,
          rationale: "Obesity is a major risk factor for NAFLD.",
        },
        {
          id: "np2_q99",
          question:
            "Yosaku is a male patient diagnosed with cirrhosis. While caring for Yosaku, you add the nursing diagnosis Disturbed body image related to physical manifestations of the illness when you overheard Yosaku telling his brother:",
          choices: [
            '"I don\'t think I can handle this disease."',
            '"I know the doctors say I have liver failure, but I don\'t really believe them."',
            '"I know I should rest more, but I\'m just not that type of person."',
            '"I don\'t like the fact that I seem to have breasts now."',
          ],
          answer: 3,
          rationale:
            "Gynecomastia (breast enlargement) is a physical manifestation of cirrhosis that affects body image.",
        },
        {
          id: "np2_q100",
          question:
            "Patient Johnny was admitted in the ED after complaints of upper right sided abdominal pain. You suspect that the client may have liver cancer when which serum laboratory test result is noted to be elevated?",
          choices: [
            "Creatinine",
            "Serum alpha-fetoprotein (AFP) levels",
            "Serum phosphorus levels",
            "CA-125",
          ],
          answer: 1,
          rationale: "Elevated AFP is associated with liver cancer.",
        },
      ],
    },
    {
      id: "tranpthree",
      title: "TRA Nursing Practice 3",
      description: "Nursing Practice 3 Provided by TopRank Academy",
      questions: [
        {
          id: "np3_q1",
          question:
            "This test questionnaire contains 100 test questions. Shade only one (1) box for each question on your answer sheets. Two or more boxes shaded will invalid your answer. AVOID ERASURES. Detach one (1) answer sheet from the bottom of your Examinee ID/Answer Sheet Set. Write the subject title 'NURSING PRACTICE III' on the box provided.",
          choices: ["A", "B", "C", "D"],
          answer: 0,
          rationale: "Instruction section - no actual question content.",
        },
        {
          id: "np3_q2",
          question:
            "Nurse Luna is employed in hospital 'X' and assigned in the Medical Ward for a year now. The nurse supervisor ordered her to proceed immediately to the Surgical Ward as a reliever to another nurse who went on emergency sick leave. She was not oriented in the Surgical Ward and the unit was very busy. Which of the following is the MOST appropriate action of Nurse Luna?",
          choices: [
            "Request the nurse supervisor to assign a more experienced nurse reliever",
            "Refuse the order of the nurse supervisor and stay put in the medical ward",
            "Comply with the order of the nurse supervisor",
            "Request the nurse supervisor to give her brief orientation before compliance",
          ],
          answer: 3,
          rationale:
            "Requesting a brief orientation before compliance is the most appropriate action.",
        },
        {
          id: "np3_q3",
          question:
            "To qualify as an operating room nurse in the Philippines setting, Nurse Luna should possess the minimum requirements of",
          choices: [
            "Master's degree holder with valid and current license",
            "Worked in the surgical unit for 8 hours",
            "RN and has worked abroad",
            "RN with valid and current license and Surgical Ward orientation",
          ],
          answer: 3,
          rationale: "Minimum requirement is RN with valid license and surgical orientation.",
        },
        {
          id: "np3_q4",
          question:
            "Nurse Luna is a graduate in the Philippines nursing school. As part of her professional and personal development, she should attend which of the following program? EXCEPT",
          choices: [
            "Programs by the Philippine Nurses Association",
            "Continuing Professional Development programs by the Professional Regulation Commission",
            "Symposium and forum offered by the school",
            "Programs of international nurses associations",
          ],
          answer: 3,
          rationale: "International programs are not required for local professional development.",
        },
        {
          id: "np3_q5",
          question: "The PRIORITY objective behind career advancement of Nurse Luna is",
          choices: [
            "Increasing revenue of the service providers",
            "Renew old acquaintances and establish camaraderie",
            "Increased number of networking activities",
            "Updating one's knowledge, skills, conduct and values in professional nursing",
          ],
          answer: 3,
          rationale: "Career advancement is primarily for updating knowledge and skills.",
        },
        {
          id: "np3_q6",
          question:
            "Nurse Luna has an expired license but promises to renew her license in due time. Which of the following violation can she be charged if she participated in home health care activity?",
          choices: ["Malpractice", "Grave coercion", "Felony", "Negligence"],
          answer: 0,
          rationale: "Practicing with an expired license constitutes malpractice.",
        },
        {
          id: "np3_q7",
          question:
            "Health Education is an area of nursing practice when the nurse can be creative and independent in the work setting. A nurse is developing a Teaching plan for Isabel 18 year old with Bronchial Asthma. She has an order for discharge. Which part of the teaching plan should be given PRIORITY?",
          choices: [
            "Quick relief medicines as ordered",
            "Avoid contact with fur-bearing pets",
            "Avoid going to malls",
            "Wash bed sheets in warm water",
          ],
          answer: 0,
          rationale: "Quick relief medicines are the priority for discharge teaching.",
        },
        {
          id: "np3_q8",
          question:
            "Mr Gilbert is for postural drainage. The nurse should position the client's head at",
          choices: [
            "No greater than a 25 degree downward angle",
            "A 30 degree lateral angle for 25 minutes",
            "25 degree at lateral angle",
            "A 38 degree downward angle for 25 minutes",
          ],
          answer: 0,
          rationale: "Head should be positioned no greater than 25 degrees downward.",
        },
        {
          id: "np3_q9",
          question:
            "Nurse Beth is teaching Michel, an asthmatic, on how to use the Spirometer. She should instruct the client to have the mouthpiece.",
          choices: [
            "Place into the mouth and have regular breathing",
            "Place into the mouth and have a fast deep breath",
            "Place into the mouth and inhale slowly",
            "Place into the mouth and exhale slowly",
          ],
          answer: 2,
          rationale: "Inhale slowly through the spirometer.",
        },
        {
          id: "np3_q10",
          question:
            "Nurse Beth is teaching a client on how to use metered dose inhaler to prevent asthmatic attack while in the hospital. She should instruct the client to do the following EXCEPT.",
          choices: [
            "Keep the head of the bed at 15 degree angle",
            "Do oral care after use of the inhaler",
            "Use the inhaler before she take her meals",
            "Use the inhaler as ordered",
          ],
          answer: 0,
          rationale: "Head of bed should be elevated, not at 15 degrees.",
        },
        {
          id: "np3_q11",
          question:
            "You are conducting health-teaching sessions to clients with cardiovascular disorders. Client Pedro asks you this question: 'Tell me, Nurse, what I should do with my Hypertension?' The best response of a Nurse is",
          choices: [
            '"comply with your diet, lifestyle and exercise"',
            '"strictly follow your prescribed daily exercise and smoking cessation"',
            '"comply with your diet, life style modification and prescribed medicines"',
            '"include garlic in your meals with regulation of alcohol consumption"',
          ],
          answer: 2,
          rationale: "Comprehensive compliance with diet, lifestyle, and medicines is best.",
        },
        {
          id: "np3_q12",
          question:
            "As a staff nurse in a government hospital, you have been exposed to varied cases of clients with endocrine problems. Your nursing responsibility starts from admission to discharge which is a domain of your competencies. Which of the following questions should you ask during an admission interview for a client with a diagnosis of pheochromocytoma?",
          choices: [
            "Do you always feel like you are suffocating, you want to rest and sleep",
            "Do you suddenly feel warm and flushed when you get out of bed",
            "Do you notice an increase in your heart beat? palpitations",
            "Do you have an increase in urination lately?",
          ],
          answer: 2,
          rationale: "Palpitations are a common symptom of pheochromocytoma.",
        },
        {
          id: "np3_q13",
          question:
            "When the sympathetic nervous system is stimulated in the case of pheochromocytoma, you expect which of the following signs?",
          choices: [
            "Hypertension, Headache, Hyperhidrosis, Hypermetabolism",
            "3 and 4",
            "1 only",
            "1, 2, 3, and 4",
            "2 and 3",
          ],
          answer: 2,
          rationale:
            "All four signs are expected: hypertension, headache, hyperhidrosis, and hypermetabolism.",
        },
        {
          id: "np3_q14",
          question:
            "Which of the following drugs can induce hypertensive crisis in Pheochromocytoma?",
          choices: [
            "Tricyclic antidepressant",
            "Corticosteroid",
            "Respiratory stimulant",
            "Radio iodine therapy",
          ],
          answer: 0,
          rationale:
            "Tricyclic antidepressants can induce hypertensive crisis in pheochromocytoma.",
        },
        {
          id: "np3_q15",
          question:
            "In the presence of pheochromocytoma, the diagnostic test which is expected to be elevated is",
          choices: [
            "Serum thyroid hormone levels",
            "Albumin globulin test",
            "Urine cyclic adenosine mono phosphate",
            "24 hours urine collection for vanillylmandelic acid (VMA)",
          ],
          answer: 3,
          rationale: "24-hour urine VMA is elevated in pheochromocytoma.",
        },
        {
          id: "np3_q16",
          question:
            "Palpation, as a modality for physical examination is AVOIDED when diagnosed with pheochromocytoma because this action",
          choices: [
            "Will cause sudden release of norepinephrine and severe hypotension",
            "Will cause a sudden release of catecholamines and severe hypertension",
            "Will displace the location of the tumor",
            "Will cause sudden release of epinephrine and severe palpitation",
          ],
          answer: 1,
          rationale:
            "Palpation can cause sudden release of catecholamines leading to severe hypertension.",
        },
        {
          id: "np3_q17",
          question:
            "Mr. Con is being prepared for a major surgery. Legal preparation for surgery consists of checking all the required forms for the operation. Equally important is to make sure that the patient is physically, psychologically, and emotionally ready for the procedure. Informed consent is a process that gives the patient opportunity involved in his or her care. As patient advocate, the nurse ensures the following three conditions are present to make consent valid, EXCEPT:",
          choices: [
            "Adequate disclosure of the diagnosis by the physician",
            "Comprehension of information by the patient before the operation",
            "Patient voluntarily giving consent",
            "Forms signed by any close relative or watcher",
          ],
          answer: 3,
          rationale: "Consent must be signed by the patient themselves, not just any relative.",
        },
        {
          id: "np3_q18",
          question:
            "The patient asks you, 'What do you think of my surgeon?' You answered 'hmmmmm... he is not really the best one and he seems not to care for patient...' As a result, the patient switches to another surgeon. The latter may have grounds to sue you for",
          choices: ["Slander", "Invasion of privacy", "Malpractice", "Libel"],
          answer: 0,
          rationale: "Slander is spoken defamation, which you committed.",
        },
        {
          id: "np3_q19",
          question:
            "One of your patient's visitors whisper to you, 'I hope you will not try to revive my dear friend if her heart stops as she has already suffered a lot.' The correct response is",
          choices: [
            '"That decision is up to the physician"',
            '"We are all trained in cardiopulmonary resuscitation"',
            '"There is a Do not resuscitate order in her chart"',
            '"I understand your concern, but I can\'t discuss this matter with you"',
          ],
          answer: 3,
          rationale:
            "The nurse cannot discuss DNR decisions with visitors without proper authorization.",
        },
        {
          id: "np3_q20",
          question:
            "According to the Joint Commission, the most frequently cited factor in sentinel (unanticipated) events that leads to a patient's serious physical or psychological injury is",
          choices: [
            "Confusion within the health team",
            "Miscommunication among health team members",
            "Incompetence by a team member",
            "Policy changes are not followed by adequate and consistent staff education",
          ],
          answer: 1,
          rationale: "Miscommunication is the most frequently cited factor in sentinel events.",
        },
        {
          id: "np3_q21",
          question:
            "Conducting Research is one of the major roles of the nurses both in hospital and community settings. To be able to develop such competencies, the nurse has to undergo an actual conduct of the research process. Which of the following statements BEST described a researchable problem?",
          choices: [
            "Responses of parents toward having children with congenital heart diseases.",
            "The relationship between relaxation technique and relief of pain of post CABG patients in the surgical coronary care unit.",
            "Incidence of medication errors and reporting practices of Health Care Professional in a teaching hospital",
            "To what extent do pre-operative teaching affect the length of hospitalization of patients going for surgery",
          ],
          answer: 1,
          rationale:
            "This statement clearly defines a researchable problem with variables and population.",
        },
        {
          id: "np3_q22",
          question:
            "Nurse Joan has to undergo literature search for her study. She can avail of this from the following EXCEPT",
          choices: [
            "A summary of research articles that are relevant to the study",
            "A written document published by the investigator herself",
            "Any retrieval from website that will help her search for the subject on investigation",
            "A description of the scientific study from an information provided by a faculty member teaching research",
          ],
          answer: 3,
          rationale: "Faculty member's description is not a primary literature source.",
        },
        {
          id: "np3_q23",
          question:
            "Weight is taken as a baseline measurement of obese female adolescents as study subjects for a weight reduction program. This is repeated to note any changes. This pre-test is done to",
          choices: [
            "Determine whether the instrument is defective",
            "Assess if research design is appropriate to the problem identified",
            "Evaluate whether the instrument is defective",
            "Obtain preliminary data before a treatment is conducted by the researcher",
          ],
          answer: 3,
          rationale: "Pre-test establishes baseline data before intervention.",
        },
        {
          id: "np3_q24",
          question:
            "A Nurse researcher is using ACCU-CHEK, a monitoring kit to test presence of Diabetes Mellitus among her study subject. How do you classify this type of measurement?",
          choices: ["Microbial", "Cytological", "Physiological", "Chemical"],
          answer: 3,
          rationale: "Blood glucose monitoring is a chemical measurement.",
        },
        {
          id: "np3_q25",
          question:
            "Nurse Joan, wanted to conduct a study using quasi-experimental design. This design will need a",
          choices: [
            "Retrospective evaluation",
            "Field setting for the study",
            "Comparable group",
            "Manipulation of the dependent variable",
          ],
          answer: 2,
          rationale: "Quasi-experimental design requires a comparable group.",
        },
        {
          id: "np3_q26",
          question:
            "In initiating care for patient Kian, which of the following would be an APPROPRIATE question to be asked by Nurse Tessie in her assessment?",
          choices: [
            "Since this is doctor's order, you have to drink ice water, instead of hot tea.",
            "Do you have any books I could read about people of your culture?",
            "Do you need to set aside your cultural practices, and comply with hospital rules and regulations?",
            "Is there anything I am doing that is not acceptable to your culture?",
          ],
          answer: 3,
          rationale:
            "This question respects the patient's culture and promotes cultural competence.",
        },
        {
          id: "np3_q27",
          question:
            "Nurse Tessie respects cultural practices integration in her nursing care plan. Which of the following nursing action is MOST representative of the culturally competent nurse?",
          choices: [
            "Help patient Kian to learn and understand the language",
            "Explain and validate health knowledge and beliefs of Patient Kian with that of the hospital",
            "Help Patient Kian identify ways to relate more to the culture where they now resides",
            "Ask patient Kian to help Nurse Tessie in knowing more the culture of his origin",
          ],
          answer: 1,
          rationale: "Validating health beliefs with hospital practices shows cultural competence.",
        },
        {
          id: "np3_q28",
          question:
            "The family of Patient Kian request utilization of warm compress with banana leaves to Patient Kian. Which of the following is the MOST appropriate response of Nurse Tessie?",
          choices: [
            "Cost less than traditional therapies",
            "Are used when traditional therapies are not effective",
            "Utilized natural products while traditional therapies do not",
            "Can be effective as traditional therapies for some conditions",
          ],
          answer: 3,
          rationale:
            "Alternative therapies can be as effective as traditional therapies for some conditions.",
        },
        {
          id: "np3_q29",
          question:
            "Patient Kian's family requests time for spiritual healing process in the hospital. This is allowed by Nurse Tessie and hospital because it",
          choices: [
            "Gives fulfillment and meaning to the patient and family",
            "Demonstrate people being responsible for their life patterns",
            "Is non-denominated community service",
            "Formalizes a religious dogma",
          ],
          answer: 0,
          rationale: "Spiritual healing gives fulfillment and meaning to the patient and family.",
        },
        {
          id: "np3_q30",
          question:
            "Positive Practice Environment (PPE) influences healing process. Which of the following ways can help Nurse Tessie create a healing environment?",
          choices: [
            "Ensure that relatives and friends visit the patient",
            "Empower clients to make healthy decisions for themselves",
            "Place television in each room of the hospital",
            "Ensure that staff nurses does not experience burnout",
          ],
          answer: 1,
          rationale: "Empowering clients promotes a positive healing environment.",
        },
        {
          id: "np3_q31",
          question:
            "Julie, 28 years old, has been diagnosed with Diabetes Mellitus. She was advised by her family physician to be admitted to undergo preparation for insulin therapy. Her blood sugar ranges from 200 to 210 mg/dL. At 6 am, Nurse Cynthia administered her insulin injection. After 2 hours, the patient complained of cold clammy perspiration, chilly sensation and abdominal discomfort. Which of the following PRIORITY nursing actions should the nurse perform?",
          choices: [
            "Give her biscuit to eat",
            "Do urine testing for sugar",
            "Provide her warm blanket",
            "Take blood pressure and put her on bed rest",
          ],
          answer: 0,
          rationale:
            "Cold clammy perspiration indicates hypoglycemia; give fast-acting carbohydrate.",
        },
        {
          id: "np3_q32",
          question:
            "Patient Julia has been classified to have a type II Diabetes Mellitus. Which of the following is NOT a typical manifestation of individuals with this condition?",
          choices: [
            "Frequency of urination",
            "Increased craving for food",
            "Increased thirst",
            "Weight loss",
          ],
          answer: 3,
          rationale: "Weight loss is more typical of type 1 diabetes, not type 2.",
        },
        {
          id: "np3_q33",
          question:
            "Mr Dencio, 58 years old is admitted to the pay ward because of respiratory problem. The nurse initiated oxygen treatment by mask but the client refuses despite the encouragement by the wife. The client is aware of the benefits of the treatment. Which of the following should be given priority?",
          choices: [
            "Ask the opinion of the wife",
            "Conduct consensus building",
            "Let the attending physician decide on the necessity of the treatment",
            "Respect the decision of the client",
          ],
          answer: 3,
          rationale: "Patient autonomy must be respected.",
        },
        {
          id: "np3_q34",
          question:
            "You are taking care of Mr Dencio who is on the last cycle of radiation therapy for his lung cancer. You should instruct Mr Dencio to",
          choices: [
            "Brush teeth and gums vigorously after meals",
            "Wait one hour after treatment before eating",
            "Use mouthwash containing alcohol every 2 hours",
            "Avoid drinking hot fluids",
          ],
          answer: 3,
          rationale: "Hot fluids can irritate radiation-damaged mucous membranes.",
        },
        {
          id: "np3_q35",
          question:
            "Ime is the Nurse on duty in the medical ward and many of her patients are suffering from problems of oxygenation. The following are relevant data to be documented when taking the health history of a client with anemia EXCEPT:",
          choices: [
            "Alcohol intake",
            "Fatigue and weakness",
            "Dietary intake",
            "Episodes of bleeding",
          ],
          answer: 0,
          rationale: "Alcohol intake is not a primary data point for anemia history.",
        },
        {
          id: "np3_q36",
          question:
            "A client with congenital heart disease is suffering from thickening of the skin under his fingers due to chronic hemoglobin",
          choices: ["Clubbing", "Cyanosis", "Edema", "Pallor"],
          answer: 0,
          rationale: "Clubbing is thickening of the skin under the fingers due to chronic hypoxia.",
        },
        {
          id: "np3_q37",
          question:
            "When the Nurse is assessing a client with Congestive Heart failure with pitting edema, the Nurse's documentation will include which of the following:",
          choices: [
            "Degree of pitting edema",
            "Time of indention recovery",
            "Depth of edema",
            "All of the options",
          ],
          answer: 3,
          rationale: "All parameters should be documented for pitting edema.",
        },
        {
          id: "np3_q38",
          question:
            "Mr. Gabby is with left sided heart failure. Ime's documentation of her assessment findings will include the following, EXCEPT",
          choices: ["Dependent edema", "Pulmonary crackles", "Difficulty of breathing", "Cough"],
          answer: 0,
          rationale: "Dependent edema is a sign of right-sided, not left-sided, heart failure.",
        },
        {
          id: "np3_q39",
          question:
            "A client is on a diuretic therapy. Expected entry in patient's chart should include the following information, EXCEPT:",
          choices: [
            "Serum electrolytes monitored",
            "Intake and output recorded",
            "Lasix administered at 8 o'clock in the evening",
            "Weight is taken before drug is given",
          ],
          answer: 2,
          rationale:
            "Diuretics like Lasix should be given in the morning to avoid nocturia, not at 8 PM.",
        },
        {
          id: "np3_q40",
          question:
            "Maya, a 42 year old teacher with cardiac ailment, nervously informs the doctor that her goiter is getting bigger and distracts her while swallowing food. The physician who examined her instructed the nurse to admit Maya and to prepare her for surgery after medical clearance. While interviewing Patient Maya, she claims that she is anxious for the coming surgery. You expect the following signs and symptoms when one is under stress, EXCEPT:",
          choices: [
            "Blood loss and weakness",
            "Increases respiration rate",
            "Decreased mobility",
            "Pain due to tissue damage",
          ],
          answer: 0,
          rationale: "Blood loss is not a sign of anxiety/stress.",
        },
        {
          id: "np3_q41",
          question:
            "Based on your knowledge, Patient Maya, who has a history of cardiac illness, should not be given an enema before surgery. Which of the following reasons inhibits the order of enema for Patient Maya?",
          choices: [
            "Paralyses the peristalsis movement and increases abdominal pain",
            "Produces vagal stimulation that is dangerous to cardiac patient",
            "Causes constipation and fecal impaction after the surgery",
            "Enema results to increased water absorption in the bowels",
          ],
          answer: 1,
          rationale: "Vagal stimulation from enema can be dangerous for cardiac patients.",
        },
        {
          id: "np3_q42",
          question:
            "Mr. S came to the ER because of sharp troubling pain. After his surgery, he claimed pain is felt even he is asleep. At what stage of pain mechanism do you classify this pain?",
          choices: ["Perception", "Modulation", "Transmission", "Transduction"],
          answer: 0,
          rationale: "Perception is when the pain is felt, even during sleep.",
        },
        {
          id: "np3_q43",
          question: "When a client complains of pain less than 6 months, it is called",
          choices: ["Chronic pain", "Persistent pain", "Acute pain", "Intermittent pain"],
          answer: 2,
          rationale: "Pain lasting less than 6 months is acute pain.",
        },
        {
          id: "np3_q44",
          question: "In order for the nurse to recall the location of pain, he has to",
          choices: [
            "Asks for onset and duration",
            "Mark the painful area in a body diagram",
            "Asks for facial expression",
            "Asks verbal description using pain intensity scale",
          ],
          answer: 1,
          rationale: "Body diagram helps recall the location of pain.",
        },
        {
          id: "np3_q45",
          question: "An example of a drug therapy to relieve moderate pain is",
          choices: ["Codeine", "Demerol", "Methadone", "Morphine sulphate"],
          answer: 0,
          rationale: "Codeine is a moderate opioid analgesic.",
        },
        {
          id: "np3_q46",
          question: "When a client is on prolonged pain therapy, the nurse should watch for",
          choices: [
            "Tolerance to drug",
            "Allergic reaction to drug",
            "Drug resistance",
            "Addiction to drug",
          ],
          answer: 0,
          rationale: "Tolerance can develop with prolonged pain therapy.",
        },
        {
          id: "np3_q47",
          question:
            "Donny a 46 year old patient admitted to the coronary care unit (CCU) with an MI and frequent premature ventricular contractions (PVCs) has doctor orders for continuous amiodarone infusion, IV nitroglycerin infusion, and morphine sulfate 2 mg IV every 10 minutes until there is relief of pain. She is taken care by Leona a newly graduate nurse. Because of Donny's premature ventricular contraction, the nurse should monitor its effects on which of the following parameters?",
          choices: [
            "Electrolyte levels",
            "Apical radial heart rate",
            "Oxygen saturation",
            "Medications",
          ],
          answer: 0,
          rationale:
            "PVCs can be caused by electrolyte imbalances, especially potassium and magnesium.",
        },
        {
          id: "np3_q48",
          question:
            "In analyzing a patient's electrocardiographic (ECG) rhythm strip, Leona uses the knowledge that the time of the conduction of an impulse through the Purkinje fibers is represented by",
          choices: ["PR interval", "QT interval", "QRS complex", "P wave"],
          answer: 2,
          rationale:
            "QRS complex represents ventricular depolarization through the Purkinje fibers.",
        },
        {
          id: "np3_q49",
          question:
            "A considerable difference between the apical and radial pulse rate of Donny would indicate",
          choices: [
            "Stronger left than right ventricular muscles",
            "Numerous weak ineffectual cardiac contractions",
            "Thickened myocardium and large heart chambers",
            "Increased pressure in systemic arteries",
          ],
          answer: 1,
          rationale: "Pulse deficit indicates weak, ineffectual cardiac contractions.",
        },
        {
          id: "np3_q50",
          question:
            "As Donny is assessed he complains of being nauseated and very weak. The nurse should",
          choices: [
            "Perform nutritional assessment",
            "Alert staff for potential help",
            "Explore and discuss possible effect of stress",
            "Provide reassurance while focusing on pleasant topics",
          ],
          answer: 2,
          rationale: "Nausea and weakness may be stress-related; exploring this is appropriate.",
        },
        {
          id: "np3_q51",
          question:
            "The Physician scheduled for an exercise electrocardiogram (stress test). What information should the nurse include when explaining the value of this test? Exercise stress testing is a:",
          choices: [
            "definitive method to diagnose the cause of chest pain",
            "diagnostic modality of minimal value in planning treatment of angina",
            "noninvasive means of assessing cardiovascular conduction and function",
            "minimally invasive manner of assessing a body's reaction to increase in exercise",
          ],
          answer: 2,
          rationale: "Stress test is noninvasive and assesses cardiovascular function.",
        },
        {
          id: "np3_q52",
          question:
            "The patient admitted in the unit with a urinary condition asked you, the nurse, where in the kidney does urine get formed. You answer them correctly by stating that urine is produced in the:",
          choices: ["Glomerulus", "Proximal convoluted tubule", "Loop of Henle", "Nephron"],
          answer: 3,
          rationale: "The nephron is the functional unit of the kidney where urine is formed.",
        },
        {
          id: "np3_q53",
          question:
            "A client was assigned to your unit after their abdominal surgery. You asked the patient during your morning rounds about the passage of flatus. The patient answered, 'Yes, flatus has passed earlier this morning'. In anticipation of defecation, which of the following instructions are most important for you, the nurse, to give to this client?",
          choices: [
            "Please call the nurse if you need to go to the bathroom.",
            "If you feel the urge to have a bowel movement, please call for assistance before getting up to the toilet. When having a bowel movement, be sure to breathe out to prevent straining. Do not hold your breath.",
            "To prevent the Valsalva maneuver, contract the stomach muscles while holding your breath and push. This will assist in the passage of the stool and will decrease the amount of time required to have a bowel movement.",
            "Your bowels will be moving soon. Please report any abdominal pain.",
          ],
          answer: 1,
          rationale: "This instruction prevents Valsalva maneuver and promotes safety.",
        },
        {
          id: "np3_q54",
          question:
            "You are the nurse on duty in the unit. A client verbalized complaints of a recent constipation. You took the patient's health history. Which of the following statements by the client suggests the likely cause of their constipation?",
          choices: [
            "I walk with a group of friends every day at the mall for an hour.",
            "My spouse died 20 years ago, but my family is very loving and supportive.",
            "The fast food place near my home has really good food. I eat there most of the time.",
            "I take my medications as prescribed.",
          ],
          answer: 2,
          rationale: "Fast food diet is low in fiber, contributing to constipation.",
        },
        {
          id: "np3_q55",
          question:
            "You are the nurse on duty in the emergency room. A client came via ambulance with shortness of breath for the past 3 days. After a few hours in the ER, the client is admitted to the intensive care unit with pulmonary edema that requires intubation and ventilation. A Foley catheter was placed in the client and he had a total of 25 mL urine output. The laboratory reveals: blood glucose of 300, blood urea nitrogen of 100, and creatinine of 5.0. The client has a history of CHF, CAD, diabetes, COPD, and asthma. What's the client's most likely cause of low urine output?",
          choices: [
            "Acute and chronic renal failure due to diabetes and a decreased blood flow to the kidneys due to heart failure.",
            "Renal failure due to decreased coronary output secondary to heart failure.",
            "Decreased blood flow to the kidneys due to congestive heart failure (CHF) secondary to noncompliance with home fluid restriction.",
            "Severe dehydration.",
          ],
          answer: 0,
          rationale:
            "The combination of diabetes and decreased renal perfusion from CHF causes low urine output.",
        },
        {
          id: "np3_q56",
          question:
            "A client came to the hospital complaining of nausea and occasional vomiting. You are the nurse reviewing the client's medical records when you note that this client has a 4 year history of renal insufficiency. They had been on fluid restriction and renal diet. Their laboratory shows a steady increase in BUN, creatinine, and potassium. The client's spouse accompanied the client to the appointment. She pulled you aside and stated that his husband has been having episodes of confusion each day. She told you that she is very concerned about her husband and she wants to know if he is having small strokes. Based on the information provided, what is your best response to the spouse's question?",
          choices: [
            "Confusion is a common sign of transient ischemic attacks. Thank you for informing me of this. The client will need a CAT scan of the head.",
            "The client's kidneys are not working very well. However, confusion is not a common symptom. I will inform the physician of the confusion and have her assess the situation further with the client.",
            "The elevated potassium is causing the confusion. The client will need some medication to decrease the potassium level.",
            "The client is experiencing worsening uremic syndrome. This is associated with kidney failure and is a sign that the client's kidney function is becoming worse. I will notify the physician about the confusion. There are a couple of treatment options to consider. The physician will discuss the treatment options with the client and you.",
          ],
          answer: 3,
          rationale: "Confusion is a sign of worsening uremic syndrome due to kidney failure.",
        },
        {
          id: "np3_q57",
          question:
            "One of the elderly patients assigned to you in the ward has been complaining of increasing trips to the bathroom to urinate. Her estimated coffee intake is 3 cups every day. What is the best explanation you can provide to this patient?",
          choices: [
            "The increased urine production is most likely due to a urinary tract infection.",
            "Coffee is causing the increased urination due to your increased fluid intake. This is completely normal and nothing to be concerned about.",
            "Coffee is causing the increased urination. Coffee contains caffeine that causes diuresis, or increased urine formation. Simply decreasing the number of cups of coffee you drink each day, and limiting the consumption of caffeinated beverages to the morning hours, should help decrease your trips to the bathroom.",
            "Drinking coffee increases the circulating plasma in the body and this increases the urine formation. Simply decreasing the number of cups of coffee you are drinking should help.",
          ],
          answer: 2,
          rationale: "Caffeine is a diuretic; reducing intake can decrease urinary frequency.",
        },
        {
          id: "np3_q58",
          question:
            "You are beginning your shift for the day. You start by assessing a client that has a Foley catheter connected to a collection bag. Which of the following is the best routine catheter care actions to take while caring for this client?",
          choices: [
            "Encourage increased oral fluid intake and observe for any opacity in the urine suggesting bacterial infection.",
            "Carefully wash the perineal area with soap and water after each bowel movement.",
            "Avoid touching the tip of the spigot to any surfaces when emptying the collection bag.",
            "Encourage the client to drink at least 2000 ml. each day and carefully wash the perineal area, with soap and water, at least twice daily and with each bowel movement.",
          ],
          answer: 3,
          rationale: "Adequate fluid intake and perineal care are essential for catheter care.",
        },
        {
          id: "np3_q59",
          question:
            "A client of yours read the term activities of daily living. As a knowledgeable nurse, you know that activities of daily living (ADLs) are the essential and routine tasks that most young, healthy individuals can perform without assistance. These include the basic activities that are performed in the course of a normal day. You also know about instrumental activities of daily living (IADL). Which of the following statements best describes IADL?",
          choices: [
            "Activities that are usually performed in the course of a normal day. These activities include ambulating, eating, dressing, bathing, brushing the teeth, and grooming.",
            "Activities that assist the client in recognizing and managing stress. These activities include facilitating interpersonal relationships, allowing adequate time for rest, and providing regular, nutritious meals.",
            "Activities that allow the client to be independent in society. These activities include shopping, preparing meals, paying bills, and taking medications appropriately.",
            "Activities that support the effectiveness of direct care interventions. These activities include checking equipment, directing the maintenance of the client's room, and managing the supply of materials needed for client care.",
          ],
          answer: 2,
          rationale: "IADLs are activities that allow independent living in society.",
        },
        {
          id: "np3_q60",
          question:
            "One of your clients arrived in the preoperative area for their knee surgery. You asked them to put an elastic stocking on the non operative leg. The client asked you, 'What is the purpose of these stockings?' Your best response to the client's question is:",
          choices: [
            "The stockings promote return of venous blood to the heart and assist in preventing the blood from clotting in the legs.",
            "The operating room is very cold. The stockings assist in maintaining a healthy core body temperature during the operation.",
            "The stockings promote joint mobility.",
            "The stockings promote the return of arterial blood to the heart and prevent blood from clotting in the legs.",
          ],
          answer: 0,
          rationale: "Elastic stockings prevent venous stasis and thromboembolism.",
        },
        {
          id: "np3_q61",
          question:
            "The relative of an immobile client in your unit asked you, the nurse, about the complications of immobility. You answer her correctly by stating that which of the following are the complications of immobility? Select all that apply.",
          choices: [
            "Primary osteoporosis - not result of immobility\nFoot drop\nUrinary stasis\nDirect complications\nPressure ulcer",
            "I",
            "I, II, III, IV",
            "I, II, IV",
            "II, III, IV",
          ],
          answer: 3,
          rationale:
            "Foot drop, urinary stasis, and pressure ulcers are complications of immobility.",
        },
        {
          id: "np3_q62",
          question:
            "You are a nurse providing palliative care to Coby, an elderly with terminal illness. You use your knowledge on terminal illness and palliative care to provide the best care to this patient. Coby approached you and asked about palliative care since he has been hearing it a lot lately after he was diagnosed with his terminal illness. As a knowledgeable nurse, you know which of the following is the best definition of palliative care?",
          choices: [
            "Care for terminally ill clients.",
            "Symptom management for a client when a disease no longer responds to cure-focused treatment.",
            "Aggressive cure-focused disease treatment and management.",
            "Comfort care.",
          ],
          answer: 1,
          rationale:
            "Palliative care focuses on symptom management when cure is no longer possible.",
        },
        {
          id: "np3_q63",
          question:
            "Coby asked you what the goal of palliative care is. You answer him correctly by stating that which of the following are the goals of palliative care? Select all that apply.",
          choices: [
            "Preventing disease symptoms\nRelieving disease symptoms\nCuring a disease\nTreating a disease",
            "I",
            "II",
            "I, II",
            "III, IV",
          ],
          answer: 2,
          rationale: "Palliative care aims to relieve disease symptoms, not cure the disease.",
        },
        {
          id: "np3_q64",
          question:
            "Coby is now under home health with palliative care services. He stated that he has been experiencing nausea. Which of the following actions will most likely promote comfort in this client?",
          choices: [
            "Educate the patient and family in the use of prescribed antiemetics; providing oral care every 2 to 4 hours; consuming a diet of clear liquids and ice chips; and avoiding liquids such as coffee, milk, and citrus juices.",
            "Administer additional pain medication.",
            "Provide education to the patient and family regarding oral care and antiemetic medication.",
            "Take a detailed medical history to determine the cause of the nausea.",
          ],
          answer: 0,
          rationale: "Antiemetics and appropriate dietary modifications promote comfort.",
        },
        {
          id: "np3_q65",
          question:
            "The granddaughter of Coby approached you and asked regarding the symptoms their grandfather might experience. You answer her correctly by stating that which of the following are the common symptoms of terminally ill clients?",
          choices: [
            "Hunger, thirst, fatigue, and diarrhea.",
            "Dehydration, nausea, effective breathing, and adequate nutrition.",
            "Discomfort, nausea, ineffective breathing, and fatigue.",
            "Urinary continence, thirst, dehydration, and diarrhea.",
          ],
          answer: 2,
          rationale:
            "Common symptoms include discomfort, nausea, ineffective breathing, and fatigue.",
        },
        {
          id: "np3_q66",
          question:
            "Coby is being cared for at home by his family members. You conducted your physical assessment on Coby and based on your findings, you are aware that Coby's death is imminent. What is your most important role in the care of family at this point in time?",
          choices: [
            "Providing temporary relief of caregiving duties to allow the family to rest.",
            "Providing education regarding the symptoms the client will likely experience.",
            "Coordinating a visiting schedule for the family.",
            "Communicating news of the client's impending death to the family while they are together.",
          ],
          answer: 3,
          rationale: "Compassionate communication of impending death is the priority.",
        },
        {
          id: "np3_q67",
          question:
            "You are a nurse tasked to care for Alvida, a patient with peripheral vascular disease. You use your knowledge on PVD to help care for this patient effectively. You are planning care for patient Alvida with a history of PVD with symptoms of claudication. The focus of your nursing care should be directed in avoiding which of the following scenarios?",
          choices: [
            "Oxygen demand by the muscle exceeds the supply.",
            "Oxygen demand and supply of the working muscle are in balance.",
            "Oxygen supply exceeds the demand of the working muscle.",
            "Oxygen is absent.",
          ],
          answer: 0,
          rationale: "Claudication occurs when oxygen demand exceeds supply.",
        },
        {
          id: "np3_q68",
          question:
            "You are reviewing the labs of Alvida. You note which of the following common abnormal laboratory results that are associated with the development of peripheral vascular disease (PVD)?",
          choices: [
            "High serum calcium level",
            "High serum lipid levels",
            "Low serum potassium",
            "Low serum sodium",
          ],
          answer: 1,
          rationale: "High serum lipid levels are associated with PVD.",
        },
        {
          id: "np3_q69",
          question:
            "You are conducting your assessment on Alvida. You are checking her lower extremities expecting to find which of the following clinical manifestations of peripheral vascular disease?",
          choices: ["Hairy legs", "Mottled skin", "Pink, cool skin", "Warm, moist skin"],
          answer: 1,
          rationale: "Mottled skin is a manifestation of peripheral vascular disease.",
        },
        {
          id: "np3_q70",
          question:
            "Your patient Alvida with PVD has undergone a right femoral-popliteal bypass graft. You assess her blood pressure noting a decrease from 124/80 to 94/62. Which of the following should you assess in Alvida first?",
          choices: [
            "IV fluid solution",
            "Pedal pulses",
            "Nasal cannula flow rate",
            "Capillary refill",
          ],
          answer: 1,
          rationale: "Decreased BP may indicate graft occlusion; assess pedal pulses first.",
        },
        {
          id: "np3_q71",
          question:
            "After further assessment on Alvida who was diagnosed with PVD, you found out that she also has a history of heart failure. You will develop a plan of care for Alvida based on the fact that she may have low tolerance for exercise related to:",
          choices: [
            "Decreased blood flow",
            "Increased blood flow",
            "Decreased pain",
            "Increased blood viscosity",
          ],
          answer: 0,
          rationale: "Decreased blood flow leads to low exercise tolerance.",
        },
        {
          id: "np3_q72",
          question:
            "You are a nurse in the cardiothoracic ward of Hospital Merry. You are assigned to patients with aneurysms. You will utilize your nursing knowledge on aneurysms to care for these patients. You are developing a discharge teaching plan for Morgan, a patient who underwent a repair of abdominal aortic aneurysm a few days ago. You reviewed Morgan's chart for information about his health history. Key findings you noted in his chart are as follows: 1) Smokes 4 cigars a month. 2) Vital signs: blood pressure, ranges from 150/76 mm Hg to 170/98 mm Hg; heart rate, 90 to 100 beats per minute; respirations, 12-18 per minute; temperature, 99.9°F (37.8°C). 3) +1 bilateral ankle edema. Based on the data and expected outcomes, which of the following should you emphasize in the teaching plan for Morgan?",
          choices: ["Food intake", "Fluid volume", "Skin integrity", "Tissue perfusion"],
          answer: 3,
          rationale: "Tissue perfusion is the priority for AAA repair patient.",
        },
        {
          id: "np3_q73",
          question:
            "Helmeppo, a client admitted to the emergency department is complaining of severe abdominal pain. After several tests, a radiograph of his revealed a large abdominal aortic aneurysm. The primary goal for Helmeppo at this time is to:",
          choices: [
            "Maintain circulation.",
            "Manage pain.",
            "Prepare the client for emergency surgery.",
            "Teach postoperative breathing exercises.",
          ],
          answer: 0,
          rationale: "Maintaining circulation is the primary goal for AAA.",
        },
        {
          id: "np3_q74",
          question:
            "Yasopp, a 54 year old client was admitted in the emergency department. On assessment, it was revealed he has severe back pain, Grey Turner's sign, nausea, BP of 90/40, HR of 128 bpm, and RR of 28 cpm. As Yasopp's nurse, you should first do which of the following actions:",
          choices: [
            "Assess the urine output.",
            "Place a large bore I.V.",
            "Position onto the left side.",
            "Insert a nasogastric tube.",
          ],
          answer: 1,
          rationale: "Large bore IV access is needed for fluid resuscitation in shock.",
        },
        {
          id: "np3_q75",
          question:
            "Arlong, one of the patients assigned to you, complains of sudden, severe pain in his back and chest, accompanied by SOB. He describes the pain sensation as 'as if something was tearing inside'. The physician suspects that he is experiencing a dissecting aortic aneurysm. The code cart is brought into Arlong's room because you know that one of the complications of dissecting aneurysm is:",
          choices: ["Cardiac tamponade.", "Stroke.", "Pulmonary edema.", "Myocardial infarction."],
          answer: 0,
          rationale: "Cardiac tamponade is a complication of dissecting aortic aneurysm.",
        },
        {
          id: "np3_q76",
          question:
            "Hatchan is to be discharged after his surgery of aortic aneurysm repair with synthetic graft to replace part of his aorta. As part of your discharge teaching, you instruct Hatchan to notify his physician before doing which of the following procedures?",
          choices: [
            "Blood drawn.",
            "An I.V. line inserted.",
            "Major dental work.",
            "An X-ray examination.",
          ],
          answer: 2,
          rationale: "Major dental work requires antibiotic prophylaxis for graft patients.",
        },
        {
          id: "np3_q77",
          question:
            "You are tasked to care and educate patients regarding oral care to help their conditions. You utilize your knowledge to assist these patients. Buggy, a client admitted to your unit, has stomatitis. As a knowledgeable nurse, you know that which of the following interventions is most appropriate for Buggy at this time?",
          choices: [
            "Drinking hot tea at frequent intervals.",
            "Gargling with antiseptic mouthwash.",
            "Using an electric toothbrush.",
            "Eating a soft, bland diet.",
          ],
          answer: 3,
          rationale: "A soft, bland diet is appropriate for stomatitis to avoid irritation.",
        },
        {
          id: "np3_q78",
          question:
            "You are doing your assessment on patient Kuro, and when you check his mouth, you note the absence of saliva. Further assessment reveals he has pain in the area of his ear. Kuro has been NPO for several days now because of an NGT insertion. Based on your assessment, you suspect that Kuro may be developing which of the following conditions of the mouth?",
          choices: ["Stomatitis.", "Oral candidiasis.", "Parotitis.", "Gingivitis."],
          answer: 2,
          rationale:
            "Parotitis (inflammation of the parotid gland) can occur due to decreased saliva.",
        },
        {
          id: "np3_q79",
          question:
            "You are tasked by your manager to conduct a presentation to the community regarding oral cancer. You conducted your research, and you found out several risk factors for the disease. Which of the following will you include in your presentation as the primary risk factor for oral cancer?",
          choices: [
            "Use of alcohol.",
            "Smoking.",
            "Frequent use of mouthwash.",
            "Lack of regular teeth cleaning by a dentist.",
          ],
          answer: 1,
          rationale: "Smoking is the primary risk factor for oral cancer.",
        },
        {
          id: "np3_q80",
          question:
            "Jango is one of your patients in the unit. He has entered a smoking cessation program to quit a 2 pack per day cigarette habit of his. He tells you, 'I have not smoked a cigarette for 3 weeks, but I am afraid I am going to slip up and smoke because of the pressures of my current job'. As Jango's nurse, what would be the most appropriate reply to make in response to his comments?",
          choices: [
            '"Don\'t worry about it. Everybody has difficulty quitting smoking, and you should expect to as well."',
            '"If you increase your self-control, I am sure you will be able to avoid smoking."',
            '"Try taking a couple of days of vacation to relieve the stress of your job."',
            '"It is good that you can talk about your concerns. Try calling a friend when you want to smoke."',
          ],
          answer: 3,
          rationale: "Validating concerns and suggesting support strategies is therapeutic.",
        },
        {
          id: "np3_q81",
          question:
            "Kuro was rushed to the emergency department after a motor vehicle accident where he fractured his mandible. Surgery has been performed to immobilize his injury. The surgeon has wired Kuro's jaw. In the immediate postoperative phase, you as the nurse should:",
          choices: [
            "Prevent nausea and vomiting.",
            "Maintain a patent airway.",
            "Provide frequent oral hygiene.",
            "Establish a way for the client to communicate.",
          ],
          answer: 1,
          rationale: "Maintaining a patent airway is the priority after jaw surgery.",
        },
        {
          id: "np3_q82",
          question:
            "You are visiting Tashigi who reports that her chronic bronchitis has recently worsened. Which of the following instructions would you reinforce to Tashigi to help with her condition?",
          choices: [
            "Increase amount of bedrest.",
            "Increase fluid intake.",
            "Reduce home oxygen use.",
            "Increase sodium intake.",
          ],
          answer: 1,
          rationale: "Increasing fluid intake helps thin secretions in chronic bronchitis.",
        },
        {
          id: "np3_q83",
          question:
            "You are completing an assessment on Tashigi. Based on your knowledge and previous experience of working with patients who have chronic bronchitis, which of the following findings would you expect Tashigi to present?",
          choices: [
            "Minimal sputum with cough",
            "Pink, frothy sputum",
            "Barrel chest",
            "Stridor on expiration",
          ],
          answer: 2,
          rationale: "Barrel chest is characteristic of chronic bronchitis/COPD.",
        },
        {
          id: "np3_q84",
          question:
            "Nojiko is a hospitalized client under your care. She was diagnosed with end stage cancer and has suddenly decided to discontinue her treatment. She requests no more additional treatment like antibiotics, tube feedings, and mechanical ventilation. Acting as Nojiko's advocate, which of the following actions should you take?",
          choices: [
            "Respect the client's wishes and indicate those wishes on the plan of care",
            "Encourage the client to share the decision with the family and the client's physician",
            "Clarify other treatments that the client wishes to withhold",
            "Wait until additional treatment is required and then decide what to do based on the client's condition",
          ],
          answer: 0,
          rationale: "As patient advocate, respect the client's autonomous decision.",
        },
        {
          id: "np3_q85",
          question:
            "A car-pedestrian accident occurred nearby. The pedestrian client named Mohji was brought to the ER of the hospital you are working on. Mohji is alert and oriented but complains of difficulty breathing. His SpO2 levels vary from 88-90%. O2 was applied at 2L per nasal cannula with no improvement in SpO2. Oxygen per mask is then initiated at 40% with little improvement. After some tests, Mohji's radiograph films reveal no obvious injuries or fractures. Suddenly, Mohji loses consciousness, has a respiratory arrest, and subsequently dies. During his resuscitation, it is determined that one of the nurses failed to open the valve to the O2 tank and Mohji has not been receiving oxygen. What is the key ethical principle involved in this scenario?",
          choices: [
            "Nonmaleficence - do no harm",
            "Fidelity - truth",
            "Beneficence - do good",
            "Justice - truth",
          ],
          answer: 0,
          rationale: "Nonmaleficence (do no harm) was violated.",
        },
        {
          id: "np3_q86",
          question:
            "Van, one of the patients in your unit, has a sudden change in his condition. You called the physician to report this occurrence. He gave orders over the telephone for ABGs to be drawn stat. Which of the following is the most important safety consideration when obtaining the physician's order over the phone?",
          choices: [
            "Writing the order down and reading it back to the physician",
            "Calling the respiratory therapist stat to draw the ABGs",
            "Giving the order stat to the health unit coordinator to place in the computer",
            "Writing down the order for ABGs immediately",
          ],
          answer: 0,
          rationale: "Read back verbal orders to verify accuracy.",
        },
        {
          id: "np3_q87",
          question:
            "Patient Cabaji is to be admitted to the surgical unit. He has multiple rings, a bracelet, a watch, and PHP 3500 in cash. Which of the following is the safest action for you to take regarding the patient's valuables?",
          choices: [
            "Allowing the client to keep the items so they will be safeguarded by the client",
            "Collecting the items and placing them in the client's room closet",
            "Giving the money to the client's spouse and allowing the client to keep the jewelry",
            "Collecting the items according to hospital policy for safekeeping",
          ],
          answer: 3,
          rationale: "Follow hospital policy for safeguarding patient valuables.",
        },
        {
          id: "np3_q88",
          question:
            "You admit patient Kuroobi who is complaining of nausea and vomiting to the emergency department. Kuroobi is alone in the ED without any relatives or guardians. After you complete your assessment on Kuroobi, you prepare to leave the room. Which of the following statements is your safest instruction for Kuroobi?",
          choices: [
            '"If you need to vomit, here is a basin for you. I don\'t want you to get up on your own."',
            '"I will be in the room next door. I\'ll check back in about 10 minutes."',
            '"I will go update the doctor about you. Do you need anything before I go?"',
            '"Here is the nurse call light. Press this button if you need me."',
          ],
          answer: 0,
          rationale: "Providing an emesis basin and instructing not to get up prevents falls.",
        },
        {
          id: "np3_q89",
          question:
            "You are a nurse assigned to take care of patients with various liver conditions. You utilize your knowledge and skills on the diseases to effectively plan and manage care for these patients. Patient Bellmere was admitted to the hospital with a diagnosis of nonalcoholic fatty liver disease (NAFLD). You are reviewing her chart for her health history. Which of the following findings is consistent with the NAFLD disease process?",
          choices: [
            "70 years old",
            "Obese",
            "History of recent antibiotic use",
            "Living in colder climates",
          ],
          answer: 1,
          rationale: "Obesity is a major risk factor for NAFLD.",
        },
        {
          id: "np3_q90",
          question:
            "Yosaku is a male patient diagnosed with cirrhosis. While caring for Yosaku, you add the nursing diagnosis Disturbed body image related to physical manifestations of the illness when you overheard Yosaku telling his brother:",
          choices: [
            '"I don\'t think I can handle this disease."',
            '"I know the doctors say I have liver failure, but I don\'t really believe them."',
            '"I know I should rest more, but I\'m just not that type of person."',
            '"I don\'t like the fact that I seem to have breasts now."',
          ],
          answer: 3,
          rationale:
            "Gynecomastia (breast enlargement) is a physical manifestation of cirrhosis that affects body image.",
        },
        {
          id: "np3_q91",
          question:
            "Patient Johnny was admitted in the ED after complaints of upper right sided abdominal pain. You suspect that the client may have liver cancer when which serum laboratory test result is noted to be elevated?",
          choices: [
            "Creatinine",
            "Serum alpha-fetoprotein (AFP) levels",
            "Serum phosphorus levels",
            "CA-125",
          ],
          answer: 1,
          rationale: "Elevated AFP is associated with liver cancer.",
        },
        {
          id: "np3_q92",
          question:
            "You are caring for patient Carol after her liver biopsy with the assistance of student nurse Apis. You evaluate that Apis understands liver biopsy post procedure care when she does which of the following?",
          choices: [
            "plans to monitor vital signs every hour.",
            "promotes ambulation 1 hour after the procedure.",
            "positions the client on the right side.",
            "encourages the client to cough and deep breathe immediately following the procedure.",
          ],
          answer: 2,
          rationale: "Right side-lying position applies pressure to the biopsy site.",
        },
        {
          id: "np3_q93",
          question:
            "Pell is a patient hospitalized for conservative treatment of liver cirrhosis. As part of the collaborative plan of care, you would anticipate which of the following?",
          choices: [
            "monitoring the client's blood sugar.",
            "maintaining NPO (nothing by mouth) status.",
            "administering antibiotics.",
            "encouraging frequent ambulation.",
          ],
          answer: 0,
          rationale: "Blood glucose monitoring is important due to impaired liver function.",
        },
        {
          id: "np3_q94",
          question:
            "You are a nurse providing care for patient Vivi who came to the hospital for assessment. She is suspected to have osteoporosis. You help her by utilizing your knowledge on the topic. You reviewed Vivi's chart after conducting her physical assessment. You correctly identify that which of the following signs/symptoms indicate that Vivi has already developed osteoporosis?",
          choices: [
            "The client has lost one (1) inch in height.",
            "The client has lost 12 pounds in the last year.",
            "The client's hands are painful to the touch.",
            "The client's serum uric acid level is elevated.",
          ],
          answer: 0,
          rationale: "Height loss indicates vertebral compression fractures due to osteoporosis.",
        },
        {
          id: "np3_q95",
          question:
            "After Vivi's diagnosis of osteoporosis, she asked you why smoking cigarettes causes her bones to become brittle. Your most appropriate response is:",
          choices: [
            '"Smoking causes nutritional deficiencies, which contribute to osteoporosis."',
            '"Tobacco causes an increase in blood supply to the bones, causing osteoporosis."',
            '"Smoking low-tar cigarettes will not cause your bones to become brittle."',
            '"Nicotine impairs the absorption of calcium, causing decreased bone strength."',
          ],
          answer: 3,
          rationale: "Nicotine impairs calcium absorption, contributing to osteoporosis.",
        },
        {
          id: "np3_q96",
          question:
            "When discussing osteoporosis with Vivi, you are aware that which of the following is an example of a secondary nursing intervention?",
          choices: [
            "Obtain a bone density evaluation test.",
            "Perform non-weight-bearing exercises regularly.",
            "Increase the intake of dietary calcium.",
            "Refer clients to a smoking cessation program.",
          ],
          answer: 0,
          rationale: "Bone density testing is a secondary prevention (screening) intervention.",
        },
        {
          id: "np3_q97",
          question:
            "Vivi is prescribed by her physician Calcitonin by nasal spray. Which of the following assessment findings indicate an adverse effect of the medication?",
          choices: [
            "The client complains of nausea and vomiting.",
            "The client is drinking two (2) glasses of milk a day.",
            "The client has a runny nose and nasal itching.",
            "The client reports increased energy levels.",
          ],
          answer: 2,
          rationale: "Nasal irritation is a common side effect of nasal calcitonin.",
        },
        {
          id: "np3_q98",
          question:
            "Vivi is also prescribed calcium carbonate (Tums) for her osteoporosis. Which of the following instructions is most important for you to teach Vivi regarding taking this medication?",
          choices: [
            "Teach the client to take Tums with the breakfast meal only.",
            "Instruct the client to take Tums 30 to 60 minutes before a meal.",
            "Discuss the need to get a monthly serum calcium level.",
            "Take the medication with a full glass of water.",
          ],
          answer: 1,
          rationale: "Calcium carbonate is best absorbed when taken with food.",
        },
        {
          id: "np3_q99",
          question:
            "You are a nurse assigned to take care of patients with various liver conditions. You utilize your knowledge and skills on the diseases to effectively plan and manage care for these patients. Patient Bellmere was admitted to the hospital with a diagnosis of nonalcoholic fatty liver disease (NAFLD). You are reviewing her chart for her health history. Which of the following findings is consistent with the NAFLD disease process?",
          choices: [
            "70 years old",
            "Obese",
            "History of recent antibiotic use",
            "Living in colder climates",
          ],
          answer: 1,
          rationale: "Obesity is a major risk factor for NAFLD.",
        },
        {
          id: "np3_q100",
          question:
            "Yosaku is a male patient diagnosed with cirrhosis. While caring for Yosaku, you add the nursing diagnosis Disturbed body image related to physical manifestations of the illness when you overheard Yosaku telling his brother:",
          choices: [
            '"I don\'t think I can handle this disease."',
            '"I know the doctors say I have liver failure, but I don\'t really believe them."',
            '"I know I should rest more, but I\'m just not that type of person."',
            '"I don\'t like the fact that I seem to have breasts now."',
          ],
          answer: 3,
          rationale:
            "Gynecomastia (breast enlargement) is a physical manifestation of cirrhosis that affects body image.",
        },
      ],
    },
    {
      id: "tranpfour",
      title: "TRA Nursing Practice 4",
      description: "Nursing Practice 4 Provided by TopRank Academy",
      questions: [
        {
          id: "np4_q1",
          question:
            "This test questionnaire contains 100 test questions. Shade only one (1) box for each question on your answer sheets. Two or more boxes shaded will invalid your answer. AVOID ERASURES. Detach one (1) answer sheet from the bottom of your Examinee ID/Answer Sheet Set. Write the subject title 'NURSING PRACTICE IV' on the box provided.",
          choices: ["A", "B", "C", "D"],
          answer: 0,
          rationale: "Instruction section - no actual question content.",
        },
        {
          id: "np4_q2",
          question:
            "You are caring for patient Igaram, a patient with Addison's disease. You utilize your knowledge on this concept to help care for the patient. Igaram was just recently diagnosed with Addison's disease. He still lacks knowledge about his disease so he decided to ask you some questions. Igaram asked you, 'How does the disease happen?' You answer him correctly by stating that this disease results from:",
          choices: [
            "Insufficient secretion of growth hormone (GH).",
            "Dysfunction of the hypothalamic pituitary.",
            "Idiopathic atrophy of the adrenal gland.",
            "Oversecretion of the adrenal medulla.",
          ],
          answer: 2,
          rationale: "Addison's disease results from idiopathic atrophy of the adrenal gland.",
        },
        {
          id: "np4_q3",
          question:
            "Igaram is admitted to your unit. After your assessment on him, you formulated the nursing diagnosis Deficient fluid volume related to inadequate fluid intake and to fluid loss secondary to inadequate adrenal hormone secretion. As Igaram's oral intake increases, which of the following fluids would be the most appropriate for him?",
          choices: [
            "Milk and diet soda.",
            "Water and eggnog.",
            "Bouillon and juice.",
            "Coffee and milkshakes.",
          ],
          answer: 2,
          rationale:
            "Bouillon and juice provide fluids and electrolytes for a patient with deficient fluid volume.",
        },
        {
          id: "np4_q4",
          question:
            "You are instructing Igaram how to adjust the dose of the glucocorticoids he is taking. As his nurse, you should explain to him that he may need an increased dosage of glucocorticoids in which of the following scenarios?",
          choices: [
            "Completing the spring semester of school.",
            "Gaining 4 pounds.",
            "Becoming engaged.",
            "Undergoing a root canal.",
          ],
          answer: 3,
          rationale:
            "Stressful situations like dental procedures require increased glucocorticoid dosage.",
        },
        {
          id: "np4_q5",
          question:
            "Igaram is diagnosed with Addison's disease. As a knowledgeable nurse, you know that this condition may lead to Addisonian crisis if not adequately managed. Which of the following manifestations would be expected in Igaram if he develops this condition?",
          choices: ["Fluid retention.", "Pain.", "Peripheral edema.", "Hunger."],
          answer: 1,
          rationale: "Pain is a manifestation of Addisonian crisis.",
        },
        {
          id: "np4_q6",
          question:
            "If Igaram develops Addisonian crisis, which of the following would be your priority as Igaram's primary nurse?",
          choices: [
            "Controlling hypertension.",
            "Preventing irreversible shock.",
            "Preventing infection.",
            "Relieving anxiety.",
          ],
          answer: 1,
          rationale: "Preventing irreversible shock is the priority in Addisonian crisis.",
        },
        {
          id: "np4_q7",
          question:
            "You are a nurse tasked to care for patients with different pituitary disorders. You are to take care of Karoo and Koza, both diagnosed with SIADH, and Paula, who is diagnosed with diabetes insipidus. You utilize your knowledge on this concept to help care for your patients safely. One of the clients in your unit, Karoo, is diagnosed to have a pituitary tumor. Karoo developed Syndrome of Inappropriate Antidiuretic Hormone (SIADH). Which of the following interventions should you implement as Karoo's primary nurse?",
          choices: [
            "Assess for dehydration and monitor blood glucose levels.",
            "Assess for nausea and vomiting and weigh daily.",
            "Monitor potassium levels and encourage fluid intake.",
            "Administer vasopressin IV and conduct a fluid deprivation test.",
          ],
          answer: 1,
          rationale: "Assess for nausea and vomiting and weigh daily for SIADH management.",
        },
        {
          id: "np4_q8",
          question:
            "You are reviewing the chart of Karoo who has SIADH. Which of the following clinical manifestations you noted in Karoo's chart should be reported to his primary care physician?",
          choices: [
            "Serum sodium of 112 mEq/L and a headache.",
            "Serum potassium of 5.0 mEq/L and a heightened awareness.",
            "Serum calcium of 10 mg/dL and tented tissue.",
            "Serum magnesium of 1.2 mg/dL and large urinary output.",
          ],
          answer: 0,
          rationale:
            "Serum sodium of 112 mEq/L with headache is dangerously low and requires immediate attention.",
        },
        {
          id: "np4_q9",
          question:
            "Another patient in your unit, Koza, was diagnosed with SIADH secondary to cancer of the lung. He tells you that he wants to discontinue his fluid restriction and that he does not care if he dies. Which of the following actions by the nurse is an example of the ethical principle of autonomy?",
          choices: [
            "Discuss the information the client told the nurse with the health-care provider and significant other.",
            "Explain it is possible the client could have a seizure if he drank fluid beyond the restrictions.",
            "Notify the health-care provider of the client's wishes and give the client fluids as desired.",
            "Allow the client an extra drink of water and explain the nurse could get into trouble if the client tells the health-care provider.",
          ],
          answer: 2,
          rationale:
            "Autonomy respects the client's wishes even if they choose to discontinue treatment.",
        },
        {
          id: "np4_q10",
          question:
            "Paula, another patient assigned to you in the unit, is recently diagnosed with diabetes insipidus. Which of the following interventions should you implement as Paula's primary nurse?",
          choices: [
            "Administer sliding-scale insulin as ordered.",
            "Restrict caffeinated beverages.",
            "Check urine ketones if blood glucose is >250.",
            "Assess tissue turgor every four (4) hours.",
          ],
          answer: 3,
          rationale: "Assess tissue turgor every 4 hours to monitor hydration status.",
        },
        {
          id: "np4_q11",
          question:
            "Following Paula's diagnosis of diabetes insipidus, she stayed in the hospital for a few days. She is now about to be discharged and you are conducting your health teaching regarding her condition. Which of the following statements made by Paula warrants further intervention?",
          choices: [
            '"I will keep a list of my medications in my wallet and wear a Medic Alert bracelet."',
            '"I should take my medication in the morning and leave it refrigerated at home."',
            '"I should weigh myself every morning and record any weight gain."',
            '"If I develop a tightness in my chest, I will call my health-care provider."',
          ],
          answer: 1,
          rationale:
            "Medications for diabetes insipidus should not be refrigerated; this statement indicates need for further teaching.",
        },
        {
          id: "np4_q12",
          question:
            "You are a nurse caring for patients with inflammatory bowel disease. Pierre is a patient admitted to the hospital with a diagnosis of ulcerative colitis. You are currently reviewing his history and physical assessment chart. Based on Pierre's diagnosis, which of the following information should you expect to see in Pierre's medical records?",
          choices: [
            "Abdominal pain and bloody diarrhea.",
            "Weight gain and elevated blood glucose.",
            "Abdominal distension and hypogative bowel sounds.",
            "Heartburn and regurgitation.",
          ],
          answer: 0,
          rationale:
            "Abdominal pain and bloody diarrhea are classic symptoms of ulcerative colitis.",
        },
        {
          id: "np4_q13",
          question:
            "Pierre had a recent exacerbation of ulcerative colitis. He is put on mesalamine (Asacol), which is to be administered rectally via an enema. Pierre finds this procedure distasteful and he asks you, 'Why can't the medication just be given orally?'. You answer Pierre correctly by saying which of the following?",
          choices: [
            '"It can be given orally; I\'ll contact the doctor and see if the change can be made."',
            '"Rectal administration delivers the medication directly to the affected area."',
            '"Oral administration will not be as effective for the disease condition."',
            "\"It can be given orally, I'll make the change and we'll tell the doctor in the morning.\"",
          ],
          answer: 1,
          rationale: "Rectal administration delivers the medication directly to the affected area.",
        },
        {
          id: "np4_q14",
          question:
            "You overhear a licensed practical nurse (LPN) talking to one of your patients, Mousse, who is being prepared for a total colectomy with creation of an ileoanal reservoir for her ulcerative colitis. To decrease Mousse's anxiety, you should intervene to clarify the information given by the LPN when you hear the LPN saying:",
          choices: [
            '"This surgery will prevent you from developing colon cancer."',
            '"After this surgery you will no longer have ulcerative colitis."',
            '"When you return from surgery you will not be able to eat solid food for several days."',
            '"You will have an ileostomy when you return from this surgery."',
          ],
          answer: 3,
          rationale:
            "A total colectomy with ileoanal reservoir does not result in a permanent ileostomy; this statement would increase anxiety.",
        },
        {
          id: "np4_q15",
          question:
            "Wyper, a 20 year old male client, is admitted to your unit because of the exacerbation of their ulcerative colitis. You go into Wyper's room to complete an initial assessment, and he yells, 'Get outta here! I am tired of you nurses and doctors looking at my body all the time!' Which of the following is your best action?",
          choices: [
            "Leave the room and ask a male colleague to complete the assessment.",
            "Verbally acknowledge the client's frustration and anger.",
            "Call the health-care practitioner and ask for a sedative order.",
            "Tell the client that gathering data about his current condition will promote effective timely treatment of his health concerns.",
          ],
          answer: 1,
          rationale: "Acknowledge the client's frustration and anger first.",
        },
        {
          id: "np4_q16",
          question:
            "You are caring for Conis, a patient admitted in your unit who is diagnosed with Crohn's disease. She has undergone a barium enema that demonstrated the presence of strictures in her ileum. Based on this finding, you should monitor the client closely for signs of:",
          choices: ["peritonitis.", "obstruction.", "malabsorption.", "fluid imbalance."],
          answer: 1,
          rationale: "Strictures in the ileum can lead to intestinal obstruction.",
        },
        {
          id: "np4_q17",
          question:
            "You are a new nurse assigned to take care of patients with various eye disorders. You use your knowledge to help these patients with their condition. One of the patients in your unit, Pagaya, is diagnosed with glaucoma. Which of the following symptoms should you expect the client to report during your initial assessment with him?",
          choices: [
            "Loss of peripheral vision.",
            "Floating spots in the vision.",
            "A yellow haze around everything.",
            "A curtain coming across vision.",
          ],
          answer: 0,
          rationale: "Loss of peripheral vision is a classic symptom of glaucoma.",
        },
        {
          id: "np4_q18",
          question:
            "Pagaya has now been prescribed a miotic cholinergic medication for his glaucoma. Which of the following data indicates that the medication has been effective on Pagaya?",
          choices: [
            "No redness or irritation of the eyes.",
            "A decrease in intraocular pressure.",
            "The pupil reacts briskly to light.",
            "The client denies any type of floaters.",
          ],
          answer: 1,
          rationale: "Miotic cholinergic medications work by decreasing intraocular pressure.",
        },
        {
          id: "np4_q19",
          question:
            "You are caring for Gan Fall, a postoperative patient, after his retinal detachment surgery. Gas tamponade was used to flatten the patient's retina during the procedure. Which of the following interventions should you implement first?",
          choices: [
            "Teach the signs of increased intraocular pressure.",
            "Position the client as prescribed by the surgeon.",
            "Assess the eye for signs/symptoms of complications.",
            "Explain the importance of follow-up visits.",
          ],
          answer: 1,
          rationale:
            "Positioning is critical for gas tamponade effectiveness and is the first priority.",
        },
        {
          id: "np4_q20",
          question:
            "You are caring for Conis, a patient with severe myopia. She is scheduled for a laser assisted in situ keratomileusis (LASIK) surgery. Which of the following instructions should you discuss with Conis prior to her discharge from the surgery?",
          choices: [
            "Wear bilateral eye patches for three (3) days.",
            "Wear corrective lenses until the follow-up visit.",
            "Do not read any material for at least one (1) week.",
            "Teach the client how to instill corticosteroid ophthalmic drops.",
          ],
          answer: 3,
          rationale:
            "Teaching the client how to instill corticosteroid ophthalmic drops is important post-LASIK.",
        },
        {
          id: "np4_q21",
          question:
            "Eneru, a 65 year old male client is complaining of blurred vision, but denies having any type of pain. He reports to you, 'I feel like I need to clean my glasses all the time'. Which of the following eye disorders should you suspect that Eneru has?",
          choices: ["Corneal dystrophy", "Conjunctivitis", "Diabetic retinopathy", "Cataracts"],
          answer: 3,
          rationale: "Painless blurred vision in an older adult suggests cataracts.",
        },
        {
          id: "np4_q22",
          question:
            "You are a nurse studying the different types of shock and its appropriate nursing interventions. You come across the following patients in your unit. You applied the concepts you've learned to your nursing practice. Foxy is a client admitted to the emergency department. Assessment findings include diaphoresis, pale clammy skin, and a blood pressure reading of 90/70. Which of the following interventions should you implement first?",
          choices: [
            "Start an IV with an 18-gauge catheter.",
            "Administer dopamine intravenous infusion.",
            "Obtain arterial blood gases (ABGs).",
            "Insert an indwelling urinary catheter.",
          ],
          answer: 0,
          rationale: "Starting an IV line for fluid resuscitation is the priority in shock.",
        },
        {
          id: "np4_q23",
          question:
            "Porche is a patient diagnosed with neurogenic shock. As a knowledgeable nurse, you expect to note which of the following signs and symptoms in this client?",
          choices: ["Cool, moist skin.", "Bradycardia.", "Wheezing.", "Decreased bowel sounds."],
          answer: 1,
          rationale: "Bradycardia is a sign of neurogenic shock due to loss of sympathetic tone.",
        },
        {
          id: "np4_q24",
          question:
            "One of the patients in your unit, Hamburg, was diagnosed with septicemia. The following are the orders given by Hamburg's primary physician. Which of these orders will have the highest priority?",
          choices: [
            "Provide a clear liquid diet.",
            "Initiate IV antibiotic therapy.",
            "Obtain a STAT chest x-ray.",
            "Perform hourly glucometer checks.",
          ],
          answer: 1,
          rationale: "IV antibiotic therapy is the priority in septicemia to treat the infection.",
        },
        {
          id: "np4_q25",
          question:
            "You wrote the nursing diagnosis of 'alteration in comfort related to chills in fever' in one of your patients who has sepsis. Which of the following interventions would you include in this patient's plan of care?",
          choices: [
            "Ambulate the client in the hallway every shift.",
            "Monitor urinalysis, creatinine level, and BUN level.",
            "Apply sequential compression devices to the lower extremities.",
            "Administer an antipyretic medication every four (4) hours PRN.",
          ],
          answer: 3,
          rationale: "Antipyretic medications help relieve fever and chills.",
        },
        {
          id: "np4_q26",
          question:
            "A patient named Chiqicheetah presents themselves in the emergency department complaining of abdominal pain, is pale and clammy, and has a pulse of 110 and a blood pressure reading of 92/60. Chiqicheetah has vertebral fractures, and she reported she has been self-medicating with Ibuprofen, a type of nonsteroidal anti-inflammatory drug (NSAID). Which of the following type of shocks should you expect in patient Chiqicheetah?",
          choices: [
            "Cardiogenic shock.",
            "Hypovolemic shock.",
            "Neurogenic shock.",
            "Septic shock.",
          ],
          answer: 1,
          rationale: "NSAID-induced GI bleeding can cause hypovolemic shock.",
        },
        {
          id: "np4_q27",
          question:
            "You are caring for patients in your unit with alterations in their fluid and electrolytes. As a knowledgeable nurse, you apply the concepts of fluid and electrolytes in your nursing practice. As an experienced nurse, you know that client incidence of hypermagnesemia is rare in comparison with hypomagnesemia. A student nurse approached you and asked how hypermagnesemia develops. You answer her correctly by saying that hypermagnesemia generally occurs secondary to:",
          choices: [
            "Cardiac contractility.",
            "Hypokalemia.",
            "Liver failure.",
            "Renal insufficiency.",
          ],
          answer: 3,
          rationale: "Hypermagnesemia generally occurs secondary to renal insufficiency.",
        },
        {
          id: "np4_q28",
          question:
            "You are assigned to care for Ace, a patient diagnosed to have hypokalemia. As a knowledgeable nurse, you know that the electrolyte that must be corrected in this scenario is:",
          choices: ["Calcium.", "Magnesium.", "Manganese.", "Zinc."],
          answer: 1,
          rationale: "Magnesium must be corrected before potassium can be effectively repleted.",
        },
        {
          id: "np4_q29",
          question:
            "You are caring for a group of patients in the ward. While reviewing each of the patient's charts, you determine which of the following patients is most likely at risk for fluid volume deficit?",
          choices: [
            "A client with an ileostomy",
            "A client with heart failure",
            "A client on long-term corticosteroid therapy",
            "A client receiving frequent wound irrigations",
          ],
          answer: 0,
          rationale: "An ileostomy causes significant fluid loss, leading to fluid volume deficit.",
        },
        {
          id: "np4_q30",
          question:
            "You are refreshing your knowledge on sodium imbalances. As a knowledgeable nurse, you know that which of the following patients in the ward is most likely to develop a sodium level at 130 mEq/L (130 mmol/L)?",
          choices: [
            "The client who is taking diuretics",
            "The client with hyperaldosteronism",
            "The client with Cushing's syndrome",
            "The client who is taking corticosteroids",
          ],
          answer: 0,
          rationale: "Diuretics can cause hyponatremia (sodium level of 130 mEq/L).",
        },
        {
          id: "np4_q31",
          question:
            "You are reviewing one of your patient's progress notes. You read that the physician has documented 'insensible fluid loss of approximately 800mL daily'. As a knowledgeable nurse, you make a notation that insensible fluid loss occurs through which of the following types of excretion?",
          choices: [
            "Urinary output",
            "Wound drainage",
            "Integumentary output",
            "The gastrointestinal tract",
          ],
          answer: 2,
          rationale: "Insensible fluid loss occurs through the skin (integumentary) and lungs.",
        },
        {
          id: "np4_q32",
          question:
            "You are a nurse assigned to care for and educate patients in the cancer unit of the hospital you are working on. You apply the concepts you've learned regarding cancer to ensure a safe nursing practice. You are reviewing your notes on cancer. After much reading, you know that cancer prevalence is defined as:",
          choices: [
            "The likelihood cancer will occur in a lifetime.",
            "The number of persons with cancer at a given point in a time.",
            "The number of new cancers in a year.",
            "All cancer cases more than 5 years old.",
          ],
          answer: 1,
          rationale:
            "Cancer prevalence is the number of persons with cancer at a given point in time.",
        },
        {
          id: "np4_q33",
          question:
            "Gol is your patient diagnosed to have testicular cancer. He expressed his concerns regarding fertility since him and his partner desires to eventually have a family. As Gol's primary nurse, you discuss the option of sperm banking. You inform Gol and his partner that sperm banking needs to be performed when?",
          choices: [
            "Before treatment is started.",
            "Once the client is tolerating the treatment.",
            "Upon completion of treatment.",
            "When tumor markers drop to normal levels.",
          ],
          answer: 0,
          rationale: "Sperm banking should be done before cancer treatment begins.",
        },
        {
          id: "np4_q34",
          question:
            "You are working with Bellamy, a client with known risks for lung cancer. He asks you why he is scheduled for a computed tomography (CT) scan as part of his initial workup. You answer Bellamy correctly when you respond by saying:",
          choices: [
            '"CT is far superior to magnetic resonance imaging for evaluating lymph node metastasis."',
            '"CT is noninvasive and readily available."',
            '"CT is useful for distinguishing small differences in tissue density and detecting nodal involvement."',
            '"CT can distinguish malignant adenopathy from nonmalignant adenopathy."',
          ],
          answer: 2,
          rationale:
            "CT is useful for distinguishing small differences in tissue density and detecting nodal involvement.",
        },
        {
          id: "np4_q35",
          question:
            "You are caring for Cricket, a patient with pain related to bone cancer. You conducted an assessment on Cricket in relation to this. You know that which of the following is the most important component of a thorough pain assessment specific for patient Cricket?",
          choices: ["Intensity.", "Cause.", "Aggravating factors.", "Location."],
          answer: 0,
          rationale: "Pain intensity is the most important component of pain assessment.",
        },
        {
          id: "np4_q36",
          question:
            "Noland is a cancer patient you are tasked to care for. He is receiving the medication vincristine (Oncovin). You plan your health teaching for Noland regarding this medication. Which of the following should you include in your instructions to Noland?",
          choices: [
            "Use of loperamide (Imodium).",
            "Fluid restriction.",
            "Low fiber, bland diet.",
            "Bowel regimen.",
          ],
          answer: 3,
          rationale: "Vincristine can cause constipation; a bowel regimen is important.",
        },
        {
          id: "np4_q37",
          question:
            "Sarquis is a 57 year old client receiving chemotherapy that has the potential to cause pulmonary toxicity. Which of the following symptoms would you note in Sarquis that could indicate a toxic response to the chemotherapy?",
          choices: [
            "Decrease in appetite.",
            "Drowsiness.",
            "Spasms of the diaphragm.",
            "Cough and shortness of breath.",
          ],
          answer: 3,
          rationale: "Cough and shortness of breath indicate pulmonary toxicity.",
        },
        {
          id: "np4_q38",
          question:
            "Hina is one of the patients you are tasked to care for her in the unit. She is beginning external beam radiation therapy to the right axilla after her lumpectomy for breast cancer. You plan to conduct a health teaching. Which of the following would you include in your education to Hina?",
          choices: [
            "Use a heating pad under the right arm.",
            "Immobilize the right arm.",
            "Place ice on the area after each treatment.",
            "Apply deodorant only under the left arm.",
          ],
          answer: 3,
          rationale: "Deodorant should not be applied to the radiation site.",
        },
        {
          id: "np4_q39",
          question:
            "You are caring for Nico, a patient with cancer who requires a bolus tube feeding. You prepare to administer the bolus tube feeding and as a skilled nurse, which of the following nursing interventions is most appropriate to decrease the risk of aspiration in this patient?",
          choices: [
            "Place the client on bed rest with the head of the bed elevated to 60 degrees for 2 hours.",
            "Place the client on the left side with the head of the bed at 45 degrees for 15 minutes.",
            "Assist the client out of bed to sit upright in a chair for 1 hour.",
            "Ask the client to rest in bed with the head of the bed elevated to 30 degrees for 20 minutes.",
          ],
          answer: 2,
          rationale: "Sitting upright for 1 hour after feeding reduces aspiration risk.",
        },
        {
          id: "np4_q40",
          question:
            "Portgas is a cancer patient receiving chemotherapy. He is experiencing a flare up of pruritus. You are planning to provide teaching to Portgas regarding this condition. Which of the following instructions is NOT appropriate for a client with pruritus?",
          choices: [
            "Wearing clothes made from 100% cotton.",
            "Sleeping in a cool, humidified room.",
            "Increasing fluid intake to at least 3,000 mL day.",
            "Taking daily baths with a deodorant soap.",
          ],
          answer: 3,
          rationale: "Deodorant soaps can irritate skin; mild soap should be used.",
        },
        {
          id: "np4_q41",
          question:
            "You are working on the unit with patient Brogy. At 7:30 AM, you received a verbal order from his primary HCP for a cardiac catheterization to be completed on him by 2:00 PM. Which of the following actions should you initiate first in Brogy?",
          choices: [
            "Initiate NPO (nothing per mouth) status for the client.",
            "Teach the client about the procedure.",
            "Start an intravenous (IV) infusion of 0.9% NaCl.",
            "Ask the client to sign a consent form.",
          ],
          answer: 0,
          rationale: "NPO status should be initiated first for cardiac catheterization.",
        },
        {
          id: "np4_q42",
          question:
            "You are working with Dorry, a male patient who experienced a myocardial infarction a few days ago. You noted that patient Dorry seems unusually fatigued. Upon your assessment, you find that patient Dorry is dyspneic with activity, has a heart rate of 110 bpm, and has generalized edema. Which of the following actions would be most appropriate for this patient?",
          choices: [
            "Administer high-flow oxygen.",
            "Encourage the client to rest more.",
            "Continue to monitor the client's heart rhythm.",
            "Compare the client's admission weight with the client's current weight.",
          ],
          answer: 3,
          rationale: "Weight comparison assesses fluid retention/heart failure.",
        },
        {
          id: "np4_q43",
          question:
            "You are caring for patient Whitebeard immediately following an insertion of a permanent pacemaker via his right subclavian vein. As a skilled nurse, you know that the action that can best prevent pacemaker lead dislodgement is:",
          choices: [
            "inspecting the incision site dressing for bleeding and the incision for approximation",
            "limiting the client's right arm activity and preventing the client reaching above shoulder level",
            "assisting the client with getting out of bed and ambulating with a walker",
            "ordering a stat chest x-ray following return from the implant procedure",
          ],
          answer: 1,
          rationale:
            "Limiting arm activity on the side of pacemaker insertion prevents lead dislodgement.",
        },
        {
          id: "np4_q44",
          question:
            "You are increasing activity for patient Bon with an admitting diagnosis of acute coronary syndrome. Which of the following symptoms experienced by patient Bon best supports the nursing diagnosis of activity intolerance?",
          choices: [
            "Pulse rate increased by 15 beats per minute during activity",
            "Blood pressure (BP) 130/86 mm Hg before activity; BP 108/66 mm Hg during activity",
            "Increased dyspnea and diaphoresis relieved when sitting in a chair",
            "A mean arterial pressure (MAP) of 80 following activity",
          ],
          answer: 2,
          rationale: "Dyspnea and diaphoresis indicate activity intolerance.",
        },
        {
          id: "np4_q45",
          question:
            "Cobra is a patient who suffered an inferior septal wall myocardial infarction. Which of the following complications would you suspect in Cobra when you note on your assessment a jugular venous distention and ascites?",
          choices: [
            "Left-sided heart failure",
            "Pulmonic valve malfunction",
            "Right-sided heart failure",
            "Ruptured septum",
          ],
          answer: 2,
          rationale:
            "Jugular venous distention and ascites are signs of right-sided heart failure.",
        },
        {
          id: "np4_q46",
          question:
            "You are an emergency nurse tasked to work with patients with medical emergencies. You utilize your knowledge to help these patients. A patient's wife is allowed to be present during resuscitation efforts for a patient in the ICU. Which of the following statements made by you would be the most correct and appropriate?",
          choices: [
            '"You can hold your loved one\'s hand; sometimes a recovering person remembers that touch."',
            '"Another staff member will be with you; I will show you where you can stand near your husband."',
            '"Because the resuscitation team needs to work quickly, you need to stay out of their way and not interfere."',
            '"If the resuscitation efforts fail, the health-care provider will ask you if you want to terminate resuscitation efforts."',
          ],
          answer: 1,
          rationale:
            "A staff member should be with the family, and they should be shown where to stand.",
        },
        {
          id: "np4_q47",
          question:
            "An apartment fire broke out near the hospital. The injured victims are sent to the emergency department of the hospital. Five families of the injured patients arrived in the ED subsequently to inquire about the health status of their family members. Which of the following is your best action?",
          choices: [
            "Take the families to the triage area so they can be with their loved ones",
            "Ask the families to wait in the waiting area until information is available",
            "Ensure that there is a designated area for family staffed by available social workers or clergy support",
            "Direct families to a lounge where a receptionist will be keeping families informed",
          ],
          answer: 2,
          rationale: "A designated area with support staff is best for families in a disaster.",
        },
        {
          id: "np4_q48",
          question:
            "Patient Aokiji is a male client that presented themself in the emergency department after vomiting a 'large' amount of bright red blood. Which of the following actions should you implement first?",
          choices: [
            "Start an intravenous line with an 18-gauge needle.",
            "Have the UAP take the client's vital signs.",
            "Ask the client to provide a stool specimen for blood.",
            "Send the client to radiology for an abdominal CT scan.",
          ],
          answer: 0,
          rationale: "IV access for fluid resuscitation is the priority in GI bleeding.",
        },
        {
          id: "np4_q49",
          question:
            "You are working as a triage nurse in a large trauma center. The center has been notified of an explosion in a nearby major chemical manufacturing plant. Which of the following actions should you implement first when the injured patients arrive at the emergency department?",
          choices: [
            "Triage the clients and send them to the appropriate areas.",
            "Thoroughly wash the clients with soap and water and then rinse.",
            "Remove the clients' clothing and have them shower.",
            "Assume the clients have been decontaminated at the plant.",
          ],
          answer: 0,
          rationale: "Triage is the first priority in a mass casualty event.",
        },
        {
          id: "np4_q50",
          question:
            "You are attending a seminar on codes. After the session, you recall that which of the following interventions is the most important for you to implement when participating in a code?",
          choices: [
            "Elevate the arm after administering medication.",
            "Maintain sterile technique throughout the code.",
            "Treat the client's signs/symptoms; do not treat the monitor.",
            "Provide accurate documentation of what happened during the code.",
          ],
          answer: 3,
          rationale: "Accurate documentation is the most important intervention during a code.",
        },
        {
          id: "np4_q51",
          question:
            "Ms. Hange is the charge nurse of a medical unit. She is responsible for the management and supervision of the unit. Ms. Hange observes that one of the female staff nurses is not performing her duties very well. Which of the following strategies will she implement to assist the staff nurse?",
          choices: [
            "Discuss with the staff nurse her performance and ways she can improve.",
            "Allow the staff nurse to select own assignment.",
            "Assign the staff nurse several clients with various illnesses.",
            "Ask the staff nurse to work as an assistant charge nurse.",
          ],
          answer: 0,
          rationale: "Performance discussion is the first step in addressing performance issues.",
        },
        {
          id: "np4_q52",
          question:
            "Ms. Hange notes one of the male staff nurse is frequently absent and his absence has adversely affected the quality of care given to the clients unit. Which of the following would be the BEST approach?",
          choices: [
            "Talk with the staff nurse regarding the concern and remind him of the standards of the agency.",
            "Write the staff nurse a memorandum regarding his absence.",
            "Inform the staff nurse that his absence will be a ground for termination.",
            "Record the absence of the staff nurse in a log book.",
          ],
          answer: 0,
          rationale:
            "Talking with the staff nurse and reminding him of standards is the best approach.",
        },
        {
          id: "np4_q53",
          question:
            "Ms. Hange assigns a new staff nurse to administer the medications of a client. Which detail of the client's drug therapy is the staff nurse legally responsible to document?",
          choices: [
            "Peak concentration time of the drug.",
            "Safe ranges of the drug.",
            "Client's socio-economic status.",
            "Client's reaction to the drug.",
          ],
          answer: 3,
          rationale:
            "The nurse is legally responsible to document the client's reaction to the drug.",
        },
        {
          id: "np4_q54",
          question:
            "Ms. Hange decides what is best for a recovering client and acts on the decision without consulting the client. Ms. Hange is applying a moral principle which is",
          choices: ["Paternalism", "Beneficence", "Fidelity", "Autonomy"],
          answer: 0,
          rationale:
            "Paternalism is when the healthcare provider decides what is best without consulting the client.",
        },
        {
          id: "np4_q55",
          question:
            "The nurse cares for a female client who is terminally ill and is experiencing pain. The nurse prepares a care plan for the client. The overall goal for the client is",
          choices: [
            "Achieve control of pain and discomfort.",
            "Receive adequate cerebral oxygenation and perfusion.",
            "Be free from infection.",
            "Receive life sustaining food and liquids.",
          ],
          answer: 0,
          rationale:
            "Pain control is the overall goal for a terminally ill client experiencing pain.",
        },
        {
          id: "np4_q56",
          question:
            "The nurse is aware of the document that expresses a client's wish for life sustaining treatment in the event of terminal illness or permanent unconsciousness. This document is the",
          choices: [
            "No-code order",
            "Durable power of attorney",
            "Living will",
            "Last will and testament",
          ],
          answer: 2,
          rationale: "A living will expresses a client's wishes for life-sustaining treatment.",
        },
        {
          id: "np4_q57",
          question:
            "The client nears death and requests that no medication be given that would cause a loss of consciousness, including pain medication. The nurse would promote the best end-of-life care for the client by which of the following?",
          choices: [
            "Discuss the request of the dying client with family members and respect their wishes.",
            "Comfort is the highest priority in this situation so give medications as ordered.",
            "Respect the client's wishes and withhold pain medications and other medications ordered.",
            "Be compassionate and give half of dose of the medication ordered.",
          ],
          answer: 2,
          rationale: "The client's wishes should be respected.",
        },
        {
          id: "np4_q58",
          question: "Which of the following statement is TRUE about terminally ill clients?",
          choices: [
            "Terminally ill clients require minimum physical care.",
            "Health care personnel do not understand their own feelings about death and dying.",
            "Terminally ill clients have the right to die with dignity.",
            "Terminally ill client's experiences pain most of the time.",
          ],
          answer: 2,
          rationale: "Terminally ill clients have the right to die with dignity.",
        },
        {
          id: "np4_q59",
          question:
            "The dying client wishes to donate her eyes after she dies. Which of the following statements is NOT TRUE about organ donation?",
          choices: [
            "Any individual, at least 15 years old of age and of a sound mind may donate a part of his body.",
            "Sharing of human organs or tissues shall be made only through exchange programs duly approved by the Department of Health.",
            "The choice to donate an organ must be a written document.",
            "Laws do not require the consent of family members to retrieve organs if the donor has expressed his last wish to donate.",
          ],
          answer: 3,
          rationale: "Laws require family consent even if the donor has expressed wishes.",
        },
        {
          id: "np4_q60",
          question:
            "The nurse in the emergency department admits a 45 year old female for vomiting blood. According to a family member who accompanied the client, the client had a gastric ulcer for several years. The nurse assesses that the client is in shock. Which of the following assessment findings indicate hypovolemic shock?",
          choices: [
            "Systolic blood pressure is less than 90 mmHg.",
            "Pupils are unequally dilated.",
            "Respiratory rate is more than 30 breaths per minute.",
            "Pulse is less than 60 beats per minute.",
          ],
          answer: 0,
          rationale: "Systolic BP less than 90 mmHg indicates hypovolemic shock.",
        },
        {
          id: "np4_q61",
          question:
            "In the early stages of shock, the nurse expects the result of arterial blood gas (ABG) analysis to indicate which of the following conditions",
          choices: [
            "Respiratory alkalosis",
            "Respiratory acidosis",
            "Metabolic alkalosis",
            "Metabolic acidosis",
          ],
          answer: 0,
          rationale: "Early shock causes respiratory alkalosis due to hyperventilation.",
        },
        {
          id: "np4_q62",
          question:
            "The physician orders intravenous infusion of packed red blood cells and normal saline solutions. The nurse assesses the client for which of the following",
          choices: [
            "Hypovolemia",
            "Anaphylactic reaction",
            "Altered level of consciousness",
            "Pain",
          ],
          answer: 1,
          rationale: "Blood transfusions can cause anaphylactic reactions.",
        },
        {
          id: "np4_q63",
          question:
            "The nurse understands that the best indication that fluid replacement for the client in hypovolemic shock is adequate is when the",
          choices: [
            "Systolic blood pressure is above 110 mmHg.",
            "Diastolic blood pressure is above 90 mmHg.",
            "Urine output of 20-30 mL/Hour.",
            "Urine output is greater than 30 mL/Hour.",
          ],
          answer: 3,
          rationale: "Urine output greater than 30 mL/hour indicates adequate fluid replacement.",
        },
        {
          id: "np4_q64",
          question:
            "The physician schedules the client for surgery within six hours. The nurse minimizes anxiety of the client by answering the client's questions regarding the surgery in calm manner, keeps the client warm, advise the client to be on bed rest and dims the lights in the room. The reason for these interventions is to",
          choices: [
            "Increase comfort of the client and her family.",
            "Minimize oxygen consumption.",
            "Prevent infection.",
            "Stabilize fluid and electrolyte balance.",
          ],
          answer: 1,
          rationale: "These interventions minimize oxygen consumption.",
        },
        {
          id: "np4_q65",
          question:
            "A 60 year old male is admitted to the oncology unit. According to the client, he felt a growth during a routine digital prostate examination. He complains of pain on urination and frequent urination. The nurse understands that the function of the prostate gland is primarily to",
          choices: [
            "Regulate the acidity and alkalinity environment for proper sperm development.",
            "Produce a secretion that aids the nourishment and passage of sperm.",
            "Secrete a hormone that stimulates the production and maturation of sperm.",
            "Store undeveloped sperm before ejaculation.",
          ],
          answer: 1,
          rationale:
            "The prostate produces a secretion that aids nourishment and passage of sperm.",
        },
        {
          id: "np4_q66",
          question:
            "The nurse analyzes the laboratory values and notes that the serum phosphate level is elevated. This finding indicates which of the following:",
          choices: [
            "It confirms the diagnosis of prostate cancer.",
            "The progression or regression of prostate cancer.",
            "The likelihood of metastasis to the bones.",
            "There are complications associated with cancer.",
          ],
          answer: 2,
          rationale: "Elevated serum phosphate indicates bone metastasis.",
        },
        {
          id: "np4_q67",
          question:
            "The nurse knows that hormone therapy is the mode of treatment for a client with prostate cancer. The goal of this form of treatment is to:",
          choices: [
            "Limit the amount of circulating androgens.",
            "Increase prostaglandin level.",
            "Increase the amount of circulating androgens.",
            "Increase testosterone level.",
          ],
          answer: 0,
          rationale: "Hormone therapy limits circulating androgens in prostate cancer.",
        },
        {
          id: "np4_q68",
          question:
            "The nurse writes a nursing diagnosis of Fear and Anxiety secondary to the diagnosis of prostate cancer. Which of the following interventions would be BEST for the nurse?",
          choices: [
            "Encourage the client to keep his feelings to himself so his family will not be affected.",
            "Establish a nurse patient therapeutic relationship.",
            "Advise the client to have a positive outlook relationship.",
            "Provide spiritual support to the client.",
          ],
          answer: 1,
          rationale: "Establishing a therapeutic relationship helps address fear and anxiety.",
        },
        {
          id: "np4_q69",
          question:
            "Nurse Petra works in the oncology unit. She takes care of cancer patients in pain. She is aware that cancer pain management is one of her responsibilities. Nurse Petra plans care for a cancer client experiencing pain. She is aware that an important principle of using medication to manage pain is to:",
          choices: [
            "Individualize the medication therapy to the client.",
            "Provide the medication as soon as the client requests for it.",
            "Discontinue the medications periodically to discourage the development of drug tolerance.",
            "Avoid giving client addictive medications.",
          ],
          answer: 0,
          rationale: "Pain medication should be individualized to the client.",
        },
        {
          id: "np4_q70",
          question:
            "Nurse Petra collaborates with the physician in the development of a drug regimen for the clients. Which of the following medications should be avoided in the treatment of cancer pain?",
          choices: ["Morphine", "Acetaminophen (Tylenol)", "Meperidine (Demerol)", "Hydrocodone"],
          answer: 2,
          rationale:
            "Meperidine is not recommended for cancer pain due to neurotoxicity with long-term use.",
        },
        {
          id: "np4_q71",
          question:
            "When titrating a drug for the client in pain, which of the following actions is MOST appropriate?",
          choices: [
            "Ask the physician to include a medication order for breakthrough pain.",
            "Follow the physician's order for the first 24 hours.",
            "Reassess the client every 8 hours for drug effectiveness.",
            "Seek a new order after 2 doses that do not achieve a tolerable level of pain relief.",
          ],
          answer: 0,
          rationale: "Include an order for breakthrough pain medication.",
        },
        {
          id: "np4_q72",
          question:
            "One of the clients experiences severe, intractable pain and complains that the pain medication is not working for him. Which of the following actions is MOST appropriate for Nurse Petra?",
          choices: [
            "Suggest to the client to try deep breathing to cope with the pain.",
            "Explore the nature of the pain and encourage the client to perceive it in a different way.",
            "Support the client emotionally and tell him he will receive the next dose of medication as soon as possible.",
            "Refer the client to the attending physician immediately and report that the pain medication is not providing adequate pain relief.",
          ],
          answer: 3,
          rationale: "Report inadequate pain relief to the physician immediately.",
        },
        {
          id: "np4_q73",
          question:
            "Nurse Petra assesses a client complaining of acute pain. The MOST appropriate nursing assessment would include which of the following?",
          choices: [
            "The nurses' impression of clients' pain.",
            "The clients' pain rating.",
            "Nonverbal cues from the client.",
            "Pain relief after appropriate nursing interventions.",
          ],
          answer: 1,
          rationale: "The client's pain rating is the most appropriate assessment.",
        },
        {
          id: "np4_q74",
          question:
            "Ms. Helen understands that good client care relies on good record keeping. Which of the following is NOT a purpose of hospital record keeping?",
          choices: [
            "Records provide evidence of a hospital's accountability.",
            "Records are a key source of data for medical research or statistical reports.",
            "Records provide data on health information system.",
            "Records provide personal information on the physicians and nurses caring for the clients.",
          ],
          answer: 3,
          rationale: "Records do not provide personal information on physicians and nurses.",
        },
        {
          id: "np4_q75",
          question:
            "Ms. Helen is aware that when a client is readmitted to a hospital, the client's file is retrieved from the",
          choices: [
            "physician's file",
            "civil service file",
            "master patient index file",
            "hospital library record file",
          ],
          answer: 2,
          rationale: "The master patient index file is used to retrieve client files.",
        },
        {
          id: "np4_q76",
          question:
            "Ms. Helen is aware that when a client is discharged or dies, the following details should be entered in the client's record which is the",
          choices: [
            "Final diagnosis",
            "Outcomes classification",
            "Educational attainment",
            "Religion",
          ],
          answer: 0,
          rationale: "Final diagnosis is entered in the client's record upon discharge or death.",
        },
        {
          id: "np4_q77",
          question: "The following statements are true about patients and hospital records EXCEPT:",
          choices: [
            "Confidential records must be protected against loss, damage, unauthorized access, modification and disclosure.",
            "Patients have the right to confidential treatment of information they provide to health professional.",
            "Health records are the property of community where the patient is treated.",
            "Hospital records maybe released without the patient's consent when required in investigation for serious criminal offenses.",
          ],
          answer: 2,
          rationale: "Health records are the property of the hospital, not the community.",
        },
        {
          id: "np4_q78",
          question:
            "Ms. Mika is a director of the critical care unit of hospital X. She utilizes the nursing process to communicate care to the client. She is called to the bedside of a client who is scheduled to have laparoscopic cholecystectomy. The client's pulse is slightly irregular. Ms. Mika confers with the primary nurse regarding the client's condition, which step of the nursing process is Ms. Mika applying?",
          choices: ["Implementation", "Evaluation", "Planning", "Assessment"],
          answer: 3,
          rationale: "Assessment is the step where data is collected and organized.",
        },
        {
          id: "np4_q79",
          question:
            "Ms. Mika calls for a conference with the staff members who are attending to the client. They decide to obtain a 12-lead ECG for a more definitive picture. They conclude that the client has no serious cardiac or pulmonary problems. Which step of the nursing process is in effect in this situation?",
          choices: ["Nursing diagnosis", "Assessment", "Evaluation", "Planning"],
          answer: 0,
          rationale: "Nursing diagnosis is the statement of the client's problem.",
        },
        {
          id: "np4_q80",
          question:
            "Ms. Mika consults with the attending physician and the anesthesiologist. She advises the primary nurse to proceed with the preparations and to remain alert for any adverse symptoms. Which step of the nursing process is this?",
          choices: ["Assessment", "Nursing diagnosis", "Planning", "Evaluation"],
          answer: 2,
          rationale: "Planning involves decision making and problem solving.",
        },
        {
          id: "np4_q81",
          question:
            "Ms. Mika confers with the client's primary nurse the following morning. Together they determine that the client is ready for surgery. This step of the nursing process is:",
          choices: ["Evaluation", "Planning", "Nursing diagnosis", "Assessment"],
          answer: 0,
          rationale: "Evaluation determines the client's progress.",
        },
        {
          id: "np4_q82",
          question:
            "Ms. Mika applies the human relations approach in this situation. She is aware that the key to productivity is",
          choices: [
            "the degree of independence allowed",
            "meeting the objectives of the critical care unit",
            "firm control of the situation",
            "the behavior of people under direction",
          ],
          answer: 3,
          rationale:
            "The behavior of people under direction is key to productivity in human relations.",
        },
        {
          id: "np4_q83",
          question:
            "A mother with the diagnosis of AIDS states that she has been caring for her baby even though she has not been feeling well. What important information should the nurse determine?",
          choices: [
            "if she has kissed the baby",
            "if the baby is breastfeeding",
            "when the baby last received antibiotics",
            "how long she has been caring for the baby",
          ],
          answer: 1,
          rationale:
            "Determine if the baby is breastfeeding as HIV can be transmitted through breast milk.",
        },
        {
          id: "np4_q84",
          question:
            "The nurse is planning to provide discharge teaching to the family of a client with AIDS. Which statement should the nurse include in the teaching plan?",
          choices: [
            '"Wash the dishes in hot soap as you usually do."',
            '"Let the dishes soak in hot water overnight before washing."',
            '"You should boil the client\'s dishes for 30 minutes after use."',
            '"Have the client eat from paper plates so they can be discharged."',
          ],
          answer: 0,
          rationale: "Standard dishwashing is sufficient for HIV patients.",
        },
        {
          id: "np4_q85",
          question:
            "During an AIDS education class a client states, 'Vaseline - What works great when I use condoms.' Which conclusion about the client's knowledge of condom use can the nurse draw from this statement?",
          choices: [
            "an understanding of safer sex",
            "an ability to assume self-responsibility",
            "ignorance concerning correct condom use",
            "ignorance concerning the transmission of HIV",
          ],
          answer: 2,
          rationale:
            "Vaseline can damage latex condoms; this shows ignorance of correct condom use.",
        },
        {
          id: "np4_q86",
          question:
            "The client with AIDS is experiencing nausea and vomiting. The Nurse would make which of the following dietary alterations for this client to enhance nutritional intake?",
          choices: [
            "Avoid dairy products and red meat",
            "Plan large nutritious meals",
            "Add spices to food to enhance flavour",
            "Serve foods while they are warm",
          ],
          answer: 0,
          rationale: "Avoid dairy and red meat to reduce nausea.",
        },
        {
          id: "np4_q87",
          question:
            "The Physician orders a Paracentesis. How should the nurse instruct the client to prepare for the procedure?",
          choices: [
            "void before the procedure",
            "take a laxative the evening before the procedure",
            "nothing by mouth for 8 hours before the procedure",
            "a low soapsuds enema the morning of the procedure",
          ],
          answer: 0,
          rationale: "The client should void before paracentesis to avoid bladder puncture.",
        },
        {
          id: "np4_q88",
          question:
            "In a Medical ward there are clients with potential or actual disorders of fluids and electrolytes disturbance and homeostatic mechanisms. The nurse is caring for a client with chronic kidney failure. The nurse understands that ammonia is normally excreted by the kidney to help maintain:",
          choices: [
            "osmotic pressure of the blood",
            "acid-base balance of the body",
            "low bacterial level in the urine",
            "normal red blood cell production",
          ],
          answer: 1,
          rationale: "Ammonia excretion helps maintain acid-base balance.",
        },
        {
          id: "np4_q89",
          question:
            "Which finding best suggests that nursing interventions for a client with an excess fluid volume have been effective?",
          choices: [
            "clear breath sounds",
            "positive pedal pulses",
            "normal potassium level",
            "increased urine specific gravity",
          ],
          answer: 0,
          rationale: "Clear breath sounds indicate resolution of pulmonary congestion.",
        },
        {
          id: "np4_q90",
          question: "The nurse understands that a client with albuminuria has edema because of:",
          choices: [
            "fall in tissue hydrostatic pressure",
            "rise in plasma hydrostatic pressure",
            "rise in tissue colloid osmotic pressure",
            "fall in plasma colloid osmotic pressure",
          ],
          answer: 3,
          rationale: "Albuminuria decreases plasma colloid osmotic pressure, causing edema.",
        },
        {
          id: "np4_q91",
          question:
            "When the nurse uses the clamp on the administration set to manually adjust the flow of IV fluid into a client by gravity, what change in energy takes place?",
          choices: [
            "potential energy is converted to kinetic energy",
            "kinetic energy is converted to potential energy",
            "chemical energy is converted to kinetic energy",
            "potential energy is converted to chemical energy",
          ],
          answer: 0,
          rationale: "Gravity converts potential energy to kinetic energy.",
        },
        {
          id: "np4_q92",
          question:
            "The client with which condition has an increased risk for developing Hyperkalemia?",
          choices: [
            "Crohn's disease",
            "Cushing's syndrome",
            "Chronic heart failure",
            "End-stage renal disease",
          ],
          answer: 3,
          rationale: "End-stage renal disease causes potassium retention.",
        },
        {
          id: "np4_q93",
          question:
            "The nurse assists in the care of a 15 year old female experiencing anaphylaxis due to insect bite by honeybees. Upon assessment, the nurse observes the client reacting to the insect bites. The following are common reactions to an insect sting EXCEPT:",
          choices: ["Swelling", "Redness", "Appearance of lesions", "Pain"],
          answer: 2,
          rationale: "Lesions are not a common reaction to insect stings.",
        },
        {
          id: "np4_q94",
          question:
            "Nurse Gab is a staff nurse in the oncology unit of a tertiary hospital. An activity in the unit for continuing professional development is to disseminate information among the personnel and staff in the unit regarding trends and treatment for cancer. Nurse Gab read an article entitled 'Understanding Colorectal Cancer' which was recently published in a national newspaper. According to the Philippine Cancer Facts and Estimates for 2010, one of the most common cancer among men is colorectal cancer. It ranks ___ among all the diseases:",
          choices: ["First", "Fourth", "Second", "Third"],
          answer: 3,
          rationale: "Colorectal cancer ranks third among cancers in Filipino men.",
        },
        {
          id: "np4_q95",
          question:
            "A 21 year old male is admitted to the burn unit of X hospital. He sustained burns on the chest, abdomen, right arm and right leg. The nurse assigned to his care anticipates that the client would be particularly susceptible to which of the following fluid and electrolyte imbalances during the emergent phase of burn care.",
          choices: ["Metabolic acidosis", "Hyperkalemia", "Metabolic alkalosis", "Hypernatremia"],
          answer: 0,
          rationale:
            "Metabolic acidosis occurs due to accumulation of metabolites in burn patients.",
        },
        {
          id: "np4_q96",
          question:
            "The nurse assesses the client for fluid shifting. During the emergent phase of a burn injury, shifts occur due to fluid moving from the",
          choices: [
            "Extracellular to intracellular space.",
            "Intracellular to extracellular space.",
            "Vascular to interstitial space.",
            "Interstitial to vascular space.",
          ],
          answer: 2,
          rationale: "Fluid moves from vascular to interstitial space during the emergent phase.",
        },
        {
          id: "np4_q97",
          question: "The nurse understands that the fluid shift results from an increase in the",
          choices: [
            "Total volume of intravascular plasma",
            "Total volume of circulating whole blood",
            "Permeability of capillary walls",
            "Permeability of the kidney tubules",
          ],
          answer: 2,
          rationale: "Increased capillary wall permeability causes fluid shift.",
        },
        {
          id: "np4_q98",
          question:
            "The client receives fluid resuscitation therapy. The nurse adjusts the infusion rate by evaluating the client's",
          choices: [
            "Hourly urine output",
            "Daily body weight",
            "Hourly urine specific gravity",
            "Hourly body temperature",
          ],
          answer: 0,
          rationale: "Hourly urine output is the best indicator of fluid resuscitation adequacy.",
        },
        {
          id: "np4_q99",
          question:
            "The client receives total parenteral nutrition (TPN). The nurse understands this therapy will help the client",
          choices: [
            "Provide adequate nutrition",
            "Ensure adequate caloric and protein intake",
            "Correct water and electrolyte imbalances",
            "Allow the gastrointestinal tract to rest",
          ],
          answer: 0,
          rationale: "TPN provides adequate nutrition to burn patients.",
        },
        {
          id: "np4_q100",
          question:
            "You are a nurse assigned to take care of patients with various liver conditions. You utilize your knowledge and skills on the diseases to effectively plan and manage care for these patients. Patient Bellmere was admitted to the hospital with a diagnosis of nonalcoholic fatty liver disease (NAFLD). You are reviewing her chart for her health history. Which of the following findings is consistent with the NAFLD disease process?",
          choices: [
            "70 years old",
            "Obese",
            "History of recent antibiotic use",
            "Living in colder climates",
          ],
          answer: 1,
          rationale: "Obesity is a major risk factor for NAFLD.",
        },
      ],
    },
    {
      id: "tranpfive",
      title: "TRA Nursing Practice 5",
      description: "Nursing Practice 5 Provided by TopRank Academy",
      questions: [
        {
          id: "np5_q1",
          question:
            "This test questionnaire contains 100 test questions. Shade only one (1) box for each question on your answer sheets. Two or more boxes shaded will invalid your answer. AVOID ERASURES. Detach one (1) answer sheet from the bottom of your Examinee ID/Answer Sheet Set. Write the subject title 'NURSING PRACTICE V' on the box provided.",
          choices: ["A", "B", "C", "D"],
          answer: 0,
          rationale: "Instruction section - no actual question content.",
        },
        {
          id: "np5_q2",
          question: "Providing the client with support and realistic information on the colostomy.",
          choices: [
            "Providing the client with support and realistic information on the colostomy.",
            "Convincing the client that he will not be disfigured and can lead a full life.",
            "Body image.",
            "Reassuring the client that the colostomy is temporary.",
          ],
          answer: 0,
          rationale:
            "Providing support and realistic information is appropriate for body image concerns.",
        },
        {
          id: "np5_q3",
          question:
            "One of your patients in the ward directs profanities at you, the nurse, then abruptly hangs his head and pleads to you, 'Please forgive me. Something came over me. Ugh, why do I say those things?' As a knowledgeable nurse, you interpret this as which of the following?",
          choices: ["Neologism", "Confabulation", "Flight of ideas", "Emotional lability"],
          answer: 3,
          rationale: "Emotional lability is characterized by rapid, unpredictable mood changes.",
        },
        {
          id: "np5_q4",
          question:
            "You are a nurse tasked to care for patients experiencing stress and anxiety. You are to apply the nursing concepts you've learned about this topic to effectively care for these patients. You notice that Nami, a young adult about to undergo a surgery is experiencing moderate anxiety regarding her upcoming procedure. As a competent nurse, you help to reduce the patient's anxiety by:",
          choices: [
            "Telling her to distract himself with games and television",
            "Reassure her that she will come through the surgery without incident",
            "Explaining to her what happens before and after surgery",
            "Asking the surgeon to refer her to a psychiatrist",
          ],
          answer: 2,
          rationale: "Explaining the procedure helps reduce anxiety.",
        },
        {
          id: "np5_q5",
          question:
            "You are discussing the concept of anxiety to the student nurses in your unit. You explain that anxiety occurs in degrees, from a level that stimulates productive problem solving to a level that is severely debilitating. The students respond correctly when you ask that at a mild, productive level of anxiety, one will expect to see which of the following cognitive characteristics of mild anxiety?",
          choices: [
            "Slight muscle tension.",
            "Occasional irritability.",
            "Accurate perceptions.",
            "Loss of contact with reality.",
          ],
          answer: 2,
          rationale: "At mild anxiety, perceptions are accurate and problem-solving is enhanced.",
        },
        {
          id: "np5_q6",
          question:
            "You followed up a question to the student nurses. They answered you correctly when they stated that as a client's anxiety level increases to a debilitating degree, they would expect which of the following psychomotor behavior indicating the panic level of anxiety:",
          choices: [
            "Suicide attempts or violence.",
            "Desperation and rage.",
            "Disorganized reasoning.",
            "Loss of contact with reality.",
          ],
          answer: 0,
          rationale:
            "Suicide attempts or violence are psychomotor behaviors of panic-level anxiety.",
        },
        {
          id: "np5_q7",
          question:
            "You admitted a patient dealing with personal issues and painful feelings. Which of the following is a crucial goal of therapeutic communication when helping this client?",
          choices: [
            "Communicating empathy through gentle touch",
            "Conveying client respect and acceptance even if not all of the client's behaviors are tolerated",
            "Mutual sharing of information, spontaneity, emotions, and intimacy",
            "Guaranteeing total confidentiality and anonymity for the client",
          ],
          answer: 1,
          rationale:
            "Conveying respect and acceptance is a crucial goal of therapeutic communication.",
        },
        {
          id: "np5_q8",
          question:
            "You are doing a follow up visit to the home of a client diagnosed with Alzheimer's disease. You are assessing the stress level of the patient's spouse, the primary caregiver. Which of the following questions is most appropriate for assessing the spouse's level of stress?",
          choices: [
            '"So, what is a typical day like for you?"',
            '"What do you do to relieve stress for yourself?"',
            '"May I arrange for some part-time help for you?"',
            '"Being a full-time caregiver must be very stressful, isn\'t it?"',
          ],
          answer: 0,
          rationale:
            "An open-ended question like 'What is a typical day like for you?' is most appropriate.",
        },
        {
          id: "np5_q9",
          question:
            "You are a nurse tasked to care for patients with schizophrenia. You use your knowledge on this concept to effectively and safely care for your patients. You are caring for a patient diagnosed with paranoid schizophrenia. The patient reports hearing a voice saying 'Do not remove your cap or they will be able to read your mind.' Which of the following responses is the most therapeutic for this patient?",
          choices: [
            "\"Who are 'they'?\"",
            '"Why would someone want to read your mind?"',
            '"I do not believe that anyone can read another\'s mind."',
            '"It must be very frightening to believe that someone can read your mind."',
          ],
          answer: 3,
          rationale: "Validating the patient's feelings is therapeutic.",
        },
        {
          id: "np5_q10",
          question:
            "A patient diagnosed with a history of paranoid schizophrenia and chronic alcohol abuse was admitted to your unit. The patient has been taking Olanzapine for 14 days and has not consumed alcohol in the last 5 days. They report shaky hands and trouble sleeping because of frequent nightmares. The patient verbalized their concern that olanzapine may be causing these problems. Which of the following is your most therapeutic response to this patient?",
          choices: [
            '"These are not typical side effects for that drug."',
            '"Just ignore the symptoms. They will go away in just a few days."',
            '"These symptoms are more likely a result of not drinking alcohol for 5 days."',
            '"It is possible, since this medication is contraindicated in those who abuse alcohol."',
          ],
          answer: 2,
          rationale:
            "The symptoms are likely alcohol withdrawal-related, not medication side effects.",
        },
        {
          id: "np5_q11",
          question:
            "A patient with a history of violent command hallucinations was observed to be mumbling erratically while making threatening gestures directed toward a particular staff member. Which of the following interventions is most appropriate when caring for patients with violent command hallucinations?",
          choices: [
            "Ask the client to explain the cause of anger.",
            "Place the client in seclusion to help de-escalate anger.",
            "Inform the client of pending restraint if behavior does not subside.",
            "Observe the client for signs of escalating agitation.",
          ],
          answer: 3,
          rationale:
            "Observing for signs of escalating agitation is the first appropriate intervention.",
        },
        {
          id: "np5_q12",
          question:
            "A patient diagnosed with paranoid schizophrenia was admitted to your unit. You include the nursing diagnosis of Disturbed thought processes secondary to paranoia in the patient's care plan. Which of the following approaches is most appropriate for this patient?",
          choices: [
            "Avoid laughing or whispering in front of the client.",
            "Begin to identify social support in the community.",
            "Encourage the client to interact with others on the unit.",
            "Have the client sign a written release of information form.",
          ],
          answer: 0,
          rationale: "Avoiding laughing or whispering helps reduce paranoia.",
        },
        {
          id: "np5_q13",
          question:
            "The mother of a client diagnosed with paranoid schizophrenia visiting her son 2 days after his admission to the psychiatric unit approaches a nurse and states, 'He is still talking about how the government is controlling his thoughts.' What is the most accurate nursing appraisal of the mother's statement?",
          choices: [
            "The mother's expectations of her son are realistic.",
            "The mother's concern is reasonable.",
            "The mother should request a medication adjustment.",
            "The mother requires further education regarding the client's diagnosis.",
          ],
          answer: 3,
          rationale: "The mother needs further education about schizophrenia and its symptoms.",
        },
        {
          id: "np5_q14",
          question:
            "You are tasked to care for Zoro, a patient newly diagnosed with obsessive compulsive disorder. You use your knowledge to effectively and safely care for the patient. Zoro is utilizing a defense mechanism commonly used by patients with obsessive compulsive disorder. Which of the following defense mechanisms is this?",
          choices: ["Suppression.", "Repression.", "Undoing.", "Denial."],
          answer: 2,
          rationale: "Undoing is a defense mechanism commonly used in OCD.",
        },
        {
          id: "np5_q15",
          question:
            "You start your assessment on Zoro. Which behavioral symptom would you expect to assess in this patient?",
          choices: [
            "The client uses excessive hand washing to relieve anxiety.",
            "The client rates anxiety at 8/10.",
            "The client uses breathing techniques to decrease anxiety.",
            "The client exhibits diaphoresis and tachycardia.",
          ],
          answer: 0,
          rationale: "Excessive hand washing is a behavioral symptom of OCD.",
        },
        {
          id: "np5_q16",
          question:
            "Which cognitive symptom would you expect to assess in Zoro who has obsessive compulsive disorder?",
          choices: [
            "Lack of concern for safety.",
            "Slow, poor decision making.",
            "Recurrent and persistent thoughts.",
            "Self-inflicted injury.",
          ],
          answer: 2,
          rationale:
            "Recurrent and persistent thoughts (obsessions) are cognitive symptoms of OCD.",
        },
        {
          id: "np5_q17",
          question: "A crisis that is acute but temporary and due to an external source is",
          choices: ["Developmental", "Transitional", "Traumatic", "Dispositional"],
          answer: 3,
          rationale:
            "A dispositional crisis is an acute response to an external situational stressor.",
        },
        {
          id: "np5_q18",
          question: "The MAIN objective of crisis intervention is to",
          choices: [
            "Make the person realize his/her mistakes",
            "Ensure patient's safety",
            "Return the person to the root of the crisis to identify the cause",
            "Eliminate the stressor",
          ],
          answer: 1,
          rationale: "Ensuring patient safety is the main objective of crisis intervention.",
        },
        {
          id: "np5_q19",
          question: "Which of the following is NOT an assumption in the concept of crisis?",
          choices: [
            "Crisis is acute and resolved within a short period of time.",
            "All individuals experience a crisis.",
            "Crisis is a growth-retarding factor to the emotional development of a person.",
            "Specific identifiable events precipitate a crisis.",
          ],
          answer: 2,
          rationale:
            "Crisis contains potential for growth or deterioration, not necessarily growth-retarding.",
        },
        {
          id: "np5_q20",
          question:
            "Which of the following nursing interventions is the most appropriate for a client who is in the early stage of crisis?",
          choices: [
            "Encourage client to express feelings and emotions related to crisis.",
            "Require client to be actively involved in establishing goals.",
            "Encourage client to begin the development of insight.",
            "Ask client to evaluate the situation.",
          ],
          answer: 0,
          rationale:
            "Encouraging expression of feelings is appropriate in the early stage of crisis.",
        },
        {
          id: "np5_q21",
          question:
            "In the PGH Ear Unit, the staff nurse is attending to several outpatient clients seeking follow-up care. In administering ear drops, the nurse observes which of the following principles?",
          choices: [
            "In a child, pull pinna upward and backward.",
            "Let the ear drops fall on the middle space of the canal.",
            "Lie on the unaffected side to facilitate absorption.",
            "Position unaffected ear uppermost.",
          ],
          answer: 3,
          rationale: "Position the unaffected ear uppermost when administering ear drops.",
        },
        {
          id: "np5_q22",
          question:
            "The nurse assists in an ear irrigation. Which of the following statements by the nurse is correct?",
          choices: [
            '"Tilt the head towards the unaffected ear."',
            '"Direct the stream of irrigate at the sides of the ear canal."',
            '"After the procedure, lie on the unaffected side to allow the irrigate to soften any hardened mass."',
            '"This procedure is allowed for otitis media to clean the canal."',
          ],
          answer: 1,
          rationale: "Direct the stream of irrigate at the sides of the ear canal.",
        },
        {
          id: "np5_q23",
          question: "What makes children more predisposed to chronic otitis media?",
          choices: [
            "Shorter Eustachian tube",
            "Horizontal orientation of the ear canal",
            "Primary diaphragmatic breathing",
            "Both A and B",
          ],
          answer: 3,
          rationale: "Children have shorter Eustachian tubes and horizontally oriented ear canals.",
        },
        {
          id: "np5_q24",
          question:
            "The Psychiatrist orders 'Restraints PRN' for a client who has a history of violent behavior. Nurse Poppy should:",
          choices: [
            "Utilize the restraint order if the client begins to act-out",
            "Ask the psychiatrist to clarify the type of restraint order",
            "Ensure that the entire staff is aware of the restraint order",
            "Recognize that PRN orders for restraints are unacceptable",
          ],
          answer: 3,
          rationale:
            "PRN orders for restraints are unacceptable; restraint orders must be specific and time-limited.",
        },
        {
          id: "np5_q25",
          question:
            "Which of the following is a characteristic sign of acute otitis media in children?",
          choices: [
            "Jumping in pain",
            "Ear tugging",
            "Painless inflammation",
            "Difficulty awakening",
          ],
          answer: 1,
          rationale: "Ear tugging is a characteristic sign of acute otitis media in children.",
        },
        {
          id: "np5_q26",
          question:
            "Addiction disorders are unnecessarily common in the modern lifestyle of Filipinos, especially with the rise of establishments selling products with caffeine. Because of the various 'improvements' in performance, this industry is still unwavering. Caffeine greatly affects which part of the heart, as reflected in an ECG?",
          choices: ["Atrium", "Ventricles", "Purkinje fibers", "Interventricular septum"],
          answer: 0,
          rationale: "Caffeine affects the atrium, as reflected in ECG changes.",
        },
        {
          id: "np5_q27",
          question:
            "Which of the following do not have the potential of addiction, if consumed frequently and in large amounts?",
          choices: [
            "Chocolate-flavored Cola",
            "Apple juice",
            "Green tea",
            "Common cold preparations",
          ],
          answer: 1,
          rationale: "Apple juice does not contain addictive substances.",
        },
        {
          id: "np5_q28",
          question:
            "In the previous situation of the young professional intoxicated with caffeine, he suddenly was unable to take any caffeine source for 24 hours already. The nurse expects to note the following findings, except?",
          choices: ["Headache", "Difficulty in stimulating", "Nausea and vomiting", "Muscle pain"],
          answer: 1,
          rationale: "Difficulty in stimulating is not a typical caffeine withdrawal symptom.",
        },
        {
          id: "np5_q29",
          question:
            "The nurse suspects caffeine intoxication in a young professional if he notes which finding?",
          choices: [
            "Decreased flow of thought and speech",
            "Psychomotor agitation",
            "Urinary retention",
            "Bradycardia",
          ],
          answer: 1,
          rationale: "Psychomotor agitation is a sign of caffeine intoxication.",
        },
        {
          id: "np5_q30",
          question:
            "The following are the reasons why many people abuse caffeine. Choose the exception.",
          choices: [
            "Relieve fatigue",
            "Increase mental alertness",
            "Both A and B",
            "Neither A nor B",
          ],
          answer: 0,
          rationale: "Relieving fatigue is a reason; the exception would be neither A nor B.",
        },
        {
          id: "np5_q31",
          question:
            "The student nurse is reviewing for his admission exam for a prestigious hospital in Taguig City. He is answering questions related to eye disorders. In the clinic, the school health nurse is conducting a vision screening to incoming Grade 1 and Grade 4 students. One of the students was able to read at 10 ft, what a normal eye sees at 20 feet. She documents this finding as:",
          choices: ["10/20", "20/10", "2/1", "1/2"],
          answer: 1,
          rationale: "20/10 means the student can read at 20 ft what a normal eye sees at 10 ft.",
        },
        {
          id: "np5_q32",
          question:
            "A student was not able to read the letters in the 20/20 level. How should the nurse proceed with the visual assessment?",
          choices: [
            "Document this finding as visual impairment.",
            "Allow the student to come nearer at a distance of 10 ft.",
            "Ask the student to squint, and try reading the level again.",
            "Remind the student to avoid guessing at letters to have an accurate finding.",
          ],
          answer: 1,
          rationale: "Allow the student to come nearer to 10 ft if 20/20 cannot be read.",
        },
        {
          id: "np5_q33",
          question:
            "A patient is due to undergo tonometry for confirmation of the diagnosis of glaucoma. The nurse advises the patient against which of the following, except:",
          choices: [
            "Squinting",
            "Breathing through open glottis",
            "Coughing",
            "Bending at the hips",
          ],
          answer: 1,
          rationale: "Breathing through open glottis is permitted during tonometry.",
        },
        {
          id: "np5_q34",
          question:
            "The nurse is caring for a client following enucleation. The nurse notes the presence of bright red drainage on the dressing. Which nursing action is appropriate?",
          choices: [
            "Notify the physician.",
            "Document the finding.",
            "Continue to monitor the drainage.",
            "Mark the drainage on the dressing and monitor for any increase.",
          ],
          answer: 0,
          rationale:
            "Bright red drainage after enucleation requires immediate physician notification.",
        },
        {
          id: "np5_q35",
          question:
            "The nurse is performing an admission assessment on a client with a diagnosis of detached retina. Which of the following is associated with this eye disorder?",
          choices: [
            "Total loss of vision",
            "Pain in the affected eye",
            "A yellow discoloration of the sclera",
            "A sense of a curtain falling across the field of vision",
          ],
          answer: 3,
          rationale:
            "A sense of a curtain falling across vision is associated with retinal detachment.",
        },
        {
          id: "np5_q36",
          question:
            "The diverse Neurologic disorders present unique challenges of nursing care. The Nurse must have a clear understanding of the pathologic processes for appropriate nursing management. Nurse Jeremy is attending to clients in the ward with Multiple Sclerosis. A recently hospitalized client with Multiple Sclerosis is concerned about generalized weakness and a fluctuating physical status. What is the priority nursing intervention for this client?",
          choices: [
            "encourage bed rest",
            "space activities throughout the day",
            "teach the limitations imposed by the disease",
            "have one of the client's relatives stay at the bedside",
          ],
          answer: 1,
          rationale: "Spacing activities throughout the day helps manage fatigue.",
        },
        {
          id: "np5_q37",
          question:
            "Which clinical indicator does Nurse Jeremy identify when assessing a client with hemiplegia?",
          choices: [
            "paresis of both lower extremities",
            "paralysis of one side of the body",
            "paralysis of both lower extremities",
            "paresis of upper and lower extremities",
          ],
          answer: 1,
          rationale: "Hemiplegia is paralysis of one side of the body.",
        },
        {
          id: "np5_q38",
          question:
            "Which statement by a client with Multiple Sclerosis indicates to Nurse Jeremy that the client needs further teaching?",
          choices: [
            '"I use a straw to drink liquids."',
            '"I will take a hot bath to help relax my muscles."',
            '"I plan to use an incontinence pad when I go out."',
            '"I may be having a rough time now, but I hope tomorrow will be better."',
          ],
          answer: 1,
          rationale:
            "Hot baths can exacerbate MS symptoms; this statement indicates need for further teaching.",
        },
        {
          id: "np5_q39",
          question:
            "Mr. Dela Cruz a 48 year old client carpenter admitted after a spinal cord injury and the Physician indicates that a client is a Paraplegic. The family asks Nurse Jeremy what this means. What explanation should the nurse give to the family?",
          choices: [
            "upper extremities are paralyzed",
            "lower extremities are paralyzed",
            "one side of the body is paralyzed",
            "both lower and upper extremities are paralyzed",
          ],
          answer: 1,
          rationale: "Paraplegia is paralysis of the lower extremities.",
        },
        {
          id: "np5_q40",
          question:
            "Jeremy is excited to be assigned to a Neuro-Ward after his extensive training. He is preparing to conduct a Neurologic examination. What nursing intervention is anticipated for a client in the plateau phase of Guillain-Barre syndrome?",
          choices: [
            "providing a straw to stimulate the facial muscles",
            "inserting an indwelling catheter to monitor urinary output",
            "encouraging aerobic exercises to avoid muscle atrophy",
            "administering antibiotic medication to prevent pneumonia",
          ],
          answer: 1,
          rationale:
            "Inserting an indwelling catheter to monitor urinary output is needed in the plateau phase.",
        },
        {
          id: "np5_q41",
          question:
            "In the Psychiatric ward nurses are discussing the other factors that caused Alzheimer's disease (AD). And they all agree that it is a degenerative disease of the brain caused by gradual death and loss of brain cells resulting to progressive and irreversible Dementia. The Nurse develops a nursing diagnosis of self care deficit for an older client with Dementia. Which of the following is the most appropriate goal for this client?",
          choices: [
            "The client will be admitted to a long care facility to have activities of daily living needs met",
            "The client will function at the highest level of independence possible",
            "The client will complete all activities of daily living independently within one (1) hour time frame",
            "The Nursing staff will attend to all the client's activities of daily living needs during the hospitalization",
          ],
          answer: 1,
          rationale: "The goal is to function at the highest level of independence possible.",
        },
        {
          id: "np5_q42",
          question:
            "The nurse recognizes that Dementia of the Alzheimer's type is characterized by:",
          choices: [
            "aggressive acting-out behavior",
            "periodic remissions and exacerbations",
            "hypoxia of selected areas of brain tissue",
            "areas of brain destruction called senile plaques",
          ],
          answer: 3,
          rationale: "Alzheimer's dementia is characterized by senile plaques in the brain.",
        },
        {
          id: "np5_q43",
          question:
            "When attempting to understand the behavior of an older adult diagnosed with Vascular Dementia, the nurse recognizes that the client is probably:",
          choices: [
            "not capable of using any defense mechanisms",
            "using one method of defense for every situation",
            "making exaggerated use of old, familiar mechanism",
            "attempting to develop new defense mechanism to meet the current situation",
          ],
          answer: 2,
          rationale:
            "Older adults with dementia often make exaggerated use of old, familiar defense mechanisms.",
        },
        {
          id: "np5_q44",
          question:
            "Which of the following nursing intervention is most helpful in meeting the needs of an older adult hospitalized with the diagnosis of Dementia of the Alzheimer's type?",
          choices: [
            "providing a nutritious diet high in carbohydrates and protein",
            "simplifying the environment as much as possible while eliminating the need for choices",
            "developing a consistent nursing plan with fixed time schedules to provide for emotional needs",
            "providing an opportunity for many alternative choices in the daily schedule to stimulate interest",
          ],
          answer: 2,
          rationale: "Consistent nursing plan with fixed time schedules is most helpful.",
        },
        {
          id: "np5_q45",
          question:
            "A 75-year-old man with the diagnosis of Dementia has been cared for by his wife for 5 years. For the past 2 years he has not spoken and incontinent of urine and feces. During the last month he has changed from being plaid and easygoing to agitated and aggressive. He is admitted to a Psychiatric hospital for treatment with Psychopharmacology. Which is the priority nursing care while this client is in the psychiatric facility?",
          choices: [
            "managing his behavior",
            "preventing further deterioration",
            "focusing on the needs of the wife",
            "establishing on the needs of the wife",
          ],
          answer: 0,
          rationale: "Managing behavior is the priority for an agitated, aggressive patient.",
        },
        {
          id: "np5_q46",
          question:
            "The ICU nurse assigned to a 60-year old acutely ill client with Parkinson's disease who was hospitalized frequently. The initial confinement was due to electrolyte imbalance. The following confinement was due to injury sustained from fall, he became to have incontinent of stools that further lead to development of skin irritation and breakdown. Currently he was admitted due to respiratory infection. The review of literature does not only include published research studies but also theory. In this case which theory is least related to the study?",
          choices: [
            "Neuman's system model",
            "Lazarus' theory of stress and coping",
            "Nightingale's environmental theory",
            "Roy's theory of adaptation",
          ],
          answer: 1,
          rationale: "Lazarus' theory is least related to the case described.",
        },
        {
          id: "np5_q47",
          question:
            "Related literature included case situations similar to the case of the client. The nurse is interested in gaining further knowledge that can help the client at risk for fecal incontinence. The nurse should use which of the following methods to strengthen this report?",
          choices: [
            "Historical research method",
            "Qualitative research method",
            "Experimental research method",
            "Quantitative research method",
          ],
          answer: 1,
          rationale:
            "Qualitative research methods are appropriate for understanding patient experiences.",
        },
        {
          id: "np5_q48",
          question:
            "The patient also reports multiple lumbar muscle strains, thus is also looking at using alternative therapies to reduce the pain. The client seeks advice from the nurse as to what type of alternative therapy would provide the best pain relief. How should the nurse respond?",
          choices: [
            '"I have seen many individuals with your type of pain be relieved of pain through the use of acupuncture."',
            '"These types of therapies are more than just therapies; they are really a mind over matter type of event or game."',
            '"Some of my other clients swear by magnet therapy to reduce pain as it is very small and very easy to use."',
            '"You need to choose the alternative therapy that is right for you based on research that supports the intervention."',
          ],
          answer: 3,
          rationale: "The nurse should recommend choosing therapy based on research evidence.",
        },
        {
          id: "np5_q49",
          question:
            "While the nurse was able to identify the cases that were studied, it is important to understand the phenomenological experience of the client. This approach includes the following except:",
          choices: [
            "Exploring the idea expressed by the person",
            "Getting the whole picture of fecal incontinence and its associated factors",
            "Focusing interview on fecal incontinence",
            "Interviewing and using of questionnaire on client's responses to his situation",
          ],
          answer: 2,
          rationale:
            "Focusing interview solely on fecal incontinence is too narrow for phenomenological approach.",
        },
        {
          id: "np5_q50",
          question:
            "Which of the following can the nurse use in protecting the safety of the subjects undergoing the research study?",
          choices: [
            "i. Code for Nurses\nii. Nightingale's pledge\niii. Patient's Bill of Rights\niv. Human Rights Guidelines",
            "1, 2, 3, 4",
            "1, 3",
            "1, 2",
            "3 only",
          ],
          answer: 1,
          rationale: "Code for Nurses and Patient's Bill of Rights protect research subjects.",
        },
        {
          id: "np5_q51",
          question:
            "In a Nursing Practice you are directly involved in conducting a comprehensive physical assessment especially to older clients with sensory limitations. The client with head injury is having problems with several sensory functions. Nurse Ymir should understand that the structure that acts as a relay center for sensory impulses is the:",
          choices: ["thalamus", "cerebellum", "hypothalamus", "medulla oblongata"],
          answer: 0,
          rationale: "The thalamus acts as the relay center for sensory impulses.",
        },
        {
          id: "np5_q52",
          question:
            "When formulating nursing care plans for older adults, Nurse Ymir should include special measures to accommodate for age-related sensory losses such as:",
          choices: [
            "difficulty in swallowing",
            "increased sensitivity to heat",
            "diminished sensation of pain",
            "heightened response to stimuli",
          ],
          answer: 2,
          rationale: "Diminished pain sensation is an age-related sensory loss.",
        },
        {
          id: "np5_q53",
          question:
            "After a brain attack, a client remains unresponsive to sensory stimulation. Nurse Ymir understands general sensations such as heat, cold, pain, and touch are registered in the:",
          choices: ["frontal lobe", "parietal lobe", "occipital lobe", "temporal lobe"],
          answer: 1,
          rationale: "The parietal lobe registers general sensations.",
        },
        {
          id: "np5_q54",
          question: "Visual Acuity declines with age. Presbyopia is a progressive decline in:",
          choices: [
            "Distinguishing between blues and greens and among pastel shades",
            "Ability to see in darkness",
            "The ability of the eyes to accommodate for close detailed work",
            "Adaptation to abrupt changes from dark areas to light areas",
          ],
          answer: 2,
          rationale:
            "Presbyopia is the progressive decline in the ability to accommodate for close work.",
        },
        {
          id: "np5_q55",
          question:
            "The novice nurse who is administering a beta blocker asks the Senior Staff Nurse about its effect on the Autonomic Nervous System. When formulating a response the nurse should understand which common misconception about the Autonomic Nervous System?",
          choices: [
            "both sympathetic and parasympathetic impulses continually affect most visceral effectors",
            "the autonomic nervous systems is regulated by impulses from the hypothalamus and other parts of the brain",
            "sympathetic impulses stimulate while parasympathetic impulses inhibit the functioning of any visceral effector",
            "visceral effectors receive impulses only via autonomic neurons",
          ],
          answer: 2,
          rationale:
            "It is a misconception that sympathetic always stimulates and parasympathetic always inhibits.",
        },
        {
          id: "np5_q56",
          question:
            "Poppy a Psychiatric Nurse responds in a variety setting to different clients with Personality disorders. The Psychiatrist orders 'Restraints PRN' for a client who has a history of violent behavior. Nurse Poppy should:",
          choices: [
            "Utilize the restraint order if the client begins to act-out",
            "Ask the psychiatrist to clarify the type of restraint order",
            "Ensure that the entire staff is aware of the restraint order",
            "Recognize that PRN orders for restraints are unacceptable",
          ],
          answer: 3,
          rationale: "PRN orders for restraints are unacceptable; specific orders are required.",
        },
        {
          id: "np5_q57",
          question:
            "Strict toilet and too early training to a toddler child will cause problems in personality development because at this age a child is learning to:",
          choices: [
            "Satisfy own needs",
            "Identify own needs",
            "Satisfy parents' needs",
            "Live up to society's expectations",
          ],
          answer: 2,
          rationale: "The toddler is learning to satisfy parents' needs during toilet training.",
        },
        {
          id: "np5_q58",
          question:
            "The nurse encourages a client to join a self-helping group after being discharged from a Mental health facility. The purpose of having people work in a group is to provide:",
          choices: ["Support", "Confrontation", "Psychotherapy", "Self-awareness"],
          answer: 0,
          rationale: "Self-help groups provide support.",
        },
        {
          id: "np5_q59",
          question:
            "As Depression begins to lift, a client is asked to join a small discussion group that meets every evening on the unit. The client is reluctant to join because, 'I have nothing to talk about.' What is the best response by the nurse?",
          choices: [
            '"Maybe tomorrow you will feel more like talking."',
            '"Could you start off by talking about your family?"',
            '"A person like you has a great deal to offer the group."',
            '"You feel you will not be accepted unless you have something to say?"',
          ],
          answer: 3,
          rationale: "Reflecting the client's feelings validates their concern.",
        },
        {
          id: "np5_q60",
          question:
            "A client on the Psychiatric unit asks Nurse Poppy about Psychiatric Advance Directives (PAD). The nurse explains that these advance directives:",
          choices: [
            "Make the appointment of a surrogate decision maker unnecessary",
            "Permit the client to dictate what treatments will be given during future hospitalization",
            "Eliminate the need for involuntary admissions when the client is a threat to self or others",
            "Allow the client, while having the capacity, to consent or refuse potential psychiatric treatments",
          ],
          answer: 3,
          rationale:
            "PAD allows clients to consent or refuse psychiatric treatments in the event of a future crisis.",
        },
        {
          id: "np5_q61",
          question:
            "The fundamental assumption of theory of life cycle theories is that development occurs in successive stages. The different life cycle theories try to explain personality development as well as development of Psychiatric disorders. The following questions refer to this situation. The nurse understands that problems with dependence versus independence develop during the stage of growth and development known as:",
          choices: ["Infancy", "School age", "Toddlerhood", "Preschool age"],
          answer: 2,
          rationale: "Toddlerhood is the stage where dependence vs. independence issues develop.",
        },
        {
          id: "np5_q62",
          question:
            "When planning to teach about the stages of growth and development, what stage does the nurse indicate as basically concerned with role identification?",
          choices: ["Oral stage", "Genital stage", "Oedipal stage", "Latency stage"],
          answer: 2,
          rationale: "The Oedipal stage is concerned with role identification.",
        },
        {
          id: "np5_q63",
          question:
            "The nurse understands that Freud's phallic stage of psychosexual development, which compares with Erikson's psychosocial phase of initiative versus guilt, is seen best at:",
          choices: ["adolescent", "6 to 12 years", "3 to 5 1/2 years", "birth to 1 year"],
          answer: 2,
          rationale:
            "The phallic stage (Freud) corresponds to Erikson's initiative vs. guilt, seen at 3-5.5 years.",
        },
        {
          id: "np5_q64",
          question:
            "A 3 year old boy was brought to a Pediatric clinic for indifferent behavior. About a month after their toddler is diagnosed as moderately retarded, the parents discuss the toddler's future, reflecting specifically on plans for their child's independent functioning. The nurse recognizes that the parents:",
          choices: [
            "Are using denial",
            "Accept the child's diagnoses",
            "Are using intellectualization",
            "Are planning unrealistic goals",
          ],
          answer: 1,
          rationale: "The parents are accepting the child's diagnosis.",
        },
        {
          id: "np5_q65",
          question:
            "In the clinic, the school health nurse is conducting a vision screening to incoming Grade 1 and Grade 4 students. One of the students was able to read at 10 ft, what a normal eye sees at 20 feet. She documents this finding as:",
          choices: ["10/20", "20/10", "2/1", "1/2"],
          answer: 1,
          rationale: "20/10 means the student can read at 20 ft what a normal eye sees at 10 ft.",
        },
        {
          id: "np5_q66",
          question:
            "A student was not able to read the letters in the 20/20 level. How should the nurse proceed with the visual assessment?",
          choices: [
            "Document this finding as visual impairment.",
            "Allow the student to come nearer at a distance of 10 ft.",
            "Ask the student to squint, and try reading the level again.",
            "Remind the student to avoid guessing at letters to have an accurate finding.",
          ],
          answer: 1,
          rationale: "Allow the student to come nearer to 10 ft if 20/20 cannot be read.",
        },
        {
          id: "np5_q67",
          question:
            "A patient is due to undergo tonometry for confirmation of the diagnosis of glaucoma. The nurse advises the patient against which of the following, except:",
          choices: [
            "Squinting",
            "Breathing through open glottis",
            "Coughing",
            "Bending at the hips",
          ],
          answer: 1,
          rationale: "Breathing through open glottis is permitted during tonometry.",
        },
        {
          id: "np5_q68",
          question:
            "The nurse is caring for a client following enucleation. The nurse notes the presence of bright red drainage on the dressing. Which nursing action is appropriate?",
          choices: [
            "Notify the physician.",
            "Document the finding.",
            "Continue to monitor the drainage.",
            "Mark the drainage on the dressing and monitor for any increase.",
          ],
          answer: 0,
          rationale:
            "Bright red drainage after enucleation requires immediate physician notification.",
        },
        {
          id: "np5_q69",
          question:
            "The nurse is performing an admission assessment on a client with a diagnosis of detached retina. Which of the following is associated with this eye disorder?",
          choices: [
            "Total loss of vision",
            "Pain in the affected eye",
            "A yellow discoloration of the sclera",
            "A sense of a curtain falling across the field of vision",
          ],
          answer: 3,
          rationale:
            "A sense of a curtain falling across vision is associated with retinal detachment.",
        },
        {
          id: "np5_q70",
          question:
            "The diverse Neurologic disorders present unique challenges of nursing care. The Nurse must have a clear understanding of the pathologic processes for appropriate nursing management. Nurse Jeremy is attending to clients in the ward with Multiple Sclerosis. A recently hospitalized client with Multiple Sclerosis is concerned about generalized weakness and a fluctuating physical status. What is the priority nursing intervention for this client?",
          choices: [
            "encourage bed rest",
            "space activities throughout the day",
            "teach the limitations imposed by the disease",
            "have one of the client's relatives stay at the bedside",
          ],
          answer: 1,
          rationale: "Spacing activities throughout the day helps manage fatigue.",
        },
        {
          id: "np5_q71",
          question:
            "Which clinical indicator does Nurse Jeremy identify when assessing a client with hemiplegia?",
          choices: [
            "paresis of both lower extremities",
            "paralysis of one side of the body",
            "paralysis of both lower extremities",
            "paresis of upper and lower extremities",
          ],
          answer: 1,
          rationale: "Hemiplegia is paralysis of one side of the body.",
        },
        {
          id: "np5_q72",
          question:
            "Which statement by a client with Multiple Sclerosis indicates to Nurse Jeremy that the client needs further teaching?",
          choices: [
            '"I use a straw to drink liquids."',
            '"I will take a hot bath to help relax my muscles."',
            '"I plan to use an incontinence pad when I go out."',
            '"I may be having a rough time now, but I hope tomorrow will be better."',
          ],
          answer: 1,
          rationale:
            "Hot baths can exacerbate MS symptoms; this statement indicates need for further teaching.",
        },
        {
          id: "np5_q73",
          question:
            "Mr. Dela Cruz a 48 year old client carpenter admitted after a spinal cord injury and the Physician indicates that a client is a Paraplegic. The family asks Nurse Jeremy what this means. What explanation should the nurse give to the family?",
          choices: [
            "upper extremities are paralyzed",
            "lower extremities are paralyzed",
            "one side of the body is paralyzed",
            "both lower and upper extremities are paralyzed",
          ],
          answer: 1,
          rationale: "Paraplegia is paralysis of the lower extremities.",
        },
        {
          id: "np5_q74",
          question:
            "Jeremy is excited to be assigned to a Neuro-Ward after his extensive training. He is preparing to conduct a Neurologic examination. What nursing intervention is anticipated for a client in the plateau phase of Guillain-Barre syndrome?",
          choices: [
            "providing a straw to stimulate the facial muscles",
            "inserting an indwelling catheter to monitor urinary output",
            "encouraging aerobic exercises to avoid muscle atrophy",
            "administering antibiotic medication to prevent pneumonia",
          ],
          answer: 1,
          rationale:
            "Inserting an indwelling catheter to monitor urinary output is needed in the plateau phase.",
        },
        {
          id: "np5_q75",
          question:
            "In the Psychiatric ward nurses are discussing the other factors that caused Alzheimer's disease (AD). And they all agree that it is a degenerative disease of the brain caused by gradual death and loss of brain cells resulting to progressive and irreversible Dementia. The Nurse develops a nursing diagnosis of self care deficit for an older client with Dementia. Which of the following is the most appropriate goal for this client?",
          choices: [
            "The client will be admitted to a long care facility to have activities of daily living needs met",
            "The client will function at the highest level of independence possible",
            "The client will complete all activities of daily living independently within one (1) hour time frame",
            "The Nursing staff will attend to all the client's activities of daily living needs during the hospitalization",
          ],
          answer: 1,
          rationale: "The goal is to function at the highest level of independence possible.",
        },
        {
          id: "np5_q76",
          question:
            "The nurse recognizes that Dementia of the Alzheimer's type is characterized by:",
          choices: [
            "aggressive acting-out behavior",
            "periodic remissions and exacerbations",
            "hypoxia of selected areas of brain tissue",
            "areas of brain destruction called senile plaques",
          ],
          answer: 3,
          rationale: "Alzheimer's dementia is characterized by senile plaques in the brain.",
        },
        {
          id: "np5_q77",
          question:
            "When attempting to understand the behavior of an older adult diagnosed with Vascular Dementia, the nurse recognizes that the client is probably:",
          choices: [
            "not capable of using any defense mechanisms",
            "using one method of defense for every situation",
            "making exaggerated use of old, familiar mechanism",
            "attempting to develop new defense mechanism to meet the current situation",
          ],
          answer: 2,
          rationale:
            "Older adults with dementia often make exaggerated use of old, familiar defense mechanisms.",
        },
        {
          id: "np5_q78",
          question:
            "Which of the following nursing intervention is most helpful in meeting the needs of an older adult hospitalized with the diagnosis of Dementia of the Alzheimer's type?",
          choices: [
            "providing a nutritious diet high in carbohydrates and protein",
            "simplifying the environment as much as possible while eliminating the need for choices",
            "developing a consistent nursing plan with fixed time schedules to provide for emotional needs",
            "providing an opportunity for many alternative choices in the daily schedule to stimulate interest",
          ],
          answer: 2,
          rationale: "Consistent nursing plan with fixed time schedules is most helpful.",
        },
        {
          id: "np5_q79",
          question:
            "A 75-year-old man with the diagnosis of Dementia has been cared for by his wife for 5 years. For the past 2 years he has not spoken and incontinent of urine and feces. During the last month he has changed from being plaid and easygoing to agitated and aggressive. He is admitted to a Psychiatric hospital for treatment with Psychopharmacology. Which is the priority nursing care while this client is in the psychiatric facility?",
          choices: [
            "managing his behavior",
            "preventing further deterioration",
            "focusing on the needs of the wife",
            "establishing on the needs of the wife",
          ],
          answer: 0,
          rationale: "Managing behavior is the priority for an agitated, aggressive patient.",
        },
        {
          id: "np5_q80",
          question:
            "The ICU nurse assigned to a 60-year old acutely ill client with Parkinson's disease who was hospitalized frequently. The initial confinement was due to electrolyte imbalance. The following confinement was due to injury sustained from fall, he became to have incontinent of stools that further lead to development of skin irritation and breakdown. Currently he was admitted due to respiratory infection. The review of literature does not only include published research studies but also theory. In this case which theory is least related to the study?",
          choices: [
            "Neuman's system model",
            "Lazarus' theory of stress and coping",
            "Nightingale's environmental theory",
            "Roy's theory of adaptation",
          ],
          answer: 1,
          rationale: "Lazarus' theory is least related to the case described.",
        },
        {
          id: "np5_q81",
          question:
            "Related literature included case situations similar to the case of the client. The nurse is interested in gaining further knowledge that can help the client at risk for fecal incontinence. The nurse should use which of the following methods to strengthen this report?",
          choices: [
            "Historical research method",
            "Qualitative research method",
            "Experimental research method",
            "Quantitative research method",
          ],
          answer: 1,
          rationale:
            "Qualitative research methods are appropriate for understanding patient experiences.",
        },
        {
          id: "np5_q82",
          question:
            "The patient also reports multiple lumbar muscle strains, thus is also looking at using alternative therapies to reduce the pain. The client seeks advice from the nurse as to what type of alternative therapy would provide the best pain relief. How should the nurse respond?",
          choices: [
            '"I have seen many individuals with your type of pain be relieved of pain through the use of acupuncture."',
            '"These types of therapies are more than just therapies; they are really a mind over matter type of event or game."',
            '"Some of my other clients swear by magnet therapy to reduce pain as it is very small and very easy to use."',
            '"You need to choose the alternative therapy that is right for you based on research that supports the intervention."',
          ],
          answer: 3,
          rationale: "The nurse should recommend choosing therapy based on research evidence.",
        },
        {
          id: "np5_q83",
          question:
            "While the nurse was able to identify the cases that were studied, it is important to understand the phenomenological experience of the client. This approach includes the following except:",
          choices: [
            "Exploring the idea expressed by the person",
            "Getting the whole picture of fecal incontinence and its associated factors",
            "Focusing interview on fecal incontinence",
            "Interviewing and using of questionnaire on client's responses to his situation",
          ],
          answer: 2,
          rationale:
            "Focusing interview solely on fecal incontinence is too narrow for phenomenological approach.",
        },
        {
          id: "np5_q84",
          question:
            "Which of the following can the nurse use in protecting the safety of the subjects undergoing the research study?",
          choices: [
            "i. Code for Nurses\nii. Nightingale's pledge\niii. Patient's Bill of Rights\niv. Human Rights Guidelines",
            "1, 2, 3, 4",
            "1, 3",
            "1, 2",
            "3 only",
          ],
          answer: 1,
          rationale: "Code for Nurses and Patient's Bill of Rights protect research subjects.",
        },
        {
          id: "np5_q85",
          question:
            "In a Nursing Practice you are directly involved in conducting a comprehensive physical assessment especially to older clients with sensory limitations. The client with head injury is having problems with several sensory functions. Nurse Ymir should understand that the structure that acts as a relay center for sensory impulses is the:",
          choices: ["thalamus", "cerebellum", "hypothalamus", "medulla oblongata"],
          answer: 0,
          rationale: "The thalamus acts as the relay center for sensory impulses.",
        },
        {
          id: "np5_q86",
          question:
            "When formulating nursing care plans for older adults, Nurse Ymir should include special measures to accommodate for age-related sensory losses such as:",
          choices: [
            "difficulty in swallowing",
            "increased sensitivity to heat",
            "diminished sensation of pain",
            "heightened response to stimuli",
          ],
          answer: 2,
          rationale: "Diminished pain sensation is an age-related sensory loss.",
        },
        {
          id: "np5_q87",
          question:
            "After a brain attack, a client remains unresponsive to sensory stimulation. Nurse Ymir understands general sensations such as heat, cold, pain, and touch are registered in the:",
          choices: ["frontal lobe", "parietal lobe", "occipital lobe", "temporal lobe"],
          answer: 1,
          rationale: "The parietal lobe registers general sensations.",
        },
        {
          id: "np5_q88",
          question: "Visual Acuity declines with age. Presbyopia is a progressive decline in:",
          choices: [
            "Distinguishing between blues and greens and among pastel shades",
            "Ability to see in darkness",
            "The ability of the eyes to accommodate for close detailed work",
            "Adaptation to abrupt changes from dark areas to light areas",
          ],
          answer: 2,
          rationale:
            "Presbyopia is the progressive decline in the ability to accommodate for close work.",
        },
        {
          id: "np5_q89",
          question:
            "The novice nurse who is administering a beta blocker asks the Senior Staff Nurse about its effect on the Autonomic Nervous System. When formulating a response the nurse should understand which common misconception about the Autonomic Nervous System?",
          choices: [
            "both sympathetic and parasympathetic impulses continually affect most visceral effectors",
            "the autonomic nervous systems is regulated by impulses from the hypothalamus and other parts of the brain",
            "sympathetic impulses stimulate while parasympathetic impulses inhibit the functioning of any visceral effector",
            "visceral effectors receive impulses only via autonomic neurons",
          ],
          answer: 2,
          rationale:
            "It is a misconception that sympathetic always stimulates and parasympathetic always inhibits.",
        },
        {
          id: "np5_q90",
          question:
            "Poppy a Psychiatric Nurse responds in a variety setting to different clients with Personality disorders. The Psychiatrist orders 'Restraints PRN' for a client who has a history of violent behavior. Nurse Poppy should:",
          choices: [
            "Utilize the restraint order if the client begins to act-out",
            "Ask the psychiatrist to clarify the type of restraint order",
            "Ensure that the entire staff is aware of the restraint order",
            "Recognize that PRN orders for restraints are unacceptable",
          ],
          answer: 3,
          rationale: "PRN orders for restraints are unacceptable; specific orders are required.",
        },
        {
          id: "np5_q91",
          question:
            "Strict toilet and too early training to a toddler child will cause problems in personality development because at this age a child is learning to:",
          choices: [
            "Satisfy own needs",
            "Identify own needs",
            "Satisfy parents' needs",
            "Live up to society's expectations",
          ],
          answer: 2,
          rationale: "The toddler is learning to satisfy parents' needs during toilet training.",
        },
        {
          id: "np5_q92",
          question:
            "The nurse encourages a client to join a self-helping group after being discharged from a Mental health facility. The purpose of having people work in a group is to provide:",
          choices: ["Support", "Confrontation", "Psychotherapy", "Self-awareness"],
          answer: 0,
          rationale: "Self-help groups provide support.",
        },
        {
          id: "np5_q93",
          question:
            "As Depression begins to lift, a client is asked to join a small discussion group that meets every evening on the unit. The client is reluctant to join because, 'I have nothing to talk about.' What is the best response by the nurse?",
          choices: [
            '"Maybe tomorrow you will feel more like talking."',
            '"Could you start off by talking about your family?"',
            '"A person like you has a great deal to offer the group."',
            '"You feel you will not be accepted unless you have something to say?"',
          ],
          answer: 3,
          rationale: "Reflecting the client's feelings validates their concern.",
        },
        {
          id: "np5_q94",
          question:
            "A client on the Psychiatric unit asks Nurse Poppy about Psychiatric Advance Directives (PAD). The nurse explains that these advance directives:",
          choices: [
            "Make the appointment of a surrogate decision maker unnecessary",
            "Permit the client to dictate what treatments will be given during future hospitalization",
            "Eliminate the need for involuntary admissions when the client is a threat to self or others",
            "Allow the client, while having the capacity, to consent or refuse potential psychiatric treatments",
          ],
          answer: 3,
          rationale:
            "PAD allows clients to consent or refuse psychiatric treatments in the event of a future crisis.",
        },
        {
          id: "np5_q95",
          question:
            "The fundamental assumption of theory of life cycle theories is that development occurs in successive stages. The different life cycle theories try to explain personality development as well as development of Psychiatric disorders. The following questions refer to this situation. The nurse understands that problems with dependence versus independence develop during the stage of growth and development known as:",
          choices: ["Infancy", "School age", "Toddlerhood", "Preschool age"],
          answer: 2,
          rationale: "Toddlerhood is the stage where dependence vs. independence issues develop.",
        },
        {
          id: "np5_q96",
          question:
            "When planning to teach about the stages of growth and development, what stage does the nurse indicate as basically concerned with role identification?",
          choices: ["Oral stage", "Genital stage", "Oedipal stage", "Latency stage"],
          answer: 2,
          rationale: "The Oedipal stage is concerned with role identification.",
        },
        {
          id: "np5_q97",
          question:
            "The nurse understands that Freud's phallic stage of psychosexual development, which compares with Erikson's psychosocial phase of initiative versus guilt, is seen best at:",
          choices: ["adolescent", "6 to 12 years", "3 to 5 1/2 years", "birth to 1 year"],
          answer: 2,
          rationale:
            "The phallic stage (Freud) corresponds to Erikson's initiative vs. guilt, seen at 3-5.5 years.",
        },
        {
          id: "np5_q98",
          question:
            "A 3 year old boy was brought to a Pediatric clinic for indifferent behavior. About a month after their toddler is diagnosed as moderately retarded, the parents discuss the toddler's future, reflecting specifically on plans for their child's independent functioning. The nurse recognizes that the parents:",
          choices: [
            "Are using denial",
            "Accept the child's diagnoses",
            "Are using intellectualization",
            "Are planning unrealistic goals",
          ],
          answer: 1,
          rationale: "The parents are accepting the child's diagnosis.",
        },
        {
          id: "np5_q99",
          question:
            "In the clinic, the school health nurse is conducting a vision screening to incoming Grade 1 and Grade 4 students. One of the students was able to read at 10 ft, what a normal eye sees at 20 feet. She documents this finding as:",
          choices: ["10/20", "20/10", "2/1", "1/2"],
          answer: 1,
          rationale: "20/10 means the student can read at 20 ft what a normal eye sees at 10 ft.",
        },
        {
          id: "np5_q100",
          question:
            "A student was not able to read the letters in the 20/20 level. How should the nurse proceed with the visual assessment?",
          choices: [
            "Document this finding as visual impairment.",
            "Allow the student to come nearer at a distance of 10 ft.",
            "Ask the student to squint, and try reading the level again.",
            "Remind the student to avoid guessing at letters to have an accurate finding.",
          ],
          answer: 1,
          rationale: "Allow the student to come nearer to 10 ft if 20/20 cannot be read.",
        },
      ],
    },
  ],
};