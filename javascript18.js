const ejercicio = () => {

    let tipan = prompt("Seleccione el tipo de animal: \n 1.Vertebrados \n 2.Invertebrados \n 3.Herbívoros \n 4.Carnívoros");
    let animal= "";
    
    if (tipan !== "1" && tipan !== "2" && tipan !== "3" && tipan !== "4" ) {
        alert("ingrese una opcion valida");
    } 
    
    else {
        
     if(tipan === "1")
     { animal = prompt(" Lista de animales Vertebrados:\n 1.Koala\n 2.Caballo \n 3.Cebra \n 4.Jirafa \n 5.Vaca");
         
     if (animal !== "1" && animal !== "2" && animal !== "3" && animal !== "4" && animal !== "5" ) {
        alert("ingrese una opcion valida");
    } 
    
    else {
       if(animal === "1")
       {alert("El Koala vive en el este de Australia, donde hay más eucaliptos");}
       if(animal === "2")
       {alert("El Caballo es un mamífero perisodáctilo domesticado");}
       if(animal === "3")
       {alert("La Cebra le debe a sus rayas la mayor parte de su fama");}
       if(animal === "4")
       {alert("La Jirafa es una especie de mamífero artiodáctilo");}
       if(animal === "5")
       {alert("La Vaca es un animal mamífero que pertenece a la familia de los bóvidos");} 
        }
    }
     
    
     if(tipan === "2")
     { animal = prompt(" Lista de animales Invertebrados:\n 1.Lombrices \n 2.Sanguijuelas \n 3.Medusas \n 4.Esponjas \n 5.Caracoles");
    
     if (animal !== "1" && animal !== "2" && animal !== "3" && animal !== "4" && animal !== "5" ) {
        alert("ingrese una opcion valida");
    }
    
        else {
            if(animal === "1")
            {alert("Las Lombrices son anélidos oligoquetos del orden Crassiclitellata. ");}
            if(animal === "2")
            {alert("Las Sanguijuelas se alimentan de sangre o fluidos corporales. ");}
            if(animal === "3")
            {alert("Las Medusas son pertenecen al filo Cnidaria, formado por un grupo de más de 10,000 especies de animales marinos.");}
            if(animal === "4")
            {alert("Las Esponjas son un filo de animales acuáticos.");}
            if(animal === "5")
            {alert("Los Caracoles se encuentran entre las casi 50 mil especies de moluscos.");} 
             }
    }
     
     if(tipan === "3")
     { animal = prompt(" Lista de animales Herbívoros:\n 1.Caballo\n 2.Canguro \n 3.Conejo \n 4.Elefante \n 5.Ciervo");
    
     if (animal !== "1" && animal !== "2" && animal !== "3" && animal !== "4" && animal !== "5" ) {
        alert("ingrese una opcion valida");
    }
    
    else {
        if(animal === "1")
        {alert("El Caballo es un mamífero perisodáctilo domesticado.");}
        if(animal === "2")
        {alert("El Canguro es el nombre común que se utiliza para designar a las especies de mayor tamaño de la subfamilia Macropodinae.");}
        if(animal === "3")
        {alert("El Conejo es una especie de mamífero lagomorfo de la familia Leporidae.");}
        if(animal === "4")
        {alert("El Elefante pertenece a una familia de mamíferos placentarios del orden Proboscidea.");}
        if(animal === "5")
        {alert("El Ciervo es un animal con cornamenta inconfundibles por lo esbeltos y majestuosos.");} 
         }
    
    }
     
    
     if(tipan === "4")
     { animal = prompt(" Lista de animales Carnívoros:\n 1.Buitre\n 2.Cocodrilo \n 3.Coyote \n 4.Gaviota \n 5.León");
    
     if (animal !== "1" && animal !== "2" && animal !== "3" && animal !== "4" && animal !== "5" ) {
        alert("ingrese una opcion valida");
    }
    else {
        if(animal === "1")
        {alert("El Buitre es una ave del orden de los Falconiformes.");}
        if(animal === "2")
        {alert("El Cocodrilo es un reptil predador semiacuático.");}
        if(animal === "3")
        {alert("El Coyote es una especie de mamífero carnívoro.");}
        if(animal === "4")
        {alert("La Gaviota es un ave del orden Charadriiformes.");}
        if(animal === "5")
        {alert("El Leon es un mamífero carnívoro de la familia de los félidos.");} 
         }
    }
     
       
    }
    }