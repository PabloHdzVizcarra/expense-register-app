import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Expenses } from "../Expenses";
import {
  AuthProvider,
  AuthStateContext,
} from "../../../../context/auth-context";
import {
  ExpensesProvider,
  ExpensesStateContext,
} from "../../../../context/expenses-context";
import { MemoryRouter } from "react-router-dom";
import * as Validate from "../validate-expense-form";
import * as CreateExpense from "../form-expenses/create-expense";
import * as Actions from "../../../../actions/expense-actions";

describe("Tests in <Expenses /> component", () => {
  const spyValidateExpenseForm = jest.spyOn(Validate, "validateExpenseForm");
  const authContext = {
    isActive: true,
    activeUserData: {
      displayName: "Pablo",
      email: "tesgin@correo.com",
      uid: "123asd",
    },
  };

  const expensesContext = {
    currentBudget: {
      money: 1000,
      dayCreated: "16 Ago 2020",
      expenses: [],
      id: "asdsa4d4",
    },
    expenses: [],
    currentMoney: 1000,
  };

  function renderTest(authContext = {}, expensesContext = {}) {
    return render(
      <AuthProvider>
        <ExpensesProvider>
          <AuthStateContext.Provider value={authContext}>
            <ExpensesStateContext.Provider value={expensesContext}>
              <MemoryRouter>
                <Expenses />
              </MemoryRouter>
            </ExpensesStateContext.Provider>
          </AuthStateContext.Provider>
        </ExpensesProvider>
      </AuthProvider>
    );
  }

  test("the component must be correctly rendered", () => {
    renderTest(authContext, expensesContext);
    expect(screen.getByRole("button", /Agregar gasto/)).toBeInTheDocument();
  });

  test("when you press the add expense button, the expense entry form should appear", () => {
    renderTest(authContext, expensesContext);
    userEvent.click(screen.getByRole("button", /Agregar gasto/));
    const inputs = screen.getAllByRole("textbox");
    expect(inputs[0]).toBeInTheDocument();
    expect(inputs[1]).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Agregar/ })).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  test("when entering data that does not meet the requirements of the form, you should appreciate the message", () => {
    renderTest(authContext, expensesContext);
    userEvent.click(screen.getByRole("button", /Agregar gasto/));
    const inputs = screen.getAllByDisplayValue("");
    userEvent.type(inputs[0], "P");
    userEvent.click(screen.getByRole("button", { name: /Agregar/ }));
    expect(spyValidateExpenseForm).toHaveBeenCalled();
    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });

  test("when entering data that does not meet the requirements of the form, you should appreciate the message", () => {
    renderTest(authContext, expensesContext);
    userEvent.click(screen.getByRole("button", /Agregar gasto/));
    const inputs = screen.getAllByDisplayValue("");
    userEvent.type(inputs[0], "Pizza");
    userEvent.click(screen.getByRole("button", { name: /Agregar/ }));
    userEvent.type(screen.getByRole("combobox"), "...");
    expect(spyValidateExpenseForm).toHaveBeenCalled();
    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });

  test("when entering data that does not meet the requirements of the form, you should appreciate the message", async () => {
    renderTest(authContext, expensesContext);
    userEvent.click(screen.getByRole("button", /Agregar gasto/));
    const inputs = screen.getAllByDisplayValue("");
    userEvent.type(inputs[0], "Pizza");
    userEvent.selectOptions(screen.getByTestId("select"), "entretenimiento");
    userEvent.click(screen.getByRole("button", { name: /Agregar/ }));

    expect(spyValidateExpenseForm).toHaveBeenCalled();
    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });
  test("when entering data that does not meet the requirements of the form, you should appreciate the message", async () => {
    renderTest(authContext, expensesContext);
    userEvent.click(screen.getByRole("button", /Agregar gasto/));
    const inputs = screen.getAllByDisplayValue("");
    userEvent.type(inputs[0], "Pizza");
    userEvent.selectOptions(screen.getByTestId("select"), "entretenimiento");
    userEvent.type(inputs[1], "0");
    userEvent.click(screen.getByRole("button", { name: /Agregar/ }));

    expect(spyValidateExpenseForm).toHaveBeenCalled();
    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });
  test("if the requirements of the form are met, you must call the function createExpense and setSpendingFirebase and you must create the expense", async () => {
    const spyCreateExpense = jest.spyOn(CreateExpense, "createExpense");
    const spyActions = jest.spyOn(Actions, "setSpendingFirebase");

    renderTest(authContext, expensesContext);
    userEvent.click(screen.getByRole("button", /Agregar gasto/));
    const inputs = screen.getAllByDisplayValue("");
    userEvent.type(inputs[0], "Pizza");
    userEvent.selectOptions(screen.getByTestId("select"), "entretenimiento");
    userEvent.type(inputs[1], "100");
    userEvent.click(screen.getByRole("button", { name: /Agregar/ }));

    expect(spyCreateExpense).toHaveBeenCalled();
    expect(spyActions).toHaveBeenCalled();
  });

  test("if the budget has expenses, these must be shown on the screen", async () => {
    const expensesContext = {
      currentBudget: {
        money: 1000,
        dayCreated: "16 Ago 2020",
        expenses: [
          {
            userID: '123asd',
            time: 'miercoles 26 ago',
            cost: 100,
            budgetId: '123456',
            id: '5454s5as',
            name: 'pizza'
          },
          {
            userID: '123asd',
            time: 'miercoles 26 ago',
            cost: 70,
            budgetId: '123456',
            id: '5454s5as',
            name: 'milk'
          }
        ],
        id: "asdsa4d4",
      },
      expenses: [
        {
          userID: '123asd',
          time: 'miercoles 26 ago',
          cost: 100,
          budgetID: '123456',
          id: '5454s5as',
          name: 'pizza',
          category: 'fun'
        },
      ],
      currentMoney: 1000,
    };
    renderTest(authContext, expensesContext);
    expect(screen.getByRole('button', { name: 'Eliminar' })).toBeInTheDocument();
    expect(screen.getByText(/eliminar/i)).toBeInTheDocument();
  });
});
