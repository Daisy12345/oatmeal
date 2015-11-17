# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Plane.create([{ name: 'GAdodo', rows: 4, columns: 4}])
Plane.create([{ name: '747', rows: 6, columns: 10}])

User.create([{ name: "Greg"}])
User.create([{ name: "Tanya"}])

Flight.create([{origin: "Sydney", destination: "Melbourn", date: "05/05/2015", plane_id: 1, number: "7557"}])

Reservation.create([{number: "BD556", user_id: 2, flight_id: 1, seat:  "32B"}])