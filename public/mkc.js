const url = `http://localhost:3000/characters`
let win1 = false
let win2 = false
let win3 = false
let win4 = false

let win5 = false
let win6 = false
let win7 = false
let win8 = false

function createCharacter(){
    const checked = (idContainer) => {
        const container = document.getElementById(idContainer);
        if (!container) return [];
        
        const selection = container.querySelectorAll('input[type="checkbox"]:checked');
        return Array.from(selection).map(input => input.value);
    };
    const create_name = document.getElementById("create_name").value
    const create_type = checked("create_type")
    const create_attack = document.getElementById("create_attack").value

    if(create_name === ""){
        alert("The name can't be null!")
    }
   else if(create_name.length > 50){
        alert("The name can't pass the 50 letters limit!")
    }
   else if(create_type.length !== 1){
        alert("Select one type!")
    }
   else if(create_attack === ""){
        alert("The attack cannot be null!")
    }
    else{
        alert("Sucess!")
        fetch("/characters",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({create_name, create_type, create_attack})
        })
    }
}
function randomCharacters(){
    fetch(url)
    .then(response => response.json())
    .then (characters => {
        if (characters.length < 8){
            alert("8 characters minimum in the DATABASE needed to initiate the competition!")
            window.location.href = 'http://localhost:3000/mkc_title.html'
            return;
        }
        const randomindex1 = Math.floor(Math.random() * characters.length);
        const x1 = characters[randomindex1]

        document.getElementById("name1").innerHTML = x1.character_name
        document.getElementById("type1").innerHTML = x1.character_type
        document.getElementById("attack1").innerHTML = x1.attack

        const randomindex2 = Math.floor(Math.random() * characters.length);
        const x2 = characters[randomindex2]
        if(x2 == x1){
            return randomCharacters();
        }

        document.getElementById("name2").innerHTML = x2.character_name
        document.getElementById("type2").innerHTML = x2.character_type
        document.getElementById("attack2").innerHTML = x2.attack

        const randomindex3 = Math.floor(Math.random() * characters.length);
        const x3 = characters[randomindex3]
        if(x3 == x1 || x3 == x2){
            return randomCharacters();
        }

        document.getElementById("name4").innerHTML = x3.character_name
        document.getElementById("type4").innerHTML = x3.character_type
        document.getElementById("attack4").innerHTML = x3.attack

        const randomindex4 = Math.floor(Math.random() * characters.length);
        const x4 = characters[randomindex4]
        if(x4 == x1 || x4 == x2 || x4 == x3){
            return randomCharacters();
        }

        document.getElementById("name5").innerHTML = x4.character_name
        document.getElementById("type5").innerHTML = x4.character_type
        document.getElementById("attack5").innerHTML = x4.attack

        const randomindex5 = Math.floor(Math.random() * characters.length);
        const x5 = characters[randomindex5]
        if(x5 == x1 || x5 == x2 || x5 == x3 || x5 == x4){
            return randomCharacters();
        }

        document.getElementById("name7").innerHTML = x5.character_name
        document.getElementById("type7").innerHTML = x5.character_type
        document.getElementById("attack7").innerHTML = x5.attack

        const randomindex6 = Math.floor(Math.random() * characters.length);
        const x6 = characters[randomindex6]
        if(x6 == x1 || x6 == x2 || x6 == x3 || x6 == x4 || x6 == x5){
            return randomCharacters();
        }

        document.getElementById("name8").innerHTML = x6.character_name
        document.getElementById("type8").innerHTML = x6.character_type
        document.getElementById("attack8").innerHTML = x6.attack

        const randomindex7 = Math.floor(Math.random() * characters.length);
        const x7 = characters[randomindex7]
        if(x7 == x1 || x7 == x2 || x7 == x3 || x7 == x4 || x7 == x5 || x7 == x6){
            return randomCharacters();
        }

        document.getElementById("name11").innerHTML = x7.character_name
        document.getElementById("type11").innerHTML = x7.character_type
        document.getElementById("attack11").innerHTML = x7.attack

        const randomindex8 = Math.floor(Math.random() * characters.length);
        const x8 = characters[randomindex8]
        if(x8 == x1 || x8 == x2 || x8 == x3 || x8 == x4 || x8 == x5 || x8 == x6 || x8 == x7){
            return randomCharacters();
        }

        document.getElementById("name10").innerHTML = x8.character_name
        document.getElementById("type10").innerHTML = x8.character_type
        document.getElementById("attack10").innerHTML = x8.attack
    })
}
if (window.location.pathname.includes("mkc.html")) {
    window.onload = randomCharacters;
}
function startCompetition(){
    const character1_name = document.getElementById("name1").innerHTML
    const character1_type = document.getElementById("type1").innerHTML
    const character1_attack = document.getElementById("attack1").innerHTML

    const character2_name = document.getElementById("name2").innerHTML
    const character2_type = document.getElementById("type2").innerHTML
    const character2_attack = document.getElementById("attack2").innerHTML

    const character3_name = document.getElementById("name4").innerHTML
    const character3_type = document.getElementById("type4").innerHTML
    const character3_attack = document.getElementById("attack4").innerHTML

    const character4_name = document.getElementById("name5").innerHTML
    const character4_type = document.getElementById("type5").innerHTML
    const character4_attack = document.getElementById("attack5").innerHTML

    const character5_name = document.getElementById("name7").innerHTML
    const character5_type = document.getElementById("type7").innerHTML
    const character5_attack = document.getElementById("attack7").innerHTML

    const character6_name = document.getElementById("name8").innerHTML
    const character6_type = document.getElementById("type8").innerHTML
    const character6_attack = document.getElementById("attack8").innerHTML

    const character7_name = document.getElementById("name10").innerHTML
    const character7_type = document.getElementById("type10").innerHTML
    const character7_attack = document.getElementById("attack10").innerHTML

    const character8_name = document.getElementById("name11").innerHTML
    const character8_type = document.getElementById("type11").innerHTML
    const character8_attack = document.getElementById("attack11").innerHTML

const random1 = Math.floor(Math.random() * 2)
if(random1 == 1){
   document.getElementById("name3").innerHTML = character1_name
   document.getElementById("type3").innerHTML = character1_type
   document.getElementById("attack3").innerHTML = character1_attack
   win1 = true
}
else{
   document.getElementById("name3").innerHTML = character2_name
   document.getElementById("type3").innerHTML = character2_type
   document.getElementById("attack3").innerHTML = character2_attack
   win1 = false
}
const random2 = Math.floor(Math.random() * 2)
if(random2 == 1){
   document.getElementById("name6").innerHTML = character3_name
   document.getElementById("type6").innerHTML = character3_type
   document.getElementById("attack6").innerHTML = character3_attack
   win2 = true
}
else{
   document.getElementById("name6").innerHTML = character4_name
   document.getElementById("type6").innerHTML = character4_type
   document.getElementById("attack6").innerHTML = character4_attack
   win2 = false
}
const random3 = Math.floor(Math.random() * 2)
if(random3 == 1){
   document.getElementById("name9").innerHTML = character5_name
   document.getElementById("type9").innerHTML = character5_type
   document.getElementById("attack9").innerHTML = character5_attack
   win3 = true
}
else{
   document.getElementById("name9").innerHTML = character6_name
   document.getElementById("type9").innerHTML = character6_type
   document.getElementById("attack9").innerHTML = character6_attack
   win3 = false
}
const random4 = Math.floor(Math.random() * 2)
if(random4 == 1){
   document.getElementById("name12").innerHTML = character7_name
   document.getElementById("type12").innerHTML = character7_type
   document.getElementById("attack12").innerHTML = character7_attack
   win4 = true
}
else{
   document.getElementById("name12").innerHTML = character8_name
   document.getElementById("type12").innerHTML = character8_type
   document.getElementById("attack12").innerHTML = character8_attack
   win4 = false
}
/////////////////////////////////////////////////////////////////////////////////////////////////
if(win1 == true){
   document.getElementById("name13").innerHTML = character1_name
   document.getElementById("type13").innerHTML = character1_type
   document.getElementById("attack13").innerHTML = character1_attack
}
else{
   document.getElementById("name13").innerHTML = character2_name
   document.getElementById("type13").innerHTML = character2_type
   document.getElementById("attack13").innerHTML = character2_attack
   
}
if(win2 == true){
    document.getElementById("name13").innerHTML = character3_name
   document.getElementById("type13").innerHTML = character3_type
   document.getElementById("attack13").innerHTML = character3_attack
   
}
else{
    document.getElementById("name13").innerHTML = character4_name
   document.getElementById("type13").innerHTML = character4_type
   document.getElementById("attack13").innerHTML = character4_attack
   
}
if(win3 == true){
    document.getElementById("name14").innerHTML = character5_name
   document.getElementById("type14").innerHTML = character5_type
   document.getElementById("attack14").innerHTML = character5_attack
   
}
else{
    document.getElementById("name14").innerHTML = character6_name
   document.getElementById("type14").innerHTML = character6_type
   document.getElementById("attack14").innerHTML = character6_attack
   
}
if(win4 == true){
    document.getElementById("name14").innerHTML = character7_name
   document.getElementById("type14").innerHTML = character7_type
   document.getElementById("attack14").innerHTML = character7_attack
   
}
else{
    document.getElementById("name14").innerHTML = character8_name
   document.getElementById("type14").innerHTML = character8_type
   document.getElementById("attack14").innerHTML = character8_attack
}
////////////////////////////////////////////////////////////////////////////////////
const name1_2 = document.getElementById("name13").innerHTML
const type1_2 = document.getElementById("type13").innerHTML
const attack1_2 = document.getElementById("attack13").innerHTML

const name2_2 = document.getElementById("name14").innerHTML
const type2_2 = document.getElementById("type14").innerHTML
const attack2_2 = document.getElementById("attack14").innerHTML

const random5 = Math.floor(Math.random() * 2)
if(random5 == 1){
    document.getElementById("name15").innerHTML = name1_2
    document.getElementById("type15").innerHTML = type1_2
    document.getElementById("attack15").innerHTML = attack1_2
}
else{
    document.getElementById("name15").innerHTML = name2_2
    document.getElementById("type15").innerHTML = type2_2
    document.getElementById("attack15").innerHTML = attack2_2
}
alert(`${document.getElementById("name15").innerHTML} wins!`)



}