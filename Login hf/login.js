let userek=[
    {username:'zita',password:'kiscica'},
    {username:'béla',password:'lapát'},
    {username:'anna',password:'kanna'},

]

function belepes(){
    let felh=document.getElementById('felhasznalo').value
    let jelsz=document.getElementById('jelszo').value

    if(!(felh && jelsz)){
        alert("Nem adtál meg adatokat!")
        return
    }
/*      let idx =-1
    for(let i = 0; i<userek.length; i++){
        if (userek[i]['username'] == felh){
            idx=i
        }
    }*/
    let idx = userek.findIndex((user) =>user.username == felh && user.password ==jelsz)
         if(idx ==-1){
        alert('Nics')
        return

      }
      alert('Sikeres belépés')

    }
function regisztral(){
    let uj_felh =document.getElementById('ujfelhasznalo').value
    let uj_jelsz =document.getElementById('ujjelszo').value
    if(!(uj_felh && uj_jelsz)){
        alert("Nem adtál meg adatokat!")
        return
    }

    let idxd = userek.findIndex((user) =>user.username == uj_felh)
        if(idxd ==-1){
            alert('Sikeres regisztráció')
            userek.push({"username": uj_felh,"password": uj_jelsz})
        }
            else{
                alert('A felhasználó már regisztrálva van')
            }
    console.log(userek)
}
       /* else{
           if(jelsz==userek[idx].password)
           {
            alert('sikeres belépés')
        } else
            {
                alert('Hibás jelszó')
            }
           
        }
    */