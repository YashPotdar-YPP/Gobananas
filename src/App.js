import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  AppBar,
  Box,
  Toolbar,
  useMediaQuery,
  IconButton,
  InputBase,
} from "@mui/material";
import { useState, useEffect } from "react";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const isMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const textColor = {
    color: "#505d76",
    fontWeight: "550",
    background: "none",
  };

  return (
    <>
      {/* For navigation bar */}
      <Box sx={{ flexGrow: 1 }} className="mx-4">
        <AppBar
          position="static"
          sx={{ backgroundColor: "#f2f6fd" }}
          className="rounded-4"
        >
          <Toolbar
            sx={{
              justifyContent: isMobile ? "space-between" : "flex-start",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <InputBase
                placeholder="Search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                sx={{ ml: 1, flex: 1, border: "none" }}
              />
            </Box>
            {!isMobile && (
              <>
                <a
                  style={textColor}
                  className="ms-5 border-0 text-decoration-none"
                  href="#"
                >
                  Home
                </a>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      {/* for Car cards */}
      <div className="mt-5 mx-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredData.map((item) => (
            <div className="col" key={item.id}>
              <Card
                sx={{
                  maxWidth: 500,
                  padding: 1,
                  borderRadius: 3,
                  marginRight: 2,
                  marginLeft: 2,
                  backgroundColor: "#f2f6fd",
                }}
                className="border border-light h-100"
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <span
                      className="rounded-4  float-end p-2 fs-6"
                      style={{ border: "1px dashed #499aee" }}
                    >
                      {item.id}
                    </span>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div className="row">
                      <h4>Title:</h4>
                      <div className="col-sm-5 col-md-6 w-100" style={textColor}>
                        {item.title}
                      </div>
                    </div>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="ms-2">
                    <div className="row mt-3">
                      <h4>Description</h4>
                      <div className="col-sm-5 col-md-6 w-100" style={textColor}>
                        {item.title}
                      </div>
                    </div>
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
