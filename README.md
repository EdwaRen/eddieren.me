<!--
Copyright (c) 2017 by Edward Ren. All Rights Reserved.
 -->

# FinderMe

My personal website created primarily using Javascript in conjunction with HTML/CSS. Pure CSS charts were also used to display my proficiencies in different programming languages

# Features

This website was purposefully built to emulate the look of the 'Finder' program in Apple's Macbook computers. In doing so, I envisioned to construct a unique, friendly, and familiar website that does not implement the similar and overdone UI interfaces on many sites today. Some notable features are listed below

## Draggable

Using jQuery UI, a draggable main div was implemented so that the finder tab can be dragged around just like the real program itself. This drag is limited to the container of the visible section of the page and avoids the footer. Clicking and holding anywhere on the main finder tab will drag it along. Though quite fun to play with on desktop computers, this drag functionality is not yet supported on mobile.

## Modularity

Different sets of information can be easily added in or swapped out, new groups or files can be added with ease into the program. Through this modular programming, this website can also be used as a template for other purposes.

## Graphs

There was considerable thought put into the decision to either code the languages chart myself or simply upload an image of a chart and call it a day. In the end, I decided the former was better as it provided superior modularity as well as providing more interactivity in the form of tooltips and reactive graph design. All the charts are created using pure HTML and CSS, so the end result is a static page which is supported by GitHub pages. A previous attempt to use Chart.js was torpoeded by GitHub Pages because it did not support node_modules.

# Testing

In the later stages of this project, it became apparent that GitHub Pages only support static websites which led to some issues in testing. The main issue was that a fully functional website tested locally would have missing features when hosted by GH Pages. To bypass this, and to reduce the number of unnecessary commits, later website testing was largely done using Jekyll, the same static site compiler GH Pages uses.

# Using FinderMe As A template

Simply go on terminal and clone this repository by typing in: 
```
git clone https://github.com/EdwaRen/Edwaren.github.io
```
There, you can edit the information this program displays in the "myinfo.js" folder. The important place to look are the "groups" variable and "files" variables named 0 through 9 . The "groups" array is one dimensional and is responsible for the left-most tabs which are by default "Profile, Work, Projects, Network etc...". Renaming this section will rename those tabs.

The "files" variables consist of 10 two dimensional arrays that contain information to be displayed in more information in both the middle and right-most tabs. For example, by default the first entry in the first "files" variable is readme and the next few lines display typical readme information. Each file variable is a list of lists, the first list is the number of elements in a group, while the second list has a length of 6 and goes in detail for whatever element was mentioned before. This list of length 6 has the following format

["Element Name", "Image link - url('myimage.png')", "Subtitle", "Descrption", "Duration", "Location", "Element Icon"]

Which correspond to the following graph labelled as such

["1", "2", "3", "4", "5", "6", "7"]
1 - Element Name
2 - Image link
3 Subtitle
4 Description
5 Duration
6 Location
7 Element Icon

[[https://github.com/edwaren/Edwaren.github.io/blob/master/images/InstructionFilesLabelled.png|alt=octocat]]

# Contact

If you have any questions or inquiries concerning this project or suggestions for future releases, please contact me at EdwardRen2013@gmail.com

"Let's do this!"






