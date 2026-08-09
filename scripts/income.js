let transactionLists = document.getElementById('transactionLists');
const successMessage = document.querySelector('.success-msg-container');
const errorMessage = document.querySelector('.error-msg-container');

function renderIncome(data = transactions) {
  
  let transactionsHtml = ''
  let incomes = data.filter(transaction => transaction.type === 'income'
  ) 
  
  incomes.forEach( transaction => {
    transactionsHtml += `
      <li class="transactions transactions-${transaction.id}">
        <div class="transaction">
            <strong>${transaction.name}</strong><br> ${transaction.category}<br> ${transaction.date}
        </div>
        <div class="amount">
          ${transaction.amount}
        </div>
        <div id="buttons">
          <button class="edit" onclick="editTransaction('${transaction.id}')">
            Edit
          </button>
          <button class="delete"  onclick="deleteTransaction('${transaction.id}')" >
            Delete
          </button>
        </div>
      </li>
      `;
  
});

transactionLists.innerHTML = transactionsHtml;
  
}

 window.deleteTransaction = function(id) {
    
    deleteData(id);
    renderIncome();
    
  }
  
  let edited
  let index
  window.editTransaction = function(id) {
    
    edited = transactions.find( (transaction, i) => { 
      
      if (transaction.id === id) {
        index = i;
        return transaction;
      }
      
    });
    
    document.querySelector('.transaction-form').classList.add('display');
      
    
    document.getElementById('transactionName').value = edited.name;
      document.getElementById('amount').value = edited.amount;
      document.getElementById('type').value = edited.type;
      document.getElementById('category').value = edited.category;
      document.getElementById('date').value = edited.date;
      
      
      
    
  }
  
  transactionForm.addEventListener('submit', (e) => {
  
  
  e.preventDefault()
  
  try {
    
    let transaction = {
      id: Date.now().toString().toString(), 
      name: document.getElementById('transactionName').value, 
      amount: Number(document.getElementById('amount').value), 
      type: document.getElementById('type').value, 
      category: document.getElementById('category').value, 
      date: document.getElementById('date').value
    }
    
    transactions.splice(index,0,transaction);
    
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
  
  save();
  deleteTransaction(edited.id);
  renderIncome();
  transactionForm.reset();
  document.querySelector('.transaction-form').classList.remove('display');

  }); 

document.getElementById('remove').addEventListener('click', () => {
  document.querySelector('.transaction-form').classList.remove('display');
});

renderIncome()