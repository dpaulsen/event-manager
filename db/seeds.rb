# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Attendee.destroy_all
a1 = Attendee.create(first_name: "John", last_name: "Smith")
a2 = Attendee.create(first_name: "Amy", last_name: "Skinner")
a3 = Attendee.create(first_name: "Paul", last_name: "Jones", email: "pj@coolmail.com")
a4 = Attendee.create(first_name: "William", last_name: "Smith")
a5 = Attendee.create(first_name: "Amanda", last_name: "Smith")
a6 = Attendee.create(first_name: "Carry", last_name: "Skinner")
a7 = Attendee.create(first_name: "Douge", last_name: "Skinner")
a8 = Attendee.create(first_name: "Alex", last_name: "Connor")
a9 = Attendee.create(first_name: "Shannon", last_name: "Wang")
a10 = Attendee.create(first_name: "Paul", last_name: "Simpson")
a11 = Attendee.create(first_name: "aLex", last_name: "PARKER", email: "ap@coolmail.com")
a12 = Attendee.create(first_name: "asfasdf", last_name: "dasdfsadf", email: "testing@testing.com")

Meeting.destroy_all
m1 = Meeting.create(name: "Evening before Reception",
                    description: "Meet the Bride and Groom before the big day!")
m2 = Meeting.create(name: "Rehersal - Diner")
m3 = Meeting.create(name: "Brunch the morning of",
                    description: "Bruch with Bride")
m4 = Meeting.create(name: "Reception", description: "Greet guests in Tent")                 
m5 = Meeting.create(name: "Main Ceremony", description: "Wedding Ceremoney on beach at sunset.")
m6 = Meeting.create(name: "Formal Dinner", description: "Seafood dinner following cerimony.")
m7 = Meeting.create(name: "Dance", description: "Dancing with beachside Riparian Entertainment.")
m8 = Meeting.create(name: "After - Party", description: "Casual gathering after formal events conclude.")

Signup.destroy_all
s1 = Signup.create(attendee: a1, meeting: m5, status: :yes)
s2 = Signup.create(attendee: a2, meeting: m5, status: :yes)
s3 = Signup.create(attendee: a3, meeting: m5, status: :yes)
s4 = Signup.create(attendee: a4, meeting: m5, status: :yes)
s5 = Signup.create(attendee: a5, meeting: m5, status: :yes)
s6 = Signup.create(attendee: a6, meeting: m5, status: :yes)
s7 = Signup.create(attendee: a7, meeting: m5, status: :yes)
s8 = Signup.create(attendee: a8, meeting: m5, status: :yes)
s9 = Signup.create(attendee: a9, meeting: m5, status: :yes)
