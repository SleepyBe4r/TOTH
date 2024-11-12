

const ano = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const ano_bissexto = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const barra_progresso = document.getElementById("barra_progresso");
const txt_dias_faltam = document.getElementById("txt_dias_faltam");

function verificar_progresso() {    
    
    let dt = new Date();
    let dia = dt.getDate();
    let mes = dt.getMonth();
    let ano = dt.getFullYear();
    let qnt_dias = 0;
    let achou_dia = false;
    let porcentagem = 0;
    let dia_falta;
    let mes_falta = 11;

    if(ano % 4 == 0 && !ano % 100 == 0){
        for (let i = 1; i <= mes; i++) {
            if(achou_dia == false) mes_falta--;
            if(achou_dia == false) dia_falta = ano_bissexto[i];
            for (let j = 1; j <= ano_bissexto[i]; j++) {
                if(dia == j && mes == i){
                    achou_dia = true;
                } else if (achou_dia == false) {
                    qnt_dias++;
                    if(achou_dia == false) dia_falta--;
                }
            }
        }
        porcentagem = (qnt_dias / 366) * 100;
    } else {
        for (let i = 0; i < mes; i++) {
            for (let j = 0; j < ano[i]; j++) {
                if(dia == j && mes == i){
                    achou_dia = true;
                } else if (achou_dia == false) {
                    qnt_dias++;
                }                
            }
        }
        porcentagem = (qnt_dias / 365) * 100;
    }

    

    barra_progresso.style = "width: " + porcentagem + "%";
    barra_progresso.ariaValueNow = porcentagem;
    barra_progresso.innerHTML = porcentagem.toFixed(2) + "%";
    txt_dias_faltam.innerHTML = "Faltam: " + dia_falta + " dias e " + mes_falta + " meses para o final do ano";
}

window.onload = verificar_progresso();