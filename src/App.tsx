import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import Categories from "./expense-tracker/categories";
import axios, { AxiosError } from "Axios";
import "./App.css";

interface User {
  id: number;
  name: string;
}

function App() {
  const [user, setUser] = useState<User[]>([]);
  const [error, setError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "House shoes",
      amount: 22,
      category: "Shopping",
    },
    {
      id: 2,
      description: "Coffee for the month",
      amount: 12,
      category: "Groceries",
    },
    {
      id: 3,
      description: "Dune",
      amount: 12,
      category: "Entertainment",
    },
  ]);

  const visibleExpense =
    selectedCategory === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === selectedCategory);

  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <div className="mb-3">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <ExpenseList
        expenses={visibleExpense}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
}

export default App;
