import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css';
import Button from '@mui/material/Button';
import * as types from '../src/redux/actionsTypes'
import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function App() {
  const [search,setSearch]=useState('')
  const [query,setQuery]=useState('')
  const dispatch=useDispatch();
  const {recipe}=useSelector(state=>state.data)
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const updateSearch=()=>{
    setQuery(search)
    setSearch("")
  }
  useEffect(()=>{
dispatch({type:types.FETCH_RECIPE_START,query})
  },[dispatch, query])
  return (
    <div className="App">
           <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    > 
      <TextField onChange={(e)=>setSearch(e.target.value)} id="standard-basic" label="Search your recipe" variant="standard" type='text' value={search} />
      <Button onClick={updateSearch} style={{marginTop:'20px'}} variant="contained">Search</Button>
    </Box>
    <div style={{display:'flex'}}>
    {recipe&&recipe?.hits?.map(data=>{ 
  return <Card sx={{ maxWidth: 345 }} style={{margin:'20px',padding:'20px'}}>
      <CardHeader
        title={data.recipe.label}
        subheader={data.recipe.source}
      />
      <CardMedia
        component="img"
        height="194"
        image={data.recipe.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         <ul>
          {data.recipe.ingredientLines.map(ingre=>{
            return <li style={{textAlign:'left'}}>{ingre}</li>
          })}
         </ul>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
})}
    </div>

    </div>
  );
}

export default App;
