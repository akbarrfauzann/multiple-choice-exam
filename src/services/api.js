export const fetchQuestions = async () => {
  const response = await fetch("https://pacmann-frontend.pacmann.workers.dev/");
  if (!response.ok) {
    throw new Error("Failed to fetch questions");
  }
  const data = await response.json();
  return data.data;
};
