import { CgGym } from "react-icons/cg";
import { GiMuscleUp } from "react-icons/gi";
import { IoBody } from "react-icons/io5";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="px-8 py-6 bg-[#F7EFE5] dark:bg-black gap-3 col-span-1 flex flex-col border-amber-700 border-dotted dark:border-gray-700 border-r">
      <img src="/sidebar_light.jpg" className="rounded-full" alt="logo" />
      <nav className="block">
        <ul className="cursor-pointer flex flex-col gap-6 items-center">
          <li className="w-full group">
            <Link
              to={"/equipments"}
              className="w-full px-8 py-4 text-gray-900 dark:text-gray-300 font-semibold flex gap-4 items-center group-hover:text-amber-700  dark:group-hover:text-pink-500 transition-all duration-300 rounded-lg"
            >
              <CgGym />
              <span className="dark:text-gray-300 font-poppins text-gray-900 group-hover:text-amber-700 dark:group-hover:text-pink-500 transition-all duration-300">
                Equipments
              </span>
            </Link>
          </li>
          <li className="w-full group">
            <Link
              to={"/target-muscle"}
              className="w-full px-8 py-4 text-gray-900  dark:text-gray-300 font-semibold flex gap-4 items-center group-hover:text-amber-700 dark:group-hover:text-pink-500 transition-all duration-300 rounded-lg"
            >
              <GiMuscleUp />
              <span className="dark:text-gray-300 font-poppins text-gray-900 group-hover:text-amber-700 dark:group-hover:text-pink-500 transition-all duration-300 ">
                Target Muscle
              </span>
            </Link>
          </li>
          <li className="w-full group">
            <Link
              to={"/body-parts"}
              className="w-full px-8 py-4 text-gray-900  dark:text-gray-300 font-semibold flex gap-4 items-center group-hover:text-amber-700 dark:group-hover:text-pink-500 transition-all duration-300 rounded-lg"
            >
              <IoBody />
              <span className="dark:text-gray-300 text-gray-900 font-poppins group-hover:text-amber-700 dark:group-hover:text-pink-500 transition-all duration-300">
                Body Parts
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;