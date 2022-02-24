import { useState, useEffect, useRef } from 'react';

import noPoster from '../assets/images/default-movie.png';

function SearchMovies() {

	/* const movies = [
		{
			"Title": "Parchís",
			"Year": "1983",
			"Poster": "https://m.media-amazon.com/images/M/MV5BYTgxNjg2MTAtYjhmYS00NjQwLTk1YTMtNmZmOTMyNTAwZWUwXkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_SX300.jpg"
		},
		{
			"Title": "Brigada en acción",
			"Year": "1977",
			"Poster": "N/A"
		},
	]; */

	// Credenciales de API
	const apiKey = '92ffcc19'; // Intenta poner cualquier cosa antes para probar

	const [movies, setMovies] = useState([]);
	const [keyword, setKeyword] = useState('action');
	const form = useRef();
	const input = useRef();

	useEffect(() => {
		fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)

			.then(response => response.json())
			.then(data =>
				setMovies(data.Search)
			)
			.catch(err => {
				console.log(err);
			})
	}, [search]);

	function search(e) {
		e.preventDefault()
		setKeyword(input.current.value)
	}


	return (
		<div className="container-fluid">
			{
				apiKey !== '' ?
					<>
						<div className="row my-4">
							<div className="col-12 col-md-6">
								{/* Buscador */}
								<form method="GET" ref={form} onSubmit={search}>
									<div className="form-group">
										<label htmlFor="">Buscar por título:</label>
										<input type="text" className="form-control" ref={input} />
									</div>
									<button className="btn btn-info">Search</button>
								</form>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<h2>Películas para la palabra: {keyword}</h2>
							</div>
							{/* Listado de películas */}
							{
								movies && movies.length > 0 ? movies.map((movie, i) => {
									return (
										<div className="col-sm-6 col-md-3 my-4" key={i}>
											<div className="card shadow mb-4">
												<div className="card-header py-3 text-center" style={{ height: '60px' }}>
													<h5 className="m-0 mh-90 font-weight-bold text-gray-800 text-truncate" style={{ display: 'block' }} title={movie.Title} >{movie.Title}</h5>
												</div>
												<div className="card-body">
													<div className="text-center" style={{ height: '250px' }}>
														<img
															className="img-fluid mb-4 mh-100 mw-100"
															src={movie.Poster !== "N/A" ? movie.Poster : noPoster}
															alt={movie.Title}
															style={{ objectFit: 'cover' }}
														/>
													</div>
													<p>{movie.Year}</p>
												</div>
											</div>
										</div>
									)
								})

								: <div className="alert alert-warning text-center w-100">No se encontraron películas</div>
							}
						</div>
					</>
					:
					<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
			}
		</div>
	)
}

export default SearchMovies;
