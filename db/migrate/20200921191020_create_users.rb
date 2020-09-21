class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null:false, unique:true
      t.string :email, null:false, unique:true
      t.string :password_digest, null:false
      t.datetime :birthday, null:false
      t.string :session_token, null:false, unique:true
      t.string :first_name, null:false
      t.string :last_name, null:false
      t.string :gender, null:false
      t.datetime :age, null:false
      t.integer :weight, null:false
      t.integer :height, null:false
      t.decimal :location_lat, null:false
      t.decimal :location_long, null:false

      t.timestamps
    end
    add_index :users, :username
    add_index :users, :session_token
    add_index :users, :email
  end
end
