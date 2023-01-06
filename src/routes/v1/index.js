const express=require('express')
const router=express.Router();
const helpController=require('../../controllers/helpController')
const airlineController=require('../../controllers/airlineController')
const flightController=require('../../controllers/flightController')
const reviewController=require('../../controllers/reviewController')
const bookingController=require('../../controllers/bookingController')
router.get("/help",helpController.helpDetails);

router.post("/airline",airlineController.cairline);
router.get("/airline/:name",airlineController.getAirline);
router.get("/airline",airlineController.getAllAirline)

router.post("/flight",flightController.createFlight);
router.get("/flight/:name",flightController.getFlight);
router.get("/flight",flightController.getAllFlights);

router.post("/review",reviewController.createReview);
router.get("/review/:name",reviewController.getReview);
router.get("/review",reviewController.getAllReview);

router.post("/booking",bookingController.createBooking);
router.delete("/booking/:id",bookingController.cancelBooking);
router.get("/booking/:id",bookingController.getBordingPass);

module.exports=router;