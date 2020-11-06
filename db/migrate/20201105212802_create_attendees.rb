class CreateAttendees < ActiveRecord::Migration[5.2]
  def change
    create_table :attendees do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email

      t.timestamps
    end
  end
end
