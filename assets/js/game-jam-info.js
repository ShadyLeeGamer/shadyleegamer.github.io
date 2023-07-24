class GameJamInfo {
    constructor(theme, duration, teamMembers, role) {
      this.theme = theme;
      this.duration = duration;
      this.teamMembers = teamMembers;
      this.role = role;
    }
  }

  let gameJamInfos = new Map();
  gameJamInfos.set('mini-jam-83',
  new GameJamInfo(
    `Dread`,
    `3`,
    `4`,
    `Lead programmer, Unity integration`)
  );
  gameJamInfos.set('swords-and-fangs',
  new GameJamInfo(
    `Dracula`,
    `21`,
    `4`,
    `Lead programmer, Unity integration`)
  );
  gameJamInfos.set('disaster-is-coming',
    new GameJamInfo(
    `'Coming soon'`,
    `3`,
    `3`,
    `Lead programmer, Unity integration`
    )
  );

  let gameJameInfoElements = document.querySelectorAll('.game-jam-info');

  for (let i = 0; i < gameJameInfoElements.length; i++) {
    let element = gameJameInfoElements[i];
    let info = gameJamInfos.get(element.id);
    element.innerHTML = `
    <table class="game-jam-info">
        <tr>
            <th>Theme</th>
            <td>${info.theme}</td>
        </tr>
        <tr>
            <th>Duration</th>
            <td>${info.duration}</td>
        </tr>
        <tr>
            <th>Team members</th>
            <td>${info.teamMembers}</td>
        </tr>
        <tr>
            <th>Role</th>
            <td>${info.role}</td> <!-- Corrected typo "rolsde" to "role" -->
        </tr>
    </table>`;
  }