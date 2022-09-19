import { render, screen } from "@testing-library/react"
import Home from "./Home"

describe("<Home />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<Home />, div)
    const textElement = screen.getByText("Find Your Cat a Feline Friend")
    expect(textElement).toBeInTheDocument()
  })
})
