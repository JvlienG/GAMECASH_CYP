Feature: Translate
    Verify

Scenario Outline: Translation
    Given I open the translation page
    When I change translation language from "<source>" to "<target>"
    And I write "<sentence>" in the translation input
    Then The translation output should equal "<translated>"
    Examples: 
        | source    | target    | sentence  | translated    |
        | en        | FR        | Thanks    | Merci         |