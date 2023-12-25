import Nav from "./Nav"
import HERO from "./assets/image/Control2.jpeg"
// import HERO from "./assets/image/Control1.jpeg"

function Home() {
    return (
        <div className="home-page">
            <Nav />
            <main className="home-sect">
                <section className="home-intro">
                    <p> A pest and disease control information website that enlighten farmers about th common pests and diseases that can affect their farm and how to control them to prevent disease outbreak on their farm and maximize their farm productivity. </p>
                </section>
                <section className="home-hero">
                    <img src={HERO} alt="" />
                </section>
            </main>

        </div>
    )
}

export default Home