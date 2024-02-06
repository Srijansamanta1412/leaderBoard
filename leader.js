addPlayer=()=>{
    console.log("New Plyer Added")
    let firstName=document.getElementById('firstName').value
    console.log(firstName)
    let createdDiv=document.createElement('div')
    console.log(createdDiv.style)
    createdDiv.innerHTML='TESTEST'
    createdDiv.style.backgroundColor='green';
 //   console.log(createdDiv.Att)
    document.getElementById('playerList').append(createdDiv)
}

var playerList=[];
