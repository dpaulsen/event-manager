# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

a1 = Attendee.create(first_name: "John", last_name: "Smith")
a2 = Attendee.create(first_name: "Amy", last_name: "Skinner")
a3 = Attendee.create(first_name: "Vanila", last_name: "Ice", email: "ice.ice@baby.com")



m1 = Meeting.create(name: "Gala - for Lauren")
m2 = Meeting.create(name: "Symposium on - Bikeshedding when is it necessary?", 
                    description: "We might just get diverted by trivia..." )
m3 = Meeting.create(name: "Bookclub - 50 Shades of React",
                    description: "We will be review the finer literary points from the seminal novel by Dan S.")
m4 = Meeting.create(name: "Reception", description: "Greet guests in Tent")                 
m5 = Meeting.create(name: "Main Ceremony", description: "Wedding Ceremoney on beach at sunset.")

m6 = Meeting.create(name: "Formal Dinner", description: "Seafood dinner following cerimony.")
m7 = Meeting.create(name: "Dance", description: "Dancing with beachside Riparian Entertainment.")
m8 = Meeting.create(name: "After - Party", description: "Casual gathering after formal events conclude.")

