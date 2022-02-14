import React, {useState} from 'react'

import './tic-tac-toe.styles.css'

const TicTacToe = () => {
    const [turn, setTurn] = useState('x')
    const [cells, setCells] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState()

    const calculateWinner = (squares) => {
        const cosmos = { 
            right: [ 
                [0,1,2],
                [3,4,5],
                [6,7,8] 
            ],

            down: [
                [0,3,6],
                [1,4,7],
                [2,5,8]
            ],

            diagonol: [
                [0,4,8],
                [2,4,6]
            ]
        }

        for (let cosmo in cosmos) {
        cosmos[cosmo].forEach(pattern => {
            if (
                squares[pattern[0]] === '' ||
                squares[pattern[1]] === '' ||
                squares[pattern[2]] === ''
            ) {
                //withdraw
            } else if (
                squares[pattern[0]] === squares[pattern[1]] &&
                squares[pattern[1]] === squares[pattern[2]]
            ) {
                setWinner(squares[pattern[0]])
            }
            console.log(pattern[1])
        }
        )}

    }

    const handleClick = (num) => {

        if (cells[num] !== '') {
        alert ('Already clicked');
        return;
        }

        let squares = [...cells];

        if (turn === 'x') {
                squares[num] = 'x'
                setTurn('o') 
            }
            else {
                squares[num] = 'o'
                setTurn('x')
            }

            calculateWinner(squares);
            setCells(squares);


    }

    const Cell = ({num}) => {
        return <td onClick = {() => handleClick(num)}>{cells[num]}</td>
    }

    const handleRestart = () => {
        setCells(Array(9).fill(''))
        setWinner('')
    }

    

    return (
        <div className='container'>
            <table>
                Turn: {turn}
                <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                </tbody>
            </table>
            {winner && (
                <>
                <p>{winner} is the winner!</p>
                </>
            )}

            <button onClick={() => handleRestart()} >Play Again</button>

        </div>
    )
}

export default TicTacToe;
