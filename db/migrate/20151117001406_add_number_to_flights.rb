class AddNumberToFlights < ActiveRecord::Migration
  def change
    add_column :flights, :number, :string
  end
end
