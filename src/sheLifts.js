function SheLifts() {
  this._reps = 0;
};

SheLifts.prototype.addRep = function (num = 1) {
  this._reps += num;
};

SheLifts.prototype.lessRep = function (num = 1) {
  this._reps -= num;
};
