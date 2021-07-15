import ModalWindow from "../modalWindow/ModalWindow";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import {useState} from "react";

export default function Game (){
    const [allPlayers, setAllPlayers] = useState([]);
    const players = (player1, player2) => {
        if (!player1 || !player2) return
        console.log(player1)
        setAllPlayers("player1")
        console.log(allPlayers)

    }
    return(
        <div>
            <ModalWindow players={players}/>
            <TicTacToe/>
        </div>
    )
}