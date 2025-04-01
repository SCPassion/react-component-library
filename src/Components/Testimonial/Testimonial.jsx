import ladyImage from "/lady.jpg"

import { FaQuoteLeft } from "react-icons/fa"

export default function () {
  return (
    <section className="flex w-[75%] min-w-[378px] flex-col items-center gap-12 bg-[#2545B8] px-4 py-16 text-[#FFFFFF] lg:max-h-[400px] lg:max-w-[1358px] lg:flex-row lg:px-16">
      <img
        src={`${ladyImage}`}
        className="-mt-[130px] h-[206px] w-[376px] rounded-xl object-cover object-[center_30%] lg:mt-0 lg:h-[464px] lg:w-[384px]"
      />
      <div>
        <FaQuoteLeft size={48} className="mb-6 text-[#FFFFFF40]" />
        <p className="mb-6 text-2xl leading-8 font-medium lg:max-w-[800px]">
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
