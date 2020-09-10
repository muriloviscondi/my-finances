function handleTotalRevenues(values) {
  const revenue = [];

  values.forEach((value) => {
    if (value.type.toLowerCase() === 'revenue') {
      revenue.push(value);
    }
  });

  const totalRevenue = revenue.reduce((acc, curr) => {
    return acc + Number(curr.value);
  }, 0);

  console.log(totalRevenue);
  return totalRevenue;
}

function handleTotalExpenses(values) {
  const revenue = [];

  values.forEach((value) => {
    if (value.type.toLowerCase() === 'expense') {
      revenue.push(value);
    }
  });

  const totalRevenue = revenue.reduce((acc, curr) => {
    return acc + Number(curr.value);
  }, 0);

  console.log(totalRevenue);
  return totalRevenue;
}

function handleResults(values) {
  const results = handleTotalRevenues(values) - handleTotalExpenses(values);

  return results;
}

export { handleTotalRevenues, handleTotalExpenses, handleResults };
