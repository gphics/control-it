import { useParams } from "react-router-dom"
import Nav from "./Nav"
import bacterialDisease from "./assets/DB/bacterial"
import viralDisease from "./assets/DB/viral"
import fungalDisease from "./assets/DB/fugal"

function Disease() {
  const { vector } = useParams()
  let resource = bacterialDisease

  if (vector === "fungal") {
    resource = fungalDisease
  } else if (vector === "viral") {
    resource = viralDisease
  }

  return (
    <div className="disease-page">
      <Nav />
      <main className="disease-main">
        <h1 className="disease-head">
          {vector[0].toLocaleUpperCase() + vector.slice(1)} Disease
        </h1>
        <section className="disease-list">
          {resource.map((props, index) => <DiseaseList {...props} key={index} />)}
        </section>
      </main>

    </div>
  )
}
function DiseaseList({ name, symptoms, description, control, image_url }) {
  return <div className="each-disease">
    <h3> {name} </h3>
    <img src={image_url} alt={name + 'disease'} />
    <p className="p-d description"> <span> Description:  </span> {description.toLowerCase()} </p>
    <p className="p-d symptoms">
      <span>Symptoms:  </span>{symptoms.toLowerCase()}
    </p>
    <p className="p-d control"> <span> Control:  </span>{control.toLowerCase()} </p>
  </div>
}
export default Disease