import Badge from "./Components/Badge.jsx"
import Banner from "./Components/Banner.jsx"
import Card from "./Components/Card/index.jsx"
import ladyImage from "/lady.jpg"
import { clsx } from "clsx"

import { FaQuoteLeft } from "react-icons/fa"

export default function App() {
  return (
    <section className="flex w-[80%] flex-col items-center gap-12 bg-[#2545B8] px-4 py-16 text-[#FFFFFF]">
      <img
        src={`${ladyImage}`}
        className="-mt-[55%] h-[206px] w-[376px] rounded-xl object-cover object-[center_30%]"
      />
      <div>
        <FaQuoteLeft size={48} className="mb-6 text-[#FFFFFF40]" />
        <p className="mb-6 text-2xl leading-8 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
          nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
          adipiscing nunc urna, sit.{" "}
        </p>
        <p className="text-base font-bold">May Andersons</p>
        <p className="text-base font-medium">Workcation, CTO</p>
      </div>
    </section>
  )
}
