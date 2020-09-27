# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_26_152345) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "routes", force: :cascade do |t|
    t.integer "origin_lat", null: false
    t.integer "origin_lng", null: false
    t.integer "destination_lat", null: false
    t.integer "destination_lng", null: false
    t.string "route_name", null: false
    t.string "activity_type", null: false
    t.text "description", null: false
    t.integer "distance", null: false
    t.integer "user_id", null: false
    t.integer "elevation", null: false
    t.integer "estimated_time", null: false
    t.string "encoded_polyline", null: false
    t.string "image_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["encoded_polyline"], name: "index_routes_on_encoded_polyline"
    t.index ["image_url"], name: "index_routes_on_image_url"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.datetime "birthday"
    t.string "session_token", null: false
    t.string "first_name"
    t.string "last_name"
    t.string "gender"
    t.integer "weight"
    t.integer "height"
    t.decimal "location_lat"
    t.decimal "location_long"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "age"
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
