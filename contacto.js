function contactos(){
    nombre = document.f_contac.nom.value;
    correo = document.f_contac.correo.value;
    asunto = document.f_contac.asunto.value;
    mensaje = document.f_contac.mensaje.value;
    ciudad = document.f_contac.ciudad.value;
    codigo = document.f_contac.c_postal.value;
    pais = document.f_contac.pais.value;
	if (nombre.length == 0 || correo.length == 0 || asunto.length == 0 || mensaje.length == 0 || ciudad.length == 0 || codigo.length == 0 || pais.length == 0){
		alert("Error, todos los campos son obligatorios");
	}
	else{
		url="contacto.php?nombre="+nombre+"&correo="+correo+"&asunto="+asunto+"&mensaje="+mensaje+"&ciudad="+ciudad+"&codigo="+codigo+"&pais="+pais;
		location.href=url;
	}
}