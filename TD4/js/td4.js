'use strict';

let message = 'JavaScript is ok :)';
console.log(message);

//1.1
console.log("\n//1.1")

//a.
const personne0 = {
    nom : "",
	prenom : "",
    age : 0,
    taille : 0       
}

//b.
const personne = {}
personne.nom = ""
personne.prenom = ""
personne.age = 0
personne.taille = 0

//c.
console.log("\n//c.")
const x = personne
x.nom = "M.X"
x.prenom = "Timothé"
x.age = 42
x.taille = 186

console.log("personne :")
console.log(personne)
console.log("x :")
console.log(x)
//x et personne possèdent les même attributs

//1.2
console.log("\n\n//1.2")

//a.
console.log("\n//a.")
console.log("personne.nom -> "+personne.nom)
console.log("personne['nom'] -> "+personne['nom'])
console.log(personne)

//b.
console.log("\n//b.")
for(let val in personne){
	console.log(personne[val])
}

//c.
console.log("\n//c.")
personne.poids = 95
console.log(personne)

//d.
console.log("\n//d.")
delete personne.poids
console.log(personne)


//1.3
console.log("\n\n//1.3")

//a.
console.log("\n//a.")
const sport = {
	sport1 : "football",
	sport2 : "ping-pong",
	sport3 : "aqua poney"
}
personne.sport = sport
console.log(personne.sport)

//b.
console.log("\n//b.")
console.log(personne.sport["sport1"])
console.log(personne["sport"].sport2)
console.log(personne.sport.sport3)

//c.
console.log("\n//c.")
for(let val in personne.sport){
	console.log(personne["sport"][val])
}

//d.
console.log("\n//d.")
let s = ["basket","tennis","aqua poney"]
let e = [["ballon","panier","chaussure"],["raquette","balle","filet"],["poney","aqua","canne à pêche"]]
let tabSport = []

for(let cpt = 0; cpt < 3; cpt++){
	let activité = {
		nom : s[cpt],
		equipements : e[cpt]
	}
	tabSport[cpt] = activité	
}
personne.sport = tabSport

for(let val in personne.sport){
	console.log(personne.sport[val].nom)
	for(let e in personne.sport[val].equipements){
		console.log("\t"+personne.sport[val].equipements[e])
	}
}



//1.4
console.log("\n\n//1.4")

//a.
console.log("\n//a.")

personne.qui = function() {
	console.log(`Je m'appelle ${this.nom} ${this.prenom}`);
};
personne.qui()

//b.
console.log("\n//b.")

personne.quiMaj = function() {
	console.log("Je m'appelle "+this.nom.toUpperCase()+" "+this.prenom.toUpperCase());
};
personne.quiMaj()


//1.5
console.log("\n\n//1.5")

//a.
console.log("\n//a.//b.//c.//d.\n<---")
let div = document.getElementById("display_personne")

const ul = document.createElement("ul");
//c.
personne.datenaissance = new Date(2003,0,20)
//d.
personne.getAge = function(){
	return this.age
}

arrayViewer(personne)
div.appendChild(ul);

function arrayViewer(element){
	const li = document.createElement("li");
	if(typeof element == "object" && element !== null && !(element instanceof Date)){
		ul.appendChild(document.createElement("br"))
		if(Array.isArray(element)){
			element.forEach(value => {
				arrayViewer(value);
			});
		} else {
			Object.values(element).forEach(value => {
				arrayViewer(value);
			});
		}
		ul.appendChild(document.createElement("br"));
	} else {
		//b.
		//d.
		/*
		JSON.Stringify() ne permet pas d'afficher la fonction car il n'a pas de "contenu"
		alors que toString() affiche simplement l'élément
		*/
		li.textContent = typeof element == "function" ? element.toString() : JSON.stringify(element)
		ul.appendChild(li);
	}
}




//2.1
console.log("\n\n\n//2.1")

//a.
console.log("\n//a.//b.")

personne.langue = "togolais"

Object.defineProperty(personne, "getLang", {
	get: function() {
		console.log("langue parlé : "+this.langue)
		return this.langue;
	}
});

//b.
Object.defineProperty(personne, "setLang", {
	set: function(value) {
	  	this.langue = value;
	}
});
personne.getLang
personne.setLang = "afghan"
personne.getLang

//c.
console.log("\n//c.")
console.log("la principale différence entre un getter et une propriété qui contient une fonction est la façon dont on accède à leur valeur. Avec un getter, on peut accéder à la propriété comme s\'il s\'agissait d\'une variable, tandis qu\'avec une propriété qui contient une fonction, on doit appeler explicitement la fonction pour obtenir la valeur.")

//d.
console.log("\n//d.")

const obj = {
	counter : 0
}
//getter
Object.defineProperty(obj, "reset", {
	get: function() {
		this.counter = 0
	}
});
Object.defineProperty(obj, "inc", {
	get: function() {
		this.counter += 1
	}
});
Object.defineProperty(obj, "dec", {
	get: function() {
		this.counter -= 1
	}
});

//setter
Object.defineProperty(obj, "add", {
	set: function(value) {
	  	this.counter += value;
	}
});
Object.defineProperty(obj, "subs", {
	set: function(value) {
	  	this.counter -= value;
	}
});

obj.add = 5
console.log("counter = "+obj.counter)
obj.inc
obj.inc
console.log("counter = "+obj.counter)
obj.dec
console.log("counter = "+obj.counter)
obj.subs = 2
console.log("counter = "+obj.counter)
obj.reset
console.log("counter = "+obj.counter)



//2.2
console.log("\n\n//2.2")

//a.
console.log("\n//a.//b.//c.//d.")

function Personne(nom,prenom,age,couleurDesYeux){
	this.nom = nom
	this.prenom = prenom
	this.age = age
	this.couleurDesYeux = couleurDesYeux
	//c.
	this.name = function(){
		console.log(this.prenom+" "+this.nom)
	}
	//d.
	this.changeName = function(newNom,newPrenom){
		this.nom = newNom
		this.prenom = newPrenom
	}
}  
//b.
var père = new Personne("Billancini", "Gille", 45, "marron");
var mère = new Personne("Billancini", "Courtoisier", 36, "bleu");
console.log(père)
console.log(mère)

père.name()
mère.changeName("Carotte","Portugais");
mère.name()

//e.
console.log("\n//e.")

let str = "Hello";
let num = 42;
let bool = true;
let objet = {}; 
let arr = [];
let regex = /hello/;
let func = function() {};
let date = new Date();

console.log(str.length); // affiche 5
console.log(num.toString()); // affiche "42"
console.log(bool.valueOf()); // affiche true
console.log(objet.hasOwnProperty("toString")); // affiche false
console.log(arr.push("world")); // affiche 1
console.log(regex.test("hello")); // affiche true
console.log(func.name); // affiche ""
console.log(date.getFullYear()); // affiche l'année en cours

//f.
console.log("\n//f.")

console.log(Math.random())
console.log(Math.floor(3.14))
console.log(Math.max(1,5,2,8,3,7))



//3.0
console.log("\n\n\n//3.0")

//a.
console.log("\n//a.")

Personne.prototype.nationalite = "Pakistan";
console.log(père.nationalite)

//b.
console.log("\n//b.")

Personne.prototype.name = function(){
	console.log("le père s'appelle "+this.prenom+" "+this.nom)
}
père.name()
//on ne peut pas modifier une fonction déjà créée dans un objet

//3.1
console.log("\n\n//3.1")

//a.
console.log("\n//a.")

function Personne3(nom,prenom){
	this.nom = nom
	this.prenom = prenom
	this.estomac = []	
}
const tibo = new Personne3("baraco","tibo")
console.log(tibo)

//b.
console.log("\n//b.")
Personne3.prototype.manger = function(nourriture){
	if(this.estomac.length < 10){
		this.estomac.push(nourriture)
	}
}
tibo.manger("carpaccio")
tibo.manger("sandwich")

for(let i = 0; i<10; i++){
	tibo.manger("frites")
}
console.log(tibo.estomac)

//c.
console.log("\n//c.")
Personne3.prototype.digestionOK = function(){
	this.estomac.splice(0,this.estomac.length)
}
tibo.digestionOK()
console.log(tibo.estomac)

//d.
console.log("\n//d.")
Personne3.prototype.name = function(){
	console.log(this.prenom+" "+this.nom)
}
tibo.name()


//3.2
console.log("\n\n//3.2")

//a.
console.log("\n//a.//b.//c.")

function Car(modele,conso100km){
	this.modele = modele
	this.conso100km = conso100km
	this.reservoirLitre = 0
	this.compteurkm = 0
}
const citroen = new Car("C3",4.8)

//b.
Car.prototype.addFuel = function(nblt){
	this.reservoirLitre += nblt
}
citroen.addFuel(5)

//c.
Car.prototype.drive = function(nbkm) {
	var distanceMax = this.reservoirLitre / this.conso100km;
  
	if (nbkm > distanceMax) {
	  	console.log("Je serai à cours de carburant dans "+ distanceMax +" km");
	  	this.compteurkm += distanceMax;
	  	this.reservoirLitre = 0;
	} else {
		this.compteurkm += nbkm;
	  	this.reservoirLitre -= nbkm * this.conso100km;
	}
}
citroen.drive(5)
citroen.addFuel(50)
citroen.drive(5)

//3.3
console.log("\n\n//3.3")

//a.
console.log("\n//a.//b.//c.")

function Baby(nom, prenom, age, couleurYeux,jouetFavori) {
	Personne.call(this, nom, prenom, age, couleurYeux);
	//b
	this.jouetFavori = jouetFavori;
}  
Baby.prototype = Object.create(Personne.prototype);
Baby.prototype.constructor = Baby;

const eloi = new Baby("terrol","eloi",20,"vert","pied")
console.log(eloi)

//c.
Baby.prototype.jouer = function(){
	console.log("je joue avec mon "+this.jouetFavori)
}
eloi.jouer()