import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../styles/theme";
import Sidebar from "../components/editor/Sidebar";
import Site from "../components/editor/Site";
import { siteThemes } from "../constants/siteThemes";
import { useState, createContext } from "react";

// Component Styles

const Root = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1700px;
  margin: 0 auto;
  height: 100vh;
  padding: 0;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const RootContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transition: height 100ms linear;
  padding: 32px;
`;

const SiteWrapper = styled(motion.div)`
  flex: 1;
  height: 100%;
  min-height: 600px;
  overflow: hidden;
  border: 1px solid ${theme.colors.black[40]};
  border-radius: 8px;
  background-color: ${props => props.theme["primary"]}; // Change to Primary color
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SideBarWrapper = styled(motion.div)`
  margin-left: 2%;
  width: 64px;
  height: 100%;
`;

export const ThemeContext = createContext()

/** Root Editor View */
function Editor() {

  const localTheme = localStorage.getItem("localTheme")
  const [currentTheme, setCurrentTheme] = useState(localTheme || "default")
  const theme = siteThemes[currentTheme]
  
  return (
    <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
      <Root>
        <RootContent>
          <SiteWrapper layout theme={theme}>
            <Site theme={theme} />
          </SiteWrapper>
          <SideBarWrapper layout>
            <Sidebar theme={theme} themeName={currentTheme} />
          </SideBarWrapper>
        </RootContent>
      </Root>
    </ThemeContext.Provider>
  );
}

export default Editor;
