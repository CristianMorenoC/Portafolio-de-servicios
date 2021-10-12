
var typed = new Typed('.typed', {
	strings: [
		'<b class="desccription">DISEÑO <span class="description-color">WEB</span></b>',
		'<b class="desccription"><span class="description-color">FRONT-END: </span>: HTML, JavaScript, CSS, bootstrap, SASS</b>',
		'<b class="desccription"><span class="description-color">METODOLOGIAS: </span> BEM, SCRUM</b>',
		'<b class="desccription">DESARROLLADOR WEB: <span class="description-name">CRISTIAN MORENO</span></b>',
	],
	// stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 100, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 30, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

let elementosOcultos = document.querySelectorAll('.oculto');


function mostrarElementos() {
	let scrollTop = document.documentElement.scrollTop;
	for (let i = 0; i < elementosOcultos.length; i++) {
		let alturaOculto = elementosOcultos[i].offsetTop;
		if (alturaOculto - 300 < scrollTop) {
			elementosOcultos[i].classList.add('mostrar')
			elementosOcultos[i].classList.add('abajo')
		}

	}
}

window.addEventListener('scroll', mostrarElementos);