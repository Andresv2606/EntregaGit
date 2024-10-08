document.getElementById('payroll-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const grossSalary = parseFloat(document.getElementById('grossSalary').value);
    const deductions = parseFloat(document.getElementById('deductions').value);

    const netSalary = grossSalary - deductions;

    document.getElementById('result').textContent = `Salario Neto: $${netSalary.toFixed(2)}`;
});
