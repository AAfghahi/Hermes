class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.integer :origin_lat
      t.integer :origin_lng
      t.integer :destination_lat
      t.integer :destination_lng
      t.string :route_name
      t.string :activity_type
      t.string :descriptionLtext
      t.integer :distance
      t.integer :user_id
      t.integer :elevation
      t.integer :estimated_time
      t.string :encoded_polyline
      t.string :image_url

      t.timestamps
    end
  end
end
