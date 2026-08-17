import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/NFT_dashboard/", // <--- نام دقیق ریپازیتوری همراه با اسلش در اول و آخر
});
