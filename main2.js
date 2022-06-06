let proyectos = [
  {
    id: "1",
    nombre: "proyecto 1",
    categoria: "Illustrations",
    img: "proyecto1.png",
    descripcion: "proyecto.... ... .. ",
  },
  {
    id: "2",
    nombre: "proyecto 2",
    categoria: "Graphic Desing",
    img: "proyecto2.png",
    descripcion: "proyecto2.... ... .. ",
  },
  {
    id: "3",
    nombre: "proyecto 3",
    categoria: "Ux/Ui Desing",
    img: "proyecto3.png",
    descripcion: "proyecto3.... ... .. ",
  },
];

let projectsDiv = document.getElementById("projects");

const botones = document.querySelectorAll(".b_categoria");
let prevBotonColor = undefined;
botones.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    if (prevBotonColor) {
      prevBotonColor.style.backgroundColor = "white";
      prevBotonColor.style.color = "black";
    }
    prevBotonColor = boton;
    showProjects(e.target.textContent);
    //   projectsDiv.innerHTML = `${e.target.textContent}`
    boton.style.backgroundColor = "#272343";
    boton.style.color = "white";
  });
});

const showProjects = (categoria) => {
  if (categoria === "All") {
    projectsDiv.innerHTML = ``;
    proyectos.forEach((proyecto) => {
      projectsDiv.innerHTML += `
                <div class="project--item">
                     <img  src="img/${proyecto.img}">
                     ${proyecto.nombre} 
                </div>
            `;
    });
  } else {
    const proyectosCategorias = proyectos.filter(
      (proyecto) => proyecto.categoria === categoria
    );
    projectsDiv.innerHTML = ``;
    proyectosCategorias.forEach((proyecto) => {
      projectsDiv.innerHTML += `
            <div class="project--item">
                <img  src="img/${proyecto.img}">
                ${proyecto.nombre} 
             </div>
            `;
    });
  }
};

botones[0].click();
