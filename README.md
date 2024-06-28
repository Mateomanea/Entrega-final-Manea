# React Ecommerce Project

Este es un proyecto de ecommerce desarrollado con React, Vite y Firebase Firestore. El proyecto permite a los usuarios ver una lista de productos, filtrarlos por categoría y ver los detalles de cada producto.

## Características

- Listado de productos.
- Filtrado de productos por categoría.
- Detalles de cada producto.
- Gestión de autenticación de usuarios con Firebase.
- Despliegue en Netlify.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

project-root/
│
├── public/
│ ├── assets/
│ │ ├── img-products/
│ │ │ ├── eset-nod32-antivirus.png
│ │ │ ├── ...
│
├── src/
│ ├── components/
│ │ ├── ItemList.jsx
│ │ ├── ItemListContainer.jsx
│ │ ├── ...
│ ├── firebase/
│ │ ├── config.js
│ ├── App.jsx
│ ├── index.jsx
│ ├── ...
├── .gitignore
├── package.json
├── vite.config.js
├── README.md
└── ...


## Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/react-ecommerce.git
cd react-ecommerce
npm install
