import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"


const Formulario = () => {

    const manejarEnvio = (e) =>{
        e.preventDefaul()
        console.log("Manejar Envio", e)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" requiered={true}/>
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"/>
            <CampoTexto titulo="Foto" placeholder="Ingrear enlace de foto"/>
            <ListaOpciones/>
            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario