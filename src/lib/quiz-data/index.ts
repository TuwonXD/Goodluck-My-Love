import type { Subject } from "./types";
import { msnSubject } from "./msn";
import { maternSubject } from "./matern";
import { psychSubject } from "./psych";
import { chnSubject } from "./chn";
import { fonSubject } from "./fon";
import { pharmaSubject } from "./pharma";

export * from "./types";
export { msnSubject } from "./msn";
export { maternSubject } from "./matern";
export { psychSubject } from "./psych";
export { chnSubject } from "./chn";
export { fonSubject } from "./fon";
export { pharmaSubject } from "./pharma";

export const subjects: Subject[] = [
  msnSubject,
  maternSubject,
  psychSubject,
  chnSubject,
  fonSubject,
  pharmaSubject,
];

export function findSubject(id: string) {
  return subjects.find((s) => s.id === id);
}

export function findBank(subjectId: string, bankId: string) {
  return findSubject(subjectId)?.banks.find((b) => b.id === bankId);
}
