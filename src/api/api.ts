import "./components/Table/Table";

//src/api getData.ts // get data from server and do data.json(): fetch, axios, React.query (?)

// src/api/hooks useGetData.ts:

// const useGetData = () => {
//   const [data, setData] = useState();
//   const [loading, setLoading] = useState();

//   const fetchData = async () => {
//     setLoading(true);
//     const data = await getData();
//     setData(data);
//     setLoading(false);
//   };

//   return {
//     fetchData,
//     loading,
//   };
// };

// const MyComponent = () => {
//   const { fetchData, loading } = useGetData();

//   useEffect(() => {
//     fetchData();
//   });
// };
