import {Card, Button} from 'react-bootstrap';

function Producto({nombre,imagen,descripcion,precio,sku,stock,comprar,blanco,violeta,negro,rojo,mensaje}){

    return(

        <>
    <Card className="mx-auto mt-5 text-center" style={{ width: '21rem' }}>
        <Card.Img variant="top" src={imagen} className="mt-3" />
        <Card.Body>
          <Card.Title className="mt-2">{nombre}</Card.Title>
          <Card.Text>
          <p>{descripcion}</p>
          <p>{precio}</p>
          <p>SKU: {sku}</p>
          <p>Stock: {stock}</p>
          </Card.Text>
          <Button onClick={comprar} variant="primary">Comprar</Button>
        </Card.Body>
    </Card>

    <p className="text-center mt-3">{mensaje}</p>




</>


    

    

    

/*         <div>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <p>{sku}</p>
            <p>{stock}</p>
        </div>
 */
    )

}

export default Producto