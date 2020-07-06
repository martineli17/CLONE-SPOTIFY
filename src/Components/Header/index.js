import React from 'react';
import { Container, Search, User } from './style';
export default function Header() {
    return (
        <>
            <Container>
                <Search>
                    <input placeholder="Pesquise"/>
                </Search>

                <User>
                    <img alt="Avatar" src="https://avatars2.githubusercontent.com/u/2254731?v=4"/>
                </User>
            </Container>
        </>
    );
}