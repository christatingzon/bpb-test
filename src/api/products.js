/* Sample Products */
const _products = [
  {
  	"id": "MPH27370",
  	"title": "Antibacterial Wavy Wipes Blue, 300mm x 500mm, 90 Sheets",
  	"price": 60,
  	"isPerBox": true,
  	"extraDetails": "4 Rolls",
    "img": 1005
  },
  {
  	"id": "MPH27160",
  	"title": "Interfold Paper Towel White, 1 Ply, 250 Sheets",
  	"price": 66,
  	"isPerBox": true,
  	"extraDetails": "4000 Sheets",
    "img": 1014
  },
  {
  	"id": "MPH28125",
  	"title": "Automatic Dishwashing Liquid Clear, 5L Refill Bottle",
  	"price": 29,
  	"isPerBox": true,
  	"extraDetails": "2 Bottles",
    "img": 1018
  },
  {
  	"id": "MPH2381",
  	"title": "FP Degradable Bin Liner 60L Back, 650mm x 900mm x 30mm",
  	"price": 122,
  	"isPerBox": true,
  	"extraDetails": "450 Bags",
    "img": 1025
  },
  {
  	"id": "MPH29220",
  	"title": "Latex Gloves Powder Free Beige, M",
  	"price": 88,
  	"isPerBox": true,
  	"extraDetails": "1000 Gloves",
    "img": 102
  },
  {
  	"id": "MPH28088",
  	"title": "Foaming Hand Sanitiser Clear, 5L Refill Bottle",
  	"price": 34.78,
  	"isPerBox": true,
  	"extraDetails": "2 Bottles",
    "img": 10
  },
  {
  	"id": "MPH30140",
  	"title": "Dust Respirator White, P2 Rated",
  	"price": 22,
  	"isPerBox": false,
  	"extraDetails": "20 Masks",
    "img": 1001
  },
  {
  	"id": "MPH17320",
  	"title": "Nescafe Classic Instant Coffee Brown, 500g Tin",
  	"price": 35.7,
  	"isPerBox": true,
  	"extraDetails": "6 Tins",
    "img": 1003
  },
  {
  	"id": "MPH28095",
  	"title": "Antibacterial Surface Cleaner Blue, 5L Refill Bottle",
  	"price": 25,
  	"isPerBox": true,
  	"extraDetails": "2 Bottles",
    "img": 101
  },
  {
  	"id": "MPH34685",
  	"title": "Philips Power Alkaline Battery Red, AA",
  	"price": 3.7,
  	"isPerBox": false,
  	"extraDetails": "4 Batteries",
    "img": 1015
  },
]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  }
}