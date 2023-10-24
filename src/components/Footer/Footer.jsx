import React from "react";

import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import css from "./Footer.module.css";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper} id="Footer">
      <hr />

      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>Shopify</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us </span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>54 Avenue road, WhiteField, BangaloreUrban, 560066</span>
            </span>

            <span className={css.pngLine}>
              {""}
              <PhoneIcon className={css.icon} />
              <a href="Tel: 1800-200-2200">1800-200-2200</a>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto: support@shopify.com">support@shopify.com</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />

              <Link to="#Home">Sign In</Link>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <a
                href="https://www.linkedin.com/in/ankitakash07"
                target="_blank"
                rel="noreferrer"
              >
                <UserIcon className={css.icon} />
              </a>
              <a
                href="https://www.linkedin.com/in/ankitakash07"
                target="_blank"
                rel="noreferrer"
              >
                About Us
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Terms Of Service</span>
            <span className={css.pngLine}>
              <a href="https://www.privacypolicies.com/public/images/preview-sample/privacy-policy-sample-large.jpeg">
                <LinkIcon className={css.icon} />
              </a>
              <a href="https://www.privacypolicies.com/public/images/preview-sample/privacy-policy-sample-large.jpeg">
                <p>Safety Privacy and Policy</p>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
        <span>CopyRight ©2023 by Shopify, Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
