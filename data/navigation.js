/* Navegación · preguntas del HTML de referencia; explicaciones fundamentadas en TBATC_5_Navigation_4.1.pdf */
window.NAVIGATION_QUESTIONS = [
  {
    "navNo": 1,
    "q": "The poles on the surface of the Earth may be defined as:",
    "opts": [
      "the points where the Earth’s axis of rotation cuts the surface of the Earth.",
      "the points on the surface of the Earth where all meridians intersect at right angles.",
      "the points from where the distance to the Equator is equal.",
      "the points at which the vertical lines runs through the centre of the Earth."
    ],
    "a": 0,
    "deepExp": "Los polos geográficos son los dos puntos donde el eje de rotación de la Tierra corta su superficie. El manual los define así en 2.1.1, p. 10.",
    "optionExp": [
      "CORRECTA — Es la definición exacta de los polos geográficos: intersecciones del eje de rotación con la superficie terrestre.",
      "NO — Los meridianos no intersectan en ángulo recto con la superficie; convergen en los polos y sirven para definir longitud.",
      "NO — La distancia al Ecuador se expresa mediante la latitud, pero no define por sí sola los polos; además, la formulación no identifica el eje de rotación.",
      "NO — Una línea vertical que pasa por el centro describe un eje o dirección radial, no necesariamente los puntos concretos donde el eje de rotación corta la superficie."
    ],
    "topic": "La Tierra y geometría terrestre",
    "manualPage": 10,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 2,
    "q": "Regarding great and minor circles characteristics, select the true statement.",
    "opts": [
      "Minor circles are those imaginary circles drawn on the surface of the Earth described by planes that cut off the Earth passing through its centre.",
      "The minor circle joining two points on the Earth’s surface is always the shortest distance on the Earth’s surface between these two points.",
      "Infinite great circles can be drawn in the Earth and any of them will divide the terrestrial sphere in two equal halves which are named hemispheres.",
      "The length of any minor circle, which is identical to the Earth’s perimeter, is 40,000km approximately, (considering the Earth as a perfect sphere)."
    ],
    "a": 2,
    "deepExp": "Los círculos máximos son los que resultan de un plano que pasa por el centro y dividen la esfera en dos hemisferios; por eso, la afirmación verdadera es la de la opción 3. Los círculos menores no pasan por el centro y su longitud es variable (2.1.1, pp. 11–12). Fuente: TBATC_5 Navigation 4.1, p. 11.",
    "optionExp": [
      "NO — Esa es la definición de círculo máximo, no de círculo menor: el plano sí pasa por el centro.",
      "NO — El arco más corto entre dos puntos de la esfera es el arco menor del círculo máximo que los une, no un círculo menor en general.",
      "CORRECTA — Se pueden trazar infinitos círculos máximos y cada uno divide la esfera en dos mitades iguales, llamadas hemisferios (2.1.1, p. 11).",
      "NO — Aproximadamente 40.000 km es la longitud de un círculo máximo, equivalente al perímetro terrestre; un círculo menor tiene longitud variable."
    ],
    "topic": "La Tierra y geometría terrestre",
    "manualPage": 11,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 3,
    "q": "A great circle is defined as:",
    "opts": [
      "a circle in any plane on the surface of a sphere.",
      "a circle on the surface of a sphere, whose plane is cutting through the centre of the sphere.",
      "a circle running on the outside of the sphere.",
      "a circle on the surface of the sphere, with its plane running perpendicular to the axis of rotation."
    ],
    "a": 1,
    "deepExp": "Un círculo máximo es el círculo de la superficie esférica cuyo plano pasa por el centro de la esfera. Esa condición le da el radio máximo y, en navegación, permite obtener la ruta ortodrómica más corta (2.1.1, p. 11). Fuente: TBATC_5 Navigation 4.1, p. 11.",
    "optionExp": [
      "NO — Un círculo situado en cualquier plano puede ser menor si el plano no pasa por el centro.",
      "CORRECTA — El plano secante que atraviesa el centro es precisamente el criterio definitorio de un círculo máximo.",
      "NO — La expresión describe vagamente una circunferencia exterior, no una definición geométrica de círculo sobre la superficie.",
      "NO — Un plano perpendicular al eje de rotación describe el Ecuador, pero no todos los círculos máximos; hay infinitos planos que pasan por el centro."
    ],
    "topic": "La Tierra y geometría terrestre",
    "manualPage": 11,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 4,
    "q": "The shortest distance between 2 points on the surface of the Earth is:",
    "opts": [
      "a great circle.",
      "the arc of a small circle.",
      "half the rhumb line distance.",
      "a rhumb line."
    ],
    "a": 0,
    "deepExp": "La menor distancia sobre una esfera es el arco corto del círculo máximo que une los dos puntos, es decir, la ruta ortodrómica. El manual lo establece en 2.5.2, p. 34, y distingue esta ruta de la loxodrómica o rhumb line, que normalmente es más larga.",
    "optionExp": [
      "CORRECTA — ‘Un gran círculo’ alude a su arco corto, que es la distancia mínima entre dos puntos de la superficie terrestre.",
      "NO — Un arco de círculo menor no tiene, en general, la curvatura mínima ni produce la distancia más corta.",
      "NO — La mitad de una loxodrómica no tiene fundamento geométrico como regla general de distancia mínima.",
      "NO — La rhumb line mantiene rumbo constante, pero no es la ruta más corta salvo casos particulares como un meridiano o el Ecuador."
    ],
    "topic": "La Tierra y geometría terrestre",
    "manualPage": 34,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 5,
    "q": "The Earth is:",
    "opts": [
      "a sphere which has a larger polar circumference than equatorial circumference.",
      "a sphere whose centre is equidistant from the Poles and the Equator.",
      "considered to be a geode or as a spheroid flattened at the poles.",
      "none of the above statements is correct."
    ],
    "a": 2,
    "deepExp": "La Tierra real es irregular y se aproxima como un geoide o esferoide achatado en los polos, con abultamiento ecuatorial. Es la descripción indicada en 2.1, p. 9; para cálculos simples el manual usa una esfera aproximada.",
    "optionExp": [
      "NO — El achatamiento polar hace menor la circunferencia polar que la ecuatorial, no mayor.",
      "NO — Un cuerpo achatado no tiene el centro equidistante de todos los puntos de la superficie como una esfera perfecta.",
      "CORRECTA — El manual define la Tierra como geoide o esferoide achatado en los polos, aunque emplee una esfera idealizada para fines prácticos (2.1, p. 9).",
      "NO — Sí hay una afirmación correcta: la opción anterior describe la aproximación geodésica aceptada."
    ],
    "topic": "La Tierra y geometría terrestre",
    "manualPage": 9,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 6,
    "q": "Regarding the transmission of directions by ATC select the true statement.",
    "opts": [
      "The use of a 3-figure group for directions (pronounced digit by digit) should be always used.",
      "The use of cardinal directions such as North, South, West or East may be used to avoid ambiguity.",
      "The use of quadrantal directions such as North-East, South-West, etc may be used to reference where the wind is blowing from.",
      "A reference to whether the direction transmitted is referenced to the compass or geographic North should be always used."
    ],
    "a": 0,
    "deepExp": "En radiotelefonía aeronáutica se debe transmitir la dirección como un grupo de tres cifras, pronunciadas dígito a dígito, para evitar ambigüedades. El manual da esta regla en 2.2.3, p. 17, y desaconseja sustituirla por direcciones cardinales o cuadrantales.",
    "optionExp": [
      "CORRECTA — El grupo de tres cifras, por ejemplo 090 o 005, evita confundir direcciones como 027, 127 o 270.",
      "NO — Norte, Sur, Este y Oeste sirven como referencia, pero no son el formato preciso que debe emplearse siempre en la transmisión aeronáutica.",
      "NO — Las direcciones cuadrantales pueden ser familiares, pero no sustituyen el grupo sexagesimal de tres cifras requerido para precisión.",
      "NO — La referencia geográfica o magnética debe especificarse cuando sea necesario, pero la regla destacada de la pregunta es el grupo de tres cifras, no añadir siempre esa frase."
    ],
    "topic": "Direcciones y campo magnético",
    "manualPage": 17,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 7,
    "q": "The variation is...",
    "opts": [
      "The angular difference between the true (geographic) North and the compass North",
      "The angular difference between the magnetic North and the compass North.",
      "The angular difference between the true (geographic) North and the true heading.",
      "The angular difference between the true (geographic) North and the magnetic North"
    ],
    "a": 3,
    "deepExp": "La variación magnética es el ángulo entre el Norte verdadero o geográfico y el Norte magnético. Su valor depende de la posición sobre la Tierra; el manual la trata en 2.3.1, pp. 19–20.",
    "optionExp": [
      "NO — Esa diferencia es la variación, pero la opción invierte el concepto al expresarlo respecto del Norte de la brújula, que corresponde a la desviación.",
      "NO — La diferencia entre Norte magnético y Norte de brújula es la desviación causada por campos magnéticos del avión, no la variación terrestre.",
      "NO — El rumbo verdadero es una dirección del avión; no es el segundo Norte utilizado para definir la variación.",
      "CORRECTA — La variación es exactamente la separación angular entre Norte verdadero y Norte magnético (2.3.1, p. 19)."
    ],
    "topic": "Direcciones y campo magnético",
    "manualPage": 19,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 8,
    "q": "Consider the following statements on magnetic variation.",
    "opts": [
      "Variation will never exceed 90º.",
      "Variation will always increase when the strength of the terrestrial magnetic field increases.",
      "Variation is considered to be East when the true North lies to the west of magnetic North.",
      "None of the above statements is correct."
    ],
    "a": 2,
    "deepExp": "La variación es Este cuando el Norte magnético queda al este del Norte verdadero; equivalentemente, el Norte verdadero queda al oeste del magnético. El manual indica además que puede variar de 0° a 180°, por lo que la opción 3 es la verdadera (2.3.1, pp. 19–20).",
    "optionExp": [
      "NO — El manual señala un máximo de 180° en la configuración extrema, no un límite universal de 90°.",
      "NO — La variación depende de la geometría y del campo magnético terrestre; no aumenta necesariamente con la intensidad del campo.",
      "CORRECTA — Si el Norte verdadero está al oeste del Norte magnético, el Norte magnético está al este del verdadero: es variación E.",
      "NO — Hay una afirmación correcta, por lo que no puede elegirse ‘ninguna de las anteriores’."
    ],
    "topic": "Direcciones y campo magnético",
    "manualPage": 20,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 9,
    "q": "If the true heading is 165º and variation is 3ºE, what is the magnetic heading?",
    "opts": [
      "168º.",
      "162º.",
      "165º.",
      "None of the above statements is correct."
    ],
    "a": 1,
    "deepExp": "Se aplica ‘variación Este, magnético menor’: M = T − VAR. Por tanto, 165° − 3° = 162°, conforme a la relación de 2.3.1, p. 20. Fuente: TBATC_5 Navigation 4.1, p. 20.",
    "optionExp": [
      "NO — 168° resultaría de sumar una variación Este, justamente el signo contrario al procedimiento indicado.",
      "CORRECTA — Con variación 3°E se resta: 165° − 3° = 162° magnéticos.",
      "NO — Mantener 165° ignoraría la corrección por variación.",
      "NO — Sí existe una respuesta correcta y el cálculo produce 162°."
    ],
    "topic": "Direcciones y campo magnético",
    "manualPage": 20,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 10,
    "q": "If the true heading is 359º and variation is 6ºW, what is the magnetic heading?",
    "opts": [
      "359º.",
      "005º.",
      "365º.",
      "353º."
    ],
    "a": 1,
    "deepExp": "Para variación Oeste se suma: 359° + 6° = 365°. Al expresar una dirección aeronáutica en el intervalo 000–359°, 365° se normaliza a 005°, por lo que la opción correcta es 005° (2.3.1, p. 20). Fuente: TBATC_5 Navigation 4.1, p. 20.",
    "optionExp": [
      "NO — 359° es el rumbo verdadero sin aplicar la variación Oeste.",
      "CORRECTA — Variación Oeste, magnético mejor: 359° + 6° = 365° = 005° al completar la vuelta.",
      "NO — 365° es el resultado intermedio sin normalizar; no es un grupo de dirección válido en el formato circular 000–359°.",
      "NO — 353° correspondería a restar 6°, que es la regla de una variación Este, no Oeste."
    ],
    "topic": "Direcciones y campo magnético",
    "manualPage": 20,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 11,
    "q": "Variation applied to true course gives:",
    "opts": [
      "True heading.",
      "True track.",
      "Magnetic course.",
      "Magnetic heading."
    ],
    "a": 2,
    "deepExp": "La variación convierte una dirección verdadera en una dirección magnética. Si la dirección de partida es el curso verdadero, el resultado es el curso magnético, mediante M = T ± VAR (2.3.1, p. 20). Fuente: TBATC_5 Navigation 4.1, p. 20.",
    "optionExp": [
      "NO — El rumbo verdadero describe la orientación longitudinal del avión respecto del Norte geográfico; no es el resultado de aplicar variación al curso.",
      "NO — El track verdadero es la trayectoria sobre el suelo respecto del Norte verdadero y no se obtiene únicamente aplicando variación al curso.",
      "CORRECTA — Aplicar la variación al curso verdadero produce el curso magnético.",
      "NO — El rumbo magnético se refiere a la orientación del eje longitudinal, mientras que la pregunta parte de un curso, no de un heading."
    ],
    "topic": "Direcciones y campo magnético",
    "manualPage": 20,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 12,
    "q": "Referring to the Earth’s magnetic field:",
    "opts": [
      "the variation is 90º at the geographical poles.",
      "the dip angle decreases with increased geographical latitude.",
      "the dip angle is maximum at the magnetic equator.",
      "the dip angle is maximum at the magnetic poles."
    ],
    "a": 3,
    "deepExp": "El dip o inclinación magnética es el ángulo vertical de las líneas del campo terrestre respecto de la horizontal. Es mínimo cerca del Ecuador magnético y máximo en los polos magnéticos (2.3.3, pp. 24–25). Fuente: TBATC_5 Navigation 4.1, p. 24.",
    "optionExp": [
      "NO — La variación no tiene por definición 90° en los polos geográficos; además, la pregunta trata del campo y del dip.",
      "NO — El dip aumenta, no disminuye, hacia las altas latitudes y alcanza su máximo cerca de los polos magnéticos.",
      "NO — En el Ecuador magnético las líneas son casi paralelas a la superficie, por lo que el dip es mínimo.",
      "CORRECTA — En los polos magnéticos las líneas del campo cruzan la superficie casi perpendicularmente: el dip es máximo."
    ],
    "topic": "Direcciones y campo magnético",
    "manualPage": 24,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 13,
    "q": "Isogonals are lines joining places:",
    "opts": [
      "of equal deviation.",
      "of 0º magnetic dip.",
      "of zero variation.",
      "of equal variation."
    ],
    "a": 3,
    "deepExp": "Las isógonas son líneas que unen lugares de igual variación magnética. No deben confundirse con las líneas agónicas, que unen puntos donde la variación es 0° (2.3.1, p. 22). Fuente: TBATC_5 Navigation 4.1, p. 22.",
    "optionExp": [
      "NO — La desviación es un error local de la brújula producido por el avión; no es la magnitud que define una isógona.",
      "NO — Los lugares de dip 0° corresponden aproximadamente al Ecuador magnético, no a las isógonas.",
      "NO — Una línea de variación cero es agónica, no una isógona en el sentido general.",
      "CORRECTA — Una isógona conecta puntos con el mismo valor de variación magnética."
    ],
    "topic": "Direcciones y campo magnético",
    "manualPage": 22,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 14,
    "q": "The angle between True North and Magnetic North is known as:",
    "opts": [
      "deviation.",
      "variation.",
      "alignment error.",
      "dip."
    ],
    "a": 1,
    "deepExp": "La separación angular entre Norte verdadero y Norte magnético recibe el nombre de variación. La desviación, en cambio, es la diferencia entre Norte magnético y Norte de brújula (2.3.1–2.3.2, pp. 19 y 22–23). Fuente: TBATC_5 Navigation 4.1, p. 19.",
    "optionExp": [
      "NO — La desviación se refiere al efecto de los campos del avión sobre la brújula, no a la diferencia entre los dos Nortes terrestres.",
      "CORRECTA — La diferencia angular entre Norte verdadero y Norte magnético es la variación.",
      "NO — ‘Alignment error’ no es el término definido por el manual para esta diferencia geográfica-magnética.",
      "NO — El dip es la inclinación vertical del campo magnético, no su separación horizontal respecto del Norte verdadero."
    ],
    "topic": "Direcciones y campo magnético",
    "manualPage": 19,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 15,
    "q": "The latitude of one aerodrome located at the Equator will be:",
    "opts": [
      "0º.",
      "90ºN.",
      "23.33ºN/S.",
      "180ºN/S."
    ],
    "a": 0,
    "deepExp": "La latitud se mide angularmente desde el Ecuador, que es el paralelo 0°. Por ello, un aeródromo situado en el Ecuador tiene latitud 0° (2.4.1, p. 28). Fuente: TBATC_5 Navigation 4.1, p. 28.",
    "optionExp": [
      "CORRECTA — El Ecuador es el datum de latitud y se expresa como 0° N/S.",
      "NO — 90°N identifica el Polo Norte, no el Ecuador.",
      "NO — 23°27′N/S identifica los trópicos, no la línea ecuatorial.",
      "NO — 180° pertenece al límite de longitud, no al rango de latitud; la latitud llega a 90°N/S."
    ],
    "topic": "Coordenadas, distancias y movimientos terrestres",
    "manualPage": 28,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 16,
    "q": "An airport A is located at 40ºS 005ºW. What would be the approximate cardinal direction of a route which joins this airport with another one located at 40ºN 005ºW?",
    "opts": [
      "North.",
      "East.",
      "South.",
      "West."
    ],
    "a": 0,
    "deepExp": "Ambos aeropuertos tienen la misma longitud 005°W, pero el segundo está en 40°N frente a 40°S. El desplazamiento desde A hacia una latitud mayor y norte es aproximadamente hacia el Norte (2.4.1, pp. 28–30). Fuente: TBATC_5 Navigation 4.1, p. 30.",
    "optionExp": [
      "CORRECTA — Manteniendo la misma longitud y pasando de 40°S a 40°N, la ruta se dirige hacia el Norte.",
      "NO — No cambia la longitud: ambos puntos están en 005°W, así que no hay componente cardinal Este dominante.",
      "NO — El segundo punto está al norte, no al sur, del aeropuerto A.",
      "NO — La longitud permanece igual; no hay desplazamiento hacia el Oeste."
    ],
    "topic": "Coordenadas, distancias y movimientos terrestres",
    "manualPage": 30,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 17,
    "q": "An airport A is located at 40ºN 005ºE. What would be the approximate cardinal direction of a route which joins this airport with another one located at 40ºN 005ºW?",
    "opts": [
      "North.",
      "East.",
      "South.",
      "West."
    ],
    "a": 3,
    "deepExp": "Los dos puntos están a 40°N, por lo que comparten latitud; el segundo pasa de 005°E a 005°W, hacia el oeste. La dirección cardinal aproximada de la unión es Oeste (2.4.1, pp. 28–30). Fuente: TBATC_5 Navigation 4.1, p. 30.",
    "optionExp": [
      "NO — La latitud no aumenta: ambos puntos están en 40°N.",
      "NO — El destino está al oeste del punto situado en 005°E, no al este.",
      "NO — No hay cambio de latitud que indique una dirección Sur.",
      "CORRECTA — De 005°E a 005°W el desplazamiento longitudinal es hacia el Oeste."
    ],
    "topic": "Coordenadas, distancias y movimientos terrestres",
    "manualPage": 30,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 18,
    "q": "The difference in latitude between the Tropics is approximately:",
    "opts": [
      "46º54’.",
      "66º33’.",
      "27º23’.",
      "23º27’."
    ],
    "a": 0,
    "deepExp": "Los trópicos están en 23°27′N y 23°27′S. La diferencia de latitud es 23°27′ + 23°27′ = 46°54′, como se desprende de los paralelos descritos en 2.4.1, p. 28. Fuente: TBATC_5 Navigation 4.1, p. 28.",
    "optionExp": [
      "CORRECTA — La separación entre ambos trópicos es 46°54′.",
      "NO — 66°33′ es la latitud de los círculos polares, no la diferencia entre los trópicos.",
      "NO — 27°23′ no corresponde a la posición de ninguno de los trópicos ni a su separación.",
      "NO — 23°27′ es la latitud de cada trópico respecto del Ecuador, no la diferencia entre ambos."
    ],
    "topic": "Coordenadas, distancias y movimientos terrestres",
    "manualPage": 28,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 19,
    "q": "One nautical mile is approximately equal to:",
    "opts": [
      "1,852m.",
      "1,852km.",
      "60,080ft.",
      "680ft."
    ],
    "a": 0,
    "deepExp": "La milla náutica tiene exactamente 1.852 metros. Es la unidad de distancia de navegación vinculada al arco de un minuto de círculo máximo (2.5.1, p. 33). Fuente: TBATC_5 Navigation 4.1, p. 33.",
    "optionExp": [
      "CORRECTA — 1 NM = 1.852 m exactamente.",
      "NO — 1.852 km equivaldrían a 1.852.000 m, mil veces la milla náutica indicada.",
      "NO — 60.080 ft es aproximadamente el número de pies de 10 NM, no de 1 NM; una NM son unos 6.080 ft.",
      "NO — 680 ft es muy inferior a la conversión publicada de aproximadamente 6.080 ft."
    ],
    "topic": "Coordenadas, distancias y movimientos terrestres",
    "manualPage": 33,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 20,
    "q": "How many NM are equivalent to 1’ of arc of latitude?",
    "opts": [
      "60NM.",
      "1NM.",
      "600NM.",
      "60Km."
    ],
    "a": 1,
    "deepExp": "Por definición aeronáutica, un minuto de arco de un círculo máximo equivale a una milla náutica. Así, 1′ de latitud equivale aproximadamente a 1 NM (2.5.1, p. 33). Fuente: TBATC_5 Navigation 4.1, p. 33.",
    "optionExp": [
      "NO — 60 NM corresponden aproximadamente a un grado de arco (60 minutos), no a un minuto.",
      "CORRECTA — Un minuto de arco de latitud equivale aproximadamente a una milla náutica.",
      "NO — 600 NM no es la equivalencia angular de un minuto de latitud.",
      "NO — La equivalencia pedida es en NM, y además 1′ de arco no equivale a 60 km."
    ],
    "topic": "Coordenadas, distancias y movimientos terrestres",
    "manualPage": 33,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 21,
    "q": "Any parallel of latitude is a:",
    "opts": [
      "great circle.",
      "rhumb line.",
      "orthodromic route.",
      "meridian of tangency."
    ],
    "a": 1,
    "deepExp": "Una paralela de latitud mantiene constante la dirección respecto del Norte y corta los meridianos con el mismo ángulo; por definición es una loxodrómica o rhumb line. El manual lo afirma expresamente en 2.5.2, p. 35.",
    "optionExp": [
      "NO — Una paralela solo es círculo máximo en el caso especial del Ecuador; las demás son círculos menores.",
      "CORRECTA — Todas las paralelas de latitud son rutas loxodrómicas porque mantienen rumbo constante.",
      "NO — La ruta ortodrómica es un arco de círculo máximo; una paralela ordinaria no lo es.",
      "NO — ‘Meridiano de tangencia’ no es la clasificación de una paralela de latitud."
    ],
    "topic": "Coordenadas, distancias y movimientos terrestres",
    "manualPage": 35,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 22,
    "q": "The angle formed between the Earth’s rotation axis and the Ecliptic is approximately:",
    "opts": [
      "23º27’.",
      "27º23’.",
      "90º.",
      "66º33’."
    ],
    "a": 3,
    "deepExp": "El eje de rotación forma aproximadamente 66°33′ con el plano de la Eclíptica; el ángulo complementario asociado al plano ecuatorial es 23°27′. La relación se explica en 2.6.3, p. 38. Fuente: TBATC_5 Navigation 4.1, p. 38.",
    "optionExp": [
      "NO — 23°27′ es el complemento y la inclinación del Ecuador respecto de la Eclíptica, no el ángulo entre el eje y la Eclíptica.",
      "NO — 27°23′ no es el valor de la oblicuidad indicado por el manual.",
      "NO — 90° sería perpendicularidad, que no corresponde a la inclinación terrestre real.",
      "CORRECTA — El manual da 66°33′ como ángulo entre el eje de rotación y la Eclíptica."
    ],
    "topic": "Coordenadas, distancias y movimientos terrestres",
    "manualPage": 38,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 23,
    "q": "The main reason that day and night, throughout the year, have different duration is due to the:",
    "opts": [
      "inclination of the ecliptic to the Equator plane.",
      "Earth rotation.",
      "relative speed of the Sun along the Ecliptic.",
      "gravitational effect of the Sun and Moon on the speed of rotation of the Earth."
    ],
    "a": 0,
    "deepExp": "La inclinación del eje hace que el plano ecuatorial esté inclinado respecto del plano de la Eclíptica, variando durante el año la declinación solar y la insolación de cada hemisferio. Esa geometría altera la duración de la luz diurna y de la noche (2.6.3, pp. 38–42). Fuente: TBATC_5 Navigation 4.1, p. 38.",
    "optionExp": [
      "CORRECTA — La inclinación de la Eclíptica respecto del plano del Ecuador produce la variación estacional de declinación y duración del día y la noche.",
      "NO — La rotación explica la alternancia diaria entre día y noche, pero no su distinta duración a lo largo del año.",
      "NO — La velocidad aparente del Sol no es la causa principal; el manual atribuye el efecto a la inclinación del eje y los planos.",
      "NO — Los efectos gravitatorios pueden influir en la rotación, pero no explican la variación anual de horas de luz como mecanismo principal."
    ],
    "topic": "Coordenadas, distancias y movimientos terrestres",
    "manualPage": 38,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 24,
    "q": "Regarding the properties for an ideal chart. Select the true statement.",
    "opts": [
      "The scale should be both correct and constant at all points on the chart.",
      "Directions on the chart should be identical to the corresponding directions on the surface of the Earth.",
      "Parallels of latitude and meridians should cross each other at right-angles on the chart, as they do on the Earth.",
      "All of the above are correct."
    ],
    "a": 3,
    "deepExp": "Las cuatro afirmaciones describen propiedades del chart ideal: escala correcta y constante, direcciones fieles y paralelos/meridianos perpendiculares, además de otras propiedades. El manual advierte que un chart ideal no puede existir completamente, pero enumera esas propiedades en 3.2, p. 53.",
    "optionExp": [
      "NO — Aunque describe una propiedad del chart ideal, por sí sola no responde de forma completa a una pregunta cuya opción correcta agrupa todas las propiedades.",
      "NO — Aunque también es una propiedad del chart ideal, por sí sola no es la respuesta global solicitada; queda incluida en ‘All of the above’.",
      "NO — Es otra propiedad verdadera del chart ideal, pero no expresa por sí sola el conjunto completo que pregunta la opción global.",
      "CORRECTA — Las tres afirmaciones anteriores forman parte de la lista del chart ideal; por eso la respuesta completa es ‘All of the above’. "
    ],
    "topic": "Cartografía y proyecciones",
    "manualPage": 53,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 25,
    "q": "The relation between the actual size of the object to represent, and its representation on the map is called:",
    "opts": [
      "Projection.",
      "Scale.",
      "Relief.",
      "Bounding."
    ],
    "a": 1,
    "deepExp": "La escala es la relación constante entre la distancia lineal real entre dos puntos y la distancia lineal que representa el mapa. Esa definición aparece en 3.3, p. 54. Fuente: TBATC_5 Navigation 4.1, p. 54.",
    "optionExp": [
      "NO — La proyección es el método para representar una superficie tridimensional en un plano; no es la relación de reducción.",
      "CORRECTA — La escala expresa la proporción entre el tamaño real y su representación cartográfica.",
      "NO — El relieve representa alturas o formas del terreno, no la proporción dimensional del mapa.",
      "NO — ‘Bounding’ no es el término cartográfico definido para esa relación."
    ],
    "topic": "Cartografía y proyecciones",
    "manualPage": 54,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 26,
    "q": "Conformal projections are those in which:",
    "opts": [
      "The angles between the lines on the sphere are preserved without large deformations as they cross each other.",
      "At any point on the chart, scale should be exactly the same.",
      "Rhumb lines are shown as straight lines.",
      "All of the above."
    ],
    "a": 0,
    "deepExp": "Una proyección conforme conserva los ángulos locales y mantiene la misma escala en todas las direcciones en un punto, aunque la escala pueda variar de un punto a otro. La definición de 3.4, p. 55, no exige escala idéntica en todo el chart ni que todas las loxodrómicas sean rectas. Fuente: TBATC_5 Navigation 4.1, p. 55.",
    "optionExp": [
      "CORRECTA — La conformidad preserva los ángulos entre líneas sin grandes deformaciones locales.",
      "NO — Escala exactamente igual en todos los puntos es una propiedad ideal incompatible en general con la proyección de una esfera, no la definición de conformidad.",
      "NO — Las rhumb lines son rectas específicamente en Mercator; no en toda proyección conforme.",
      "NO — Como las opciones 2 y 3 son falsas, no puede ser ‘All of the above’. "
    ],
    "topic": "Cartografía y proyecciones",
    "manualPage": 55,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 27,
    "q": "In which of the following projections is a plane surface tangent to the reduced Earth at one of the Poles?",
    "opts": [
      "Mercator.",
      "Polar Stereographic.",
      "Lambert’s.",
      "None of the above."
    ],
    "a": 1,
    "deepExp": "La proyección Polar Stereographic se construye con un plano tangente a la Tierra reducida en uno de los polos, proyectando geométricamente desde el polo opuesto. El manual lo describe en 3.4.3, p. 59.",
    "optionExp": [
      "NO — Mercator es una proyección cilíndrica tangente en el Ecuador, no un plano tangente en un polo.",
      "CORRECTA — La Polar Stereographic utiliza un plano tangente al polo.",
      "NO — Lambert es una proyección cónica; su construcción emplea un cono y paralelos de referencia.",
      "NO — Sí existe una opción válida: Polar Stereographic."
    ],
    "topic": "Cartografía y proyecciones",
    "manualPage": 59,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 28,
    "q": "A chart is considered to be conformal when:",
    "opts": [
      "The variation information is printed on the chart as isogonals.",
      "The meridians and the parallels of latitude intersect at right angles and the scale from a selected point is the same in all directions.",
      "When it conforms to the specifications.",
      "The meridians are straight lines and the scale is constant at all times along the chart."
    ],
    "a": 1,
    "deepExp": "Un chart conforme conserva los ángulos locales: meridianos y paralelos se cruzan a 90° y la escala en un punto es igual en todas las direcciones. Esa es la definición del manual en 3.4, p. 55.",
    "optionExp": [
      "NO — Las isógonas son líneas de igual variación magnética; su presencia no define conformidad.",
      "CORRECTA — Describe simultáneamente la intersección ortogonal y la igualdad de escala en todas las direcciones de un punto.",
      "NO — Conformidad no significa simplemente cumplir especificaciones genéricas; es una propiedad geométrica concreta.",
      "NO — Que los meridianos sean rectos y que la escala sea constante en todo el chart no es la definición general de conformidad."
    ],
    "topic": "Cartografía y proyecciones",
    "manualPage": 55,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 29,
    "q": "A Mercator projection chart is a:",
    "opts": [
      "Cylindrical projection chart.",
      "Mathematically constructed graticule.",
      "Conical projection.",
      "Stereographic or azimuthal projection."
    ],
    "a": 0,
    "deepExp": "La proyección Mercator se obtiene proyectando la retícula terrestre sobre un cilindro tangente al Ecuador y desarrollándolo en un plano. Por eso es una proyección cilíndrica (3.4.1, p. 56). Fuente: TBATC_5 Navigation 4.1, p. 56.",
    "optionExp": [
      "CORRECTA — Mercator es la proyección cilíndrica descrita por el manual.",
      "NO — ‘Graticule matemáticamente construido’ es otra categoría de proyección, no la clasificación geométrica de Mercator.",
      "NO — Una proyección cónica utiliza un cono, como Lambert, no el cilindro de Mercator.",
      "NO — La estereográfica o azimutal usa un plano tangente, no un cilindro."
    ],
    "topic": "Cartografía y proyecciones",
    "manualPage": 56,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 30,
    "q": "Which of the following is NOT a feature of a Mercator projection chart?",
    "opts": [
      "All meridians appear as parallel, vertical, straight lines and they are equally spaced.",
      "The parallels of latitude appear as straight parallel lines.",
      "It is possible to project the poles using this projection.",
      "The parallels of latitude cross the meridians at right angles."
    ],
    "a": 2,
    "deepExp": "Mercator no puede proyectar los polos: la escala crece indefinidamente al aproximarse a ellos. Las otras opciones sí son características de la retícula Mercator (3.4.1, pp. 56–57). Fuente: TBATC_5 Navigation 4.1, p. 56.",
    "optionExp": [
      "NO — En Mercator los meridianos son líneas rectas verticales, paralelas y equidistantes.",
      "NO — Los paralelos aparecen como líneas rectas paralelas, aunque su separación aumenta con la latitud.",
      "CORRECTA — La proyección Mercator no permite representar los polos debido a la distorsión/escala infinita en esas latitudes.",
      "NO — Paralelos y meridianos se cruzan a 90° en Mercator."
    ],
    "topic": "Cartografía y proyecciones",
    "manualPage": 56,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 31,
    "q": "In a Mercator chart, a loxodromic route appears as a:",
    "opts": [
      "Curve concave to the nearer Pole.",
      "Straight lines.",
      "It depends on the hemisphere.",
      "None of the above."
    ],
    "a": 1,
    "deepExp": "La loxodrómica mantiene un ángulo constante con los meridianos. En la carta Mercator esa propiedad se representa como una línea recta, según 3.4.1, p. 57. Fuente: TBATC_5 Navigation 4.1, p. 57.",
    "optionExp": [
      "NO — La curva cóncava hacia el polo es una característica de otras representaciones, como Lambert para rhumb lines.",
      "CORRECTA — En Mercator, una ruta loxodrómica o rhumb line aparece recta.",
      "NO — La representación recta de la loxodrómica en Mercator no depende del hemisferio.",
      "NO — Sí hay una opción correcta: straight lines."
    ],
    "topic": "Cartografía y proyecciones",
    "manualPage": 57,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 32,
    "q": "Which of the following is NOT a feature of a Polar stereographic projection chart?",
    "opts": [
      "All meridians appear as parallel straight lines.",
      "The parallels of latitude are concentric circles.",
      "The parallels of latitude cross the meridians at right angles.",
      "Chart scale is correct at the Pole and increases the same in all directions."
    ],
    "a": 0,
    "deepExp": "En la Polar Stereographic los meridianos parten del polo y divergen como líneas rectas; no son paralelos. Las demás características —paralelos concéntricos, ortogonalidad y escala correcta en el polo— sí figuran en 3.4.3, p. 59. Fuente: TBATC_5 Navigation 4.1, p. 59.",
    "optionExp": [
      "CORRECTA — Es la afirmación que no corresponde: los meridianos divergen desde el polo, en lugar de ser paralelos.",
      "NO — Los paralelos de latitud se representan como círculos concéntricos.",
      "NO — Paralelos y meridianos se cruzan a 90°.",
      "NO — La escala es correcta en el polo y aumenta de la misma manera en las direcciones que se alejan de él."
    ],
    "topic": "Cartografía y proyecciones",
    "manualPage": 59,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 33,
    "q": "The Lambert’s projection is:",
    "opts": [
      "A cylinder projection.",
      "An azimuthal projection.",
      "A variable cone projection.",
      "A conical projection."
    ],
    "a": 3,
    "deepExp": "Lambert es una proyección cónica: la retícula se proyecta sobre un cono cuyo eje coincide con la prolongación del eje terrestre. Su clasificación aparece en 3.4.4, p. 60. Fuente: TBATC_5 Navigation 4.1, p. 60.",
    "optionExp": [
      "NO — Una proyección cilíndrica emplea un cilindro, como Mercator.",
      "NO — Una azimutal o estereográfica emplea un plano tangente, como la polar estereográfica.",
      "NO — ‘Variable cone’ no es la clasificación solicitada en el manual para Lambert.",
      "CORRECTA — Lambert se define como proyección cónica."
    ],
    "topic": "Cartografía y proyecciones",
    "manualPage": 60,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 34,
    "q": "A Lambert’s conical conformal chart:",
    "opts": [
      "Is based on a simple conical projection but it is modified mathematically so that the projection cone is secant to the reduced Earth instead of tangent.",
      "Is based on a simple Mercator projection but it is modified mathematically so that the projection cone is secant to the reduced Earth instead of tangent.",
      "Is based on a simple Mercator projection but it is modified mathematically so that the projection cone is tangent to the reduced Earth instead of secant.",
      "Is based on a simple conical projection but it is modified mathematically so that the projection cone is tangent to the reduced Earth instead of secant."
    ],
    "a": 0,
    "deepExp": "La Lambert cónica conforme modificada parte de una proyección cónica simple y modifica matemáticamente el cono para hacerlo secante a la Tierra reducida. Esto reduce las zonas de distorsión y mantiene una escala casi constante (3.4.4, p. 60). Fuente: TBATC_5 Navigation 4.1, p. 60.",
    "optionExp": [
      "CORRECTA — Es la descripción exacta: base cónica simple, modificación matemática y cono secante.",
      "NO — Lambert no parte de Mercator, que es cilíndrica.",
      "NO — Repite la base Mercator y además invierte la relación: el cono no es tangente en la versión conforme modificada.",
      "NO — La base cónica es correcta, pero decir que el cono es tangente describe la proyección simple, no la Lambert modificada."
    ],
    "topic": "Cartografía y proyecciones",
    "manualPage": 60,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 35,
    "q": "The most commonly used projection for the production of aeronautical charts for the suitability of its features is:",
    "opts": [
      "The Mercator projection.",
      "The Stereographic projection.",
      "The Lambert’s conical conformal projection.",
      "The Azimuthal projection."
    ],
    "a": 2,
    "deepExp": "La Lambert cónica conforme combina conformidad, distorsión reducida y una representación casi recta de los grandes círculos, por lo que es especialmente adecuada para cartas aeronáuticas. El manual la identifica como la más utilizada en 3.4.4, p. 61.",
    "optionExp": [
      "NO — Mercator es útil para rumbos constantes y bajas latitudes, pero presenta gran distorsión hacia latitudes altas.",
      "NO — La estereográfica es especialmente útil para regiones polares, no la elección más común general para cartas aeronáuticas.",
      "CORRECTA — La Lambert cónica conforme ofrece las propiedades más adecuadas y es la proyección más usada para cartas aeronáuticas.",
      "NO — ‘Azimuthal’ es una familia amplia; no es la proyección señalada por el manual como la más utilizada."
    ],
    "topic": "Cartografía y proyecciones",
    "manualPage": 61,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 36,
    "q": "According to Annex 4 what is the meaning of the following sign:",
    "opts": [
      "A DME station.",
      "A VOR/DME station.",
      "A VOR station.",
      "An NDB station."
    ],
    "a": 3,
    "deepExp": "El banco conserva como respuesta la opción ‘An NDB station’, pero el símbolo gráfico referido por la pregunta no se extrajo en el texto disponible del manual. Por tanto, no es posible comprobar visualmente la correspondencia con Annex 4 sin inventar la forma del signo; la clave se documenta como procedente del banco (Attachment 1, p. 215).",
    "optionExp": [
      "NO — Sin el símbolo gráfico no puede identificarse esta alternativa por inspección; además, no es la clave registrada en el banco.",
      "NO — La alternativa describe una estación combinada, pero el elemento visual necesario para confirmarla no está disponible en la extracción.",
      "NO — Una estación VOR tendría otra simbología de Annex 4; no obstante, aquí no se debe inferir el signo ausente.",
      "CORRECTA — El banco marca ‘An NDB station’. El símbolo no está disponible en el texto extraído de p. 215, así que la explicación no puede verificar visualmente esa clave sin inventar el signo."
    ],
    "topic": "Simbología y publicación aeronáutica",
    "manualPage": 215,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true,
    "sourceRef": "Anexo 4 · símbolo gráfico (referencia del HTML; el gráfico no aparece en el PDF suministrado)"
  },
  {
    "navNo": 37,
    "q": "According to Annex 4 what is the meaning of the following sign:",
    "opts": [
      "A DME station.",
      "A VOR/DME station.",
      "A VOR station.",
      "An NDB station."
    ],
    "a": 1,
    "deepExp": "El banco conserva como respuesta la opción ‘A VOR/DME station’, pero el símbolo gráfico de Annex 4 está ausente de la extracción textual. Se mantiene literalmente la clave del banco y se deja constancia de que la identificación visual no puede verificarse con la fuente textual disponible (Attachment 1, p. 215). Fuente: TBATC_5 Navigation 4.1, p. 215.",
    "optionExp": [
      "NO — La alternativa corresponde a DME solamente, pero la figura necesaria para excluirla no aparece en la extracción.",
      "CORRECTA — El banco marca ‘A VOR/DME station’. Al no haberse extraído el símbolo de p. 215, no se describe ni se inventa su geometría.",
      "NO — La alternativa corresponde a VOR solamente; la verificación visual queda limitada por la ausencia de la imagen.",
      "NO — La alternativa NDB tampoco puede confirmarse sin ver el signo, y no es la respuesta registrada por el banco."
    ],
    "topic": "Simbología y publicación aeronáutica",
    "manualPage": 215,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true,
    "sourceRef": "Anexo 4 · símbolo gráfico (referencia del HTML; el gráfico no aparece en el PDF suministrado)"
  },
  {
    "navNo": 38,
    "q": "Each ICAO state member is to publish all navigation procedures and aeronautical information regarding all aerodromes and airspace within its delegated Flight Information Region (FIR) through:",
    "opts": [
      "The Air Traffic Services (ATS).",
      "The Aeronautical Information Service (AIS).",
      "The Communications Services (CNS).",
      "Independent cartography providers."
    ],
    "a": 1,
    "deepExp": "Cada Estado miembro de ICAO publica los procedimientos de navegación y la información aeronáutica de sus aeródromos y espacio aéreo a través del Aeronautical Information Service (AIS). El manual lo establece en 3.6.1, p. 62, indicando que la información se proporciona en forma gráfica y textual.",
    "optionExp": [
      "NO — ATS utiliza la información para prestar servicios, pero no es el servicio designado para publicar el conjunto de información aeronáutica estatal.",
      "CORRECTA — AIS es el servicio responsable de publicar procedimientos y datos aeronáuticos dentro del FIR delegado.",
      "NO — CNS se ocupa de comunicaciones, navegación y vigilancia como sistemas/servicios técnicos, no de la publicación AIS.",
      "NO — Los proveedores privados pueden aportar datos, pero no sustituyen la responsabilidad oficial del AIS estatal."
    ],
    "topic": "Simbología y publicación aeronáutica",
    "manualPage": 62,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 39,
    "q": "The route is:",
    "opts": [
      "The path an aircraft should follow to move from the origin to the destination.",
      "The direction in which the longitudinal axis is pointing in the undisturbed air.",
      "The projection on the ground of the aircraft’s trajectory.",
      "The angle between heading and track due to the effect of wind"
    ],
    "a": 0,
    "deepExp": "La ruta es el camino o línea de progresión que el avión pretende seguir desde el origen hasta el destino, normalmente establecido en la carta antes del vuelo. El manual distingue esa intención del heading y del track en 4.1, p. 69.",
    "optionExp": [
      "CORRECTA — Define la ruta como el trayecto que debe seguir el avión entre origen y destino.",
      "NO — Esa es la definición de heading: orientación del eje longitudinal en el aire sin perturbación.",
      "NO — La proyección de la trayectoria sobre el suelo es el track, que puede desviarse por el viento.",
      "NO — El ángulo entre heading y track por viento es drift, no route."
    ],
    "topic": "Conceptos básicos de navegación",
    "manualPage": 69,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 40,
    "q": "The projection on the ground of the aircraft’s trajectory while trying to fly a particular route is called:",
    "opts": [
      "Route",
      "Drift",
      "Heading",
      "Track"
    ],
    "a": 3,
    "deepExp": "El track es la dirección del movimiento del avión sobre la Tierra, es decir, la proyección en el suelo de su trayectoria al intentar volar una ruta. La definición y su relación con el viento aparecen en 4.1, p. 70. Fuente: TBATC_5 Navigation 4.1, p. 70.",
    "optionExp": [
      "NO — Route es el trayecto previsto entre origen y destino, no necesariamente la trayectoria efectiva sobre el suelo.",
      "NO — Drift es el ángulo entre heading y track producido por el viento.",
      "NO — Heading es la dirección a la que apunta el eje longitudinal del avión.",
      "CORRECTA — Track es la proyección terrestre de la trayectoria del avión."
    ],
    "topic": "Conceptos básicos de navegación",
    "manualPage": 70,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 41,
    "q": "The angle formed by heading and track due to the effect of wind is called:",
    "opts": [
      "Track",
      "Drift",
      "Drift correction",
      "Wind vector"
    ],
    "a": 1,
    "deepExp": "El drift es la diferencia angular entre el heading y el track causada por el viento. El drift correction o wind correction angle es la corrección que se aplica al rumbo para hacer coincidir el track con el curso deseado (4.1, p. 70). Fuente: TBATC_5 Navigation 4.1, p. 70.",
    "optionExp": [
      "NO — Track es la dirección efectiva sobre el suelo, no el ángulo que lo separa del heading.",
      "CORRECTA — Drift es el ángulo entre heading y track debido al viento.",
      "NO — Drift correction es la acción/ángulo corrector aplicado al curso, no el efecto angular original.",
      "NO — Wind vector describe dirección e intensidad del viento, no específicamente la diferencia entre heading y track."
    ],
    "topic": "Conceptos básicos de navegación",
    "manualPage": 70,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 42,
    "q": "A plane is travelling from A to B with a heading of 070º, and the existing wind from 360º makes it move 20º to the right. Which of the following is true?",
    "opts": [
      "Heading 090º / Track 360º / Drift 200º",
      "Heading 070º / Track 090º / Drift 20º",
      "Heading 090º / Track 070º / Drift 360º",
      "Heading 070º / Track 050º / Drift 20º"
    ],
    "a": 1,
    "deepExp": "El avión mantiene heading 070° y el viento hace que el track quede 20° a la derecha: 070° + 20° = 090°. Por tanto, la combinación correcta es heading 070°, track 090° y drift 20° a la derecha, conforme a 4.1, p. 70. Fuente: TBATC_5 Navigation 4.1, p. 70.",
    "optionExp": [
      "NO — Cambia indebidamente el heading a 090° y contiene un drift 200° sin sentido para el desplazamiento descrito.",
      "CORRECTA — Conserva el heading 070°, suma 20° hacia la derecha para obtener track 090° y expresa el drift como 20°.",
      "NO — Intercambia heading y track y usa 360° como si fuera el ángulo de drift.",
      "NO — Un track 050° implicaría deriva a la izquierda, contraria al desplazamiento 20° a la derecha."
    ],
    "topic": "Conceptos básicos de navegación",
    "manualPage": 70,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 43,
    "q": "An aircraft flies on heading 010º but the wind makes the aircraft to fly on track 355º. What’s the drift angle?",
    "opts": [
      "90º",
      "05º",
      "15º",
      "10º"
    ],
    "a": 2,
    "deepExp": "El drift es la diferencia angular entre heading y track. Entre 010° y 355° hay una diferencia mínima de 15° hacia la izquierda (010° − 15° = 355°), por lo que su magnitud es 15° (4.1, p. 70). Fuente: TBATC_5 Navigation 4.1, p. 70.",
    "optionExp": [
      "NO — 90° sería una componente transversal completa, no la diferencia entre 010° y 355°.",
      "NO — 05° no coincide con la separación angular mínima entre ambos valores.",
      "CORRECTA — La diferencia circular es 15°: el track está 15° a la izquierda del heading.",
      "NO — 10° no es la diferencia; confunde el heading con el drift."
    ],
    "topic": "Conceptos básicos de navegación",
    "manualPage": 70,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 44,
    "q": "An aircraft flies with on heading 090º. If there is wind blowing from 270º, which of the following statements is true?",
    "opts": [
      "The aircraft will drift to the right.",
      "The aircraft will drift to the left.",
      "Heading and track will be the same.",
      "Drift correction will depend on the wind’s intensity"
    ],
    "a": 2,
    "deepExp": "Un viento desde 270° sopla hacia 090°, exactamente en la dirección del heading 090°; es viento de cola y no tiene componente transversal. Sin componente transversal no hay drift y heading y track coinciden (4.1, pp. 70 y 74–75). Fuente: TBATC_5 Navigation 4.1, p. 70.",
    "optionExp": [
      "NO — El viento no empuja lateralmente: está alineado con el eje de vuelo, así que no produce deriva a la derecha.",
      "NO — Tampoco produce deriva a la izquierda; la componente transversal es cero.",
      "CORRECTA — Heading y track son iguales con viento de frente o de cola directo; aquí el viento desde 270° es de cola para un heading 090°.",
      "NO — La intensidad modifica la componente longitudinal y la velocidad sobre el suelo, pero no crea drift cuando el ángulo es 0°/180°."
    ],
    "topic": "Conceptos básicos de navegación",
    "manualPage": 70,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 45,
    "q": "The direction in which the longitudinal axis of the aircraft is pointing at measured in degrees clockwise from the geographic North is called:",
    "opts": [
      "Magnetic heading.",
      "True heading.",
      "True track.",
      "True course."
    ],
    "a": 1,
    "deepExp": "El heading es la dirección hacia la que apunta el eje longitudinal del avión. Cuando se mide en grados en sentido horario desde el Norte geográfico, se denomina true heading, según las definiciones de 4.1, pp. 69–70. Fuente: TBATC_5 Navigation 4.1, p. 69.",
    "optionExp": [
      "NO — Magnetic heading se mide desde el Norte magnético, no desde el geográfico.",
      "CORRECTA — True heading es la orientación del eje longitudinal medida desde el Norte verdadero/geográfico.",
      "NO — True track es la dirección de la trayectoria proyectada sobre el suelo respecto del Norte verdadero.",
      "NO — True course es la dirección de la ruta/curso respecto del Norte verdadero, no necesariamente la orientación instantánea del eje del avión."
    ],
    "topic": "Conceptos básicos de navegación",
    "manualPage": 69,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 46,
    "q": "The direction in which the longitudinal axis of the aircraft is pointing at measured in degrees clockwise from the magnetic North is called:",
    "opts": [
      "Magnetic heading.",
      "Compass heading.",
      "True heading.",
      "True course."
    ],
    "a": 0,
    "deepExp": "El manual define el heading como la dirección a la que apunta el eje longitudinal de la aeronave, medida desde el norte elegido. Como el enunciado especifica el norte magnético, la denominación exacta es magnetic heading (rumbo magnético). Sección 4.1, pp. 69–70.",
    "optionExp": [
      "CORRECTA — Magnetic heading es el rumbo del eje longitudinal referido al norte magnético.",
      "NO — Compass heading también describe la dirección del eje, pero está referida al norte de la brújula e incorpora la desviación de compás; no es la referencia indicada.",
      "NO — True heading usa el norte verdadero/geográfico, no el magnético.",
      "NO — True course es la dirección de la ruta o trayectoria deseada respecto al norte verdadero, no hacia donde apunta el morro."
    ],
    "topic": "Conceptos básicos: heading y referencias de norte",
    "manualPage": 69,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 47,
    "q": "The direction in which the projection on the ground of the aircraft’s trajectory while trying to fly a particular route measured in degrees clockwise from the magnetic North is called:",
    "opts": [
      "Magnetic heading.",
      "Compass heading.",
      "Magnetic track.",
      "True course."
    ],
    "a": 2,
    "deepExp": "Aquí se describe la proyección sobre el suelo de la trayectoria de la aeronave al intentar seguir una ruta. Esa dirección es el track; al estar referida al norte magnético, se llama magnetic track. El viento puede hacer que track y heading sean distintos. Sección 4.1, p. 70. Fuente: TBATC_5 Navigation 4.1, p. 70.",
    "optionExp": [
      "NO — Magnetic heading es la orientación del eje longitudinal respecto al norte magnético; no la trayectoria efectiva sobre el suelo.",
      "NO — Compass heading es el rumbo indicado por la brújula, con referencia de compás, no la proyección de la trayectoria.",
      "CORRECTA — Magnetic track es la dirección del movimiento/proyección sobre la Tierra medida desde el norte magnético.",
      "NO — True course es la dirección de la ruta respecto al norte verdadero; además, course expresa intención de ruta y no necesariamente el movimiento real."
    ],
    "topic": "Conceptos básicos: track, course y efecto del viento",
    "manualPage": 70,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 48,
    "q": "The altimetric non dimensional figure which express the vertical distance of a point to the specific pressure datum of 1,013.25HPa is called:",
    "opts": [
      "Elevation.",
      "Altitude.",
      "Pressure Altitude.",
      "Height."
    ],
    "a": 2,
    "deepExp": "El datum de presión específico de 1.013,25 hPa define el flight level y, en la terminología utilizada por el manual, el FL es igual a pressure altitude. No es una distancia geométrica desde MSL, sino una cifra altimétrica no dimensional basada en presión estándar. Sección 4.1, pp. 71–72.",
    "optionExp": [
      "NO — Elevation es la distancia vertical de un punto fijo sobre la superficie terrestre respecto a MSL, obtenida por medios geodésicos.",
      "NO — Altitude es la distancia vertical respecto a MSL; no expresa el datum de presión estándar del enunciado.",
      "CORRECTA — Pressure Altitude es la referencia de presión 1.013,25 hPa; el manual indica que el flight level es la pressure altitude.",
      "NO — Height es una distancia respecto a un datum especificado, normalmente el terreno o el nivel del mar bajo la aeronave, no el datum estándar de presión."
    ],
    "topic": "Altimetría: flight level y pressure altitude",
    "manualPage": 71,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 49,
    "q": "The wind direction given verbally to a pilot by TWR-ATC just before take-off or landing clearance is referenced to",
    "opts": [
      "Magnetic direction",
      "True direction",
      "Geographic direction",
      "Answers b and c are both correct"
    ],
    "a": 0,
    "deepExp": "Aunque los informes y pronósticos meteorológicos expresan normalmente el viento desde dirección verdadera, el viento comunicado verbalmente por TWR o en la radiodifusión del aeródromo se da en grados magnéticos. Así se relaciona directamente con la designación magnética de la pista y se pueden obtener los componentes de viento. Sección 4.2, p. 73. Fuente: TBATC_5 Navigation 4.1, p. 73.",
    "optionExp": [
      "CORRECTA — La torre comunica la dirección del viento en referencia magnética para que sea compatible con la dirección magnética de la pista.",
      "NO — La dirección verdadera es la convención de cartas, METAR y pronósticos, no la referencia verbal de TWR justo antes de despegar o aterrizar.",
      "NO — Geographic direction equivale en esencia a una referencia verdadera/geográfica, que no es la utilizada en esa comunicación operacional.",
      "NO — Las respuestas b y c no son correctas: el manual distingue ambas de la dirección magnética empleada por aeródromo/TWR."
    ],
    "topic": "Viento: dirección magnética en la información de aeródromo",
    "manualPage": 73,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 50,
    "q": "An aircraft flies with a TAS of 145 kt. HWc is 20kts. What is the GS?",
    "opts": [
      "125 kt",
      "145 kt",
      "165 kt",
      "120 kt"
    ],
    "a": 0,
    "deepExp": "La velocidad sobre el suelo se obtiene sumando algebraicamente a la TAS el componente de viento en la dirección de vuelo: GS = TAS ± Wc. Un headwind de 20 kt se resta de 145 kt, por lo que GS = 125 kt. Sección 4.3.1, p. 79. Fuente: TBATC_5 Navigation 4.1, p. 79.",
    "optionExp": [
      "CORRECTA — Con GS = TAS − HWc, 145 − 20 = 125 kt.",
      "NO — 145 kt es la TAS a través de la masa de aire; ignora la reducción producida por el viento de frente.",
      "NO — 165 kt resultaría de sumar 20 kt, lo que correspondería a un tailwind de 20 kt, no a un headwind.",
      "NO — 120 kt no aplica la relación GS = TAS ± Wc y no es el resultado de restar el componente indicado."
    ],
    "topic": "Velocidades: TAS, viento y groundspeed",
    "manualPage": 79,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 51,
    "q": "The speed, which the pilot can read from the Air Speed Indicator (ASI) is:",
    "opts": [
      "Groundspeed.",
      "True Airspeed.",
      "Indicated Airspeed.",
      "Calibrated Airspeed."
    ],
    "a": 2,
    "deepExp": "El ASI/anemómetro está conectado al sistema pitot-estático y muestra directamente la velocidad indicada. Esa lectura se denomina IAS; después puede corregirse por errores de instrumento, posición, compresibilidad y densidad para obtener otras velocidades. Sección 4.3.1, p. 78. Fuente: TBATC_5 Navigation 4.1, p. 78.",
    "optionExp": [
      "NO — Groundspeed es la velocidad respecto al suelo y se obtiene considerando la TAS y el componente de viento; el ASI no la muestra directamente.",
      "NO — True Airspeed es la velocidad real a través de la masa de aire, corregida respecto a la lectura indicada.",
      "CORRECTA — Indicated Airspeed es la velocidad leída directamente en el Air Speed Indicator.",
      "NO — Calibrated Airspeed es IAS corregida por errores de posición, presión e instrumento, no la lectura bruta del ASI."
    ],
    "topic": "Velocidades: lectura del ASI",
    "manualPage": 78,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 52,
    "q": "The actual speed of an aircraft through the undisturbed air stream is:",
    "opts": [
      "True Airspeed.",
      "Groundspeed.",
      "Wind velocity.",
      "Equivalent Airspeed."
    ],
    "a": 0,
    "deepExp": "La TAS representa la velocidad real de la aeronave a través del flujo de aire no perturbado por la propia aeronave. Se obtiene corrigiendo la EAS por el error de densidad atmosférica. Sección 4.3.1, p. 79. Fuente: TBATC_5 Navigation 4.1, p. 79.",
    "optionExp": [
      "CORRECTA — True Airspeed es la velocidad efectiva de la aeronave a través de la corriente de aire no perturbada.",
      "NO — Groundspeed es la velocidad respecto a la superficie terrestre e incluye el efecto del movimiento de la masa de aire.",
      "NO — Wind velocity describe el movimiento del aire respecto al suelo, no la velocidad de la aeronave dentro del aire.",
      "NO — Equivalent Airspeed es CAS corregida por compresibilidad; aún no es la velocidad real corregida por densidad."
    ],
    "topic": "Velocidades: definición de TAS",
    "manualPage": 79,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 53,
    "q": "Complete the following sentence. The Mach number is the relationship between the ____ of an aircraft and the speed of sound in the same part of the atmosphere",
    "opts": [
      "Calibrated Airspeed.",
      "Equivalent Airspeed.",
      "True Airspeed.",
      "Indicated Airspeed."
    ],
    "a": 2,
    "deepExp": "El número Mach compara la TAS con la velocidad local del sonido en la misma zona de la atmósfera: M = TAS/LSS. Por eso la magnitud que completa la frase es True Airspeed. Sección 4.3.1, p. 80. Fuente: TBATC_5 Navigation 4.1, p. 80.",
    "optionExp": [
      "NO — Calibrated Airspeed es IAS corregida por errores de posición, presión e instrumento; no es la variable de la definición de Mach.",
      "NO — Equivalent Airspeed es CAS corregida por compresibilidad, pero Mach se define con TAS.",
      "CORRECTA — Mach es la relación entre la True Airspeed y la velocidad local del sonido.",
      "NO — Indicated Airspeed es la lectura directa del ASI y no representa necesariamente la velocidad real a través del aire."
    ],
    "topic": "Velocidades: número Mach",
    "manualPage": 80,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 54,
    "q": "An aircraft is flying at 0.85M, what does that mean?",
    "opts": [
      "Local Speed of Sound is 850kt.",
      "TAS is 850Kt.",
      "TAS is 85% of Local Speed of Sound.",
      "Local Speed of Sound is 85% of TAS."
    ],
    "a": 2,
    "deepExp": "Por definición M = TAS/LSS. Un valor de 0,85 significa que la TAS es 0,85 veces la velocidad local del sonido, es decir, el 85 % de ella; no significa que el sonido viaje a 850 kt. Sección 4.3.1, p. 80. Fuente: TBATC_5 Navigation 4.1, p. 80.",
    "optionExp": [
      "NO — 0,85 no convierte la velocidad local del sonido en 850 kt; Mach es una razón adimensional.",
      "NO — La TAS no es automáticamente 850 kt; depende de la velocidad local del sonido y equivale al 85 % de ella.",
      "CORRECTA — TAS es el 85 % de la Local Speed of Sound porque M = TAS/LSS = 0,85.",
      "NO — La relación está invertida: la velocidad local del sonido no es el 85 % de TAS; es TAS la que representa el 85 % de LSS."
    ],
    "topic": "Velocidades: interpretación de Mach",
    "manualPage": 80,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 55,
    "q": "An Air Traffic Controller reads a flight plan where it says that an aircraft is supposed to fly at 275kt. What speed is he/she reading?",
    "opts": [
      "IAS",
      "CAS",
      "GS",
      "TAS"
    ],
    "a": 3,
    "deepExp": "El manual distingue la velocidad leída por el piloto de la que se presenta en el plan de vuelo. En el plan de vuelo, durante crucero, se indica normalmente TAS, aunque también se admite Mach. Por tanto, 275 kt en el plan representa TAS. Sección 4.3.3, p. 82.",
    "optionExp": [
      "NO — IAS es la lectura del ASI, utilizada especialmente en fases críticas; no es la velocidad que normalmente se inserta en el plan.",
      "NO — CAS es IAS corregida por errores de posición, presión e instrumento; el plan no pide esa magnitud como referencia normal.",
      "NO — GS depende del viento y no puede conocerse exactamente antes del vuelo, por lo que no es la cifra prevista en el plan.",
      "CORRECTA — El plan de vuelo puede indicar la TAS de crucero en nudos; alternativamente puede indicar Mach."
    ],
    "topic": "ATC y planificación: velocidad declarada en FPL",
    "manualPage": 82,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 56,
    "q": "Which of the following is NOT a way of radio-wave propagation?",
    "opts": [
      "Sky waves.",
      "Space waves.",
      "Solar waves.",
      "Surface waves."
    ],
    "a": 2,
    "deepExp": "El manual enumera como caminos de propagación las ondas de superficie, de cielo, espaciales/directas y las ondas de tierra como combinación de superficie y espacio. Solar waves no es una categoría de propagación radioeléctrica de esa lista. Sección 5.1.1, p. 95.",
    "optionExp": [
      "NO — Surface waves siguen los contornos de la superficie terrestre y son una forma reconocida de propagación.",
      "NO — Space waves son ondas directas de línea de vista, también una forma reconocida.",
      "CORRECTA — Solar waves no aparece entre los caminos principales de propagación radioeléctrica del manual.",
      "NO — Surface y space waves se combinan también bajo la denominación ground waves; sí es una categoría contemplada."
    ],
    "topic": "Ondas: modos de propagación",
    "manualPage": 95,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 57,
    "q": "Which of the following propagation ways predominates on VHF transmissions?",
    "opts": [
      "Sky waves.",
      "Space or direct waves.",
      "Ground waves.",
      "Surface waves."
    ],
    "a": 1,
    "deepExp": "Las transmisiones VHF solo disponen, esencialmente, del camino de línea de vista; por ello predominan las ondas espaciales o directas. La curvatura terrestre y los obstáculos limitan su alcance. Sección 5.1.1, pp. 95–96. Fuente: TBATC_5 Navigation 4.1, p. 96.",
    "optionExp": [
      "NO — Sky waves dependen de refracción/reflexión ionosférica y predominan en frecuencias medias, no en VHF.",
      "CORRECTA — Space or direct waves son de línea de vista y son el camino disponible para VHF.",
      "NO — Ground waves es el término para la combinación de ondas de superficie y espaciales; no es el modo predominante específico señalado para VHF.",
      "NO — Surface waves siguen la curvatura terrestre y predominan a bajas frecuencias, no en VHF."
    ],
    "topic": "Ondas: propagación predominante en VHF",
    "manualPage": 96,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 58,
    "q": "Those radio-waves which travel following the curvature of the Earth due to the phenomenon called diffraction are:",
    "opts": [
      "Surface waves.",
      "Direct waves.",
      "Space waves.",
      "Sky waves."
    ],
    "a": 0,
    "deepExp": "Las ondas de superficie se desplazan siguiendo los contornos de la Tierra gracias a la difracción. La difracción es más pronunciada cuanto mayor es la longitud de onda, es decir, cuanto menor es la frecuencia. Sección 5.1.1, p. 97. Fuente: TBATC_5 Navigation 4.1, p. 97.",
    "optionExp": [
      "CORRECTA — Surface waves siguen la curvatura terrestre debido a la difracción.",
      "NO — Direct waves viajan directamente del transmisor al receptor en línea de vista.",
      "NO — Space waves es la denominación de las ondas directas de línea de vista, no de las que siguen el terreno.",
      "NO — Sky waves son refractadas por la ionosfera y retornan a la Tierra; no siguen la curvatura por difracción."
    ],
    "topic": "Ondas: ondas de superficie y difracción",
    "manualPage": 97,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 59,
    "q": "Those radio-waves which are reflected or refracted down to the Earth from ionized layers are:",
    "opts": [
      "Surface waves.",
      "Direct waves.",
      "Space waves.",
      "Sky waves."
    ],
    "a": 3,
    "deepExp": "Las ondas de cielo son las que la ionosfera refracta y devuelve hacia la Tierra desde capas ionizadas. Este mecanismo puede causar alcance y errores de propagación, especialmente en bandas bajas. Sección 5.1.1, p. 97. Fuente: TBATC_5 Navigation 4.1, p. 97.",
    "optionExp": [
      "NO — Surface waves siguen el contorno terrestre por difracción y no son las ondas devueltas desde la ionosfera.",
      "NO — Direct waves son ondas espaciales de línea de vista entre transmisor y receptor.",
      "NO — Space waves es sinónimo de direct waves; no describe el retorno ionosférico.",
      "CORRECTA — Sky waves son reflejadas o refractadas hacia la Tierra por capas ionizadas."
    ],
    "topic": "Ondas: propagación ionosférica",
    "manualPage": 97,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 60,
    "q": "Regarding NDB/ADF. Select the true statement.",
    "opts": [
      "The NDB is a ground-based radio transmitter that transmits radio energy in all directions.",
      "The ADF is a ground-based radio transmitter that transmits radio energy in all directions.",
      "The NDB isthe airborne equipment fitted in the airplane which by the use of special equipment indicates the direction from which the signals of the selected ADF ground station are being received.",
      "The NDBis the airborne system which comprises a radio receiver, a set of two antennas and an indicator that shows the great circle bearing of the transmitting station from the aircraft."
    ],
    "a": 0,
    "deepExp": "El NDB es el transmisor radioeléctrico situado en tierra y emite energía en todas las direcciones. El ADF es el equipo instalado a bordo que determina desde qué dirección llegan las señales del NDB y muestra la marcación relativa. Sección 5.1.2, p. 102. Fuente: TBATC_5 Navigation 4.1, p. 102.",
    "optionExp": [
      "CORRECTA — NDB significa Non-Directional Beacon: una estación terrestre que transmite energía en todas las direcciones.",
      "NO — ADF no es una estación terrestre; es el equipo receptor/direccionador instalado en la aeronave.",
      "NO — La descripción corresponde al ADF, salvo la errata tipográfica: el NDB es el transmisor terrestre y el ADF el equipo aéreo.",
      "NO — Esta descripción del receptor, antenas e indicador corresponde al sistema ADF a bordo; NDB no es un sistema aéreo."
    ],
    "topic": "NDB/ADF: funciones de tierra y a bordo",
    "manualPage": 102,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 61,
    "q": "When considering the use of NDB, night effect has its greatest effect during:",
    "opts": [
      "Autumn and winter.",
      "When using inland beacons.",
      "When using VHF transmissions.",
      "At dawn and dusk."
    ],
    "a": 3,
    "deepExp": "Durante la noche desaparece la absorción diurna de la región D y pueden llegar ondas de cielo de NDB lejanas, mezclándose con la onda de superficie. El efecto es máximo en la transición ionosférica de amanecer y anochecer. Sección 5.1.2, pp. 108–109. Fuente: TBATC_5 Navigation 4.1, p. 109.",
    "optionExp": [
      "NO — Autumn and winter no es el criterio descrito; el fenómeno depende principalmente del ciclo día/noche y de la transición de la ionosfera.",
      "NO — Los inland beacons no son por sí mismos la condición determinante del night effect.",
      "NO — VHF no es la banda principal del NDB y sus ondas no sufren este efecto de sky wave en la forma indicada.",
      "CORRECTA — El efecto nocturno es peor al amanecer y al anochecer, cuando la ionosfera está en transición."
    ],
    "topic": "NDB/ADF: night effect",
    "manualPage": 109,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 62,
    "q": "A thunderstorm in the vicinity of an aerodrome, whilst an aircraft is approaching may cause certain navigation systems to give false indications. This is particularly true of the:",
    "opts": [
      "ADF.",
      "VOR.",
      "VDF.",
      "DME."
    ],
    "a": 0,
    "deepExp": "Las descargas de un cumulonimbo producen potentes perturbaciones de estática que pueden causar errores de marcación en el ADF e incluso enmascarar la señal. Por eso el sistema especialmente susceptible en este supuesto es el ADF. Sección 5.1.2, p. 107. Fuente: TBATC_5 Navigation 4.1, p. 107.",
    "optionExp": [
      "CORRECTA — El ADF puede recibir bearing falsos por estática de tormentas; el manual recomienda cautela ante actividad tormentosa.",
      "NO — VOR opera en VHF y es prácticamente inmune a la interferencia estática atmosférica descrita.",
      "NO — VDF puede sufrir errores de propagación o de emplazamiento, pero el efecto clásico de descargas de tormenta sobre la marcación es el del ADF.",
      "NO — DME mide distancia mediante pulsos y no es el sistema identificado por el manual como particularmente afectado por estática de tormentas."
    ],
    "topic": "NDB/ADF: errores por tormentas",
    "manualPage": 107,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 63,
    "q": "NDB-ADF navigations system works mainly in the:",
    "opts": [
      "VHF band.",
      "UHF band.",
      "HF band.",
      "LF and MF band."
    ],
    "a": 3,
    "deepExp": "El NDB transmite en las bandas LF/MF; el manual sitúa la navegación aérea aproximadamente en 200–400 kHz y exige que el ADF pueda recibir 190–1.750 kHz. Por ello la respuesta conjunta es LF y MF. Sección 5.1.2, pp. 102–103.",
    "optionExp": [
      "NO — VHF es la banda característica del VOR, VDF y localizador ILS, no del sistema NDB–ADF.",
      "NO — UHF se emplea, por ejemplo, en DME, TACAN y la senda de planeo del ILS.",
      "NO — HF no es la banda asignada al NDB de navegación aérea en el manual.",
      "CORRECTA — NDB–ADF funciona principalmente en LF y MF, con la asignación aérea indicada de 200–400 kHz."
    ],
    "topic": "NDB/ADF: bandas de frecuencia",
    "manualPage": 102,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 64,
    "q": "The basic information given by the ADF is:",
    "opts": [
      "The relative bearing from the aircraft to the NDB.",
      "The magnetic bearing from the aircraft to the NDB.",
      "The true great circle track from the NDB to the aircraft.",
      "The magnetic direction of the loop aerial with reference to the sense aerial."
    ],
    "a": 0,
    "deepExp": "La información básica del ADF es una marcación relativa: el ángulo entre la dirección de vuelo y la dirección desde la que llega la onda del NDB. En un RBI la aguja muestra directamente RB; otros indicadores pueden convertirla en bearing magnético, pero esa es información derivada. Sección 5.1.2, pp. 99 y 103–105. Fuente: TBATC_5 Navigation 4.1, p. 103.",
    "optionExp": [
      "CORRECTA — El ADF proporciona la relative bearing desde la aeronave hacia el NDB, es decir, dónde está la estación respecto al eje de vuelo.",
      "NO — La magnetic bearing requiere combinar la marcación relativa con el rumbo magnético mediante una tarjeta/indicador apropiado; no es la información básica universal.",
      "NO — True great circle track del NDB a la aeronave es una trayectoria verdadera, no la lectura básica del ADF.",
      "NO — La dirección de la antena de cuadro respecto a la antena sense es un detalle del principio de antenas, no la información de navegación entregada."
    ],
    "topic": "NDB/ADF: información básica y relative bearing",
    "manualPage": 103,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 65,
    "q": "Which of the following is correct regarding NDB reliability?",
    "opts": [
      "The station includes an automatic monitoring system which automatically turns off defective equipment.",
      "The station includes an automatic monitoring system which automatically alerts pilots about any defective equipment.",
      "The on-board equipment detects any transmitting malfunction and shows a failure flag to the flight crew.",
      "ATC must always warn pilots immediately about any NDB non-published failure or errors detected by other aircraft."
    ],
    "a": 3,
    "deepExp": "El NDB carece normalmente de bandera de fallo u otra indicación de alarma en cabina, por lo que el fallo puede producir una indicación falsa no detectable. El manual establece expresamente que ATC debe advertir inmediatamente de fallos no publicados o errores comunicados por otras aeronaves. Sección 5.1.2, p. 111.",
    "optionExp": [
      "NO — Ese comportamiento de desconexión automática es propio del monitor del VOR, no la fiabilidad del NDB descrita.",
      "NO — El NDB no dispone de un sistema que alerte automáticamente a los pilotos de esa manera; esa es precisamente una de sus desventajas.",
      "NO — El equipo de a bordo NDB/ADF no muestra normalmente una failure flag ante un fallo de transmisión.",
      "CORRECTA — ATC debe avisar de inmediato de cualquier fallo NDB no publicado o error detectado por otra aeronave."
    ],
    "topic": "NDB/ADF: fiabilidad y avisos ATC",
    "manualPage": 111,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 66,
    "q": "Which frequency band is used for VOR transmissions?",
    "opts": [
      "SHF.",
      "UHF.",
      "VHF.",
      "HF."
    ],
    "a": 2,
    "deepExp": "VOR significa VHF Omni-directional Range. El manual fija su operación entre 108,00 y 117,95 MHz, banda VHF, aunque el segmento 108–112 MHz se comparte con frecuencias ILS. Sección 5.1.2, p. 112.",
    "optionExp": [
      "NO — SHF corresponde a frecuencias mucho más altas que las utilizadas por VOR.",
      "NO — UHF es la banda del DME, TACAN y glide slope del ILS, no del VOR.",
      "CORRECTA — Las transmisiones VOR son de muy alta frecuencia, dentro de la banda VHF.",
      "NO — HF no corresponde al intervalo 108–117,95 MHz del VOR."
    ],
    "topic": "VOR: banda de frecuencia",
    "manualPage": 112,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 67,
    "q": "When the term “radial” is used in reference to VOR it means:",
    "opts": [
      "The magnetic bearing of the VOR station.",
      "The magnetic bearing from the VOR station.",
      "The magnetic bearing of the aircraft to the station.",
      "The true bearing from the VOR station."
    ],
    "a": 1,
    "deepExp": "Un radial VOR es una línea de posición definida por la marcación magnética outbound desde la estación. Así, el radial 090 es la línea que parte de la estación hacia el este magnético, aunque una aeronave situada allí pueda volar inbound con rumbo aproximado 270. Sección 5.1.2, p. 116. Fuente: TBATC_5 Navigation 4.1, p. 116.",
    "optionExp": [
      "NO — La expresión confunde la estación con su bearing; un radial no es el bearing de la estación, sino una línea que sale de ella.",
      "CORRECTA — Radial es el magnetic bearing FROM el VOR, o sea, la dirección magnética desde la estación hacia la aeronave.",
      "NO — El bearing TO la estación es la dirección desde la aeronave a la estación y no define el radial en sentido estricto.",
      "NO — Los radiales VOR están referidos al norte magnético, no al true bearing/geográfico."
    ],
    "topic": "VOR: definición de radial",
    "manualPage": 116,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 68,
    "q": "The principle used to measure VOR bearings is:",
    "opts": [
      "Phase comparison.",
      "Frequency comparison.",
      "Difference in depth of modulation.",
      "Pulse technique."
    ],
    "a": 0,
    "deepExp": "El VOR transmite dos modulaciones: una referencia y otra variable. El receptor compara la fase de ambas; la diferencia de fase equivale al bearing magnético desde la estación. Por tanto, el principio de medida es la comparación de fase. Sección 5.1.2, p. 115. Fuente: TBATC_5 Navigation 4.1, p. 115.",
    "optionExp": [
      "CORRECTA — La bearing VOR se determina mediante phase comparison entre las dos modulaciones de 30 Hz.",
      "NO — Frequency comparison no es el principio de medida: la frecuencia de las señales no es la variable que codifica el radial.",
      "NO — Difference in depth of modulation describe una diferencia de amplitud/modulación, no la comparación de fase usada por VOR.",
      "NO — Pulse technique es propia de sistemas pulsados como DME/TACAN, no del VOR convencional."
    ],
    "topic": "VOR: principio de comparación de fase",
    "manualPage": 115,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 69,
    "q": "Which of the following errors is associated with the use of VOR?",
    "opts": [
      "Errors due to signal travel over terrain or obstructions.",
      "Coastal refraction.",
      "Quadrantal error.",
      "Night effect."
    ],
    "a": 0,
    "deepExp": "El manual enumera para VOR el error de emplazamiento y propagación causado por terreno u obstáculos, además del error del equipo de a bordo. Coastal refraction, quadrantal error y night effect son limitaciones asociadas principalmente a NDB/ADF, no al VOR VHF. Sección 5.1.2, pp. 119–121.",
    "optionExp": [
      "CORRECTA — Terrain u obstructions pueden producir site/propagation errors en la señal VOR y desplazar el curso indicado.",
      "NO — Coastal refraction es un error típico de ondas NDB que viajan a velocidades distintas sobre tierra y mar.",
      "NO — Quadrantal error deriva de reflexiones/re-radiación del fuselaje sobre la antena de cuadro del ADF.",
      "NO — Night effect se debe a ondas de cielo LF/MF que afectan al NDB; VOR VHF no está afectado por sky waves."
    ],
    "topic": "VOR: errores y limitaciones",
    "manualPage": 121,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 70,
    "q": "With reference to the VOR:",
    "opts": [
      "Failure of the monitor will cause the beacon to cease its transmission.",
      "A typical VOR frequency is 118,15Mhz.",
      "Radial are references to the geographic North.",
      "It always transmits bearing and distance information."
    ],
    "a": 0,
    "deepExp": "El monitor automático del VOR desconecta el equipo defectuoso y conecta un transmisor de reserva si está disponible cuando detecta desviación de bearing, pérdida de potencia de modulación o fallo del propio monitor. La frecuencia 118,15 MHz no es VOR porque queda fuera del límite superior 117,95 MHz; los radiales son magnéticos y VOR no proporciona distancia por sí solo. Sección 5.1.2, pp. 112–114. Fuente: TBATC_5 Navigation 4.1, p. 113.",
    "optionExp": [
      "CORRECTA — El monitor VOR provoca el cese de la transmisión defectuosa y, si existe, activa un transmisor standby.",
      "NO — 118,15 MHz está por encima de 117,95 MHz, límite superior indicado para VOR.",
      "NO — Los radiales se alinean con el norte magnético de la estación, no con el norte geográfico.",
      "NO — VOR proporciona bearing/radial; la distancia requiere DME u otro sistema asociado."
    ],
    "topic": "VOR: monitor, frecuencia y datos proporcionados",
    "manualPage": 113,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 71,
    "q": "A TVOR is:",
    "opts": [
      "A test VOR.",
      "A terminal VOR.",
      "A trial VOR.",
      "A tracking VOR."
    ],
    "a": 1,
    "deepExp": "Entre los tipos de VOR, TVOR significa Terminal VOR. Es una estación de alcance más corto utilizada dentro de la estructura terminal de aproximación y salida de aeropuertos principales. Sección 5.1.2, p. 114. Fuente: TBATC_5 Navigation 4.1, p. 114.",
    "optionExp": [
      "NO — Test VOR sería VOT en la nomenclatura del manual; VOT sirve para comprobar el equipo y no para navegación normal.",
      "CORRECTA — Terminal VOR es la expansión de TVOR y designa el VOR de menor alcance para el área terminal.",
      "NO — Trial VOR no es la categoría empleada en la clasificación del manual.",
      "NO — Tracking VOR tampoco es la expansión ni el tipo definido para las siglas TVOR."
    ],
    "topic": "VOR: tipos de estaciones",
    "manualPage": 114,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 72,
    "q": "Which of the following is NOT a factor to be taken into account to determine the maximum range at which a VOR can be received?",
    "opts": [
      "Aircraft altitude.",
      "Existence of obstacles.",
      "Power of transmission of the VOR station.",
      "Ionospheric activity."
    ],
    "a": 3,
    "deepExp": "El alcance VOR depende de la altitud de la aeronave, los obstáculos y la potencia de transmisión, porque la señal VHF es una onda directa de línea de vista. La actividad ionosférica no es un factor determinante: VHF no usa propagación por sky waves y la DOC VOR vale de día y de noche. Sección 5.1.2, pp. 119–120. Fuente: TBATC_5 Navigation 4.1, p. 119.",
    "optionExp": [
      "NO — La altitud eleva la línea de vista y es uno de los factores explícitos.",
      "NO — Obstáculos y terreno pueden bloquear o limitar una transmisión VHF directa.",
      "NO — La potencia de la estación influye en el alcance práctico y aparece expresamente en el manual.",
      "CORRECTA — Ionospheric activity no determina el alcance VOR de línea de vista; además, las sky waves no afectan al VHF."
    ],
    "topic": "VOR: alcance y línea de vista",
    "manualPage": 119,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 73,
    "q": "The operating principle of DME is based on::",
    "opts": [
      "The principle of phase difference.",
      "The principle of secondary radar.",
      "The principle of time difference.",
      "The principle of wavelength difference."
    ],
    "a": 1,
    "deepExp": "El DME funciona como radar secundario: la aeronave interroga con pares de pulsos y el transpondedor terrestre responde. El equipo mide el tiempo transcurrido entre interrogación y respuesta para calcular la distancia oblicua. Sección 5.1.2, pp. 121 y 123. Fuente: TBATC_5 Navigation 4.1, p. 123.",
    "optionExp": [
      "NO — Phase difference es el principio del VOR, no el del DME.",
      "CORRECTA — DME se basa en el principio de secondary radar, con interrogador aéreo y transpondedor terrestre.",
      "NO — Aunque el tiempo transcurrido se mide, la formulación completa del sistema es radar secundario; time difference por sí sola no identifica el principio operacional solicitado.",
      "NO — Wavelength difference no es el parámetro que utiliza el DME para calcular rango."
    ],
    "topic": "DME: principio de radar secundario",
    "manualPage": 123,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 74,
    "q": "Which of the following Navigation Systems is limited by an approximated answering capacity to 100 aircraft simultaneously?",
    "opts": [
      "VOR.",
      "NDB.",
      "ILS.",
      "DME."
    ],
    "a": 3,
    "deepExp": "El transpondedor DME puede transmitir unos 2.700 pares de pulsos por segundo y la respuesta media por aeronave es de unos 27 pares por segundo; por ello su capacidad aproximada es 2.700/27 = 100 aeronaves simultáneas. Sección 5.1.2, p. 128. Fuente: TBATC_5 Navigation 4.1, p. 128.",
    "optionExp": [
      "NO — VOR no tiene una capacidad de respuestas interrogativas limitada a unos 100 usuarios simultáneos.",
      "NO — NDB transmite de forma continua y no gestiona interrogaciones individuales de aeronaves.",
      "NO — ILS proporciona guía de aproximación, no respuestas individuales de distancia a múltiples interrogadores.",
      "CORRECTA — DME está limitado aproximadamente a 100 aeronaves simultáneas por la capacidad de su transpondedor; con más usuarios se satura."
    ],
    "topic": "DME: saturación y capacidad del transpondedor",
    "manualPage": 128,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 75,
    "q": "Which frequency band is used for DME transmissions?",
    "opts": [
      "SHF.",
      "UHF.",
      "VHF.",
      "HF."
    ],
    "a": 1,
    "deepExp": "DME opera en UHF, en el intervalo indicado por el manual de aproximadamente 962–1.213 MHz. Su funcionamiento pulsado y su alcance de línea de vista son coherentes con esa banda. Sección 5.1.2, p. 123.",
    "optionExp": [
      "NO — SHF está por encima del intervalo de frecuencias DME.",
      "CORRECTA — DME utiliza la banda UHF.",
      "NO — VHF es la banda del VOR y del localizador ILS, no la del DME.",
      "NO — HF no corresponde a los canales DME de aproximadamente 1 GHz."
    ],
    "topic": "DME: banda de frecuencia",
    "manualPage": 123,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 76,
    "q": "Which of the following provides distance information?",
    "opts": [
      "VOR.",
      "DME.",
      "ILS.",
      "All of the above."
    ],
    "a": 1,
    "deepExp": "DME es el sistema de esta lista cuya función propia es medir distancia a una estación terrestre. VOR entrega bearing y el ILS guía lateral/vertical; aunque un ILS pueda incorporar DME asociado, el ILS por sí mismo no es la respuesta a distance information en esta pregunta. Sección 5.1.2, pp. 121–124 y 131–132. Fuente: TBATC_5 Navigation 4.1, p. 121.",
    "optionExp": [
      "NO — VOR proporciona bearing/radiales; necesita DME para añadir distancia.",
      "CORRECTA — DME significa Distance Measuring Equipment y proporciona la distancia a la estación.",
      "NO — ILS proporciona localizador y glide slope; la distancia, cuando existe, procede de marcadores o de un DME asociado.",
      "NO — No todos los elementos enumerados proporcionan distancia por sí mismos; por eso no es “all of the above”."
    ],
    "topic": "Sistemas de navegación: información de distancia",
    "manualPage": 121,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 77,
    "q": "Which one of the statements below is correct regarding the DME?",
    "opts": [
      "Two lines of position obtained from 2 different DMEs give an unambiguous fix.",
      "The DME ground station is always co-located with an ILS or VOR station.",
      "The indicated distance is the ground distance measured from the aircraft’s projected position on the ground to the DME ground installation.",
      "The DME operating frequencies are in the UHF frequency band."
    ],
    "a": 3,
    "deepExp": "DME mide distancia oblicua y opera en UHF. No siempre está coemplazado con ILS o VOR; puede ser independiente o asociado. Además, dos círculos DME pueden cortarse en dos posiciones, por lo que dos líneas no garantizan un fix inequívoco. Sección 5.1.2, pp. 123–127. Fuente: TBATC_5 Navigation 4.1, p. 123.",
    "optionExp": [
      "NO — Dos líneas de posición circulares de dos DME pueden producir dos intersecciones; no siempre dan un fix inequívoco sin información adicional.",
      "NO — El DME puede ser stand-alone o asociado a una ayuda, así que no siempre está coemplazado con ILS/VOR.",
      "NO — La indicación es slant range entre la antena de aeronave y la estación, no la distancia horizontal de la proyección en el suelo.",
      "CORRECTA — Las frecuencias de operación del DME están en la banda UHF."
    ],
    "topic": "DME: banda, geometría y asociaciones",
    "manualPage": 123,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 78,
    "q": "The indicated range from a DME station is:",
    "opts": [
      "Slant range.",
      "Ground range.",
      "0 when passing overhead the station.",
      "Ground range only if the beacon is co-located with a VOR ."
    ],
    "a": 0,
    "deepExp": "La distancia que presenta el DME es la línea recta entre la antena de la aeronave y la estación terrestre: slant range. No es ground range. Sobre la vertical de la estación la indicación no es cero, sino aproximadamente la altura en millas náuticas. Sección 5.1.2, p. 127. Fuente: TBATC_5 Navigation 4.1, p. 127.",
    "optionExp": [
      "CORRECTA — DME indica slant range, distancia oblicua entre aeronave y estación.",
      "NO — Ground range es la distancia horizontal sobre la superficie y no coincide con la medición DME.",
      "NO — Al pasar verticalmente sobre la estación el DME muestra la altura sobre ella en NM, no cero.",
      "NO — La naturaleza slant range no depende de que el beacon esté coemplazado con VOR."
    ],
    "topic": "DME: slant range",
    "manualPage": 127,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 79,
    "q": "The operating principle of a DME is the measurement of the:",
    "opts": [
      "Time between the transmission and reception of radio pulses.",
      "Frequency change between the emitted wave and reflected wave.",
      "Frequency of the reflected wave.",
      "Phase difference between emitted wave and reflected wave."
    ],
    "a": 0,
    "deepExp": "El interrogador transmite un par de pulsos y el transpondedor responde. El equipo aéreo mide el tiempo transcurrido entre la emisión de la interrogación y la recepción de la respuesta; con la velocidad conocida de la señal obtiene el slant range. Sección 5.1.2, p. 123. Fuente: TBATC_5 Navigation 4.1, p. 123.",
    "optionExp": [
      "CORRECTA — El parámetro medido es el tiempo entre transmitir la interrogación y recibir los pulsos de respuesta.",
      "NO — Un cambio de frecuencia entre ondas emitida y reflejada no es la técnica DME; además, la respuesta procede de un transpondedor.",
      "NO — La frecuencia de la onda reflejada no proporciona directamente el rango DME.",
      "NO — Phase difference es el método VOR; DME usa tiempo de propagación de pulsos."
    ],
    "topic": "DME: medición temporal del rango",
    "manualPage": 123,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 80,
    "q": "A DME is located at MSL. An aircraft passing vertically above the station at FL360 will obtain a DME range of approximately:",
    "opts": [
      "11NM.",
      "7NM.",
      "6NM.",
      "8NM."
    ],
    "a": 2,
    "deepExp": "Sobre la estación, la distancia oblicua DME equivale aproximadamente a la altura expresada en millas náuticas. El manual da la regla de 1 NM por cada 6.000 ft; FL360 corresponde a 36.000 ft y, por tanto, 36.000/6.000 = 6 NM. Sección 5.1.2, p. 127.",
    "optionExp": [
      "NO — 11 NM excede la conversión aproximada de 36.000 ft a millas náuticas sobre la vertical.",
      "NO — 7 NM tampoco corresponde a la regla del manual de 1 NM por 6.000 ft.",
      "CORRECTA — A FL360, 36.000 ft equivalen aproximadamente a 6 NM de slant range sobre el DME.",
      "NO — 8 NM sobreestima la indicación; la relación publicada da aproximadamente 6 NM."
    ],
    "topic": "DME: indicación sobre la vertical",
    "manualPage": 127,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 81,
    "q": "What information does military TACAN provide for civil aviation users?",
    "opts": [
      "Magnetic bearing.",
      "DME.",
      "DME and magnetic bearing.",
      "None of the above."
    ],
    "a": 1,
    "deepExp": "TACAN proporciona a los usuarios civiles el componente de distancia porque su unidad DME tiene las mismas especificaciones que un DME civil. El equipo TACAN aéreo de bearing no es interoperable con el VOR civil para suministrar marcación. Sección 5.1.2, pp. 129–131. Fuente: TBATC_5 Navigation 4.1, p. 131.",
    "optionExp": [
      "NO — La marcación magnética TACAN requiere el equipo TACAN de a bordo, que no es el equipo civil VOR convencional.",
      "CORRECTA — Un usuario civil puede recibir del TACAN la información DME mediante un equipo DME compatible.",
      "NO — El usuario civil no obtiene conjuntamente bearing magnético TACAN y DME sin el equipo militar TACAN.",
      "NO — Sí existe una prestación utilizable por aviación civil: la distancia DME del TACAN."
    ],
    "topic": "TACAN: información disponible para usuarios civiles",
    "manualPage": 131,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 82,
    "q": "Which frequency band is used for TACAN transmissions?",
    "opts": [
      "SHF.",
      "UHF.",
      "VHF.",
      "HF."
    ],
    "a": 1,
    "deepExp": "TACAN es un sistema pulsado que opera en UHF, aproximadamente entre 960 y 1.215 MHz. La misma banda explica la analogía de su componente de distancia con el DME civil. Sección 5.1.2, p. 129. Fuente: TBATC_5 Navigation 4.1, p. 129.",
    "optionExp": [
      "NO — SHF no es la banda del sistema TACAN descrita.",
      "CORRECTA — TACAN (Tactical Air Navigation) transmite en la banda UHF.",
      "NO — VHF es la banda del VOR y del localizador, no la de TACAN.",
      "NO — HF no corresponde al intervalo de aproximadamente 1 GHz de TACAN."
    ],
    "topic": "TACAN: banda de frecuencia",
    "manualPage": 129,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 83,
    "q": "Which is the primary precision approach facility for civil aviation?",
    "opts": [
      "VOR.",
      "NDB.",
      "ILS.",
      "MLS."
    ],
    "a": 2,
    "deepExp": "El manual identifica expresamente al Instrument Landing System como la instalación primaria de aproximación de precisión para la aviación civil. Proporciona guía horizontal mediante localizador y vertical mediante senda de planeo. Sección 5.1.2, p. 131.",
    "optionExp": [
      "NO — VOR proporciona navegación de área/radiales, pero no la guía vertical y lateral de precisión de una aproximación ILS.",
      "NO — NDB/ADF se usa como ayuda de navegación y aproximación no precisa.",
      "CORRECTA — ILS es la instalación primaria de aproximación de precisión civil.",
      "NO — MLS es un sistema de aterrizaje de microondas avanzado, pero su instalación fue ampliamente abandonada y no es la instalación primaria habitual indicada."
    ],
    "topic": "ILS: función principal",
    "manualPage": 131,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 84,
    "q": "Which frequency band does an ILS glide-slope transmit?",
    "opts": [
      "SHF.",
      "UHF.",
      "VHF.",
      "HF."
    ],
    "a": 1,
    "deepExp": "La senda de planeo del ILS transmite en UHF, aproximadamente 329,15–335 MHz, y se selecciona automáticamente al sintonizar la frecuencia VHF del localizador porque ambas están emparejadas. Sección 5.1.2, p. 137. Fuente: TBATC_5 Navigation 4.1, p. 137.",
    "optionExp": [
      "NO — SHF es una banda superior a las frecuencias de la senda de planeo.",
      "CORRECTA — El glide-slope/GP transmite en UHF.",
      "NO — VHF corresponde al localizador, no a la frecuencia del glide-slope.",
      "NO — HF no corresponde al intervalo 329,15–335 MHz del GP."
    ],
    "topic": "ILS: banda del glide slope",
    "manualPage": 137,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 85,
    "q": "Which frequency band does an ILS localizer transmit?",
    "opts": [
      "SHF.",
      "UHF.",
      "VHF.",
      "HF."
    ],
    "a": 2,
    "deepExp": "El localizador ILS transmite en VHF, en 108–112 MHz, usando las frecuencias con primera cifra decimal impar. Su antena está alineada con la prolongación del eje de pista y proporciona guía lateral. Sección 5.1.2, p. 135. Fuente: TBATC_5 Navigation 4.1, p. 135.",
    "optionExp": [
      "NO — SHF está muy por encima de la banda 108–112 MHz.",
      "NO — UHF es la banda del glide slope, no la del localizador.",
      "CORRECTA — El localizer transmite en VHF y proporciona guía lateral.",
      "NO — HF no corresponde a las frecuencias VHF del localizador."
    ],
    "topic": "ILS: banda del localizador",
    "manualPage": 135,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 86,
    "q": "ILS glide-slope transmit two lobes which are:",
    "opts": [
      "On the same frequency and are separated by phase comparison.",
      "On different frequencies which are then phase compared.",
      "On different frequencies and have different modulations.",
      "On the same frequency and have different modulations."
    ],
    "a": 3,
    "deepExp": "La senda de planeo genera dos lóbulos verticales en una sola frecuencia ILS, pero con modulaciones diferentes: el lóbulo superior lleva 90 Hz y el inferior 150 Hz. La comparación de la profundidad de modulación permite determinar la posición respecto a la senda. Sección 5.1.2, pp. 137–138. Fuente: TBATC_5 Navigation 4.1, p. 138.",
    "optionExp": [
      "NO — No se separan por phase comparison: el criterio de guía es la diferencia de modulación de 90/150 Hz.",
      "NO — Los lóbulos no usan frecuencias distintas; se transmiten en la misma frecuencia del GP.",
      "NO — No basta decir frecuencias distintas y modulaciones distintas: la frecuencia es común a ambos lóbulos.",
      "CORRECTA — Ambos lóbulos usan la misma frecuencia, pero tienen modulaciones diferentes: 90 Hz arriba y 150 Hz abajo."
    ],
    "topic": "ILS: lóbulos y modulación del glide slope",
    "manualPage": 138,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 87,
    "q": "Which of the following elements of an ILS transmit in the VHF band?",
    "opts": [
      "Localiser only.",
      "Marker beacons only.",
      "Glide path and marker beacons.",
      "Localiser and marker beacons."
    ],
    "a": 3,
    "deepExp": "El localizador ILS está en VHF y los marcadores también son VHF; la senda de planeo está en UHF. Por ello, entre las opciones, los elementos que transmiten en VHF son localiser y marker beacons. Sección 5.1.2, pp. 135, 137 y 139. Fuente: TBATC_5 Navigation 4.1, p. 139.",
    "optionExp": [
      "NO — Localiser sí es VHF, pero la palabra “only” excluye a los marker beacons, que también son VHF.",
      "NO — Marker beacons son VHF, pero no son los únicos; el localizador también transmite en VHF.",
      "NO — Glide path transmite en UHF, aunque marker beacons sí sean VHF.",
      "CORRECTA — El localiser usa VHF y los marker beacons son marcadores VHF; el glide path usa UHF."
    ],
    "topic": "ILS: bandas de sus componentes",
    "manualPage": 139,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 88,
    "q": "A category III ILS facility may provide accurate guidance down to:",
    "opts": [
      "The surface of the runway.",
      "Not less than 100ft.",
      "Not less than 500ft.",
      "Not less than 200ft."
    ],
    "a": 0,
    "deepExp": "La categoría III permite guía hasta la superficie y contempla operaciones con alturas de decisión muy bajas o sin DH, según la subcategoría y certificación. En la tabla de mínimos del manual, CAT IIIA tiene DH menor de 100 ft y CAT IIIB/C puede llegar a no tener DH; la opción que expresa el límite general solicitado es the surface of the runway. Sección 5.1.2, p. 134.",
    "optionExp": [
      "CORRECTA — Un ILS CAT III puede proporcionar guía de precisión hasta la superficie de la pista, sujeto a la subcategoría, equipos y mínimos operacionales.",
      "NO — 100 ft es un umbral asociado a CAT II y a parte de la clasificación CAT III, no el límite de CAT III en general.",
      "NO — 500 ft está muy por encima de los mínimos de una aproximación de precisión CAT III.",
      "NO — 200 ft es el límite de decisión de CAT I, no la capacidad de CAT III."
    ],
    "topic": "ILS: categorías de precisión",
    "manualPage": 134,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 89,
    "q": "A category I ILS facility provides accurate guidance down to:",
    "opts": [
      "The surface of the runway.",
      "Less than 100ft.",
      "Less than 200ft.",
      "Not less than 200ft."
    ],
    "a": 3,
    "deepExp": "CAT I se define con una decision height no inferior a 200 ft. Por tanto, la guía precisa de una instalación CAT I llega hasta una altura de decisión de 200 ft, pero no por debajo de ella. Sección 5.1.2, p. 134. Fuente: TBATC_5 Navigation 4.1, p. 134.",
    "optionExp": [
      "NO — Llegar hasta la superficie corresponde a capacidades CAT III, no a CAT I.",
      "NO — Menos de 100 ft describe mínimos más bajos de CAT II/III, no CAT I.",
      "NO — Menos de 200 ft contradice la definición de CAT I, cuya DH no es inferior a 200 ft.",
      "CORRECTA — CAT I proporciona guía hasta una decision height no inferior a 200 ft."
    ],
    "topic": "ILS: mínimos de CAT I",
    "manualPage": 134,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 90,
    "q": "Which of the following is correct regarding false beams on a glide path?",
    "opts": [
      "False beams will only be found more than 10º to the left or to the right of the localiser centreline.",
      "False beams will only be found above the correct glide path.",
      "False beams are only present when flying a back-beam ILS.",
      "False beams will only be found below the correct glide path."
    ],
    "a": 1,
    "deepExp": "La senda de planeo produce, además de la senda nominal, cursos falsos en ángulos verticales superiores. El manual indica que aparecen en múltiplos por encima de la senda nominal y nunca por debajo; el primero suele estar aproximadamente a 9–12 grados. Sección 5.1.2, p. 141.",
    "optionExp": [
      "NO — False beams no están limitados a estar 10 grados a izquierda/derecha del eje del localizador; son cursos verticales adicionales del glide slope.",
      "CORRECTA — Los falsos haces aparecen únicamente por encima de la senda correcta, en ángulos verticales superiores.",
      "NO — No son exclusivos de un back-beam ILS; son cursos inherentes a las instalaciones de glide slope.",
      "NO — El manual afirma lo contrario: no aparecen por debajo de la senda verdadera."
    ],
    "topic": "ILS: false beams/courses del glide path",
    "manualPage": 141,
    "manualName": "TBATC_5 Navigation 4.1",
    "preserveOptions": true
  },
  {
    "navNo": 91,
    "q": "The ILS glide path transmitter is located:",
    "opts": [
      "No more than 600m from the localizer transmitter.",
      "About 150m upwind from the threshold and about 300m from the centre line of the runway.",
      "About 300m upwind from the threshold and about 200m from the runway edge abeam the touchdown point.",
      "As close to the runway threshold as possible without causing an obstruction to aircraft."
    ],
    "a": 2,
    "deepExp": "El transmisor de la senda de planeo (GP/GS) se instala aproximadamente a 300 m del umbral y a unos 200 m del borde de pista, a la altura del punto de toma de contacto. Esa disposición permite generar la guía vertical de la aproximación final; el localizador, en cambio, se sitúa en el extremo de salida opuesto. Manual, «ILS components», p. 137.",
    "optionExp": [
      "NO — La distancia de 600 m al transmisor del localizador no es el criterio de emplazamiento del GP. El localizador y el GP son componentes distintos y se ubican en posiciones diferentes respecto de la pista.",
      "NO — Esos 150 m y 300 m no corresponden al esquema descrito para el GP en el manual; confunden la ubicación del equipo con otras distancias de una instalación ILS.",
      "CORRECTA — El manual sitúa el GP aproximadamente 300 m del umbral y unos 200 m del borde de pista, abeam del punto de toma de contacto. Desde allí radiará la guía vertical de la senda de planeo, normalmente cercana a 3°.",
      "NO — El GP no se coloca simplemente lo más cerca posible del umbral. Debe respetarse su emplazamiento técnico junto a la zona del punto de toma de contacto para proporcionar una senda vertical adecuada y segura."
    ],
    "topic": "ILS: emplazamiento del glide path",
    "manualPage": 137,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 92,
    "q": "The coverage of the ILS localizer at 17NM for a CAT I ILS is guaranteed up to an angle either side of the extended centreline of:",
    "opts": [
      "35º.",
      "25º.",
      "15º.",
      "10º."
    ],
    "a": 0,
    "deepExp": "La cobertura del localizador CAT I indicada por el manual es de 17 NM entre 10° y 35° a cada lado de la prolongación del eje. Por eso, a 17 NM el límite angular garantizado que corresponde a la pregunta es 35°. Manual, «The Localiser coverage», p. 136.",
    "optionExp": [
      "CORRECTA — La tabla de cobertura del localizador establece 17 NM entre 10° y 35° desde la línea central prolongada; por tanto, el extremo garantizado a 17 NM es ±35°.",
      "NO — 25° no es el límite angular que acompaña a la distancia de 17 NM en la tabla del manual. El sector de ±25° no es la combinación publicada en este esquema.",
      "NO — 15° queda dentro del sector y no expresa el límite exterior garantizado a 17 NM. La tabla fija el intervalo exterior hasta 35°.",
      "NO — 10° es el límite del sector interior de mayor alcance: 25 NM dentro de ±10°. No es el ángulo que se pregunta para 17 NM."
    ],
    "topic": "ILS: cobertura del localizador",
    "manualPage": 136,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 93,
    "q": "If in an instrument departure procedure the track to be followed by the aeroplane is published, aircraft are expected:",
    "opts": [
      "To correct for known wind to remain within the protected airspace.",
      "To request from ATC different heading for wind correction.",
      "To ignore the wind and proceed on a heading equal to the track.",
      "To request clearance from ATC for applying a wind correction."
    ],
    "a": 0,
    "deepExp": "Cuando una salida instrumental publica una derrota, el diseño del espacio protegido se basa en que la aeronave mantenga esa derrota sobre el suelo. Por ello, el piloto debe corregir el rumbo para compensar la deriva causada por el viento; el manual, p. 150, dice expresamente que la derrota publicada es la que debe seguirse.",
    "optionExp": [
      "CORRECTA — La aeronave debe aplicar la corrección de viento necesaria para permanecer dentro del espacio aéreo protegido asociado a la derrota publicada. La derrota es la referencia de trayectoria sobre el terreno, no necesariamente el rumbo que se debe seleccionar.",
      "NO — ATC no necesita emitir un rumbo alternativo cada vez que haya viento. La corrección de deriva forma parte de la ejecución de la derrota publicada por el piloto.",
      "NO — Ignorar el viento haría que la aeronave derivase lateralmente y podría sacarla del espacio protegido. Igualar rumbo y derrota solo sería válido sin deriva, no como regla general.",
      "NO — No se requiere una autorización ATC específica para corregir el rumbo por viento dentro de una salida publicada. La corrección está implícita en la obligación de mantener la derrota."
    ],
    "topic": "Procedimientos de salida: derrota y viento",
    "manualPage": 150,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 94,
    "q": "What is the most important factor when designing an instrument departure procedure:",
    "opts": [
      "Navigation aids.",
      "Terrain.",
      "ATC requirements.",
      "Noise abatement considerations."
    ],
    "a": 1,
    "deepExp": "El factor primordial al diseñar una salida instrumental es asegurar la separación con los obstáculos durante el ascenso inicial en IMC. El manual señala que el terreno circundante dicta en general el diseño de las SID, aunque también pueden influir ATC, restricciones y ruido. Manual, pp. 148–149.",
    "optionExp": [
      "NO — Las ayudas a la navegación condicionan la ruta y sus medios de guía, pero no son el factor de seguridad principal: la prioridad de diseño es el franqueamiento de obstáculos.",
      "CORRECTA — El terreno es el factor más importante porque determina las superficies y el gradiente necesarios para garantizar el franqueamiento de obstáculos durante el ascenso inicial en IMC.",
      "NO — Los requisitos ATC pueden modificar la disposición de una SID, pero son una consideración adicional y no sustituyen al criterio primario de obstáculos.",
      "NO — La atenuación de ruido puede imponer rutas, gradientes o velocidades más restrictivos, pero el manual la trata como consideración complementaria frente al terreno y los obstáculos."
    ],
    "topic": "Procedimientos de salida: diseño y obstáculos",
    "manualPage": 148,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 95,
    "q": "Who is responsible for establishing contingency procedures for engine failure after take-off?",
    "opts": [
      "The pilot.",
      "The Operator.",
      "The Authority.",
      "ATC."
    ],
    "a": 1,
    "deepExp": "La SID se construye con el supuesto de ascenso con todos los motores operativos. Las contingencias para un fallo de motor o una emergencia después del despegue deben ser desarrolladas por el operador, no por ATC ni por el piloto como procedimiento publicado individual. Manual, «SID Climb Requirements & Contingency Procedures», p. 151.",
    "optionExp": [
      "NO — El piloto debe ejecutar la contingencia y comunicar sus intenciones, pero no es quien establece de forma organizativa el procedimiento de fallo de motor posterior al despegue.",
      "CORRECTA — El operador es responsable de desarrollar los procedimientos de contingencia para fallo de motor o emergencia después del despegue, porque la SID solo contempla el ascenso con todos los motores funcionando.",
      "NO — La autoridad puede imponer requisitos y aprobar el marco normativo, pero el manual atribuye al operador la elaboración de estas contingencias operativas.",
      "NO — ATC no dispone de esos procedimientos de contingencia ni los establece. Si la aeronave se desvía de la autorización por una emergencia, ATC debe ser informado tan pronto como sea razonable."
    ],
    "topic": "SID: contingencias por fallo de motor",
    "manualPage": 151,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 96,
    "q": "Standard Instrument Departures (SID) main objective is:",
    "opts": [
      "Only to separate departing traffic from arriving traffic, provide an efficient interception of the outbound track and avoid noise-sensitive areas.",
      "For noise abatement considerations.",
      "To provide obstacle clearance for aircraft departing under IMC.",
      "To separate landing traffic from taxiing traffic on ground, provide security measures in the apron and avoid collisions on ground."
    ],
    "a": 2,
    "deepExp": "El objetivo principal de una SID es proporcionar franqueamiento de obstáculos a las aeronaves que salen bajo IMC. Además, las salidas instrumentales facilitan la transición al tramo en ruta y pueden contribuir a separar tráficos o evitar zonas sensibles, pero esas funciones no desplazan el objetivo primordial de seguridad. Manual, p. 148.",
    "optionExp": [
      "NO — La separación de salidas y llegadas, la interceptación de la derrota y el ruido son beneficios o consideraciones posibles, pero esta opción reduce indebidamente el objetivo de la SID y lo presenta como «solo» esas funciones.",
      "NO — La atenuación del ruido puede influir en el diseño y justificar restricciones adicionales, pero no es el objetivo principal de una SID.",
      "CORRECTA — La SID asegura el franqueamiento de obstáculos durante el ascenso inicial en condiciones IMC y facilita la transición desde el despegue hacia la operación en ruta.",
      "NO — La separación en tierra, la seguridad del aparcamiento y la prevención de colisiones en plataforma pertenecen a la operación de superficie, no al objetivo de una salida instrumental."
    ],
    "topic": "SID: objetivo principal",
    "manualPage": 148,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 97,
    "q": "When aircraft are controlled, IFR flights are usually required to furnish position report over several reporting point so that ATC is also able to monitor aircraft navigation. How are compulsory reporting points represented on charts?",
    "opts": [
      "As open triangle figures.",
      "As open circle figures.",
      "As solid triangle figures.",
      "As open triangle figures."
    ],
    "a": 2,
    "deepExp": "Los puntos de notificación obligatoria se representan en las cartas como triángulos sólidos. En vuelos IFR controlados se exige normalmente informar sobre cada uno de ellos, con independencia de la altitud, para que ATC pueda seguir la navegación de la aeronave. Manual, p. 156.",
    "optionExp": [
      "NO — El triángulo abierto identifica un punto no obligatorio, sobre el que se informa solo cuando ATC lo solicita.",
      "NO — El círculo abierto no es el símbolo que el manual asigna a los puntos de notificación obligatoria en este banco.",
      "CORRECTA — El triángulo sólido representa un punto de notificación obligatoria; el informe de posición debe hacerse sobre cada uno de estos puntos de la ruta.",
      "NO — Esta opción repite el símbolo del triángulo abierto y, además, lo describe como «open». Ese símbolo corresponde a los puntos no obligatorios, no a los obligatorios."
    ],
    "topic": "Informes de posición: puntos obligatorios",
    "manualPage": 156,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 98,
    "q": "When aircraft are controlled, IFR flights are usually required to furnish position report over several reporting point so that ATC is also able to monitor aircraft navigation. How are non-compulsory reporting points (made only when requested by ATC) represented on charts?",
    "opts": [
      "As open triangle figures.",
      "As open circle figures.",
      "As solid triangle figures.",
      "As solid circle figures."
    ],
    "a": 0,
    "deepExp": "Los puntos de notificación no obligatoria se representan como triángulos abiertos. El informe sobre ellos no se realiza automáticamente: se efectúa únicamente cuando ATC lo solicita. Manual, p. 156.",
    "optionExp": [
      "CORRECTA — El triángulo abierto identifica un punto no obligatorio; el piloto solo presenta el informe de posición cuando lo pide ATC.",
      "NO — El círculo abierto no es la convención indicada aquí. La distinción relevante en el manual es triángulo sólido para obligatorio y triángulo abierto para no obligatorio.",
      "NO — El triángulo sólido significa punto de notificación obligatorio, sobre el que se informa aunque no medie una petición específica de ATC.",
      "NO — El círculo sólido no representa el punto no obligatorio descrito en la explicación del manual y no permite aplicar la regla publicada para estos informes."
    ],
    "topic": "Informes de posición: puntos no obligatorios",
    "manualPage": 156,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 99,
    "q": "How many separate segments has an instrument arrival and approach procedure?",
    "opts": [
      "3.",
      "Up to 5.",
      "4.",
      "2."
    ],
    "a": 1,
    "deepExp": "Un procedimiento instrumental de llegada y aproximación puede tener cinco segmentos separados: llegada, inicial, intermedio, final y aproximación frustrada. La lista incluye la fase de llegada y la frustrada además de los tres segmentos de aproximación propiamente dichos. Manual, p. 157.",
    "optionExp": [
      "NO — Tres son solo los segmentos de aproximación inicial, intermedio y final; la pregunta pide el procedimiento completo, que también puede incluir llegada y frustrada.",
      "CORRECTA — El manual enumera hasta cinco segmentos: arrival, initial, intermediate, final y missed approach. Por eso la respuesta correcta es «up to 5».",
      "NO — Cuatro omite uno de los cinco segmentos enumerados por el manual, normalmente la llegada o la aproximación frustrada.",
      "NO — Dos no refleja la estructura completa del procedimiento; ni la fase de llegada ni los tres segmentos de aproximación quedarían representados."
    ],
    "topic": "Procedimiento de llegada y aproximación: segmentos",
    "manualPage": 157,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 100,
    "q": "SID and STARs are produced and published in accordance with:",
    "opts": [
      "ICAO Doc 8168.",
      "ICAO Annex 11.",
      "ICAO Annex 4.",
      "All of the above."
    ],
    "a": 3,
    "deepExp": "Las rutas de salida y las SID se producen y publican conforme a ICAO Doc 8168, Anexo 11 y Anexo 4, en la sección AD del AIP; el manual da la misma referencia para las STAR en p. 159. Por tanto, las tres referencias de la opción conjunta son aplicables.",
    "optionExp": [
      "NO — Doc 8168 es una de las referencias correctas, pero no la única: la publicación también se realiza conforme a los Anexos 11 y 4.",
      "NO — El Anexo 11 forma parte del marco aplicable, pero por sí solo no agota las referencias citadas para SID y STAR.",
      "NO — El Anexo 4 regula la cartografía aeronáutica y es una referencia de publicación, pero tampoco es la única norma/documento citado.",
      "CORRECTA — La opción «All of the above» reúne Doc 8168, Anexo 11 y Anexo 4, que el manual identifica para producir y publicar las SID y las STAR en el AIP. Manual, pp. 152 y 159."
    ],
    "topic": "Publicación de SID y STAR",
    "manualPage": 152,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 101,
    "q": "The final approach segment is the phase in which:",
    "opts": [
      "Speed and configuration are adjusted to prepare the aircraft for landing.",
      "Configuration is adjusted to prepare the aircraft for landing.",
      "ATC will clear an aircraft to land.",
      "Alignment and final descent for landing is made."
    ],
    "a": 3,
    "deepExp": "El segmento final es la fase en la que se realizan la alineación con la pista y el descenso final para el aterrizaje. El ajuste de velocidad y configuración se atribuye al segmento intermedio, y una autorización de aterrizaje no define el segmento geométrico. Manual, p. 162.",
    "optionExp": [
      "NO — El ajuste de velocidad y configuración para preparar la final corresponde al segmento intermedio, no a la definición del segmento final.",
      "NO — Aunque la configuración puede continuar ajustándose, esta opción omite el elemento definitorio: la alineación y el descenso final hacia el aterrizaje.",
      "NO — ATC puede emitir una autorización de aterrizaje durante la aproximación, pero esa autorización no define qué fase es el segmento final.",
      "CORRECTA — En el segmento final se realiza la alineación y el descenso final para aterrizar, ya sea en una aproximación directa o como parte de la preparación de una maniobra de circling. Manual, p. 162."
    ],
    "topic": "Segmento de aproximación final",
    "manualPage": 162,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 102,
    "q": "The initial approach segment starts at the:",
    "opts": [
      "IF.",
      "IAF.",
      "FAF.",
      "FAP."
    ],
    "a": 1,
    "deepExp": "La aproximación inicial comienza en el Initial Approach Fix (IAF) y conduce hasta el Intermediate Fix (IF), salvo configuraciones en las que el segmento pueda terminar directamente en el FAF. El IAF es, por tanto, el punto de inicio normal. Manual, p. 158.",
    "optionExp": [
      "NO — El IF es normalmente el final del segmento inicial y el comienzo del segmento intermedio, no el inicio de la aproximación inicial.",
      "CORRECTA — El IAF es el punto de comienzo de la aproximación inicial según la tabla de segmentos del manual.",
      "NO — El FAF marca el inicio de la aproximación final en procedimientos no precisos, no el inicio de la fase inicial.",
      "NO — El FAP es el punto de aproximación final de un procedimiento de precisión; pertenece al final del procedimiento intermedio, no al inicio de la aproximación inicial."
    ],
    "topic": "Segmentos IAP: inicio de la aproximación inicial",
    "manualPage": 158,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 103,
    "q": "The final approach segment for a non-precision approach starts at the:",
    "opts": [
      "IF.",
      "IAF.",
      "FAF.",
      "FAP."
    ],
    "a": 2,
    "deepExp": "En una aproximación no precisa, el segmento final comienza en el FAF; si no existe FAF, comienza cuando la aeronave queda establecida en la derrota final de entrada. El FAP es la referencia equivalente usada para una aproximación de precisión. Manual, p. 158.",
    "optionExp": [
      "NO — El IF inicia el segmento intermedio y no el segmento final de una aproximación no precisa.",
      "NO — El IAF inicia el segmento inicial; no es el punto desde el que comienza normalmente la final.",
      "CORRECTA — El FAF inicia el segmento final de una aproximación no precisa. La tabla del manual añade la alternativa de estar establecido en la derrota final si no existe FAF.",
      "NO — El FAP se emplea para el comienzo de la final en una aproximación de precisión, donde existe guía vertical; no es la respuesta para la no precisa."
    ],
    "topic": "Aproximación no precisa: inicio del segmento final",
    "manualPage": 158,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 104,
    "q": "The final approach segment for a precision approach starts at the:",
    "opts": [
      "IF.",
      "IAF.",
      "FAF.",
      "FAP."
    ],
    "a": 3,
    "deepExp": "En una aproximación de precisión, el segmento final comienza en el Final Approach Point (FAP), punto desde el que se sigue la guía lateral y vertical hasta la DA(H). El FAF es la referencia típica de una aproximación no precisa. Manual, p. 158.",
    "optionExp": [
      "NO — El IF es el final del tramo inicial y el inicio del intermedio; todavía no comienza la final de precisión.",
      "NO — El IAF es la entrada al procedimiento inicial, demasiado pronto para definir el segmento final.",
      "NO — El FAF es la referencia del segmento final no preciso; la tabla del manual distingue expresamente el FAP para precisión.",
      "CORRECTA — El FAP es el punto de aproximación final en un procedimiento de precisión. Desde él se ejecutan la alineación y el descenso con la guía del sistema, normalmente hasta DA(H)."
    ],
    "topic": "Aproximación de precisión: inicio del segmento final",
    "manualPage": 158,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 105,
    "q": "If an aircraft loses the necessary visual reference while circling visual, it should:",
    "opts": [
      "Turn towards the airport maintaining the visual circling altitude/height.",
      "Start the missed approach procedure right away.",
      "Make an initial climbing turn towards the landing runway and when overhead the airport climb on the missed approach track.",
      "Climb straight ahead to MSA."
    ],
    "a": 2,
    "deepExp": "Si se pierde la referencia visual durante un circling, el procedimiento publicado de aproximación frustrada debe ejecutarse. El manual especifica que, en ese caso, se hace un viraje inicial ascendente hacia la pista de aterrizaje, se pasa sobre el aeródromo y después se intercepta la derrota de frustrada. Manual, p. 171.",
    "optionExp": [
      "NO — Mantener la altitud de circling y virar simplemente hacia el aeródromo no constituye la secuencia publicada de aproximación frustrada tras perder referencias.",
      "NO — Iniciar la frustrada es correcto como principio, pero esta opción no contiene la maniobra específica esperada durante el circling que el enunciado busca comprobar.",
      "CORRECTA — La maniobra comienza con un viraje ascendente hacia la pista de aterrizaje; después, sobre el aeródromo, se establece el ascenso por la derrota de aproximación frustrada.",
      "NO — Ascender directamente a la MSA no es la secuencia prescrita por el manual. La aeronave debe seguir la aproximación frustrada publicada y su protección asociada."
    ],
    "topic": "Circling: pérdida de referencias visuales",
    "manualPage": 171,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 106,
    "q": "A VOR approach is:",
    "opts": [
      "A precision approach.",
      "A non-precision approach.",
      "A straight-in approach.",
      "A circling approach."
    ],
    "a": 1,
    "deepExp": "Una aproximación VOR proporciona guía lateral basada en la radioayuda, pero no guía vertical de precisión hasta el punto de toma de contacto. Por ello se clasifica como aproximación no precisa y se vuela normalmente hasta la MDA/MAPt conforme al procedimiento. Manual, p. 165.",
    "optionExp": [
      "NO — Una aproximación de precisión exige guía lateral y vertical; el VOR, por sí solo, no proporciona la guía vertical requerida.",
      "CORRECTA — El VOR es una ayuda de guía lateral y su aproximación es no precisa, aunque la precisión lateral pueda ser buena.",
      "NO — «Straight-in» describe la relación de la derrota final con el eje de pista, no el tipo de guía instrumental. Una aproximación VOR puede ser directa o terminar en circling.",
      "NO — «Circling» describe la maniobra visual para alinearse con una pista no adecuada para straight-in, no la naturaleza básica de la ayuda VOR."
    ],
    "topic": "Tipos de aproximación: VOR",
    "manualPage": 165,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 107,
    "q": "A straight-in approach is considered acceptable as long as the angle between the final approach track and the runway centre line does not exceed:",
    "opts": [
      "10º for any aircraft category.",
      "15º for CAT A and B aircraft.",
      "30º for CAT A and B aircraft.",
      "45º for any aircraft category."
    ],
    "a": 2,
    "deepExp": "Una aproximación straight-in puede aceptarse cuando el ángulo entre la derrota final y el eje de pista no supera 30° para procedimientos restringidos a aeronaves de categorías A y B. Para otras categorías, el límite indicado es 15°. Manual, p. 166.",
    "optionExp": [
      "NO — 10° no es el límite general publicado para categorías A y B; el criterio específico para procedimientos restringidos a A y B es 30°.",
      "NO — 15° es el límite para otras categorías de aeronaves, no para el caso restringido a A y B que plantea esta opción.",
      "CORRECTA — El manual establece 30° para un procedimiento restringido a aeronaves CAT A y B. La distinción por categoría es esencial: 15° se aplica a las demás categorías.",
      "NO — 45° excede los límites de straight-in indicados por ICAO y no puede tratarse como aproximación directa conforme a esta clasificación."
    ],
    "topic": "Clasificación straight-in: ángulo final/pista",
    "manualPage": 166,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 108,
    "q": "When within the circling area, aircraft:",
    "opts": [
      "Must maintain the published DA for the procedure.",
      "Must maintain the published MDA for the procedure.",
      "May descend below the MDA as long as they keep visual contact with the terrain and runway.",
      "May descend below the DA as long as they keep visual contact with the terrain and runway."
    ],
    "a": 1,
    "deepExp": "Dentro del área de circling la aeronave debe mantener la MDA publicada hasta quedar establecida en el tramo final de la pista elegida. No debe descender por debajo de ella solo por mantener contacto visual; la DA pertenece a aproximaciones de precisión. Manual, p. 168.",
    "optionExp": [
      "NO — La DA se utiliza como referencia de decisión en una aproximación de precisión, no como mínimo publicado para la maniobra de circling.",
      "CORRECTA — Durante el circling se mantiene la MDA publicada hasta estar establecido en el tramo final de la pista de aterrizaje.",
      "NO — Mantener referencias visuales no autoriza a descender por debajo de la MDA antes de estar establecido en final; el manual exige mantenerla durante la maniobra.",
      "NO — La DA no es el mínimo aplicable al circling. Además, la opción propone un descenso por debajo de ella, que no sustituye el cumplimiento de la MDA publicada."
    ],
    "topic": "Circling: altitud mínima",
    "manualPage": 168,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 109,
    "q": "If visual reference is lost while circling to land from an instrument approach, it is expected that the pilot will make an initial climbing turn towards the:",
    "opts": [
      "Landing runway.",
      "MAPt.",
      "FAF.",
      "Final missed approach track."
    ],
    "a": 0,
    "deepExp": "Cuando se pierde la referencia visual durante el circling, el viraje inicial ascendente se dirige hacia la pista de aterrizaje. Una vez sobre el aeródromo, el piloto continúa ascendiendo por la derrota de aproximación frustrada publicada. Manual, p. 171.",
    "optionExp": [
      "CORRECTA — La primera orientación del viraje ascendente es hacia la pista de aterrizaje, antes de pasar sobre el aeródromo y establecerse en la derrota final de frustrada.",
      "NO — El MAPt es un punto de una aproximación no precisa; no es la dirección física hacia la que debe hacerse el viraje inicial durante el circling.",
      "NO — El FAF inicia la final no precisa y no define la maniobra de frustrada tras perder visual durante el circling.",
      "NO — La derrota final de frustrada se intercepta después del viraje hacia la pista y del paso sobre el aeródromo; no es el objetivo del viraje inicial."
    ],
    "topic": "Circling: viraje inicial tras pérdida visual",
    "manualPage": 171,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 110,
    "q": "Which are the phases of a missed approach procedure?",
    "opts": [
      "Arrival, intermediate and final.",
      "Arrival, initial, intermediate and final.",
      "Initial, intermediate and final.",
      "Initial and final."
    ],
    "a": 2,
    "deepExp": "La aproximación frustrada tiene tres fases: inicial, intermedia y final. Esta división describe la evolución de la maniobra desde el punto de frustrada, pasando por el tramo de transición, hasta el punto en que termina el procedimiento o se inicia otra operación. Manual, p. 171.",
    "optionExp": [
      "NO — Arrival es una fase del procedimiento de llegada y aproximación, no una de las tres fases de la aproximación frustrada.",
      "NO — La lista añade «arrival», que no pertenece a las fases de la frustrada. Las tres fases específicas son inicial, intermedia y final.",
      "CORRECTA — El manual enumera Initial Missed Approach, Intermediate Missed Approach y Final Missed Approach.",
      "NO — La opción omite la fase intermedia, que forma parte expresamente de la división de la aproximación frustrada."
    ],
    "topic": "Fases de aproximación frustrada",
    "manualPage": 171,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 111,
    "q": "In a precision approach (ILS), the final approach segment begins at the:",
    "opts": [
      "FAF.",
      "MAPt.",
      "FAP.",
      "IF."
    ],
    "a": 2,
    "deepExp": "En una aproximación de precisión ILS, el segmento final comienza en el FAP (Final Approach Point). El FAF se emplea para la final de una aproximación no precisa; el MAPt y la DA(H) son referencias posteriores de terminación/decisión. Manual, p. 158.",
    "optionExp": [
      "NO — El FAF es el punto de inicio de la final no precisa; en el ILS de precisión la tabla utiliza el FAP.",
      "NO — El MAPt es el punto de aproximación frustrada de una no precisa y no el comienzo de la final ILS.",
      "CORRECTA — El FAP es el punto donde empieza la final de precisión, desde el que se sigue la guía lateral y vertical del ILS hacia DA(H).",
      "NO — El IF inicia el segmento intermedio; todavía no es el punto de comienzo de la final de precisión."
    ],
    "topic": "ILS: inicio del segmento final de precisión",
    "manualPage": 158,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 112,
    "q": "For the following question use Annex 1 (Santiago ILS Z Rwy17 approach chart). What is the TWR frequency?",
    "opts": [
      "121,300",
      "120,200",
      "118,750",
      "121,700"
    ],
    "a": 2,
    "deepExp": "El PDF de manual suministrado no contiene una versión legible del Anexo 1/diagrama de Santiago: las páginas del anexo aparecen sin el gráfico extraído. Por tanto, no es posible verificar la frecuencia en el manual; se conserva la respuesta del banco y se explica únicamente con el valor observable en sus opciones, 118,750. Referencia: Anexo 1 ausente/no legible; manual, p. 215 (encabezado del anexo).",
    "optionExp": [
      "NO — 121,300 no es el valor que el banco marca para TWR en el Anexo 1. Al no estar visible el gráfico, no se puede atribuir esta frecuencia a otra dependencia sin inventar datos.",
      "NO — 120,200 tampoco coincide con la respuesta consignada en el banco. El PDF suministrado no permite comprobar visualmente si corresponde a otra frecuencia del procedimiento.",
      "CORRECTA — El banco identifica 118,750 como la frecuencia TWR. El Anexo 1 no es legible en el PDF disponible, así que esta explicación se limita al valor observable de la opción y no añade detalles no verificables.",
      "NO — 121,700 no es la opción marcada por el banco para TWR. Sin el gráfico legible no debe reinterpretarse su posible uso ni asignarse a una dependencia concreta."
    ],
    "topic": "Anexo 1: frecuencia TWR de Santiago ILS Z RWY 17",
    "manualPage": "Anexo 1 (carta del banco HTML; no reproducida en el PDF)",
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "sourceRef": "Anexo 1 · Santiago ILS Z Rwy17 approach chart (referencia del HTML; el gráfico no aparece en el PDF suministrado)",
    "preserveOptions": true
  },
  {
    "navNo": 113,
    "q": "For the following question use Annex 1 (Santiago ILS Z Rwy17 approach chart). Where is the IAF for this procedure?",
    "opts": [
      "STG VOR/DME",
      "10.0 DME from STG VOR",
      "STG NDB",
      "8.0 DME from STG NDB"
    ],
    "a": 0,
    "deepExp": "El Anexo 1/diagrama de Santiago no está incluido de forma legible en el PDF suministrado. La explicación solo puede conservar el dato observable del banco: la respuesta es STG VOR/DME; no se inventa una posición, radial o distancia adicional que no aparezca en el HTML o en una imagen legible.",
    "optionExp": [
      "CORRECTA — El banco señala STG VOR/DME como el IAF. Al faltar el gráfico legible, solo puede afirmarse ese identificador observable, sin reconstruir la geometría del procedimiento.",
      "NO — 10.0 DME from STG VOR es una distancia que no es la respuesta consignada para el IAF en el banco; tampoco puede confirmarse su papel sin el diagrama.",
      "NO — STG NDB es una radioayuda distinta de STG VOR/DME y no coincide con la respuesta almacenada para el IAF.",
      "NO — 8.0 DME from STG NDB combina una distancia y una radioayuda que no son el dato marcado por el banco. El anexo no permite verificar más detalles."
    ],
    "topic": "Anexo 1: IAF del ILS Z RWY 17",
    "manualPage": "Anexo 1 (carta del banco HTML; no reproducida en el PDF)",
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "sourceRef": "Anexo 1 · Santiago ILS Z Rwy17 approach chart (referencia del HTML; el gráfico no aparece en el PDF suministrado)",
    "preserveOptions": true
  },
  {
    "navNo": 114,
    "q": "For the following question use Annex 1 (Santiago ILS Z Rwy17 approach chart). What is the DA for a CAT I ILS approach and a CAT C aircraft?",
    "opts": [
      "1,394ft.",
      "163ft.",
      "1,425ft.",
      "1,414ft."
    ],
    "a": 3,
    "deepExp": "El PDF suministrado no permite leer el gráfico del Anexo 1 de Santiago. La respuesta se conserva literalmente del banco: 1,414 ft; no se reconstruyen elevación, altura de umbral ni otros valores del procedimiento porque no son observables en el material disponible.",
    "optionExp": [
      "NO — 1,394 ft no es el valor marcado por el banco para la DA CAT I/CAT C. Sin el gráfico legible no puede asignarse ese número a otra mínima.",
      "NO — 163 ft aparece como opción de altura/valor pequeño, pero no es la DA que el banco señala para CAT I con aeronave CAT C.",
      "NO — 1,425 ft tampoco coincide con la respuesta almacenada. El PDF no permite verificar si es otra categoría o una altitud distinta.",
      "CORRECTA — El banco marca 1,414 ft como DA para CAT I ILS y aeronave CAT C. El Anexo 1 no es legible en el PDF, por lo que no se añaden cálculos ni datos gráficos no observables."
    ],
    "topic": "Anexo 1: DA CAT I ILS para CAT C",
    "manualPage": "Anexo 1 (carta del banco HTML; no reproducida en el PDF)",
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "sourceRef": "Anexo 1 · Santiago ILS Z Rwy17 approach chart (referencia del HTML; el gráfico no aparece en el PDF suministrado)",
    "preserveOptions": true
  },
  {
    "navNo": 115,
    "q": "For the following question use Annex 1 (Santiago ILS Z Rwy17 approach chart). What is the DH for a CAT II ILS approach and a CAT C aircraft?",
    "opts": [
      "1,394ft.",
      "163ft.",
      "1,425ft.",
      "1,414ft."
    ],
    "a": 1,
    "deepExp": "El diagrama del Anexo 1 no está disponible de forma legible en el PDF fuente. Se conserva el valor observable y la respuesta del banco, 163 ft, como DH CAT II para CAT C, sin inferir la altitud de decisión ni otros mínimos no visibles.",
    "optionExp": [
      "NO — 1,394 ft es una altitud absoluta mucho mayor y no es el valor que el banco marca como DH CAT II/CAT C.",
      "CORRECTA — El banco señala 163 ft como DH para CAT II ILS y aeronave CAT C. Dado que el gráfico del Anexo 1 no se puede leer, la explicación se limita a ese dato observable.",
      "NO — 1,425 ft no coincide con la opción marcada para la DH solicitada; el anexo ilegible impide determinar qué otra magnitud representa.",
      "NO — 1,414 ft es el valor que el banco asocia a otra pregunta (DA CAT I/CAT C), no la DH CAT II solicitada."
    ],
    "topic": "Anexo 1: DH CAT II ILS para CAT C",
    "manualPage": "Anexo 1 (carta del banco HTML; no reproducida en el PDF)",
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "sourceRef": "Anexo 1 · Santiago ILS Z Rwy17 approach chart (referencia del HTML; el gráfico no aparece en el PDF suministrado)",
    "preserveOptions": true
  },
  {
    "navNo": 116,
    "q": "For the following question use Annex 1 (Santiago ILS Z Rwy17 approach chart). What is the minimum missed approach climb gradient DA for a CAT II ILS approach with a DH of 131ft and a CAT B aircraft?",
    "opts": [
      "2.5%.",
      "4%.",
      "3.3%.",
      "5.2%."
    ],
    "a": 1,
    "deepExp": "El Anexo 1/diagrama de Santiago no es legible en el PDF suministrado. La respuesta del banco es 4%; se explica únicamente a partir de ese valor observable y del propio enunciado (CAT II, DH 131 ft, CAT B), sin inventar una tabla o cálculo adicional.",
    "optionExp": [
      "NO — 2,5% es el gradiente estándar que puede aparecer como referencia general, pero no es el valor marcado por el banco para el supuesto CAT II indicado.",
      "CORRECTA — El banco señala 4% como gradiente mínimo de ascenso de frustrada para el supuesto descrito. Al no poder leerse el Anexo 1, no se añaden razones numéricas no verificables.",
      "NO — 3,3% es un gradiente de diseño que el manual menciona para salidas con todos los motores, no el valor observable marcado aquí para esta frustrada CAT II.",
      "NO — 5,2% no es el valor consignado por el banco. El PDF no permite identificar a qué otra condición podría corresponder."
    ],
    "topic": "Anexo 1: gradiente mínimo de frustrada CAT II",
    "manualPage": "Anexo 1 (carta del banco HTML; no reproducida en el PDF)",
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "sourceRef": "Anexo 1 · Santiago ILS Z Rwy17 approach chart (referencia del HTML; el gráfico no aparece en el PDF suministrado)",
    "preserveOptions": true
  },
  {
    "navNo": 117,
    "q": "For the following question use Annex 1 (Santiago ILS Z Rwy17 approach chart). Where is the FAP established?",
    "opts": [
      "Overhead STG VOR/DME",
      "At 10.0 DME from STG VOR/DME.",
      "At 5.8 DME from the ILS.",
      "At 5.8 DME from STG VOR"
    ],
    "a": 2,
    "deepExp": "El gráfico del Anexo 1 de Santiago no aparece de forma legible en el PDF fuente. Se conserva la respuesta observable del banco, 5.8 DME from the ILS, sin inventar la relación exacta con STG VOR ni otros puntos del procedimiento.",
    "optionExp": [
      "NO — «Overhead STG VOR/DME» describe una posición distinta y no es la respuesta marcada para el FAP en el banco.",
      "NO — 10.0 DME from STG VOR/DME no coincide con el valor que el banco consigna para el FAP.",
      "CORRECTA — El banco indica que el FAP está a 5.8 DME del ILS. Como el Anexo 1 no es legible, esta explicación se limita exactamente a ese valor observable.",
      "NO — 5.8 DME from STG VOR cambia la referencia de la medición: el banco especifica que la distancia se toma desde el ILS, no desde STG VOR."
    ],
    "topic": "Anexo 1: ubicación del FAP",
    "manualPage": "Anexo 1 (carta del banco HTML; no reproducida en el PDF)",
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "sourceRef": "Anexo 1 · Santiago ILS Z Rwy17 approach chart (referencia del HTML; el gráfico no aparece en el PDF suministrado)",
    "preserveOptions": true
  },
  {
    "navNo": 118,
    "q": "Regarding INS/IRS select the true statement:",
    "opts": [
      "INS/IRS are completely self contained navigation systems.",
      "INS/IRS provide very accurate navigation using the GPS.",
      "INS/IRS precision is affected by quadrantal errors.",
      "INS/IRS precision is affected by coastal errors."
    ],
    "a": 0,
    "deepExp": "El INS/IRS es un sistema autocontenido: calcula la navegación con acelerómetros, giróscopos, integradores y ordenador, sin depender de transmisiones externas de tierra o del espacio. El manual lo describe como independiente y pasivo, aunque una posición pueda actualizarse posteriormente con otro sistema. Manual, p. 144.",
    "optionExp": [
      "CORRECTA — INS/IRS son sistemas de navegación autocontenidos; pueden proporcionar información sin recurrir a fuentes externas de transmisión. Esa independencia es precisamente su característica fundamental.",
      "NO — El INS/IRS moderno puede integrarse o actualizarse con GPS, pero su principio y clasificación como autocontenido no dependen del GPS.",
      "NO — Los errores cuadrantales son propios de ciertos efectos de antena/propagación de radioayudas, no el error característico del sistema inercial.",
      "NO — Los errores costeros se asocian a propagación de radio, especialmente en ayudas como NDB; no describen la precisión básica del INS/IRS."
    ],
    "topic": "INS/IRS: navegación autónoma",
    "manualPage": 144,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 119,
    "q": "One of the benefits of RNAV techniques is:",
    "opts": [
      "To increase controller instructions for safety reasons.",
      "The establishment of more direct routes, which allow reducing flight distances, saving time and fuel.",
      "To increase de number of ground navigation facilities.",
      "To reduce airspace/runway capacity through the use of defined paths."
    ],
    "a": 1,
    "deepExp": "RNAV permite volar trayectorias punto a punto y más directas sin sobrevolar necesariamente radioayudas terrestres. El resultado puede ser menor distancia, tiempo y consumo de combustible, además de un uso más flexible del espacio aéreo. Manual, pp. 180–181.",
    "optionExp": [
      "NO — RNAV busca reducir, no aumentar, las instrucciones del controlador mediante trayectorias definidas y mayor predictibilidad, aunque ATC siga prestando el servicio correspondiente.",
      "CORRECTA — Las rutas más directas reducen la distancia volada y, con ello, pueden ahorrar tiempo y combustible; es un beneficio expresamente enumerado por el manual.",
      "NO — Una ventaja de RNAV es precisamente reducir la dependencia y el número de instalaciones terrestres, no aumentar las radioayudas necesarias.",
      "NO — RNAV aumenta la capacidad mediante trayectorias definidas y un uso más eficiente del espacio aéreo; no pretende reducir la capacidad de rutas o pistas."
    ],
    "topic": "RNAV: beneficios operacionales",
    "manualPage": 180,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 120,
    "q": "Which of the following system is not used to determine an RNAV position?",
    "opts": [
      "NDB.",
      "DME.",
      "INS/IRS.",
      "GPS."
    ],
    "a": 0,
    "deepExp": "El manual enumera GNSS/GPS, IRS y DME o VOR entre las fuentes que pueden combinarse para estimar la posición RNAV. Por ello, de las opciones ofrecidas, NDB es la que no aparece como sistema utilizado para determinar esa posición en este esquema. Manual, p. 180.",
    "optionExp": [
      "CORRECTA — NDB no figura entre las entradas de posición RNAV enumeradas por el manual para este banco; las fuentes indicadas son GNSS, IRS, DME y VOR.",
      "NO — DME sí puede proporcionar información de distancia para que el sistema estime la posición, solo o combinado con otra fuente.",
      "NO — INS/IRS es una fuente de posición explícitamente incluida entre los sensores RNAV.",
      "NO — GPS, como parte de GNSS, es una fuente espacial de posición utilizada por los sistemas RNAV."
    ],
    "topic": "RNAV: sensores de posición",
    "manualPage": 180,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 121,
    "q": "The Basic Area Navigation provides:",
    "opts": [
      "Precision in the horizontal plane and in the determination of the longitudinal position (±5NM).",
      "Precision in the vertical plane and in the determination of the longitudinal position (±5NM).",
      "Precision in the horizontal plane and in the determination of the longitudinal position (±1NM).",
      "Precision in the vertical plane and in the determination of the longitudinal position (±1NM)."
    ],
    "a": 0,
    "deepExp": "La Basic Area Navigation del banco corresponde a B-RNAV, hoy identificado en el manual como RNAV 5 para operaciones en ruta. Su requisito es precisión lateral de ±5 NM, alcanzada al menos durante el 95% del tiempo de vuelo; es una prestación horizontal, no vertical. Manual, p. 188.",
    "optionExp": [
      "CORRECTA — B-RNAV/RNAV 5 proporciona precisión en el plano horizontal y una exactitud lateral de aproximadamente ±5 NM. El requisito se expresa para al menos el 95% del tiempo, no como guía vertical.",
      "NO — La navegación descrita no es precisión vertical: B-RNAV/RNAV 5 controla la posición lateral respecto de la derrota.",
      "NO — ±1 NM corresponde a una especificación más precisa, como RNAV 1/P-RNAV, no a B-RNAV/RNAV 5.",
      "NO — La opción mezcla el plano vertical con el valor ±1 NM; ninguno de los dos elementos representa B-RNAV/RNAV 5."
    ],
    "topic": "B-RNAV/RNAV 5: precisión lateral",
    "manualPage": 188,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 122,
    "q": "The Precision Area Navigation provides:",
    "opts": [
      "Precision in the horizontal plane and in the determination of the longitudinal position (±5NM).",
      "Precision in the vertical plane and in the determination of the longitudinal position (±5NM).",
      "Precision in the horizontal plane and in the determination of the longitudinal position (±1NM).",
      "Precision in the vertical plane and in the determination of the longitudinal position (±1NM)."
    ],
    "a": 2,
    "deepExp": "La Precision Area Navigation del banco corresponde a P-RNAV y a la aplicación RNAV 1 en el marco actualizado. Su precisión lateral es ±1 NM, frente a ±5 NM de B-RNAV/RNAV 5; ambas son prestaciones horizontales, no verticales. Manual, p. 189.",
    "optionExp": [
      "NO — ±5 NM es el valor de B-RNAV/RNAV 5 en ruta, no el de Precision Area Navigation/RNAV 1.",
      "NO — La especificación se refiere a exactitud lateral, no a precisión en el plano vertical.",
      "CORRECTA — P-RNAV/RNAV 1 exige una precisión lateral de ±1 NM. El manual distingue este valor del ±5 NM de RNAV 5 y lo vincula a operaciones terminales.",
      "NO — Aunque contiene ±1 NM, la opción cambia indebidamente la dimensión a vertical; la precisión pedida es horizontal."
    ],
    "topic": "P-RNAV/RNAV 1: precisión lateral",
    "manualPage": 189,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 123,
    "q": "Basic RNAV requires a track-keeping accuracy of:",
    "opts": [
      "±5NM or better for 95% of the flight time.",
      "±3NM or better for 90% of the flight time.",
      "±2NM or better for 75% of the flight time.",
      "±5NM or better throughout the flight."
    ],
    "a": 0,
    "deepExp": "RNAV 5, denominación actual de B-RNAV en el manual, requiere mantener la derrota con una precisión de ±5 NM o mejor durante al menos el 95% del tiempo de vuelo. El porcentaje es importante: no significa que el sistema nunca pueda superar el límite. Manual, p. 188.",
    "optionExp": [
      "CORRECTA — La especificación RNAV 5 se expresa como ±5 NM o mejor durante el 95% del tiempo de vuelo, que es la definición de exactitud lateral utilizada por PBN.",
      "NO — ±3 NM y 90% no son los valores publicados para RNAV 5; confunden la especificación con otra posible tolerancia operacional.",
      "NO — ±2 NM durante 75% no corresponde a RNAV 5 y además usaría un porcentaje distinto del criterio del 95%.",
      "NO — «Throughout the flight» exige el cumplimiento continuo al 100%, mientras que la especificación se define estadísticamente para al menos 95% del tiempo."
    ],
    "topic": "RNAV 5: exactitud de mantenimiento de derrota",
    "manualPage": 188,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 124,
    "q": "Precision RNAV requires a track-keeping accuracy of:",
    "opts": [
      "±105NM or better for 95% of the flight time.",
      "±1NM or better for 95% of the flight time.",
      "±5NM or better for 95% of the flight time.",
      "±5NM or better throughout the flight."
    ],
    "a": 1,
    "deepExp": "La Precision RNAV del banco corresponde a RNAV 1 para operaciones terminales y requiere una exactitud lateral de ±1 NM durante al menos el 95% del tiempo de vuelo. No se exige que el límite se cumpla literalmente en cada segundo. Manual, p. 190.",
    "optionExp": [
      "NO — «±105 NM» no es una magnitud válida para esta especificación; es una cifra evidentemente incompatible con RNAV 1.",
      "CORRECTA — RNAV 1/P-RNAV requiere ±1 NM o mejor durante al menos el 95% del tiempo de vuelo, según la precisión lateral de la especificación.",
      "NO — ±5 NM es el valor de RNAV 5/B-RNAV en ruta, menos exigente que RNAV 1.",
      "NO — «Throughout the flight» convertiría el criterio estadístico del 95% en una exigencia continua del 100%, que no es la formulación PBN."
    ],
    "topic": "RNAV 1: exactitud de mantenimiento de derrota",
    "manualPage": 190,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 125,
    "q": "In relation to Area Navigation System (RNAV), which of the following is not a data input?",
    "opts": [
      "True airspeed.",
      "VOR/DME radia/distance.",
      "INS position.",
      "GPS position."
    ],
    "a": 0,
    "deepExp": "Entre las entradas que pueden alimentar un sistema RNAV están VOR/DME, DME/DME, INS/IRS y GNSS. La velocidad verdadera puede participar en cálculos de navegación o predicción, pero no es una fuente de posición enumerada como sensor de entrada en este contexto. Manual, p. 208.",
    "optionExp": [
      "CORRECTA — True airspeed no es una entrada de posición del conjunto de sensores RNAV que enumera el manual. La posición se obtiene de radioayudas, inercial o GNSS.",
      "NO — La radial y distancia VOR/DME proporcionan referencias de posición utilizables por RNAV.",
      "NO — La posición INS es una entrada válida; el manual incluye INS/IRS entre los sensores de posición de RNAV 5.",
      "NO — La posición GPS/GNSS es una entrada válida y es una de las fuentes principales de posicionamiento RNAV."
    ],
    "topic": "RNAV: entradas de datos",
    "manualPage": 208,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 126,
    "q": "The required accuracy of a precision RNAV system is:",
    "opts": [
      "0.25NM standard deviation or better.",
      "0.5NM standard deviation or better.",
      "1NM standard deviation or better.",
      "1.5NM standard deviation or better."
    ],
    "a": 2,
    "deepExp": "La respuesta del banco es 1 NM de desviación estándar o mejor para Precision RNAV. Debe distinguirse esta tolerancia de ±5 NM de RNAV 5; ambas expresan requisitos laterales de navegación, pero el valor de precisión RNAV es más exigente. Manual, p. 190.",
    "optionExp": [
      "NO — 0,25 NM sería una exigencia más estricta que la indicada en el banco y no es el valor de esta especificación.",
      "NO — 0,5 NM tampoco es el valor consignado para la precisión RNAV de esta pregunta.",
      "CORRECTA — El banco establece una desviación estándar de 1 NM o mejor. Es coherente con la distinción entre la precisión RNAV terminal y el requisito menos preciso de RNAV 5.",
      "NO — 1,5 NM sería menos preciso que el límite de 1 NM y no satisface la exactitud requerida."
    ],
    "topic": "RNAV de precisión: desviación estándar",
    "manualPage": 190,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 127,
    "q": "In relation to Basic Area Navigation (B-RNAV), select the FALSE statement.",
    "opts": [
      "B-RNAV was the forerunner of the RNAV programme.",
      "B-RNAV became mandatory in ECAC airspace on the entire route network above FL95.",
      "B-RNAV applies to all IFR flights.",
      "B-RNAV is not suitable for departure or arrival procedures."
    ],
    "a": 2,
    "deepExp": "La afirmación falsa es que B-RNAV se aplica a todos los vuelos IFR. El manual identifica B-RNAV como RNAV 5, destinado a la fase en ruta, y explica que no es adecuado para procedimientos de salida o llegada terminales; RNAV 1 cubre esas aplicaciones. Manual, p. 188.",
    "optionExp": [
      "NO — Es verdadera como antecedente: B-RNAV fue la primera aplicación europea de navegación de área y el precedente de la evolución hacia RNAV 5.",
      "NO — El banco la trata como verdadera en su contexto ECAC: B-RNAV fue mandatado para la red en ruta europea por encima de FL95.",
      "CORRECTA — Es falsa porque B-RNAV/RNAV 5 no se aplica indiscriminadamente a todos los vuelos IFR; es una especificación para operaciones en ruta y depende de que la operación y el espacio aéreo la requieran.",
      "NO — Es verdadera en el sentido del banco: B-RNAV/RNAV 5 es para en ruta, mientras que las operaciones terminales de salidas y llegadas se asocian a RNAV 1/P-RNAV."
    ],
    "topic": "B-RNAV: alcance y limitaciones",
    "manualPage": 188,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 128,
    "q": "Regarding RNAV and RNP navigation specifications, select the true statement.",
    "opts": [
      "RNP specifications do not include a requirement for on board performance monitoring and alerting system.",
      "RNAV specification include a requirement for on-board performance monitoring and alert.",
      "RNP specification include a requirement for on-board performance monitoring and alert.",
      "None of the above is correct."
    ],
    "a": 2,
    "deepExp": "La diferencia esencial es que una especificación RNP incluye monitorización a bordo del rendimiento y alerta cuando no se cumple, mientras que una especificación RNAV no incluye ese requisito. El manual lo afirma expresamente en p. 182 y vuelve a recogerlo en pp. 196 y 202.",
    "optionExp": [
      "NO — Es lo contrario de la definición PBN: RNP sí incluye monitorización y alerta del rendimiento a bordo.",
      "NO — RNAV no incluye como requisito la monitorización y alerta a bordo; esa es la diferencia frente a RNP.",
      "CORRECTA — RNP incluye el requisito de monitorización del rendimiento y alerta a bordo; esta capacidad permite advertir al piloto si no se alcanza la prestación requerida.",
      "NO — Sí existe una afirmación correcta: la opción sobre RNP es la que describe la distinción fundamental del concepto PBN."
    ],
    "topic": "PBN: diferencia RNAV/RNP",
    "manualPage": 182,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 129,
    "q": "In relation to the PBN concept:",
    "opts": [
      "The RNAV system and installation on the aircraft must be approved to meet the performance requirements.",
      "Air crew must satisfy the operating requirements set out by the regulator for RNAV operations.",
      "The ATS provider must guarantee an available navaid infrastructure with the desired performance requirements",
      "All of the above are correct."
    ],
    "a": 3,
    "deepExp": "El concepto PBN distribuye requisitos entre la aprobación del sistema/instalación, la tripulación y el proveedor de servicios: el equipo debe cumplir la especificación, la tripulación los requisitos operativos y la infraestructura debe soportar la operación. Por eso las tres primeras afirmaciones son correctas y la respuesta es «All of the above». Manual, pp. 196 y 204.",
    "optionExp": [
      "NO — La aprobación del sistema RNAV y de su instalación para cumplir el rendimiento requerido es una exigencia real del concepto PBN.",
      "NO — La tripulación debe satisfacer los requisitos operativos establecidos por el regulador para realizar operaciones RNAV/PBN.",
      "NO — El proveedor ATS/ANSP debe asegurar o evaluar que la infraestructura de radioayudas disponible soporta el rendimiento de la operación propuesta.",
      "CORRECTA — Las tres afirmaciones anteriores describen responsabilidades complementarias de equipo, tripulación y proveedor/infraestructura; por ello todas son correctas."
    ],
    "topic": "PBN: responsabilidades de los actores",
    "manualPage": 196,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 130,
    "q": "Fix RNAV routes are ATS:",
    "opts": [
      "Permanent and published routes.",
      "Eventual and published routes.",
      "Permanent and non-published routes.",
      "Eventual and non-published routes."
    ],
    "a": 0,
    "deepExp": "Las fix RNAV routes son rutas ATS permanentes y publicadas que pueden planificarse para aeronaves con capacidad RNAV. Se distinguen de las rutas contingentes, que se publican para periodos limitados, y de las random, que no son rutas publicadas. Manual, p. 192.",
    "optionExp": [
      "CORRECTA — Una fix RNAV route es permanente y publicada; el manual la define así en la sección de técnicas RNAV.",
      "NO — «Eventual» o temporal describe mejor una ruta contingent RNAV, no una ruta fija.",
      "NO — Una ruta fija RNAV sí se publica; lo no publicado caracteriza a las random RNAV.",
      "NO — Eventual y no publicada combina las características de una ruta random o contingente, no de una fix RNAV route."
    ],
    "topic": "Aplicaciones RNAV: rutas fijas",
    "manualPage": 192,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 131,
    "q": "According to Annex 4 what is the meaning of the following sign:",
    "opts": [
      "A DME station.",
      "A VOR/DME station.",
      "A VOR station.",
      "A TACAN station."
    ],
    "a": 2,
    "deepExp": "La imagen del signo mencionado en la pregunta no está extraída de forma legible en el texto suministrado: el Anexo 4 aparece como páginas gráficas sin contenido textual. Se conserva la respuesta del banco, VOR station, y se evita describir rasgos gráficos que no pueden verificarse. Referencia: «Attachment 1: ICAO Annex 4 Simbology», p. 215.",
    "optionExp": [
      "NO — El símbolo de una estación DME no es la identificación que el banco asigna al signo mostrado; además, la imagen no está disponible para comprobar su geometría.",
      "NO — VOR/DME representaría una instalación combinada, distinta de la respuesta VOR station consignada por el banco.",
      "CORRECTA — El banco identifica el signo como una estación VOR. El gráfico del Anexo 4 no es legible en el texto proporcionado, por lo que no se inventa una descripción visual adicional.",
      "NO — TACAN es una ayuda militar distinta; no coincide con la identificación VOR indicada en la respuesta del banco."
    ],
    "topic": "Simbología ICAO Anexo 4: VOR",
    "manualPage": 215,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true,
    "sourceRef": "Anexo 4 · símbolo gráfico (referencia del HTML; el gráfico no aparece en el PDF suministrado)"
  },
  {
    "navNo": 132,
    "q": "On a SID you see the following depicted next to a waypoint. What does it mean according to ICAO Annex 4?",
    "opts": [
      "Aircraft must cross that waypoint at a mandatory altitude of 7,000ft .",
      "Aircraft must cross that waypoint at or above 7,000ft altitude.",
      "Aircraft must cross that waypoint at or below 7,000ft altitude.",
      "Aircraft must cross that waypoint at a recommended altitude of 7,000ft."
    ],
    "a": 1,
    "deepExp": "La imagen concreta junto al waypoint no está disponible de forma legible en el material extraído. Conforme a la respuesta del banco, la indicación significa que la aeronave debe cruzar el punto a 7.000 ft o por encima; no se interpreta como una altitud exactamente obligatoria ni como un límite inferior. Manual, p. 215.",
    "optionExp": [
      "NO — «At a mandatory altitude» exigiría exactamente 7.000 ft. La respuesta del banco distingue esa lectura de una restricción «at or above».",
      "CORRECTA — La indicación se interpreta, según el banco, como cruzar el waypoint a 7.000 ft o por encima. Es una restricción de altitud mínima, no una cifra exacta.",
      "NO — «At or below» impondría un techo de 7.000 ft, que es la relación inversa de la respuesta consignada.",
      "NO — «Recommended» sería una recomendación no obligatoria; la indicación del banco es una restricción operacional de mínimo («at or above»)."
    ],
    "topic": "Simbología ICAO Anexo 4: restricción de altitud superior",
    "manualPage": 215,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true,
    "sourceRef": "Anexo 4 · símbolo gráfico (referencia del HTML; el gráfico no aparece en el PDF suministrado)"
  },
  {
    "navNo": 133,
    "q": "On a STAR you see the following depicted next to a waypoint. What does it mean according to ICAO Annex 4?",
    "opts": [
      "Aircraft must cross that waypoint at a mandatory altitude of 3,000ft.",
      "Aircraft must cross that waypoint at or above 3,000ft altitude.",
      "Aircraft must cross that waypoint at or below 3,000ft altitude.",
      "Aircraft must cross that waypoint at a recommended altitude of 3,000ft."
    ],
    "a": 0,
    "deepExp": "El gráfico específico de la pregunta no está legible en el texto suministrado. Se conserva la respuesta del banco: el waypoint debe cruzarse a una altitud obligatoria de 3.000 ft. No se atribuyen al signo detalles visuales que no pueden observarse en el Anexo 4 extraído. Manual, p. 215.",
    "optionExp": [
      "CORRECTA — Según la respuesta del banco, la indicación junto al waypoint exige cruzarlo a la altitud obligatoria de 3.000 ft, no simplemente recomendarla.",
      "NO — «At or above» permitiría cualquier altitud igual o superior a 3.000 ft; no expresa la condición exacta que el banco atribuye al signo.",
      "NO — «At or below» establece un máximo, contrario a la interpretación marcada para esta representación.",
      "NO — Una altitud recomendada no tendría carácter obligatorio; el banco identifica una obligación de cruce a 3.000 ft."
    ],
    "topic": "Simbología ICAO Anexo 4: altitud obligatoria",
    "manualPage": 215,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true,
    "sourceRef": "Anexo 4 · símbolo gráfico (referencia del HTML; el gráfico no aparece en el PDF suministrado)"
  },
  {
    "navNo": 134,
    "q": "Select the true statement regarding VOR transmissions.",
    "opts": [
      "The published DOC is not applicable at night.",
      "The VOR generates 360 `radials´ aligned with the true North.",
      "DVOR is a co-located VOR and DME station.",
      "The VOR signal follows an omni-directional radiation pattern which is not usable over the station."
    ],
    "a": 3,
    "deepExp": "El VOR transmite una señal omnidireccional y no es utilizable directamente sobre la estación, donde aparece el cono de silencio/confusión. Sus radiales están referidos al norte magnético local, la DOC es válida de día y de noche, y un DVOR es un tipo de VOR, no necesariamente una instalación VOR/DME. Manual, pp. 113 y 120.",
    "optionExp": [
      "NO — La DOC publicada del VOR se aplica tanto de día como de noche; el manual contrasta esta característica con el NDB, cuyas ondas de cielo sí pueden causar problemas nocturnos.",
      "NO — Los 360 radiales del VOR están alineados respecto del norte magnético en la ubicación del VOR, no del norte verdadero.",
      "NO — DVOR significa Doppler VOR, una tecnología de VOR; VOR/DME es la instalación combinada que el manual identifica por separado.",
      "CORRECTA — La radiación del VOR es omnidireccional, pero la señal no se puede utilizar sobre la estación: se forma un cono invertido de silencio o confusión por baja intensidad."
    ],
    "topic": "VOR: transmisión y limitaciones",
    "manualPage": 120,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 135,
    "q": "Which of the following are basic components of the INS?",
    "opts": [
      "A stable platform and accelerometers.",
      "A stable platform and ground stations.",
      "Accelerometers and ground stations.",
      "All the answers are correct."
    ],
    "a": 0,
    "deepExp": "Un INS básico integra acelerómetros lineales, giróscopos, una plataforma estable, integradores y un ordenador. Entre las opciones, la combinación esencial que aparece como componentes del sistema es plataforma estable y acelerómetros; las estaciones terrestres no forman parte de un sistema autocontenido. Manual, p. 146.",
    "optionExp": [
      "CORRECTA — La plataforma estable mantiene la referencia espacial y los acelerómetros detectan las aceleraciones en los ejes; ambos son componentes básicos del INS.",
      "NO — El INS no necesita estaciones terrestres para operar: es autocontenido. La plataforma estable sí es un componente, pero «ground stations» no lo es.",
      "NO — Los acelerómetros sí pertenecen al INS, pero las estaciones terrestres contradicen su carácter independiente de transmisiones externas.",
      "NO — No todas las respuestas son correctas porque las opciones que incluyen estaciones terrestres no describen componentes básicos del INS."
    ],
    "topic": "INS: componentes básicos",
    "manualPage": 146,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  },
  {
    "navNo": 136,
    "q": "Regarding the INS, select the true statement.",
    "opts": [
      "INS works independently of space transmissions.",
      "The principal error associated with INS is degradation of position with altitude.",
      "Modern INS cannot be used as a reference system.",
      "The INS requires constant position updates to be used as a navigation system."
    ],
    "a": 0,
    "deepExp": "El INS funciona independientemente de transmisiones de tierra o del espacio y es pasivo. Su error principal no es degradarse con la altitud, sino acumular pequeños errores de acelerómetros y giróscopos, que degradan la posición con el tiempo y hacen necesarias actualizaciones periódicas. Manual, p. 144.",
    "optionExp": [
      "CORRECTA — El INS es independiente de transmisiones espaciales y terrestres; calcula la navegación a partir de sus sensores inerciales y de la posición inicial conocida.",
      "NO — El manual identifica como error principal la degradación de la posición con el tiempo, no con la altitud.",
      "NO — El INS también puede utilizarse como sistema de referencia, proporcionando velocidad, actitud y rumbo; por eso la afirmación es falsa.",
      "NO — No requiere actualizaciones constantes para funcionar como navegación: puede operar autónomamente. Las actualizaciones con GPS/DME u otra fuente se usan para limitar la deriva acumulada."
    ],
    "topic": "INS: independencia y deriva temporal",
    "manualPage": 144,
    "manualName": "TBATC_5 Navigation 4.1 — Navigation",
    "preserveOptions": true
  }
];
