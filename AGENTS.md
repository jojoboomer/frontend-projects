## Convenciones
- Usa yarn para todo en consola.
- TypeScript es obligatorio
- Usa siempre Tailwind CSS para estilos
- Iconos de lucide. Importación explícita, nunca barrels
- Preferir ESM y sintaxis moderna del navegador

## Organización
- Componentes pequeños, con una sola responsabilidad
- Preferir composición frente a configuraciones complejas
- Evita abstracciones prematuras
- El código compartido debe vivir en carpetas claras como components, layouts, lib o utils

## Reglas de TypeScript
- Evita any y unknown
- Preferir siempre que se pueda inferencia
- Si los tipos no están claros, parar y aclarar antes de continuar

## UI y estilos
- Tailwind es la única solución de estilos
- No duplicar clases si se puede extraer un componente
- Priorizar legibilidad frente a micro-optimizaciones visuales
- Accesibilidad no es opcional: HTML semántico, roles ARIA cuando aplique y foco gestionado

## Rendimiento y decisiones técnicas
- No adivinar rendimiento, tamaño de bundle o tiempos de carga: medir.
- Si algo parece lento, añadir instrumentación antes de optimizar.
- Validar primero en pequeño antes de escalar cambios a todo el proyecto.

## Comportamiento del agente
- Si una petición no está clara, hacer preguntas concretas antes de ejecutar.
- Tareas simples y bien definidas se ejecutan directamente.
- Cambios complejos (refactors, nuevas features, decisiones de arquitectura) requieren confirmar entendimiento antes de actuar.
- No asumir requisitos implícitos. Si falta información, se pide.