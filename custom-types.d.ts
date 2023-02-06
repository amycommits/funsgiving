// custom-types.d.ts
declare module '@nuxt/types' {
  interface NuxtConfig {
    imports: {
      dirs: string[],
    },
    modules: string[],
    pinia: {
      autoImports: string[];
    };
  }
}
