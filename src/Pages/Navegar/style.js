import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    flex: 1;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.div`
    font-size: 45px;
    margin-left: 20px;
`;

export const List = styled.div`
    margin-top: 20px;
    display: flex;
    max-width: 1140px;
    overflow: auto;
    ::-webkit-scrollbar {
    height: 15px;
    
}

/* Track */
    ::-webkit-scrollbar-track {
        border-top: 1px solid #555;
        border-bottom: 1px solid #555;
        background: transparent;
        margin-left: 10px;
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

export const Playlist = styled(Link)`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    width: 250px;
    text-decoration: none;

    img{
        height: 250px;

        &:hover{
            opacity: 0.7;
        }
    }

    strong{
        font-size: 13px;
        margin-top: 10px;
        color: #fff;
    }

    p{
        line-height: 22px;
        margin-top: 5px;
        font-size: 13px;
        color: #b3b3b3;
    }
`;