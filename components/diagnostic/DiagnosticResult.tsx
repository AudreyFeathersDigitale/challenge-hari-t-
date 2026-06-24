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
      <section className="relative w-full max-w-[680px] overflow-hidden rounded-[32px] bg-[#E4B3CC] px-5 pt-6 pb-10 shadow-[0_10px_40px_rgba(0,0,0,0.14)] sm:h-[860px] sm:px-6 sm:pb-0">
        <div className="absolute bottom-0 right-0 h-[78%] w-[78%] rounded-t-full bg-[#F9E500] sm:right-[20px] sm:h-[790px] sm:w-[400px]" />

        <h1 className="relative z-40 mb-5 text-center text-[22px] font-black text-black">
          Ton diagnostic est prêt !
        </h1>

        <img
          src="/hari-cutout.png"
          alt=""
          className="relative z-30 mx-auto mb-2 h-[190px] max-w-none sm:absolute sm:bottom-0 sm:left-[-38px] sm:mx-0 sm:mb-0 sm:h-[76%]"
        />

        <div className="relative z-30 ml-auto flex w-full flex-col items-center text-center sm:w-[360px] sm:pt-24 sm:pr-6">
          <h2 className="font-serif text-[42px] font-black leading-[0.86] tracking-[-0.04em] text-black sm:text-[34px]">
            {titleLine1}
            {titleLine2 && (
              <>
                <br />
                <span className="text-[#ef2f25]">{titleLine2}</span>
              </>
            )}
          </h2>

          <div className="my-4 h-[2px] w-24 bg-[#E4B3CC]" />

          <div className="mx-auto w-full max-w-[360px] text-center text-[17px] leading-8 text-black sm:max-h-[220px] sm:w-[290px] sm:overflow-y-auto sm:text-[14px] sm:leading-8">
            {text.split("\n\n").slice(0, 4).map((paragraph, index) => (
              <p key={index} className="mb-3">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mx-auto mt-5 w-full max-w-[360px] rounded-[22px] bg-[#fffce6]/95 p-5 text-center shadow-sm sm:max-w-[320px]">
            <p className="mb-3 text-[20px] font-black text-[#ef2f25] sm:text-[15px]">
              Ta mini-action concrète
            </p>

            <div className="text-[16px] font-bold leading-7 text-black sm:text-[12px] sm:leading-6">
              {miniActionParts.slice(0, 2).map((paragraph, index) => (
                <p key={index} className="mb-3">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-5 flex w-full max-w-[360px] flex-col items-center space-y-3 sm:max-w-none">
            <a
              href="https://www.harimitsiki.com/inscription-webinaire-163e0888-6a124262-4700b8c4-93ff48c0-07ba58df-08005642"
              target="_blank"
              rel="noreferrer"
              className="mx-auto block w-full max-w-[320px] rounded-[18px] bg-[#ef2f25] px-4 py-4 text-center text-[16px] font-black text-white shadow-[0_14px_35px_rgba(239,47,37,0.22)] transition hover:scale-[1.01] sm:max-w-[280px] sm:py-3.5 sm:text-[13px]"
            >
              Rejoindre le challenge →
            </a>

            <a
              href="https://chat.whatsapp.com/HvURiHeUoT09Kr7IgDjikg?mode=gi_t"
              target="_blank"
              rel="noreferrer"
              className="mx-auto block w-full max-w-[320px] rounded-[18px] bg-black px-4 py-4 text-center text-[16px] font-black text-white shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition hover:scale-[1.01] sm:max-w-[280px] sm:py-3.5 sm:text-[13px]"
            >
              Rejoindre WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}