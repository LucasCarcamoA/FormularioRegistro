var aficiones = [];

function validar(){
    var resultado_correo = validar_correo();
    var resultado_contraseña = validar_contraseña();
    var resultado_postal = validar_postal();
    var resultado_comuna = validar_comuna();
    var resultado_telefono = validar_telefono();
    var resultado_sitio = validar_sitio();
    var resultado_aficion = validar_aficion();
    
    if ((resultado_sitio && resultado_correo && resultado_contraseña && resultado_postal && resultado_comuna && resultado_aficion && resultado_telefono) == true){
        alert("Registro exitoso!");
    }

    return resultado_sitio && resultado_correo && resultado_contraseña && resultado_postal && resultado_comuna && resultado_aficion && resultado_telefono;
}

function validar_correo(){
    var input_correo = document.getElementById("input-correo");
    var error_correo = document.getElementById("error-correo");
    var correo = input_correo.value;
    var pos_arroba = correo.indexOf("@");
    var pos_punto = correo.lastIndexOf(".");
    var arr_correo = correo.split(".");
    error_correo.innerHTML = "";
    error_correo.className = "";
    var extension = arr_correo[arr_correo.length - 1];
    if (pos_arroba > 0 && pos_punto > pos_arroba && (extension.length > 1 && extension.length <= 3)){
        return true;
    } else if (correo === ""){
        error_correo.innerHTML = "Campo Obligatorio!";
        error_correo.className = "text-danger small";
        return false;
    }else {
        error_correo.innerHTML = "Ingresa correctamente el correo!";
        error_correo.className = "text-danger small";
        return false;
    }
}

function validar_contraseña(){
    var input_contraseña = document.getElementById("input-contraseña");
    var input_contraseña_conf = document.getElementById("confirmar-contraseña");
    var contraseña = input_contraseña.value;
    var confirmar_contraseña = input_contraseña_conf.value;
    var error_contra = document.getElementById("error-contraseña");
    var error_conf = document.getElementById("error-repetir");
    error_contra.innerHTML = "";
    error_contra.className = "";
    error_conf.innerHTML = "";
    error_conf.className = "";
    var letra = false;
    var numero = false;
    //Verificación si tiene letra o numero
    for (var i in contraseña){
        if (isNaN(contraseña[i])){
            letra = true;
        }
        else {
            numero = true;
        }
    }
    //resto de parametros para la contraseña
    if (contraseña == confirmar_contraseña && contraseña != "" && (contraseña.length >=3 && contraseña.length <=6) && (letra == true && numero == true)){
        return true;
    } else if (letra == false || numero == false){
        error_contra.innerHTML = "La contraseña necesita al menos una letra y un número!";
        error_contra.className = "text-danger small";
        return false;
    } 
    else if(contraseña.length < 3 || contraseña.length > 6){
        error_contra.innerHTML = "La contraseña debe tener entre 3 y 6 caracteres";
        error_contra.className = "text-danger small"; 
        return false;  
    } else if (contraseña == ""){
        error_contra.innerHTML = "Campo Obligatorio!";
        error_contra.className = "text-danger"; 
        return false;
    }else if(contraseña != confirmar_contraseña) {
        error_conf.innerHTML = "Contraseña no coincide!!!";
        error_conf.className = "text-danger small"; 
        return false;
    }
}

function validar_comuna(){
    var select_comuna = document.getElementById("select-comuna");
    var comuna = select_comuna.value;
    var error_comuna = document.getElementById("error-comuna");
    error_comuna.innerHTML = "";
    error_comuna.className = "";
    if (comuna == 0){
        error_comuna.innerHTML = "Selecciona una comuna!";
        error_comuna.className = "text-danger small";
        return false;
    } else {
        return true;
    }
}

function validar_postal(){
    var input_postal = document.getElementById("input-postal");
    var postal = input_postal.value;
    var error_postal = document.getElementById("error-postal");
    error_postal.innerHTML="";
    error_postal.className="";
    if (postal.length == 7){
        return true;
    } else if (postal === ""){
        error_postal.innerHTML="Campo Obligatorio!";
        error_postal.className="text-danger small";
        return false;
    } else if (postal.length > 7 || postal.length < 7 || postal.length != ""){
        error_postal.innerHTML="Ingresa codigo postal válido!";
        error_postal.className="text-danger small";
        return false;
    }
}

function validar_telefono(){
    var input_telefono = document.getElementById("input-telefono");
    var telefono = input_telefono.value;
    var pos_mas = telefono.indexOf("+569");
    var arr_tel = telefono.split(" ");
    var codigo = arr_tel[pos_mas];
    var numero = arr_tel[arr_tel.length-1];
    var error_telefono = document.getElementById("error-telefono");
    error_telefono.innerHTML = "";
    error_telefono.className = "";

    if (codigo === "+569" && numero.length == 8) {
        return true;
    } else if(telefono == "") {
        error_telefono.innerHTML = "Campo Obligatorio!";
        error_telefono.className = "text-danger small";
        return false;
    }else {
        error_telefono.innerHTML = "Ingrese el número con el formato correcto +569 00000000";
        error_telefono.className = "text-danger small";
        return false;
    }
}

function validar_sitio(){
    // www.sitio.com
    var input_sitio = document.getElementById("input-sitio");
    var sitio = input_sitio.value;
    var arr_sitio = sitio.split(".");
    var ext = arr_sitio[arr_sitio.length - 1];
    var www = arr_sitio[0];
    var error_sitio = document.getElementById("error-sitio");
    error_sitio.innerHTML = "";
    error_sitio.className = "";
    if (sitio === ""){
        return true;
    } else {
        if(www === "www" && arr_sitio.length > 2 && (ext.length > 1 && ext.length <=3)){
            return true;
        } else if (www != "www") {
            error_sitio.innerHTML = "Subdominio no válido";
            error_sitio.className = "text-danger small";
            return false;
        } else if(arr_sitio.length > 2 && (ext.length < 2 || ext.length > 3)){
            error_sitio.innerHTML = "Final de dominio no válido";
            error_sitio.className = "text-danger small";
            return false;
        }else if (arr_sitio.length == 2) {
            error_sitio.innerHTML = "Dirección incompleta!";
            error_sitio.className = "text-danger small";
            return false;
        }else {
            error_sitio.innerHTML = "Dirección incompleta!";
            error_sitio.className = "text-danger small";
            return false;
        }
    }
}

function actualizar_aficion(){
    var lista = document.getElementById("lista-aficiones");
    lista.innerHTML = "";
    var ul = document.createElement("ul");
    ul.className="list-group";
    for (var i in aficiones){
        var li = document.createElement("li");
        li.innerHTML = aficiones[i];
        li.className = "list-group-item";
        ul.appendChild(li);
    }
    lista.className = "g-3";
    lista.appendChild(ul);
    console.log(lista);
    console.log(aficiones);
}

function agregar_aficion(){
    var input_aficion = document.getElementById("aficion");
    var aficion = input_aficion.value;
    
    if (aficion != ""){
        aficiones.push(aficion);
        input_aficion.value = "";
        actualizar_aficion();
    } 
}

function validar_aficion(){
    var error_aficion = document.getElementById("error-aficiones");
    error_aficion.innerHTML="";
    error_aficion.className="";
    if (aficiones.length >=2){
        return true;
    } else {
        error_aficion.innerHTML = "Añade al menos 2 aficiones!";
        error_aficion.className = "text-danger";
        return false;
    }
}