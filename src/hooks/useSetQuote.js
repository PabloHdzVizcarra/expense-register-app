import { useState } from "react";


export const useSetQuote = (dispatch, userData) => {

  const [money, setMoney] = useState(0);
  const [value, setValue] = useState(0);
  const [isOpenInput, setIsOpenInput] = useState(false);
  
  function handleSetMoney(event) {
    event.preventDefault();
    if (value <= 0) {
      return console.log(
        "El valor 0 no es valido"
      );
    } else {
      setMoney(value);
      setIsOpenInput(false);
    }
  }


  return [
    money,
    setValue,
    handleSetMoney,
    isOpenInput,
    setIsOpenInput
  ];
}