/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string;
  readonly VITE_TRACKING_ID?: string;
  readonly VITE_ENABLE_ANALYTICS?: string;
  readonly VITE_CORS_ORIGIN?: string;
  // add any other VITE_ variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
