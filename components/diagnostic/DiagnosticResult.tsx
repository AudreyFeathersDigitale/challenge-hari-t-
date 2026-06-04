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
      <section className="relative h-[860px] w-full max-w-[680px] overflow-hidden rounded-[32px] bg-[#E4B3CC] px-6 pt-6 shadow-[0_10px_40px_rgba(0,0,0,0.14)]">
        
        {/* Arche jaune */}
        <div className="absolute bottom-0 right-[26px] h-[790px] w-[390px] rounded-t-full bg-[#F9E500]" />

        {/* Titre haut */}
        <h1 className="relative z-40 mb-4 text-center text-[22px] font-black leading-tight text-black">
          🎉 Ton diagnostic est prêt !
        </h1>

        {/* Ton profil */}
        <div className="absolute left-12 top-24 z-40 rotate-[-50deg]">
          <p className="text-[12px] font-black uppercase tracking-[0.24em] text-black">
            Ton profil
          </p>
        </div>

{/* Photo */}
<img src="/hari-cutout.png" alt="" className="absolute bottom-[-100px] left-[-20px] z-20 h-[110%] max-w-none object-contain" />

className="absolute bottom-[-52px] left-[0px] z-20 h-[110%] max-w-none object-contain"
        {/* Contenu */}
        <div className="relative z-30 ml-auto flex w-[350px] flex-col items-center pt-28 pr-4 text-center">
          
          {/* Titre profil */}
          <h2 className="font-serif text-[34px] font-black leading-[0.9] tracking-[-0.03em] text-black">
            {profile.title} {profile.emoji}
          </h2>

          {/* Coeur */}
          <div className="my-4 text-center text-[26px] text-[#E4B3CC]">
            —♡—
          </div>

          {/* Texte */}
          <div className="mx-auto max-h-[220px] w-[290px] overflow-y-auto text-center text-[14px] leading-8 text-black">
            {text.split("\n\n").slice(0, 4).map((paragraph, index) => (
              <p key={index} className="mb-3">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Mini action */}
          <div className="mx-auto mt-6 w-[320px] rounded-[20px] bg-[#fffce6]/95 p-5 text-center shadow-sm">
            <p className="mb-3 text-[15px] font-black text-[#E4B3CC]">
              🎯 Ta mini-action concrète
            </p>

            <div className="text-[12px] font-bold leading-6 text-[#E4B3CC]">
              {miniActionParts.slice(0, 2).map((paragraph, index) => (
                <p key={index} className="mb-3">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Boutons */}
          <div className="mt-5 flex w-full flex-col items-center space-y-3">
            <a
              href="https://www.harimitsiki.com/inscription-webinaire-163e0888-6a124262-4700b8c4-93ff48c0-07ba58df-08005642"
              target="_blank"
              className="mx-auto block w-[280px] rounded-full bg-[#E4B3CC] px-4 py-3 text-center text-[13px] font-black text-white shadow-lg transition hover:scale-[1.01]"
            >
              Rejoindre le challenge →
            </a>

            <a
              href="https://chat.whatsapp.com/HvURiHeUoT09Kr7IgDjikg?mode=gi_t"
              target="_blank"
              className="mx-auto block w-[280px] rounded-full bg-black px-4 py-3 text-center text-[13px] font-black text-white transition hover:scale-[1.01]"
            >
              Rejoindre WhatsApp 💬
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}