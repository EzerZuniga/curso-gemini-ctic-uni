# Curso Gemini CTIC UNI

![Node.js](https://img.shields.io/badge/Runtime-Node.js%2018%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/Package%20Manager-npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![JavaScript](https://img.shields.io/badge/Language-JavaScript%20%2B%20ES%20Modules-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111)
![Google Gemini](https://img.shields.io/badge/AI-Google%20Gemini%20API-4285F4?style=for-the-badge&logo=google&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-2ea44f?style=for-the-badge)

Repositorio académico con ejercicios prácticos desarrollados durante el curso de Gemini de CTIC UNI. El objetivo es aprender progresivamente fundamentos de Node.js, modularización, asincronía, manejo de dependencias, variables de entorno e integración con la API de Google Gemini.

El contenido está organizado por proyectos numerados. Cada práctica introduce un concepto técnico específico y sirve como base para construir aplicaciones más completas con inteligencia artificial generativa.

---

## Tabla de contenidos

1. [Objetivo del repositorio](#objetivo-del-repositorio)
2. [Tecnologías utilizadas](#tecnologías-utilizadas)
3. [Estructura del repositorio](#estructura-del-repositorio)
4. [Descripción de proyectos](#descripción-de-proyectos)
5. [Requisitos previos](#requisitos-previos)
6. [Instalación y ejecución](#instalación-y-ejecución)
7. [Variables de entorno](#variables-de-entorno)
8. [Buenas prácticas aplicadas](#buenas-prácticas-aplicadas)
9. [Recomendaciones de mejora](#recomendaciones-de-mejora)
10. [Licencia](#licencia)

---

## Objetivo del repositorio

Este repositorio busca consolidar los conceptos esenciales para trabajar con JavaScript moderno en backend y consumir servicios de inteligencia artificial desde Node.js.

Los ejercicios cubren:

- Ejecución básica de scripts con Node.js.
- Uso de paquetes externos desde npm.
- Diferencias entre CommonJS y ES Modules.
- Separación de código en módulos reutilizables.
- Programación asíncrona con `async/await`.
- Uso de `Promise.all`, `Promise.race` y `Promise.allSettled`.
- Manejo seguro de credenciales con variables de entorno.
- Consumo directo de la API REST de Gemini.
- Uso del SDK oficial `@google/genai`.

## Tecnologías utilizadas

| Tecnología | Uso principal |
| --- | --- |
| Node.js | Ejecución de JavaScript en entorno backend. |
| JavaScript | Lenguaje principal de las prácticas. |
| npm | Gestión de dependencias por proyecto. |
| picocolors | Salida por consola con colores. |
| dotenv | Carga segura de variables de entorno. |
| Google Gemini API | Consulta de modelos y generación de contenido. |
| `@google/genai` | SDK oficial para interactuar con Gemini desde Node.js. |

## Estructura del repositorio

```text
curso-gemini-ctic-uni/
├── proyecto 1/          # Primer script con Node.js
├── proyecto 2/          # Uso inicial de dependencias npm
├── proyecto 3/          # ES Modules y módulos propios
├── proyecto 4/          # Simulación de llamada asíncrona
├── proyecto 5/          # Patrones de concurrencia con Promises
├── proyecto 6/          # Listado de modelos desde la API REST de Gemini
├── proyecto 7/          # Generación de contenido con @google/genai
├── .gitignore
├── LICENSE
└── README.md
```

## Descripción de proyectos

| Proyecto | Tema principal | Descripción |
| --- | --- | --- |
| `proyecto 1` | Introducción a Node.js | Ejecuta un mensaje básico por consola para validar el entorno. |
| `proyecto 2` | Dependencias npm | Usa `picocolors` con CommonJS para imprimir mensajes con estilos en consola. |
| `proyecto 3` | Modularización | Usa ES Modules, exportaciones nombradas y exportación por defecto desde `saludos.js`. |
| `proyecto 4` | Asincronía básica | Simula una llamada a IA con `async/await` y `setTimeout`. |
| `proyecto 5` | Concurrencia | Compara `Promise.all`, `Promise.race` y `Promise.allSettled` simulando respuestas de modelos. |
| `proyecto 6` | API REST de Gemini | Lista modelos disponibles usando `fetch`, `dotenv` y una API key. |
| `proyecto 7` | SDK de Gemini | Genera contenido usando el paquete oficial `@google/genai`. |

## Requisitos previos

- Node.js 18 o superior. Se recomienda Node.js 20 LTS.
- npm instalado junto con Node.js.
- Git, si se desea clonar o versionar el repositorio.
- API key de Google Gemini para ejecutar `proyecto 6` y `proyecto 7`.

## Instalación y ejecución

Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd curso-gemini-ctic-uni
```

Ejecuta una práctica sin dependencias:

```bash
cd "proyecto 1"
node index.js
```

Ejecuta una práctica con dependencias:

```bash
cd "proyecto 5"
npm install
node index.js
```

Los proyectos que contienen `package.json` deben instalar sus dependencias dentro de su propia carpeta antes de ejecutarse.

## Variables de entorno

Los proyectos `proyecto 6` y `proyecto 7` requieren una API key de Gemini.

Crea un archivo `.env` dentro de la carpeta del proyecto que vas a ejecutar:

```env
GEMINI_API_KEY=tu_api_key_de_gemini
```

Ejemplo para `proyecto 7`:

```bash
cd "proyecto 7"
npm install
node index.js
```

## Buenas prácticas aplicadas

- Separación progresiva de responsabilidades mediante módulos.
- Uso de dependencias externas a través de npm.
- Carga de credenciales con `dotenv` en lugar de valores quemados en código.
- Manejo de errores con `try/catch` en llamadas externas.
- Uso de patrones de concurrencia nativos de JavaScript.
- Inclusión de `.gitignore` para excluir `node_modules`, archivos de entorno y salidas temporales.

## Licencia

Este repositorio se distribuye bajo licencia MIT. Revisa el archivo [LICENSE](LICENSE) para más detalles.

## Créditos

Desarrollado como parte del curso de Gemini de CTIC UNI, con enfoque académico y buenas prácticas utilizadas en proyectos profesionales de software.
