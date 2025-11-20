import { conifgs } from "../config";
import axios from "axios";

export const fetchData = async ({
  url,
  body,
  isFile,
  method,
  refreshToken = "",
  refresh = false,
}) => {
  try {
    const headers = {
      "Content-Type": isFile ? "multipart/form-data" : "application/json",
    };


    const response = await axios({
      data: body,
      headers: headers,
      method: method || "GET",
      url: `${conifgs?.BASE_URL}${url}`,
    });
    return response.data;
  } catch (err) {
    return err?.response?.data?.message;
  }
};
