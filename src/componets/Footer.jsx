import React from "react";
import {
  BsTelephone,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsTelegram,
  BsHouseDoorFill,
  BsFillEnvelopePaperFill,
  BsInfoCircle,
} from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <section className="mt-3">
        <div className="d-flex flex-row bg-custom ">
          <div className="p-2">
            <span>Follow Us</span>
            <div>
              <span className="me-4 text-reset">
                <BsFacebook /> &nbsp;
              </span>
              <span className="me-4 text-reset">
                <BsTwitter /> &nbsp;
              </span>
              <span className="me-4 text-reset">
                <BsTelegram /> &nbsp;
              </span>
              <span className="me-4 text-reset">
                <BsLinkedin /> &nbsp;
              </span>
            </div>
          </div>

          <div className="d-flex justify-content-center p-4">
            <span>
              <h6 className="text-uppercase fw-bold mb-4">
                <BsInfoCircle /> &nbsp; Company name
              </h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                quasi eos asperiores earum laudantium neque.
              </p>
            </span>
          </div>

          <div className="p-2 ">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <BsHouseDoorFill /> &nbsp; New York, NY 10012, US
            </p>
            <p>
              <BsFillEnvelopePaperFill /> &nbsp; info@example.com
            </p>
            <p>
              <BsTelephone />
              &nbsp; + 01 234 567 88
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
