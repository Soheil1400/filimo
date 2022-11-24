import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import Image from 'next/image'

import {ReactNode, useState} from "react";

import Logo from '../../assest/image/fa-filimo-dark-logo.png'
import {movieTypes} from "../../data/movieTypes";

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
    const [display, setDisplay] = useState<boolean>(false)
    return (
        <Grid>
            <Grid container width={'100%'} height={50} sx={{background: 'rgba(0,0,0,.8)'}}>
                <Grid container item xs={8} alignItems={'center'}>
                    <Grid display={'flex'} item xs={1.5} justifyContent={'center'}>
                        <Image src={Logo} alt={'logo'} width={80} height={25}/>
                    </Grid>
                    <Grid display={'flex'} item xs={1} justifyContent={'center'} height={'50%'} alignItems={'center'}>
                        <Divider sx={{backgroundColor: '#E0E0E0'}} orientation="vertical" variant="middle"/>
                    </Grid>
                    <Grid display={'flex'} item alignItems={'center'} height={'100%'} position={'relative'}
                          onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
                        <Grid display={'flex'}
                              sx={{cursor: 'pointer', color: 'common.white', '&:hover': {color: '#f9ad03'}}}>
                            <Typography>
                                فیلم
                            </Typography>
                            <KeyboardArrowDownRoundedIcon/>
                        </Grid>
                        <Grid width={250} height={"auto"} bgcolor={'common.black'} display={display ? 'flex' : 'none'}
                              position={'absolute'} top={40} right={0} borderRadius={2} color={'common.white'}
                              onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)}>
                            <Grid container p={1}>
                                {movieTypes.map( m => (
                                    <Grid item xs={6} key={m.id}>
                                        <Typography sx={{cursor: 'pointer', color: 'common.white', '&:hover': {color: '#f9ad03'}}}>
                                            {m.title}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid display={'flex'} item xs={4} justifyContent={'flex-end'}>
                    <Grid display={'flex'} alignItems={'center'} ml={2} sx={{cursor: 'pointer'}}>
                        <Avatar sx={{width: 30, height: 30}}>
                            <PersonRoundedIcon/>
                        </Avatar>
                        <KeyboardArrowDownRoundedIcon sx={{color: '#E0E0E0'}}/>
                    </Grid>
                </Grid>
            </Grid>
            {children}
        </Grid>
    )
}

export default Layout