const cashGiven = document.querySelector('#cash-given');
const billAmount = document.querySelector('#bill-amount');
const checkButton = document.querySelector('#checkbtn')
const message= document.querySelector('#error-message')

const noOfNotes = document.querySelectorAll('.no_of_notes');

const availableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click", function validate(){
    console.log('hi');
    hideMessage();
    if(billAmount.value >0){
        if(cashGiven.value >= billAmount.value){
     const amountTOBeReturned = cashGiven.value- billAmount.value;
     calculateChange(amountTOBeReturned);

        }else{
            showMessage(
                "The cash provided should at least be equal to the bill amount"
            );

        }

    }else{
      showMessage("Invalid bill amount");
    }
   
})

function hideMessage()
{
    message.style.display ="none";
}


function showMessage(msg){
    message.style.display ="block";
    message.innerText = msg;
}

function calculateChange(amountTOBeReturned)
{

     for(let i=0; i< availableNotes.length; i++) {
         const numberofNotes = Math.trunc(
             amountTOBeReturned/availableNotes[i]
         );
         amountTOBeReturned %= availableNotes[i];
         noOfNotes[i].innerText=numberofNotes;
     }
}