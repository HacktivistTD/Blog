// src/components/ArticleList.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";

function ArticleList() {
  const { category } = useParams();  // Get the category from URL
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const q = query(collection(db, "articles"), where("category", "==", category));
      const querySnapshot = await getDocs(q);
      setArticles(querySnapshot.docs.map(doc => doc.data()));
    };

    fetchArticles();
  }, [category]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>{category} Articles</h2>
      {articles.length ? (
        articles.map((article, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.title}>{article.title}</h3>
            <p style={styles.content}>{article.content}</p>
          </div>
        ))
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    gap: '1rem',
  },
  heading: {
    marginBottom: '1rem',
    fontSize: '2rem',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1rem',
    width: '300px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
  },
  title: {
    margin: '0 0 0.5rem 0',
    fontSize: '1.5rem',
  },
  content: {
    margin: '0',
    fontSize: '1rem',
  },
};

export default ArticleList;
