'use client'

import { usePathname } from 'next/navigation';

import Link from 'next/link';
import { styled } from "styled-components"

export default function Header(){

    const currentPage = usePathname()
    


    return(
        <Wrapper>
            <span>Áurikos</span>
            <button>
                <Link style={currentPage == "/"? {background:"white",color:"black"}:{}} href="/">
                    Home
                </Link>
            </button>
            <button>
                <Link style={currentPage=="/sobre"? {background:"white",color:"black"}:{} } href='/sobre'>
                    Sobre
                </Link>
            </button>
            <hr />
            <span><input type="search" /></span>
        </Wrapper>
        
    )
}
const Wrapper = styled.div`
    background-color: black;
    display: flex;
    justify-content: space-between;
    padding: 1.6em;
    gap: 0.5em;
    color: #ffffff;
    font-size: 1.8em;
    
    button{
        display: flex;
        
        font-size: 0.4em;
        border: none;
        color: black;
        background-color: #000000;
        & :hover {
            background-color: #ffffff;
            color: #000000;
        }

    }
        
    a{
        padding: 1em 2em;
        text-decoration: none;
        color: white;

    }
    input{
        display: flex;
        
    }
`
