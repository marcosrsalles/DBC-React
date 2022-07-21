import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import GithubResumo from "./GithubResumo/GithubResumoComponent";

function Github() {
  const [result, setResult] = useState();

  async function setup() {
    try {
      const { data: result } = await axios.get(
        "https://api.github.com/users/marcosrsalles"
      );
      console.log(result);

      setResult({ ...result });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setup();
  }, []);

  return (
    <>
      <GithubResumo
        imgSrc={result?.avatar_url}
        name={result?.name}
        bio={result?.bio}
        location={result?.location}
        company={result?.company}
        created_at={moment(result?.created_at).format("DD/MM/YYYY")}
        html_url={result?.html_url}
        twitter_username={result?.twitter_username}
        public_repos={result?.public_repos}
        followers={result?.followers}
      />
    </>
  );
}

export default Github;
