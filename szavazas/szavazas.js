let szavazatokD=[0,0,0,0, 0,0,0,0, 0,0,0,0]
let szavazatokH=[0,0,0,0, 0,0,0,0, 0,0,0,0]

function szavaz(kire){
  let idopont = Math.floor (Math.random()*12)
   
    if(kire === 'T'){
        szavazatokD[idopont] +=1
   }
    if(kire ==='H'){
        szavazatokH[idopont] =szavazatokH[idopont]+1
   }
   console.log(idopont, szavazatokH,szavazatokD)
}
function kiertekel(){
    let tSum=0
    for (const sz of szavazatokD) {
        tSum+= sz
    }
    console.log('T:', tSum)

    let hSum = szavazatokH.reduce((sum, currValue) => {return sum+currValue})
    console.log('H:',hSum)
    if(tSum>hSum){
        document.getElementById("kinyert").innerHTML=`Trump(${tSum}) /Harris (${hSum})->Trump nyert`

    }
    else if(tSum <hSum){
        document.getElementById("kinyert").innerHTML=`Trump(${tSum}) /Harris (${hSum})->Harris nyert`

    }
    else{
         document.getElementById("kinyert").innerHTML=`Trump(${tSum}) /Harris (${hSum})->Senki sem nyert *_*`
    }
//egy közös listába összeadjuk a szavazatokat
    let osszesen= []
    for(let index=0; index <=11; index++){
        osszesen[index]= szavazatokH[index]+szavazatokD[index]
}
//a közös listában kiválasztjuk a legnagyobb értéket
let maxSzavazat = 0 //kezdetben ennyi a leadott szavazatok
let maxMikor = 0 //ebben az időpontban volt a legtöbb
for (const hol in osszesen) {
   
        if(maxSzavazat < osszesen[hol]){
            maxSzavazat=osszesen[hol]
            maxMikor= hol
        }
    
}
console.log(szavazatokH,szavazatokD,osszesen)
console.log(maxSzavazat,maxMikor)
document.getElementById("legtobb").innerHTML=`${Number(maxMikor)+8} órakor ${maxSzavazat} szavazatot adtak le`
}
function general(){
    let kire= ''
    let mikor =0
for (let index=0; index <=1000000; index++){
        //2-vel szorzom hogy 0-1 közötti szám legyen
        if(Math.floor (Math.random()*2)===0){
            kire='T'
        }
            else{
                kire='H'
            }
            mikor = Math.floor (Math.random()*12)
            //adatok feltöltése !!szavaz(kire) (cheat code)
            if(kire === 'T'){
                szavazatokD[mikor] +=1
        }
            if(kire ==='H'){
                szavazatokH[mikor] =szavazatokH[mikor]+1
        }
        }
    }

