import styled from 'styled-components'
import { Github } from '@styled-icons/boxicons-logos/Github'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'

export const Wrapper = styled.div`
    width:100%;
    height: 55px;
    background-color: #30475e;
    margin:0;
    font-size:110%;
    font-family: 'Zilla Slab', serif;
    left: 0;
    bottom: 0;
    position:absolute;
`

export const Data = styled.div`
    float:left;
    color:white;
    margin-left:5%;
    margin-top:1.5%;
`

export const SocialMedia = styled.div`
    float:right;
    color:white;
    margin-right:6%;
    margin-top:0.5%;
`

export const GitIcon = styled(Github)`
    color:white;
    width:40px;
    height:40px;
`

export const LinkedinIcon = styled(LinkedinSquare)`
    color:white;
    width:40px;
    height:40px;
`

export const InstaIcon = styled(Instagram)`
    color:white;
    width:40px;
    height:40px;
`

