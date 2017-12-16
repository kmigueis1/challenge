# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

User.create!(name: 'Joe Jones', user_name: 'joejones', password: 'password1');
User.create!(name: 'Billy Murphy', user_name: 'billymurphy', password: 'password2');
User.create!(name: 'Sally Smith', user_name: 'sallysmith', password: 'password3');
User.create!(name: 'Jody Jenkins', user_name: 'jodyjenkins', password: 'password4');
