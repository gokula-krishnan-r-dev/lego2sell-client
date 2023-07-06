import { useState } from "react"
import { Stepper, Button, Group } from "@mantine/core"
import DetailsForm from "./DetailsForm"
import Summary from "./Summary"
import { useLocation, useNavigate } from "react-router-dom"
const Details = () => {
  const location = useLocation()
  // const navigation = useNavigate()
  const data = location.state && location.state.data
  const price = location.state.price
  const SearchValue = location.state.SearchValue

  console.log(SearchValue)
  const [active, setActive] = useState(0)
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current))
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current))
  return (
    <div className="py-12 flex items-center justify-center">
      <div className="w-[80%] overflow-y-scroll">
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="First step" description="Create an account">
            <DetailsForm price={price} data={data} setActive={setActive} />
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Verify email">
            <Summary SearchValue={SearchValue} price={price} data={data} />
          </Stepper.Step>
          <Stepper.Step label="Final step" description="Get full access">
            Step 3 content: Get full access
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
      </div>
    </div>
  )
}

export default Details
