/**
 *
 * @namespace faker.vehicle
 */
var Grocery = function (faker) {
  var self = this;
  var fake = faker.fake;

  /**
   * vehicle
   *
   * @method faker.vehicle.vehicle
   */
  /**
   * manufacturer
   *
   * @method faker.vehicle.manufacturer
   */
  self.household = function () {
    return faker.random.arrayElement(faker.definitions.grocery.household);
  };

  self.household.schema = {
    "description": "Generates a household name.",
    "sampleResults": ["Detergents", "Utensils", "Freshners"]
  };


  /**
   * model
   *
   * @method faker.vehicle.model
   */
  self.personalcare = function () {
    return faker.random.arrayElement(faker.definitions.grocery.personalcare);
  };

  self.personalcare.schema = {
    "description": "Generates a grocery personalcare.",
    "sampleResults": ["Soap", "Bodywash", "Facewash"]
  };

  /**
   * type
   *
   * @method faker.vehicle.type
   */
  self.snacks = function () {
    return faker.random.arrayElement(faker.definitions.grocery.snacks);
  };

  self.snacks.schema = {
    "description": "Generates a grocery snacks.",
    "sampleResults": ["Chips", "biscuits", "Tea powder", "Bread"]
  };

  /**
   * fuel
   *
   * @method faker.vehicle.fuel
   */
  self.staples = function () {
    return faker.random.arrayElement(faker.definitions.grocery.staples);
  };

  self.staples.schema = {
    "description": "Generates a staples snacks.",
    "sampleResults": ["Pulses", "Ghee", "Oil"]
  };

  /**
   * vin
   *
   * @method faker.vehicle.vin
   */
  
};

module["exports"] = Grocery;
