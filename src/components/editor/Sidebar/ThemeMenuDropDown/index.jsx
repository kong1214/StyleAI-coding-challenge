import { forwardRef } from "react";
import styled from "styled-components";
import ThemeSelector from "./ThemeSelector";

const Root = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 15px;
    min-width: 250px;
    height: 225px;
    border-radius: 15px;
    border: none;
    z-index: 1;
    right: 100%;
    background-color: white;
    overflow: hidden;
`
const ThemeMenuHeader = styled.h3`
    font-size: 1em;
    margin: none;
    margin-bottom: 10px;
`
const ThemeDropDownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
`
const ThemeColorsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const ThemeCircleColorsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5%;
`
const ThemeCircle = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    margin-right: 4%;
    border: lightgray 1px solid;
    background-color: ${props => props.color};
`

// forward ref function to allow refs to be passed down to child components from Sidebar parent component
const ThemeMenuDropDown = forwardRef(function ThemeMenuDropDown(props, ref) {
    const colorsArr = Object.values(props.theme)

    return (
        <Root className={props.className} ref={ref} >
            <ThemeMenuHeader>Site Styles</ThemeMenuHeader>
            <ThemeDropDownWrapper>
                Theme
                <ThemeSelector theme={props.theme} themeName={props.themeName} />
            </ThemeDropDownWrapper>
            <ThemeColorsWrapper>
                Theme Colors
                <ThemeCircleColorsWrapper>
                    {colorsArr.map((color) => (
                        <ThemeCircle key={color} color={color} />
                    ))}
                </ThemeCircleColorsWrapper>
            </ThemeColorsWrapper>
        </Root>
    )
})

export default ThemeMenuDropDown
