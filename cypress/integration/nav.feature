Feature: Nav Function

    As a user
    I want to navigate through the application
    so that i am able to access movies

    Scenario Outline: TC001 - Verify nav contains Home & Rooms <elementName>
        Given the user navigates to '/'
        When the field '<elements>' is visible
        Then the field '<elements>' contains '<value>'
        Examples: elementName
            | elementName | elements      | value |
            | home        | nav-bar-home  | Home  |
            | rooms       | nav-bar-rooms | Rooms |
