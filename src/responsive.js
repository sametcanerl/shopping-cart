import { css } from "styled-components"


export const sm = (props)=>{
    return css` 
    @media only screen and (max-width:576px){
        ${props}
    }
    `
}