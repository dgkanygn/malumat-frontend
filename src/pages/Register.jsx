import React, { useState } from "react";

// components
import { Button } from "../components/Button";
import { registerReq } from "../requests/Auth";
import { Text } from "../components/Text";
import { Input } from "../components/Input";
import { Flex } from "../components/Flex";
import { TextArea } from "../components/TextArea";
import { Box } from "../components/Box";

// router
import { Link, useNavigate } from "react-router-dom";
import { ImagePicker } from "../components/ImagePicker";

export const Register = () => {
  const navigate = useNavigate();

  const inputs = [
    {
      label: "E-Mail",
      type: "text",
      name: "email",
      placeholder: "E-mail*",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Şifre*",
    },

    {
      label: "Username",
      type: "text",
      name: "username",
      placeholder: "Kullanıcı adı*",
    },
    {
      label: "Name",
      type: "text",
      name: "name",
      placeholder: "Ad",
    },
    {
      label: "Surname",
      type: "text",
      name: "surname",
      placeholder: "Soyad",
    },
  ];

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    name: "",
    surname: "",
    bio: "",
  });

  const [image, setImage] = useState("");

  const formData2 = new FormData();

  const [errorMsg, setErrorMsg] = useState("");

  formData2.append("email", formData.email);
  formData2.append("password", formData.password);
  formData2.append("username", formData.username);
  formData2.append("name", formData.name);
  formData2.append("surname", formData.surname);
  formData2.append("bio", formData.bio);
  formData2.append("image", image);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const register = async (e) => {
    try {
      e.preventDefault();
      const res = await registerReq(formData2);
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response.data.message);
    }
  };

  return (
    <>
      <div className="bg-blue1">
        <div className="">
          <div className="container mx-auto w-[400px]">
            <div className="bg-white shadow-md flex flex-col justify-center items-center gap-5 py-5">
              <Text size={"text-[30px]"} weight={"font-bold"}>
                malumat.
              </Text>
              <Text>Oku, yaz, yorumla.</Text>
            </div>
          </div>
        </div>

        <div className="mt-[50px]">
          <div className="container mx-auto w-[400px]">
            <form className="bg-white shadow-md flex flex-col justify-center  gap-5  pb-[300px] pt-10 px-10">
              <Text size={"text-[30px]"} weight={"font-bold"}>
                Kaydol
              </Text>
              {inputs.map((input, index) => (
                <Flex key={index} direction={"flex-col"}>
                  <Input
                    placeholder={input.placeholder}
                    type={input.type}
                    name={input.name}
                    value={formData[input.name]}
                    onChange={handleInputChange}
                  />
                </Flex>
              ))}

              <Flex direction={"flex-col"}>
                <TextArea
                  placeholder={"Kendinle ilgili bir şeyler yaz..."}
                  value={formData.bio}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, bio: e.target.value }))
                  }
                />
              </Flex>

              <ImagePicker setImage={setImage} />

              {errorMsg && (
                <p className="bg-red-100 p-3 text-red-700">{errorMsg}</p>
              )}

              <Button bg={"bg-blue2"} onClick={register} text={"Kaydol"} />

              <Text>
                Bir hesabın var mı?
                <Link to={"/login"}>
                  <Text weight={"font-bold"} hover={"hover:text-slate-700"}>
                    Giriş Yap
                  </Text>
                </Link>
              </Text>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
