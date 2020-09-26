class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.integer :origin_lat, null:false
      t.integer :origin_lng, null:false
      t.integer :destination_lat, null:false
      t.integer :destination_lng, null:false
      t.string :route_name, null:false
      t.string :activity_type, null:false
      t.text :description, null:false
      t.integer :distance, null:false
      t.integer :user_id, null:false
      t.integer :distance, null:false
      t.integer :elevation, null:false
      t.integer :estimated_time, null:false
      t.string :encoded_polyline, null:false
      t.string :image_url, null:false
      t.timestamps
    end
    add_index :routes, :encoded_polyline
    add_index :routes, :image_url
  end
end
