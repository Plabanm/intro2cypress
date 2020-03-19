Feature: Login to Application

   As a valid user
   I want to login to accplition 
   So that I can manage my account 

   Scenario: Valid Login
   Given I open login Page
   When I submit login form
   Then I should see homePage