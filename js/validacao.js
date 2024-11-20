
function mMoeda () {
    // Para pegar o objeto que chamou o evento 
    //var v = (event.target.value).substring(3); //extrai os 3 primeiros caracteres relativos ao 'R$ '
    var v = event.target.value;
                
    //Faz uma série de substituições nas Expressões Regulares que podem gerar valores monetários
    v = v.replace(/\D/g, "");
    v = v.replace(/^0+/g, "");
    v = v.replace(/(\d{1})(\d{13})$/, "$1.$2");
    v = v.replace(/(\d{1})(\d{10})$/, "$1.$2");
    v = v.replace(/(\d{1})(\d{7})$/, "$1.$2");
    v = v.replace(/(\d{1})(\d{4})$/, "$1.$2");
    v = v.replace(/(\d{1})(\d{1,1})$/, "$1,$2");
    // Para retornar os valores que estão sendo digitados com a formatação ao elemento que chamou a função
    event.target.value = "R$ " + v;
    // event.target.value = v;
}

function mCpf() {
    var cpf = event.target.value;
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    event.target.value = cpf;
}

function mTel () {
    var tel = event.target.value;
    tel = tel.replace(/\D/g, "")
    tel = tel.replace(/^(\d)/, "($1")
    tel = tel.replace(/(.{3})(\d)/, "$1)$2")
    if (tel.length == 9) {
    tel = tel.replace(/(.{1})$/, "-$1")
    } else if (tel.length == 10) {
    tel = tel.replace(/(.{2})$/, "-$1")
    } else if (tel.length == 11) {
    tel = tel.replace(/(.{3})$/, "-$1")
    } else if (tel.length == 12) {
    tel = tel.replace(/(.{4})$/, "-$1")
    } else if (tel.length > 12) {
    tel = tel.replace(/(.{4})$/, "-$1")
    }
    event.target.value = tel;
}
        
function mCEP () {
    var cep = event.target.value;
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/^(\d{2})(\d)/, "$1.$2")
    cep = cep.replace(/.(\d{3})(\d)/, ".$1-$2")
    event.target.value = cep;
}

// Validar CPF - Andressa

function validarCPF() {
    var cpf = event.target.value;
    var ok = 1;
    var add;
    if (cpf != "") {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
            ok = 0;
    if (ok == 1) {
        add = 0;
        for (i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
            rev = 11 - (add % 11);
            if (rev == 10 || rev == 11)
                rev = 0;
            if (rev != parseInt(cpf.charAt(9)))
                ok = 0;
            if (ok == 1) {
                add = 0;
                for (i = 0; i < 10; i++)
                add += parseInt(cpf.charAt(i)) * (11 - i);
                rev = 11 - (add % 11);
                if (rev == 10 || rev == 11)
                rev = 0;
                if (rev != parseInt(cpf.charAt(10)))
                ok = 0;
            }
        }
        if (ok == 0) {
            alert("Ops... Ocorreu um problema... CPF inválido!");
        //   event.target.focus();
        }
    }
}

function validarEmail() {
    const email = document.getElementById("txtEmail").value;

    // Regex para cada parte do e-mail
    const temArroba = /@/;
    const antesDoArroba = /^[^\s@]+/;
    const aposArroba = /@[^\s@]+\./;
    const dominioValido = /\.[^\s@]+$/;

    // Validações específicas
    if (!temArroba.test(email)) {
      alert("O e-mail deve conter o caractere '@'.");
      return false;
    }

    if (!antesDoArroba.test(email)) {
      alert("O e-mail deve conter texto antes do '@'.");
      return false;
    }

    if (!aposArroba.test(email)) {
      alert("O e-mail deve conter um domínio válido após o '@' (por exemplo, exemplo.com).");
      return false;
    }

    if (!dominioValido.test(email)) {
      alert("O e-mail deve terminar com um domínio válido (por exemplo, '.com').");
      return false;
    }

    alert("E-mail válido!");
    return true; // Permite o envio do formulário
  }

/*
fonte: https://github.com/FlavioALeal/MascaraJS

Parametros da função mascara
A função máscara tem 3 parametros.

1º - o Modelo da máscara utilizado no input, como explicado acima, informe sempre a máscara entre aspas simples ou aspas duplas, parametro obrigatório
2º - não mude, sempre deve ser this, parametro obrigatório
3º - não mude, sempre deve ser event, parametro obrigatório
*/
function mascara(m,t,e){
    var cursor = t.selectionStart;
    var texto = t.value;
    texto = texto.replace(/\D/g,'');
    var l = texto.length;
    var lm = m.length;
    if(window.event) {                  
        id = e.keyCode;
    } else if(e.which){                 
        id = e.which;
    }
    cursorfixo=false;
    if(cursor < l)cursorfixo=true;
    var livre = false;
    if(id == 16 || id == 19 || (id >= 33 && id <= 40))livre = true;
    ii=0;
    mm=0;
    if(!livre){
        if(id!=8){
            t.value="";
            j=0;
            for(i=0;i<lm;i++){
                if(m.substr(i,1)=="#"){
                t.value+=texto.substr(j,1);
                j++;
                }else if(m.substr(i,1)!="#"){
                        t.value+=m.substr(i,1);
                    }
                    if(id!=8 && !cursorfixo)cursor++;
                    if((j)==l+1)break;
                        
            } 	
        }
    }
    if(cursorfixo && !livre)cursor--;
        t.setSelectionRange(cursor, cursor);
}
        