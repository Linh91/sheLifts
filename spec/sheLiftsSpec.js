describe('sheLifts', function() {
  var app;
  beforeEach(function() {
    app = new SheLifts();
  });

  describe('Reps', function() {
    it('has a default of 0', function() {
      expect(app._reps).toEqual(0);
    });

    it('can be increased with the addRep function', function() {
      app.addRep(1);
      expect(app._reps).toEqual(1);
    });

    it('can be decreased with the lessRep function', function() {
      app.addRep(5);
      app.lessRep(1);
      expect(app._reps).toEqual(4);
    });

    it('can not be set lower than 0', function() {
      app.lessRep(1);
      expect(app._reps).toEqual(0);
    });
  });

});
