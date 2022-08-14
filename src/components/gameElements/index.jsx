import rock from '../../assets/rock.png'
import paper from '../../assets/paper.png'
import scissors from '../../assets/scissors.png'
import './style.css';

const GameElements = () => {
    return (
        <div className="gameElements">
            <div className="gameElements_rock">
                <button>
                    <img src={rock} alt="rock"/>
                </button>
                <p>ROCK</p>
            </div>
            <div className="gameElements_paper">
                <button className="selected">
                    <img src={paper} alt="paper"/>
                </button>
                <p>PAPER</p>
            </div>
            <div className="gameElements_scissors">
                <button>
                    <img src={scissors} alt="scissors"/>
                </button>
                <p>SCISSORS</p>
            </div>
        </div>
    )
}

export default GameElements;
