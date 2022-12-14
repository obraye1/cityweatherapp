import { ChangeEvent } from 'react';
import { optionType } from '../types';
type Props = {
  term: string;
  options: [];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (options: optionType) => void;
  onSubmit: () => void;
};
const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
}: Props): JSX.Element => {
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-violet-600 to-fuchsia-400 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-40 backdrop-blur-lg rounded-md drop-shadow-lg text-gray-700">
        <h1 className="text-5xl font-thin">
          Weather <span className="font-black">Forecast</span>
        </h1>
        <p className="text-sm mt-2">Enter the below the Name of City</p>
        <div className="flex mt-10 md:mt-4 relative">
          <input
            type={'text'}
            value={term}
            onChange={onInputChange}
            className="px-2 py-1 rounded-l-md border-gray-800 "
          />
          {/* for suggestions on the input*/}
          <ul className="absolute top-9 bg-white ml-1 rounded-b-md ">
            {options.map((option: optionType, index: number) => (
              <li key={option.name + '_' + index}>
                <button
                  className="text-left text-sm w-full hover:bg-gray-600 hover:text-white py-1 px-3 cursor-pointer"
                  onClick={() => onOptionSelect(option)}
                >
                  {option.name},{option.country}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="rounded-r-md border-2 border-gray-100 hover:border-gray-600 hover:text-gray-100 px-2 py-1 cursor-pointer"
            onClick={onSubmit}
          >
            {' '}
            search
          </button>
        </div>
      </section>
    </main>
  );
};

export default Search;
