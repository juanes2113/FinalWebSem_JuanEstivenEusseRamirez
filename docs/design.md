# Documentación de Diseño

## Estructura Cliente-Servidor

### Backend (Servidor)
- **Tecnologías**: Node.js, Express, MongoDB
- **Arquitectura**: REST API
- **Estructura de directorios**:
  ```
  backend/
  ├── models/         # Modelos de datos
  ├── controllers/    # Controladores (Agentes)
  ├── routes/         # Rutas de la API
  └── server.js       # Punto de entrada
  ```

### Frontend (Cliente)
- **Tecnologías**: HTML5, CSS3, JavaScript Vanilla
- **Estructura de directorios**:
  ```
  frontend/
  ├── css/           # Estilos
  ├── js/            # Scripts
  ├── index.html     # Página principal
  ├── servicios.html # Lista de servicios
  ├── contacto.html  # Formulario de contacto
  └── acerca.html    # Información del equipo
  ```

## Organización por Agentes Conceptuales

### AgenteServicio
- Implementado en `servicioController.js`
- Maneja las operaciones CRUD de servicios
- Se comunica con el modelo `Servicio`
- Expone endpoints REST

### AgenteContacto
- Implementado en `contactoController.js`
- Procesa y almacena mensajes de contacto
- Se comunica con el modelo `MensajeContacto`
- Valida datos de entrada

## Uso de la Ontología en el Diseño

1. **Separación de Responsabilidades**
   - Cada agente tiene un propósito específico
   - Las relaciones entre agentes están bien definidas

2. **Modelado de Datos**
   - Los esquemas MongoDB reflejan la estructura de la ontología
   - Las validaciones implementan las reglas definidas

3. **Interfaces de Usuario**
   - Cada concepto tiene su propia vista
   - La navegación refleja las relaciones entre conceptos

## Justificación del Diseño Visual

### Paleta de Colores
- **Azul Oscuro (#2c3e50)**
  - Color principal
  - Transmite profesionalismo y confianza
  - Alta legibilidad en texto blanco

- **Azul Claro (#3498db)**
  - Color secundario
  - Usado para elementos interactivos
  - Contraste agradable con el azul oscuro

- **Rojo (#e74c3c)**
  - Color de acento
  - Usado para llamadas a la acción importantes
  - Contraste efectivo con los azules

- **Gris Claro (#ecf0f1)**
  - Color de fondo alternativo
  - Mejora la legibilidad
  - Crea jerarquía visual

### Principios de Diseño Aplicados

1. **Contraste**
   - Texto oscuro sobre fondos claros
   - Elementos importantes destacados
   - Mejora la accesibilidad

2. **Jerarquía**
   - Títulos prominentes
   - Espaciado consistente
   - Agrupación lógica de elementos

3. **Consistencia**
   - Sistema de componentes reutilizables
   - Estilos coherentes en todas las páginas
   - Patrones de interacción familiares

4. **Responsividad**
   - Diseño adaptable a diferentes dispositivos
   - Grid system flexible
   - Navegación móvil optimizada

## Uso de MongoDB

1. **Conexión**
   - Uso de MongoDB Atlas para facilitar el despliegue
   - Conexión segura mediante variables de entorno

2. **Modelos**
   - Esquemas Mongoose para validación
   - Índices para optimizar búsquedas
   - Timestamps automáticos

## Instrucciones de Ejecución

1. **Configuración del Backend**
   ```bash
   cd backend
   npm install
   # Crear archivo .env con MONGODB_URI
   npm start
   ```

2. **Configuración del Frontend**
   ```bash
   # Servir archivos estáticos con un servidor web
   # Por ejemplo, usando Python:
   cd frontend
   python -m http.server 8000
   ```

3. **Acceso**
   - Backend: http://localhost:5000
   - Frontend: http://localhost:8000 