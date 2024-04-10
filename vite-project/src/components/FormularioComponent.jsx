import { useContext, useState, useEffect } from "react"
import { ModalContext } from "../context/providerModal";

const FormularioComponent = ({ producto = '' }) => {
  const { setIsOpen, isEdit, agregarProducto } = useContext(ModalContext)

  const [nombre, setNombre] = useState(producto.nombre || '');
  const [id, setId] = useState(producto.id || '');
  const [caracteristica, setCaractetistica] = useState(producto.caracteristica || '');

  const handleSubmit = () => {
    const objetoBase = {
      id,
      nombre,
      caracteristica
    }
    console.log(objetoBase);
    !isEdit ? agregarProducto(objetoBase) : null

  }

  useEffect(() => {
    console.log(isEdit);
  }, [isEdit])

  return (
    <div className="container center">
      <form className="">
        <label> Id:</label>
        <input
          className="form-control"
          type="text"
          defaultValue={isEdit ? producto.id : id}
          onChange={(e) => setId(e.target.value)}
        />
        <label>Nombre:</label>
        <input
          className="form-control"
          type="text"
          required
          defaultValue={isEdit ? producto.nombre : nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Característica:</label>
        <input
          className="form-control"
          type="text"
          required
          defaultValue={isEdit ? producto.caracteristica : caracteristica}
          onChange={(e) => setCaractetistica(e.target.value)}

        />
        <div className="p-4">
          <button
            className="btn btn-outline-primary "
            type="button"
            onClick={handleSubmit}
          >
            Aceptar
          </button>
          {" "}
          <button
            className="btn btn-outline-danger"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormularioComponent