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

}