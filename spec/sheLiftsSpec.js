describe('sheLifts', function() {
  var app;
  beforeEach(function() {
    app = new SheLifts();
  });

  describe('Reps', function() {
    it('has a default of 0', function() {
      expect(app._reps).toEqual(0);
    });

    it('can be increased with the up function', function() {
      app.addReps(1);
      expect(app._reps).toEqual(1);
    });
  });

});
