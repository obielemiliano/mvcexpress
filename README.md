# 🚀 Express TypeScript Starter

![Node.js](https://img.shields.io/badge/node-v20.9.0-green.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.6.2-blue.svg)
![Express](https://img.shields.io/badge/express-4.21.0-brightgreen.svg)
![ESLint](https://img.shields.io/badge/ESLint-9.11.1-red.svg)
![Prettier](https://img.shields.io/badge/Prettier-3.3.3-yellow.svg)
![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)

## 📝 Descripción

**Express TypeScript Starter** es una plantilla inicial diseñada para facilitar el desarrollo de aplicaciones web robustas utilizando **Express.js** y **TypeScript**. Esta plantilla está configurada con herramientas modernas que aseguran la calidad y consistencia del código, incluyendo **ESLint**, **Prettier**, y un entorno de desarrollo optimizado con **Nodemon**.

Ideal para desarrolladores que buscan una base sólida y bien estructurada para construir APIs escalables y mantenibles, eliminando la necesidad de configurar manualmente cada herramienta desde cero.

## 🛠️ Tecnologías Utilizadas

- **[Express.js](https://expressjs.com/)**: Framework web minimalista y flexible para Node.js.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que añade tipos estáticos.
- **[ESLint](https://eslint.org/)**: Herramienta para identificar y reportar patrones encontrados en ECMAScript/JavaScript.
- **[Prettier](https://prettier.io/)**: Formateador de código opinado para mantener la consistencia.
- **[Nodemon](https://nodemon.io/)**: Herramienta que reinicia automáticamente el servidor cuando se detectan cambios en el código.
- **[dotenv](https://github.com/motdotla/dotenv)**: Carga variables de entorno desde un archivo `.env`.

## 🌟 Características

- **Configuración Previa de TypeScript**: Compila tu código TypeScript de manera eficiente.
- **Linting y Formateo Automático**: Mantén tu código limpio y consistente con ESLint y Prettier.
- **Recarga Automática en Desarrollo**: Usa Nodemon para reiniciar tu servidor automáticamente al guardar cambios en tus archivos TypeScript.
- **Integración de Variables de Entorno**: Gestiona tus configuraciones sensibles con dotenv.
- **Scripts Automatizados**: Ejecuta fácilmente tareas comunes con scripts predefinidos en `package.json`.

## 👨‍💻 Autores

- **Obiel Emiliano Rangel Moreno** - _Desarrollador Principal_ - [GitHub](https://github.com/obielemiliano)
- **Equipo de Desarrollo** - _Contribuidores_

## 📂 Estructura del Proyecto

```bash
├── dist/                   # Archivos compilados
├── src/                    # Archivos fuente de TypeScript
│   ├── index.ts            # Punto de entrada de la aplicación
│   └── ...                 # Otros archivos y directorios de código
├── .eslintrc.js            # Configuración de ESLint
├── .prettierrc             # Configuración de Prettier
├── nodemon.json            # Configuración de Nodemon
├── package.json            # Dependencias y scripts
├── tsconfig.json           # Configuración de TypeScript
├── .env.example            # Ejemplo de archivo de variables de entorno
└── README.md               # Este archivo
```

## 🛠️ Instalación

### 1. Clonar el Repositorio

```bash
git clone https://github.com/JuanMaLR/mvc-express-IoT-2024.git
cd mvc-express-IoT-2024
```

### 2. Instalar Dependencias (Asegúrate de tener Node.js y npm instalados)

```bash
npm install
```

### 3. Configurar Variables de Entorno

Crea un archivo .env en la raíz del proyecto y añade tus variables de entorno:

```bash
PORT=3000
```

Nota: Puedes usar el archivo .env.example como referencia para las variables necesarias.

### 4. Compilar el Proyecto

Para compilar el proyecto TypeScript a JavaScript, ejecuta:

```bash
npm run build
```

### 5. Ejecutar el Servidor

#### En Producción

```bash
npm run start
```

Esto ejecutará el servidor usando los archivos compilados en la carpeta dist.

#### En Desarrollo

Para ejecutar el servidor en modo desarrollo con recarga automática, usa:

```bash
npm run dev
```

Esto utilizará Nodemon para reiniciar el servidor automáticamente cada vez que guardes cambios en tus archivos TypeScript.

## 📜 Scripts Disponibles

- `npm run build`: Compila el proyecto TypeScript a JavaScript.
- `npm run start`: Ejecuta el servidor usando los archivos compilados en la carpeta dist.
- `npm run dev`: Ejecuta el servidor en modo desarrollo con Nodemon y TypeScript en tiempo real.
- `npm run lint`: Ejecuta ESLint para verificar la calidad del código.
- `npm run lint:fix`: Ejecuta ESLint y corrige automáticamente los errores detectados.

## 🛡️ Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añade nueva funcionalidad'`).
4. Empuja a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre una Pull Request.

## 📣 Contacto

Si tienes alguna pregunta o necesitas ayuda, no dudes en abrir una issue o contactarme directamente en GitHub.
