import React, { Component } from 'react';
import {getMovies} from '../../resources/fakeMovieService';
import MovieTable from './MovieTable/MovieTable';
import {paginate} from '../../utils/paginate';


class Movies extends Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage:1
    };
    componentDidMount(){
        this.setState({movies:getMovies()})
    }

    deleteButtonEventHandler = (m)=>{
        const movies = this.state.movies.filter(movie=> movie._id !== m._id );
        this.setState({movies});
    }
    likeEventHandler = (m)=>{
        const movies = [...this.state.movies];
        const index = movies.indexOf(m);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});

    }
    onPageChangeHandler = (page)=>{
        this.setState({currentPage:page})
    }
    render() {  

        const movies = paginate(this.state.movies,this.state.currentPage,this.state.pageSize);
        return (
            <div>
                {
                    this.state.movies < 1 ? <h2>There are no movies in the database </h2> : <h2> Number of movies in the database: {this.state.movies.length}</h2>
                }
        
                <MovieTable
                    onDelete = {this.deleteButtonEventHandler}
                    movies = {movies}
                    onLike = {this.likeEventHandler}
                    pageSize = {this.state.pageSize}
                    items = {this.state.movies.length}
                    onPageChange = {this.onPageChangeHandler}
                    currentPage = {this.state.currentPage}
                />
                
            </div>
        );
    }
}

export default Movies;