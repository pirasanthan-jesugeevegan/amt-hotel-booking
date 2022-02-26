Feature: Services Section

    As a user
    I want to be able to see all the services
    so that i can book accordingly

    @regression @smoke @services
    Scenario Outline: TC004 - Verify the service section contains <serviceValue>
        Given the user navigates to '/'
        When the field '<serviceElements>' is visible
        And the field '<serviceElements>' contains '<serviceValue>'
        Then the field '<descriptionElements>' is visible
        And the field '<descriptionElements>' contains '<descriptionValue>'
        Examples: elementName
            | serviceValue   | serviceElements | descriptionValue                                                        | descriptionElements |
            | free cocktails | service-title   | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod | service-description |
            | Endless Hiking | service-title   | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod | service-description |
            | Free Shuttle   | service-title   | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod | service-description |
            | Strongest Beer | service-title   | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod | service-description |

