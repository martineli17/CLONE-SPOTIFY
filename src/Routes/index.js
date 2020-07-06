import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Navegar from '../Pages/Navegar/index';
import Playlist from '../Pages/Playlist/index';
export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Navegar />}></Route>
            <Route path="/playlists/:id" element={<Playlist />}></Route>
            <Route path="*" element={<><h2 style={{ color: "red" }}>404 - NOT FOUND.</h2></>}></Route>
        </Routes>
    );
}