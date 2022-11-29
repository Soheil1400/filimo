import Grid from "@mui/material/Grid";
import {GetStaticPropsContext} from "next";
import {api} from "../../api/api";
import Image from 'next/image'

const MovieId = ({movie}: { movie: { image: string, title: string, year: number, rating: number } }) => {

    return (
        <Grid container>
            <Grid display={'flex'} item xs={12} height={450} py={2} justifyContent={'center'}>
                <Grid display={'flex'} width={'80%'}>
                    <Grid width={'20%'}>
                        <Image width={200} height={250} layout="" src={movie.image} alt={'movie'}/>
                    </Grid>
                    <Grid display={'flex'} flexDirection={'column'} width={'80%'} mt={3}>
                        <Grid>
                            {movie.title}
                        </Grid>
                        <Grid>
                            سال ساخت {movie.year}
                        </Grid>
                        <Grid>
                            امتیاز فیلم {movie.rating}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MovieId

export async function getStaticProps(context: GetStaticPropsContext) {
    const data = await api(`/premiummovies/top${context.params?.movieId}`)
    const movie = data.data
    return {
        props: {
            movie
        },
    }
}

export async function getStaticPaths() {
    const allData = await api('/premiummovies')
    const movies: { rank: number }[] = allData.data
    return {
        paths: movies.map(m => ({params: {movieId: m.rank.toString()}})),
        fallback: 'blocking',
    }
}

