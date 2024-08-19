export const removeLocale = (pathname: string | null) => {
  if (!pathname) return pathname;

  const m1 = /^\/\w\w$/i.exec(pathname);
  if (m1 && m1.length === 1) return "/";

  const m2 = /^\/\w\w\/(.*)/i.exec(pathname);
  if (m2 && m2.length === 2) return "/" + m2[1];

  return pathname;
};
