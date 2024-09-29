import { useEffect, useState } from "react";
import React from "react";
import { Container, PostForm } from "../component";
import service from "../appwrite/config";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(slug){
    service.getPost(id).then((post) => {
        if(post){
            setPost(post);
        }
    });
  } else {
    navigate("/");
  }
}, [slug, navigate]);

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;