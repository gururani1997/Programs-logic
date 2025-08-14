function calculateCost(no_of_peoples, time_slot, meal_type) {
  let tableList = [
    { timeSlot: "12PM", availableSeats: 20 },
    { timeSlot: "3PM", availableSeats: 15 },
    { timeSlot: "7PM", availableSeats: 25 },
    { timeSlot: "9PM", availableSeats: 10 },
  ];
  const menu = [
    {
      meal_type: "lunch",
      costPerPerson: 20,
    },
    {
      meal_type: "dinner",
      costPerPerson: 35,
    },
  ];
  if (no_of_peoples < 1) {
    console.log("No Customer entered");
    return;
  }

  const isValidTime = tableList.find((val) => val.timeSlot === time_slot);
  if (!isValidTime) {
    console.log("Order is not available for this time slot");
    return;
  }

  const isValidMeal = menu.find((val) => val.meal_type === meal_type);
  if (!isValidMeal) {
    console.log("Order is not available for this Meal");
    return;
  }

  if (no_of_peoples > isValidTime?.availableSeats) {
    console.log("Seats are limited");
    return;
  }

  const totalAmount = no_of_peoples * isValidMeal?.costPerPerson;

  tableList = tableList.map((val) => {
    if (val.timeSlot === time_slot)
      return {
        timeSlot: time_slot,
        availableSeats: val.availableSeats - no_of_peoples,
      };
    else return val;
  });
  return {
    remainingSeats: tableList,
    totalAmount: totalAmount,
  };
}

// console.log(calculateCost(4, "12PM", "Lunch"));

function runTest(description, fn) {
  try {
    console.log(`\n✅ ${description}`);
    console.log(fn());
  } catch (err) {
    console.log(`❌ ${description}`);
    console.log(err.message);
  }
}

runTest("Valid: 5 diners at 12PM lunch", () =>
  calculateCost(5, "12PM", "lunch")
);
runTest("Valid: 8 diners at 7PM dinner", () =>
  calculateCost(8, "7PM", "dinner")
);
runTest("Invalid: 11 diners at 9PM", () => calculateCost(11, "9PM", "dinner"));
runTest("Invalid: wrong meal type", () => calculateCost(5, "12PM", "snack"));
runTest("Edge: 0 diners", () => calculateCost(0, "12PM", "lunch"));
