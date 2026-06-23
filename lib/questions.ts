export type Question = {
  id: string;
  label: string;
  type: "text" | "email" | "buttons" | "multi-buttons";
  options?: string[];
};

export const questions: Question[] = [
  {
    id: "prenom",
    label:
      "Bienvenue dans ton diagnostic vente.\n\nAvant de commencer, quel est ton prénom ?",
    type: "text",
  },

  {
    id: "email",
    label:
      "Merci {prenom}.\n\nQuel est ton email ?\n\nIl servira uniquement pour ton suivi lié au challenge et à ton diagnostic.",
    type: "email",
  },

  {
    id: "instagram",
    label:
      "Parfait.\n\nQuel est ton compte Instagram ou LinkedIn ?\nTu peux écrire ton @ directement.",
    type: "text",
  },

  {
    id: "offre",
    label:
      "Aujourd’hui, que proposes-tu exactement ?\n\nExemple : coaching, prestation de service, accompagnement, formation, consulting, création de contenu, design, etc.",
    type: "text",
  },

  {
    id: "cible",
    label:
      "À qui s’adresse ton offre ?\nSois la plus précise possible.",
    type: "text",
  },

  {
    id: "prix",
    label: "Quel est le prix de ton offre ?",
    type: "buttons",
    options: [
      "Moins de 200 €",
      "Entre 200 € et 500 €",
      "Entre 500 € et 1 000 €",
      "Entre 1 000 € et 3 000 €",
      "Plus de 3 000 €",
      "Je ne sais pas encore / mon offre n’est pas claire",
    ],
  },

  {
    id: "clients",
    label:
      "Au cours des 60 derniers jours, combien de clientes as-tu signées ?",
    type: "buttons",
    options: [
      "0",
      "1",
      "2 à 3",
      "4 ou plus",
      "Je n’ai pas encore lancé mon offre",
    ],
  },

  {
    id: "canal",
    label:
      "Aujourd’hui, sur quels canaux es-tu présente pour trouver des clientes ?",
    type: "multi-buttons",
    options: [
      "Instagram",
      "LinkedIn",
      "TikTok",
      "Recommandation / bouche-à-oreille",
      "Prospection en message privé",
      "Email / Newsletter",
      "Publicité",
      "Je n’ai pas encore de canal clair",
    ],
  },

  {
    id: "regularite",
    label:
      "Sur ce canal, quelle est ta situation aujourd’hui ?",
    type: "buttons",
    options: [
      "Je suis régulière, mais cela ne convertit pas assez",
      "Je publie ou prospecte de temps en temps",
      "Je débute et je ne sais pas vraiment quoi faire",
      "Je ne suis pas régulière",
      "Je n’ai pas encore commencé",
    ],
  },

  {
    id: "blocage",
    label:
      "Aujourd’hui, quel est ton principal frein dans tes ventes ?",
    type: "buttons",
    options: [
      "Je publie mais cela ne convertit pas",
      "Je ne sais pas quoi dire pour vendre",
      "J’ai peur de prospecter",
      "Mon offre n’est pas assez claire",
      "Les prospects me disent « je vais réfléchir »",
      "Je n’ai pas assez de prospects",
      "Je doute de ma légitimité",
      "Je ne sais pas par où commencer",
    ],
  },

  {
    id: "peur",
    label:
      "Lorsque tu dois parler de ton offre, quelle pensée revient le plus souvent ?",
    type: "buttons",
    options: [
      "J’ai peur de déranger",
      "J’ai peur d’être trop commerciale",
      "J’ai peur que mon prix soit trop élevé",
      "Je ne sais pas comment engager la conversation",
      "Je repousse toujours au lendemain",
      "Il me manque une méthode",
      "Je n’ai pas peur, mais je ne sais pas quoi faire concrètement",
    ],
  },

  {
    id: "objectif",
    label: "Quel est ton objectif pour cet été ?",
    type: "buttons",
    options: [
      "Signer mon premier client",
      "Signer 2 à 5 clients",
      "Vendre plus régulièrement",
      "Assumer mes prix",
      "Clarifier mon offre",
      "Être plus à l’aise pour vendre",
      "Trouver une méthode efficace",
      "Atteindre 3K, 5K ou 10K par mois",
    ],
  },

  {
    id: "inscriteChallenge",
    label:
      "Merci {prenom}.\n\nAvec tes réponses, je commence à identifier les principaux freins à tes ventes.\n\nAvant de te présenter ton diagnostic, une dernière question :\n\nAs-tu bien validé ton inscription au challenge gratuit ?",
    type: "buttons",
    options: [
      "Oui",
      "Pas encore",
    ],
  },

  {
    id: "whatsappRejoint",
    label:
      "As-tu également rejoint le groupe WhatsApp du challenge ?",
    type: "buttons",
    options: [
      "Oui",
      "Pas encore",
    ],
  },
];