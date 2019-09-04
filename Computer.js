var Computer = function (_manufacturer, _processor) {
    this.manufacturer = manufacturer;
    this.processor = _processor;
    this.hardDiskSize = 256;
    this.numOfProcessorCores = 2;

    this.getManufacturer = function() {
        return this.manufacturer;
    }
    this.setManufacturer = function(_newManufacturer) {
        this.manufacturer = _newManufacturer;
    }

    this.processor = function() {
        return this.processor;
    }
    this.setProcessor = function(_newProcessor) {
        this.processor = _newProcessor;
    }

    this.getHardDiskSize = function() {
        return this.hardDiskSize;
    }
    this.setHardDiskSize = function(_newHardDiskSize) {
        this.hardDiskSize = _newHardDiskSize;
    }

    this.getNumOfProcessorCores = function() {
        return this.numOfProcessorCores;
    }
    this.setNumOfProcessorCores = function(_newNumOfProcessorCores) {
        this.numOfProcessorCores = _newNumOfProcessorCores;
    }
}