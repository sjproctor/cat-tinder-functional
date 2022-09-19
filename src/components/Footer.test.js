import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Footer from "./Footer"

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
      div
    )
  })
  it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("© 2022 LEARN Instruction Team"))
    expect(
      screen.getByText("© 2022 LEARN Instruction Team")
    ).toBeInTheDocument()
    userEvent.click(screen.getByText("Meet All the Cats"))
    expect(screen.getByText("Meet All the Cats")).toBeInTheDocument()
    userEvent.click(screen.getByText("Add a Cat"))
    expect(screen.getByText("Add a Cat")).toBeInTheDocument()
  })
})
