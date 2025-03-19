function mysteryOperation() {
	const outcome = Math.random(); // This generates a random number between 0 and 1.
	if (outcome < 0.5) {
		console.log("The operation is completed successfully!"); //if value is less than 0.5 it is a success
	} else {
		throw new Error("The operation has failed mysteriously!"); //if value is more than 0.5 the mission failed and puts out an error
	}
}

// Constants for flexibility
const NUM_OPERATIONS = 20;
const DAYS_ON_SUCCESS = 13;
const DAYS_ON_FAILURE = 1;
const DAYS_ON_ATTENDANCE = 3;

function calculateVacationDays() {
	let totalVacationDays = 0;

	for (let i = 0; i < NUM_OPERATIONS; i++) {
		try {
			mysteryOperation();
			totalVacationDays += DAYS_ON_SUCCESS; //if mysteryOperation is successful, it will +13 to totalVacationDays
		} catch (error) {
			console.log(error.message);
			totalVacationDays += DAYS_ON_FAILURE;  //If mysteryOperation failed, it will only +1 to totalVacationDays
		} finally {
			totalVacationDays += DAYS_ON_ATTENDANCE; //Finally will +3 to totalVacationdays whether it failed or succeeded
		}
	}

	console.log(`Total vacation days earned: ${totalVacationDays}`);
}

calculateVacationDays(); //this calls the function to execute and see the result, otherwise it will just be defined but never run

