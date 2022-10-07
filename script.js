class Persona {
  constructor(nombre, apellido, documento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.documento = documento;
  }
}

class Interfaz {
  anadirpersona(persona) {
    const list = document.getElementById("persona-list");
    const elemento = document.createElement("div");
    elemento.innerHTML = `<div class="card text-center mb-4">
    <div class="card-body">
      <strong>Nombre</strong>:Nombre <strong>Apellido</strong>: Apellido
      <strong>Documento</strong>: Documento
      <a href="#" class="btn btn-danger" name:="eliminar">eliminar</a>
    </div>
  </div>
</div>`;
    list.appendChild(elemento);
    this.dejarblanco();
  }
  dejarblanco() {
    document.getElementById("personas-form").reset();
  }
  eliminarpersona(elemento) {
    if (elemento.name == "eliminar") {
      elemento.parentElement.parentElement.remove();
    }
  }
}
// elemento que interactua con el dom html
document.getElementById("personas-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const documento = document.getElementById("documento").value;

  // instanciamos
  const persona = new Persona(nombre, apellido, documento);
  const interfaz = new Interfaz();
  if (nombre === "" || apellido === "" || documento === "") {
    alert("Campos vacios");
  } else {
    interfaz.anadirpersona(persona);
    alert("Persona creada Correctamente")
  }
});
