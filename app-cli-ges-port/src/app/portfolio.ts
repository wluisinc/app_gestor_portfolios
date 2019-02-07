export class Portfolio {
	constructor (
	private nombre : string,
	private descripcion : string,
	private fichero : string
	)
	if (this.nombre == ""){
	console.error("nombre no puede estar vacio");
	throw new Error ("nombre no puede estar vacio");
	}
}