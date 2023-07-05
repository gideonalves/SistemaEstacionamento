function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  let validationVehicle = document.forms["register"]["vehicle"].value;
  let validationColor = document.forms["register"]["color"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationPlate = document.forms["register"]["plate"].value;
  let validationRadio = document.forms["register"]["radio"].value;

  if (validationCod == "") {
    alert("O Código deve ser preenchido");
    return false;
  }
  if (validationVehicle == "") {
    alert("O Veiculo deve ser preenchido");
    return false;
  }
  if (validationColor == "") {
    alert("A cor deve ser preenchido");
    return false;
  }
  if (validationDate == "") {
    alert("Ano de fabricação deve ser preenchida");
    return false;
  }
  if (validationPlate == "") {
    alert("A placa deve ser preenchida");
    return false;
  }
  if (validationRadio == "") {
    alert("Sim ou Não");
    return false;
  }

  alert("A validação ocorreu de forma correta");
}

function insert() {
  let cod = document.forms["register"]["cod"].value;
  let vehicle = document.forms["register"]["vehicle"].value;
  let color = document.forms["register"]["color"].value;
  let date = document.forms["register"]["date"].value;
  let plate = document.forms["register"]["plate"].value;
  let radio = document.forms["register"]["radio"].value;

  let insert = window.document.getElementById("insertRow");

  insert.innerHTML = `
  <th scope="row">${cod}</th>
  <td>${vehicle}</td>
  <td>${color}</td>
  <td>${date}</td>
  <td>${plate}</td>
  <td>${radio}</td>
  `;
}
