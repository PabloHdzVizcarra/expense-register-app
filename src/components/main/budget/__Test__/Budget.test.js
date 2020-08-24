import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitForElement, waitForElementToBeRemoved, wait, findByText } from "@testing-library/react";
import { Budget } from "../Budget";
import {
  AuthStateContext,
  AuthProvider,
} from "../../../../context/auth-context";
import { ExpensesProvider, ExpensesStateContext } from "../../../../context/expenses-context";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import * as CreateBudget from '../create-budget';

describe("Test in <Budget />", () => {
  const spyCreateBudget = jest.spyOn(CreateBudget, 'createBudget');
  const uidValue = '123asd';
  
  const dataContextExpenses = { 
    currentBudget: {
      expenses: [],
      dayCreated: '24 ago 2020',
      money: 1000,
      userName: 'Pablo',
      id: '12a45sd4a'
    },
    currentMoney: 1000,
    expenses: [],
  }

  function renderTest(uid, dataContext = {}) {
    return render(
      <AuthProvider>
        <ExpensesProvider>
          <AuthStateContext.Provider
            value={{
              isActive: true,
              activeUserData: {
                displayName: "Pablo",
                email: "testing@correo.com",
                emailVerified: false,
                uid: uid,
              },
            }}
          >
            <ExpensesStateContext.Provider value={dataContext}>
                <MemoryRouter>
                  <Budget />
                </MemoryRouter>
            </ExpensesStateContext.Provider>
          </AuthStateContext.Provider>
        </ExpensesProvider>
      </AuthProvider>
    );
  }

  test("the money component must be correctly rendered />", () => {
    const { getByText } = renderTest();
    const moneyIcon = getByText("attach_money");
    expect(moneyIcon).toBeInTheDocument();
  });

  test("when you click to add a budget, the form must be shown", () => {
    const { getByText, getByPlaceholderText } = renderTest();
    const moneyIcon = getByText("attach_money");
    userEvent.click(moneyIcon);
    const input = getByPlaceholderText("Ingresa tu presupuesto");
    expect(input).toBeInTheDocument();
  });

  test("if you enter an invalid amount in the form, the error message should appear", async () => {
    const { getByText, getByPlaceholderText } = renderTest();
    userEvent.click(getByText("attach_money"));
    const input = getByPlaceholderText("Ingresa tu presupuesto");
    userEvent.type(input, "0");
    userEvent.click(getByText("Agregar"));
    expect(screen.getByTestId("error-message"));
  });

  test("if a valid budget is entered, the expense must be created", async () => {
    const { getByText, getByPlaceholderText } = renderTest(uidValue);
    const moneyIcon = getByText("attach_money");
    userEvent.click(moneyIcon);
    const input = getByPlaceholderText("Ingresa tu presupuesto");
    userEvent.type(input, "1000");
    userEvent.click(getByText("Agregar"));
    
    await waitForElement(() =>
      input,
      { screen }
    );

    expect(spyCreateBudget).toBeCalled();
    expect(input).not.toBeInTheDocument();
  });

  test('if there is an expense saved in the context, the component <ShowBudget /', () => {
    const { getByTestId } = renderTest(uidValue, dataContextExpenses);
    expect(getByTestId('current-money').textContent).toBe('$1000');
  });

  test('if there is an expense saved in the context, the component <ShowBudget /', async () => {
    renderTest(uidValue, dataContextExpenses);
    const deleteButon = screen.getByText(/Eliminar presupuesto/);
    userEvent.click(deleteButon)
    
    // await waitForElement(() => 
    //   deleteButon,
    //   {screen}
    // )
    
    screen.debug();
    // const notMoney = await screen.findByText(/attach_money/);
    // expect(notMoney).toBeInTheDocument();
  });
  

});
