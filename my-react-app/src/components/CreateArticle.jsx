// src/components/CreateArticle.jsx
import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Love");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "articles"), {
        title,
        content,
        category,
        createdAt: new Date(),
      });
      setTitle("");
      setContent("");
      alert("Article added successfully!");
    } catch (err) {
      console.error("Error adding article: ", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "2rem",
        border: "1px solid #ccc",
        borderRadius: "10px",
        width: "80%",
        margin: "2rem auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "#333" }}>Create a New Article</h2>
      <input
        type="text"
        placeholder="Article Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{
          padding: "0.5rem",
          width: "100%",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "1rem",
        }}
      />
      <textarea
        placeholder="Write your article here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        style={{
          padding: "0.5rem",
          width: "100%",
          height: "150px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "1rem",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "0.5rem",
        }}
      >
        <div style={{ fontSize: "1rem" }}>Choose the category:</div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            width: "100px",
          }}
        >
          <option value="Love">Love</option>
          <option value="War">War</option>
        </select>
      </div>
      <button
        type="submit"
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit Article
      </button>
    </form>
  );
}

export default CreateArticle;
