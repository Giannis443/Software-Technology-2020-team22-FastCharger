 # To install it to somewhere else just type nmp install to install the node_modules
# Rest Api for Car Charging application

## Entities:
- user
- car
- station 
- provider
- charger
- stationHostCharger(id_charger,id_station)
- providerSuppliesStation(id_station,id_provider)
- stationOffersDiscountCharger(id_charger,id_station)
- transcation(id_user,id_charger,id_station)
- userHasCar(id_user,id_car)
- carChargedTransaction(id_car,id_transaction)

## Entrypoint
Every entrypoint off the entities (change whatYouWantToShow to a entity )
- Get all GET https://104.248.134.250:5000/api/whatYouWant
- Get one GET https://104.248.134.250:5000/api/whatYouWant/id
- Create POST https://104.248.134.250:5000/api/whatYouWant
- Update PUT https://104.248.134.250:5000/api/whatYouWant/id
- Delete DELETE https://104.248.134.250:5000/api/whatYouWant/id
## Usage of the application
- Get the values for Charger,Car,Provider,Station
GET  https://104.248.134.250:5000/usage/sessionsPerCharger/:id/:from/:to
GET  https://104.248.134.250:5000/usage/sessionsPerCar/:id/:from/:to
GET  https://104.248.134.250:5000/usage/sessionsPerProvider/:id/:from/:to
GET  https://104.248.134.250:5000/usage/sessionsPerStation/:id/:from/:to





