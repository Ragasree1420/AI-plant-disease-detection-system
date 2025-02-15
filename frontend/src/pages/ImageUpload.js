// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './ImageUpload.css';

// function ImageUpload() {
//     const [file, setFile] = useState(null);
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(false);

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!file) return;

//         const formData = new FormData();
//         formData.append('image', file);

//         setLoading(true);
//         try {
//             const token = localStorage.getItem('token');
//             const response = await axios.post('http://localhost:5000/api/upload', formData, {
//                 headers: { 
//                     'Content-Type': 'multipart/form-data',
//                     'Authorization': `Bearer ${token}`
//                 },
//             });

//             // Sort the results by confidence scores in ascending order
//             const sortedResults = response.data.diagnosis;
//             setResults(sortedResults);

//         } catch (error) {
//             console.error('Error:', error);
//             setResults([{ label: 'Error processing image', score: 0 }]);
//         }
//         setLoading(false);
//     };

//     return (
        
//         <div className="upload-container">
//             <meta charSet="UTF-8" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <h2>Plant Disease Detection</h2>
//             <form onSubmit={handleSubmit}>
//                 <input type="file" onChange={handleFileChange} />
//                 <button type="submit" disabled={loading}>Upload</button>
//             </form>
//             {loading && <p>Loading...</p>}
//             <div className="results-container">
//                 {results.map((result, index) => (
//                     <div key={index} className="result-box">
//                         <h3>{result.label}</h3>
//                         <p>Confidence: {(result.score * 100).toFixed(2)}%</p>                       
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// }

// export default ImageUpload;
// import React, { useState } from "react";
// import axios from "axios";
// import "./ImageUpload.css";

// function ImageUpload() {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setErrorMessage("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("image", file);

//     setLoading(true);
//     setResult(null);
//     setErrorMessage("");

//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post("http://localhost:5000/api/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       // Updated to handle a single result
//       setResult({
//         label: response.data.diagnosis.label,
//         score: response.data.diagnosis.score,
//         imageUrl: response.data.imageUrl,
//       });
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || "Error processing image");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="upload-container">
//       <h2>Plant Disease Detection</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit" disabled={loading}>
//           Upload
//         </button>
//       </form>
//       {loading && <p>Loading...</p>}
//       {errorMessage && <p className="error">{errorMessage}</p>}
//       <div className="result-container">
//         {result && (
//           <div className="result-box">
//             <img
//               src={result.imageUrl || "https://via.placeholder.com/200"}
//               alt="Uploaded Leaf"
//               style={{ maxWidth: "200px", maxHeight: "200px" }}
//             />
//             <h3>Disease Detected: {result.label}</h3>
//             <p>Confidence: {(result.score * 100).toFixed(2)}%</p>
//           </div>
//         )}
//         </div>
   
//     </div>
//   );
// }

// export default ImageUpload;
// import React, { useState } from "react";
// import axios from "axios";
// import "./ImageUpload.css";

// function ImageUpload() {
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//     setErrorMessage(""); // Reset error message when selecting a new file
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       setErrorMessage("Please select a file to upload.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", file);

//     setLoading(true);
//     setResult(null);
//     setErrorMessage("");

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No token found. Please log in again.");
//       }

//       const response = await axios.post(
//         "http://localhost:5000/api/upload",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       // Handle the response with a single result
//       setResult({
//         label: response.data.diagnosis.label,
//         score: response.data.diagnosis.score,
//         imageUrl: response.data.imageUrl,
//       });
//     } catch (error) {
//       setErrorMessage(
//         error.response?.data?.message || "Error processing image"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="upload-container">
//       <h2>Plant Disease Detection</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit" disabled={loading}>
//           {loading ? "Uploading..." : "Upload"}
//         </button>
//       </form>
//       {loading && <p>Loading...</p>}
//       {errorMessage && <p className="error">{errorMessage}</p>}
//       <div className="result-container">
//         {result && (
//           <div className="result-box">
//             <img
//               src={result.imageUrl || "https://via.placeholder.com/200"}
//               alt="Uploaded Leaf"
//               style={{ maxWidth: "200px", maxHeight: "200px" }}
//             />
//             <h3>Disease Detected: {result.label}</h3>
//             <p>Confidence: {(result.score * 100).toFixed(2)}%</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ImageUpload;
import React, { useState } from "react";
import axios from "axios";
import "./ImageUpload.css";

function ImageUpload() {
  // Define state variables
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [diseaseDetails, setDiseaseDetails] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 2 * 1024 * 1024) {
        setErrorMessage("File size must be less than 2MB.");
        return;
      }
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
      setErrorMessage(""); // Reset error message
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setErrorMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);
    setResult(null);
    setDiseaseDetails(null); // Clear previous details
    setErrorMessage("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found. Please log in again.");
      }

      // Call the existing API to process the uploaded image
      const response = await axios.post(
        "http://localhost:5000/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Set the diagnosis result from the response
      setResult({
        label: response.data.diagnosis.label,
        score: response.data.diagnosis.score,
        imageUrl: response.data.imageUrl,
      });
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchDiseaseDetails = async (diseaseName) => {
    try {
      const response = await axios.get("http://localhost:5000/api/diseases");
      const disease = response.data.find((d) => d.diseaseName === diseaseName);

      if (disease) {
        setDiseaseDetails(disease.details);
      } else {
        setDiseaseDetails({
          disease_symptoms: "Details for this disease are not available.",
          organic_treatment: "N/A",
          inorganic_treatment: "N/A",
          preventive_measure: "N/A",
          conclusion: "Please consult a local agricultural expert.",
        });
      }
    } catch (error) {
      setDiseaseDetails({
        disease_symptoms: "Failed to fetch disease details.",
        organic_treatment: "N/A",
        inorganic_treatment: "N/A",
        preventive_measure: "N/A",
        conclusion: "Please check your internet connection.",
      });
    }
  };

  return (
    <div className="body">
      <div className="container1">
        {/* Upload Section */}
        <div className="upload-section">
          <h2>Image Uploading</h2>
          <form onSubmit={handleSubmit}>
            <div className="upload-box">
              <div id="upload-preview">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="upload-icon"
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                  />
                ) : (
                  <img
                    src="iupload.png"
                    alt="Upload Icon"
                    className="upload-icon"
                  />
                )}
                <p>Upload Image</p>
              </div>
              <label htmlFor="file-upload" className="upload-label">
                Select Image
              </label>
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                accept="image/*"
              />
              <p className="file-info">File size must be less than 2MB</p>
              <p className="file-info">Do not upload other than leaf images</p>
            </div>
            <button type="submit" disabled={loading}>
              {loading ? "Uploading..." : "Upload"}
            </button>
          </form>
          {loading && <p>Loading...</p>}
          {errorMessage && <p className="error">{errorMessage}</p>}
          {/* <div className="note-section">
            <h3>Note:</h3>
            {/* <ul>
              <li>Do not upload other than leaf images.</li>
              <li>Ensure the file size is less than 2MB.</li>
            </ul> 
          </div> */}
        </div>

        {/* Result Section */}
        {result && (
          <div className="result-container">
            <div className="result-box">
              <img
                src={result.imageUrl || "https://via.placeholder.com/200"}
                alt="Uploaded Leaf"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
              <h3>Disease Detected: {result.label}</h3>
              <p>Confidence: {(result.score * 100).toFixed(2)}%</p>
              <button
                onClick={() => fetchDiseaseDetails(result.label)}
                className="details-button"
              >
                Show Disease Details
              </button>
            </div>
          </div>
        )}

        {/* Disease Details Section */}
        {diseaseDetails && (
          <div className="disease-details">
            <h3>Disease Details</h3>
            <p><strong>Symptoms:</strong> {diseaseDetails.disease_symptoms}</p>
            <p><strong>Organic Treatment:</strong> {diseaseDetails.organic_treatment}</p>
            <p><strong>Inorganic Treatment:</strong> {diseaseDetails.inorganic_treatment}</p>
            <p><strong>Preventive Measures:</strong> {diseaseDetails.preventive_measure}</p>
            <p><strong>Conclusion:</strong> {diseaseDetails.conclusion}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageUpload;
