import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Planet({ name, rotation_period, orbital_period, diameter, climate }) {
  return (
    <Accordion style={{ backgroundColor: "grey", width: "100%" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Rotation period : {rotation_period}
          <br />
          Orbital period : {orbital_period}
          <br />
          diameter : {diameter}
          <br />
          climate : {climate}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default Planet;
