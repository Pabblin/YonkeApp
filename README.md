# YonkeApp

Plataforma web para consultar y encontrar autopartes de yonkes. YonkeApp busca facilitar la búsqueda de piezas automotrices y apoyar la digitalización de los negocios de autopartes mediante una interfaz clara y una integración con un backend.

> **Estado del proyecto:** en desarrollo académico. Las funciones descritas como objetivos futuros forman parte del alcance planeado y pueden no estar implementadas todavía.

## Tabla de contenido

- [Descripción](#descripción)
- [Objetivos](#objetivos)
- [Funcionalidades](#funcionalidades)
- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Requisitos previos](#requisitos-previos)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Configuración del backend](#configuración-del-backend)
- [Rutas principales](#rutas-principales)
- [Criterios de calidad](#criterios-de-calidad)
- [Metodología de trabajo](#metodología-de-trabajo)
- [Equipo](#equipo)
- [Alcance y trabajo futuro](#alcance-y-trabajo-futuro)

## Descripción

Muchos negocios de autopartes administran sus inventarios mediante procesos manuales o herramientas poco organizadas. Esto dificulta localizar piezas específicas, mantener la información actualizada y dar visibilidad a los productos disponibles.

YonkeApp es la interfaz web de una plataforma orientada a conectar a los negocios de autopartes con personas que buscan piezas para sus vehículos. La aplicación permite explorar categorías, consultar productos, buscar autopartes y acceder a formularios de registro e inicio de sesión para los negocios.

## Objetivos

- Facilitar la búsqueda de autopartes por nombre o término de búsqueda.
- Mostrar información de productos, como nombre, descripción, categoría, precio, imagen y existencias.
- Proporcionar una interfaz para el registro e inicio de sesión de negocios.
- Contribuir a una mejor organización y visibilidad del inventario.
- Mantener una estructura de frontend modular que facilite el mantenimiento y la evolución del sistema.

## Funcionalidades

### Disponibles en el frontend del repositorio

- Página de inicio con presentación y categorías de autopartes.
- Sección de productos destacados, obtenidos desde el backend.
- Búsqueda de productos con espera breve antes de enviar la consulta (*debounce*).
- Visualización de resultados y estado de carga.
- Página de detalle de producto.
- Formularios de registro e inicio de sesión.
- Componentes reutilizables para botones, campos de entrada, navegación y pie de página.
- Formato de precios en pesos mexicanos (MXN).

La disponibilidad efectiva de cada función depende de que el backend y sus endpoints estén configurados y funcionando correctamente.

### Planeadas para la evolución del proyecto

De acuerdo con el plan de calidad, el alcance general contempla ampliar la gestión de autopartes con funciones como:

- Administración y actualización del inventario.
- Clasificación jerárquica de autopartes.
- Registro del estado de las piezas.
- Información de compatibilidad por vehículo.
- Carga de varias imágenes por producto.
- Ubicación física de las piezas dentro del yonke.
- Filtros más completos y opciones de búsqueda avanzada.
- Controles de acceso por roles, auditoría y respaldos.

Estas características no deben considerarse implementadas únicamente por estar incluidas en el plan del proyecto.

## Tecnologías

| Tecnología | Uso |
|---|---|
| [Next.js](https://nextjs.org/) | Framework de la aplicación web y enrutamiento |
| [React](https://react.dev/) | Construcción de interfaces mediante componentes |
| [TypeScript](https://www.typescriptlang.org/) | Tipado estático del código |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos y diseño de la interfaz |
| [Lucide React](https://lucide.dev/) | Iconografía |
| Node.js y npm | Entorno de ejecución y administración de paquetes |

El frontend consume una API HTTP. El servicio está preparado para utilizar `NEXT_PUBLIC_API_URL` y, si la variable no se define, utiliza `http://localhost:5000/api` como dirección predeterminada. Los formularios de autenticación incluidos en el código usan actualmente direcciones `http://localhost:3001/api/users`; verifica que coincidan con la configuración real de tu backend antes de ejecutar la aplicación.

## Estructura del proyecto

```text
.
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── product/
│   │   │   └── [id]/
│   │   ├── search/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Footer.tsx
│   │   ├── Input.tsx
│   │   └── Navbar.tsx
│   ├── features/
│   │   ├── auth/
│   │   ├── home/
│   │   ├── product/
│   │   └── search/
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   └── useSearch.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── services/
│   │   └── api.ts
│   └── types/
│       └── index.ts
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

### Organización del código

- `src/app/`: páginas y rutas de Next.js.
- `src/components/`: componentes compartidos de la interfaz.
- `src/features/`: componentes agrupados por funcionalidad: autenticación, inicio, productos y búsqueda.
- `src/hooks/`: hooks reutilizables, incluida la lógica de búsqueda.
- `src/lib/`: utilidades generales, como el formato de moneda.
- `src/services/`: comunicación con la API.
- `src/types/`: interfaces y tipos de TypeScript.

## Requisitos previos

Antes de comenzar, instala:

- Node.js, en una versión compatible con la versión de Next.js declarada en `package.json`.
- npm, incluido normalmente con Node.js.
- El backend de YonkeApp, si deseas probar las funciones que requieren datos o autenticación.

Puedes verificar las instalaciones con:

```bash
node -v
npm -v
```

## Instalación y ejecución

1. Clona el repositorio y entra en la carpeta del frontend:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <CARPETA_DEL_REPOSITORIO>
   ```

   Sustituye los valores entre `< >` por la URL y el nombre reales del repositorio.

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura la URL del backend. Crea un archivo `.env.local` en la raíz del proyecto, junto a `package.json`:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

   Ajusta el valor al host y puerto reales de tu API. Revisa también las URL utilizadas directamente en los formularios de autenticación para que apunten al backend correcto.

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

Para generar una compilación de producción:

```bash
npm run build
npm run start
```

## Configuración del backend

La aplicación necesita que la API exponga los endpoints esperados por el frontend. Entre las rutas utilizadas en el código se encuentran:

| Método | Endpoint | Propósito |
|---|---|---|
| `GET` | `/productos?limit=4` | Obtener productos destacados |
| `GET` | `/productos/:id` | Consultar el detalle de un producto |
| `GET` | `/productos/buscar?q=<consulta>` | Buscar productos |
| `POST` | `/api/users` | Registrar un usuario o negocio, según el backend |
| `POST` | `/api/users/login` | Iniciar sesión |

Las rutas pueden tener prefijos diferentes según la configuración del backend. Confirma las rutas y puertos en el proyecto de servidor antes de probarlas. La URL base configurada en `src/services/api.ts` se aplica a las solicitudes realizadas mediante el servicio `api`; los formularios de autenticación realizan solicitudes `fetch` directas.

**Importante:** no publiques contraseñas, tokens, claves privadas ni archivos de entorno con credenciales en el repositorio.

## Rutas principales

| Ruta | Descripción |
|---|---|
| `/` | Página de inicio y productos destacados |
| `/search` | Búsqueda y resultados de autopartes |
| `/product/:id` | Detalle de un producto |
| `/auth/register` | Formulario de registro |
| `/auth/login` | Formulario de inicio de sesión |

## Criterios de calidad

El plan de calidad del proyecto toma como referencia los siguientes estándares y objetivos:

- **ISO/IEC 25010:** calidad del producto, con énfasis en funcionalidad, fiabilidad, usabilidad, eficiencia, seguridad, mantenibilidad y portabilidad.
- **ISO/IEC 12207:** procesos del ciclo de vida del software.
- **ISO/IEC 27001:** gestión de la seguridad de la información.
- **IEEE 830:** documentación de requisitos de software.

Entre las metas propuestas en el plan se encuentran:

- Tiempo de búsqueda inferior a 3 segundos.
- Carga inicial inferior a 3 segundos.
- Confirmación de acciones en menos de 4 segundos.
- Disponibilidad igual o superior al 98 %.
- Cobertura de pruebas igual o superior al 80 %.
- Revisión de código antes de integrar cambios a la rama principal.
- Contraseñas protegidas y control de acceso adecuado.

Estas cifras son objetivos del plan de calidad; deben verificarse mediante pruebas y mediciones antes de considerarse alcanzadas.

## Metodología de trabajo

El plan propone un enfoque combinado:

- **Scrum** para organizar el desarrollo de la arquitectura principal y las funcionalidades centrales.
- **Kanban** para visualizar el flujo de trabajo, atender ajustes y gestionar correcciones e integraciones.

Se propone utilizar Git para el control de versiones y pull requests con revisión de código antes de integrar cambios a la rama principal.

## Equipo

Proyecto académico desarrollado para la materia **Gestión de Proyectos de Software** del Instituto Tecnológico de Tijuana.

- **Juan Pablo Camacho Otañez:** liderazgo del proyecto, arquitectura general, gestión del proyecto, base de datos y backend.
- **Ana Cecilia Hernandez Cuadras:** desarrollo frontend y aseguramiento de calidad.
- **Emily Mijangos Garibay:** desarrollo frontend y aseguramiento de calidad.

## Alcance y trabajo futuro

El alcance inicial del proyecto se centra en la consulta de autopartes, la búsqueda de productos y el acceso de negocios mediante registro e inicio de sesión. El plan contempla futuras ampliaciones para mejorar la administración de inventario, compatibilidad de piezas, control de cambios, seguridad y operación de los negocios.

Los pagos en línea y el rastreo de envíos están fuera del alcance inicial indicado en el plan. Consulta la documentación y el código del backend para conocer el estado real de cada integración.
