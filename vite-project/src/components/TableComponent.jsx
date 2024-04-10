import React, { useState } from 'react'
import ModalComponent from './ModalComponent'
import FormularioComponent from './FormularioComponent'
const TableComponent = ({Productos,eliminarProducto}) => {
    const [modalState,setModalState]= useState(false);
    const [product, setProduct] = useState({});

    const productoActualizar = (producto) => {
        setModalState(true);
        setProduct(producto);
    }

  return (
    <div className='contenedor'>
        <table >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Caracteristica</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {Productos.map((producto)=>
                <tr key={producto.id}>
                    <td>{producto.id}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.caracteristica}</td>
                    <td>
                        <button className='btn btn-outline-info' onClick={() => productoActualizar(producto)}><ion-icon name="create-outline"></ion-icon></button>{" "}
                        <button className='btn btn-outline-danger' onClick={()=>{eliminarProducto(producto.id)}}><ion-icon name="trash"></ion-icon></button>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
        {modalState && <ModalComponent isOpen={modalState} onClose={() => setModalState(false)}>
                <FormularioComponent producto={product} />
            </ModalComponent>}
    </div>
  )
}
export default TableComponent