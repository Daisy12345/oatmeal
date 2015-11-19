# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Plane.create([{ name: 'Su-27', rows: 1, columns: 1}])
Plane.create([{ name: '747', rows: 73, columns: 10}])
Plane.create([{ name: 'A-380', rows: 88, columns: 10}])
Plane.create([{ name: 'Dash-8', rows: 19, columns: 4}])
Plane.create([{ name: 'Fokker 100', rows: 21, columns: 5}])

User.create([{ name: "Phil"}])
User.create([{ name: "Mary"}])
User.create([{ name: "Alice"}])
User.create([{ name: "Sudasan"}])
User.create([{ name: "Pia"}])
User.create([{ name: "John"}])

Flight.create([{origin: "SYD", destination: "LAX", date: "05/05/2015", plane_id: 3, number: "OAT07"}])
Flight.create([{origin: "LAX", destination: "JFK", date: "08/12/2015", plane_id: 2, number: "OAT34"}])
Flight.create([{origin: "SYD", destination: "MEL", date: "02/11/2015", plane_id: 2, number: "OAT66"}])
Flight.create([{origin: "SYD", destination: "ASP", date: "04/05/2015", plane_id: 4, number: "OAT69"}])
Flight.create([{origin: "MEL", destination: "SYD", date: "07/03/2016", plane_id: 5, number: "OAT13"}])
Flight.create([{origin: "LAX", destination: "SYD", date: "01/04/2016", plane_id: 3, number: "OAT72"}])



Reservation.create([{number: "BD556", user_id: 1, flight_id: 6, seat:  "1B"}])
Reservation.create([{number: "BD556", user_id: 2, flight_id: 6, seat:  "3B"}])
Reservation.create([{number: "BD556", user_id: 3, flight_id: 6, seat:  "3A"}])
Reservation.create([{number: "BD556", user_id: 4, flight_id: 6, seat:  "9B"}])
Reservation.create([{number: "BD556", user_id: 5, flight_id: 6, seat:  "11C"}])
Reservation.create([{number: "BD556", user_id: 6, flight_id: 6, seat:  "10B"}])
Reservation.create([{number: "BD556", user_id: 4, flight_id: 6, seat:  "3D"}])
Reservation.create([{number: "BD556", user_id: 3, flight_id: 6, seat:  "14C"}])