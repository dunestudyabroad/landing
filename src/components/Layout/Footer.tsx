"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/icons/footer.svg";
import logo2 from "../../../public/icons/footer2.svg";
import {
  LinkedIn,
  Yt,
  Meta,
  Inatagram,
} from "../../../public/icons/footerIcons/Icons";
import Link from "next/link";


const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  return (
    <footer className="relative">
      {/* BACKDROP & MODAL */}
      {showPrivacyModal && (
        <>
          <div
            className="bg-black/30 backdrop-blur-lg h-full w-full fixed inset-0"
            onClick={() => setShowPrivacyModal(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="max-w-6xl mx-auto bg-white pt-7 pb-7  py-32 dark:bg-neutral-900 lg:my-10 z-[60]  w-full min-h-full lg:h-fit lg:min-h-0 lg:rounded-3xl font-sans relative">
              <button
                className="sticky top-4 h-10 w-10 mr-4 right-0 z-[999] bg-[#E8E8ED] ml-auto rounded-full flex items-center justify-center"
                onClick={() => setShowPrivacyModal(false)}
              >
                ×
              </button>
              <h2 className="text-4xl text-center font-bold mb-4">
                Privacy Policy
              </h2>
              <p className="text-2xl px-32 text-black text-left">
                Dune Study Metro is the sole owner of the information collected through this website and associated platforms. The privacy and trust of our students, clients, and website visitors is of utmost importance to us. We deeply value the information you share and are committed to protecting it with the highest level of care.

              </p>
              <p className="text-2xl pt-16 px-32 pb-7 text-black text-left">
                We assure you that under no circumstances will your personal information be sold, rented, or disclosed to third parties for commercial purposes. Any data collected will be used solely for providing our educational consulting services and as described in this Privacy Policy
              </p>
            </div>
          </div>
        </>
      )}

      {/* MAIN FOOTER */}
      <div className="bg-[#2B2B60]">
        <div className="flex flex-col md:flex-row justify-between mx-6 md:mx-24 py-8 md:py-14">
          <div className="flex justify-center gap-5 md:justify-start mb-6 md:mb-0">
            <Link href="/">
              <Image alt="footer logo" width={210} height={210} src={logo} />
            </Link>
            <Image
              alt="footer logo 2"
              width={200}
              height={240}
              src={logo2}
              className="hidden md:block pt-4"
            />
          </div>
          <div className="flex justify-center gap-5 md:justify-start mb-6 md:mb-0">
            <Image
              alt="footer logo mobile"
              width={240}
              height={240}
              src={logo2}
              className="md:hidden"
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-[14px] text-[#FEFEFE] md:text-[18px]">
              For Free Counselling Contact
            </p>
            <Link href="tel:+918792358999">
              <p className="text-[14px] font-semibold text-[#FEFEFE] md:text-[18px]">
                +91 879 235 8999
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mx-6 md:mx-24 pt-6 md:pt-9 pb-8 md:pb-14">
          <div className="flex justify-center md:justify-start gap-4 mb-4 md:mb-0">
            {/* <Link
              target="_blank"
              href="https://www.instagram.com/dunestudymetro_mangalore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <Inatagram />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/company/study-metro-mangalore/">
              <LinkedIn />
            </Link>
            <Link
              target="_blank"
              href="https://www.facebook.com/share/1EcdrNpkNP/?mibextid=wwXIfr"
            >
              <Meta />
            </Link>
            <Link
              target="_blank"
              href="https://youtube.com/@dunestudyabroad?si=CTCfsXeNVSpuJqOQ"
            >
              <Yt />
            </Link> */}
          </div>

          <div className="text-[#9583FE] text-[13px] text-center md:text-left mb-4 md:mb-0">
            <p>
              <button
                onClick={() => setShowPrivacyModal(true)}
                className="hover:underline focus:outline-none"
              >
                Privacy Policy
              </button>
              <span className="mx-2">.</span>
              <Link
                target="_blank"
                href="https://www.studymetro.com/TermsCondition"
              >
                <span>Terms of Use</span>
              </Link>
            </p>
          </div>

          <div className="text-[#9583FE] text-[13px] text-center md:text-right">
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
