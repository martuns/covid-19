import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'loading...';
    }
    
    
    return (
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom >Infectados</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={3} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Numero de casos activos del COVID-19</Typography>
                   </CardContent>
               </Grid>

               <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)} >
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom >Recuperados</Typography>
                       <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Numero de casos recuperados del COVID-19</Typography>
                   </CardContent>
               </Grid>

               <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)} >
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom >Fallecidos</Typography>
                       <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Cantidad de personas fallecidas a causa del COVID-19</Typography>
                   </CardContent>
               </Grid>


           </Grid>

       </div>
    )
}

export default Cards;