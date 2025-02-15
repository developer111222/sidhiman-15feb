import React, { useState, useEffect } from "react";
import "./image.css";

const ImageSelector = ({ onSelectImages }) => {
    const [images, setImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [uploading, setUploading] = useState(false);

    // Fetch images from backend
    useEffect(() => {
        fetch("http://localhost:5000/api/get-images")
            .then((res) => res.json())
            .then((data) => setImages(data.images))
            .catch((err) => console.error("Error fetching images:", err));
    }, []);

    // Toggle selection
    const toggleImageSelection = (filename) => {
        setSelectedImages((prev) =>
            prev.includes(filename)
                ? prev.filter((img) => img !== filename)
                : [...prev, filename]
        );
    };

    // Handle multiple file uploads
    const handleFileUpload = async (event) => {
        const files = event.target.files;
        if (!files.length) return;

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append("images", files[i]); // Append multiple files
        }

        setUploading(true);

        try {
            const response = await fetch("http://localhost:5000/api/upload-images", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setImages((prev) => [...prev, ...data.filenames]); // Add new images to state
            } else {
                console.error("Upload failed:", data.error);
            }
        } catch (error) {
            console.error("Error uploading images:", error);
        } finally {
            setUploading(false);
        }
    };

    // Confirm selection & close modal
    const handleConfirm = () => {
        onSelectImages(selectedImages);
        setIsOpen(false);
    };

    return (
        <div >
            <button onClick={() => setIsOpen(true)} style={{border:'1px solid red',padding:'10px'}}>Select Images</button>

            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Select Images</h2>

                        {/* Multiple File Upload */}
                        <div>
                            <input type="file" accept="image/*" multiple onChange={handleFileUpload} disabled={uploading} />
                            {uploading && <p>Uploading...</p>}
                        </div>

                        {/* Image Gallery */}
                        <div className="image-grid">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`image-item ${selectedImages.includes(img) ? "selected" : ""}`}
                                    onClick={() => toggleImageSelection(img)}
                                >
                                    <img src={`http://localhost:5000/upload/${img}`} alt={img} />
                                    <p>{img}</p>
                                </div>
                            ))}
                        </div>
<div>
                        <button onClick={handleConfirm} className="btn" >Confirm</button>
                        <button onClick={() => setIsOpen(false)} className="btn">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageSelector;
