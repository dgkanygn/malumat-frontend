import React, { useState, useContext } from "react";

// components
import { Navbar } from "../components/Navbar";
import { Button } from "../components/Button";
import { TextArea } from "../components/TextArea";
import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Flex } from "../components/Flex";
import { Text } from "../components/Text";
import { Input } from "../components/Input";
import { ImagePicker } from "../components/ImagePicker";

// context
import Data from "../context/Data";

// router
import { useNavigate } from "react-router-dom";

// request
import { createPostReq } from "../requests/Post";

export const NewPost = () => {
  const navigate = useNavigate();

  const { userInfo } = useContext(Data);

  const authorImage = userInfo.image;
  const authorId = userInfo.username;

  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const formData = new FormData();

  formData.append("title", title);
  formData.append("description", description);
  formData.append("post", post);
  formData.append("image", image);
  formData.append("authorId", authorId);
  formData.append("authorImage", authorImage);

  console.log(formData);

  const createPost = async () => {
    try {
      if (post.length > 0 && title.length > 0) {
        const res = await createPostReq(formData);
        console.log(res.data);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(post);

  return (
    <>
      <Navbar />

      <Box bg={"bg-blue1"} margin={"mt-[65px]"}>
        <Container>
          <Flex
            direction={"flex-col"}
            align={"items-start"}
            padding={"py-10"}
            gap={"gap-3"}
          >
            <Text weight={"font-bold"} size={"text-[25px]"}>
              Yeni gönderi oluştur
            </Text>
            <Text>Bir şeyler yaz.</Text>
          </Flex>
        </Container>
      </Box>

      <Box padding={"py-10"}>
        <Container>
          <Flex direction={"flex-col"} gap={"gap-5"}>
            <Flex direction={"flex-col"}>
              <Input
                placeholder={"Başlık*"}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                maxLength="60"
              />
            </Flex>
            <Flex direction={"flex-col"}>
              <Input
                placeholder={"Açıklama"}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                maxLength="130"
              />
            </Flex>

            <ImagePicker setImage={setImage} />

            <TextArea
              placeholder={"Gönderi*"}
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />

            <Flex>
              <Button bg={"bg-blue2"} onClick={createPost} text={"Yayımla"} />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
