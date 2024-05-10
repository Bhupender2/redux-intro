import CreateCustomer from "../src/features/costumers/CreateCustomer"
import Customer from "../src/features/costumers/Customer"
import AccountOperations from "../src/features/accounts/AccountOperations"
import BalanceDisplay from "../src/features/accounts/BalanceDisplay"

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
