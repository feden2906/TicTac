import "./ModalWindow.css"
import {useState} from "react";

export default function ModalWindow({players}) {
    const [player1, setPlayer1] = useState('');
    const [player2, setPlayer2] = useState('');

    const formSubmit = (e) => {
        e.preventDefault()
        players(player1, player2, false)
    }

    return (
        <div className='modal'>
            <div className='modal__overlay'>
                <div className='modal__formWindow'>
                    <form className='modal__form' onSubmit={formSubmit}>
                        <input className='modal__input' type='text' value={player1} placeholder='Player 1'
                               onChange={({target: {value}}) => setPlayer1(value)}/>
                        <input className='modal__input' type='text' value={player2} placeholder='Player 2'
                               onChange={({target: {value}}) => setPlayer2(value)}/>
                        <button className='modal__button' disabled={!player1 || !player2}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
