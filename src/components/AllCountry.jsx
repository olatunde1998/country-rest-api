import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from '@mui/icons-material/Search';


export default function AllCountry() {
  const baseURL = "https://restcountries.com/v3.1/all";
  const [posts, setPosts] = useState();
  const [search, setSearch] = useState("");
  const [regions, setRegions] = useState("");

  const regionData = ["Africa", "America", "Asia", "Europe", "Oceania"];


  useEffect(() => {
    axios.get(baseURL).then((response) => {
      const countryData = response.data;
      setPosts(countryData);
    });
  }, []);
  // console.log("========", posts)
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleRegions = (e) => {
    setRegions(e.target.value);
  };
  // console.log(regions);

  return (
    <Box
      sx={{
        backgroundColor: "hsl(207, 26%, 17%)",
        height: "3000px",
        position: "fixed",
        width: "100%",
      }}
    >
      <div className="text-[#FFFFFF] text-3xl">Countries</div>
      <Box className="sm:flex justify-between mt-[70px] items-center xl:max-w-[1440px] mx-auto flex flex-wrap justify-between">
        <Typography
          component="div"
          sx={{
            marginLeft: "10px",
          }}
          className="bg-[#2B3945] pl-2 flex items-center justify-center w-[250px] h-full lg:w-[400px] h-[70px] mb-[0px]"
        >
          <SearchIcon sx={{color:"white"}}/>
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search your country..."
            className="w-full h-full p-4 bg-[#2B3945] text-white"
          />
        </Typography>
        <Box
          sx={{
            marginLeft: "10px",
          }}
          className="w-[150px]  lg:w-[200px] mr-[10px] h-[70px] mt-[0px]"
        >
          <FormControl sx={{ width: "90%", m: 1, background:"#2B3945" }}>
            <Select
              value={regions}
              onChange={handleRegions}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem
                value=""
                style={{ backgroundColor: "hsl(209, 23%, 22%)" }}
              >
                <em style={{ color: "white" }}>Filter by region</em>
              </MenuItem>
              {regionData.map((item, id) => (
                <MenuItem
                  value={item}
                  key={id}
                  style={{
                    backgroundColor: "hsl(209, 23%, 22%)",
                    color: "white",
                  }}
                >
                  <em style={{ color: "white" }}>{item}</em>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      {/* <p className="text-red-800">{search}</p> */}
      {/* <p className="text-red-800">{regions}</p> */}
      <div className="bg-[#202C37] flex justify-center overflow-y-auto xl:max-w-[1440px] mx-auto flex flex-wrap justify-around">
        <Box className="bg-[#202C37] mt-12 pl-[10px] fixed flex justify-center overflow-y-auto xl:max-w-[1440px] h-[2000px] mx-auto flex flex-wrap justify-around">
          {posts &&
            posts
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.name.common.toLowerCase().includes(search);
              })
              .map((post, id) => (
                // <Link key={id} to={`/allcountry/${post.name.common}`}>
                <Link key={id} to={`/${post.name.common}`}>

                  <Box
                    sx={{
                      margin: "10px",
                      marginBottom: "70px",
                      boxShadow:
                        "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                    }}
                  >
                    <Card
                      sx={{
                        width: 280,
                        height: 330,
                        background: "hsl(209, 23%, 22%)",
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="140"
                          image={post.flags.png}
                          alt="green iguana"
                          sx={{ height: "150px" }}
                        />
                        <CardContent>
                          <Typography
                            sx={{
                              textAlign: "left",
                              color: "hsl(0, 0%, 100%)",
                            }}
                            gutterBottom
                            variant="h5"
                            component="div"
                          >
                            {/* country name */}
                            {post.name.common}
                          </Typography>
                          <Typography
                            sx={{
                              textAlign: "left",
                              color: "hsl(0, 0%, 100%)",
                              lineHeight: "24px",
                            }}
                            variant="body2"
                            color="text.secondary"
                          >
                            {/* population, region, capital */}
                            Population:{post.population}
                            <br />
                            Region:{post.region}
                            <br />
                            Capital:{post.capital}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Box>
                </Link>
              ))}
        </Box>
      </div>
    </Box>
  );
}
