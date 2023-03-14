import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "./Number";
const Post = () => {
  const { post } = useSelector((store) => store);
  console.log(post);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, []);
  return (
    <div>
      <div className="container">
        <h1 className="text-center">Post</h1>

        <table class="table">
          <thead>
            <tr>
              <th scope="col"> UserId</th>
              <th scope="col">Id</th>
              <th scope="col"> Title</th>
              <th scope="col"> Body</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {post.post?.map((item) => (
              <tr key={item.userId}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>
                  <button className="btn btn-danger">delete</button>
                </td>
                <td>
                  {" "}
                  <button className="btn btn-success">edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Post;
