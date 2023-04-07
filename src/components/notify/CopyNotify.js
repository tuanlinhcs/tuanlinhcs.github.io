import { BsCheckCircle } from "react-icons/bs";
import "./notify.scss";

function NotifyCopyToClipboard({ content }) {
  return (
    <div className="notify-copy-to-clipboard-container" id="notify-copy-to-clipboard">
      <div className="notify">
        <BsCheckCircle className="icon" />
        {content} was copied to clipboard
      </div>
    </div>
  );
}

export { NotifyCopyToClipboard };
