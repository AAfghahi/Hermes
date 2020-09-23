# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

test = User.create!(
    email: 'email@email.com',
    password: 'hunter12',
    first_name: 'Test',
    last_name: 'Person',
    id: 1,
    gender: 'm',
    age: 32,
    weight: 155,
    height: 177,
    birthday: '2000-02-26',
    location_lat: 71.79964,
    location_long: -58.23725
)