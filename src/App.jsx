import React, { useState } from 'react';
import img from './assets/icon-arrow.svg';

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [calculatedDays, setCalculatedDays] = useState(null);
  const [calculatedMonths, setCalculatedMonths] = useState(null);
  const [calculatedYears, setCalculatedYears] = useState(null);
  const [errorDay, setErrorDay] = useState('');
  const [errorMonth, setErrorMonth] = useState('');
  const [errorYear, setErrorYear] = useState('');
  const [errorDate,setErrorDate]= useState('');

  const handleDay = (e) => {
    setDay(e.target.value);
  };
  const handleMonth = (e) => {
    setMonth(e.target.value);
  };
  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const checkAge = () => {
    const today = new Date();
    let isDayValid = false;
    let isMonthValid = false;
    let isYearValid = false;
    let isDateValid = false;

    // Checking DAY
    if (day === "") {
      setErrorDay('This field is required');
    } else if (day < 1 || day > 31) {
      setErrorDay('Must be a valid day');
    } else {
      isDayValid = true;
      setErrorDay('');
    }

    // Checking MONTH
    if (month === "") {
      setErrorMonth('This field is required');
    } else if (month < 1 || month > 12) {
      setErrorMonth('Must be a valid Month');
    } else {
      isMonthValid = true;
      setErrorMonth('');
    }

    // Checking YEAR
    if (year === "") {
      setErrorYear('This field is required');
    } else if (year > today.getFullYear()) {
      setErrorYear('Must be in the past');
    } else {
      isYearValid = true;
      setErrorYear('');
    }

    // Checking if the Day is a valid Day
    if (isDayValid && isMonthValid && isYearValid) {
      const birthDate = new Date(year, month - 1, day);
      if (birthDate.getFullYear() !== parseInt(year) || birthDate.getMonth() + 1 !== parseInt(month) || birthDate.getDate() !== parseInt(day)) {
        setErrorDay('Must be a valid Date');
        setErrorDate(true);
      } else {
        setErrorDay('');
        setErrorDate(false);
        isDateValid = true;
      }
    }

    if (isDayValid && isMonthValid && isYearValid && isDateValid) {
      calcAge();
    }
  };

  const calcAge = () => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    setCalculatedYears(ageYears);
    setCalculatedMonths(ageMonths);
    setCalculatedDays(ageDays);
  };

  return (
    <div className="font-extrabold text-Poppins bg-White p-4 md:px-10 md:py-7 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl rounded-br-halfCircle w-container mt-20 mx-auto lg:w-maxWidth">
      <div className="Age-input mt-5 mb-10 flex justify-between content-center lg:justify-start lg:w-inputsMax">
        <div className="flex flex-col w-mobileThree">
          <label className={`pb-2 tracking-space font-bold ${errorDay ? "text-Light_red" : "text-Smokey_grey"} text-sm`}>DAY</label>
          <input className={`border-1 border ${errorDay ? "border-Light_red" : ''} hover:border-Purple font-bold text-xl cursor-pointer text-Off_black border-Light_grey rounded-md w-11/12 md:w-10/12 p-3 w-max-inputMax placeholder:text-Smokey_grey`} placeholder='DD' type="number" value={day} onChange={handleDay} />
          <span className="text-Light_red text-xs md:text-md lg:text-large italic font-medium text-sm pt-2">{errorDay}</span>
        </div>
        <div className="flex flex-col w-mobileThree">
          <label className={`pb-2 tracking-space font-bold ${errorMonth ? "text-Light_red" : "text-Smokey_grey"} ${errorDate ? "text-Light_red" : "text-Smokey_grey"} text-sm`}>MONTH</label>
          <input className={`border-1 border ${errorMonth ? "border-Light_red" : ''} ${errorDate ? "border-Light_red" : ""} hover:border-Purple font-bold text-xl cursor-pointer text-Off_black border-Light_grey rounded-md w-11/12 md:w-10/12 p-3 w-max-inputMax placeholder:text-Smokey_grey`} placeholder='MM' type="number" value={month} onChange={handleMonth} />
          <span className="text-Light_red text-xs md:text-md lg:text-large italic font-medium text-sm pt-2">{errorMonth}</span>
        </div>
        <div className="flex flex-col w-mobileThree">
          <label className={`pb-2 tracking-space font-bold ${errorYear ? "text-Light_red" : "text-Smokey_grey"} ${errorDate ? "text-Light_red" : "text-Smokey_grey"} text-sm`}>YEAR</label>
          <input className={`border-1 border ${errorYear ? "border-Light_red" : ''} ${errorDate ? "border-Light_red" : ""} hover:border-Purple font-bold text-xl cursor-pointer text-Off_black border-Light_grey rounded-md w-11/12 md:w-10/12 p-3 w-max-inputMax placeholder:text-Smokey_grey`} placeholder='YYYY' type="number" value={year} onChange={handleYear} />
          <span className="text-Light_red text-xs md:text-md lg:text-large italic font-medium text-sm pt-2">{errorYear}</span>
        </div>
      </div>
      <div className="mb-10 py-8 flex flex-col relative">
        <img className="bg-Purple hover:bg-black p-2 w-2/12 sm:w-1/12 lg:w-1/12 absolute top-2 rounded-full self-center cursor-pointer lg:top-1 lg:self-end" src={img} onClick={checkAge} />
        <hr />
      </div>
      <div className="flex flex-col text-center md:text-left md:pl-10 pb-5">
        <div>
          <span className="text-Purple text-5xl md:text-8xl font-extrabold pr-2 md:pr-4">{calculatedYears !== null ? calculatedYears : '--'}</span>
          <span className="font-extrabold text-5xl md:text-8xl italic">years</span>
        </div>
        <div>
          <span className="text-Purple text-5xl md:text-8xl font-extrabold pr-2 md:pr-4">{calculatedMonths !== null ? calculatedMonths : '--'}</span>
          <span className="font-extrabold text-5xl md:text-8xl italic">months</span>
        </div>
        <div>
          <span className="text-Purple text-5xl md:text-8xl font-extrabold pr-2 md:pr-4">{calculatedDays !== null ? calculatedDays : '--'}</span>
          <span className="font-extrabold text-5xl md:text-8xl italic">days</span>
        </div>
      </div>
    </div>
  );
}

export default App;
