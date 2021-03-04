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
};
