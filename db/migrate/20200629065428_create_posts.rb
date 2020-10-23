class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.text :content,    null: false
      t.integer :user,    foreign_key: true
      t.timestamps
    end
  end
end
