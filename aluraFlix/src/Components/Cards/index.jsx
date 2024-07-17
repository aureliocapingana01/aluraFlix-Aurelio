import { Button, Card, DivButton, Img } from "./Estilo"
import img from '../Cards/img/fs.avif'

const Cards = () => {
  return (
    <Card>
    <Img src={img} alt="" />
      <DivButton>
        <Button>Deletar</Button>
        <Button>Editar</Button>
      </DivButton>
    </Card>
  )
}
export default Cards