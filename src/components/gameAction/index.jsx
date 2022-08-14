import './style.css';

const GameAction = () => {
    return (
        <div className="gameAction">
            <p className="gameAction_status">WAIT</p>
            <button className="gameAction_ready">READY</button>
            <p className="gameAction_result">YOU WIN</p>
        </div>
    )
}

export default GameAction;
