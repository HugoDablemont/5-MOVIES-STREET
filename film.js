class film {
    constructor(photo, nom, liens, description, hasbeenwatched, categories) {
        this.photo = photo;
        this.nom = nom;
        this.liens = liens;
        this.description = description;
        this.hasbeenwatched = hasbeenwatched;
        this.categories = categories;
    }
}

let films = [
    new film("venom.jpg", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("taken.jpg", "taken", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("bullet train.jpg", "bullet train", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("hurricane.jpg", "hurricane", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("le chant du loup.jpg", "le chant du loup", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("LES Eternels.webp", "les eternels", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("THE GAY MAN.webp", "the gay man", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("black widow.jpg", "black widow", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("free guy.jpg", "free guy", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("uncharted.jpg", "uncharted", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("REINE.jpg", "reine des neiges", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("tous en scene.jpg", "tous en scene", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("lion king.jpg", "le roi lion", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("Vaiana.jpg", "vaiana", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("zootopia.jpg", "vaiana", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("la-haut.jpg", "la-haut", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("moi moche et mechant.jpg", "moi moche et mechant", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("encanto.jpg", "encanto", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("la-haut.jpg", "la-haut", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("moi moche et mechant.jpg", "moi moche et mechant", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),
    new film("photo.png", "venom", ["lien1", "lien2", "lien3"], "description", false, "action"),

];

function getRandomPoster(tabIndex){
    let randomPoster = Math.round(Math.random() * 7);
    for (let j = 0; j < tabIndex.length; j++) {
        if(tabIndex[j] == randomPoster){
            randomPoster = Math.round(Math.random() * 7);
        }else{
            tabIndex.push(randomPoster);
        }
    }
    if(tabIndex.length == 0){
        tabIndex.push(randomPoster);
    }
    return tabIndex
}

const listePoster = document.querySelector(".contener-poster");
console.log(listePoster);

let tabIndex = [];

for (let i = 0; i < 5; i++) {
    listePoster.innerHTML += `<img src="../images/affiche-films/${films[getRandomPoster(tabIndex).at(-1)].photo}" alt="logo"/>`
}


