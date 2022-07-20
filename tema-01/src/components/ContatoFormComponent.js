import styles from "./ContatoForm.module.css";

const ContatoForm = () => {
  return (
    <div className="container">
      <div className={styles.contatoForm}>
        <div className={styles.bordaForm}>
          <h1 className={styles.h1Form}>Contato</h1>
          <div>
            <label for="name">Digite seu nome completo</label>
          </div>
          <input name="name" placeholder="nome completo" type="text" required />

          <div>
            <label for="email">Digite seu E-mail</label>
          </div>
          <input name="email" placeholder="E-mail" type="email" required />

          <div>
            <label for="questions">Qual motivo do seu conato</label>
          </div>
          <select name="questions" id="question">
            <option value="q1">React é dificil</option>
          </select>

          <div>
            <label for="msg">Sua menssagem</label>
          </div>
          <textarea name="msg" id="msg" cols="30" rows="10"></textarea>

          <input className={styles.button} type="submit" value="Salvar" />
        </div>
      </div>
    </div>
  );
};

export default ContatoForm;
