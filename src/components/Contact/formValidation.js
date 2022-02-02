export const validate = ({ name, mail, message }) => {
  let errors = [];

  console.log(`Name: ${name}`);
  console.log(`Mail: ${mail}`);
  console.log(`Message: ${message}`);

  if (name === "" || name.length < 1 || name.length > 50) {
    // console.log("Name is incorrect");
    // return false;
    errors.push("Full Name field should have from 1 to 50 characters");
  }

  if (mail === "" || mail.length < 5 || mail.length > 50) {
    // console.log("Mail is incorrect");
    errors.push("E-mail length should have 5 to 50 characters");
    // return false;
  }

  if (!mail.includes("@")) {
    // console.log("Mail does not include @");
    errors.push("E-mail should contain @");
    // return false;
  }

  if (message === "" || message.length < 1 || message.length > 5000) {
    // console.log("Message is incorrect");
    errors.push("Message length should be 1-5000 characters");
    // return false;
  }

  return errors;
};
