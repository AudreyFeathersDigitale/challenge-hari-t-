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
    <main className="min-h-screen bg-[#fff7f1] overflow-x-auto px-3 py-4 sm:flex sm:items-center sm:justify-center sm:px-5 sm:py-8">
      <div className="mx-auto w-max">
        <section className="relative h-[860px] w-[680px] max-w-none overflow-hidden rounded-[32px] bg-[#E4B3CC] px-6 pt-6 shadow-[0_10px_40px_rgba(0,0,0,0.14)]">
          <div className="absolute bottom-0 right-[20px] h-[790px] w-[400px] rounded-t-full bg-[#F9E500]" />

          <h1 className="relative z-40 mb-4 text-center text-[22px] font-black leading-tight text-black">
            Ton diagnostic est prêt !
          </h1>

          <img
            src="/hari-cutout.png"
            alt=""
            className="absolute bottom-0 left-[-38px] z-20 h-[76%] max-w-none"
          />

          <div className="relative z-30 ml-auto flex w-[360px] flex-col items-center pt-24 pr-6 text-center">
            <h2 className="font-serif text-[34px] font-black leading-[0.9] tracking-[-0.03em] text-black">
              {titleLine1}
              {titleLine2 && (
                <>
                  <br />
                  <span className="text-[#ef2f25]">{titleLine2}</span>
                </>
              )}
            </h2>

            <div className="my-4 h-[2px] w-24 bg-[#E4B3CC]" />

            <div className="mx-auto max-h-[220px] w-[290px] overflow-y-auto text-center text-[14px] leading-8 text-black">
              {text.split("\n\n").slice(0, 4).map((paragraph, index) => (
                <p key={index} className="mb-3">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mx-auto mt-6 w-[320px] rounded-[20px] bg-[#fffce6]/95 p-5 text-center shadow-sm">
              <p className="mb-3 text-[15px] font-black text-[#ef2f25]">
                Ta mini-action concrète
              </p>

              <div className="text-[12px] font-bold leading-6 text-black">
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
                className="mx-auto block w-[280px] max-w-full rounded-[18px] bg-[#ef2f25] px-4 py-3.5 text-center text-[13px] font-black text-white shadow-[0_14px_35px_rgba(239,47,37,0.22)] transition hover:scale-[1.01]"
              >
                Rejoindre le challenge →
              </a>

              <a
                href="https://chat.whatsapp.com/HvURiHeUoT09Kr7IgDjikg?mode=gi_t"
                target="_blank"
                rel="noreferrer"
                className="mx-auto block w-[280px] max-w-full rounded-[18px] bg-black px-4 py-3.5 text-center text-[13px] font-black text-white shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition hover:scale-[1.01]"
              >
                Rejoindre WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}