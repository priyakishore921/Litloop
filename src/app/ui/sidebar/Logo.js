import { SparklesIcon } from "@heroicons/react/24/solid";

const Logo = () => {
  return (
    <div className="flex flex-row items-center text-white leading:none">
      <SparklesIcon className="w-10 h-10" />
      <p className="text-[24px] ml-1">Litloop</p>
    </div>
  );
}

export default Logo;
