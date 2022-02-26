Feature: Nav Function

    As a user
    I want to navigate through the application
    so that i am able to access movies

    @regression @smoke @navigation
    Scenario Outline: TC001 - Verify nav contains <elementName>
        Given the user navigates to '/'
        When the field '<elements>' is visible
        Then the field '<elements>' contains '<value>'
        Examples: elementName
            | elementName | elements      | value |
            | home        | nav-bar-home  | Home  |
            | rooms       | nav-bar-rooms | Rooms |

    @regression @smoke @navigation
    Scenario Outline: TC002 - Verify nav contains <elementName>
        Given the user navigates to '/'
        When the user clicks on '<elements>'
        Then the url contains '<url>'
        Examples: elementName
            | elementName | elements      | url    |
            | home        | nav-bar-home  | /      |
            | rooms       | nav-bar-rooms | /rooms |


    @regression @smoke
    Scenario: TC003 - Verify that the logo will navigate to home page
        Given the user navigates to '/'
        When the user clicks on 'nav-bar-rooms'
        Then the url contains '/rooms'
        And the user clicks on 'nav-bar-logo'
        Then the url contains '/'