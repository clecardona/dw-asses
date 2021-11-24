export default function getFriendlyError(errorCode) {
  switch (errorCode) {
    case "auth/wrong-password":
      return "Oops, you entered a wrong password";

    case "auth/too-many-requests":
      return "Sorry, too many request submitted, please try again  later";

    case "auth/user-not-found":
      return "Sorry, this email is not in our database";

    default:
      return errorCode;
  }
}
