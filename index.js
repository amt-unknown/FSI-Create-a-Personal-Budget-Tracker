let weeklyExpenses = 0;
let monthlyExpenses = 0;
let annualExpenses = 0;

//Poll user for the expenses. 
for (let i = 0; i < weeklyExpenseQuestions.length; i++){
    weeklyExpenses += parseFloat(window.prompt(weeklyExpenseQuestions[i]));
}    
for (let i = 0; i < monthlyExpenseQuestions.length; i++){
    weeklyExpenses += parseFloat(window.prompt(monthlyExpenseQuestions[i]));
} 
for (let i = 0; i < annualExpenseQuestions.length; i++){
    weeklyExpenses += parseFloat(window.prompt(annualExpenseQuestions[i]));
} 