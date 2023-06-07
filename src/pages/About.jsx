import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

// function About() {
//   return (
//     <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//       <h1>About Us Page</h1>

//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <Card sx={{ borderRadius: 8, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", margin: "0 10px" }}>
//           <img src="https://dummyimage.com/150x150" alt="Team Member 1" style={{ borderRadius: "50%" }} />
//           <CardContent>
//             <Typography variant="h6">John Doe</Typography>
//             <Typography variant="body2" color="textSecondary">Front-end Developer</Typography>
//           </CardContent>
//         </Card>

//         <Card sx={{ borderRadius: 8, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", margin: "0 10px" }}>
//           <img src="https://dummyimage.com/150x150" alt="Team Member 2" style={{ borderRadius: "50%" }} />
//           <CardContent>
//             <Typography variant="h6">Jane Smith</Typography>
//             <Typography variant="body2" color="textSecondary">Back-end Developer</Typography>
//           </CardContent>
//         </Card>
//       </div>

//       <div style={{ background: "#F5F5F5", height: "auto", padding: "20px", margin: "20px", borderRadius: "8px", textAlign: "center" }}>
//         <div style={{ background: "lightgray", padding: "10px", borderRadius: "8px", display: "inline-block" }}>
//           <strong>Community Introduction:</strong>
//           <p style={{ margin: "10px 0" }}>
//             DevOps is a methodology that combines software development (Dev) and IT operations (Ops).
//             It focuses on collaboration, automation, and continuous integration and delivery to improve
//             the efficiency and quality of software development processes.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

function About() {
  return (
    <>
      <h1>About Us </h1>
      <p>
        Here is a little about DevOps Community of Practice. Here is some dummy
        text. Here is some dummy text.Here is some dummy text.Here is some dummy
        text.Here is some dummy text.Here is some dummy text.
      </p>
      <h2>Contributors </h2>
      <ul>
        <li>
          <b>Blessing:</b> Project Manager, Frontend Engineer
        </li>
        <li>Bruce: Frontend Engineer</li>
        <li>Abhishek: Frontend Engineer</li>
        <li>Balaji: Frontend Engineer</li>
        <li>Ravi: Frontend Engineer</li>
      </ul>
    </>
  );
}
export default About;
