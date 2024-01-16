const friendList = ['sajid', 'mamun', 'kamal', 'jubayer bin rased', 'Chinku'];

const longestName = friendList.reduce((longest, currentName) => currentName.length > longest.length ? currentName : longest, '');

console.log(longestName);