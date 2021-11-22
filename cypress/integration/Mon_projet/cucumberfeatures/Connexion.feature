Feature: Connexion


Scenario: En tant qu'utilisateur je souhaite me connecter a mon compte
    Given Je me rends sur le site GameCash
    When Je clique sur le menu Compte
    And Je renseigne des identifiants valide
    Then Je me connecte