import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function WorkExperience({
  company,
  description,
  timeRange,
  title,
}) {
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
    transition: " 0.3s ease-in-out",
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
            {company}{" "}
            <span className=" font-extralight text-xs">{timeRange}</span>
            <br />
            <p className="font-extralight text-xs mt-2">{title}</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={details}>
          <div className=" font-normal text-[#484545] text-sm">
            <h3>Desctiprion, projects, issues:</h3>
            <textarea>{description}</textarea>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
