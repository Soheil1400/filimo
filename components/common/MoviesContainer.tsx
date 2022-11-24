import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import {ReactNode} from "react";

interface MoviesContainerPropsType {
    title: string,
    children: ReactNode
}

const MoviesContainer = ({title, children}: MoviesContainerPropsType) => {
    return (
        <Grid container>
            <Grid display={'flex'} item xs={12} justifyContent={'space-between'}>
                <Grid>
                    <Typography fontWeight={'bold'}>
                        {title}
                    </Typography>
                </Grid>
                <Grid display={'flex'} color={'error.main'} sx={{cursor:'pointer'}}>
                    <Typography>
                        مشاهده همه
                    </Typography>
                    <KeyboardArrowLeftRoundedIcon/>
                </Grid>
            </Grid>
            <Grid container>
                {children}
            </Grid>
        </Grid>
    )
}

export default MoviesContainer