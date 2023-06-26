'use client'
import Home from "../page"
import StyledComponentsRegistry from "../lib/registry"
import { displayPartsToString } from "typescript"
import Sobre from '../sobre/page'
import Link from 'next/link';
import { styled } from "styled-components"
export default function Header(){
    return(
        <Wrapper>
        
    
            <button><Link href="/"> Home</Link></button>
            <button><Link href='/sobre'>Sobre</Link> </button>
        </Wrapper>
        
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1em;
    gap: 1em;
    
    button{
        font-size: 2.2em;
        color: black;
        
        & :hover {
            background-color: black;
            color: white
        }

    }
        
    a{
        text-decoration: none;
        color: black;

    }
`
