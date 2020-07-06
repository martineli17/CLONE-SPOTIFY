import React from 'react';
import SideBar from './Components/Sidebar/index';
import Player from './Components/Player/index';
import Header from './Components/Header/index';
import './Styles/Global/style.css';
import { Container, Wrapper, Content } from './Styles/Components/style.js';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './Routes/index';
import store from './Store/Base/index';
import { Provider } from 'react-redux';
import Error from './Components/Error/index';
import { SnackbarProvider } from 'notistack';

function App() {

  return (
    <>
      <Provider store={store}>
        <SnackbarProvider maxSnack={3}>
          <BrowserRouter>
            <Error />
            <Wrapper>
              <Container>
                <SideBar />
                <Content>
                  <Header />
                  <Rotas />
                </Content>
              </Container>
              <Player />
            </Wrapper>
          </BrowserRouter>
        </SnackbarProvider>
      </Provider>
    </>
  );
}

export default App;
