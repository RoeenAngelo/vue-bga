
<script setup>

    function getFourBestScores(scoresArr) {
      const best4Scores = scoresArr.sort((a,b) => b - a).slice(0,4)
      const best4ScoresTotal = best4Scores.reduce((p,c) => p + c, 0)
      return best4ScoresTotal
    }      

    
    const players =  [
          { id: 1, name: 'Justin', scores: [87.5, 600, 51, 55, 105, 5], get total() { return getFourBestScores(this.scores)} },
          { id: 2, name: 'Aaron',  scores: [500,66,  67.5, 43.056, 105, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 3, name: 'Daniel',  scores: [67.5, 66, 500, 43.056, 42.063, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 4, name: 'Morris',  scores: [300, 66, 67.5, 43.056, 70, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 5, name: 'Niehmer',  scores: [162.5, 41.078, 245, 71.667, 42.063, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 6, name: 'Dayza',  scores: [77.5, 230, 85, 167.5, 162.5, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 7, name: 'Des',  scores: [67.5, 230, 67.5, 115, 55, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 8, name: 'George',  scores: [162.5, 101.333, 85, 109.167, 42.063, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 9, name: 'Aldrich',  scores: [43, 48.733, 245, 101.945, 80, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 10, name: 'Arvin',  scores: [87.5, 85, 85, 74.167, 162.5, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 11, name: 'Pat',  scores: [100, 101.333, 54, 83.611, 500, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 12, name: 'Sam',  scores: [77.5, 120, 45, 58, 90, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 13, name: 'Chris', scores: [58.5, 74.5, 100, 167.5, 42.063, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 14, name: 'Ed',  scores: [51, 58, 122.5, 43.056, 75, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 15, name: 'Alan',  scores: [49, 54, 122.5, 43.056, 42.063, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 16, name: 'Joe', scores: [110, 58, 48, 70.833, 85, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 17, name: 'Tim',  scores: [37.167, 85, 67.5, 91.111, 65, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 18, name: 'Kyle',  scores: [37.167, 101.333, 48, 43.056, 300, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 19, name: 'Jordan',  scores: [58.5, 61, 43, 43.056, 42.063, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 20, name: 'Ezra',  scores: [37.167, 54, 67.5, 115, 42.063, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 21, name: 'Galvin', scores: [47, 51, 57, 300, 42.063, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 22, name: 'James',  scores: [45, 74.5, 35.5, 59, 57, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 23, name: 'Jason',  scores: [54, 46.467, 39, 43.056, 42.063, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 24, name: 'Ronald',  scores: [41, 41.078, 37, 43.056, 60, 0], get total() { return getFourBestScores(this.scores)} },
          { id: 25, name: 'Ro', scores: [54, 44.2, 54, 53, 53, 0], get total() { return getFourBestScores(this.scores)} },
        ]

    const leaderboard = players.sort((a,b) => b.total - a.total)


    // const leaderboard =  [
    //       { id: 1, name: 'Justin', score1: 87.5, score2: 600,  51, score4: 55, score5: 105, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 2, name: 'Aaron', score1: 500, score2: 66, score3: 67.5, score4: 43.056, score5: 105, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 3, name: 'Daniel', score1: 67.5, score2: 66, score3: 500, score4: 43.056, score5: 42.063, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 4, name: 'Morris', score1: 300, score2: 66, score3: 67.5, score4: 43.056, score5: 70, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 5, name: 'Niehmer', score1: 162.5, score2: 41.078, score3: 245, score4: 71.667, score5: 42.063, score6: 0,get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 6, name: 'Dayza', score1: 77.5, score2: 230	, score3: 85, score4: 167.5, score5: 162.5, score6: 0,get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 7, name: 'Des', score1: 67.5, score2: 230, score3: 67.5, score4: 115, score5: 55, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 8, name: 'George', score1: 162.5, score2: 101.333, score3: 85, score4: 109.167, score5: 42.063, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 9, name: 'Aldrich', score1: 43, score2: 48.733, score3: 245, score4: 101.945, score5: 80, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 10, name: 'Arvin', score1: 87.5, score2: 85, score3: 85, score4: 74.167, score5: 162.5, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 11, name: 'Pat', score1: 100, score2: 101.333, score3: 54, score4: 83.611, score5: 500, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 12, name: 'Sam', score1: 77.5, score2: 120, score3: 45, score4: 58, score5: 90, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 13, name: 'Chris', score1: 58.5, score2: 74.5, score3: 100, score4: 167.5, score5: 42.063, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 14, name: 'Ed', score1: 51, score2: 58, score3: 122.5, score4: 43.056, score5: 75, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 15, name: 'Alan', score1: 49, score2: 54, score3: 122.5, score4: 43.056, score5: 42.063, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 16, name: 'Joe', score1: 110, score2: 58, score3: 48, score4: 70.833, score5: 85, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 17, name: 'Tim', score1: 37.167, score2: 85, score3: 67.5, score4: 91.111, score5: 65, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 18, name: 'Kyle', score1: 37.167, score2: 101.333, score3: 48, score4: 43.056, score5: 300, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 19, name: 'Jordan', score1: 58.5, score2: 61, score3: 43, score4: 43.056, score5: 42.063, score6: 0,get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6}  },
    //       { id: 20, name: 'Ezra', score1: 37.167, score2: 54, score3: 67.5, score4: 115, score5: 42.063, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 21, name: 'Galvin', score1: 47, score2: 51, score3: 57, score4: 300, score5: 42.063, score6: 0,get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 22, name: 'James', score1: 45, score2: 74.5, score3: 35.5, score4: 59, score5: 57, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 23, name: 'Jason', score1: 54, score2: 46.467, score3: 39, score4: 43.056, score5: 42.063, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 24, name: 'Ronald', score1: 41, score2: 41.078, score3: 37, score4:43.056, score5: 60, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //       { id: 25, name: 'Ro', score1: 54, score2: 44.2, score3: 54, score4: 53, score5: 53, score6: 0, get total() { return this.score1 + this.score2 + this.score3 + this.score4 + this.score5 + this.score6} },
    //     ]

    // const leaderboard = leaderboard.sort((a,b) => b.total - a.total)

</script>
<template>
    <section class="section-container">
      <h3>Leaderboard</h3>
      <div class="leaderboard-table">
        <table>
            <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>PnR</th>
              <th>Masters</th>
              <th>PEJA</th>
              <th>WSOG</th>
              <th>LL</th>
              <th>Kayami</th>
              <th class="total">Total(4)</th>
            </tr>
            </thead>
            <tbody>
              <tr v-for="(player, index) in leaderboard" :key="player.id">
                <td>{{ index + 1 }}</td>
                <td>{{ player.name }}</td>
                <td>{{ filters.formatScore(player.scores[0]) }}</td>
                <td>{{ filters.formatScore(player.scores[1])}}</td>
                <td>{{ filters.formatScore(player.scores[2]) }}</td>
                <td>{{ filters.formatScore(player.scores[3]) }}</td>
                <td>{{ filters.formatScore(player.scores[4]) }}</td>
                <td>{{ filters.formatScore(player.scores[5]) }}</td>
                <td style="font-weight: bold ;">{{ filters.formatScore(player.total) }}</td>
              </tr>
            </tbody>
        </table>
    	</div>
    </section>
  </template>

  
  
  <style lang="scss" scoped>

  table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 4px 16px -8px rgba(0, 0, 0, 0.4);
    table-layout: fixed;
  }

  tr {
    text-align: center;
  }
 
  th,
  td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    font-size: .45rem;
    
  }

  .total {
    overflow-wrap: normal;
  }

  th {
    background-color: #f2f2f2;
    padding: 8px 3px;
  }

	.leaderboard-table {
		width: 90%;
    border-radius: 8px 8px 8px 8px;
	}

  @media (min-width: 700px) {
    th,
  td {
    padding: 15px;
    border-bottom: 1px solid #ddd;
    font-size: .8em;
    
  }
  }

  
  </style>
  