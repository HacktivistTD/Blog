import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [faculty, setFaculty] = useState("Faculty of Computing.");
  const [year, setYear] = useState("1");
  const [name_of_Writer, setNameOfWriter] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await addDoc(collection(db, "articles"), {
        title,
        content,
        category,
        faculty,
        year,
        name_of_Writer,
        createdAt: new Date(),
      });
      setTitle("");
      setContent("");
      setCategory("Poeam");
      setFaculty("Faculty of Computing.");
      setYear("1");
      setNameOfWriter("");
      alert("Article added successfully!");
    } catch (err) {
      console.error("Error adding article: ", err);
      setError("Failed to add article. Please try again.");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-4 p-8 border border-gray-300 rounded-xl w-4/5 mx-auto bg-gray-100"
    >
      <h2 className="text-2xl text-gray-800">Write Here..</h2>
      <input
        type="text"
        placeholder="Article Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="p-2 w-full rounded-md border border-gray-300 text-base"
        disabled={loading}
      />
      <textarea
        placeholder="Write your article here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="p-2 w-full h-40 rounded-md border border-gray-300 text-base"
        disabled={loading}
      />
      <div className="flex flex-col w-full gap-2">
        <label className="text-base">Choose Your Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-md border border-gray-300 text-base w-32"
          disabled={loading}
        >
          <option value="Poeam">Poeam</option>
          <option value="Quotes">Quotes </option>
        </select>
      </div>

      {/* Personal Details Section */}
      <h3 className="text-2xl text-gray-800">Your Personal Details will not Be Display AnywhereWrite Here..</h3>
      <div className="flex flex-col w-full gap-2">
        <label className="text-base">Select Your Faculty</label>
        <select
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
          className="p-2 rounded-md border border-gray-300 text-base w-full"
          disabled={loading}
        >
          <option value="Faculty of Computing">Faculty of Computing</option>
          <option value="Faculty of Applied Sciences">Faculty of Applied Sciences</option>
          <option value="Faculty Of Technology">Faculty Of Technology</option>
          <option value="Faculty of Social Sciences and Languages">Faculty of Social Sciences and Languages</option>
          <option value="Faculty of Geomatics">Faculty of Geomatics</option>
          <option value="Faculty of Management studies">Faculty of Management studies</option>
          <option value="Faculty of Agriculture Sciences">Faculty of Agriculture Sciences</option>
        </select>
      </div>

      <div className="flex flex-col w-full gap-2">
        <label className="text-base">Academic Year</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="p-2 rounded-md border border-gray-300 text-base w-32"
          disabled={loading}
        >
          <option value="1">First Year</option>
          <option value="2">Second Year</option>
          <option value="3">Third Year</option>
          <option value="4">Fourth Year</option>
        </select>
      </div>

      <textarea
        placeholder="Write your name here..."
        value={name_of_Writer}
        onChange={(e) => setNameOfWriter(e.target.value)}
        required
        className="p-2 w-full h-20 rounded-md border border-gray-300 text-base"
        disabled={loading}
      />

      <button
        type="submit"
        className={`px-4 py-2 bg-green-600 text-white rounded-md ${
          loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Article"}
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}

export default CreateArticle;
