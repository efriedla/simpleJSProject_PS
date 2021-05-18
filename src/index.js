
// Get an activity to do if you are bored
function getActivity(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("activity").innerHTML = myObj.activity;
    }
    };
    xmlhttp.open("GET", "https://www.boredapi.com/api/activity", true);
    xmlhttp.send();
} 

//gets a setup and a punchline for a joke
function getJoke(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            document.getElementById("setup").innerHTML = myObj.setup;
            document.getElementById("punchline").innerHTML = myObj.punchline;
        }
    };
    xmlhttp.open("GET", "https://official-joke-api.appspot.com/random_joke", true);
    xmlhttp.send();
} 
//https://official-joke-api.appspot.com/random_joke



//pokemon
let pokemonNumber = getNum();
function getPokemon(){
    

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("poke1").innerHTML = myObj.species.name;
        $("#poke2pic").hide();
        document.getElementById("poke1pic").src = myObj.sprites.front_default;
        document.getElementById("pokAbility").innerHTML = myObj.abilities[0].ability.name;
        document.getElementById("pokeHeight").innerHTML = myObj.height;
        document.getElementById("pokeWeight").innerHTML = myObj.weight;
        document.getElementById("pokeType").innerHTML = myObj.types[0].type.name;
    }
    };
    xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+ pokemonNumber, true);
    xmlhttp.send();
} 

//get intended pokemon
function getIntendedPokemon(num){

       console.log("in function "+ num);
    
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            $("#poke2").show();
            document.getElementById("poke2").innerHTML = myObj.species.name;
            $("#poke1").hide();

            $("#poke2pic").show();
            document.getElementById("poke2pic").src = myObj.sprites.front_default;
            $("#poke1pic").hide();
            $("#pokAbility2").show();
            document.getElementById("pokAbility2").innerHTML = myObj.abilities[0].ability.name;
            $("#pokAbility").hide();
            $("#pokeHeight2").show();
            document.getElementById("pokeHeight2").innerHTML = myObj.height;
            $("#pokeHeight").hide();

            $("#pokeWeight2").show();
            document.getElementById("pokeWeight2").innerHTML = myObj.weight;
            $("#pokeWeight").hide();
            $("#pokeType2").show();
            document.getElementById("pokeType2").innerHTML = myObj.types[0].type.name;
            $("#pokeType").hide();
            console.log(myObj.species.name);
        }
        };
        xmlhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/"+ num, true);
        xmlhttp.send();
    } 
// }
// returns random number up to 150
function getNum(){
   return Math.floor(Math.random() * 150)
}
function getIntendedPokemon1(){
    var str = document.getElementById("searchPokemon").value;
    // var pattern = /[1-9]/g;
    let pattern = /\b(0|[1-9][0-9]?|150)\b/g;
    let result = str.match(pattern);
    //console.log(str);
    //console.log(pattern.test(str)+ " here");
    if(pattern.test(str)){
        console.log(str + " here");
        getIntendedPokemon(str)   ;
       
       
    }else{
        console.log(" here");
        return  1;
    }

}
// not to show name till after you get it from form
$(".gotName").hide();

//Get Name from form, does not allow numbers
function submitForm() {
    var str = document.getElementById("formName").value;
    if(str.length > 0){
        var patt1 = /[^0-9]/g;
        patt1.test(str);

        if(patt1.test(str)){
            $(".formName").hide();
        
           
            $(".gotName").show();
            $(".gotName").text("Ready to start your daily quest " +str + "!");
            return str
        }else{
            alert("sorry no numbers for names");
        }
        
        

    }
    
  }

// https://pokeapi.co/api/v2/pokemon?limit=100&offset=200