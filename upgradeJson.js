// This script will rewrite details.json with a new date time base
let maxDate = new Date(2016, 7, 30).getTime() / 1000;

let fs = require('fs');
let details = JSON.parse(fs.readFileSync('details.json'));

let datesArray = details.map((detail) => detail.to);
let currentMaxDate = Math.max(...datesArray);
let dateDifference = maxDate - currentMaxDate;

let updateDetails = details.map(detail => {
    return {
        id: detail.id,
        typeId: detail.typeId,
        comment: detail.comment,
        from: detail.from + dateDifference,
        to: detail.to + dateDifference,
        activityId: detail.activityId,
        revision: detail.revision,
        type: detail.type
    }
});

fs.writeFileSync('details.json', JSON.stringify(updateDetails, null, 2));

console.info('Old Date Range')
let detailMin = details.map(detail => detail.to);
console.log(`Start: ${new Date(Math.min(...detailMin) * 1000 )}`);

let detailMax = Math.max(...details.map((detail) => detail.to));
console.log(`End: ${new Date(detailMax * 1000 )}`);

console.info('\nNew Date Range');
let updateMin = Math.min(...updateDetails.map((detail) => detail.to));
console.log(`Start: ${new Date(updateMin * 1000 )}`);

let updateMax = Math.max(...updateDetails.map((detail) => detail.to));
console.log(`End: ${new Date(updateMax * 1000 )}`);