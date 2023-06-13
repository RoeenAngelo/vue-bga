
<script setup>
    const leaderboard =  [
          { id: 1, name: 'Player 1', score: 100 },
          { id: 2, name: 'Player 2', score: 90 },
          { id: 3, name: 'Player 3', score: 80 },
          { id: 4, name: 'Player 4', score: 70 },
          { id: 5, name: 'Player 5', score: 960 },
          { id: 6, name: 'Player 6', score: 860 },
          { id: 7, name: 'Player 7', score: 1060 },
          { id: 8, name: 'Player 8', score: 300 },
          { id: 9, name: 'Player 9', score: 3560 },
          { id: 10, name: 'Player 10', score: 5360 },
          { id: 11, name: 'Player  11', score: 400 },
          { id: 12, name: 'Player 12', score: 63 },
          { id: 13, name: 'Player 13', score: 64 },
          { id: 14, name: 'Player 14', score: 65 },
          { id: 15, name: 'Player 15', score: 66 },
          { id: 16, name: 'Player 16', score: 50 },
          { id: 17, name: 'Player 17', score: 60 },
          { id: 18, name: 'Player 18', score: 430 },
          { id: 19, name: 'Player 19', score: 606 },
          { id: 20, name: 'Player 20', score: 6053 },
          { id: 21, name: 'Player 21', score: 6066 },
          { id: 22, name: 'Player 22', score: 609 },
          { id: 23, name: 'Player 23', score: 6006 },
          { id: 24, name: 'Player 24', score: 6033 },
          { id: 25, name: 'Player 25', score: 6069 },
        ]

    const sortedLeaderboard = leaderboard.sort((a,b) => b.score - a.score)
</script>
<template>
    <div class="leaderboard">
      <h3>Leaderboard</h3>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in sortedLeaderboard" :key="player.id">
            <td>{{ index + 1 }}</td>
            <td>{{ player.name }}</td>
            <td>{{ player.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

  
  
  <style scoped>
  .leaderboard {
    width: 100%;
    margin: 0 auto;
    background-color: white;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    font-size: .8em;
  }
  
  th {
    background-color: #f2f2f2;
  }

  h3 {
    padding: 20px;
    text-align: center;
  }
  </style>
  