import React from 'react';
import NewsPost from "./NewsItem/newsPost";
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import RussianIcon from '../../images/russia.png';
import USAIcon from '../../images/united-states.png';
import UAIcon from '../../images/ukraine.png';
import  FranceIcon from '../../images/france.png';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        background:'none',
        border:'1px solid grey',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)'

    },
    container: {
        textAlign:'center',
    }
}));


let News = (props) => {
    console.log(props);
    let newsItem = props.newData. map(news =><NewsPost img ={news.urlToImage}
        author ={news.author} title={news.title} description={news.description}
    toInfo = {news.url} dataPub ={news.publishedAt}
    content ={news.content}

    />);
    let lang = (e)=>{
        props.giveNewNewsCountry(e.target.value);
    }
    const classes = useStyles();
    return <div className={classes.container}>

        <button onClick={lang} value="ua"
                 variant="contained"
                 color="primary"
                 size="medium"
                 className={classes.button}
                 startIcon={<SaveIcon />}
        ><img src={UAIcon} alt=""/><br></br>ua</button >
        <button  onClick={lang} value="us"
                 variant="contained"
                 color="primary"
                 size="small"
                 className={classes.button}
                 startIcon={<SaveIcon />}
        ><img src={USAIcon} alt=""/><br></br>en</button >
        <button   onClick={lang} value="ru"
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.button}
                  startIcon={<SaveIcon />}
        ><img src={RussianIcon} alt=""/><br></br>ru</button >
        <button   onClick={lang} value="fr"
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.button}
                  startIcon={<SaveIcon />}
        ><img src={FranceIcon} alt=""/><br></br>fr</button >

        {newsItem}

            </div>
}

export default News;