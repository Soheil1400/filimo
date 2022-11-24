import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MokhtarName from '../../assest/image/1281456_307.jpg'
import Image from 'next/image'

const MovieCard = () => {
    return (
        <Grid item xs={3} height={300} borderRadius={1} p={1}>
            <Grid position={'relative'}>
                <Image style={{width: '100%', height: '100%', borderRadius: '4px'}} src={MokhtarName}
                       alt={'مختار جان'}/>
                <Grid position={'absolute'} top={0} bgcolor={'common.black'} width={'100%'} height={'100%'}
                      sx={{opacity: '0', '&:hover': {opacity: '0.6'}}}>
                    <Grid p={2}>
                        <Grid display={'flex'}>
                            <Grid width={30} height={30} bgcolor={'red'} sx={{borderRadius: '0 10px 10px 0'}}>
                                لایک
                            </Grid>
                            <Grid width={30} height={30} bgcolor={'blue'} sx={{borderRadius: '10px 0 0 10px'}}>
                                محبوبیت
                            </Grid>
                        </Grid>
                        <Grid color={'common.white'}>
                            <Typography>
                                مختارنامه
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MovieCard