import Search from '../components/Search'
import Forecast from '../components/Forecast'
import useForecast from '../hooks/useForecast';

const App = (): JSX.Element => {
  const {
    options,
    term,
    forecast,
    onOptionSelect,
    onSubmit,
    onInputChange,
  } = useForecast()
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-violet-600 to-fuchsia-400 h-[100vh] w-full">
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
  )
}

export default App
