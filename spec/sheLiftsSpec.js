describe('sheLifts', function() {
  var app;
  beforeEach(function() {
    app = new SheLifts();
  });

  describe('Reps', function() {
    it('has a default of 0', function() {
      expect(app._reps).toEqual(0);
    });
  });

});
