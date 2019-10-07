let awnser, tafelAmount

function main(){
    tafelAmount = prompt("Hoeveelheid tafels:", "tafels:")

    if (tafelAmount == "stop"){
        return;
    }
    else if (tafelAmount > 10){
        alert(tafelAmount + " mag maximaal 10 zijn! :(")
        main()
    }

    tafels(tafelAmount)
}

function tafels(tafels){
    let tempTafel = tafels
    tafels = 1;
    for (let i = 0; i < tempTafel; i++) {
        for (let i = 0; i < 10; i++) {
            awnser = (i + 1) * tafels
            document.write( i + 1 + " * " + tafels + " = " + awnser + "<br>")
        } 
        document.write("<br>")
        tafels++   
    }
}