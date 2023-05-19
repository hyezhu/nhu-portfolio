import "./form.styles.scss";
import { useState } from "react";

export default function Form() {
     const [form, setForm] = useState({
       name: "",
       email: "",
       message: "",
     });

     const encode = (data) => {
       return Object.keys(data)
         .map(
           (key) =>
             encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
         )
         .join("&");
     };

     /* Here’s the juicy bit for posting the form submission */

     function handleSubmit(e) {
       const state = { name: "", email: "", message: "" };
       fetch("/", {
         method: "POST",
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
         body: encode({ "form-name": "contact", ...state }),
       })
         .then(() => alert("Success!"))
         .catch((error) => alert(error));

       e.preventDefault();
     }

     return (
       <div>
         <form
           className="form"
           name="contactForm"
           method="POST"
           data-netlify="true"
           onSubmit={handleSubmit}
           action="/pages/success"
           data-netlify-honeypot="bot-field"
           hidden
         >
           <input type="hidden" name="contactForm" value="contact" />
           <p>
             <label>Your Name: </label>
             <input
               type="text"
               name="name"
               required
               onChange={(e) => {
                 setForm({
                   ...form,
                   name: e.target.value,
                 });
               }}
             />
           </p>
           <p>
             <label>
               Your Email:{" "}
               <input
                 type="email"
                 name="email"
                 required
                 onChange={(e) => {
                   setForm({
                     ...form,
                     email: e.target.value,
                   });
                 }}
               />
             </label>
           </p>
           <p>
             <label>
               Message:{" "}
               <textarea
                 name="message"
                 onChange={(e) => {
                   setForm({
                     ...form,
                     message: e.target.value,
                   });
                 }}
               ></textarea>
             </label>
           </p>
           <p>
             <button className="btn-submit" type="submit">
               Send
             </button>
           </p>
         </form>
       </div>
     );
}