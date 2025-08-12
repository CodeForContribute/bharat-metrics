import {
  Box,
  IconButton,
  IconButtonProps,
  Tooltip,
  type SxProps,
  type Theme,
} from "@mui/material";
import { type ReactNode } from "react";

/**
 * These are the mandatory and optional props for the custom icon component.
 * @public
 */
export interface IconComponentProps {
  icon: string | ReactNode;
  onClickFunction?: (...args: unknown[]) => unknown;
  tooltip?: string;
  size?: IconButtonProps["size"];
  sx?: SxProps<Theme>;
}

/**
 * A function to display any icon or image as a button.
 * @public
 */
export function IconComponent({
  icon,
  onClickFunction = () => {},
  tooltip = "",
  size = "small",
  sx = {},
}: IconComponentProps) {
  return (
    <Box>
      <Tooltip title={tooltip} arrow>
        <IconButton disableRipple onClick={onClickFunction} size={size} sx={sx}>
          {typeof icon === "string" ? (
            <Box
              component="img"
              src={icon}
              alt="icon"
              sx={{ width: 24, height: 24, ...sx }}
            />
          ) : (
            <>{icon}</>
          )}
        </IconButton>
      </Tooltip>
    </Box>
  );
}
