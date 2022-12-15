import type { NextPage } from 'next';
import Search from '../components/Search';
import Forecast from '../components/Forecast';
import useForecast from '../hooks/useForecast';

const Home: NextPage = () => {
  const { options, term, forecast, onOptionSelect, onSubmit, onInputChange } =
    useForecast();
    console.log('options', options);
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-violet-600 to-fuchsia-400 h-[100vh] w-full overflow-hidden">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onSubmit={onSubmit}
          onOptionSelect={onOptionSelect}
        />
      )}
    </main>
  );
};

export default Home;
