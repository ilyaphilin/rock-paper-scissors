import Header from "./components/header";
import Login from "./components/login";
import Status from "./components/status";
import GameElements from "./components/gameElements";
import GameAction from "./components/gameAction";
import GameInfo from "./components/gameInfo";
import './normalize.css';
import './index.css';

function App() {
  return (
    <>
        <Header />
        <main className="wrapper">
            <Login />
            <Status />
            <GameElements />
            <GameAction />
            <GameInfo />
        </main>
    </>
  );
}

export default App;
