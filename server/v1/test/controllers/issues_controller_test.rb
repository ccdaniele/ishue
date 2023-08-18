require "test_helper"

class IssuesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @issue = issues(:one)
  end

  test "should get index" do
    get issues_url
    assert_response :success
  end

  test "should get new" do
    get new_issue_url
    assert_response :success
  end

  test "should create issue" do
    assert_difference("Issue.count") do
      post issues_url, params: { issue: { author_association: @issue.author_association, body: @issue.body, closed_at: @issue.closed_at, comments: @issue.comments, created_at: @issue.created_at, current_assignee: @issue.current_assignee, id: @issue.id, labels_url: @issue.labels_url, locked: @issue.locked, negative_reactions: @issue.negative_reactions, number: @issue.number, positive_reactions: @issue.positive_reactions, repository_url: @issue.repository_url, state: @issue.state, title: @issue.title, updated_at: @issue.updated_at, url: @issue.url, user: @issue.user, user_avatar: @issue.user_avatar, user_url: @issue.user_url } }
    end

    assert_redirected_to issue_url(Issue.last)
  end

  test "should show issue" do
    get issue_url(@issue)
    assert_response :success
  end

  test "should get edit" do
    get edit_issue_url(@issue)
    assert_response :success
  end

  test "should update issue" do
    patch issue_url(@issue), params: { issue: { author_association: @issue.author_association, body: @issue.body, closed_at: @issue.closed_at, comments: @issue.comments, created_at: @issue.created_at, current_assignee: @issue.current_assignee, id: @issue.id, labels_url: @issue.labels_url, locked: @issue.locked, negative_reactions: @issue.negative_reactions, number: @issue.number, positive_reactions: @issue.positive_reactions, repository_url: @issue.repository_url, state: @issue.state, title: @issue.title, updated_at: @issue.updated_at, url: @issue.url, user: @issue.user, user_avatar: @issue.user_avatar, user_url: @issue.user_url } }
    assert_redirected_to issue_url(@issue)
  end

  test "should destroy issue" do
    assert_difference("Issue.count", -1) do
      delete issue_url(@issue)
    end

    assert_redirected_to issues_url
  end
end
