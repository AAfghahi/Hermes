class ChangeUserAgain < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :birthday, true
    change_column_null :users, :first_name, true
    change_column_null :users, :last_name, true 
    change_column_null :users, :gender, true 
    change_column_null :users, :weight, true 
    change_column_null :users, :height, true 
    change_column_null :users, :location_lat, true
    change_column_null :users, :location_long, true 
  end
end
