import { useState } from "react";
import { Input } from "./components/All";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setCovertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setCovertedAmount(Math.floor(amount * currencyInfo[to]));
    console.log(amount);
    console.log(amount * currencyInfo[to]);
  };
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setCovertedAmount(amount);
  };
  return (
    <>
      <div
        className="w-full h-screen flex flex-col items-center justify-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/259251/pexels-photo-259251.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}
      >
        <div>
          <h1 className="text-white p-6 text-4xl font-semibold uppercase tracking-widest  ">
            currency converter
          </h1>
        </div>
        <div className="w-1/3 bg-white/70 backdrop-blur-sm  p-10 rounded-md">
          <Input
            label="From"
            amount={amount}
            selectedCurrency={from}
            currencyOptions={options}
            onAmountChange={(cur) => setAmount(cur)}
            onCurrecyChange={(cur) => setFrom(cur)}
          />
          <button
            onClick={() => {
              swap();
            }}
            className="bg-blue-500 w-full p-1 text-lg text-white uppercase m-1 rounded-md"
          >
            swap
          </button>
          <Input
            label="To"
            selectedCurrency={to}
            amount={convertedAmount}
            currencyOptions={options}
            onCurrecyChange={(cur) => setTo(cur)}
            disable={true}
          />
          <button
            onClick={() => {
              convert();
            }}
            className="bg-green-600 w-full p-1 text-lg text-white uppercase m-1 rounded-md"
          >
            convert {from} to {to}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
