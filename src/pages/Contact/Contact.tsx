/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "../../assets/styles/colors";

const ContactPage = (): React.ReactElement => {
  return (
    <div>
      {" "}
      <div
        css={css({
          width: 800,
          height: 600,
        })}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.746170164818!2d127.16616806300782!3d37.22689962685558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b4fc661aa1953%3A0x4bdd2c37047d051!2z7Jqp7J2464yA7ZWZ6rWQIO2ZmOqyveqzvO2VmeuMgO2VmQ!5e0!3m2!1sko!2skr!4v1738057031425!5m2!1sko!2skr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default ContactPage;
