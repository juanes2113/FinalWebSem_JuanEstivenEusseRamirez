# Estructura de Base de Datos MongoDB

## Colecciones

### servicios
```javascript
{
  _id: ObjectId,
  titulo: String,        // Título del servicio
  descripcion: String,   // Descripción detallada del servicio
  costo: Number,         // Costo del servicio
  createdAt: Date,      // Fecha de creación (automático)
  updatedAt: Date       // Fecha de última actualización (automático)
}
```

### mensajes_contacto
```javascript
{
  _id: ObjectId,
  remitente: String,    // Nombre del remitente
  email: String,        // Email del remitente
  contenido: String,    // Contenido del mensaje
  createdAt: Date,      // Fecha de creación (automático)
  updatedAt: Date       // Fecha de última actualización (automático)
}
```

## Índices

### servicios
- `titulo`: índice de texto para búsquedas
- `createdAt`: índice para ordenamiento cronológico

### mensajes_contacto
- `email`: índice para búsquedas por email
- `createdAt`: índice para ordenamiento cronológico

## Validaciones

### servicios
- `titulo`: requerido, string, longitud mínima 3 caracteres
- `descripcion`: requerido, string
- `costo`: requerido, número, valor mínimo 0

### mensajes_contacto
- `remitente`: requerido, string, longitud mínima 2 caracteres
- `email`: requerido, string, formato email válido
- `contenido`: requerido, string, longitud mínima 10 caracteres

## Relaciones

- No hay relaciones explícitas entre colecciones ya que es un sistema simple
- Cada colección es independiente y manejada por su respectivo agente 