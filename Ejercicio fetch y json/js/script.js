// En este archivo no utilizamos el evento "DOMContentLoaded", ya que se colocó el atributo "defer" en la importación del script,
// que nos soluciona el problema de los elementos no cargados del DOM. Más info => https://www.w3schools.com/tags/att_script_defer.asp


const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar
const container = document.getElementById("container"); // Div donde se mostrará la información

function showStudents(studentsArray) {
  container.innerHTML = "";
  for (const student of studentsArray) {
    container.innerHTML += `<p>${student.name} ${student.lastname}</p>`;
  }
}

fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Error al cargar el JSON");
    }
    return response.json();
  })
  .then(data => {
    if (data.students && Array.isArray(data.students)) {
      showStudents(data.students);
    } else {
      container.innerHTML = "No se encontraron estudiantes en el archivo JSON.";
    }
  })
  .catch(error => {
    container.innerHTML = "Error al cargar los datos.";
    console.error("Error:", error);
  });
