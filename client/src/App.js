import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import Project from "./components/Projects/Project.js";
import Contact from "./components/Contact/Contact.js";
import About from "./components/About/About.js";
import Blog from "./components/Blog/Blog.js";
import flip_card from "../src/utils/flip_card.png"
import flying_bird from "../src/utils/flying_bird.png"
import tic_tac_toe from "../src/utils/tic_tac_toe.png"
import pokemon_go_game from "../src/utils/pokemon_go_game.png"
import pass_generator from "../src/utils/pass_generator.png"
function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Project projects={[{ "name": "Flip The Card", "url": "https://github.com/souravkgit/FlipCardGame", "image": flip_card }, { "name": "Flappy Bird Game", "url": "https://souravkgit.github.io/FlyingBirdGame/", "image": flying_bird }, { "name": "Tic Tact Toe", "url": "https://github.com/souravkgit/TicTacToe/", "image": tic_tac_toe }, { "name": "Password Generator", "url": "https://souravkgit.github.io/PassWordGenerator/", "image": pass_generator }, { "name": "Pokemon Trading Website", "url": "https://app.poketradinghub.com", "image": pokemon_go_game }]} />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
