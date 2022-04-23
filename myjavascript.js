var RowSelec=null

//========================== le fonction submit de la formulaire ======================//


function OnSubmitFunction(){

	var formData = readFormData();
	if(RowSelec==null){
		//alert("Personne ajoutée avec succès")
		insertformData(formData);
	  

	}
		
	else{

		//alert("Une modification a été fait avec succès!")

		updateformData(formData);

	}
	resetform();
}

	//========================== Lire les donnees de  formulaire ======================//


// Lire/recuperer  des donnes ou des valeurs de input qui auront saisie dans la  formulaire 

	function readFormData(){
	 	var formData = {};

     	formData["idNumero"]        =        document.getElementById("idNumero").value;
    	formData["idNom"]           =        document.getElementById("idNom").value;
    	formData["idprenom"]        =        document.getElementById("idprenom").value;
    	formData["idSexe"]          =        document.getElementById("idSexe").value;
    	formData["idDateNaissance"] =        document.getElementById("idDateNaissance").value;

    	return formData;

	}
//========================== Insereton dans le formulaire allant de la tableau  ======================//
   


   // envoyer des donnees saisie avec le button submit vers la tableau cellule par cellule

	function insertformData(data){

		var tableau=document.getElementById('mytable').getElementsByTagName('tbody')[0];

		var rows = tableau.insertRow(tableau.length);


		cell1=rows.insertCell(0);
		cell1.innerHTML=data.idNumero;

		cell2=rows.insertCell(1);
		cell2.innerHTML=data.idNom;

		cell3=rows.insertCell(2);
		cell3.innerHTML=data.idprenom;

		cell4=rows.insertCell(3);
		cell4.innerHTML=data.idSexe;

		cell5=rows.insertCell(4);
		cell5.innerHTML=data.idDateNaissance;

		cell6 = rows.insertCell(5);
    cell6.innerHTML = 
    	`<button type="button" class="btn btn-info" onClick="Modifier(this)"> Modifier</button>
    	 <button type="button" class="btn btn-danger" onClick="Supprimer(this)"> Supprimer</button>`;

    

	}

	    //================================= Supprimer ======================================//


	function Supprimer(td) {

    	if (confirm('Etes-vous sur de vouloire supprimer?')) {
        row = td.parentElement.parentElement;
        document.getElementById("mytable").deleteRow(row.rowIndex);
        resetform();
       }

    }

    //======================== Effacer les données saisie dans le formulaire  apres le submit==================================//

    function resetform(){

    document.getElementById("idNumero").value="";
    document.getElementById("idNom").value="";
    document.getElementById("idprenom").value="";
    document.getElementById("idSexe").value="";
    document.getElementById("idDateNaissance").value="";
    RowSelec=null;
    


}

//========================= Modifier =====================================================//

function Modifier(td){
RowSelec = td.parentElement.parentElement;
document.getElementById("idNumero").value        =       RowSelec.cells[0].innerHTML;
document.getElementById("idNom").value           =       RowSelec.cells[1].innerHTML;
document.getElementById("idprenom").value        =       RowSelec.cells[2].innerHTML;
document.getElementById("idSexe").value          =       RowSelec.cells[3].innerHTML;
document.getElementById("idDateNaissance").value =       RowSelec.cells[4].innerHTML;

}

//========================= Modification les données de la formulaire ================================//


function updateformData(formData){
RowSelec.cells[0].innerHTML = formData.idNumero;
RowSelec.cells[1].innerHTML = formData.idNom;
RowSelec.cells[2].innerHTML = formData.idprenom;
RowSelec.cells[3].innerHTML = formData.idSexe;
RowSelec.cells[4].innerHTML = formData.idDateNaissance;


}

//========================= Chercher par nom ===========================================================//

function chercher() {
	// body...
	var input =document.getElementById("Idchercher");
	var filter=input.value.toUpperCase();
	var table=document.getElementById("mytable");
	var tr=document.getElementsByTagName("tr");
	for (var i = 0 ; i < tr.length; i++) {
		var td = tr[i].querySelectorAll("td")[1];
		if(td){
			if(td.innerHTML.toUpperCase().indexOf(filter) >-1){
			
				tr[i].style.display="";
			}
			else{
				tr[i].style.display="none";
					}
			}

		}
}


th = document.getElementsByTagName('th');

for(let c=0; c < th.length; c++){

    th[c].addEventListener('click',item(c))
}

//=============================================== Trier selon la colonne =====================//

function item(c){

    return function(){
      console.log(c)
      sortTable(c)
    }
}


function sortTable(c) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("mytable");
  switching = true;

  while (switching) {
   
    switching = false;
    rows = table.rows;
  
    for (i = 1; i < (rows.length - 1); i++) {
    
      shouldSwitch = false;
     
      x = rows[i].getElementsByTagName("td")[c];
      y = rows[i + 1].getElementsByTagName("td")[c];
   
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
     
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

//========================== Le bouton qui va cacher le tableau lors de saisie de la formulaire  ======================//
	/*
 let Ajouter_etudiant = document.getElementById("Ajouter_etudiant");

		Ajouter_etudiant.addEventListener("click", function(e) {
    
    mytable.style.display = "none"
    document.getElementById("mytable").style.display = "none"
    document.getElementById("Idchercher").style.display = "none"
    document.getElementById("liste_etudiant").style.display = "none"
    document.getElementById("ajouter_etudiant").style.display = "block"
    document.getElementById("AjouterForm").style.display = "block"
    
    
    
    
})

		//================================ afficher le tableau avec l'enregistrement=========================//

		let enregistrer = document.getElementById("enregistrer");
		enregistrer.addEventListener("click", function() {

    mytable.style.display = "none"
    document.getElementById("mytable").style.display ="none"
    document.getElementById("Idchercher").style.display = "none"
    document.getElementById("liste_etudiant").style.display = "none"

    document.getElementById("ajouter_etudiant").style.display = "block"
    document.getElementById("AjouterForm").style.display = "block"
    
    })

*/
function cacherElement(){


	var x = document.getElementById('Myform');

	if(x.style.display === "none"){

		x.style.display="block ";
	}
		else{

			x.style.display="none";
		}
	
}

