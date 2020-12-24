import { motion } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import colors from "../styles/colors"

export default function TicTacToeHeader({ isGameWon, player }) {
  // --- state ---
  const [playerNames, setPlayerNames] = useState([`Player 1`, `Player 2`])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newNames, setNewNames] = useState([`Player 1`, `Player 2`])

  // --- functions ---
  const handleNameChange = () => {
    setPlayerNames(newNames)
    setNewNames(newNames)
    setIsModalOpen(false)
  }

  return (
    <HeaderContainer>
      {isModalOpen ? (
        <ModalBackground>
          <Modal>
            <h3>Choose new names</h3>
            <NameInput
              name="player1"
              value={newNames[0]}
              placeholder="Player 1"
              onChange={e => setNewNames([e.target.value, newNames[1]])}
            />
            <NameInput
              name="player2"
              value={newNames[1]}
              placeholder="Player 2"
              onChange={e => setNewNames([newNames[0], e.target.value])}
            />
            <NameButton onClick={handleNameChange}>Change names</NameButton>
          </Modal>
        </ModalBackground>
      ) : null}
      {isGameWon ? (
        <h1>Player{" " + player} has won!</h1>
      ) : (
        <h1>
          {`${playerNames[Number(player) - 1]}'s turn  `}
          <EditSpan onClick={() => setIsModalOpen(true)}>✎</EditSpan>
        </h1>
      )}
    </HeaderContainer>
  )
}

// --- styled components ---

const HeaderContainer = styled.div`
  margin-top: 25px;
`

const EditSpan = styled(motion.span)`
  font-size: 32px;
  &:hover {
    cursor: pointer;
  }
`

const ModalBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 99;
  background-color: #00000080;
`

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 95%;
  max-width: 500px;
  height: 50%;
  border-radius: 10px;
  padding: 2% 5%;
  background-color: ${colors.dark};
  h3 {
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 15px;
  }
`

const NameInput = styled.input`
  width: 100%;
  padding: 10px 5px;
  border: none;
  margin-bottom: 15px;
  border-radius: 10px;
  &[name="player1"] {
    background-color: ${colors.primary};
  }
  &[name="player2"] {
    background-color: ${colors.accent};
  }
`

const NameButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  border: none;
  &&& {
    color: black;
  }
  background-color: ${colors.secondary};
`
