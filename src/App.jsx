import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import Income_Expenses from './components/Income_Expenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import { GlobalProvider } from './context/GlobalState'
function App() {

  return (
    <GlobalProvider>
    <Header/>
    <div className="container">
      <Balance/>
      <Income_Expenses/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  )
}

export default App
