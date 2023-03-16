import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import { useEffect, useState } from "react";
import Planet from "../Components/Planet";
import Nav from "../Components/Navigation";

function PlanetScreen() {
  const [planets, setPlanets] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentUrl, setCurrentUrl] = useState("https://swapi.dev/api/planets");

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      setLoading(true);
      setError("");

      let body;

      try {
        let response = await fetch(currentUrl, {
          signal: abortController.signal,
        });
        body = await response.json();

        setPlanets(body.results);
        setNextUrl(body.next);
        setPrevUrl(body.previous);
        setLoading(false);
      } catch (Error) {
        if (!abortController.signal.aborted) {
          setError(Error.message);
        }
      }

      //console.log(body);
    })();

    return () => {
      abortController.abort();
    };
  }, [currentUrl]);

  const nextPageHandler = () => {
    setCurrentUrl(nextUrl);
  };

  const prevPageHandler = () => {
    setCurrentUrl(prevUrl);
  };

  return (
    <>
      <Nav />
      {loading && (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}

      {!loading && !error && (
        <>
          <div style={{ width: "100%" }}>
            {planets.map((planet) => {
              return <Planet key={crypto.randomUUID()} {...planet} />;
            })}
          </div>

          <div style={{ display: "flex", margin: "20px", gap: "20px" }}>
            <Button
              variant="contained"
              onClick={prevPageHandler}
              disabled={!prevUrl ? true : false}
            >
              Prev
            </Button>
            <Button
              variant="contained"
              onClick={nextPageHandler}
              disabled={!nextUrl ? true : false}
            >
              Next
            </Button>
          </div>
        </>
      )}

      {error && <h1>API Error : {error}</h1>}
    </>
  );
}

export default PlanetScreen;
