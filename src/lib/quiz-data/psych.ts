import type { Subject } from "./types";

export const psychSubject: Subject = {
  id: "psych",
  name: "Psychiatric Nursing",
  short: "Psych",
  description: "Mental health disorders, therapeutic communication and interventions.",
  banks: [
    {
      id: "psychiatric-nursing-part-1",
      title: "PSYCHIATRIC NURSING PART 1",
      description: "25 questions from the PNLE reviewer.",
      questions: [
        {
          id: "q1",
          question:
            "Marco approached Nurse Trish asking for advice on how to deal with his alcohol addiction. Nurse Trish should tell the client that the only effective treatment for alcoholism is:",
          choices: [
            "Psychotherapy",
            "Alcoholics Anonymous (A.A.)",
            "Total abstinence",
            "Aversion Therapy",
          ],
          answer: 2,
          rationale: "Total abstinence is the only effective treatment for alcoholism.",
        },
        {
          id: "q2",
          question:
            "Nurse Hazel is caring for a male client who experiences false sensory perceptions with no basis in reality. This perception is known as:",
          choices: ["Hallucinations", "Delusions", "Loose associations", "Neologisms"],
          answer: 0,
          rationale:
            "Hallucinations are visual, auditory, gustatory, tactile, or olfactory perceptions that have no basis in reality.",
        },
        {
          id: "q3",
          question:
            "Nurse Monet is caring for a female client who has suicidal tendency. When accompanying the client to the restroom, Nurse Monet should…",
          choices: [
            "Give her privacy",
            "Allow her to urinate",
            "Open the window and allow her to get some fresh air",
            "Observe her",
          ],
          answer: 3,
          rationale:
            "The nurse has a responsibility to continuously observe the acutely suicidal client, watching for clues such as communicating suicidal thoughts, hoarding medications, and talking about death.",
        },
        {
          id: "q4",
          question:
            "Nurse Maureen is developing a plan of care for a female client with anorexia nervosa. Which action should the nurse include in the plan?",
          choices: [
            "Provide privacy during meals",
            "Set-up a strict eating plan for the client",
            "Encourage client to exercise to reduce anxiety",
            "Restrict visits with the family",
          ],
          answer: 1,
          rationale:
            "Establishing a consistent eating plan and monitoring the client's weight are important interventions for this disorder.",
        },
        {
          id: "q5",
          question:
            "A client is experiencing an anxiety attack. The most appropriate nursing intervention should include:",
          choices: [
            "Turning on the television",
            "Leaving the client alone",
            "Staying with the client and speaking in short sentences",
            "Asking the client to play with other clients",
          ],
          answer: 2,
          rationale:
            "Appropriate nursing interventions for an anxiety attack include using short sentences, staying with the client, decreasing stimuli, remaining calm, and medicating as needed.",
        },
        {
          id: "q6",
          question:
            "A female client is admitted with a diagnosis of delusions of GRANDEUR. This diagnosis reflects a belief that one is:",
          choices: [
            "Being killed",
            "Highly famous and important",
            "Responsible for evil in the world",
            "Connected to events unrelated to oneself",
          ],
          answer: 1,
          rationale:
            "Delusion of grandeur is a false belief that one is highly famous and important.",
        },
        {
          id: "q7",
          question:
            "Nurse Trish is caring for a client with dependent personality disorder. Which behavior is not likely to be evidence of ineffective individual coping?",
          choices: [
            "Recurrent self-destructive behavior",
            "Avoiding relationships",
            "Showing interest in solitary activities",
            "Inability to make choices and decisions without advice",
          ],
          answer: 3,
          rationale:
            "Individuals with dependent personality disorder typically show indecisiveness, submissiveness, and clinging behavior so that others will make decisions for them — this reliance itself is the expected pattern, not an unrelated finding.",
        },
        {
          id: "q8",
          question:
            "A male client is diagnosed with schizotypal personality disorder. Which signs would this client exhibit during a social situation?",
          choices: [
            "Paranoid thoughts",
            "Emotional affect",
            "Independence need",
            "Aggressive behavior",
          ],
          answer: 0,
          rationale:
            "Clients with schizotypal personality disorder experience excessive social anxiety that can lead to paranoid thoughts.",
        },
        {
          id: "q9",
          question:
            "Nurse Claire is caring for a client diagnosed with bulimia. The most appropriate initial goal for a client diagnosed with bulimia is to:",
          choices: [
            "Encourage the client to avoid foods",
            "Identify anxiety causing situations",
            "Eat only three meals a day",
            "Avoid shopping for plenty of groceries",
          ],
          answer: 1,
          rationale:
            "Bulimia is generally a maladaptive coping response to stress and underlying issues; the client should identify anxiety-causing situations that stimulate the bulimic behavior and then learn new ways of coping.",
        },
        {
          id: "q10",
          question:
            "Nurse Tony was caring for a 41 year old female client. Which behavior by the client indicates adult cognitive development?",
          choices: [
            "Generates new levels of awareness",
            "Assumes responsibility for her actions",
            "Has maximum ability to solve problems and learn new skills",
            "Her perceptions are based on reality",
          ],
          answer: 0,
          rationale:
            "An adult aged 31 to 45 generates new levels of awareness, reflecting this stage of adult cognitive development.",
        },
        {
          id: "q11",
          question:
            "A neuromuscular blocking agent is administered to a client before ECT therapy. The nurse should carefully observe the client for:",
          choices: ["Respiratory difficulties", "Nausea and vomiting", "Dizziness", "Seizures"],
          answer: 0,
          rationale:
            "Neuromuscular blockers, such as succinylcholine (Anectine), produce respiratory depression because they inhibit contraction of respiratory muscles.",
        },
        {
          id: "q12",
          question:
            "A 75 year old client is admitted to the hospital with the diagnosis of dementia of the Alzheimer's type and depression. The symptom that is unrelated to depression would be:",
          choices: [
            "Apathetic response to the environment",
            '"I don\'t know" answer to questions',
            "Shallow or labile affect",
            "Neglect of personal hygiene",
          ],
          answer: 2,
          rationale:
            "With depression, there is typically little or no emotional involvement, and therefore little alteration in affect — making shallow or labile affect unrelated to depression.",
        },
        {
          id: "q13",
          question:
            "Nurse Trish is working in a mental health facility; the nurse's priority nursing intervention for a newly admitted client with bulimia nervosa would be to:",
          choices: [
            "Teach client to measure I & O",
            "Involve client in planning daily meals",
            "Observe client during meals",
            "Monitor client continuously",
          ],
          answer: 3,
          rationale:
            "These clients often hide food or force vomiting, so they must be carefully and continuously monitored.",
        },
        {
          id: "q14",
          question:
            "Nurse Patricia is aware that the major health complication associated with intractable anorexia nervosa would be:",
          choices: [
            "Cardiac dysrhythmias resulting in cardiac arrest",
            "Glucose intolerance resulting in protracted hypoglycemia",
            "Endocrine imbalance causing cold amenorrhea",
            "Decreased metabolism causing cold intolerance",
          ],
          answer: 0,
          rationale:
            "These clients have severely depleted sodium and potassium levels because of their starvation diet and energy expenditure; these electrolytes are necessary for cardiac functioning, risking dysrhythmias and arrest.",
        },
        {
          id: "q15",
          question: "Nurse Anna can minimize agitation in a disturbed client by:",
          choices: [
            "Increasing stimulation",
            "Limiting unnecessary interaction",
            "Increasing appropriate sensory perception",
            "Ensuring constant client and staff contact",
          ],
          answer: 1,
          rationale: "Limiting unnecessary interaction decreases stimulation and agitation.",
        },
        {
          id: "q16",
          question:
            "A 39 year old mother with obsessive-compulsive disorder has become immobilized by her elaborate hand washing and walking rituals. Nurse Trish recognizes that the basis of O.C. disorder is often:",
          choices: [
            "Problems with being too conscientious",
            "Problems with anger and remorse",
            "Feelings of guilt and inadequacy",
            "Feelings of unworthiness and hopelessness",
          ],
          answer: 2,
          rationale:
            "Ritualistic behavior seen in this disorder is aimed at controlling guilt and inadequacy by maintaining an absolute, set pattern of behavior.",
        },
        {
          id: "q17",
          question:
            "Mario is complaining to other clients about not being allowed by staff to keep food in his room. Which of the following interventions would be most appropriate?",
          choices: [
            "Allowing a snack to be kept in his room",
            "Reprimanding the client",
            "Ignoring the client's behavior",
            "Setting limits on the behavior",
          ],
          answer: 3,
          rationale:
            "The nurse needs to set limits on the client's manipulative behavior to help the client control dysfunctional behavior, with a consistent staff approach to decrease manipulation.",
        },
        {
          id: "q18",
          question:
            'Conney, with borderline personality disorder, who is to be discharged soon threatens to "do something" to herself if discharged. Which of the following actions by the nurse would be most important?',
          choices: [
            "Ask a family member to stay with the client at home temporarily",
            "Discuss the meaning of the client's statement with her",
            "Request an immediate extension for the client",
            "Ignore the client's statement because it's a sign of manipulation",
          ],
          answer: 1,
          rationale:
            "Any suicidal statement must be assessed by the nurse. The nurse should discuss the client's statement with her to determine its meaning in terms of suicide.",
        },
        {
          id: "q19",
          question:
            'Joey, a client with antisocial personality disorder, belches loudly. A staff member asks Joey, "Do you know why people find you repulsive?" This statement most likely would elicit which of the following client reactions?',
          choices: ["Defensiveness", "Embarrassment", "Shame", "Remorsefulness"],
          answer: 0,
          rationale:
            "This question is belittling, so the natural tendency is for the client to feel defensive and counterattack the threat to his self-image.",
        },
        {
          id: "q20",
          question:
            "Which of the following approaches would be most appropriate to use with a client suffering from narcissistic personality disorder when discrepancies exist between what the client states and what actually exists?",
          choices: ["Rationalization", "Supportive confrontation", "Limit setting", "Consistency"],
          answer: 1,
          rationale:
            "The nurse would use supportive confrontation to point out discrepancies between what the client states and what actually exists, increasing responsibility for self.",
        },
        {
          id: "q21",
          question:
            "Cely, experiencing alcohol withdrawal, exhibits tremors, diaphoresis and hyperactivity. Blood pressure is 190/87 mmHg and pulse is 92 bpm. Which of the following medications would the nurse expect to administer?",
          choices: [
            "Naloxone (Narcan)",
            "Benztropine (Cogentin)",
            "Lorazepam (Ativan)",
            "Haloperidol (Haldol)",
          ],
          answer: 2,
          rationale:
            "The nurse would most likely administer a benzodiazepine such as lorazepam (Ativan) for these withdrawal symptoms, which occur from the rebound phenomenon as CNS sedation from alcohol decreases.",
        },
        {
          id: "q22",
          question:
            "Which of the following foods would the nurse eliminate from the diet of a client in alcohol withdrawal?",
          choices: ["Milk", "Orange Juice", "Soda", "Regular Coffee"],
          answer: 3,
          rationale:
            "Regular coffee contains caffeine, which acts as a psychomotor stimulant and can add to feelings of anxiety, tremors, or wakefulness.",
        },
        {
          id: "q23",
          question:
            "Which of the following would Nurse Hazel expect to assess for a client who is exhibiting late signs of heroin withdrawal?",
          choices: [
            "Yawning & diaphoresis",
            "Restlessness & Irritability",
            "Constipation & steatorrhea",
            "Vomiting and Diarrhea",
          ],
          answer: 3,
          rationale:
            "Vomiting and diarrhea are usually late signs of heroin withdrawal, along with muscle spasm, fever, nausea, repetitive abdominal cramps, and backache.",
        },
        {
          id: "q24",
          question:
            "To establish an open and trusting relationship with a female client who has been hospitalized with severe anxiety, the nurse in charge should:",
          choices: [
            "Encourage the staff to have frequent interaction with the client",
            "Share an activity with the client",
            "Give client feedback about behavior",
            "Respect client's need for personal space",
          ],
          answer: 3,
          rationale:
            "Moving into a client's personal space increases the feeling of threat, which increases anxiety, so respecting personal space builds trust.",
        },
        {
          id: "q25",
          question:
            "Nurse Monette recognizes that the focus of environmental (milieu) therapy is to:",
          choices: [
            "Manipulate the environment to bring about positive changes in behavior",
            "Allow the client's freedom to determine whether or not they will be involved in activities",
            "Role play life events to meet individual needs",
            "Use natural remedies rather than drugs to control behavior",
          ],
          answer: 0,
          rationale:
            "Environmental (milieu) therapy aims at shaping everything in the client's surrounding environment toward helping the client.",
        },
      ],
    },
    {
      id: "psychiatric-nursing-part-2",
      title: "PSYCHIATRIC NURSING PART 2",
      description: "25 questions from the PNLE reviewer.",
      questions: [
        {
          id: "q1",
          question:
            "Nurse Trish would expect a child with a diagnosis of reactive attachment disorder to:",
          choices: [
            "Have more positive relation with the father than the mother",
            "Cling to mother & cry on separation",
            "Be able to develop only superficial relations with others",
            "Have been physically abused",
          ],
          answer: 2,
          rationale:
            "Children who have experienced attachment difficulties with their primary caregiver are not able to trust others and therefore relate only superficially.",
        },
        {
          id: "q2",
          question: "When teaching parents about childhood depression, Nurse Trina should say:",
          choices: [
            "It may appear as acting out behavior",
            "It does not respond to conventional treatment",
            "It is short in duration & resolves easily",
            "It looks almost identical to adult depression",
          ],
          answer: 0,
          rationale:
            "Children have difficulty verbally expressing their feelings, so acting-out behavior, such as temper tantrums, may indicate underlying depression.",
        },
        {
          id: "q3",
          question:
            "Nurse Perry is aware that language development in an autistic child resembles:",
          choices: ["Scanning speech", "Speech lag", "Stuttering", "Echolalia"],
          answer: 3,
          rationale:
            "The autistic child repeats sounds or words spoken by others, a pattern known as echolalia.",
        },
        {
          id: "q4",
          question:
            'A 60 year old female client who lives alone tells the nurse at the community health center, "I really don\'t need anyone to talk to. The TV is my best friend." The nurse recognizes that the client is using the defense mechanism known as:',
          choices: ["Displacement", "Projection", "Sublimation", "Denial"],
          answer: 3,
          rationale:
            "The client's statement is an example of denial, a defense mechanism that blocks problems by unconsciously refusing to admit they exist.",
        },
        {
          id: "q5",
          question:
            "When working with a male client suffering from a phobia about black cats, Nurse Trish should anticipate that a problem for this client would be:",
          choices: [
            "Anxiety when discussing the phobia",
            "Anger toward the feared object",
            "Denying that the phobia exists",
            "Distortion of reality when completing daily routines",
          ],
          answer: 0,
          rationale:
            "Discussion of the feared object triggers an emotional (anxiety) response to the object.",
        },
        {
          id: "q6",
          question:
            "Linda is pacing the floor and appears extremely anxious. The duty nurse approaches in an attempt to alleviate Linda's anxiety. The most therapeutic question by the nurse would be:",
          choices: [
            "Would you like to watch TV?",
            "Would you like me to talk with you?",
            "Are you feeling upset now?",
            "Ignore the client",
          ],
          answer: 1,
          rationale:
            "The nurse's presence and offer to talk may provide the client with support and a feeling of control.",
        },
        {
          id: "q7",
          question:
            "Nurse Penny is aware that the symptoms that distinguish post-traumatic stress disorder from other anxiety disorders would be:",
          choices: [
            "Avoidance of situations & certain activities that resemble the stress",
            "Depression and a blunted affect when discussing the traumatic situation",
            "Lack of interest in family & others",
            "Re-experiencing the trauma in dreams or flashbacks",
          ],
          answer: 3,
          rationale:
            "Re-experiencing the actual trauma in dreams or flashbacks is the major symptom that distinguishes PTSD from other anxiety disorders.",
        },
        {
          id: "q8",
          question:
            "Nurse Benjie is communicating with a male client with substance-induced persisting dementia; the client cannot remember facts and fills in the gaps with imaginary information. Nurse Benjie is aware that this is typical of:",
          choices: ["Flight of ideas", "Associative looseness", "Confabulation", "Concretism"],
          answer: 2,
          rationale:
            "Confabulation, or the filling in of memory gaps with imaginary facts, is a defense mechanism used by people experiencing memory deficits.",
        },
        {
          id: "q9",
          question:
            "Nurse Joey is aware that the signs & symptoms that would be most specific for diagnosing anorexia are:",
          choices: [
            "Excessive weight loss, amenorrhea & abdominal distension",
            "Slow pulse, 10% weight loss & alopecia",
            "Compulsive behavior, excessive fears & nausea",
            "Excessive activity, memory lapses & an increased pulse",
          ],
          answer: 0,
          rationale:
            "These are the major signs of anorexia nervosa; weight loss is excessive (about 15% of expected weight).",
        },
        {
          id: "q10",
          question:
            "A characteristic that would suggest to Nurse Anne that an adolescent may have bulimia would be:",
          choices: [
            "Frequent regurgitation & re-swallowing of food",
            "Previous history of gastritis",
            "Badly stained teeth",
            "Positive body image",
          ],
          answer: 2,
          rationale:
            "Dental enamel erosion, causing badly stained teeth, occurs from repeated self-induced vomiting characteristic of bulimia.",
        },
        {
          id: "q11",
          question:
            "Nurse Monette is aware that extremely depressed clients seem to do best in settings where they have:",
          choices: [
            "Multiple stimuli",
            "Routine Activities",
            "Minimal decision making",
            "Varied Activities",
          ],
          answer: 1,
          rationale:
            "Depression is both emotional and physical; a simple daily routine is the least stressful and least anxiety-producing setting.",
        },
        {
          id: "q12",
          question:
            "To further assess a client's suicidal potential, Nurse Katrina should be especially alert to the client's expression of:",
          choices: [
            "Frustration & fear of death",
            "Anger & resentment",
            "Anxiety & loneliness",
            "Helplessness & hopelessness",
          ],
          answer: 3,
          rationale:
            "Expressions of helplessness and hopelessness may indicate that the client feels unable to continue the struggle of life, signaling suicide risk.",
        },
        {
          id: "q13",
          question: "A nursing care plan for a male client with bipolar I disorder should include:",
          choices: [
            "Providing a structured environment",
            "Designing activities that will require the client to maintain contact with reality",
            "Engaging the client in conversing about current affairs",
            "Touching the client to provide assurance",
          ],
          answer: 0,
          rationale:
            "Structure tends to decrease agitation and anxiety and to increase the client's feeling of security.",
        },
        {
          id: "q14",
          question:
            "When planning care for a female client using ritualistic behavior, Nurse Gina must recognize that the ritual:",
          choices: [
            "Helps the client focus on the inability to deal with reality",
            "Helps the client control the anxiety",
            "Is under the client's conscious control",
            "Is used by the client primarily for secondary gains",
          ],
          answer: 1,
          rationale:
            "The rituals used by a client with obsessive-compulsive disorder help control the anxiety level by maintaining a set pattern of action.",
        },
        {
          id: "q15",
          question:
            "A 32 year old male graduate student, who has become increasingly withdrawn and neglectful of his work and personal hygiene, is brought to the psychiatric hospital by his parents. After detailed assessment, a diagnosis of schizophrenia is made. It is unlikely that the client will demonstrate:",
          choices: [
            "Low self esteem",
            "Concrete thinking",
            "Effective self-boundaries",
            "Weak ego",
          ],
          answer: 2,
          rationale:
            "A person with schizophrenia would not have adequate self-boundaries, making effective self-boundaries unlikely to be demonstrated.",
        },
        {
          id: "q16",
          question:
            "A 23 year old client admitted with a diagnosis of schizophrenia says to the nurse, \"Yes, it's march, March is little woman. That's literal you know.\" This statement illustrates:",
          choices: ["Neologisms", "Echolalia", "Flight of ideas", "Loosening of association"],
          answer: 3,
          rationale:
            "Loose associations are thoughts presented without the logical connections usually necessary for the listener to interpret the message.",
        },
        {
          id: "q17",
          question:
            "A long term goal for a paranoid male client who has unjustifiably accused his wife of having many extramarital affairs would be to help the client develop:",
          choices: [
            "Insight into his behavior",
            "Better self-control",
            "Feelings of self-worth",
            "Faith in his wife",
          ],
          answer: 2,
          rationale:
            "Helping the client develop feelings of self-worth would reduce his need to use pathologic defenses such as unfounded jealousy and accusation.",
        },
        {
          id: "q18",
          question:
            "A male client who is experiencing disordered thinking about food being poisoned is admitted to the mental health unit. The nurse uses which communication technique to encourage the client to eat dinner?",
          choices: [
            "Focusing on self-disclosure of own food preference",
            "Using open ended questions and silence",
            "Offering opinion about the need to eat",
            "Verbalizing reasons that the client may not choose to eat",
          ],
          answer: 1,
          rationale:
            "Open-ended questions and silence are strategies used to encourage clients to discuss their problem in a descriptive manner.",
        },
        {
          id: "q19",
          question:
            "Nurse Nina is assigned to care for a client diagnosed with Catatonic Stupor. When Nurse Nina enters the client's room, the client is found lying on the bed with a body pulled into a fetal position. Nurse Nina should:",
          choices: [
            "Ask the client direct questions to encourage talking",
            "Take the client into the dayroom to be with other clients",
            "Sit beside the client in silence and occasionally ask open-ended questions",
            "Leave the client alone and continue with providing care to the other clients",
          ],
          answer: 2,
          rationale:
            "Withdrawn clients may be immobile and mute, requiring consistent, patient intervention. The nurse facilitates communication by sitting in silence, asking open-ended questions, and pausing to allow the client to respond.",
        },
        {
          id: "q20",
          question:
            'Nurse Tina is caring for a client with delirium who states, "look at the spiders on the wall." What should the nurse respond to the client?',
          choices: [
            '"You\'re having a hallucination, there are no spiders in this room at all"',
            '"I can see the spiders on the wall, but they are not going to hurt you"',
            '"Would you like me to kill the spiders?"',
            '"I know you are frightened, but I do not see spiders on the wall"',
          ],
          answer: 3,
          rationale:
            "When a hallucination is present, the nurse should reinforce reality with the client while still acknowledging the client's feelings.",
        },
        {
          id: "q21",
          question:
            "Nurse Jonel is providing information to a community group about violence in the family. Which statement by a group member would indicate a need to provide additional information?",
          choices: [
            '"Abuse occurs more in low-income families"',
            '"Abusers are often jealous or self-centered"',
            '"Abusers use fear and intimidation"',
            '"Abusers usually have poor self-esteem"',
          ],
          answer: 0,
          rationale:
            "Personal characteristics of abusers include low self-esteem, immaturity, dependence, insecurity, and jealousy; abuse is not limited to or more common in low-income families specifically, so this statement indicates a misconception needing correction.",
        },
        {
          id: "q22",
          question:
            "During electroconvulsive therapy (ECT), the client receives oxygen by mask via positive pressure ventilation. The nurse assisting with this procedure knows that positive pressure ventilation is necessary because:",
          choices: [
            "Anesthesia is administered during the procedure",
            "Decreased oxygen to the brain increases confusion and disorientation",
            "Grand mal seizure activity depresses respirations",
            "Muscle relaxants given to prevent injury during seizure activity depress respirations",
          ],
          answer: 3,
          rationale:
            "A short-acting skeletal muscle relaxant such as succinylcholine (Anectine) is administered during this procedure to prevent injury, and this depresses respirations, requiring positive pressure ventilation support.",
        },
        {
          id: "q23",
          question:
            "When planning the discharge of a client with chronic anxiety, Nurse Chris evaluates achievement of the discharge maintenance goals. Which goal would be most appropriately included in the plan of care requiring evaluation?",
          choices: [
            "The client eliminates all anxiety from daily situations",
            "The client ignores feelings of anxiety",
            "The client identifies anxiety producing situations",
            "The client maintains contact with a crisis counselor",
          ],
          answer: 2,
          rationale:
            "Recognizing situations that produce anxiety allows the client to prepare to cope with anxiety or avoid specific stimuli, making this a realistic and appropriate discharge goal.",
        },
        {
          id: "q24",
          question:
            "Nurse Tina is caring for a client with depression who has not responded to antidepressant medication. The nurse anticipates that what treatment procedure may be prescribed?",
          choices: [
            "Neuroleptic medication",
            "Short term seclusion",
            "Psychosurgery",
            "Electroconvulsive therapy",
          ],
          answer: 3,
          rationale:
            "Electroconvulsive therapy is an effective treatment for depression that has not responded to medication.",
        },
        {
          id: "q25",
          question:
            "Mario is admitted to the emergency room with drug-induced toxicity related to overingestion of prescribed antipsychotic medication. The most important piece of information the nurse in charge should obtain initially is the:",
          choices: [
            "Length of time on the medication",
            "Name of the ingested medication & the amount ingested",
            "Reason for the suicide attempt",
            "Name of the nearest relative & their phone number",
          ],
          answer: 1,
          rationale:
            "In an emergency, life-saving facts are obtained first; the name and amount of medication ingested are of utmost importance in treating this potentially life-threatening situation.",
        },
      ],
    },
  ],
};
