import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { siteThemes } from "../../../../../constants/siteThemes";
import { useContext } from "react";
import { ThemeContext } from "../../../../../pages/Editor";

const Root = styled.div`
    width: 100%;
`
const ThemeInput = styled.div`
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.secondary};
    width: 80%;
    padding: 0 5%;
    margin-top: 5%;
    height: 35px;
    border-radius: 8px;
    border: .5px solid lightgray;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
`
const ThemeDropDown = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 30%;
    padding: 0;
    margin-top: 5%;
    border: .5px solid lightgray;
    border-radius: 8px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 8px;
      }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 10px;
      }
    &::-webkit-scrollbar-thumb {
        background: gray;
        border-radius: 10px;
      }
    &::-webkit-scrollbar-thumb:hover {
        background: #4573d2;
      }
`
const SiteTheme = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: .95em;
    padding: 10px;
    cursor: pointer;
    &: hover {
        background-color: lightgray;
    }
`

const ThemeCirclesWrapper = styled.div`
    display: flex;
    width: 45%;
    justify-content: space-between
`

const ThemeCircle = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${prop => prop.color};
    border-radius: 10px;
    border: .5px solid lightgray;
`
function ThemeSelector(props) {
    const {setCurrentTheme} = useContext(ThemeContext)
    const ulRef = useRef();

    const [showThemesMenu, setShowThemesMenu] = useState(false);

    const openThemesMenu = () => {
        if (showThemesMenu) return;
        setShowThemesMenu(true);
    };

    useEffect(() => {
        if (!showThemesMenu) return;

        const closeThemesMenu = (e) => {
            // Only close the Theme Dropdown menu if anything other than the dropdown and the input box is clicked
            if (!ulRef.current.contains(e.target) && e.target.id !== "theme-input") {
                setShowThemesMenu(false);
            }
        };

        document.addEventListener("click", closeThemesMenu);

        return () => document.removeEventListener("click", closeThemesMenu);
    }, [showThemesMenu]);

    // Title Casing the Theme Names For Display
    const toTitleCase = (string) => {
        const stringArr = string.toLowerCase().split('')
        stringArr[0] = stringArr[0].toUpperCase()
        return stringArr.join('')
    }

    const themesEntriesArr = Object.entries(siteThemes)
    const ulClassName = "theme-input-dropdown" + (showThemesMenu ? "" : " hidden");


    // Theme Change Handle
    const handleThemeChange = (newTheme) => {
        setCurrentTheme(newTheme)
        localStorage.setItem("localTheme", newTheme)
    }
    return (
        <Root>
            <ThemeInput theme={props.theme} onClick={openThemesMenu} id="theme-input">
                {toTitleCase(props.themeName)}
            </ThemeInput>
            <ThemeDropDown className={ulClassName} ref={ulRef}>
                {themesEntriesArr.map(theme => (
                    <>
                        <SiteTheme onClick={() => handleThemeChange(theme[0])} key={theme[0]}>
                            {toTitleCase(theme[0])}
                            <ThemeCirclesWrapper >
                                {Object.values(theme[1]).map(color => (
                                    <ThemeCircle key={color} color={color} />
                                ))}
                            </ThemeCirclesWrapper>
                        </SiteTheme>
                    </>
                ))
                }
            </ThemeDropDown>
        </Root>
    )
}

export default ThemeSelector
