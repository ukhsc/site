import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "高校特約聯盟官方網站",
    short_name: "高校特約官網",
    description: "高校特約聯盟 APP 下載頁面",
    start_url: "/",
    display: "browser",
    background_color: "#ffe9d4",
    theme_color: "#34495d",
    icons: [
      {
        src: "/app_icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
