class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null:false
      t.string :password_digest, null:false
      t.datetime :birthday 
      t.string :session_token, null:false 
      t.string :first_name
      t.string :last_name 
      t.string :gender 
      t.integer :weight 
      t.integer :height
      t.float :location_lat 
      t.float :location_long 
      t.integer :age 
      t.timestamps
    end
    add_index :users, :email 
    add_index :users, :session_token
  end
end
