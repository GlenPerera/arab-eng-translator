// src/app/providers.tsx
"use client";

import { NextIntlProvider } from "next-intl";

type Props = {
  children: React.ReactNode;
  locale: string;
};

export function Providers({ children, locale }: Props) {
  return <NextIntlProvider locale={locale}>{children}</NextIntlProvider>;
}
