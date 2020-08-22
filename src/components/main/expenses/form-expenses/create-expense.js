import moment from "moment";
import "moment/locale/es";
import { v4 as uuidv4 } from "uuid";

moment.locale("es");

export function createExpense(values, budgetID, uid) {
  const { category, cost, name } = values;
  const expense = {
    category,
    time: moment().format("dddd D MMMM, h:mm a"),
    budgetID,
    id: uuidv4(),
    userID: uid,
    cost: Number(cost),
    name,
  };
  return expense;
}
