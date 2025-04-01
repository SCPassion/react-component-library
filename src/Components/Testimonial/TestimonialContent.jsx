import { FaQuoteLeft } from "react-icons/fa"

export default function TestimonialContent({ name, title, children }) {
  return (
    <div>
      <FaQuoteLeft size={48} className="mb-6 text-[#FFFFFF40]" />
      <p className="mb-6 text-2xl leading-8 font-medium lg:max-w-[800px]">
        {children}
      </p>
      <p className="text-base font-bold">{name}</p>
      <p className="text-base font-medium">{title}</p>
    </div>
  )
}
