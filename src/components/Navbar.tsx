"use client";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  isSeperatePage?: boolean | undefined;
};

const navItems: NavItem[] = [
  { label: "Home", href: "home" },
  { label: "Gallery", href: "gallery", isSeperatePage: true },
  { label: "About", href: "about", isSeperatePage: true },
  { label: "Contact", href: "contact" },
  // { label: "Convocation", href: "convocation", isSeperatePage: true },
];

function Navbar() {
  const router = useRouter();
  const pathName = usePathname();
  const pathArray = pathName.split("/").map((item) => {
    if (item === "") return "home";
    return item;
  });
  const currentPath = pathArray[pathArray.length - 1];
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);

    if (!element) {
      globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  const elementIsVisibleInViewport = (
    el: HTMLElement | null,
    partiallyVisible = true
  ) => {
    if (!el) return false;
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
      ? ((top > 0 && top < innerHeight) ||
          (bottom > 0 && bottom < innerHeight)) &&
          ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
      : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };

  const setActiveLinks = () => {
    if (elementIsVisibleInViewport(document.getElementById("home"))) {
      setActiveLink("Home");
    }
    if (elementIsVisibleInViewport(document.getElementById("gallery"))) {
      setActiveLink("Gallery");
    }
    if (elementIsVisibleInViewport(document.getElementById("about"))) {
      setActiveLink("About");
    }
    if (elementIsVisibleInViewport(document.getElementById("contact"))) {
      setActiveLink("Contact");
    }
  };

  //changed initial state value otherwise 'Home' is set as activeLink in about page after a refresh
  const [activeLink, setActiveLink] = useState(
    currentPath.charAt(0).toUpperCase() + currentPath.slice(1)
  );

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", setActiveLinks);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={"flex-[0_0_auto] sticky top-0 z-50 flex justify-center"}>
      <div className="absolute backdrop-blur-lg bg-black bg-opacity-0 w-full">
        <div className=" relative lg:text-[16px]">
          <div className="py-4 px-4 md:px-16 md:py-3 flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <button className="px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors">
            ThashmikaX
          </button>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12 text-black">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={cn("focus:text-[#9a9a9a]", {
                    "bg-text-gradient text-[#9a9a9a] bg-clip-text":
                      activeLink === item.label,
                  })}
                >
                  <div
                    className="hover:cursor-pointer nav-link"
                    onClick={() => {
                      if (!item.isSeperatePage && currentPath === "home") {
                        scrolltoHash(item.href);
                      } else {
                        router.push(
                          item.isSeperatePage
                            ? `/${item.href}`
                            : `/#${item.href}`
                        );
                      }

                      setActiveLink(item.label);
                    }}
                  >
                    {item.label}
                  </div>
                </li>
              ))}
            </ul>
            <div className="lg:hidden md:flex flex-col justify-end">
              <HamburgerMenu
                isOpen={mobileDrawerOpen}
                toggleMenu={toggleNavbar}
              />
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 backdrop-blur-lg bg-black text-white bg-opacity-50 w-full pt-2 flex flex-col justify-center lg:hidden">
              <div className="">
                <ul>
                  {navItems.map((item, index) => (
                    <li
                      key={index}
                      className={
                        activeLink == item.label
                          ? "bg-text-gradient text-[#9a9a9a] bg-clip-text"
                          : undefined
                      }
                    >
                      <div
                        className="hover:cursor-pointer nav-link py-2"
                        onClick={() => {
                          if (!item.isSeperatePage && currentPath === "home") {
                            scrolltoHash(item.href);
                          } else {
                            router.push(
                              item.isSeperatePage
                                ? `/${item.href}`
                                : `/#${item.href}`
                            );
                          }
                          setActiveLink(item.label);
                        }}
                      >
                        {item.label}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

const HamburgerMenu = (props: { toggleMenu: () => void; isOpen: boolean }) => (
  <button
    onClick={props.toggleMenu}
    className="relative w-6 h-4 flex flex-col justify-between items-center group"
  >
    <span
      className={clsx(
        "block w-full h-0.5 bg-black transform transition duration-300",
        { "rotate-45 translate-y-1.5": props.isOpen }
      )}
    ></span>
    <span
      className={clsx("block w-full h-0.5 bg-black transition duration-300", {
        "opacity-0": props.isOpen,
      })}
    ></span>
    <span
      className={clsx(
        "block w-full h-0.5 bg-black transform transition duration-300",
        { "-rotate-45 -translate-y-1.5": props.isOpen }
      )}
    ></span>
  </button>
);
