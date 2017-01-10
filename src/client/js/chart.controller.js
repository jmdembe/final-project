(function() {
  'use strict';

  angular.module('ifeel')
    .controller('ChartController', ChartController);

    ChartController.$inject = ['MoodService'];

    function ChartController(MoodService) {
      this.labels = [];
      this.data = [];
      var vm = this;

      MoodService.getAll()
        .then(function addDataToScope(moodRecords){
          console.log('got mood data', moodRecords);
          vm.labels = moodRecords.map(function getLabels(moodRecord) {
            return moodRecord.createTime;
          });
          vm.data = moodRecords.map(function getData(moodRecord) {
            if (moodRecord.mood === 'angry') {
              return 1;
            } else if (moodRecord.mood === 'notgood') {
              return 2;
            } else if (moodRecord.mood === 'okay') {
              return 3;
            } else if (moodRecord.mood === 'good') {
              return 4;
            } else {
              return 5;
            }
          });
        });

    }
}());
