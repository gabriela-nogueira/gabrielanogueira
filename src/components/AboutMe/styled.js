import styled from 'styled-components'
import Img from 'gatsby-image'

export const Wrapper = styled.div`
    width:90%;
    margin: auto;
    margin-top:3%;
    position: relative;
`

export const Title = styled.div`
    font-size:200%;
    color:white;
    font-family: 'Zilla Slab Highlight', cursive;
    padding-bottom: 3%;
    margin-left:2%;
`

export const MyHistory = styled.div`
    float:left;
    color:white;
    font-family: 'Zilla Slab', serif;
    width:95%;
    margin:auto;
    font-size:120%;
    text-align: justify;
    margin-left:2%;
`

export const Image = styled(Img)`
    float:right;
    width:20%;
`

export const Link = styled.a`
    color:#e05275;
    text-decoration:none;
`