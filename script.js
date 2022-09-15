function showDropDown(){
    var dropDownElement = document.getElementById("dropdown");
    var inputElement = createInputElement();
    var exo = ["Bench Press","Back Squat","Pull Up","Deadlift"];
    function createInputElement(){
        var element = document.createElement("input");
        element.placeholder = "Recherche";
        element.addEventListener("click",function(){
            var dropdown = document.getElementById();
            var options = createOptionElement(pets);
        });
        return element;
    }
    var clearElement = createClearElement();
    function createClearElement(){
        var element = document.createElement("span");
        element.innerText = "X";
        element.style.cursor = "pointer";
        return element;
    }


    function createOptionsElement(exercice){
        var options = document.createElement("div");
        options.id = "dropdown-exercice";
    }

}