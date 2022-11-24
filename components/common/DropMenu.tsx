import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";


import {useState} from "react";
import {movieType} from "../../model/movieType";

interface DropMenuPropsType {
    title: string,
    data: movieType[]
}

const DropMenu = ({title, data}: DropMenuPropsType) => {
    const [display, setDisplay] = useState<boolean>(false)

    return(
        <Grid width={100} display={'flex'} item alignItems={'center'} height={'100%'} position={'relative'}
              onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
            <Grid display={'flex'}
                  sx={{cursor: 'pointer', color: 'common.white', '&:hover': {color: '#f9ad03'}}}>
                <Typography>
                    {title}
                </Typography>
                <KeyboardArrowDownRoundedIcon/>
            </Grid>
            <Grid width={250} height={"auto"} bgcolor={'common.black'} display={display ? 'flex' : 'none'}
                  position={'absolute'} top={40} right={0} borderRadius={2} color={'common.white'} zIndex={99}
                  onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
                <Grid container p={1}>
                    {data.map( m => (
                        <Grid item xs={6} key={m.id}>
                            <Typography sx={{cursor: 'pointer', color: 'common.white', '&:hover': {color: '#f9ad03'}}}>
                                {m.title}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DropMenu