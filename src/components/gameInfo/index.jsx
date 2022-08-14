import './style.css';

const GameInfo = () => {
    return (
        <div className="gameInfo">
            <div className="gameInfo_statistic">
                <p><b>GAME STATISTIC:</b></p>
                <ul>
                    <li>Player1 - WIN</li>
                    <li>Player2 - WIN</li>
                    <li>Player2 - WIN</li>
                    <li>Player2 - WIN</li>
                    <li>Player2 - WIN</li>
                </ul>
            </div>
            <div className="gameInfo_score">
                <p><b>SCORE:</b></p>
                <p>Player1 - 1</p>
                <p>Player2 - 4</p>
            </div>
        </div>
    )
}

export default GameInfo;
