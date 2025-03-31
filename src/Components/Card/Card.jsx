import { IoCloudUploadOutline } from "react-icons/io5"

export default function Card() {
  return (
    <section className="relative h-[208px] w-[384px] hover:drop-shadow-xl">
      <div className="flex w-full flex-col justify-center gap-5 rounded-md bg-[#F9FAFB] px-6 py-8 text-center">
        <h2 className="text-[#111827]">Easy Deployment</h2>
        <p className="text-[#6B7280]">
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
          magna sit morbi lobortis.
        </p>
      </div>
      <IoCloudUploadOutline
        size={24}
        className="absolute -top-1/8 left-[45%] size-[48px] rounded-md bg-[#3F75FE] p-2 text-white"
      />
    </section>
  )
}
