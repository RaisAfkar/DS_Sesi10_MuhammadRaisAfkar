Feature: Swag Labs - Login
  Background: User on the login page
    Given User is on the login page

  Scenario Outline: As a standart_user, I want to login succesfully
    When user login with "standard_user" credentials
    Then user should see homepage
  
  Scenario Outline: As a locked_out_user, I should get error message
    When user login with "locked_out_user" credentials
    Then user should see error "Epic sadface: Sorry, this user has been locked out."
