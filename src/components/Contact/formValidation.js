export const validate = ({ name, mail, message }) => {
  let errors = [];

  if (name === "" || name.length < 1 || name.length > 50) {
    errors.push("Full Name field should have from 1 to 50 characters");
  }

  if (mail === "" || mail.length < 5 || mail.length > 50) {
    errors.push("E-mail length should have 5 to 50 characters");
  }

  if (!mail.includes("@")) {
    errors.push("E-mail should contain @");
  }

  if (message === "" || message.length < 1 || message.length > 5000) {
    errors.push("Message length should be 1-5000 characters");
  }

  return errors;
};
