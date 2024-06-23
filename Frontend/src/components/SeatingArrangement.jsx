import Footer from "./Footer";
import Navbar from "./Navbar";
import seat1 from '../assets/seat1.jpeg';
import seat2 from '../assets/seat2.jpeg';
import seat3 from '../assets/seat3.jpeg';
import seat4 from '../assets/seat4.jpeg';
import seat5 from '../assets/seat5.jpeg';
import seat6 from '../assets/seat6.jpeg';
import seat7 from '../assets/seat7.jpeg';
function SeatingArrangement() {
  return (
    <>

      <Navbar type="student"/>
      <img src={seat1} alt="seat1" />;
      <img src={seat2} alt="seat2" />;
      <img src={seat3} alt="seat3" />;
      <img src={seat4} alt="seat4" />;
      <img src={seat5} alt="seat5" />;
      <img src={seat6} alt="seat6" />;
      <img src={seat7} alt="seat7" />;
      <br />

      <Footer />
    </>
  );
}
export default SeatingArrangement;
