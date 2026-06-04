import type { DiagnosticProfile } from "@/lib/diagnosticRules";

type Props = {
  profile: DiagnosticProfile;
  prenom: string;
};

export default function DiagnosticResult({ profile, prenom }: Props) {
  const text = profile.text.replaceAll("{prenom}", prenom || "");

  return (
    <main className="min-h-screen bg-[#fff7f1] flex items-start justify-center px-3 py-4 sm:items-center sm:px-5 sm:py-8">
      <section className="relative w-full max-w-[430px] overflow-hidden rounded-[30px] bg-[#f7d1d7] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.14)] sm:max-w-[920px] sm:p-10">
        <h1 className="relative z-20 mb-6 text-center text-2xl font-black text-black sm:text-3xl">
          🎉 Ton diagnostic est prêt !
        </h1>

        <div className="relative min-h-[860px] sm:min-h-[920px]">
          <div className="absolute bottom-0 right-0 top-10 w-[86%] rounded-t-full bg-[#fff000] sm:w-[78%]" />

          <p className="absolute left-5 top-24 z-20 -rotate-[48deg] text-[14px] font-black uppercase tracking-[0.18em] text-black sm:left-28 sm:top-24 sm:text-[22px]">
            Ton profil
          </p>

          <img
            src="/hari-cutout.png"
            alt=""
            className="absolute bottom-0 left-[-40px] z-20 h-[56%] object-contain grayscale drop-shadow-[0_0_0_white] sm:left-[-20px] sm:h-[72%]"
          />

          <div className="relative z-30 ml-auto w-[72%] pt-28 sm:w-[66%] sm:pt-32">
            <h2 className="font-serif text-[30px] font-black leading-[0.95] text-black sm:text-[52px]">
              {profile.title} {profile.emoji}
            </h2>

            <div className="my-5 text-center text-4xl text-[#ff3f7f]">
              —♡—
            </div>

            <div className="max-h-[420px] overflow-y-auto pr-2 text-[14px] leading-6 text-black sm:max-h-none sm:text-[20px] sm:leading-9">
              {text.split("\n\n").map((paragraph, index) => {
                const isImportant =
                  paragraph.includes("Pourquoi") ||
                  paragraph.includes("Mais pas assez") ||
                  paragraph.includes("Et c’est ça") ||
                  paragraph.includes("Bonne nouvelle");

                return (
                  <p
                    key={index}
                    className={`mb-4 ${
                      isImportant ? "font-black text-[#ff3f7f]" : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <div className="mt-6 rounded-[24px] bg-white/85 p-5 shadow-sm backdrop-blur-sm sm:p-7">
              <p className="mb-3 text-[17px] font-black text-[#ff3f7f] sm:text-[24px]">
                🎯 Ta mini-action concrète
              </p>

              <div className="text-[14px] font-medium leading-6 text-black sm:text-[20px] sm:leading-9">
                {profile.miniAction.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className={`mb-3 ${
                      index === profile.miniAction.split("\n\n").length - 1
                        ? "font-black text-[#ff3f7f]"
                        : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-7 space-y-3">
              <a
                href="https://www.harimitsiki.com/inscription-webinaire-163e0888-6a124262-4700b8c4-93ff48c0-07ba58df-08005642"
                target="_blank"
                className="block w-full rounded-full bg-[#ff3f7f] px-5 py-4 text-center text-[15px] font-black text-white shadow-lg transition hover:scale-[1.01] sm:text-[18px]"
              >
                Rejoindre le challenge →
              </a>

              <a
                href="https://chat.whatsapp.com/HvURiHeUoT09Kr7IgDjikg?mode=gi_t"
                target="_blank"
                className="block w-full rounded-full bg-black px-5 py-4 text-center text-[15px] font-black text-white transition hover:scale-[1.01] sm:text-[18px]"
              >
                Rejoindre WhatsApp 💬
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}