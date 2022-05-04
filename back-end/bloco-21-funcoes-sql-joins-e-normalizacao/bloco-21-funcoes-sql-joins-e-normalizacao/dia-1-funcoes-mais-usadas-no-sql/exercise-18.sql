SELECT
	first_name,
    	last_name,
    	DATEDIFF(CURRENT_DATE(), hire_date) AS days_working
FROM hr.employees;
