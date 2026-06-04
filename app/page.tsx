"use client";

import { useState } from "react";
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
      alert("Merci d’entrer un email valide 💌");
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

      console.log("Diagnostic terminé :", finalAnswers);
      setCompleted(true);
    }
  }

  if (completed) {
    return (
      <DiagnosticResult
        profile={getDiagnosticProfile(answers)}
        prenom={answers.prenom}
      />
    );
  }

  if (!started) {
    return (
      <main className="min-h-screen bg-[#fff7f1] flex items-start justify-center px-3 py-4 sm:items-center sm:px-5 sm:py-8">
        <section className="relative w-full max-w-[390px] min-h-[calc(100vh-32px)] overflow-hidden rounded-[30px] border border-[#f7b6a5] shadow-[0_10px_40px_rgba(255,120,160,0.18)] sm:min-h-[760px] sm:rounded-[34px]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/beach.png"
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#fff8f2]/78 opacity-35" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf8]/65 via-[#fff4e7]/35 to-[#ffc98c]/28" />
          </div>

          <div className="relative z-10 flex min-h-[calc(100vh-32px)] flex-col items-center px-8 pt-10 text-center sm:min-h-[760px] sm:pt-12">
               <h1 className="font-serif text-[56px] leading-[0.9] tracking-[-0.04em] text-[#131f4b] sm:text-[58px]">
              Diagnostic
              <br />
              Vente
            </h1>

            <div className="my-6 text-4xl text-[#ff4f87]">♡</div>

            <p className="max-w-[280px] text-[17px] leading-6 text-[#1b2340]">
              Découvre ce qui bloque réellement tes ventes et repars avec ton{" "}
              <span className="font-semibold text-[#ff3f7f]">
                plan d’action personnalisé
              </span>
            </p>

            <div className="mt-8 space-y-3 text-left text-[15px] font-medium text-[#1b2340]">
              <p>🎯 100% personnalisé</p>
              <p>☆ Une action concrète à la clé</p>
              <p>🔒 ⁠100% sécurisé et confidentiel</p>
            </div>

            <div className="mt-14 w-full pb-7">
              <button
                onClick={() => setStarted(true)}
                className="w-full rounded-full bg-gradient-to-r from-[#ff4f87] to-[#ff6b9d] px-6 py-3.5 text-[15px] font-bold text-white shadow-xl shadow-pink-300/40 transition hover:scale-[1.02] sm:py-4 sm:text-[16px]"
              >
                Je veux mon diagnostic ✨
              </button>

            
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fff7f1] flex items-start justify-center px-3 py-4 sm:items-center sm:px-4 sm:py-8">
      <section className="w-full max-w-[390px] rounded-[28px] border border-[#f3c8bb] bg-[#fffdfb] p-6 shadow-[0_10px_40px_rgba(255,120,160,0.12)] sm:rounded-[32px]">
        {currentStep > 0 && (
          <button
            onClick={goBack}
            className="mb-6 flex items-center gap-2 text-sm font-medium text-[#ff4f87] transition hover:opacity-70"
          >
            ← Retour
          </button>
        )}

        <div className="mb-8">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-[#1d2340]">
              Étape {currentStep + 1} sur {questions.length}
            </p>
            <p className="text-sm font-semibold text-[#1d2340]">
              {progress}%
            </p>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-[#f4dfd7]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#ff4f87] to-[#ff6b9d] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ffd7c7] to-[#fff1e8] text-xl shadow-sm">
            👩🏻
          </div>

          <div className="max-w-[260px] whitespace-pre-line rounded-[24px] rounded-tl-sm bg-gradient-to-br from-[#fff1f4] to-[#fff6f3] px-5 py-4 text-[15px] leading-7 text-[#1d2340] shadow-sm">
            {personalize(currentQuestion.label)}
          </div>
        </div>

        {currentQuestion.type === "buttons" ? (
          <div className="mt-8 space-y-3">
            {currentQuestion.options?.map((option) => (
              <button
                key={option}
                onClick={() => next(option)}
                className="w-full rounded-[18px] border border-[#f1ddd5] bg-white px-4 py-4 text-left text-sm font-semibold text-[#1d2340] shadow-sm transition hover:border-[#ff4f87] hover:bg-[#fff7fa]"
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
                        ? "border-[#ff4f87] bg-[#ffe8f1] text-[#ff4f87]"
                        : "border-[#f1ddd5] bg-white text-[#1d2340] hover:border-[#ff4f87] hover:bg-[#fff7fa]"
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
              className="mt-8 w-full rounded-full bg-gradient-to-r from-[#ff4f87] to-[#ff6b9d] px-6 py-3.5 text-[15px] font-bold text-white shadow-xl shadow-pink-200 transition hover:scale-[1.01] sm:py-4 sm:text-[16px]"
            >
              Continuer →
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
                className="w-full rounded-[18px] border border-[#f1ddd5] bg-white px-5 py-4 text-[#1d2340] shadow-sm outline-none transition placeholder:text-[#b49b91] focus:border-[#ff4f87]"
              />
            </div>

            <button
              onClick={() => next(inputValue)}
              className="mt-8 w-full rounded-full bg-gradient-to-r from-[#ff4f87] to-[#ff6b9d] px-6 py-3.5 text-[15px] font-bold text-white shadow-xl shadow-pink-200 transition hover:scale-[1.01] sm:py-4 sm:text-[16px]"
            >
              Continuer →
            </button>
          </>
        )}

        <p className="mt-5 text-center text-xs text-[#8d7b74]">
          🔒 Tes réponses sont 100% confidentielles
        </p>
      </section>
    </main>
  );
}