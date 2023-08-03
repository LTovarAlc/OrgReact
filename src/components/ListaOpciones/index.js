import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //metodo map -> arreglo.map( (equipo, index) => return { 
    // return <option></option>
    //} )
    const equipos = [
        "Programación", 
        "Front End",
        "Data Science",
        "Dev Ops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {equipos.map((equipo,index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones