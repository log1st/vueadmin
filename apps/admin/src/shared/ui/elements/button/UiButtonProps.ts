import { UnionFromArrayConst } from "@/shared/ui";

export const uiButtonType = ["submit", "reset", "button"] as const;
export type UiButtonType = UnionFromArrayConst<typeof uiButtonType>;

export type UiButtonProps = {
  type?: UiButtonType;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
};

export type UiButtonEmits = {
  (e: "click", event: MouseEvent): void;
};
