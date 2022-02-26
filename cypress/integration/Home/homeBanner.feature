Feature: Home banner section

    As a user
    I want to be able to see home banner section
    so that i can book accordingly

    @regression @smoke @home-banner
    Scenario: TC006 - Verify that banner contains a title, subtitle and CTA
        Given the user navigates to '/'
        When the field 'banner-title' is visible
        And the field 'banner-title' contains 'luxurious rooms'
        And the field 'banner-subtitle' is visible
        And the field 'banner-subtitle' contains 'deluxe rooms starting at $299'
        And the field 'banner-cta-btn' is visible
        And the field 'banner-cta-btn' contains 'our rooms'
        And the user clicks on 'banner-cta-btn'
        Then the url contains '/rooms'