import styled from 'styled-components';

export const Container = styled.div`
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #282828;
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 25px;
`;

export const Current = styled.div`
    width: 220px;
    display: flex;
    align-items: center;
    
    img{
        width: 48px;
        height: 48px;
        border: none;
    }

    div{
        margin-left: 12px;
        display: flex;
        flex-direction: column;

        span{
            font-size: 13px;
            color: #fff;
        }
        small{
            font-size: 11px;
            color: #b3b3b3;
            margin-top: 5px;
        }
    }
`;

export const Volume = styled.div`
    display: flex;
    align-items: center;
    width: 100px;
    margin-right: 5%;

    img{
        margin-right: 1%;
    }
`;

export const Progress = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Controls = styled.div`
    display: flex;
    align-items: center;

    button{
        background: transparent;
        border: 0;
        margin: 15px;
    }

    #btnRepeat{
        background-color: ${props => props.repeat ? "green" : "transparent"};
        height: 15px;
        width: 25px;
        border-radius: 100px 100px;

        img{
            margin-top: 2px;
        }
    }
`;

export const Time = styled.div`
    display: flex;
    align-items: center;
    span{
       font-size: 11px;
       color: #b3b3b3;
    }
`;

export const ProgressSlider = styled.div`
   width: 500px;
   margin: 0 15px;
`;