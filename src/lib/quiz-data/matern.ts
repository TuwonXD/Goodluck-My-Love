import type { Subject } from "./types";

export const maternSubject: Subject = {
  id: "matern",
  name: "Maternal & Child Nursing",
  short: "Maternal",
  description: "Pregnancy, labor, postpartum, newborn and pediatric nursing care.",
  banks: [
    {
      id: "matern-practice-test-ii-maternal-and-child-heal",
      title: "PRACTICE TEST - Maternal and Child Health",
      description: "50 questions from the PNLE reviewer.",
      questions: [
        {
          id: "q1",
          question:
            "For the client who is using oral contraceptives, the nurse informs the client about the need to take the pill at the same time each day to accomplish which of the following?",
          choices: [
            "Decrease the incidence of nausea",
            "Maintain hormonal levels",
            "Reduce side effects",
            "Prevent drug interactions",
          ],
          answer: 1,
          rationale:
            "Regular timely ingestion of oral contraceptives is necessary to maintain hormonal levels of the drugs to suppress the action of the hypothalamus and anterior pituitary leading to inappropriate secretion of FSH and LH. Therefore, follicles do not mature, ovulation is inhibited, and pregnancy is prevented. The estrogen content of the oral site contraceptive may cause the nausea, regardless of when the pill is taken. Side effects and drug interactions may occur with oral contraceptives regardless of the time the pill is taken.",
        },
        {
          id: "q2",
          question:
            "When teaching a client about contraception. Which of the following would the nurse include as the most effective method for preventing sexually transmitted infections?",
          choices: ["Spermicides", "Diaphragm", "Condoms", "Vasectomy"],
          answer: 2,
          rationale:
            "Condoms, when used correctly and consistently, are the most effective contraceptive method or barrier against bacterial and viral sexually transmitted infections. Although spermicides kill sperm, they do not provide reliable protection against the spread of sexually transmitted infections, especially intracellular organisms such as HIV. Insertion and removal of the diaphragm along with the use of the spermicides may cause vaginal irritations, which could place the client at risk for infection transmission. Male sterilization eliminates spermatozoa from the ejaculate, but it does not eliminate bacterial and/or viral microorganisms that can cause sexually transmitted infections.",
        },
        {
          id: "q3",
          question:
            "When preparing a woman who is 2 days postpartum for discharge, recommendations for which of the following contraceptive methods would be avoided?",
          choices: ["Diaphragm", "Female condom", "Oral contraceptives", "Rhythm method"],
          answer: 0,
          rationale:
            "The diaphragm must be fitted individually to ensure effectiveness. Because of the changes to the reproductive structures during pregnancy and following delivery, the diaphragm must be refitted, usually at the 6 weeks’ examination following childbirth or after a weight loss of 15 lbs or more. In addition, for maximum effectiveness, spermicidal jelly should be placed in the dome and around the rim. However, spermicidal jelly should not be inserted into the vagina until involution is completed at approximately 6 weeks. Use of a female condom protects the reproductive system from the introduction of semen or spermicides into the vagina and may be used after childbirth. Oral contraceptives may be started within the first postpartum week to ensure suppression of ovulation. For the couple who has determined the female’s fertile period, using the rhythm method, avoidance of intercourse during this period, is safe and effective.",
        },
        {
          id: "q4",
          question:
            "For which of the following clients would the nurse expect that an intrauterine device would not be recommended?",
          choices: [
            "Woman over age 35",
            "Nulliparous woman",
            "Promiscuous young adult",
            "Postpartum client",
          ],
          answer: 2,
          rationale:
            "An IUD may increase the risk of pelvic inflammatory disease, especially in women with more than one sexual partner, because of the increased risk of sexually transmitted infections. An UID should not be used if the woman has an active or chronic pelvic infection, postpartum infection, endometrial hyperplasia or carcinoma, or uterine abnormalities. Age is not a factor in determining the risks associated with IUD use. Most IUD users are over the age of 30. Although there is a slightly higher risk for infertility in women who have never been pregnant, the IUD is an acceptable option as long as the riskbenefit ratio is discussed. IUDs may be inserted immediately after delivery, but this is not recommended because of the increased risk and rate of expulsion at this time.",
        },
        {
          id: "q5",
          question:
            "A client in her third trimester tells the nurse, “I’m constipated all the time!” Which of the following should the nurse recommend?",
          choices: [
            "Daily enemas",
            "Laxatives",
            "Increased fiber intake",
            "Decreased fluid intake",
          ],
          answer: 2,
          rationale:
            "During the third trimester, the enlarging uterus places pressure on the intestines. This coupled with the effect of hormones on smooth muscle relaxation causes decreased intestinal motility (peristalsis). Increasing fiber in the diet will help fecal matter pass more quickly through the intestinal tract, thus decreasing the amount of water that is absorbed. As a result, stool is softer and easier to pass. Enemas could precipitate preterm labor and/or electrolyte loss and should be avoided. Laxatives may cause preterm labor by stimulating peristalsis and may interfere with the absorption of nutrients. Use for more than 1 week can also lead to laxative dependency. Liquid in the diet helps provide a semisolid, soft consistency to the stool. Eight to ten glasses of fluid per day are essential to maintain hydration and promote stool evacuation.",
        },
        {
          id: "q6",
          question:
            "Which of the following would the nurse use as the basis for the teaching plan when caring for a pregnant teenager concerned about gaining too much weight during pregnancy?",
          choices: [
            "10 pounds per trimester",
            "1 pound per week for 40 weeks",
            "½ pound per week for 40 weeks",
            "A total gain of 25 to 30 pounds 162",
          ],
          answer: 3,
          rationale:
            "To ensure adequate fetal growth and development during the 40 weeks of a pregnancy, a total weight gain 25 to 30 pounds is recommended: 1.5 pounds in the first 10 weeks; 9 pounds by 30 weeks; and 27.5 pounds by 40 weeks. The pregnant woman should gain less weight in the first and second trimester than in the third. During the first trimester, the client should only gain 1.5 pounds in the first 10 weeks, not 1 pound per week. A weight gain of ½ pound per week would be 20 pounds for the total pregnancy, less than the recommended amount.",
        },
        {
          id: "q7",
          question:
            "The client tells the nurse that her last menstrual period started on January 14 and ended on January 20. Using Nagele’s rule, the nurse determines her EDD to be which of the following?",
          choices: ["September 27", "October 21", "November 7", "December 27"],
          answer: 1,
          rationale:
            "To calculate the EDD by Nagele’s rule, add 7 days to the first day of the last menstrual period and count back 3 months, changing the year appropriately. To obtain a date of September 27, 7 days have been added to the last day of the LMP (rather than the first day of the LMP), plus 4 months (instead of 3 months) were counted back. To obtain the date of November 7, 7 days have been subtracted (instead of added) from the first day of LMP plus November indicates counting back 2 months (instead of 3 months) from January. To obtain the date of December 27, 7 days were added to the last day of the LMP (rather than the first day of the LMP) and December indicates counting back only 1 month (instead of 3 months) from January.",
        },
        {
          id: "q8",
          question:
            "When taking an obstetrical history on a pregnant client who states, “I had a son born at 38 weeks gestation, a daughter born at 30 weeks gestation and I lost a baby at about 8 weeks,” the nurse should record her obstetrical history as which of the following?",
          choices: ["G2 T2 P0 A0 L2", "G3 T1 P1 A0 L2", "G3 T2 P0 A0 L2", "G4 T1 P1 A1 L2"],
          answer: 3,
          rationale:
            "The client has been pregnant four times, including current pregnancy (G). Birth at 38 weeks’ gestation is considered full term (T), while birth form 20 weeks to 38 weeks is considered preterm (P). A spontaneous abortion occurred at 8 weeks (A). She has two living children (L).",
        },
        {
          id: "q9",
          question:
            "When preparing to listen to the fetal heart rate at 12 weeks’ gestation, the nurse would use which of the following?",
          choices: [
            "Stethoscope placed midline at the umbilicus",
            "Doppler placed midline at the suprapubic region",
            "Fetoscope placed midway between the umbilicus and the xiphoid process",
            "External electronic fetal monitor placed at the umbilicus",
          ],
          answer: 1,
          rationale:
            "At 12 weeks gestation, the uterus rises out of the pelvis and is palpable above the symphysis pubis. The Doppler intensifies the sound of the fetal pulse rate so it is audible. The uterus has merely risen out of the pelvis into the abdominal cavity and is not at the level of the umbilicus. The fetal heart rate at this age is not audible with a stethoscope. The uterus at 12 weeks is just above the symphysis pubis in the abdominal cavity, not midway between the umbilicus and the xiphoid process. At 12 weeks the FHR would be difficult to auscultate with a fetoscope. Although the external electronic fetal monitor would project the FHR, the uterus has not risen to the umbilicus at 12 weeks.",
        },
        {
          id: "q10",
          question:
            "When developing a plan of care for a client newly diagnosed with gestational diabetes, which of the following instructions would be the priority?",
          choices: ["Dietary intake", "Medication", "Exercise", "Glucose monitoring"],
          answer: 0,
          rationale:
            "Although all of the choices are important in the management of diabetes, diet therapy is the mainstay of the treatment plan and should always be the priority. Women diagnosed with gestational diabetes generally need only diet therapy without medication to control their blood sugar levels. Exercise, is important for all pregnant women and especially for diabetic women, because it burns up glucose, thus decreasing blood sugar. However, dietary intake, not exercise, is the priority. All pregnant women with diabetes should have periodic monitoring of serum glucose. However, those with gestational diabetes generally do not need daily glucose monitoring. The standard of care recommends a fasting and 2- hour postprandial blood sugar level every 2 weeks.",
        },
        {
          id: "q11",
          question:
            "A client at 24 weeks gestation has gained 6 pounds in 4 weeks. Which of the following would be the priority when assessing the client?",
          choices: ["Glucosuria", "Depression", "Hand/face edema", "Dietary intake"],
          answer: 2,
          rationale:
            "After 20 weeks’ gestation, when there is a rapid weight gain, preeclampsia should be 168 suspected, which may be caused by fluid retention manifested by edema, especially of the hands and face. The three classic signs of preeclampsia are hypertension, edema, and proteinuria. Although urine is checked for glucose at each clinic visit, this is not the priority. Depression may cause either anorexia or excessive food intake, leading to excessive weight gain or loss. This is not, however, the priority consideration at this time. Weight gain thought to be caused by excessive food intake would require a 24-hour diet recall. However, excessive intake would not be the primary consideration for this client at this time.",
        },
        {
          id: "q12",
          question:
            "A client 12 weeks’ pregnant come to the emergency department with abdominal 163 cramping and moderate vaginal bleeding. Speculum examination reveals 2 to 3 cms cervical dilation. The nurse would document these findings as which of the following?",
          choices: [
            "Threatened abortion",
            "Imminent abortion",
            "Complete abortion",
            "Missed abortion a. A dark red discharge on a 2-day postpartum client b. A pink to brownish discharge on a client who is 5 days postpartum c. Almost colorless to creamy discharge on a client 2 weeks after delivery d. A bright red discharge 5 days after delivery",
          ],
          answer: 1,
          rationale:
            "Cramping and vaginal bleeding coupled with cervical dilation signifies that termination of the pregnancy is inevitable and cannot be prevented. Thus, the nurse would document an imminent abortion. In a threatened abortion, cramping and vaginal bleeding are present, but there is no cervical dilation. The symptoms may subside or progress to abortion. In a complete abortion all the products of conception are expelled. A missed abortion is early fetal intrauterine death without expulsion of the products of conception.",
        },
        {
          id: "q13",
          question:
            "Which of the following would be the priority nursing diagnosis for a client with an ectopic pregnancy?",
          choices: ["Risk for infection", "Pain", "Knowledge Deficit", "Anticipatory Grieving"],
          answer: 1,
          rationale:
            "For the client with an ectopic pregnancy, lower abdominal pain, usually unilateral, is the primary symptom. Thus, pain is the priority. Although the potential for infection is always present, the risk is low in ectopic pregnancy because pathogenic microorganisms have not been introduced from external sources. The client may have a limited knowledge of the pathology and treatment of the condition and will most likely experience grieving, but this is not the priority at this time.",
        },
        {
          id: "q14",
          question:
            "A postpartum client has a temperature of 101.4ºF, with a uterus that is tender when palpated, remains unusually large, and not descending as normally expected. Which of the following should the nurse assess next?",
          choices: ["Lochia", "Breasts", "Incision", "Urine"],
          answer: 0,
          rationale:
            "The data suggests an infection of the endometrial lining of the uterus. The lochia may be decreased or copious, dark brown in appearance, and foul smelling, providing further evidence of a possible infection. All the client’s data indicate a uterine problem, not a breast problem. Typically, transient fever, usually 101ºF, may be present with breast engorgement. Symptoms of mastitis include influenza-like manifestations. Localized infection of an episiotomy or C-section incision rarely causes systemic symptoms, and uterine involution would not be affected. The client data do not include dysuria, frequency, or urgency, symptoms of urinary tract infections, which would necessitate assessing the client’s urine.",
        },
        {
          id: "q15",
          question:
            "Before assessing the postpartum client’s uterus for firmness and position in relation to the umbilicus and midline, which of the following should the nurse do first?",
          choices: [
            "Assess the vital signs",
            "Administer analgesia",
            "Ambulate her in the hall",
            "Assist her to urinate",
          ],
          answer: 3,
          rationale:
            "Before uterine assessment is performed, it is essential that the woman empty her bladder. A full bladder will interfere with the accuracy of the assessment by elevating the uterus and displacing to the side of the midline. Vital sign assessment is not necessary unless an abnormality in uterine assessment is identified. Uterine assessment should not cause acute pain that requires administration of analgesia. Ambulating the client is an essential component of postpartum care, but is not necessary prior to assessment of the uterus.",
        },
        {
          id: "q16",
          question:
            "Which of the following should the nurse do when a primipara who is lactating tells the nurse that she has sore nipples?",
          choices: [
            "Tell her to breast feed more frequently",
            "Administer a narcotic before breast feeding",
            "Encourage her to wear a nursing brassiere",
            "Use soap and water to clean the nipples",
          ],
          answer: 0,
          rationale:
            "Feeding more frequently, about every 2 hours, will decrease the infant’s frantic, vigorous sucking from hunger and will decrease breast engorgement, soften the breast, and promote 169 ease of correct latching-on for feeding. Narcotics administered prior to breast feeding are passed through the breast milk to the infant, causing excessive sleepiness. Nipple soreness is not severe enough to warrant narcotic analgesia. All postpartum clients, especially lactating mothers, should wear a supportive brassiere with wide cotton straps. This does not, however, prevent or reduce nipple soreness. Soaps are drying to the skin of the nipples and should not be used on the breasts of lactating mothers. Dry nipple skin predisposes to cracks and fissures, which can become sore and painful.",
        },
        {
          id: "q17",
          question:
            "The nurse assesses the vital signs of a client, 4 hours’ postpartum that are as follows: BP 90/60; temperature 100.4ºF; pulse 100 weak, thready; R 20 per minute. Which of the following should the nurse do first?",
          choices: [
            "Report the temperature to the physician",
            "Recheck the blood pressure with another cuff",
            "Assess the uterus for firmness and position",
            "Determine the amount of lochia",
          ],
          answer: 3,
          rationale:
            "A weak, thready pulse elevated to 100 BPM may indicate impending hemorrhagic shock. An increased pulse is a compensatory mechanism of the body in response to decreased fluid volume. Thus, the nurse should check the amount of lochia present. Temperatures up to 100.48F in the first 24 hours after birth are related to the dehydrating effects of labor and are considered normal. Although rechecking the blood pressure may be a correct choice of action, it is not the first action that should be implemented in light of the other data. The data indicate a potential impending hemorrhage. Assessing the uterus for firmness and position in relation to the umbilicus and midline is important, but the nurse should check the extent of vaginal bleeding first. Then it would be appropriate to check the uterus, which may be a possible cause of the hemorrhage.",
        },
        {
          id: "q18",
          question:
            "The nurse assesses the postpartum vaginal discharge (lochia) on four clients. Which of the following assessments would warrant notification of the physician? 19. Which of the following is the priority focus of nursing practice with the current early postpartum discharge?",
          choices: [
            "Promoting comfort and restoration of health",
            "Exploring the emotional status of the family",
            "Facilitating safe and effective self-and newborn care",
            "Teaching about the importance of family planning",
          ],
          answer: 3,
          rationale:
            "Any bright red vaginal discharge would be considered abnormal, but especially 5 days after delivery, when the lochia is typically pink to brownish. Lochia rubra, a dark red discharge, is present for 2 to 3 days after delivery. Bright red vaginal bleeding at this time suggests late postpartum hemorrhage, which occurs after the first 24 hours following delivery and is generally caused by retained placental fragments or bleeding disorders. Lochia rubra is the normal dark red discharge occurring in the first 2 to 3 days after delivery, containing epithelial cells, erythrocyes, leukocytes and decidua. Lochia serosa is a pink to brownish serosanguineous discharge occurring from 3 to 10 days after delivery that contains decidua, erythrocytes, leukocytes, cervical mucus, and microorganisms. Lochia alba is an almost colorless to yellowish discharge occurring from 10 days to 3 weeks after delivery and containing leukocytes, decidua, epithelial cells, fat, cervical mucus, cholesterol crystals, and bacteria.",
        },
        {
          id: "q19",
          question:
            "Which of the following actions would be least effective in maintaining a neutral thermal environment for the newborn?",
          choices: [
            "Placing infant under radiant warmer after bathing",
            "Covering the scale with a warmed blanket prior to weighing",
            "Placing crib close to nursery window for family viewing",
            "Covering the infant’s head with a knit stockinette",
          ],
          answer: 2,
          rationale:
            "Heat loss by radiation occurs when the infant’s crib is placed too near cold walls or windows. Thus placing the newborn’s crib close to the viewing window would be least effective. Body heat is lost through evaporation during bathing. Placing the infant under the radiant warmer after bathing will assist the infant to be rewarmed. Covering the scale with a warmed blanket prior to weighing prevents heat loss through conduction. A knit cap prevents heat loss from the head a large head, a large body surface area of the newborn’s body.",
        },
        {
          id: "q20",
          question:
            "A newborn who has an asymmetrical Moro reflex response should be further assessed for which of the following?",
          choices: [
            "Talipes equinovarus",
            "Fractured clavicle",
            "Congenital hypothyroidism",
            "Increased intracranial pressure",
          ],
          answer: 1,
          rationale:
            "A fractured clavicle would prevent the normal Moro response of symmetrical sequential extension and abduction of the arms followed by flexion and adduction. In talipes equinovarus (clubfoot) the foot is turned medially, and in plantar flexion, with the heel elevated. The feet are not involved with the Moro reflex. Hypothyroiddism has no effect on the primitive reflexes. Absence of the Moror reflex is the most significant single indicator of central nervous system status, but it is not a sign of increased intracranial pressure.",
        },
        {
          id: "q21",
          question:
            "During the first 4 hours after a male circumcision, assessing for which of the following is the priority?",
          choices: ["Infection", "Hemorrhage", "Discomfort", "Dehydration"],
          answer: 1,
          rationale:
            "Hemorrhage is a potential risk following any surgical procedure. Although the infant has been given vitamin K to facilitate clotting, the prophylactic dose is often not sufficient to prevent bleeding. Although infection is a possibility, signs will not appear within 4 hours after the surgical procedure. The primary discomfort of circumcision occurs during the surgical procedure, not afterward. Although feedings are withheld prior to the circumcision, the chances of dehydration are minimal.",
        },
        {
          id: "q22",
          question:
            "The mother asks the nurse. “What’s wrong with my son’s breasts? Why are they so enlarged?” Whish of the following would be the best response by the nurse?",
          choices: [
            "“The breast tissue is inflamed from the trauma experienced with birth”",
            "“A decrease in material hormones present before birth causes enlargement,”",
            "“You should discuss this with your doctor. It could be a malignancy”",
            "“The tissue has hypertrophied while the baby was in the uterus”",
          ],
          answer: 1,
          rationale:
            "The presence of excessive estrogen and progesterone in the maternal- fetal blood followed by prompt withdrawal at birth precipitates breast engorgement, which will spontaneously resolve in 4 to 5 days after birth. The trauma of the birth process does not cause inflammation of the newborn’s breast tissue. Newborns do not have breast malignancy. This reply by the nurse would cause the mother to have undue anxiety. Breast tissue does not hypertrophy in the fetus or newborns.",
        },
        {
          id: "q23",
          question:
            "Immediately after birth the nurse notes the following on a male newborn: respirations 78; apical hearth rate 160 BPM, nostril flaring; mild intercostal retractions; and grunting at the end of expiration. Which of the following should the nurse do?",
          choices: [
            "Call the assessment data to the physician’s attention",
            "Start oxygen per nasal cannula at 2 L/min.",
            "Suction the infant’s mouth and nares",
            "Recognize this as normal first period of reactivity",
          ],
          answer: 3,
          rationale:
            "The first 15 minutes to 1 hour after birth is the first period of reactivity involving respiratory and circulatory adaptation to extrauterine life. The data given reflect the normal changes during this time period. The infant’s assessment data reflect normal adaptation. Thus, the physician does not need to be notified and oxygen is not needed. The data do not indicate the presence of choking, gagging or coughing, which are signs of excessive secretions. Suctioning is not necessary.",
        },
        {
          id: "q24",
          question:
            "The nurse hears a mother telling a friend on the telephone about umbilical cord care. Which of the following statements by the mother indicates effective teaching?",
          choices: [
            "“Daily soap and water cleansing is best”",
            "‘Alcohol helps it dry and kills germs”",
            "“An antibiotic ointment applied daily prevents infection”",
            "“He can have a tub bath each day”",
          ],
          answer: 1,
          rationale:
            "Application of 70% isopropyl alcohol to the cord minimizes microorganisms (germicidal) and promotes drying. The cord should be kept dry until it falls off and the stump has healed. Antibiotic ointment should only be used to treat an infection, not as a prophylaxis. Infants should not be submerged in a tub of water until the cord falls off and the stump has completely healed.",
        },
        {
          id: "q25",
          question:
            "A newborn weighing 3000 grams and feeding every 4 hours needs 120 calories/kg of body weight every 24 hours for proper growth and development. How many ounces of 20 cal/oz formula should this newborn receive at each feeding to meet nutritional needs?",
          choices: ["2 ounces 164", "3 ounces", "4 ounces", "6 ounces"],
          answer: 1,
          rationale:
            "To determine the amount of formula needed, do the following mathematical calculation. 3 kg x 120 cal/kg per day = 360 calories/day feeding q 4 hours = 6 feedings per day = 60 calories per feeding: 60 calories per feeding; 60 calories per feeding with formula 20 cal/oz = 3 ounces per feeding. Based on the calculation. 2, 4 or 6 ounces are incorrect.",
        },
        {
          id: "q26",
          question:
            "The postterm neonate with meconium-stained amniotic fluid needs care designed to especially monitor for which of the following?",
          choices: [
            "Respiratory problems",
            "Gastrointestinal problems",
            "Integumentary problems",
            "Elimination problems",
          ],
          answer: 0,
          rationale:
            "Intrauterine anoxia may cause relaxation of the anal sphincter and emptying of meconium into the amniotic fluid. At birth some of the meconium fluid may be aspirated, causing mechanical obstruction or chemical pneumonitis. The infant is not at increased risk 170 for gastrointestinal problems. Even though the skin is stained with meconium, it is noninfectious (sterile) and nonirritating. The postterm meconium- stained infant is not at additional risk for bowel or urinary problems.",
        },
        {
          id: "q27",
          question:
            "When measuring a client’s fundal height, which of the following techniques denotes the correct method of measurement used by the nurse?",
          choices: [
            "From the xiphoid process to the umbilicus",
            "From the symphysis pubis to the xiphoid process",
            "From the symphysis pubis to the fundus",
            "From the fundus to the umbilicus",
          ],
          answer: 2,
          rationale:
            "The nurse should use a nonelastic, flexible, paper measuring tape, placing the zero point on the superior border of the symphysis pubis and stretching the tape across the abdomen at the midline to the top of the fundus. The xiphoid and umbilicus are not appropriate landmarks to use when measuring the height of the fundus (McDonald’s measurement).",
        },
        {
          id: "q28",
          question:
            "A client with severe preeclampsia is admitted with of BP 160/110, proteinuria, and severe pitting edema. Which of the following would be most important to include in the client’s plan of care?",
          choices: [
            "Daily weights",
            "Seizure precautions",
            "Right lateral positioning",
            "Stress reduction",
          ],
          answer: 1,
          rationale:
            "Women hospitalized with severe preeclampsia need decreased CNS stimulation to prevent a seizure. Seizure precautions provide environmental safety should a seizure occur. Because of edema, daily weight is important but not the priority. Preclampsia causes vasospasm and therefore can reduce utero-placental perfusion. The client should be placed on her left side to maximize blood flow, reduce blood pressure, and promote diuresis. Interventions to reduce stress and anxiety are very important to facilitate coping and a sense of control, but seizure precautions are the priority.",
        },
        {
          id: "q29",
          question:
            "A postpartum primipara asks the nurse, “When can we have sexual intercourse again?” Which of the following would be the nurse’s best response?",
          choices: [
            "“Anytime you both want to.”",
            "“As soon as choose a contraceptive method.”",
            "“When the discharge has stopped and the incision is healed.”",
            "“After your 6 weeks examination.”",
          ],
          answer: 2,
          rationale:
            "Cessation of the lochial discharge signifies healing of the endometrium. Risk of hemorrhage and infection are minimal 3 weeks after a normal vaginal delivery. Telling the client anytime is inappropriate because this response does not provide the client with the specific information she is requesting. Choice of a contraceptive method is important, but not the specific criteria for safe resumption of sexual activity. Culturally, the 6- weeks’ examination has been used as the time frame for resuming sexual activity, but it may be resumed earlier.",
        },
        {
          id: "q30",
          question:
            "When preparing to administer the vitamin K injection to a neonate, the nurse would select which of the following sites as appropriate for the injection?",
          choices: [
            "Deltoid muscle",
            "Anterior femoris muscle",
            "Vastus lateralis muscle",
            "Gluteus maximus muscle 165",
          ],
          answer: 2,
          rationale:
            "The middle third of the vastus lateralis is the preferred injection site for vitamin K administration because it is free of blood vessels and nerves and is large enough to absorb the medication. The deltoid muscle of a newborn is not large enough for a newborn IM injection. Injections into this muscle in a small child might cause damage to the radial nerve. The anterior femoris muscle is the next safest muscle to use in a newborn but is not the safest. Because of the proximity of the sciatic nerve, the gluteus maximus muscle should not be until the child has been walking 2 years.",
        },
        {
          id: "q31",
          question:
            "When performing a pelvic examination, the nurse observes a red swollen area on the right side of the vaginal orifice. The nurse would document this as enlargement of which of the following?",
          choices: ["Clitoris", "Parotid gland", "Skene’s gland", "Bartholin’s gland"],
          answer: 3,
          rationale:
            "Bartholin’s glands are the glands on either side of the vaginal orifice. The clitoris is female 171 erectile tissue found in the perineal area above the urethra. The parotid glands are open into the mouth. Skene’s glands open into the posterior wall of the female urinary meatus.",
        },
        {
          id: "q32",
          question:
            "To differentiate as a female, the hormonal stimulation of the embryo that must occur involves which of the following?",
          choices: [
            "Increase in maternal estrogen secretion",
            "Decrease in maternal androgen secretion",
            "Secretion of androgen by the fetal gonad",
            "Secretion of estrogen by the fetal gonad",
          ],
          answer: 3,
          rationale:
            "The fetal gonad must secrete estrogen for the embryo to differentiate as a female. An increase in maternal estrogen secretion does not affect differentiation of the embryo, and maternal estrogen secretion occurs in every pregnancy. Maternal androgen secretion remains the same as before pregnancy and does not affect differentiation. Secretion of androgen by the fetal gonad would produce a male fetus.",
        },
        {
          id: "q33",
          question:
            "A client at 8 weeks’ gestation calls complaining of slight nausea in the morning hours. Which of the following client interventions should the nurse question?",
          choices: [
            "Taking 1 teaspoon of bicarbonate of soda in an 8-ounce glass of water",
            "Eating a few low-sodium crackers before getting out of bed",
            "Avoiding the intake of liquids in the morning hours",
            "Eating six small meals a day instead of thee large meals",
          ],
          answer: 0,
          rationale:
            "Using bicarbonate would increase the amount of sodium ingested, which can cause complications. Eating low-sodium crackers would be appropriate. Since liquids can increase nausea avoiding them in the morning hours when nausea is usually the strongest is appropriate. Eating six small meals a day would keep the stomach full, which often decrease nausea.",
        },
        {
          id: "q34",
          question:
            "The nurse documents positive ballottement in the client’s prenatal record. The nurse understands that this indicates which of the following?",
          choices: [
            "Palpable contractions on the abdomen",
            "Passive movement of the unengaged fetus",
            "Fetal kicking felt by the client",
            "Enlargement and softening of the uterus",
          ],
          answer: 1,
          rationale:
            "Ballottement indicates passive movement of the unengaged fetus. Ballottement is not a contraction. Fetal kicking felt by the client represents quickening. Enlargement and softening of the uterus is known as Piskacek’s sign.",
        },
        {
          id: "q35",
          question:
            "During a pelvic exam the nurse notes a purpleblue tinge of the cervix. The nurse documents this as which of the following?",
          choices: ["Braxton-Hicks sign", "Chadwick’s sign", "Goodell’s sign", "McDonald’s sign"],
          answer: 1,
          rationale:
            "Chadwick’s sign refers to the purple-blue tinge of the cervix. Braxton Hicks contractions are painless contractions beginning around the 4th month. Goodell’s sign indicates softening of the cervix. Flexibility of the uterus against the cervix is known as McDonald’s sign.",
        },
        {
          id: "q36",
          question:
            "During a prenatal class, the nurse explains the rationale for breathing techniques during preparation for labor based on the understanding that breathing techniques are most important in achieving which of the following?",
          choices: [
            "Eliminate pain and give the expectant parents something to do",
            "Reduce the risk of fetal distress by increasing uteroplacental perfusion",
            "Facilitate relaxation, possibly reducing the perception of pain",
            "Eliminate pain so that less analgesia and anesthesia are needed",
          ],
          answer: 2,
          rationale:
            "Breathing techniques can raise the pain threshold and reduce the perception of pain. They also promote relaxation. Breathing techniques do not eliminate pain, but they can reduce it. Positioning, not breathing, increases uteroplacental perfusion.",
        },
        {
          id: "q37",
          question:
            "After 4 hours of active labor, the nurse notes that the contractions of a primigravida client are not strong enough to dilate the cervix. Which of the following would the nurse anticipate doing?",
          choices: [
            "Obtaining an order to begin IV oxytocin infusion",
            "Administering a light sedative to allow the patient to rest for several hour",
            "Preparing for a cesarean section for failure to progress",
            "Increasing the encouragement to the patient when pushing begins",
          ],
          answer: 0,
          rationale:
            "The client’s labor is hypotonic. The nurse should call the physical and obtain an order for an infusion of oxytocin, which will assist the uterus to contact more forcefully in an attempt to dilate the cervix. Administering light sedative would be done for hypertonic uterine contractions. Preparing for cesarean section is unnecessary at this time. Oxytocin would increase the uterine contractions and hopefully progress labor before a cesarean would be necessary. It is too early to anticipate client pushing with contractions.",
        },
        {
          id: "q38",
          question:
            "A multigravida at 38 weeks’ gestation is admitted with painless, bright red bleeding and mild contractions every 7 to 10 minutes. Which of the following assessments should be avoided?",
          choices: [
            "Maternal vital sign",
            "Fetal heart rate",
            "Contraction monitoring",
            "Cervical dilation",
          ],
          answer: 3,
          rationale:
            "The signs indicate placenta previa and vaginal exam to determine cervical dilation would not be done because it could cause hemorrhage. Assessing maternal vital signs can help determine maternal physiologic status. Fetal heart rate is important to assess fetal well-being and should be done. Monitoring the contractions will help evaluate the progress of labor.",
        },
        {
          id: "q39",
          question:
            "Which of the following would be the nurse’s most appropriate response to a client who asks why she must have a cesarean delivery if she has a complete placenta previa?",
          choices: [
            "“You will have to ask your physician when he returns.”",
            "“You need a cesarean to prevent hemorrhage.”",
            "“The placenta is covering most of your cervix.”",
            "“The placenta is covering the opening of the uterus and blocking your baby.”",
          ],
          answer: 3,
          rationale:
            "A complete placenta previa occurs when the placenta covers the opening of the uterus, thus blocking the passageway for the baby. This response explains what a complete previa is and the reason the baby cannot come out except by cesarean delivery. Telling the client to ask the physician is a poor response and would increase the patient’s anxiety. Although a cesarean would help to prevent hemorrhage, the statement does not explain why the hemorrhage could occur. With a complete previa, the placenta is covering the entire cervix, not just most of it.",
        },
        {
          id: "q40",
          question:
            "The nurse understands that the fetal head is in which of the following positions with a face presentation?",
          choices: [
            "Completely flexed",
            "Completely extended",
            "Partially extended",
            "Partially flexed",
          ],
          answer: 1,
          rationale:
            "With a face presentation, the head is completely extended. With a vertex presentation, the head is completely or partially flexed. With a brow (forehead) presentation, the head would be partially extended.",
        },
        {
          id: "q41",
          question:
            "With a fetus in the left-anterior breech presentation, the nurse would expect the fetal heart rate would be most audible in which of the following areas?",
          choices: [
            "Above the maternal umbilicus and to the right of midline",
            "In the lower-left maternal abdominal quadrant",
            "In the lower-right maternal abdominal quadrant",
            "Above the maternal umbilicus and to the left of midline",
          ],
          answer: 3,
          rationale:
            "With this presentation, the fetal upper torso and back face the left upper maternal abdominal wall. The fetal heart rate would be most audible above the maternal umbilicus and to the left of the middle. The other positions would be incorrect.",
        },
        {
          id: "q42",
          question:
            "The amniotic fluid of a client has a greenish tint. The nurse interprets this to be the result of which of the following?",
          choices: ["Lanugo", "Hydramnio", "Meconium", "Vernix"],
          answer: 2,
          rationale:
            "The greenish tint is due to the presence of meconium. Lanugo is the soft, downy hair on the shoulders and back of the fetus. Hydramnios represents excessive amniotic fluid. Vernix is the white, cheesy substance covering the fetus.",
        },
        {
          id: "q43",
          question:
            "A patient is in labor and has just been told she has a breech presentation. The nurse should be particularly alert for which of the following?",
          choices: ["Quickening", "Ophthalmia neonatorum", "Pica", "Prolapsed umbilical cord"],
          answer: 3,
          rationale:
            "In a breech position, because of the space between the presenting part and the cervix, prolapse of the umbilical cord is common. Quickening is the woman’s first perception of fetal movement. Ophthalmia neonatorum usually results from maternal gonorrhea and is conjunctivitis. Pica refers to the oral intake of nonfood substances.",
        },
        {
          id: "q44",
          question:
            "When describing dizygotic twins to a couple, on which of the following would the nurse base the explanation?",
          choices: [
            "Two ova fertilized by separate sperm",
            "Sharing of a common placenta",
            "Each ova with the same genotype",
            "Sharing of a common chorion",
          ],
          answer: 0,
          rationale:
            "Dizygotic (fraternal) twins involve two ova fertilized by separate sperm. Monozygotic (identical) twins involve a common placenta, same genotype, and common chorion.",
        },
        {
          id: "q45",
          question:
            "Which of the following refers to the single cell that reproduces itself after conception?",
          choices: ["Chromosome", "Blastocyst", "Zygote", "Trophoblast"],
          answer: 2,
          rationale:
            "The zygote is the single cell that reproduces itself after conception. The chromosome is the material that makes up the cell and is gained from each parent. Blastocyst and trophoblast are later terms for the embryo after zygote.",
        },
        {
          id: "q46",
          question:
            "In the late 1950s, consumers and health care professionals began challenging the routine use of analgesics and anesthetics during childbirth. Which of the following was an outgrowth of this concept?",
          choices: [
            "Labor, delivery, recovery, postpartum (LDRP) 166",
            "Nurse-midwifery",
            "Clinical nurse specialist",
            "Prepared childbirth",
          ],
          answer: 3,
          rationale:
            "Prepared childbirth was the direct result of the 1950’s challenging of the routine use of analgesic and anesthetics during childbirth. The LDRP was a much later concept and was not a direct result of the challenging of routine use of analgesics and anesthetics during childbirth. Roles for nurse midwives and clinical nurse specialists did not develop from this challenge.",
        },
        {
          id: "q47",
          question:
            "A client has a midpelvic contracture from a previous pelvic injury due to a motor vehicle accident as a teenager. The nurse is aware that this could prevent a fetus from passing through or around which structure during childbirth?",
          choices: ["Symphysis pubis", "Sacral promontory", "Ischial spines", "Pubic arch"],
          answer: 2,
          rationale:
            "The ischial spines are located in the mid-pelvic region and could be narrowed due to the previous pelvic injury. The symphysis pubis, sacral promontory, and pubic arch are not part of the mid-pelvis.",
        },
        {
          id: "q48",
          question:
            "When teaching a group of adolescents about variations in the length of the menstrual cycle, the nurse understands that the underlying mechanism is due to variations in which of the following phases?",
          choices: ["Menstrual phase", "Proliferative phase", "Secretory phase", "Ischemic phase"],
          answer: 1,
          rationale:
            "Variations in the length of the menstrual cycle are due to variations in the proliferative phase. The menstrual, secretory and ischemic phases do not contribute to this variation.",
        },
        {
          id: "q49",
          question:
            "When teaching a group of adolescents about male hormone production, which of the following would the nurse include as being produced by the Leydig cells?",
          choices: [
            "Follicle-stimulating hormone",
            "Testosterone",
            "Leuteinizing hormone",
            "Gonadotropin releasing hormone 167",
          ],
          answer: 1,
          rationale:
            "Testosterone is produced by the Leyding cells in the seminiferous tubules. Follicle-stimulating hormone and leuteinzing hormone are released by the anterior pituitary gland. The hypothalamus is responsible for releasing gonadotropin-releasing hormone. 172 173",
        },
        {
          id: "q50",
          question:
            "When teaching a group of adolescents\tabout variationsin the length of the menstrual cycle,\tthe\tnurse understands\tthat\tthe\tunderlying\tmechanism is due to variationsin which ofthe\tfollowing\tphases?",
          choices: ["Menstrual phase", "Proliferative phase", "Secretory phase", "Ischemic phase"],
          answer: 1,
          rationale:
            "Variations in the length of the menstrual cycle are due to variations in the proliferative  phase.\tThe\tmenstrual, secretory and ischemic\tphases do not contribute to this\tvariation.",
        },
      ],
    },
    {
      id: "maternity-nursing-part-1",
      title: "MATERNITY NURSING PART 1",
      description: "100 questions from the PNLE reviewer.",
      questions: [
        {
          id: "q1",
          question:
            "When assessing the adequacy of sperm for conception to occur, which of the following is the most useful criterion?",
          choices: ["Sperm count", "Sperm motility", "Sperm maturity", "Semen volume"],
          answer: 1,
          rationale:
            "Although all of the factors listed are important, sperm motility is the most significant criterion when assessing male infertility.",
        },
        {
          id: "q2",
          question:
            'A couple who wants to conceive but has been unsuccessful during the last 2 years has undergone many diagnostic procedures. When discussing the situation with the nurse, one partner states, "We know several friends in our age group and all of them have their own child already. Why can\'t we have one?" Which of the following would be the most pertinent nursing diagnosis for this couple?',
          choices: [
            "Fear related to the unknown",
            "Pain related to numerous procedures",
            "Ineffective family coping related to infertility",
            "Self-esteem disturbance related to infertility",
          ],
          answer: 3,
          rationale:
            "The partner's statement verbalizes feelings of inadequacy and negative feelings about themselves and their capabilities, making self-esteem disturbance the most appropriate diagnosis. Fear, pain, and ineffective family coping may also be present but as secondary diagnoses.",
        },
        {
          id: "q3",
          question:
            "Which of the following urinary symptoms does the pregnant woman most frequently experience during the first trimester?",
          choices: ["Dysuria", "Frequency", "Incontinence", "Burning"],
          answer: 1,
          rationale:
            "Pressure and irritation of the bladder by the growing uterus during the first trimester causes urinary frequency; dysuria, incontinence, and burning are more associated with urinary tract infections.",
        },
        {
          id: "q4",
          question:
            "Heartburn and flatulence, common in the second trimester, are most likely the result of which of the following?",
          choices: [
            "Increased plasma HCG levels",
            "Decreased intestinal motility",
            "Decreased gastric acidity",
            "Elevated estrogen levels",
          ],
          answer: 2,
          rationale:
            "During the second trimester, reduced gastric acidity combined with pressure from the growing uterus and smooth muscle relaxation causes heartburn and flatulence.",
        },
        {
          id: "q5",
          question: "On which of the following areas would the nurse expect to observe chloasma?",
          choices: [
            "Breast, areola, and nipples",
            "Chest, neck, arms, and legs",
            "Abdomen, breast, and thighs",
            "Cheeks, forehead, and nose",
          ],
          answer: 3,
          rationale:
            "Chloasma, the mask of pregnancy, is an irregular hyperpigmented area found on the face — the cheeks, forehead, and nose.",
        },
        {
          id: "q6",
          question:
            'A pregnant client states that she "waddles" when she walks. The nurse\'s explanation is based on which of the following as the cause?',
          choices: [
            "The large size of the newborn",
            "Pressure on the pelvic muscles",
            "Relaxation of the pelvic joints",
            "Excessive weight gain",
          ],
          answer: 2,
          rationale:
            "Hormonal changes during pregnancy cause relaxation of the pelvic joints, resulting in the typical waddling gait.",
        },
        {
          id: "q7",
          question:
            "Which of the following represents the average amount of weight gained during pregnancy?",
          choices: ["12 to 22 lb", "15 to 25 lb", "24 to 30 lb", "25 to 40 lb"],
          answer: 2,
          rationale:
            "The average weight gain during pregnancy is 24 to 30 lb, comprising the fetus, placenta, amniotic fluid, uterus, breasts, increased blood volume, and extravascular fluid/fat.",
        },
        {
          id: "q8",
          question:
            "When talking with a pregnant client who is experiencing aching swollen leg veins, the nurse would explain that this is most probably the result of which of the following?",
          choices: [
            "Thrombophlebitis",
            "Pregnancy-induced hypertension",
            "Pressure on blood vessels from the enlarging uterus",
            "The force of gravity pulling down on the uterus",
          ],
          answer: 2,
          rationale:
            "Pressure of the growing uterus on blood vessels increases the risk of venous stasis in the lower extremities, leading to edema and varicose vein formation.",
        },
        {
          id: "q9",
          question:
            "Cervical softening and uterine souffle are classified as which of the following?",
          choices: ["Diagnostic signs", "Presumptive signs", "Probable signs", "Positive signs"],
          answer: 2,
          rationale:
            "Cervical softening (Goodell sign) and uterine souffle are probable signs of pregnancy — objective findings that strongly suggest pregnancy.",
        },
        {
          id: "q10",
          question:
            "Which of the following would the nurse identify as a presumptive sign of pregnancy?",
          choices: [
            "Hegar sign",
            "Nausea and vomiting",
            "Skin pigmentation changes",
            "Positive serum pregnancy test",
          ],
          answer: 1,
          rationale:
            "Presumptive signs are subjective; nausea and vomiting are presumptive signs, while Hegar sign, pigmentation changes, and a positive serum test are probable signs.",
        },
        {
          id: "q11",
          question:
            "Which of the following common emotional reactions to pregnancy would the nurse expect to occur during the first trimester?",
          choices: [
            "Introversion, egocentrism, narcissism",
            "Awkwardness, clumsiness, and unattractiveness",
            "Anxiety, passivity, extroversion",
            "Ambivalence, fear, fantasies",
          ],
          answer: 3,
          rationale:
            "During the first trimester, common emotional reactions include ambivalence, fear, fantasies, or anxiety.",
        },
        {
          id: "q12",
          question:
            "During which of the following would the focus of classes be mainly on physiologic changes, fetal development, sexuality during pregnancy, and nutrition?",
          choices: ["Prepregnant period", "First trimester", "Second trimester", "Third trimester"],
          answer: 1,
          rationale:
            "First-trimester classes commonly focus on early physiologic changes, fetal development, sexuality, and nutrition.",
        },
        {
          id: "q13",
          question: "Which of the following would be a disadvantage of breast feeding?",
          choices: [
            "Involution occurs more rapidly",
            "The incidence of allergies increases due to maternal antibodies",
            "The father may resent the infant's demands on the mother's body",
            "There is a greater chance for error during preparation",
          ],
          answer: 2,
          rationale:
            "With breastfeeding, the father is not able to help provide the feeding, which may interfere with bonding and lead to resentment of the infant's demands on his wife's time and body.",
        },
        {
          id: "q14",
          question:
            "Which of the following would cause a false-positive result on a pregnancy test?",
          choices: [
            "The test was performed less than 10 days after an abortion",
            "The test was performed too early or too late in the pregnancy",
            "The urine sample was stored too long at room temperature",
            "A spontaneous abortion or a missed abortion is impending",
          ],
          answer: 0,
          rationale:
            "A false-positive reaction can occur if the pregnancy test is performed less than 10 days after an abortion; the other options tend to produce false-negative results.",
        },
        {
          id: "q15",
          question: "FHR can be auscultated with a fetoscope as early as which of the following?",
          choices: [
            "5 weeks gestation",
            "10 weeks gestation",
            "15 weeks gestation",
            "20 weeks gestation",
          ],
          answer: 3,
          rationale:
            "The FHR can be auscultated with a fetoscope at about 20 weeks' gestation, whereas Doppler ultrasound can detect it at 10 to 12 weeks.",
        },
        {
          id: "q16",
          question: "A client's LMP began July 5. Her EDD should be which of the following?",
          choices: ["January 2", "March 28", "April 12", "October 12"],
          answer: 2,
          rationale:
            "Using Nagele's rule: 5 + 7 = 12 (July) minus 3 months = 4 (April). Therefore, the client's EDD is April 12.",
        },
        {
          id: "q17",
          question:
            "Which of the following fundal heights indicates less than 12 weeks' gestation when the date of the LMP is unknown?",
          choices: [
            "Uterus in the pelvis",
            "Uterus at the xiphoid",
            "Uterus in the abdomen",
            "Uterus at the umbilicus",
          ],
          answer: 0,
          rationale:
            "When the LMP is unknown, gestational age is estimated by fundal height; the uterus remaining in the pelvis indicates less than 12 weeks' gestation.",
        },
        {
          id: "q18",
          question:
            "Which of the following danger signs should be reported promptly during the antepartum period?",
          choices: [
            "Constipation",
            "Breast tenderness",
            "Nasal stuffiness",
            "Leaking amniotic fluid",
          ],
          answer: 3,
          rationale:
            "Danger signs requiring prompt reporting include leaking of amniotic fluid, vaginal bleeding, blurred vision, rapid weight gain, and elevated blood pressure. The other options are common pregnancy discomforts.",
        },
        {
          id: "q19",
          question:
            "Which of the following prenatal laboratory test values would the nurse consider as significant?",
          choices: [
            "Hematocrit 33.5%",
            "Rubella titer less than 1:8",
            "White blood cells 8,000/mm3",
            "One hour glucose challenge test 110 g/dL",
          ],
          answer: 1,
          rationale:
            "A rubella titer should be 1:8 or greater; a titer less than 1:8 is significant, indicating the client may lack immunity to rubella.",
        },
        {
          id: "q20",
          question:
            "Which of the following characteristics of contractions would the nurse expect to find in a client experiencing true labor?",
          choices: [
            "Occurring at irregular intervals",
            "Starting mainly in the abdomen",
            "Gradually increasing intervals",
            "Increasing intensity with walking",
          ],
          answer: 3,
          rationale:
            "With true labor, contractions increase in intensity with walking, occur at regular intervals, typically start in the back sweeping to the abdomen, and the interval gradually shortens.",
        },
        {
          id: "q21",
          question:
            'During which of the following stages of labor would the nurse assess "crowning"?',
          choices: ["First stage", "Second stage", "Third stage", "Fourth stage"],
          answer: 1,
          rationale:
            "Crowning, when the newborn's head or presenting part appears at the vaginal opening, occurs during the second stage of labor.",
        },
        {
          id: "q22",
          question:
            "Barbiturates are usually not given for pain relief during active labor for which of the following reasons?",
          choices: [
            "The neonatal effects include hypotonia, hypothermia, generalized drowsiness, and reluctance to feed for the first few days",
            "These drugs readily cross the placental barrier, causing depressive effects in the newborn 2 to 3 hours after intramuscular injection",
            "They rapidly transfer across the placenta, and lack of an antagonist make them generally inappropriate during labor",
            "Adverse reactions may include maternal hypotension, allergic or toxic reaction or partial or total respiratory failure",
          ],
          answer: 2,
          rationale:
            "Barbiturates rapidly transfer across the placental barrier, and the lack of an antagonist makes them generally inappropriate during active labor, risking prolonged CNS depression and poor feeding in the newborn.",
        },
        {
          id: "q23",
          question:
            "Which of the following nursing interventions would the nurse perform during the third stage of labor?",
          choices: [
            "Obtain a urine specimen and other laboratory tests",
            "Assess uterine contractions every 30 minutes",
            "Coach for effective client pushing",
            "Promote parent-newborn interaction",
          ],
          answer: 3,
          rationale:
            "During the third stage of labor, beginning with delivery of the newborn, the nurse promotes parent-newborn interaction by placing the newborn on the mother's abdomen and encouraging touch.",
        },
        {
          id: "q24",
          question:
            "Which of the following actions demonstrates the nurse's understanding about the newborn's thermoregulatory ability?",
          choices: [
            "Placing the newborn under a radiant warmer",
            "Suctioning with a bulb syringe",
            "Obtaining an Apgar score",
            "Inspecting the newborn's umbilical cord",
          ],
          answer: 0,
          rationale:
            "Because the newborn's ability to regulate body temperature is poor, placing the newborn under a radiant warmer helps maintain body temperature.",
        },
        {
          id: "q25",
          question:
            "Immediately before expulsion, which of the following cardinal movements occur?",
          choices: ["Descent", "Flexion", "Extension", "External rotation"],
          answer: 3,
          rationale:
            "Immediately before expulsion, the cardinal movement of external rotation occurs, following descent, flexion, internal rotation, extension, and restitution.",
        },
        {
          id: "q26",
          question:
            "Before birth, which of the following structures connects the right and left auricles of the heart?",
          choices: ["Umbilical vein", "Foramen ovale", "Ductus arteriosus", "Ductus venosus"],
          answer: 1,
          rationale:
            "The foramen ovale is an opening between the right and left atria that should close shortly after birth.",
        },
        {
          id: "q27",
          question:
            "Which of the following when present in the urine may cause a reddish stain on the diaper of a newborn?",
          choices: ["Mucus", "Uric acid crystals", "Bilirubin", "Excess iron"],
          answer: 1,
          rationale:
            "Uric acid crystals in the urine may produce the reddish 'brick dust' stain on the diaper.",
        },
        {
          id: "q28",
          question:
            "When assessing the newborn's heart rate, which of the following ranges would be considered normal if the newborn were sleeping?",
          choices: [
            "80 beats per minute",
            "100 beats per minute",
            "120 beats per minute",
            "140 beats per minute",
          ],
          answer: 1,
          rationale:
            "The normal heart rate for a sleeping newborn is approximately 100 beats per minute; if awake, the range is 120 to 160 beats per minute.",
        },
        {
          id: "q29",
          question: "Which of the following is true regarding the fontanels of the newborn?",
          choices: [
            "The anterior is triangular shaped; the posterior is diamond shaped",
            "The posterior closes at 18 months; the anterior closes at 8 to 12 weeks",
            "The anterior is large in size when compared to the posterior fontanel",
            "The anterior is bulging; the posterior appears sunken",
          ],
          answer: 2,
          rationale:
            "The anterior fontanel is larger than the posterior fontanel; the anterior (diamond shaped) closes at 18 months, while the posterior (triangular shaped) closes at 8 to 12 weeks.",
        },
        {
          id: "q30",
          question:
            "Which of the following groups of newborn reflexes below are present at birth and remain unchanged through adulthood?",
          choices: [
            "Blink, cough, rooting, and gag",
            "Blink, cough, sneeze, gag",
            "Rooting, sneeze, swallowing, and cough",
            "Stepping, blink, cough, and sneeze",
          ],
          answer: 1,
          rationale:
            "Blink, cough, sneeze, swallowing, and gag reflexes are present at birth and remain unchanged through adulthood, unlike rooting and stepping, which subside within the first year.",
        },
        {
          id: "q31",
          question: "Which of the following describes the Babinski reflex?",
          choices: [
            "The newborn's toes will hyperextend and fan apart from dorsiflexion of the big toe when one side of the foot is stroked upward from the ball of the heel and across the ball of the foot",
            "The newborn abducts and flexes all extremities and may begin to cry when exposed to sudden movement or loud noise",
            "The newborn turns the head in the direction of stimulus, opens the mouth, and begins to suck when cheek, lip, or corner of mouth is touched",
            "The newborn will attempt to crawl forward with both arms and legs when he is placed on his abdomen on a flat surface",
          ],
          answer: 0,
          rationale:
            "With the Babinski reflex, the newborn's toes hyperextend and fan apart from dorsiflexion of the big toe when the foot is stroked upward from the heel across the ball of the foot.",
        },
        {
          id: "q32",
          question: "Which of the following statements best describes hyperemesis gravidarum?",
          choices: [
            "Severe anemia leading to electrolyte, metabolic, and nutritional imbalances in the absence of other medical problems",
            "Severe nausea and vomiting leading to electrolyte, metabolic, and nutritional imbalances in the absence of other medical problems",
            "Loss of appetite and continuous vomiting that commonly results in dehydration and ultimately decreasing maternal nutrients",
            "Severe nausea and diarrhea that can cause gastrointestinal irritation and possibly internal bleeding",
          ],
          answer: 1,
          rationale:
            "Hyperemesis gravidarum is severe nausea and vomiting leading to electrolyte, metabolic, and nutritional imbalances in the absence of other medical problems.",
        },
        {
          id: "q33",
          question: "Which of the following would the nurse identify as a classic sign of PIH?",
          choices: [
            "Edema of the feet and ankles",
            "Edema of the hands and face",
            "Weight gain of 1 lb/week",
            "Early morning headache",
          ],
          answer: 1,
          rationale:
            "Edema of the hands and face is a classic sign of PIH, unlike common foot/ankle edema; a weight gain of 2 lb or more per week indicates a problem.",
        },
        {
          id: "q34",
          question:
            "In which of the following types of spontaneous abortions would the nurse assess dark brown vaginal discharge and a negative pregnancy test?",
          choices: ["Threatened", "Imminent", "Missed", "Incomplete"],
          answer: 2,
          rationale:
            "In a missed abortion, there is early fetal intrauterine death without expulsion; the cervix remains closed, with possible dark brown discharge, negative pregnancy test, and cessation of uterine growth.",
        },
        {
          id: "q35",
          question:
            "Which of the following factors would the nurse suspect as predisposing a client to placenta previa?",
          choices: [
            "Multiple gestation",
            "Uterine anomalies",
            "Abdominal trauma",
            "Renal or vascular disease",
          ],
          answer: 0,
          rationale:
            "Multiple gestation is a predisposing factor for placenta previa, while uterine anomalies, abdominal trauma, and renal/vascular disease predispose to abruptio placentae.",
        },
        {
          id: "q36",
          question:
            "Which of the following would the nurse assess in a client experiencing abruptio placenta?",
          choices: [
            "Bright red, painless vaginal bleeding",
            "Concealed or external dark red bleeding",
            "Palpable fetal outline",
            "Soft and nontender abdomen",
          ],
          answer: 1,
          rationale:
            "A client with abruptio placentae may exhibit concealed or dark red bleeding with a firm, boardlike uterus, unlike placenta previa's bright red painless bleeding and soft abdomen.",
        },
        {
          id: "q37",
          question:
            "Which of the following is described as premature separation of a normally implanted placenta during the second half of pregnancy, usually with severe hemorrhage?",
          choices: [
            "Placenta previa",
            "Ectopic pregnancy",
            "Incompetent cervix",
            "Abruptio placentae",
          ],
          answer: 3,
          rationale:
            "Abruptio placentae is premature separation of a normally implanted placenta during the second half of pregnancy, usually with severe hemorrhage.",
        },
        {
          id: "q38",
          question:
            "Which of the following may happen if the uterus becomes overstimulated by oxytocin during the induction of labor?",
          choices: [
            "Weak contraction prolonged to more than 70 seconds",
            "Tetanic contractions prolonged to more than 90 seconds",
            "Increased pain with bright red vaginal bleeding",
            "Increased restlessness and anxiety",
          ],
          answer: 1,
          rationale:
            "Hyperstimulation of the uterus with oxytocin may result in tetanic contractions prolonged to more than 90 seconds, which could lead to fetal distress, abruptio placentae, and other complications.",
        },
        {
          id: "q39",
          question:
            "When preparing a client for cesarean delivery, which of the following key concepts should be considered when implementing nursing care?",
          choices: [
            "Instruct the mother's support person to remain in the family lounge until after the delivery",
            "Arrange for a staff member of the anesthesia department to explain what to expect postoperatively",
            "Modify preoperative teaching to meet the needs of either a planned or emergency cesarean birth",
            "Explain the surgery, expected outcome, and kind of anesthetics",
          ],
          answer: 2,
          rationale:
            "A key point is to modify preoperative teaching to meet the needs of either a planned or emergency cesarean birth, since the depth of instruction depends on circumstances and time available.",
        },
        {
          id: "q40",
          question: "Which of the following best describes preterm labor?",
          choices: [
            "Labor that begins after 20 weeks gestation and before 37 weeks gestation",
            "Labor that begins after 15 weeks gestation and before 37 weeks gestation",
            "Labor that begins after 24 weeks gestation and before 28 weeks gestation",
            "Labor that begins after 28 weeks gestation and before 40 weeks gestation",
          ],
          answer: 0,
          rationale:
            "Preterm labor is best described as labor that begins after 20 weeks' gestation and before 37 weeks' gestation.",
        },
        {
          id: "q41",
          question:
            "When PROM occurs, which of the following provides evidence of the nurse's understanding of the client's immediate needs?",
          choices: [
            "The chorion and amnion rupture 4 hours before the onset of labor",
            "PROM removes the fetus's most effective defense against infection",
            "Nursing care is based on fetal viability and gestational age",
            "PROM is associated with malpresentation and possibly incompetent cervix",
          ],
          answer: 1,
          rationale:
            "One of the most serious problems with PROM is that it removes the fetus's most effective defense against infection, which is the client's most immediate need.",
        },
        {
          id: "q42",
          question: "Which of the following factors is the underlying cause of dystocia?",
          choices: ["Nutritional", "Mechanical", "Environmental", "Medical"],
          answer: 1,
          rationale:
            "Dystocia is difficult, painful, prolonged labor due to mechanical factors involving the fetus (passenger), uterus (powers), pelvis (passage), or psyche.",
        },
        {
          id: "q43",
          question: "When uterine rupture occurs, which of the following would be the priority?",
          choices: [
            "Limiting hypovolemic shock",
            "Obtaining blood specimens",
            "Instituting complete bed rest",
            "Inserting a urinary catheter",
          ],
          answer: 0,
          rationale:
            "With uterine rupture, the client is at risk for hypovolemic shock, so the priority is to prevent and limit hypovolemic shock.",
        },
        {
          id: "q44",
          question:
            "Which of the following is the nurse's initial action when umbilical cord prolapse occurs?",
          choices: [
            "Begin monitoring maternal vital signs and FHR",
            "Place the client in a knee-chest position in bed",
            "Notify the physician and prepare the client for delivery",
            "Apply a sterile warm saline dressing to the exposed cord",
          ],
          answer: 1,
          rationale:
            "The immediate priority is to minimize pressure on the cord by placing the client on bed rest in a knee-chest position or lowering the head of the bed and elevating the hips.",
        },
        {
          id: "q45",
          question:
            "Which of the following amounts of blood loss following birth marks the criterion for describing postpartum hemorrhage?",
          choices: ["More than 200 ml", "More than 300 ml", "More than 400 ml", "More than 500 ml"],
          answer: 3,
          rationale:
            "Postpartum hemorrhage is defined as blood loss of more than 500 ml following birth.",
        },
        {
          id: "q46",
          question:
            "Which of the following is the primary predisposing factor related to mastitis?",
          choices: [
            "Epidemic infection from nosocomial sources localizing in the lactiferous glands and ducts",
            "Endemic infection occurring randomly and localizing in the periglandular connective tissue",
            "Temporary urinary retention due to decreased perception of the urge to void",
            "Breast injury caused by overdistention, stasis, and cracking of the nipples",
          ],
          answer: 3,
          rationale:
            "With mastitis, injury to the breast, such as overdistention, stasis, and cracking of the nipples, is the primary predisposing factor.",
        },
        {
          id: "q47",
          question: "Which of the following best describes thrombophlebitis?",
          choices: [
            "Inflammation and clot formation that result when blood components combine to form an aggregate body",
            "Inflammation and blood clots that eventually become lodged within the pulmonary blood vessels",
            "Inflammation and blood clots that eventually become lodged within the femoral vein",
            "Inflammation of the vascular endothelium with clot formation on the vessel wall",
          ],
          answer: 3,
          rationale:
            "Thrombophlebitis refers to inflammation of the vascular endothelium with clot formation on the wall of the vessel.",
        },
        {
          id: "q48",
          question:
            "Which of the following assessment findings would the nurse expect if the client develops DVT?",
          choices: [
            "Midcalf pain, tenderness and redness along the vein",
            "Chills, fever, malaise, occurring 2 weeks after delivery",
            "Muscle pain, the presence of Homans sign, and swelling in the affected limb",
            "Chills, fever, stiffness, and pain occurring 10 to 14 days after delivery",
          ],
          answer: 2,
          rationale:
            "Classic symptoms of DVT include muscle pain, presence of Homans sign, and swelling of the affected limb.",
        },
        {
          id: "q49",
          question: "Which of the following are the most commonly assessed findings in cystitis?",
          choices: [
            "Frequency, urgency, dehydration, nausea, chills, and flank pain",
            "Nocturia, frequency, urgency, dysuria, hematuria, fever and suprapubic pain",
            "Dehydration, hypertension, dysuria, suprapubic pain, chills, and fever",
            "High fever, chills, flank pain, nausea, vomiting, dysuria, and frequency",
          ],
          answer: 1,
          rationale:
            "Manifestations of cystitis include frequency, urgency, dysuria, hematuria, nocturia, fever, and suprapubic pain.",
        },
        {
          id: "q50",
          question:
            'Which of the following best reflects the frequency of reported postpartum "blues"?',
          choices: [
            "Between 10% and 40% of all new mothers report some form of postpartum blues",
            "Between 30% and 50% of all new mothers report some form of postpartum blues",
            "Between 50% and 80% of all new mothers report some form of postpartum blues",
            "Between 25% and 70% of all new mothers report some form of postpartum blues",
          ],
          answer: 2,
          rationale:
            "According to statistical reports, between 50% and 80% of all new mothers report some form of postpartum blues.",
        },
        {
          id: "q51",
          question:
            "For the client who is using oral contraceptives, the nurse informs the client about the need to take the pill at the same time each day to accomplish which of the following?",
          choices: [
            "Decrease the incidence of nausea",
            "Maintain hormonal levels",
            "Reduce side effects",
            "Prevent drug interactions",
          ],
          answer: 1,
          rationale:
            "Regular, timely ingestion of oral contraceptives is necessary to maintain hormonal levels, suppressing FSH/LH secretion so ovulation is inhibited.",
        },
        {
          id: "q52",
          question:
            "When teaching a client about contraception, which of the following would the nurse include as the most effective method for preventing sexually transmitted infections?",
          choices: ["Spermicides", "Diaphragm", "Condoms", "Vasectomy"],
          answer: 2,
          rationale:
            "Condoms, used correctly and consistently, are the most effective barrier against bacterial and viral sexually transmitted infections.",
        },
        {
          id: "q53",
          question:
            "When preparing a woman who is 2 days postpartum for discharge, recommendations for which of the following contraceptive methods would be avoided?",
          choices: ["Diaphragm", "Female condom", "Oral contraceptives", "Rhythm method"],
          answer: 0,
          rationale:
            "The diaphragm must be individually refitted, usually at the 6-week postpartum exam, because of reproductive structure changes after delivery.",
        },
        {
          id: "q54",
          question:
            "For which of the following clients would the nurse expect that an intrauterine device would not be recommended?",
          choices: [
            "Woman over age 35",
            "Nulliparous woman",
            "Promiscuous young adult",
            "Postpartum client",
          ],
          answer: 2,
          rationale:
            "An IUD increases the risk of pelvic inflammatory disease, especially in women with more than one sexual partner, due to the increased risk of sexually transmitted infections.",
        },
        {
          id: "q55",
          question:
            'A client in her third trimester tells the nurse, "I\'m constipated all the time!" Which of the following should the nurse recommend?',
          choices: [
            "Daily enemas",
            "Laxatives",
            "Increased fiber intake",
            "Decreased fluid intake",
          ],
          answer: 2,
          rationale:
            "Increasing fiber in the diet helps fecal matter pass more quickly through the intestinal tract, softening stool, unlike enemas or laxatives which risk preterm labor.",
        },
        {
          id: "q56",
          question:
            "Which of the following would the nurse use as the basis for the teaching plan when caring for a pregnant teenager concerned about gaining too much weight during pregnancy?",
          choices: [
            "10 pounds per trimester",
            "1 pound per week for 40 weeks",
            "½ pound per week for 40 weeks",
            "A total gain of 25 to 30 pounds",
          ],
          answer: 3,
          rationale:
            "A total weight gain of 25 to 30 pounds is recommended over the 40 weeks of pregnancy for adequate fetal growth and development.",
        },
        {
          id: "q57",
          question:
            "The client tells the nurse that her last menstrual period started on January 14 and ended on January 20. Using Nagele's rule, the nurse determines her EDD to be which of the following?",
          choices: ["September 27", "October 21", "November 7", "December 27"],
          answer: 1,
          rationale:
            "Using Nagele's rule (adding 7 days to the first day of LMP and counting back 3 months, adjusting the year), the EDD is October 21.",
        },
        {
          id: "q58",
          question:
            'When taking an obstetrical history on a pregnant client who states, "I had a son born at 38 weeks gestation, a daughter born at 30 weeks gestation and I lost a baby at about 8 weeks," the nurse should record her obstetrical history as which of the following?',
          choices: ["G2 T2 P0 A0 L2", "G3 T1 P1 A0 L2", "G3 T2 P0 A0 L2", "G4 T2 P1 A1 L2"],
          answer: 3,
          rationale:
            "The client has been pregnant 4 times (G4), including a full-term birth (T), a preterm birth (P), a spontaneous abortion (A), and 2 living children (L2).",
        },
        {
          id: "q59",
          question:
            "When preparing to listen to the fetal heart rate at 12 weeks' gestation, the nurse would use which of the following?",
          choices: [
            "Stethoscope placed midline at the umbilicus",
            "Doppler placed midline at the suprapubic region",
            "Fetoscope placed midway between the umbilicus and the xiphoid process",
            "External electronic fetal monitor placed at the umbilicus",
          ],
          answer: 1,
          rationale:
            "At 12 weeks gestation, the uterus is palpable above the symphysis pubis, and the Doppler intensifies the fetal pulse sound so it is audible at this early stage.",
        },
        {
          id: "q60",
          question:
            "When developing a plan of care for a client newly diagnosed with gestational diabetes, which of the following instructions would be the priority?",
          choices: ["Dietary intake", "Medication", "Exercise", "Glucose monitoring"],
          answer: 0,
          rationale:
            "Diet therapy is the mainstay of the treatment plan for gestational diabetes and should always be the priority, as most women need only diet to control blood sugar.",
        },
        {
          id: "q61",
          question:
            "A client at 24 weeks gestation has gained 6 pounds in 4 weeks. Which of the following would be the priority when assessing the client?",
          choices: ["Glucosuria", "Depression", "Hand/face edema", "Dietary intake"],
          answer: 2,
          rationale:
            "Rapid weight gain after 20 weeks should raise suspicion of preeclampsia, which may be caused by fluid retention manifested by hand and face edema.",
        },
        {
          id: "q62",
          question:
            "A client 12 weeks' pregnant comes to the emergency department with abdominal cramping and moderate vaginal bleeding. Speculum examination reveals 2 to 3 cms cervical dilation. The nurse would document these findings as which of the following?",
          choices: [
            "Threatened abortion",
            "Imminent abortion",
            "Complete abortion",
            "Missed abortion",
          ],
          answer: 1,
          rationale:
            "Cramping and vaginal bleeding with cervical dilation signifies that termination of the pregnancy is inevitable, indicating an imminent abortion.",
        },
        {
          id: "q63",
          question:
            "Which of the following would be the priority nursing diagnosis for a client with an ectopic pregnancy?",
          choices: ["Risk for infection", "Pain", "Knowledge Deficit", "Anticipatory Grieving"],
          answer: 1,
          rationale:
            "For the client with ectopic pregnancy, lower abdominal pain, usually unilateral, is the primary symptom, making pain the priority diagnosis.",
        },
        {
          id: "q64",
          question:
            "Before assessing the postpartum client's uterus for firmness and position in relation to the umbilicus and midline, which of the following should the nurse do first?",
          choices: [
            "Assess the vital signs",
            "Administer analgesia",
            "Ambulate her in the hall",
            "Assist her to urinate",
          ],
          answer: 3,
          rationale:
            "Before uterine assessment, it is essential the woman empties her bladder, since a full bladder interferes with accuracy by elevating and displacing the uterus.",
        },
        {
          id: "q65",
          question:
            "Which of the following should the nurse do when a primipara who is lactating tells the nurse that she has sore nipples?",
          choices: [
            "Tell her to breast feed more frequently",
            "Administer a narcotic before breast feeding",
            "Encourage her to wear a nursing brassiere",
            "Use soap and water to clean the nipples",
          ],
          answer: 0,
          rationale:
            "Feeding more frequently decreases the infant's frantic, vigorous sucking from hunger and decreases engorgement, promoting proper latch-on.",
        },
        {
          id: "q66",
          question:
            "The nurse assesses the vital signs of a client, 4 hours' postpartum, that are as follows: BP 90/60; temperature 100.4ºF; pulse 100, weak, thready; R 20 per minute. Which of the following should the nurse do first?",
          choices: [
            "Report the temperature to the physician",
            "Recheck the blood pressure with another cuff",
            "Assess the uterus for firmness and position",
            "Determine the amount of lochia",
          ],
          answer: 3,
          rationale:
            "A weak, thready pulse elevated to 100 BPM may indicate impending hemorrhagic shock, so the nurse should first check the amount of lochia present.",
        },
        {
          id: "q67",
          question:
            "The nurse assesses the postpartum vaginal discharge (lochia) on four clients. Which of the following assessments would warrant notification of the physician?",
          choices: [
            "A dark red discharge on a 2-day postpartum client",
            "A pink to brownish discharge on a client who is 5 days postpartum",
            "Almost colorless to creamy discharge on a client 2 weeks after delivery",
            "A bright red discharge 5 days after delivery",
          ],
          answer: 3,
          rationale:
            "Bright red vaginal bleeding 5 days after delivery, when lochia is typically pink to brownish, suggests late postpartum hemorrhage and warrants physician notification.",
        },
        {
          id: "q68",
          question:
            "A postpartum client has a temperature of 101.4ºF, with a uterus that is tender when palpated, remains unusually large, and not descending as normally expected. Which of the following should the nurse assess next?",
          choices: ["Lochia", "Breasts", "Incision", "Urine"],
          answer: 0,
          rationale:
            "The data suggests endometrial infection; the nurse should assess the lochia, which may be decreased or copious, dark brown, and foul-smelling, providing further evidence of infection.",
        },
        {
          id: "q69",
          question:
            "Which of the following is the priority focus of nursing practice with the current early postpartum discharge?",
          choices: [
            "Promoting comfort and restoration of health",
            "Exploring the emotional status of the family",
            "Facilitating safe and effective self- and newborn care",
            "Teaching about the importance of family planning",
          ],
          answer: 2,
          rationale:
            "Because of early postpartum discharge and limited teaching time, the nurse's priority is facilitating safe and effective self- and newborn care.",
        },
        {
          id: "q70",
          question:
            "Which of the following actions would be least effective in maintaining a neutral thermal environment for the newborn?",
          choices: [
            "Placing infant under radiant warmer after bathing",
            "Covering the scale with a warmed blanket prior to weighing",
            "Placing crib close to nursery window for family viewing",
            "Covering the infant's head with a knit stockinette",
          ],
          answer: 2,
          rationale:
            "Heat loss by radiation occurs when the infant's crib is placed too near cold windows, making this the least effective action for thermal regulation.",
        },
        {
          id: "q71",
          question:
            "A newborn who has an asymmetrical Moro reflex response should be further assessed for which of the following?",
          choices: [
            "Talipes equinovarus",
            "Fractured clavicle",
            "Congenital hypothyroidism",
            "Increased intracranial pressure",
          ],
          answer: 1,
          rationale:
            "A fractured clavicle would prevent the normal, symmetrical Moro response of extension and abduction of the arms followed by flexion and adduction.",
        },
        {
          id: "q72",
          question:
            "During the first 4 hours after a male circumcision, assessing for which of the following is the priority?",
          choices: ["Infection", "Hemorrhage", "Discomfort", "Dehydration"],
          answer: 1,
          rationale:
            "Hemorrhage is a potential risk following any surgical procedure; although vitamin K has been given, the prophylactic dose is often not sufficient to prevent bleeding.",
        },
        {
          id: "q73",
          question:
            "The mother asks the nurse, \"What's wrong with my son's breasts? Why are they so enlarged?\" Which of the following would be the best response by the nurse?",
          choices: [
            '"The breast tissue is inflamed from the trauma experienced with birth"',
            '"A decrease in maternal hormones present before birth causes enlargement"',
            '"You should discuss this with your doctor. It could be a malignancy"',
            '"The tissue has hypertrophied while the baby was in the uterus"',
          ],
          answer: 1,
          rationale:
            "The presence of excess maternal estrogen and progesterone followed by prompt withdrawal at birth precipitates breast engorgement, which resolves spontaneously within days.",
        },
        {
          id: "q74",
          question:
            "Immediately after birth the nurse notes the following on a male newborn: respirations 78; apical heart rate 160 BPM, nostril flaring; mild intercostal retractions; and grunting at the end of expiration. Which of the following should the nurse do?",
          choices: [
            "Call the assessment data to the physician's attention",
            "Start oxygen per nasal cannula at 2 L/min",
            "Suction the infant's mouth and nares",
            "Recognize this as normal first period of reactivity",
          ],
          answer: 3,
          rationale:
            "The first 15 minutes to 1 hour after birth is the first period of reactivity involving respiratory and circulatory adaptation, and this data reflects normal adaptation.",
        },
        {
          id: "q75",
          question:
            "The nurse hears a mother telling a friend on the telephone about umbilical cord care. Which of the following statements by the mother indicates effective teaching?",
          choices: [
            '"Daily soap and water cleansing is best"',
            '"Alcohol helps it dry and kills germs"',
            '"An antibiotic ointment applied daily prevents infection"',
            '"He can have a tub bath each day"',
          ],
          answer: 1,
          rationale:
            "Application of 70% isopropyl alcohol to the cord minimizes microorganisms and promotes drying, and the cord should be kept dry until it falls off.",
        },
        {
          id: "q76",
          question:
            "A newborn weighing 3000 grams and feeding every 4 hours needs 120 calories/kg of body weight every 24 hours for proper growth and development. How many ounces of 20 cal/oz formula should this newborn receive at each feeding to meet nutritional needs?",
          choices: ["2 ounces", "3 ounces", "4 ounces", "6 ounces"],
          answer: 1,
          rationale:
            "3 kg × 120 cal/kg/day = 360 cal/day ÷ 6 feedings/day = 60 cal/feeding ÷ 20 cal/oz = 3 ounces per feeding.",
        },
        {
          id: "q77",
          question:
            "The postterm neonate with meconium-stained amniotic fluid needs care designed to especially monitor for which of the following?",
          choices: [
            "Respiratory problems",
            "Gastrointestinal problems",
            "Integumentary problems",
            "Elimination problems",
          ],
          answer: 0,
          rationale:
            "At birth, some meconium fluid may be aspirated, causing mechanical obstruction or chemical pneumonitis, so respiratory problems are the priority concern.",
        },
        {
          id: "q78",
          question:
            "When measuring a client's fundal height, which of the following techniques denotes the correct method of measurement used by the nurse?",
          choices: [
            "From the xiphoid process to the umbilicus",
            "From the symphysis pubis to the xiphoid process",
            "From the symphysis pubis to the fundus",
            "From the fundus to the umbilicus",
          ],
          answer: 2,
          rationale:
            "The nurse measures from the superior border of the symphysis pubis, stretching the tape across the abdomen at the midline to the top of the fundus.",
        },
        {
          id: "q79",
          question:
            "A client with severe preeclampsia is admitted with BP 160/110, proteinuria, and severe pitting edema. Which of the following would be most important to include in the client's plan of care?",
          choices: [
            "Daily weights",
            "Seizure precautions",
            "Right lateral positioning",
            "Stress reduction",
          ],
          answer: 1,
          rationale:
            "Women hospitalized with severe preeclampsia need decreased CNS stimulation to prevent a seizure, so seizure precautions provide essential environmental safety.",
        },
        {
          id: "q80",
          question:
            'A postpartum primipara asks the nurse, "When can we have sexual intercourse again?" Which of the following would be the nurse\'s best response?',
          choices: [
            '"Anytime you both want to."',
            '"As soon as you choose a contraceptive method."',
            '"When the discharge has stopped and the incision is healed."',
            '"After your 6 weeks examination."',
          ],
          answer: 2,
          rationale:
            "Cessation of the lochial discharge signifies healing of the endometrium, indicating minimal risk of hemorrhage and infection, providing specific criteria for resuming activity.",
        },
        {
          id: "q81",
          question:
            "When preparing to administer the vitamin K injection to a neonate, the nurse would select which of the following sites as appropriate for the injection?",
          choices: [
            "Deltoid muscle",
            "Anterior femoris muscle",
            "Vastus lateralis muscle",
            "Gluteus maximus muscle",
          ],
          answer: 2,
          rationale:
            "The middle third of the vastus lateralis is the preferred injection site because it is free of blood vessels and nerves and is large enough to absorb the medication.",
        },
        {
          id: "q82",
          question:
            "When performing a pelvic examination, the nurse observes a red swollen area on the right side of the vaginal orifice. The nurse would document this as enlargement of which of the following?",
          choices: ["Clitoris", "Parotid gland", "Skene's gland", "Bartholin's gland"],
          answer: 3,
          rationale:
            "Bartholin's glands are located on either side of the vaginal orifice, making this the correct structure for this finding.",
        },
        {
          id: "q83",
          question:
            "To differentiate as a female, the hormonal stimulation of the embryo that must occur involves which of the following?",
          choices: [
            "Increase in maternal estrogen secretion",
            "Decrease in maternal androgen secretion",
            "Secretion of androgen by the fetal gonad",
            "Secretion of estrogen by the fetal gonad",
          ],
          answer: 3,
          rationale:
            "The fetal gonad must secrete estrogen for the embryo to differentiate as a female; secretion of androgen by the fetal gonad would produce a male fetus.",
        },
        {
          id: "q84",
          question:
            "A client at 8 weeks' gestation calls complaining of slight nausea in the morning hours. Which of the following client interventions should the nurse question?",
          choices: [
            "Taking 1 teaspoon of bicarbonate of soda in an 8-ounce glass of water",
            "Eating a few low-sodium crackers before getting out of bed",
            "Avoiding the intake of liquids in the morning hours",
            "Eating six small meals a day instead of three large meals",
          ],
          answer: 0,
          rationale:
            "Using bicarbonate of soda would increase the amount of sodium ingested, which can cause complications, making this the intervention the nurse should question.",
        },
        {
          id: "q85",
          question:
            "The nurse documents positive ballottement in the client's prenatal record. The nurse understands that this indicates which of the following?",
          choices: [
            "Palpable contractions on the abdomen",
            "Passive movement of the unengaged fetus",
            "Fetal kicking felt by the client",
            "Enlargement and softening of the uterus",
          ],
          answer: 1,
          rationale:
            "Ballottement indicates passive movement of the unengaged fetus, distinct from quickening (fetal kicks) or Piskacek's sign (uterine enlargement/softening).",
        },
        {
          id: "q86",
          question:
            "During a pelvic exam the nurse notes a purple-blue tinge of the cervix. The nurse documents this as which of the following?",
          choices: ["Braxton-Hicks sign", "Chadwick's sign", "Goodell's sign", "McDonald's sign"],
          answer: 1,
          rationale:
            "Chadwick's sign refers to the purple-blue tinge of the cervix, distinct from Braxton Hicks contractions or Goodell's sign (cervical softening).",
        },
        {
          id: "q87",
          question:
            "During a prenatal class, the nurse explains the rationale for breathing techniques during preparation for labor based on the understanding that breathing techniques are most important in achieving which of the following?",
          choices: [
            "Eliminate pain and give the expectant parents something to do",
            "Reduce the risk of fetal distress by increasing uteroplacental perfusion",
            "Facilitate relaxation, possibly reducing the perception of pain",
            "Eliminate pain so that less analgesia and anesthesia are needed",
          ],
          answer: 2,
          rationale:
            "Breathing techniques can raise the pain threshold and reduce the perception of pain while promoting relaxation, though they do not eliminate pain entirely.",
        },
        {
          id: "q88",
          question:
            "After 4 hours of active labor, the nurse notes that the contractions of a primigravida client are not strong enough to dilate the cervix. Which of the following would the nurse anticipate doing?",
          choices: [
            "Obtaining an order to begin IV oxytocin infusion",
            "Administering a light sedative to allow the patient to rest for several hours",
            "Preparing for a cesarean section for failure to progress",
            "Increasing the encouragement to the patient when pushing begins",
          ],
          answer: 0,
          rationale:
            "The client's labor is hypotonic, so the nurse should anticipate obtaining an order for oxytocin infusion to help the uterus contract more forcefully.",
        },
        {
          id: "q89",
          question:
            "A multigravida at 38 weeks' gestation is admitted with painless, bright red bleeding and mild contractions every 7 to 10 minutes. Which of the following assessments should be avoided?",
          choices: [
            "Maternal vital sign",
            "Fetal heart rate",
            "Contraction monitoring",
            "Cervical dilation",
          ],
          answer: 3,
          rationale:
            "The signs indicate placenta previa, so a vaginal exam to determine cervical dilation should be avoided because it could cause hemorrhage.",
        },
        {
          id: "q90",
          question:
            "Which of the following would be the nurse's most appropriate response to a client who asks why she must have a cesarean delivery if she has a complete placenta previa?",
          choices: [
            '"You will have to ask your physician when he returns."',
            '"You need a cesarean to prevent hemorrhage."',
            '"The placenta is covering most of your cervix."',
            '"The placenta is covering the opening of the uterus and blocking your baby."',
          ],
          answer: 3,
          rationale:
            "This response accurately explains that a complete placenta previa covers the uterine opening entirely, blocking the passageway for the baby and necessitating cesarean delivery.",
        },
        {
          id: "q91",
          question:
            "The nurse understands that the fetal head is in which of the following positions with a face presentation?",
          choices: [
            "Completely flexed",
            "Completely extended",
            "Partially extended",
            "Partially flexed",
          ],
          answer: 1,
          rationale:
            "With a face presentation, the head is completely extended, unlike a vertex presentation (flexed) or brow presentation (partially extended).",
        },
        {
          id: "q92",
          question:
            "With a fetus in the left-anterior breech presentation, the nurse would expect the fetal heart rate would be most audible in which of the following areas?",
          choices: [
            "Above the maternal umbilicus and to the right of midline",
            "In the lower-left maternal abdominal quadrant",
            "In the lower-right maternal abdominal quadrant",
            "Above the maternal umbilicus and to the left of midline",
          ],
          answer: 3,
          rationale:
            "With this presentation, the fetal upper torso and back face the left upper maternal abdominal wall, making the FHR most audible above the umbilicus and to the left of midline.",
        },
        {
          id: "q93",
          question:
            "The amniotic fluid of a client has a greenish tint. The nurse interprets this to be the result of which of the following?",
          choices: ["Lanugo", "Hydramnios", "Meconium", "Vernix"],
          answer: 2,
          rationale:
            "The greenish tint of amniotic fluid is due to the presence of meconium, distinct from lanugo (fine hair), hydramnios (excess fluid), or vernix (white cheesy coating).",
        },
        {
          id: "q94",
          question:
            "A patient is in labor and has just been told she has a breech presentation. The nurse should be particularly alert for which of the following?",
          choices: ["Quickening", "Ophthalmia neonatorum", "Pica", "Prolapsed umbilical cord"],
          answer: 3,
          rationale:
            "In a breech position, because of the space between the presenting part and the cervix, prolapse of the umbilical cord is common.",
        },
        {
          id: "q95",
          question:
            "When describing dizygotic twins to a couple, on which of the following would the nurse base the explanation?",
          choices: [
            "Two ova fertilized by separate sperm",
            "Sharing of a common placenta",
            "Each ova with the same genotype",
            "Sharing of a common chorion",
          ],
          answer: 0,
          rationale:
            "Dizygotic (fraternal) twins involve two ova fertilized by separate sperm, unlike monozygotic (identical) twins who share a placenta, genotype, and chorion.",
        },
        {
          id: "q96",
          question:
            "Which of the following refers to the single cell that reproduces itself after conception?",
          choices: ["Chromosome", "Blastocyst", "Zygote", "Trophoblast"],
          answer: 2,
          rationale:
            "The zygote is the single cell that reproduces itself after conception; blastocyst and trophoblast are later developmental terms.",
        },
        {
          id: "q97",
          question:
            "In the late 1950s, consumers and health care professionals began challenging the routine use of analgesics and anesthetics during childbirth. Which of the following was an outgrowth of this concept?",
          choices: [
            "Labor, delivery, recovery, postpartum (LDRP)",
            "Nurse-midwifery",
            "Clinical nurse specialist",
            "Prepared childbirth",
          ],
          answer: 3,
          rationale:
            "Prepared childbirth was the direct result of the 1950s challenge to the routine use of analgesics and anesthetics during childbirth.",
        },
        {
          id: "q98",
          question:
            "A client has a midpelvic contracture from a previous pelvic injury due to a motor vehicle accident as a teenager. The nurse is aware that this could prevent a fetus from passing through or around which structure during childbirth?",
          choices: ["Symphysis pubis", "Sacral promontory", "Ischial spines", "Pubic arch"],
          answer: 2,
          rationale:
            "The ischial spines are located in the mid-pelvic region and could be narrowed due to the previous pelvic injury, unlike the other structures listed which are not part of the mid-pelvis.",
        },
        {
          id: "q99",
          question:
            "When teaching a group of adolescents about variations in the length of the menstrual cycle, the nurse understands that the underlying mechanism is due to variations in which of the following phases?",
          choices: ["Menstrual phase", "Proliferative phase", "Secretory phase", "Ischemic phase"],
          answer: 1,
          rationale:
            "Variations in the length of the menstrual cycle are due to variations in the proliferative phase, not the menstrual, secretory, or ischemic phases.",
        },
        {
          id: "q100",
          question:
            "When teaching a group of adolescents about male hormone production, which of the following would the nurse include as being produced by the Leydig cells?",
          choices: [
            "Follicle-stimulating hormone",
            "Testosterone",
            "Luteinizing hormone",
            "Gonadotropin releasing hormone",
          ],
          answer: 1,
          rationale:
            "Testosterone is produced by the Leydig cells in the seminiferous tubules, while FSH and LH are released by the anterior pituitary gland.",
        },
      ],
    },
    {
      id: "maternity-nursing-part-2",
      title: "MATERNITY NURSING PART 2",
      description: "45 questions from the PNLE reviewer.",
      questions: [
        {
          id: "q1",
          question:
            "Suppose Melissa Chung asks you whether maternal child health nursing is a profession. What qualifies an activity as a profession?",
          choices: [
            "Members supervise other people",
            "Members use a distinct body of knowledge",
            "Members enjoy good working conditions",
            "Members receive relatively high pay",
          ],
          answer: 1,
          rationale:
            "A profession is defined by its members' use of a distinct, specialized body of knowledge, not by supervision, working conditions, or pay.",
        },
        {
          id: "q2",
          question:
            "Nursing is changing because social change affects care. Which of the following is a trend that is occurring in nursing because of social change?",
          choices: [
            "So many children are treated in ambulatory units that nurses are hardly needed",
            "Immunizations are no longer needed for infectious diseases",
            "The use of skilled technology has made nursing care more complex",
            "Pregnant women are so healthy today that they rarely need prenatal care",
          ],
          answer: 2,
          rationale:
            "The increasing use of skilled technology in healthcare has made nursing care more complex, a genuine trend driven by social and technological change.",
        },
        {
          id: "q3",
          question: "The best description of the family nurse practitioner role is:",
          choices: [
            "To give bedside care to critically ill family members",
            "To supervise the health of children up to age 18 years",
            "To provide health supervision for families",
            "To supervise women during pregnancy",
          ],
          answer: 2,
          rationale:
            "The family nurse practitioner role centers on providing health supervision for families across the lifespan, not just one age group or condition.",
        },
        {
          id: "q4",
          question:
            "The Delos Reyes family was a single-parent one before Mrs. Delos Reyes remarried. What is a common concern of single-parent families?",
          choices: [
            "Too many people give advice",
            "Finances are inadequate",
            "Children miss many days of school",
            "Children don't know any other family like theirs",
          ],
          answer: 1,
          rationale:
            "Inadequate finances are a commonly cited concern of single-parent families, given the loss of a second income.",
        },
        {
          id: "q5",
          question:
            'Mrs. Delos Reyes serves many roles in her family. If, when you talk to Veronica, her daughter, she interrupts to say, "Don\'t tell our family secrets," she is fulfilling what family role?',
          choices: ["Decision-maker", "Gatekeeper", "Problem-solver", "Bread-earner"],
          answer: 1,
          rationale:
            "Controlling the flow of information into and out of the family is characteristic of the gatekeeper role.",
        },
        {
          id: "q6",
          question:
            "The Delos Reyes family consists of two parents; Veronica, 12; and Paolo, 2. Mrs. Delos Reyes is 5 months pregnant. Which of Duvall's family life stages is the family currently experiencing?",
          choices: ["Pregnancy stage", "Preschool stage", "School-age stage", "Launching stage"],
          answer: 2,
          rationale:
            "Duvall's family life cycle stages are classified according to the oldest child; since Veronica is 12 (school-age), the family is in the school-age stage.",
        },
        {
          id: "q7",
          question:
            "While she is in the hospital, Carmela makes the following statements. Which is the best example of stereotyping?",
          choices: [
            "My doctor is funny; he tells jokes and makes me laugh",
            "I'm glad I'm Batangueño because all Batangueños are smart",
            "I'm sure my leg will heal quickly; I'm overall healthy",
            "I like foods in Batangas, although not if it tastes too spicy",
          ],
          answer: 1,
          rationale:
            'Attributing a trait ("smart") to an entire group based on regional identity is a classic example of stereotyping.',
        },
        {
          id: "q8",
          question:
            "Monet Rivera tells you she used to worry because she developed breasts later than most of her friends. Breast development is termed:",
          choices: ["Adrenarche", "Mamarche", "Thelarche", "Menarche"],
          answer: 2,
          rationale: "Thelarche refers to the onset of breast development during puberty.",
        },
        {
          id: "q9",
          question:
            "Suppose Jaypee Manalo tells you that he is considering a vasectomy after the birth of his new child. Vasectomy is the incision of which organ?",
          choices: ["Testes", "Vas deferens", "Fallopian tube", "Epididymis"],
          answer: 1,
          rationale:
            "A vasectomy involves cutting and sealing the vas deferens to prevent sperm from being included in the ejaculate.",
        },
        {
          id: "q10",
          question:
            "On physical examination, Monet Rivera is found to have cystocele. A cystocele is:",
          choices: [
            "A sebaceous cyst arising from a vulvar fold",
            "Protrusion of the intestine into the vagina",
            "Prolapse of the uterus and cervix into the vagina",
            "Herniation of the bladder into the vaginal wall",
          ],
          answer: 3,
          rationale:
            "A cystocele is the herniation, or bulging, of the bladder into the anterior vaginal wall.",
        },
        {
          id: "q11",
          question:
            "Monet Rivera typically has a menstrual cycle of 34 days. She tells you she had coitus on days 8, 10, 15, and 20 of her last cycle. Which is the day on which she most likely conceived?",
          choices: ["The 8th day", "The 10th day", "Day 15", "Day 20"],
          answer: 3,
          rationale:
            "Ovulation typically occurs 14 days before the next period; for a 34-day cycle, that is day 20 (34 − 14 = 20), making intercourse on day 20 the most likely day of conception.",
        },
        {
          id: "q12",
          question:
            "The Manalo's neighbor Cahrell is a woman who has sex with women. Another term for this sexual orientation is:",
          choices: ["Lesbian", "Celibate", "Gay", "Voyeur"],
          answer: 0,
          rationale:
            "A woman who is sexually attracted to and has relationships with other women is described as lesbian.",
        },
        {
          id: "q13",
          question:
            "Suppose Roseann, 17 years old, tells you that she wants to use fertility awareness method of contraception. How will she determine her fertile days?",
          choices: [
            "She will notice that she feels hot, as if she has an elevated temperature",
            "She should assess whether her cervical mucus is thin and watery",
            "She should monitor her emotions for sudden anger or crying",
            "She should assess whether her breasts feel sensitive to cool air",
          ],
          answer: 1,
          rationale:
            "Thin, clear, watery cervical mucus (spinnbarkeit) around ovulation is a key fertility awareness indicator of the fertile window.",
        },
        {
          id: "q14",
          question:
            "Suppose Roseann, 17 years old, chooses to use a combination oral contraceptive (COC) as her family planning method. What is a danger sign of COCs you would ask her to report?",
          choices: [
            "A stuffy or runny nose",
            "Arthritis-like symptoms",
            "Slight weight gain",
            "Migraine headache",
          ],
          answer: 3,
          rationale:
            "Severe or migraine headache is a recognized danger sign of oral contraceptive use (part of the ACHES mnemonic) that warrants prompt reporting.",
        },
        {
          id: "q15",
          question:
            "Suppose Roseann, 17 years old, chooses subcutaneous implants (Norplant) as her method of reproductive life planning. How long will these implants be effective?",
          choices: ["One month", "12 months", "Five years", "10 years"],
          answer: 2,
          rationale: "Norplant subcutaneous implants are effective for approximately five years.",
        },
        {
          id: "q16",
          question:
            "Roseann, 17 years old, wants to try female condoms as her reproductive life planning method. Which instruction would you give her?",
          choices: [
            "The hormone the condom releases may cause mild weight gain",
            "She should insert the condom before any penile penetration",
            "She should coat the condom with a spermicide before use",
            "Female condoms, unlike male condoms, can be reused",
          ],
          answer: 1,
          rationale:
            "The female condom should be inserted before any penile penetration occurs to be effective.",
        },
        {
          id: "q17",
          question:
            "Roseann, 17 years old, asks you how a tubal ligation prevents pregnancy. Which would be the best answer?",
          choices: [
            "Sperm can no longer reach the ova because fallopian tubes are blocked",
            "Sperm can not enter the uterus because the cervical entrance is blocked",
            "Prostaglandins released from the cut fallopian tubes can kill sperm",
            "The ovary no longer releases ova as there is nowhere for them to go",
          ],
          answer: 0,
          rationale:
            "Tubal ligation works by cutting or blocking the fallopian tubes, preventing sperm from reaching the ova for fertilization.",
        },
        {
          id: "q18",
          question:
            "The Atienzas are a couple undergoing testing for infertility. Infertility is said to exist when:",
          choices: [
            "A couple has been trying to conceive for 1 year",
            "A woman has no children",
            "A woman has no uterus",
            "A couple has wanted a child for 6 months",
          ],
          answer: 0,
          rationale:
            "Infertility is clinically defined as the inability to conceive after 1 year of regular, unprotected intercourse.",
        },
        {
          id: "q19",
          question:
            "Guadalupe Atienza is diagnosed as having endometriosis. This condition interferes with fertility because:",
          choices: [
            "The ovaries stop producing adequate estrogen",
            "The uterine cervix becomes inflamed and swollen",
            "Pressure on the pituitary leads to decreased FSH levels",
            "Endometrial implants can block the fallopian tubes",
          ],
          answer: 3,
          rationale:
            "Endometrial tissue implants outside the uterus can cause scarring and adhesions that block or distort the fallopian tubes, interfering with fertility.",
        },
        {
          id: "q20",
          question:
            "Guadalupe Atienza is scheduled to have a hysterosalpingogram. Which of the following instructions would you give her regarding this procedure?",
          choices: [
            "She may feel some mild cramping when the dye is inserted",
            "The sonogram of the uterus will reveal any tumors present",
            "She will not be able to conceive for three months after the procedure",
            "Many women experience mild bleeding as an after effect",
          ],
          answer: 0,
          rationale:
            "It is appropriate to inform her that she may feel some mild cramping as the dye is instilled during a hysterosalpingogram.",
        },
        {
          id: "q21",
          question:
            "Ruel Marasigan asks you what artificial insemination by donor entails. Which would be your best answer?",
          choices: [
            "Artificial sperm are injected vaginally to test tubal patency",
            "Donor sperm are introduced vaginally into the uterus of the cervix",
            "The husband's sperm is administered intravenously weekly",
            "Donor sperm are injected intraabdominally into each ovary",
          ],
          answer: 1,
          rationale:
            "Artificial insemination by donor involves introducing donor sperm into the uterus or cervix, typically via intrauterine or intracervical insemination.",
        },
        {
          id: "q22",
          question:
            "Guadalupe Atienza is having a gamete intrafallopian transfer (GIFT) procedure. What makes her a good candidate for this procedure?",
          choices: [
            "She has patent fallopian tubes, so fertilized ova can be implanted into them",
            "She is Rh negative, a necessary stipulation to rule out Rh incompatibility",
            "She has a normal uterus, so sperm can be injected through the cervix into it",
            "Her husband is taking sildenafil (Viagra), so all his sperm will be motile",
          ],
          answer: 0,
          rationale:
            "GIFT requires patent fallopian tubes since the gametes (egg and sperm) are placed directly into the tube for fertilization to occur in vivo.",
        },
        {
          id: "q23",
          question: "Jean Suarez is pregnant with her first child. Her phenotype refers to:",
          choices: [
            "Her concept of herself as male or female",
            "Whether she has 46 chromosomes or not",
            "Her actual genetic composition",
            "Her outward appearance",
          ],
          answer: 3,
          rationale:
            "Phenotype refers to an individual's observable physical characteristics or outward appearance, as opposed to genotype (genetic composition).",
        },
        {
          id: "q24",
          question:
            "Jean Suarez is a balanced translocation carrier for Down syndrome. This term means that:",
          choices: [
            "All of her children will be born with some aspects of Down syndrome",
            "All of her female and none of her male children will have Down syndrome",
            "She has a greater than average chance a child will have Down syndrome",
            "It is impossible for any of her children to be born with Down syndrome",
          ],
          answer: 2,
          rationale:
            "A balanced translocation carrier has a rearranged chromosome that doesn't affect them but confers a higher-than-average risk of passing on Down syndrome to offspring.",
        },
        {
          id: "q25",
          question:
            "Jean Suarez was told at a genetic counseling session that she is a balanced translocation carrier for Down syndrome. What would be your best action regarding this information?",
          choices: [
            "Be certain all of her family understand what this means",
            "Discuss the cost of various abortion techniques with Jean",
            "Be sure Jean knows she should not have any more children",
            "Ask Jean if she has any questions that you could answer for her",
          ],
          answer: 3,
          rationale:
            "The best nursing action is to remain supportive and open, asking if Jean has questions the nurse can help address, rather than making decisions or judgments for her.",
        },
        {
          id: "q26",
          question:
            "Jean Suarez's child is born with Down Syndrome. What is a common physical feature of a newborn with this disorder?",
          choices: [
            "Spastic and stiff muscles",
            "Loose skin at back of neck",
            "A white lock of forehead hair",
            "Wrinkles on soles of the feet",
          ],
          answer: 1,
          rationale:
            "Loose, excess skin at the back of the neck is a commonly observed physical feature in newborns with Down syndrome.",
        },
        {
          id: "q27",
          question:
            "Rizalyn asks how much longer her doctor will refer to the baby inside her as an embryo. What would be your best explanation?",
          choices: [
            "This term is used during the time before fertilization",
            "Her baby will be a fetus as soon as the placenta forms",
            "After the 20th week of pregnancy, the baby is called zygote",
            "From the time of implantation until 5 to 8 weeks, the baby is an embryo",
          ],
          answer: 3,
          rationale:
            "The developing baby is termed an embryo from implantation until approximately 5 to 8 weeks, after which it is termed a fetus.",
        },
        {
          id: "q28",
          question:
            "Rizalyn is worried that her baby will be born with congenital heart disease. What assessment of a fetus at birth is important to help detect congenital heart defects?",
          choices: [
            "Assessing whether the Wharton's jelly if the cord has a pH higher than 7.2",
            "Assessing whether the umbilical cord has two arteries and one vein",
            "Measuring the length of the cord to be certain that it is longer than three feet",
            "Determining that the color of the umbilical cord is not green",
          ],
          answer: 1,
          rationale:
            "A normal umbilical cord has two arteries and one vein; a single umbilical artery is associated with an increased risk of congenital anomalies, including cardiac defects.",
        },
        {
          id: "q29",
          question:
            "Rizalyn asks you why her doctor is concerned about whether her fetus is producing surfactant or not. Your best answer would be:",
          choices: [
            "Surfactant keeps lungs from collapsing on expiration, and thus aids newborn breathing",
            "Surfactant is produced by the fetal liver, so its precursor reveals liver maturity",
            "Surfactant is the precursor to IgM antibody production, so it prevents infection",
            "Surfactant reveals mature kidney function, as it is produced by kidney glomeruli",
          ],
          answer: 0,
          rationale:
            "Surfactant reduces surface tension in the alveoli, preventing lung collapse on expiration and enabling effective newborn breathing.",
        },
        {
          id: "q30",
          question:
            "Rizalyn is scheduled to have an ultrasound examination. What instruction would you give her before her examination?",
          choices: [
            "Void immediately before the procedure to reduce your bladder size",
            "The intravenous fluid infused to dilate your uterus does not hurt the fetus",
            "You will need to drink at least 3 glasses of fluid before the procedure",
            "You can have medicine for pain for any contractions caused by the test",
          ],
          answer: 2,
          rationale:
            "For a transabdominal ultrasound, a full bladder helps displace the uterus for better visualization, so the client is instructed to drink fluids beforehand rather than void.",
        },
        {
          id: "q31",
          question:
            "Rizalyn is scheduled to have an amniocentesis to test for fetal maturity. What instruction would you give her before this procedure?",
          choices: [
            "Void immediately before the procedure to reduce your bladder size",
            "The x-ray used to reveal your fetus' position has no long-term effects",
            "The intravenous fluid infused to dilate your uterus does not hurt the fetus",
            "No more amniotic fluid forms afterward, which is why only a small amount is removed",
          ],
          answer: 0,
          rationale:
            "Unlike ultrasound, amniocentesis requires an empty bladder to reduce its size and lower the risk of accidental puncture during the procedure.",
        },
        {
          id: "q32",
          question:
            "Bernadette sometimes feels ambivalent about being pregnant. What is the psychological task you'd like to see her complete during the first trimester of pregnancy?",
          choices: [
            "View morning sickness as tolerable",
            "Accept the fact that she's pregnant",
            "Accept the fact that a baby is growing inside her",
            "Choose a name for the baby",
          ],
          answer: 1,
          rationale:
            "The primary psychological task of the first trimester is accepting the fact of the pregnancy itself, before moving on to accepting the baby as a separate being later on.",
        },
        {
          id: "q33",
          question:
            "Bernadette is aware that she's been showing some narcissism since becoming pregnant. Which of her actions best describes narcissism?",
          choices: [
            'Her skin feels "pulled thin" across her abdomen',
            "Her thoughts tend to be mainly about herself",
            "She feels a need to sleep a lot more than usual",
            'She often feels "numb" or as if she\'s taken a narcotic',
          ],
          answer: 1,
          rationale:
            "Narcissism during pregnancy is reflected in an increased self-focus, with thoughts centered mainly on oneself.",
        },
        {
          id: "q34",
          question:
            "Bernadette did a urine pregnancy test but was surprised to learn that a positive result is not a sure sign of pregnancy. She asks you what would be a positive sign. You tell her it would be if:",
          choices: [
            "She is having consistent uterine growth",
            "She can feel the fetus move inside her",
            "hCG can be found in her bloodstream",
            "The fetal heart can be seen on ultrasound",
          ],
          answer: 3,
          rationale:
            "Positive signs of pregnancy are objective and can only be explained by pregnancy, such as visualizing the fetal heart on ultrasound; the other options are presumptive or probable signs.",
        },
        {
          id: "q35",
          question:
            "Bernadette's doctor told her she had a positive Chadwick's sign. She asks you what this means, and you tell her that:",
          choices: [
            "Her abdomen is soft and tender",
            "Her uterus has tipped forward",
            "Cervical mucus is clear and sticky",
            "Her vagina has darkened in color",
          ],
          answer: 3,
          rationale:
            "Chadwick's sign refers to the bluish-purple discoloration of the cervix and vagina caused by increased vascularity during pregnancy.",
        },
        {
          id: "q36",
          question:
            "Bernadette overheard her doctor say that insulin is not as effective during pregnancy as usual. That made her worry that she is developing diabetes, like her aunt. How would you explain how decreased insulin effectiveness safeguards the fetus?",
          choices: [
            "Decreased effectiveness prevents the fetus from being hypoglycemic",
            "If insulin is ineffective it cannot cross the placenta and harm the fetus",
            "The lessened action prevents the fetus from gaining too much weight",
            "The mother, not the fetus, is guarded by this decreased insulin action",
          ],
          answer: 0,
          rationale:
            "Normal pregnancy-related insulin resistance helps ensure more glucose remains available in maternal circulation to cross the placenta and nourish the fetus, preventing fetal hypoglycemia.",
        },
        {
          id: "q37",
          question:
            "Riza Cua feels well. She asks you why she needs to come for prenatal care. The best reason for her to receive regular care is:",
          choices: [
            "Discovering allergies can help eliminate early birth",
            "It helps document how many pregnancies occur each year",
            "It provides time for education about pregnancy and birth",
            "It determines whether pregnancies today are planned or not",
          ],
          answer: 2,
          rationale:
            "Regular prenatal visits provide essential opportunities for ongoing education about pregnancy, birth, and self-care, in addition to monitoring maternal-fetal health.",
        },
        {
          id: "q38",
          question:
            "Why is it important to ask Riza about past surgery on a pregnancy health history?",
          choices: [
            "To test her recent and long-term memory",
            "Adhesions from surgery could limit uterine growth",
            "To assess she could be allergic to any medication",
            "To determine if she has effective health insurance",
          ],
          answer: 1,
          rationale:
            "Adhesions from previous abdominal or pelvic surgery could potentially limit uterine growth or complicate the pregnancy, making surgical history clinically relevant.",
        },
        {
          id: "q39",
          question:
            "Riza reports that the palms of her hands are always itchy. You notice scratches on them when you do a physical exam. What is the most likely cause of this finding during pregnancy?",
          choices: [
            "She must have become allergic to dishwashing soap",
            "She has an allergy to her fetus and will probably abort",
            "Her weight gain has stretched the skin over her hands",
            "This is a common reaction to increasing estrogen levels",
          ],
          answer: 3,
          rationale:
            "Pruritus of the palms is a common reaction to rising estrogen levels during pregnancy.",
        },
        {
          id: "q40",
          question:
            "Riza has not had a pelvic exam since she was in high school. What advice would you give her to help her relax during her first prenatal pelvic exam?",
          choices: [
            "Have her take a deep breath and hold it during the exam",
            "Tell her to bear down slightly as the speculum is inserted",
            "Singing out loud helps, because this pushes down the diaphragm",
            "She should breathe slowly and evenly during the exam",
          ],
          answer: 3,
          rationale:
            "Slow, even breathing helps relax the pelvic floor muscles and reduce anxiety and discomfort during a pelvic examination.",
        },
        {
          id: "q41",
          question:
            "Riza has pelvic measurements taken. What size should the ischial tuberosity diameter be to be considered adequate?",
          choices: [
            "6 cm",
            "Twice the width of the conjugate diameter",
            "11 cm",
            "Half the width of the symphysis pubis",
          ],
          answer: 2,
          rationale:
            "An ischial tuberosity (bituberous) diameter of about 11 cm is generally considered adequate for vaginal delivery.",
        },
        {
          id: "q42",
          question:
            "Situation: One of the nursing roles in caring for the pregnant family is promoting fetal and maternal health. Which statement by Vanna Delgado would alert you that she needs more teaching about safe practices during pregnancy?",
          choices: [
            '"I take either a shower or tub bath, because I know both are safe."',
            '"I wash my breasts with clear water, not with soap daily."',
            "\"I'm glad I don't have to ask my boyfriend to use condoms anymore.\"",
            '"I\'m wearing low-heeled shoes to try and avoid backache."',
          ],
          answer: 2,
          rationale:
            "This statement indicates a misunderstanding — condom use for STI prevention is still important during pregnancy, and this statement suggests the need for further teaching.",
        },
        {
          id: "q43",
          question:
            "Vanna describes her typical day to you. What would alert you that she may need further pregnancy advice?",
          choices: [
            '"I jog rather than walk every time I can for exercise."',
            '"I always go to sleep on my side, not on my back."',
            '"I pack my lunch in the morning when I\'m not so tired."',
            '"I walk around my desk every hour to prevent varicosities."',
          ],
          answer: 0,
          rationale:
            "Vigorous activities such as jogging need to be carefully evaluated during pregnancy, especially for a woman not previously conditioned for it, warranting further guidance.",
        },
        {
          id: "q44",
          question:
            "Vanna tells you that she is developing painful hemorrhoids. Advice you would give her would be:",
          choices: [
            "Take a tablespoon of mineral oil with each of your meals",
            "Omit fiber from your diet. This will prevent constipation",
            "Lie on your stomach daily to drain blood from the rectal veins",
            "Witch hazel pads feel cool against swollen hemorrhoids",
          ],
          answer: 3,
          rationale:
            "Witch hazel pads provide a cooling, soothing effect against swollen, painful hemorrhoids and are a safe comfort measure during pregnancy.",
        },
        {
          id: "q45",
          question:
            "Vanna has ankle edema by the end of each day. Which statement by her would reveal that she understands what causes this?",
          choices: [
            '"I know this is a beginning complication; I\'ll call my doctor tonight."',
            '"I understand this is from eating too much salt; I\'ll restrict that more."',
            "\"I'll rest in a Sims' position to take pressure off lower extremity veins.\"",
            "\"I'll walk for half an hour every day to relieve this; I'll try walking more.\"",
          ],
          answer: 2,
          rationale:
            "Resting in a side-lying (Sims') position relieves pressure of the gravid uterus on the vena cava and pelvic veins, improving venous return and reducing dependent ankle edema.",
        },
      ],
    },
    {
      id: "pediatric-nursing",
      title: "PEDIATRIC NURSING",
      description: "50 questions from the PNLE reviewer.",
      questions: [
        {
          id: "q1",
          question:
            "While performing physical assessment of a 12 month-old, the nurse notes that the infant's anterior fontanelle is still slightly open. Which of the following is the nurse's most appropriate action?",
          choices: [
            "Notify the physician immediately because there is a problem",
            "Perform an intensive neurologic examination",
            "Perform an intensive developmental examination",
            "Do nothing because this is a normal finding for the age",
          ],
          answer: 3,
          rationale:
            "The anterior fontanelle typically closes anywhere between 12 to 18 months of age, so finding it still slightly open at 12 months is a normal finding requiring no further action.",
        },
        {
          id: "q2",
          question:
            "When teaching a mother about introducing solid foods to her child, which of the following indicates the earliest age at which this should be done?",
          choices: ["1 month", "2 months", "3 months", "4 months"],
          answer: 3,
          rationale:
            "Solid foods are not recommended before 4 to 6 months due to the sucking reflex and immaturity of the GI tract and immune system, so 4 months is the earliest appropriate age.",
        },
        {
          id: "q3",
          question:
            "The infant of a substance-abusing mother is at risk for developing a sense of which of the following?",
          choices: ["Mistrust", "Shame", "Guilt", "Inferiority"],
          answer: 0,
          rationale:
            "According to Erikson, infants whose needs are consistently unmet, such as those of a substance-abusing mother, develop a sense of mistrust of caregivers and the environment.",
        },
        {
          id: "q4",
          question: "Which of the following toys should the nurse recommend for a 5-month-old?",
          choices: [
            "A big red balloon",
            "A teddy bear with button eyes",
            "A push-pull wooden truck",
            "A colorful busy box",
          ],
          answer: 3,
          rationale:
            "A busy box facilitates the fine motor development that occurs between 4 and 6 months; balloons and button-eyed toys pose aspiration risks, and push-pull toys are too advanced for this age.",
        },
        {
          id: "q5",
          question:
            "The mother of a 2-month-old is concerned that she may be spoiling her baby by picking her up when she cries. Which of the following would be the nurse's best response?",
          choices: [
            '"Let her cry for a while before picking her up, so you don\'t spoil her"',
            '"Babies need to be held and cuddled; you won\'t spoil her this way"',
            '"Crying at this age means the baby is hungry; give her a bottle"',
            '"If you leave her alone she will learn how to cry herself to sleep"',
          ],
          answer: 1,
          rationale:
            "Infants need their security needs met by being held and cuddled; at 2 months, they cannot yet make the connection between crying and getting attention, so they cannot be 'spoiled' this way.",
        },
        {
          id: "q6",
          question:
            "When assessing an 18-month-old, the nurse notes a characteristic protruding abdomen. Which of the following would explain the rationale for this finding?",
          choices: [
            "Increased food intake owing to age",
            "Underdeveloped abdominal muscles",
            "Bowlegged posture",
            "Linear growth curve",
          ],
          answer: 1,
          rationale:
            "Underdeveloped abdominal musculature gives the toddler a characteristically protruding abdomen; food intake actually decreases during toddlerhood.",
        },
        {
          id: "q7",
          question:
            "If parents keep a toddler dependent in areas where he is capable of using skills, the toddler will develop a sense of which of the following?",
          choices: ["Mistrust", "Shame", "Guilt", "Inferiority"],
          answer: 1,
          rationale:
            "According to Erikson, toddlers develop a sense of shame when they are not allowed to develop appropriate independence and autonomy.",
        },
        {
          id: "q8",
          question: "Which of the following is an appropriate toy for an 18-month-old?",
          choices: ["Multiple-piece puzzle", "Miniature cars", "Finger paints", "Comic book"],
          answer: 2,
          rationale:
            "Young toddlers are sensorimotor learners who enjoy feeling different textures, making finger paints appropriate; small pieces (puzzles, miniature cars) pose aspiration hazards, and comic books are too advanced.",
        },
        {
          id: "q9",
          question:
            "When teaching parents about the child's readiness for toilet training, which of the following signs should the nurse instruct them to watch for in the toddler?",
          choices: [
            "Demonstrates dryness for 4 hours",
            "Demonstrates ability to sit and walk",
            "Has a new sibling for stimulation",
            "Verbalizes desire to go to the bathroom",
          ],
          answer: 3,
          rationale:
            "The child must be able to state the need to go to the bathroom to begin toilet training; dryness readiness is usually assessed at 2 hours, not 4, and a new sibling would likely hinder training.",
        },
        {
          id: "q10",
          question:
            "When teaching parents about typical toddler eating patterns, which of the following should be included?",
          choices: [
            'Food "jags"',
            "Preference to eat alone",
            "Consistent table manners",
            "Increase in appetite",
          ],
          answer: 0,
          rationale:
            "Toddlers become picky eaters, experiencing food jags where they eat large amounts one day and very little the next; their appetite actually decreases as growth rate slows.",
        },
        {
          id: "q11",
          question:
            "Which of the following suggestions should the nurse offer the parents of a 4-year-old boy who resists going to bed at night?",
          choices: [
            '"Allow him to fall asleep in your room, then move him to his own bed."',
            '"Tell him that you will lock him in his room if he gets out of bed one more time."',
            '"Encourage active play at bedtime to tire him out so he will fall asleep faster."',
            '"Read him a story and allow him to play quietly in his bed until he falls asleep."',
          ],
          answer: 3,
          rationale:
            "Quiet play and time with parents provide a positive bedtime routine that offers security and readies preschoolers, who often fear the dark and being left alone, for sleep.",
        },
        {
          id: "q12",
          question:
            "When providing therapeutic play, which of the following toys would best promote imaginative play in a 4-year-old?",
          choices: ["Large blocks", "Dress-up clothes", "Wooden puzzle", "Big wheels"],
          answer: 1,
          rationale:
            "Dress-up clothes enhance imaginative and fantasy play, unlike blocks and puzzles (fine motor) or big wheels (gross motor).",
        },
        {
          id: "q13",
          question:
            "Which of the following activities, when voiced by the parents following a teaching session about the characteristics of school-age cognitive development, would indicate the need for additional teaching?",
          choices: [
            "Collecting baseball cards and marbles",
            "Ordering dolls according to size",
            "Considering simple problem-solving options",
            "Developing plans for the future",
          ],
          answer: 3,
          rationale:
            "The school-age child is in the stage of concrete operations; considering future plans requires formal thought operations, which are not developed until adolescence.",
        },
        {
          id: "q14",
          question:
            "A hospitalized schoolager states: \"I'm not afraid of this place, I'm not afraid of anything.\" This statement is most likely an example of which of the following?",
          choices: ["Regression", "Repression", "Reaction formation", "Rationalization"],
          answer: 2,
          rationale:
            "Reaction formation, the schoolager's typical defense when hospitalized, involves expressing exaggerated opposite thoughts to override unacceptable feelings (like fear).",
        },
        {
          id: "q15",
          question:
            "After teaching a group of parents about accident prevention for schoolagers, which of the following statements by the group would indicate the need for more teaching?",
          choices: [
            '"Schoolagers are more active and adventurous than are younger children."',
            '"Schoolagers are more susceptible to home hazards than are younger children."',
            '"Schoolagers are unable to understand potential dangers around them."',
            '"Schoolagers are less subject to parental control than are younger children."',
          ],
          answer: 2,
          rationale:
            "Schoolagers' cognitive level is sufficiently developed to understand potential dangers and adhere to rules, so believing they cannot understand danger indicates a need for further teaching.",
        },
        {
          id: "q16",
          question:
            "Which of the following skills is the most significant one learned during the schoolage period?",
          choices: ["Collecting", "Ordering", "Reading", "Sorting"],
          answer: 2,
          rationale:
            "Reading is the most significant skill learned during the school-age period, as the child develops formal adult articulation and understanding of word structure.",
        },
        {
          id: "q17",
          question:
            "A child age 7 was unable to receive the measles, mumps, and rubella (MMR) vaccine at the recommended scheduled time. When would the nurse expect to administer MMR vaccine?",
          choices: ["In a month from now", "In a year from now", "At age 10", "At age 13"],
          answer: 2,
          rationale:
            "Per AAFP/AAP recommendations, the MMR vaccine should be given at age 10 if not received between ages 4 to 6 as originally scheduled.",
        },
        {
          id: "q18",
          question:
            "The adolescent's inability to develop a sense of who he is and what he can become results in a sense of which of the following?",
          choices: ["Shame", "Guilt", "Inferiority", "Role diffusion"],
          answer: 3,
          rationale:
            "According to Erikson, role diffusion develops when the adolescent does not develop a sense of identity and where they fit in.",
        },
        {
          id: "q19",
          question:
            "Which of the following would be most appropriate for a nurse to use when describing menarche to a 13-year-old?",
          choices: [
            'A female\'s first menstruation or menstrual "periods"',
            'The first year of menstruation or "period"',
            'The entire menstrual cycle or from one "period" to another',
            "The onset of uterine maturation or peak growth",
          ],
          answer: 0,
          rationale:
            "Menarche refers specifically to the onset of the very first menstrual period, not the first year or the ongoing cycle.",
        },
        {
          id: "q20",
          question:
            "A 14-year-old boy has acne and according to his parents, dominates the bathroom by using the mirror all the time. Which of the following remarks by the nurse would be least helpful in talking to the boy and his parents?",
          choices: [
            '"This is probably the only concern he has about his body. So don\'t worry about it or the time he spends on it."',
            '"Teenagers are anxious about how their peers perceive them. So they spend a lot of time grooming."',
            '"A teen may develop a poor self-image when experiencing acne. Do you feel this way sometimes?"',
            '"You appear to be keeping your face well washed. Would you feel comfortable discussing your cleansing method?"',
          ],
          answer: 0,
          rationale:
            "Dismissing the concern and telling the family not to worry shuts off further investigation and may make the adolescent and parents feel defensive, making it the least helpful response.",
        },
        {
          id: "q21",
          question:
            "Which of the following should the nurse suspect when noting that a 3-year-old is engaging in explicit sexual behavior during doll play?",
          choices: [
            "The child is exhibiting normal pre-school curiosity",
            "The child is acting out personal experiences",
            "The child does not know how to play with dolls",
            "The child is probably developmentally delayed",
          ],
          answer: 1,
          rationale:
            "Preschoolers are developmentally incapable of demonstrating explicit sexual behavior on their own; such behavior suggests exposure to it and should raise concern for sexual abuse.",
        },
        {
          id: "q22",
          question:
            "Which of the following statements by the parents of a child with school phobia would indicate the need for further teaching?",
          choices: [
            '"We\'ll keep him at home until phobia subsides."',
            '"We\'ll work with his teachers and counselors at school."',
            '"We\'ll try to encourage him to talk about his problem."',
            '"We\'ll discuss possible solutions with him and his counselor."',
          ],
          answer: 0,
          rationale:
            "Keeping the child home reinforces feelings of worthlessness and dependency; the child should continue attending school even while the phobia is being addressed.",
        },
        {
          id: "q23",
          question:
            "When developing a teaching plan for a group of high school students about teenage pregnancy, the nurse would keep in mind which of the following?",
          choices: [
            "The incidence of teenage pregnancies is increasing",
            "Most teenage pregnancies are planned",
            "Denial of the pregnancy is common early on",
            "The risk for complications during pregnancy is rare",
          ],
          answer: 2,
          rationale:
            "Adolescents who become pregnant typically deny the pregnancy early on, which can delay timely initiation of prenatal care and increase risk of complications.",
        },
        {
          id: "q24",
          question:
            "When assessing a child with a cleft palate, the nurse is aware that the child is at risk for more frequent episodes of otitis media due to which of the following?",
          choices: [
            "Lowered resistance from malnutrition",
            "Ineffective functioning of the Eustachian tubes",
            "Plugging of the Eustachian tubes with food particles",
            "Associated congenital defects of the middle ear",
          ],
          answer: 1,
          rationale:
            "The structural defect of cleft palate causes ineffective functioning of the Eustachian tubes, leading to frequent bouts of otitis media.",
        },
        {
          id: "q25",
          question:
            "While performing a neurodevelopmental assessment on a 3-month-old infant, which of the following characteristics would be expected?",
          choices: [
            "A strong Moro reflex",
            "A strong parachute reflex",
            "Rolling from front to back",
            "Lifting of head and chest when prone",
          ],
          answer: 3,
          rationale:
            "A 3-month-old should be able to lift the head and chest when prone; the Moro reflex diminishes by this age, the parachute reflex appears at 9 months, and rolling front-to-back occurs around 5 months.",
        },
        {
          id: "q26",
          question:
            "By the end of which of the following would the nurse most commonly expect a child's birth weight to triple?",
          choices: ["4 months", "7 months", "9 months", "12 months"],
          answer: 3,
          rationale: "A child's birth weight usually doubles by 4 months and triples by 12 months.",
        },
        {
          id: "q27",
          question: "Which of the following best describes parallel play between two toddlers?",
          choices: [
            "Sharing crayons to color separate pictures",
            "Playing a board game with a nurse",
            "Sitting near each other while playing with separate dolls",
            "Sharing their dolls with two different nurses",
          ],
          answer: 2,
          rationale:
            "Parallel play involves toddlers playing near each other but not with each other, such as sitting close by while each plays independently with their own doll.",
        },
        {
          id: "q28",
          question:
            "Which of the following would the nurse identify as the initial priority for a child with acute lymphocytic leukemia?",
          choices: [
            "Instituting infection control precautions",
            "Encouraging adequate intake of iron-rich foods",
            "Assisting with coping with chronic illness",
            "Administering medications via IM injections",
          ],
          answer: 0,
          rationale:
            "ALL causes leukopenia and immunosuppression, making infection a leading cause of death; instituting infection control precautions is therefore the initial priority.",
        },
        {
          id: "q29",
          question:
            "Which of the following information, when voiced by the mother, would indicate to the nurse that she understands home care instructions following the administration of a diphtheria, tetanus, and pertussis injection?",
          choices: [
            "Measures to reduce fever",
            "Need for dietary restrictions",
            "Reasons for subsequent rash",
            "Measures to control subsequent diarrhea",
          ],
          answer: 0,
          rationale:
            "The pertussis component may cause fever and the tetanus component may cause injection soreness, so knowing fever-reduction measures indicates correct understanding of DTP home care.",
        },
        {
          id: "q30",
          question:
            "Which of the following actions by a community health nurse is most appropriate when noting multiple bruises and burns on the posterior trunk of an 18-month-old child during a home visit?",
          choices: [
            "Report the child's condition to Protective Services immediately",
            "Schedule a follow-up visit to check for more bruises",
            "Notify the child's physician immediately",
            "Do nothing because this is a normal finding in a toddler",
          ],
          answer: 0,
          rationale:
            "Multiple bruises and burns are signs of child abuse and are not normal toddler injuries; the nurse must report immediately to Protective Services to protect the child from further harm.",
        },
        {
          id: "q31",
          question:
            'Which of the following is being used when the mother of a hospitalized child calls the student nurse and states, "You idiot, you have no idea how to care for my sick child"?',
          choices: ["Displacement", "Projection", "Repression", "Psychosis"],
          answer: 1,
          rationale:
            "The mother is using projection, attributing her own undesirable feelings (such as her own doubts or inadequacy) onto the nurse.",
        },
        {
          id: "q32",
          question:
            "Which of the following should the nurse expect to note as a frequent complication for a child with congenital heart disease?",
          choices: [
            "Susceptibility to respiratory infection",
            "Bleeding tendencies",
            "Frequent vomiting and diarrhea",
            "Seizure disorder",
          ],
          answer: 0,
          rationale:
            "Children with congenital heart disease are more prone to respiratory infections; bleeding, GI symptoms, and seizure disorders are not typically associated complications.",
        },
        {
          id: "q33",
          question:
            "Which of the following would the nurse do first for a 3-year-old boy who arrives in the emergency room with a temperature of 105 degrees, inspiratory stridor, and restlessness, who is leaning forward and drooling?",
          choices: [
            "Auscultate his lungs and place him in a mist tent",
            "Have him lie down and rest after encouraging fluids",
            "Examine his throat and perform a throat culture",
            "Notify the physician immediately and prepare for intubation",
          ],
          answer: 3,
          rationale:
            "These are classic signs of epiglottitis, a pediatric emergency; the physician must be notified immediately for potential emergency intubation, since throat exams risk fatal laryngospasm.",
        },
        {
          id: "q34",
          question:
            "Which of the following would the nurse need to keep in mind as a predisposing factor when formulating a teaching plan for a child with a urinary tract infection?",
          choices: [
            "A shorter urethra in females",
            "Frequent emptying of the bladder",
            "Increased fluid intake",
            "Ingestion of acidic juices",
          ],
          answer: 0,
          rationale:
            "A shorter urethra in females decreases the distance organisms must travel to reach the bladder, increasing UTI risk; the other options are actually protective measures.",
        },
        {
          id: "q35",
          question:
            "Which of the following should the nurse do first for a 15-year-old boy with a full leg cast who is screaming in unrelenting pain and exhibiting right foot pallor signifying compartment syndrome?",
          choices: [
            "Medicate him with acetaminophen",
            "Notify the physician immediately",
            "Release the traction",
            "Monitor him every 5 minutes",
          ],
          answer: 1,
          rationale:
            "Compartment syndrome is an emergent situation requiring immediate physician notification to relieve pressure and restore circulation; acetaminophen would be ineffective for ischemic pain.",
        },
        {
          id: "q36",
          question:
            "At which of the following ages would the nurse expect to administer the varicella zoster vaccine to a child?",
          choices: ["At birth", "2 months", "6 months", "12 months"],
          answer: 3,
          rationale: "The varicella zoster vaccine, a live vaccine, is given after age 12 months.",
        },
        {
          id: "q37",
          question:
            "When discussing normal infant growth and development with parents, which of the following toys would the nurse suggest as most appropriate for an 8-month-old?",
          choices: ["Push-pull toys", "Rattle", "Large blocks", "Mobile"],
          answer: 2,
          rationale:
            "An 8-month-old, refining gross motor skills (sitting unsupported) and fine motor skills (hand-to-hand transfer), would benefit most from large blocks; push-pull toys suit 10-12 month olds, and rattles/mobiles suit younger infants.",
        },
        {
          id: "q38",
          question:
            "Which of the following aspects of psychosocial development is necessary for the nurse to keep in mind when providing care for the preschool child?",
          choices: [
            "The child can use complex reasoning to think out situations",
            "Fear of body mutilation is a common preschool fear",
            "The child engages in competitive types of play",
            "Immediate gratification is necessary to develop initiative",
          ],
          answer: 1,
          rationale:
            "During the preschool period, children commonly experience more fears than at any other time, with fear of body mutilation, especially related to painful experiences, being a common one.",
        },
        {
          id: "q39",
          question:
            "Which of the following is characteristic of a preschooler with mild mental retardation?",
          choices: [
            "Slow to feed self",
            "Lack of speech",
            "Marked motor delays",
            "Gait disability",
          ],
          answer: 0,
          rationale:
            "Mild mental retardation (IQ 50-70) is typically characterized by slowness in performing tasks like self-feeding, walking, and talking, rather than absent speech or marked motor delays seen in more severe forms.",
        },
        {
          id: "q40",
          question:
            "Which of the following assessment findings would lead the nurse to suspect Down syndrome in an infant?",
          choices: [
            "Small tongue",
            "Transverse palmar crease",
            "Large nose",
            "Restricted joint movement",
          ],
          answer: 1,
          rationale:
            "Down syndrome is characterized by a transverse (simian) palmar crease, along with features like a depressed nasal bridge, large protruding tongue, and hyperextensible joints.",
        },
        {
          id: "q41",
          question:
            "While assessing a newborn with cleft lip, the nurse would be alert that which of the following will most likely be compromised?",
          choices: ["Sucking ability", "Respiratory status", "Locomotion", "GI function"],
          answer: 0,
          rationale:
            "Because of the defect, the child will be unable to form the mouth adequately around a nipple, compromising sucking ability and requiring special feeding devices.",
        },
        {
          id: "q42",
          question:
            "When providing postoperative care for the child with a cleft palate, the nurse should position the child in which of the following positions?",
          choices: ["Supine", "Prone", "In an infant seat", "On the side"],
          answer: 1,
          rationale:
            "Postoperatively, children with cleft palate should be placed prone to facilitate drainage and reduce aspiration risk, which the supine position or infant seat would not achieve as effectively.",
        },
        {
          id: "q43",
          question:
            "While assessing a child with pyloric stenosis, the nurse is likely to note which of the following?",
          choices: [
            "Regurgitation",
            "Steatorrhea",
            "Projectile vomiting",
            '"Currant jelly" stools',
          ],
          answer: 2,
          rationale:
            "Projectile vomiting is a key symptom of pyloric stenosis, distinct from regurgitation (GER), steatorrhea (celiac disease), or currant jelly stools (intussusception).",
        },
        {
          id: "q44",
          question:
            "Which of the following nursing diagnoses would be inappropriate for the infant with gastroesophageal reflux (GER)?",
          choices: [
            "Fluid volume deficit",
            "Risk for aspiration",
            "Altered nutrition: less than body requirements",
            "Altered oral mucous membranes",
          ],
          answer: 3,
          rationale:
            "GER involves backflow of gastric contents into the esophagus and does not cause alteration in the oral mucous membranes, unlike the other listed diagnoses which are appropriate.",
        },
        {
          id: "q45",
          question:
            "Which of the following parameters would the nurse monitor to evaluate the effectiveness of thickened feedings for an infant with gastroesophageal reflux (GER)?",
          choices: ["Vomiting", "Stools", "Uterine", "Weight"],
          answer: 0,
          rationale:
            "Thickened feedings are used with GER specifically to reduce vomiting, so monitoring vomiting directly evaluates their effectiveness.",
        },
        {
          id: "q46",
          question:
            "Discharge teaching for a child with celiac disease would include instructions about avoiding which of the following?",
          choices: ["Rice", "Milk", "Wheat", "Chicken"],
          answer: 2,
          rationale:
            "Children with celiac disease cannot tolerate gluten, so wheat and wheat-containing products must be avoided, while rice, milk, and chicken do not contain gluten.",
        },
        {
          id: "q47",
          question:
            "Which of the following would the nurse expect to assess in a child with celiac disease having a celiac crisis secondary to an upper respiratory infection?",
          choices: ["Respiratory distress", "Lethargy", "Watery diarrhea", "Weight gain"],
          answer: 2,
          rationale:
            "Celiac crisis, precipitated by infections or gluten exposure, is typically characterized by severe watery diarrhea, with weight loss rather than gain due to fluid loss.",
        },
        {
          id: "q48",
          question:
            "Which of the following should the nurse do first after noting that a child with Hirschsprung disease has a fever and watery explosive diarrhea?",
          choices: [
            "Notify the physician immediately",
            "Administer antidiarrheal medications",
            "Monitor child every 30 minutes",
            "Do nothing, this is characteristic of Hirschsprung disease",
          ],
          answer: 0,
          rationale:
            "Fever and explosive diarrhea in a child with Hirschsprung disease indicate enterocolitis, a life-threatening situation requiring immediate physician notification.",
        },
        {
          id: "q49",
          question:
            "A newborn's failure to pass meconium within the first 24 hours after birth may indicate which of the following?",
          choices: [
            "Hirschsprung disease",
            "Celiac disease",
            "Intussusception",
            "Abdominal wall defect",
          ],
          answer: 0,
          rationale:
            "Failure to pass meconium within 24 hours may indicate Hirschsprung disease, a congenital anomaly causing mechanical obstruction due to inadequate intestinal motility.",
        },
        {
          id: "q50",
          question:
            "When assessing a child for possible intussusception, which of the following would be least likely to provide valuable information?",
          choices: ["Stool inspection", "Pain pattern", "Family history", "Abdominal palpation"],
          answer: 2,
          rationale:
            "Because intussusception is not believed to have a familial tendency, obtaining a family history would provide the least amount of useful diagnostic information.",
        },
      ],
    },
  ],
};
