Feature: Featured Rooms Function

    As a user
    I want to be able to see featured rooms
    so that i can book accordingly

    @regression @smoke @featured-rooms
    Scenario Outline: TC005 - Verify that the featured rooms has the max of three rooms displayed
        Given the user navigates to '/'
        When the field 'feature-room-card' is visible
        And the field 'feature-room-card' contains '<roomName>'
        Examples: elementName
            | roomName                     |
            | double deluxe,$400,per night |
            | family deluxe,$500,per night |
            | presidential,$600,per night  |
