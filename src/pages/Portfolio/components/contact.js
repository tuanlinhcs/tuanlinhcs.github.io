import "../styles/contact.scss";
import { ButtonPrimaryNewTabLink } from "../ui/buttons";
export default function Contact() {
  return (
    <section className="section-contact" id="contact">
      <h1>Get In Touch</h1>
      <p>I’m looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>

      <div>
        {/* BUG: Cant click on this button */}
        <ButtonPrimaryNewTabLink name="Say Hello" link="mailto:letuan317@gmail.com" />
      </div>
    </section>
  );
}
