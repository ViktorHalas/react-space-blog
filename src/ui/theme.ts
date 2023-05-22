import { css } from "styled-components";
import { Color } from "ui";

export const themeLight = css`
  --primary-text: ${Color.SECONDARY};
  --primary-bg: ${Color.SECONDARY_EXTRALIGHT};
  --secondary-bg: ${Color.WHITE};
  --block-bg: ${Color.SECONDARY_LIGHT};
`;
export const themeDark = css`
  --primary-text: ${Color.WHITE};
  --primary-bg: ${Color.SECONDARY};
  --secondary-bg: ${Color.WHITE_TRANSPARENT};
  --block-bg: ${Color.WHITE_TRANSPARENT};
`;