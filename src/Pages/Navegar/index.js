import React from 'react';
import { Container, Title, Playlist, List } from './style';
import { useSelector } from 'react-redux';
import Loading from '../../Components/Loading/index';

export default function Navegar() {
    const playlists = useSelector(store => store.Playlist);

    return (
        <>
            <Container>
                <Title>Navegar</Title>
                <List>
                    {
                        playlists.data && (playlists.data.map(playlist => (
                            <Playlist to={`playlists/${playlist.id}`}>
                                <img alt={playlist.title} src={playlist.thumbnail} />
                                <strong>{playlist.title}</strong>
                                <p>{playlist.description}</p>
                            </Playlist>
                        )))
                    }
                </List>
            </Container>
            <Loading status={playlists.loading} />
        </>
    );
}