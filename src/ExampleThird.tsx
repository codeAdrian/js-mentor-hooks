import React from "react";

interface Repo {
  name: string;
  stargazers_count: number;
}

export const ExampleThird: React.FC = () => {
  const isLoading = true;
  const repo = { name: "", stargazers_count: 0 };

  /**
   * Fetch github stats
   * "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars"
   */

  /**
   * Set up click event listener if is not loading
   */

  return (
    <div>
      <h2>useEffect - API Fetch</h2>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          Most starred repo is {repo?.name ?? "N/A"} with{" "}
          {repo?.stargazers_count ?? "N/A"} stars
        </div>
      )}
    </div>
  );
};
