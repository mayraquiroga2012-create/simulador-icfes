const MAX_STUDENTS = 25;

// Exam Database with 25 Math questions, and 5 for others. With explanations.
const examData = {
    math: {
        title: "Matemáticas",
        timeLimit: 2400, // 40 minutes for 25 questions
        questions: [
            { q: "Una camiseta cuesta $80.000. En una promoción se aplica un descuento del 25%. ¿Cuánto debe pagar finalmente el comprador?", options: ["$20.000", "$55.000", "$60.000", "$75.000"], answer: 2, explanation: "El descuento es del 25% de $80.000:<br>80.000 × 0,25 = 20.000<br>Ese es el descuento. Entonces:<br>80.000 − 20.000 = 60.000" },
            { q: "Para preparar 4 vasos de jugo se necesitan 6 naranjas. Si se quiere preparar la misma receta para 10 vasos, ¿cuántas naranjas se necesitan?", options: ["12", "15", "18", "24"], answer: 1, explanation: "4 vasos → 6 naranjas<br>10 vasos → x<br>x = (10 × 6) / 4 = 15<br>Por lo tanto: 15" },
            { q: "Una máquina produce 240 piezas en 6 horas, manteniendo siempre el mismo ritmo. ¿Cuántas piezas producirá en 9 horas?", options: ["300", "320", "360", "400"], answer: 2, explanation: "6 horas → 240 piezas<br>9 horas → x<br>Como trabajan al mismo ritmo, es proporcionalidad directa:<br>x = (9 × 240) / 6<br>x = 360" },
            { q: "¿Cuál de las siguientes afirmaciones es verdadera?", options: ["−8 > −3", "−12 > −5", "−4 < −10", "−7 < −2"], answer: 3, explanation: "En la recta numérica, cuanto más a la izquierda está un número, menor es.<br>−7 < −2<br>Por eso D es correcta.<br>⚠️ Recuerda: entre números negativos, el que tiene mayor valor absoluto es el menor." },
            { q: "Una estudiante ha recorrido 3/5 de un camino de 20 km. ¿Cuántos kilómetros le faltan por recorrer?", options: ["6 km", "8 km", "12 km", "14 km"], answer: 1, explanation: "Ha recorrido: 3/5<br>Entonces le falta: 1 − 3/5 = 2/5<br>El camino completo mide 20 km:<br>20 × 2/5 = 8<br>Le faltan: 8 km" },
            { q: "Si x=4, ¿cuál es el valor de la expresión? 3x² - 2x + 5", options: ["37", "45", "49", "53"], answer: 1, explanation: "Tenemos: 3x² − 2x + 5<br>Como x=4: 3(4)² − 2(4) + 5<br>Primero la potencia: 4² = 16<br>Entonces: 3(16) − 8 + 5 = 48 − 8 + 5 = 45<br>🚨 Corrección importante: aquí la respuesta correcta es B. 45, no C. 49." },
            { q: "Un número aumentado en 7 es igual a 25. ¿Cuál es ese número?", options: ["17", "18", "32", "175"], answer: 1, explanation: "El número es x.<br>\"Un número aumentado en 7 es 25\": x + 7 = 25<br>Restamos 7: x = 25 − 7<br>x = 18" },
            { q: "Un terreno rectangular tiene 15 m de largo y 8 m de ancho. ¿Cuál es su área?", options: ["23 m²", "46 m²", "120 m²", "240 m²"], answer: 2, explanation: "La fórmula es:<br>A = base × altura<br>A = 15 × 8 = 120<br>120 m²" },
            { q: "Un cuadrado tiene un área de 64 cm². ¿Cuál es su perímetro?", options: ["16 cm", "24 cm", "32 cm", "64 cm"], answer: 2, explanation: "El área es: A = L² → 64 = L²<br>Por lo tanto: L = 8<br>Un cuadrado tiene 4 lados:<br>P = 4(8) = 32<br>32 cm" },
            { q: "Una caja tiene forma de prisma rectangular con dimensiones de 5 cm, 4 cm y 3 cm. ¿Cuál es su volumen?", options: ["12 cm³", "20 cm³", "47 cm³", "60 cm³"], answer: 3, explanation: "Para un prisma rectangular:<br>V = largo × ancho × alto<br>V = 5 × 4 × 3<br>V = 60<br>60 cm³" },
            { q: "Las calificaciones de un estudiante fueron: 60, 70, 80, 90, 100. ¿Cuál es el promedio?", options: ["75", "80", "85", "90"], answer: 1, explanation: "Sumamos: 60 + 70 + 80 + 90 + 100 = 400<br>Hay 5 datos:<br>400 / 5 = 80" },
            { q: "Se tienen los siguientes datos: 4, 7, 2, 9, 5, 7, 3. ¿Cuál es la mediana?", options: ["4", "5", "6", "7"], answer: 1, explanation: "Primero ordenamos: 2, 3, 4, 5, 7, 7, 9<br>Hay 7 números. El que queda exactamente en el centro es el cuarto: 5" },
            { q: "En una bolsa hay 5 bolas rojas, 3 azules y 2 verdes. Si se extrae una bola al azar, ¿cuál es la probabilidad de que sea azul?", options: ["1/10", "2/10", "3/10", "5/10"], answer: 2, explanation: "Hay: 5 rojas, 3 azules, 2 verdes.<br>Total: 5 + 3 + 2 = 10<br>Casos favorables = 3 azules.<br>P(azul) = 3/10" },
            { q: "Se lanza un dado de seis caras una vez. ¿Cuál es la probabilidad de obtener un número mayor que 4?", options: ["1/6", "2/6", "3/6", "4/6"], answer: 1, explanation: "Los números mayores que 4 son: 5, 6<br>Hay 2 resultados favorables de 6 posibles: P = 2/6<br>También se puede simplificar: 2/6 = 1/3<br>Pero como las opciones presentan 2/6, la correcta es B." },
            { q: "En una encuesta a 200 estudiantes sobre su deporte favorito se obtuvieron estos resultados: Fútbol 80, Baloncesto 50, Natación 30, Voleibol 40. ¿Qué porcentaje de estudiantes eligió fútbol?", options: ["20 %", "30 %", "40 %", "80 %"], answer: 2, explanation: "Hay 200 estudiantes y 80 eligieron fútbol.<br>80 / 200 = 0,4<br>Convertimos a porcentaje: 0,4 × 100 = 40%" },
            { q: "En un curso hay 12 hombres y 18 mujeres. ¿Cuál es la razón entre el número de hombres y el número de mujeres, simplificada?", options: ["3/2", "2/3", "30/12", "12/18"], answer: 0, explanation: "Hombres = 12, Mujeres = 18<br>La razón es: 18 / 12<br>Simplificamos dividiendo ambos entre 6:<br>(18÷6) / (12÷6) = 3/2" },
            { q: "Una empresa cobra una tarifa fija de $5.000 más $2.000 por cada hora de servicio. ¿Cuál expresión representa el costo C según el número de horas h?", options: ["C=5.000h+2.000", "C=2.000h+5.000", "C=7.000h", "C=5.000−2.000h"], answer: 1, explanation: "Hay un costo fijo de $5.000. Además, cada hora cuesta $2.000.<br>Si h representa las horas: C = 2.000h + 5.000<br>La parte 2.000h cambia según las horas y los $5.000 permanecen fijos." },
            { q: "Para la función y=3x+2, ¿cuál es el valor de y cuando x=4?", options: ["10", "12", "14", "16"], answer: 2, explanation: "y = 3x + 2<br>Si x=4: y = 3(4) + 2<br>y = 12 + 2 = 14" },
            { q: "Cinco trabajadores realizan una obra en 12 días. Si todos trabajan al mismo ritmo, ¿cuántos días tardarían 10 trabajadores?", options: ["3 días", "5 días", "6 días", "24 días"], answer: 2, explanation: "Aquí hay algo importante: Más trabajadores → menos días.<br>5 trabajadores → 12 días<br>10 trabajadores → x<br>Como se duplicó el número de trabajadores, el tiempo se reduce a la mitad:<br>12 ÷ 2 = 6 días<br>También: 5 × 12 = 10 × x → 60 = 10x → x = 6" },
            { q: "Un triángulo tiene una base de 12 cm y una altura de 7 cm. ¿Cuál es su área?", options: ["19 cm²", "42 cm²", "84 cm²", "168 cm²"], answer: 1, explanation: "La fórmula es: A = (base × altura) / 2<br>A = (12 × 7) / 2<br>A = 84 / 2 = 42 cm²<br>⚠️ El /2 es fundamental en el área de un triángulo." },
            { q: "Un triángulo rectángulo tiene catetos de 6 cm y 8 cm. ¿Cuánto mide la hipotenusa?", options: ["9 cm", "10 cm", "12 cm", "14 cm"], answer: 1, explanation: "En un triángulo rectángulo: a² + b² = c²<br>Entonces: 6² + 8² = c² → 36 + 64 = c² → 100 = c² → c = √100 = 10 cm" },
            { q: "Una distancia es de 3,5 km. ¿Cuántos metros representa?", options: ["35 m", "350 m", "3.050 m", "3.500 m"], answer: 3, explanation: "Sabemos que: 1 km = 1000 m<br>Entonces: 3,5 × 1000 = 3500 m" },
            { q: "Una población de 20.000 habitantes aumenta un 10% durante un año. ¿Cuál será la población después del aumento?", options: ["20.100", "21.000", "22.000", "30.000"], answer: 2, explanation: "La población inicial es 20.000.<br>El aumento es del 10%: 20.000 × 0,10 = 2.000<br>Sumamos el aumento: 20.000 + 2.000 = 22.000" },
            { q: "Plan A: $1.200.000 de contado. Plan B: 12 cuotas de $110.000. ¿Cuánto más se paga con el Plan B que con el Plan A?", options: ["$20.000", "$100.000", "$120.000", "$1.320.000"], answer: 2, explanation: "Plan A: $1.200.000<br>Plan B: 12 × 110.000 = 1.320.000<br>Ahora calculamos cuánto más cuesta B: 1.320.000 − 1.200.000 = 120.000" },
            { q: "Un tanque tiene capacidad para 600 litros. Al comenzar el día contiene 150 litros. Durante la mañana se agregan 250 litros y durante la tarde se consumen 180 litros. ¿Cuántos litros quedan en el tanque al final del día?", options: ["220 litros", "300 litros", "400 litros", "580 litros"], answer: 0, explanation: "Comienza con: 150<br>Agregan 250: 150 + 250 = 400<br>Después consumen 180: 400 − 180 = 220<br>Por lo tanto: 220 litros" }
        ]
    },
    reading: {
        title: "Lectura Crítica",
        timeLimit: 2400,
        questions: [
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 1</strong><br>Durante años se creyó que la tecnología permitiría disponer de más tiempo libre. Sin embargo, los dispositivos que prometían facilitar las tareas también han hecho posible trabajar desde cualquier lugar y a cualquier hora. El problema, entonces, no parece estar únicamente en la tecnología, sino en la manera en que las personas deciden utilizarla.</div>¿Cuál es la idea principal del texto?", options: ["La tecnología ha eliminado completamente el tiempo libre.", "La tecnología es perjudicial para todas las personas.", "El efecto de la tecnología sobre el tiempo depende también de cómo se utiliza.", "Las personas deberían dejar de utilizar dispositivos tecnológicos."], answer: 2, explanation: "✅ Respuesta: C.<br><br>La tecnología ha cambiado el tiempo disponible dependiendo de cómo se utiliza.<br><br>El texto no dice que la tecnología sea completamente mala. De hecho, reconoce que facilita tareas, pero también permite trabajar en cualquier momento. Por eso, el problema no está únicamente en la tecnología, sino en el uso que las personas hacen de ella." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 1</strong><br>Durante años se creyó que la tecnología permitiría disponer de más tiempo libre. Sin embargo, los dispositivos que prometían facilitar las tareas también han hecho posible trabajar desde cualquier lugar y a cualquier hora. El problema, entonces, no parece estar únicamente en la tecnología, sino en la manera en que las personas deciden utilizarla.</div>Según el texto, ¿qué situación contradice la expectativa inicial sobre la tecnología?", options: ["Que los dispositivos pueden facilitar algunas tareas.", "Que las personas pueden utilizar dispositivos desde diferentes lugares.", "Que la tecnología permite trabajar incluso fuera del horario habitual.", "Que algunos dispositivos son difíciles de utilizar."], answer: 2, explanation: "✅ Respuesta: C.<br><br>Que la tecnología permite trabajar incluso fuera del horario habitual.<br><br>La expectativa era que la tecnología generara más tiempo libre. Sin embargo, también permite que las personas estén disponibles para trabajar en cualquier lugar y a cualquier hora." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 1</strong><br>Durante años se creyó que la tecnología permitiría disponer de más tiempo libre. Sin embargo, los dispositivos que prometían facilitar las tareas también han hecho posible trabajar desde cualquier lugar y a cualquier hora. El problema, entonces, no parece estar únicamente en la tecnología, sino en la manera en que las personas deciden utilizarla.</div>En el texto, la expresión “no parece estar únicamente” permite entender que:", options: ["la tecnología no tiene ninguna relación con el problema.", "existen otros factores además de la tecnología.", "la tecnología es siempre responsable del problema.", "el problema solamente existe cuando se utilizan dispositivos."], answer: 1, explanation: "✅ Respuesta: B.<br><br>Existen otros factores además de la tecnología.<br><br>La expresión “no parece estar únicamente” significa que la tecnología puede ser un factor, pero no es el único.<br><br>👉 Palabra clave: únicamente = solamente." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 2</strong><br>Un pueblo decidió convertir la antigua estación de tren en una biblioteca. Algunos habitantes se opusieron porque consideraban que el edificio debía conservarse exactamente como estaba. Otros defendieron la transformación porque pensaban que un edificio histórico no pierde su valor cuando adquiere una nueva función. Finalmente, se decidió restaurar la fachada y adaptar el interior para la biblioteca.</div>¿Cuál fue el principal desacuerdo entre los habitantes?", options: ["Sobre el costo de construir una biblioteca.", "Sobre si el edificio debía conservarse sin cambios o adaptarse.", "Sobre la importancia de los trenes para el pueblo.", "Sobre dónde comprar los libros."], answer: 1, explanation: "✅ Respuesta: B.<br><br>Sobre si el edificio debía conservarse sin cambios o adaptarse.<br><br>Había dos posiciones:<br>- Un grupo quería conservarlo exactamente como estaba.<br>- Otro quería darle una nueva función.<br><br>El conflicto está en cómo conservar el edificio histórico." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 2</strong><br>Un pueblo decidió convertir la antigua estación de tren en una biblioteca. Algunos habitantes se opusieron porque consideraban que el edificio debía conservarse exactamente como estaba. Otros defendieron la transformación porque pensaban que un edificio histórico no pierde su valor cuando adquiere una nueva función. Finalmente, se decidió restaurar la fachada y adaptar el interior para la biblioteca.</div>La decisión final busca principalmente:", options: ["destruir el edificio para construir uno nuevo.", "conservar algunos elementos históricos y darle un nuevo uso al edificio.", "impedir que las personas entren al edificio.", "convertir la estación nuevamente en una estación ferroviaria."], answer: 1, explanation: "✅ Respuesta: B.<br><br>Conservar elementos históricos y darle un nuevo uso.<br><br>La decisión final fue:<br>restaurar la fachada → conservar parte histórica;<br>adaptar el interior → convertirlo en biblioteca.<br><br>Por eso combina conservación + transformación." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 2</strong><br>Un pueblo decidió convertir la antigua estación de tren en una biblioteca. Algunos habitantes se opusieron porque consideraban que el edificio debía conservarse exactamente como estaba. Otros defendieron la transformación porque pensaban que un edificio histórico no pierde su valor cuando adquiere una nueva función. Finalmente, se decidió restaurar la fachada y adaptar el interior para la biblioteca.</div>¿Cuál de las siguientes afirmaciones está respaldada por el texto?", options: ["Todos los habitantes estaban de acuerdo desde el comienzo.", "La estación había dejado de utilizarse como biblioteca.", "Existían diferentes opiniones sobre cómo conservar el edificio.", "El pueblo decidió eliminar completamente la fachada."], answer: 2, explanation: "✅ Respuesta: C.<br><br>Existían diferentes opiniones sobre cómo conservar el edificio.<br><br>El texto dice explícitamente que algunos habitantes se opusieron, mientras que otros defendieron la transformación.<br><br>Por eso sabemos que había diferentes opiniones." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 3</strong><br>Leer rápidamente no significa necesariamente comprender mejor. Una persona puede terminar un texto en pocos minutos y recordar muy poco de lo leído. Otra puede detenerse en ciertas frases, relacionarlas con ideas anteriores y tardar más tiempo, pero alcanzar una comprensión más profunda. Por eso, la velocidad de lectura no debería considerarse por sí sola una medida de comprensión.</div>¿Cuál es la tesis principal del texto?", options: ["Todas las personas deberían leer lentamente.", "Leer rápido siempre produce malos resultados.", "La velocidad de lectura no es suficiente para determinar la comprensión.", "La comprensión depende únicamente de recordar las palabras."], answer: 2, explanation: "✅ Respuesta: C.<br><br>La velocidad de lectura no es suficiente para determinar la comprensión.<br><br>El autor compara:<br>leer rápidamente ≠ necesariamente comprender mejor.<br><br>Una persona puede leer muy rápido y recordar poco, mientras otra puede leer más lentamente y comprender profundamente.<br><br>👉 Tesis = idea que el autor quiere defender." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 3</strong><br>Leer rápidamente no significa necesariamente comprender mejor. Una persona puede terminar un texto en pocos minutos y recordar muy poco de lo leído. Otra puede detenerse en ciertas frases, relacionarlas con ideas anteriores y tardar más tiempo, pero alcanzar una comprensión más profunda. Por eso, la velocidad de lectura no debería considerarse por sí sola una medida de comprensión.</div>¿Cuál situación ejemplifica mejor la idea del texto?", options: ["Una persona lee 100 páginas rápidamente y comprende todas las ideas.", "Una persona lee lentamente, relaciona conceptos y comprende el argumento.", "Una persona lee únicamente los títulos de un libro.", "Una persona evita leer textos largos."], answer: 1, explanation: "✅ Respuesta: B.<br><br>Una persona lee lentamente, relaciona conceptos y comprende el argumento.<br><br>Es exactamente el ejemplo que representa la idea del texto: la comprensión importa más que simplemente terminar rápido." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 3</strong><br>Leer rápidamente no significa necesariamente comprender mejor. Una persona puede terminar un texto en pocos minutos y recordar muy poco de lo leído. Otra puede detenerse en ciertas frases, relacionarlas con ideas anteriores y tardar más tiempo, pero alcanzar una comprensión más profunda. Por eso, la velocidad de lectura no debería considerarse por sí sola una medida de comprensión.</div>La expresión “Por eso” introduce:", options: ["una contradicción.", "una causa.", "una conclusión derivada de lo anterior.", "una pregunta."], answer: 2, explanation: "✅ Respuesta: C.<br><br>Una conclusión derivada de lo anterior.<br><br>“Por eso” conecta lo explicado anteriormente con la conclusión:<br>La velocidad no garantiza comprensión → por eso no debe utilizarse sola como medida.<br><br>👉 “Por eso” suele introducir una consecuencia o conclusión." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 4</strong><br>En una ciudad se propuso construir una nueva avenida para reducir los tiempos de desplazamiento. El proyecto permitiría que los automóviles llegaran más rápido a determinadas zonas. Sin embargo, algunos especialistas señalaron que aumentar el número de vías podría incentivar el uso del automóvil y, con el tiempo, generar nuevamente congestión. Por ello, recomendaron complementar el proyecto con mejoras en el transporte público.</div>¿Cuál es el principal argumento de los especialistas?", options: ["Las avenidas nunca reducen los tiempos de desplazamiento.", "Mejorar únicamente las vías podría no resolver permanentemente la congestión.", "El transporte público debería desaparecer.", "Los automóviles no pueden circular por las nuevas avenidas."], answer: 1, explanation: "✅ Respuesta: B.<br><br>Mejorar únicamente las vías podría no resolver permanentemente la congestión.<br><br>Los especialistas dicen que construir más vías podría incentivar el uso de automóviles y que, con el tiempo, la congestión podría regresar.<br><br>Por eso proponen combinar la construcción con transporte público." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 4</strong><br>En una ciudad se propuso construir una nueva avenida para reducir los tiempos de desplazamiento. El proyecto permitiría que los automóviles llegaran más rápido a determinadas zonas. Sin embargo, algunos especialistas señalaron que aumentar el número de vías podría incentivar el uso del automóvil y, con el tiempo, generar nuevamente congestión. Por ello, recomendaron complementar el proyecto con mejoras en el transporte público.</div>¿Qué relación existe entre las dos propuestas mencionadas?", options: ["Son completamente incompatibles.", "La segunda puede complementar la primera.", "La primera depende de eliminar la segunda.", "Ambas buscan aumentar el uso del automóvil."], answer: 1, explanation: "✅ Respuesta: B.<br><br>La segunda puede complementar la primera.<br><br>No están diciendo:<br>❌ “No construyan la avenida”.<br><br>Dicen que sería mejor:<br>nuevas vías + mejor transporte público.<br><br>Por eso una propuesta complementa a la otra." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 4</strong><br>En una ciudad se propuso construir una nueva avenida para reducir los tiempos de desplazamiento. El proyecto permitiría que los automóviles llegaran más rápido a determinadas zonas. Sin embargo, algunos especialistas señalaron que aumentar el número de vías podría incentivar el uso del automóvil y, con el tiempo, generar nuevamente congestión. Por ello, recomendaron complementar el proyecto con mejoras en el transporte público.</div>¿Qué supuesto sostiene el argumento de los especialistas?", options: ["El transporte público puede influir en la cantidad de automóviles que circulan.", "Todas las personas prefieren utilizar automóviles.", "Las ciudades no necesitan vías nuevas.", "Las avenidas siempre provocan accidentes."], answer: 0, explanation: "✅ Respuesta: A.<br><br>El transporte público puede influir en la cantidad de automóviles que circulan.<br><br>Si mejorar el transporte público puede ayudar a reducir la cantidad de carros, entonces se entiende por qué los especialistas lo proponen como complemento." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 5</strong><br>El reloj<br>El abuelo tenía un reloj que nunca funcionaba correctamente. A veces se adelantaba y otras veces se detenía. Sin embargo, cada domingo lo colocaba sobre la mesa y lo limpiaba cuidadosamente. Cuando alguien le preguntaba por qué conservaba un objeto tan poco útil, respondía: “No todo lo que guardamos sirve para medir el tiempo”.</div>¿Cuál puede interpretarse como el significado de la respuesta del abuelo?", options: ["El reloj realmente funciona perfectamente.", "Los objetos pueden tener un valor sentimental además de su utilidad práctica.", "El abuelo no sabe utilizar un reloj.", "Medir el tiempo no tiene ninguna importancia."], answer: 1, explanation: "✅ Respuesta: B.<br><br>Los objetos pueden tener un valor sentimental además de su utilidad práctica.<br><br>El reloj casi no sirve para medir el tiempo porque funciona mal.<br>Pero el abuelo lo conserva y lo limpia cuidadosamente.<br>Eso demuestra que el valor del reloj no depende de que funcione.<br><br>👉 Puede tener un valor emocional o representar un recuerdo." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 5</strong><br>El reloj<br>El abuelo tenía un reloj que nunca funcionaba correctamente. A veces se adelantaba y otras veces se detenía. Sin embargo, cada domingo lo colocaba sobre la mesa y lo limpiaba cuidadosamente. Cuando alguien le preguntaba por qué conservaba un objeto tan poco útil, respondía: “No todo lo que guardamos sirve para medir el tiempo”.</div>¿Qué característica del abuelo se puede inferir principalmente?", options: ["Desprecia los objetos antiguos.", "Valora los recuerdos asociados con los objetos.", "Siempre compra objetos nuevos.", "Considera inútil todo objeto moderno."], answer: 1, explanation: "✅ Respuesta: B.<br><br>Valora los recuerdos asociados con los objetos.<br><br>El abuelo conserva un objeto poco útil y lo cuida cada domingo.<br>Podemos inferir que tiene un vínculo sentimental con él." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 5</strong><br>El reloj<br>El abuelo tenía un reloj que nunca funcionaba correctamente. A veces se adelantaba y otras veces se detenía. Sin embargo, cada domingo lo colocaba sobre la mesa y lo limpiaba cuidadosamente. Cuando alguien le preguntaba por qué conservaba un objeto tan poco útil, respondía: “No todo lo que guardamos sirve para medir el tiempo”.</div>¿Por qué el autor menciona que el reloj “nunca funcionaba correctamente”?", options: ["Para demostrar que el abuelo no sabía limpiarlo.", "Para mostrar que su valor para el abuelo no dependía de su funcionamiento.", "Para explicar cómo reparar un reloj.", "Para indicar que el reloj era nuevo."], answer: 1, explanation: "✅ Respuesta: B.<br><br>Para mostrar que su valor para el abuelo no dependía de su funcionamiento.<br><br>El autor primero nos dice que el reloj funciona mal y luego nos muestra que el abuelo lo cuida.<br>La contradicción aparente es intencional:<br>No funciona bien → pero sigue siendo importante.<br><br>Eso ayuda a comprender el significado de la respuesta del abuelo." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 6</strong><br>Algunas personas sostienen que los exámenes son la mejor manera de evaluar el aprendizaje porque permiten comparar los resultados de muchos estudiantes. Otros consideran que un examen escrito no siempre refleja lo que una persona sabe hacer, pues existen habilidades que requieren demostraciones prácticas, proyectos o explicaciones más extensas. Una evaluación completa podría combinar diferentes métodos.</div>¿Cuál es la posición que defiende el texto?", options: ["Los exámenes deben eliminarse completamente.", "Los exámenes son siempre la mejor evaluación.", "Una evaluación puede beneficiarse de combinar diferentes métodos.", "Los proyectos no permiten evaluar conocimientos."], answer: 2, explanation: "✅ Respuesta: C.<br><br>Una evaluación puede beneficiarse de combinar diferentes métodos.<br><br>El texto presenta ventajas y limitaciones de los exámenes y termina proponiendo:<br>exámenes + proyectos + demostraciones + explicaciones.<br><br>No está defendiendo eliminar los exámenes." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 6</strong><br>Algunas personas sostienen que los exámenes son la mejor manera de evaluar el aprendizaje porque permiten comparar los resultados de muchos estudiantes. Otros consideran que un examen escrito no siempre refleja lo que una persona sabe hacer, pues existen habilidades que requieren demostraciones prácticas, proyectos o explicaciones más extensas. Una evaluación completa podría combinar diferentes métodos.</div>¿Cuál argumento apoya la posición de quienes cuestionan los exámenes escritos?", options: ["Permiten comparar estudiantes fácilmente.", "Todas las habilidades pueden medirse mediante preguntas escritas.", "Algunas habilidades requieren demostraciones prácticas.", "Los exámenes son demasiado cortos."], answer: 2, explanation: "✅ Respuesta: C.<br><br>Algunas habilidades requieren demostraciones prácticas.<br><br>Este es precisamente el argumento de quienes cuestionan que el examen escrito sea suficiente.<br>Hay cosas que pueden evaluarse mejor haciendo que simplemente respondiendo preguntas." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 6</strong><br>Algunas personas sostienen que los exámenes son la mejor manera de evaluar el aprendizaje porque permiten comparar los resultados de muchos estudiantes. Otros consideran que un examen escrito no siempre refleja lo que una persona sabe hacer, pues existen habilidades que requieren demostraciones prácticas, proyectos o explicaciones más extensas. Una evaluación completa podría combinar diferentes métodos.</div>La estructura del texto puede describirse como:", options: ["presenta una única opinión y la repite.", "presenta dos posiciones y propone una posible solución.", "narra una historia y explica su final.", "presenta datos estadísticos y calcula un promedio."], answer: 1, explanation: "✅ Respuesta: B.<br><br>Presenta dos posiciones y propone una posible solución.<br><br>La estructura es:<br>- Algunos creen que los exámenes son buenos.<br>- Otros creen que no son suficientes.<br>- El texto propone combinar métodos.<br><br>Por eso B." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 7</strong><br>La plaza<br>Cada tarde, la plaza se llenaba de personas. Los niños corrían alrededor de la fuente, los vendedores organizaban sus puestos y los ancianos ocupaban las mismas bancas de siempre. Cuando anunciaron que construirían un estacionamiento en ese lugar, muchos habitantes protestaron. No defendían únicamente un espacio físico: defendían también las actividades y relaciones que habían construido allí durante años.</div>¿Cuál es la razón principal de las protestas?", options: ["Los habitantes querían construir otro estacionamiento.", "La plaza tenía problemas de limpieza.", "La plaza tenía un valor social además de ser un espacio físico.", "Los vendedores querían abandonar sus puestos."], answer: 2, explanation: "✅ Respuesta: C.<br><br>La plaza tenía un valor social además de ser un espacio físico.<br><br>La última parte es fundamental:<br>“No defendían únicamente un espacio físico...”<br><br>La plaza representa:<br>reuniones, juegos, trabajo, relaciones, vida comunitaria.<br><br>Por eso su importancia va más allá del espacio físico." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 7</strong><br>La plaza<br>Cada tarde, la plaza se llenaba de personas. Los niños corrían alrededor de la fuente, los vendedores organizaban sus puestos y los ancianos ocupaban las mismas bancas de siempre. Cuando anunciaron que construirían un estacionamiento en ese lugar, muchos habitantes protestaron. No defendían únicamente un espacio físico: defendían también las actividades y relaciones que habían construido allí durante años.</div>¿Qué puede inferirse de la última oración?", options: ["La plaza solo tenía importancia económica.", "Los habitantes consideraban que la plaza formaba parte de su vida comunitaria.", "Las personas nunca utilizaban la plaza.", "Los habitantes estaban en contra de cualquier construcción."], answer: 1, explanation: "✅ Respuesta: B.<br><br>Los habitantes consideraban que la plaza formaba parte de su vida comunitaria.<br><br>Durante años habían construido allí actividades y relaciones.<br>Eso permite inferir que la plaza era un lugar importante para la comunidad." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 8</strong><br>Un artículo afirma que “las redes sociales han destruido la comunicación humana”. Sin embargo, el autor no presenta estudios, cifras ni ejemplos concretos que respalden esta afirmación. Únicamente menciona que algunas personas pasan mucho tiempo conectadas y concluye que la comunicación ha empeorado.</div>¿Cuál es la principal debilidad del argumento?", options: ["Utiliza demasiados datos científicos.", "Presenta una conclusión general sin suficiente evidencia.", "Explica diferentes puntos de vista.", "Utiliza ejemplos demasiado específicos."], answer: 1, explanation: "✅ Respuesta: B.<br><br>Presenta una conclusión general sin suficiente evidencia.<br><br>El autor afirma:<br>“las redes sociales han destruido la comunicación humana”.<br><br>Pero solamente proporciona una observación sobre algunas personas que pasan mucho tiempo conectadas.<br>Eso no basta para demostrar una afirmación tan amplia.<br><br>👉 Problema: falta evidencia suficiente." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 8</strong><br>Un artículo afirma que “las redes sociales han destruido la comunicación humana”. Sin embargo, el autor no presenta estudios, cifras ni ejemplos concretos que respalden esta afirmación. Únicamente menciona que algunas personas pasan mucho tiempo conectadas y concluye que la comunicación ha empeorado.</div>¿Qué información fortalecería más el argumento del autor?", options: ["Una descripción del color de las aplicaciones.", "Estudios que comparen diferentes formas de comunicación y sus efectos.", "Una lista de las redes sociales existentes.", "Opiniones del autor sobre sus aplicaciones favoritas."], answer: 1, explanation: "✅ Respuesta: B.<br><br>Estudios que comparen diferentes formas de comunicación y sus efectos.<br><br>Si quiere demostrar que las redes sociales han empeorado la comunicación, necesitaría evidencia que permita comparar y evaluar ese efecto.<br>Una lista de aplicaciones no demostraría nada." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 9</strong><br>La directora anunció que el colegio reduciría el uso de papel. Algunos estudiantes pensaron que esto significaría eliminar completamente las actividades escritas. Sin embargo, la directora explicó que el objetivo era disminuir impresiones innecesarias y utilizar medios digitales cuando fueran apropiados, sin eliminar las actividades que realmente necesitaran papel.</div>¿Cuál interpretación de los estudiantes fue incorrecta?", options: ["Que se reducirían las impresiones innecesarias.", "Que se utilizarían medios digitales en algunos casos.", "Que se eliminarían completamente las actividades escritas.", "Que algunas actividades seguirían realizándose en papel."], answer: 2, explanation: "✅ Respuesta: C.<br><br>Que se eliminarían completamente las actividades escritas.<br><br>Los estudiantes interpretaron:<br>“reducir papel” = “eliminar todas las actividades escritas”.<br><br>Pero la directora aclara que no significa eso.<br>Solo quiere reducir impresiones innecesarias y usar medios digitales cuando sea apropiado." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 9</strong><br>La directora anunció que el colegio reduciría el uso de papel. Algunos estudiantes pensaron que esto significaría eliminar completamente las actividades escritas. Sin embargo, la directora explicó que el objetivo era disminuir impresiones innecesarias y utilizar medios digitales cuando fueran apropiados, sin eliminar las actividades que realmente necesitaran papel.</div>¿Cuál es la intención principal de la aclaración de la directora?", options: ["Explicar con precisión qué significa reducir el uso de papel.", "Cancelar todas las actividades escolares.", "Obligar a los estudiantes a utilizar computadores.", "Aumentar el número de impresiones."], answer: 0, explanation: "✅ Respuesta: A.<br><br>Explicar con precisión qué significa reducir el uso de papel.<br><br>La directora aclara la interpretación equivocada:<br>❌ eliminar todo el papel.<br>✅ reducir impresiones innecesarias.<br><br>Por eso su intención es precisar el significado de la medida." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>TEXTO 10</strong><br>Un investigador observa que, en una determinada región, las personas que consumen más café parecen tener mayores niveles de estrés. Con base únicamente en esta observación, concluye que el café provoca estrés. Otro investigador señala que también podría existir una tercera variable: por ejemplo, las personas con trabajos más exigentes podrían consumir más café y experimentar más estrés.</div>¿Por qué la conclusión del primer investigador es cuestionable?", options: ["Porque una relación entre dos variables no demuestra necesariamente que una cause la otra.", "Porque el café nunca puede relacionarse con el estrés.", "Porque los investigadores no pueden estudiar el comportamiento humano.", "Porque observar variables siempre produce resultados incorrectos."], answer: 0, explanation: "✅ Respuesta: A.<br><br>Una relación entre dos variables no demuestra necesariamente que una cause la otra.<br><br>Este es un concepto MUY importante para ICFES.<br>El investigador observa:<br>más café ↔ más estrés<br><br>Pero eso no demuestra automáticamente:<br>café → estrés.<br><br>Puede existir otra variable, por ejemplo:<br>trabajo exigente → más café + más estrés.<br><br>Esto se llama una posible variable de confusión." }
        ]
    },
    science: {
        title: "Ciencias Naturales",
        timeLimit: 2400,
        questions: [
            { q: "Una célula animal se coloca en una solución con una concentración de solutos mayor que la que existe en el interior de la célula. ¿Qué sucederá principalmente?", options: ["La célula absorberá agua y aumentará de tamaño.", "El agua saldrá de la célula y esta disminuirá de tamaño.", "Los solutos saldrán de la célula y esta aumentará de tamaño.", "No habrá movimiento de agua porque la membrana es impermeable."], answer: 1, explanation: "✅ Respuesta: B. El agua saldrá de la célula y esta disminuirá de tamaño.<br><br>La solución externa tiene más solutos que el interior de la célula. Por ósmosis, el agua se mueve hacia donde hay mayor concentración de solutos.<br><br>➡️ Agua sale → célula pierde agua → disminuye de tamaño." },
            { q: "Una planta se mantiene durante varios días en un lugar completamente oscuro, pero recibe agua y dióxido de carbono. ¿Cuál proceso se verá directamente afectado por la ausencia de luz?", options: ["La producción de glucosa mediante fotosíntesis.", "La absorción de agua por las raíces.", "La entrada de minerales a la planta.", "La respiración celular."], answer: 0, explanation: "✅ Respuesta: A. La producción de glucosa mediante fotosíntesis.<br><br>La fotosíntesis necesita luz para producir materia orgánica como la glucosa.<br><br>De manera simplificada:<br>CO₂ + H₂O + luz → glucosa + O₂<br><br>La planta puede seguir respirando en la oscuridad, pero la fotosíntesis se ve directamente afectada." },
            { q: "En una especie de plantas, el color rojo de las flores (R) es dominante sobre el color blanco (r). ¿Cuál será el fenotipo de una planta con genotipo Rr?", options: ["Roja.", "Blanca.", "Roja y blanca al mismo tiempo.", "No se puede determinar."], answer: 0, explanation: "✅ Respuesta: A. Roja.<br><br>Tenemos:<br>R = rojo → dominante<br>r = blanco → recesivo<br><br>El genotipo es: Rr<br>Como existe el alelo dominante R, se expresa el color rojo.<br>➡️ Rr → flor roja." },
            { q: "En una cadena alimentaria se tiene: Pasto → Conejo → Zorro. Si disminuye considerablemente la cantidad de pasto, ¿qué efecto sería más probable inicialmente?", options: ["Aumentará la población de conejos.", "Disminuirá la población de conejos.", "Aumentará inmediatamente la población de zorros.", "Los zorros comenzarán a producir su propio alimento."], answer: 1, explanation: "✅ Respuesta: B. Disminuirá la población de conejos.<br><br>La cadena es: Pasto → Conejo → Zorro<br>El pasto es alimento del conejo.<br><br>Si hay menos pasto:<br>↓pasto → ↓alimento para conejos<br><br>Por lo tanto, es probable que disminuya la población de conejos." },
            { q: "En una población de insectos existen individuos de color claro y oscuro. Las aves pueden detectar con mayor facilidad a los insectos claros sobre un suelo oscuro. Con el paso de muchas generaciones, ¿qué podría ocurrir?", options: ["Los insectos oscuros podrían hacerse más frecuentes en la población.", "Todos los insectos cambiarían voluntariamente de color.", "Los insectos claros desaparecerían necesariamente en una generación.", "El suelo cambiaría de color para favorecer a los insectos."], answer: 0, explanation: "✅ Respuesta: A. Los insectos oscuros podrían hacerse más frecuentes en la población.<br><br>Los insectos claros son detectados más fácilmente por las aves.<br>Los oscuros tienen mayor posibilidad de sobrevivir y reproducirse.<br>Después de muchas generaciones, el rasgo oscuro podría volverse más frecuente.<br><br>⚠️ Importante para ICFES: los individuos no cambian voluntariamente porque lo necesiten. La selección natural favorece características que ya existen en la población." },
            { q: "¿Cuál es una función principal de los glóbulos rojos?", options: ["Defender al organismo contra microorganismos.", "Transportar oxígeno.", "Producir hormonas.", "Formar huesos."], answer: 1, explanation: "✅ Respuesta: B. Transportar oxígeno.<br><br>Los glóbulos rojos contienen hemoglobina, una proteína que permite transportar oxígeno.<br><br>Glóbulos rojos → transporte de oxígeno.<br>Glóbulos blancos → defensa.<br>Plaquetas → coagulación." },
            { q: "La respiración celular permite a las células obtener energía a partir de nutrientes. ¿Cuál molécula representa principalmente la fuente inmediata de energía utilizada por la célula?", options: ["ADN.", "ATP.", "Agua.", "Oxígeno."], answer: 1, explanation: "✅ Respuesta: B. ATP.<br><br>El ATP (adenosín trifosfato) funciona como una fuente inmediata de energía utilizable por las células.<br><br>Puedes pensarlo como la 'moneda energética' de la célula." },
            { q: "Un recipiente contiene hielo a 0 °C. Se suministra calor continuamente y el hielo comienza a convertirse en agua. Durante el proceso de fusión, mientras coexisten hielo y agua a presión constante, ¿qué ocurre con la temperatura?", options: ["Aumenta continuamente.", "Disminuye continuamente.", "Permanece aproximadamente constante.", "Se duplica."], answer: 2, explanation: "✅ Respuesta: C. Permanece aproximadamente constante.<br><br>Cuando el hielo está cambiando de estado de sólido → líquido, el calor suministrado se utiliza principalmente para realizar el cambio de estado, no para aumentar la temperatura.<br><br>Por eso, durante la fusión, la temperatura permanece aproximadamente constante mientras coexisten hielo y agua a presión constante." },
            { q: "Un átomo tiene 11 protones, 11 electrones y 12 neutrones. ¿Cuál es su número atómico?", options: ["11.", "12.", "23.", "34."], answer: 0, explanation: "✅ Respuesta: A. 11.<br><br>El número atómico = número de protones.<br>El átomo tiene:<br>11 protones<br>11 electrones<br>12 neutrones<br><br>Entonces: Z = 11<br><br>⚠️ No confundas número atómico con número másico.<br>Número másico: A = p + n = 11 + 12 = 23" },
            { q: "El sodio (Na) tiene número atómico 11. ¿Cuántos electrones tiene un átomo neutro de sodio?", options: ["1.", "10.", "11.", "22."], answer: 2, explanation: "✅ Respuesta: C. 11.<br><br>Un átomo neutro tiene:<br>protones = electrones<br><br>El sodio tiene número atómico 11, por lo tanto tiene:<br>11 electrones" },
            { q: "Una sustancia tiene un pH de 3 y otra tiene un pH de 9. ¿Cuál afirmación es correcta?", options: ["Ambas son neutras.", "La sustancia de pH 3 es más ácida.", "La sustancia de pH 9 es más ácida.", "Ambas tienen exactamente la misma acidez."], answer: 1, explanation: "✅ Respuesta: B. La sustancia de pH 3 es más ácida.<br><br>La escala de pH funciona así:<br>pH bajo → más ácido<br>pH 7 → neutro<br>pH alto → más básico<br><br>Por eso: pH 3 > acidez que pH 9" },
            { q: "Se tiene una mezcla formada por agua y arena. ¿Cuál método sería más apropiado para separar sus componentes?", options: ["Filtración.", "Destilación.", "Cromatografía.", "Sublimación."], answer: 0, explanation: "✅ Respuesta: A. Filtración.<br><br>La arena es un sólido insoluble en agua.<br>La filtración permite que el agua atraviese el filtro mientras la arena queda retenida.<br><br>➡️ Sólido insoluble + líquido → filtración." },
            { q: "En una reacción química: 2H₂ + O₂ → 2H₂O. ¿Cuántas moléculas de agua se producen según la ecuación balanceada?", options: ["1.", "2.", "3.", "4."], answer: 1, explanation: "✅ Respuesta: B. 2.<br><br>La ecuación dice: 2H₂ + O₂ → 2H₂O<br><br>El número 2 delante de H₂O indica que se producen:<br>2 moléculas de agua" },
            { q: "En un recipiente cerrado reaccionan 10 g de una sustancia A con 5 g de una sustancia B. Si no se pierde materia hacia el exterior, ¿cuál será la masa total de los productos?", options: ["5 g.", "10 g.", "15 g.", "50 g."], answer: 2, explanation: "✅ Respuesta: C. 15 g.<br><br>En un sistema cerrado, la materia se conserva.<br>Tenemos: 10 g + 5 g = 15 g<br><br>Por lo tanto, la masa total de los productos será: 15 g" },
            { q: "Un automóvil recorre 120 km en 2 horas manteniendo una velocidad constante. ¿Cuál es su velocidad?", options: ["30 km/h.", "60 km/h.", "120 km/h.", "240 km/h."], answer: 1, explanation: "✅ Respuesta: B. 60 km/h.<br><br>La fórmula es: v = d / t<br>Entonces:<br>v = 120 km / 2 h<br>v = 60 km/h" },
            { q: "Un objeto de 5 kg experimenta una aceleración de 2 m/s². Según F = m ⋅ a, ¿Cuál es la fuerza aplicada?", options: ["2,5 N.", "7 N.", "10 N.", "25 N."], answer: 2, explanation: "✅ Respuesta: C. 10 N.<br><br>Usamos: F = m ⋅ a<br>Datos:<br>m = 5 kg<br>a = 2 m/s²<br><br>Entonces:<br>F = 5 × 2 = 10 N" },
            { q: "Una pelota se deja caer desde cierta altura. Si se desprecia la resistencia del aire, ¿qué ocurre con su velocidad mientras cae?", options: ["Disminuye constantemente.", "Permanece siempre igual.", "Aumenta debido a la gravedad.", "Se hace cero inmediatamente."], answer: 2, explanation: "✅ Respuesta: C. Aumenta debido a la gravedad.<br><br>Cuando un objeto cae y despreciamos la resistencia del aire, la gravedad provoca una aceleración hacia abajo.<br><br>Por eso su velocidad aumenta mientras cae." },
            { q: "Una montaña rusa está en la parte más alta de una pista y comienza a descender. Durante el descenso, principalmente ocurre una transformación de:", options: ["Energía química en nuclear.", "Energía potencial gravitacional en energía cinética.", "Energía eléctrica en química.", "Energía cinética en potencial exclusivamente."], answer: 1, explanation: "✅ Respuesta: B. Energía potencial gravitacional en energía cinética.<br><br>En la parte alta: ➡️ mucha energía potencial gravitacional.<br><br>Mientras baja: ➡️ disminuye la energía potencial y aumenta la energía cinética.<br><br>Es decir: Ep → Ec" },
            { q: "Un circuito eléctrico sencillo tiene una batería, cables y un bombillo. Si se desconecta uno de los cables, ¿qué sucederá?", options: ["El bombillo brillará más.", "El bombillo seguirá funcionando igual.", "Se interrumpirá el circuito y el bombillo se apagará.", "La batería producirá más corriente automáticamente."], answer: 2, explanation: "✅ Respuesta: C. Se interrumpirá el circuito y el bombillo se apagará.<br><br>Para que circule corriente debe existir un circuito cerrado.<br>Si desconectamos un cable: circuito abierto → no circula corriente<br><br>Por lo tanto, el bombillo se apaga." },
            { q: "Una persona observa un relámpago y unos segundos después escucha el trueno. Esto ocurre principalmente porque:", options: ["El sonido y la luz viajan exactamente a la misma velocidad.", "El sonido viaja más rápido que la luz.", "La luz viaja mucho más rápido que el sonido.", "El trueno se produce después del relámpago."], answer: 2, explanation: "✅ Respuesta: C. La luz viaja mucho más rápido que el sonido.<br><br>El relámpago y el trueno ocurren prácticamente al mismo tiempo.<br>Pero: v(luz) ≫ v(sonido)<br><br>Por eso primero vemos el relámpago y después escuchamos el trueno." },
            { q: "Una fábrica vierte residuos químicos en un río. Después de varias semanas disminuye considerablemente la cantidad de peces. ¿Cuál sería una explicación científicamente razonable?", options: ["Los residuos pueden alterar las condiciones del agua y afectar a los organismos acuáticos.", "Los peces decidieron abandonar el río porque cambió el clima.", "Los residuos aumentan siempre la cantidad de oxígeno disponible.", "Los peces dejan de necesitar agua cuando hay contaminación."], answer: 0, explanation: "✅ Respuesta: A. Los residuos pueden alterar las condiciones del agua y afectar a los organismos acuáticos.<br><br>Los residuos químicos pueden modificar características del agua y afectar a los organismos.<br>Por ejemplo, pueden alterar:<br>- pH<br>- concentración de oxígeno<br>- composición química<br>- condiciones necesarias para la vida acuática<br><br>Por eso puede disminuir la población de peces." },
            { q: "La quema de combustibles fósiles libera principalmente:", options: ["Oxígeno.", "Dióxido de carbono.", "Nitrógeno líquido.", "Helio."], answer: 1, explanation: "✅ Respuesta: B. Dióxido de carbono.<br><br>La combustión de combustibles fósiles libera principalmente: CO₂<br><br>El aumento de CO₂ atmosférico está relacionado con el efecto invernadero y el cambio climático." },
            { q: "Un estudiante quiere investigar si la cantidad de luz afecta el crecimiento de una planta. Planta tres grupos iguales: Grupo A: 2 horas de luz diaria. Grupo B: 6 horas de luz diaria. Grupo C: 10 horas de luz diaria. Mantiene iguales el tipo de planta, cantidad de agua, suelo y temperatura. ¿Cuál es la variable independiente?", options: ["El crecimiento de las plantas.", "La cantidad de agua.", "La cantidad de luz.", "El tipo de suelo."], answer: 2, explanation: "✅ Respuesta: C. La cantidad de luz.<br><br>La variable independiente es la que el investigador modifica deliberadamente.<br><br>Aquí modifica:<br>Grupo A → 2 h<br>Grupo B → 6 h<br>Grupo C → 10 h<br><br>Por lo tanto: Variable independiente = cantidad de luz<br><br>La variable que se mide (crecimiento) sería la variable dependiente." },
            { q: "Un estudiante realiza un experimento y obtiene los siguientes resultados: 20 °C = 60 s, 40 °C = 40 s, 60 °C = 20 s. ¿Cuál conclusión está mejor respaldada por los datos?", options: ["A mayor temperatura, mayor tiempo de disolución.", "La temperatura no afecta la disolución.", "A mayor temperatura, menor tiempo de disolución.", "La sustancia deja de disolverse a 60 °C."], answer: 2, explanation: "✅ Respuesta: C. A mayor temperatura, menor tiempo de disolución.<br><br>Observa:<br>Temperatura: 20 → 40 → 60 (aumenta)<br>Tiempo: 60 → 40 → 20 (disminuye)<br><br>Por lo tanto: Mayor temperatura → menor tiempo." },
            { q: "Un agricultor observa que sus cultivos producen menos después de varios años de utilizar el mismo terreno. Un análisis muestra que el suelo ha perdido una cantidad importante de nutrientes. ¿Cuál estrategia sería más adecuada para recuperar la fertilidad del suelo?", options: ["Sembrar siempre el mismo cultivo sin modificar las prácticas agrícolas.", "Aumentar indefinidamente el uso de fertilizantes químicos.", "Implementar rotación de cultivos y prácticas que aporten materia orgánica al suelo.", "Eliminar toda la vegetación del terreno después de cada cosecha."], answer: 2, explanation: "✅ Respuesta: C. Implementar rotación de cultivos y prácticas que aporten materia orgánica al suelo.<br><br>La rotación de cultivos puede ayudar a evitar el agotamiento continuo de los mismos nutrientes.<br>Además, aportar materia orgánica puede mejorar las condiciones del suelo.<br>Las otras opciones no solucionan adecuadamente el problema y algunas pueden empeorarlo." }
        ]
    },
    english: {
        title: "Inglés",
        timeLimit: 2400,
        questions: [
            { q: "<strong>PART 1 — VOCABULARY</strong><br><br>At the airport<br><br>“Passengers must show their ______ before boarding the plane.”", options: ["ticket", "pillow", "plate", "towel"], answer: 0, explanation: "✅ Respuesta: A. ticket<br><br>En un aeropuerto, los pasajeros deben mostrar su ticket (boleto/pasaje) antes de abordar.<br>ticket = boleto 🎫<br>pillow = almohada<br>plate = plato<br>towel = toalla" },
            { q: "<strong>PART 1 — VOCABULARY</strong><br><br>At school<br><br>“Students must keep the classroom clean. Please put your ______ in the trash can.”", options: ["homework", "waste", "uniform", "pencil case"], answer: 1, explanation: "✅ Respuesta: B. waste<br><br>Waste significa basura/desechos.<br>La expresión trash can significa caneca/papelera.<br>➡️ Basura → trash can." },
            { q: "<strong>PART 1 — VOCABULARY</strong><br><br>At a restaurant<br><br>“The waiter brought the food, but the customer asked for a ______ because she wanted to pay.”", options: ["menu", "bill", "kitchen", "table"], answer: 1, explanation: "✅ Respuesta: B. bill<br><br>En un restaurante, cuando quieres pagar, pides the bill = la cuenta.<br>⚠️ No confundir:<br>menu = menú<br>bill = cuenta<br>kitchen = cocina<br>table = mesa" },
            { q: "<strong>PART 1 — VOCABULARY</strong><br><br>Weather report<br><br>“Take an umbrella today. It is going to be ______.”", options: ["rainy", "sunny", "dry", "windy"], answer: 0, explanation: "✅ Respuesta: A. rainy<br><br>Si debes llevar un paraguas, la situación indica que probablemente va a llover.<br>rainy = lluvioso" },
            { q: "<strong>PART 1 — VOCABULARY</strong><br><br>“Carlos didn't buy the jacket because it was too ______. He didn't have enough money.”", options: ["cheap", "expensive", "comfortable", "colorful"], answer: 1, explanation: "✅ Respuesta: B. expensive<br><br>Si no tenía suficiente dinero y no compró la chaqueta porque era demasiado cara:<br>expensive = caro" },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>PART 2 — GRAMMAR IN CONTEXT</strong><br><br>A Busy Student<br><br>Maria is a high school student. She usually (6) ______ to school at 7:00 a.m. She likes science, but she (7) ______ mathematics very much.<br><br>Last week, she (8) ______ for an important science test. She was nervous because she (9) ______ never taken such a difficult test before.<br><br>Now she is preparing for another exam. She hopes she (10) ______ get a good result.</div>(6)", options: ["go", "goes", "going", "gone"], answer: 1, explanation: "✅ Respuesta: B. goes<br><br>“She usually ______ to school…”<br>El sujeto es she y hablamos de una rutina habitual.<br>En present simple, con: he / she / it → verbo + s<br>Por eso: She goes" },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>PART 2 — GRAMMAR IN CONTEXT</strong><br><br>A Busy Student<br><br>Maria is a high school student. She usually (6) ______ to school at 7:00 a.m. She likes science, but she (7) ______ mathematics very much.<br><br>Last week, she (8) ______ for an important science test. She was nervous because she (9) ______ never taken such a difficult test before.<br><br>Now she is preparing for another exam. She hopes she (10) ______ get a good result.</div>(7)", options: ["don't like", "doesn't like", "isn't like", "didn't likes"], answer: 1, explanation: "✅ Respuesta: B. doesn't like<br><br>“She ______ mathematics very much.”<br>Con she usamos: doesn’t + verbo base<br>Por eso: ✅ She doesn't like mathematics." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>PART 2 — GRAMMAR IN CONTEXT</strong><br><br>A Busy Student<br><br>Maria is a high school student. She usually (6) ______ to school at 7:00 a.m. She likes science, but she (7) ______ mathematics very much.<br><br>Last week, she (8) ______ for an important science test. She was nervous because she (9) ______ never taken such a difficult test before.<br><br>Now she is preparing for another exam. She hopes she (10) ______ get a good result.</div>(8)", options: ["studied", "studies", "study", "studying"], answer: 0, explanation: "✅ Respuesta: A. studied<br><br>“Last week, she ______ for an important science test.”<br>La expresión last week indica pasado.<br>Por eso usamos past simple: study → studied" },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>PART 2 — GRAMMAR IN CONTEXT</strong><br><br>A Busy Student<br><br>Maria is a high school student. She usually (6) ______ to school at 7:00 a.m. She likes science, but she (7) ______ mathematics very much.<br><br>Last week, she (8) ______ for an important science test. She was nervous because she (9) ______ never taken such a difficult test before.<br><br>Now she is preparing for another exam. She hopes she (10) ______ get a good result.</div>(9)", options: ["has", "have", "had", "is"], answer: 2, explanation: "✅ Respuesta: C. had<br><br>“She ______ never taken such a difficult test before.”<br>Aquí hablamos de algo que ocurrió antes de otro momento pasado. La estructura es: had + past participle<br>➡️ She had never taken..." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>PART 2 — GRAMMAR IN CONTEXT</strong><br><br>A Busy Student<br><br>Maria is a high school student. She usually (6) ______ to school at 7:00 a.m. She likes science, but she (7) ______ mathematics very much.<br><br>Last week, she (8) ______ for an important science test. She was nervous because she (9) ______ never taken such a difficult test before.<br><br>Now she is preparing for another exam. She hopes she (10) ______ get a good result.</div>(10)", options: ["will", "would", "did", "has"], answer: 0, explanation: "✅ Respuesta: A. will<br><br>“She hopes she ______ get a good result.”<br>La idea se refiere al futuro: will + verbo<br>➡️ She hopes she will get a good result." },
            { q: "<strong>PART 3 — COMMUNICATIVE FUNCTION</strong><br><br>Laura: “I'm really nervous about tomorrow's exam.”<br>David: “______”", options: ["Don't worry. You've studied a lot.", "Yes, tomorrow is Tuesday.", "The exam is on the table.", "I studied yesterday morning."], answer: 0, explanation: "✅ Respuesta: A. Don't worry. You've studied a lot.<br><br>Laura está expresando nervios/preocupación. La respuesta apropiada es darle ánimo." },
            { q: "<strong>PART 3 — COMMUNICATIVE FUNCTION</strong><br><br>Tourist: “Excuse me, how can I get to the museum?”<br>Local: “______”", options: ["It's very interesting.", "Go straight and turn left at the bank.", "I visited it last year.", "Museums are expensive."], answer: 1, explanation: "✅ Respuesta: B. Go straight and turn left at the bank.<br><br>El turista está preguntando cómo llegar. La respuesta correcta debe dar instrucciones." },
            { q: "<strong>PART 3 — COMMUNICATIVE FUNCTION</strong><br><br>Teacher: “Why are you using your phone during the test?”<br>Student: “______”", options: ["Because I was checking the answers.", "At three o'clock.", "It's my favorite phone.", "Yes, I use it every day."], answer: 0, explanation: "✅ Respuesta: A. Because I was checking the answers.<br><br>La palabra why pregunta por una razón. La respuesta correcta debe comenzar con una explicación: Because..." },
            { q: "<strong>PART 3 — COMMUNICATIVE FUNCTION</strong><br><br>Daniel: “Would you like to come to my birthday party?”<br>Sofia: “______”", options: ["Yes, I'd love to.", "Yes, I have a birthday.", "At my house.", "It was yesterday."], answer: 0, explanation: "✅ Respuesta: A. Yes, I'd love to.<br><br>Una respuesta natural para aceptar una invitación significa: Sí, me encantaría." },
            { q: "<strong>PART 3 — COMMUNICATIVE FUNCTION</strong><br><br>Mom: “Could you help me clean the kitchen?”<br>Son: “______”", options: ["Sure, I'll do it now.", "The kitchen is downstairs.", "Yes, I cleaned yesterday.", "No, it isn't a kitchen."], answer: 0, explanation: "✅ Respuesta: A. Sure, I'll do it now.<br><br>La mamá pide ayuda. La respuesta debe aceptar o rechazar la petición. = Claro, lo haré ahora." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>PART 4 — READING: SIGNS AND NOTICES</strong><br><br>NOTICE<br>LIBRARY<br><br>Please return all books before Friday.<br>Books returned late will have an additional charge.<br>The library will be closed on Saturday.</div>What should students do before Friday?", options: ["Buy new books.", "Return the books they borrowed.", "Study at the library.", "Pay for all the books."], answer: 1, explanation: "✅ Respuesta: B. Return the books they borrowed.<br><br>El aviso dice: “Please return all books before Friday.” Por lo tanto, los estudiantes deben devolver los libros antes del viernes." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>PART 4 — READING: SIGNS AND NOTICES</strong><br><br>NOTICE<br>LIBRARY<br><br>Please return all books before Friday.<br>Books returned late will have an additional charge.<br>The library will be closed on Saturday.</div>What happens if a student returns a book late?", options: ["The library gives the student another book.", "The student cannot enter the library.", "The student may have to pay an additional charge.", "The student must return the book on Saturday."], answer: 2, explanation: "✅ Respuesta: C. The student may have to pay an additional charge.<br><br>El aviso dice: “Books returned late will have an additional charge.” Por lo tanto, devolver tarde el libro puede significar pagar un cargo adicional." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>PART 4 — READING: SIGNS AND NOTICES</strong><br><br>NOTICE<br>LIBRARY<br><br>Please return all books before Friday.<br>Books returned late will have an additional charge.<br>The library will be closed on Saturday.</div>When will the library be closed?", options: ["Friday.", "Saturday.", "Sunday.", "Monday."], answer: 1, explanation: "✅ Respuesta: B. Saturday.<br><br>El aviso dice: “The library will be closed on Saturday.”" },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>PART 5 — READING COMPREHENSION</strong><br><br>Learning to Cook<br><br>When Daniel was younger, he never wanted to help in the kitchen. He thought cooking was boring and preferred playing video games. Last year, however, his mother asked him to prepare dinner while she was working late. At first, Daniel was worried because he didn't know how to cook.<br><br>He decided to watch some videos online and followed the instructions carefully. The meal was not perfect, but his family enjoyed it. Since then, Daniel has continued cooking. He now prepares dinner twice a week and says that cooking has become one of his favorite activities.</div>Why didn't Daniel want to cook when he was younger?", options: ["He didn't have a kitchen.", "He thought cooking was boring.", "His mother didn't allow him to cook.", "He preferred watching cooking videos."], answer: 1, explanation: "✅ Respuesta: B. He thought cooking was boring.<br><br>El texto dice que cuando Daniel era más joven: “He thought cooking was boring...”" },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>PART 5 — READING COMPREHENSION</strong><br><br>Learning to Cook<br><br>When Daniel was younger, he never wanted to help in the kitchen. He thought cooking was boring and preferred playing video games. Last year, however, his mother asked him to prepare dinner while she was working late. At first, Daniel was worried because he didn't know how to cook.<br><br>He decided to watch some videos online and followed the instructions carefully. The meal was not perfect, but his family enjoyed it. Since then, Daniel has continued cooking. He now prepares dinner twice a week and says that cooking has become one of his favorite activities.</div>What caused Daniel to start learning how to cook?", options: ["His mother asked him to prepare dinner.", "His friends invited him to a restaurant.", "He wanted to become a professional chef.", "His school gave him a cooking assignment."], answer: 0, explanation: "✅ Respuesta: A. His mother asked him to prepare dinner.<br><br>El cambio ocurrió cuando su madre le pidió que preparara la cena mientras ella trabajaba." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>PART 5 — READING COMPREHENSION</strong><br><br>Learning to Cook<br><br>When Daniel was younger, he never wanted to help in the kitchen. He thought cooking was boring and preferred playing video games. Last year, however, his mother asked him to prepare dinner while she was working late. At first, Daniel was worried because he didn't know how to cook.<br><br>He decided to watch some videos online and followed the instructions carefully. The meal was not perfect, but his family enjoyed it. Since then, Daniel has continued cooking. He now prepares dinner twice a week and says that cooking has become one of his favorite activities.</div>What happened after Daniel prepared his first meal?", options: ["His family disliked it.", "He stopped cooking.", "His family enjoyed it even though it wasn't perfect.", "His mother taught him everything immediately."], answer: 2, explanation: "✅ Respuesta: C. His family enjoyed it even though it wasn't perfect.<br><br>El texto dice que la comida no fue perfecta, pero su familia la disfrutó." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>PART 5 — READING COMPREHENSION</strong><br><br>Learning to Cook<br><br>When Daniel was younger, he never wanted to help in the kitchen. He thought cooking was boring and preferred playing video games. Last year, however, his mother asked him to prepare dinner while she was working late. At first, Daniel was worried because he didn't know how to cook.<br><br>He decided to watch some videos online and followed the instructions carefully. The meal was not perfect, but his family enjoyed it. Since then, Daniel has continued cooking. He now prepares dinner twice a week and says that cooking has become one of his favorite activities.</div>What can be inferred about Daniel?", options: ["He changed his opinion about cooking.", "He still thinks cooking is boring.", "He only cooks when his mother is away.", "He wants to stop playing video games completely."], answer: 0, explanation: "✅ Respuesta: A. He changed his opinion about cooking.<br><br>Al principio: cooking = boring. Después: cooking = one of his favorite activities. Podemos inferir que cambió su opinión." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>PART 6 — READING AND INFERENCE</strong><br><br>The School Garden<br><br>Last year, students at a school decided to create a small garden behind the science building. They planted tomatoes, lettuce and several types of herbs. At first, the students had difficulty keeping the plants alive because they often forgot to water them.<br><br>The science teacher suggested creating a weekly schedule. Each group of students became responsible for watering the garden on a different day. After a few weeks, the plants began growing better. The students also started using some of the vegetables in the school cafeteria.</div>What was the main problem at the beginning?", options: ["The students didn't know what to plant.", "The garden was too large.", "The students often forgot to water the plants.", "The cafeteria didn't want vegetables."], answer: 2, explanation: "✅ Respuesta: C. The students often forgot to water the plants.<br><br>El texto dice directamente: “the students had difficulty keeping the plants alive because they often forgot to water them.”" },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>PART 6 — READING AND INFERENCE</strong><br><br>The School Garden<br><br>Last year, students at a school decided to create a small garden behind the science building. They planted tomatoes, lettuce and several types of herbs. At first, the students had difficulty keeping the plants alive because they often forgot to water them.<br><br>The science teacher suggested creating a weekly schedule. Each group of students became responsible for watering the garden on a different day. After a few weeks, the plants began growing better. The students also started using some of the vegetables in the school cafeteria.</div>Why did the teacher suggest creating a schedule?", options: ["To make the garden smaller.", "To make sure someone was responsible for watering the plants.", "To teach students how to cook.", "To replace the science classes."], answer: 1, explanation: "✅ Respuesta: B. To make sure someone was responsible for watering the plants.<br><br>La profesora creó un horario para asegurarse de que alguien sea responsable cada día." },
            { q: "<div style='background:rgba(255,255,255,0.05); padding:15px; border-radius:8px; margin-bottom:15px; border-left:4px solid var(--primary);'><strong>PART 6 — READING AND INFERENCE</strong><br><br>The School Garden<br><br>Last year, students at a school decided to create a small garden behind the science building. They planted tomatoes, lettuce and several types of herbs. At first, the students had difficulty keeping the plants alive because they often forgot to water them.<br><br>The science teacher suggested creating a weekly schedule. Each group of students became responsible for watering the garden on a different day. After a few weeks, the plants began growing better. The students also started using some of the vegetables in the school cafeteria.</div>What is the main idea of the text?", options: ["Students should never work in gardens.", "The school garden failed because students had too much work.", "Organizing responsibilities helped students maintain the garden successfully.", "The cafeteria refused to use vegetables from the garden."], answer: 2, explanation: "✅ Respuesta: C. Organizing responsibilities helped students maintain the garden successfully.<br><br>La idea central es que organizar las responsabilidades ayudó a mantener exitosamente el jardín." }
        ]
    },
    sociales: {
        title: "Sociales y Ciudadanas",
        timeLimit: 2400,
        questions: [
            { q: "<strong>BLOQUE 1 — HISTORIA</strong><br><br>Durante el siglo XIX, varios países latinoamericanos obtuvieron su independencia de España. Sin embargo, después de la independencia, muchos de estos países tuvieron dificultades para establecer gobiernos estables.<br><br>¿Cuál situación explica mejor una de estas dificultades?", options: ["La desaparición completa de las diferencias sociales.", "Las disputas entre diferentes grupos sobre cómo organizar el nuevo Estado.", "La ausencia total de conflictos entre las regiones.", "La eliminación inmediata de las desigualdades económicas."], answer: 1, explanation: "✅ Respuesta: B. Las disputas entre diferentes grupos sobre cómo organizar el nuevo Estado.<br><br>Después de la independencia, no todos estaban de acuerdo sobre cómo debía organizarse el nuevo país: hubo conflictos políticos, regionales y económicos." },
            { q: "<strong>BLOQUE 1 — HISTORIA</strong><br><br>Durante la Revolución Industrial, muchas personas abandonaron las zonas rurales y se trasladaron a las ciudades para trabajar en fábricas.<br><br>¿Cuál fue una consecuencia de este proceso?", options: ["La disminución de la población urbana.", "El crecimiento de las ciudades y de la población obrera.", "La desaparición de las fábricas.", "El regreso masivo de los trabajadores al campo."], answer: 1, explanation: "✅ Respuesta: B. El crecimiento de las ciudades y de la población obrera.<br><br>La Revolución Industrial provocó una fuerte migración del campo hacia las ciudades, donde las personas buscaban trabajo en las fábricas." },
            { q: "<strong>BLOQUE 1 — HISTORIA</strong><br><br>Lee el siguiente fragmento:<br>“Todos los hombres nacen y permanecen libres e iguales en derechos. Las distinciones sociales solo pueden fundarse en la utilidad común.”<br><br>Este principio está relacionado principalmente con:", options: ["La Revolución Francesa.", "La Revolución Industrial.", "La expansión del feudalismo.", "La conquista de América."], answer: 0, explanation: "✅ Respuesta: A. La Revolución Francesa.<br><br>El fragmento habla de libertad e igualdad de derechos, principios fundamentales de la Revolución Francesa y de la Declaración de los Derechos del Hombre y del Ciudadano." },
            { q: "<strong>BLOQUE 1 — HISTORIA</strong><br><br>Durante la Guerra Fría, Estados Unidos y la Unión Soviética compitieron por ampliar su influencia política, económica y militar en diferentes regiones del mundo.<br><br>¿Cuál característica fue propia de este periodo?", options: ["Una guerra militar directa y permanente entre Estados Unidos y la Unión Soviética.", "La competencia entre dos grandes bloques políticos e ideológicos.", "La desaparición de las armas nucleares.", "La unión política de Estados Unidos y la Unión Soviética."], answer: 1, explanation: "✅ Respuesta: B. La competencia entre dos grandes bloques políticos e ideológicos.<br><br>La Guerra Fría enfrentó principalmente a: 🇺🇸 Estados Unidos → capitalismo. 🇷🇺 Unión Soviética → comunismo. No fue una guerra militar directa y permanente entre ambos." },
            { q: "<strong>BLOQUE 1 — HISTORIA</strong><br><br>Un historiador encuentra dos documentos sobre un mismo acontecimiento. El primero fue escrito por un funcionario del gobierno y el segundo por una persona que participó en una protesta contra ese gobierno.<br><br>¿Qué debería hacer el historiador para analizar adecuadamente las fuentes?", options: ["Elegir automáticamente la fuente del funcionario.", "Elegir automáticamente la fuente del manifestante.", "Comparar las perspectivas y considerar el contexto de producción de cada fuente.", "Ignorar ambas fuentes porque presentan opiniones diferentes."], answer: 2, explanation: "✅ Respuesta: C. Comparar las perspectivas y considerar el contexto de producción de cada fuente.<br><br>Una fuente histórica puede presentar una perspectiva particular. El historiador debe analizar quién la produjo, cuándo, por qué y desde qué posición, y contrastarla con otras fuentes." },
            { q: "<strong>BLOQUE 2 — GEOGRAFÍA Y AMBIENTE</strong><br><br>Una ciudad ha experimentado un crecimiento acelerado de su población. Como consecuencia, han aumentado la construcción de viviendas, el tráfico y la producción de residuos.<br><br>¿Cuál problema está directamente relacionado con este proceso?", options: ["Urbanización acelerada.", "Disminución de la población urbana.", "Reducción de la actividad económica.", "Desaparición de las zonas metropolitanas."], answer: 0, explanation: "✅ Respuesta: A. Urbanización acelerada.<br><br>El crecimiento rápido de la población urbana junto con mayor construcción, tráfico y residuos son características de un proceso de urbanización." },
            { q: "<strong>BLOQUE 2 — GEOGRAFÍA Y AMBIENTE</strong><br><br>Una región tiene abundantes recursos hídricos, pero gran parte de su población no tiene acceso permanente a agua potable.<br><br>¿Cuál conclusión es más adecuada?", options: ["Tener recursos naturales garantiza automáticamente el acceso de toda la población.", "La disponibilidad de un recurso no garantiza una distribución equitativa ni infraestructura adecuada.", "El agua no es necesaria para las comunidades.", "La región necesariamente carece de fuentes de agua."], answer: 1, explanation: "✅ Respuesta: B. La disponibilidad de un recurso no garantiza una distribución equitativa ni infraestructura adecuada.<br><br>Puede existir mucha agua en una región y, aun así, algunas personas no tener agua potable por problemas de infraestructura, distribución o acceso." },
            { q: "<strong>BLOQUE 2 — GEOGRAFÍA Y AMBIENTE</strong><br><br>En una zona montañosa se talan grandes extensiones de bosque para ampliar las áreas de cultivo. Después de varios años aumentan los deslizamientos durante las temporadas de lluvia.<br><br>¿Cuál relación explica mejor esta situación?", options: ["La deforestación puede aumentar la vulnerabilidad del suelo a la erosión.", "La agricultura elimina completamente las lluvias.", "Los árboles provocan necesariamente deslizamientos.", "La tala aumenta la capacidad del suelo para absorber agua."], answer: 0, explanation: "✅ Respuesta: A. La deforestación puede aumentar la vulnerabilidad del suelo a la erosión.<br><br>Los árboles y sus raíces ayudan a estabilizar el suelo. Al eliminarlos, el terreno puede quedar más expuesto a la erosión y a deslizamientos." },
            { q: "<strong>BLOQUE 2 — GEOGRAFÍA Y AMBIENTE</strong><br><br>Dos ciudades tienen aproximadamente la misma cantidad de habitantes. Sin embargo, una está ubicada en una zona costera y la otra en una región montañosa.<br><br>¿Cuál factor geográfico podría generar diferencias en sus actividades económicas?", options: ["La ubicación y las características físicas del territorio.", "El número exacto de habitantes.", "El idioma oficial del país únicamente.", "La existencia de una Constitución nacional."], answer: 0, explanation: "✅ Respuesta: A. La ubicación y las características físicas del territorio.<br><br>La costa y la montaña presentan condiciones diferentes que pueden influir en actividades como agricultura, pesca, turismo, transporte y comercio." },
            { q: "<strong>BLOQUE 2 — GEOGRAFÍA Y AMBIENTE</strong><br><br>Un país exporta principalmente petróleo y depende de sus ingresos para financiar parte del gasto público. Si el precio internacional del petróleo disminuye considerablemente, ¿qué podría ocurrir?", options: ["Aumentarían necesariamente los ingresos provenientes del petróleo.", "Podrían disminuir los ingresos del país relacionados con esas exportaciones.", "El petróleo dejaría inmediatamente de existir.", "Las exportaciones aumentarían automáticamente."], answer: 1, explanation: "✅ Respuesta: B. Podrían disminuir los ingresos del país relacionados con esas exportaciones.<br><br>Si el país depende de vender petróleo y el precio internacional baja, puede recibir menos dinero por sus exportaciones." },
            { q: "<strong>BLOQUE 3 — CONSTITUCIÓN Y CIUDADANÍA</strong><br><br>En una institución educativa, un estudiante es excluido de una actividad debido a su origen étnico.<br><br>¿Cuál principio constitucional se está vulnerando principalmente?", options: ["Igualdad y no discriminación.", "Libertad de circulación.", "Libertad económica.", "Derecho a la propiedad privada."], answer: 0, explanation: "✅ Respuesta: A. Igualdad y no discriminación.<br><br>Excluir a una persona por su origen étnico constituye discriminación y vulnera el principio de igualdad." },
            { q: "<strong>BLOQUE 3 — CONSTITUCIÓN Y CIUDADANÍA</strong><br><br>Un grupo de ciudadanos quiere expresar públicamente su desacuerdo con una decisión del gobierno. Organizan una manifestación pacífica.<br><br>¿Cuál derecho está relacionado directamente con esta acción?", options: ["Derecho a la protesta y reunión pacífica.", "Derecho a la propiedad privada.", "Derecho al secreto bancario.", "Derecho a recibir una herencia."], answer: 0, explanation: "✅ Respuesta: A. Derecho a la protesta y reunión pacífica.<br><br>Una manifestación pacífica es una forma de participación ciudadana y está relacionada con los derechos de reunión, expresión y protesta pacífica." },
            { q: "<strong>BLOQUE 3 — CONSTITUCIÓN Y CIUDADANÍA</strong><br><br>En una democracia, un ciudadano afirma:<br>“No estoy de acuerdo con la opinión de mi vecino, por lo tanto debería prohibirse que la exprese”.<br><br>¿Cuál principio democrático contradice esta afirmación?", options: ["Pluralismo y libertad de expresión.", "División del trabajo.", "Propiedad privada.", "Centralización administrativa."], answer: 0, explanation: "✅ Respuesta: A. Pluralismo y libertad de expresión.<br><br>En una democracia pueden existir opiniones diferentes. No estar de acuerdo con alguien no justifica impedirle expresar su opinión." },
            { q: "<strong>BLOQUE 3 — CONSTITUCIÓN Y CIUDADANÍA</strong><br><br>Un alcalde utiliza recursos públicos para beneficiar económicamente a sus familiares.<br><br>¿Por qué esta conducta constituye un problema para la democracia?", options: ["Porque los funcionarios públicos deben administrar los recursos de acuerdo con el interés general y la ley.", "Porque los familiares de los funcionarios no pueden trabajar.", "Porque todos los recursos públicos deben entregarse a empresas privadas.", "Porque los alcaldes no pueden tomar decisiones."], answer: 0, explanation: "✅ Respuesta: A. Porque los funcionarios públicos deben administrar los recursos de acuerdo con el interés general y la ley.<br><br>Usar recursos públicos para beneficiar a familiares representa un posible abuso del poder público y contradice principios de transparencia e interés general." },
            { q: "<strong>BLOQUE 3 — CONSTITUCIÓN Y CIUDADANÍA</strong><br><br>En un colegio se presenta un conflicto entre dos estudiantes. En lugar de castigarlos inmediatamente, el colegio organiza una reunión en la que ambos explican sus posiciones y buscan un acuerdo.<br><br>¿Qué mecanismo está siendo utilizado principalmente?", options: ["Diálogo y resolución pacífica de conflictos.", "Censura.", "Exclusión.", "Imposición unilateral."], answer: 0, explanation: "✅ Respuesta: A. Diálogo y resolución pacífica de conflictos.<br><br>Los estudiantes explican sus posiciones y buscan llegar a un acuerdo en lugar de imponer una solución mediante la fuerza." },
            { q: "<strong>BLOQUE 4 — ECONOMÍA</strong><br><br>Si aumenta considerablemente el precio de un producto y las demás condiciones permanecen iguales, ¿qué podría ocurrir con la cantidad demandada?", options: ["Podría disminuir.", "Aumentaría necesariamente.", "Permanecería siempre exactamente igual.", "Desaparecería la oferta."], answer: 0, explanation: "✅ Respuesta: A. Podría disminuir.<br><br>En términos generales, manteniendo las demás condiciones iguales, cuando aumenta el precio de un producto, la cantidad demandada tiende a disminuir." },
            { q: "<strong>BLOQUE 4 — ECONOMÍA</strong><br><br>Una familia tiene un presupuesto limitado y debe decidir entre comprar un computador nuevo o utilizar ese dinero para reparar su vivienda.<br><br>Esta situación representa principalmente:", options: ["Escasez y necesidad de tomar decisiones.", "Abundancia ilimitada de recursos.", "Ausencia de necesidades.", "Eliminación del costo de oportunidad."], answer: 0, explanation: "✅ Respuesta: A. Escasez y necesidad de tomar decisiones.<br><br>La familia tiene recursos limitados y debe escoger cómo utilizarlos. Eso implica renunciar a una alternativa para elegir otra: costo de oportunidad." },
            { q: "<strong>BLOQUE 4 — ECONOMÍA</strong><br><br>Un gobierno decide aumentar los impuestos a ciertos productos contaminantes y utilizar parte de esos recursos para financiar programas ambientales.<br><br>¿Cuál podría ser una finalidad de esta medida?", options: ["Desincentivar determinadas actividades contaminantes y financiar acciones ambientales.", "Eliminar completamente todos los impuestos.", "Aumentar necesariamente el consumo de productos contaminantes.", "Impedir cualquier actividad económica."], answer: 0, explanation: "✅ Respuesta: A. Desincentivar determinadas actividades contaminantes y financiar acciones ambientales.<br><br>El impuesto puede hacer que contaminar resulte más costoso y, al mismo tiempo, generar recursos para programas ambientales." },
            { q: "<strong>BLOQUE 4 — ECONOMÍA</strong><br><br>Una persona deposita dinero en un banco y recibe intereses a cambio.<br><br>¿Qué función económica está realizando principalmente el banco?", options: ["Intermediar entre quienes ahorran y quienes necesitan financiación.", "Eliminar el dinero de la economía.", "Prohibir el ahorro.", "Fijar todos los precios del país."], answer: 0, explanation: "✅ Respuesta: A. Intermediar entre quienes ahorran y quienes necesitan financiación.<br><br>El banco recibe depósitos de ahorradores y puede utilizar esos recursos para otorgar créditos.<br>👉 Esta función se llama intermediación financiera." },
            { q: "<strong>BLOQUE 4 — ECONOMÍA</strong><br><br>En un país, los precios de muchos bienes aumentan durante un periodo prolongado.<br><br>Este fenómeno se denomina:", options: ["Inflación.", "Deflación.", "Exportación.", "Producción."], answer: 0, explanation: "✅ Respuesta: A. Inflación.<br><br>La inflación es un aumento generalizado y sostenido de los precios de bienes y servicios durante un periodo." },
            { q: "<strong>BLOQUE 5 — ANÁLISIS DE SITUACIONES</strong><br><br>Un municipio planea construir una carretera que atravesará una zona donde vive una comunidad indígena. Antes de aprobar el proyecto, las autoridades realizan reuniones con la comunidad para conocer sus opiniones y analizar posibles impactos.<br><br>¿Por qué este proceso es importante?", options: ["Porque permite considerar los derechos e intereses de la comunidad afectada.", "Porque garantiza que el proyecto será aprobado sin modificaciones.", "Porque elimina la necesidad de estudios ambientales.", "Porque impide que el Estado construya cualquier carretera."], answer: 0, explanation: "✅ Respuesta: A. Porque permite considerar los derechos e intereses de la comunidad afectada.<br><br>Si una obra afecta a una comunidad, escucharla permite identificar impactos, preocupaciones y derechos que deben ser considerados." },
            { q: "<strong>BLOQUE 5 — ANÁLISIS DE SITUACIONES</strong><br><br>Un periódico publica una noticia afirmando que una determinada política pública ha sido un completo fracaso. Sin embargo, la noticia solo presenta declaraciones de personas que están en contra de la política y no incluye información de quienes la apoyan ni datos sobre sus resultados.<br><br>¿Cuál es el principal problema de la noticia?", options: ["Presenta una perspectiva limitada para evaluar la situación.", "Utiliza demasiadas fuentes.", "Presenta información de diferentes posiciones.", "Incluye demasiados datos estadísticos."], answer: 0, explanation: "✅ Respuesta: A. Presenta una perspectiva limitada para evaluar la situación.<br><br>El periódico solamente muestra opiniones de personas que están en contra. Para evaluar si una política realmente fracasó, sería mejor revisar datos, resultados y diferentes perspectivas." },
            { q: "<strong>BLOQUE 5 — ANÁLISIS DE SITUACIONES</strong><br><br>En una elección escolar, un candidato promete entregar regalos a todos los estudiantes si gana.<br><br>¿Cuál es el principal problema de esta estrategia?", options: ["Busca influir en las decisiones electorales mediante beneficios personales en lugar de propuestas políticas.", "Promueve necesariamente la participación democrática.", "Garantiza que todos los estudiantes votarán libremente.", "Constituye una forma de debate académico."], answer: 0, explanation: "✅ Respuesta: A. Busca influir en las decisiones electorales mediante beneficios personales en lugar de propuestas políticas.<br><br>Prometer regalos a cambio de apoyo electoral se relaciona con prácticas de clientelismo o compra de apoyo, y no con una competencia basada principalmente en propuestas." },
            { q: "<strong>BLOQUE 5 — ANÁLISIS DE SITUACIONES</strong><br><br>Un grupo de ciudadanos considera que una norma municipal afecta negativamente sus derechos. Antes de protestar, revisan la Constitución, consultan la norma y buscan asesoría jurídica.<br><br>¿Qué muestra principalmente esta actuación?", options: ["Una participación ciudadana informada.", "Una renuncia a los derechos ciudadanos.", "Una oposición a la democracia.", "Una eliminación de los mecanismos legales."], answer: 0, explanation: "✅ Respuesta: A. Una participación ciudadana informada.<br><br>Los ciudadanos: Revisan la Constitución. Consultan la norma. Buscan asesoría. Luego toman una decisión. Eso demuestra participación informada y fundamentada." },
            { q: "<strong>BLOQUE 5 — ANÁLISIS DE SITUACIONES</strong><br><br>Un gobierno quiere reducir la desigualdad económica. Propone entregar una ayuda económica temporal a familias de bajos ingresos, mejorar el acceso a la educación y ampliar los servicios de salud.<br><br>¿Cuál es la mejor razón para considerar que estas medidas podrían contribuir a reducir la desigualdad?", options: ["Porque buscan mejorar las condiciones y oportunidades de los grupos con menores recursos.", "Porque eliminan automáticamente todas las diferencias económicas.", "Porque impiden que las personas con mayores ingresos trabajen.", "Porque hacen innecesaria la educación."], answer: 0, explanation: "✅ Respuesta: A. Porque buscan mejorar las condiciones y oportunidades de los grupos con menores recursos.<br><br>Las medidas propuestas atacan diferentes dimensiones de la desigualdad:<br>💰 ayuda económica → ingresos;<br>🎓 educación → oportunidades;<br>🏥 salud → acceso a servicios básicos.<br>Por eso pueden contribuir a reducir desigualdades." }
        ]
    }
};

// Application State
let activeUser = null;
let currentExamData = null;
let currentSubjectId = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let timerInterval;
let timeLeft = 0; 
let completedExams = {}; 

// Initialize
function init() {
    updateSlotsInfo();
    checkActiveSession();
}

// Auth Handlers
window.switchTab = function(tabName) {
    document.getElementById('login-error').textContent = '';
    document.getElementById('register-error').textContent = '';
    document.getElementById('register-success').textContent = '';

    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.textContent.toLowerCase().includes(tabName === 'login' ? 'iniciar' : 'registrar')) {
            tab.classList.add('active');
        }
    });

    if (tabName === 'login') {
        document.getElementById('login-form').classList.add('active');
        document.getElementById('register-form').classList.remove('active');
    } else {
        document.getElementById('login-form').classList.remove('active');
        document.getElementById('register-form').classList.add('active');
    }
}

function getStudents() {
    return JSON.parse(localStorage.getItem('icfes_students') || '[]');
}

function saveStudents(students) {
    localStorage.setItem('icfes_students', JSON.stringify(students));
    updateSlotsInfo();
}

function updateSlotsInfo() {
    const available = MAX_STUDENTS - getStudents().length;
    document.getElementById('slots-available').textContent = available;
    const btnReg = document.getElementById('btn-register');
    if (available <= 0) {
        btnReg.disabled = true;
        btnReg.textContent = 'Cupos agotados';
    }
}

window.handleRegister = function(e) {
    e.preventDefault();
    const role = document.getElementById('reg-role').value;
    const name = document.getElementById('reg-name').value.trim();
    const password = document.getElementById('reg-password').value;

    if (role === 'profesor') {
        localStorage.setItem('icfes_teacher', JSON.stringify({ name, password }));
        document.getElementById('register-success').textContent = 'Profesor registrado exitosamente.';
        document.getElementById('register-error').textContent = '';
        e.target.reset();
        setTimeout(() => switchTab('login'), 1500);
        return;
    }

    const age = document.getElementById('reg-age').value.trim();
    const grade = document.getElementById('reg-grade').value.trim();
    const username = document.getElementById('reg-username').value.trim();

    const students = getStudents();
    if (students.length >= MAX_STUDENTS) {
        document.getElementById('register-error').textContent = 'Límite máximo de estudiantes alcanzado.';
        return;
    }
    if (students.some(s => s.username === username) || username.toLowerCase() === 'profesor') {
        document.getElementById('register-error').textContent = 'El usuario ya existe o no está permitido.';
        return;
    }

    students.push({ name, age, grade, username, password, results: {} });
    saveStudents(students);
    document.getElementById('register-success').textContent = 'Registrado exitosamente.';
    document.getElementById('register-error').textContent = '';
    e.target.reset();
    setTimeout(() => switchTab('login'), 1500);
}

window.handleLogin = function(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    
    if (username.toLowerCase() === 'profesor') {
        if (password === '123') {
            activeUser = { username: 'profesor', role: 'teacher', name: 'Profesor' };
            localStorage.setItem('icfes_active_user', JSON.stringify(activeUser));
            showTeacherDashboard();
            e.target.reset();
            return;
        } else {
            document.getElementById('login-error').textContent = 'Contraseña incorrecta.';
            return;
        }
    }
    
    const students = getStudents();
    const student = students.find(s => s.username === username);

    if (!student || student.password !== password) {
        document.getElementById('login-error').textContent = 'Credenciales inválidas.';
        return;
    }

    activeUser = student;
    localStorage.setItem('icfes_active_user', JSON.stringify(student));
    showDashboard();
    e.target.reset();
}

window.handleLogout = function() {
    activeUser = null;
    localStorage.removeItem('icfes_active_user');
    document.getElementById('auth-container').classList.remove('hidden');
    document.getElementById('dashboard-container').classList.add('hidden');
    document.getElementById('exam-container').classList.add('hidden');
    document.getElementById('results-container').classList.add('hidden');
    document.getElementById('global-results-container').classList.add('hidden');
    document.getElementById('teacher-dashboard-container').classList.add('hidden');
}

function checkActiveSession() {
    const savedUser = localStorage.getItem('icfes_active_user');
    if (savedUser) {
        activeUser = JSON.parse(savedUser);
        if (activeUser.role === 'teacher') {
            showTeacherDashboard();
        } else {
            showDashboard();
        }
    }
}

window.deleteStudent = function(username) {
    if (confirm(`¿Estás seguro de que quieres eliminar al estudiante con usuario '${username}'?`)) {
        let students = getStudents();
        students = students.filter(s => s.username !== username);
        saveStudents(students);
        showTeacherDashboard();
    }
}

function showTeacherDashboard() {
    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('dashboard-container').classList.add('hidden');
    document.getElementById('exam-container').classList.add('hidden');
    document.getElementById('results-container').classList.add('hidden');
    document.getElementById('global-results-container').classList.add('hidden');
    
    document.getElementById('teacher-dashboard-container').classList.remove('hidden');
    
    const students = getStudents();
    document.getElementById('teacher-stat-total').textContent = students.length;
    
    let globalTotalScore = 0;
    let globalTotalQuestions = 0;
    
    const tbody = document.getElementById('teacher-table-body');
    tbody.innerHTML = '';
    
    students.forEach(student => {
        let studentTotalScore = 0;
        let studentTotalQuestions = 0;
        
        let scoresHtml = '';
        Object.keys(examData).forEach(subject => {
            const res = student.results && student.results[subject];
            if (res) {
                studentTotalScore += res.score;
                studentTotalQuestions += res.total;
                scoresHtml += `<td style="padding: 12px 10px; text-align: center; color: var(--success); font-weight: bold;">${res.score}/${res.total}</td>`;
            } else {
                scoresHtml += `<td style="padding: 12px 10px; text-align: center; color: var(--text-muted);">-</td>`;
            }
        });
        
        let studentGlobal = '-';
        if (studentTotalQuestions > 0) {
            studentGlobal = Math.round((studentTotalScore / studentTotalQuestions) * 500);
            globalTotalScore += studentTotalScore;
            globalTotalQuestions += studentTotalQuestions;
        }
        
        const tr = document.createElement('tr');
        tr.style.borderBottom = '1px solid var(--glass-border)';
        tr.innerHTML = `
            <td style="padding: 12px 10px;">
                <strong>${student.name}</strong><br>
                <small style="color: var(--text-muted);">@${student.username}</small>
            </td>
            <td style="padding: 12px 10px;">${student.age || '-'}</td>
            <td style="padding: 12px 10px;">${student.grade || '-'}</td>
            ${scoresHtml}
            <td style="padding: 12px 10px; text-align: center; font-weight: bold; color: #3b82f6;">${studentGlobal}</td>
            <td style="padding: 12px 10px; text-align: center;">
                <button onclick="deleteStudent('${student.username}')" style="background: rgba(239, 68, 68, 0.2); color: var(--error); border: 1px solid rgba(239, 68, 68, 0.4); padding: 5px 10px; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">Eliminar</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    if (globalTotalQuestions > 0) {
        document.getElementById('teacher-stat-avg').textContent = Math.round((globalTotalScore / globalTotalQuestions) * 500) + ' pts';
    } else {
        document.getElementById('teacher-stat-avg').textContent = '0 pts';
    }
}

function showDashboard() {
    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('exam-container').classList.add('hidden');
    document.getElementById('results-container').classList.add('hidden');
    document.getElementById('global-results-container').classList.add('hidden');
    
    const dash = document.getElementById('dashboard-container');
    dash.classList.remove('hidden');
    document.getElementById('user-display-name').textContent = activeUser.name;
    
    completedExams = activeUser.results || {};
    let allCompleted = true;
    
    Object.keys(examData).forEach(subject => {
        const card = document.getElementById(`card-${subject}`);
        const indicator = card.querySelector('.status-indicator');
        
        let actionContainer = card.querySelector('.card-actions');
        if (!actionContainer) {
            actionContainer = document.createElement('div');
            actionContainer.className = 'card-actions';
            const existingBtn = card.querySelector('button');
            if(existingBtn) existingBtn.remove();
            card.appendChild(actionContainer);
        }

        if (completedExams[subject]) {
            card.classList.add('completed');
            indicator.textContent = `Completado - ${completedExams[subject].score}/${examData[subject].questions.length}`;
            
            let html = '';
            if (completedExams[subject].userAnswers) {
                 html += `<button class="btn primary-btn" onclick="reviewExam('${subject}')" style="margin-bottom: 10px;">Ver Resultados</button>`;
            }
            html += `<button class="btn secondary-btn" onclick="startExam('${subject}')">Repetir Prueba</button>`;
            actionContainer.innerHTML = html;
        } else {
            card.classList.remove('completed');
            indicator.textContent = 'Pendiente';
            allCompleted = false;
            
            actionContainer.innerHTML = `<button class="btn secondary-btn" onclick="startExam('${subject}')">Comenzar Prueba</button>`;
        }
    });
    
    const globalBtn = document.getElementById('global-action-btn');
    if (allCompleted) {
        globalBtn.classList.remove('hidden');
    } else {
        globalBtn.classList.add('hidden');
    }
}

// --- EXAM LOGIC ---

window.startExam = function(subjectId) {
    currentSubjectId = subjectId;
    currentExamData = examData[subjectId];
    currentQuestionIndex = 0;
    userAnswers = new Array(currentExamData.questions.length).fill(null);
    timeLeft = currentExamData.timeLimit;

    document.getElementById('exam-title').textContent = currentExamData.title;
    
    document.getElementById('dashboard-container').classList.add('hidden');
    document.getElementById('exam-container').classList.remove('hidden');
    
    startTimer();
    renderQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("¡Se acabó el tiempo!");
            finishExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('exam-timer').textContent = `${m}:${s}`;
}

window.renderQuestion = function() {
    const qData = currentExamData.questions[currentQuestionIndex];
    document.getElementById('question-text').innerHTML = `<strong>Pregunta ${currentQuestionIndex + 1}:</strong><br><br>${qData.q}`;
    
    const progress = (currentQuestionIndex / currentExamData.questions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('question-counter').textContent = `${currentQuestionIndex + 1} / ${currentExamData.questions.length}`;
    
    document.getElementById('btn-prev').disabled = currentQuestionIndex === 0;
    const btnNext = document.getElementById('btn-next');
    if (currentQuestionIndex === currentExamData.questions.length - 1) {
        btnNext.textContent = 'Finalizar Prueba';
        btnNext.onclick = finishExam;
    } else {
        btnNext.textContent = 'Siguiente';
        btnNext.onclick = nextQuestion;
    }

    const optionsGrid = document.getElementById('options-grid');
    optionsGrid.innerHTML = '';
    
    const letters = ['A', 'B', 'C', 'D'];
    qData.options.forEach((opt, index) => {
        const div = document.createElement('div');
        div.className = `option-btn ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}`;
        div.onclick = () => selectOption(index);
        
        div.innerHTML = `<span class="option-label">${letters[index]}</span><span>${opt}</span>`;
        optionsGrid.appendChild(div);
    });
}

window.selectOption = function(index) {
    userAnswers[currentQuestionIndex] = index;
    renderQuestion();
}

window.nextQuestion = function() {
    if (userAnswers[currentQuestionIndex] === null) {
        alert("Debes seleccionar una respuesta antes de continuar.");
        return;
    }
    if (currentQuestionIndex < currentExamData.questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    }
}

window.prevQuestion = function() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

window.finishExam = function() {
    if (userAnswers[currentQuestionIndex] === null && timeLeft > 0) {
        alert("Por favor selecciona una respuesta para la última pregunta.");
        return;
    }

    clearInterval(timerInterval);
    
    let correctCount = 0;
    const total = currentExamData.questions.length;
    
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];

    for (let i = 0; i < total; i++) {
        const uAns = userAnswers[i];
        const cAns = currentExamData.questions[i].answer;
        const isCorrect = uAns === cAns;
        if (isCorrect) correctCount++;
        
        const qData = currentExamData.questions[i];
        const div = document.createElement('div');
        div.className = `review-item ${isCorrect ? 'correct-item' : 'incorrect-item'}`;
        
        let ansText = uAns !== null ? `${letters[uAns]}. ${qData.options[uAns]}` : "No respondida";
        let corrText = `${letters[cAns]}. ${qData.options[cAns]}`;
        
        div.innerHTML = `
            <h4>${i+1}. ${qData.q}</h4>
            <div class="review-answers">
                <p>Tu respuesta: <span class="${isCorrect ? 'text-success' : 'text-error'}">${ansText}</span></p>
                ${!isCorrect ? `<p>Respuesta correcta: <span class="text-success">${corrText}</span></p>` : ''}
            </div>
            <div class="review-explanation">
                <strong>Explicación:</strong><br><br>${qData.explanation}
            </div>
        `;
        reviewContainer.appendChild(div);
    }
    
    const incorrectCount = total - correctCount;
    
    if (!activeUser.results) activeUser.results = {};
    activeUser.results[currentSubjectId] = {
        score: correctCount,
        total: total,
        userAnswers: [...userAnswers]
    };
    
    const students = getStudents();
    const index = students.findIndex(s => s.username === activeUser.username);
    if(index !== -1) {
        students[index] = activeUser;
        saveStudents(students);
    }
    localStorage.setItem('icfes_active_user', JSON.stringify(activeUser));
    
    document.getElementById('exam-container').classList.add('hidden');
    document.getElementById('results-container').classList.remove('hidden');
    
    document.getElementById('results-subject').textContent = currentExamData.title;
    document.getElementById('final-score').textContent = correctCount;
    document.getElementById('stat-correct').textContent = correctCount;
    document.getElementById('stat-incorrect').textContent = incorrectCount;
    
    const feedback = document.getElementById('results-feedback');
    if (correctCount === total) {
        feedback.textContent = '¡Excelente! Rendimiento perfecto.';
        feedback.style.color = 'var(--success)';
    } else if (correctCount >= total * 0.6) {
        feedback.textContent = '¡Buen trabajo! Has superado la prueba.';
        feedback.style.color = '#3b82f6';
    } else {
        feedback.textContent = 'Debes seguir practicando y revisar las explicaciones.';
        feedback.style.color = 'var(--error)';
    }
}

window.returnToDashboard = function() {
    showDashboard();
}

window.abortExam = function() {
    clearInterval(timerInterval);
    document.getElementById('exam-container').classList.add('hidden');
    document.getElementById('dashboard-container').classList.remove('hidden');
}

window.showGlobalResults = function() {
    document.getElementById('dashboard-container').classList.add('hidden');
    document.getElementById('global-results-container').classList.remove('hidden');
    
    let totalScore = 0;
    let totalQuestions = 0;
    const globalStatsContainer = document.getElementById('global-stats-container');
    globalStatsContainer.innerHTML = '';

    Object.keys(examData).forEach(subject => {
        const result = activeUser.results[subject];
        if (result) {
            totalScore += result.score;
            totalQuestions += result.total;
            
            const pct = Math.round((result.score / result.total) * 100);
            
            globalStatsContainer.innerHTML += `
                <div class="global-stat-card">
                    <h4>${examData[subject].title}</h4>
                    <p>Puntaje: ${result.score} / ${result.total}</p>
                    <p>Efectividad: ${pct}%</p>
                </div>
            `;
        }
    });

    const icfesScore = Math.round((totalScore / totalQuestions) * 500);
    document.getElementById('global-score').textContent = icfesScore;
}

window.reviewExam = function(subjectId) {
    currentSubjectId = subjectId;
    currentExamData = examData[subjectId];
    
    const result = activeUser.results[subjectId];
    if (!result || !result.userAnswers) {
        alert("No hay detalles de resultados disponibles para esta prueba.");
        return;
    }
    
    const total = currentExamData.questions.length;
    const correctCount = result.score;
    const incorrectCount = total - correctCount;
    
    const reviewContainer = document.getElementById('review-container');
    reviewContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    for (let i = 0; i < total; i++) {
        const uAns = result.userAnswers[i];
        const cAns = currentExamData.questions[i].answer;
        const isCorrect = uAns === cAns;
        
        const qData = currentExamData.questions[i];
        const div = document.createElement('div');
        div.className = `review-item ${isCorrect ? 'correct-item' : 'incorrect-item'}`;
        
        let ansText = uAns !== null && uAns !== undefined ? `${letters[uAns]}. ${qData.options[uAns]}` : "No respondida";
        let corrText = `${letters[cAns]}. ${qData.options[cAns]}`;
        
        div.innerHTML = `
            <h4>${i+1}. ${qData.q}</h4>
            <div class="review-answers">
                <p>Tu respuesta: <span class="${isCorrect ? 'text-success' : 'text-error'}">${ansText}</span></p>
                ${!isCorrect ? `<p>Respuesta correcta: <span class="text-success">${corrText}</span></p>` : ''}
            </div>
            <div class="review-explanation">
                <strong>Explicación:</strong><br><br>${qData.explanation}
            </div>
        `;
        reviewContainer.appendChild(div);
    }
    
    document.getElementById('dashboard-container').classList.add('hidden');
    document.getElementById('results-container').classList.remove('hidden');
    
    document.getElementById('results-subject').textContent = currentExamData.title;
    document.getElementById('final-score').textContent = correctCount;
    document.getElementById('stat-correct').textContent = correctCount;
    document.getElementById('stat-incorrect').textContent = incorrectCount;
    
    const feedback = document.getElementById('results-feedback');
    if (correctCount === total) {
        feedback.textContent = '¡Excelente! Rendimiento perfecto.';
        feedback.style.color = 'var(--success)';
    } else if (correctCount >= total * 0.6) {
        feedback.textContent = '¡Buen trabajo! Has superado la prueba.';
        feedback.style.color = '#3b82f6';
    } else {
        feedback.textContent = 'Debes seguir practicando y revisar las explicaciones.';
        feedback.style.color = 'var(--error)';
    }
}

// Run init
init();
