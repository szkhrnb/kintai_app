// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
import '../src/stylesheets/application.scss';
import '../src/stylesheets/attendances.scss';
// import moment from require('moment');
// import $  from require('jquery');
import $  from 'jquery';

const today = new Date();

let thisHour = () =>{return (`00${today.getHours()}`).slice(-2)}
let getMinutes = () =>{return (`00${today.getMinutes()}`).slice(-2)}

$(function(){
  $('button[name=syukkin]').on('click',function(){
    $(`#work_${today.getDate()}_start_4i`)[0].value = thisHour()
    $(`#work_${today.getDate()}_start_5i`)[0].value = getMinutes()
  });
  $('button[name=taikin]').on('click',function(){
    $(`#work_${today.getDate()}_end_4i`)[0].value = thisHour()
    $(`#work_${today.getDate()}_end_5i`)[0].value = getMinutes()
  });
});