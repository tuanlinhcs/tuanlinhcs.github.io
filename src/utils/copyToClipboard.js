export const CopyToClipboard = (copyText, setIsShowNotification) => {
  navigator.clipboard
    .writeText(copyText)
    .then(() => {
      console.log("Text copied to clipboard", copyText);
      setIsShowNotification(true);
      return true;
    })
    .catch((error) => {
      console.error("Error copying text: ", error);
      return false;
    });
};
