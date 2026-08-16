import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://github.com/fatememirjalili2000/NFT_dashboard", // <--- نام دقیق ریپوزیتوری خودت را بین دو اسلش بگذار
});
