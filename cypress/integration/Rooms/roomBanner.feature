Feature: Room - Banner section

    As a user
    I want to be able to see room banner section
    so that i can book accordingly

    @regression @smoke @room-banner
    Scenario: TC007 - Verify that banner contains a title and CTA
        Given the user navigates to '/rooms'
        When the field 'banner-title' is visible
        And the field 'banner-title' contains 'our rooms'
        And the field 'banner-cta-btn' contains 'return home'
        And the user clicks on 'banner-cta-btn'
        Then the url contains '/'