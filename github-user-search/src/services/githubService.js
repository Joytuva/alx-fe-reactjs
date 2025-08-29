const GITHUB_API_URL = "https://api.github.com/search/users?q=";

export const searchUsers = async (query) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}${query}`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data.items; // GitHub API returns items array
  } catch (error) {
    console.error(error);
    return [];
  }
};
