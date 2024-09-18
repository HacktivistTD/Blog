import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

function ArticleList() {
  const { category } = useParams(); // Get the category from URL
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const q = query(collection(db, "articles"), where("category", "==", category));
      const querySnapshot = await getDocs(q);
      setArticles(querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),  // Convert Firebase Timestamp to JS Date
      })));
    };

    fetchArticles();
  }, [category]);

  return (
    <div className="flex flex-col items-center p-8 gap-6">
      <h2 className="text-3xl font-semibold mb-4">{category} Articles</h2>
      <div className="flex gap-5 flex-wrap justify-center">
        {articles.length ? (
          articles.map((article, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg p-4 w-50 text-center bg-gray-700 shadow-md transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-2 text-white">{article.title}</h3>
              <p className="text-white mb-2">{article.content}</p>
              <p className="text-yellow-400 text-sm">
                {article.createdAt ? article.createdAt.toLocaleDateString() : "Date not available"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No articles found.</p>
        )}
      </div>
    </div>
  );
}

export default ArticleList;
