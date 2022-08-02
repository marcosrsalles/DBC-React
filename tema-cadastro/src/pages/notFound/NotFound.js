import { Card, CardConteint } from "./Notfound.styled";
import imagemNaoEncontrada from "./giphy-1.gif";
function NotFound() {
  return (
    <Card>
      <CardConteint>
        <h1>Esta pagina não existe</h1>
        <img src={imagemNaoEncontrada} alt="" srcset="" />
      </CardConteint>
    </Card>
  );
}

export default NotFound;
