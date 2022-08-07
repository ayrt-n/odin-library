# Odin Library

## Overview

Project for the JavaScript section of The Odin Project (https://www.theodinproject.com/lessons/javascript-library) to create a library/book tracking application using HTML/JavaScript.

Live version available on Github: https://ayrt-n.github.io/odin-library/

Users of the app are able to record books within their library including the Title, Author, Pages, and whether of not they have read the book. Book objects are then added to the table of books, where users are able to toggle read status or delete.

The project helped to cement a number of readings on various topics, mainly objects, constructors, and prototypes. Additionally, event listeners were used heavily to create an interactive display. Through building the app, I discovered the concept of event delegation; the general idea being that if I want to attach event listeners to a number of elements which are subject to change, I can instead attach the event listener to the parent element and then on triggering the event, decide what to do based on what element ultimately triggered the event. This was beneficial as the other alternative would have been to instead attach and remove event listeners each time the elements change.

As of now, books are not actually saved in localStorage, but I believe this is an improvement to come in future lessons.
