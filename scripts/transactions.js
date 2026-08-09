let transactions = JSON.parse(localStorage.getItem('transactionData')) || [];

function save() {
  localStorage.setItem('transactionData',JSON.stringify(transactions));
}


function deleteData(id) {
  transactions = transactions.filter( transaction => transaction.id !== id);
    save();
}