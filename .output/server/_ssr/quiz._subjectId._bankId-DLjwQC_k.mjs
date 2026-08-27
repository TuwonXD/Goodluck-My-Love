import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./quiz._subjectId._bankId-CC1-yPkH.mjs";
import { a as Play, f as ArrowLeft, i as RotateCcw, l as Check, r as Sparkles, t as X } from "../_libs/lucide-react.mjs";
import { t as SiteHeader } from "./site-header-yc62pHdz.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz._subjectId._bankId-DLjwQC_k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CorrectAnswerVideoModal({ onContinue }) {
	(0, import_react.useEffect)(() => {
		function onKeyDown(e) {
			if (e.key === "Escape") onContinue();
		}
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [onContinue]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-in fade-in-0",
		role: "dialog",
		"aria-modal": "true",
		"aria-label": "Correct answer celebration",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-3xl border border-border bg-card shadow-2xl animate-in zoom-in-95",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onContinue,
					"aria-label": "Close",
					className: "absolute right-3 top-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-black/40 text-white transition-colors hover:bg-black/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					src: "/correct-answer.mp4",
					autoPlay: true,
					playsInline: true,
					onEnded: onContinue,
					className: "block max-h-[70vh] max-w-[90vw] bg-black"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "p-4 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onContinue,
						className: "inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90",
						children: "Continue"
					})
				})
			]
		})
	});
}
/** Fisher-Yates shuffle — returns a new array, doesn't mutate the input. */
function shuffle(arr) {
	const a = arr.slice();
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}
function QuizPage() {
	const { subject, bank } = Route.useLoaderData();
	const bankTotal = bank.questions.length;
	const [started, setStarted] = (0, import_react.useState)(false);
	const [questionCount, setQuestionCount] = (0, import_react.useState)(Math.min(10, bankTotal));
	const [sessionQuestions, setSessionQuestions] = (0, import_react.useState)([]);
	const [index, setIndex] = (0, import_react.useState)(0);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [revealed, setRevealed] = (0, import_react.useState)(false);
	const [correctCount, setCorrectCount] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const [showCorrectVideo, setShowCorrectVideo] = (0, import_react.useState)(false);
	const q = sessionQuestions[index];
	const total = sessionQuestions.length;
	const progress = (0, import_react.useMemo)(() => total ? Math.round((index + (revealed ? 1 : 0)) / total * 100) : 0, [
		index,
		revealed,
		total
	]);
	function beginSession(count) {
		const shuffled = shuffle(bank.questions).slice(0, count);
		setSessionQuestions(shuffled);
		setIndex(0);
		setSelected(null);
		setRevealed(false);
		setCorrectCount(0);
		setDone(false);
		setShowCorrectVideo(false);
		setStarted(true);
	}
	function choose(i) {
		if (revealed) return;
		setSelected(i);
		setRevealed(true);
		if (i === q.answer) {
			setCorrectCount((c) => c + 1);
			setShowCorrectVideo(true);
		}
	}
	function next() {
		if (index + 1 >= total) {
			setDone(true);
			return;
		}
		setIndex((i) => i + 1);
		setSelected(null);
		setRevealed(false);
		setShowCorrectVideo(false);
	}
	function restart() {
		beginSession(questionCount);
	}
	function backToSetup() {
		setStarted(false);
		setDone(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-2xl px-5 pb-24 pt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/subject/$subjectId",
							params: { subjectId: subject.id },
							className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), subject.short]
						}), started && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: done ? "Done" : `Question ${index + 1} of ${total}`
						})]
					}),
					started && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 h-1 w-full overflow-hidden rounded-full bg-muted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-primary transition-[width] duration-500",
							style: { width: `${done ? 100 : progress}%` }
						})
					}),
					!started ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SetupCard, {
						bankTitle: bank.title,
						bankDescription: bank.description,
						bankTotal,
						questionCount,
						onChangeCount: setQuestionCount,
						onStart: () => beginSession(questionCount)
					}) : done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultCard, {
						correct: correctCount,
						total,
						onRestart: restart,
						onChangeSettings: backToSetup,
						subjectId: subject.id
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
							className: "mt-8 mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 text-xs font-medium uppercase tracking-[0.18em] text-primary",
								children: bank.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-2xl font-semibold leading-snug tracking-tight sm:text-[28px]",
								children: q.question
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2.5",
							children: q.choices.map((c, i) => {
								const isSelected = selected === i;
								const isAnswer = q.answer === i;
								let state = "idle";
								if (revealed) if (isAnswer) state = "correct";
								else if (isSelected) state = "wrong";
								else state = "muted";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => choose(i),
									disabled: revealed,
									className: [
										"flex w-full items-center gap-3 rounded-xl border p-4 text-left text-[15px] transition-all",
										state === "idle" && "border-border bg-card hover:border-primary/50 hover:bg-accent/40",
										state === "correct" && "border-success/60 bg-success/10 text-foreground",
										state === "wrong" && "border-destructive/60 bg-destructive/10 text-foreground",
										state === "muted" && "border-border bg-card text-muted-foreground"
									].filter(Boolean).join(" "),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: [
											"grid h-7 w-7 shrink-0 place-items-center rounded-full border text-xs font-semibold",
											state === "correct" && "border-success bg-success text-success-foreground",
											state === "wrong" && "border-destructive bg-destructive text-destructive-foreground",
											(state === "idle" || state === "muted") && "border-border bg-background text-muted-foreground"
										].filter(Boolean).join(" "),
										children: state === "correct" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3.5 w-3.5" }) : state === "wrong" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-3.5 w-3.5" }) : String.fromCharCode(65 + i)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "min-w-0 flex-1",
										children: c
									})]
								}) }, i);
							})
						}),
						revealed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-2xl border border-primary/25 bg-primary/5 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), selected === q.answer ? "Correct" : "Not quite"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[15px] leading-relaxed text-foreground/90",
									children: selected === q.answer ? "WOW YOU GOT IT RIGHT, ETO KISS MWA MWA MWA" : `The correct answer is ${String.fromCharCode(65 + q.answer)}. ${q.choices[q.answer]}`
								}),
								q.rationale && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-[14px] leading-relaxed text-muted-foreground",
									children: q.rationale
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: next,
									className: "mt-5 inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 sm:w-auto",
									children: index + 1 >= total ? "See results" : "Next question"
								})
							]
						})
					] })
				]
			}),
			showCorrectVideo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CorrectAnswerVideoModal, { onContinue: () => setShowCorrectVideo(false) })
		]
	});
}
function SetupCard({ bankTitle, bankDescription, bankTotal, questionCount, onChangeCount, onStart }) {
	const presets = [
		5,
		10,
		15,
		20,
		25,
		30,
		40,
		50
	].filter((n) => n < bankTotal);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-8 rounded-3xl border border-border bg-card p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-xs font-medium uppercase tracking-[0.18em] text-primary",
				children: bankTitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-2xl font-semibold leading-snug tracking-tight sm:text-[28px]",
				children: "Ready to start?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: bankDescription
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "question-count",
						className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
						children: "How many questions?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex flex-wrap gap-2",
						children: [presets.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => onChangeCount(n),
							className: ["rounded-full border px-4 py-2 text-sm font-medium transition-colors", questionCount === n ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent/40"].join(" "),
							children: n
						}, n)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onChangeCount(bankTotal),
							className: ["rounded-full border px-4 py-2 text-sm font-medium transition-colors", questionCount === bankTotal ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-accent/40"].join(" "),
							children: [
								"All (",
								bankTotal,
								")"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "question-count",
							type: "range",
							min: 1,
							max: bankTotal,
							step: 1,
							value: questionCount,
							onChange: (e) => onChangeCount(Number(e.target.value)),
							className: "h-1.5 w-full flex-1 cursor-pointer appearance-none rounded-full bg-muted accent-primary"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-14 shrink-0 text-right text-sm font-semibold tabular-nums",
							children: questionCount
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 text-xs text-muted-foreground",
						children: [
							"This bank has ",
							bankTotal,
							" question",
							bankTotal === 1 ? "" : "s",
							". Pick how many you want in this session — questions are shuffled into a new random order every time."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: onStart,
				disabled: questionCount < 1,
				className: "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4" }), "Start session"]
			})
		]
	});
}
function ResultCard({ correct, total, onRestart, onChangeSettings, subjectId }) {
	const pct = Math.round(correct / total * 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-10 rounded-3xl border border-border bg-card p-8 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.18em] text-primary",
				children: "Session complete"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-2 font-display text-4xl font-semibold tracking-tight",
				children: [correct, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted-foreground",
					children: ["/", total]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: [pct, "% correct"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto mt-5 max-w-sm text-[15px] text-foreground/85",
				children: pct >= 80 ? "Ang galing mo lovee, Keep going." : pct >= 60 ? "Solid effort. Review the misses and go again." : "Every miss is a lesson. You're closer than you think."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7 flex flex-col justify-center gap-2 sm:flex-row",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: onRestart,
						className: "inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4" }), "Try again"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onChangeSettings,
						className: "inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent",
						children: "Change question count"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/subject/$subjectId",
						params: { subjectId },
						className: "inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent",
						children: "Back to banks"
					})
				]
			})
		]
	});
}
//#endregion
export { QuizPage as component };
