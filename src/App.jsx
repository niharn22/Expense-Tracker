import './App.css'
import Header from './components/Header'
import Balance from './components/Balance'
import Income_Expenses from './components/Income_Expenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
function App() {

  return (
    <>
    <Header/>
    <div className="container">
      <Balance/>
      <Income_Expenses/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </>
  )
}

export default App
