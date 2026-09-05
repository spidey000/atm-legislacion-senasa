# Simulador ATCO — Legislación + ATM + Navegación

Web estática local para practicar preguntas de Legislación Aeronáutica, Air Traffic Management y Navegación.

## Contenido

- **Legislación:** 55 preguntas.
- **ATM base:** 117 preguntas.
- **Cuadros azules de Fernando:** 250 preguntas.
- **Banco ATM total:** 367 preguntas (ATM base + Fernando).
- **Navegación:** 136 preguntas del HTML de referencia.
- **Práctica:** feedback inmediato y revisión final.
- **Examen:** 25 preguntas de Legislación y Navegación, o 40 de ATM, sin feedback hasta entregar.
- **Persistencia local:** la sesión activa, el orden de preguntas, respuestas, posición y tiempo se guardan automáticamente en `localStorage` y se restauran al volver a abrir la aplicación.

## Ejecutar

No necesita backend ni dependencias. Desde esta carpeta:

```bash
python3 -m http.server 8000
```

Abrir <http://localhost:8000>.

## Pruebas

La prueba de persistencia usa los bancos reales y un almacenamiento local aislado:

```bash
node --test tests/persistence.test.js
```

## Estructura

```text
atmlaw/
├── index.html              # Interfaz y marcado de la aplicación
├── css/
│   └── styles.css          # Estilos
├── js/
│   └── app.js              # Lógica del simulador
├── data/
│   ├── legislacion.js      # 55 preguntas
│   ├── atm.js              # 117 preguntas ATM base
│   ├── fernando.js         # 250 preguntas de Fernando
│   └── navigation.js       # 136 preguntas de Navegación
├── tests/
│   └── persistence.test.js # Pruebas de guardado y restauración
└── README.md
```

Los bancos están almacenados como JavaScript plano con objetos JSON asignados a `window.*_QUESTIONS`. No se cargan archivos Base64, gzip, tar ni partes de transporte en tiempo de ejecución.

## Procedencia y normalización

La interfaz y la lógica proceden del repositorio `spidey000/atm-legislacion-senasa`. Los datos se materializaron a partir del HTML de referencia adjunto, que contiene los bancos completos y compatibles con la aplicación: 55 de Legislación, 117 de ATM base y 250 de Fernando.

El repositorio original publica además archivos de transporte codificados y una materialización incompleta/corrupta en algunos artefactos de `build/`; esos archivos se han eliminado del proyecto final para dejar una web estática convencional y legible.

El contenido de estudio se ha preparado a partir de materiales de formación proporcionados por el usuario. Los manuales originales de terceros no se incluyen.
