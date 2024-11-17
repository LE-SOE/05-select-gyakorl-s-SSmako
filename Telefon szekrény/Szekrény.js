let telefonok=[
    {
        Nev: 'Nagy Jani',
        Telo: 'Samsung Galaxy',
        Idopont: 7,
        Muvelet: 'f',
    },
    {
        Nev: 'Simon Ádám',
        Telo: 'iPhone 13',
        Idopont: 13,
        Muvelet: 'l',
    },
    {
        Nev: 'Kicsi Pisti',
        Telo: 'Samsung Galaxy',
        Idopont: 12,
        Muvelet: 'f',
    },
    {
        Nev: 'Incsi Fincsi',
        Telo: 'Xiaomi Redmi Note',
        Idopont: 8,
        Muvelet: 'l',
    }
]
window.onload = function () {
    for (telefon of telefonok) {
      document.getElementById('nevek').innerHTML += `<option value="${telefon.Nev}">${telefon.Nev}</option>`
    }
  }
function rogzit(){
    let nev=document.getElementById("nev").value
    let telo=document.getElementById("telo").value
    let idopont=document.getElementById("idopont").value
    let muvelet=document.getElementById("muvelet").value

    
    if(nev === '' || telo === ''|| 16<idopont || idopont<7 || muvelet ===''){
        alert("Hiányos/Hibás adatok")
        return
    }
    let szekrényObj={
        Nev:nev,
        Telo:telo,
        Idopont:idopont,
        Muvelet:muvelet
    }
    let hely=0
    if((telefonok.findLastIndex((telefon) =>telefon.Nev == nev))>-1){
    hely=telefonok.findLastIndex((telefon) =>telefon.Nev == nev)}
    if(telefonok[hely].Muvelet==muvelet)
    {
      alert('Hibás adatok')
   return
    }
    else{
        telefonok.push(szekrényObj)

    }


    console.log (telefonok)

    let leadtak=0;
    for (const telefon of telefonok) {
        if(telefon.Muvelet=='l')
            leadtak=leadtak+1

    }
    console.log(leadtak)
  
    let nulladik=0;
    for (const telefon of telefonok) {
        if(telefon.Idopont==7)
            nulladik=nulladik+1

    }
    console.log(nulladik)
    document.getElementById('nevek').innerHTML=0
    document.getElementById('nevek').innerHTML 
    for (telefon of telefonok) {
        document.getElementById('nevek').innerHTML += `<option value="${telefon.Nev}">${telefon.Nev}</option>`
      }

}

function statisztika(){

    let db=0
    for (const telefon of telefonok) {
        if(telefon.Telo=='iphone'){
            db=db+1
        }
    }
    document.getElementById("stat").innerHTML+=`<li>iPhone használók száma: ${db}</li>`
    db=0
    for (const telefon of telefonok) {
        if(telefon.Telo=='samsung'){
            db=db+1
        }
    }
    document.getElementById("stat").innerHTML+=`<li>Samsung használók száma: ${db}</li>`
    db=0
    for (const telefon of telefonok) {
        if(telefon.Telo=='xiaomi'){
            db=db+1
        }
    }
    document.getElementById("stat").innerHTML+=`<li>Xiaomi használók száma: ${db}</li>`
}