require "application_system_test_case"

class IssuesTest < ApplicationSystemTestCase
  setup do
    @issue = issues(:one)
  end

  test "visiting the index" do
    visit issues_url
    assert_selector "h1", text: "Issues"
  end

  test "should create issue" do
    visit issues_url
    click_on "New issue"

    fill_in "Author association", with: @issue.author_association
    fill_in "Body", with: @issue.body
    fill_in "Closed at", with: @issue.closed_at
    fill_in "Comments", with: @issue.comments
    fill_in "Created at", with: @issue.created_at
    fill_in "Current assignee", with: @issue.current_assignee
    fill_in "Id", with: @issue.id
    fill_in "Labels url", with: @issue.labels_url
    check "Locked" if @issue.locked
    fill_in "Negative reactions", with: @issue.negative_reactions
    fill_in "Number", with: @issue.number
    fill_in "Positive reactions", with: @issue.positive_reactions
    fill_in "Repository url", with: @issue.repository_url
    check "State" if @issue.state
    fill_in "Title", with: @issue.title
    fill_in "Updated at", with: @issue.updated_at
    fill_in "Url", with: @issue.url
    fill_in "User", with: @issue.user
    fill_in "User avatar", with: @issue.user_avatar
    fill_in "User url", with: @issue.user_url
    click_on "Create Issue"

    assert_text "Issue was successfully created"
    click_on "Back"
  end

  test "should update Issue" do
    visit issue_url(@issue)
    click_on "Edit this issue", match: :first

    fill_in "Author association", with: @issue.author_association
    fill_in "Body", with: @issue.body
    fill_in "Closed at", with: @issue.closed_at
    fill_in "Comments", with: @issue.comments
    fill_in "Created at", with: @issue.created_at
    fill_in "Current assignee", with: @issue.current_assignee
    fill_in "Id", with: @issue.id
    fill_in "Labels url", with: @issue.labels_url
    check "Locked" if @issue.locked
    fill_in "Negative reactions", with: @issue.negative_reactions
    fill_in "Number", with: @issue.number
    fill_in "Positive reactions", with: @issue.positive_reactions
    fill_in "Repository url", with: @issue.repository_url
    check "State" if @issue.state
    fill_in "Title", with: @issue.title
    fill_in "Updated at", with: @issue.updated_at
    fill_in "Url", with: @issue.url
    fill_in "User", with: @issue.user
    fill_in "User avatar", with: @issue.user_avatar
    fill_in "User url", with: @issue.user_url
    click_on "Update Issue"

    assert_text "Issue was successfully updated"
    click_on "Back"
  end

  test "should destroy Issue" do
    visit issue_url(@issue)
    click_on "Destroy this issue", match: :first

    assert_text "Issue was successfully destroyed"
  end
end
