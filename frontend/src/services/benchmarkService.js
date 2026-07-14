import axios from "axios";

export const getBenchmarkData = async (
  filters = {}
) => {

  const response = await axios.get(
    "http://localhost:5000/api/benchmark",
    {
      params: filters
    }
  );

  return response.data;
};