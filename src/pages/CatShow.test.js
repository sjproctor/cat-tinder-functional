import { render, screen } from "@testing-library/react"
import CatShow from "./CatShow"
import mockCats from "../mockCats"
import { Routes, Route, BrowserRouter } from "react-router-dom"

describe("<CatShow />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(<CatShow />, div)
  })

  it("render a card with a cat name", () => {
    const renderComponent = () => {
      render(
        <BrowserRouter>
          <Route path="catshow/:id" element={<CatShow cats={mockCats} />} />
        </BrowserRouter>
      )
    }

    renderComponent()
    expect(screen.getByText("Mittens")).toBeInTheDocument()
  })
})
