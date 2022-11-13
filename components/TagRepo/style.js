import styled from "styled-components";


export const Tag = styled.div`
    @keyframes loader {
        from{opacity: 0.5; margin-top: 16px;}
        to{opacity: 1; margin-top:0;}
        
    }
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 300px;
    animation: loader 1s;
    height: 116px;
    justify-content: center;
    a{
        text-decoration: none;
        color: blue;
    }
    #btnVerMais{
        color: #aaf;
        position: absolute;
        right: 32px;
        top: 48px;
    }
    #btnRemover{
        background-color: transparent;
        border: 1px solid red;
        cursor: pointer;
        padding: 2px 4px;
        color: red;
        position: absolute;
        right: 32px;
        top: 0;
    }
    hr{
        margin-top: 24px;
        width: 600px;
        margin-left: -16px;
    }
`