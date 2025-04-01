import Badge from "./Components/Badge.jsx"
import Banner from "./Components/Banner.jsx"
import Card from "./Components/Card/index.jsx"
import Testimonial from "./Components/Testimonial/index.jsx"
import { clsx } from "clsx"

import ladyImage from "/lady.jpg"

export default function App() {
  return (
    <Testimonial>
      <Testimonial.Image src={`${ladyImage}`} />
      <Testimonial.Content name="May Andersons" title="Workcation, CTO">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla
        vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing
        nunc urna, sit.
      </Testimonial.Content>
    </Testimonial>
  )
}
