"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Download, ChevronDown, X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const introPhotos = [
  "/intro/Screenshot1.png",
  "/intro/Screenshot2.png",
  "/intro/Screenshot3.png",
  "/intro/Screenshot4.png",
  "/intro/Screenshot5.png",
];

const APP_LINKS = {
  iOS: "",
  Android: "https://play.google.com/store/apps/details?id=org.ukhsc.mobile",
};

export default function Home() {
  const [userSystem, setUserSystem] = useState<string>("unknown");
  const [showQRCode, setShowQRCode] = useState(false);

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

  const handleDownload = () => {
    const link = userSystem === "iOS" ? APP_LINKS.iOS : APP_LINKS.Android;
    window.location.href = link;
  };

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
    sameAs: ["https://instagram.com/ukhsc_2025"],
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
          width={userSystem === "Desktop" ? 80 : 60}
          height={userSystem === "Desktop" ? 26 : 20}
          priority
          className="transition-all"
        />
      </header>
      <main className="w-full bg-orange overflow-y-auto min-h-screen">
        {/* Hero Section */}
        <div
          className={`flex flex-col items-center justify-center max-w-7xl mx-auto px-4 ${
            userSystem !== "Desktop" ? "h-dvh" : "mt-24"
          }`}
        >
          <Image
            alt="高校特約聯盟 APP 圖示"
            src={"/app_icon.svg"}
            width={userSystem === "Desktop" ? 120 : 60}
            height={userSystem === "Desktop" ? 120 : 60}
            priority
            className="transition-all"
          />
          <h1 className="text-darkblue text-2xl md:text-3xl font-bold mt-5">
            高校特約行動會員 APP
          </h1>
          <div className="flex gap-2 items-center mt-3 mb-5">
            {userSystem === "Desktop" ? (
              <button
                onClick={() => setShowQRCode(true)}
                className="bg-darkorange text-white m-1 p-3 px-6 rounded-full font-medium text-lg hover:bg-darkorange/90 transition-colors"
              >
                掃描 QR Code 下載
              </button>
            ) : (
              <button
                onClick={handleDownload}
                className="bg-darkblue text-white m-1 p-3 px-5 rounded-full font-medium font-sans flex items-center gap-5"
              >
                <p>
                  前往 {userSystem === "iOS" ? "App Store" : "Google Play"} 下載
                </p>
                <Download size={20} />
              </button>
            )}
          </div>
          {userSystem !== "Desktop" && (
            <ChevronDown
              size={30}
              className="opacity-50 absolute bottom-5 animate-bounce"
            />
          )}
        </div>

        {/* Screenshots Section */}
        <div className="py-10 px-5 flex flex-col justify-center items-center">
          <div className="max-w-7xl w-full">
            <h2 className="text-darkblue text-2xl md:text-3xl font-bold mb-8">
              功能展示
            </h2>
            <div className="overflow-x-auto flex items-center gap-7 pb-4 md:justify-center">
              {introPhotos.map((photo, index) => (
                <Image
                  key={index}
                  alt={`高校特約聯盟 APP 功能展示圖 ${index + 1}`}
                  src={photo}
                  width={220}
                  height={50}
                  className="rounded-xl shadow-lg hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-10 px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">主要特色</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/50 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-3">數位會員卡</h3>
                <p className="text-lg">
                  告別特約貼紙，再也不會遺失了！您只要出示手機內的會員資格供特約店家查驗，即可立即享受優惠。
                </p>
              </div>
              <div className="bg-white/50 p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-3">全新消費體驗</h3>
                <p className="text-lg">
                  除了會員認證外，我們更結合了發票載具的綁定，下次消費時不再需要反覆切換發票軟體。還有更多商店整合服務即將推出，也歡迎您透過各種管道提供回饋。
                </p>
              </div>
              <div className="bg-white/50 p-6 rounded-xl md:col-span-2">
                <h3 className="font-bold text-xl mb-3">
                  取之於公共，用之於公共
                </h3>
                <p className="text-lg">
                  我們相信唯有共同分享知識及資源，才能深化學生自治及公共參與的發展。因此我們採用開放原始碼授權，邀請更多人參與這場開源運動。
                </p>
              </div>
            </div>

            {/* Schools Section */}
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                合作學校（2025）
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                    className="bg-white/50 p-4 rounded-xl text-center transition-colors"
                  >
                    {school}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <footer className="mt-16 text-base text-gray-700 border-t border-gray-300 pt-8">
              <p>聯繫方式：contact@ukhsc.org</p>
              <div className="mt-3 flex gap-4">
                <a
                  href="https://instagram.com/ukhsc_2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="在 Instagram 追蹤我們"
                  className="underline hover:text-gray-900"
                >
                  Instagram
                </a>
                <a
                  href="/legal/terms"
                  className="underline hover:text-gray-900"
                >
                  使用者服務條款
                </a>
                <a
                  href="/legal/privacy-policy"
                  className="underline hover:text-gray-900"
                >
                  隱私權政策
                </a>
              </div>
            </footer>
          </div>
        </div>
      </main>

      {/* QR Code Modal */}
      {showQRCode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl relative max-w-sm w-full mx-4">
            <button
              onClick={() => setShowQRCode(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center gap-6">
              <h3 className="text-xl font-bold">掃描下方 QR Code 下載</h3>
              <QRCodeSVG value={location.href} size={200} marginSize={4} />
              <p className="text-sm text-gray-500 text-center">
                請使用手機相機掃描 QR Code，
                <br />
                即可前往下載頁面。
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
