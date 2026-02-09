export const themeConfig = {
    colors: {
        primary: "#1152d4",
        accent: "#d4af37",
        backgroundLight: "#f6f6f8",
        backgroundDark: "#101622",
    },
    fontFamily: {
        display: "Inter, sans-serif",
    },
} as const; // 'as const' භාවිතයෙන් අගයන් වෙනස් කළ නොහැකි ලෙස (ReadOnly) තබයි

export type ThemeConfig = typeof themeConfig;