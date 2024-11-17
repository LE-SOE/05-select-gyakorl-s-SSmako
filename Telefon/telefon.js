let adatok = [
    {
        Idopont: 1,
        SMS: 5,
        Hivas: 14
    },
    {
        Idopont: 2,
        SMS: 10,
        Hivas: 12
    },
    {
        Idopont: 3,
        SMS: 4,
        Hivas: 50
    },
    {
        Idopont: 4,
        SMS: 3,
        Hivas: 14
    },
    {
        Idopont: 5,
        SMS: 20,
        Hivas: 11
    },
    {
        Idopont: 6,
        SMS: 7,
        Hivas: 52
    },
]


function rogzit(){
    let idopont = document.getElementById("idopont").value
    let sms = document.getElementById("sms").value
    let hivas = document.getElementById("hivas").value

    let telefonObj= {
        Idopont: idopont,
        SMS: sms,
        Hivas: hivas
    }
    adatok.push(telefonObj)
    console.log(adatok)
}

function kiertekel(){
    let smsSum=0
    let hivasSum=0

    for (const t of adatok) {
        smsSum += t.SMS
    }
    //hívások összege
    for (const h of adatok){
        hivasSum += h.Hivas
    }
     /*hívások összege alternatív megoldás
    hivasSum =adatok.reduce((ossz, aktErtek)=>{return ossz+aktErtek.Hivas})*/
    console.log(smsSum)
    console.log(hivasSum)
    let vegeredmeny =`Az adott hónapban ${smsSum} SMS-t küldtél, ami ${smsSum*20} Ft és ${hivasSum} percet telefonáltál ami ${hivasSum*39} ft. Összesen: ${smsSum*20+hivasSum*39}` 
    document.getElementById("osszesen").innerHTML=vegeredmeny
    let maxSMS=-1
    let maxNap=-1
    for (const napiAdatok of adatok) {
        if(maxSMS<napiAdatok.SMS){
            maxSMS=napiAdatok.SMS
            maxNap=napiAdatok.Idopont
        }
    }
    let maxSMSSzoveg=`A ${maxNap}.napon küldtük a legtöbb SMS-t, azaz ${maxSMS} darabot.`
    document.getElementById("legtobbSMS").innerHTML=maxSMSSzoveg
}