import useFetch from "react-fetch-hook";

export const Table = () => {
  const { isLoading, error, data } = useFetch(
    "http://localhost:3000/candidates"
  );
  if (error) {
    console.log(error);
  }
  console.log(data);
  const candidatesList = data?.map((item) => {});
  return isLoading ? <div>Loading...</div> : <h2>Table</h2>;
};
