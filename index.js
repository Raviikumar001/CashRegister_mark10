const cashGiven = document.querySelector('#cash-given');
const billAmount = document.querySelector('#bill-amount');
const checkButton = document.querySelector('#checkbtn')
const message= document.querySelector('#error-message')

const noOfNotes = document.querySelectorAll('.no_of_notes');

const availableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener("click", function validate(){
  
    let billAmountValue = Number(billAmount.value);
    let cashGivenValue = Number(cashGiven.value);
    hideMessage();
   
    if(billAmountValue >0 && cashGivenValue> 0){
       
        if(cashGivenValue > billAmountValue)
        {
            const amountTOBeReturned = cashGiven.value- billAmount.value;
            calculateChange(amountTOBeReturned);
        }else{
            showMessage("The cash provided should at least be equal to the bill amount");
            calculateChange(0);
        }

        if(cashGiven.value === billAmount.value)
        {
            showMessage("Nothing to return.");
        }

  

     

    }else{
      showMessage("Invalid Amount Entered Pls fill in the right detils.");
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
