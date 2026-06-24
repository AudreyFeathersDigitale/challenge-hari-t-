import type { DiagnosticProfile } from "@/lib/diagnosticRules";

type Props = {
  profile: DiagnosticProfile;
  prenom: string;
};

export default function DiagnosticResult({ profile, prenom }: Props) {
  const text = profile.text.replaceAll("{prenom}", prenom || "");
  const miniActionParts = profile.miniAction.split("\n\n");
  const [titleLine1, titleLine2] = profile.title.split("|");

  return (
    <main className="min-h-screen bg-[#fff7f1] flex items-start justify-center px-3 py-4 sm:items-center sm:px-5 sm:py-8">
      <section className="relative h-[860px] w-full max-w-[680px] max-[420px]:h-[820px] overflow-hidden rounded-[32px] bg-[#E4B3CC] px-6 pt-6 shadow-[0_10px_40px_rgba(0,0,0,0.14)]">
        <div className="absolute bottom-0 right-[20px] h-[790px] w-[400px] rounded-t-full bg-[#F9E500]" />

        <h1 className="relative z-40 mb-4 text-center text-[22px] font-black leading-tight text-black">
          Ton diagnostic est prêt !
        </h1>

        <img
          src="/hari-cutout.png"
          alt=""
          className="relative z-30 ml-auto flex w-[360px] max-w-[58%] flex-col items-center pt-24 pr-6 text-center max-[420px]:w-[56%] max-[420px]:pt-16 max-[420px]:pr-1"
        />

        <div className="relative z-30 ml-auto flex w-[360px] max-w-[58%] flex-col items-center pt-24 pr-6 text-center max-[420px]:w-[58%] max-[420px]:pt-20 max-[420px]:pr-2">
          <h2 className="font-serif text-[34px] font-black leading-[0.9] tracking-[-0.03em] text-black max-[420px]:text-[27px]">
            {titleLine1}
            {titleLine2 && (
              <>
                <br />
                <span className="text-[#ef2f25]">{titleLine2}</span>
              </>
            )}
          </h2>

          <div className="my-4 h-[2px] w-24 bg-[#E4B3CC]" />

          <div className="mx-auto max-h-[220px] w-[290px] max-w-full overflow-y-auto text-center text-[14px] leading-8 text-black max-[420px]:max-h-[190px] max-[420px]:text-[12px] max-[420px]:leading-6">
            {text.split("\n\n").slice(0, 4).map((paragraph, index) => (
              <p key={index} className="mb-3">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mx-auto mt-6 w-[320px] max-w-full rounded-[20px] bg-[#fffce6]/95 p-5 text-center shadow-sm max-[420px]:mt-4 max-[420px]:p-4">
            <p className="mb-3 text-[15px] font-black text-[#ef2f25] max-[420px]:text-[13px]">
              Ta mini-action concrète
            </p>

            <div className="text-[12px] font-bold leading-6 text-black max-[420px]:text-[11px] max-[420px]:leading-5">
              {miniActionParts.slice(0, 2).map((paragraph, index) => (
                <p key={index} className="mb-3">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-5 flex w-full flex-col items-center space-y-3">
            <a
              href="https://www.harimitsiki.com/inscription-webinaire-163e0888-6a124262-4700b8c4-93ff48c0-07ba58df-08005642"
              target="_blank"
              rel="noreferrer"
              className="mx-auto block w-[280px] max-w-full rounded-[18px] bg-[#ef2f25] px-4 py-3.5 text-center text-[13px] font-black text-white shadow-[0_14px_35px_rgba(239,47,37,0.22)] transition hover:scale-[1.01] max-[420px]:py-3 max-[420px]:text-[11px]"
            >
              Rejoindre le challenge →
            </a>

            <a
              href="https://chat.whatsapp.com/HvURiHeUoT09Kr7IgDjikg?mode=gi_t"
              target="_blank"
              rel="noreferrer"
              className="mx-auto block w-[280px] max-w-full rounded-[18px] bg-black px-4 py-3.5 text-center text-[13px] font-black text-white shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition hover:scale-[1.01] max-[420px]:py-3 max-[420px]:text-[11px]"
            >
              Rejoindre WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}