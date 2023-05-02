function findTax(salary) {
    let tax = 0;
    
    try {
        if (salary < 0) {
            throw new ValidationError("Salary not valid");
        }

        switch (true) {
            case salary <= 500000:
            tax = 0;
            break;
            
            case salary <= 1000000:
            tax = salary * 0.1;
            break;
            
            case salary <= 1500000:
            tax = salary * 0.2;
            break;
            
            default:
            tax = salary * 0.3;
            break;
        }
    }
    
    catch (err) {
        return err.message;
    }

    return tax;
}