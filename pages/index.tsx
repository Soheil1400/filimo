import Grid from "@mui/material/Grid";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import MoviesContainer from "../components/common/MoviesContainer";
import MovieCard from "../components/common/MovieCard";
import {GetStaticPropsContext} from "next";
import {api} from "../api/api";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import image1 from '../assest/image/flash35.jpg'
import image2 from '../assest/image/share.jpg'
import image3 from '../assest/image/image.jpg'
import image4 from '../assest/image/share.jpg'
import Image from 'next/image'
import {useCallback, useEffect, useRef, useState} from "react";
import {slides} from "../data/slides";

export default function Home({movies}: { movies: { image: string, rank: number }[] }) {
    const [page, setPage] = useState(0)
    const swiperRef = useRef<any>(null)

    const handleNextSlide = useCallback(() => {
        page === slides.length - 1 ? setPage(prev => 0) : setPage(prev => prev + 1)
    }, [page])

    const handlePrevSlide = useCallback(() => {
        page === 0 ? setPage(prev => slides.length - 1) : setPage(prev => prev - 1)
    }, [page])


    useEffect(() => {
        swiperRef.current.swiper.slideTo(page)
    }, [page])

    return (
        <Grid container p={2}>
            <Grid item xs={12}>
                <Swiper className="mySwiper" ref={swiperRef}>
                    {slides.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <Grid width={'100%'} height={400} position={'relative'}>
                                <Image style={{width: '100%', height: '100%'}} src={slide.image} alt={slide.title}/>
                                <Grid display={'flex'} bottom={50} left={80} position={'absolute'}>
                                    <Grid width={40} height={40} bgcolor={'common.black'} borderRadius={'50%'}
                                          color={'common.white'} display={'flex'} justifyContent={'center'}
                                          alignItems={'center'} sx={{cursor: 'pointer'}} onClick={handleNextSlide}>
                                        <ArrowForwardIosRoundedIcon/>
                                    </Grid>
                                    <Grid width={40} height={40} bgcolor={'common.black'} borderRadius={'50%'}
                                          color={'common.white'} display={'flex'} justifyContent={'center'}
                                          alignItems={'center'} sx={{cursor: 'pointer'}} onClick={handlePrevSlide}>
                                        <ArrowBackIosRoundedIcon/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Grid>
            <MoviesContainer title={'ویژه'} link={'/animation'}>
                <MovieCard image={image1} size={'Horizontal'}/>
                <MovieCard image={image2} size={'Horizontal'}/>
                <MovieCard image={image3} size={'Horizontal'}/>
                <MovieCard image={image4} size={'Horizontal'}/>
            </MoviesContainer>
            <MoviesContainer title={'تازه ها'} link={'drama'}>
                {movies.map( movie => <MovieCard image={movie.image} id={movie.rank} size={'Vertical'}/>)}
            </MoviesContainer>
        </Grid>
    )
}

export async function getStaticProps(context: GetStaticPropsContext) {
    const data = await api('/premiummovies')
    const movies = data.data
    return {
        props: {
            movies
        },
    }
}
