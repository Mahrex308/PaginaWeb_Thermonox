function contactos(){
    nombre = document.f_contac.nom.value;
    correo = document.f_contac.correo.value;
    asunto = document.f_contac.asunto.value;
    mensaje = document.f_contac.mensaje.value;
    ciudad = document.f_contac.ciudad.value;
    codigo = document.f_contac.c_postal.value;
   
    

    body = "<center><h1><font color=orange>Nueva formulario Thermonox</font></h1></center> <br/>" + "<b>Nombre : </b>" + nombre + "<br/> <b>Email : </b>" + correo  + "<br/> <b>Mensaje : </b>" + mensaje + "<br/> <b>Ciudad : </b>" + ciudad + "<br/> <b>Codigo : </b>" + codigo;

    var sw = correo.indexOf("@", 0); 
    var sw1 = correo.indexOf(".", 0);
    var tt = sw1 - sw; 
    

   
    if ((nombre.length==0) || (correo.length==0) || (asunto.length==0) || (mensaje.length==0) || (ciudad.length==0) || (codigo.length==0) ){
        alert("Error, todos los campos son obligatorios");
        if (nombre=="") document.f_contac.nom.style.border = "1px solid red";
            else document.f_contac.nom.style.border = "1px solid green";
        if (correo=="") document.f_contac.correo.style.border = "1px solid red";
            if (correo.indexOf("@", 0) == -1) { 
                alert("El correo tiene que llervar @") 
                document.f_contac.correo.style.border = "1px solid red";
                } 
    
            if (correo.indexOf(".", 0) == -1) { 
                alert("El correo tiene que llevar .")
                document.f_contac.correo.style.border = "1px solid red";
                } 
   
            if (tt == 1) { 
                alert("@ y . no pueden estar junto");
                document.f_contac.correo.style.border = "1px solid red";
                }
         
            if (sw > sw1) { 
                alert("@ tiene que estar enfrente de . ")
                document.f_contac.correo.style.border = "1px solid red";
                } 
            
        if (asunto=="") document.f_contac.asunto.style.border = "1px solid red";
            else document.f_contac.asunto.style.border = "1px solid green";
        if (mensaje=="") document.f_contac.mensaje.style.border = "1px solid red";
            else document.f_contac.mensaje.style.border = "1px solid green";
        if (ciudad=="") document.f_contac.ciudad.style.border = "1px solid red";
            else document.f_contac.ciudad.style.border = "1px solid green";
        if (codigo=="") document.f_contac.c_postal.style.border = "1px solid red";
            else document.f_contac.c_postal.style.border = "1px solid green";

    }

    
    else{
		//url="contacto.php?nombre="+nombre+"&correo="+correo+"&asunto="+asunto+"&mensaje="+mensaje+"&ciudad="+ciudad+"&codigo="+codigo;
		//location.href=url;
        //alert(url);
        document.f_contac.nom.style.border = "1px solid green";
        document.f_contac.correo.style.border = "1px solid green";
        document.f_contac.asunto.style.border = "1px solid green";
        document.f_contac.mensaje.style.border = "1px solid green";
        document.f_contac.ciudad.style.border = "1px solid green";
        document.f_contac.c_postal.style.border = "1px solid green";
     

        Email.send({
            Host : "smtp.gmail.com",
            Username : "287434445cai@gmail.com",
            Password : "irgsopgqzvqhfxyf",
            To : ['287434445cai@gmail.com',correo],
            From :correo,
            Subject : asunto,
            Body : body
        }).then(
          alert("Correo enviado!"));
	}
}


