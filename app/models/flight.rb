class Flight < ActiveRecord::Base
  belongs_to :plane
  has_many :reservations


	def listSeats
		return self.plane.makeSeats
	end
	def listAvailableSeats
		list = listSeats
		self.reservations.each do |k|
   			list.delete(k.seat)
		end
		return list
	end
	def listReservedSeats
		list = []
		self.reservations.each do |k|
   			list.push(k.seat)
		end
		return list
	end
	def availableSeatsNumber
		listAvailableSeats.length
	end
end