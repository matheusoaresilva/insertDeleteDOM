class Aluno {
    nome;  
    matricula;  
    nota1;  
    nota2;  
    nota3;

    constructor(nome, matricula, n1, n2, n3) {  
    this.nome = nome;  
    this.matricula = matricula;  
    this.nota1 = n1;  
    this.nota2 = n2;  
    this.nota3 = n3;
    this.arrayAlunos = [];
    }

    exibeInfo() {  
        return `Aluno: ${this.nome} - mat: ${this.matricula}
        Notas: N1: ${this.nota1} - N2: ${this.nota2} - N3: ${this.nota3} 
        Média:${this.calculaMedia()}`;  
    }

    calculaMedia() {        
        return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
    }

    salvar(){
        event.preventDefault();
        let aluno = this.lerDados();
        if(this.validaCampos(aluno)){
            this.adicionar(aluno);
        }
        this.listaTabela();
        this.cancelar();
    }

    

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        let i = 0;
        for(i=0; i < this.arrayAlunos.length; i++){ //Percorrer todos os elementod do array e criar as linhas e colunas.

            let tr = tbody.insertRow(); //Criar uma nova linha na tabela;

            //Criar colunas
            let td_nome= tr.insertCell(); //Criar uma nova coluna e atribuir ao td_id;
            let td_matricula = tr.insertCell();
            let td_nota1 = tr.insertCell();
            let td_nota2 = tr.insertCell();
            let td_nota3 = tr.insertCell();
            let td_media = tr.insertCell();
            let td_acoes = tr.insertCell();

            //Inserir os dados do array na tabela;
            td_nome.innerText = this.arrayAlunos[i].nome;
            //A variável td_nome vai receber o valor dentro do array na posição i;
            td_matricula.innerText = this.arrayAlunos[i].matricula;
            td_nota1.innerText = this.arrayAlunos[i].nota1;
            td_nota2.innerText = this.arrayAlunos[i].nota2;
            td_nota3.innerText = this.arrayAlunos[i].nota3;
            td_media.innerText = this.arrayAlunos[i].media;

            td_nota1.classList.add('center');
            td_nota2.classList.add('center');
            td_nota3.classList.add('center');
            td_media.classList.add('center');
            td_acoes.classList.add('center');
            //Criar o elemento imagem da lixeira;
            let imgEdit = document.createElement('img');
            imgEdit.src = 'assets/img/lixo.png';
            imgEdit.setAttribute("onclick", "aluno.deletar("+ this.arrayAlunos[i].matricula +")");
            //Adicionar a imagem dentro do 'td_acoes';
            td_acoes.appendChild(imgEdit);
        }
    }

    adicionar(){
        let arrayAdd = this.lerDados();
        this.arrayAlunos.push(arrayAdd);
    }

    lerDados(){
        let array = [];
        
        //Pegando os dados do formulário;
        aluno.nome = document.getElementById('nome').value;
        aluno.matricula = document.getElementById('matricula').value;
        aluno.nota1 = parseFloat(document.getElementById('nota1').value);
        aluno.nota2 = parseFloat(document.getElementById('nota2').value);
        aluno.nota3 = parseFloat(document.getElementById('nota3').value);
        
        array.nome = aluno.nome
        array.matricula = aluno.matricula
        array.nota1 = aluno.nota1;
        array.nota2 = aluno.nota2;
        array.nota3 = aluno.nota3;
        array.media = this.calculaMedia();
        return array;
    }

    validaCampos(aluno){
        let msg = '';
        if(aluno.nome == ''){
            msg += '- Informe o nome do aluno! \n'
        }
        if(aluno.matricula == ''){
            msg += '- Informe a matricula! \n'
        }
        if(isNaN(aluno.nota1)){
            msg += '- Informe a nota 1! \n'
        }
        if(isNaN(aluno.nota2)){
            msg += '- Informe a nota 2! \n'
        }
        if(isNaN(aluno.nota3)){
            msg += '- Informe a nota 3! \n'
        }
        if(msg != ''){
            alert(msg);
            return false;
        }
        return true;
    }
    
    cancelar(){
        aluno.nome = document.getElementById('nome').value = '';
        aluno.matricula = document.getElementById('matricula').value = '';
        
        aluno.nota1 = document.getElementById('nota1').value = '';
        aluno.nota2 = document.getElementById('nota2').value = '';
        aluno.nota3 = document.getElementById('nota3').value = '';
    }

    deletar(matricula){
        let tbody = document.getElementById('tbody');
        let i = 0;
        for(i = 0; i < this.arrayAlunos.length; i++){
            if(this.arrayAlunos[i].matricula == matricula){
                this.arrayAlunos.splice(i, 1)
                tbody.deleteRow(i);
                break;
            }
        }
    }
}

var aluno = new Aluno();

  