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
    new film("Vaiana_la_legende_du_bout_du_monde.jpg", "vaiana", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("zootopia.jpg", "vaiana", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("la-haut.jpg", "la-haut", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("moi moche et mechant.jpg", "moi moche et mechant", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("encanto.jpg", "encanto", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("luca.jpg", "luca", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("coco.jpg", "coco", ["lien1", "lien2", "lien3"], "description", false, "animation"),
    new film("a jazzman.jpg", "a jazzman", ["lien1", "lien2", "lien3"], "description", false, "romantique"),
    new film("belle et la bete.jpg", "belle est la bete", ["lien1", "lien2", "lien3"], "description", false, "romantique"),
    new film("brooklyn.jpg", "brooklyn", ["lien1", "lien2", "lien3"], "description", false, "romantique"),
    new film("cher john.jpg", "cher john", ["lien1", "lien2", "lien3"], "description", false, "romantique"),
    new film("jour j.jpg", "jour j", ["lien1", "lien2", "lien3"], "description", false, "romantique"),
    new film("le secret de charlie.jpg", "le secret de charlie", ["lien1", "lien2", "lien3"], "description", false, "romantique"),
    new film("R.jpg", "R", ["lien1", "lien2", "lien3"], "description", false, "romantique"),
    new film("rosaline.jpg", "rosaline", ["lien1", "lien2", "lien3"], "description", false, "romantique"),
    new film("serena.jpg", "serena", ["lien1", "lien2", "lien3"], "description", false, "romantique"),
    new film("west side stoyr.jpg", "west side stoyr", ["lien1", "lien2", "lien3"], "description", false, "romantique"),
    new film("dans_la_peau_de_nos_animaux.jpg", "dans_la_peau_de_nos_animaux", ["lien1", "lien2", "lien3"], "description", false, "decouverte"),
    new film("decouverte.jpg", "decouverte", ["lien1", "lien2", "lien3"], "description", false, "decouverte"),
    new film("la_sagesse_de_la_pieuvre.jpg", "la_sagesse_de_la_pieuvre", ["lien1", "lien2", "lien3"], "description", false, "decouverte"),
    new film("lost city.jpg", "lost city", ["lien1", "lien2", "lien3"], "description", false, "decouverte"),
    new film("netflix-nous-passionne-avec-son.jpg", "netflix-nous-passionne-avec-son", ["lien1", "lien2", "lien3"], "description", false, "decouverte"),
    new film("benjamin.jpg", "benjamin", ["lien1", "lien2", "lien3"], "description", false, "decouverte"),
    new film("christophe colomb.jpg", "christophe colomb", ["lien1", "lien2", "lien3"], "description", false, "decouverte"),
    new film("into the wild.jpg", "into the wild", ["lien1", "lien2", "lien3"], "description", false, "decouverte"),
    new film("the dig.jpg", "the dig", ["lien1", "lien2", "lien3"], "description", false, "decouverte"),
    new film("the discovery.jpg", "the discovery", ["lien1", "lien2", "lien3"], "description", false, "decouverte"),
    new film("parasite.jpg", "parasite", ["lien1", "lien2", "lien3"], "description", false, "thriller"),
    new film("fenetre secrete.webp", "fenetre secrete", ["lien1", "lien2", "lien3"], "description", false, "thriller"),
    new film("imperceptible.jpg", "imperceptible", ["lien1", "lien2", "lien3"], "description", false, "thriller"),
    new film("infinite.webp", "infinite", ["lien1", "lien2", "lien3"], "description", false, "thriller"),
    new film("la femme a la fenetre.jpg", "la femme a la fenetre", ["lien1", "lien2", "lien3"], "description", false, "thriller"),
    new film("sans aucun remords.jpg", "sans aucun remords", ["lien1", "lien2", "lien3"], "description", false, "thriller"),
    new film("shutter.island.jpg", "shutter.island", ["lien1", "lien2", "lien3"], "description", false, "thriller"),
    new film("spilt.webp", "spilt", ["lien1", "lien2", "lien3"], "description", false, "thriller"),
    new film("the passenger.jpg", "the passenger", ["lien1", "lien2", "lien3"], "description", false, "thriller"),
    new film("benjamin.jpg", "benjamin", ["lien1", "lien2", "lien3"], "description", false, "thriller"),
];

let tabIndex = [];

function randomPoster(nb) {
    return Math.round(Math.random() * nb);
}

function getRandomPoster() {
    let randomNumber = randomPoster(9);
    let badRandom = true;
    if (tabIndex.length > 0) {
        while (badRandom) {
            console.log(tabIndex, randomNumber)
            if (tabIndex.find(index => index === randomNumber)) {
                randomNumber = randomPoster(9);
            } else {
                badRandom = false;
            }
        }
    }
    tabIndex.push(randomNumber);
    return randomNumber;
}

const listePoster = document.querySelectorAll(".contener-poster");
console.log(listePoster);


function affichagePoster(index, categorie) {
    const filmCategorie = films.filter(film => film.categories == categorie);
    for (let i = 0; i < 5; i++) {
        let indexPoster = getRandomPoster();
        listePoster[index].innerHTML += `<img src="../images/affiche-films/${categorie}/${filmCategorie[indexPoster].photo}" alt="${filmCategorie[indexPoster].nom}"/>`
    }
    tabIndex = [];
}

affichagePoster(0, "action");
affichagePoster(1, "animation");
affichagePoster(2, "thriller");
affichagePoster(3, "romantique");
affichagePoster(4, "decouverte");
