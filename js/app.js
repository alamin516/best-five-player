
// const selectedName = [];
// function playerAdded(){
//     const playerListContainer = document.getElementById('selected-player');
//     playerListContainer.innerText = '';
//     for(let i  = 0; i < selectedName.length; i++){
//         const li = document.createElement("li");
//         li.innerHTML = selectedName[i];
//         if(i < 5){
//             playerListContainer.appendChild(li);
//         }
//         else{
//             alert("Sorry! You can't add more then 5");
//         }
//     }
// }

// function selectPlayer(addPlayer){
//     const playerName = addPlayer.parentNode.children[0].innerText
//     console.log(playerName)
//     if(selectedName.length < 5){
//         selectedName.push(playerName);
//         addPlayer.parentNode.disabled = true;
//     }
//     else{
//         alert("Sorry! You can't add more then 5");
//     }
//     playerAdded();
// }

const selectedPlayerName = [];
const addedPlayer = () =>{
    const playerListContainer = document.getElementById('selected-player');
    playerListContainer.innerText = "";
    for(let i = 0; i < selectedPlayerName.length; i++){
        const li = document.createElement("li");
        li.innerHTML = selectedPlayerName[i];
        if(i < 5){
            playerListContainer.appendChild(li);
        }
        else{
            alert("Sorry! You can't add more then 5");
        }
    }
}

const selectPlayer = (add) => {
    const playerName = add.parentNode.children[0].innerText;
    if(selectedPlayerName.length < 5){
        if(selectedPlayerName.indexOf(playerName) === -1){
            selectedPlayerName.push(playerName);
            add.innerText = 'selected';
            add.style.background = 'gray';
        }else{
            alert('Already added');
        }
    }else{
        alert('You can\'t add more than 5 player');
    }
    addedPlayer();
}


document.getElementById('calculate-btn').addEventListener('click', function(){
    const perPlayerDemand = getInputValue('per-player-field');
    const totalPlayer = selectedPlayerName.length;
    const playerExpense = document.getElementById('player-expenses');
    if(totalPlayer.length < 6 || (isNaN(perPlayerDemand) === false )){
       const totalPlayerExpense = perPlayerDemand * totalPlayer;
        playerExpense.innerText = totalPlayerExpense;
    }
    else if(totalPlayer.length < 1){
        alert("please Fill The Field")
    }else{
        
        alert("please Fill The Field")
    }

})

document.getElementById('total-calculate-btn').addEventListener('click', function(){
    const managerDemand = getInputValue('manager-field');
    const coachDemand = getInputValue('coach-field');
    const playerExpenses = getTextValue('player-expenses');

    const totalExpenses = document.getElementById('total-expenses');
    if(managerDemand >= 0 && coachDemand >= 0){
       const inTotalExpenses = managerDemand + playerExpenses + coachDemand;
       totalExpenses.innerText = inTotalExpenses;
    }
    else{
        
        alert("please Fill The Field")
    }

})


function getInputValue(Id){
    const perPlayerField = document.getElementById(Id);
    const elementFieldString = perPlayerField.value;
    const elementFieldValue = parseFloat(elementFieldString);
    return elementFieldValue;
}

// Get Text Value
function getTextValue(Id){
    const perPlayerField = document.getElementById(Id);
    const elementFieldString = perPlayerField.innerText;
    const elementFieldValue = parseFloat(elementFieldString);
    return elementFieldValue;
}


