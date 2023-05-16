import styled from "styled-components";
import PaletteIcon from '@mui/icons-material/Palette';
import React, { useState, useEffect, useRef } from "react";
import ThemeMenuDropDown from "./ThemeMenuDropDown"

// Component Styles

const Root = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative
`;

const ThemeMenuButton = styled.button`
border-radius: 10px;
width: 80%;
aspect-ratio: 1/1;
border: none;
background-color: ${props => props.isActive ? props.color : "transparent"};
cursor: pointer;
`


/** Sidebar view of the Editor page */
function Sidebar(props) {
  // showMenu State Variable
  const [showMenu, setShowMenu] = useState(false);
  const [isActive, setIsActive] = useState(false)
  const ulRef = useRef();
  const iconRef = useRef()

  // Open menu function when clicking button
  const openMenu = (e) => {
    if (showMenu) return;
    setShowMenu(true);
    setIsActive(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      // If any elements other than the dropdown, the button, or the icon are clicked, close the dropdown and set the button to inactive
      if (!ulRef.current.contains(e.target) && e.target.id !== "sidebar-theme-button" && !iconRef.current.contains(e.target)) {
        setShowMenu(false);
        setIsActive(false);
      }
    };

    // Adding event listener to close the dropdown
    document.addEventListener('click', closeMenu);

    // Removing the event listener
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const ulClassName = "theme-dropdown" + (showMenu ? "" : " hidden");

  return (
    <Root>
      <ThemeMenuButton id="sidebar-theme-button" onClick={openMenu} isActive={isActive} color={props.theme["primary"]}>
        <PaletteIcon sx={{color: props.theme["secondary"]}} fontSize="large" id="palette-icon" ref={iconRef}/>
      </ThemeMenuButton>
      <ThemeMenuDropDown className={ulClassName} ref={ulRef} theme={props.theme} themeName={props.themeName}/>
    </Root>
  );
}

export default Sidebar;
