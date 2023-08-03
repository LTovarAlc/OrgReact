import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"


const Formulario = () => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const manejarEnvio = (e) =>{
        e.preventDefaul()
        console.log("Manejar Envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto
        }
        console.log(datosAEnviar)
    }



    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                requiered={true} 
                valor={nombre} 
                actualizarValor={actualizarNombre} 
            />
            <CampoTexto 
                titulo="Puesto"
                placeholder="Ingresar puesto"
                valor={puesto} 
                actualizarValor={actualizarPuesto} 
            />
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingrear enlace de foto"
                valor={foto} 
                actualizarValor={actualizarFoto} 
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}    
            />
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario