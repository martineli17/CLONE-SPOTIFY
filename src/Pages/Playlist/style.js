import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 30px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;

    img{
        width: 220px;
        height: 220px;
    }

    div{
        margin-left: 20px;

        span{
            font-size: 11px;
            letter-spacing: 1.11px;
            font-weight: 300;
        }

        h1{
            margin-top: 10px;
            font-size: 48px;
        }

        p{
            margin-top: 0;
            color: #b3b3b3;
            font-size: 11px;
            letter-spacing: 1.11px;
            text-transform: uppercase;
        }

        button{
            background-color: #1db854;
            height: 32px;
            border-radius: 16px;
            color: #fff;
            line-height: 32px;
            padding: 0 35px;
            border: 0;
            font-weight: bold;
            margin-top: 20px;
            font-size: 12px;
            letter-spacing: 1.11px;

            &:hover{
                opacity: 0.8;
            }
        }
    }
`;

export const CointerSoungList = styled.div`
    max-height: 250px;
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

export const SongList = styled.table`
    width: 100%;
    text-align: left;
    margin-top: 20px;
    max-height: 200px;
    overflow: auto;

    thead th{
        font-size: 11px;
        color: #b3b3b3;
        letter-spacing: 1.11px;
        font-weight: normal;
        text-transform: uppercase;
        padding: 5px 10px;

        &:last-child{
            text-align: right;
        }
    }

    tbody td{
        font-size: 13px;
        border-top: 1px solid #282828;
        font-weight: 13px;
        padding: 0 10px;
        line-height: 40px;

        &:first-child{
            width: 80px;
            text-align: center;
        }

        &:last-child{
            text-align: right;
        }
    }

    tbody tr:hover td{
        background-color:  #282828;
    }
`;

export const SongItem = styled.tr`
    td{
        font-size: 13px;
        border-top: 1px solid #282828;
        font-weight: 13px;
        padding: 0 10px;
        line-height: 40px;
        background-color: ${props => props.selected ? "#282828" : "transparent"};
        color: ${props => props.songPlaying ? "#1ED760" : "#b3b3b3"};

        &:first-child{
            width: 80px;
            text-align: center;
        }

        &:last-child{
            text-align: right;
        }
    }

    &:hover td{
        background-color:  #282828;
    }
`;
