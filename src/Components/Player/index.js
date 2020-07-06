import React, { useState } from 'react';
import Sound from 'react-sound';
import Slider from 'rc-slider';
import { Container, Current, Volume, Progress, Controls, Time, ProgressSlider, RepeteOn } from './style';
import VolumeIcon from '../../Assets/assets/images/volume.svg';
import ShuffleIcon from '../../Assets/assets/images/shuffle.svg';
import BackwardIcon from '../../Assets/assets/images/backward.svg';
import PlayIcon from '../../Assets/assets/images/play.svg';
import PauseIcon from '../../Assets/assets/images/pause.svg';
import ForwardIcon from '../../Assets/assets/images/forward.svg';
import RepeatIcon from '../../Assets/assets/images/repeat.svg';
import 'rc-slider/assets/index.css';
import { useSelector, useDispatch } from 'react-redux';
import { Creators } from '../../Store/Ducks/Playlist/PlayerReducer';

export default function Player() {   
    const { player, duration, position, positionShow, progress } = useSelector(store => ({ player: store.Player, 
                                           duration: MsToTime(store.Player.duration), 
                                           position: MsToTime(store.Player.position),
                                           progress: parseInt((store.Player.position) * (1000 / store.Player.duration), 10) || 0}));
    const dispatch = useDispatch();

    function MsToTime(duration) {
        if(!duration) return null;
        let seconds = parseInt((duration / 1000) % 60, 10);
        let minutes = parseInt(((duration / (1000 * 60)) % 60), 10);
        seconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutes}:${seconds}`;
    }

    return (
        <>
            <Container>
                {
                    player.currentSong && (
                        <Sound url={player.currentSong.file}
                            playStatus={player.status}
                            onFinishedPlaying={() => player.repeat ? dispatch(Creators.LoadPlayer(player.currentSong, player.list)) : dispatch(Creators.Next(true))}
                            position={position}
                            volume={player.volume}
                            onPlaying={value => player.status !== Sound.status.PAUSED && dispatch(Creators.Playing(value))} />
                    )
                }
                <Current>
                    {
                        !!player.currentSong.id && (
                            <>
                                <img src={player.currentSong.thumbnail} alt={player.currentSong.title} />
                                <div>
                                    <span>{player.currentSong.title}</span>
                                    <small>{player.currentSong.author}</small>
                                </div>
                            </>
                        )
                    }

                </Current>
                <Progress>
                    <Controls repeat={player.repeat} >
                        <button><img src={ShuffleIcon} alt="ShuffleIcon" /></button>
                        <button onClick={() => !!player.currentSong.id && dispatch(Creators.Prev())}><img src={BackwardIcon} alt="Shuffle" /></button>
                        {
                            !!player.currentSong && player.status === Sound.status.PLAYING ?
                                <button onClick={() =>!!player.currentSong.id && dispatch(Creators.Pause())}><img src={PauseIcon} alt="PlayIcon" /></button>
                                :
                                <button onClick={() => !!player.currentSong.id && dispatch(Creators.Play())}><img src={PlayIcon} alt="PlayIcon" /></button>
                        }
                        <button onClick={() => !!player.currentSong.id && dispatch(Creators.Next())}><img src={ForwardIcon} alt="ForwardIcon" /></button>
                        <button  id="btnRepeat" repeat={player.repeat} onClick={() => !!player.currentSong.id && dispatch(Creators.Repeat())}><img src={RepeatIcon} alt="RepeatIcon" /></button>
                    </Controls>
                    <Time>
                        <span>{positionShow || position}</span>
                        <ProgressSlider>
                            <Slider
                                railStyle={{ background: '#404040', borderRadius: 10 }}
                                trackStyle={{ background: '#1ED760' }}
                                max={1000}
                                handleStyle={{ border: 0 }}
                                value={progress}
                                 />
                        </ProgressSlider>
                        <span>{duration}</span>
                    </Time>
                </Progress>
                <Volume>
                    <img src={VolumeIcon} alt="Volume ícone" />
                    <Slider
                        railStyle={{ background: '#404040', borderRadius: 10 }}
                        trackStyle={{ background: '#1ED760' }}
                        handleStyle={{ border: 0 }}
                        onChange={value => dispatch(Creators.Volume(value))}
                        value={player.volume} />
                </Volume>
            </Container>
        </>
    );
}