json.extract! issue, :id, :url, :repository_url, :labels_url, :id, :number, :title, :user, :user_avatar, :user_url, :state, :locked, :current_assignee, :comments, :created_at, :updated_at, :closed_at, :author_association, :body, :positive_reactions, :negative_reactions, :created_at, :updated_at
json.url issue_url(issue, format: :json)
