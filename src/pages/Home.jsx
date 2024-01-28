import { Link } from "react-router-dom"

export function Home() {
    return(
        <div className="container-fluid">
  
        <div className="row my-5">
          <div className="col-md-8 offset-md-2">
            <h1 className="text-center">
              ¡Bienvenido a nuestra Aplicación de Prueba de GPT-3! 
            </h1>
  
            <p className="lead text-center">
            En esta emocionante aplicación, podrás experimentar el poder de la inteligencia artificial a través de GPT-3, uno de los modelos de lenguaje más avanzados del mundo. ¿Qué puede hacer GPT-3? ¡Casi cualquier cosa relacionada con el procesamiento del lenguaje natural!
            </p>
            <div className="text-center">
                <Link to="/testGPT" className="btn btn-success btn-lg">
                Ir a la Prueba
                </Link>
            </div>
          </div>  
        </div>
  
        <div className="row my-5">
          <div className="col-md-6 offset-md-3">
           <h2 className="text-center">¿Cómo funciona?</h2>
          
           <p>
            Simplemente escribe una pregunta o una declaración en el cuadro de texto a continuación y GPT-3 generará una respuesta basada en el contexto proporcionado. Desde la redacción de correos electrónicos hasta la generación de código, GPT-3 es increíblemente versátil.
           </p>
          </div>
        </div>
  
        <div className="row my-5">
          <div className="col-md-8 offset-md-2">
            <h2 className="text-center">¿Por qué probarlo?</h2>
  
            <p className="lead text-center">
                Aprende cómo GPT-3 puede ayudarte en tu trabajo o proyectos personales.
                Experimenta con la generación de contenido de manera rápida y sencilla.
                Descubre nuevas aplicaciones y usos de la inteligencia artificial en tu vida cotidiana.
            </p>
  
            <p className="text-center">
                ¡Diviértete explorando las capacidades de GPT-3 en nuestra aplicación y descubre cómo puede facilitar tu vida!
            </p>
          </div>
        </div>
      </div>
    )
}
