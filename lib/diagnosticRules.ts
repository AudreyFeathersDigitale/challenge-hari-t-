export type DiagnosticProfile = {
  key: string;
  title: string;
  text: string;
  miniAction: string;
};

export function getDiagnosticProfile(
  answers: Record<string, string>
): DiagnosticProfile {
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
      title: "Votre contenu ne convertit pas encore",
      text:
        "{prenom}, vous publiez régulièrement et vous investissez du temps dans votre communication. Pourtant, vos contenus ne génèrent pas suffisamment de demandes ou de ventes. Le problème ne vient pas forcément de votre régularité, mais plutôt de la façon dont votre contenu crée le désir et incite au passage à l’action.",
      miniAction:
        "Analysez vos trois derniers contenus et demandez-vous : donnent-ils envie d'acheter ou simplement envie d'interagir ?",
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
      title: "Le frein principal est la vente",
      text:
        "{prenom}, votre principal blocage semble être lié à la vente. Il ne s'agit pas d'un manque de compétences, mais plutôt d'une perception inconfortable de l'acte de vendre, qui peut freiner vos actions au quotidien.",
      miniAction:
        "Complétez cette phrase : « Vendre serait plus simple pour moi si… »",
    };
  }

  if (
    blocage.includes("offre") ||
    prix.includes("pas encore") ||
    objectif.includes("Clarifier mon offre")
  ) {
    return {
      key: "offre_floue",
      title: "Votre offre manque de clarté",
      text:
        "{prenom}, votre offre possède certainement un réel potentiel, mais elle ne communique peut-être pas encore suffisamment clairement la valeur qu'elle apporte. Une offre claire facilite toujours la prise de décision.",
      miniAction:
        "Reformulez votre offre ainsi : « J'aide [cible] à obtenir [résultat] en [durée], sans [obstacle principal]. »",
    };
  }

  if (
    blocage.includes("légitimité") ||
    blocage.includes("prospects")
  ) {
    return {
      key: "experte_invisible",
      title: "Votre expertise manque de visibilité",
      text:
        "{prenom}, votre expertise est probablement réelle, mais votre marché ne perçoit pas encore suffisamment ce qui vous différencie. Il est essentiel de rendre votre proposition de valeur plus visible et plus concrète.",
      miniAction:
        "Complétez cette phrase : « J'aide [cible] à passer de [problème] à [résultat]. »",
    };
  }

  return {
    key: "business_debrouillarde",
    title: "Votre activité manque de structure",
    text:
      "{prenom}, vous mettez déjà en place plusieurs actions pour développer votre activité. En revanche, elles semblent fonctionner de manière isolée plutôt que dans un véritable système d'acquisition et de vente.",
    miniAction:
      "Listez les trois étapes qui transforment aujourd'hui un prospect en client dans votre activité.",
  };
}