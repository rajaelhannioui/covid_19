
//quiz
const questionsList = [
	{
		text: 'Pensez-vous avoir ou avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 1,
		value: 10
	},
	{
		text: 'Ces dernières 48 heures, quelle a été votre température la plus élevée ?',
		choices: `<label for="numerique">degrée</label>
        <input type="text" id="numerique">`,
		number: 2,
		value: 10
	},
	{
		text: 'Ces derniers jours, avez-vous une toux ou une augmentation de votre toux habituelle ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 3,
		value: 10
	},
	{
		text: 'Ces derniers jours, avez-vous noté une forte diminution ou perte de votre goût ou de votre odorat ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 4,
		value: 10
	},
	{
		text:
			'Ces derniers jours, avez-vous eu un mal de gorge et/ou des douleurs musculaires et/ou des courbatures inhabituelles ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 5,
		value: 10
	},
	{
		text: 'Ces dernières 24 heures, avez-vous de la diarrhée ? Avec au moins 3 selles molles.',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 6,
		value: 10
	},
	{
		text: 'Ces derniers jours, avez-vous une fatigue inhabituelle ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 7,
		value: 10
	},
	{
		text: 'Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 8,
		value: 10
	},
	{
		text: "Depuis 24 heures ou plus, êtes-vous dans l'impossibilité de vous alimenter ou de boire ?",
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 9,
		value: 10
	},
	{
		text:
			'Ces dernières 24 heures, avez-vous noté un manque de souffle inhabituel lorsque vous parlez ou faites un petit effort ?',
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 10,
		value: 10
	},
	{
		text: `Quel est votre âge ? 
        Ceci, afin de calculer un facteur de risque spécifique.`,
		choices: `<label for="numerique">ans</label>
        <input type="text" id="numerique" name="choice">`,
		number: 11,
		value: 10
	},
	{
		text: `Quel est votre taille ? 
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices: `<label for="numerique">cm</label>
        <input type="text" id="numerique" name="choice">`,
		number: 12,
		value: 10
	},
	{
		text: `Quel est votre poids ?
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices: `<label for="numerique">kg</label>
        <input type="text" id="numerique" name="choice">`,
		number: 13,
		value: 10
	},
	{
		text: `Avez-vous de l’hypertension artérielle mal équilibrée ?
        Ou avez-vous une maladie cardiaque ou vasculaire ?
        Ou prenez vous un traitement à visée cardiologique ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="sspas" name="choice" >`,
		number: 14,
		value: 10
	},
	{
		text: `Êtes-vous diabétique ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 15,
		value: 10
	},
	{
		text: `Avez-vous ou avez-vous eu un cancer ces trois dernières années ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 16,
		value: 10
	},
	{
		text: `Avez-vous une maladie respiratoire ?
        Ou êtes-vous suivi par un pneumologue ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 17,
		value: 10
	},
	{
		text: `Avez-vous une insuffisance rénale chronique dialysée ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 18,
		value: 10
	},
	{
		text: `Avez-vous une maladie chronique du foie ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>`,
		number: 19,
		value: 10
	},
	{
		text: `Êtes-vous enceinte ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Non applicable</label>
        <input type="radio" id="sspas" value="sspas" name="choice" >`,
		number: 20,
		value: 10
	},
	{
		text: `Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="sspas" name="choice" >`,
		number: 21,
		value: 10
	},
	{
		text: `Prenez-vous un traitement immunosuppresseur ?
        C’est un traitement qui diminue vos défenses contre les infections.
        Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
		choices: `<label for="oui">Oui</label>
        <input type="radio" value="oui" id="oui" name="choice"><br>
        <label for="non">Non</label>
        <input type="radio" id="non" value="non" name="choice"><br>
        <label for="sspas">Ne sait pas</label>
        <input type="radio" id="sspas" value="sspas" name="choice">`,
		number: 22,
		value: 10
	}
];


const stepper = document.getElementById("stepper");
const préambule = document.getElementById("préambule");
const progretion = document.getElementById("prog");
const questionnaire = document.getElementById("box");
const questionDiv = document.getElementById("questionnaire");
const anti=document.getElementById('Anti-inflammatoires')
const réponce = document.getElementById("réponce");
const ruseltas = document.getElementById("ruseltas");
const précid = document.getElementById("précid");
const suiv = document.getElementById("suiv");
const répan = document.getElementById("répan");
const tst = document.getElementById("tst");
const list = document.getElementsByClassName("list__item");
const count = document.getElementById("count");

// passer a l 'etape suivant
function bar(progres){
    progretion.style.width =`${(100/22)*(progres+1)}%`;
    progretion.style.backgroundColor='#1078AD';
    count.textContent= (cont +1) + '/' + questionsList.length;

    //progretion.firstElementChild.style.width =`${100/22*progres}%`;
    //progretion.firstElementChild.style.backgroundColor='#1078AD';
    
}

tst.addEventListener('click', nextStep);
 
function nextStep(){
    préambule.style.display='none';
    questionnaire.style.display='block';
    list[0].classList.remove('list__item--active');
    list[1].classList.add('list__item--active');
    showQuestion (cont)
    bar(cont)
   
}


// afficher la question
function showQuestion (textIndex){
    let quest = questionsList[textIndex];
    questionDiv.textContent= quest.text;
    réponce.innerHTML=quest.choices;
    
}
let cont = 0
//afficher la question suivant

suiv.addEventListener('click',nextQuestion);

function nextQuestion(){
    
    cont += 1
    showQuestion (cont)
    console.log(cont);
    if(cont > 0){
        précid.style.display="block"
   }
   if(cont >=1){
       anti.style.display="none"
   }
   bar(cont)
      
}

//afficher la question précedent
précid.addEventListener('click',lastQuestion);
function lastQuestion(){
    cont -= 1
    showQuestion (cont)
    console.log(cont);
    if(cont <= 0){
       précid.style.display="none"
    }
    if(cont <1){
        anti.style.display="block"
    }

    bar(cont)

}

// afficher la question


   //<!-- <html>
//<body>

//<ul id="myList">
  //<li>Coffee</li>
 // <li>Tea</li>
//</ul>

//<p>Click the button to append an item to the end of the list.</p>

//<button id= "btn">Try it</button>
//<p><strong>Note:</strong><br>First create an LI node,<br> then create a Text node,<br> then append the Text node to the LI node.<br>Finally append the LI node to the list.</p>

//</body>
//</html>-->