<!--
Copyright (c) 2017 by Edward Ren. All Rights Reserved.
 -->
[![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)](http://Edwardren.me)
[![Npm](https://img.shields.io/npm/v/npm.svg)](https://github.com/EdwaRen/FinderMe/releases/tag/v1.3.0)
[![Aphrodite]( https://img.shields.io/badge/aphrodite-v1.2.3-blue.svg
)](https://github.com/Khan/aphrodite)
[![License]( https://img.shields.io/badge/license-GNU%20GPL%20v3-blue.svg
)](https://github.com/EdwaRen/FinderMe/blob/master/LICENSE.txt)



# FinderMe

My personal website created primarily using React in conjunction with HTML/CSS. Pure CSS charts were also used to display proficiencies in different programming languages. If the site user does not wish to interact with default UI, there is an alternate 'basic' page for a dynamically generated webpage with all the info on the main index page. A mobile page for this site is available, however due to the lack of many features, it is rather minimalist and is virtually the same as the 'basic' page for desktops.

![Readme Example](./images/readmeDisplayGif.gif)

# Links

1. [Features](#features)
   * [Draggable](#draggable)
   * [Modularity](#modularity)
   * [Graphs](#graphs)
   * [Icon Controls](#icon-controls)<br />
2. [Testing](#testing)
3. [Documentation](#template)
   * [Importing Images](#importing-images)
   * [Charts](#using-custom-charts)<br />
4. [License](#license)
5. [Contact](#contact)

# Features

This website was purposefully built to emulate the look of the 'Finder' program in Apple's MacBook computers. In doing so, there was a vision to construct a unique, friendly, and familiar website that does not implement the similar and overdone UI interfaces on many sites today. Some notable features are listed below.

## Draggable

Using React Draggable, a draggable main display was implemented so that the finder tab can be dragged around just like the real program itself. The principle display can be dragged anywhere. Clicking and holding anywhere on the main finder tab will drag it along. Though quite fun to play with on desktop computers, this drag functionality is not yet supported on mobile.

![Draggable Window](/images/draggable.gif)


## Modularity

Different sets of information can be easily added in or swapped out, new groups or files can be added with ease into the program. Through this modular programming, this website can also be used as a template for other purposes.

![Modularity](/images/modularity.png?raw=true "")


## Graphs

There was considerable thought put into the decision to either code the languages chart myself or simply upload an image of a chart and call it a day. In the end, I decided the former was better as it provided superior modularity as well as providing more interactivity in the form of tooltips and reactive graph design. All the charts are created using pure HTML and CSS, so the end result is a static page which is supported by GitHub pages. A previous attempt to use Chart.js unfortunately came upon numerous setbacks.
<!--  In hindsight, I was just horrible at using npm :P-->

![Graphs](/images/graphs.png?raw=true "")

## Icon Controls

The bottom left corner has two icons for controlling the main display. The first icon is to return the display to its starting position when clicked. This is necessary if the user has accidentally dragged the display out of page and reloads the main display without reloading the entire page.

The second icon is a garbage bin that can hide and re-appear the main display. Clicking it will only change the visibility of the main display, and its position will not change. When the main display is hidden, the first button can be clicked to reload the display.

![Icon Bar](/images/iconControlDiagram.jpg?raw=true "")

The red circle on the top-left of the main display can also be clicked to close itself. This will reset any group or file state to default. The finder display can be retrieved by clicking the finder icon or trash icon in the lower left corner.

The yellow circle can be clicked to minimize the tab. This also closes the display and does the same things as the red 'close' button but it saves the group and file state.

The green circle, or expand button, can be clicked to expand the finder display. This expands the display to fill 75% of the screen width and 90% of the screen height. Clicking this button again will shrink the display to its default size.Needless to say, this is not available on mobile and an alternative has been provided.

![Expanding](/images/Expanding.gif?raw=true "")


# Testing

In the later stages of this project, it became apparent that GitHub Pages only supports static websites which led to some issues in testing. The main issue was that a fully functional website tested locally would have missing features when hosted by GitHub Pages (Also why there are ridiculous amount of commits on certain days). One critical issue was the use of react-router that caused issues with GitHub pages and which required a manual workaround.

# Using FinderMe As A Template

#### Clone
Simply go on terminal and clone this repository by typing in:
```
$ git clone https://github.com/EdwaRen/FinderMe
```

#### Installation
```
$ cd FinderMe
$ npm install
$ npm start
```


There, you can edit the information this program displays in the "src/Info/PersonalInfo.js" folder. The important place to look are the "groupsInfo" variable and "info" variables. The "groups" array is one dimensional and is responsible for the left-most tabs which are by default "Profile, Work, Projects, Network etc...". The first element in this array is the title shown at the very top of the finder display. Changing this variable will change the name of the groups on the groupBar (left-most) side of the finder display.

The "info" variable consist of a multi dimensional array that contains information to be displayed in both the middle (filesBar) and right-most (descBar) tabs. "Info" contains virtually all the customizable information. Info[i] gives the information with respect to the i-th group, so Info[0] gives the data necessary to display the 'Readme' page and the 'About FinderMe' page in an array. Going deeper, Info[i][j] tells us sufficient information necessary to display the descriptionaBar. For example, Info[0][0] gives us another array ['Readme', 'alt-text', 'subtitle', 'text', 'duration', 'location']. For example, to get the subtitle of the second file in the third group, we would use Info[2][1][2] (with the array starting at 0). This format can otherwise be shown like this Info[Group][File][Text Item]

![Instructions](/images/customInfo.png?raw=true "")

In Info, the first list contains details for all groups. Next, the list-in-a-list contains details for all files in ONE group. Lastly, the last list-in-a-list has a length of 7 and goes in detail for each file. This last-list (of length 7) has the following format

["Element Name", "Alternate Text (Unused)", "Subtitle", "Description", "Duration", "Location"]

Which correspond to the following graph labelled as such

["1", "2", "3", "4", "5", "6"] <br />
1 - Element Name <br />
2 - Alternate Text (For use in 'basic' page) <br />
3 - Subtitle <br />
4 - Description <br />
5 - Duration <br />
6 - Location <br />

![Instructions](/images/diagram_Desc_Info.jpg?raw=true "")

All the text can be set with HTML, so inputting
```
"Hello, my name is <b>Edward</b>"
```
will bold the word 'Edward', resulting in

"Hello, my name is **Edward**"



### Importing Images

Due to the nature of displaying images through React over traditional JavaScript, image displays are no longer customizable through "/src/Info/PersonalInfo.js" but instead it can be done at "/src/Components/FinderDisplay.jsx". The images section starts from line 23 to line 75 and all images need to be manually imported in the style of 'import IMAGE_NAME from ./SOURCE'. Once the images have been imported, the images must be loaded into three variables to display depending on location, 'groupIconImages, fileIconImages, infoDescImages'.

![Custom Image](/images/customImage.png?raw=true "")


### Using Custom Charts
While normally an information array (files variable) has a length of 6, extending the length will create a chart with the remaining values. These values must be placed in a SINGLE array on Info[i][j][6]. With alternating values between label and value. The last value will be the name of the chart. For example, including charts, the new "Info" variable will become the following:

["1", "2", "3", "4", "5", "6", **"7"**]<br />
1 - Element Name <br />
2 - Alternate text <br />
3 - Subtitle <br />
4 - Description <br />
5 - Duration <br />
6 - Location <br />
**7 - [Bar Name, Bar Length (out of 100), Bar Name 2, Bar Length 2, ... Chart Name]** <br />


![Custom Chart](/images/chartDiagram.jpg?raw=true "")

When the files array length is greater than 7, then the last value will be the title of the chart. In this version, only bar graphs are supported.
<br />

For more customizable chart options, you can mess with /css/styleGraph.css and #chartEnclosure in /css/HtmlStyles.css.

As a reminder, charts are only accessible when the "Info[i][j]" value is an array of strings, rather than a single string variable, otherwise no chart will be made.

# License
Copyright (c) 2017 Edward Ren

This project and its use as a template is licensed under the GNU General Public License v3.0 (GNU GPL v3.0). Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. For more specific information see [LICENSE](../blob/master/LICENSE)

Constituent icons used in this project are licensed through Creative Commons BY 3.0. Some authors are responsible for multiple icons.

Icon(s) made by Dave Gandy from www.flaticon.com, licensed by Creative Commons BY 3.0. <br >
Icon(s) made by Roundicon from www.flaticon.com, licensed by Creative Commons BY 3.0. <br >
Icon(s) made by Chanut is Industries from www.flaticon.com, licensed by Creative Commons BY 3.0. <br >
Icon(s) made by Freepik from www.flaticon.com, licensed by Creative Commons BY 3.0. <br >
Icon(s) made by Madebyoliver from www.flaticon.com, licensed by Creative Commons BY 3.0. <br >
Icon(s) made by Pixel Buddha from www.flaticon.com, licensed by Creative Commons BY 3.0. <br >
Icon(s) made by Icon Pond from www.flaticon.com, licensed by Creative Commons BY 3.0. <br >
Icon(s) made by Heydon from www.flaticon.com, licensed by Creative Commons BY 3.0. <br >

Special thanks to my Keurig coffee machine for making this project possible.

# Other Versions

The current website is actually complete re-code of an almost identical website that can be found in the 'old-javascript-website' branch. The old version was done in basic JavaScript, it was deprecated due to its indiscriminate use of spaghetti code on innocent HTML pages. The current React supported webpage is much slimmer, faster, and efficient than it's predecessor. There is also a gh-pages branch that contains the static web page build of the master branch.

The gh-pages branch is regularly updated using the following.
```
$ npm run build
$ npm run deploy
```

# Contact

If you have any questions or inquiries concerning FinderMe or suggestions for future releases, send an email to Edward.ren.2013@gmail.com

-"Let's do this!"
