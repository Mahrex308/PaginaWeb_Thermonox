function enviar(){
    nom = document.f_contac.nom.value;
    correo = document.f_contac.correo.value;
    asunto = document.f_contac.asunto.value;
    mensaje = document.f_contac.mensaje.value;
    ciudad = document.f_contac.ciudad.value;
    c_postal = document.f_contac.c_postal.value;
    pais = document.f_contac.pais.value;

    var sw = correo.indexOf("@", 0); 
    var sw1 = correo.indexOf(".", 0);

    if ((nom.length==0) || (correo.length==0) || (asunto.length==0) || (mensaje.length==0) || (ciudad.length==0) || (c_postal.length==0) || (pais.length==0)){
        alert("Error, todos los campos son obligatorios");
        if (nom=="") document.f_contac.nom.style.border = "1px solid red";
            else document.f_contac.nom.style.border = "1px solid green";
        if (correo=="") document.f_contac.correo.style.border = "1px solid red";
            else document.f_contac.correo.style.border = "1px solid green";
        if (asunto=="") document.f_contac.asunto.style.border = "1px solid red";
            else document.f_contac.asunto.style.border = "1px solid green";
        if (mensaje=="") document.f_contac.mensaje.style.border = "1px solid red";
            else document.f_contac.mensaje.style.border = "1px solid green";
        if (ciudad=="") document.f_contac.ciudad.style.border = "1px solid red";
            else document.f_contac.ciudad.style.border = "1px solid green";
        if (c_postal=="") document.f_contac.c_postal.style.border = "1px solid red";
            else document.f_contac.c_postal.style.border = "1px solid green";
        if (pais=="") document.f_contac.pais.style.border = "1px solid red";
            else document.f_contac.pais.style.border = "1px solid green";
    }
    if (correo.indexOf("@", 0) == -1) { 
        alert("El correo tiene que llervar @") 
        document.f_contac.correo.style.border = "1px solid red";
    } 
    else document.f_contac.correo.style.border = "1px solid green";

    if (correo.indexOf(".", 0) == -1) { 
        alert("El correo tiene que llevar .")
        document.f_contac.correo.style.border = "1px solid red";
    } 
    else document.f_contac.correo.style.border = "1px solid green";

    if (tt == 1) { 
        alert("@ y . no pueden estar junto");
        document.f_contac.correo.style.border = "1px solid red";
    }
    else document.f_contac.correo.style.border = "1px solid green";


    if (sw > sw1) { 
        alert("@ tiene que estar enfrente de . ")
        document.f_contac.correo.style.border = "1px solid red";
    } 
    else document.f_contac.correo.style.border = "1px solid green";

}
