let allatok = []
function rogzit(){
    let gazdaNeve = document.getElementById("gazda_neve").value
    let allatNeve = document.getElementById("allat_neve").value
    let faj = document.getElementById("faj").value
    let tomeg = document.getElementById("tomeg").value
    let kora = document.getElementById("kora").value

    if (gazdaNeve=== '' || allatNeve=== ''|| faj=== ''|| tomeg=== '' || kora== 0){
        alert('Annnnnyad')
        return
    }

    let allatObj = {
        GazdaNeve: gazdaNeve,
        AllatNeve: allatNeve,
        Faj: faj,
        Tomeg: tomeg,
        Kor: kora
    }

    allatok.push(allatObj)
    console.log(allatok)

}

function listaGeneralas(){

    document.getElementById("kutyak").innerHTML=''
    document.getElementById("macskak").innerHTML=''
    for (const allat of allatok) {
        if (allat.Faj == "kutya"){
            document.getElementById("kutyak").innerHTML +=
            `<li>${allat.AllatNeve} (${allat.Kor} / ${allat.Tomeg} kg)</li>`
        }
        if (allat.Faj == "macska"){
            document.getElementById("macskak").innerHTML +=
            `<li>${allat.AllatNeve} (${allat.Kor} / ${allat.Tomeg} kg)</li>`
        }
}

}
function statisztika(){

    let db=0
    for (const allat of allatok) {
        if(allat.Faj=='kutya'){
            db=db +1
        }
    }
    document.getElementById("stat").innerHTML +=
    `<li>Kutyák: ${db} </li>`
    db=0
    for (const allat of allatok) {
        if(allat.Faj=='macska'){
            db=db +1
        }
    }
    document.getElementById("stat").innerHTML +=
    `<li>Macskák: ${db} </li>`
}