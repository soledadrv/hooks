import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import Chart from './Chart';
import SearchMovies from './SearchMovies';
import NotFound from './NotFound';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">

        <SideBar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">

            <TopBar />

            <Routes>
              <Route exact path='/' element={<ContentRowTop />} />
              <Route path='/lastmovie' element={<LastMovieInDb />} />
              <Route path='/genres' element={<GenresInDb />} />
              <Route path='/content' element={<Chart />} />
              <Route path='/search' element={<SearchMovies />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            
            <Footer />

          </div>
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;
