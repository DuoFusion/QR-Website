import { Queries } from "../api";
import { SettingType } from "../types";

// ✅ Static constant export
export const ROUTES = {
  HOME: "/",
};

export type DynamicRoute = {
  WEB: string;
  All_PRODUCT: string;
};

export type RoutesType = {
  HOME: string;
  dynamic: Record<string, DynamicRoute>;
};

// ✅ Hook that fetches routes dynamically
export const useRoutes = (): RoutesType => {
  const { data } = Queries.useGetUserSetting({});

  const settings = data?.data?.setting_data ?? [];

  const dynamicRoutes = settings.reduce<Record<string, DynamicRoute>>(
    (acc, item: SettingType) => {
      const weburl = item.weburl;
      
      acc[item.weburl] = {
        WEB: weburl,
        All_PRODUCT: `${weburl}/all-product`,
      };
      return acc;
    },
    {}
  );

  return {
    HOME: ROUTES.HOME, // use static HOME from constant
    dynamic: dynamicRoutes,
  };
};
