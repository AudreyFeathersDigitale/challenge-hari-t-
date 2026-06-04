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
      <section className="relative w-full max-w-[430px] overflow-hidden rounded-[28px] bg-[#E4B3CC] px-4 pt-5 shadow-[0_10px_40px_rgba(0,0,0,0.14)] sm:max-w-[520px]">
        <h1 className="relative z-40 mb-4 text-center text-[22px] font-black leading-tight text-black">
          🎉 Ton diagnostic est prêt !
        </h1>

        <div className="relative min-h-[860px]">
          {/* Arche jaune type affiche */}
          <div className="absolute bottom-0 right-0 top-10 w-[82%] rounded-t-full bg-[#F9E500]" />

          {/* Texte incliné */}
          <div className="absolute left-6 top-12 z-40 rotate-[-50deg]">
            <p className="text-[12px] font-black uppercase tracking-[0.22em] text-black">
              Ton profil
            </p>
          </div>

          {/* Photo */}
          <img
            src="/hari-cutout.png"
            alt=""
            className="absolute bottom-[-10px] left-[-38px] z-20 h-[60%] object-contain grayscale"
          />

          {/* Contenu */}
          <div className="relative z-30 ml-auto w-[68%] pt-24 pr-3">
            <h2 className="font-serif text-[30px] font-black leading-[0.92] text-black">
              {profile.title} {profile.emoji}
            </h2>

            <div className="my-4 text-center text-[26px] text-[#E4B3CC]">
              —♡—
            </div>

            <div className="max-h-[170px] overflow-y-auto pr-1 text-[12px] font-medium leading-5 text-black">
              {text.split("\n\n").slice(0, 4).map((paragraph, index) => (
                <p key={index} className="mb-2">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-5 rounded-[18px] bg-[#fffce6]/95 p-3 shadow-sm">
              <p className="mb-2 text-[14px] font-black text-[#E4B3CC]">
                🎯 Ta mini-action concrète
              </p>

              <div className="text-[11px] font-bold leading-5 text-[#E4B3CC]">
                {miniActionParts.slice(0, 2).map((paragraph, index) => (
                  <p key={index} className="mb-2">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-2">
              <a
                href="https://www.harimitsiki.com/inscription-webinaire-163e0888-6a124262-4700b8c4-93ff48c0-07ba58df-08005642"
                target="_blank"
                className="mx-auto block w-[82%] rounded-full bg-[#E4B3CC] px-4 py-2.5 text-center text-[12px] font-black text-white shadow-lg transition hover:scale-[1.01]"
              >
                Rejoindre le challenge →
              </a>

              <a
                href="https://chat.whatsapp.com/HvURiHeUoT09Kr7IgDjikg?mode=gi_t"
                target="_blank"
                className="mx-auto block w-[82%] rounded-full bg-black px-4 py-2.5 text-center text-[12px] font-black text-white transition hover:scale-[1.01]"
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