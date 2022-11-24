import Grid from "@mui/material/Grid";

import MoviesContainer from "../components/common/MoviesContainer";
import MovieCard from "../components/common/MovieCard";

export default function Home() {
    return (
        <Grid container p={2}>
            <MoviesContainer title={'ویژه'}>
                <MovieCard/>
                <MovieCard/>
            </MoviesContainer>
            <MoviesContainer title={'تازه ها'}>
                <Grid>
                    bye
                </Grid>
            </MoviesContainer>
        </Grid>
    )
}
