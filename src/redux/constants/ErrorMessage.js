export function* getErrorMessage(error) {
  let errorMessage = "";
  if (error.response) {
    errorMessage = error.response.data.message;
  } else if (error.request) {
    errorMessage = "Error. Please check your internet connection.";
  } else {
    errorMessage = "There was some error.";
  }
  return errorMessage;
}
