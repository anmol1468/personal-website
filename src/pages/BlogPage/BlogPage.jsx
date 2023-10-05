import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./BlogPage.module.scss";
import React, { useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";
import HeaderSecondary from "../../components/header/HeaderSecondary";
import { Link } from "react-router-dom";

const graphcms = new GraphQLClient(
  "https://api-ca-central-1.hygraph.com/v2/cln69kvo8avvi01uka25zbd9s/master"
);

const QUERY = gql`
  query {
    posts {
      title
      slug
      uploadDate
      content {
        html
      }
      coverImage {
        url
      }
    }
  }
`;

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await graphcms.request(QUERY);
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <HeaderSecondary content="Blog Posts" />
      <div className={styles.postBox}>
        {posts.map((post, index) => {
          // console.log(post.slug);
          return (
            <div key={index} className={styles.post}>
              <img src={post.coverImage.url} alt="Cover image" />
              <Link to={`/blog/${post.slug}`}>
                <h3>{post.title}</h3>
              </Link>

              <p>{post.uploadDate}</p>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
