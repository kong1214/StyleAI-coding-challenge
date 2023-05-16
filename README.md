**Introduction**

Congratulations on making it to the coding interview for the frontend developer internship at StyleAI! In this task, you will be developing a 'styles' menu in the sidebar of a website editor. This menu will allow users to change the theme of their site within the editor. This documentation aims to provide you with all the necessary information to complete the task successfully.

**Task Overview**

The task involves four main steps that you should follow to complete the task:
- Initialize any state variables to manage the Editor theme (`pages/Editor.jsx`)
- Implement the Sidebar styles menu (see Sidebar Implementation) (`components/editor/Sidebar/index.jsx` + any additional files)
- Update the Site using the selected theme colors (`components/editor/Site/index.jsx`)
- Store / Retrieve user's theme preferences using local storage (`pages/Editor.jsx` + any additional files)

The files that you will be working on include:
- `components/editor/Sidebar/index.jsx` (and any additional files needed)
- `components/editor/Site/index.jsx`
- `constants/siteThemes.js`
- `pages/Editor.jsx`
- `utils/…` (if you want to create any utility functions)

*Note: `styles/theme.js` is the global project theme, not the Editor theme. These colors should only be referenced when designing components. The Editor themes are in `constants/siteThemes.js`*.

**Sidebar Implementation**

Attached at the bottom of this document are mockups of the sidebar menu you will be implementing. Not all UX has been provided (animations, hover states, etc) on purpose. You are welcome to use the Framer Motion library for animations and MUI Icons for icons (both have already been added to package.json). 

**Time Expectation**

This task is designed to take an experienced developer roughly 30-45 minutes. However, since you may not be familiar with the structure of this repository and our coding practices, you may need more time. It is totally okay if you take more time.

**Resource Usage**

You are free to use any standard internet resources like StackOverflow or the ReactJS documentation, with the exception of language models like ChatGPT. If you use any external resource, please leave comments referencing where you got help from along the way.

**Tips for Getting Started**

Before getting started with the task, you should take the time to understand the repository's structure and coding practices. You can then proceed with the following steps:
- Open the project directory in terminal and run `npm install`
- Begin by creating any new state variables in `Editor.jsx` to manage the theme of the editor. This state variable should be initialized to the default theme. The Editor will be responsible for all state/data management.
- Implement the 'styles' menu in the Sidebar component. The menu should display a list of available themes that the user can select from (see the attached mockups below). When a user selects a theme, the state variable you created in step 1 should be updated with the selected theme.
- In the Site component, update the site to use the selected theme colors.
- Finally, store the user's theme preferences using local storage in `Editor.jsx` (you may need to create some additional utility functions). You should retrieve the theme preference from local storage when the editor is opened and apply it to the editor theme state variable.
- `Optional` If you feel like a challenge, implement the Extra Credit task. The task is entirely optional and will not negatively impact your application evaluation.

If you encounter any issues or get stuck along the way, please reach out to your interviewer for assistance.

**Conclusion**

This task is designed to test your ability to work with React components, manage state variables, and utilize local storage. We wish you the best of luck in completing this task and look forward to reviewing your work.

**Required Libraries/Packages**
- ReactJS
- Styled Components (For CSS styling)
- Material UI (For icons)
- (Optional) Framer Motion (For animations)

**Mockups**

![Desktop - Editor](https://user-images.githubusercontent.com/37320248/236958389-16c2afeb-76bc-404d-a643-5ecdb9301b50.png)

![Sidebar Instructions](https://user-images.githubusercontent.com/37320248/236958398-d0deb063-51f8-4f13-b41c-ad8e28a10b09.png)

**Optional Extra Credit**

Completing the extra credit portion is **entirely optional** and will **not** negatively impact your application evaluation. However, please note that the correct implementation of this task is quite challenging and time-consuming. It's an opportunity for those who want to showcase their skills and go above and beyond the main requirements.

If you feel like a challenge, try implementing a color picker menu to customize the individual colors of a theme in the styles menu. For our product, we used a custom implementation of [react-colorful](https://www.npmjs.com/package/react-colorful) (screenshot below). The package has not been included as a dependency as you are free to implement the task however you choose, including using other color picker packages or building your own custom solution.

In production, rendering efficiency is crucial, especially when using other state management solutions like Redux. Consider strategies such as modifying CSS variables or using debouncing to optimize the performance of your implementation. Please note that this demo task only uses basic state variables, so these optimizations aren't strictly necessary for completing the extra credit portion. 

<img width="1228" alt="color-picker 1" src="https://user-images.githubusercontent.com/37320248/236976486-ef022320-5679-4916-9f3f-7f5035335a9c.png">

