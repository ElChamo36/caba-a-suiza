function changeart() {
	document.getElementById("art").innerHTML = "Otro párrafo";
}


function changeart1() {
	document.getElementById("art").innerHTML = `Ubicada en un lugar privilegiado de la precordillera mendocina, alejada de la ciudad pero 	cerca de todo lo necesario para tu esparcimiento, recreación y comodidad. <br/>Hermosas vistas, 	múltiples circuitos de senderismo en los alrededores, se encuentra a sólo pasos del Río Mendoza, Cacheuta y Dique Potrerillos.<br/><br/>
				Posee capacidad para 5 personas, cuenta con 2 dormitorios, uno con cama matrimonial y otro 	con 3 camas de una plaza, baño, cocina comedor, hogar a leña, espacioso quincho con 	churrasquera, amplio parque y piscina. Ofrece WiFi, TV por cable, aires acondicionados frío/calor, ropa de cama y cocina totalmente equipada.
				Además podrás disfrutar enteramente de la propiedad, manteniendo tu privacidad y seguridad.`;
}

let img = [ "csp1.jpeg", "csp2.jpeg"];


function previmg() {
	for (imagen of img){
		
		document.getElementById("imagen").src = imagen ;
}
	}
	
	

function nextimg() {
	document.getElementById("imagen").src = "cs.jpeg";
}


