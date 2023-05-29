import { css } from "styled-components";
import { Color } from "./colors";


export const themeLight = css`
  --primary-text: ${Color.SECONDARY};
  --primary-bg: ${Color.SECONDARY_EXTRALIGHT};
  --secondary-bg: ${Color.WHITE};
  --block-bg: ${Color.SECONDARY_LIGHT};
  --secondary-text: ${Color.SECONDARY_MEDIUM}
`;
export const themeDark = css`
  --primary-text: ${Color.WHITE};
  --primary-bg: ${Color.SECONDARY};
  --secondary-bg: ${Color.BLACK_MEDIUM};
  --block-bg: ${Color.BLACK_LIGHT};
  --secondary-text: ${Color.BLACK_EXTRALIGHT};
`;