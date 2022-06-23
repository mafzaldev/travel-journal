import React from "react"
import Navbar from "./Components/Navbar"
import Card from "./Components/Card"
import cardsData from "./data.js"
import "./travelJournal.css"

function App() {
  const cards = cardsData.map((item) => {
    return (
      <Card
        key={item.id}
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        locationImage={item.imageUrl}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <section>{cards}</section>
    </div>
  )
}

export default App
