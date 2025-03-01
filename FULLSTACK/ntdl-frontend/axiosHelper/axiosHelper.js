import axios from "axios";

const apiEP = "http://localhost:8000/api/v1/tasks";

// POST Task
export const postTask = async (data) => {
  try {
    const response = await axios.post(apiEP, data);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//  GET Task
export const getTask = async () => {
  try {
    const response = await axios.get(apiEP);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//  PATCH Task
export const patchTask = async (data) => {
  try {
    const response = await axios.patch(apiEP, data);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
