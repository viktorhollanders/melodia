import { BoomBox } from "lucide-react";
import Link from "next/link";

export function NavigationBar() {
  return (
    <nav className="bg-white flex flex-row justify-between lg:justify-start lg:w-3xs lg:flex-col py-4 px-6 lg:gap-y-6 lg:py-10 lg:px-6 lg:h-dvh z-10 border-b lg:border-r border-gray-300 sticky top-0">
      <div className="bg-blue-600 p-1 lg:p-2 rounded-sm lg:w-12 h-8 w-8 lg:h-12 flex items-center justify-center">
        <BoomBox className="text-white" size={24} />
      </div>
      <div className="flex flex-row gap-x-2 lg:flex-col lg:text-2xl lg:gap-y-4">
        <Link
          className="font-bold text-blue-600 lg:hover:text-blue-800"
          href="/"
        >
          Search
        </Link>
        <Link
          className="font-bold text-blue-600 hover:text-blue-800"
          href="/favorites"
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}
