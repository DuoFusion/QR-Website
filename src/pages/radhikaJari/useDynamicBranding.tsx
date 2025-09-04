import { useEffect } from "react";

type BrandingOptions = {
  primary?: string;
  secondary?: string;
  backgroundColor?: string;
  logoImage?: string;
  businessName?: string;
};

export const useDynamicBranding = ({ primary, secondary, backgroundColor, logoImage, businessName }: BrandingOptions) => {
  useEffect(() => {
    // ✅ Update theme colors
    if (primary && secondary && backgroundColor) {
      document.documentElement.style.setProperty("--primary", primary);
      document.documentElement.style.setProperty("--secondary", secondary);
      document.documentElement.style.setProperty("--container-body", backgroundColor);
    }

    // ✅ Update favicon dynamically
    if (logoImage) {
      const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']");
      if (favicon) {
        favicon.href = logoImage;
      } else {
        const link = document.createElement("link");
        link.rel = "icon";
        link.href = logoImage;
        document.head.appendChild(link);
      }
    }

    // ✅ Update title dynamically
    if (businessName) {
      document.title = `${businessName}`;
    } else {
      document.title = "Website";
    }
  }, [primary, secondary, backgroundColor, logoImage, businessName]);
};
