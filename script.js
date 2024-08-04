/*
    * 1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla.
    * 2. Verificar si un número es par o impar.
    * 3. Calcular el mayor de tres números.
    * 4. Un estudiante realiza 4 exámenes, calcular el promedio de estos.
    * 5. Calcular el área de un rectángulo.
    * 6. Calcular el área de un triángulo.
    * 7. Calcular el área de una circunferencia. (π = 3.14)
    * 8. Crea un programa que al ingresar un número diga si es positivo, negativo o cero.
    * 9. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor.
        ! No considerar el caso en que ambos números son iguales.
    * 10. Solicitar al usuario un número, y determinar si es divisible entre dos o no.
        * Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x número no es divisible entre 2”.
    * 11. Verificar si un día es fin de semana o día laborable.
    * 12. Verificar si un número es divisible por 3 y por 5.
    * 13. Determinar si un número es múltiplo de 2, 3 o ambos.
    * 14. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron.
    * 15. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años.
        * Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo, que permita determinar el bono que recibirá un trabajador.
    * 16. Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones.
*/

const getANumber = (mssg) => {
	let data = prompt(mssg);
	if (isNaN(data)) console.error("No se ingresó un número.");
	else return parseInt(data);
};

const e1 = () => {
	console.group("Ejercicio 1: Sumar Dos Números");
	let a, b;
	a = getANumber("Ingrese el primer número");
	if (!isNaN(a)) b = getANumber("Ingrese el segundo número");
	if (!isNaN(b)) console.log(`${a} + ${b} = ${a + b}`);

	console.groupEnd();
};

const e2 = () => {
	console.group("Ejercicio 2: Verificar si un número es par o impar");
	let number = getANumber("Ingrese un número");

	const isEven = (number) => {
		return number % 2 === 0;
	};

	if (!isNaN(number))
		console.log(`${number} es ${isEven(number) ? "par" : "impar"}`);
	console.groupEnd();
};

const e3 = () => {
	console.group("Ejercicio 3: Calcular el mayor de tres números");
	let a, b, c;
	a = getANumber("Ingrese el primer número");
	if (!isNaN(a)) b = getANumber("Ingrese el segundo número");
	if (!isNaN(b)) c = getANumber("Ingrese el tercer número");

	const largestOf3Numbers = (a, b, c) => {
		return Math.max(a, b, c);
	};

	if (!isNaN(c)) console.log(`El mayor es ${largestOf3Numbers(a, b, c)}`);
	console.groupEnd();
};

const e4 = () => {
	console.group("Ejercicio 4: Calcular el promedio de 4 exámenes");
	let grades = [],
		average = 0;

	for (let i = 0; i < 4; i++) {
		console.groupCollapsed(`Evaluando la nota #${i + 1}`);
		let note = prompt(`Ingresa la nota #${i + 1}`);
		if (isNaN(note)) break;
		note = parseInt(note);
		if (note < 0 || note > 20) {
			console.error("La nota debe estar entre 0 y 20");
			break;
		}
		grades[i] = note;
		console.log(`
            En la posición ${i}
            se guarda la nota #${i + 1}: ${note}
            de tipo ${typeof note}
            Confirmación: ${grades[i]}`);
		console.log(`El arreglo de notas es ${grades}`);
		console.groupEnd();
	}

	grades.forEach((grade) => {
		average += grade;
	});
	average /= grades.length;

	console.log(`El promedio es ${average}`);
	console.groupEnd();
};

const validateMeasure = (msr, value) => {
	if (isNaN(value)) {
		console.error(`${msr} debe ser un número.`);
		return false;
	}
	if (value < 0) {
		console.error(`${msr} no puede ser negativa.`);
		return false;
	}
	value = parseFloat(value);
	return true;
};

const e5 = () => {
	console.group("Ejercicio 5: Calcular el área de un rectángulo");

	let b, h;

	value = prompt(`Ingrese la base: `);
	validateMeasure("La base", value) ? (b = value) : null;
	value = prompt(`Ingrese la altura: `);
	validateMeasure("La altura", value) ? (h = value) : null;

	!isNaN(b) && !isNaN(h)
		? console.log(`
        Base: ${b}
        Altura: ${h}
        Área: ${b * h}`)
		: console.log("No se pudo realizar la operación.");

	console.groupEnd();
};

const e6 = () => {
	console.group("Ejercicio 6: Calcular el área de un triángulo");

	let b, h;

	value = prompt(`Ingrese la base: `);
	validateMeasure("La base", value) ? (b = value) : null;
	value = prompt(`Ingrese la altura: `);
	validateMeasure("La altura", value) ? (h = value) : null;

	!isNaN(b) && !isNaN(h)
		? console.log(`
        Base: ${b}
        Altura: ${h}
        Área: ${(b * h) / 2}`)
		: console.log("No se pudo realizar la operación.");

	console.groupEnd();
};

const e7 = () => {
	console.group("Ejercicio 7: Calcular el área de un circunferencia");

	let r;
	value = prompt(`Ingrese el radio: `);
	validateMeasure("El radio", value) ? (r = value) : null;

	!isNaN(r)
		? console.log(`
        Radio: ${r}
        Aárea: ${Math.PI * Math.pow(r, 2)}`)
		: console.log("No se pudo realizar la operación.");

	console.groupEnd();
};

const e8 = () => {
	console.group(
		"Ejercicio 8: Determinar si un número es positivo, negativo o cero"
	);

	let number = getANumber("Ingrese un número");

	if (!isNaN(number)) {
		if (number > 0) console.log(`${number} es positivo`);
		else if (number < 0) console.log(`${number} es negativo`);
		else console.log(`${number} es cero`);
	}

	console.groupEnd();
};

const e9 = () => {
	console.group("Ejercicio 9: Determinar si un número es par o impar");
	let a = getANumber("Ingrese un número");
	let b = getANumber("Ingrese otro número");

	if (!isNaN(a) && !isNaN(b)) {
		a < b
			? console.log(`${a} es menor que ${b}`)
			: a > b
			? console.log(`${b} es menor que ${a}`)
			: console.log("Los números que escogió son iguales");
	}

	console.groupEnd();
};

const e10 = () => {
	console.group("Ejercicio 10: Determinar si un número es divisible entre dos");
	let number = getANumber("Ingrese un número");
	number % 2 === 0
		? console.log(`${number} es divisible entre dos`)
		: console.log(`${number} no es divisible entre dos`);
	console.groupEnd();
};

const e11 = () => {
	console.group(
		"Ejercicio 11: Verificar si un día es fin de semana o día laborable"
	);

	const days = [
		"lunes",
		"martes",
		"miercoles",
		"jueves",
		"viernes",
		"sábado",
		"domingo",
	];

	let dayChosen = prompt("Ingrese un día de la semana");

	!days.includes(dayChosen.toLowerCase())
		? console.log("Ese no es un día de la semana")
		: days.indexOf(dayChosen.toLowerCase()) < 5
		? console.log(`El ${dayChosen} es un día laborable`)
		: console.log(`El ${dayChosen} es un fin de semana`);

	console.groupEnd();
};

const e12 = () => {
	console.group(
		"Ejercicio 12: Verificar si un número es divisible por 3 y por 5"
	);

	let number = getANumber("Ingrese un número");
	number % 3 === 0 && number % 5 === 0
		? console.log(`${number} es divisible por 3 y por 5`)
		: console.log(`${number} no es divisible por 3 y por 5`);

	// Versión Individual:
	// number % 3 === 0
	// 	? console.log(`${number} es divisible por 3`)
	// 	: console.log(`${number} no es divisible por 3`);
	// number % 5 === 0
	// 	? console.log(`${number} es divisible por 5`)
	// 	: console.log(`${number} no es divisible por 5`);

	console.groupEnd();
};

const e13 = () => {
	console.group(
		"Ejercicio 13: Verificar si un número es múltiplo de 2, 3 o ambos"
	);

	let number = getANumber("Ingrese un número");
	number % 2 === 0
		? console.log(`${number} es múltiplo de 2`)
		: console.log(`${number} no es múltiplo de 2`);
	number % 3 === 0
		? console.log(`${number} es múltiplo de 3`)
		: console.log(`${number} no es múltiplo de 3`);

	console.groupEnd();
};

const e14 = () => {
	console.group("Ejercicio 14: Determinar edad mediante año de nacimiento");
	let year, age;
	const minAge = 18,
		maxAge = 65;

	year = getANumber("Ingrese el año de nacimiento");

	isNaN(year)
		? console.log("No se pudo realizar la operación.")
		: (age = 2024 - year);
	console.log(`Su edad es ${age}`);

	age >= minAge && age <= maxAge
		? console.log(`Por lo tanto, puede trabajar con nosotros.`)
		: console.log(`Por lo tanto, no puede trabajar con nosotros.`);

	console.groupEnd();
};

const e15 = () => {
	console.group("Ejercicio 15: Determinar cantidad de bono por antigüedad");

	let years = getANumber("Ingrese los años de antigúedad");

	isNaN(years) || years < 0
		? console.error("No se pudo realizar la operación.")
		: years == 0
		? console.log(`Aún no tiene suficiente tiempo para obtener un bono.`)
		: years <= 5
		? console.log(`Su bono por antiguedad es de $${years * 100}`)
		: console.log(`Su bono por antiguedad es de $1000`);

	console.groupEnd();
};

const e16 = () => {
	console.group(
		"Ejercicio 16: Determinar si una persona puede votar en las próximas elecciones"
	);
	const legalAge = 18;

	let age = getANumber("Ingrese su edad");

	isNaN(age) || age < 0
		? console.error("No se pudo realizar la operación.")
		: age >= legalAge
		? console.log(`Puede votar.`)
		: console.log(`No puede votar.`);

	console.groupEnd();
};

const launch = (exercise) => {
	let listOfExercies = {
		e1: e1,
		e2: e2,
		e3: e3,
		e4: e4,
		e5: e5,
		e6: e6,
		e7: e7,
		e8: e8,
		e9: e9,
		e10: e10,
		e11: e11,
		e12: e12,
		e13: e13,
		e14: e14,
		e15: e15,
		e16: e16,
	};

	listOfExercies[exercise]
		? listOfExercies[exercise]()
		: console.error("Ejercicio no encontrado:", exercise);
};

document.addEventListener("DOMContentLoaded", () => {
	const table = document.querySelector(".ex");
	const btns = table.querySelectorAll(".ex-btn");
	btns.forEach((btn) => {
		btn.addEventListener("click", () => {
			const ex = btn.getAttribute("id");
			launch(ex);
		});
	});
});
