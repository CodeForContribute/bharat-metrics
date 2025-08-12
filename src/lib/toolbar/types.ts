import { SxProps, Theme } from "@mui/material";

export type DisplayType = 'Text' | 'Icon' | 'RightIconWithText' | 'LeftIconWithText';

export type ToolBarDisplayType = 'static' | 'fixed' | 'sticky';

export interface MenuItemType {
  id: string;
  name?: string;
  icon?: React.ReactNode;
  displayType?: DisplayType;
  navigate?: string;
  menuSX?: React.CSSProperties;
  menus?: MenuItemType[];
  sx?:SxProps<Theme>;
}

export interface LogoProps {
  id: string;
  logoImage: React.ReactNode;
  logoSX?: React.CSSProperties;
  direction?: 'Left' | 'Right' | 'Center';
  separator?: boolean;
  sx?:SxProps<Theme>;
}

export interface WebsiteNameProps {
  id: string;
  name: string;
  nameSX?: React.CSSProperties;
  sx?:SxProps<Theme>;
}

export interface SubmenuPanelProps {
  backgroundColor?: string;
  textColor?: string;
  boxWidth?: number;
  padding?: string;
  sx?:SxProps<Theme>;
}

export interface ToolbarProps {
  logo?: LogoProps;
  websiteName?: WebsiteNameProps;
  menus: MenuItemType[];
  subMenusCategorized?: number; // number of items per column
  subMenusPanelSX?: SubmenuPanelProps;
  toolbarDisplay?:ToolBarDisplayType
  sx?:SxProps<Theme>;
}
