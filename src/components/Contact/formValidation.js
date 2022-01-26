export const validate = ({ name, mail, message }) => {
  console.log(name.value);
  if (name === "" || name.length < 1 || name.length > 50) {
    console.log("Name is incorrect");
    return false;
  }

  if (mail === "" || mail.length < 5 || mail.length > 50) {
    if (mail.includes("@")) {
      console.log(`MAIN INCLUDES a @`);
    }
    console.log("Mail is incorrect");
    return false;
  }

  if (message === "" || message.length < 1 || message.length > 5000) {
    console.log("Message is incorrect");
    return false;
  }

  return true;
};
