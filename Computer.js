var Computer = function(manufacturer, processor) {
  this.manufacturer = manufacturer;
  this.processor = processor;

  this.getManufacturer = function() {
    return this.manufacturer;
  };
  this.setManufacturer = function(newManufacturer) {
    this.manufacturer = newManufacturer;
  };

  this.getProcessor = function() {
    return this.processor;
  };
  this.setProcessor = function(newProcessor) {
    this.processor = newProcessor;
  };
};

var Ultrabook = function(manufacturer, processor, hardDiskSize) {
  Computer.apply(this, arguments);
  this.hardDiskSize = hardDiskSize;

  this.getHardDiskSize = function() {
    return this.hardDiskSize;
  };
  this.setHardDiskSize = function(newHardDiskSize) {
    this.hardDiskSize = newHardDiskSize;
  };
};

var ComputingServer = function(manufacturer, processor, numOfProcessorCores) {
  Computer.apply(this, arguments);
  this.numOfProcessorCores = numOfProcessorCores;

  this.getNumOfProcessorCores = function() {
    return this.numOfProcessorCores;
  };
  this.setNumOfProcessorCores = function(newNumOfProcessorCores) {
    this.numOfProcessorCores = newNumOfProcessorCores;
  };
};

Ultrabook.prototype = Object.create(Computer.prototype);
Ultrabook.prototype.constructor = Ultrabook;

ComputingServer.prototype = Object.create(Computer.prototype);
ComputingServer.prototype.constructor = ComputingServer;

Computer.prototype.getInfo = function() {
  return [this.manufacturer, this.processor];
};

Ultrabook.prototype.getInfo = function() {
  return [this.hardDiskSize, this.manufacturer, this.processor];
};

ComputingServer.prototype.getInfo = function() {
  return [this.numOfProcessorCores, this.manufacturer, this.processor];
};

var computer = new Computer("HP", "AMD");
var ultrabook = new Ultrabook("Lenovo", "Intel", 256);
var computingServer = new ComputingServer("ASUS", "Intel", 4);

console.log(computer.getInfo());
console.log(ultrabook.getInfo());
console.log(computingServer.getInfo());
