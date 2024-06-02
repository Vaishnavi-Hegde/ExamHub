import Navbar from "./Navbar";
import Footer from "./Footer";
import Credittile from "./Credittile";
import Profiletile from "./Profiletile";
//import Gpatile from "./components/Gpatile";
import Table from "./Table";
import Vphoto from "../assets/vaishnaviPhoto.jpg";

function Performance() {
  return (
    <>
      <Navbar />
      <Profiletile
      image={Vphoto}
      text="Photo not found"
      usn="2SD21IS057"
      name="Vaishnavi Hegde"/>

      <Credittile
      creditType="Total Credits"
      noOfCredits="22"
      />

      <Credittile
      creditType="Credits Scored"
      noOfCredits="22"
      />

      <Credittile
      creditType="CGPA"
      noOfCredits="9.51"
      />

      <Credittile
      creditType="SGPA"
      noOfCredits="9.53"
      />

    <Table/>
    
      <Footer />
    </>
  );
}
export default Performance;
