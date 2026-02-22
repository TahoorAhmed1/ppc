"use client";

import { logo } from "@/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ChevronDown, Map, MapIcon, MapPinIcon } from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const pulse: any = {
    hidden: { scale: 0.9, opacity: 0.4 },
    visible: {
      scale: [1, 1.05, 1],
      opacity: [0.5],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        duration: 3,
      },
    },
  };

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Hover animation for links
  const linkHoverAnimation = {
    whileHover: {
      x: 5,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  return (
    <motion.footer
      className="border-t border-gray-200 pt-12 pb-8 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={pulse}
          className="absolute md:top-[15%] top-[10%] left-[5%] w-[8vw] h-[8vw] md:w-[6vw] md:h-[6vw] rounded-full bg-gradient-to-r from-black/40 to-black/30 opacity-50 pointer-events-none"
        ></motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={pulse}
          transition={{ delay: 0.3 }}
          className="absolute md:bottom-[15%] bottom-[10%] right-[5%] w-[10vw] h-[10vw] md:w-[7vw] md:h-[7vw] rounded-full bg-gradient-to-r from-black/40 to-black/30 opacity-40 pointer-events-none"
        ></motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={pulse}
          transition={{ delay: 0.6 }}
          className="absolute md:top-[60%] top-[70%] left-[20%] w-[6vw] h-[6vw] md:w-[4vw] md:h-[4vw] rounded-full bg-gradient-to-r from-black/50 to-black/40 opacity-40 pointer-events-none"
        ></motion.div>
      </motion.div>

      <motion.div
        className="container grid grid-cols-1  lg:grid-cols-3 px-4 mx-auto space-y-12 lg:space-y-0  relative z-10 lg:gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="col-span-1 max-w-md space-y-6"
          variants={itemVariants}
        >
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a href="/" className="flex font-bold text-3xl items-center">
              Nexuz Global
            </a>
          </motion.div>

          <motion.p
            className="text-black font-medium leading-relaxed"
            variants={itemVariants}
          >
            "We're a results-driven digital marketing agency focused on helping
            brands grow in a digital-first world."We're a results-driven digital
            marketing agency focused on helping brands grow in a digital-first
            world."
          </motion.p>
          <div className="flex gap-4 mt-4">
           
            <motion.a
              href="https://www.instagram.com/NexuzGlobal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105"
              whileHover={{
                scale: 1.15,
                transition: { type: "spring", stiffness: 400 },
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_498_607)">
                  <path
                    d="M25.2575 0H11.0916C5.33451 0 0.650757 4.68375 0.650757 10.4409V24.6067C0.650757 30.3639 5.33451 35.0476 11.0916 35.0476H25.2575C31.0146 35.0476 35.6984 30.3639 35.6984 24.6067V10.4409C35.6983 4.68375 31.0146 0 25.2575 0ZM32.1726 24.6067C32.1726 28.4258 29.0766 31.5218 25.2575 31.5218H11.0916C7.27257 31.5218 4.17655 28.4258 4.17655 24.6067V10.4409C4.17655 6.62175 7.27257 3.52579 11.0916 3.52579H25.2575C29.0766 3.52579 32.1726 6.62175 32.1726 10.4409V24.6067Z"
                    fill="black"
                  />
                  <path
                    d="M18.1745 8.45996C13.1763 8.45996 9.10999 12.5263 9.10999 17.5245C9.10999 22.5226 13.1763 26.589 18.1745 26.589C23.1728 26.589 27.2391 22.5227 27.2391 17.5245C27.2391 12.5263 23.1728 8.45996 18.1745 8.45996ZM18.1745 23.0633C15.1155 23.0633 12.6358 20.5835 12.6358 17.5245C12.6358 14.4655 15.1156 11.9858 18.1745 11.9858C21.2336 11.9858 23.7133 14.4655 23.7133 17.5245C23.7133 20.5835 21.2335 23.0633 18.1745 23.0633Z"
                    fill="black"
                  />
                  <path
                    d="M27.2566 10.6996C28.4562 10.6996 29.4287 9.72712 29.4287 8.52752C29.4287 7.32793 28.4562 6.35547 27.2566 6.35547C26.0571 6.35547 25.0846 7.32793 25.0846 8.52752C25.0846 9.72712 26.0571 10.6996 27.2566 10.6996Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_498_607">
                    <rect
                      width="35.0476"
                      height="35.0476"
                      fill="white"
                      transform="translate(0.650757)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </motion.a>
            <motion.a
              href="https://www.facebook.com/profile.php?id=2312312"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105"
              whileHover={{
                scale: 1.15,
                transition: { type: "spring", stiffness: 400 },
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_498_645)">
                  <path
                    d="M30.6268 0H5.02498C2.41674 0 0.302246 2.11441 0.302246 4.72274V30.3247C0.302246 32.933 2.41665 35.0474 5.02498 35.0474H17.6517L17.6732 22.5234H14.4194C13.9966 22.5234 13.6534 22.1815 13.6518 21.7586L13.6362 17.7216C13.6345 17.2964 13.9788 16.9509 14.4039 16.9509H17.6518V13.0501C17.6518 8.5233 20.4165 6.05841 24.4547 6.05841H27.7684C28.1923 6.05841 28.5361 6.40212 28.5361 6.82617V10.2302C28.5361 10.6541 28.1926 10.9977 27.7688 10.998L25.7352 10.9989C23.5391 10.9989 23.1139 12.0425 23.1139 13.574V16.951H27.9395C28.3993 16.951 28.756 17.3525 28.7019 17.8091L28.2234 21.8462C28.1776 22.2325 27.85 22.5236 27.461 22.5236H23.1354L23.1139 35.0476H30.627C33.2352 35.0476 35.3496 32.9332 35.3496 30.325V4.72274C35.3495 2.11441 33.2351 0 30.6268 0Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_498_645">
                    <rect
                      width="35.0476"
                      height="35.0476"
                      fill="white"
                      transform="translate(0.301636)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/NexuzGlobal/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105"
              whileHover={{
                scale: 1.15,
                transition: { type: "spring", stiffness: 400 },
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_498_662)">
                  <path
                    d="M32.8297 0H4.12273C2.37182 0 0.952393 1.41943 0.952393 3.17034V31.8772C0.952393 33.6282 2.37182 35.0476 4.12273 35.0476H32.8296C34.5806 35.0476 36 33.6282 36 31.8772V3.17034C36 1.41943 34.5806 0 32.8297 0ZM11.7976 30.2624C11.7976 30.772 11.3846 31.185 10.875 31.185H6.94765C6.43808 31.185 6.02503 30.772 6.02503 30.2624V13.7991C6.02503 13.2896 6.43808 12.8765 6.94765 12.8765H10.875C11.3846 12.8765 11.7976 13.2896 11.7976 13.7991V30.2624ZM8.91132 11.3246C6.85076 11.3246 5.18031 9.65415 5.18031 7.59359C5.18031 5.53303 6.85076 3.86258 8.91132 3.86258C10.9719 3.86258 12.6423 5.53303 12.6423 7.59359C12.6423 9.65415 10.972 11.3246 8.91132 11.3246ZM32.3218 30.3367C32.3218 30.8052 31.942 31.185 31.4735 31.185H27.2592C26.7907 31.185 26.4109 30.8052 26.4109 30.3367V22.6145C26.4109 21.4625 26.7488 17.5665 23.4004 17.5665C20.8031 17.5665 20.2763 20.2332 20.1705 21.43V30.3367C20.1705 30.8052 19.7908 31.185 19.3222 31.185H15.2462C14.7778 31.185 14.3979 30.8052 14.3979 30.3367V13.7248C14.3979 13.2563 14.7778 12.8765 15.2462 12.8765H19.3222C19.7907 12.8765 20.1705 13.2563 20.1705 13.7248V15.1611C21.1336 13.7158 22.5648 12.6003 25.6122 12.6003C32.3605 12.6003 32.3218 18.9048 32.3218 22.3688V30.3367Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_498_662">
                    <rect
                      width="35.0476"
                      height="35.0476"
                      fill="white"
                      transform="translate(0.952393)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="col-span-2 grid grid-cols-1 md:grid-cols-4 gap-5 text-sm"
          variants={containerVariants}
        >
          <div className="space-y-4 text-black">
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-black/80 to-black text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Company
            </motion.h3>
            <div className="flex flex-col space-y-4 text-sm">
              <motion.a
                href={"/"}
                rel="noreferrer"
                whileHover={{ x: 5, color: "black" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Home
              </motion.a>
              <motion.a
                href={"#aboutus"}
                rel="noreferrer"
                whileHover={{ x: 5, color: "black" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                About Us
              </motion.a>
              <motion.a
                href={"#contactus"}
                rel="noreferrer"
                whileHover={{ x: 5, color: "black" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Contact Us
              </motion.a>
              <motion.a
                href={"/social-media-marketing-services"}
                rel="noreferrer"
                whileHover={{ x: 5, color: "black" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href={"/terms-&-condition"}
                rel="noreferrer"
                whileHover={{ x: 5, color: "black" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Terms & Conditions
              </motion.a>
            </div>
          </div>

          <div className="space-y-4 text-black">
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-black/80 to-black text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Services
            </motion.h3>
            <div className="flex flex-col space-y-4 text-sm">
              <motion.a
                target="_blank"
                href={"/logo-services"}
                rel="noreferrer"
                whileHover={{ x: 5, color: "black" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Logo Design
              </motion.a>
              <motion.a
                target="_blank"
                href={"/website-development-services"}
                rel="noreferrer"
                whileHover={{ x: 5, color: "black" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Website Design & Development
              </motion.a>
              <motion.a
                target="_blank"
                href={"/e-commerce-services"}
                rel="noreferrer"
                whileHover={{ x: 5, color: "black" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                E-Commerce Websites
              </motion.a>
              <motion.a
                target="_blank"
                href={"/social-media-marketing-services"}
                rel="noreferrer"
                whileHover={{ x: 5, color: "black" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Social Media Marketing
              </motion.a>
              <motion.a
                target="_blank"
                href={"/terms-&-condition"}
                rel="noreferrer"
                whileHover={{ x: 5, color: "black" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Search Engine Optimization
              </motion.a>
            </div>
          </div>
          <div className="space-y-4 md:col-span-2 text-black">
            <motion.h3
              className="text-xl font-bold bg-gradient-to-r from-black/80 to-black text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact us
            </motion.h3>

            <motion.div
              className="flex items-center gap-2 text-sm"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.a
                href="mailto:support@nexuzglobal.com"
                className="flex items-center gap-2"
                whileHover={{ color: "black" }}
              >
                <Mail className="w-5 h-5 text-black text-sm" />
                <span>support@nexuzglobal.com</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-sm"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Phone className="w-5 h-5 text-black" />
              <motion.a href="tel:+18045745376" whileHover={{ color: "black" }}>
                +92 3282371639
              </motion.a>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-sm"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <MapPinIcon className="w-5 h-5 text-black" />
              <p className="text-sm">Pakistan Karachi</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-12 pt-4 border-t border-gray-200 text-center text-black text-sm relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        © 2025 Nexuz Global , Inc. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}

function AnimatedFooterColumn({
  title,
  links,
  hasServicesDropdown = false,
  servicesOpen,
  setServicesOpen,
}: {
  title: string;
  links: string[];
  hasServicesDropdown?: boolean;
  servicesOpen?: boolean;
  setServicesOpen?: (open: boolean) => void;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const dropdownVariants = {
    hidden: { height: 0, opacity: 0, overflow: "hidden" },
    visible: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Define serviceItems for the dropdown
  const serviceItems = [
    { label: "Logo Design", href: "/logo-services" },
    { label: "Website Development", href: "/website-development-services" },
    { label: "E-Commerce", href: "/e-commerce-services" },
    {
      label: "Social Media Marketing",
      href: "/social-media-marketing-services",
    },
    { label: "SEO", href: "/seo-services" },
  ];

  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h3
        className="text-xl font-bold bg-gradient-to-r from-black/80 to-black text-transparent bg-clip-text"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h3>
      <motion.ul className="space-y-3" variants={containerVariants}>
        {links.map((link, index) => {
          const href = `#${link.toLowerCase().replace(" ", "")}`;
          return (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{ x: 5, color: "black" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <a href={href} className="text-black hover:text-gray-900">
                {link}
              </a>
            </motion.li>
          );
        })}

        <div className="flex flex-col space-y-2">
          <motion.a
            target="_blank"
            href={"/privacy"}
            rel="noreferrer"
            className="text-black hover:text-gray-900"
            whileHover={{ x: 5, color: "black" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Privacy Policy
          </motion.a>

          <motion.a
            target="_blank"
            href={"/terms-&-condition"}
            rel="noreferrer"
            className="text-black hover:text-gray-900"
            whileHover={{ x: 5, color: "black" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Terms & Conditions
          </motion.a>
        </div>

        {hasServicesDropdown && (
          <>
            <motion.li
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="cursor-pointer"
            >
              <div
                className="flex items-center justify-between text-black hover:text-gray-900"
                onClick={() =>
                  setServicesOpen && setServicesOpen(!servicesOpen)
                }
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </div>

              <motion.div
                className="pl-4 mt-2 space-y-2 border-l border-gray-200"
                initial="hidden"
                animate={servicesOpen ? "visible" : "hidden"}
                variants={dropdownVariants}
              >
                {serviceItems.map((service, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ x: 5, color: "black" }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <a
                      href={service.href}
                      className="block text-sm text-gray-500 hover:text-gray-900 hover:font-medium"
                    >
                      {service.label}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </motion.li>
          </>
        )}
      </motion.ul>
    </motion.div>
  );
}
