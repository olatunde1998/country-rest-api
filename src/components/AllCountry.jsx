// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );
// const baseURL = "https://jsonplaceholder.typicode.com/posts";

// export default function AllCountry() {
//   const baseURL = "https://restcountries.com/v3.1/all";

//   const [posts, setPosts] = useState();

//   useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPosts(response.data);
//     });
//   }, []);
//   // console.log("=======posts======", posts);
//   return (
//     <div>
//       <div>This is my cards</div>
//       <div>
//         {posts && posts.map((post,id)=>(
//             <Link key={post.name.common} to={`/allcountry/${post.name.common}`}>
//             <Card sx={{ minWidth: 275 }}>
//               <CardContent>
//                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                 {post.title}
//                 </Typography>
//                 <Typography variant="h5" component="div">
//                   be{bull}nev{bull}o{bull}lent
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                   adjective
//                 </Typography>
//                 <Typography variant="body2">
//                  {post.body}
//                   <br />
//                   {'"a benevolent smile"'}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//             </Link>

//         ))}
//       </div>
//     </div>
//   );
// }

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function AllCountry() {
  const baseURL = "https://restcountries.com/v3.1/all";

  const [posts, setPosts] = useState();

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
    });
  }, []);
  return (
    <div>
      <div className="border-2 border-red-800">This is a cards</div>
      <Grid container  className="border-2 border-blue-700 mx-[auto] justify-center xl:max-w-[1440px] mx-auto">
        {posts &&
          posts.map((post, id) => (
            <Link key={post.name.common} to={`/allcountry/${post.name.common}`}>
              <Grid item sx={{margin:"10px"}}>
              <Card sx={{ maxWidth: 300, border:"2px solid green"}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={post.flags.png}
                    alt="green iguana"
                    sx={{border:"2px solid red",maxHeight:"160px"}}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {/* country name */}
                      {post.name.common}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {/* population, region, capital */}
                      Population:{post.population}<br/>
                      Region:{post.region}<br/>
                      Capital:{post.capital}
                    </Typography>
                  
                  </CardContent>
                </CardActionArea>
              </Card>
              </Grid>
            </Link>
          ))}
      </Grid>
    </div>
  );
}

// import { Grid, Typography } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';

// // const baseURL = "https://restcountries.com/v3.1/all";

// const Dashboard = () => {
//   const {id} = useParams()

//   // const [posts, setPosts] = useState();
//   // const {data} = await APIRequest.get(`/users/${id}`)

//   // useEffect(() => {
//   //   axios.get(`baseURL/users/${id}`).then((response) => {
//   //     setPosts(response.data);
//   //   });
//   // }, []);
//   return (
//     <div>
//       <h3>Dashboard dynamic route</h3>
//       {/* {posts &&
//         posts.map((post, id) => ( */}
//             <Grid key={id} container spacing={2}>
//               <Grid item>
//                 <Typography>{id}</Typography>
//               </Grid>
//               <Grid item>
//                 <Typography>{id}</Typography>
//               </Grid>
//               <Grid item>
//                 <Typography>{id}</Typography>
//               </Grid>
//               <Grid item>
//                 <img src="https://goo.gl/maps/bbGBCxxtfD2A9Z4m6" alt="google map" />
//               </Grid>
//             </Grid>
//         {/* ))} */}
//     </div>
//   );
// };

// export default Dashboard;
