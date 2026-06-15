import pc from "picocolors"
import info, { saludar, despedirse } from "./saludos.js"


console.log("Bienvenidos")
console.log(saludar("Ezer Zuniga"))
console.log(saludar("Alex Mendoza"))
console.log("Version", info.version)

console.log(
  pc.green(`How are ${pc.italic(`you`)} doing?`)
)