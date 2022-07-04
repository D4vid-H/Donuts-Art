const wait = (delay = 0) =>
  new Promise(resolve => setTimeout(resolve, delay));

const setVisible = (elementOrSelector, visible) => 
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none';

setVisible('.page', false);
setVisible('#loading', true);

document.addEventListener('DOMContentLoaded', () =>
  wait(1000).then(() => {
    setVisible('.page', true);
    setVisible('#loading', false);
  }));


let proyectos = [
  // UX/UI
  {
    id: "1",
    nombre: "Art Now! | App",
    fecha: "Published 05/22",
    categoria: "Ux/Ui Desing",
    drive: "",
    tools: ["figma-icon", "illustrator-icon", "photoshop-icon", "pencil"],
    img: ["Mesa de trabajo 1","Mesa de trabajo 2","Mesa de trabajo 3","Mesa de trabajo 4","Mesa de trabajo 5"],
    galeria:"Art-Icon galeria",
    featured:'yes',
    descripcion:
      "It was my first UX/UI project where I designed an App that seeks to connect those art lovers who are looking to learn in a more interactive way. In this project I could reflect my love for the history of art and also allowed me to experience more deeply the educational field in a dynamic way to the user. ",
    behance: "https://www.behance.net/gallery/144457417/App-ArtNow-UXUI",
  },
  {
    id: "2",
    nombre: "Mulvy | Website",
    fecha: "Published 2021",
    categoria: "Ux/Ui Desing",
    drive: "",
    tools: ["figma-icon", "illustrator-icon", "dreamweaver-icon", "pencil"],
    img: ["Mulvy1","Mulvy2"],
    galeria:"Mulvy-Icon galeria",
    featured:'no',
    descripcion:
      "Mulvy is a menstrual health website where people can get information, share their opinions in forums and if you are a menstruating person you can check your period and add notes of your symptoms.",
    behance: "",
  },
  {
    id: "3",
    nombre: "DamiRae Zine",
    fecha: "Published  2021-2022",
    categoria: "Graphic Desing",
    drive:
      "https://drive.google.com/drive/folders/1cE6BBejykVGKMSyL6Wc8k0MC-udbizDe?usp=sharing",
    tools: ["Indesign-icon", "illustrator-icon", "photoshop-icon", "pencil"],
    img: ["DamiRae1", "DamiRae2","DamiRae3"],
    galeria:"DamiRae-Icon galeria",
    featured:'yes',
    descripcion:
      "It is a collaborative project between artists and fan writers of DC comics characters, in which I was a collaborator, in 2021 I was in charge of the illustrations, editing and cover design, while in 2022 I participated as an illustrator. All proceeds from its sale were donated to the Humane Society International, which is in charge of animal welfare worldwide.",
    behance: "",
  },
  {
    id: "4",
    nombre: "Book cover “The many woes of Dolly Danbridge”",
    fecha: "Published  2021",
    categoria: "Graphic Desing",
    drive: "",
    tools: ["Indesign-icon", "illustrator-icon", "photoshop-icon", "pencil"],
    img: ["Danbridge1"],
    galeria:"Danbridge-Icon galeria",
    featured:'yes',
    descripcion:
      "I had the opportunity to collaborate with author Lauren Thorn on her book where I designed and illustrated the cover. The book is set in 1800, where Dolly will have to make decisions that will affect her personally and will be entangled in a romance. In the cover illustration, you can see that the flowers are wilted as the protagonist of this story is not sure whether to get married or not, so she will go through multiple situations.",
    behance: "",
  },
  {
    id: "5",
    nombre: "Book cover “Alice's Adventures in Wonderland”",
    fecha: "Published  2020",
    categoria: "Graphic Desing",
    drive: "",
    tools: ["Indesign-icon", "illustrator-icon", "photoshop-icon", "pencil"],
    img: ["Alice1"],
    galeria:"Alice-Icon galeria",
    featured:'yes',
    descripcion:
      "I ventured into this design as my vision for the cover of the classic Alice in Wonderland book",
    behance: "",
  },
  {
    id: "6",
    nombre: "Swan Lake Tale",
    fecha: "Published  2020",
    categoria: "Illustrations",
    drive: "",
    tools: ["Indesign-icon", "illustrator-icon", "photoshop-icon", "pencil"],
    img: ["Lake1","Lake2","Lake3","Lake4","Lake5","Lake6"],
    galeria:"Swan-Icon galeria",
    featured:'yes',
    descripcion:
      "These are illustrations are part of the story that adapts the famous ballet, Swan Lake. This project is in collaboration with Maru Dávalos: https://www.instagram.com/maru_davalos_art/.",
    behance: "",
  },
 /* {
    id: "7",
    nombre: "Juegos Olímpicos en Helsinki 2024",
    fecha: "Published  2020",
    categoria: "Graphic Desing",
    drive: "",
    tools: ["illustrator-icon", "photoshop-icon"],
    img: ["image28"],
    galeria:"Nut-Icon galeria",
    featured:'no',
    descripcion:
      "How would be the Olympic Games in the capital of Finland, Helsinki, in 2024? From this question together with Rodriguez Jorge, we developed this personal project where we designed the entire visual campaign of these fictitious future games. We were in charge of making the logo, the posters, the promotion in physical and digital materials, the decoration of the stadium, among others.",
    behance: "",
  },*/
  {
    id: "8",
    nombre: "Logo Design",
    fecha: "Published  2020-2021",
    categoria: "Graphic Desing",
    drive: "",
    tools: ["illustrator-icon"],
    img: ["Logos1","Logos2","Logos3","Logos4","Logos5"],
    galeria:"Logos-Icon galeria",
    featured:'no',
    descripcion:
      "This is a grouping of logos that I made for different projects between 2020 and 2021.",
    behance: "",
  },
  /*{
    id: "9",
    nombre: "Diseño personalizado “Historias Breves”",
    fecha: "Published  2020",
    categoria: "Graphic Desing",
    drive: "",
    tools: ["illustrator-icon", "photoshop-icon"],
    img: ["image13"],
    galeria:"Nut-Icon galeria",
    featured:'no',
    descripcion:
      "Personal project in which I was in charge of making the video box of the movie short stories in collector's edition, where I made custom designs: a folding poster and a disc.",
    behance: "",
  },*/
  {
    id: "10",
    nombre: "Princesses´Calendar",
    fecha: "Published  2021",
    categoria: "Graphic Desing",
    drive: "",
    tools: ["illustrator-icon", "photoshop-icon", "pencil"],
    img: ["Princesas1",'Princesas2',"Princesas3","Princesas4","Princesas5"],
    galeria:"Princesas-galeria",
    featured:'yes',
    descripcion:
      "Princesses Calendar, is my own project where I put together the great Disney princesses in a calendar, where their illustrations can fill you with energy all year long.",
    behance: "",
  },
  {
    id: "11",
    nombre: "Monster High",
    fecha: "Published  2021",
    categoria: "Illustrations",
    drive: "",
    tools: ["pencil"],
    img: ["monsterp1","monsterp2","monsterp3","monsterp4","monsterp5","monsterp6","monsterp7","monsterp8","monsterp9","monsterp10","monsterp11","monsterp12","monsterp13","monsterp14","monsterp15"],
    galeria:"Monster-Icon galeria",
    featured:'no',
    descripcion:
      "I made an adaptation of this famous series, in which I included a new fashion style to the characters, changing their visual design to a more modern one.",
    behance: "",
  },
  {
    id: "12",
    nombre: "Barbie",
    fecha: "Published  2021",
    categoria: "Illustrations",
    drive: "",
    tools: ["pencil"],
    img: ["Barbie3","barbie1",'barbie2'],
    galeria:"Barbie-Icon galeria",
    featured:'yes',
    descripcion:
      "I made these illustrations as a tribute to one of my favorite characters from my childhood; the beloved Barbie, capturing one of her many adventures. I also illustrated the new Barbie Roberts, a friend of Barbie nicknamed Brooklyn, introduced by Mattel doll company in 2021.",
    behance: "",
  },
  {
    id: "13",
    nombre: "Avatar",
    fecha: "Published  2020",
    categoria: "Illustrations",
    drive: "",
    tools: ["pencil"],
    img: ["avatar1","avatar2","avatar3"],
    galeria:"Avatar-Icon galeria",
    featured:'yes',
    descripcion:
      "In this illustration he captured one of the best scenes of the great Avatar series, where the characters perform the dragon dance. This fan art was made together with Maru Davalos: https://www.instagram.com/maru_davalos_art/",
    behance: "",
  },
  {
    id: "14",
    nombre: "Teen Titans",
    fecha: "Published  2020",
    categoria: "Illustrations",
    drive: "",
    tools: ["pencil"],
    img: ["Teen1","Teen2"],
    galeria:"Teen-Icon galeria",
    featured:'no',
    descripcion:
      "I made this illustration of the famous Teen Titans series with my drawing style, involving a new variety of colors and textures.",
    behance: "",
  },
  {
    id: "15",
    nombre: "Shingeki no Kyojin",
    fecha: "Published  2021",
    categoria: "Illustrations",
    drive: "",
    tools: ["pencil"],
    img: ["Shingek1","Shingek2"],
    galeria:"Shingeki-Icon galeria",
    featured:'no',
    descripcion:
      "In this illustration I made from the anime Shingeki no Kyojin, I experimented with dark colors and shades of red.",
    behance: "",
  },
  {
    id: "16",
    nombre: "Jubilo the X-Men",
    fecha: "Published  2020",
    categoria: "Illustrations",
    drive: "",
    tools: ["pencil"],
    img: ["jubilo1","jubilo2"],
    galeria:"Jubilo-Icon galeria",
    featured:'no',
    descripcion:
      "Make this illustration of X-men's beloved Jubilo using her brilliant powers.",
    behance: "",
  },
  {
    id: "17",
    nombre: "Kimetsu no yaiba",
    fecha: "Published  2020",
    categoria: "Illustrations",
    drive: "",
    tools: ["pencil"],
    img: ["Kimitsu1", "Kimitsu2","Kimitsu3"],
    galeria:"Kimitsu-Icon galeria",
    featured:'no',
    descripcion:
      "Make these illustrations of the characters of the anime Kimetsu no yaiba. Showing Tomioka and Shinobu with a costume proposal from the feudal era of Japan. Using a simpler and cartoon style.",
    behance: "",
  },
  {
    id: "18",
    nombre: "Mob Psycho 100",
    fecha: "Published  2020",
    categoria: "Illustrations",
    drive: "",
    tools: ["pencil"],
    img: ["mob1","mob2"],
    galeria:"Mob-Icon galeria",
    featured:'yes',
    descripcion:
      "I illustrated my favorite Mob Psycho 100 characters, giving them my own visual style of drawing.",
    behance: "",
  },
  {
    id: "19",
    nombre: "The Umbrella Academy",
    fecha: "Published  2020",
    categoria: "Illustrations",
    drive: "",
    tools: ["pencil"],
    img: ["Umbrella1","Umbrella2","Umbrella3"],
    galeria:"Umbrella-Icon galeria",
    featured:'yes',
    descripcion:
      "Due to the release of the second season of the hit series The Umbrella Academy, make an illustration of your best scene, where you experiment with textures and color combinations.",
    behance: "",
  },
  {
    id: "20",
    nombre: "The beginning waiting for the end",
    fecha: "Published  2020",
    categoria: "Illustrations",
    drive: "",
    tools: ["pencil"],
    img: ["realismo1","realismo2"],
    galeria:"Realismo-Icon galeria",
    featured:'no',
    descripcion:
      "Illustration representing the lazy awakening of a morning to start the days and wait for the rest, illustrated in a more realistic way.",
    behance: "",
  },
  {
    id: "21",
    nombre: "Nutcracker",
    fecha: "Published  2020",
    categoria: "Illustrations",
    drive: "",
    tools: ["pencil"],
    img: ["nut1.mp4","nut2.mp4"],
    galeria:"Nut-Icon galeria",
    featured:'yes',
    descripcion:
      "Animation paying homage to the beautiful classic ballet, Nutcracker, where the falling snowflakes are dancers doing the dance of the winter fairies.",
    behance: "",
  },
];

const projectsDiv = document.getElementById("projects");
const projectModal = document.getElementById("project__modal");
const modal = document.getElementById("myModal");
const body = document.getElementById("body");
const linksColor = document.querySelectorAll(".link__color");
const sections = document.querySelectorAll("section");
const botones = document.querySelectorAll(".b_categoria");
const header = document.getElementById("header");
const logo = document.getElementById("logo");
const logoGif = document.getElementById("logoGif");
let video =[];



let prevBotonColor = undefined;
botones.forEach((boton) => {
  boton.addEventListener("click", (e) => {
    if (prevBotonColor) {
      prevBotonColor.style.backgroundColor = "white";
      prevBotonColor.style.color = "black";
    }
    prevBotonColor = boton;
    showProjects(e.target.textContent);
    boton.style.backgroundColor = "#272343";
    boton.style.color = "white";
  });
});


const searchProjects = (proyectosCategorias) =>{
  projectsDiv.innerHTML = ``;
  proyectosCategorias.forEach((p) => {
     projectsDiv.innerHTML += `
            <div class="project--item">
                <input type="image" id="${p.id}" class="b_modal zoom" src="img/proyectos/${p.galeria}.jpg"/> 
                <p class="project--item__p">${p.nombre} </p> 
            </div>
            `;
    });
}

const showProjects = (categoria) => {
  if (categoria === "Featured") {
    projectsDiv.innerHTML = ``;
    proyectos.forEach((proyecto) => {

      const proyectosCategorias = proyectos.filter(
        (proyecto) => proyecto.featured === 'yes'
      );      
      searchProjects(proyectosCategorias);     
    });
    buttonsModals();
  } else {
    const proyectosCategorias = proyectos.filter(
      (proyecto) => proyecto.categoria === categoria
    );

    searchProjects(proyectosCategorias);
    buttonsModals();
  }
};

const buttonsModals = () => {
  let b_callModal = document.querySelectorAll(".b_modal");
  b_callModal.forEach((b) => {
    b.addEventListener("click", (b) => {
      modal.style.display = "block";
      body.style.overflowY = "hidden";
      proyectos.forEach((p) => {
        if (b.target.id === p.id) {
          
          //Modal del proyecto HTML
          projectModal.innerHTML = `
            <div class="project--item__modal">
                  
                      <div class="swiper mySwiperModal">
                        <div class="swiper-wrapper " id="img__Carr">                 
                        </div>
                      <div class="swiper-pagination"></div>  
                      <div class="swiper-button-next swiperModal-button-next"></div>
                      <div class="swiper-button-prev swiperModal-button-prev"></div>
                
                    </div>
       
                    <div  class="project--item__modal--text">
                        <div>
                          <h3>${p.nombre} </h3> 
                          <p>${p.fecha} </p>                         
                        </div>
                        <div class="project--item__modal--textDesc">
                          ${p.descripcion} 
                        </div>
                        <div>
                          <h3>Tools:</h3>
                          <div id="tools--img" class="tools--img"></div>
                          
                        </div>   
                        <button id="b_behance"><a href="${p.behance}" target="_blank">View on Behance</a>  </button>                 
                    </div>          
            </div>         `;
          if (p.behance === "") {
            document.getElementById("b_behance").style.display = "none";
          }
          let toolsShow = document.getElementById("tools--img");
          let carrImg = document.getElementById("img__Carr");
          p.tools.forEach((i) => {
            toolsShow.innerHTML += `
                  <img src="img/${i}.png">
                `;
          });
          p.img.forEach((i) => {
            if (i.includes("mp4")){
              carrImg.innerHTML += `
              <div class="swiper-slide"><video class="video" loop muted controls src="img/proyectos/${i}"></div>
              `;
            } else {
              carrImg.innerHTML += `
              <div class="swiper-slide"><img src="img/proyectos/${i}.jpg"></div>
              `;
            }
          });
        }
      });
      video = document.querySelectorAll(".video");  
      if (video.length !=0){
        video[0].play();
      }
      let swiperModal = new Swiper(".mySwiperModal", {
        on: {
          slideChange: function () {
              if (video!=null){
                video.forEach(v=> {v.pause() 
                  v.currentTime = 0;
                })
                video[swiperModal.activeIndex].play(); 
              }           
          },
        },
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
          nextEl: ".swiperModal-button-next",
          prevEl: ".swiperModal-button-prev",
        },
      });
    });
  });
};

const modalFunction = () => {
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
    body.style.overflowY = "auto";
    video != null && video.forEach(v=> v.pause())
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      body.style.overflowY = "auto";
      video != null && video.forEach(v=> v.pause())
    }
  };
};


function isLinkInViewport(elem) {
  let distance = elem.getBoundingClientRect();
  return (
    distance.top * 2 <(window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0);
}


let rellax = new Rellax(".rellax", {
  center: true,
});

function HeaderColor() {
  if (window.pageYOffset > header.offsetHeight*6) {
    header.style.backgroundColor = "white";
    header.style.boxShadow ="0px 2px #00000017";
  } else {
    header.style.backgroundColor = "#45C1F0";
    header.style.boxShadow ="0px 0px #00000017";
  }
} 



botones[0].click();




window.addEventListener("scroll", (event) => {
  HeaderColor();
  sections.forEach((e) => {
    if (isLinkInViewport(e)) {
      linksColor.forEach((link) => {
        e.id == link.textContent? (link.style.color = "#45C1F0"): (link.style.color = "black");
      });
    }
  });
});


const smoothScroll = () =>{
  let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
  for (let item of anchorlinks) {  
      item.addEventListener('click', (e)=> {
          let hashval = item.getAttribute('href')
          
          let target = document.querySelector(hashval)
          target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          })
          history.pushState(null, null, hashval)
          e.preventDefault()
      })
  }
}

function noScroll (callback, refresh = 100) {
  if (!callback || typeof callback !== 'function') return;
  let isScrolling;
  window.addEventListener('scroll', function (event) {
    logo.style.display = 'none';
    logoGif.style.display = 'block';
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(callback, refresh);
  }, false);
}

noScroll(function () {
  // Scroll parado
  timeout = setTimeout(()=>{
    logo.style.display = 'block';
    logoGif.style.display = 'none';
  }, 400);
  
});




smoothScroll();
modalFunction();