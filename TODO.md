# TODO - Amélioration Page Acheter

## Plan d'action:

### 1. Modifier src/app/api/leads/route.ts
- [] Ajouter l'envoi d'email via nodemailer après la création du lead
- [] Utiliser les mêmes variables d'environnement SMTP

### 2. Modifier src/app/acheter/page.tsx
- [] Ajouter une section d'introduction AVANT le formulaire avec:
  - Titre: "Trouvez la propriété qui vous resemble"
  - Paragraphe complet sur l'approche stratégique
- [] Améliorer le design global de la page

## Variables d'environnement nécessaires (déjà configurées):
- SMTP_HOST
- SMTP_PORT
- SMTP_SECURE
- SMTP_USER
- SMTP_PASS
- SMTP_FROM
