class ChangeRoutesSave < ActiveRecord::Migration[5.2]
  def change
    change_column :routes, :origin_lat, :float
    change_column :routes, :origin_lng, :float
    change_column :routes, :destination_lat, :float
    change_column :routes, :destination_lng, :float
    change_column :routes, :distance, :float
    change_column :routes, :estimated_time, :float
  end
end
