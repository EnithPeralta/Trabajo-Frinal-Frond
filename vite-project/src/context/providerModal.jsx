import { useState, createContext } from 'react'

const ModalContext = createContext()

const ProviderModal = ({ children }) => {

    const [isOpenModal, setIsOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [productos, setProductos] = useState([
        { id: "1", nombre: "Lavadora", caracteristica: "Programas de lavado (como delicado, rápido, algodón), eficiencia energética" },
        { id: "2", nombre: "Smartphone", caracteristica: "Sistema operativo (como Android o iOS)" },
        { id: "3", nombre: "Refrigerador", caracteristica: "Capacidad de almacenamiento (en litros)" },
        { id: "4", nombre: "Automóvil", caracteristica: "Marca y modelo, tipo de motor (gasolina, diésel, eléctrico)" },
        { id: "5", nombre: "Portátil", caracteristica: "Tipo de procesador, puertos de conexión (USB, HDMI, etc.)" },
        { id: "6", nombre: "Zapatillas deportivas", caracteristica: "Tipo de suela (para correr, para entrenamiento, etc.)" },
        { id: "7", nombre: "Libro electrónico (e-reader)", caracteristica: "Marca y modelo (como Kindle, Kobo), tipo de pantalla (tinta electrónica)" },
        { id: "8", nombre: "Bicicleta", caracteristica: "Tipo de bicicleta (de montaña, de carretera, urbana, etc.)" },
        { id: "9", nombre: "Cafetera", caracteristica: "Tipo de cafetera (goteo, espresso, cápsulas, etc.)" },
        { id: "10", nombre: "Televisor", caracteristica: "Sistema operativo (Smart TV), tecnologías adicionales (HDR, Dolby Vision, etc.)" }
    ]);

    const eliminarProducto = (id) => {
        const eliminar = [...productos];
        const buscar = eliminar.findIndex((producto) => producto.id === id);

        if (buscar !== -1) {
            swal({
                text: "¿Estás seguro de que deseas eliminar este producto?",
                buttons: {
                    cancel: "Cancelar",
                    confirm: "Eliminar",
                },
            }).then((confirmarEliminar) => {
                if (confirmarEliminar) {
                    eliminar.splice(buscar, 1);
                    setProductos(eliminar);
                    swal("El producto ha sido eliminado exitosamente.");
                } else {
                    swal("Operación de eliminación cancelada.");
                }
            });
        } else {
            swal("El producto que intentas eliminar no existe.");
        }
    };

    const agregarProducto = (producto) => {
        setProductos([...productos, producto])
        setIsOpen(false)
    }
    return (
        <ModalContext.Provider
            value={{
                isOpenModal,
                isEdit,
                setIsOpen,
                setIsEdit,
                productos,
                setProductos,
                eliminarProducto,
                agregarProducto
            }}>
            {children}
        </ModalContext.Provider>
    )
}

export { ModalContext, ProviderModal }