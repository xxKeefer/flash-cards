/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WORDS_API_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
