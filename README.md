
# Evaluación intermedia - Módulo 2 - Mayte Vargas

## El ejercicio consiste en crear un programa que genera un número aleatorio que la usuaria debe adivinar.

[Pincha aquí para acceder al juego de adivinar el número](http://beta.adalab.es/modulo-2-evaluacion-intermedia-MayVargasF/)

### Funcionalidades requeridas en el enunciado:

- Generar un número aleatorio entre 1 y 100.
- Compararlo con el que la usuaria introduce en el input.
- Si la usuaria no acierta el número, mostrar una pista (demasiado alto o demasiado bajo) y si acierta mostrar un mensaje de acierto.
- Mostrar en otro mensaje el número de intentos de la usuaria.


### Funcionalidades extra que he añadido:

- Que el mensaje de pista o acierto muestre un color distinto según si el número es demasiado alto, demasiado bajo o si acierta.
- Un botón para borrar lo escrito en el input y poder volver a escribir.

### Método utilizado:

He realizado las siguientes funciones:

- Generar un número aleatorio (esta función se ejecuta al cargar la página).
- Comparar el número generado con el introducido por la usuaria y generar las diferentes acciones mediante condicionales.
- Aumentar en 1 el número de intentos
- Función manejadora de evento click botón de probar (al que añadí un listener) que ejecuta la función comparadora del número y la de aumento del número de intentos.
- Función manejadora de evento click botón de borrar (al que añadí un listener) que limpia el valor del input.

