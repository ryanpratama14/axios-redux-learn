import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postsSlice";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const renderedPosts = posts.map((post) => (
    <div
      key={post?.id}
      className="bg-white rounded-2xl p-6 w-[50%] border-zinc-800 border-2"
    >
      <h3 className="text-2xl text-blue-600">{post?.title}</h3>
      <p className="text-xl text-red-500">{post?.content}</p>
      <p className="flex flex-col w-full items-end mt-2">
        <PostAuthor userId={post?.userId} />
        <TimeAgo timestamp={post?.date} />
      </p>
    </div>
  ));
  return (
    <div>
      <h2 className="text-3xl">Posts</h2>
      <div className="flex flex-col gap-6 w-full  items-center justify-center">
        {renderedPosts}
      </div>
    </div>
  );
};

export default PostsList;
