import type { Subject } from "./types";
import { medSurgNursing } from "./msn";
import { maternalChildNursing } from "./maternal";
import { psychiatricNursing } from "./psych";
import { communityHealthNursing } from "./chn";
import { fundamentalsOfNursing } from "./fundamentals";
import { pharmacology } from "./pharma";

export type { Question, TestBank, Subject } from "./types";

// Each subject now lives in its own file under src/lib/quiz-data/.
// Add a new subject by creating a file that exports a `Subject` object,
// then import + list it here.
export const subjects: Subject[] = [
  medSurgNursing,
  maternalChildNursing,
  psychiatricNursing,
  communityHealthNursing,
  fundamentalsOfNursing,
  pharmacology,
];

export function findSubject(id: string) {
  return subjects.find((s) => s.id === id);
}
export function findBank(subjectId: string, bankId: string) {
  return findSubject(subjectId)?.banks.find((b) => b.id === bankId);
}
