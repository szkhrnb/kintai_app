import '../src/stylesheets/users.scss';

var $ = require('jquery');
var moment = require('moment');
const today = new Date();

var thisHour = () =>{
  return (`00${today.getHours()}`).slice(-2)
}
var getMinutes = () =>{
  return (`00${today.getMinutes()}`).slice(-2)
}

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
