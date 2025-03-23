import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/book-list/", // 👈 Add this (MUST match the repository name)
});
