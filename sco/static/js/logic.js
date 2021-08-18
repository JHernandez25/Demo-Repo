/*
 * Name: WebSlides - Logic
 * Version: 1.0
 * Date: 2020-11-30
 * Description: Logic for Slides
 */

//************************************************ Slide 6

/**
 * The following logic makes sure that user clicks cannot click next slide until user has
   click all links found on slide 6. 
 * Part 2 of Logic found on webslides.js
*/

/**
 * TO DO:
 * 1/15/2021
 * Make Locks dynamic for Any amount of lock slides
 * @author BC
 */
 var lock = []; // Global Var that tracks link LOCKS
 var vid = document.getElementById("video_control"); // Points to video

 function markLink() {
     for (let i = 0; i < lock.length; i++) {
         if (!lock[i]) {
             lock[i] = true;
             break;
         }
     }
 }
 function summon() {
    document.getElementById("alert").style.display = "inline";
  }
  function disappear() {
    setTimeout(function () {
      $('#alert').fadeOut('slow');
    }, 4000);
 }
 function scrollDown() {
     $(document).scrollTop($(document).height());
 }
 //************************************************
 
 /************************************************* FA Button
 
 /**
  * The folling logic is used on the Further Analys Button the advance the slide to the next slide. 
 */
 
 function goNext() {
     window.ws.goNext();
 }
 
 // Dynamically creates Array for a link lock
 function countLockLinks(className) {
     lock = []; // reset global var
     let lockLenght = document.getElementsByClassName(className).length;
     for (let i = 0; i < lockLenght; i++) {
         lock.push(false);
     }
 }
 
 //*************************************************
 