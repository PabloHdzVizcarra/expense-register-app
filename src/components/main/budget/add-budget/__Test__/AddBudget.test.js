import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import {
  AuthProvider,
  AuthStateContext,
} from "../../../../../context/auth-context";
import {
  ExpensesProvider,
  ExpensesStateContext,
} from "../../../../../context/expenses-context";
import { AddBudget } from "../AddBudget";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Test in <AddBudget /> component", () => {
  const funcOpen = jest.fn();
  function renderTest(authContext = {}, expensesContext = {}) {
    return render(
      <AuthProvider>
        <ExpensesProvider>
          <AuthStateContext.Provider value={authContext}>
            <ExpensesStateContext.Provider value={expensesContext}>
              <MemoryRouter>
                <AddBudget setIsOpenInput={funcOpen} />
              </MemoryRouter>
            </ExpensesStateContext.Provider>
          </AuthStateContext.Provider>
        </ExpensesProvider>
      </AuthProvider>
    );
  }

  test("the component must be correctly rendered", () => {
    renderTest();
    expect(screen.getByText(/attach_money/)).toBeInTheDocument();
  });

  test("when you click on the add budget button, you must call the function to open the budget form", () => {
    renderTest();
    userEvent.click(screen.getByText(/attach_money/));
    expect(funcOpen).toHaveBeenCalled();
  });
});
