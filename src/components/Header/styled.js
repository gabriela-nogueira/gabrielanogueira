import styled from 'styled-components'
import { Link } from "gatsby"
import { Menu } from "@styled-icons/entypo/Menu"

export const HeaderWrapper = styled.div`
    height: 60px;
    width: 100%;
    background-color: #30475e;
`

export const TitleWrapper = styled.div`
    padding-left:5%;
    padding-top:1%;
    height: 60px;

    @media only screen and (max-width: 860px) {
        padding-top:4%;
        margin-left:22%;
    }
`

export const MenuLateral = styled(Menu)`
    visibility:hidden;
    display: none;
    
    @media only screen and (max-width: 620px) {
        color:white;
        visibility: visible;
        display:inline;
        width:80px;
        height:80px;
        position:absolute;
        right:0;
        top:-10px;
    }

    @media only screen and (max-width: 860px) and  (min-width:621px) {
        color:white;
        float:right;
        visibility: visible;
        display:inline;
        width:80px;
        height:80px;
        position:absolute;
        right:0;
        top:-10px;
    }
`


export const Title = styled(Link)`
  
@media only screen and (max-width: 620px) {
    margin-left:-5%;
}

@media only screen and (max-width: 860px) and  (min-width:621px) {
    margin-left:10%;
}
    
`

export const Letra = styled(Link)`
    font-size:200%;
    font-family: 'Zilla Slab Highlight', cursive;
    text-decoration:none;
    color:white;

    @media only screen and (max-width: 860px) {
        margin-left:5%;
    }
`

export const Letra2 = styled(Link)`
    font-size:200%;
    font-family: 'Zilla Slab', serif;
    text-decoration:none;
    color:white;
`

export const Navigation = styled.div`
    font-size:100%;
    font-family:'Inter', sans-serif;
    position:relative;
    display:inline;
    padding-left: 2%;
    margin-top:5%;

    @media only screen and (max-width: 620px) {
        width:100%;
        margin-top:13%;
        margin-left:-20%;
        display:inline-block;        
    }
    
    @media only screen and (max-width: 860px) and  (min-width:621px) {
        width:100%;
        margin-top:10%;
        display:inline-block;
        }
`

export const Inicio = styled.div`
    color:#e05275;
    display:inline;
    padding-right:0.5%;
    
    @media only screen and (max-width: 860px) {
        visibility:hidden;
        display: none;
    }
`

export const Pagina = styled(Link)`
    display:inline;
    text-decoration:none;
    color:white;
    padding-left: 0.5%;
    transition: 1s;
    

    :hover {
        color: #f05454;
        transition-duration: 1s;

    }

    .active {
        color:green;
    }

    @media only screen and (max-width: 860px) {
        margin-left:1%;
        padding:1.4%;
        background-color: #30475e;
        border-radius:20px;
        font-size:90%;
    }
`

export const CD = styled.div`
    color:white;
    display:inline;

    @media only screen and (max-width: 860px) {
        visibility:hidden;
        display: none;
    }
`

export const Pisca = styled.div`
    animation: blinker 1s linear infinite;
    display:inline;

    @keyframes blinker {
        50% {
        opacity: 0;
        }
    }
`