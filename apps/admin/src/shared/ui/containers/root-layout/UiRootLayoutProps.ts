import { UnionFromArrayConst } from "../../types";

export const uiRootLayoutThemes = ["light", "dark"] as const;
export type UiRootLayoutTheme = UnionFromArrayConst<typeof uiRootLayoutThemes>;

export type UiRootLayoutProps = {
    theme?: UiRootLayoutTheme;
};
