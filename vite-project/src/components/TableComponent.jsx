import React, { useContext, useState } from 'react'
import ModalComponent from './ModalComponent'
import FormularioComponent from './FormularioComponent'
import { ModalContext } from '../context/providerModal';

const TableComponent = () => {

    const { isOpenModal, setIsOpen, setIsEdit, productos, eliminarProducto } = useContext(ModalContext)

    const [product, setProduct] = useState({});

    const productoActualizar = (producto) => {
        setIsOpen(!isOpenModal);
        setIsEdit(true)
        setProduct(producto);
    }

    const addNewProduct = () => {
        setIsOpen(true)
        setIsEdit(false)
    }
    return (
        <div >
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
                        {productos.map((producto) =>
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.caracteristica}</td>
                                <td>
                                    <button className='btn btn-outline-info' onClick={() => productoActualizar(producto)}><ion-icon name="create-outline"></ion-icon></button>{" "}
                                    <button className='btn btn-outline-danger' onClick={() => { eliminarProducto(producto.id) }}><ion-icon name="trash"></ion-icon></button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {isOpenModal && <ModalComponent isOpen={isOpenModal} onClose={() => setIsOpen(false)}>
                    <FormularioComponent producto={product} />
                </ModalComponent>}

            </div>
            <button className='btn btn-outline-dark' onClick={() => addNewProduct()}>Nuevo</button>

        </div>
    )
}
export default TableComponent