import React, { useState } from "react";
import { ToolbarProps, MenuItemType } from "./types";
import { AppBar, Box, Menu, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IconComponent } from "../icon-button/IconComponent";

export function CT_Toolbar({
  logo,
  toolbarDisplay = "sticky",
  websiteName,
  menus,
  subMenusCategorized = 3,
  subMenusPanelSX = {},
  sx,
}: ToolbarProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSubmenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    menuId: string
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveMenuId(menuId);
  };

  const handleSubmenuClose = () => {
    setAnchorEl(null);
    setActiveMenuId(null);
  };

  const renderDisplay = (menu: MenuItemType) => {
    switch (menu.displayType) {
      case "Icon":
        return menu.icon;
      case "RightIconWithText":
        return (
          <Box
            component="span"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            {menu.name} {menu.icon}
          </Box>
        );
      case "LeftIconWithText":
        return (
          <Box
            component="span"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            {menu.icon} {menu.name}
          </Box>
        );
      default:
        return menu.name;
    }
  };

  const chunkSubMenusEvenly = (
    items: MenuItemType[],
    numColumns: number
  ): MenuItemType[][] => {
    const result: MenuItemType[][] = Array.from(
      { length: numColumns },
      () => []
    );
    items.forEach((item, index) => {
      result[index % numColumns].push(item); // round-robin distribution
    });
    return result;
  };

  const renderSubmenuPanel = (menu: MenuItemType) => {
    if (!menu.menus || menu.menus.length === 0) return null;

    const columns = chunkSubMenusEvenly(menu.menus, subMenusCategorized);

    return (
      <Menu
        anchorEl={anchorEl}
        open={activeMenuId === menu.id}
        onClose={handleSubmenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        marginThreshold={0}
        PaperProps={{
          sx: {
            mt: 2,
            backgroundColor: subMenusPanelSX.backgroundColor || "#fff",
            color: subMenusPanelSX.textColor || "#000",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            padding: subMenusPanelSX.padding || "8px",
            ...subMenusPanelSX.sx,
          },
        }}
        MenuListProps={{
          component: "div",
          onMouseLeave: handleSubmenuClose,
          sx: {
            display: "flex",
            flexDirection: "row",
            padding: 0,
            margin: 0,
          },
        }}
      >
        {columns.map((col, colIdx) => (
          <React.Fragment key={colIdx}>
            <Box
              sx={{
                minWidth: subMenusPanelSX.boxWidth || 200,
                padding: "0 10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {col.map((item) => (
                <Box
                  key={item.id}
                  sx={{ my: 1, cursor: "pointer" }}
                  onClick={() => {
                    handleSubmenuClose();
                    if (item.navigate) window.location.assign(item.navigate);
                  }}
                >
                  {item.name}
                </Box>
              ))}
            </Box>

            {/* Pipe Separator */}
            {colIdx < columns.length - 1 && (
              <Box
                sx={{
                  borderLeft: "1px solid #ccc",
                  mx: 1,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Menu>
    );
  };

  const renderMenu = (menu: MenuItemType) => (
    <Box
      key={menu.id}
      sx={{ margin: "0 5px", ...menu.menuSX }}
      onMouseEnter={(e) => {
        if (menu.menus && menu.menus.length > 0) {
          handleSubmenuOpen(e as React.MouseEvent<HTMLElement>, menu.id);
        }
      }}
    >
      <Box
        sx={{
          cursor: "pointer",
          fontSize: { xs: 12, sm: 14, md: 16 },
          ...menu.sx,
        }}
        onClick={() => menu.navigate && window.location.assign(menu.navigate)}
      >
        {renderDisplay(menu)}
      </Box>

      {activeMenuId === menu.id && renderSubmenuPanel(menu)}
    </Box>
  );

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position={toolbarDisplay} enableColorOnDark>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            justifyContent: "space-between",
            padding: { xs: "8px 12px", md: "10px 24px" },
            minHeight: "5px",
            flexWrap: "nowrap",
            background: "#004a91",
            color: "#fff",
            borderBottom: "1px solid #ccc",
            ...sx,
          }}
        >
          {/* Mobile Menu Icon */}
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <IconComponent
              icon={<MenuIcon />}
              size="large"
              aria-label="menu"
              onClickFunction={(event: unknown) =>
                handleOpenNavMenu(event as React.MouseEvent<HTMLElement>)
              }
            />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {menus.map(renderMenu)}
            </Menu>
          </Box>

          {/* Logo */}
          {logo && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                ...logo.logoSX,
                ...logo.sx,
              }}
            >
              {logo.logoImage}
              {logo.separator && (
                <Box sx={{ height: "20px", borderLeft: "1px solid #ccc" }} />
              )}
            </Box>
          )}

          {/* Website Name */}
          {websiteName && (
            <Box
              sx={{
                fontWeight: "bold",
                fontSize: { xs: 16, sm: 18, md: 20 },
                mx: 2,
                ...websiteName.nameSX,
                ...websiteName.sx,
              }}
            >
              {websiteName.name}
            </Box>
          )}

          {/* Desktop Menus */}
          <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto" }}>
            {menus.map(renderMenu)}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
