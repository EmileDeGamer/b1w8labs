let canType, name, age

function main(){
    name = prompt("Naam:", "Naam:")
    age = prompt("Leeftijd:", "Leeftijd:")

    if (name == "stop" || age == "stop"){
        return;
    }

    Hello(name, age)
}

function Hello(name, age){
    document.write("Hallo " + name + ", je leeftijd is " + age + " jaar. <br>")
    main()
}