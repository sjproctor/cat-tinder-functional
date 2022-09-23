import React from "react"
import { CardBody, CardSubtitle, CardText } from "reactstrap"
import { useParams, NavLink } from "react-router-dom"
import NotFound from "./NotFound"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  console.log(useParams())
  let currentCat = cats?.find((cat) => cat.id === +id)

  return (
    <main className="cat-show-cards">
      {currentCat && (
        <>
          <img
            alt={`profile of a cat named ${currentCat.name}`}
            src={currentCat.image}
            className="cat-show-img"
          />
          <section>
            <CardBody>
              <h3>{currentCat.name}</h3>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Age: {currentCat.age}
              </CardSubtitle>
              <CardText>Enjoys: {currentCat.enjoys}</CardText>
            </CardBody>
            <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
              Edit Cat Profile
            </NavLink>
          </section>
        </>
      )}
      {!currentCat && <NotFound />}
    </main>
  )
}

export default CatShow
