import React, { useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";
import HeaderSecondary from "../../components/header/HeaderSecondary";
import styles from "./PostPage.module.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";

function PostPage() {
  const [currentPost, setCurrentPost] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await graphcms.request(QUERY);
        const postSlug = window.location.pathname.replace("/blog/", "");
        const post = data.posts.find((p) => p.slug === postSlug);

        setCurrentPost(post);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [QUERY]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or message
  }

  if (!currentPost) {
    return <div>Post not found</div>; // Handle the case when the post is not found
  }

  return (
    <>
      <Navbar />
      <div className={styles.post}>
        <Link className={styles.back} to={"/blog"}>
          &larr; Go Back
        </Link>
        <img src={currentPost.coverImage?.url} alt="" />
        <h3>{currentPost.title}</h3>
        <p>{currentPost.uploadDate}</p>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: currentPost.content.html }}
        />
      </div>
      <Footer />
    </>
  );
}

export default PostPage;
