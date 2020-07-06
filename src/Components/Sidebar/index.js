import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Creators } from '../../Store/Ducks/Playlist/PlaylistReducer';
import { Container, NewPlayList, Nav } from './style';
import NewPlayListIcon from '../../Assets/assets/images/add_playlist.svg';
import { Link } from 'react-router-dom';


export default function SideBar() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Creators.GetPlaylistRequest());
    }, [dispatch]);

    const playlists = useSelector(store => store.Playlist);
   

    return (
        <Container>
            <div className="divNavs">
                <Nav>
                    <li><Link to="/">Navegar</Link></li>
                    <li><a href="s">Rádio</a></li>
                </Nav>
                <Nav>
                    <li><span>SUA BIBLIOTECA</span></li>
                    <li><a href="">Seu Daily Mix</a></li>
                    <li><a href="">Tocadas recentements</a></li>
                    <li><a href="">Músicas</a></li>
                    <li><a href="">Álbuns</a></li>
                    <li><a href="">Artistas</a></li>
                    <li><a href="">Estações</a></li>
                    <li><a href="">Vídeos</a></li>
                    <li><a href="">Podcasts</a></li>
                </Nav>
                <Nav>
                    <li><span>Playlist</span></li>
                    {
                        playlists && (
                            playlists.data.map(playlist => (
                                <li key={playlist.id}><Link to={`playlists/${playlist.id}`}>{playlist.title}</Link></li>
                            )))
                    }
                </Nav>
            </div>
            <NewPlayList>
                <img src={NewPlayListIcon} alt="Nova playlist" />
                Nova playlist
            </NewPlayList>
            
        </Container>
    );

}