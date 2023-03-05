import { urlServer } from "./api";

export default function fetchPost(data) {
  fetch(urlServer, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
