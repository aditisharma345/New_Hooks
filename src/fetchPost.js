import { useEffect, useState } from "react";

const fetchPost = () => {
  const headers = {
    Authorization: `token c08fbf4e227142bb573b1bfac61d153716171491`,
  };
  const fetchPost = async () => {
    const response = await fetch("http://13.234.205.170/api/v1/subjects/", {
      method: "GET",
      headers: headers,
    });
  };
};

export default fetchPost;
