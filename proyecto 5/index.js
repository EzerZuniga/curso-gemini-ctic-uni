import pc from "picocolors";

const simularModelo = (nombre, demora, falla = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (falla) reject(new Error(`${nombre} falló`));
      else resolve(`Respuesta de ${nombre} (${demora}ms)`);
    }, demora);
  });
};

const main = async () => {
  console.log(pc.cyan("====== Espera a todos ======"));

  console.time("all");
  const todas = await Promise.all([
    simularModelo("Flash", 1000),
    simularModelo("Pro", 2000),
    simularModelo("Gemma", 1500),
  ]);
  console.timeEnd("all");
  console.log(todas);

  console.log(pc.cyan("====== Carrera ======"));
  const ganador = await Promise.race([
    simularModelo("Flash", 1000),
    simularModelo("Pro", 2000),
  ]);
  console.log("ganador:", ganador);

  console.log(pc.cyan("====== Fallos ======"));
  const resultados = await Promise.allSettled([
    simularModelo("Pro", 3000),
    simularModelo("Gamma", 2000, true),
  ]);
  
  resultados.forEach((resultado) => {
    if (resultado.status === "fulfilled") {
      console.log(pc.green("OK: " + resultado.value));
    } else {
      console.log(pc.red("FALLO: " + resultado.reason.message));
    }
  });
};

main();
