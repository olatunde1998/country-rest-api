
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';




const Country = () => {
  const {id} = useParams()
  const baseURL = "https://restcountries.com/v3.1/all";


  const [posts, setPosts] = useState();
  // const {data} = await APIRequest.get(`/users/${id}`)


  useEffect(() => {
    axios.get(baseURL).then((response) => {
        const data = response.data

        setPosts(data.filter((data) => data.name.common === id ))

    //   setPosts(response.data);

    });
  }, []);
  console.log("posts==========", posts)
  return (
    <div>
      <h3>Country: <span style={{color:"red", marginLeft:"20px"}}>{id}</span></h3>
      {posts &&
        posts.map((post, id) => (
            <Grid key={id} container spacing={2}>
              <Grid item>
                <Typography>{post.name.common}</Typography>
              </Grid>
              <Grid item>
                <Typography>{post.name.official}</Typography>
              </Grid>
              <Grid item>
                <Typography>{post.flags.png}</Typography>
              </Grid>
              <Grid item>
                <img src={post.flags.png} alt="google map" />
              </Grid>
            </Grid>
        ))}
    </div>
  );
};

export default Country;