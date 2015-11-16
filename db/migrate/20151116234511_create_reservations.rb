class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.string :number
      t.references :user, index: true, foreign_key: true
      t.references :flight, index: true, foreign_key: true
      t.string :seat

      t.timestamps null: false
    end
  end
end
