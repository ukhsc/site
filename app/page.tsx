"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Download, ChevronDown } from "lucide-react";

const introPhotos = [
  "/intro/Screenshot1.png",
  "/intro/Screenshot2.png",
  "/intro/Screenshot3.png",
  "/intro/Screenshot4.png",
  "/intro/Screenshot5.png",
];

export default function Home() {
  const [userSystem, setUserSystem] = useState<string>("unknown");

  useEffect(() => {
    const checkUserSystem = () => {
      const userAgent = navigator.userAgent;

      if (/iPad|iPhone|iPod/.test(userAgent)) {
        return "iOS";
      }

      if (/android/i.test(userAgent)) {
        return "Android";
      }

      if (/Windows|Macintosh|Linux/.test(userAgent)) {
        return "Desktop";
      }

      return "unknown";
    };

    setUserSystem(checkUserSystem());
  }, []);

  return (
    <>
      <header className="w-full flex justify-center p-5 fixed top-0 bg-orange z-10">
        <Image
          alt="logo"
          src={"/text_logo/darkblue.svg"}
          width={60}
          height={20}
        />
      </header>
      <main className="w-full bg-orange overflow-y-auto">
        <div className="h-dvh flex flex-col items-center justify-center">
          <Image alt="app_icon" src={"/app_icon.svg"} width={60} height={60} />
          <h1 className="text-darkblue text-xl font-bold mt-5">
            UKHSC 行動會員 APP
          </h1>
          <div className="flex gap-2 items-center mt-3">
            {userSystem === "Desktop" ? (
              <div className="bg-darkorange text-white m-1 p-2 px-4 rounded-full font-medium">
                請使用您的手機下載
              </div>
            ) : (
              <button className="bg-darkblue text-white m-1 p-3 px-5 rounded-full font-medium font-sans flex items-center gap-5">
                <p>
                  前往 {userSystem === "iOS" ? "App Store" : "Google Play"} 下載
                </p>
                <Download size={20} />
              </button>
            )}
          </div>
          <ChevronDown size={25} className="opacity-50 absolute bottom-5 z-0" />
        </div>
        <div className="p-5 flex flex-col justify-center sm:items-center">
          <div className="border-b border-gray-300 mb-5">
            <h2 className="text-darkblue text-xl font-bold my-2">介紹</h2>
          </div>
          <div className="overflow-y-auto flex items-center gap-7">
            {introPhotos.map((photo, index) => (
              <Image
                key={index}
                alt="intro_photo"
                src={photo}
                width={220}
                height={50}
                className="rounded-xl"
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
