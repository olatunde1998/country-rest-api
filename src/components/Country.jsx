import { KeyboardBackspace } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";

const Country = () => {
  const { id } = useParams();
  const baseURL = "https://restcountries.com/v3.1/all";
  const [posts, setPosts] = useState();

  // const {data} = await APIRequest.get(`/users/${id}`)
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const data = response.data;
      setPosts(data.filter((data) => data.name.common === id));
      //   setPosts(response.data);
    });
  }, [id]);
  console.log("posts==========", posts);
  return (
    <div className="flex flex-col justify-center bg-[#202C37] h-screen text-[#FFFFFF]">
      <NavBar />
      <Link to="/">
        <div className="mt-[50px] mb-[80px] mx-[20px] max-w-[110px] bg-[#2B3945] p-2">
          <KeyboardBackspace /> Back
        </div>
      </Link>

      <Box
        sx={{
        
          marginRight: "20px",
          marginLeft: "20px",
        }}
      >
        {posts &&
          posts.map((post, id) => (
            <Grid key={id} container spacing={2}>
              <Grid item>
                <img src={post.flags.png} alt="google map" />
              </Grid>
              <Grid item>
                <Typography sx={{fontWeight:"800"}}>{post.name.common}</Typography>
                {/* <Typography>
                  Native Name: {post.name.nativeName.nld.common}
                </Typography> */}
                <Typography>Population: {post.population}</Typography>
                <Typography>Region: {post.region}</Typography>
                <Typography>Sub Region: {post.subregion}</Typography>
                <Typography>Capital: {post.capital}</Typography>
                <Typography>Top Level Domain: {post.tld}</Typography>
                {/* <Typography>Currencies: {post.currencies.EUR.name}</Typography> */}
                <Typography>
                  Languages: {post.languages.nld}, {post.languages.fra},
                  {post.languages.deu}
                </Typography>
                <Typography>Border Countries:</Typography>
                <Button>{post.border}</Button>
              </Grid>
            </Grid>
          ))}
      </Box>
    </div>
  );
};

export default Country;
