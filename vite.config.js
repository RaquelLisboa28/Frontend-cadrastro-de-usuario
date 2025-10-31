import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // use globs e regex para garantir que o arquivo seja ignorado no Windows
      ignored: [
        "**/node_modules/**",
        "**/.git/**",
        /DumpStack\.log\.tmp$/, // ignora qualquer DumpStack.log.tmp
        /C:\\DumpStack\.log\.tmp$/, // ignora caminho absoluto (Windows)
      ],
    },
  },
});
