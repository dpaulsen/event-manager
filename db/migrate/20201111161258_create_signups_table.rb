class CreateSignupsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :signups_tables do |t|
      
      t.belongs_to :attendee, null: false
      t.belongs_to :meeting, null: false
      
      t.index [:attendee_id, :meeting_id], unique: true

      t.integer :status, null: false

      t.timestamps
    end
  end
end
