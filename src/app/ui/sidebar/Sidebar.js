import Link from 'next/link';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
  return (
    <div className='flex flex-col'>
      <Link
        href='/store'
        className='bg-purple-500 flex h-20 items-end justify-start rounded-md p-4 mb-4'
      >
        <div className='w-32 md:w-40'>
          <Logo />
        </div>
      </Link>
      
      <div className='m-2 flex flex-wrap justify-center flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 gap-2'>
        <NavLinks />
        <form>
          <button type='submit' className='flex grow items-center gap-2 rounded-md bg-white p-4'>
            <ArrowLeftEndOnRectangleIcon className='w-6 h-6' />
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sidebar;
