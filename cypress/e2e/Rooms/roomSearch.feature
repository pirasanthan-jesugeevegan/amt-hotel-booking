Feature: Room - Search Function

    As a user
    I want to be able to search a room
    so that i can book accordingly

    @regression @smoke @room-search
    Scenario Outline: TC008 - Verify that search area has <elementName> element
        Given the user navigates to '/rooms'
        When the field '<elements>' is visible
        Then the field '<elements>' contains '<elementName>'
        Examples: elementName
            | elementName      | elements                      |
            | room type        | search-filter-room-type-label |
            | Guests           | search-filter-guest-label     |
            | room price $,600 | search-filter-price-label     |
            | room size        | search-filter-size-label      |