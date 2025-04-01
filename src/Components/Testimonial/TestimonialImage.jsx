import ladyImage from "/lady.jpg"

export default function TestimonialImage() {
  return (
    <img
      src={`${ladyImage}`}
      className="-mt-[130px] h-[206px] w-[376px] rounded-xl object-cover object-[center_30%] lg:mt-0 lg:h-[464px] lg:w-[384px]"
    />
  )
}
