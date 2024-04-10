import { useState } from "react"

const FormularioComponent = ({ producto='' }) => {
  
  const [nombre, setNombre] = useState(producto.nombre || '');
  const [id, setId] = useState(producto.id || '');
  const [caracteristica, setCaractetistica] = useState(producto.caracteristica || '');
  
  const handleSubmit = () => {
    const objetoBase = {
      id,
      nombre,
      caracteristica
    }
    console.log(objetoBase)
  }

  return (
    <div className="container center">
      <form className="">
        <label> Id:</label>
        <input
          className="form-control"
          type="text"
          placeholder={producto.id}
          onChange={(e) => setId(e.target.value)}
        />
        <label>Nombre:</label>
        <input
        className="form-control"
        type="text" 
        required
        placeholder={producto.nombre}
        onChange={(e) => setNombre(e.target.value)}
        />
        <label>Característica:</label>
        <input
        className="form-control"
        type="text"
        required
        placeholder={producto.caracteristica}
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
            onClick={close}
          >
            Cancelar
          </button>
          </div>
      </form>
    </div>
  )
}

export default FormularioComponent