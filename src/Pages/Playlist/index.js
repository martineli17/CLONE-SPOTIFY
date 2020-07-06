import React, { useEffect, memo } from 'react';
import { Container, Header, SongList, CointerSoungList, SongItem } from './style';
import IconClock from '../../Assets/assets/images/clock.svg';
import IconPlus from '../../Assets/assets/images/plus.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Creators as CreatorsPlaylistDetails} from '../../Store/Ducks/Playlist/PlaylistDetailsReducer';
import { Creators as CreatorsPlayer} from '../../Store/Ducks/Playlist/PlayerReducer';
import Loading from '../../Components/Loading/index';
import { useState } from 'react';

function Playlist() {
    const [songSelected, setSongSelected] = useState(String);
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(CreatorsPlaylistDetails.GetRequestPlaylistDetails(id));
    }, [id])
    const {playlist, currentSong} = useSelector(store => ({playlist: store.PlaylistDetails, currentSong: store.Player.currentSong}));
    return (
        <>
            <Container>
                <Header>
                    <img alt={playlist.data.title} src={playlist.data.thumbnail} />
                    <div>
                        <span>PLAYLIST</span>
                        <h1>{playlist.data.title}</h1>
                        <p>{playlist.data.songs && playlist.data.songs.length}</p>
                        <button>Play</button>
                    </div>
                </Header>
                <CointerSoungList>
                    <SongList cellSpacing={0} cellPadding={0}>
                        <thead>
                            <th></th>
                            <th>Título</th>
                            <th>Artista</th>
                            <th>Álbum</th>
                        </thead>
                        <tbody>
                            {
                                playlist.data.songs ? (playlist.data.songs.map(song => (
                                    <SongItem songPlaying={currentSong && currentSong.id === song.id} 
                                    selected={songSelected === song.id} onClick={() => setSongSelected(song.id)} 
                                    key={song.id} 
                                    onDoubleClick={() => dispatch(CreatorsPlayer.LoadPlayer(song, playlist.data.songs))}>
                                        <td><img src={IconPlus} alt="IconPlus" /></td>
                                        <td>{song.title}</td>
                                        <td>{song.author}</td>
                                        <td>{song.album}</td>
                                    </SongItem>
                                ))) :
                                 (<tr>
                                     <td colSpan={3}>Nenhuma música encontrada para esta playlist</td>
                                 </tr>)
                            }
                        </tbody>
                    </SongList>
                </CointerSoungList>
            </Container>
            <Loading status={playlist.loading} />
        </>
    );
}
export default memo(Playlist);