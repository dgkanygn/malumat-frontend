import React, { useEffect, useState, useContext } from "react";

// router
import { Link } from "react-router-dom";

// components
import { ProfileButton } from "./ProfileButton";
import { Button } from "./Button";

// axios
import axios from "axios";

// context
import Data from "../context/Data";
import { Container } from "./Container";

export const Navbar = () => {
  const { isLogin, userInfo } = useContext(Data);

  const [search, setSearch] = useState("");

  const [datas, setDatas] = useState([]);

  const filterApi = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/filter/${search}`);
      console.log(res.data);
      setDatas(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (search) filterApi();
  }, [search]);

  return (
    <>
      <div class="fixed left-0 right-0 top-0 z-40 w-full bg-white shadow-md">
        <Container>
          <div class="flex items-center justify-between">
            <div>
              <Link to={"/"}>
                <h1 class="text-[45px]">
                  <b>m.</b>
                </h1>
              </Link>
            </div>
            <div class="flex items-center gap-10">
              <div>
                {/* <input
                  class="rounded bg-slate-100 p-2 outline-none max-w-[120px]"
                  type="text"
                  placeholder="Search.."
                  onChange={(e) => setSearch(e.target.value)}
                /> */}

                {search && (
                  <div className="bg-white absolute shadow-lg">
                    {datas.map((data, index) => (
                      <Link
                        to={
                          data.title
                            ? `/post/${data._id}`
                            : `/profile/${data.username}`
                        }
                      >
                        <p
                          key={index}
                          className="p-2 w-[205px] hover:bg-slate-100 cursor-pointer "
                        >
                          {data.title ? data.title : data.username}{" "}
                          <i>
                            <b>{data.title ? "post" : "user"}</b>
                          </i>
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {isLogin ? (
                <ProfileButton
                  toggle={true}
                  image={userInfo.image}
                  username={userInfo.username}
                />
              ) : (
                <Link to={"/login"}>
                  <Button bg={"bg-blue2"} text={"Giriş Yap"} />
                </Link>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
