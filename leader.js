addPlayer = () => {
    /* console.log("New Plyer Added")
     let firstName=document.getElementById('firstName').value
     console.log(firstName)
     let createdDiv=document.createElement('div')
     console.log(createdDiv.style)
     createdDiv.innerHTML='TESTEST'
     createdDiv.style.backgroundColor='green';
  //   console.log(createdDiv.Att)
     let increment=document.createElement('button')
     increment.innerText=+5;
     let decrement=document.createElement('button')
     decrement.style.backgroundColor='transparent';
     decrement.style.border='none';
     decrement.innerText='-5';
     let icon=document.createElement('i');
     icon.innerHTML='delete'
     icon.addEventListener("click",()=>{
         createdDiv.remove();
     });
     createdDiv.append(increment,decrement,icon)
     document.getElementById('playerList').append(createdDiv)*/
    let name = document.getElementById("firstName").value
    document.getElementById("firstName").value=''
    let lastName = document.getElementById("lastName").value
    document.getElementById("lastName").value=''
    name = name + " " + lastName
    let score = document.getElementById("score").value
    document.getElementById("score").value=''
    document.getElementById("country").value=''
    let updatedBy = moment().format('MMM-YYYY');
    let updatedOn = moment().format('hh:mm:ss')
    let obj = { "name": name, "score": score, "country": "India", "updatedBy": updatedBy, "updatedOn": updatedOn }
    console.log(obj)
    playerList.push(obj)
    displayUpdatedList();
}
let displayUpdatedList = () => {
    console.log("TEST Display")
    document.getElementById('playerList').innerHTML=''
    playerList.sort(function (a, b) {
        if(a.score==b.score)
        return a.name.localeCompare(b.name);
        return a.score - b.score })
    console.log(playerList)
    for (let i = 0; i < playerList.length; i++) {
        let createdDiv = document.createElement('div')
       // createdDiv.innerHTML = playerList[i].name + ' '+playerList[i].score+' '+playerList[i].country

        createdDiv.style.backgroundColor = 'lightgreen';
        createdDiv.style.display="flex";
        createdDiv.style.justifyContent="space-between";
        createdDiv.style.marginTop='5px';
        createdDiv.style.padding='20px'
        //   console.log(createdDiv.Att)
        let name=document.createElement('p')
        name.innerHTML=playerList[i].name
        let country=document.createElement('p')
        country.innerHTML=playerList[i].country
        let score=document.createElement('p')
        score.innerHTML=playerList[i].score
        let increment = document.createElement('button')
        increment.innerText = +5;
        increment.addEventListener("click",()=>{
            incrementSelectedElement(i);
            displayUpdatedList()
        })
        let decrement = document.createElement('button')
        decrement.addEventListener("click",()=>{
            decrementSelectedElement(i);
            displayUpdatedList()
        })
        increment.style.backgroundColor = 'transparent';
        increment.style.border = 'none';
        decrement.style.backgroundColor = 'transparent';
        decrement.style.border = 'none';
        decrement.innerText = '-5';
        let icon = document.createElement('i');
        icon.innerHTML = 'delete'
        icon.addEventListener("click", () => {
            console.log(i);
            deleteSelectedElement(i);
            displayUpdatedList();
        });
        createdDiv.append(name,country,score,increment, decrement, icon)
        document.getElementById('playerList').append(createdDiv)

    }
}
let deleteSelectedElement=(indexToRemove)=>{
    console.log(playerList[indexToRemove])
    playerList.splice(indexToRemove,1); 
}
let incrementSelectedElement=(indexToIncrease)=>{
    playerList[indexToIncrease].score=parseInt(playerList[indexToIncrease].score)+5
}
let decrementSelectedElement=(indexToDecrease)=>{
    playerList[indexToDecrease].score=parseInt(playerList[indexToDecrease].score)-5

}

var playerList = [];
