function showDropDown(){
    var exo = ["Bench Press","Back Squat","Pull Up","Deadlift","Front Squat"];

    var dropDownElement = document.getElementById("dropdown");
    
    
    var inputElement = createInputElement();
    dropDownElement.appendChild(inputElement);

    function createInputElement(){
        var element = document.createElement("input");
        
        element.placeholder = "Recherche";
        element.addEventListener("click",function(){
            var dropdown = document.getElementById("dropdown-exercice");
            if(dropdown){
                dropdown.remove();
            }else{
                filterAndRenderOptions(exo);
            }


        });

        element.addEventListener("keyup", filterAndRenderOptions);
        
        element.addEventListener("focusout",function(){
            var dropdown = document.getElementById("dropdown-exercice");
            dropdown.remove();
        });
       
        return element;
    };

    var clearElement = createClearElement();
    dropDownElement.appendChild(clearElement);

    function createClearElement(){
        var element = document.createElement("span");
        element.innerText = "X";
        element.style.cursor = "pointer";
        element.addEventListener("click",function(){
            inputElement.value = "";
            filterAndRenderOptions();

        });
        return element;
    };


    function createOptionsElement(exercice){
        var options = document.createElement("div");
        options.id = "dropdown-exercice";
        
        exercice.forEach( function(exo){
            var option = document.createElement("div");
            option.innerText = exo;
            options.appendChild(option);

        }

        );
        return options;
    };

    function filterAndRenderOptions(){
        
        var exercices = exo.filter(function(exercice){
            var searchterm = exercice.toLowerCase();
            return searchterm.startsWith(inputElement.value.toLowerCase());
        });
        if (exercices.lenght===0){
            renderOptions(["No results found !"]);
        }
        else{
            renderOptions(exercices);
        }
    }

    function renderOptions(opts){
        var dropdownExercices = document.getElementById("dropdown-exercice");
        if(dropdownExercices){
            dropdownExercices.remove();
        }
        var optionsElement = createOptionsElement(opts);
        dropDownElement.appendChild(optionsElement);
    }
}