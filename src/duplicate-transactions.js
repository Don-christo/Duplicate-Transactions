function findDuplicateallTransaction(transactions) {

 let allTransaction = transactions.slice();

  allTransaction = allTransaction.sort((a, b) =>{ return a.id - b.id});

  let result = [];

  function timeDifference (date1, date2) {
    return (new Date(date1).getTime() - new Date(date2).getTime())/60000;
  };


  while(allTransaction.length > 0){
    let transactionGroups = [];
    let element = allTransaction.shift();
    transactionGroups.push(element);
  

  for (let i = 0; i < allTransaction.length; i++) {
    if (element.sourceAccount === allTransaction[i].sourceAccount && element.targetAccount === allTransaction[i].targetAccount && element.category === allTransaction[i].category && element.amount === allTransaction[i].amount && timeDifference (allTransaction[i].time, element.time) < 1) {
      transactionGroups.push(allTransaction[i]);
      element = allTransaction[i];
      allTransaction.splice(i, 1);
      i -= 1;
  }
}
  
if (transactionGroups.length > 1){
  result.push(transactionGroups);
}
  }
return result;
}

export default findDuplicateallTransaction;
