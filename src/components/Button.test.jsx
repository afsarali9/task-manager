import { render, screen } from "@testing-library/react"
import Button from "./Button"

test("check text", () => {
  render(<Button name='Completed' />)
  const text = screen.getByText('Completed')
  expect(text).toBeInTheDocument()
})


// import userEvent from "@testing-library/user-event"
