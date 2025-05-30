// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal

// X Old way with Date
// const date = new Date()

// date.setHours(date.getHours() + 2)

// console.log("date: ", date.toTimeString())
// const futureDate = new Date(date)
// futureDate.setDate(date.getDate() + 15)
// futureDate.setHours(date.getHours() + 8)

// New way with Temporal API
// const now = Temporal.Now.plainDateTimeISO();
// const futureDate = now.add(f days: 15, hours: 8 });

// Immutable, intuitive, and timezone-aware!
// Want 3 months and 5 days before? Simple!
// const pastDate = now.subtract({ months: 3, days: 5 })
