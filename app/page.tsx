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

  // 修改結構化資料
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "高校特約聯盟 APP 下載頁面",
    description:
      "高校特約聯盟官方 APP 下載頁面，提供 Android 與 iOS 版本下載。",
    mainEntity: {
      "@type": "SoftwareApplication",
      name: "高校特約聯盟 APP",
      applicationCategory: "MobileApplication",
      operatingSystem: "Android, iOS",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "TWD",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="w-full flex justify-center p-5 fixed top-0 bg-orange z-10">
        <Image
          alt="高校特約聯盟官方網站 Logo"
          src={"/text_logo/darkblue.svg"}
          width={60}
          height={20}
          priority
        />
      </header>
      <main className="w-full bg-orange overflow-y-auto">
        {/* Hero Section */}
        <div className="h-dvh flex flex-col items-center justify-center">
          <Image
            alt="高校特約聯盟 APP 圖示"
            src={"/app_icon.svg"}
            width={60}
            height={60}
            priority
          />
          <h1 className="text-darkblue text-xl font-bold mt-5">
            高校特約行動會員 APP
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

        {/* Screenshots Section */}
        <div className="p-5 flex flex-col justify-center sm:items-center">
          <div className="border-b border-gray-300 mb-5">
            <h2 className="text-darkblue text-xl font-bold my-2">介紹</h2>
          </div>
          <div className="overflow-y-auto flex items-center gap-7">
            {introPhotos.map((photo, index) => (
              <Image
                key={index}
                alt={`高校特約聯盟 APP 功能展示圖 ${index + 1}`}
                src={photo}
                width={220}
                height={50}
                className="rounded-xl"
              />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="p-5 flex flex-col justify-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-4">主要特色</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">■ 數位會員卡</h3>
                <p>
                  告別特約貼紙，再也不會遺失了！您只要出示手機內的會員資格供特約店家查驗，即可立即享受優惠。
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">■ 全新消費體驗</h3>
                <p>
                  除了會員認證外，我們更結合了發票載具的綁定，下次消費時不再需要反覆切換發票軟體。還有更多商店整合服務即將推出，也歡迎您透過各種管道提供回饋。
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">■ 取之於公共，用之於公共</h3>
                <p>
                  我們相信唯有共同分享知識及資源，才能深化學生自治及公共參與的發展。因此我們採用開放原始碼授權，邀請更多人參與這場開源運動。
                </p>
              </div>
            </div>

            {/* Schools Section */}
            <div className="mt-8">
              <h2 className="text-xl font-bold mb-4">合作學校（2025）</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  "三民高中",
                  "小港高中",
                  "中正高中",
                  "仁武高中",
                  "文山高中",
                  "左營高中",
                  "林園高中",
                  "前鎮高中",
                  "高師大附中",
                  "高雄中學",
                  "新莊高中",
                  "新興高中",
                ].map((school) => (
                  <div
                    key={school}
                    className="bg-white/50 p-2 rounded-lg text-center"
                  >
                    {school}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-sm text-gray-600">
              <p>聯繫方式：contact@ukhsc.org</p>
              <div className="mt-2">
                <a href="/legal/terms" className="underline">
                  使用者服務條款
                </a>
                <span className="mx-2">|</span>
                <a href="/legal/privacy-policy" className="underline">
                  隱私權政策
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
