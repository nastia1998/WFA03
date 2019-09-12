var Computer = function(manufacturer, processor) {
  this.manufacturer = manufacturer;
  this.processor = processor;

  this.getManufacturer = function() {
    return this.manufacturer;
  };
  this.setManufacturer = function(newManufacturer) {
    this.manufacturer = newManufacturer;
  };

  this.processor = function() {
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
