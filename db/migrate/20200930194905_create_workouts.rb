class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer :route_id
      t.integer :user_id, null:false
      t.datetime :duration, null:false
      t.integer :elevation
      t.string :activity_type, null:false
      t.text :description, null:false
      t.timestamps
    end
    add_index :workouts, :user_id
  end
end
