export type DiagnosticProfile = {
  key: string;
  title: string;
  emoji: string;
  text: string;
  miniAction: string;
};

export function getDiagnosticProfile(answers: Record<string, string>): DiagnosticProfile {
  const blocage = answers.blocage || "";
  const peur = answers.peur || "";
  const regularite = answers.regularite || "";
  const prix = answers.prix || "";
  const objectif = answers.objectif || "";

  if (
    blocage.includes("Je poste mais ça ne convertit pas") ||
    regularite.includes("régulière, mais ça ne convertit pas")
  ) {
    return {
      key: "contenu",
      title: "La créatrice de contenu qui ne convertit pas",
      emoji: "📲",
      text:
        "{prenom}, tu es peut-être dans cette situation où tu crées du contenu, tu essaies d’être régulière… mais tu te demandes pourquoi ça ne vend pas encore. Le problème n’est pas forcément ton contenu : il doit peut-être créer plus de désir, d’urgence et de passage à l’action.",
      miniAction:
        "Regarde tes 3 derniers contenus et demande-toi : est-ce que ce contenu donne envie d’acheter ou juste envie de liker ?",
    };
  }

  if (
    blocage.includes("peur de prospecter") ||
    peur.includes("peur") ||
    peur.includes("vendeuse de tapis") ||
    peur.includes("déranger")
  ) {
    return {
      key: "vendeuse_bloquee",
      title: "La vendeuse bloquée",
      emoji: "💬",
      text:
        "{prenom}, ton blocage principal semble lié à la peur de vendre. Ce n’est pas parce que tu n’es pas faite pour vendre : c’est souvent parce que tu as associé la vente à quelque chose de lourd, gênant ou intrusif.",
      miniAction:
        "Complète cette phrase : vendre serait plus simple pour moi si je savais…",
    };
  }

  if (
    blocage.includes("offre") ||
    prix.includes("pas encore") ||
    objectif.includes("Clarifier mon offre")
  ) {
    return {
      key: "offre_floue",
      title: "L’offre trop floue",
      emoji: "🧩",
      text:
        "{prenom}, ton offre a sûrement du potentiel. Mais aujourd’hui, elle n’est peut-être pas encore assez claire pour déclencher une décision. Une offre floue demande trop d’effort au prospect.",
      miniAction:
        "Reformule ton offre comme ça : En [durée], j’aide [cible] à obtenir [résultat] sans [douleur principale].",
    };
  }

  if (
    blocage.includes("légitimité") ||
    blocage.includes("prospects")
  ) {
    return {
      key: "experte_invisible",
      title: "L’experte invisible",
      emoji: "👀",
      text:
        "{prenom}, ton problème n’est probablement pas que tu n’es pas compétente. C’est peut-être que ton marché ne voit pas encore clairement pourquoi il devrait venir vers toi maintenant.",
      miniAction:
        "Écris cette phrase : J’aide [cible] à passer de [problème] à [résultat concret].",
    };
  }

  return {
    key: "business_debrouillarde",
    title: "La business débrouillarde",
    emoji: "🌀",
    text:
      "{prenom}, tu fais sûrement beaucoup de choses : tu postes, tu ajustes ton offre, tu testes des idées… mais tout ça n’est peut-être pas encore relié dans un vrai système.",
    miniAction:
      "Note les 3 étapes que tu utilises aujourd’hui pour transformer une personne intéressée en cliente.",
  };
}