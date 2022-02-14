
let imagenes = [ "./css/Fotos/cs.jpeg", "./css/Fotos/csp2.jpeg", "./css/Fotos/csp3.jpeg"];
cont = 0;

function carrousel(contenedor){
	contenedor.addEventListener("click", e=>{
		let atras = contenedor.querySelector('.back'),
		adelante = contenedor.querySelector('.next'),
		img = contenedor.querySelector('.img'),
		tgt = e.target;

		if (tgt == atras){
			if(cont > 0){
				img.src = imagenes[cont - 1];
				cont--;
			}
			else{
				img.src = imagenes[imagenes.length - 1];
				cont = imagenes.length-1;
			}
		}else if (tgt == adelante){
			if(cont < imagenes.length-1){
				img.src = imagenes[cont + 1];
				cont++;
			}
			else{
				img.src = imagenes[0];
				cont = 0;
			}
		}
	});
}

document.addEventListener("DOMContentLoaded", ()=>{
	let contenedor = document.querySelector('.article');
	carrousel(contenedor);
})

