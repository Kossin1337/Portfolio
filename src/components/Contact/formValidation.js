export const validate = ({ name, mail, message }) => {
  console.log(`Name: ${name}`);
  console.log(`Mail: ${mail}`);
  console.log(`Message: ${message}`);

  if (name === "" || name.length < 1 || name.length > 50) {
    // console.log("Name is incorrect");
    return false;
  }

  if (mail === "" || mail.length < 5 || mail.length > 50) {
    // console.log("Mail is incorrect");
    return false;
  }

  if (!mail.includes("@")) {
    // console.log("Mail does not include @");
    return false;
  }

  if (message === "" || message.length < 1 || message.length > 5000) {
    // console.log("Message is incorrect");
    return false;
  }

  return true;
};
