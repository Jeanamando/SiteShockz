'use client'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { usePathname } from 'next/navigation';
import{BsSearch} from 'react-icons/bs'
import Link from 'next/link';
import { styled } from "styled-components"
import Cart from '../cart/page';
export default function Header(){

    const currentPage = usePathname()
    


    return(
        <Wrapper>
            <span>Áurikos</span>
            
            <button className='btn'>
                <Link style={currentPage == "/"? {background:"white",color:"black"}:{}} href="/">
                    Home
                </Link>
            </button>
            <button className='btn'>
                <Link style={currentPage=="/sobre"? {background:"white",color:"black"}:{} } href='/sobre'>
                    Sobre
                </Link>
            </button>

            <button className='cart1'>
                <Link href="./cart" > 
               <AiOutlineShoppingCart/>
               </Link>
            </button>
            
            
            <div className='pesquisa'>
                <input type="search" className='inputTexto'/>
                <button className='btnPesquisa'>
                    <BsSearch/>
                </button>
            </div>
        </Wrapper>
        
    )
}
const Wrapper = styled.div`
    box-sizing: border-box;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.6em;
    color: #ffffff;
    font-size: 1.8em;
    
    .btn{
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
    .inputTexto {
        border: none;
    }
    .inputTexto:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
    .pesquisa {
        display: flex;
        justify-items: center;
        
        background: white;
        height: 22px;
        
    }
    .btnPesquisa {
        background: transparent;
        color: black;
        border: none;
        font-size: 16px;
    }
    .btnPesquisa:active {
    }
    a{
        padding: 1em 2em;
        text-decoration: none;
        color: white;

    }

    .cart1{
        border: none;
        color: white;
        background-color: black;
        font-size: 0.7em;
    }
`
