function calculateTotalSpentByCategory(transactions) {
    let categoryMaP = {}, sum = 0;
    transactions.forEach(element => {
        if(categoryMaP[element.category] == undefined )
            categoryMaP[element.category] = element.price
        else {
         sum = categoryMaP[element.category]+element.price;
         categoryMaP[element.category]  = sum;
        }
    });
    return categoryMaP;
  }
  
  module.exports = calculateTotalSpentByCategory;