class Plane < ActiveRecord::Base
	has_many :flights

	def makeSeats
		seatList = []
		alph = ("A".."Z").to_a
		for i in 0..self.rows - 1
			for k in 0..self.columns - 1
				seatList << (i + 1).to_s + alph[k]
			end
		end
		return seatList
	end
	def numberOfSeats
		makeSeats.length
	end



end