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
      "Coucou ❤️\n\nBienvenue dans ton diagnostic vente.\n\nAvant qu’on commence, c’est quoi ton prénom ? ❤️",
    type: "text",
  },

  {
    id: "email",
    label:
      "Super {prenom} 😍\n\nQuel est ton email ?\n\nIl servira uniquement pour ton suivi lié au challenge et à ton diagnostic.",
    type: "email",
  },

  {
    id: "instagram",
    label:
      "Merci {prenom} 😍\n\nQuel est ton compte Instagram ou LinkedIn ?\nTu peux écrire ton @ directement.",
    type: "text",
  },

  {
    id: "offre",
    label:
      "Aujourd’hui, tu vends quoi exactement ?\n\nExemple : coaching, prestation de service, accompagnement, formation, consulting, création de contenu, design, etc.",
    type: "text",
  },

  {
    id: "cible",
    label:
      "Ok trop cool 🤩\n\nEt tu le vends à qui ?\nSois la plus précise possible stp :)",
    type: "text",
  },

  {
    id: "prix",
    label: "Alright 🤭 ! Ton offre coûte combien environ ?",
    type: "buttons",
    options: [
      "Moins de 200€",
      "Entre 200€ et 500€",
      "Entre 500€ et 1 000€",
      "Entre 1 000€ et 3 000€",
      "Plus de 3 000€",
      "Je ne sais pas encore / mon offre n’est pas claire",
    ],
  },

  {
    id: "clients",
    label:
      "Et sur les 60 derniers jours, tu as signé combien de clientes ?",
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
      "Aujourd’hui, sur quel canal tu as déjà quelque chose en place pour trouver des clientes ?",
    type: "multi-buttons",
    options: [
      "Instagram",
      "LinkedIn",
      "TikTok",
      "Recommandation / bouche-à-oreille",
      "Prospection en DM",
      "Email / newsletter",
      "Ads / publicité",
      "Je n’ai pas encore de canal clair",
    ],
  },

  {
    id: "regularite",
    label:
      "Sur ce canal, tu es plutôt dans quelle situation aujourd’hui ?",
    type: "buttons",
    options: [
      "Je suis régulière, mais ça ne convertit pas assez",
      "Je poste / prospecte de temps en temps",
      "Je commence mais je ne sais pas trop quoi faire",
      "Je ne suis pas régulière du tout",
      "Je n’ai pas encore vraiment commencé",
    ],
  },

  {
    id: "blocage",
    label:
      "Aujourd’hui, qu’est-ce qui te frustre le plus dans tes ventes ? 👀",
    type: "buttons",
    options: [
      "Je poste mais ça ne convertit pas",
      "Je ne sais pas quoi dire pour vendre",
      "J’ai peur de prospecter",
      "Mon offre n’est pas assez claire",
      "Les gens me disent “je vais réfléchir”",
      "Je n’ai pas assez de prospects",
      "Je doute de ma légitimité",
      "Je ne sais pas par où commencer",
    ],
  },

  {
    id: "peur",
    label:
      "Quand tu dois parler de ton offre, qu’est-ce qui se passe le plus dans ta tête ?",
    type: "buttons",
    options: [
      "J’ai peur de déranger",
      "J’ai peur de passer pour une vendeuse de tapis",
      "J’ai peur qu’on me trouve trop chère",
      "Je ne sais pas comment amener la conversation",
      "Je repousse toujours au lendemain",
      "Je manque juste de méthode",
      "Je n’ai pas peur, mais je ne sais pas quoi faire concrètement",
    ],
  },

  {
    id: "objectif",
    label: "Ton objectif cet été, ce serait quoi ? ☀️",
    type: "buttons",
    options: [
      "Signer mon premier client",
      "Signer 2 à 5 clients",
      "Vendre plus régulièrement",
      "Assumer mes prix",
      "Clarifier mon offre",
      "Arrêter d’avoir peur de vendre",
      "Trouver une vraie méthode pour vendre",
      "Atteindre 3K, 5K voire 10K/mois",
    ],
  },

  {
    id: "inscriteChallenge",
    label:
      "Merci {prenom} 💛\n\nOk super, avec tes réponses je commence à voir ce qui bloque dans tes ventes.\n\nAvant de te donner ton diagnostic, petite question importante :\n\nEst-ce que tu as bien validé ton inscription au challenge gratuit du 6 au 8 juillet ? 😍",
    type: "buttons",
    options: [
      "Oui, je suis inscrite ! Trop hâte !! ❤️",
      "Non, pas encore",
    ],
  },

  {
    id: "whatsappRejoint",
    label:
      "Et pour le groupe WhatsApp du challenge ? C’est bon aussi ?? 🥰",
    type: "buttons",
    options: [
      "Oui, j’ai rejoint le groupe",
      "Non, pas encore",
    ],
  },
];