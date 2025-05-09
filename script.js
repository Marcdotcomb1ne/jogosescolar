function validateForm() {
    let x = document.forms["myForm"]["nome"].value;
    if (x == "") {
         alert("Preencha todos os campos do formulário!");
        return false;
    }
    let b = document.forms["myForm"]["idade"].value;
    if (b == "") {
        alert("Preencha todos os campos do formulário!");
        return false;
    }

    let checkbox = document.getElementById("customCheck1");
    if (!checkbox.checked) {
      alert("Preencha todos os campos do formulário!");
      return false;
    }
    let select1 = document.getElementById("turma");
    let select2 = document.getElementById("esporte");
    if (select1.value === "Turma") {
        alert("Preencha todos os campos do formulário!");
        return false;
    }
    if (select2.value === "Esporte") {
        alert("Preencha todos os campos do formulário!");
        return false;
    }
    if (b<12){
        alert("Menores de 12 anos não podem se inscrever.");
        return false;
    }
    alert("Inscrição realizada com sucesso! Boa sorte no campeonato!");
    location.reload();
    return true; 
    
}

var data = new Date();
var dia = 21 - data.getDate();
if (dia<0) dia = data.getDate() - 21;
var mes = 8 - (data.getMonth() + 1);
document.getElementById("data").innerText="Faltam "+dia+" dias e "+mes+" meses para o campeonato!";

