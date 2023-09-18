import axios, { AxiosError } from "axios";
import { ApiEndpoint, Status, StatusText } from "../types/enums";
import React, { useEffect } from "react";
import { MessageData } from "../types/interfaces";
import { BASE_URL, USER_NAME, USER_PASSWORD } from "../consts";

const getToken = async (
  baseUrl: string | undefined,
  password: string | undefined,
  userName: string | undefined
) => {
  try {
    const postData = JSON.stringify({
      username: userName,
      password,
    });
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${baseUrl}${ApiEndpoint.GetToken}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: postData,
    };
    const { data, statusText, status } = await axios<{
      refresh: string;
      access: string;
    }>(config);
    if (statusText === StatusText.OK || status === Status.OK) {
      if (data.access) {
        return data.access;
      }
      return undefined;
    }
    return undefined;
  } catch (err) {
    const error = err as AxiosError;
    console.log("🚀 ~ file: useGetAccessToken.ts:36 ~ error:", error);
    return undefined;
  }
};

export const useGetAccessToken = (
  setAccessToken: React.Dispatch<React.SetStateAction<string | undefined>>,
  messageData: MessageData | undefined,
  accessToken: string | undefined
) => {
  useEffect(() => {
    if (messageData?.user_details.access_token) {
      setAccessToken(messageData.user_details.access_token);
    }
  }, [messageData, setAccessToken]);

  useEffect(() => {
    if (!accessToken && process.env.NODE_ENV === "development") {
      (async () => {
        const token = await getToken(
          messageData?.endpoint ? messageData.endpoint : BASE_URL,
          USER_PASSWORD,
          USER_NAME
        );
        if (token) setAccessToken(token);
      })();
    }
  }, [accessToken, messageData?.endpoint, setAccessToken]);
};
