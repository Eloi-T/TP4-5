# M413 - TD2 : Réponses aux Questions

➢ Comment avez-vous ajouté l'écouteur d'évènement et sur quel objet ? 

```

Dans la fonction onLoad() :

    document.addEventListener("click", initSelect)

```


➢ Que se passe-t-il si vous utilisez currentTarget en lieu et place de target ? 

```

Event.currentTarget fait toujours référence à l'élément sur lequel le gestionnaire d'évènement a été attaché tandis que Event.target identifie l'élément à partir duquel l'évènement s'est produit.

Donc si l'on modifie target par currentTarget dans notre code, l'objet parent sera la cible du clic.

```

➢ Comment avez-vous ajouté l’élément ?

```
//dans select2()
if(element.tagName.toLowerCase() != "html")	insertElement(element)

```
```
function insertElement(target){
	let Guignol = document.getElementById("insert-type").value
	let Rayan = document.getElementById("insert-text").value
	let element = "<"+Guignol+">"+Rayan+"</"+Guignol+">"
	if(target.id != "insert-div" && target.id != "insert-type" && target.id != "insert-text"){
		target.insertAdjacentHTML('beforebegin', element);
    }	
}

```


➢ Comment avez-vous fait pour que la fonction select2() ignore les évèments de la \<div> donnée ci-dessus ?

```

//en spécifiant que l'id de l'élément cible ne fait pas parti de la \<div>
if(target.id != "insert-div" && target.id != "insert-type" && target.id != "insert-text"){
		target.insertAdjacentHTML('beforebegin', element);
    }

```