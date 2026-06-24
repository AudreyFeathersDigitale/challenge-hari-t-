"use client";

import { useEffect, useState } from "react";
import { questions } from "@/lib/questions";
import DiagnosticResult from "@/components/diagnostic/DiagnosticResult";
import { getDiagnosticProfile } from "@/lib/diagnosticRules";

type Answers = Record<string, string>;

export default function Home() {
  const [started, setStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [inputValue, setInputValue] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const savedAnswers = localStorage.getItem("hari_answers");
    const savedStep = localStorage.getItem("hari_step");
    const savedCompleted = localStorage.getItem("hari_completed");
    const savedStarted = localStorage.getItem("hari_started");

    if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
    if (savedStep) setCurrentStep(Number(savedStep));
    if (savedCompleted === "true") setCompleted(true);
    if (savedStarted === "true") setStarted(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("hari_answers", JSON.stringify(answers));
    localStorage.setItem("hari_step", currentStep.toString());
    localStorage.setItem("hari_completed", completed.toString());
    localStorage.setItem("hari_started", started.toString());
  }, [answers, currentStep, completed, started]);

  const currentQuestion = questions[currentStep];
  const progress = Math.round(((currentStep + 1) / questions.length) * 100);

  function personalize(text: string) {
    return text.replaceAll("{prenom}", answers.prenom || "");
  }

  function toggleOption(option: string) {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  }

  function goBack() {
    if (currentStep === 0) return;

    setCurrentStep((prev) => prev - 1);
    setInputValue("");
    setSelectedOptions([]);
  }

  function next(answer: string) {
    if (!answer.trim()) return;

    if (
      currentQuestion.type === "email" &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answer)
    ) {
      alert("Merci d’entrer un email valide");
      return;
    }

    const finalAnswers = {
      ...answers,
      [currentQuestion.id]: answer,
    };

    setAnswers(finalAnswers);
    setInputValue("");
    setSelectedOptions([]);

    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      const profile = getDiagnosticProfile(finalAnswers);

      fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...finalAnswers,
          profilDiagnostic: profile.title,
          miniAction: profile.miniAction,
        }),
      });

      setCompleted(true);
      localStorage.setItem("hari_completed", "true");
    }
  }

  function resetDiagnostic() {
    localStorage.removeItem("hari_answers");
    localStorage.removeItem("hari_step");
    localStorage.removeItem("hari_completed");
    localStorage.removeItem("hari_started");

    setStarted(false);
    setCurrentStep(0);
    setAnswers({});
    setInputValue("");
    setSelectedOptions([]);
    setCompleted(false);
  }

  if (completed) {
    return (
      <div className="relative">
        <DiagnosticResult
          profile={getDiagnosticProfile(answers)}
          prenom={answers.prenom}
        />

        <button
          onClick={resetDiagnostic}
          className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02]"
        >
          Refaire le diagnostic
        </button>
      </div>
    );
  }

  if (!started) {
    return (
      <main className="min-h-screen bg-[#fff7f1] flex items-start justify-center px-4 py-5 sm:items-center sm:py-8">
  <section className="relative w-full max-w-[430px] min-h-[780px] overflow-hidden rounded-[40px] bg-[#fdc3dc] p-5 text-black shadow-[0_18px_70px_rgba(0,0,0,0.12)]">
    
    <div className="relative z-10 flex min-h-[740px] flex-col rounded-[30px] bg-[#fff8d1] px-8 py-8 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]">
     <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[20px] font-black tracking-[-0.03em] text-black">
                  Challenge Été
                </p>
                <div className="mt-5 h-[4px] w-12 rounded-full bg-[#fdc3dc]" />
              </div>

              <div className="h-[100px] w-[100px] shrink-0 overflow-hidden rounded-full border-[3px] border-white bg-[#fdc3dc] shadow-sm">
                <img
                  src="/hari-forme.png"
                  alt="Hari"
                  className="h-full w-full object-cover object-[center_35%]"
                />
              </div>
            </div>

            <div className="mt-16">
              <h1 className="text-[54px] font-medium leading-[0.86] tracking-[-0.075em] text-black min-[380px]:text-[60px] sm:text-[68px]">
                Diagnostic
                <br />
                <span className="text-[#ef2f25]">Vente</span>
              </h1>

              <p className="mt-8 max-w-[320px] text-[16px] leading-8 text-black">
                Découvre ce qui bloque réellement tes ventes et repars avec ton{" "}
                <span className="font-bold text-[#ef2f25]">
                  plan d’action personnalisé.
                </span>
              </p>
            </div>

            <div className="mt-9 divide-y divide-black/10 text-[15px] text-black">
              <div className="flex items-center gap-4 py-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fdc3dc] text-[20px] font-bold text-[#ef2f25]">
                  →
                </span>
                <span>Clair et rapide</span>
              </div>

              <div className="flex items-center gap-4 py-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fdc3dc] text-[20px] font-bold text-[#ef2f25]">
                  →
                </span>
                <span>100% personnalisé</span>
              </div>

              <div className="flex items-center gap-4 py-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fdc3dc] text-[20px] font-bold text-[#ef2f25]">
                  →
                </span>
                <span>Une action concrète à la clé</span>
              </div>
            </div>

            <button
              onClick={() => {
                setStarted(true);
                localStorage.setItem("hari_started", "true");
              }}
              className="mt-5 flex w-full items-center justify-center rounded-[18px] bg-[#ef2f25] px-6 py-4 text-[15px] font-black text-white shadow-[0_18px_45px_rgba(239,47,37,0.22)] transition hover:scale-[1.01]"
            >
              Commencer mon diagnostic
            </button>

            <div className="mt-5 flex items-center justify-center rounded-[16px] border border-[#f1df8a] bg-[#ffed00] px-4 py-4 text-center text-[13px] font-medium text-black shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              C’est offert et confidentiel.
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fff7f1] flex items-start justify-center px-3 py-4 sm:items-center sm:px-4 sm:py-8">
      <section className="w-full max-w-[390px] rounded-[28px] bg-[#fdc3dc] p-4 shadow-[0_18px_70px_rgba(0,0,0,0.12)] sm:rounded-[32px]">
        <div className="rounded-[24px] bg-[#fff8d1] p-5 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]">
          {currentStep > 0 && (
            <button
              onClick={goBack}
              className="mb-6 flex items-center gap-2 text-sm font-bold text-[#ef2f25] transition hover:opacity-70"
            >
              ← Retour
            </button>
          )}

          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-black text-black">
                Étape {currentStep + 1} sur {questions.length}
              </p>

              <p className="text-sm font-black text-black">{progress}%</p>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-white/70">
              <div
                className="h-full rounded-full bg-[#ef2f25] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full border-[3px] border-white bg-[#fdc3dc] shadow-sm min-[380px]:h-[92px] min-[380px]:w-[92px] sm:h-[100px] sm:w-[100px]">
              <img
                src="/hari-logo.png"
                alt="Hari"
                className="h-full w-full object-cover object-[center_40%]"
              />
            </div>

            <div className="flex-1 whitespace-pre-line rounded-[24px] rounded-tl-sm bg-white px-5 py-4 text-[15px] leading-7 text-black shadow-sm">
              {personalize(currentQuestion.label)}
            </div>
          </div>

          {currentQuestion.type === "buttons" ? (
            <div className="mt-8 space-y-3">
              {currentQuestion.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => next(option)}
                  className="w-full rounded-[18px] border border-black/10 bg-white px-4 py-4 text-left text-sm font-bold text-black shadow-sm transition hover:border-[#ef2f25] hover:bg-[#ffed00]"
                >
                  {option}
                </button>
              ))}
            </div>
          ) : currentQuestion.type === "multi-buttons" ? (
            <>
              <div className="mt-8 space-y-3">
                {currentQuestion.options?.map((option) => {
                  const active = selectedOptions.includes(option);

                  return (
                    <button
                      key={option}
                      onClick={() => toggleOption(option)}
                      className={`w-full rounded-[18px] border px-4 py-4 text-left text-sm font-bold shadow-sm transition ${
                        active
                          ? "border-[#ef2f25] bg-white text-[#ef2f25]"
                          : "border-black/10 bg-white text-black hover:border-[#ef2f25] hover:bg-[#F9E500]"
                      }`}
                    >
                      {active ? "✓ " : ""}
                      {option}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => next(selectedOptions.join(", "))}
                className="mt-8 w-full rounded-[18px] bg-[#ef2f25] px-6 py-4 text-[15px] font-black text-white shadow-[0_18px_45px_rgba(239,47,37,0.22)] transition hover:scale-[1.01]"
              >
                Continuer
              </button>
            </>
          ) : (
            <>
              <div className="mt-10">
                <input
                  type={currentQuestion.type === "email" ? "email" : "text"}
                  placeholder="Écris ta réponse ici..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full rounded-[18px] border border-black/10 bg-white px-5 py-4 text-black shadow-sm outline-none transition placeholder:text-black/40 focus:border-[#ef2f25]"
                />
              </div>

              <button
                onClick={() => next(inputValue)}
                className="mt-8 w-full rounded-[18px] bg-[#ef2f25] px-6 py-4 text-[15px] font-black text-white shadow-[0_18px_45px_rgba(239,47,37,0.22)] transition hover:scale-[1.01]"
              >
                Continuer
              </button>
            </>
          )}

          <p className="mt-5 text-center text-xs font-medium text-black/70">
            Tes réponses sont 100% confidentielles
          </p>
        </div>
      </section>
    </main>
  );
}
