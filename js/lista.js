function montarTabela(){
    let tbody = document.querySelector('#tb-body');
    let html = '';
    /*agora vamos usar DATA ATTRIBUTES 
       data- a gente consegue armazenar informações extras na página, e não existe representação visual pra ela*/
    for (let item of dados){
        html+=`<tr>
                  <td class='coluna'><input type='checkbox' 
                                          data-id=${item.id}></td>
                  <td class='coluna'>${item.nome}</td>
                  <th class='coluna'><a class='btnExcluir' 
                                        onclick='excluirItem(${item.id})'>
                                        &#9746;</a></th>
               </tr> `;
    }
    tbody.innerHTML = html;
}

function adicionarItem(){
    let nomeInput = document.querySelector('#txtNomeProfessor');
    let novoObj={id:new Date().getTime(),nome:nomeInput.value}
    dados.push(novoObj);
    montarTabela();
    nomeInput.value='';
    nomeInput.focus();
}
