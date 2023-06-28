'use client'

import { styled } from "styled-components"


export default function Template() {
  return (
    <PageSobre>
      <h1>Página sobre</h1>
    </PageSobre>
    
  )
}
const PageSobre = styled.div`
  display: flex;
  justify-content: center;
  height: 20em;
  place-items: center;
`