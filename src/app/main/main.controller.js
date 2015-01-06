'use strict';

angular.module('sfmaker')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      {
        'strengthNum': 'strength1',
        'title': '1st Strength'
      },
      {
        'strengthNum': 'strength2',
        'title': '2nd Strength'
      },
      {
        'strengthNum': 'strength3',
        'title': '3rd Strength'
      },
      {
        'strengthNum': 'strength4',
        'title': '4th Strength'
      },
      {
        'strengthNum': 'strength5',
        'title': '5th Strength'
      }
    ];

    $scope.strength = [
      {'name': 'Achiever'},
      {'name': 'Activator'},
      {'name': 'Adaptability'},
      {'name': 'Analytical'},
      {'name': 'Arranger'},
      {'name': 'Belief'},
      {'name': 'Command'},
      {'name': 'Communication'},
      {'name': 'Competition'},
      {'name': 'Connectedness'},
      {'name': 'Consistency / Fairness'},
      {'name': 'Context'},
      {'name': 'Deliberative'},
      {'name': 'Developer'},
      {'name': 'Discipline'},
      {'name': 'Empathy'},
      {'name': 'Focus'},
      {'name': 'Futuristic'},
      {'name': 'Harmony'},
      {'name': 'Ideation'},
      {'name': 'Inclusiveness / Includer'},
      {'name': 'Individualization'},
      {'name': 'Input'},
      {'name': 'Intellection'},
      {'name': 'Learner'},
      {'name': 'Maximizer'},
      {'name': 'Positivity'},
      {'name': 'Relator'},
      {'name': 'Responsibility'},
      {'name': 'Restorative'},
      {'name': 'Self-Assurance'},
      {'name': 'Significance'},
      {'name': 'Strategic'},
      {'name': 'Woo' }
    ];

      this.countries = [
        {label: 'USA', id: 1},
        {label: 'India', id: 2},
        {label: 'Other', id: 3}
      ];
      this.selectedCountryId = 2;
      this.selectedCountry = this.countries[1];

  });
