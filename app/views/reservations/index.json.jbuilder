json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :number, :user_id, :flight_id, :seat
  json.url reservation_url(reservation, format: :json)
end
