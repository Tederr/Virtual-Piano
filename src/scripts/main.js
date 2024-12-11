const pianoTeclas = document.querySelectorAll(".teclas__piano .teclas");
const volumeControle = document.querySelector(".volume-slider input")
const checarTlecas = document.querySelector(".visualizar-tecla input")

let mapedTeclas = [];
let audio = new Audio(`./src/assets/melodias/a.wav`)


const tocarMelodia = (tecla) => {
    audio.src = (`./src/assets/melodias/${tecla}.wav`)
    audio.play();

    const clicarTeclas = document.querySelector(`[data-tecla="${tecla}"]`);
    clicarTeclas.classList.add("active");
    setTimeout(() => {
        clicarTeclas.classList.remove("active");
    }, 150) 
}

pianoTeclas.forEach((teclas) => {
    teclas.addEventListener("click", () => tocarMelodia(teclas.dataset.tecla));
    mapedTeclas.push(teclas.dataset.tecla)
});

document.addEventListener("keydown", (e) => {
    if(mapedTeclas.includes(e.key)){
        tocarMelodia(e.key);
    }
});

const lidarComVolume = (e) =>{
    audio.volume = e.target.value;
}

const ocultarTeclas = () =>{
    pianoTeclas.forEach(tecla => tecla.classList.toggle("hide"));
}

volumeControle.addEventListener("input", lidarComVolume);

checarTlecas.addEventListener("click", ocultarTeclas);