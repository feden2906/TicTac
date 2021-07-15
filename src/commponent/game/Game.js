import ModalWindow from "../modalWindow/ModalWindow";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import {useState} from "react";

export default function Game (){
    const [allPlayers, setAllPlayers] = useState([]);
    const [isModalShow, setIsModalShow] = useState(true);

    const players = (player1, player2, flag) => {
        if (!player1 || !player2) return

        setAllPlayers([player1, player2])
        setIsModalShow(flag)
    }
    console.log(allPlayers)
    return(
        <div>
            {
                isModalShow && <ModalWindow players={players}/>
            }
            {
                !isModalShow && <TicTacToe players={allPlayers}/>
            }
        </div>
    )
}
