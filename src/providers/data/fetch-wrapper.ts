import { GraphQLFormattedError } from "graphql";

type Error = {
  message: string;
  statusCode: string;
};
const customFech = async (url: string, options: RequestInit) => {
  const accessToken = localStorage.getItem("access_token");

  const headers = options.headers as Record<string, string>;

  return await fetch(url, {
    ...options,
    headers: {
      ...headers,
      Authorization: headers?.Authorization || `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      "Appolo-Require-Preflight": "true",
    },
  });
};

const getGraphQLErrors = (
  body: Record<"errors", GraphQLFormattedError[] | undefined>
): Error | null => {
  if (!body) {
    return {
      message: "Unknown error",
      statusCode: "INTERNAL_SERVER_ERROR",
    };
  }

  if ("errors" in body) {
    const errors = body?.errors;
    const messages = errors?.map((error) => error?.message)?.join("");
    const code = errors?.[0]?.extensions?.code;

    return {
      message: messages || JSON.stringify(errors),
      statusCode: typeof code === "string" ? code : "500",
    };
  }

  return null;
};

export const fetchWrapper = async (url: string, options: RequestInit) => {
  const res = await customFech(url, options);

  const resClone = res.clone();
  const body = await resClone.json();
  const error = getGraphQLErrors(body);

  if (error) {
    throw error;
  }

  return res;
};
