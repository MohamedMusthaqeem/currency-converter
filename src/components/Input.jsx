import { useId } from "react";

const Input = ({
  label,
  amount,
  onAmountChange,
  onCurrecyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  disable = false,
  className = "",
}) => {
  const id = useId();
  return (
    <div>
      <div
        className={`flex flex-wrap justify-between text-blue-700 ${className}`}
      >
        <div className="flex flex-col space-y-1">
          <label htmlFor={id}>{label}</label>
          <input
            className="bg-transparent text-black p-1 outline-none"
            id={id}
            type="number"
            value={amount}
            disabled={disable}
            onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label>Currency Type</label>
          <select
            value={selectedCurrency}
            onChange={(e) => onCurrecyChange && onCurrecyChange(e.target.value)}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Input;
