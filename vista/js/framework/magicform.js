var form = function () { 
    this.campos = new Array();

    // COMPONENTES
    this.c_email = function (d) {
        var cadena = "";
        salida = "";
        if (d)  {
            salida += '<div class="form-elemento';
			if(d.col) {
				salida += ' col-' + d.col + ' ';
			}
			salida += '">';
            if (d.et) {
                salida += "<label>" + d.et ;
                if(d.ob) {
                    salida += "<span>*</span>";
                }
                salida += ":</label>";
            }
            salida += '<input type="email"';
			if(d.ob) { salida += 'onblur="valvacio(\''+ d.id +'\')" '}
			salida += '" ';	
                if(d.ph) { salida += 'placeholder="' + d.ph +'"'}
                if(d.lim) { salida += 'maxlength="' + d.lim +'"'}
                if(d.id) { salida += ' id="' + d.id + '" ' } else { console.log("Define un id para el campo tipo email") }
            salida += '>';
            salida += '</div>';
            this.campos.push(salida);
        } else {
            console.log("Define los parametros el campo tipo email")
        }
    }
	
	
this.c_clave = function (d) {
        var cadena = "";
        salida = "";
        if (d)  {
            salida += '<div class="form-elemento';
			if(d.col) {
				salida += ' col-' + d.col + ' ';
			}
			salida += '">';
            if (d.et) {
                salida += "<label>" + d.et ;
                if(d.ob) {
                    salida += "<span>*</span>";
                }
                salida += ":</label>";
            }
            salida += '<input type="password"';
			if(d.ob) { salida += 'onblur="valvacio(\''+ d.id +'\')" '}
			salida += '" ';	
                if(d.ph) { salida += 'placeholder="' + d.ph +'"'}
                if(d.lim) { salida += 'maxlength="' + d.lim +'"'}
                if(d.id) { salida += ' id="' + d.id + '" ' } else { console.log("Define un id para el campo tipo email") }
            salida += '>';
            salida += '</div>';
            this.campos.push(salida);
        } else {
            console.log("Define los parametros el campo tipo email")
        }
    }

this.c_cajdetexto = function (d) {
        var cadena = "";
        salida = "";
        if (d)  {
            salida += '<div class="form-elemento';
			if(d.col) {
				salida += ' col-' + d.col + ' ';
			}
			salida += '">';
            if (d.et) {
                salida += "<label>" + d.et ;
                if(d.ob) {
                    salida += "<span>*</span>";
                }
                salida += ":</label>";
            }
            salida += '<input type="text"';
			if(d.ob) { salida += 'onblur="valvacio(\''+ d.id +'\')" '}
			salida += '" ';	
                if(d.ph) { salida += 'placeholder="' + d.ph +'"'}
                if(d.lim) { salida += 'maxlength="' + d.lim +'"'}
                if(d.id) { salida += ' id="' + d.id + '" ' } else { console.log("Define un id para el campo tipo email") }
            salida += '>';
            salida += '</div>';
            this.campos.push(salida);
        } else {
            console.log("Define los parametros el campo tipo texto")
        }
    }




this.c_submit = function(d) {
	var cadena = "";
        salida = "";
        if (d)  {
			salida += '<div class="form-elemento">';
			salida += '<input type="submit" role="boton"';
			if(d.ph) {
				salida += ' value="' + d.ph + '" ';
			} else {
				console.log("Define el el texto para el boton");
			}
			salida += '>'
			salida += '</div>';
			this.campos.push(salida);
		} else {
            console.log("Define los parametros el boton submit")
        }
};
	
	
	
	
	
	

    // Formar formulario
    this.setform = function (div) {
        var lform = this.campos.length;
        var salida = "";
        var campos = this.campos;

        for (var i = 0; i < lform; i++) {
            salida += this.campos[i];
        }
        if (div) {
            document.getElementById(div).innerHTML = salida;
        } else {
            console.log("Especifica el div donde esta el formulario");
        }
    }

}





var valvacio = function(campo) {
	console.log(campo);
	if(document.getElementById(campo).value === "") {
		
		cambiarborde(campo, "borde_rojo");
	} else {
		
	}
}

var cambiarborde = function(elemento,clase) {
    document.getElementById(elemento).className = clase;
}