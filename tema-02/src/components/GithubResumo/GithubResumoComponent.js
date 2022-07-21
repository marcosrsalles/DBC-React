import "./styles.css";
import GithubImg from "../GithubImg/GithubImgComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FaRocket, FaGithub, FaTwitter } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const GithubResumo = ({
  imgSrc,
  name,
  bio,
  location,
  company,
  created_at,
  html_url,
  twitter_username,
  public_repos,
  followers,
}) => {
  return (
    <div className="card">
      <div className="card-containat">
        <div className="topo">
          <GithubImg imgSrc={imgSrc} />
          <div>
            <h1>{name}</h1>
            <h3>
              <MdWork />
              {bio}
            </h3>
            <h4>
              <FontAwesomeIcon icon={faHome} /> {location}
            </h4>
          </div>
        </div>

        <div className="expericia">
          <h2>Minha expericia profissional:</h2>
          <h3 className="expericia_h3">
            Estagiario na <FaRocket />
            {company} de 06/2022 ate Atualmente
          </h3>
        </div>
        <div>
          <h2>
            meu{" "}
            <a href={html_url}>
              {" "}
              <FaGithub />
            </a>{" "}
            foi criado em: {created_at}
          </h2>
          <h2 className="repo">
            Tenho {public_repos} repositorios no Github e {followers} seguidores
          </h2>
        </div>

        <div className="contato">
          <h2>Contato:</h2>
          <h3>
            <FaTwitter /> @{twitter_username}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default GithubResumo;
