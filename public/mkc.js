const url = `http://localhost:3000/characters`

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

        document.getElementById("name9").innerHTML = x7.character_name
        document.getElementById("type9").innerHTML = x7.character_type
        document.getElementById("attack9").innerHTML = x7.attack

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