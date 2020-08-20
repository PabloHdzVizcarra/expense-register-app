import moment from "moment";

export function createBudget(money, displayName) {

  const budget = {
    money: Number(money),
    userName: displayName,
    dayCreated: moment().format('D MMMM YYYY, h:mm:ss a'),
  }

  return budget
}