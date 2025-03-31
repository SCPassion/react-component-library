import { clsx } from "clsx"
import { GoCheckCircleFill } from "react-icons/go"
import { IoIosWarning } from "react-icons/io"
import { MdError } from "react-icons/md"
import { FaInfoCircle } from "react-icons/fa"

export default function Banner({ title, status, children }) {
  const styleClass = clsx({
    "bg-[#ECFDF5] text-[#047857]": status.toLowerCase() === "success",
    "bg-[#FFFBEB] text-[#92400E]": status.toLowerCase() === "warning",
    "bg-[#FEF2F2] text-[#92400E]": status.toLowerCase() === "error",
    "bg-[#EFF6FF] text-[#1E40AF]": status.toLowerCase() === "neutral",
  })

  const iconElement =
    status.toLowerCase() === "success" ? (
      <GoCheckCircleFill className="fill-[#34D399] text-xl" />
    ) : status.toLowerCase() === "warning" ? (
      <IoIosWarning className="fill-[#FBBF24] text-2xl" />
    ) : status.toLowerCase() === "error" ? (
      <MdError className="fill-[#F87171] text-2xl" />
    ) : (
      <FaInfoCircle className="fill-[#60A5FA] text-2xl" />
    )

  const logoLocationClass = children ? "" : "items-center"

  return (
    <section
      className={`${styleClass} flex h-20 w-[896px] ${logoLocationClass} my-1 gap-4 rounded-md p-4 text-sm leading-5`}
    >
      {iconElement}
      <div className="space-y-2">
        <p className="font-medium">{title}</p>
        {children !== undefined && <p className="font-normal">{children}</p>}
      </div>
    </section>
  )
}
