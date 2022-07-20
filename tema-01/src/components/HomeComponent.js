import Logo from "./LogoComponent";
import CardHome from "./CardHomeComponent";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className="home-conteint">
        <h1>Estamos aprendendo CSS e HTML com o melhor professor de todos</h1>
        <div className={styles.cardCodgumelo}>
          <Logo texto={"cogumelo 1"} />
          <Logo texto={"cogumelo 2"} />
          <Logo texto={"cogumelo 3"} />
        </div>
      </div>

      <div>
        <CardHome />
      </div>
    </div>
  );
};

export default Home;
