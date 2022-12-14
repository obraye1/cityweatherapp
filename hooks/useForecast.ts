import { useState, useEffect, ChangeEvent } from 'react';
import { optionType } from '../types';

const useForecast = () => {
  const [term, setTerm] = useState<string>('');
  const [options, setOption] = useState<[]>([]);
  const [location, setLocation] = useState<optionType | null>(null);
  const [forecast, setForecast] = useState<null>(null);

  const getSearchOptions = (value: string) => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
        process.env.NEXT_PUBLIC_REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setOption(data))
      .catch((e) => console.log(e));
  };
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setTerm(value);

    if (value === '') return;
    getSearchOptions(value);
  };
  const getForcast = (location: optionType) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${process.env.NEXT_PUBLIC_REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        const forecastData = {
          ...data.city,
          list: data.list.slice(0, 13),
        };
        setForecast(forecastData);
      })
      .catch((e) => console.log(e));
  };
  const onSubmit = () => {
    if (!location) return;

    getForcast(location);
  };
  const onOptionSelect = (option: optionType) => {
    setLocation(option);
  };
  useEffect(() => {
    if (location) {
      setTerm(location.name);
      setOption([]);
    }
  }, [location]);

  return {
    options,
    term,
    forecast,
    onOptionSelect,
    onSubmit,
    onInputChange,
  };
};
export default useForecast;
