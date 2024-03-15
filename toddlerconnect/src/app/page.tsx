import Image from "next/image";
import Categories from "./components/categories/Categories";
import Description from "./components/description/Description";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="m-auto font-bold text-[32px] text-[#3E92CC] mb-10 mt-4">Toddler Connect</div>
        <div className="m-auto sm:w-[60%] max-md:w-[90%]">
          <Description />
          <Categories />
        </div>
      </div>
    </div>
  );
}
