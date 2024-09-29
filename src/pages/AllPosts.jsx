import React, {useState, useEffect} from "react";
import { Container, PostCard } from "../component";
import Service from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  });

  return (
    <div className="py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard $id={post.$id} title = {post.title} featuredImage={post.featuredImage} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;