export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const URL = {
  Inquiry: {
    GetAllInquiry: "/inquiry",
    Add: "/inquiry/add",
    Delete: "/inquiry/delete",
    Edit: "/inquiry/edit",
  },
} as const;

// Construct the URL object
export const URL_KEYS: { [K in keyof typeof URL]: { [P in keyof (typeof URL)[K]]: string } } = Object.fromEntries(Object.entries(URL).map(([key, subKeys]) => [key, Object.fromEntries(Object.entries(subKeys).map(([subKey, path]) => [subKey, `${BASE_URL}${path}`]))])) as {
  [K in keyof typeof URL]: { [P in keyof (typeof URL)[K]]: string };
};
