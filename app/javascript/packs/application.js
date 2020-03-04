// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('material-design-icons')
require('bootstrap-material-design')
require('material-dashboard/assets/js/plugins/bootstrap-notify')
require('chartist')
require("@fortawesome/fontawesome-free/js/all")
require('md-date-time-picker/dist/js/mdDateTimePicker')

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
const images = require.context('../../assets/images', true)
const imagePath = (name) => images(name, true)

import md from './material-dashboard'
import mdDateTimePicker from 'md-date-time-picker'

global.$ = jQuery;
global.mdDateTimePicker = mdDateTimePicker;

import ('./stylesheets/application')

document.addEventListener("turbolinks:load", () => {
    setTimeout(function() {
        md.initDashboardPageCharts();
    }, 500);
    window.md = md
})