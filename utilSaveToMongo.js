const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema(
  {
    expenseTitle: String,
    expense: String,
    timeDate: String,
  },
  { versionKey: false }
);

const Expense = mongoose.model("expense_record", budgetSchema);

const saveToMongo = (title, price) => {
  const newExpense = new Expense({
    expenseTitle: title,
    expense: price,
    timeDate: timeStamp(),
  });

  newExpense.save();
};

const timeStamp = () => {
  date = new Date();
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];
  const [hour, minutes, seconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];
  return `Date: ${month}/${day}/${year} Time: ${hour}:${minutes}:${seconds}`;
};
module.exports = { saveToMongo, timeStamp };
