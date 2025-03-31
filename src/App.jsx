import Badge from "./Components/Badge.jsx"
import Banner from "./Components/Banner.jsx"

import { clsx } from "clsx"

export default function App() {
  return (
    <>
      <Banner status="success" title="Congratulations!">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam.
      </Banner>
      <Banner status="warning" title="Attention!">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam.
      </Banner>
      <Banner status="error" title="There is a problem with your application!">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        pariatur, ipsum similique veniam.
      </Banner>
      <Banner status="neutral" title="Update available!"></Banner>
    </>
  )
}
