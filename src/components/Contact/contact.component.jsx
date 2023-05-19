import "./contact.styles.scss";
import Form from "../Form/form.component.jsx";
import { Grid } from "@mui/material";


export default function Contact() {
 return (
   <div id="contact" className="section-cta">
     <Grid container spacing={4} justifyContent="center" alignItems="center" direction="row">
       <div className="contact-text">
         <p className="popout">
          <span>C</span>
          <span>O</span>
          <span>N</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
          <br/>
          <span>M</span>
          <span>E</span>
         </p>
       </div>
       <div className="form-container">
         <Form />
       </div>
     </Grid>
   </div>
 );
}
