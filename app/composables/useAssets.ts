export function useAssets(path: string): string {
  const assets = import.meta.glob(["~/assets/**/*", "!~/assets/styles/*"], {
    eager: true,
    import: "default",
  });

  return assets["/assets/" + path] as string;
}
