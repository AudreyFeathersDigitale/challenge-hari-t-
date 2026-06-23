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
      <main className="min-h-screen bg-[#fff8fb] flex items-start justify-center px-4 py-5 sm:items-center">
        <section className="relative w-full max-w-[390px] min-h-[760px] overflow-hidden rounded-[30px] border border-[#f4d7e3] bg-white px-5 py-7 text-black shadow-[0_18px_70px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold text-black">Challenge Été</p>

            <h1 className="mt-14 text-center text-[65px] font-medium leading-[0.88] tracking-[-0.07em] text-black">
              Diagnostic
              <br />
              <span className="text-[#ff2a23]">Vente</span>
            </h1>
          </div>

          <p className="mt-8 max-w-[315px] text-[16px] leading-8 text-[#4f4f4f]">
            Découvre ce qui bloque réellement tes ventes et repars avec ton{" "}
            <span className="font-semibold text-[#ff2a23]">
              plan d’action personnalisé.
            </span>
          </p>

          <div className="mt-10 space-y-5 text-[15px] text-[#333]">
  <div className="ml-6 flex items-center gap-3">
    <span className="text-[#ff2a23]">→</span>
    <span>Clair et rapide</span>
  </div>

  <div className="ml-6 flex items-center gap-3">
    <span className="text-[#ff2a23]">→</span>
    <span>100% personnalisé</span>
  </div>

  <div className="ml-6 flex items-center gap-3">
    <span className="text-[#ff2a23]">→</span>
    <span>Une action concrète à la clé</span>
  </div>
</div>

          <button
            onClick={() => {
              setStarted(true);
              localStorage.setItem("hari_started", "true");
            }}
            className="mt-11 w-full rounded-[14px] bg-[#ff2a23] px-6 py-4 text-[15px] font-bold text-white shadow-[0_18px_45px_rgba(255,42,35,0.20)] transition hover:scale-[1.01]"
          >
            Commencer mon diagnostic
          </button>

          <div className="absolute bottom-6 left-5 right-5 flex items-center justify-center rounded-[16px] border border-[#f4d7e3] bg-[#fff6cc] px-4 py-4 text-center text-[13px] font-medium text-[#555555]">
            C’est offert et confidentiel.
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fff8fb] flex items-start justify-center px-3 py-4 sm:items-center sm:px-4 sm:py-8">
      <section className="w-full max-w-[390px] rounded-[28px] border border-[#f4d7e3] bg-white p-6 shadow-[0_18px_70px_rgba(0,0,0,0.08)] sm:rounded-[32px]">
        {currentStep > 0 && (
          <button
            onClick={goBack}
            className="mb-6 flex items-center gap-2 text-sm font-medium text-[#ff2a23] transition hover:opacity-70"
          >
            ← Retour
          </button>
        )}

        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-black">
              Étape {currentStep + 1} sur {questions.length}
            </p>

            <p className="text-sm font-semibold text-black">{progress}%</p>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-[#fff6cc]">
            <div
              className="h-full rounded-full bg-[#ff2a23] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#eadcb0] shadow-sm">
  <img
    src="/hari-logo.png"
    alt="Hari"
    className="h-full w-full object-cover object-[center_40%]"
  />
</div>

          <div className="max-w-[260px] whitespace-pre-line rounded-[24px] rounded-tl-sm bg-[#fff6cc] px-5 py-4 text-[15px] leading-7 text-black shadow-sm">
            {personalize(currentQuestion.label)}
          </div>
        </div>

        {currentQuestion.type === "buttons" ? (
          <div className="mt-8 space-y-3">
            {currentQuestion.options?.map((option) => (
              <button
                key={option}
                onClick={() => next(option)}
                className="w-full rounded-[18px] border border-[#f4d7e3] bg-white px-4 py-4 text-left text-sm font-semibold text-black shadow-sm transition hover:border-[#ff2a23] hover:bg-[#fff6cc]"
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
                    className={`w-full rounded-[18px] border px-4 py-4 text-left text-sm font-semibold shadow-sm transition ${
                      active
                        ? "border-[#ff2a23] bg-[#fff6cc] text-[#ff2a23]"
                        : "border-[#f4d7e3] bg-white text-black hover:border-[#ff2a23] hover:bg-[#fff6cc]"
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
              className="mt-8 w-full rounded-[14px] bg-[#ff2a23] px-6 py-4 text-[15px] font-bold text-white shadow-[0_18px_45px_rgba(255,42,35,0.20)] transition hover:scale-[1.01]"
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
                className="w-full rounded-[18px] border border-[#f4d7e3] bg-white px-5 py-4 text-black shadow-sm outline-none transition placeholder:text-[#999999] focus:border-[#ff2a23]"
              />
            </div>

            <button
              onClick={() => next(inputValue)}
              className="mt-8 w-full rounded-[14px] bg-[#ff2a23] px-6 py-4 text-[15px] font-bold text-white shadow-[0_18px_45px_rgba(255,42,35,0.20)] transition hover:scale-[1.01]"
            >
              Continuer
            </button>
          </>
        )}

        <p className="mt-5 text-center text-xs text-[#777777]">
          Tes réponses sont 100% confidentielles
        </p>
      </section>
    </main>
  );
}