import React, { useState } from 'react'
import Producto from './Producto'

function Productos(){

    const [productos, setProductos] = useState(
        [
            {
                nombre: "DualSense",
                imagen: "https://media.direct.playstation.com/is/image/psdglobal/dualsense-ps5-controller-white-accessory-front?$FourColumn_Large$",
                descripcion: "PlayStation 5",
                precio: "100 €",
                sku: "232392",
                stock: "1",
            }
        ]
    )

    const [mensaje, setMensaje] = useState(' ')

    const comprar = () => {

        setProductos(
            [
                {
                    nombre: "DualSense",
                    imagen: "https://media.direct.playstation.com/is/image/psdglobal/dualsense-ps5-controller-white-accessory-front?$FourColumn_Large$",
                    descripcion: "PlayStation 5",
                    precio: "100 €",
                    sku: "232392",
                    stock: "Fuera de stock",
                }
            ]
        )

        setMensaje("Gracias por su compra")

    }
    

    return(
        <>
            {productos.map(producto => <Producto nombre={producto.nombre} imagen={producto.imagen} descripcion={producto.descripcion} precio={producto.precio}
            sku={producto.sku} stock={producto.stock} comprar={comprar} mensaje={mensaje}/>)}

            {/* <Producto comprar={comprar} /> */}

            {/* <button onClick={comprar}>Comprar</button> */}

        </>
        
            
    )
    
}

    
    export default Productos