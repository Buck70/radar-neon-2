export const initialArticles = [
  { id: 1, category: 'monde', title: "Radar Néon Opérationnel", summary: "Fichiers correctement enregistrés.", heat: 98, time: 'Direct' }
];
export async function getArticles() { return initialArticles; }