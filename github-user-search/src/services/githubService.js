const GITHUB_API_URL = "https://api.github.com/search/users?q=";

/**
 * Search GitHub users with filters
 * @param {string} query - The main search term (e.g., username)
 * @param {string} location - Optional location filter (e.g., "Kenya")
 * @param {number} minRepos - Optional minimum repo count
 * @returns {Promise<Array>} - Array of user objects
 */
export const searchUsers = async (query, location = "", minRepos = 0) => {
  try {
    let searchQuery = query;

    if (location) {
      searchQuery += `+location:${location}`;
    }
    if (minRepos > 0) {
      searchQuery += `+repos:>${minRepos}`;
    }

    const response = await fetch(`${GITHUB_API_URL}${searchQuery}`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
