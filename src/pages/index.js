import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TicTacToe from "../components/TicTacToe"
import styled from "styled-components"
import colors from "../styles/colors"

export default () => (
  <Main>
    <SEO title="Home" />
    <TicTacToe />
  </Main>
)

// --- styled components ---

const Main = styled.main`
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background-color: ${colors.dark};
`
