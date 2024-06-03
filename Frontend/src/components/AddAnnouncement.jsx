import Navbar from "./Navbar";
import Footer from "./Footer";
import '../App.css';
import { useState } from "react";
import axios from "axios";

function AddAnnoucements() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photos, setPhotos] = useState([]);
    const [pdfs, setPdfs] = useState([]);

    const handleImageChange = (event) => {
        const files = event.target.files;
        setPhotos(prevPhotos => [...prevPhotos, ...files]);
    };

    const handlePdfChange = (event) => {
        const files = event.target.files;
        setPdfs(prevPdfs => [...prevPdfs, ...files]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        
        if(photos.length > 0){
            photos.forEach(photo => {
                formData.append('photos', photo);
            });
        }
        if(pdfs.length > 0){
            pdfs.forEach(pdf => {
                formData.append('pdfs', pdf);
            });
        }

        try {
            const result = await axios.post("http://localhost:3001/api/admin/addAnnouncement", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (result.data === "Announcement created successfully") {
                alert(result.data);
            } else {
                alert('Error creating announcement');
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    return (
        <>
            <Navbar type="admin" />
            <center>
                <form className="announcement-form" onSubmit={handleSubmit}>
                    <div className="form-section">
                        <label htmlFor="announcement-text">Announcement Text</label>
                        <textarea
                            id="announcement-text"
                            name="announcement-text"
                            rows="5"
                            placeholder="Enter your announcement title here"
                            onChange={(event) => setTitle(event.target.value)}
                            required
                        ></textarea>
                        <textarea
                            id="announcement-description"
                            name="announcement-description"
                            rows="5"
                            placeholder="Enter your announcement Description here"
                            onChange={(event) => setDescription(event.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="form-section">
                        <label htmlFor="announcement-photo">Announcement Photos (Multiple)</label>
                        <input
                            type="file"
                            id="announcement-photo"
                            name="announcement-photo"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                        />
                    </div>
                    <div className="form-section">
                        <label htmlFor="announcement-pdf">Announcement PDFs (Multiple)</label>
                        <input
                            type="file"
                            id="announcement-pdf"
                            name="announcement-pdf"
                            accept="application/pdf"
                            multiple
                            onChange={handlePdfChange}
                        />
                    </div>
                    <button type="submit">Submit Announcement</button>
                </form>
            </center>
            <Footer />
        </>
    );
}

export default AddAnnoucements;
