export default function TicTacToe ({players}){


    return(
        <div>
            {
                players.map(user => <p>{user}</p>)
            }
        </div>
    )
}
