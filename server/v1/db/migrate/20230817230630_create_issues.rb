class CreateIssues < ActiveRecord::Migration[7.0]
  def change
    create_table :issues do |t|
      t.string :url
      t.string :repository_url
      t.string :labels_url
      t.integer :id
      t.integer :number
      t.string :title
      t.string :user
      t.string :user_avatar
      t.string :user_url
      t.boolean :state
      t.boolean :locked
      t.string :current_assignee
      t.integer :comments
      t.timestamp :created_at
      t.timestamp :updated_at
      t.timestamp :closed_at
      t.string :author_association
      t.string :body
      t.integer :positive_reactions
      t.integer :negative_reactions

      t.timestamps
    end
  end
end
