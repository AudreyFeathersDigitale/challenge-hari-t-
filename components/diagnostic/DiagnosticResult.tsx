import type { DiagnosticProfile } from "@/lib/diagnosticRules";

type Props = {
  profile: DiagnosticProfile;
  prenom: string;
};

export default function DiagnosticResult({ profile, prenom }: Props) {
  const text = profile.text.replaceAll("{prenom}", prenom || "");
  const miniActionParts = profile.miniAction.split("\n\n");

  return (
    <main className="min-h-screen bg-[#fff7f1] flex items-start justify-center px-3 py-4 sm:items-center sm:px-5 sm:py-8">
      <section className="relative w-full max-w-[430px] overflow-hidden rounded-[30px] bg-[#f7d1d7] px-4 pb-6 pt-5 shadow-[0_10px_40px_rgba(0,0,0,0.14)] sm:max-w-[920px] sm:px-10 sm:pb-10 sm:pt-8">
        <h1 className="relative z-40 mb-5 text-center text-[22px] font-black leading-tight text-black sm:text-3xl">
          🎉 Ton diagnostic est prêt !
        </h1>

        <div className="relative min-h-[845px] sm:min-h-[920px]">
          <div className="absolute bottom-0 right-[-6px] top-6 w-[90%] rounded-t-full bg-[#fff000] sm:right-0 sm:w-[80%]" />

          <p className="absolute left-9 top-20 z-40 -rotate-[48deg] text-[13px] font-black uppercase tracking-[0.2em] text-black sm:left-28 sm:top-24 sm:text-[22px]">
            Ton profil
          </p>

          <img
            src="/hari-cutout.png"
            alt=""
            className="absolute bottom-[-10px] left-[-82px] z-20 h-[43%] object-contain grayscale sm:left-[-25px] sm:h-[72%]"
          />

          <div className="relative z-30 ml-auto w-[62%] pt-14 pr-3 sm:w-[66%] sm:pt-28 sm:pr-6">
            <h2 className="font-serif text-[31px] font-black leading-[0.92] text-black sm:text-[52px]">
              {profile.title} {profile.emoji}
            </h2>

            <div className="my-4 text-center text-[28px] text-[#ff3f7f] sm:my-6 sm:text-4xl">
              —♡—
            </div>

            <div className="max-h-[180px] overflow-y-auto pr-1 text-[13px] font-medium leading-6 text-black sm:max-h-[340px] sm:text-[20px] sm:leading-9">
              {text.split("\n\n").map((paragraph, index) => {
                const isImportant =
                  paragraph.includes("Pourquoi") ||
                  paragraph.includes("Mais pas assez") ||
                  paragraph.includes("Et c’est ça") ||
                  paragraph.includes("Bonne nouvelle");

                return (
                  <p
                    key={index}
                    className={`mb-3 ${
                      isImportant ? "font-black text-[#ff3f7f]" : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <div className="mt-4 rounded-[20px] bg-[#fffce6]/95 p-3 shadow-sm backdrop-blur-sm sm:mt-6 sm:p-5">
              <p className="mb-2 text-[15px] font-black text-[#ff3f7f] sm:text-[22px]">
                🎯 Ta mini-action concrète
              </p>

              <div className="text-[11px] font-bold leading-5 text-[#ff3f7f] sm:text-[18px] sm:leading-8">
                {miniActionParts.slice(0, 2).map((paragraph, index) => (
                  <p key={index} className="mb-3">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-3 sm:mt-7">
              <a
                href="https://www.harimitsiki.com/inscription-webinaire-163e0888-6a124262-4700b8c4-93ff48c0-07ba58df-08005642"
                target="_blank"
                className="mx-auto block w-[82%] rounded-full bg-[#ff3f7f] px-4 py-2.5 text-center text-[12px] font-black text-white shadow-lg transition hover:scale-[1.01] sm:w-full sm:py-4 sm:text-[18px]"
              >
                Rejoindre le challenge →
              </a>

              <a
                href="https://chat.whatsapp.com/HvURiHeUoT09Kr7IgDjikg?mode=gi_t"
                target="_blank"
                className="mx-auto block w-[82%] rounded-full bg-black px-4 py-2.5 text-center text-[12px] font-black text-white transition hover:scale-[1.01] sm:w-full sm:py-4 sm:text-[18px]"
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