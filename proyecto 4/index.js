const simularLlamadaIA = async () => {
    console.log("1. Consultando a la IA...")
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log("2. Respuesta recibida de la IA")

}

console.log("Iniciando proceso")
simularLlamadaIA()
console.log("terminado")