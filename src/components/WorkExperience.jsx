import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function WorkExperience() {
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
            Microsoft{" "}
            <span className=" font-extralight text-xs">( 2020 - present )</span>
            <br />
            <p className="font-extralight text-xs mt-2">
              Ceo, Product owner & Tech Lead
            </p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={details}>
          <div className=" font-normal text-[#484545] text-sm">
            <h3>Details about your position some more details...</h3>
            <h3>List of projects:</h3>
            <ul className=" indent-3">
              <li>
                - Resume website ( you are currently on this website, it was
                built in 3 days )
              </li>
            </ul>
            <h3>Some of the challenges I had to overcome:</h3>
            <ul className="  indent-3">
              <li>- implement it in react</li>
              <li>- Figure out firebase</li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion style={accordionStyle} TransitionProps={{ timeout: 3000 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={summary}
        >
          <Typography style={customStyle}>
            Other company{" "}
            <span className=" font-extralight text-xs">( 2020 - present )</span>
            <br />
            <p className="font-extralight text-xs mt-2">
              Consultant and Full Stack Developer
            </p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={details}>
          <div className=" font-normal text-[#484545] text-sm">
            <h3>Details about your position some more details...</h3>
            <h3>List of projects:</h3>
            <ul className=" indent-3">
              <li>
                - Resume website ( you are currently on this website, it was
                built in 3 days )
              </li>
            </ul>
            <h3>Some of the challenges I had to overcome:</h3>
            <ul className="  indent-3">
              <li>- Implement it in React</li>
              <li>- Figure out firebase</li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
