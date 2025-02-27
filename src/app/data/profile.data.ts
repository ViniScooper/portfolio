import { ProfileSchema } from "@data/schema/profile.schema";

const profileData: ProfileSchema = {
  name: 'José Vinicius Lourenço',
  bio: 'Enthusiastic software engineer from Brazil',
  resumeLink: `assets/resme_update_2025 (2).pdf`, // Atualize este link com o novo arquivo de currículo
  greetings: [
    'Hello, world',
    'Olá, mundo'
  ],
  pronouns: 'He/him/his'
}

export default profileData;
