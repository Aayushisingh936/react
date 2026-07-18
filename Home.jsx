import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>Discover The Best Games 🎮</h1>
        <p>
          Explore thousands of games, ratings and reviews in one place.
        </p>
        <button>Explore Games</button>
      </section>
    </>
  );
}

export default Home;