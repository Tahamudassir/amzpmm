export default {
  username: [
    {
      required: true,
      message: "Name can't be empty",
    },
  ],
  phone: [
    {
      pattern: /^[0-9]+$/,
      message:
        "Phone number should not contain any characters other then numbers",
    },
  ],
  number: [
    {
      required: true,
      message: "This field is required",
    },
    {
      type: "number",
      message: "This field should be a number",
    },
  ],
  required: [
    {
      required: true,
      message: "This field is required",
    },
  ],
  imageRequired: [
    {
      required: true,
      message: "This image is required",
    },
  ],
};
