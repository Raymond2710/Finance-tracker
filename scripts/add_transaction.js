
const transactionForm = document.getElementById('transactionForm');
const successMessage = document.querySelector('.success-msg-container');
const errorMessage = document.querySelector('.error-msg-container');


transactionForm.addEventListener('submit', (e) => {
  
  
  e.preventDefault()
  
  try {
    
    let transaction = {
      id: Date.now().toString(), 
      name: document.getElementById('transactionName').value, 
      amount: Number(document.getElementById('amount').value), 
      type: document.getElementById('type').value, 
      category: document.getElementById('category').value, 
      date: document.getElementById('date').value
    }
    
    transactions.unshift(transaction);
    
    successMessage.classList.add('show-msg')
    
  } catch (e) {
    throw e
    errorMessage.classList.add('show-msg');
  }
  
  setTimeout( () => {
    successMessage.classList.replace('show-msg','hide-msg');
    errorMessage.classList.replace('show-msg','hide-msg');
  },4000);
  
  setTimeout( () => {
    successMessage.classList.remove('hide-msg');
    errorMessage.classList.remove('hide-msg');
  },5300);
  
  save()
  transactionForm.reset()
  
})

