import React, { useState, useContext } from "react";

// components
import { Button } from "../components/Button";
import { Text } from "../components/Text";

// router
import { Link, useNavigate } from "react-router-dom";

// context
import Data from "../context/Data";

// request
import { loginReq } from "../requests/Auth";
import { Flex } from "../components/Flex";
import { Input } from "../components/Input";
import { Box } from "../components/Box";
import { Container } from "../components/Container";

export const Login = () => {
  const { isLogin, setIsLogin, userInfo, setUserInfo } = useContext(Data);

  const [isLoading, setIsLoading] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  const inputs = [
    {
      label: "E-Mail",
      type: "text",
      name: "email",
      placeholder: "E-Mail",
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Şifre",
    },
  ];

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    // username: "",
    // name: "",
    // surname: "",
    // bio: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const login = async (e) => {
    try {
      if (formData.email && formData.password) {
        setIsLoading(true);
        e.preventDefault();
        const res = await loginReq(formData);
        setIsLogin(!isLogin);
        setUserInfo(res.data.user);
        navigate("/");
        setIsLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="bg-blue1 h-screen w-screen">
        <div className="container mx-auto w-[400px]">
          <div className="bg-white shadow-md flex flex-col justify-center items-center gap-5 py-5">
            <Text size={"text-[30px]"} weight={"font-bold"}>
              malumat.
            </Text>
            <Text>Oku, yaz, yorumla.</Text>
          </div>
        </div>

        <div className="mt-[50px]">
          <div className="container mx-auto w-[400px]">
            <div className="bg-white shadow-md flex flex-col justify-center gap-5 pb-[300px] pt-10 px-10">
              <Text weight={"font-bold"} size={"text-[30px]"}>
                Giriş Yap
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

              <Button
                bg={"bg-blue2"}
                onClick={login}
                text={"Giriş Yap"}
                isLoading={isLoading}
              />
              {errorMsg && (
                <div className="bg-red-100 p-1 text-center rounded">
                  <Text>{errorMsg}</Text>
                </div>
              )}

              <Text>
                Hesabın yok mu?
                <Link to={"/register"}>
                  <Text weight={"font-bold"} hover={"hover:text-slate-700"}>
                    Kaydol
                  </Text>
                </Link>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
