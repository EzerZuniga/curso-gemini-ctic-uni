import 'dotenv/config'


const verModelosDisponibles = async () => {
    try{
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`
        )

        const data = await response.json()
        // console.log(data.models)
        data.models.forEach(modelo => {
            console.log(`nombre: ${modelo.name}`)
            console.log(`nombre: ${modelo.displayName}`)
            console.log(`capacidades: ${modelo.supportedGenerationMethods.join(", ")}`)
            console.log(`==============================`)
        })

    } catch (error) {
        console.log("Error al listar los modelos ", error)
    }
}

verModelosDisponibles()
