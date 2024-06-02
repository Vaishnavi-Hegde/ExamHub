
import Navbar from "./Navbar";
import Announcement from "./Announcement";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Home() {

  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    // Fetch announcements when the component mounts
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    axios.get("http://127.0.0.1:3001/api/student/getAnnouncements")
      .then(result => {
        setAnnouncements(result.data ?? [])
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <Navbar type={'student'} />
      <h1>Announcements</h1>
      {
        announcements.map((announcement) => {
          return (
            <Announcement
              key={announcement._id}
              {...announcement} />
          )
        })
      }

      <Footer />
    </>
  );
}
export default Home;