import { IoCloudUploadOutline } from "react-icons/io5"

export default function Card({ children }) {
  return (
    <section className="relative mb-1 h-[208px] w-[384px] hover:drop-shadow-xl">
      <div className="flex w-full flex-col justify-center gap-5 rounded-md bg-[#F9FAFB] px-6 py-8 text-center">
        {children}
      </div>
      <IoCloudUploadOutline
        size={24}
        className="absolute -top-1/8 left-[45%] size-[48px] rounded-md bg-[#3F75FE] p-2 text-white"
      />
    </section>
  )
}
