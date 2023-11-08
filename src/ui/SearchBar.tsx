import { BiSearch } from 'react-icons/bi';
import { JSX, useState } from 'react';

function SearchBar({
  children,
}: JSX.Element) {
  const [searchQuery, setSearchQuery] =
    useState('');
  return (
    <>
      <div className='col-span-4 my-6'>
        <form className='ml-52 mr-72 px-3 rounded-xl border border-amber-700 dark:border-gray-700 text-center flex items-center justify-between'>
          <input
            placeholder='Search by name'
            className='text-amber-700 bg-transparent dark:text-pink-500 font-poppins overflow-x-scroll outline-0 rounded-xl py-3 w-3/4'
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(
                e.target.value,
              )
            }
          />
          <span className='text-amber-900 dark:text-pink-500 text-xl cursor-pointer'>
            <BiSearch />
          </span>
        </form>
        {children}
      </div>
    </>
  );
}

export default SearchBar;
