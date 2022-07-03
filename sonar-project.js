const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://localhost:9000',
  options: {
    'sonar.projectKey': 'pokedex',
    'sonar.projectName': 'pokedex',
    'sonar.projectVersion': '1.0.0',
  },
});
