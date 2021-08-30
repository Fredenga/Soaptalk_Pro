// const newPost = {
//   description, text
// }
if (file) {
  const data = new FormData();
  data.append("image", file);
  try {
    const response = await axios.post("/upload", data);
    console.log(response.data);
  } catch (err) {}
}
try {
  const response = await axios.post(
    "/posts",
    { description, text },
    { headers: { token: `Bearer ${user.accessToken}` } }
  );
  console.log(response.data);
  reset();
} catch (err) {}
// try {
//   await axios.post("/posts", newPost);
//   reset();
//   setCreate(false);
// }catch(err){}
// const newPost = {
//   description,
//   text,
// };
// if (file) {
//   const data = new FormData();
//   const filename = Date.now + file.name;
//   data.append("name", filename);
//   data.append("file", file);
//   newPost.img = filename;
//   try {
//     await axios.post("/upload", data);
//   } catch (err) {}
// }
// try {
//   await axios.post("/posts", newPost);
//   reset();
//   setCreate(false);
// } catch (err) {}
