import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  post: [
    {
      userId: 1,
      id: 1,
      title: "islomjon",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "mustafo",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
  ],
};

export const getPost = createAsyncThunk(
  "getPost",
  async (payload, { dispatch }) => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res2) => {
        dispatch(posts(res2));
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
const post = createSlice({
  name: "post",
  initialState,
  reducers: {
    posts: (state, action) => {
      state.post = action.payload;
    },
  },
  extraReducers: {
    [getPost.pending]: (state, action) => {
      console.log("pending");
    },
    [getPost.fulfilled]: (state, action) => {},
    [getPost.rejected]: (state, action) => {
      console.log("error");
    },
  },
});

export const { posts } = post.actions;

export default post.reducer;
