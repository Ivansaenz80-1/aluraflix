import React, { useState } from "react";
import "./../Styles/NewVideo.css";

function NewVideo() {
  const [videoData, setVideoData] = useState({
    title: "",
    category: "",
    image: "",
    video: "",
    description: "",
  });

  const handleChange = (e) => {
    setVideoData({ ...videoData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nuevo video agregado:", videoData);
    // Aquí puedes agregar la lógica para enviar datos a una base de datos o JSON.
  };

  return (
    <div className="new-video">
      <h2>Agregar Nuevo Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={videoData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={videoData.category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="URL de Imagen"
          value={videoData.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="video"
          placeholder="URL de Video"
          value={videoData.video}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Descripción"
          value={videoData.description}
          onChange={handleChange}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default NewVideo;

