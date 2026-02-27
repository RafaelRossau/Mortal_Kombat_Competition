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