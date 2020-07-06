import styled from 'styled-components';

export const Container = styled.aside`
    width: 15%;
    background-color: #121212;
    color: #b3b3b3;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div{
        padding-left: 10%;
    }
    max-height: 557px;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 1.5px #fff; 
        background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #555;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #888;
    }
`;

export const Nav = styled.ul`
    list-style: none;
    margin-top: 10%;

    &:first-child{
        margin-top: 0%;
    }
    li{
       
        a{
            color: inherit;
            text-decoration: none;
            font-size: 13px;
            line-height: 32px;

            &:hover{
                color: #fff;
            }
        }

        span{
            font-size: 16px;
            text-transform: uppercase;
            line-height: 22px;
            letter-spacing: 1.11px;
            font-weight: 300;
            color: #696969;
        }
    }
`;

export const NewPlayList = styled.button`
    width: 100%;
    background: transparent;
    border: 0;
    border-top: 1px solid #282828;
    font-size: 13px;
    color: #b3b3b3;
    display: flex;
    align-items: center;
    padding: 15px 15px;
    
    &:hover {
        color: #FFF;
    }

    img{
        margin-right: 10%;
    }
    
`;
