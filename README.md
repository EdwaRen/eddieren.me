<!--
Copyright (c) 2017 by Edward Ren. All Rights Reserved.
 -->

# FinderMe

My personal website created primarily using Javascript in conjunction with HTML/CSS. Pure CSS charts were also used to display proficiencies in different programming languages. If the site user does not wish to interact with default UI, they can visit edwardren.me/alternate.html for a dynamically generated webpage with all the info on the main index page.

![Readme Example](images/readMeDisplayGif.gif)
<!--  To fix: This piece of s link that does not work-->

# Links

1. [Features](#features)
   * [Draggable](#draggable)
   * [Modularity](#modularity)
   * [Graphs](#graphs)<br />
2. [Testing](#testing)
3. [Template](#template)
   * [Charts](#using-custom-charts)<br />
4. [License](#license)
5. [Contact](#contact)

# Features

This website was purposefully built to emulate the look of the 'Finder' program in Apple's MacBook computers. In doing so, I envisioned to construct a unique, friendly, and familiar website that does not implement the similar and overdone UI interfaces on many sites today. Some notable features are listed below

## Draggable

Using jQuery UI, a draggable main div was implemented so that the finder tab can be dragged around just like the real program itself. This drag is limited to the container of the visible section of the page and avoids the footer. Clicking and holding anywhere on the main finder tab will drag it along. Though quite fun to play with on desktop computers, this drag functionality is not yet supported on mobile.

![Draggable Window](images/draggable.gif)


## Modularity

Different sets of information can be easily added in or swapped out, new groups or files can be added with ease into the program. Through this modular programming, this website can also be used as a template for other purposes.

![Modularity](/images/modularity.png?raw=true "")


## Graphs

There was considerable thought put into the decision to either code the languages chart myself or simply upload an image of a chart and call it a day. In the end, I decided the former was better as it provided superior modularity as well as providing more interactivity in the form of tooltips and reactive graph design. All the charts are created using pure HTML and CSS, so the end result is a static page which is supported by GitHub pages. A previous attempt to use Chart.js was unfortunately torpedoed by hosting issues with node modules.

![Graphs](/images/graphs.png?raw=true "")


# Testing

In the later stages of this project, it became apparent that GitHub Pages only support static websites which led to some issues in testing. The main issue was that a fully functional website tested locally would have missing features when hosted by GH Pages. To bypass this, and to reduce the number of unnecessary commits, later website testing was largely done using Jekyll, the same static site compiler GH Pages uses.

# Using FinderMe As A Template

Simply go on terminal and clone this repository by typing in:
```
git clone https://github.com/EdwaRen/Edwaren.github.io
```
There, you can edit the information this program displays in the "myinfo.js" folder. The important place to look are the "groups" variable and "files" variables named 0 through 9 . The "groups" array is one dimensional and is responsible for the left-most tabs which are by default "Profile, Work, Projects, Network etc...". Renaming this section will rename those tabs.

The "files" variables consist of 10 two dimensional arrays that contain information to be displayed in more information in both the middle and right-most tabs. For example, by default the first entry in the first "files" variable is readme and the next few lines display typical readme information. Each file variable is a list of lists, the first list is the number of elements in a group, while the second list has a length of 6 and goes in detail for whatever element was mentioned before. This list of length 6 has the following format

["Element Name", "Image link - url('myimage.png')", "Subtitle", "Descrption", "Duration", "Location", "Element Icon"]

Which correspond to the following graph labelled as such

["1", "2", "3", "4", "5", "6", "7"] <br />
1 - Element Name <br />
2 - Image link <br />
3 - Subtitle <br />
4 - Description <br />
5 - Duration <br />
6 - Location <br />
7 - Element Icon <br />

![Instructions](/images/InstructionFilesLabelled.png?raw=true "")

### Using Custom Charts
While normally an information array (files variable) has a length of 7, extending the length will create a chart with the remaining values. With alternating values between label and value. For example, including charts, the new "files" variable will become the following:

["1", "2", "3", "4", "5", "6", "7", **"8"**, **"9"**, ... **"files.length-1"**] <br />
1 - Element Name <br />
2 - Image link <br />
3 - Subtitle <br />
4 - Description <br />
5 - Duration <br />
6 - Location <br />
7 - Element Icon <br />
**8 - Bar Name** <br />
**9 - Bar Length** (out of 100) <br />
**Last Entry - Chart name** <br />

![Custom Chart](/images/chartDoc.png?raw=true "")

When the files array length is greater than 7, then the last value will be the title of the chart. In this version, only bar graphs are supported.
<br />

For more customizable chart options, you can mess with /css/styleGraph.css and #chartEnclosure in /css/styles.css.

As a reminder, charts are only accessible when the "files" array length is greater than 7, otherwise no chart will be made. Having the array length greater than 7 but filled with null values is not recommended as it is known to have caused issues.

# License
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




# Contact

If you have any questions or inquiries concerning this project or suggestions for future releases, send an email to Edward.ren.2013@gmail.com

-"Let's do this!"
