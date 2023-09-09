import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Education() {
  const customStyle = {
    fontWeight: "bold",
    fontFamily: "Montserrat, sans-serif",
    color: "#484545",
    lineHeight: "1.1",
  };
  const accordionStyle = {
    border: "none",
    backgroundColor: "transparent",
    boxShadow: "none",
  };
  const summary = {
    borderBottom: "1px solid #948E8E",
    paddingLeft: "0px",
    paddingRight: "0px",
  };

  const details = {
    width: "66.6667%",
  };

  return (
    <div>
      <Accordion style={accordionStyle} TransitionProps={{ timeout: 3000 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={summary}
        >
          <Typography style={customStyle}>
            MIT University in United States{" "}
            <span className=" font-extralight text-xs">( 2020 - 2024 )</span>
            <br />
            <p className="font-extralight text-xs mt-2">
              Computer Science and Engineering
            </p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={details}>
          <div className=" font-normal text-[#484545] text-sm">
            <h3>Details about education....</h3>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
