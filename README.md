# Simulador ATCO — Legislación + ATM

Simulador de estudio tipo test para formación inicial ATCO/SENASA.

## Contenido

- **Legislación:** 55 preguntas en el banco.
- **ATM:** 367 preguntas en el banco.
- **Cuadros azules de Fernando:** 250 preguntas, disponibles como bloque independiente y también incluidas en el banco general de ATM.
- **Modo práctica:** feedback inmediato tras responder y revisión final completa.
- **Modo examen:** 25 preguntas aleatorias de Legislación o 40 de ATM, sin feedback hasta entregar.
- Cada pregunta incluye explicación, análisis de distractores y una clave adicional de estudio cuando está disponible.

## Uso

Abre `index.html` en un navegador. No requiere backend. Para servirlo localmente:

```bash
python3 -m http.server 8000
```

Después abre `http://localhost:8000`.

## Estructura

- `index.html` — interfaz y lógica del simulador.
- `data/leg.js` — banco de Legislación.
- `data/atm.js` — banco base de ATM.
- `data/fernando.js` — 250 “cuadros azules de Fernando”.

## Fuentes

El contenido de estudio se ha preparado a partir de materiales de formación proporcionados por el usuario. Los manuales originales de terceros no se incluyen en este repositorio público.
