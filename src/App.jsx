import { useState, useEffect } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/usecurrencyinfo'
import './App.css'
//import backgroundImage from './currency.jpg'; // Update the path to your image file


function App() {
  // In this project we will use custom hooks
  const [amount,setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const[convertedAmount, setCovertedAmount] = useState(0)

const currencyInfo = useCurrencyInfo(from)   // actually hmare pass key value pair h jo hume us API se mila h 
const options = Object.keys(currencyInfo) // CurrencyInfo m jo humne arr bnayi h currencyOptions yhi h

const swap = () => {
  setFrom(to)
  setTo(from)
  setCovertedAmount(amount)
  setAmount(convertedAmount)
}

 useEffect(() => {
    if (currencyInfo[to]) {
      convert();
    }
  }, [from, to, amount, currencyInfo]); // this is for automatically trigger as soon as currency is changed


const convert = () => {
  setCovertedAmount(amount * currencyInfo[to]) // ab humne convert kia h actually m 
  
}

 
return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/157380238/photo/mosaic-collection-of-world-currencies.jpg?s=612x612&w=0&k=20&c=GTIStFtEcjJr55kG334qqLKd22578cNi_4ODSG_B-RQ=')`
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount = {amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setFrom(currency)}
                          selectCurrency= {from}
                          onAmountChange={(amount) =>
                            setAmount(amount)}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                         label="To"
                          amount = {convertedAmount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setTo(currency)}
                          
                          selectCurrency= {to}
                          amountDisable
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
