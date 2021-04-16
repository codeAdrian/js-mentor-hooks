import React, { useEffect, useState } from "react";

interface Repo {
  name: string;
  stargazers_count: number;
}

export const ExampleThird: React.FC = () => {
  const [repo, setRepo] = useState<Repo>();
  const [isLoading, setIsLoading] = useState(true);

  function handleClick() {
    console.log("Document click");
  }

  useEffect(() => {
    fetch("https://api.github.com/search/repositories?q=stars:%3E1&sort=stars")
      .then((data) => data.json())
      .then(({ items }) => {
        setRepo(items[0]);
        setTimeout(() => {
          setIsLoading(false);
        }, 5000);
      });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isLoading]);

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
