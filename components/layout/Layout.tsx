import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import Image from 'next/image'

import {ReactNode} from "react";

import Logo from '../../assest/image/fa-filimo-dark-logo.png'
import DropMenu from "../common/DropMenu";
import {movieTypes} from "../../data/movieTypes";
import {movieType} from "../../model/movieType";
import {seriesTypes} from "../../data/seriesTypes";

interface LayoutPropsType {
    children: ReactNode
}

interface dropMenuItemsType {
    id: number,
    title: string,
    data: movieType[]
}

const dropMenuItems: dropMenuItemsType[] = [
    {id: 1, title: 'فیلم', data: movieTypes},
    {id: 2, title: 'سریال', data: seriesTypes},
]

const Layout = ({children}: LayoutPropsType) => {
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
                    {dropMenuItems.map(dMI => <DropMenu title={dMI.title} data={dMI.data}/>)}
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