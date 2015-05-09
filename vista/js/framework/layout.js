var layout = function() {
	this.secciones = new Array();
	
	this.c_derecha = function() {
		var salida = '<div class="derecha">dd';
		salida+= '</div>';
		this.secciones.push(salida);
	};
	
	this.c_centro = function() {
		var salida = '<div class="centro">ddd';
		salida+= '</div>';
		this.secciones.push(salida);
	};
	

	
	this.c_arriba = function() {
		var salida = '<div class="arriba">dd';
		salida+= '</div>';
		this.secciones.push(salida);
	};
	
	
	this.setlayout = function(div){
		var salida = "";
		var lsecciones = this.secciones.length;
		
		for(var i = 0; i < lsecciones; i++) {
			salida += this.secciones[i];
		}
		document.getElementById(div).innerHTML = salida;
	}
}