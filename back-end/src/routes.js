const express = require('express'); 
const multer = require('multer'); 
const uploadConfig = require('./config/upload'); 

const SectionController = require('./controller/SectionController');
const SpotController = require('./controller/SpotController');  
const DashboardController = require('./controller/DashboardController');  
const BookingController = require('./controller/BookingController');
const routes = express.Router(); 
const upload = multer(uploadConfig); 

routes.post('/users/newuser', SectionController.store);  

routes.post('/spots/newspot', upload.single('thumbnail'), SpotController.store); 
routes.get('/spots/getspotsbytech', SpotController.index); 
routes.get('/dashboard', DashboardController.show); 
routes.post('/spots/:spot_id/bookings', BookingController.store);
module.exports = routes;